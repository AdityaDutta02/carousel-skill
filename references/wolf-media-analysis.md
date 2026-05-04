# Wolf Media Design System
> Extracted: 2026-05-04 via forensic analysis of @wolfmedia.in carousels
> Status: Frozen — this is the default design system for instagram-carousel skill

## Background System

### Dark slides
- Base: `#131110` (warm charcoal, not cold black)
- Radial vignette: `radial-gradient(ellipse 130% 90% at 30% 20%, rgba(38,32,24,0.65) 0%, transparent 55%)`
- Warm brown tint from the vignette adds depth and separates from generic dark themes

### White slides
- Pure `#FFFFFF` — the contrast with dark slides is intentional and dramatic

### CTA slide
- Solid accent color (topic-dependent, default `#1B6AE4`)
- Radial vignette at bottom-left: `radial-gradient(ellipse 120% 80% at 20% 80%, rgba(12,30,80,0.70) 0%, transparent 60%)`

### Film grain (all slide types)
- SVG feTurbulence: `type="fractalNoise" baseFrequency="0.50" numOctaves="4" stitchTiles="stitch"`
- feColorMatrix: `type="saturate" values="0"` — CRITICAL: removes green cast from fractalNoise
- Tile size: 300×300px
- Opacity: 0.26 (dark), 0.22 (CTA) — white slides have no grain
- Implemented via `::before` pseudo-element with SVG data URI

## Typography

### Font
- Outfit (Google Fonts), weights 400–900
- CDN: `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap`
- Works reliably with webkit Playwright on file:// — no need for base64 inline

### Display sizes (fixed px, not clamp)
- h1-xl: 116px, weight 800, line-height 0.90, letter-spacing -0.04em
- h1: 100px, weight 800, line-height 0.92, letter-spacing -0.04em
- h1-sm: 86px, weight 800, line-height 0.93, letter-spacing -0.04em
- CTA display: 108px, weight 800, line-height 0.90, letter-spacing -0.04em

### Body sizes
- Bold lead (.bb / .wbb): 26px, weight 700, line-height 1.45
- Regular context (.br / .wbr): 24px, weight 400, line-height 1.60
- Stat label: 22px, weight 400
- Stat value: 24px, weight 800
- Numbered list title: 24px, weight 700, line-height 1.3
- Numbered list desc: 24px, weight 400, line-height 1.50
- Handle pill: 14px, weight 500
- Progress label: 13px, weight 700, letter-spacing 0.14em, uppercase

## Gradient Text — THE Signature Technique

Two-tone headlines split between solid and gradient-faded spans:

### Dark slides (.gd)
```css
background: linear-gradient(90deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.22) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
display: inline-block;
width: fit-content;
```
First line of headline = solid white. Subsequent lines = .gd (fade to dim).

### White slides (.gl)
```css
background: linear-gradient(90deg, #2C2C2C 0%, #ABABAB 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
display: inline-block;
width: fit-content;
```
First line = `.blk` (solid #111111). Subsequent lines = .gl (fade to grey).

## Layout

### Content anchoring
Content is ALWAYS anchored from the top. Never bottom-anchor or vertically center.
- `.pad`: `position: absolute; inset: 0; padding: 90px; padding-top: 490px; z-index: 2`
- White slides: `padding-top: 460px`
- Slides with more content (numbered list, company grid): override to 370–390px
- CTA slide: 430px

### Horizontal padding
90px both sides, always matching. Handle pill aligns to the same 90px edge.

### Handle pill placement
- Top: 55px
- Left: 90px (`.handle-tl`) or Right: 90px (`.handle-tr`)
- Alternates per slide — hook slide uses top-right, data slides use top-left
- Border: `1px solid rgba(255,255,255,0.30)`
- Padding: 10px 20px, border-radius: 100px

### Progress bar
- Position: `bottom: 60px; left: 90px; right: 90px; height: 2px`
- Track opacity: 0.14 (dark), 0.10 (white), 0.22 (CTA)
- Fill: `rgba(255,255,255,0.68)` (dark), `rgba(0,0,0,0.52)` (white), `rgba(255,255,255,0.88)` (CTA)
- Width: hardcoded per slide as percentage of total (100 / N × index)

## Slide Alternation Pattern
Dark → Dark → White → Dark → White → Dark → Dark → White → Dark → White → CTA

Rules:
- Slide 1 (HOOK): always dark
- STATS: dark
- INSIGHT: white
- NUMBERED LIST: dark
- COMPANY GRID: white
- DATA DARK: dark with bb + br
- FINDINGS: white
- CTA: accent color
- Never two white slides back to back

## Stat Boxes
Horizontal rows, NOT isolated giant numbers.
```html
<div class="stat-row">
  <span class="stat-lbl">[Label]:&nbsp;</span>
  <span class="stat-val">[Value]</span>
</div>
```
Min-width 580px, border `rgba(255,255,255,0.18)`, background `rgba(255,255,255,0.04)`.

## CTA Slide Signature
Left-aligned, editorial. Not centered. Not just a name + handle pill.
Structure: LABEL ("FOLLOW FOR MORE") → PAGE NAME (108px) → HUMAN TAGLINE (28px)
Tagline connects to the carousel story. Must be specific — not "follow for more great content."
