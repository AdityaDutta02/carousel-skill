#!/usr/bin/env node
// Build visual previews for every template.
// Reads templates/sources/[name].html, screenshots each slide, composites:
//   cover.webp  — slide 1 alone, 540×W
//   grid.webp   — 2-col contact sheet of 4 sampled slides
//   full.webp   — vertical strip of all slides at 25%
// Outputs to templates/previews/[name]/
//
// Usage:
//   node scripts/build-previews.mjs              # build all
//   node scripts/build-previews.mjs figr-e-system figr-g-spacing   # build subset

import { createRequire } from 'module';
import { mkdir, rm, writeFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/homebrew/lib/node_modules/playwright');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SOURCES = path.join(ROOT, 'templates', 'sources');
const PREVIEWS = path.join(ROOT, 'templates', 'previews');
const TMP = path.join(os.tmpdir(), 'carousel-previews');

// Manifest — keep aligned with templates/ specs + SKILL.md selection dialog.
const TEMPLATES = [
  { name: 'wolf-media-v1',     dims: [1080, 1350], slideMode: 'toggle'  },
  { name: 'wolf-media-v2',     dims: [1080, 1350], slideMode: 'toggle'  },
  { name: 'editorial-step',    dims: [1080, 1350], slideMode: 'toggle'  },
  { name: 'ascii-pixel',       dims: [1080, 1350], slideMode: 'toggle'  },
  { name: 'bold-blue-grotesk', dims: [1080, 1350], slideMode: 'toggle'  },
  { name: 'figr-b-brutalist',  dims: [1080, 1350], slideMode: 'toggle'  },
  { name: 'figr-e-system',     dims: [1080, 1080], slideMode: 'stacked' },
  { name: 'figr-g-spacing',    dims: [1080, 1350], slideMode: 'stacked' },
];

// Grid: which slide indexes to sample (1-based). Falls back to first/mid/last if fewer.
function pickGridIndexes(total) {
  if (total <= 4) return Array.from({ length: total }, (_, i) => i + 1);
  const mid1 = Math.max(2, Math.floor(total / 3));
  const mid2 = Math.max(mid1 + 1, Math.floor((2 * total) / 3));
  return [1, mid1, mid2, total];
}

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit', ...opts });
    p.on('exit', code => code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`)));
    p.on('error', reject);
  });
}

async function pngToWebp(pngPath, webpPath, scale = 1.0, quality = 78) {
  // Pillow (Python) — ffmpeg in Homebrew ships without libwebp encoder on this box.
  const code = `
import sys
from PIL import Image
src, dst, scale, quality = sys.argv[1], sys.argv[2], float(sys.argv[3]), int(sys.argv[4])
im = Image.open(src).convert('RGB')
if scale != 1.0:
    w, h = im.size
    im = im.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
im.save(dst, 'WEBP', quality=quality, method=6)
print(dst)
`;
  await run('python3', ['-c', code, pngPath, webpPath, String(scale), String(quality)]);
}

async function screenshotAllSlides(html, dims, slideMode, tmpDir) {
  const [W, H] = dims;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'load' });
  // Allow fonts + grain SVG to load.
  await page.waitForTimeout(2500);

  const slideCount = await page.evaluate(() => document.querySelectorAll('.slide').length);
  if (!slideCount) {
    await browser.close();
    throw new Error('No .slide elements found');
  }

  const shots = [];
  for (let i = 1; i <= slideCount; i++) {
    if (slideMode === 'toggle') {
      await page.evaluate(idx => {
        document.querySelectorAll('.slide').forEach((s, n) => {
          s.classList.toggle('active', n + 1 === idx);
        });
      }, i);
      await page.waitForTimeout(120);
      const out = path.join(tmpDir, `raw-${String(i).padStart(2, '0')}.png`);
      await page.screenshot({ path: out, clip: { x: 0, y: 0, width: W, height: H } });
      shots.push(out);
    } else {
      // stacked: locator.screenshot of nth .slide (no display:none toggling)
      const out = path.join(tmpDir, `raw-${String(i).padStart(2, '0')}.png`);
      const locator = page.locator('.slide').nth(i - 1);
      await locator.scrollIntoViewIfNeeded();
      await locator.screenshot({ path: out });
      shots.push(out);
    }
  }

  await browser.close();
  return { shots, slideCount, W, H };
}

async function buildCompositePNG(shots, layout, dims, outPath) {
  // Generate a tiny HTML page that lays out PNG shots, screenshot it via playwright.
  const [W, H] = dims;
  const fileUris = shots.map(p => 'file://' + p);
  let html;

  if (layout === 'grid') {
    // 2×2 grid at 50% scale -> output W=1080, H=2H (cap=4 slides)
    // Picked indexes already filtered. Render at 540×(H/2) each.
    const cellW = 540;
    const cellH = Math.round(H * (540 / W));
    html = `<!doctype html><html><head><style>
      *{margin:0;padding:0;box-sizing:border-box;}
      body{width:${cellW * 2}px;height:${cellH * 2}px;display:grid;grid-template-columns:${cellW}px ${cellW}px;grid-auto-rows:${cellH}px;background:#0a0a0a;}
      img{width:${cellW}px;height:${cellH}px;object-fit:cover;border:4px solid #0a0a0a;}
    </style></head><body>
      ${fileUris.map(u => `<img src="${u}">`).join('')}
    </body></html>`;
  } else if (layout === 'strip') {
    // Vertical strip — 25% scale, all slides stacked.
    const cellW = Math.round(W * 0.25);
    const cellH = Math.round(H * 0.25);
    html = `<!doctype html><html><head><style>
      *{margin:0;padding:0;box-sizing:border-box;}
      body{width:${cellW}px;display:flex;flex-direction:column;background:#0a0a0a;}
      img{width:${cellW}px;height:${cellH}px;display:block;border-bottom:2px solid #0a0a0a;}
    </style></head><body>
      ${fileUris.map(u => `<img src="${u}">`).join('')}
    </body></html>`;
  } else if (layout === 'cover') {
    // single slide, 540 wide
    const cellW = 540;
    const cellH = Math.round(H * (540 / W));
    html = `<!doctype html><html><head><style>
      *{margin:0;padding:0;box-sizing:border-box;}
      body{width:${cellW}px;height:${cellH}px;background:#0a0a0a;}
      img{width:${cellW}px;height:${cellH}px;display:block;}
    </style></head><body><img src="${fileUris[0]}"></body></html>`;
  } else {
    throw new Error('Unknown layout: ' + layout);
  }

  const tmpHtml = path.join(path.dirname(outPath), `composite-${layout}.html`);
  await writeFile(tmpHtml, html);

  const browser = await chromium.launch();
  // Auto-size viewport to body
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  await page.goto('file://' + tmpHtml, { waitUntil: 'networkidle' });
  await page.waitForTimeout(200);
  const bodySize = await page.evaluate(() => {
    const b = document.body.getBoundingClientRect();
    return { w: Math.ceil(b.width), h: Math.ceil(b.height) };
  });
  await page.setViewportSize({ width: bodySize.w, height: bodySize.h });
  await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: bodySize.w, height: bodySize.h } });
  await browser.close();
}

async function buildOne(tpl) {
  const srcHtmlPath = path.join(SOURCES, `${tpl.name}.html`);
  if (!existsSync(srcHtmlPath)) {
    console.log(`  ↩ skip ${tpl.name} — no source HTML at ${srcHtmlPath}`);
    return;
  }
  const outDir = path.join(PREVIEWS, tpl.name);
  await mkdir(outDir, { recursive: true });
  const tmpDir = path.join(TMP, tpl.name);
  await rm(tmpDir, { recursive: true, force: true });
  await mkdir(tmpDir, { recursive: true });

  const html = await readFile(srcHtmlPath, 'utf8');
  console.log(`→ ${tpl.name} (${tpl.dims.join('×')}, ${tpl.slideMode})`);

  const { shots, slideCount } = await screenshotAllSlides(html, tpl.dims, tpl.slideMode, tmpDir);
  console.log(`  ${slideCount} slides captured`);

  // Cover: slide 1
  const coverPng = path.join(tmpDir, 'cover.png');
  await buildCompositePNG([shots[0]], 'cover', tpl.dims, coverPng);
  await pngToWebp(coverPng, path.join(outDir, 'cover.webp'), 1.0, 82);

  // Grid: 4 sampled slides
  const idxs = pickGridIndexes(slideCount);
  const gridShots = idxs.map(i => shots[i - 1]);
  const gridPng = path.join(tmpDir, 'grid.png');
  await buildCompositePNG(gridShots, 'grid', tpl.dims, gridPng);
  await pngToWebp(gridPng, path.join(outDir, 'grid.webp'), 1.0, 78);

  // Full: vertical strip
  const stripPng = path.join(tmpDir, 'strip.png');
  await buildCompositePNG(shots, 'strip', tpl.dims, stripPng);
  await pngToWebp(stripPng, path.join(outDir, 'full.webp'), 1.0, 72);

  console.log(`  ✓ ${outDir}`);
}

async function main() {
  await mkdir(TMP, { recursive: true });
  await mkdir(PREVIEWS, { recursive: true });

  const filter = process.argv.slice(2);
  const list = filter.length ? TEMPLATES.filter(t => filter.includes(t.name)) : TEMPLATES;
  if (!list.length) {
    console.error('No matching templates. Available:', TEMPLATES.map(t => t.name).join(', '));
    process.exit(1);
  }

  for (const tpl of list) {
    try {
      await buildOne(tpl);
    } catch (err) {
      console.error(`  ✗ ${tpl.name}:`, err.message);
    }
  }

  console.log('\nDone. Previews at:', PREVIEWS);
}

main().catch(e => { console.error(e); process.exit(1); });
