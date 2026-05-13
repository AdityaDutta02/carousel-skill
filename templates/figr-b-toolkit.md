# Figr B — Toolkit Template

Designed for figr.design's UI/UX Instagram channel. Target audience: design leads and managers.
Use for: practical how-tos, process frameworks, "how to run / do / fix X" carousels.

---

> **⚠️ Universal Rules override this spec.** See `SKILL.md` → "Universal Design Rules".
> - Rule U1: Slide 1 and Slide 7 are already light here — keep them that way.
> - Rule U2: If you introduce any dark middle slide, it must be layered (gradient + grain + accent glow), not flat.
> - Rule U3: Bump every sub-18px size below — chip 14→18, slide label 11→18, slide-counter 16→18, brand handle 15→20, card label 14→18.

---

## When to use

| Use figr-b-toolkit | Use other templates |
|---|---|
| Topic is a practical process or method ("how to run better critiques") | Topic is philosophical or framework-only |
| Content is actionable, tool-like, systematic | Content is editorial or data-driven |
| Steps benefit from a clean card treatment | A bold single-column layout works better |
| Target audience: design leads who want something they can use today | General educational content |

---

## Design system

### Tokens

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#FAFAFA` | Slide background |
| `--surface` | `#FFFFFF` | Card surface |
| `--ink` | `#0D0D0D` | Primary text |
| `--ink-muted` | `#6B6B6B` | Body text |
| `--accent` | `#00C8B4` | Cyan — badge, border-left, CTA |
| `--accent-light` | `#E6FAF8` | Cyan tint — tag chips |
| `--border` | `#E8E8E8` | Card rule, chip borders |

### Typography

- **Font:** Inter (Google Fonts, weights 400/500/600/700)
- **h1 (hook):** 86px, 700, line-height 1.06, letter-spacing −0.025em
- **h2 (tip titles):** 56px, 700, line-height 1.15, letter-spacing −0.02em
- **Body:** 28px, 400, line-height 1.55 (hook sub: 28px)
- **Badge number:** 28px, 700 (inside 56px circle)
- **Badge ring:** 72px circle, border 2px `rgba(0,200,180,0.25)`
- **Chip:** 14px, 600, uppercase, letter-spacing 0.12em
- **Card label:** 14px, 600, uppercase, letter-spacing 0.14em
- **Tag chip:** 14px, 600, uppercase, letter-spacing 0.1em, background `#E6FAF8`, color `#00C8B4`, border-radius 4px, padding 6px 14px
- **Counter:** 16px, 500, letter-spacing 0.06em
- **Brand name:** 22px, 700 — **Brand handle:** 15px, 500, cyan
- **CTA heading:** 54px, 700 — **CTA sub:** 28px, 400 — **CTA button:** 18px, 500

### Brand block

Position: `bottom: 30px; right: 44px;`, stacked column, align right.

```html
<div class="brand-block">
  <span class="brand-name">figr.design</span>
  <span class="brand-handle">@figr.design</span>
</div>
```

`.brand-name`: 20px, 700, `#0D0D0D`. `.brand-handle`: 13px, 500, `#00C8B4`.

---

## Slide structure (7 slides)

### Narrative
Hook → Problem → Tip 01 → Tip 02 → Tip 03 → Tip 04 → CTA

### Slide 1 — Hook (light)

- Background: `#FFFFFF`
- `::before`: two concentric ring halos around center:
  - Outer: 560×560px circle, `border: 1.5px solid rgba(0,200,180,0.18)`, centered, absolutely positioned
  - Inner: 380×380px circle, `border: 1.5px solid rgba(0,200,180,0.10)`, centered
- Layout: flex column, centered, padding 80px, `text-align: left; align-items: flex-start`
- Content:
  - Chip: cyan bg, white text, "HOW TO" or topic label
  - h1: `#0D0D0D`, max 2 lines, max-width 880px
  - Cyan underline: 3px × 72px, margin 20px 0 28px
  - Sub: 24px, `#6B6B6B`, 1 line
- Bottom edge: full-width 3px cyan bar, absolutely positioned `bottom: 0`
- Counter + brand: dark variants

### Slides 2–6 — Problem + Tips (light with card)

- Background: `#FAFAFA` + dark dot grid (`rgba(0,0,0,0.07) 1.5px`, `28px 28px`)
- Centered card:
  - Width: 920px
  - Background: `#FFFFFF`
  - `border-left: 4px solid #00C8B4`
  - `box-shadow: 0 8px 48px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.05)`
  - `border-radius: 20px`
  - Padding: 60px 68px
- Inside card (top to bottom):
  1. **Badge row** (flex, align-items: center, gap 16px, margin-bottom 32px):
     - Badge ring: 66px circle, border 2px `rgba(0,200,180,0.25)`, flex-center
       - Inner badge: 52px circle, background `#00C8B4`, white number 24px 700
     - Slide label: 11px, 600, uppercase, cyan, letter-spacing 0.14em ("PROBLEM", "TIP 01"…)
  2. **h2:** 44px, 700, `#0D0D0D`, margin-bottom 28px
  3. **Horizontal rule:** 1px solid `#E8E8E8`, margin-bottom 28px
  4. **Body:** 22px, 400, `#6B6B6B`, line-height 1.65, max 4 lines
  5. **Tag chip:** bottom of card, aligned start, e.g. "DESIGN CRITIQUE", "SYSTEMS THINKING"
- Counter + brand: dark variants

### Slide 7 — CTA (light)

- Background: `#FFFFFF`
- Bottom edge: full-width 3px cyan bar
- Layout: centered column, text-align center
- Content:
  - Arrow icon: `↓`, 64px, color `#00C8B4`, inside 100×100px `#E6FAF8` circle, margin-bottom 36px
  - h2: 44px, 700, `#0D0D0D`, e.g. "Follow figr.design"
  - Sub: 22px, `#6B6B6B`, margin-bottom 40px
  - Outlined button: "Visit figr.design →", 16px, 500, `border: 2px solid #00C8B4`, color `#00C8B4`, padding 14px 36px, border-radius 8px

---

## HTML skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Template B — [TOPIC] | figr.design</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #FAFAFA;
      --surface: #FFFFFF;
      --ink: #0D0D0D;
      --ink-muted: #6B6B6B;
      --accent: #00C8B4;
      --accent-light: #E6FAF8;
      --border: #E8E8E8;
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
      display: flex; flex-direction: column; align-items: flex-end; gap: 3px; z-index: 2;
    }
    .brand-block .brand-name { font-size: 22px; font-weight: 700; letter-spacing: -0.01em; line-height: 1; color: #0D0D0D; }
    .brand-block .brand-handle { font-size: 15px; font-weight: 500; color: #00C8B4; letter-spacing: 0.02em; line-height: 1; }

    /* Counter */
    .slide-counter {
      position: absolute; bottom: 36px; left: 44px;
      font-size: 16px; font-weight: 500; letter-spacing: 0.06em; color: #BBBBBB; z-index: 2;
    }

    /* Hook */
    .slide-hook { background: #FFFFFF; display: flex; flex-direction: column; justify-content: center; padding: 80px; }
    .slide-hook::before {
      content: ''; position: absolute; top: 50%; left: 50%;
      width: 560px; height: 560px; border-radius: 50%;
      border: 1.5px solid rgba(0,200,180,0.18);
      transform: translate(-50%, -50%); z-index: 0; pointer-events: none;
    }
    .slide-hook::after {
      content: ''; position: absolute; top: 50%; left: 50%;
      width: 380px; height: 380px; border-radius: 50%;
      border: 1.5px solid rgba(0,200,180,0.10);
      transform: translate(-50%, -50%); z-index: 0; pointer-events: none;
    }
    .hook-content { position: relative; z-index: 1; }
    .chip {
      display: inline-block; background: #00C8B4; color: #ffffff;
      font-size: 14px; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.12em; padding: 8px 18px; border-radius: 4px; margin-bottom: 38px;
    }
    h1 { font-size: 86px; font-weight: 700; color: #0D0D0D; line-height: 1.06; letter-spacing: -0.025em; max-width: 920px; margin-bottom: 0; }
    .hook-rule { width: 80px; height: 3px; background: #00C8B4; margin: 22px 0 32px; }
    .hook-sub { font-size: 28px; font-weight: 400; color: #5C5C5C; line-height: 1.45; max-width: 880px; }
    .bottom-bar { position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: #00C8B4; }

    /* Content slides */
    .slide-content {
      background-color: #FAFAFA;
      background-image: radial-gradient(circle, rgba(0,0,0,0.07) 1.5px, transparent 1.5px);
      background-size: 28px 28px;
      display: flex; align-items: center; justify-content: center; padding: 60px;
    }
    .card {
      width: 940px;
      background: #FFFFFF;
      border-left: 4px solid #00C8B4;
      box-shadow: 0 8px 48px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.05);
      border-radius: 20px;
      padding: 64px 68px;
    }
    .badge-row { display: flex; align-items: center; gap: 18px; margin-bottom: 34px; }
    .badge-ring {
      width: 72px; height: 72px; border-radius: 50%; flex-shrink: 0;
      border: 2px solid rgba(0,200,180,0.25);
      display: flex; align-items: center; justify-content: center;
    }
    .badge {
      width: 56px; height: 56px; border-radius: 50%; background: #00C8B4;
      display: flex; align-items: center; justify-content: center;
      font-size: 28px; font-weight: 700; color: #FFFFFF;
    }
    .card-label { font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.14em; color: #00C8B4; }
    h2 { font-size: 56px; font-weight: 700; color: #0D0D0D; line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 30px; }
    .card-rule { height: 1px; background: #E8E8E8; margin-bottom: 30px; }
    .body-text { font-size: 28px; font-weight: 400; color: #5C5C5C; line-height: 1.55; }
    .tag-chip {
      display: inline-block; background: #E6FAF8; color: #00C8B4;
      font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;
      padding: 6px 14px; border-radius: 4px; margin-top: 30px;
    }

    /* CTA */
    .slide-cta { background: #FFFFFF; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 80px; }
    .cta-arrow-wrap { width: 110px; height: 110px; background: #E6FAF8; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 40px; }
    .cta-arrow-icon { font-size: 50px; color: #00C8B4; line-height: 1; }
    .cta-heading { font-size: 54px; font-weight: 700; color: #0D0D0D; letter-spacing: -0.02em; margin-bottom: 20px; }
    .cta-sub { font-size: 28px; color: #5C5C5C; margin-bottom: 44px; }
    .cta-btn {
      display: inline-block; border: 2px solid #00C8B4; color: #00C8B4;
      font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 500;
      padding: 16px 40px; border-radius: 10px; cursor: default;
    }
  </style>
</head>
<body>

  <!-- SLIDE 1 — HOOK -->
  <div class="slide slide-hook">
    <div class="hook-content">
      <span class="chip">HOW TO</span>
      <h1>[Headline — max 2 lines]</h1>
      <div class="hook-rule"></div>
      <p class="hook-sub">[Sub — 1 line]</p>
    </div>
    <div class="bottom-bar"></div>
    <span class="slide-counter">01 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 2 — PROBLEM -->
  <div class="slide slide-content">
    <div class="card">
      <div class="badge-row">
        <div class="badge-ring"><div class="badge">1</div></div>
        <span class="card-label">Problem</span>
      </div>
      <h2>[Problem title]</h2>
      <div class="card-rule"></div>
      <p class="body-text">[Body — max 4 lines]</p>
      <span class="tag-chip">[TAG]</span>
    </div>
    <span class="slide-counter">02 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 3 — TIP 01 -->
  <div class="slide slide-content">
    <div class="card">
      <div class="badge-row">
        <div class="badge-ring"><div class="badge">2</div></div>
        <span class="card-label">Tip 01</span>
      </div>
      <h2>[Tip title]</h2>
      <div class="card-rule"></div>
      <p class="body-text">[Body]</p>
      <span class="tag-chip">[TAG]</span>
    </div>
    <span class="slide-counter">03 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 4 — TIP 02 -->
  <div class="slide slide-content">
    <div class="card">
      <div class="badge-row">
        <div class="badge-ring"><div class="badge">3</div></div>
        <span class="card-label">Tip 02</span>
      </div>
      <h2>[Tip title]</h2>
      <div class="card-rule"></div>
      <p class="body-text">[Body]</p>
      <span class="tag-chip">[TAG]</span>
    </div>
    <span class="slide-counter">04 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 5 — TIP 03 -->
  <div class="slide slide-content">
    <div class="card">
      <div class="badge-row">
        <div class="badge-ring"><div class="badge">4</div></div>
        <span class="card-label">Tip 03</span>
      </div>
      <h2>[Tip title]</h2>
      <div class="card-rule"></div>
      <p class="body-text">[Body]</p>
      <span class="tag-chip">[TAG]</span>
    </div>
    <span class="slide-counter">05 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 6 — TIP 04 -->
  <div class="slide slide-content">
    <div class="card">
      <div class="badge-row">
        <div class="badge-ring"><div class="badge">5</div></div>
        <span class="card-label">Tip 04</span>
      </div>
      <h2>[Tip title]</h2>
      <div class="card-rule"></div>
      <p class="body-text">[Body]</p>
      <span class="tag-chip">[TAG]</span>
    </div>
    <span class="slide-counter">06 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

  <!-- SLIDE 7 — CTA -->
  <div class="slide slide-cta">
    <div class="cta-arrow-wrap"><span class="cta-arrow-icon">↓</span></div>
    <p class="cta-heading">Follow figr.design</p>
    <p class="cta-sub">Weekly frameworks for design leads.</p>
    <span class="cta-btn">Visit figr.design →</span>
    <div class="bottom-bar"></div>
    <span class="slide-counter">07 / 07</span>
    <div class="brand-block"><span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span></div>
  </div>

</body>
</html>
```

---

## Design rules

1. **All slides light** — no dark slides in this template. The hook uses white, the content uses `#FAFAFA`.
2. **Card is always centered** — never full-bleed. The dot-grid background shows around the card.
3. **Badge numbers are sequential** (1–5 across slides 2–6), matching the content order not the deck position.
4. **Tag chip content** — always a 1–2 word theme relevant to the slide content (e.g. "DESIGN CRITIQUE", "DECISION MAKING"). Never leave as "[TAG]".
5. **No ghost numbers** — this template uses numbered badges instead.
6. **Bottom bar on hook and CTA only** — the full-width cyan bar is a hook/CTA device, not a content slide device.
7. **Body copy max 4 lines** — slightly more generous than Template A due to the card container.
8. **Card width fixed at 920px** — do not change. Narrower feels weak; wider clips padding.
