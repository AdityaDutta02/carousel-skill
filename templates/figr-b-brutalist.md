# Figr B — Brutalist Stack Template

Designed for figr.design's UI/UX Instagram channel. Target audience: design leads, product designers, and managers.
Use for: opinionated UI critiques, "N mistakes you're still making" posts, audit posts where every slide is paired with an actual UI mockup that gets called out.

---

> **⚠️ Universal Rules — partial override for this template.** See `SKILL.md` → "Universal Design Rules".
> - **Rule U1 (light first + last slide) — documented exception.** The reference deck opens on `#0A0A0A` (Cover) and closes on `#F5E614` (CTA). Yellow already reads as a saturated light value on mobile feeds (luminance ≈ 89% L*), so the **yellow CTA passes U1** as-is. The **dark Cover is preserved as a template signature** — the dark→yellow→yellow→yellow→yellow→dark→yellow rhythm is the brutalist zine identity (cover and principle bookend the yellow critique block). Flipping the cover to yellow collapses the entire visual structure. Apply U2 depth treatment to the cover instead.
> - **Rule U2 (dark slides need depth).** The two remaining dark slides (Cover, Principle) replace the flat `#0A0A0A` with a 3-stop radial gradient + grain overlay + a low-opacity yolk-yellow accent glow. See the `.dk` rule in the HTML skeleton below.
> - **Rule U3 (minimum mobile text sizes).** The reference used 11–18px for kickers, counters, and footer labels. Bump every sub-18px token: kicker `11→18`, counter `13–15→18`, label bottom row `15→18`, sub eyebrow `14→18`. Hero/body sizes already pass.

---

## When to use

| Use figr-b-brutalist | Use other figr templates |
|---|---|
| Topic is "N UI mistakes / N nav fails / N modal anti-patterns" — every point needs an actual UI mockup paired with the verdict | Topic is data/research-driven (use figr-e-system) |
| You want a high-energy editorial-zine vibe with thick black borders and oversized type | Topic is a quiet long-form list with hand-drawn diagrams (use figr-g-spacing) |
| Audience reaction you want: "ouch, that's me" + share | You want polite, observational tone — pick something else |
| Signals: "UI mistakes", "design crimes", "stop doing", "/ fail", "we audited", "honest review", "audit", "anti-pattern" | — |

**figr-b-brutalist vs figr-g-spacing:**
- G is a notebook — soft cream paper, handwritten "Note:" annotations, sketched diagrams.
- B is a zine — saturated yellow blocks, thick black borders, fake-browser UI mockups with orange X marks across them. Loud, opinionated, designed to be screenshotted.

---

## Design system

### Tokens

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#0A0A0A` | Primary text on yellow, primary background on dark slides, border color |
| `--yolk` | `#F5E614` | Primary background on yellow slides, primary text on dark slides |
| `--flare` | `#FF3D00` | Accent: period dot, X mark, underline, single-character punctuation highlight |
| `--paper` | `#F5F4EF` | Outer workspace cream (only used by the gallery / preview wrapper — never inside a slide) |
| `--panel` | `#FFFFFF` | Mockup panel background (browser chrome, modal body, form field background) |
| `--grey-1` | `#E5E5E5` | Mockup placeholder bars (light grey) |
| `--grey-2` | `#EFEFEF` | Mockup placeholder bars (lighter grey) |
| `--grey-3` | `#E5E0D5` | Workspace divider rule (gallery only) |
| `--muted` | `#9A8F7A` | Eyebrow + footer label on workspace |
| `--muted-2` | `#6B6357` | Secondary muted body on workspace |
| `--ink-55` | `rgba(10,10,10,0.55)` | Counter + small caps secondary on yellow |
| `--ink-25` | `rgba(10,10,10,0.25)` | Modal scrim layer 1 |
| `--ink-20` | `rgba(10,10,10,0.20)` | Modal scrim layer 2 |
| `--yolk-70` | `rgba(245,230,20,0.70)` | Volume marker secondary on dark cover |
| `--yolk-55` | `rgba(245,230,20,0.55)` | Counter on dark Principle slide |

### Typography

- **Display sans:** `Inter` 900 (font-black) — every headline, every hero, every CTA hed. `tracking: -0.04em` to `-0.06em`, `line-height: 0.88–0.92`, `text-transform: uppercase`. No serif. No mono. Inter does everything.
- **Body sans:** `Inter` 500 (font-medium) — body paragraphs at 22–30px, line-height 1.4–1.5.
- **Eyebrow / counter / footer:** `Inter` 700/800/900, `letter-spacing: 0.18–0.24em`, `text-transform: uppercase`.

| Element | Spec |
|---|---|
| Cover hero (5 lines stacked) | Inter 900 180px, line 0.92, tracking −0.045em, yolk on ink |
| Intro hero (2 lines) | Inter 900 200px, line 0.92, tracking −0.045em, ink on yolk |
| Critique giant numeral | Inter 900 200px, line 0.78, tracking −0.06em, ink on yolk |
| Critique headline | Inter 900 88px, line 0.88, tracking −0.04em, ink on yolk |
| Principle hero (4 lines) | Inter 900 185px, line 0.90, tracking −0.045em, yolk on ink, last line flare |
| CTA hero (4 lines) | Inter 900 150px, line 0.92, tracking −0.045em, ink on yolk, period flare |
| Eyebrow ("VOL · 14", "INTRO / 02") | Inter 800–900 18px (bumped from 11–18 per U3), letter-spacing 0.22em, uppercase |
| Counter ("03 / 07") | Inter 800 18px (bumped from 13–15 per U3), letter-spacing 0.22em, uppercase, opacity 0.55–0.6 |
| Body line | Inter 500 22–30px, line 1.4 |
| Mockup nav items | Inter 800 18px, letter-spacing 0.04em, uppercase (bumped from 13 per U3) |
| Mockup step label | Inter 700 18px, letter-spacing 0.16em (bumped from 13 per U3) |
| Pill button label | Inter 900 28px, letter-spacing 0.12em (CTA brand pill) |
| Bottom-rail label ("↻ FOLLOW FOR MORE") | Inter 900 18px, letter-spacing 0.22em |

### Backgrounds & motifs

- **Yellow slides (s2 Intro, s3–s5 Critiques, s7 CTA):** flat `#F5E614`. No gradient, no grain.
- **Dark slides (s1 Cover, s6 Principle):** per U2, replace flat `#0A0A0A` with:
  ```
  background:
    radial-gradient(ellipse 130% 90% at 30% 22%, rgba(245,230,20,0.06) 0%, transparent 55%),
    radial-gradient(ellipse 110% 70% at 70% 70%, #1A1A1A 0%, #0A0A0A 60%, #050505 100%);
  ```
  Plus a grain `::before` (SVG turbulence, opacity 0.22, mix-blend-mode `overlay`).
- **Thick black borders:** the recurring identity beat. Critique slides (s3–s5) have an `8px` solid `--ink` border. CTA slide has a `10px` border. Cover, Intro, Principle have **no** border (full-bleed). The border is part of the layout — it shaves usable canvas to 1064×1334 (8px) or 1060×1330 (10px), so inner padding sits inside the border.
- **Orange period dot:** every hero that ends a slide's headline closes with a `.` rendered in `--flare`. Cover line 5, Intro line 2 (underline instead of dot), Principle line 4 (full word in flare), CTA line 4. This is the signature beat — never use orange anywhere else.
- **Mockup panel:** every critique slide has a `5px` solid ink border around a white panel, sitting inside the outer 8px slide border with flex: 1 vertical space. Mockup panels contain: form fields, fake browser nav, modal stacks. Always grey placeholder bars (`--grey-1`, `--grey-2`) — never real text inside the mockup, never real images. The mockup is the *example of the bad UI*.
- **Orange X mark:** every critique slide carries a flare-colored X icon. Two placements: (a) corner badge — a yolk square with 5px ink border, sitting half-outside the mockup panel at top-right (`-7 / -7`), containing a 70px X with stroke-width 5; (b) inline X — a 48px X with stroke-width 5 sitting next to the offending mockup element (button, submit row). Always `--flare`, always stroke-width 5, always rendered via SVG (no emoji, no Unicode `✕`).
- **Volume marker:** "[ VOL · N ]" on cover top-left, "A FIGR FIELD GUIDE" top-right. Both Inter 900 18px, tracking 0.22em.
- **Swipe cue:** "↳ SWIPE" bottom-left of cover, Inter 900 26px, tracking 0.24em. Bottom-right of cover: 44×4px yolk bar + "@FIGR.DESIGN" handle 18px (bumped from 15 per U3).
- **Keep-scrolling cue:** Intro bottom carries a 60×5px ink bar + "KEEP SCROLLING" Inter 900 18px tracking 0.22em.
- **Follow-rail (CTA):** bottom row has a yolk pill on ink (brand: `@FIGR.DESIGN` Inter 900 28px tracking 0.12em, padding 36/20) + ink "↻ FOLLOW FOR MORE" rail with 50×5px ink bar.

### Brand block

There is **no notebook-style `@figr.design` bottom-left + bookmark glyph**. The brand block lives:
- Cover: bottom-right with 44×4px yolk bar + `@FIGR.DESIGN` (uppercase, ALL CAPS for this template — not lowercase `@figr.design`).
- Intro / Critiques / Principle: no brand block on the slide — the eyebrow row at top carries it via the counter / label.
- CTA: yolk-on-ink pill bottom-left + follow-rail bottom-right.

This is the only figr template that uses **ALL CAPS** handle treatment. Match the zine identity.

---

## Slide structure (7 slides — strict)

```
Slide 1: Cover            — dark, 5-line stacked hero "7 UI / Mistakes / You're / Still / Making."
Slide 2: Intro            — yellow, 2-line hero + audit framing body
Slide 3: Critique 01      — yellow + 8px border + giant "01" + UI mockup + verdict
Slide 4: Critique 02      — yellow + 8px border + giant "02" + UI mockup + verdict
Slide 5: Critique 03      — yellow + 8px border + giant "03" + UI mockup + verdict
Slide 6: Principle        — dark, 4-line takeaway ending in flare word
Slide 7: CTA              — yellow + 10px border + tag-a-designer hero + brand pill
```

**This template is locked to 7 slides.** Adding a 4th or 5th critique breaks the rhythm (cover → intro → 3 critiques → principle → CTA). If the topic has more than 3 critiques, either: (a) pick the top 3 and demote the rest to a follow-up post, or (b) use figr-g-spacing instead. Never expand this template past 7.

### Alternation rhythm

```
S1 dark → S2 yellow → S3 yellow → S4 yellow → S5 yellow → S6 dark → S7 yellow
```

Four consecutive yellow slides (s2–s5) **break** the standard strict-alternation rule from SKILL.md Section 2. This is intentional: the yellow streak is the "critique block", visually separated from cover + principle by the dark slides on either side. The 8px black border that appears only on s3–s5 plus the giant numerals (01/02/03) provide the per-slide visual differentiation within the streak. Do not try to "fix" this by alternating colors within the critique block — it will read as inconsistent.

### Slide 1 — Cover (dark)

- Top row: `[ VOL · N ]` left, `A FIGR FIELD GUIDE` right. Both yolk, Inter 800 18px, tracking 0.22em. Right label is yolk at 70% opacity.
- Hero stack: 5 lines, Inter 900 180px, line 0.92, tracking −0.045em, yolk. Last line ends with a `<span style="color:var(--flare)">.</span>` period.
- Bottom row: `↳ SWIPE` left (Inter 900 26px tracking 0.24em yolk). Right: a 44×4 yolk bar then `@FIGR.DESIGN` Inter 900 18px tracking 0.22em yolk.
- 80px padding inset on all sides. Flex-column space-between.

### Slide 2 — Intro (yellow)

- Top row: `INTRO / 02` left (Inter 800 18px tracking 0.22em ink). `N CRITIQUES INCOMING` right (Inter 700 18px tracking 0.22em ink-55).
- Hero stack: 2 lines, Inter 900 200px, line 0.92, tracking −0.045em, ink. Second line ends in `→`.
- Body: Inter 500 30px line 1.4 max-width 820px ink. One key noun-phrase wrapped in `<span style="font-weight:900; text-decoration: underline; text-decoration-color: var(--flare); text-decoration-thickness: 6px; text-underline-offset: 6px;">…</span>`.
- Bottom rail: 60×5 ink bar + `KEEP SCROLLING` Inter 900 18px tracking 0.22em ink.
- 80px padding inset, flex-column space-between.

### Slides 3–5 — Critique (yellow + 8px ink border)

Identical layout, only content + slide-counter + giant numeral change.

```
Outer container: 1080×1350, padding 72px, flex-column gap 40px, border 8px solid ink.
```

- **Top row (eyebrow):**
  - Left cluster: giant numeral `01` / `02` / `03` (Inter 900 200px, line 0.78, tracking −0.06em) — sits to the *left* of a 2-line label block:
    - Line 1: `NAV / FAIL` (or `BUTTON / FAIL`, `MODAL / FAIL`) — Inter 800 22px tracking 0.22em ink
    - Line 2: `CRITIQUE N / 03` — Inter 700 18px (bumped) tracking 0.2em ink-55
  - Right: `0[N] / 07` slide counter — Inter 700 18px (bumped) tracking 0.22em ink-55, top-padding 12px.
- **Headline:** Inter 900 88px line 0.88 tracking −0.04em uppercase ink. 2 lines max — line break manually inserted (`<br>`).
- **Mockup panel:** `flex: 1` so it fills the remaining vertical space. `background: var(--panel)`, `border: 5px solid var(--ink)`, padding 36px. Content depends on the critique:
  - **Nav fail:** fake browser/dashboard. Top bar: 110×30 ink logo block + 9 nav text items (Inter 900 18px tracking 0.04em uppercase) separated by 16px gap. Below: 200px left sidebar with 5 grey bars (`--grey-1`) of stepping widths, right pane with 28px ink heading bar + 3 grey body bars + 3-cell grid of grey blocks.
  - **Button fail:** centered 640px-wide form mock. 3 stacked field blocks (label = 14px ink-30% bar, input = 56px `--panel` with 3px ink border). Below the third field, a step indicator `STEP 3 OF 3` left + inline X icon (48px flare stroke-5) + a `[SUBMIT]` button rendered as a 36px ink rectangle with yolk Inter 900 17px tracking 0.18em text.
  - **Modal fail:** centered modal stack. Behind the front modal: a 30%-opacity background page mock (1 heading bar + 3 paragraph bars). Two overlapping scrim layers: outer scrim `--ink-25`, inner scrim `--ink-20`. Front modal: white panel 78%×80% with `EDIT ITEM` top-left + close-square top-right. Inside it, a yolk-filled secondary modal 72%×72% labeled `CONFIRM CHANGE`. Inside *that*, a final white panel labeled `ARE YOU SURE?` with `[CANCEL]` (white bordered) + `[YES]` (ink-filled yolk-text) buttons.
- **Corner X badge:** absolute, top-right `−7px / −7px`, 84×84 yolk square with 5px ink border, containing a 70×70 SVG X (`stroke="#FF3D00"` stroke-width 5).
- **Verdict body (below mockup):** Inter 500 22px line 1.4 ink, max-width 800px. Leading bold phrase in Inter 900 (e.g. `Five items, max.`) followed by regular-weight context sentence.

### Slide 6 — Principle (dark)

- Top row: `PRINCIPLE / 06` left (Inter 800 22px tracking 0.22em yolk). `THE TAKEAWAY` right (Inter 700 15→18px tracking 0.22em yolk-55).
- Hero stack: 4 lines, Inter 900 185px, line 0.90, tracking −0.045em, yolk. Final line entirely in `--flare`.
- Bottom row (flex space-between, items-end):
  - Left: 64×5 yolk bar + Inter 500 26px line 1.4 yolk body block, max-width 620px.
  - Right: `06 / 07` Inter 800 18px (bumped) tracking 0.24em yolk-55 whitespace-nowrap.
- 80px padding inset, flex-column space-between.

### Slide 7 — CTA (yellow + 10px ink border)

- Top row: `END / 07` left (Inter 800 22px tracking 0.22em ink). `YOUR TURN` right (Inter 700 18px tracking 0.22em ink-55).
- Hero: 4 lines, Inter 900 150px, line 0.92, tracking −0.045em uppercase ink:
  ```
  ↳ Tag a
  Designer
  Who needs
  This.   ← final period in flare
  ```
- Body: Inter 500 24px line 1.5 ink, max-width 720px. One short sentence ("Save it. Share it. Send it to the PM who insisted on the 9-item nav.")
- Bottom row (flex space-between, items-center, gap-6, flex-wrap):
  - Left: yolk-on-ink pill — `background: var(--ink)`, color `var(--yolk)`, padding 36/20, Inter 900 28px tracking 0.12em uppercase, text `@FIGR.DESIGN`.
  - Right: 50×5 ink bar + `↻ FOLLOW FOR MORE` Inter 900 18px tracking 0.22em ink.
- 80px padding inset, flex-column space-between, border 10px solid ink.

---

## HTML skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1080">
  <title>Template B — [TOPIC] | figr.design</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --ink:#0A0A0A; --yolk:#F5E614; --flare:#FF3D00; --panel:#FFFFFF;
      --grey-1:#E5E5E5; --grey-2:#EFEFEF;
      --ink-55:rgba(10,10,10,0.55); --ink-25:rgba(10,10,10,0.25); --ink-20:rgba(10,10,10,0.20);
      --yolk-70:rgba(245,230,20,0.70); --yolk-55:rgba(245,230,20,0.55);
    }
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Inter',system-ui,sans-serif; background:#F5F4EF; -webkit-font-smoothing:antialiased; }

    .slide { width:1080px; height:1350px; position:relative; overflow:hidden; display:none; color:var(--ink); }
    .slide.active { display:flex; flex-direction:column; }

    /* DARK SLIDE (Cover, Principle) — per U2 */
    .dk {
      color: var(--yolk);
      background:
        radial-gradient(ellipse 130% 90% at 30% 22%, rgba(245,230,20,0.06) 0%, transparent 55%),
        radial-gradient(ellipse 110% 70% at 70% 70%, #1A1A1A 0%, #0A0A0A 60%, #050505 100%);
    }
    .dk::before {
      content:""; position:absolute; inset:0; pointer-events:none;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.96  0 0 0 0 0.90  0 0 0 0 0.12  0 0 0 0.22 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
      mix-blend-mode: overlay; opacity:0.22;
    }

    /* YELLOW SLIDE */
    .yl { background: var(--yolk); color: var(--ink); }

    /* Critique outer border (s3–s5) */
    .bd-8 { border:8px solid var(--ink); }
    /* CTA outer border (s7) */
    .bd-10 { border:10px solid var(--ink); }

    /* PADDING WRAPPERS */
    .pad { padding:80px; flex:1; display:flex; flex-direction:column; justify-content:space-between; position:relative; z-index:2; }
    .pad-crit { padding:72px; flex:1; display:flex; flex-direction:column; gap:40px; position:relative; z-index:2; }

    /* ROW HELPERS */
    .row-top { display:flex; align-items:baseline; justify-content:space-between; }

    /* EYEBROWS */
    .eb { font-weight:800; font-size:18px; letter-spacing:0.22em; text-transform:uppercase; }
    .eb-tight { font-weight:700; font-size:18px; letter-spacing:0.22em; text-transform:uppercase; }
    .counter { font-weight:700; font-size:18px; letter-spacing:0.22em; text-transform:uppercase; opacity:0.55; }

    /* HERO TYPE */
    .hero { font-weight:900; text-transform:uppercase; line-height:0.92; letter-spacing:-0.045em; }
    .h180 { font-size:180px; line-height:0.92; }
    .h200 { font-size:200px; line-height:0.92; }
    .h185 { font-size:185px; line-height:0.90; }
    .h150 { font-size:150px; line-height:0.92; }
    .h88  { font-size:88px;  line-height:0.88; letter-spacing:-0.04em; }
    .h-num{ font-size:200px; line-height:0.78; letter-spacing:-0.06em; font-weight:900; }
    .flare { color: var(--flare); }

    /* BODY */
    .body-30 { font-weight:500; font-size:30px; line-height:1.4; max-width:820px; }
    .body-26 { font-weight:500; font-size:26px; line-height:1.4; max-width:620px; }
    .body-24 { font-weight:500; font-size:24px; line-height:1.5; max-width:720px; }
    .body-22 { font-weight:500; font-size:22px; line-height:1.4; max-width:800px; }

    /* UNDERLINE ACCENT (Intro) */
    .ul-flare { font-weight:900; text-decoration:underline; text-decoration-color:var(--flare); text-decoration-thickness:6px; text-underline-offset:6px; }

    /* BARS / RAILS */
    .bar-yolk { width:44px; height:4px; background:var(--yolk); }
    .bar-ink  { width:60px; height:5px; background:var(--ink); }
    .bar-yolk-tall { width:64px; height:5px; background:var(--yolk); }
    .bar-ink-tall  { width:50px; height:5px; background:var(--ink); }

    /* MOCKUP PANELS */
    .mock { background:var(--panel); border:5px solid var(--ink); flex:1; position:relative; padding:36px; display:flex; flex-direction:column; }
    .mock-form { padding:48px; align-items:center; justify-content:center; }
    .mock-modal { padding:32px; align-items:center; justify-content:center; }

    .x-badge { position:absolute; top:-7px; right:-7px; background:var(--yolk); border:5px solid var(--ink); padding:8px; }
    .x-inline { display:inline-flex; align-items:center; justify-content:center; }

    /* CTA pill */
    .cta-pill { background:var(--ink); color:var(--yolk); padding:20px 36px; font-weight:900; font-size:28px; letter-spacing:0.12em; text-transform:uppercase; }

    /* GREY MOCKUP BARS */
    .gb1 { background:var(--grey-1); }
    .gb2 { background:var(--grey-2); }
  </style>
</head>
<body>

<!-- SLIDE 1 — COVER (dark) -->
<section class="slide dk active" id="s1">
  <div class="pad">
    <div class="row-top">
      <div class="eb">[ VOL · 14 ]</div>
      <div class="eb-tight" style="opacity:0.70;">A FIGR FIELD GUIDE</div>
    </div>
    <div class="hero h180">
      <div>7 UI</div>
      <div>Mistakes</div>
      <div>You're</div>
      <div>Still</div>
      <div>Making<span class="flare">.</span></div>
    </div>
    <div class="row-top" style="align-items:center;">
      <div class="eb" style="font-size:26px; letter-spacing:0.24em;">↳ SWIPE</div>
      <div style="display:flex; align-items:center; gap:12px;">
        <div class="bar-yolk"></div>
        <div class="eb">@FIGR.DESIGN</div>
      </div>
    </div>
  </div>
</section>

<!-- SLIDE 2 — INTRO (yellow) -->
<section class="slide yl" id="s2">
  <div class="pad">
    <div class="row-top">
      <div class="eb">INTRO / 02</div>
      <div class="eb-tight" style="color:var(--ink-55);">3 CRITIQUES INCOMING</div>
    </div>
    <div class="hero h200">
      <div>Let's be</div>
      <div>Honest →</div>
    </div>
    <div>
      <div class="body-30">
        We audited <span class="ul-flare">50 SaaS dashboards</span> shipped this year. Here's what hurt to look at — and what to fix before yours ships.
      </div>
      <div style="margin-top:40px; display:flex; align-items:center; gap:16px;">
        <div class="bar-ink"></div>
        <div class="eb">KEEP SCROLLING</div>
      </div>
    </div>
  </div>
</section>

<!-- SLIDES 3–5 — CRITIQUE (yellow + 8px border) -->
<section class="slide yl bd-8" id="s3">
  <div class="pad-crit">
    <div class="row-top" style="align-items:flex-start;">
      <div style="display:flex; align-items:baseline; gap:28px;">
        <div class="h-num">01</div>
        <div>
          <div class="eb" style="font-size:22px;">NAV / FAIL</div>
          <div class="eb-tight" style="margin-top:8px; font-size:18px; color:var(--ink-55); letter-spacing:0.2em;">CRITIQUE 01 / 03</div>
        </div>
      </div>
      <div class="counter" style="padding-top:12px;">03 / 07</div>
    </div>
    <div class="hero h88">Nav crammed<br>with 9 items.</div>
    <div class="mock">
      <!-- mockup content per critique — see slide-specific notes below -->
      <div class="x-badge">
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#FF3D00" stroke-width="5" stroke-linecap="round">
          <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>
        </svg>
      </div>
    </div>
    <div class="body-22">
      <span style="font-weight:900;">Five items, max.</span> Past that you're hiding things from yourself, not your user.
    </div>
  </div>
</section>

<!-- SLIDE 6 — PRINCIPLE (dark) -->
<section class="slide dk" id="s6">
  <div class="pad">
    <div class="row-top">
      <div class="eb" style="font-size:22px;">PRINCIPLE / 06</div>
      <div class="eb-tight" style="color:var(--yolk-55);">THE TAKEAWAY</div>
    </div>
    <div class="hero h185">
      <div>Design</div>
      <div>Hurts</div>
      <div>When it</div>
      <div class="flare">Works.</div>
    </div>
    <div style="display:flex; justify-content:space-between; align-items:flex-end; gap:40px;">
      <div style="max-width:620px;">
        <div class="bar-yolk-tall" style="margin-bottom:24px;"></div>
        <div class="body-26">
          Good UI annoys you by removing the comfort you grew up with. The friction is the feature — it's the old habit dying.
        </div>
      </div>
      <div class="counter" style="color:var(--yolk-55); white-space:nowrap; padding-bottom:4px;">06 / 07</div>
    </div>
  </div>
</section>

<!-- SLIDE 7 — CTA (yellow + 10px border) -->
<section class="slide yl bd-10" id="s7">
  <div class="pad">
    <div class="row-top">
      <div class="eb" style="font-size:22px;">END / 07</div>
      <div class="eb-tight" style="color:var(--ink-55);">YOUR TURN</div>
    </div>
    <div class="hero h150">
      <div>↳ Tag a</div>
      <div>Designer</div>
      <div>Who needs</div>
      <div>This<span class="flare">.</span></div>
    </div>
    <div>
      <div class="body-24" style="margin-bottom:40px;">
        Save it. Share it. Send it to the PM who insisted on the 9-item nav.
      </div>
      <div style="display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap;">
        <div class="cta-pill">@FIGR.DESIGN</div>
        <div style="display:flex; align-items:center; gap:16px;">
          <div class="bar-ink-tall"></div>
          <div class="eb">↻ FOLLOW FOR MORE</div>
        </div>
      </div>
    </div>
  </div>
</section>

</body>
</html>
```

---

## Mockup recipes (s3–s5 critique panels)

Pick the mockup that fits the critique. Every mockup follows the same envelope: white background, 5px ink border, grey placeholder bars only, orange X mark (corner or inline).

### Nav / Fail (over-stuffed nav)

```html
<div class="mock">
  <!-- top nav bar -->
  <div style="display:flex; align-items:center; justify-content:space-between; border-bottom:3px solid var(--ink); padding-bottom:20px;">
    <div style="width:110px; height:30px; background:var(--ink);"></div>
    <div style="display:flex; align-items:center; gap:16px; font-weight:800; font-size:18px; letter-spacing:0.04em; text-transform:uppercase;">
      <span>Dashboard</span><span>Projects</span><span>Calendar</span><span>Inbox</span>
      <span>Reports</span><span>Goals</span><span>Team</span><span>Billing</span><span>Settings</span>
    </div>
  </div>
  <!-- two-pane body -->
  <div style="margin-top:36px; display:flex; gap:24px; flex:1;">
    <div style="width:200px; display:flex; flex-direction:column; gap:16px;">
      <div class="gb1" style="height:16px;"></div>
      <div class="gb1" style="height:16px; width:75%;"></div>
      <div class="gb1" style="height:16px; width:66%;"></div>
      <div class="gb1" style="height:16px; width:50%;"></div>
      <div class="gb1" style="height:16px; width:60%;"></div>
    </div>
    <div style="flex:1; display:flex; flex-direction:column; gap:16px;">
      <div style="height:28px; background:var(--ink); width:50%;"></div>
      <div class="gb2" style="height:12px;"></div>
      <div class="gb2" style="height:12px; width:83%;"></div>
      <div class="gb2" style="height:12px; width:75%;"></div>
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-top:12px; flex:1;">
        <div class="gb2"></div><div class="gb2"></div><div class="gb2"></div>
      </div>
    </div>
  </div>
  <div class="x-badge">[SVG X]</div>
</div>
```

### Button / Fail (Submit label)

```html
<div class="mock mock-form">
  <div style="width:640px; display:flex; flex-direction:column; gap:28px;">
    <!-- 3 form fields -->
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div style="height:16px; background:var(--ink); width:30%;"></div>
      <div style="height:56px; border:3px solid var(--ink); background:var(--panel);"></div>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div style="height:16px; background:var(--ink); width:22%;"></div>
      <div style="height:56px; border:3px solid var(--ink); background:var(--panel);"></div>
    </div>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div style="height:16px; background:var(--ink); width:36%;"></div>
      <div style="height:56px; border:3px solid var(--ink); background:var(--panel);"></div>
    </div>
    <!-- step row + inline X + SUBMIT button -->
    <div style="margin-top:24px; display:flex; align-items:center; justify-content:space-between;">
      <div style="font-weight:700; font-size:18px; letter-spacing:0.16em; color:rgba(10,10,10,0.50); text-transform:uppercase;">STEP 3 OF 3</div>
      <div style="display:flex; align-items:center; gap:20px;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF3D00" stroke-width="5" stroke-linecap="round">
          <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>
        </svg>
        <div style="background:var(--ink); color:var(--yolk); padding:16px 32px; font-weight:900; font-size:17px; letter-spacing:0.18em;">SUBMIT</div>
      </div>
    </div>
  </div>
</div>
```

### Modal / Fail (modal opens another modal)

```html
<div class="mock mock-modal">
  <!-- background page mock (30% opacity) -->
  <div style="position:absolute; inset:32px; display:flex; flex-direction:column; gap:12px; padding:24px; opacity:0.30;">
    <div style="height:16px; background:var(--ink); width:33%;"></div>
    <div style="height:12px; background:rgba(10,10,10,0.40);"></div>
    <div style="height:12px; background:rgba(10,10,10,0.40); width:83%;"></div>
    <div style="height:12px; background:rgba(10,10,10,0.40); width:66%;"></div>
  </div>
  <!-- scrim 1 -->
  <div style="position:absolute; inset:0; background:var(--ink-25);"></div>
  <!-- outer modal -->
  <div style="position:relative; background:var(--panel); border:5px solid var(--ink); width:78%; height:80%; display:flex; align-items:center; justify-content:center; padding:24px;">
    <div style="position:absolute; top:16px; left:24px; font-weight:800; font-size:18px; letter-spacing:0.2em;">EDIT ITEM</div>
    <div style="position:absolute; top:16px; right:20px; width:24px; height:24px; border:3px solid var(--ink);"></div>
    <!-- scrim 2 inside outer modal -->
    <div style="position:absolute; inset:0; background:var(--ink-20);"></div>
    <!-- middle modal (yolk) -->
    <div style="position:relative; background:var(--yolk); border:5px solid var(--ink); width:72%; height:72%; display:flex; align-items:center; justify-content:center; padding:20px;">
      <div style="position:absolute; top:12px; left:20px; font-weight:800; font-size:18px; letter-spacing:0.2em;">CONFIRM CHANGE</div>
      <div style="position:absolute; top:12px; right:16px; width:20px; height:20px; border:3px solid var(--ink);"></div>
      <!-- innermost modal (white) -->
      <div style="background:var(--panel); border:4px solid var(--ink); width:78%; height:70%; display:flex; flex-direction:column; padding:20px; gap:12px;">
        <div style="font-weight:800; font-size:18px; letter-spacing:0.18em;">ARE YOU SURE?</div>
        <div class="gb1" style="height:10px;"></div>
        <div class="gb1" style="height:10px; width:80%;"></div>
        <div style="margin-top:auto; align-self:flex-end; display:flex; gap:12px;">
          <div style="height:32px; width:80px; border:3px solid var(--ink); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:18px;">CANCEL</div>
          <div style="height:32px; width:80px; background:var(--ink); color:var(--yolk); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:18px;">YES</div>
        </div>
      </div>
    </div>
  </div>
  <div class="x-badge">[SVG X]</div>
</div>
```

You can swap in different mockups per topic (form / table / toast / empty state / pricing card / etc.) — the rules are:
1. Always pure white panel + 5px ink border.
2. Only grey placeholder bars and ink-filled rectangles. No real copy inside the mockup other than the **one** offending element being critiqued (the 9 nav items, the SUBMIT button, the modal labels).
3. One flare X mark per slide — either corner badge or inline.

---

## Design rules

1. **7 slides, locked.** Never expand. Topic must compress to 3 critiques + cover + intro + principle + CTA.
2. **Yellow + ink + flare only.** No third accent, no gradients on yellow slides, no muted greens/blues. Flare only on: period dots, X marks, underline accent (Intro), final-line word (Principle hero), giant period (CTA).
3. **Inter 900 for every hero.** No serif, no mono. The brutalist identity is "one font, every weight, mostly max weight".
4. **Critique slides always have a UI mockup.** Type-only critique slides break the template — every accusation must show the offense.
5. **One X per critique slide.** Either the corner badge or the inline X — not both.
6. **All caps for everything except body paragraphs.** Heroes, eyebrows, counters, brand handle (`@FIGR.DESIGN`, not `@figr.design`). Body paragraphs (Inter 500 22–30px) stay sentence-case.
7. **Borders define the rhythm.** Critique slides = 8px ink border. CTA = 10px ink border. Cover, Intro, Principle = no border. Don't add borders to slides that shouldn't have them, or remove them from slides that should.
8. **Period dots are sacred.** The flare `.` ends the Cover hero, the CTA hero, and matches the rhythm. Don't replace with `!` or remove for "cleaner" copy.
9. **Counters use slash format.** `03 / 07`, never `3/7`, never `slide 3 of 7`.
10. **Brand block is ALL CAPS.** This is the only figr template where the brand handle reads `@FIGR.DESIGN` instead of `@figr.design`. Match the zine voice.
11. **No bookmark glyph.** The standard figr bookmark + brand row at the bottom does **not** appear on this template. Brand placement is custom per slide as described above.
12. **No grain on yellow.** Yellow slides are flat. Grain lives on dark slides only (and gives Cover + Principle their depth per U2).
13. **Cover hero must parse as ONE claim top-to-bottom in 1 second.** Reader on a feed has under one second per slide. The 5 stacked lines, read in order, must compose a sentence the reader understands without the next slide explaining it. **Banned:** rhetorical questions whose answer is a single isolated noun on the next line (e.g. `WHEN / DID YOU / QUIT / TYPING? / CLICKS.` — the `CLICKS.` line by itself doesn't tell the reader anything about clicks). **When the hero is abstract or short, ground it with a brand-callout in the top eyebrow** — e.g. `[ WHISPR · ALEXA · SIRI ]` left, `A FIGR FIELD GUIDE` right. The brand callout gives the reader the context the hero alone can't deliver. **Test:** read the 5 lines aloud as one sentence. If it doesn't compose, rewrite.

---

## Content recipe

The template lives or dies on whether the 3 critiques actually land. Before writing copy:

- **Pick critiques that are visually self-evident.** A nav with 9 items is obviously wrong when you see it. "Button labeled Submit" is obviously wrong when you see the form. "Modal opens another modal" is obviously wrong when you see the stack. If a critique needs explaining to be obvious, it doesn't fit this template — use figr-e-system.
- **Each verdict is ≤ 22 words.** Lead with a bold 3–5-word fact (`Five items, max.` / `"Submit" ends nothing.` / `If a decision needs a second modal,`), then a short context sentence.
- **Cover hero is 5 short lines.** 1–2 words per line. Each line is one beat. The final line ends in `.<span class=flare>` period.
- **Intro hero is 2 lines.** First line sets the tone (`Let's be`), second line lands the arrow (`Honest →`). The body line below frames the audit and uses one orange-underlined noun phrase.
- **Principle hero is 4 lines.** A flat declarative truth, with the last word entirely in flare. Body below explains the principle in ≤ 35 words.
- **CTA hero is 4 lines.** Starts with `↳ Tag a` or `↳ Save this`. Ends with a flare period. Body line invites a specific share moment.

---

## File reference

Reference: `~/Downloads/carousel-1779283043206/` (React/Tailwind). Re-implemented for instagram-carousel skill as plain HTML/CSS at 1080×1350. 7 slides, ALL CAPS brand identity, locked structure.

Topic used in reference: **"7 UI Mistakes You're Still Making"** (only 3 critiques shown in deck — the "7" is a marketing claim signaling there's more in the next post).
