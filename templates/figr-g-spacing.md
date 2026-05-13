# Figr G — Spacing / Rules Notebook Template

Designed for figr.design's UI/UX Instagram channel. Target audience: design leads and managers.
Use for: long-form "N rules / N principles / N habits" carousels with hand-drawn annotations that feel like pages torn from a designer's working notebook.

---

> **⚠️ Universal Rules override this spec.** See `SKILL.md` → "Universal Design Rules".
> - Rule U1: Slide 1 (cover) is already light — keep it. Slide 12 (CTA) is described as dark `#1B1B1B` charcoal below; it **must be light**. Apply Rule U1 light-CTA treatment: cream paper, ink hed, coral "Rules" keyword + coral swoop arrow, dark bookmark. The takeaway slide (10) and myth slide (2) may stay dark per the alternating rhythm.
> - Rule U2: The `--dark: #1B1B1B` token on remaining middle dark slides already layers a gradient + grain (good) — also add a subtle coral or yellow accent glow blob (40–60% slide width, opacity 0.04–0.08) to push depth further.
> - Rule U3: Bump every sub-18px size below — cover bar label 12→18 (or move the label outside the bar if 18px breaks the vertical rotation).

---

## When to use

| Use figr-g-spacing | Use other figr templates |
|---|---|
| Topic is a numbered list of 5–10 craft rules ("7 spacing rules", "9 typography habits") | Topic is a binary contrast (use figr-c-beforeafter or figr-f-contrast) |
| Content benefits from sketch-style illustrations + handwritten annotations per rule | Content is purely typographic with no diagram support |
| You want a designer's-notebook / Figma-canvas aesthetic (paper texture, crosshairs, ruler arc, "Note:" handwritten labels) | You want clean editorial or systematic data layouts |
| Signals: "rules", "principles", "habits", "laws", "patterns most designers ignore", "save this list" | — |

**figr-g-spacing vs figr-a-manifesto:**
- A uses bold typographic manifesto slides with cyan accent — pure type, no illustrations
- G uses the same alternating dark/light rhythm but every rule slide carries a sketched diagram + handwritten coral "Note:" + bottom ruler arc. Reads like an annotated working file.

---

## Design system

### Tokens

| Token | Value | Usage |
|---|---|---|
| `--paper` | `#F1ECE2` | Light slide cream paper base |
| `--paper-deep` | `#E8E1D3` | Paper gradient deep tone |
| `--ink` | `#15110E` | Primary text on light |
| `--ink-soft` | `#2A2522` | Secondary ink |
| `--muted` | `#8A8076` | Kicker / labels on light |
| `--line` | `#C8C0B0` | Subtle dividers on paper |
| `--dark` | `#1B1B1B` | Charcoal dark slide base |
| `--dark-soft` | `#242322` | Gradient deep dark |
| `--dark-line` | `rgba(255,255,255,0.10)` | Dividers on dark |
| `--dark-muted` | `rgba(255,255,255,0.55)` | Muted text on dark |
| `--coral` | `#E85844` | Headlines accent + "Note:" handwriting + 7-of-N digit + progress tick on light |
| `--coral-deep` | `#D44A37` | Coral hover/pressed variant |
| `--yellow` | `#F2D94A` | Dark-slide accent: handwritten annotation, progress tick on dark |
| `--yellow-glow` | `#FFE85E` | Brighter yellow for circled emphasis on dark |
| `--blue` | `#3B86F7` | Measurement labels + marquee selection borders + device dimension text |
| `--green` / `--green-pale` | `#4FE26C` / `#C8F3CF` | "good" illustration zones (spacing scale, etc.) |
| `--pink` / `--pink-soft` | `#F1B6D8` / `#FBDDE9` | Illustration tint blocks, padding zones |
| `--lavender` | `#C8B8EA` | Illustration tint blocks |
| `--peach` | `#FAD9C2` | Illustration tint blocks (large/spacious) |

### Typography

- **Display condensed sans:** `Anton` (and `Oswald` 500/700 fallback) — all headlines, takeaways, CTA hed
- **Editorial italic serif:** `DM Serif Display` (regular + italic) — `kicker` / `Rule N` / `Myth buster` labels, cover subtitle, dark-slide accent phrase ("It's not.", "It's about telling...")
- **Handwritten script:** `Caveat` 500/700 — "Note:" labels (coral), inline diagram annotations (yellow on dark, coral on light), "Spacious = premium, editorial", etc.
- **Body:** `Inter` 400/500/600/700 — note body, resource descriptions, fine print
- **Technical mono:** `JetBrains Mono` 400/500 — vertical bar labels on cover ("32pt, 2"), small measurement chips

| Element | Spec |
|---|---|
| Cover headline (stacked) | Anton 168px, line-height 0.92, letter-spacing −0.01em |
| Cover italic "N" digit | DM Serif Display italic 138px, coral |
| Cover subtitle in marquee | DM Serif Display italic 64px, line 1.06, coral |
| Rule kicker ("Rule 1", "Myth buster") | DM Serif Display italic 46px, muted |
| Rule headline | Anton 96px, line 1.0 |
| Takeaway / CTA hed | Anton 96–104px |
| Resources hed | Anton 102px, ink |
| Resource title | Anton 56px, coral |
| Note label | Caveat 700 56px, coral |
| Note body | Inter 500 30px, line 1.42 |
| Inline annotation | Caveat 600 28–32px, coral or yellow |
| Bar label (cover) | JetBrains Mono 12px, rotated 90deg |
| Measurement badge ("16px", "64px") | Inter 600 22px white on `--blue` 4px-radius chip |

### Backgrounds & motifs

- **Light slides:** radial cream gradient `#F5F0E6 → #ECE5D6 → #E4DDCC` + multiply noise (SVG fractal turbulence, opacity 0.55) for paper grain.
- **Dark slides:** linear `#1F1E1D → #161514` + overlay noise (opacity 0.35) for matte film grain.
- **Column guides:** four thin vertical lines at 20/40/60/80% (light: `rgba(0,0,0,0.05)`; dark: `rgba(255,255,255,0.04)`).
- **Corner crosshairs (`⊕`):** 22px crosshairs with 1px circles inset 4px, at all 4 corners of every **dark** slide only. Color `#F4EFE4`, opacity 0.55.
- **Top progress rule:** 1px horizontal line, 22% opacity of current ink, top 78px, left/right inset 64px. A solid 4px tick sits at `top: 73px` over the rule, indicating slide position. Coral tick on light, yellow tick on dark. The tick is one of 12 evenly-spaced 80px segments (`left = 64 + (n-1)*80`).
- **Bottom ruler arc:** a 1100×600 (light) or 1100×560 (dark) circle bottom-centered at `bottom: -240/-280`, 1px stroke, with hash marks via `repeating-conic-gradient` masked to a thin annulus. Adds a "blueprint" feel and appears on every rule slide (3–9) but **not** on cover/myth/takeaway/CTA.
- **Brand row:** `@figr.design` bottom-left 64/64, 18px Inter 500, opacity 0.78. Bookmark glyph 22×30 bottom-right 64/64, clip-path polygon `0 0, 100% 0, 100% 100%, 50% 78%, 0 100%`, color = currentColor (ink on light, cream on dark).

### Hand-drawn annotation conventions

- Arrows are inline SVGs with `stroke-width: 2.5–3.5`, `stroke-linecap: round`, looping bezier curves ending in a small chevron — never straight pointers.
- Annotation text always wraps to 2–3 short lines, max-width 220–360px, sitting beside or above the diagram it references.
- Coral on light slides, yellow (`--yellow-glow`) on dark slides. Blue is reserved for the "Margin controls external distance" annotation in Rule 4 (padding vs margin) and the marquee selection borders.
- "Note:" labels are Caveat 700 56px coral, always followed by a single Inter 500 30px body block.

### Brand block

Position bottom-left: `<div class="brand"><span>@</span>figr<span class="dot">.design</span></div>`
`.dot` = coral, weight 700. On dark slides the brand block inherits `#F4EFE4` for the base and keeps coral on the `.dot`. Bookmark glyph bottom-right same row.

---

## Slide structure (default 12 slides)

This template scales 7–12 slides. The standard recipe for "N rules" content (N = 7):

```
Slide  1: Cover            — light, big stacked title + colored bars + measurement chips
Slide  2: Myth buster      — dark, problem-framing italic accent
Slides 3–9: Rule 1–7       — alternating light/dark, kicker + headline + illustration + Note
Slide 10: Takeaway         — dark, two-line "→" summary, yellow accent word
Slide 11: Resources        — light, 4 coral-arrow resources + "(+N more)" tease
Slide 12: CTA              — dark, "Comment X / Save this" + coral swoop arrow
```

For shorter carousels (7 slides), collapse to: Cover → Myth → 3 Rules → Takeaway → CTA. For longer (12+), expand the rules section. Always preserve the cover/myth/takeaway/CTA scaffolding.

### Slide 1 — Cover (light)

- Stack top-left (`left: 64px; top: 180px`): italic coral `N` (DM Serif 138px) + Anton title stacked on two lines (`Spacing\nRules` style, 168px).
- 5 vertical colored bars near bottom-left, aligned to baseline, widths 62px gap 30px, heights stepping down (yellow 340 / pink 290 / lavender 230 / green 180). Each bar carries a rotated JetBrains Mono micrometer label (`32pt, 2` / `48pt, 3` etc.). A 5th peach bar 200px tall sits separated 200px to the right.
- Blue measurement chips: `16px` low-left annotating the 16-unit baseline, `64px` top-right with a 1px guide dropping 230px down, `32px` mid-right with an upward 1px guide.
- Subtitle marquee 600px from top, spanning column-to-column (left 60 / right 60), 1.5px blue selection border with 8 white-fill blue-stroked handles (4 corners + 4 midpoints). Inside: cream `rgba(241,236,226,0.84)` wash with DM Serif italic 64px coral subtitle in 2 lines, padding 14/24.

### Slide 2 — Myth buster (dark)

- Kicker "Myth buster" in DM Serif italic 44px, muted.
- Main headline Anton 116px cream, 3–4 short lines establishing the wrong mental model the audience holds.
- Hand-drawn yellow oval (CSS pseudo-element rotated `-3deg`, `border-radius: 50%`, `transform: scale(1.06, 1.18)`) around a 2-word italic correction phrase ("It's not.").
- Below: a 2-line DM Serif italic 72px yellow correction stating the real frame ("It's about telling the eye where to go next.")
- Subtle bottom arc visible.

### Slides 3–9 — Rule slides (alternating light/dark)

Every rule slide is the same structural skeleton:

```
.rule-head           — top: 158px, left/right: 64px
  .rule-kicker       — "Rule N" in DM Serif italic 46px muted
  .rule-hed          — Anton 96px, 2 lines max
.illustration        — center-X aligned, sits ~500–600px from top
  [topic-specific diagram]
  [inline handwritten annotation + curved SVG arrow]
.rule-note           — bottom: 220px, left: 64px, max-width: 760px
  .note-label        — Caveat 700 56px coral
  .note-body         — Inter 500 30px ink (or cream on dark)
.arc                 — ruler arc behind/below note (light or dark variant)
```

Light slides use coral progress tick, dark slides use yellow progress tick. Alternate strictly: 3 light, 4 dark, 5 light, 6 dark, 7 light, 8 dark, 9 light.

#### Illustration patterns (one per rule)

| Rule | Diagram | Annotation |
|---|---|---|
| Use a spacing scale | Two pill-rows of growing swatches: top row green-pale background with green tiles (8-step scale), bottom row pink-soft with mismatched red tiles. ✓ circle on green, ✕ square on red. | None — labels live inside swatches in Caveat. |
| Space groups | Three mock cards in a row, middle card highlighted with blue selection outline. Two coral `gap-tag` measurements (`20`) between them. | Yellow Caveat "Unrelated items sit far" + looping arrow pointing to the gap. |
| Breathing room before headings | Dashed-blue frame around a mock content card. Pink vertical column passes through showing the "heading band". Text mock below. | Coral Caveat "More space above a heading than below" with curling arrow. |
| Padding vs margin (dark) | Two diagrams side-by-side: left = pink-tinted square with pink inner block (padding); right = two blue squares with a single coral gap line (margin). | Pink Caveat top-left "Padding controls internal breathing room", blue Caveat bottom-right "Margin controls external distance", each with a curving arrow. |
| Vertical rhythm | Dashed-blue selection frame around a stack: image block, four `ln` rows, pill button. Coral `rhythm-tick` chevrons label intervals (`3x / 2x / 2x / 3x`) along the left edge. | Coral Caveat "Sections that breathe at the same intervals" with leftward arrow. |
| Tight spacing = importance (dark) | Two card mocks side-by-side: left = tight stacked text + image + pill (compact); right = larger card with circular hero image + spaced lines + pill (editorial). Coral interval ticks inside each card. | Yellow Caveat "Spacious = premium, editorial" + arrow pointing to the right card. |
| Test at actual screen size | Three line-art SVG devices: desktop 280×220, laptop 220×160, phone 130×200. Blue Inter labels under each: `1920px / 1024px / 479px`. | Coral Caveat "100% zoom only" + curving arrow pointing to one of the devices. |

### Slide 10 — Takeaway (dark)

- No kicker. Two `.row` blocks, each starting with a yellow `→` arrow.
- Row 1: cream Anton 96px, the first sentence ending with a 5px cream underline under the opening noun (e.g. `Spacing isn't decoration. It's communication.`).
- Row 2: yellow Anton 96px on first two words (`Use a system.`), then cream Anton 96px for the remainder (`Be consistent. Let it do the work.`).
- 80px gap between rows.

### Slide 11 — Resources (light)

- Anton 102px ink heading: e.g. `Valuable resources`.
- Four `.res` rows. Each row: 32px gap between coral 56px Inter arrow `→` and the content block. Content block: Anton 56px coral title + Inter 500 26px ink description (single line).
- Below the four rows: italic Inter 26px coral teaser, e.g. `(+15 additional links, videos, and books)`, indented 88px to align with the resource titles.

### Slide 12 — CTA (dark)

- Anton 104px cream hed combining a question + the lead-magnet keyword: `Want the links to resources?\n→ Comment "Rules" and I'll send it to you.` The `→` and the quoted keyword in coral.
- 88px gap, then Anton 96px cream `Save this post for later.`
- Inter 500 22px muted fine print: `If you drop a comment to show support, it would mean a lot.`
- Coral SVG swoop arrow ~280×280 absolute bottom-right (`right: 100px; bottom: 130px`) pointing at the bookmark glyph.

---

## HTML skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Template G — [TOPIC] | figr.design</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@500;700&family=DM+Serif+Display:ital@0;1&family=Caveat:wght@500;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --paper:#F1ECE2; --paper-deep:#E8E1D3; --ink:#15110E; --muted:#8A8076;
      --dark:#1B1B1B; --dark-soft:#242322; --dark-muted:rgba(255,255,255,0.55);
      --coral:#E85844; --yellow:#F2D94A; --yellow-glow:#FFE85E; --blue:#3B86F7;
      --green:#4FE26C; --green-pale:#C8F3CF; --pink:#F1B6D8;
      --lavender:#C8B8EA; --peach:#FAD9C2;
    }
    /* … full CSS in template-11-spacing.html … */
  </style>
</head>
<body>

<!-- SLIDE 1 — COVER -->
<div class="slide light s1">
  <div class="cols-light"><span class="c2"></span><span class="c3"></span><span class="c4"></span></div>
  <div class="topbar"></div><div class="topbar-tick tick-1"></div>
  <div class="stack">
    <div class="seven">[N]</div>
    <div class="title-block"><div class="title-top">[Topic line 1]<br>[Topic line 2]</div></div>
  </div>
  <div class="bars">
    <div class="bar yellow"><span>[label 1]</span></div>
    <div class="bar pink"><span>[label 2]</span></div>
    <div class="bar lavender"><span>[label 3]</span></div>
    <div class="bar green"><span>[label 4]</span></div>
    <div class="bar peach"><span>[label 5]</span></div>
  </div>
  <div class="marquee">
    <!-- 8 marquee-handle divs (4 corners + 4 midpoints) -->
    <div class="marquee-text">[Subtitle line 1]<br>[Subtitle line 2]</div>
  </div>
  <div class="px-label px-16">16px</div>
  <div class="px-label px-64">64px</div>
  <div class="px-label px-32">32px</div>
  <div class="brand"><span>@</span>figr<span class="dot">.design</span></div>
  <div class="bookmark"></div>
</div>

<!-- SLIDE 2 — MYTH BUSTER -->
<div class="slide dark s2">
  <!-- cols-dark + 4 crosshairs + topbar yellow tick-2 -->
  <div class="body">
    <div class="myth-kicker">Myth buster</div>
    <div class="myth-hed">[Wrong mental-model statement in 3–4 short lines]</div>
    <div class="not-wrap"><span class="not-text">[Short denial like "It's not."]</span></div>
    <div class="myth-sub">[Correct frame in 2 italic serif lines.]</div>
  </div>
  <div class="arc dark"></div>
  <div class="brand"><span>@</span>figr<span class="dot">.design</span></div>
  <div class="bookmark"></div>
</div>

<!-- SLIDES 3–9 — RULES (alternate light/dark) -->
<div class="slide [light|dark] s[N]">
  <!-- guides + crosshairs (dark only) + topbar tick-[N] (coral on light, yellow on dark) -->
  <div class="rule-head">
    <div class="rule-kicker">Rule [N-2]</div>
    <div class="rule-hed">[Rule headline, 2 lines max]</div>
  </div>
  <div class="illustration ill-wrap">
    [topic-specific diagram with handwritten SVG annotation]
  </div>
  <div class="rule-note">
    <div class="note-label">Note:</div>
    <div class="note-body">[One- or two-sentence elaboration, 30px Inter]</div>
  </div>
  <div class="arc [/dark]"></div>
  <div class="brand"><span>@</span>figr<span class="dot">.design</span></div>
  <div class="bookmark"></div>
</div>

<!-- SLIDE 10 — TAKEAWAY (dark) -->
<div class="slide dark s10">
  <div class="body">
    <div class="row"><span class="arr">→</span><span class="ul">[Word]</span> [rest of statement.]</div>
    <div class="row last"><span class="arr">→</span><span class="yel">[Short verb phrase.]</span> [Remainder.]</div>
  </div>
  <div class="brand"><span>@</span>figr<span class="dot">.design</span></div>
  <div class="bookmark"></div>
</div>

<!-- SLIDE 11 — RESOURCES (light) -->
<div class="slide light s11">
  <div class="body">
    <div class="heading">[Heading like "Valuable resources"]</div>
    <div class="res"><div class="arr">→</div><div><div class="res-title">[Name]</div><div class="res-desc">[Single-line description.]</div></div></div>
    <!-- 3 more .res rows -->
    <div class="more">(+[N] additional links, videos, and books)</div>
  </div>
  <div class="brand"><span>@</span>figr<span class="dot">.design</span></div>
  <div class="bookmark"></div>
</div>

<!-- SLIDE 12 — CTA (dark) -->
<div class="slide dark s12">
  <div class="body">
    <div class="hed">[Question line?]<br><span class="arr">→</span>Comment <span class="quote">"[Keyword]"</span> and I'll<br>send it to you.</div>
    <div class="save">Save this post for later.</div>
    <div class="sub">[Soft ask, e.g. "If you drop a comment to show support, it would mean a lot."]</div>
  </div>
  <svg class="swoop" viewBox="0 0 280 280" fill="none" stroke="#E85844" stroke-width="3.5" stroke-linecap="round">
    <path d="M40 30 Q 240 60 220 160 Q 200 220 110 200 Q 50 180 90 140 Q 130 110 170 150 Q 200 190 230 240 L 220 225 M 230 240 L 215 232"/>
  </svg>
  <div class="brand"><span>@</span>figr<span class="dot">.design</span></div>
  <div class="bookmark"></div>
</div>

</body>
</html>
```

---

## File reference

`template-11-spacing.html` — `/Users/aditya/Documents/Content/Figrd/Carousel Set 1/`

Inspired by `@lubos.volkov`'s notebook-style spacing carousel. Re-implemented for figr.design at 1080×1350 with full design system swap. 12 slides, alternating light cream paper / dark charcoal.

Topic used: **"7 Spacing Rules That Make Any Design Feel Intentional"**

Content per slide:
- S1: Cover — `7 Spacing Rules / That Make Any Design Feel Intentional`
- S2: Myth — `I used to think spacing was about making things look airy. It's not. It's about telling the eye where to go next.`
- S3: Rule 1 — Use a spacing scale, not random numbers
- S4: Rule 2 — Space groups, not just elements
- S5: Rule 3 — Give breathing room before headings, not after
- S6: Rule 4 — Padding > margin for components
- S7: Rule 5 — Vertical rhythm is invisible glue
- S8: Rule 6 — Tight spacing = importance
- S9: Rule 7 — Test spacing at actual screen size
- S10: Takeaway — `Spacing isn't decoration. It's communication. Use a system. Be consistent. Let it do the work.`
- S11: Resources — Refactoring UI, 8pt Grid System (Google), Design Systems Repo, Laws of UX
- S12: CTA — `Comment "Rules"` lead-magnet + `Save this post for later`

---

## Design rules

1. **Alternation is strict.** Cover light, myth dark, then rules alternate light/dark starting light. Takeaway dark, resources light, CTA dark. The dark→light contrast carries the rhythm — never run two dark or two light slides in a row through the rule sequence.
2. **Crosshairs only on dark.** The 4 corner `⊕` registration marks are part of the "dark canvas" identity. Light slides get vertical column guides only.
3. **Every rule slide must have a diagram.** No type-only rule slides. If a rule can't be illustrated, fold it into the takeaway instead.
4. **Hand-drawn arrows are SVG path-only.** No emoji, no arrow glyphs, no Unicode `↗`. Stroke-width 2.5–3.5, round caps, single bezier curve, small chevron at the tip. Coral on light, yellow on dark.
5. **"Note:" is always Caveat 700 coral, always 56px.** Never change color, never change font, never substitute "Tip:" / "Remember:" — it's the recurring beat of the template.
6. **Progress tick color follows slide background.** Coral on light, yellow on dark. Tick is one of 12 slots; align it to the actual slide number.
7. **Ruler arc only on rule slides.** Cover, myth, takeaway, resources, and CTA do **not** carry the arc. The arc is the "working file" texture, reserved for the instructional middle.
8. **Marquee + handles only appear on the cover.** No selection borders on subsequent slides — those are reserved for the dashed-blue diagram frames inside illustrations (Rule 3, Rule 5).
9. **JetBrains Mono is for cover bars only.** Don't use it for kickers or labels — kickers are DM Serif italic, labels are Anton/Inter.
10. **Coral and yellow never share a slide as headline accents.** Coral is the light-slide accent (kickers, "Note:", takeaway underline source). Yellow is the dark-slide accent (Myth correction, takeaway phrase, CTA progress tick). Blue is reserved for cover measurement chips and diagram selection borders only.
11. **Annotations stay outside diagram bounds.** Inline notes (Caveat) sit beside or above the diagram with a connecting curved arrow — never overlay text on top of an illustration. Max-width 220–360px to force wrap into 2–3 short lines.
12. **CTA swoop arrow always points at the bookmark.** Bottom-right SVG path ends with a chevron landing roughly above the bookmark glyph — the visual cue for "save this".
