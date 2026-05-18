# Figr E — System Template

Designed for figr.design's UI/UX Instagram channel. Target audience: design leads and managers.
Use for: data-driven research breakdowns, scanning/reading behavior, systematic design rules backed by stats and eye-tracking data.

---

> **⚠️ Universal Rules override this spec.** See `SKILL.md` → "Universal Design Rules".
> - Rule U1: Slide 1 (hook) is dark `#111827` and Slide 7 (CTA) is mostly dark split below — both **must be light**. Apply Rule U1 light-hook + light-CTA treatments. Keep the cyan stat number as the visual hero on a cream panel; drop the navy fill.
> - Rule U2: The `--dark-bg: #111827` token on middle slides' left stat columns must be replaced with layered gradient + grain + cyan accent glow, not flat navy.
> - Rule U3: Bump every sub-18px size below — hook stat label 13→18, mono eyebrow/counter 15→18, rule label 14→18, stat-desc 10/13→18, footer source 13→18, brand dot 15→20. The "do not shrink below 13px" note is superseded by the 18px floor.

---

## When to use

| Use figr-e-system | Use other templates |
|---|---|
| Topic has real statistics or research data | Topic is editorial / opinionated only |
| Content is systematic / rule-based | Content is a framework list |
| You want a dark-technical, JetBrains Mono feel | You want editorial or conversational tone |
| Data points are the visual hero | Headlines are the visual hero |

---

## Design system

### Tokens

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#0D0D0D` | Primary text |
| `--muted` | `#6B6B6B` | Body text on light |
| `--cream` | `#F4F3EF` | Light side background |
| `--dark-bg` | `#111827` | Dark panel background (navy, not black) |
| `--accent` | `#00C8B4` | Cyan — accent, stat numbers |
| `--border` | `#E0DED9` | Divider lines |

### Typography

- **Display font:** Inter (weights 400/500/600/700/800)
- **Label font:** JetBrains Mono (weights 400/500/700) — for eyebrows, counters, stat labels
- **Hook headline:** 96px, 800, line-height 0.98, letter-spacing −0.03em
- **Content headline:** 56px, 700, line-height 1.1, letter-spacing −0.018em
- **Body text:** 24px, 400, line-height 1.62
- **Hook sub:** 24px, 400 — **Hook stat big:** 56px, mono — **Hook stat label:** 13px, mono uppercase
- **Mono eyebrow / counter:** 15px, mono — **Rule label:** 14px, uppercase, cyan
- **Stat unit:** 16px, mono, cyan — **Stat desc:** 13px, mono, uppercase
- **Footer source:** 13px, mono, uppercase
- **CTA hed:** 84px, 800 — **CTA eyebrow:** 14px, mono — **CTA sub:** 24px — **CTA handle:** 24px, 700 — **CTA action:** 17px, 600
- **Brand name:** 22px, 700 — **Brand dot:** 15px, 500, cyan
- **Stat number (bleeding):** 200–280px, 800, color `--accent`, absolutely positioned, overflows dark panel

### Backgrounds

- **Hook slide:** `#111827` + canvas grid (`linear-gradient` at 44px, rgba white 0.055)
- **Content slides:** `--cream` + dot grid (`radial-gradient` 1px dots, 24px spacing, rgba black 0.07). Right panel: `rgba(255,255,255,0.72)` over dot field.
- **Dark left panel:** `#111827` + faint 32px grid overlay via `::before`
- **CTA:** top ~65% is dark with grid, bottom strip is `--cream` with 3px cyan top border

### Dark left panel — stat column (320px wide)

Each content slide has a narrow dark stat column on the left showing one oversized number that bleeds:

```css
.stat-bg-num {
  position: absolute;
  top: -32px; left: -24px;
  font-size: 280px;       /* adjust per stat */
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
  letter-spacing: -0.06em;
  opacity: 0.9;
}
```

Below the bleeding number, pinned to the bottom of the column:

```html
<div class="sys-left-content">
  <div class="stat-unit">% of words</div>   <!-- JetBrains Mono 13px, cyan, uppercase -->
  <div class="stat-desc">read on a<br>typical page</div>  <!-- JetBrains Mono 10px, white 25%, uppercase -->
</div>
```

Stat labels must be two-line at most. Always a real data point. Never a symbol alone (`#`, `→`) — use actual numbers or ratios (`2`, `3×`, `80%`, `2–3`).

**Mobile-readability note:** all text sizes are tuned for 1080×1080 viewed on Instagram mobile (effective ~400px wide). Do not shrink body below 24px or labels below 13px.

Right edge of dark panel: 3px cyan gradient line via `::after`.

### Brand block

Position: bottom-right of each slide. Stacked column, align right.

```html
<div class="brand on-dark">  <!-- or on-light -->
  <span class="brand-name">figr</span><span class="brand-dot">.design</span>
</div>
```

On dark: `brand-name` color `rgba(255,255,255,0.45)`. On light (right panel footer): color `--muted`.

---

## Slide structure (7 slides)

### Narrative

Hook → Research finding → Rule 01 → Rule 02 → Rule 03 → Rule 04 → CTA

### Slide 1 — Hook (dark, full-width)

- Background: `#111827` + canvas grid
- Layout: `flex-direction: column; justify-content: space-between; padding: 84px 92px`
- Top: JetBrains Mono eyebrow label (topic category) + counter `01 / 07` right-aligned
- Middle: Big headline 84px with `.cyan` span highlighting the core insight
- Divider: 1px rule `rgba(255,255,255,0.08)`
- Bottom: 18px subtext left + JetBrains Mono stat pill right (big number in cyan + small label)
- Brand block: bottom-right

### Slides 2–6 — Research + Rules (dark-left / cream-right split)

```html
<div class="slide sys">
  <div class="sys-left">
    <!-- bleeding stat number + sys-left-content -->
  </div>
  <div class="sys-right">
    <div class="sys-right-top">label + counter</div>
    <div class="sys-right-body">headline + divider + body</div>
    <div class="sys-right-footer">source + brand</div>
  </div>
</div>
```

- `sys-left`: 320px, dark bg, stat panel
- `sys-right`: flex 1, cream dotted bg with white translucent overlay
- Header strip: border-bottom 1px, cyan label left, JetBrains Mono counter right
- Body: 46px headline + 3px cyan divider bar (40px wide) + 18px body text (max 3 short paragraphs)
- Footer: JetBrains Mono source left + brand right

### Slide 7 — CTA (split dark/light)

- Top ~65%: `#111827` + canvas grid
  - JetBrains Mono eyebrow `// apply_to_your_product`
  - 72px headline with `.cyan` span on the key action
  - 3px × 48px cyan rule below headline
  - 18px subtext
- Bottom strip: `--cream` + 3px top cyan border
  - Left: `@figr.design` handle (20px, bold)
  - Right: "Weekly frameworks for design leads →" (14px, muted)

---

## Stat selection guide

Stats for the dark left panel — use **real** data points only:

| Good | Bad |
|---|---|
| `20` (% of words read) | `#` (hashtag symbol) |
| `2` (first words per line) | `1→` (arrow glyph) |
| `3×` (fixation multiplier) | `DEAD ZONE` (text label) |
| `2–3` (line limit per paragraph) | `?` (question mark) |
| `80%` (content below fold not read) | vague qualitative claim |

---

## File reference

`template-e-system.html` — `/Users/aditya/Documents/Content/Figrd/Carousel Set 1/`

Topic used: Scanning behavior / F-pattern (Research #07)
"Your users aren't reading. They're pattern-matching."

Stats used across slides:
- S2: 20% words read (NNGroup 2024, 232 users)
- S3: 2 first words (F-pattern eye fixation research)
- S4: 3× more fixations on bold text vs body
- S5: 2–3 line limit per paragraph
- S6: 80% content below fold never read
