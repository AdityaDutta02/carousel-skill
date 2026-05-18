# Figr E — System Template

Designed for figr.design's UI/UX Instagram channel. Target audience: design leads and managers.
Use for: data-driven research breakdowns, scanning/reading behavior, systematic design rules backed by stats and eye-tracking data.

---

## Palette

Single-accent, desaturated (<80% saturation), temperature-locked warm. Apartamento / Cereal / Pentagram tier — not SaaS-onboarding.

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#1C1714` | Primary body text on cream + dark panel bg (same warm off-black) |
| `--muted` | `#7A6E5E` | Body text on cream (warm gray) |
| `--off-white` | `#FAF6EB` | Headline color on dark panels, brand-name on dark, warm-tinted whites |
| `--cream` | `#EDE5D4` | Right (light) panel + CTA bottom strip |
| `--dark-bg` | `#1C1714` | Dark panels (hook bg, left stat column, CTA top) |
| `--accent` | `#C24D1E` | **Burnt sienna — single accent.** Bleeding numbers, rules, dividers, `.pop` highlight spans, brand-dot, header labels |
| `--border` | `#C9BCA3` | Tan divider lines |

Aux color (literal): `#A8997F` — slide-counter + footer-source labels (low-contrast warm tan).

### Hard rules

- **Max 1 accent.** Burnt sienna does every job (numbers, rules, highlight spans, brand-dot, eyebrows). No secondary accent.
- **Temperature lock.** Everything warm. No cool grays. No `#FFFFFF` pure white (use `--off-white`). No `#000000` pure black (use `--dark-bg`).
- **No saffron / no cyan / no second accent.** Big numbers scream from size (200–280px), not from competing color.
- **Cool-white rgba overlays banned.** On dark panels use `rgba(250,246,235,…)` warm-shift, never `rgba(255,255,255,…)`.

---

## When to use

| Use figr-e-system | Use figr-g-spacing instead |
|---|---|
| Topic has real statistics or research data | Topic is a "N rules / N principles" list |
| Content is systematic / rule-based | Content needs per-point sketched diagrams |
| You want a warm-editorial, JetBrains Mono feel | You want notebook / handwritten tone |
| Data points are the visual hero | Headlines + illustrations are the visual hero |

---

## Typography

- **Display font:** Inter (weights 400/500/600/700/800)
- **Label font:** JetBrains Mono (weights 400/500/700) — eyebrows, counters, stat labels, sources
- **Hook headline:** 84px, 800, line-height 1.0, letter-spacing −0.03em, `--off-white`
- **Hook `.pop` highlight span:** `--accent` (burnt sienna)
- **Content headline:** 46px, 700, line-height 1.12, letter-spacing −0.018em, `--ink`
- **Body text:** 18px, 400, line-height 1.72, `--muted`; bold inline `<b>` → `--ink` 600
- **Hook sub:** 18px, 400, warm white 50% — **Hook stat big:** 48px mono 700, `--accent` — **Hook stat label:** 10px mono uppercase, warm white 30%
- **Mono eyebrow / counter:** 12px mono — eyebrow `--accent`, counter warm white 20–25%
- **Rule label:** 11px, uppercase, `--accent`, letter-spacing 0.13em
- **Stat unit (mono):** 13px, `--accent`, uppercase — **Stat desc (mono):** 10px, warm white 25%, uppercase
- **Slide counter / Footer source:** 10–12px mono, `#A8997F`, uppercase
- **CTA hed:** 72px, 800, `--off-white` — **CTA `.pop` span:** `--accent`
- **CTA eyebrow:** 11px mono, warm white 25% — **CTA sub:** 18px, warm white 45%
- **CTA handle:** 20px, 700, `--ink` (`.design` span = `--accent`) — **CTA action:** 14px, 600, `--muted`
- **Brand name:** 18px, 700 — **Brand dot:** 13px, 500, `--accent`
- **Stat number (bleeding):** 200–280px, 800, `--accent`, opacity 0.95, absolutely positioned (`top:-32px; left:-24px`), overflows dark panel for visual drama

---

## Layout

### Slide 1 — Hook (dark, full-width)

- Background: `--dark-bg` + canvas grid (`linear-gradient` 44px, `rgba(250,246,235,0.055)`)
- Padding: 84px 92px
- Top row: JetBrains Mono eyebrow (sienna) + counter `01 / 07` (warm white 20%)
- Middle: 84px headline, `--off-white`, with `.pop` span (sienna) highlighting the core insight
- Divider: 1px rule warm-white 8%
- Bottom row: 18px subtext left + JetBrains Mono stat pill right (big sienna number + small label)
- Brand block: bottom-right, warm-white 45% name + sienna dot

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

- `sys-left` (320px, `--dark-bg` + 32px faint grid `::before`): bleeding 200–280px sienna number + bottom-pinned `sys-left-content` (stat-unit + stat-desc)
- Right edge of dark panel: 3px sienna gradient line via `::after`
- `sys-right` (flex 1, `--cream` + 24px radial dot grid + 72% warm-white overlay): top strip with rule-label (sienna) + counter (`#A8997F`), body with 46px headline + 40×3px sienna divider + 18px body, footer with source + brand

### Slide 7 — CTA (split dark/light)

- Top ~75%: `--dark-bg` + canvas grid
  - JetBrains Mono eyebrow `// apply_to_your_product` (warm white 25%)
  - 72px headline `--off-white` with `.pop` span (sienna) on key action
  - 48×3px sienna rule below headline
  - 18px subtext (warm white 45%)
- Bottom strip: `--cream` + 3px sienna top border
  - Left: `@figr.design` handle (`--ink`, `.design` span sienna)
  - Right: "Weekly frameworks for design leads →" (14px, `--muted`)

---

## Stat selection guide

For the bleeding number on `sys-left` — use **real** data points only:

| Good | Bad |
|---|---|
| `20` (% of words read) | `#` (hashtag symbol) |
| `2` (first words per line) | `1→` (arrow glyph) |
| `3×` (fixation multiplier) | `DEAD ZONE` (text label) |
| `2–3` (line limit per paragraph) | `?` (question mark) |
| `80%` (content below fold not read) | vague qualitative claim |

Stat labels (stat-unit + stat-desc) must be two-line at most. Always real data point. Never a symbol alone.

---

## File reference

- **Source:** `templates/sources/figr-e-system.html`
- **Previews:** `templates/previews/figr-e-system/{cover,grid,full}.webp`

Topic used: Scanning behavior / F-pattern
"Your users aren't reading. They're pattern-matching."

Stats used across slides:
- S2: 20% words read (NNGroup 2024, 232 users)
- S3: 2 first words (F-pattern eye fixation research)
- S4: 3× more fixations on bold text vs body
- S5: 2–3 line limit per paragraph
- S6: 80% content below fold never read

---

## Universal-rules override

> **⚠️ Universal Rules in SKILL.md may override this spec.** See SKILL.md → "Universal Design Rules".
>
> - U1 (light hook + light CTA): figr-e ships dark-hook + dark-CTA for visual hit. If U1 is active at carousel-generation time, swap S1/S7 backgrounds to `--cream` and keep the bleeding sienna number as the hero.
> - U2 (no flat dark): the current `--dark-bg` is paired with the canvas-grid overlay. If U2 requires more layering, add grain SVG + faint sienna radial glow on the dark panels (preserve the single-accent rule — no secondary glow color).
