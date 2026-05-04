#!/usr/bin/env node
/**
 * Logs a user-requested change during carousel iteration.
 * Appends to improvement-log.json and checks for recurring patterns.
 *
 * Usage:
 *   node log-change.mjs --topic "X" --slide "3" --issue "..." --fix "..." --category "fonts"
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const LOG_PATH = join(__dir, 'improvement-log.json');

const VALID_CATEGORIES = ['fonts','typography','color','layout','content','caption','cta','export'];
const PATTERN_THRESHOLD = 3; // surface alert after this many occurrences

function parseArgs() {
  const args = process.argv.slice(2);
  const result = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      result[args[i].slice(2)] = args[i + 1];
      i++;
    }
  }
  return result;
}

function loadLog() {
  if (!existsSync(LOG_PATH)) return { sessions: [], total_changes: 0 };
  try {
    return JSON.parse(readFileSync(LOG_PATH, 'utf-8'));
  } catch {
    return { sessions: [], total_changes: 0 };
  }
}

function saveLog(log) {
  writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
}

function countByCategory(log) {
  const counts = {};
  for (const session of log.sessions) {
    for (const change of session.changes) {
      counts[change.category] = (counts[change.category] || 0) + 1;
    }
  }
  return counts;
}

function sessionCount(log, category) {
  return log.sessions.filter(s => s.changes.some(c => c.category === category)).length;
}

function checkPatterns(log) {
  const categoryCounts = countByCategory(log);
  const patterns = [];

  for (const [category, count] of Object.entries(categoryCounts)) {
    const sessions = sessionCount(log, category);
    if (count >= PATTERN_THRESHOLD) {
      patterns.push({ category, occurrences: count, sessions });
    }
  }

  return patterns;
}

function main() {
  const args = parseArgs();
  const { topic, slide, issue, fix, category } = args;

  if (!topic || !slide || !issue || !fix || !category) {
    console.error('Missing required args: --topic --slide --issue --fix --category');
    process.exit(1);
  }

  if (!VALID_CATEGORIES.includes(category)) {
    console.error(`Invalid category "${category}". Valid: ${VALID_CATEGORIES.join(', ')}`);
    process.exit(1);
  }

  const log = loadLog();

  // Find or create session for today + topic
  const today = new Date().toISOString().split('T')[0];
  let session = log.sessions.find(s => s.date === today && s.topic === topic);

  if (!session) {
    session = { date: today, topic, changes: [] };
    log.sessions.push(session);
  }

  session.changes.push({ slide, issue, fix, category, timestamp: new Date().toISOString() });
  log.total_changes = (log.total_changes || 0) + 1;

  saveLog(log);
  console.log(`✓ Logged: [${category}] slide ${slide} — "${issue}"`);

  // Check for patterns
  const patterns = checkPatterns(log);
  if (patterns.length > 0) {
    console.log('\n⚠ PATTERN DETECTED:');
    for (const p of patterns) {
      console.log(`  "${p.category}" — ${p.occurrences} occurrences across ${p.sessions} session(s)`);
    }
    console.log('\nRun to see proposed SKILL.md improvements:');
    console.log(`  node ${join(__dir, 'analyze-patterns.mjs')}`);
  }

  console.log(`\nTotal logged changes: ${log.total_changes}`);
}

main();
