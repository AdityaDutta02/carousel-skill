# Template 4: ASCII/Pixel Art

**Aesthetic**: Anthropic "Code with Claude" conference marketing. Warm beige paper, Space Mono headlines,
ASCII globe SVG, pixel art bot, box-drawing character borders. For tech/AI marketing carousels where
the visual itself signals deep AI literacy.

**When auto-selected**: See SKILL.md Section 0 signals — but this template is also appropriate when
user explicitly wants "ASCII", "pixel art", "terminal aesthetic", "code style", or "Anthropic vibe".

---

> **⚠️ Universal Rules override this spec.** See `SKILL.md` → "Universal Design Rules".
> - Rule U1: Slide 1 (cover-light) is already light — keep it. Slide 6 (CTA-DARK, `.dk4 { background: #0F0D0B }`) **must be light**. Apply Rule U1 light-CTA treatment: warm beige paper, Space Mono headline in ink `#15110E`, ASCII frame in coral/ink, CTA prompt in 18px+ ink.
> - Rule U2: The `--bg-dark: #0F0D0B` and `--bg-term: #111111` flat fills must be replaced with layered gradients + grain + amber/red terminal accent glow on any remaining dark middle slide.
> - Rule U3: Bump every sub-18px size below — handle 13→20, label 13→18, ASCII box body 13→18, terminal session label 13→18, terminal body 15→18, stat-label 13→18, stat-source 12→18, corner labels 12→18, inline ASCII frame chars at 11–12px → 18+ (or treat as decorative graphic, not text).

---

## Font Stack

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
```

- **Space Mono** — all ASCII art text, large headlines, box-drawing, stats
- **Outfit** — body text, subtitles, CTA supporting copy

---

## Color Palette

```css
/* Backgrounds */
--bg-warm:   #FBF6EC;   /* warm paper beige — light slides */
--bg-dark:   #0F0D0B;   /* near-black warm — dark slides */
--bg-term:   #111111;   /* true dark — terminal components */

/* Text */
--txt-dark:  #1A1410;   /* near-black, all on light */
--txt-light: #F0EBE0;   /* warm white, all on dark */
--txt-dim:   #8B7355;   /* warm brown — ASCII decoration, secondary labels */

/* Accent */
--acc-org:   #E55A2B;   /* orange — primary accent, boxes, highlights */
--acc-grn:   #7EC850;   /* terminal green — code output lines */
--acc-amb:   #F4B942;   /* amber — alternate terminal, warnings */

/* Globe / pixel */
--globe-lt:  rgba(139,115,85,0.35);  /* globe lines on light bg */
--globe-dk:  rgba(229,90,43,0.50);   /* globe lines on dark bg */
```

---

## HTML Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1080">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; font-family: 'Outfit', sans-serif; }

    .slide { width: 1080px; height: 1350px; display: none; position: relative; overflow: hidden; }
    .slide.active { display: block; }

    /* ─── LIGHT SLIDE ─── */
    .lt4 { background: #FBF6EC; }

    /* ─── DARK SLIDE ─── */
    .dk4 { background: #0F0D0B; }

    /* ─── CONTENT ZONES ─── */
    .pad4     { position: absolute; inset: 0; padding: 90px; z-index: 2; }
    .pad4-mid { position: absolute; inset: 0; padding: 90px; z-index: 2; display: flex; flex-direction: column; justify-content: center; }

    /* ─── PROGRESS ─── */
    /* ASCII/pixel template uses a dot-line progress indicator at top, not a bar */
    .progress-track {
      position: absolute; top: 52px; left: 90px; right: 90px;
      display: flex; align-items: center; gap: 0; z-index: 10;
    }
    .p-seg {
      height: 1px; background: rgba(26,20,16,0.20); flex: 1;
    }
    .lt4 .p-seg  { background: rgba(26,20,16,0.20); }
    .dk4 .p-seg  { background: rgba(240,235,224,0.20); }
    .p-seg.done  { background: #E55A2B; }
    .p-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: #E55A2B; flex-shrink: 0;
    }
    /* One dot at current position, segments between */

    /* ─── HANDLE ─── */
    .handle-lt4 {
      position: absolute; bottom: 60px; left: 90px;
      font-family: 'Space Mono', monospace; font-size: 13px; font-weight: 400;
      color: #8B7355; letter-spacing: 0.03em; z-index: 5;
    }
    .dk4 .handle-lt4 { color: rgba(240,235,224,0.45); }

    /* ─── TYPOGRAPHY ─── */
    .h-mono {
      font-family: 'Space Mono', monospace; font-weight: 700;
      font-size: 80px; line-height: 1.05; color: #1A1410; letter-spacing: -0.01em;
    }
    .h-mono-sm {
      font-family: 'Space Mono', monospace; font-weight: 700;
      font-size: 56px; line-height: 1.1; color: #1A1410;
    }
    .dk4 .h-mono, .dk4 .h-mono-sm { color: #F0EBE0; }

    .h-stat {
      font-family: 'Space Mono', monospace; font-weight: 700;
      font-size: 108px; line-height: 1.0; color: #1A1410;
    }
    .dk4 .h-stat { color: #E55A2B; }

    .sub4 {
      font-family: 'Outfit', sans-serif; font-weight: 500;
      font-size: 22px; line-height: 1.5; color: #5A4E3C; margin-top: 24px;
    }
    .dk4 .sub4 { color: rgba(240,235,224,0.65); }

    .body4 {
      font-family: 'Outfit', sans-serif; font-weight: 400;
      font-size: 24px; line-height: 1.6; color: #3D3020;
    }
    .dk4 .body4 { color: rgba(240,235,224,0.80); }

    .label4 {
      font-family: 'Space Mono', monospace; font-size: 13px;
      color: #8B7355; letter-spacing: 0.08em; text-transform: uppercase;
      margin-bottom: 16px;
    }
    .dk4 .label4 { color: rgba(229,90,43,0.80); }

    .acc4 { color: #E55A2B; }

    /* ─── ASCII BOX BORDER ─── */
    .ascii-box {
      font-family: 'Space Mono', monospace; font-size: 13px;
      color: #8B7355; white-space: pre; line-height: 1.4;
      pointer-events: none;
    }
    .dk4 .ascii-box { color: rgba(229,90,43,0.55); }

    /* ─── TERMINAL COMPONENT ─── */
    /*
     * RULE: terminal is ALWAYS placed on a LIGHT slide (lt4 background).
     * Never put a dark #111 terminal on a dark #0F0D0B slide — no contrast.
     * Use light slide bg so the terminal window pops.
     *
     * RULE: terminal is a CONTAINED window, NOT full-bleed.
     * Set an explicit height (e.g. height:500px) — do not use flex:1 to fill
     * the whole slide. Leave visible slide background above and below.
     *
     * RULE: terminal body max 12 lines. If content fits in fewer, add a
     * "WHAT JUST HAPPENED" interpretation callout below the terminal to fill
     * the remaining slide height (see TERMINAL-FULL slide type below).
     *
     * RULE: terminal body font-size 15px, line-height 1.85. At these values
     * 12 lines ≈ 333px. Plus chrome (44px) + padding (56px) → ~433px window.
     */
    .term4 {
      background: #111111; border-radius: 10px;
      overflow: hidden; display: flex; flex-direction: column;
    }
    .term4-chrome {
      background: #2D2D2D; height: 44px; flex-shrink: 0;
      display: flex; align-items: center; padding: 0 18px; gap: 8px;
    }
    .t4-dot { width: 13px; height: 13px; border-radius: 50%; flex-shrink: 0; }
    .term4-body {
      padding: 28px 36px; font-family: 'Space Mono', monospace; font-size: 15px;
      line-height: 1.85;
    }
    .tc { color: #F0EBE0; }
    .to { color: rgba(180,170,155,0.60); }
    .tg { color: #7EC850; }
    .ta { color: #F4B942; }
    .te { color: #E55A2B; }

    /* ─── ASCII GLOBE SVG ─── */
    /* Inline SVG, drop into slides. Adjust size with width/height attrs */
    /* Globe lines: stroke="rgba(139,115,85,0.35)" on light, stroke="#E55A2B" 0.4 on dark */

    /* ─── PIXEL BOT ─── */
    /* Inline SVG 160×200px approx. Position absolute wherever needed */

    /* ─── STAT BOX ─── */
    .stat-box4 {
      border: 1.5px solid rgba(139,115,85,0.35); border-radius: 4px;
      padding: 40px 48px; display: inline-block; margin-top: 32px;
    }
    .dk4 .stat-box4 { border-color: rgba(229,90,43,0.40); }

    .stat-label {
      font-family: 'Space Mono', monospace; font-size: 13px;
      color: #8B7355; letter-spacing: 0.10em; text-transform: uppercase;
      margin-bottom: 12px; display: block;
    }
    .dk4 .stat-label { color: rgba(229,90,43,0.75); }

    .stat-source {
      font-family: 'Space Mono', monospace; font-size: 12px;
      color: #8B7355; margin-top: 12px; display: block;
    }

    /* ─── DIVIDER ─── */
    .div4 { width: 48px; height: 2px; background: #E55A2B; margin: 28px 0; }

    /* ─── CORNER MARKS ─── */
    /* Small ASCII decorations: position absolute at corners */
    .corner-tl, .corner-tr, .corner-bl, .corner-br {
      position: absolute; font-family: 'Space Mono', monospace;
      font-size: 12px; color: rgba(139,115,85,0.40); line-height: 1.4;
      z-index: 2; white-space: pre;
    }
    .corner-tl { top: 90px; left: 90px; }
    .corner-tr { top: 90px; right: 90px; text-align: right; }
    .corner-bl { bottom: 90px; left: 90px; }
    .corner-br { bottom: 90px; right: 90px; text-align: right; }
    .dk4 .corner-tl, .dk4 .corner-tr, .dk4 .corner-bl, .dk4 .corner-br {
      color: rgba(229,90,43,0.30);
    }
  </style>
</head>
<body>
<!-- slides injected here -->
</body>
</html>
```

---

## The ASCII Globe SVG

Place as a positioned element. Use `width="340" height="340"` for covers, `width="240" height="240"` for smaller accents.

**On light slides** (`stroke="rgba(139,115,85,0.35)"`):
```html
<svg class="globe-svg" width="340" height="340" viewBox="0 0 340 340"
     xmlns="http://www.w3.org/2000/svg"
     style="position:absolute; top:60px; right:60px; z-index:1;">
  <defs>
    <clipPath id="globe-clip">
      <circle cx="170" cy="170" r="155"/>
    </clipPath>
  </defs>
  <g clip-path="url(#globe-clip)" stroke="rgba(139,115,85,0.35)" fill="none">
    <!-- Outer circle -->
    <circle cx="170" cy="170" r="155" stroke-width="1"/>
    <!-- Latitude lines (5 ellipses at different y offsets) -->
    <ellipse cx="170" cy="80"  rx="100" ry="14" stroke-width="0.8"/>
    <ellipse cx="170" cy="120" rx="138" ry="20" stroke-width="0.8"/>
    <ellipse cx="170" cy="170" rx="155" ry="22" stroke-width="0.8"/>
    <ellipse cx="170" cy="220" rx="138" ry="20" stroke-width="0.8"/>
    <ellipse cx="170" cy="260" rx="100" ry="14" stroke-width="0.8"/>
    <!-- Longitude lines (6 tilted ellipses) -->
    <ellipse cx="170" cy="170" rx="28"  ry="155" stroke-width="0.8"/>
    <ellipse cx="170" cy="170" rx="28"  ry="155" stroke-width="0.8" transform="rotate(30 170 170)"/>
    <ellipse cx="170" cy="170" rx="28"  ry="155" stroke-width="0.8" transform="rotate(60 170 170)"/>
    <ellipse cx="170" cy="170" rx="28"  ry="155" stroke-width="0.8" transform="rotate(90 170 170)"/>
    <ellipse cx="170" cy="170" rx="28"  ry="155" stroke-width="0.8" transform="rotate(120 170 170)"/>
    <ellipse cx="170" cy="170" rx="28"  ry="155" stroke-width="0.8" transform="rotate(150 170 170)"/>
    <!-- Intersection dots -->
    <circle cx="170" cy="15"  r="2.5" fill="rgba(139,115,85,0.50)" stroke="none"/>
    <circle cx="170" cy="325" r="2.5" fill="rgba(139,115,85,0.50)" stroke="none"/>
    <circle cx="15"  cy="170" r="2.5" fill="rgba(139,115,85,0.50)" stroke="none"/>
    <circle cx="325" cy="170" r="2.5" fill="rgba(139,115,85,0.50)" stroke="none"/>
    <!-- Sample dots at lat/lon intersections -->
    <circle cx="268" cy="120" r="2" fill="rgba(139,115,85,0.40)" stroke="none"/>
    <circle cx="72"  cy="120" r="2" fill="rgba(139,115,85,0.40)" stroke="none"/>
    <circle cx="268" cy="220" r="2" fill="rgba(139,115,85,0.40)" stroke="none"/>
    <circle cx="72"  cy="220" r="2" fill="rgba(139,115,85,0.40)" stroke="none"/>
    <circle cx="298" cy="170" r="2" fill="rgba(139,115,85,0.40)" stroke="none"/>
    <circle cx="42"  cy="170" r="2" fill="rgba(139,115,85,0.40)" stroke="none"/>
  </g>
  <!-- Orange location dot — represents "where we are" -->
  <circle cx="220" cy="140" r="5" fill="#E55A2B" stroke="none"/>
  <circle cx="220" cy="140" r="9" fill="none" stroke="#E55A2B" stroke-width="1.5" opacity="0.50"/>
</svg>
```

**On dark slides**, replace every `stroke="rgba(139,115,85,0.35)"` with `stroke="rgba(229,90,43,0.45)"` and fill dots with `rgba(229,90,43,0.60)`. The orange location dot stays `#E55A2B`.

---

## The Pixel Bot SVG

A 16×20 pixel art robot face. Place on light slides only. Each `<rect>` = one pixel at 8px scale.

```html
<svg width="128" height="160" viewBox="0 0 16 20"
     xmlns="http://www.w3.org/2000/svg"
     style="position:absolute; bottom:120px; right:90px; image-rendering:pixelated; z-index:2;"
     shape-rendering="crispEdges">
  <!-- Antenna -->
  <rect x="7" y="0" width="2" height="2" fill="#E55A2B"/>
  <rect x="6" y="1" width="4" height="1" fill="#E55A2B"/>
  <!-- Head top -->
  <rect x="2" y="2" width="12" height="1" fill="#1A1410"/>
  <!-- Head rows -->
  <rect x="1" y="3" width="14" height="1" fill="#1A1410"/>
  <!-- Eye row 1 -->
  <rect x="1" y="4" width="3" height="1" fill="#1A1410"/>
  <rect x="4" y="4" width="3" height="1" fill="#FBF6EC"/>
  <rect x="7" y="4" width="2" height="1" fill="#1A1410"/>
  <rect x="9" y="4" width="3" height="1" fill="#FBF6EC"/>
  <rect x="12" y="4" width="3" height="1" fill="#1A1410"/>
  <!-- Eye row 2 — pupils -->
  <rect x="1" y="5" width="3" height="1" fill="#1A1410"/>
  <rect x="4" y="5" width="1" height="1" fill="#FBF6EC"/>
  <rect x="5" y="5" width="1" height="1" fill="#E55A2B"/>
  <rect x="6" y="5" width="1" height="1" fill="#FBF6EC"/>
  <rect x="7" y="5" width="2" height="1" fill="#1A1410"/>
  <rect x="9" y="5" width="1" height="1" fill="#FBF6EC"/>
  <rect x="10" y="5" width="1" height="1" fill="#E55A2B"/>
  <rect x="11" y="5" width="1" height="1" fill="#FBF6EC"/>
  <rect x="12" y="5" width="3" height="1" fill="#1A1410"/>
  <!-- Eye row 3 -->
  <rect x="1" y="6" width="3" height="1" fill="#1A1410"/>
  <rect x="4" y="6" width="3" height="1" fill="#FBF6EC"/>
  <rect x="7" y="6" width="2" height="1" fill="#1A1410"/>
  <rect x="9" y="6" width="3" height="1" fill="#FBF6EC"/>
  <rect x="12" y="6" width="3" height="1" fill="#1A1410"/>
  <!-- Nose / mid row -->
  <rect x="1" y="7" width="14" height="1" fill="#1A1410"/>
  <rect x="7" y="7" width="2" height="1" fill="#8B7355"/>
  <!-- Mouth area -->
  <rect x="1" y="8" width="2" height="1" fill="#1A1410"/>
  <rect x="3" y="8" width="10" height="1" fill="#FBF6EC"/>
  <rect x="13" y="8" width="2" height="1" fill="#1A1410"/>
  <!-- Smile corners -->
  <rect x="1" y="9" width="3" height="1" fill="#1A1410"/>
  <rect x="4" y="9" width="8" height="1" fill="#FBF6EC"/>
  <rect x="12" y="9" width="3" height="1" fill="#1A1410"/>
  <!-- Chin -->
  <rect x="1" y="10" width="14" height="1" fill="#1A1410"/>
  <rect x="2" y="11" width="12" height="1" fill="#1A1410"/>
  <!-- Neck -->
  <rect x="6" y="12" width="4" height="1" fill="#1A1410"/>
  <rect x="6" y="13" width="4" height="1" fill="#1A1410"/>
  <!-- Shoulders -->
  <rect x="2" y="14" width="12" height="1" fill="#1A1410"/>
  <!-- Body -->
  <rect x="1" y="15" width="14" height="1" fill="#1A1410"/>
  <rect x="1" y="16" width="14" height="1" fill="#1A1410"/>
  <!-- Chest accent -->
  <rect x="6" y="15" width="4" height="2" fill="#E55A2B"/>
  <!-- Base -->
  <rect x="2" y="17" width="12" height="1" fill="#1A1410"/>
  <rect x="3" y="18" width="4" height="1" fill="#1A1410"/>
  <rect x="9" y="18" width="4" height="1" fill="#1A1410"/>
</svg>
```

Scale up or down by changing `width`/`height` attrs. Keep `image-rendering:pixelated` and `shape-rendering:crispEdges`.

---

## Slide Types (6 total)

### 1. COVER-LIGHT

Light beige cover. Large Space Mono headline. Globe top-right. Page name bottom-left. Progress dot row top.

```html
<section class="slide lt4 active">
  <!-- Progress dots (example: slide 1 of 9) -->
  <div class="progress-track">
    <div class="p-dot"></div>
    <div class="p-seg"></div><div class="p-seg"></div><div class="p-seg"></div>
    <div class="p-seg"></div><div class="p-seg"></div><div class="p-seg"></div>
    <div class="p-seg"></div><div class="p-seg"></div>
  </div>

  <!-- Globe — top right -->
  <!-- [PASTE ASCII GLOBE SVG HERE — light version, style="position:absolute; top:60px; right:60px;"] -->

  <!-- Content -->
  <div class="pad4" style="padding-top: 220px;">
    <div class="label4">@thecontextwindow1</div>
    <div class="div4"></div>
    <h1 class="h-mono">Claude<br>now partners<br>with SpaceX</h1>
    <p class="sub4" style="max-width:580px; margin-top:28px;">
      What Anthropic's aerospace deal means for AI safety, orbital compute, and your workflow.
    </p>
    <!-- ASCII corner decoration -->
    <pre class="ascii-box" style="position:absolute; bottom:130px; right:90px; font-size:11px; color:rgba(139,115,85,0.30);">┌ ── ── ── ┐
│          │
└ ── ── ── ┘</pre>
  </div>

  <div class="handle-lt4">@thecontextwindow1</div>
</section>
```

**Cover rules:**
- Headline: 3 lines max at 80px. Break at natural phrase boundaries, not mid-word.
- Globe: always top-right, `top:60px; right:60px`
- No film grain, no dark overlay — clean paper
- ASCII corner box: bottom-right, light warm brown, very faint

---

### 2. STAT-BOX (light)

Light slide. Centered large stat in a bordered box. Used for singular impactful numbers.

```html
<section class="slide lt4">
  <!-- progress-track here -->

  <!-- Corner ASCII marks -->
  <pre class="corner-tl">╔═══╗
║ ◆ ║
╚═══╝</pre>
  <pre class="corner-br">╔═══╗
║ ◆ ║
╚═══╝</pre>

  <div class="pad4-mid">
    <div class="label4">The number</div>
    <div class="stat-box4">
      <span class="stat-label">orbital missions</span>
      <div class="h-stat">4,200</div>
      <p class="sub4" style="margin-top:0; font-size:18px;">Starlink satellites now running<br>AI-assisted anomaly detection</p>
      <span class="stat-source">— SpaceX / Reuters, March 2025</span>
    </div>
    <p class="body4" style="margin-top:36px; max-width:700px;">
      That's every satellite in the Starlink constellation. Claude's context window
      manages real-time telemetry for all 4,200 simultaneously.
    </p>
  </div>

  <div class="handle-lt4">@thecontextwindow1</div>
</section>
```

**Stat-box rules:**
- One number per slide. If you have three numbers, use 3 separate STAT-BOX slides.
- `h-stat` at 108px — verify it fits one line in Playwright
- ASCII corner marks: keep them small and faint (font-size 12px, opacity 0.30–0.40)

---

### 3. INSIGHT-DARK

Dark slide. Headline + body. Globe as small accent (200×200) top-right. For narrative insights without a singular number.

```html
<section class="slide dk4">
  <!-- progress-track here -->

  <!-- Small dark globe — top right -->
  <!-- [PASTE ASCII GLOBE SVG HERE — dark version, width="200" height="200",
       style="position:absolute; top:60px; right:60px;"] -->

  <div class="pad4" style="padding-top: 200px;">
    <div class="label4">Why it matters</div>
    <div class="div4"></div>
    <h2 class="h-mono-sm" style="max-width:760px;">
      Starlink's edge is<br>
      <span class="acc4">latency, not bandwidth</span>
    </h2>
    <p class="sub4" style="max-width:700px; margin-top:32px;">
      Ground-based AI inference adds 40–120ms of round-trip delay for orbital systems.
      Running Claude models on-orbit cuts that to under 3ms.
    </p>
    <p class="body4" style="max-width:700px; margin-top:20px; opacity:0.70;">
      Starlink's 550km orbital altitude means any ground-relayed AI decision
      adds a full light-travel round-trip before an action can execute.
    </p>
  </div>

  <div class="handle-lt4">@thecontextwindow1</div>
</section>
```

**Insight-dark rules:**
- Accent span (`<span class="acc4">`) on the most specific phrase — not the full headline
- Globe small (200px) or omit entirely if content is dense
- max-width on all text elements: 700–760px — never full 900px width

---

### 4. TERMINAL-FULL (light — always light background)

Light slide. Contained terminal window as primary visual, NOT full-bleed. The dark `#111111`
terminal must be on the warm beige `lt4` background — this is what creates visual contrast.
Never place the terminal on a `dk4` dark slide (no contrast).

Layout: label at top → terminal (explicit height, ~500px) → interpretation callout below → stats bar pinned at bottom.

```html
<section class="slide lt4">
  <!-- progress-track here -->

  <!-- LABEL -->
  <div style="position:absolute;top:130px;left:90px;z-index:2;">
    <div class="label4">In practice — live Claude output</div>
    <div class="div4" style="margin:12px 0 0;"></div>
  </div>

  <!-- TERMINAL: explicit height so it does NOT fill the full slide -->
  <div style="position:absolute;top:210px;left:90px;right:90px;height:500px;z-index:2;">
    <div class="term4" style="height:100%;">
      <div class="term4-chrome">
        <div class="t4-dot" style="background:#FF5F57;"></div>
        <div class="t4-dot" style="background:#FFBD2E;"></div>
        <div class="t4-dot" style="background:#28CA41;"></div>
        <span style="margin-left:16px;font-family:'Space Mono',monospace;font-size:12px;color:rgba(255,255,255,0.35);">system-name · claude-opus-4 · zsh</span>
      </div>
      <div class="term4-body" style="line-height:1.85;font-size:15px;">
        <div class="tc">$ [command]</div>
        <div class="to">[output line]</div>
        <!-- max 12 lines total -->
        <div class="to" style="opacity:0.4;margin-top:4px;">█</div>
      </div>
    </div>
  </div>

  <!-- INTERPRETATION CALLOUT — starts 40px below terminal bottom (210+500+40=750) -->
  <div style="position:absolute;top:750px;left:90px;right:90px;z-index:2;">
    <div style="border-left:2px solid #E55A2B;padding:22px 32px;background:rgba(229,90,43,0.04);">
      <div style="font-family:'Space Mono',monospace;font-size:12px;color:#8B7355;letter-spacing:0.08em;margin-bottom:12px;">WHAT JUST HAPPENED</div>
      <div style="font-family:'Outfit',sans-serif;font-weight:600;font-size:24px;line-height:1.45;color:#1A1410;">
        [Plain-language summary of what Claude just did in the terminal — 1–2 sentences, no jargon]
      </div>
    </div>
  </div>

  <!-- STATS BAR — 4-column, pinned bottom, dark text on light bg -->
  <div style="position:absolute;bottom:90px;left:90px;right:90px;z-index:2;">
    <div style="height:1px;background:rgba(26,20,16,0.10);margin-bottom:32px;"></div>
    <div style="display:flex;gap:0;align-items:flex-start;">
      <div style="flex:1;padding-right:36px;border-right:1px solid rgba(139,115,85,0.18);">
        <div class="label4" style="margin-bottom:6px;">[Stat label]</div>
        <div style="font-family:'Space Mono',monospace;font-weight:700;font-size:32px;color:#E55A2B;">[Value]</div>
      </div>
      <div style="flex:1;padding:0 36px;border-right:1px solid rgba(139,115,85,0.18);">
        <div class="label4" style="margin-bottom:6px;">[Stat label]</div>
        <div style="font-family:'Space Mono',monospace;font-weight:700;font-size:32px;color:#1A1410;">[Value]</div>
      </div>
      <div style="flex:1;padding:0 36px;border-right:1px solid rgba(139,115,85,0.18);">
        <div class="label4" style="margin-bottom:6px;">[Stat label]</div>
        <div style="font-family:'Space Mono',monospace;font-weight:700;font-size:32px;color:#1A1410;">[Value]</div>
      </div>
      <div style="flex:1;padding-left:36px;">
        <div class="label4" style="margin-bottom:6px;">[Stat label]</div>
        <div style="font-family:'Space Mono',monospace;font-weight:700;font-size:32px;color:#3A7D2B;">[Value]</div>
      </div>
    </div>
  </div>

  <div class="handle-lt4">@handle</div>
</section>
```

**Terminal rules:**
- **Always on light slide (`lt4`)** — never `dk4`. Dark terminal on dark slide = invisible
- **Explicit height on the wrapper div** (e.g. `height:500px`) — do not use `flex:1` to fill the whole slide
- Max 12 lines inside terminal body — at `font-size:15px; line-height:1.85`, 12 lines ≈ 333px
- Callout `top` = terminal `top` + terminal `height` + 40px gap (example: 210+500+40=750px)
- Color classes: `.tc` (white commands), `.to` (grey dimmed output), `.tg` (green success), `.ta` (amber warning), `.te` (orange error)
- Always show `$` prompt on command lines; end with a blinking cursor `<div class="to" style="opacity:0.4;">█</div>`

---

### 5. PIXEL-HERO (light)

Light slide. Pixel bot right side. Large quote or insight left. Use for impactful one-sentence summaries.

```html
<section class="slide lt4">
  <!-- progress-track here -->

  <!-- Pixel bot — bottom right -->
  <!-- [PASTE PIXEL BOT SVG HERE — style="position:absolute; bottom:100px; right:90px; width:160px; height:200px;"] -->

  <!-- ASCII globe — top right, small -->
  <!-- [PASTE ASCII GLOBE SVG, width="180" height="180", style="position:absolute; top:60px; right:60px;"] -->

  <div class="pad4" style="padding-top: 240px;">
    <pre class="ascii-box" style="font-size:15px; color:rgba(229,90,43,0.60); margin-bottom:24px;">╔══════════════════════════╗
║  T H E   T A K E A W A Y ║
╚══════════════════════════╝</pre>
    <p class="h-mono-sm" style="font-size:52px; max-width:700px; line-height:1.15;">
      "The satellite that<br>
      <span class="acc4">heals itself</span><br>
      is already orbiting."
    </p>
    <p class="body4" style="margin-top:32px; max-width:620px; opacity:0.70;">
      Autonomous AI maintenance on Starlink is not a roadmap item.
      It ran in production for the first time in Q1 2025.
    </p>
    <div class="div4" style="margin-top:36px;"></div>
  </div>

  <div class="handle-lt4">@thecontextwindow1</div>
</section>
```

**Pixel-hero rules:**
- Quote format: `"..."` with quotes included — they signal the pull-quote format
- Accent span: on the most concrete phrase (noun or verb phrase, not adjective)
- ASCII box label: ALL CAPS, max 28 chars so box doesn't overflow slide width
- Pixel bot always bottom-right — never overlapping text
- Globe always top-right — use `width="180"` (smaller than cover)

---

### 6. CTA-DARK

Dark slide. Large Space Mono CTA. ASCII border frame around the content area. No globe — clean focal close.

```html
<section class="slide dk4">
  <!-- NO progress-track on CTA — final slide -->

  <!-- ASCII frame — decorative border inset from edges -->
  <pre style="position:absolute; top:80px; left:60px; right:60px;
              font-family:'Space Mono',monospace; font-size:11px;
              color:rgba(229,90,43,0.25); line-height:1.3; pointer-events:none; z-index:1;">
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
  </pre>

  <div class="pad4-mid" style="z-index:2;">
    <div class="label4">Follow for AI that actually makes sense</div>
    <div class="div4"></div>
    <h2 class="h-mono-sm" style="font-size:64px; max-width:760px; line-height:1.1;">
      No hype.<br>
      No jargon.<br>
      <span class="acc4">Just signal.</span>
    </h2>
    <p class="sub4" style="margin-top:32px; max-width:640px;">
      Save this. Share it with someone who wants to understand AI without the noise.
    </p>
    <div style="margin-top:48px; font-family:'Space Mono',monospace; font-size:16px; color:rgba(240,235,224,0.50);">
      @thecontextwindow1 · The Context Window
    </div>
  </div>
</section>
```

**CTA rules:**
- ASCII border: use `<pre>` with box-drawing chars. Width must fit within `left:60px; right:60px`.
  The frame above is 69 chars wide — verify it fits at 11px Space Mono before shipping.
  If it wraps, reduce to 65 chars.
- Three-line headline structure: `No X. / No Y. / Just Z.` or `X is. / Y is. / Z.`
- CTA text: always includes "Save this." — carousels saved = extended reach
- No progress track on CTA slide
- No globe, no pixel bot — clean, focused close

---

## Progress Track — How to Build It

The ASCII/pixel template uses a dot-and-segment track instead of a solid bar.

For a carousel of N slides, slide K uses:

```
[dot][seg][seg]...[seg]  ← K-1 orange done segs | remaining grey segs
```

Actually: one dot at the current position, all segments to the left are orange (done), right are grey.

**Example: slide 3 of 8**
```html
<div class="progress-track">
  <div class="p-seg done"></div>
  <div class="p-seg done"></div>
  <div class="p-dot"></div>
  <div class="p-seg"></div>
  <div class="p-seg"></div>
  <div class="p-seg"></div>
  <div class="p-seg"></div>
  <div class="p-seg"></div>
</div>
```

Rule: (K-1) `done` segments → 1 dot → (N-K) grey segments. Dot always sits at position K.

---

## Playwright Audit Notes

No animations in this template — the globe is a static SVG (no CSS `animation:`). No freeze-frame tricks needed.

Check:
- Space Mono font rendered (not Courier fallback). Inspect pixel width of a known string.
- Pixel bot edges crisp (`image-rendering:pixelated` + `shape-rendering:crispEdges`)
- ASCII border `<pre>` not wrapping — if wrapping, font-size is too large for the viewport
- Terminal body not overflowing slide height — max 12 content lines
- All text within `max-width` constraints — no line breaks at unexpected positions

---

## Slide Sequence Recommendations

| Slide # | Type | Notes |
|---|---|---|
| 1 | COVER-LIGHT | Hook headline + globe |
| 2 | INSIGHT-DARK | Why this matters |
| 3 | STAT-BOX | Singular big number |
| 4 | INSIGHT-DARK | Second insight |
| 5 | TERMINAL-FULL | Show the actual output / interaction |
| 6 | STAT-BOX | Second number (if you have one) |
| 7 | PIXEL-HERO | Pull-quote or summary takeway |
| 8 | INSIGHT-DARK | Third insight / nuance |
| 9 | CTA-DARK | Save + follow |

Alternate light/dark: COVER-LIGHT → DARK → LIGHT → DARK → DARK (terminal) → LIGHT → LIGHT (pixel) → DARK → DARK (CTA).
Two consecutive darks (terminal + stat or insight) is fine. Two consecutive lights: only STAT-BOX + PIXEL-HERO is acceptable.
