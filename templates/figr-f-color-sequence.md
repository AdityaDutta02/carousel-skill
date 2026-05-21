# Figr F — Color Sequence Template

Designed for figr.design's UI/UX Instagram channel. Target audience: design leads, product designers, managers.
Use for: opinionated UI critique decks where each slide is a single full-bleed colored poster and the deck's rhythm comes from the *palette cycling through seven hues* rather than from splits, mockups, or borders.

This is the **pure typography poster series** sibling of figr-b and figr-h. Where figr-b ships a yolk-yellow brutalist zine with thick black borders and fake-UI mockups, and figr-h ships a three-color Bauhaus split-screen with giant numerals, **figr-f ships a seven-color palette cycle** — one saturated color per slide, one declarative statement per slide, nothing else. The art direction is closest to a contemporary editorial poster series (Pentagram / It's Nice That / Wallpaper covers).

---

> **⚠️ Universal Rules — partial override for this template.** See `SKILL.md` → "Universal Design Rules".
> - **Rule U1 (light first + last slide) — saturated-palette exception (cover only).** The CTA (s7) is already on the lightest token (`--cream` `#F2EDE3`) so the deck closes light, in line with U1. The Cover (s1) opens on **`--aubergine` `#2C1F2D`** — a deep wine-purple that *is* dark enough to read as a near-black at thumbnail size. We keep the aubergine cover because the whole template's signature beat is *seven hues cycling through seven slides* — replacing s1 with cream would break the cycle and collapse the template into "another cream-and-color deck". To honor U1's intent (the deck should not render as a black void in feed), the aubergine cover is treated under Rule U2: a 3-stop radial gradient (`#3A2A3B → #2C1F2D → #1E1320`), an SVG turbulence grain layer, and a soft terracotta glow blob in the upper-third. At thumbnail scale the cover still reads as a saturated wine field, not a dead navy void. If a topic genuinely needs a fully-light opening (e.g. a soft brand-safety or wellness post), switch to figr-h-color-blocks instead — that template was designed with light bookend flexibility in mind.
> - **Rule U2 (dark slides need depth).** Three slides use saturated dark fields: `--aubergine` (s1 Cover), `--sage` (s4) and `--navy` (s6 Principle). All three replace the flat hex with a 3-stop radial gradient + grain `::before` (SVG turbulence, opacity 0.22, blend `overlay`) + a low-opacity accent glow (terracotta on the aubergine cover, cream on sage, terracotta on navy). The depth is subtle — at thumbnail size the colors still read as solid fields, but on a phone screen they gain the breathing they need.
> - **Rule U3 (minimum mobile text sizes).** The reference used 12px for top and bottom labels everywhere. Bump every sub-18px token: top eyebrow `12→18`, bottom action verb `12→18`, slide counter `12→18`. Hero sizes already pass — heroes are 120–260px, body is 26px.

---

## When to use

| Use figr-f-color-sequence | Use other figr templates |
|---|---|
| Topic is "N UI mistakes / N anti-patterns / N flaws" and every verdict can stand on a 2–3 line declarative type-set without needing a mockup, diagram, or numeral graphic | Topic needs a UI mockup paired with the verdict — use figr-b-brutalist |
| You want a **palette-driven** deck — the visual interest comes from cycling through seven distinct hues, not from layout splits or decoration | You want the verdict paired with a giant numeral as the graphic — use figr-h-color-blocks |
| You want a clean, editorial poster-series feel — full-bleed color, one statement per slide, no borders, no mockups, no diagrams | You want a soft notebook with hand-drawn diagrams and Caveat annotations — use figr-g-spacing |
| Audience reaction you want: "this looks like a Pentagram poster series" + save | You want research data, eye-tracking stats, named sources — use figr-e-system |
| Signals: "UI mistakes", "design crimes", "things to stop doing", "anti-pattern", "color sequence", "color cycle", "editorial poster", "palette deck", "issue N" magazine framing | — |

**figr-f vs figr-b vs figr-h vs figr-g:**
- **figr-b (Brutalist Stack):** loud yolk-yellow zine, thick black borders, fake browser/form/modal mockups with orange X marks. Says "this UI is broken — look at it".
- **figr-g (Spacing):** notebook paper, hand-drawn diagrams, Caveat "Note:" annotations, ruler arcs. Says "let's think through this together".
- **figr-h (Color Blocks):** Bauhaus poster, 3 colors split-screen, oversized numerals as graphic elements. Says "here is the principle — internalize it".
- **figr-f (Color Sequence):** editorial poster series, 7 colors full-bleed, one statement per slide, no decorative furniture at all. Says "each rule is its own poster — pin them in order".

---

## Design system

### Tokens

| Token | Value | Slide usage |
|---|---|---|
| `--cream` | `#F2EDE3` | s2 Intro bg, s7 CTA bg, foreground on every saturated slide |
| `--aubergine` | `#2C1F2D` | s1 Cover bg |
| `--terracotta` | `#BE4A2F` | s3 Critique 01 bg, accent in CTA tag line, accent glow on aubergine/navy |
| `--sage` | `#5F6B4F` | s4 Critique 02 bg |
| `--ochre` | `#C99848` | s5 Critique 03 bg |
| `--navy` | `#1B2840` | s6 Principle bg |
| `--ink` | `#1A1A1C` | Primary text on cream, secondary on ochre |
| `--cream-55` | `rgba(242,237,227,0.55)` | Top/bottom labels on dark or mid-saturated slides |
| `--ink-55` | `rgba(26,26,28,0.55)` | Top/bottom labels on cream or ochre slides |

There are **seven colors that cycle** (cream → aubergine → cream → terracotta → sage → ochre → navy → cream). This is the entire visual identity. Do not introduce an eighth color. Do not skip a color. Do not reorder the cycle for "balance" — the order is the rhythm.

### Typography

- **Display sans:** `Inter` 900 (font-black) — every hero. `tracking: -0.035em` to `-0.04em`, `line-height: 0.88–0.95`. No oblique, no condensed, no second weight inside a hero.
- **Body sans:** `Inter` 500 (font-medium) — the s7 CTA tag line at 26px line 1.4.
- **Eyebrow / counter / footer / action verb:** `Inter` 600–700, `letter-spacing: 0.28em` (slightly wider than figr-h's 0.22em — this is the poster-series rail), `text-transform: uppercase`.

| Element | Spec |
|---|---|
| s1 Cover hero (2 lines, ALL CAPS) | Inter 900 **178px**, line 0.88, tracking −0.045em, uppercase, cream on aubergine. Sized for 9-char-max lines (e.g. `MISTAKES.`); reduce further if longer words. |
| s2 Intro hero (4 lines) | Inter 900 **108px**, line 0.95, tracking −0.035em, ink on cream. Sized so 14-char lines (e.g. `SaaS products.`) fit one line. |
| s3 Crit 01 hero (2 lines, right-aligned, `white-space:nowrap`) | Inter 900 **168px**, line 0.92, tracking −0.035em, cream on terracotta. `white-space:nowrap` forced — keep each verdict line ≤ 11 chars (`Nine items.` / `Zero recall.`). |
| s4 Crit 02 hero (3 lines, single-word stack) | Inter 900 **200px**, line 0.9, tracking −0.035em, cream on sage — left-aligned bottom. Each line is one short lowercase word (`Submit / submits / nothing.`). |
| s5 Crit 03 hero (3 lines, centered) | Inter 900 **172px**, line 0.95, tracking −0.035em, ink on ochre. Each line ≤ 11 chars (`A modal / inside / a modal.`). |
| s6 Principle hero (2 lines, ALL CAPS) | Inter 900 **190px**, line 0.9, tracking −0.045em, cream on navy — top-aligned. Single-word lines ending in periods (`LESS. / ALWAYS.`); both ≤ 7 chars. |
| s7 CTA hero (2 lines) | Inter 900 **220px**, line 0.92, tracking −0.035em, ink on cream — bottom-aligned. Each line ≤ 6 chars (`Share / this.`). |
| s7 CTA tag line | Inter 500 **26px**, line 1.4, terracotta, max-width 640px |
| Top eyebrow (every slide) | Inter 700 **18px** (bumped from 12 per U3), letter-spacing 0.28em, uppercase, opacity 0.55 |
| Bottom label / action verb / counter | Inter 700 **18px** (bumped from 12 per U3), letter-spacing 0.28em, uppercase, opacity 0.55 |

The hero is allowed to break out of the visual grid — sizes were tuned per slide so each verdict fills its color field. **Do not normalize all heroes to one size**. The per-slide size variation is part of the rhythm.

### Layout system — full-bleed single color per slide

Every slide is a single full-bleed color field with the same chrome:
- 96px padding on all sides.
- Top label (uppercase eyebrow) anchored to the top.
- Bottom label (uppercase action verb / counter) anchored to the bottom.
- Hero centered inside the remaining space, with per-slide alignment (see Slide structure below).

This is the entire layout system. No splits. No panels. No borders. No mockups. No numerals. No icons. Just one color, two labels, and one hero.

### Color sequence (locked)

```
S1 AUBERGINE → S2 CREAM → S3 TERRACOTTA → S4 SAGE → S5 OCHRE → S6 NAVY → S7 CREAM
```

This deliberately breaks the strict alternation rule from `SKILL.md` Section 2. The seven-color sequence *is* the identity. Saturated colors run consecutively (s3 terracotta → s4 sage → s5 ochre) and the eye still reads variation because the hue family shifts every slide. If a topic forces a structural change (e.g. you need 4 critiques), switch to figr-g — never extend this sequence past 7 slides.

### Brand block

Handle treatment: `@figr.design` rendered uppercase via `text-transform: uppercase`, lowercase in source HTML. It appears as the **bottom-right label** on s1 Cover and s7 CTA only — the critique slides (s3–s6) use the bottom rail for action verbs ("Cut to five.", "Name the act.", "One layer, always.", "Always."). The eyebrow rail on the top of every slide carries the issue / section identity.

No bookmark glyph. No swipe cue. No volume marker. No slide-counter pill. The cycling palette is the navigation cue.

---

## Slide structure (7 slides — strict)

```
Slide 1: Cover            — AUBERGINE, bottom-aligned 2-line hero "Seven / Mistakes."
Slide 2: Intro            — CREAM, centered 4-line 120px preface
Slide 3: Critique 01      — TERRACOTTA, right-aligned 2-line verdict
Slide 4: Critique 02      — SAGE, bottom-left 3-line verdict
Slide 5: Critique 03      — OCHRE, centered 3-line verdict
Slide 6: Principle        — NAVY, top-aligned 2-line hero
Slide 7: CTA              — CREAM, bottom-left 2-line hero + terracotta tag
```

**This template is locked to 7 slides.** The seven-color cycle requires exactly seven slides. Adding an 8th critique breaks the palette and forces the deck into an arbitrary structure. If the topic has more than 3 critiques, either: (a) pick the top 3 and demote the rest to a follow-up post, or (b) switch to figr-g-spacing. Never expand this template past 7.

### Slide 1 — Cover (AUBERGINE)

- Container: full AUBERGINE with U2 depth treatment (3-stop radial gradient + grain `::before` + terracotta glow blob upper-third).
- Padding 96px, flex-column.
- Top: `UI Critique · Issue N` — Inter 700 18px tracking 0.28em uppercase `--cream-55`.
- Hero (flex 1, bottom-aligned): 2-line hero — Inter 900 **178px** line 0.88 tracking −0.045em uppercase cream. The line break order matters. The reference uses `Seven / Mistakes.` Final line always ends in a period (single character, same color — never a separate accent dot like figr-b). **Hard ceiling: keep each rendered ALL-CAPS line ≤ 9 chars including the period** — 178px Inter 900 caps fits ~9 chars in the 888px content area; longer words clip the right edge.
- Bottom: `@figr.design` — Inter 700 18px tracking 0.28em uppercase `--cream-55`.

### Slide 2 — Intro (CREAM)

- Container: full CREAM, flat (no depth treatment needed — cream is light).
- Padding 96px, flex-column.
- Top: `Preface` — Inter 700 18px tracking 0.28em uppercase `--ink-55`.
- Hero (flex 1, centered): 4-line preface — Inter 900 **108px** line 0.95 tracking −0.035em ink. Plain sentence-case. The reference uses:
  ```
  We audited fifty
  SaaS products.
  Same five flaws,
  over and over.
  ```
  The line break order is the rhythm — read it out loud and adjust so each line lands.
- Bottom: `02 of 07` — Inter 700 18px tracking 0.28em uppercase `--ink-55`.

### Slide 3 — Critique 01 (TERRACOTTA)

- Container: full TERRACOTTA. No depth treatment — terracotta is mid-saturated and bright enough to read as itself.
- Padding 96px, flex-column.
- Top: `01 · Navigation` — Inter 700 18px tracking 0.28em uppercase `--cream-55`.
- Hero (flex 1, **right-aligned center**): 2-line verdict — Inter 900 **168px** line 0.92 tracking −0.035em cream, `text-align: right`, `white-space: nowrap`.
  Reference:
  ```
  Nine items.
  Zero recall.
  ```
- Bottom: `Cut to five.` — Inter 700 18px tracking 0.28em uppercase `--cream-55`.

### Slide 4 — Critique 02 (SAGE)

- Container: full SAGE with U2 depth treatment (3-stop radial gradient + grain + cream glow blob).
- Padding 96px, flex-column.
- Top: `02 · Call to action` — Inter 700 18px tracking 0.28em uppercase `--cream-55`.
- Hero (flex 1, **bottom-left aligned**): 3-line verdict — Inter 900 **200px** line 0.9 tracking −0.035em cream, `text-align: left`.
  Reference:
  ```
  Submit
  submits
  nothing.
  ```
- Bottom: `Name the act.` — Inter 700 18px tracking 0.28em uppercase `--cream-55`.

### Slide 5 — Critique 03 (OCHRE)

- Container: full OCHRE. No depth treatment — ochre is bright/warm and renders as itself.
- Padding 96px, flex-column.
- Top: `03 · Modal depth` — Inter 700 18px tracking 0.28em uppercase `--ink-55` (ink on ochre, not cream — the ochre is too light for cream eyebrows to read).
- Hero (flex 1, **centered both axes**): 3-line verdict — Inter 900 **172px** line 0.95 tracking −0.035em ink, `text-align: center`.
  Reference:
  ```
  A modal
  inside
  a modal.
  ```
- Bottom: `One layer, always.` — Inter 700 18px tracking 0.28em uppercase `--ink-55`.

### Slide 6 — Principle (NAVY)

- Container: full NAVY with U2 depth treatment (3-stop radial gradient + grain + terracotta glow blob).
- Padding 96px, flex-column.
- Top: `Principle` — Inter 700 18px tracking 0.28em uppercase `--cream-55`.
- Hero (flex 1, **top-aligned, slight top padding 16px**): 2-line hero — Inter 900 **190px** line 0.9 tracking −0.045em uppercase cream, `text-align: left`. Reference uses two single words ending in periods:
  ```
  Less.
  Always.
  ```
  If you cannot reduce the principle to 2 single-word lines ending in periods, the principle is not unified — go back and rewrite the critiques.
- Bottom: `06 of 07` — Inter 700 18px tracking 0.28em uppercase `--cream-55`.

### Slide 7 — CTA (CREAM)

- Container: full CREAM, flat.
- Padding 96px, flex-column.
- Top: `Postscript` — Inter 700 18px tracking 0.28em uppercase `--ink-55`.
- Hero (flex 1, **bottom-left aligned**):
  - 2-line hero — Inter 900 **220px** line 0.92 tracking −0.035em ink, `text-align: left`. Reference: `Share / this.`
  - Tag line (margin-top 40px): Inter 500 **26px** line 1.4 `--terracotta`, max-width 640px. Reference: "Send it to a designer who hasn't audited their nav in a while." This is the only place terracotta touches text on cream — it's the only color-on-color moment in the deck.
- Bottom: `@figr.design` — Inter 700 18px tracking 0.28em uppercase `--ink-55`.

---

## HTML skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1080">
  <title>Template F — [TOPIC] | figr.design</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --cream:#F2EDE3;
      --aubergine:#2C1F2D;
      --terracotta:#BE4A2F;
      --sage:#5F6B4F;
      --ochre:#C99848;
      --navy:#1B2840;
      --ink:#1A1A1C;
      --cream-55:rgba(242,237,227,0.55);
      --ink-55:rgba(26,26,28,0.55);
    }
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Inter',system-ui,sans-serif; background:#0a0a0a; -webkit-font-smoothing:antialiased; }

    .slide { width:1080px; height:1350px; position:relative; overflow:hidden; display:none; }
    .slide.active { display:flex; }

    .pad-frame { position:relative; z-index:2; width:100%; height:100%; padding:96px;
                 display:flex; flex-direction:column; }

    .eb { font-weight:700; font-size:18px; letter-spacing:0.28em; text-transform:uppercase; }
    .hero { font-weight:900; letter-spacing:-0.035em; }
    .hero-up { text-transform:uppercase; }

    .hero-area { flex:1; display:flex; }

    /* ---- color fields ---- */
    .cream { background:var(--cream); color:var(--ink); }
    .terracotta { background:var(--terracotta); color:var(--cream); }
    .ochre { background:var(--ochre); color:var(--ink); }

    /* ---- U2 depth treatments ---- */
    .aubergine {
      color:var(--cream);
      background:
        radial-gradient(ellipse 90% 70% at 30% 25%, rgba(190,74,47,0.10) 0%, transparent 60%),
        radial-gradient(ellipse 130% 110% at 70% 75%, #3A2A3B 0%, #2C1F2D 55%, #1E1320 100%);
      position:relative;
    }
    .sage {
      color:var(--cream);
      background:
        radial-gradient(ellipse 100% 70% at 80% 20%, rgba(242,237,227,0.06) 0%, transparent 55%),
        radial-gradient(ellipse 130% 110% at 30% 80%, #6E7A5E 0%, #5F6B4F 55%, #4B563E 100%);
      position:relative;
    }
    .navy {
      color:var(--cream);
      background:
        radial-gradient(ellipse 110% 80% at 30% 22%, rgba(190,74,47,0.08) 0%, transparent 55%),
        radial-gradient(ellipse 130% 100% at 70% 80%, #243056 0%, #1B2840 55%, #131A32 100%);
      position:relative;
    }
    .aubergine::before,
    .sage::before,
    .navy::before {
      content:""; position:absolute; inset:0; pointer-events:none;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.92  0 0 0 0 0.86  0 0 0 0.22 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
      mix-blend-mode: overlay; opacity:0.22; z-index:1;
    }

    /* ---- per-slide hero sizing (tuned to 888px content area; do not enlarge) ---- */
    .h-cover     { font-size:178px; line-height:0.88; letter-spacing:-0.045em; text-transform:uppercase; }
    .h-intro     { font-size:108px; line-height:0.95; }
    .h-crit-r    { font-size:168px; line-height:0.92; text-align:right; white-space:nowrap; }
    .h-crit-bl   { font-size:200px; line-height:0.90; text-align:left; }
    .h-crit-c    { font-size:172px; line-height:0.95; text-align:center; }
    .h-principle { font-size:190px; line-height:0.90; letter-spacing:-0.045em; text-transform:uppercase; }
    .h-cta       { font-size:220px; line-height:0.92; }

    .cta-tag { font-weight:500; font-size:26px; line-height:1.4; color:var(--terracotta); max-width:640px; margin-top:40px; }

    .top    { /* nothing — flex parent */ }
    .bottom { /* nothing — flex parent */ }
    .ha-end       { align-items:flex-end;    justify-content:flex-start; }
    .ha-end-right { align-items:flex-end;    justify-content:flex-end; }
    .ha-center    { align-items:center;      justify-content:center; }
    .ha-right     { align-items:center;      justify-content:flex-end; }
    .ha-left-end  { align-items:flex-end;    justify-content:flex-start; }
    .ha-top       { align-items:flex-start;  justify-content:flex-start; padding-top:16px; }
  </style>
</head>
<body>

<!-- SLIDE 1 — Cover (AUBERGINE) -->
<section class="slide aubergine active" id="s1">
  <div class="pad-frame">
    <div class="eb" style="opacity:0.55;">UI Critique · Issue 14</div>
    <div class="hero-area ha-end">
      <div class="hero h-cover">
        <div>Seven</div><div>Mistakes.</div>
      </div>
    </div>
    <div class="eb" style="opacity:0.55;">@figr.design</div>
  </div>
</section>

<!-- SLIDE 2 — Intro (CREAM) -->
<section class="slide cream" id="s2">
  <div class="pad-frame">
    <div class="eb" style="color:var(--ink-55);">Preface</div>
    <div class="hero-area ha-center">
      <div class="hero h-intro">
        <div>We audited fifty</div><div>SaaS products.</div><div>Same five flaws,</div><div>over and over.</div>
      </div>
    </div>
    <div class="eb" style="color:var(--ink-55);">02 of 07</div>
  </div>
</section>

<!-- SLIDE 3 — Critique 01 (TERRACOTTA) -->
<section class="slide terracotta" id="s3">
  <div class="pad-frame">
    <div class="eb" style="opacity:0.55;">01 · Navigation</div>
    <div class="hero-area ha-right">
      <div class="hero h-crit-r"><div>Nine items.</div><div>Zero recall.</div></div>
    </div>
    <div class="eb" style="opacity:0.55;">Cut to five.</div>
  </div>
</section>

<!-- SLIDES 4–7 follow the same pad-frame pattern.
     See templates/sources/figr-f-color-sequence.html for the full markup. -->

</body>
</html>
```

The full slide markup for s1–s7 lives in `templates/sources/figr-f-color-sequence.html`. Copy and adapt — do not hand-rebuild from scratch.

---

## Playwright audit — template-specific checks

Run the standard Section 4 audit. In addition, check:

- **Palette fidelity:** every saturated hex renders exactly — `--aubergine` `#2C1F2D`, `--terracotta` `#BE4A2F`, `--sage` `#5F6B4F`, `--ochre` `#C99848`, `--navy` `#1B2840`. No drift toward neighboring templates' tokens (e.g. terracotta `#BE4A2F` is *not* figr-b's flare `#FF3D00`, *not* figr-h's red `#D04437`).
- **Color sequence:** slides 1→7 must show aubergine → cream → terracotta → sage → ochre → navy → cream. Take the cover-strip preview and eyeball the cycle — if any two slides share a color (other than s2 and s7 cream), the sequence is broken.
- **U2 depth on dark slides:** aubergine (s1), sage (s4), navy (s6) all show the radial gradient + grain `::before` + accent glow. Not flat.
- **No splits / no borders / no mockups:** every slide is one color field. If a slide accidentally inherited figr-h's split classes or figr-b's `8px solid ink` border, fix.
- **Hero alignment per slide:** s1 bottom-left, s2 center, s3 right-center, s4 bottom-left, s5 center, s6 top-left, s7 bottom-left. The alignment-per-slide is part of the rhythm — do not normalize.
- **Hero sizes per slide:** verify the sizes match the spec — s1 220, s2 120, s3 200, s4 210, s5 180, s6 260, s7 240. Per-slide variation is intentional; don't standardize.
- **Counter / action verb on bottom rail:** s2 and s6 use `0N of 07`; s3, s4, s5 use the action-verb format ("Cut to five.", "Name the act.", "One layer, always."); s1 and s7 use `@figr.design`.
- **Brand handle:** lowercase `@figr.design` in source, renders ALL CAPS via the eyebrow `text-transform:uppercase` rail.
- **Hero on ochre uses ink, not cream:** the ochre slide (s5) is too light for cream type to read — make sure the hero and labels are in `--ink` / `--ink-55`.

---

## Content recipe

Write all 7 slides before touching the HTML. Each slide is one move:

| Slide | What to write | Rules |
|---|---|---|
| s1 Cover | Magazine-issue marker + 2-line stacked title | Title is one short noun phrase broken into 2 lines (e.g. `Seven / Mistakes.`). Always end on a period. |
| s2 Intro | 4-line preface | Plain sentence broken into 4 short lines, each line lands a beat. The reference uses a 4-line audit story; you can also use a 4-line setup ("Everyone / does this. / Nobody / admits it."). |
| s3–s5 Critique | Category eyebrow + 2-or-3-line verdict + action verb | Verdict is a noun phrase (s3 right-aligned 2 lines, s4 bottom-left 3 lines, s5 centered 3 lines). Eyebrow names the category. Bottom action verb prescribes the fix in 3–4 words ending in a period ("Cut to five.", "Name the act."). |
| s6 Principle | 2-word principle, each word on its own line, each ending in a period | The reference uses `Less. / Always.` The two words should compress the entire critique block into a tattoo. If you can't reduce it to two single-word lines, the critiques aren't unified — rewrite them. |
| s7 CTA | 2-line action ("Share / this.") + 1-line terracotta tag | Hero is a verb + pronoun across two lines, ending in a period. Tag line is one sentence in terracotta that nudges the share — name the kind of person the reader should send it to. |

### Content rules (figr.design voice)

- No listicles ("Here are 3 things…") — write in declarative statements.
- No soft hedging ("might", "could", "perhaps") — everything is stated as fact.
- Frame critiques as observations a senior designer has earned, not advice a junior gives.
- The "before" state should feel painfully recognizable. The "after" should feel achievable.
- The Principle words should feel like a tattoo you'd put on your design team's wall.
- Every period is intentional — no periods on labels; every hero line ends on one.

---

## Delivery checklist (template-specific)

In addition to the Section 8 base checklist:

- [ ] Slide count is exactly 7 — Cover, Intro, Critique 01–03, Principle, CTA. No expansion.
- [ ] Inter (300–900) loaded — every hero is Inter 900, no serif/mono/system-font fallback
- [ ] Exactly seven tokens used in the palette — `--cream`, `--aubergine`, `--terracotta`, `--sage`, `--ochre`, `--navy`, `--ink`. No fourth accent (no yellow `#F5E614`, no flare orange `#FF3D00`, no red `#D04437` drift).
- [ ] Color sequence (s1→s7) is aubergine → cream → terracotta → sage → ochre → navy → cream — no reorder, no skip
- [ ] `.aubergine`, `.sage`, `.navy` panels all use the U2 depth treatment (3-stop gradient + grain + accent glow) — not flat hex
- [ ] No borders, no splits, no mockups, no numerals, no icons — every slide is one full-bleed color field with eyebrow + hero + bottom label
- [ ] Hero sizes match per slide: s1 178px, s2 108px, s3 168px (`white-space:nowrap`), s4 200px, s5 172px, s6 190px, s7 220px (do not normalize)
- [ ] Hero alignment matches per slide: s1 bottom-left, s2 center, s3 right-center, s4 bottom-left, s5 center, s6 top-left, s7 bottom-left (do not normalize)
- [ ] Every hero line ends in a period (single character, same color as the hero — never a separate accent dot)
- [ ] s5 Ochre slide uses `--ink` for hero + labels (not cream — cream on ochre fails contrast)
- [ ] Eyebrows / counters / action verbs at minimum 18px (U3 — no leftover 12px tokens from the reference)
- [ ] Brand handle source string is `@figr.design` lowercase in the HTML — renders ALL CAPS via the eyebrow `text-transform:uppercase` rail
- [ ] s7 CTA tag line is in `--terracotta`, max-width 640px — the only color-on-color moment in the deck
- [ ] No bookmark glyph, no swipe cue, no volume marker, no slide-counter pill — the palette cycle is the navigation cue
- [ ] s1 Cover and s7 CTA carry `@figr.design` on the bottom rail; s2 and s6 carry `0N of 07`; s3, s4, s5 carry action verbs
