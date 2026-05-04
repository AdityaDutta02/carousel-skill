---
name: instagram-carousel
description: >
  Creates a fully designed, research-backed Instagram carousel from a topic.
  Use this skill whenever the user mentions "carousel", "instagram carousel",
  "make me a carousel", "carousel for [topic]", or provides a topic + page handle.
  The skill researches the topic, structures content into 7–12 slides, designs
  a pixel-perfect 1080×1350 HTML file using visual-impact principles, audits
  every slide with Playwright, exports individual PNGs, and generates a hybrid
  SEO/AEO Instagram caption with tiered hashtags. Also handles change iterations:
  user reviews PNGs, requests edits, skill re-exports only affected slides.
  Invoke this skill even if the user only says "make a carousel about X" or
  "carousel on [topic] for my page".
---

# Instagram Carousel Skill

Produces research-backed, visually premium Instagram carousels as individual
PNG slides (1080×1350) plus a hybrid SEO/AEO caption. Never start designing
before research is complete. Never ship without Playwright audit passing.

---

## 0. INPUTS — Collect Before Starting

Always collect these three things before proceeding. If missing, ask in one message:

| Input | Example |
|---|---|
| **Topic** | "seed funding for startups" |
| **Page handle** | `@thefounderlab` |
| **Page name** | "The Founder Lab" |

The last slide is always a CTA: "Follow **[Page Name]** → **[handle]**". No exceptions.

---

## 1. RESEARCH PHASE

Run three WebSearch queries in parallel:

```
WebSearch: "[topic] statistics 2025"
WebSearch: "[topic] latest trends 2025"
WebSearch: "[topic] expert insights data"
```

Extract and keep only:
- Statistics with named sources and dates (discard anything older than 18 months)
- Direct definitions suitable for the "What is X?" question
- Expert claims and quotable insights
- Surprising or counter-intuitive data points (highest engagement)

Discard: opinion pieces without data, vague claims without numbers, marketing copy.

After research, report token usage:
```bash
rtk gain
```

---

## 2. CONTENT ARCHITECTURE

### Slide count rule
Count distinct extractable ideas from research. Assign one slide per idea.
Minimum 7 slides, maximum 12. Never pad with weak ideas to hit a number.
Never compress two strong ideas into one slide to save slides.

### Slide map template

```
Slide 1   — HOOK        : boldest stat or most surprising claim from research
Slide 2   — CONTEXT     : why this topic matters right now (1 data point)
Slides 3–N — DATA/INSIGHT : one distinct finding per slide (bulk of content)
Slide N-1 — TAKEAWAY    : actionable conclusion or synthesis
Slide N   — CTA         : "Follow [Page Name] → [handle]" (always last)
```

### Per-slide copy rules
- Display headline: 8–18 words max
- Supporting line: 12–25 words max (optional, not on every slide)
- Stat callout: number + unit + source attribution in small type
- Every claim must trace back to the research — no invented data

---

## 3. DESIGN — HTML CAROUSEL FILE

### Visual-impact integration
Apply visual-impact skill principles (MODE A — Presentation):
- DESIGN_VARIANCE: 7
- MOTION_INTENSITY: 0 (static export — no GSAP, no scroll)
- VISUAL_DENSITY: 3

### File structure
Single HTML file. Each slide = `section.slide`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    /* Design tokens */
    :root {
      --bg:     oklch(98% 0.005 250);
      --ink:    oklch(12% 0.02 250);
      --accent: oklch(55% 0.18 145);   /* swap per topic */
      --surface: oklch(94% 0.01 250);
      --muted:  oklch(55% 0.01 250);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body { width: 1080px; background: var(--bg); }

    .slide {
      width: 1080px;
      height: 1350px;
      display: none;          /* JS toggles active slide */
      flex-direction: column;
      padding: 80px 90px;
      position: relative;
      overflow: hidden;
      background: var(--bg);
    }

    .slide.active { display: flex; }
  </style>
  <!-- Font: Cabinet Grotesk or Satoshi via CDN -->
  <!-- NEVER use Inter, Roboto, Arial for display -->
</head>
<body>
  <section class="slide active" id="slide-1"><!-- hook --></section>
  <section class="slide" id="slide-2"><!-- context --></section>
  <!-- ... remaining slides ... -->
</body>
</html>
```

### Typography hard rules
- Display: `clamp(3.5rem, 5.5vw, 6.5rem)` · `letter-spacing: -0.03em` · `line-height: 0.95`
- Body: `clamp(1rem, 1.5vw, 1.2rem)` · `line-height: 1.6`
- Fonts: Cabinet Grotesk, Satoshi, Outfit — loaded from CDN
- BANNED: Inter, Roboto, Arial for display text

### Color rules
- BANNED: pure `#000` or `#fff` — always tint
- BANNED: purple/violet gradients (`#7c3aed`, `#6366f1`, purple-to-blue)
- BANNED: neon glows
- Use `oklch()` for all color tokens
- Max 1 accent color, saturation < 80%
- Choose accent color that fits the topic mood (finance → deep blue, health → emerald, etc.)

### Layout rules
- BANNED: centered H1 as only hierarchy signal
- BANNED: 3 equal-width cards in a row
- USE: asymmetric split layouts, left-aligned content, large typographic contrast
- USE: `min-height: 1350px` — never `height: 1350px` (clip risk)
- Stat callouts: large number isolated with `font-size: clamp(5rem, 8vw, 9rem)`

### CTA slide (always last)
- Full-bleed accent color background
- Page name in display type
- Handle in contrasting weight below
- Simple, zero clutter — one message only

---

## 4. PLAYWRIGHT AUDIT LOOP

Run this automatically after generating the HTML. Never skip. Max 3 iterations.

### Audit script

```js
// carousel-audit.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { webkit } = require('/opt/homebrew/lib/node_modules/playwright');

const SLIDE_COUNT = /* set from content architecture step */;
const FILE_PATH = '/tmp/carousel.html';  /* absolute path */

const browser = await webkit.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1080, height: 1350 });
await page.goto(`file://${FILE_PATH}`, { waitUntil: 'load' });
await page.waitForTimeout(3000);

for (let i = 1; i <= SLIDE_COUNT; i++) {
  await page.evaluate(idx => {
    document.querySelectorAll('.slide').forEach((s, n) => {
      s.classList.toggle('active', n + 1 === idx);
    });
  }, i);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/audit-slide-${i}.png` });
  console.log(`audited slide ${i}/${SLIDE_COUNT}`);
}

await browser.close();
```

### After each screenshot, inspect for:

| Issue | Root cause | Fix |
|---|---|---|
| Text clipped at bottom | `height: 1350px` hard clips | Switch to `min-height`, reduce font size |
| Font not loaded | CDN timeout on `file://` | Inline `@font-face` with base64, or use system fallback |
| Color token not applying | `oklch(x%_y_z)` underscores | Fix to `oklch(x% y z)` with spaces |
| Layout breaks at 1080px | Used `vw` units | Switch to `px` or `%` of fixed 1080px container |
| Slide blank / invisible | `.active` class not toggled | Check JS slide switcher |
| Text unreadable on bg | Contrast too low | Adjust ink/bg token lightness |
| Stat number too small | Competing with body text | Isolate, scale up, remove surrounding noise |

Fix → re-screenshot → verify. State the bug + root cause + fix before each edit.
Never rewrite the entire file for a single bug — targeted edits only.

After audit loop completes:
```bash
rtk gain
```

---

## 5. PNG EXPORT

Once all audit screenshots pass, export final PNGs:

```js
// carousel-export.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { webkit } = require('/opt/homebrew/lib/node_modules/playwright');

const SLIDE_COUNT = /* from content step */;
const FILE_PATH = '/tmp/carousel.html';
const OUTPUT_DIR = '/tmp/carousel-final/';

const browser = await webkit.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1080, height: 1350 });
await page.goto(`file://${FILE_PATH}`, { waitUntil: 'load' });
await page.waitForTimeout(3000);

for (let i = 1; i <= SLIDE_COUNT; i++) {
  await page.evaluate(idx => {
    document.querySelectorAll('.slide').forEach((s, n) => {
      s.classList.toggle('active', n + 1 === idx);
    });
  }, i);
  await page.waitForTimeout(400);
  await page.screenshot({
    path: `${OUTPUT_DIR}slide-${String(i).padStart(2,'0')}.png`,
    clip: { x: 0, y: 0, width: 1080, height: 1350 }
  });
}

await browser.close();
console.log(`Exported ${SLIDE_COUNT} slides to ${OUTPUT_DIR}`);
```

Ensure output directory exists before running:
```bash
mkdir -p /tmp/carousel-final/
```

---

## 6. CAPTION GENERATION (Hybrid SEO/AEO)

### Structure

```
[Hook sentence — primary keyword natural in first 10 words]

[Value line 1 — data point or insight from slide content]
[Value line 2 — second distinct insight]
[Value line 3 — actionable takeaway]

[CTA line — "Save this. Share it with someone building [X]."]

.
[Hashtags — one block, no line breaks between tags]
```

### Keyword integration rules
- Primary keyword: appears once in hook, once more in body — never repeated beyond that
- Secondary keywords: 2–3, woven naturally into value lines
- Target density: 1.5–2% — reads like a human wrote it
- BANNED: stacking keywords ("startup funding seed funding early stage funding venture")
- Every keyword must serve the sentence it's in — if removing it doesn't hurt meaning, remove it

### Hashtag tiers (20–25 total)

| Tier | Post volume | Count | Purpose |
|---|---|---|---|
| Tier 1 — Niche | < 500K posts | 3–5 | High relevance, low competition |
| Tier 2 — Mid | 500K–5M posts | 8–10 | Core discoverability |
| Tier 3 — Broad | 5M+ posts | 7–10 | Reach amplification |

Mix all three tiers in one block. Research hashtag volumes via WebSearch if needed.

---

## 7. CHANGE ITERATION

When user requests edits after reviewing PNGs:

1. Identify which slide(s) need changes
2. Edit only those sections in the HTML — no full rewrites
3. Re-run Playwright audit on changed slides only (not full deck)
4. Re-export only changed PNGs
5. Deliver changed PNGs + note which slide numbers changed

```bash
rtk gain --history   # report cumulative session token savings
```

---

## 8. DELIVERY CHECKLIST

Before reporting done, verify every item:

- [ ] Research from sources < 18 months old
- [ ] Slide count between 7 and 12
- [ ] Last slide is CTA with correct page name + handle
- [ ] No Inter/Roboto/Arial for display text
- [ ] No pure `#000` or `#fff`
- [ ] No purple/neon gradients
- [ ] All slides pass Playwright audit (no clipping, no blank slides, fonts loaded)
- [ ] PNGs exported at exactly 1080×1350
- [ ] Caption has primary keyword in first sentence
- [ ] Caption reads naturally — no keyword stacking
- [ ] 20–25 hashtags in three tiers
- [ ] Token usage reported via `rtk gain --history`

---

## TOKEN REPORTING

Report at end of each phase and at session end:

```bash
rtk gain              # current session snapshot
rtk gain --history    # per-command breakdown
```

Surface the total tokens saved, not just used. Caveman rule: less is more.

---

## 9. SELF-IMPROVEMENT PROTOCOL

This skill learns from every carousel session. Changes users request during
iteration (Section 7) are not just fixes — they are signals about gaps in
the skill's instructions. Capture them. Analyze patterns. Tighten the skill.

### Step 1 — Log every user change (run at end of each change iteration)

After applying any user-requested edit, append to the change log:

```bash
node ~/.claude/skills/instagram-carousel/scripts/log-change.mjs \
  --topic "[topic]" \
  --slide "[slide number or 'caption']" \
  --issue "[what the user asked to change, verbatim or paraphrased]" \
  --fix "[what you changed in the HTML/caption]" \
  --category "[fonts|typography|color|layout|content|caption|cta|export]"
```

Categories:
- `fonts` — font not loading, wrong font used, fallback triggered
- `typography` — size, weight, spacing, line-height issues
- `color` — contrast, token not applied, wrong accent chosen
- `layout` — overflow, clipping, alignment, whitespace
- `content` — wrong data, weak copy, slide count wrong
- `caption` — keyword density, tone, hashtag issues
- `cta` — CTA slide design or copy
- `export` — PNG dimensions, clip issues, file naming

### Step 2 — Check for patterns (triggers automatically)

The log script auto-checks after each write. When a category accumulates
**3 or more issues across different sessions**, it surfaces a pattern alert:

```
⚠ PATTERN DETECTED: "fonts" — 4 occurrences across 3 sessions
  Most common issue: CDN fonts fail to load in file:// context
  Proposed fix: update Section 3 to always inline @font-face
  Run: node ~/.claude/skills/instagram-carousel/scripts/analyze-patterns.mjs
```

When you see this alert, run the analyzer and present proposed SKILL.md
changes to the user before applying.

### Step 3 — Propose and apply skill updates

```bash
node ~/.claude/skills/instagram-carousel/scripts/analyze-patterns.mjs
```

The analyzer outputs:
1. A summary of recurring patterns with frequency
2. Specific proposed edits to SKILL.md (which section, what to add/change/remove)
3. The reasoning: why this change prevents the recurring issue

Present to user:
> "Across [N] sessions, [category] issues appeared [X] times. I'm proposing
> this update to the skill to prevent it happening again: [proposed change].
> Approve to apply and push to GitHub?"

On approval:
1. Edit SKILL.md with the targeted improvement
2. Commit and push to GitHub:
```bash
cd ~/.claude/skills/instagram-carousel
git add SKILL.md scripts/improvement-log.json
git commit -m "fix(skill): address recurring [category] pattern from [N] sessions"
git push
```

### What to look for (pattern categories → likely skill gaps)

| Recurring category | Likely gap in current skill | Where to improve |
|---|---|---|
| `fonts` | CDN unreliable on `file://` | Section 3: mandate inline fonts |
| `typography` | `clamp()` values wrong for 1080px fixed width | Section 3: recalibrate type scale |
| `color` | Accent choice off for topic | Section 3: expand mood → color mapping |
| `layout` | Overflow not caught in audit | Section 4: add overflow check to audit table |
| `content` | Research missing key angle | Section 1: add fourth search query |
| `caption` | Keywords still feeling stuffed | Section 6: tighten density rules |
| `cta` | CTA slide too generic | Section 3: add CTA slide design variants |
| `export` | Wrong clip dimensions | Section 5: add dimension assertion to export script |

### Improvement log location

```
~/.claude/skills/instagram-carousel/scripts/improvement-log.json
```

This file is committed to GitHub with the skill. It persists across sessions
and is the source of truth for pattern detection. Never delete it — growth
of this file is the skill's learning history.
