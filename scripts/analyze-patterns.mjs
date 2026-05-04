#!/usr/bin/env node
/**
 * Analyzes improvement-log.json to find recurring issues and propose
 * targeted edits to SKILL.md that would prevent each pattern.
 *
 * Usage:
 *   node analyze-patterns.mjs [--min-occurrences 3]
 */

import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const LOG_PATH = join(__dir, 'improvement-log.json');
const SKILL_PATH = join(__dir, '..', 'SKILL.md');

const MIN_OCCURRENCES = parseInt(process.argv[3] || '3', 10);

const PATTERN_TO_FIX = {
  fonts: {
    section: 'Section 3 — DESIGN (Typography hard rules)',
    diagnosis: 'CDN fonts unreliable when HTML loaded via file:// protocol in Playwright.',
    proposed_change: 'Add rule: always embed fonts inline using base64 @font-face, never rely on CDN for Playwright export. Provide a self-contained font stack fallback: "Cabinet Grotesk", ui-sans-serif, system-ui, -apple-system.',
    search_hint: 'Look for: <!-- Font: Cabinet Grotesk or Satoshi via CDN -->'
  },
  typography: {
    section: 'Section 3 — DESIGN (Typography hard rules)',
    diagnosis: 'clamp() values using vw units map to viewport (1080px), not to a fluid range. Fixed-width 1080px slides need px-anchored type scales.',
    proposed_change: 'Replace clamp display scale with fixed px values: display 72px–96px, body 18px–20px. Remove vw units from type scale entirely.',
    search_hint: 'Look for: Display: `clamp(3.5rem, 5.5vw, 6.5rem)`'
  },
  color: {
    section: 'Section 3 — DESIGN (Color rules)',
    diagnosis: 'Accent color chosen without enough topic-to-mood mapping specificity.',
    proposed_change: 'Expand mood → color mapping table with 8+ topic categories. Add rule: for ambiguous topics, default to slate-based neutral accent (oklch 50% 0.08 250) and ask user to confirm before designing.',
    search_hint: 'Look for: Choose accent color that fits the topic mood'
  },
  layout: {
    section: 'Section 4 — PLAYWRIGHT AUDIT LOOP (inspection table)',
    diagnosis: 'Overflow and clipping issues not caught before audit because slide height is set with `overflow: hidden` on a hard 1350px height.',
    proposed_change: 'Add audit check: after each screenshot, programmatically assert `scrollHeight === 1350` in page.evaluate(). Add to issue table: "scrollHeight > 1350 → content overflows hidden boundary → remove overflow:hidden, debug content height."',
    search_hint: 'Look for: After each screenshot, inspect for:'
  },
  content: {
    section: 'Section 1 — RESEARCH PHASE',
    diagnosis: 'Three search queries miss angles that users later add manually (e.g., regional data, contrarian perspectives, case studies).',
    proposed_change: 'Add a fourth parallel search: "[topic] case study OR example OR failure OR lesson 2024 2025". This surfaces concrete examples that make slides more credible and shareable.',
    search_hint: 'Look for: Run three WebSearch queries in parallel'
  },
  caption: {
    section: 'Section 6 — CAPTION GENERATION',
    diagnosis: 'Keyword density rule (1.5–2%) still produces stuffed-feeling captions when primary + secondary keywords cluster in the same sentence.',
    proposed_change: 'Add sentence-level rule: no sentence may contain more than one tracked keyword. Primary keyword in sentence 1, secondary keywords must be in separate sentences from each other.',
    search_hint: 'Look for: Target density: 1.5–2%'
  },
  cta: {
    section: 'Section 3 — DESIGN (CTA slide)',
    diagnosis: 'Single CTA design (full-bleed accent + page name + handle) feels generic across topics with different aesthetics.',
    proposed_change: 'Add two CTA variants: (A) current full-bleed accent, (B) dark bg with large handle as display type + small page name below. Choose variant based on carousel color palette — light carousels use variant B for contrast, dark carousels use variant A.',
    search_hint: 'Look for: ### CTA slide (always last)'
  },
  export: {
    section: 'Section 5 — PNG EXPORT',
    diagnosis: 'clip coordinates assume slide starts at (0,0) but body padding or margin can offset the slide.',
    proposed_change: 'Before clipping, assert slide position with page.evaluate(() => document.querySelector(".slide.active").getBoundingClientRect()). Use actual x/y from bounding rect in clip params, not hardcoded (0,0).',
    search_hint: 'Look for: clip: { x: 0, y: 0, width: 1080, height: 1350 }'
  }
};

function loadLog() {
  if (!existsSync(LOG_PATH)) {
    console.log('No improvement log found. Run at least one carousel session first.');
    process.exit(0);
  }
  return JSON.parse(readFileSync(LOG_PATH, 'utf-8'));
}

function groupByCategory(log) {
  const groups = {};
  for (const session of log.sessions) {
    for (const change of session.changes) {
      if (!groups[change.category]) groups[change.category] = [];
      groups[change.category].push({ ...change, session_topic: session.topic, session_date: session.date });
    }
  }
  return groups;
}

function uniqueSessions(changes) {
  return new Set(changes.map(c => `${c.session_date}:${c.session_topic}`)).size;
}

function main() {
  const log = loadLog();
  const groups = groupByCategory(log);

  console.log('═══════════════════════════════════════════════════');
  console.log('  INSTAGRAM CAROUSEL SKILL — PATTERN ANALYSIS');
  console.log(`  Log: ${log.total_changes} total changes across ${log.sessions.length} session(s)`);
  console.log('═══════════════════════════════════════════════════\n');

  const patterns = Object.entries(groups)
    .filter(([, changes]) => changes.length >= MIN_OCCURRENCES)
    .sort(([, a], [, b]) => b.length - a.length);

  if (patterns.length === 0) {
    console.log(`No patterns found (threshold: ${MIN_OCCURRENCES}+ occurrences).`);
    console.log('Keep running carousels — patterns emerge after a few sessions.');
    return;
  }

  console.log(`Found ${patterns.length} recurring pattern(s):\n`);

  for (const [category, changes] of patterns) {
    const sessions = uniqueSessions(changes);
    const fix = PATTERN_TO_FIX[category];
    const exampleIssues = [...new Set(changes.map(c => c.issue))].slice(0, 3);

    console.log(`━━━ ${category.toUpperCase()} (${changes.length}× across ${sessions} session(s)) ━━━`);
    console.log(`\nExample issues logged:`);
    exampleIssues.forEach(i => console.log(`  • "${i}"`));

    if (fix) {
      console.log(`\nDiagnosis: ${fix.diagnosis}`);
      console.log(`\nTarget section: ${fix.section}`);
      console.log(`  ${fix.search_hint}`);
      console.log(`\nProposed change:`);
      console.log(`  ${fix.proposed_change}`);
    } else {
      console.log('\nNo automated fix template for this category.');
      console.log('Review the logged issues above and update SKILL.md manually.');
    }

    console.log('');
  }

  console.log('═══════════════════════════════════════════════════');
  console.log('To apply: present proposed changes to user, get approval,');
  console.log('edit SKILL.md, then commit and push:');
  console.log('  cd ~/.claude/skills/instagram-carousel');
  console.log('  git add SKILL.md scripts/improvement-log.json');
  console.log('  git commit -m "fix(skill): address recurring patterns from usage data"');
  console.log('  git push');
  console.log('═══════════════════════════════════════════════════');
}

main();
