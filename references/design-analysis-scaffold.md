# Design Analysis Scaffold
> Use this when the user provides reference screenshots from a carousel creator
> different from Wolf Media. Run through every section, answer every question,
> then write the output to `references/[creator]-design-system.md`.
> That file becomes the source of truth for Section 3 of the skill.

## How to use this scaffold

1. User provides reference screenshots (minimum 4 slides from the same creator)
2. Read each screenshot carefully
3. Answer every question in every section below
4. Write findings to `references/[creator]-design-system.md`
5. In Section 3 of SKILL.md, replace "Wolf Media System" with "[Creator] System"
   and substitute the extracted values

---

## Section A: Background System

For each slide type you can identify (dark, light, accent/CTA):

- [ ] What is the background color? (exact hex if determinable, or description)
- [ ] Is there a gradient overlay? (radial/linear, position, colors, opacity)
- [ ] Is there film grain or texture? (subtle/medium/heavy, monochromatic/colored)
- [ ] Is there a noise overlay, halftone, or other texture?
- [ ] Are there decorative elements (lines, shapes, abstract art)?
- [ ] What is the overall warmth? (warm/neutral/cool)

**Output fields:**
```
dark_bg: 
dark_vignette: 
dark_grain: 
light_bg: 
light_texture: 
cta_bg: 
cta_vignette: 
```

---

## Section B: Typography

- [ ] What font family is used? (identify from letterforms — serif/sans/display)
- [ ] Is the font available on Google Fonts or a CDN? (name it exactly)
- [ ] What is the display font weight? (light/regular/bold/black)
- [ ] What are approximate display sizes? (estimate in px from 1080px-wide canvas)
- [ ] What is the letter-spacing? (tight/normal/wide — estimate em value)
- [ ] What is the line-height on headlines? (tight <1.0 / normal ~1.2 / loose >1.4)
- [ ] Is there a two-tone headline pattern? (solid + faded, or solid + accent color)
- [ ] How many type sizes are visible? (list them)

**Output fields:**
```
display_font: 
display_font_cdn: 
display_weight: 
display_size_xl: 
display_size_md: 
display_size_sm: 
display_letter_spacing: 
display_line_height: 
body_bold_size: 
body_regular_size: 
two_tone_pattern: yes/no
two_tone_method: gradient-fade / color-split / weight-only / other
```

---

## Section C: Gradient Text (if present)

- [ ] Does the creator use gradient or faded text on headlines?
- [ ] Which lines get the gradient? (first line solid, rest gradient? alternating?)
- [ ] Direction? (left-to-right / right-to-left / top-to-bottom / other)
- [ ] Start color and opacity?
- [ ] End color and opacity?
- [ ] Same technique on light and dark slides, or different?

**Output fields:**
```
gradient_text: yes/no
dark_slide_gradient: linear-gradient(...)
light_slide_gradient: linear-gradient(...)
gradient_lines: first-solid-rest-gradient / all-gradient / other
```

---

## Section D: Layout Anchoring

- [ ] Where is the main content positioned vertically? (top third / middle / bottom third)
- [ ] Is content anchored from top, center, or bottom?
- [ ] What is the approximate top padding before content starts? (estimate px from 1350px height)
- [ ] What is the horizontal padding on each side? (estimate px from 1080px width)
- [ ] Does content position vary between dark and light slides?
- [ ] Is there a consistent left-alignment, or is anything centered?

**Output fields:**
```
content_anchor: top / center / bottom
dark_padding_top: 
light_padding_top: 
horizontal_padding: 
alignment: left / center / mixed
```

---

## Section E: Branding & Handle

- [ ] Is there a handle pill/badge visible?
- [ ] Where is it positioned? (top-left / top-right / bottom / no consistent position)
- [ ] Style: pill with border / plain text / icon + text / other
- [ ] Does it alternate position between slides?
- [ ] Any other recurring branding element (logo, watermark, icon)?

**Output fields:**
```
handle_visible: yes/no
handle_position: top-left / top-right / alternating / other
handle_style: bordered-pill / plain / icon+text
handle_font_size: 
```

---

## Section F: Progress / Slide Indicator

- [ ] Is there a progress indicator visible?
- [ ] Type: bar / dots / numbers / none
- [ ] Position: bottom / top / side
- [ ] Style: filled line / outlined dots / other
- [ ] Height/size?

**Output fields:**
```
progress_type: bar / dots / numbers / none
progress_position: 
progress_style: 
progress_size: 
```

---

## Section G: Information Hierarchy

- [ ] How many distinct text levels are visible per slide? (headline / subhead / body / footnote)
- [ ] Is there a bold lead + regular context pattern?
- [ ] Are stats displayed as: isolated large number / label+value row / table / other
- [ ] Are there list patterns? (numbered / bulleted / none)
- [ ] Are there any card or box patterns? (bordered boxes / colored chips / none)

**Output fields:**
```
text_levels: 
bold_lead_pattern: yes/no
stat_display: isolated-number / label-value-row / table / other
list_pattern: numbered / bulleted / none / other
card_pattern: bordered-box / colored-chip / none / other
```

---

## Section H: Slide Type Inventory

For each unique slide layout you can identify, describe:
- Name you'd give it (HOOK, STATS, INSIGHT, LIST, GRID, etc.)
- Background type (dark/light/accent)
- Content layout
- Unique elements

```
slide_types:
  - name: 
    bg: 
    layout: 
    unique_elements: 
```

---

## Section I: Alternation Pattern

- [ ] What is the dark/light/accent sequence? (document 5+ slides if available)
- [ ] Is there a strict rule? (always alternates? groups by type?)
- [ ] What triggers a light vs dark slide?

**Output fields:**
```
alternation_sequence: dk/wt/dk/wt/...
alternation_rule: strict-alternation / topic-driven / other
```

---

## Section J: Signature Details

What makes this creator's carousels immediately recognizable? List 3–5 specific
details that aren't obvious from the above and would be easy to miss:

```
signature_details:
  1. 
  2. 
  3. 
  4. 
  5. 
```

---

## Section K: Banned List

What patterns are clearly absent from this creator's work that AI would default to?

```
banned:
  - 
  - 
  - 
```

---

## Output Template

After completing all sections above, write `references/[creator]-design-system.md`:

```markdown
# [Creator] Design System
> Extracted: [date] from [N] reference screenshots
> Source: [handle or URL]
> Status: Active — override Wolf Media defaults in Section 3

## Quick Reference
[3-sentence summary of the visual identity]

## Background
[dark_bg, dark_vignette, dark_grain, light_bg, cta_bg]

## Typography
[display_font, sizes, weights, letter-spacing, line-height]

## Gradient Text
[gradient_text, dark_slide_gradient, light_slide_gradient, gradient_lines]

## Layout
[content_anchor, padding values, alignment]

## Branding
[handle_visible, handle_position, handle_style]

## Progress Indicator
[progress_type, position, style]

## Slide Types
[slide_types inventory]

## Alternation
[alternation_sequence, alternation_rule]

## Signature Details
[3–5 unique details]

## Banned
[3–5 patterns absent from this creator's work]

## CSS Override for Section 3
[Paste the exact CSS substitutions for .dk, .wt, .ct, .pad, .h1, .gd, .gl, .bb, .br etc.]
```
