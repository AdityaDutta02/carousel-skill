# Figr A — Manifesto Template

Designed for figr.design's UI/UX Instagram channel. Target audience: design leads and managers.
Use for: framework breakdowns, bold statements, design philosophy, "N signs/rules/principles" carousels.

---

> **⚠️ Universal Rules override this spec.** See `SKILL.md` → "Universal Design Rules".
> - Rule U1: Slide 1 (hook) and Slide 7 (CTA) **must be light** — both are described as dark below; apply the light-hook + light-CTA treatments from Rule U1 instead.
> - Rule U2: The `--dark: #0F172A` flat fill below must be replaced with a layered gradient + grain + accent glow on any remaining middle dark slide.
> - Rule U3: Bump every sub-18px size below to the minimums in Rule U3 (body ≥22px, label/eyebrow/counter/handle ≥18–20px).

---

## When to use

| Use figr-a-manifesto | Use other templates |
|---|---|
| Topic is a bold framework or principle ("signs your X is failing") | Topic is data-driven or results-focused |
| Audience is design leads / senior designers | Audience is general / beginners |
| Content is editorial, opinionated, confident | Content is step-by-step or how-to |
| You want alternating dark/light rhythm | You want a consistent single-tone look |

---

## Design system

### Tokens

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#FAFAFA` | Light slide background |
| `--ink` | `#0D0D0D` | Primary text on light |
| `--ink-muted` | `#6B6B6B` | Body text on light |
| `--accent` | `#00C8B4` | Cyan — accent color |
| `--dark` | `#0F172A` | Deep navy — dark slide background |
| `--ghost` | `#EBEBEB` | Ghost numbers behind content |

### Typography

- **Font:** Inter (Google Fonts, weights 400/500/600/700)
- **h1 (hook):** 92px, 700, line-height 1.04, letter-spacing −0.03em
- **h2 (tip titles):** 68px, 700, line-height 1.08, letter-spacing −0.03em
- **Body:** 28px, 400, line-height 1.55
- **Chip:** 14px, 600, uppercase, letter-spacing 0.12em
- **Slide label:** 14px, 600, uppercase, letter-spacing 0.14em
- **Counter:** 16px, 500, letter-spacing 0.06em
- **Brand name:** 22px, 700 — **Brand handle:** 15px, 500, cyan
- **Hook sub:** 28px, 400

### Brand block

Position: `bottom: 30px; right: 44px;`, stacked column, align right.

```html
<div class="brand-block">
  <span class="brand-name">figr.design</span>
  <span class="brand-handle">@figr.design</span>
</div>
```

`.brand-name`: 20px, 700. On dark slides: `#F1F5F9`. On light slides: `#0D0D0D`.
`.brand-handle`: 13px, 500, color always `#00C8B4`.

---

## Slide structure (7 slides)

### Narrative
Hook → Problem → Tip 01 → Tip 02 → Tip 03 → Tip 04 → CTA

### Slide 1 — Hook (dark)
- Background: `#0F172A` + white dot grid (`rgba(255,255,255,0.09) 1.5px`, `28px 28px`)
- `::before`: cyan radial glow, top-right, 400×400px, `rgba(0,200,180,0.12) → transparent`
- `::after`: secondary glow, bottom-left, smaller, `rgba(0,200,180,0.06) → transparent`
- Left edge: 5px × 180px cyan vertical bar, centered vertically, gradient fade
- Layout: `flex-direction: column; justify-content: center; align-items: flex-start; padding: 80px`
- Content (z-index: 1):
  - Chip: `background: #00C8B4`, white text, 12px uppercase, border-radius 4px
  - h1: 82px, white (`#F1F5F9`), max 2 lines, max-width 880px
  - Sub: 24px, `rgba(255,255,255,0.5)`, 1 line
- Counter + brand: white/muted variants

### Slides 2–6 — Problem + Tips (alternating dark/light)
- **Odd slides (3, 5):** dark background — same dot grid as hook
- **Even slides (2, 4, 6):** light background — `#FAFAFA` + dark dot grid (`rgba(0,0,0,0.10)`)
- Ghost number: `01`–`05`, 220px, 700, `#EBEBEB`, absolute `top: 60px; right: 40px`, z-index 0
- Layout: `flex-direction: column; justify-content: center; padding: 80px`
- Content:
  - Slide label: 11px, 600, uppercase, cyan, letter-spacing 0.14em (e.g. "PROBLEM", "TIP 01")
  - h2: 60px, 700, letter-spacing −0.03em (white on dark, `#0D0D0D` on light)
  - Cyan underline: 3px solid cyan, width 56px, margin-top 16px, margin-bottom 28px
  - Body: 23px, 400, `rgba(255,255,255,0.55)` on dark / `#6B6B6B` on light, max 3 lines

### Slide 7 — CTA (dark)
- Same dark background as hook
- Layout: centered column, `text-align: center`
- Content:
  - h2: 60px, 700, white, "Save this." or "Which one resonates?"
  - Sub: 22px, `rgba(255,255,255,0.5)`, "More frameworks for design leads →"
  - `@figr.design`: 22px, 500, `#00C8B4`

---

## HTML skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Template A — [TOPIC] | figr.design</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #FAFAFA;
      --ink: #0D0D0D;
      --ink-muted: #6B6B6B;
      --accent: #00C8B4;
      --dark: #0F172A;
      --ghost: #EBEBEB;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', sans-serif;
      background: #D0D0D0;
      display: flex; flex-direction: column; align-items: center;
      gap: 32px; padding: 40px 0;
    }

    .slide {
      width: 1080px; height: 1080px;
      position: relative; overflow: hidden; flex-shrink: 0;
    }

    /* Backgrounds */
    .slide-light {
      background-color: #FAFAFA;
      background-image: radial-gradient(circle, rgba(0,0,0,0.10) 1.5px, transparent 1.5px);
      background-size: 28px 28px;
    }
    .slide-dark {
      background-color: #0F172A;
      background-image: radial-gradient(circle, rgba(255,255,255,0.09) 1.5px, transparent 1.5px);
      background-size: 28px 28px;
    }

    /* Glows on dark slides */
    .slide-dark::before {
      content: ''; position: absolute; top: -100px; right: -100px;
      width: 400px; height: 400px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,200,180,0.12) 0%, transparent 70%);
      z-index: 0; pointer-events: none;
    }
    .slide-dark::after {
      content: ''; position: absolute; bottom: -80px; left: -60px;
      width: 320px; height: 320px; border-radius: 50%;
      background: radial-gradient(circle, rgba(0,200,180,0.06) 0%, transparent 70%);
      z-index: 0; pointer-events: none;
    }

    /* Brand block */
    .brand-block {
      position: absolute; bottom: 30px; right: 44px;
      display: flex; flex-direction: column; align-items: flex-end; gap: 3px; z-index: 2;
    }
    .brand-block .brand-name { font-size: 22px; font-weight: 700; letter-spacing: -0.01em; line-height: 1; }
    .brand-block .brand-handle { font-size: 15px; font-weight: 500; color: #00C8B4; letter-spacing: 0.02em; line-height: 1; }
    .slide-dark .brand-block .brand-name { color: #F1F5F9; }
    .slide-light .brand-block .brand-name { color: #0D0D0D; }

    /* Counter */
    .slide-counter {
      position: absolute; bottom: 36px; left: 44px;
      font-size: 16px; font-weight: 500; letter-spacing: 0.06em; z-index: 2;
    }
    .slide-dark .slide-counter { color: rgba(255,255,255,0.30); }
    .slide-light .slide-counter { color: #BBBBBB; }

    /* Ghost number */
    .ghost-num {
      position: absolute; top: 60px; right: 40px;
      font-size: 220px; font-weight: 700; color: #EBEBEB;
      line-height: 1; letter-spacing: -0.05em; z-index: 0;
      user-select: none;
    }
    .slide-dark .ghost-num { color: rgba(255,255,255,0.04); }

    /* Slide layout */
    .slide-inner {
      position: relative; z-index: 1;
      display: flex; flex-direction: column; justify-content: center;
      height: 100%; padding: 80px;
    }

    /* Chip */
    .chip {
      display: inline-block; background: #00C8B4; color: #ffffff;
      font-size: 14px; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.12em; padding: 8px 18px; border-radius: 4px;
      margin-bottom: 38px; align-self: flex-start;
    }

    /* Hook */
    .slide-1-hook .cyan-bar {
      position: absolute; left: 0; top: 50%; transform: translateY(-50%);
      width: 5px; height: 180px;
      background: linear-gradient(180deg, transparent, #00C8B4 40%, #00C8B4 60%, transparent);
      border-radius: 0 3px 3px 0; z-index: 1;
    }
    h1 { font-size: 92px; font-weight: 700; color: #F1F5F9; line-height: 1.04; letter-spacing: -0.03em; max-width: 880px; margin-bottom: 32px; }
    .hook-sub { font-size: 28px; font-weight: 400; color: rgba(255,255,255,0.62); line-height: 1.4; }

    /* Content slides */
    .slide-label {
      font-size: 14px; font-weight: 600; letter-spacing: 0.14em;
      text-transform: uppercase; color: #00C8B4; margin-bottom: 22px;
    }
    h2 { font-size: 68px; font-weight: 700; line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 0; }
    .slide-dark h2 { color: #F1F5F9; }
    .slide-light h2 { color: #0D0D0D; }
    .cyan-rule { width: 64px; height: 3px; background: #00C8B4; margin: 20px 0 32px; }
    .body-text { font-size: 28px; font-weight: 400; line-height: 1.55; max-width: 860px; }
    .slide-dark .body-text { color: rgba(255,255,255,0.62); }
    .slide-light .body-text { color: #5C5C5C; }

    /* CTA */
    .slide-cta-text { font-size: 68px; font-weight: 700; color: #F1F5F9; letter-spacing: -0.025em; margin-bottom: 24px; max-width: 760px; line-height: 1.08; text-align: center; }
    .slide-cta-sub { font-size: 28px; font-weight: 400; color: rgba(255,255,255,0.6); margin-bottom: 44px; line-height: 1.5; text-align: center; }
    .cta-handle { font-size: 28px; font-weight: 500; color: #00C8B4; text-align: center; }
    .slide-7-cta .slide-inner { align-items: center; text-align: center; }
  </style>
</head>
<body>

  <!-- SLIDE 1 — HOOK -->
  <div class="slide slide-dark slide-1-hook">
    <div class="cyan-bar"></div>
    <div class="slide-inner">
      <span class="chip">[TOPIC LABEL]</span>
      <h1>[Headline — max 2 lines]</h1>
      <p class="hook-sub">[Sub — 1 line]</p>
    </div>
    <span class="slide-counter">01 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 2 — PROBLEM (light) -->
  <div class="slide slide-light">
    <span class="ghost-num">01</span>
    <div class="slide-inner">
      <span class="slide-label">Problem</span>
      <h2>[Problem title]</h2>
      <div class="cyan-rule"></div>
      <p class="body-text">[Body — max 3 lines]</p>
    </div>
    <span class="slide-counter">02 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 3 — TIP 01 (dark) -->
  <div class="slide slide-dark">
    <span class="ghost-num">02</span>
    <div class="slide-inner">
      <span class="slide-label">Tip 01</span>
      <h2>[Tip title]</h2>
      <div class="cyan-rule"></div>
      <p class="body-text">[Body]</p>
    </div>
    <span class="slide-counter">03 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 4 — TIP 02 (light) -->
  <div class="slide slide-light">
    <span class="ghost-num">03</span>
    <div class="slide-inner">
      <span class="slide-label">Tip 02</span>
      <h2>[Tip title]</h2>
      <div class="cyan-rule"></div>
      <p class="body-text">[Body]</p>
    </div>
    <span class="slide-counter">04 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 5 — TIP 03 (dark) -->
  <div class="slide slide-dark">
    <span class="ghost-num">04</span>
    <div class="slide-inner">
      <span class="slide-label">Tip 03</span>
      <h2>[Tip title]</h2>
      <div class="cyan-rule"></div>
      <p class="body-text">[Body]</p>
    </div>
    <span class="slide-counter">05 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 6 — TIP 04 (light) -->
  <div class="slide slide-light">
    <span class="ghost-num">05</span>
    <div class="slide-inner">
      <span class="slide-label">Tip 04</span>
      <h2>[Tip title]</h2>
      <div class="cyan-rule"></div>
      <p class="body-text">[Body]</p>
    </div>
    <span class="slide-counter">06 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 7 — CTA (dark) -->
  <div class="slide slide-dark slide-7-cta">
    <div class="slide-inner">
      <p class="slide-cta-text">Save this.</p>
      <p class="slide-cta-sub">More frameworks for design leads →</p>
      <span class="cta-handle">@figr.design</span>
    </div>
    <span class="slide-counter">07 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

</body>
</html>
```

---

## Design rules

1. **Dark/light alternation:** Slide 1 dark → 2 light → 3 dark → 4 light → 5 dark → 6 light → 7 dark. Never break this rhythm.
2. **Ghost numbers count the content sequence** (01–05 across slides 2–6), not the slide deck position.
3. **Cyan rule is mandatory** between h2 and body on every content slide.
4. **Chip only on slide 1** — not on content slides.
5. **Brand block always present** on every slide, brand-name color switches with background.
6. **No inline styles** — use class-based theming only.
7. **Body copy max 3 lines** — cut ruthlessly. The type is large, whitespace is the asset.
8. **Glows on dark only** — `::before` and `::after` pseudo-elements belong only on `.slide-dark`.
