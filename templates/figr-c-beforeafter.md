# Figr C — Before / After Template

Designed for figr.design's UI/UX Instagram channel. Target audience: design leads and managers.
Use for: shift-based frameworks, pattern corrections, "what changes when you do X right" carousels.

---

## When to use

| Use figr-c-beforeafter | Use other figr templates |
|---|---|
| Topic is a set of contrasting states ("before you do X / after you do X") | Topic is a list of principles or a how-to |
| Content has a clear ✗ wrong → ✓ right structure per slide | Content doesn't map cleanly to binary before/after pairs |
| You want maximum visual contrast between the two states | You want a single-tone or card-based layout |
| Signals: "shifts", "before/after", "what changes", "wrong vs right", "stop doing / start doing" | — |

---

## Design system

### Tokens

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#0D0D0D` | Primary text (after panel, CTA h2) |
| `--ink-muted` | `#6B6B6B` | Body text in after panel |
| `--accent` | `#00C8B4` | Cyan — bridge seam, ✓ mark, badges, CTA button |
| `--dark` | `#0F172A` | Hook and CTA background |
| `--panel-dark` | `#18181B` | BEFORE panel background (zinc-900) |
| `--panel-light` | `#FFFFFF` | AFTER panel background |
| `--red` | `#FF4D4D` | ✗ mark color (before panel) |

### Typography

- **Font:** Inter (Google Fonts, weights 400/500/600/700)
- **h1 (hook):** 82px, 700, line-height 1.06, letter-spacing −0.03em
- **h2 (panel titles):** 40px, 700, line-height 1.15, letter-spacing −0.025em
- **Panel mark (✗ / ✓):** 52px, 700, line-height 1, letter-spacing −0.02em
- **Panel badge:** 11px, 700, uppercase, letter-spacing 0.12em
- **Body:** 16px, 400, line-height 1.7
- **BA label:** 11px, 600, uppercase, letter-spacing 0.15em, cyan
- **Counter:** 13px, 500, letter-spacing 0.06em

### Brand block

Position: `bottom: 30px; right: 44px;`, stacked column, align right, z-index: 10.

```html
<div class="brand-block">
  <span class="brand-name">figr.design</span>
  <span class="brand-handle">@figr.design</span>
</div>
```

`.brand-name`: 20px, 700. On dark slides (`#0F172A` bg): `#F1F5F9`. On BA slides (white after panel visible): `#0D0D0D`.
`.brand-handle`: 13px, 500, always `#00C8B4`.

---

## Slide structure (7 slides)

### Narrative
Hook → The Problem → Shift 01 → Shift 02 → Shift 03 → Shift 04 → CTA

### Slide 1 — Hook (dark)

- Background: `#0F172A` + white dot grid (`rgba(255,255,255,0.08) 1.5px`, `28px 28px`)
- `::before`: cyan radial glow, top-right, 460×460px, `rgba(0,200,180,0.13) → transparent`
- `::after`: secondary glow, bottom-left, `rgba(0,200,180,0.06) → transparent`
- Left edge: 5px × 180px cyan bar, centered vertically, gradient fade
- Layout: `flex-direction: column; justify-content: center; align-items: flex-start; padding: 80px`
- Content (z-index: 1):
  - Chip: `background: #00C8B4`, white, 12px uppercase, border-radius 4px
  - h1: 82px, `#F1F5F9`, max 2 lines, max-width 880px
  - Sub: 24px, `rgba(255,255,255,0.5)`, 1 line (e.g. "4 before / after shifts that fix it.")
- Counter: `rgba(255,255,255,0.25)` | Brand name: `#F1F5F9`

### Slides 2–6 — Problem + Shifts (split layout)

Fixed-height stacked panels. No flex overflow. Total: `ba-header` + `panel-before` + `ba-bridge` + `panel-after` = 1080px.

**Layout structure:**

```
.ba-header    — 64px  — dark (#18181B), holds slide label
.panel-before — 450px — dark (#18181B) with dot grid
.ba-bridge    — 60px  — gradient split with cyan seam
.panel-after  — flex:1 — white with dot grid
```

**BA header (64px):**
- Background: `#18181B`
- Left-aligned: slide label, 11px, 600, uppercase, cyan, letter-spacing 0.15em

**BEFORE panel (450px):**
- Background: `#18181B` + white dot grid (`rgba(255,255,255,0.065) 1.5px`, `24px 24px`)
- Padding: 40px 52px
- Flex column, justify-content: center, gap: 14px
- Content:
  - `.panel-mark ✗`: 52px, 700, `#FF4D4D`
  - `.panel-badge "BEFORE"`: 11px, 700, uppercase, `rgba(255,90,90,0.65)`, margin-top −6px
  - h2: 40px, 700, `#F1F5F9`
  - p: 16px, `rgba(255,255,255,0.48)`, line-height 1.7, max-width 860px

**Bridge (60px):**
- `background: linear-gradient(to bottom, #18181B 50%, #FFFFFF 50%)`
- `::after` pseudo: full-width 2px cyan line, centered, fades at edges (`transparent → #00C8B4 15% → 85% → transparent`)

**AFTER panel (flex: 1):**
- Background: `#FFFFFF` + dark dot grid (`rgba(0,0,0,0.055) 1.5px`, `24px 24px`)
- Padding: 40px 52px 90px (extra bottom for brand block)
- Flex column, justify-content: center, gap: 14px
- Content:
  - `.panel-mark ✓`: 52px, 700, `#00C8B4`
  - `.panel-badge "AFTER"`: 11px, 700, uppercase, `#00C8B4`, margin-top −6px
  - h2: 40px, 700, `#0D0D0D`
  - p: 16px, `#6B6B6B`, line-height 1.7, max-width 860px
- Counter: `#CCCCCC` | Brand name: `#0D0D0D`

### Slide 7 — CTA (dark)

- Background: `#0F172A` + dot grid + cyan glow (same as hook)
- Layout: centered column, text-align center, padding 80px
- Content:
  - Marks row: `✗` (52px, `#FF4D4D`) + `→` (28px, `rgba(255,255,255,0.3)`) + `✓` (52px, `#00C8B4`), flex row, gap 24px, margin-bottom 40px
  - h2: 54px, 700, `#F1F5F9`, max-width 760px, e.g. "Which shift will you make first?"
  - Sub: 21px, `rgba(255,255,255,0.5)`, max-width 520px, margin-bottom 52px
  - Button: `background: #00C8B4`, white, 18px, 600, padding 18px 48px, border-radius 10px, "Follow for more →"
- Counter: `rgba(255,255,255,0.25)` | Brand name: `#F1F5F9`

---

## HTML skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Template C — [TOPIC] | figr.design</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --ink: #0D0D0D;
      --ink-muted: #6B6B6B;
      --accent: #00C8B4;
      --dark: #0F172A;
      --panel-dark: #18181B;
      --panel-light: #FFFFFF;
      --red: #FF4D4D;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', sans-serif; background: #D0D0D0;
      display: flex; flex-direction: column; align-items: center;
      gap: 32px; padding: 40px 0;
    }

    .slide { width: 1080px; height: 1080px; position: relative; overflow: hidden; flex-shrink: 0; }

    /* Brand block */
    .brand-block {
      position: absolute; bottom: 30px; right: 44px;
      display: flex; flex-direction: column; align-items: flex-end; gap: 3px; z-index: 10;
    }
    .brand-block .brand-name { font-size: 20px; font-weight: 700; letter-spacing: -0.01em; line-height: 1; }
    .brand-block .brand-handle { font-size: 13px; font-weight: 500; color: #00C8B4; letter-spacing: 0.02em; line-height: 1; }

    /* Counter */
    .slide-counter {
      position: absolute; bottom: 34px; left: 44px;
      font-size: 13px; font-weight: 500; letter-spacing: 0.06em; z-index: 10;
    }

    /* Hook */
    .slide-hook {
      background-color: #0F172A;
      background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1.5px, transparent 1.5px);
      background-size: 28px 28px;
      display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: 80px;
    }
    .slide-hook::before {
      content: ''; position: absolute; top: -100px; right: -100px;
      width: 460px; height: 460px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,200,180,0.13) 0%, transparent 70%);
      z-index: 0; pointer-events: none;
    }
    .slide-hook::after {
      content: ''; position: absolute; bottom: -80px; left: -60px;
      width: 360px; height: 360px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,200,180,0.06) 0%, transparent 70%);
      z-index: 0; pointer-events: none;
    }
    .slide-hook .cyan-bar {
      position: absolute; left: 0; top: 50%; transform: translateY(-50%);
      width: 5px; height: 180px;
      background: linear-gradient(180deg, transparent, #00C8B4 40%, #00C8B4 60%, transparent);
      border-radius: 0 3px 3px 0; z-index: 1;
    }
    .hook-content { position: relative; z-index: 1; }
    .chip {
      display: inline-block; background: #00C8B4; color: #ffffff;
      font-size: 12px; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.12em; padding: 7px 16px; border-radius: 4px; margin-bottom: 36px;
    }
    h1 { font-size: 82px; font-weight: 700; color: #F1F5F9; line-height: 1.06; letter-spacing: -0.03em; max-width: 880px; margin-bottom: 28px; }
    .hook-sub { font-size: 24px; font-weight: 400; color: rgba(255,255,255,0.5); }
    .slide-hook .slide-counter { color: rgba(255,255,255,0.25); }
    .slide-hook .brand-block .brand-name { color: #F1F5F9; }

    /* BA slides */
    .slide-ba { display: flex; flex-direction: column; }

    .ba-header {
      height: 64px; background: #18181B; flex-shrink: 0;
      display: flex; align-items: center; padding: 0 52px;
    }
    .ba-label { font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #00C8B4; }

    .panel-before {
      height: 450px; flex-shrink: 0;
      background-color: #18181B;
      background-image: radial-gradient(circle, rgba(255,255,255,0.065) 1.5px, transparent 1.5px);
      background-size: 24px 24px;
      padding: 40px 52px;
      display: flex; flex-direction: column; justify-content: center; gap: 14px;
    }

    .ba-bridge {
      height: 60px; flex-shrink: 0;
      background: linear-gradient(to bottom, #18181B 50%, #FFFFFF 50%);
      position: relative; z-index: 2;
    }
    .ba-bridge::after {
      content: ''; position: absolute; top: 50%; left: 52px; right: 52px; height: 2px;
      background: linear-gradient(90deg, transparent 0%, #00C8B4 15%, #00C8B4 85%, transparent 100%);
      transform: translateY(-50%);
    }

    .panel-after {
      flex: 1;
      background-color: #FFFFFF;
      background-image: radial-gradient(circle, rgba(0,0,0,0.055) 1.5px, transparent 1.5px);
      background-size: 24px 24px;
      padding: 40px 52px 90px;
      display: flex; flex-direction: column; justify-content: center; gap: 14px;
    }

    .panel-mark { font-size: 52px; font-weight: 700; line-height: 1; letter-spacing: -0.02em; }
    .panel-before .panel-mark { color: #FF4D4D; }
    .panel-after  .panel-mark { color: #00C8B4; }

    .panel-badge { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin-top: -6px; }
    .panel-before .panel-badge { color: rgba(255,90,90,0.65); }
    .panel-after  .panel-badge { color: #00C8B4; }

    .panel-before h2 { font-size: 40px; font-weight: 700; color: #F1F5F9; line-height: 1.15; letter-spacing: -0.025em; }
    .panel-after  h2 { font-size: 40px; font-weight: 700; color: #0D0D0D; line-height: 1.15; letter-spacing: -0.025em; }
    .panel-before p { font-size: 16px; font-weight: 400; color: rgba(255,255,255,0.48); line-height: 1.7; max-width: 860px; }
    .panel-after  p { font-size: 16px; font-weight: 400; color: #6B6B6B;                 line-height: 1.7; max-width: 860px; }

    .slide-ba .slide-counter { color: #CCCCCC; }
    .slide-ba .brand-block .brand-name { color: #0D0D0D; }

    /* CTA */
    .slide-cta {
      background-color: #0F172A;
      background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1.5px, transparent 1.5px);
      background-size: 28px 28px;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center; padding: 80px;
    }
    .slide-cta::before {
      content: ''; position: absolute; top: -100px; right: -100px;
      width: 460px; height: 460px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,200,180,0.13) 0%, transparent 70%);
      z-index: 0; pointer-events: none;
    }
    .cta-content { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
    .cta-marks { display: flex; align-items: center; gap: 24px; margin-bottom: 40px; }
    .cta-x     { font-size: 52px; font-weight: 700; color: #FF4D4D;              letter-spacing: -0.02em; line-height: 1; }
    .cta-arrow { font-size: 28px; color: rgba(255,255,255,0.3); }
    .cta-check { font-size: 52px; font-weight: 700; color: #00C8B4;              letter-spacing: -0.02em; line-height: 1; }
    .slide-cta h2 { font-size: 54px; font-weight: 700; color: #F1F5F9; letter-spacing: -0.025em; margin-bottom: 20px; max-width: 760px; line-height: 1.1; }
    .cta-sub { font-size: 21px; font-weight: 400; color: rgba(255,255,255,0.5); margin-bottom: 52px; max-width: 520px; line-height: 1.5; }
    .cta-button { display: inline-block; background: #00C8B4; color: #ffffff; font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 600; padding: 18px 48px; border-radius: 10px; cursor: default; }
    .slide-cta .slide-counter { color: rgba(255,255,255,0.25); }
    .slide-cta .brand-block .brand-name { color: #F1F5F9; }
  </style>
</head>
<body>

  <!-- SLIDE 1 — HOOK -->
  <div class="slide slide-hook">
    <div class="cyan-bar"></div>
    <div class="hook-content">
      <span class="chip">[TOPIC LABEL]</span>
      <h1>[Headline — max 2 lines]</h1>
      <p class="hook-sub">[N] before / after shifts that [fix/change/reframe] it.</p>
    </div>
    <span class="slide-counter">01 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 2 — THE PROBLEM -->
  <div class="slide slide-ba">
    <div class="ba-header"><span class="ba-label">The Problem</span></div>
    <div class="panel-before">
      <span class="panel-mark">✗</span>
      <span class="panel-badge">What Happens</span>
      <h2>[Current broken state — declarative]</h2>
      <p>[Why this breaks things — 2–3 sentences, painfully recognizable]</p>
    </div>
    <div class="ba-bridge"></div>
    <div class="panel-after">
      <span class="panel-mark">✓</span>
      <span class="panel-badge">What Should Happen</span>
      <h2>[Correct state — declarative]</h2>
      <p>[What changes and why it matters — 2–3 sentences]</p>
    </div>
    <span class="slide-counter">02 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 3 — SHIFT 01 -->
  <div class="slide slide-ba">
    <div class="ba-header"><span class="ba-label">Shift 01</span></div>
    <div class="panel-before">
      <span class="panel-mark">✗</span>
      <span class="panel-badge">Before</span>
      <h2>[Before state]</h2>
      <p>[Why this is the default / what goes wrong]</p>
    </div>
    <div class="ba-bridge"></div>
    <div class="panel-after">
      <span class="panel-mark">✓</span>
      <span class="panel-badge">After</span>
      <h2>[After state]</h2>
      <p>[What the shift enables / why it works]</p>
    </div>
    <span class="slide-counter">03 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 4 — SHIFT 02 -->
  <div class="slide slide-ba">
    <div class="ba-header"><span class="ba-label">Shift 02</span></div>
    <div class="panel-before">
      <span class="panel-mark">✗</span><span class="panel-badge">Before</span>
      <h2>[Before state]</h2><p>[Body]</p>
    </div>
    <div class="ba-bridge"></div>
    <div class="panel-after">
      <span class="panel-mark">✓</span><span class="panel-badge">After</span>
      <h2>[After state]</h2><p>[Body]</p>
    </div>
    <span class="slide-counter">04 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 5 — SHIFT 03 -->
  <div class="slide slide-ba">
    <div class="ba-header"><span class="ba-label">Shift 03</span></div>
    <div class="panel-before">
      <span class="panel-mark">✗</span><span class="panel-badge">Before</span>
      <h2>[Before state]</h2><p>[Body]</p>
    </div>
    <div class="ba-bridge"></div>
    <div class="panel-after">
      <span class="panel-mark">✓</span><span class="panel-badge">After</span>
      <h2>[After state]</h2><p>[Body]</p>
    </div>
    <span class="slide-counter">05 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 6 — SHIFT 04 -->
  <div class="slide slide-ba">
    <div class="ba-header"><span class="ba-label">Shift 04</span></div>
    <div class="panel-before">
      <span class="panel-mark">✗</span><span class="panel-badge">Before</span>
      <h2>[Before state]</h2><p>[Body]</p>
    </div>
    <div class="ba-bridge"></div>
    <div class="panel-after">
      <span class="panel-mark">✓</span><span class="panel-badge">After</span>
      <h2>[After state]</h2><p>[Body]</p>
    </div>
    <span class="slide-counter">06 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 7 — CTA -->
  <div class="slide slide-cta">
    <div class="cta-content">
      <div class="cta-marks">
        <span class="cta-x">✗</span>
        <span class="cta-arrow">→</span>
        <span class="cta-check">✓</span>
      </div>
      <h2>Which shift will you make first?</h2>
      <p class="cta-sub">Follow figr.design for more frameworks that cut through the noise.</p>
      <span class="cta-button">Follow for more →</span>
    </div>
    <span class="slide-counter">07 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

</body>
</html>
```

---

## Design rules

1. **Fixed panel heights — never flex: 1 on both panels.** `panel-before` is always `height: 450px; flex-shrink: 0`. `panel-after` uses `flex: 1` to fill the rest. The sum of `ba-header` (64px) + `panel-before` (450px) + `ba-bridge` (60px) = 574px, leaving 506px for `panel-after` — no overflow.
2. **✗ mark must be red (`#FF4D4D`), ✓ mark must be cyan (`#00C8B4`).** These are not interchangeable.
3. **Bridge gradient splits exactly 50/50** — dark above the seam, white below. The cyan line sits at the exact 50% point.
4. **BEFORE panel is always dark zinc (`#18181B`)** — not the hook navy (`#0F172A`). Different shade to distinguish content slides from hook/CTA.
5. **Body in before panel uses `rgba(255,255,255,0.48)`** — visibly muted, not full white. Reinforces the "wrong/broken" state visually.
6. **BA label order:** Slide 2 = "The Problem", Slides 3–6 = "Shift 01" through "Shift 04". Never "Tip" in this template.
7. **CTA always shows the ✗ → ✓ motif** — three-element row centered above the headline.
8. **Brand block on BA slides:** counter is `#CCCCCC`, brand name is `#0D0D0D` (sits in the white after panel area).
9. **Body max 3 lines per panel** — the mark + badge + h2 already occupy significant vertical space.
10. **Slide 2 labels are "What Happens" / "What Should Happen"** — not "Before" / "After". This frames it as a systemic problem, not a personal comparison.
