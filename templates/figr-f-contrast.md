# Figr F — Contrast Template

Designed for figr.design's UI/UX Instagram channel. Target audience: design leads and managers.
Use for: wrong-vs-right pattern carousels, side-by-side comparisons, "what AI/UX does vs what it should do" frameworks.

---

> **⚠️ Universal Rules override this spec.** See `SKILL.md` → "Universal Design Rules".
> - Rule U1: Slide 1 (hook) and Slide 7 (CTA) are both `#111827` dark navy below — they **must be light**. Apply Rule U1 light-hook + light-CTA treatments. Keep the terracotta accent phrase as the contrast source on a cream background instead.
> - Rule U2: If any middle slide ends up dark, the `--dark-bg: #111827` must be replaced with a layered gradient + grain + terracotta accent glow.
> - Rule U3: Bump every sub-18px size below — body 16→22, example card 13→18, ct-label 11→18, ct-counter 11→18, toggle text 13→18, CTA tagline 14→18.

---

## When to use

| Use figr-f-contrast | Use other figr templates |
|---|---|
| Topic maps to clear wrong-panel / right-panel pairs | Topic is a narrative list or timeline |
| Content benefits from physical left/right visual split | Content has before/after states (use figr-c-beforeafter instead) |
| You want a warm terracotta/cream palette on light slides | You want a dark/mono or editorial tone throughout |
| Signals: "wrong vs right", "this vs that", "the pattern you use / the pattern you should use" | — |

**figr-f-contrast vs figr-c-beforeafter:**
- F uses a **side-by-side split** (left column wrong, right column right) on a cream/terracotta background — reads in one glance
- C uses a **top/bottom stack** (before above, after below) on dark panels — reads sequentially

---

## Design system

### Tokens

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#0D0D0D` | Primary text on light |
| `--muted` | `#6B6B6B` | Body text on light |
| `--bg` | `#F7F6F3` | Light slide background (warm off-white) |
| `--dark-bg` | `#111827` | Hook and CTA dark background (deep navy) |
| `--accent` | `#00C8B4` | Cyan — brand dots, right-panel accent line |
| `--accent-pale` | `#EBF9F7` | Right panel background |
| `--wrong-bg` | `#EEE5E1` | Wrong (left) panel background |
| `--wrong-mid` | `#E0D4CF` | Wrong panel border |
| `--wrong-ink` | `#B8624F` | Terracotta — wrong panel text, hook/CTA accent |
| `--border` | `#DDD9D5` | Footer divider |

### Typography

- **Display font:** Inter (weights 400/500/600/700/800)
- **Label font:** JetBrains Mono (weights 400/500/700) — for hook/CTA eyebrows, counters
- **Hook headline:** 84px, 800, line-height 1.0, letter-spacing −0.03em
- **CTA headline:** 72px, 800, line-height 1.04, letter-spacing −0.026em
- **Panel headline:** 46px, 700, line-height 1.1, letter-spacing −0.018em
- **Body text:** 16px, 400, line-height 1.68
- **Example card:** 13px, 500, line-height 1.55, border-left 3px

### Background textures

- **Hook + CTA dark:** `#111827` + canvas grid (`linear-gradient` crosshatch, 44px, rgba white 0.055 for hook / 0.04 for CTA)
- **Content slides:** `--bg` + dot grid (`radial-gradient` 1px dots, 22px, rgba black 0.06). Wrong panel: `--wrong-bg`. Right panel: `--accent-pale`.

### Brand block

Position: `bottom: 36px; right: 44px;`, stacked column, align right.

```html
<div class="brand on-dark">  <!-- or on-light -->
  <span class="brand-name">figr</span><span class="brand-dot">.design</span>
</div>
```

On dark: `brand-name` color `rgba(255,255,255,0.4)`. On light: color `--muted`.
`brand-dot` always `color: var(--accent)`.

---

## Slide structure (7 slides)

### Narrative

Hook → The Core Problem → Pattern 01 → Pattern 02 → Pattern 03 → Pattern 04 → CTA

### Slide 1 — Hook (dark, full-width)

- Background: `#111827` + canvas grid (44px, 0.055 opacity)
- Layout: `flex-direction: column; padding: 84px 92px`
- Top row: JetBrains Mono eyebrow label (e.g. `// ai_ux · consent_design`) left + counter `01 / 07` right, `margin-bottom: 72px`
- Body flex-centered: 84px headline with `.accent` span in terracotta on the key phrase
- Full-width 1px rule `rgba(255,255,255,0.08)` with `margin: 52px 0 40px`
- Bottom row: 18px subtext left + terracotta stat badge right (JetBrains Mono, number + label)
- Brand block: absolute bottom-right

### Slides 2–6 — Contrast panels (light, split layout)

```
.contrast
  .ct-header       — 64px strip, border-bottom 1px --border
  .ct-toggle       — 52px toggle row (wrong label / right label)
  .ct-body         — flex: 1, horizontal split
    .ct-wrong      — wrong panel (left, --wrong-bg, terracotta hatch texture)
    .ct-right      — right panel (right, --accent-pale, cyan left accent bar)
  .ct-footer       — 60px, border-top 1px --border
```

**ct-header (64px):**
- Background: `--bg` + dot grid
- Left: slide label (e.g. "The Core Problem"), 11px, 600, uppercase, letter-spacing 0.12em, `--ink`
- Right: counter, 11px, 400, `--muted`

**ct-toggle (52px):**
- Two halves, each 50% width
- Wrong half: terracotta dot + "Acts without asking" — 13px, 500, `--wrong-ink`
- Right half: cyan dot + "Shows + waits for choice" — 13px, 500, `#008A7C`
- Border-bottom: 1px `--border`

**ct-wrong (left panel):**
- Background: `--wrong-bg` + terracotta diagonal hatch (`rgba(191,114,101,0.05)` at −45°, 12–13px repeat)
- Border-right: 1px `--wrong-mid`
- Padding: 52px 60px 52px 80px
- Content: panel headline (46px, 700, `--ink`) + body text (16px, `--muted`) + example card (terracotta left border, `--wrong-ink` text)

**ct-right (right panel):**
- Background: `--accent-pale` + dot grid
- `::before`: 3px × 100% cyan left accent bar
- Padding: 52px 80px 52px 60px
- Same content structure as wrong panel

**ct-footer (60px):**
- Background: `--bg` + border-top
- Right-aligned brand block (static position, not absolute)

### Slide 7 — CTA (split dark/cream)

Two-zone stacking (no fixed heights — dark flex: 1, cream fixed):

```
.cta
  .cta-dark   — flex: 1, #111827 + canvas grid (44px, 0.04 opacity)
  .cta-light  — ~100px, --bg, border-top 3px --wrong-ink
```

**cta-dark:**
- Counter absolute top-right: JetBrains Mono, `rgba(255,255,255,0.2)`
- JetBrains Mono eyebrow: `// apply_to_your_product`, `rgba(255,255,255,0.25)`, `margin-bottom: 40px`
- 72px headline with `.accent` span in terracotta on the key phrase
- 48px × 3px terracotta rule, `margin: 40px 0`
- 18px subtext, `rgba(255,255,255,0.45)`
- Brand block absolute bottom-right within dark zone

**cta-light:**
- `@figr.design` handle left (20px, 700, `--ink`)
- Tagline right (14px, 400, `--muted`)

---

## HTML skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Template F — [TOPIC] | figr.design</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --ink: #0D0D0D;
      --muted: #6B6B6B;
      --bg: #F7F6F3;
      --dark-bg: #111827;
      --accent: #00C8B4;
      --accent-pale: #EBF9F7;
      --wrong-bg: #EEE5E1;
      --wrong-mid: #E0D4CF;
      --wrong-ink: #B8624F;
      --border: #DDD9D5;
    }
    /* ... full CSS in template-f-contrast.html ... */
  </style>
</head>
<body>

<!-- SLIDE 1 — HOOK -->
<div class="slide hook">
  <div class="hook-top">
    <span class="hook-label">// [category] · [topic]</span>
    <span class="hook-counter">01 / 07</span>
  </div>
  <div class="hook-body">
    <div class="hook-hed">[Sentence one.] [Sentence two with <span class="accent">key phrase</span> in terracotta.]</div>
    <div class="hook-rule"></div>
    <div class="hook-bottom">
      <div class="hook-sub">[N] patterns that [outcome].</div>
      <div class="hook-badge">
        <div class="hook-badge-num">[N]</div>
        <div class="hook-badge-label">[label<br>label]</div>
      </div>
    </div>
  </div>
  <div class="brand on-dark"><span class="brand-name">figr</span><span class="brand-dot">.design</span></div>
</div>

<!-- SLIDE 2 — THE CORE PROBLEM -->
<div class="slide contrast">
  <div class="ct-header">
    <span class="ct-label">The Core Problem</span>
    <span class="ct-counter">02 / 07</span>
  </div>
  <div class="ct-toggle">
    <div class="toggle-half toggle-wrong"><span class="toggle-dot dot-wrong"></span>[Wrong label]</div>
    <div class="toggle-half toggle-right"><span class="toggle-dot dot-right"></span>[Right label]</div>
  </div>
  <div class="ct-body">
    <div class="ct-wrong">
      <div class="panel-top">
        <div class="panel-hed wrong-hed">[Wrong state headline]</div>
        <p class="panel-body">[Why this breaks things. <b>Key takeaway bold.</b>]</p>
      </div>
      <div class="panel-example ex-wrong">"[User quote or real example of the wrong pattern]"</div>
    </div>
    <div class="ct-right">
      <div class="panel-top">
        <div class="panel-hed right-hed">[Right state headline]</div>
        <p class="panel-body">[What the right pattern looks like. <b>Key takeaway bold.</b>]</p>
      </div>
      <div class="panel-example ex-right">[Real product example doing it right]</div>
    </div>
  </div>
  <div class="ct-footer">
    <div class="brand on-light" style="position:static;"><span class="brand-name">figr</span><span class="brand-dot">.design</span></div>
  </div>
</div>

<!-- SLIDES 3–6 — PATTERN 01–04 (same structure, label changes) -->

<!-- SLIDE 7 — CTA -->
<div class="slide cta">
  <div class="cta-dark">
    <span class="cta-counter-abs">07 / 07</span>
    <div class="cta-eyebrow">// apply_to_your_product</div>
    <div class="cta-hed">[CTA headline with <span class="accent">key phrase</span> in terracotta.]</div>
    <div class="cta-rule"></div>
    <div class="cta-sub">[One-sentence takeaway. Consent/control/trust framing.]</div>
    <div class="brand on-dark" style="position:absolute; bottom:36px; right:92px;"><span class="brand-name">figr</span><span class="brand-dot">.design</span></div>
  </div>
  <div class="cta-light">
    <div class="cta-handle">@figr.design</div>
    <div class="cta-tagline">Weekly AI/UX frameworks for design leads →</div>
  </div>
</div>

</body>
</html>
```

---

## File reference

`template-f-contrast.html` — `/Users/aditya/Documents/Content/Figrd/Carousel Set 1/`

Topic used: AI Consent Design (Research #08)
"Your AI feature acts. Your users never agreed to it."

Content across slides:
- S2: The Core Problem — AI changes something uninvited vs AI shows option and waits
- S3: Pattern 01 — Autocomplete replaces vs ghost text suggests
- S4: Pattern 02 — Auto-send vs staged confirmation
- S5: Pattern 03 — Permanent defaults vs reversible actions
- S6: Pattern 04 — Silent data use vs explicit permission gate

---

## Design rules

1. **Hook and CTA always use `#111827` + canvas grid** — never flat black. Grid at 44px, opacity 0.055 (hook) / 0.04 (CTA dark zone).
2. **Terracotta `#B8624F` is the accent for hook/CTA** — not cyan. Cyan stays as brand element (`.design` suffix, right-panel accent bar). Never use cyan as a dominant headline color.
3. **Mixed-case sentence-style headlines in hook/CTA** — not all-caps. Let the sentence wrap naturally at 84px / 72px. Max-width 860px / 820px.
4. **Terracotta accent spans 2–3 words max** — the key phrase that carries the emotional punch. Not entire clauses.
5. **CTA split is always dark-flex + cream-fixed** — dark section grows to fill remaining height, cream strip is fixed ~100px with terracotta top border.
6. **Wrong panel texture** — terracotta diagonal hatch `rgba(191,114,101,0.05)` at −45°, 12px transparent + 1px tinted. Subtle, not decorative.
7. **Right panel gets cyan left accent bar** — 3px × 100% height `var(--accent)` via `::before`. This visually anchors the "correct" column.
8. **Example cards use left border** — wrong: 3px `--wrong-ink` + terracotta bg `rgba`. Right: 3px `--accent` + pale cyan bg `rgba`.
9. **Content slides are dot-grid on cream** — `radial-gradient` 1px dots at 22px, `rgba(0,0,0,0.06)`. Not lines. Lines are dark-slide only.
10. **Slide labels for content slides:** "The Core Problem" (S2), "Pattern 01" through "Pattern 04" (S3–S6). Never "Shift" or "Tip".
