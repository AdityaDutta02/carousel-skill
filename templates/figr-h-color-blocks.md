# Figr H — Color Blocks Template

Designed for figr.design's UI/UX Instagram channel. Target audience: design leads, product designers, managers.
Use for: opinionated UI critiques and editorial-magazine-style breakdowns where each slide is a single bold color-blocked composition driven by a giant numeral or single-word hero.

This is the **Bauhaus / Swiss editorial** sibling of figr-b-brutalist. Both ship opinionated UI critiques, but where figr-b is a yolk-yellow brutalist zine with thick black borders and fake-UI mockups, figr-h is a clean three-color Bauhaus poster series. The number *is* the graphic — no mockup panels, no borders, just split-screen color fields.

---

> **⚠️ Universal Rules — partial override for this template.** See `SKILL.md` → "Universal Design Rules".
> - **Rule U1 (light first + last slide) — vibrant-color exception.** The Cover (s1) and CTA (s7) open and close on saturated `--red` (`#D04437`). Red is **not** in the U1 banned-hex list (`#000000`, `#0F172A`, `#111827`, `#0E0E0E`, `#080808`, `#131110`, `#1B1B1B`, etc. — all near-black/navy). U1's intent is to prevent the deck rendering as a black void in feed; vibrant saturated color reads as energy, not void. The red bookends are the template's signature beat — keep them. Slide-1 hero text and CTA hero text are both `--cream`, providing the contrast.
> - **Rule U2 (dark slides need depth).** The reference deck uses flat `#1B2540` navy panels (s2 top half, s3 left half, s5 top half, s6 full slide). Flat saturated navy at this scale starts to read as a flat void on mobile OLED. Every `.navy` panel in this template now replaces the flat `#1B2540` with a 3-stop radial gradient (`#243056 → #1B2540 → #131A32`), grain `::before` (SVG turbulence, opacity 0.22, blend `overlay`), and a low-opacity red glow blob (`rgba(208,68,55,0.06)`). The depth is subtle — at thumbnail size the navy still reads as a solid color field, but on a phone screen it gains the breathing it needs.
> - **Rule U3 (minimum mobile text sizes).** The reference used 11–12px for kickers/eyebrows/labels everywhere. Bump every sub-18px token: eyebrow `11→18`, label `12→18`, slide counter (now appended to bottom label) `12→18`. Hero/body sizes already pass — heroes are 62–920px, body is 24px.

---

## When to use

| Use figr-h-color-blocks | Use other figr templates |
|---|---|
| Topic is "N UI mistakes / N anti-patterns / N flaws" — every point can stand on a single-word verdict and a giant numeral | Topic needs a UI mockup paired with the verdict — use figr-b-brutalist |
| You want a clean Swiss-editorial / Bauhaus look — three flat colors, one font, no decorative elements | You want a soft notebook with hand-drawn diagrams — use figr-g-spacing |
| Audience reaction you want: "this looks like a Pentagram poster" + save | You want research data, eye-tracking stats, named sources — use figr-e-system |
| Signals: "UI mistakes", "design crimes", "things to stop doing", "anti-pattern", "editorial", "Bauhaus", "Swiss", "poster series", "Pentagram", "issue N" magazine framing | — |

**figr-h vs figr-b vs figr-g:**
- **figr-b (Brutalist Stack):** loud yolk-yellow zine, thick black borders, fake browser/form/modal mockups with orange X marks. Says "this UI is broken — look at it".
- **figr-g (Spacing):** notebook paper, hand-drawn diagrams, Caveat "Note:" annotations, ruler arcs. Says "let's think through this together".
- **figr-h (Color Blocks):** Bauhaus poster series, split-screen color fields, oversized numerals as graphic elements, no decorative furniture. Says "here is the principle — internalize it".

---

## Design system

### Tokens

| Token | Value | Usage |
|---|---|---|
| `--cream` | `#F1ECDB` | Primary light background, primary text on red and navy |
| `--red` | `#D04437` | Cover background, CTA background, accent dot/period, in-headline emphasis word |
| `--navy` | `#1B2540` | Dark panel field, Principle full slide, in-headline emphasis word (s4 "nothing.") |
| `--ink` | `#1A1A1C` | Primary text on cream |
| `--cream-85` | `rgba(241,236,219,0.85)` | Secondary text on red |
| `--cream-70` | `rgba(241,236,219,0.70)` | Eyebrow on red, handle on red |
| `--cream-55` | `rgba(241,236,219,0.55)` | Eyebrow on navy (Principle slide) |
| `--ink-65` | `rgba(26,26,28,0.65)` | Body text on cream |
| `--ink-55` | `rgba(26,26,28,0.55)` | Bottom label / counter on cream |

There are **only three colors**: cream, red, navy. Ink is reserved for body text on cream. Do not introduce a fourth color (no orange, no yellow, no green). If the topic feels like it needs more variety, switch to figr-b-brutalist.

### Typography

- **Display sans:** `Inter` 900 (font-black) — every hero, every numeral, every CTA hed. `tracking: -0.035em` to `-0.06em`, `line-height: 0.78–0.95`. The numeral hero stretches `tracking: -0.06em` because the negative spacing is part of the Bauhaus character.
- **Body sans:** `Inter` 500 (font-medium) — body paragraphs at 24px line 1.45.
- **Eyebrow / counter / footer:** `Inter` 600–700, `letter-spacing: 0.22em`, `text-transform: uppercase`.

| Element | Spec |
|---|---|
| Cover giant "7" | Inter 900 920px, line 0.78, tracking −0.06em, cream on red |
| Cover stacked headline (4 lines) | Inter 900 62px, line 0.92, tracking −0.035em, uppercase, cream |
| Intro hero "Why?" | Inter 900 360px, line 0.85, tracking −0.05em, uppercase, cream on navy |
| Intro lead (1 sentence) | Inter 900 78px, line 0.95, tracking −0.035em, ink on cream |
| Critique numeral s3 "01" (navy panel, left, flex 0.42) | Inter 900 620px, line 0.82, tracking −0.06em — bleeds the "1" into the cream content column intentionally |
| Critique numeral s4 "02" (cream panel, right, flex 0.42) | Inter 900 340px (smaller than s3/s5 because "02" is wider than "01" / "03" and must not clip the slide right edge), line 0.82, tracking −0.06em, `white-space: nowrap`, navy |
| Critique numeral s5 "03" (navy panel, top, flex 0.45) | Inter 900 480px (smaller because the panel is shorter), line 0.82, tracking −0.06em |
| Critique headline (s3, s5) | Inter 900 92px, line 0.90, tracking −0.04em, uppercase, ink on cream — keep ≤ 92px so "RECALL." / "MODAL." fit inside the 58%/55% content column |
| Critique headline (s4 on red) | Inter 900 96px, line 0.90, tracking −0.04em, uppercase, cream on red |
| Principle hero "Less." | Inter 900 380px, line 0.85, tracking −0.05em, uppercase, cream on navy, period in red |
| CTA arrow "→" | Inter 900 700px, line 0.78, tracking −0.06em, cream on red |
| CTA hero "Share / this." | Inter 900 92px, line 0.90, tracking −0.04em, uppercase, cream on red |
| Eyebrow / Section label | Inter 700 18px (bumped from 11–12 per U3), letter-spacing 0.22em, uppercase |
| Bottom label + counter | Inter 600 18px (bumped from 12 per U3), letter-spacing 0.22em, uppercase, opacity 0.55 on cream / 0.85 on red |
| Body line | Inter 500 24px, line 1.45 |

### Layout system — color-field splits

Every slide is built from one or two flat color fields. The split is part of the message — the numeral field carries the index, the content field carries the verdict.

| Slide | Split | Color fields |
|---|---|---|
| s1 Cover | 66/34 horizontal | RED full slide; left field holds the giant "7", right field holds the title stack |
| s2 Intro | 55/45 vertical | NAVY top (Why?) → CREAM bottom (preface lead) |
| s3 Critique 01 | 42/58 horizontal | NAVY left (giant "01") → CREAM right (verdict) |
| s4 Critique 02 | 58/42 horizontal | RED left (verdict) → CREAM right (giant "02") — **mirror** of s3 |
| s5 Critique 03 | 45/55 vertical | NAVY top (giant "03") → CREAM bottom (verdict) — **mirror axis** of s2 |
| s6 Principle | full | NAVY full slide; hero centered |
| s7 CTA | full | RED full slide; arrow centered, hero footer-left |

**The mirror rhythm is intentional:** s3 (horizontal navy-left) ↔ s4 (horizontal red-left, mirrored) ↔ s5 (vertical navy-top). The reader's eye moves left→right→down→down, then lands on the centered Principle, then exits on the centered CTA arrow.

### Color sequence

```
S1 RED → S2 NAVY+CREAM → S3 NAVY+CREAM → S4 RED+CREAM → S5 NAVY+CREAM → S6 NAVY → S7 RED
```

This breaks the strict alternation rule from SKILL.md Section 2. The Bauhaus identity *is* the repeating use of three colors in carefully orchestrated splits, not strict dark/light alternation. Three navy slides in a row would look identical at thumbnail scale — but s2, s3, s5 each have a different *position* for the navy panel (top, left, top), so the deck reads as visually varied even with a recurring palette.

### Brand block

Handle treatment: source string `@figr.design` (lowercase in the HTML for accessibility / search) rendered as `@FIGR.DESIGN` via `text-transform: uppercase` because it sits in the eyebrow type rail (which is uniformly uppercase across this template). This matches the figr-b zine treatment visually but the underlying string stays lowercase — never type the caps directly in the HTML.

- Cover: bottom-right of the right column, `--cream-70` Inter 700 18px tracking 0.22em.
- CTA: bottom-right of the footer row, `--cream-85` Inter 700 18px tracking 0.22em.
- Intro, Critiques, Principle: no brand block on the slide — eyebrow + bottom label carry section identity.

No bookmark glyph. No swipe cue. No volume marker. The numerals are loud enough.

---

## Slide structure (7 slides — strict)

```
Slide 1: Cover            — RED, giant "7" + 4-line stacked title "Mistakes / your UI / keeps / making."
Slide 2: Intro            — NAVY top "Why?" + CREAM bottom lead sentence
Slide 3: Critique 01      — NAVY left "01" + CREAM right verdict
Slide 4: Critique 02      — RED left verdict + CREAM right "02"
Slide 5: Critique 03      — NAVY top "03" + CREAM bottom verdict
Slide 6: Principle        — NAVY full, centered single-word hero with red period
Slide 7: CTA              — RED full, centered "→" + "Share / this."
```

**This template is locked to 7 slides.** Adding a 4th critique breaks the navy/red/navy mirror rhythm. If the topic has more than 3 critiques, either: (a) pick the top 3 and demote the rest to a follow-up post, or (b) use figr-g-spacing. Never expand this template past 7.

### Slide 1 — Cover (RED)

- Container: full RED background, flex-row, 66/34 split.
- Left column (flex 0.66): centered giant "7" — Inter 900 **920px**, line 0.78, tracking −0.06em, cream. Padding-left 40px so the numeral kisses the edge of the cream right-column ledger without quite touching it.
- Right column (flex 0.34): flex-column space-between, padding 64px (no left padding).
  - Top: `Issue N` eyebrow — Inter 700 18px tracking 0.22em uppercase `--cream-70`.
  - Middle: 4-line stacked title — Inter 900 62px line 0.92 tracking −0.035em uppercase cream. Each line on its own `<div>`. Final line ends in a period — *not* a separate accent color, just part of the word.
  - Bottom: `@figr.design` — Inter 700 18px tracking 0.22em uppercase `--cream-70`.

### Slide 2 — Intro (NAVY top + CREAM bottom)

- Container: flex-column, no overall background (the two halves carry color).
- Top half (flex 0.55): `.navy` panel with the U2 depth treatment. Centered hero "Why?" — Inter 900 **360px**, line 0.85, tracking −0.05em, uppercase, cream.
- Bottom half (flex 0.45): cream background, padding 80px, flex-column space-between, ink text.
  - Top: `02 · Preface` eyebrow — Inter 700 18px tracking 0.22em uppercase, color `--red`.
  - Middle: single sentence in Inter 900 **78px** line 0.95 tracking −0.035em, ink. Max-width auto — let it wrap naturally.
  - Bottom: `Three of them are next.` — Inter 600 18px tracking 0.22em uppercase `--ink-55`.

### Slide 3 — Critique 01 (NAVY left + CREAM right)

- Container: flex-row, no overall background.
- Left half (flex 0.42): `.navy` panel with U2 depth. Centered giant `01` — Inter 900 **620px** line 0.82 tracking −0.06em cream.
- Right half (flex 0.58): cream background, padding 72px, flex-column space-between, ink text.
  - Top: category eyebrow `Navigation` — Inter 700 18px tracking 0.22em uppercase `--red`.
  - Middle: 2-line verdict — Inter 900 **108px** line 0.9 tracking −0.04em uppercase ink. Line 2 is in `--red`. Example:
    ```
    Nine items.
    Zero recall.   ← red
    ```
    Below, separated by 36px: body line — Inter 500 24px line 1.45 `--ink-65`, max-width 460px. Example: "Five items, maximum. The nav is a contract — honor it."
  - Bottom: `Cut to five · 03 / 07` — Inter 600 18px tracking 0.22em uppercase `--ink-55`. The center-dot separator merges the action verb and slide counter into one rail.

### Slide 4 — Critique 02 (RED left + CREAM right — mirror of s3)

- Container: flex-row, no overall background.
- Left half (flex 0.58): RED background, padding 72px, flex-column space-between, cream text.
  - Top: `Call to action` eyebrow — Inter 700 18px tracking 0.22em uppercase `--cream-85`.
  - Middle: 3-line verdict — Inter 900 **108px** line 0.9 tracking −0.04em uppercase cream. Final line is in `--navy`. Example:
    ```
    Submit
    submits
    nothing.   ← navy
    ```
    Body line below: Inter 500 24px line 1.45 `--cream-85`, max-width 460px.
  - Bottom: `Name the act · 04 / 07` — Inter 600 18px tracking 0.22em uppercase `--cream-85`.
- Right half (flex 0.42): CREAM background, centered giant `02` — Inter 900 **620px** line 0.82 tracking −0.06em **navy** (not red — red would clash with the left field).

### Slide 5 — Critique 03 (NAVY top + CREAM bottom)

- Container: flex-column.
- Top half (flex 0.45): `.navy` panel with U2 depth. Centered giant `03` — Inter 900 **480px** line 0.82 tracking −0.06em cream. (Smaller than s3 "01" because the panel is shorter.)
- Bottom half (flex 0.55): cream background, padding 72px, flex-column space-between, ink text.
  - Top: category eyebrow `Modal depth` — Inter 700 18px tracking 0.22em uppercase `--red`.
  - Middle: 2-line verdict — Inter 900 **92px** line 0.9 tracking −0.04em uppercase ink. Line 2 is in `--red`. Example:
    ```
    A modal inside
    a modal.   ← red
    ```
    Body line below: Inter 500 24px line 1.45 `--ink-65`, max-width 680px.
  - Bottom: `One layer, always · 05 / 07` — Inter 600 18px tracking 0.22em uppercase `--ink-55`.

### Slide 6 — Principle (NAVY full)

- Container: `.navy` full slide with U2 depth, flex centered.
- Hero centered: single word like `Less` — Inter 900 **380px** line 0.85 tracking −0.05em uppercase cream. The terminal period is in `--red`. This is the only red element on the slide.
- Top-left absolute: `Principle · 06` — Inter 700 18px tracking 0.22em uppercase `--cream-55`.
- Bottom-right absolute: `Always.` — Inter 700 18px tracking 0.22em uppercase `--red`.

The Principle hero is **one word**. Choose the single distilled principle from the critique block (the reference uses "Less."). If you cannot reduce it to one word, switch to figr-b-brutalist's 4-line Principle pattern instead — this slide refuses anything longer.

### Slide 7 — CTA (RED full)

- Container: RED full slide, flex-column.
- Top row: padding 72px (no bottom padding), flex-row baseline space-between.
  - Left: `Postscript` — Inter 600 18px tracking 0.22em uppercase `--cream-85`.
  - Right: `07 of 07` — Inter 600 18px tracking 0.22em uppercase `--cream-85`.
- Middle (flex 1): centered giant arrow `→` — Inter 900 **700px** line 0.78 tracking −0.06em cream.
- Bottom row: padding 72px (no top padding), flex-row baseline space-between.
  - Left: 2-line hero `Share / this.` — Inter 900 **92px** line 0.9 tracking −0.04em uppercase cream.
  - Right: `@figr.design` — Inter 700 18px tracking 0.22em uppercase `--cream-85`, padding-bottom 12px so it baselines with the hero.

---

## HTML skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1080">
  <title>Template H — [TOPIC] | figr.design</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --cream:#F1ECDB; --red:#D04437; --navy:#1B2540; --ink:#1A1A1C;
      --cream-85:rgba(241,236,219,0.85);
      --cream-70:rgba(241,236,219,0.70);
      --cream-55:rgba(241,236,219,0.55);
      --ink-65:rgba(26,26,28,0.65);
      --ink-55:rgba(26,26,28,0.55);
    }
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Inter',system-ui,sans-serif; background:#0a0a0a; -webkit-font-smoothing:antialiased; }

    .slide { width:1080px; height:1350px; position:relative; overflow:hidden; display:none; color:var(--ink); }
    .slide.active { display:flex; }

    .cream { background:var(--cream); color:var(--ink); }
    .red   { background:var(--red);   color:var(--cream); }
    .navy  {
      color:var(--cream);
      background:
        radial-gradient(ellipse 110% 80% at 30% 22%, rgba(208,68,55,0.06) 0%, transparent 55%),
        radial-gradient(ellipse 130% 100% at 70% 80%, #243056 0%, #1B2540 55%, #131A32 100%);
      position:relative;
    }
    .navy::before {
      content:""; position:absolute; inset:0; pointer-events:none;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.92  0 0 0 0 0.86  0 0 0 0.22 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
      mix-blend-mode: overlay; opacity:0.22; z-index:1;
    }

    .eb       { font-weight:700; font-size:18px; letter-spacing:0.22em; text-transform:uppercase; }
    .eb-tight { font-weight:600; font-size:18px; letter-spacing:0.22em; text-transform:uppercase; }
    .hero     { font-weight:900; line-height:0.92; letter-spacing:-0.045em; }
    .body-24  { font-weight:500; font-size:24px; line-height:1.45; }
    .lay      { position:relative; z-index:2; width:100%; height:100%; display:flex; }
  </style>
</head>
<body>

<!-- SLIDE 1 — Cover (RED, 66/34 split, giant "7") -->
<section class="slide red active" id="s1">
  <div class="lay">
    <div style="flex:0.66; display:flex; align-items:center; justify-content:center; padding-left:40px;">
      <div style="font-weight:900; font-size:920px; line-height:0.78; letter-spacing:-0.06em;">7</div>
    </div>
    <div style="flex:0.34; display:flex; flex-direction:column; justify-content:space-between; padding:64px 64px 64px 0;">
      <div class="eb" style="color:var(--cream-70);">Issue 14</div>
      <div style="font-weight:900; font-size:62px; line-height:0.92; letter-spacing:-0.035em; text-transform:uppercase;">
        <div>Mistakes</div><div>your UI</div><div>keeps</div><div>making.</div>
      </div>
      <div class="eb" style="color:var(--cream-70);">@figr.design</div>
    </div>
  </div>
</section>

<!-- SLIDE 2 — Intro (NAVY top + CREAM bottom) -->
<section class="slide cream" id="s2">
  <div class="lay" style="flex-direction:column;">
    <div class="navy" style="flex:0.55; display:flex; align-items:center; justify-content:center;">
      <div class="lay" style="align-items:center; justify-content:center;">
        <div style="font-weight:900; font-size:360px; line-height:0.85; letter-spacing:-0.05em; text-transform:uppercase;">Why?</div>
      </div>
    </div>
    <div style="flex:0.45; display:flex; flex-direction:column; justify-content:space-between; padding:80px;">
      <div class="eb" style="color:var(--red);">02 · Preface</div>
      <div style="font-weight:900; font-size:78px; line-height:0.95; letter-spacing:-0.035em;">[One sentence framing the entire deck.]</div>
      <div class="eb-tight" style="color:var(--ink-55);">Three of them are next.</div>
    </div>
  </div>
</section>

<!-- SLIDES 3 / 5 follow the navy-block + cream-content pattern.
     SLIDE 4 mirrors with RED-content + cream-numeral.
     SLIDE 6 is NAVY full with centered hero word.
     SLIDE 7 is RED full with centered arrow + footer hero. -->

</body>
</html>
```

The full slide markup for s3–s7 lives in `templates/sources/figr-h-color-blocks.html`. Copy and adapt — do not hand-rebuild from scratch.

---

## Playwright audit — template-specific checks

Run the standard Section 4 audit. In addition, check:

- **Color fidelity:** cream `#F1ECDB` rendered (not `#F5F4EF` from another template's body background). Red `#D04437` rendered (not `#E02020` from wolf-media-v2 or `#FF3D00` from figr-b). Navy `#1B2540` rendered.
- **Navy depth:** every `.navy` panel shows the radial gradient + grain + red glow, not flat `#1B2540`. Inspect s2, s3, s5, s6 specifically.
- **Numeral spans:** the cover "7" actually reaches 920px without overflow (left column is 66% of 1080 ≈ 712px usable — the 920px numeral overflows because tracking −0.06em pulls visual width back, but the glyph cap can hit the right column edge. Verify it doesn't clip on the right.). If it clips, drop to 880px.
- **No fourth color:** scan rendered slides — only cream, red, navy, and pure ink should appear. No orange, yellow, green. The `.navy::before` red glow at 0.06 opacity is fine because it's nearly invisible.
- **Counter format:** bottom labels on s3, s4, s5 end in ` · 03 / 07` / ` · 04 / 07` / ` · 05 / 07`. Space around slash. CTA uses `07 of 07` written out (intentional — the postscript opens with "of" instead of "/").
- **Brand handle:** `@figr.design` lowercase (this is *not* the figr-b ALL CAPS treatment).
- **Hero word on Principle:** s6 hero must be a single word ending in a red period. If the topic forced two words, switch to figr-b Principle pattern.

---

## Content recipe

Write all 7 slides before touching the HTML. Each slide is one move:

| Slide | What to write | Rules |
|---|---|---|
| s1 Cover | Magazine-issue marker + 4-line stacked title | Title is a single sentence broken into 4 punchy lines (e.g. "Mistakes / your UI / keeps / making."). The line break order matters — read it out loud and adjust so each line lands. |
| s2 Intro | Single hero word/question + 1-sentence preface | The hero is a question or single word (Why? / How? / Stop. / Look.). The preface is one declarative sentence (max 14 words) that sets up the critique block. |
| s3–s5 Critique | Category eyebrow + 2-or-3-line verdict + 1 body sentence + action verb | Verdict line 1 names the failure ("Nine items."). Line 2–3 lands the verdict ("Zero recall."). Body sentence prescribes the fix in plain language. Action verb is 2–4 words ("Cut to five"). |
| s6 Principle | One word + red period | The single word that captures the entire deck. If you can't pick one, your critiques aren't unified — go back to s3–s5 and find the through-line. |
| s7 CTA | "Share / this." or "Save / this." or "Tag / a friend." | Two lines max. The arrow is the visual — the hero is small footer-left. |

### Content rules (figr.design voice)

- No listicles ("Here are 3 things…") — write in declarative statements.
- No soft hedging ("might", "could", "perhaps") — everything is stated as fact.
- Frame critiques as observations a senior designer has earned, not advice a junior gives.
- The "before" state should feel painfully recognizable. The "after" should feel achievable.
- The Principle word should feel like a tattoo you'd put on your design team's wall.

---

## Delivery checklist (template-specific)

In addition to the Section 8 base checklist:

- [ ] Slide count is exactly 7 — Cover, Intro, Critique 01–03, Principle, CTA. No expansion.
- [ ] Inter (300–900) loaded — every hero is Inter 900, no serif/mono/system-font fallback
- [ ] Only three colors used: `--cream` `#F1ECDB`, `--red` `#D04437`, `--navy` `#1B2540` (plus `--ink` for body text). No fourth accent color.
- [ ] Every `.navy` panel uses the U2 depth treatment (3-stop gradient + grain + red glow) — not flat `#1B2540`
- [ ] No borders on any slide (no `8px solid ink` figr-b-style frame, no figr-g notebook crosshairs)
- [ ] Cover `7` numeral reaches 920px without clipping into the right column or overflowing right edge
- [ ] Intro "Why?" hero is 360px Inter 900 — single word/question, not a phrase
- [ ] Critique numerals: s3 `01` 620px (bleeds into cream column intentionally), s4 `02` 340px navy-on-cream (smaller because "02" is wider — must not clip slide right edge), s5 `03` 480px (smaller because top half is 45%)
- [ ] Mirror rhythm intact: s3 navy-left horizontal → s4 red-left horizontal → s5 navy-top vertical
- [ ] s4 final headline line is in `--navy` (not `--red`) — the in-headline emphasis word swaps to navy on red backgrounds and to red on cream/navy backgrounds
- [ ] Principle hero is a single word ending in a `--red` period
- [ ] CTA arrow `→` is 700px Inter 900 cream centered
- [ ] All eyebrows / counters / labels at minimum 18px (U3 — no leftover 11–12px tokens from the reference)
- [ ] Brand handle source string is `@figr.design` lowercase in the HTML — but renders ALL CAPS via the eyebrow `text-transform:uppercase` rail
- [ ] No bookmark glyph, no swipe cue, no volume marker (these belong to figr-b and figr-g)
- [ ] Counter format on critique slides: ` · 0N / 07` appended to bottom label. CTA uses `07 of 07` (written out).
- [ ] All headlines uppercase via `text-transform:uppercase` (do not type in caps in the HTML — preserve sentence case in source so it can be flipped if needed)
