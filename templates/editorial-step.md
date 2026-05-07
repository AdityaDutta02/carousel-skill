# Editorial Step — Tutorial / How-To Template

Forensically extracted from mmaximus.soares "Build Instagram carousels with Claude × Paper" carousel.
Use for: step-by-step guides, tutorials, tool walkthroughs, process explainers, setup carousels.

---

## When to use

| Use editorial-step | Use wolf-media-v1 or v2 |
|---|---|
| Topic is a process or tutorial ("how to do X") | Topic is data analysis or a results report |
| Carousel has distinct numbered steps | Carousel is insight-driven with stats |
| User wants actionable, follow-along content | User wants educational or performance content |
| Steps benefit from showing UI/terminal/tool output | Data is shown as stat boxes or tables |

**Auto-select signals:** topic contains "how to", "step by step", "guide", "setup", "walkthrough", "tutorial", "workflow", "in N steps", "getting started", "here's how". Also trigger when topic describes a process the reader can repeat.

---

## Key differences from Wolf Media templates

| Element | Wolf Media v1/v2 | Editorial Step |
|---|---|---|
| Background | Dark charcoal / near-black | Warm cream `#F5F2ED` (light) + black `#0E0E0E` (cover only) |
| Fonts | Outfit only | Playfair Display (serif) + Outfit (sans) + Caveat (handwriting) + JetBrains Mono (terminal) |
| Typography | Bold / weighted hierarchy | Large serif headlines + lighter sans body |
| Accent | Gradient text / red | Orange `#E55A2B` (step labels, checkmarks, terminal success) |
| Structure | Hook/Stats/Insight/CTA | Cover → Step slides → CTA |
| Signature element | Film grain / map texture | Terminal window + sticky notes + checkbox lists |
| Handle placement | Top corner pill on every slide | CTA slide only |
| Progress bar | 2px hairline fill | None — step indicator replaces progress signaling |

---

## HTML skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1080">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Outfit:wght@400;500;600;700;800;900&family=Caveat:wght@400;600&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; font-family: 'Outfit', -apple-system, sans-serif; }

    .slide { width: 1080px; height: 1350px; display: none; position: relative; overflow: hidden; }
    .slide.active { display: block; }

    /* LIGHT — warm cream */
    .lt { background: #F5F2ED; }

    /* DARK — deep black (cover only) */
    .dk3 { background: #0E0E0E; }

    /* ACCENT orange */
    .acc3 { color: #E55A2B; }

    /* STEP INDICATOR — top left, every step slide */
    .step-label {
      position: absolute; top: 56px; left: 90px;
      display: flex; align-items: center; gap: 12px; z-index: 3;
    }
    .step-dash { width: 32px; height: 2px; background: #E55A2B; flex-shrink: 0; }
    .step-text { font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 700; color: #E55A2B; letter-spacing: 0.02em; }

    /* TYPOGRAPHY */
    /* Serif — Playfair Display */
    .h-serif    { font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 72px; line-height: 1.00; color: #1A1A1A; }
    .h-serif-sm { font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 58px; line-height: 1.05; color: #1A1A1A; }
    .h-serif-lg { font-family: 'Playfair Display', Georgia, serif; font-weight: 700; font-size: 86px; line-height: 0.96; color: #1A1A1A; }
    .h-serif-wt { font-family: 'Playfair Display', Georgia, serif; font-weight: 900; font-size: 82px; line-height: 0.96; color: #FFFFFF; }
    /* Serif centered (TEXT-CENTER slides) */
    .body-serif-center {
      font-family: 'Playfair Display', Georgia, serif; font-weight: 400;
      font-size: 52px; line-height: 1.32; color: #1A1A1A;
      text-align: center;
    }

    /* CHECKBOX LIST */
    .check-list { display: flex; flex-direction: column; gap: 16px; margin-top: 32px; }
    .check-item { display: flex; align-items: flex-start; gap: 16px; }
    .check-box {
      width: 24px; height: 24px; border: 2px solid #C0B8B0; border-radius: 4px;
      flex-shrink: 0; margin-top: 2px;
    }
    .check-text { font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 600; color: #1A1A1A; line-height: 1.4; }

    /* STICKY NOTE */
    .sticky {
      background: #F9F5D0; padding: 18px 22px;
      box-shadow: 2px 3px 10px rgba(0,0,0,0.12);
      max-width: 240px; transform: rotate(2deg);
    }
    .sticky-text { font-family: 'Caveat', cursive; font-size: 24px; font-weight: 400; color: #3D2E14; line-height: 1.45; }

    /* VERTICAL HAIRLINE — decorative on TEXT-CENTER slides */
    .v-line { width: 1px; background: #C8C4BC; }

    /* CONTENT PAD — step slides */
    .pad3 { position: absolute; left: 90px; right: 90px; top: 110px; z-index: 2; }

    /* DIVIDER TAG — "Reference" / "Recreated in X" labels */
    .tag {
      display: inline-flex; align-items: center;
      background: #1A1A1A; color: #FFFFFF;
      font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 600;
      padding: 7px 16px; border-radius: 100px; letter-spacing: 0.02em;
    }
    .tag-outline {
      display: inline-flex; align-items: center;
      border: 1.5px solid #1A1A1A; color: #1A1A1A;
      font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 600;
      padding: 7px 16px; border-radius: 100px;
    }
    .tag-orange { background: #E55A2B; }

    /* STAT BADGE — used on DARK COVER */
    .badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.18);
      border-radius: 100px; padding: 12px 24px;
      font-family: 'Outfit', sans-serif;
    }
    .badge-icon { font-size: 16px; }
    .badge-num  { font-size: 24px; font-weight: 700; color: #FFFFFF; }
    .badge-lbl  { font-size: 18px; font-weight: 400; color: rgba(255,255,255,0.60); }
  </style>
</head>
<body>
  <!-- slides go here -->
</body>
</html>
```

---

## Component: Terminal window

The terminal component is placed in the lower portion of STEP+TERMINAL slides. It simulates a real macOS terminal. The component is HTML-only — no images.

```html
<!-- TERMINAL WINDOW — paste inside slide, adjust top value to position -->
<div style="position:absolute; left:0; right:0; top:580px; bottom:0; z-index:2; overflow:hidden;">
  <!-- Window chrome -->
  <div style="background:#2D2D2D; height:44px; display:flex; align-items:center; padding:0 18px; gap:8px; flex-shrink:0;">
    <div style="width:13px; height:13px; border-radius:50%; background:#FF5F57;"></div>
    <div style="width:13px; height:13px; border-radius:50%; background:#FFBD2E;"></div>
    <div style="width:13px; height:13px; border-radius:50%; background:#28CA41;"></div>
    <div style="margin-left:12px; font-family:'JetBrains Mono',monospace; font-size:13px; color:rgba(255,255,255,0.40);">[session-name] · ~ · zsh</div>
  </div>
  <!-- Terminal content area -->
  <div style="background:#1C1C1C; padding:28px 40px; height:calc(100% - 44px); overflow:hidden;">
    <div style="font-family:'JetBrains Mono',monospace; font-size:15px; line-height:1.90; display:flex; flex-direction:column; gap:0;">

      <!-- Command line pattern: $ [command] -->
      <div><span style="color:#E8E8E8;">$ [command here]</span></div>
      <!-- Output (dimmed) -->
      <div style="color:#6B6B6B;">[output text — dimmed]</div>
      <div style="color:#6B6B6B;">[output line 2]</div>
      <!-- Blank line between sections -->
      <div>&nbsp;</div>
      <!-- Next command -->
      <div><span style="color:#E8E8E8;">$ [next command]</span></div>
      <div style="color:#6B6B6B;">[output]</div>
      <!-- Success line — orange -->
      <div><span style="color:#E55A2B;">✓ [success message · detail]</span></div>
      <!-- Blank line -->
      <div>&nbsp;</div>
      <!-- Verification command -->
      <div><span style="color:#E8E8E8;">$ [verify command]</span></div>
      <div style="color:#6B6B6B;">[version or result output]</div>

    </div>
  </div>
</div>
```

**Terminal color rules:**
- `$` prompt + command: `#E8E8E8` (bright white)
- Output / dimmed info: `#6B6B6B` (mid grey)
- Success `✓` + highlighted value: `#E55A2B` (orange — same as template accent)
- Error (if needed): `#FF5F57` (red dot color)
- Tool / package name (bold reference): use `<strong style="color:#E8E8E8;">` inline

**Terminal sizing:**
- Starts at `top: 580px` by default (leaves room for step label + headline + 3 checkboxes)
- For 4+ checkboxes: move start to `top: 640px`
- For slides with only 1–2 checkboxes: move start to `top: 520px`
- Always extends to `bottom: 0` — fills remaining height

---

## Component: Claude Code UI panel

Use when showing an AI tool interface, dashboard, settings panel, or any structured UI output. Lighter than the terminal — white card with monospace content.

```html
<!-- UI PANEL — paste inside slide, adjust top value -->
<div style="position:absolute; left:60px; right:60px; top:580px; bottom:60px; z-index:2; overflow:hidden; background:#FFFFFF; border-radius:14px; box-shadow:0 2px 24px rgba(0,0,0,0.09); padding:28px 36px;">
  <!-- Panel headline / context label -->
  <div style="font-family:'JetBrains Mono',monospace; font-size:14px; font-weight:700; color:#3B82F6; margin-bottom:4px;">[Panel title — e.g. "Manage MCP servers"]</div>
  <div style="font-family:'JetBrains Mono',monospace; font-size:13px; color:#9CA3AF; margin-bottom:24px;">[Subtitle — e.g. "3 servers"]</div>

  <!-- Section: User-level items -->
  <div style="font-family:'JetBrains Mono',monospace; font-size:14px; font-weight:700; color:#1A1A1A; margin-bottom:6px;">[Section label] <span style="font-weight:400; color:#9CA3AF;">([path or context])</span></div>
  <div style="font-family:'JetBrains Mono',monospace; font-size:14px; color:#6B7280; margin-bottom:18px;">
    <span style="color:#3B82F6;">› [item-name]</span>
    · <span style="color:#22C55E;">✓ connected</span>
    · [N] tools
  </div>

  <!-- Section: Built-in items -->
  <div style="font-family:'JetBrains Mono',monospace; font-size:14px; font-weight:700; color:#1A1A1A; margin-bottom:6px;">[Section label] <span style="font-weight:400; color:#9CA3AF;">(always available)</span></div>
  <div style="display:flex; flex-direction:column; gap:8px;">
    <div style="font-family:'JetBrains Mono',monospace; font-size:14px; color:#6B7280;">
      [item-name] · <span style="color:#D97706;">○ disabled</span>
    </div>
    <!-- Highlighted item — yellow outline box -->
    <div style="border:1.5px solid #F59E0B; padding:6px 10px; display:inline-block; max-width:fit-content;">
      <span style="font-family:'JetBrains Mono',monospace; font-size:14px; color:#1A1A1A;">[highlighted-item-name]</span>
    </div>
    <div style="font-family:'JetBrains Mono',monospace; font-size:14px; color:#6B7280; margin-left:0;">
      · <span style="color:#22C55E;">✓ connected</span> · [N] tools
    </div>
  </div>
</div>
```

---

## Slide templates

### DARK-COVER (always first — black, serif white headline)

```html
<section class="slide dk3 active" id="slide-1">
  <!-- Top metadata row -->
  <div style="position:absolute; top:70px; left:90px; right:90px; display:flex; gap:48px; z-index:2;">
    <div>
      <div style="font-family:'Outfit',sans-serif; font-size:13px; font-weight:400; color:rgba(255,255,255,0.38); text-transform:uppercase; letter-spacing:0.10em; margin-bottom:4px;">Time</div>
      <div style="font-family:'Outfit',sans-serif; font-size:22px; font-weight:700; color:#FFFFFF;">[e.g. 5 min read]</div>
    </div>
    <div>
      <div style="font-family:'Outfit',sans-serif; font-size:13px; font-weight:400; color:rgba(255,255,255,0.38); text-transform:uppercase; letter-spacing:0.10em; margin-bottom:4px;">Format</div>
      <div style="font-family:'Outfit',sans-serif; font-size:22px; font-weight:700; color:#FFFFFF;">[e.g. Step-by-step]</div>
    </div>
  </div>

  <!-- Main headline — large serif white -->
  <div style="position:absolute; top:200px; left:90px; right:90px; z-index:2;">
    <div class="h-serif-wt">[Main Topic<br>Headline Here]</div>
    <!-- Pill CTA -->
    <div style="margin-top:36px; display:inline-flex; align-items:center; border:1.5px solid rgba(255,255,255,0.50); border-radius:100px; padding:13px 30px;">
      <span style="font-family:'Outfit',sans-serif; font-size:20px; font-weight:500; color:#FFFFFF;">[Call to action — e.g. Free step-by-step guide]</span>
    </div>
  </div>

  <!-- Large ALL CAPS hook phrase + icon -->
  <div style="position:absolute; top:620px; left:90px; right:90px; z-index:2;">
    <div style="font-family:'Outfit',sans-serif; font-weight:900; font-size:136px; line-height:0.88; letter-spacing:-0.04em; color:#FFFFFF; text-transform:uppercase;">[KEY<br>PHRASE]</div>
  </div>

  <!-- Stat badges row — bottom -->
  <div style="position:absolute; bottom:90px; left:90px; right:90px; display:flex; gap:16px; z-index:2; flex-wrap:wrap;">
    <div class="badge">
      <span class="badge-icon">🔖</span>
      <span class="badge-num">[N,NNN]</span>
      <span class="badge-lbl">saves</span>
    </div>
    <div class="badge">
      <span class="badge-icon">↗</span>
      <span class="badge-num">[N,NNN]</span>
      <span class="badge-lbl">shares</span>
    </div>
    <div class="badge">
      <span class="badge-icon">♥</span>
      <span class="badge-num">[N,NNN]</span>
      <span class="badge-lbl">likes</span>
    </div>
  </div>
</section>
```

**Copy rules:**
- Metadata row: use real time estimate + carousel format (e.g. "7 min read", "Step-by-step")
- Headline: 2–3 lines, specific topic — no vague hooks
- Large ALL CAPS phrase: the boldest 1–2 word emotional hook from the topic ("AI WINS", "GOING VIRAL", "THE SHIFT")
- Stats: use real engagement data if available; omit the badges row if not

---

### TEXT-CENTER (context or pause slides — cream, centered serif)

```html
<section class="slide lt" id="slide-N">
  <!-- Top hairline -->
  <div class="v-line" style="position:absolute; top:60px; left:50%; height:110px; z-index:2;"></div>

  <!-- Centered body copy -->
  <div style="position:absolute; top:220px; left:110px; right:110px; z-index:2; text-align:center;">
    <div class="body-serif-center">[First paragraph — 1 to 2 sentences max. Specific, not motivational.]</div>
    <div style="height:40px;"></div>
    <div class="body-serif-center">[Second paragraph — contrasting or completing thought. Also 1 to 2 sentences.]</div>
  </div>

  <!-- Bottom hairline -->
  <div class="v-line" style="position:absolute; bottom:60px; left:50%; height:110px; z-index:2;"></div>
</section>
```

**When to use:** Between major sections, before a reveal, or as a "context-setting" slide after the cover. Not every carousel needs TEXT-CENTER slides — use only when a thought deserves its own isolated moment.

**Copy rules:**
- No step label — this is a pause/context slide, not a step
- Serif text only — no checkbox list, no sticky, no terminal
- Two short paragraphs or one longer one: total word count under 50 words
- No em dashes, no significance inflation

---

### STEP+TERMINAL (step slide with dark terminal window)

```html
<section class="slide lt" id="slide-N">
  <!-- Step indicator -->
  <div class="step-label">
    <div class="step-dash"></div>
    <span class="step-text">Step [N]</span>
    <!-- Optional: add secondary label after · -->
    <!-- <span class="step-text" style="color:#6B6B6B;">· Secret mission</span> -->
  </div>

  <!-- Sticky note — positioned top right -->
  <div class="sticky" style="position:absolute; top:52px; right:90px; z-index:3;">
    <div class="sticky-text">[Short annotation — 5–8 words, handwriting style]</div>
  </div>

  <!-- Main content -->
  <div class="pad3">
    <div class="h-serif">[Step headline — what this step does]</div>
    <div class="check-list">
      <div class="check-item">
        <div class="check-box"></div>
        <span class="check-text">[Checkbox item 1]</span>
      </div>
      <div class="check-item">
        <div class="check-box"></div>
        <span class="check-text">[Checkbox item 2]</span>
      </div>
      <div class="check-item">
        <div class="check-box"></div>
        <span class="check-text">[Checkbox item 3]</span>
      </div>
      <!-- 2–4 checkboxes max before terminal gets compressed -->
    </div>
  </div>

  <!-- Terminal window — fills from top:580px to bottom:0 -->
  <div style="position:absolute; left:0; right:0; top:580px; bottom:0; z-index:2; overflow:hidden;">
    <div style="background:#2D2D2D; height:44px; display:flex; align-items:center; padding:0 18px; gap:8px;">
      <div style="width:13px; height:13px; border-radius:50%; background:#FF5F57;"></div>
      <div style="width:13px; height:13px; border-radius:50%; background:#FFBD2E;"></div>
      <div style="width:13px; height:13px; border-radius:50%; background:#28CA41;"></div>
      <div style="margin-left:12px; font-family:'JetBrains Mono',monospace; font-size:13px; color:rgba(255,255,255,0.40);">[session] · ~ · zsh</div>
    </div>
    <div style="background:#1C1C1C; padding:28px 40px; height:calc(100% - 44px); overflow:hidden;">
      <div style="font-family:'JetBrains Mono',monospace; font-size:15px; line-height:1.90; display:flex; flex-direction:column;">
        <div><span style="color:#E8E8E8;">$ [command 1]</span></div>
        <div style="color:#6B6B6B;">[output line]</div>
        <div style="color:#6B6B6B;">[output line]</div>
        <div>&nbsp;</div>
        <div><span style="color:#E8E8E8;">$ [command 2]</span></div>
        <div style="color:#6B6B6B;">[output]</div>
        <div><span style="color:#E55A2B;">✓ [success message · detail]</span></div>
        <div>&nbsp;</div>
        <div><span style="color:#E8E8E8;">$ [verify command]</span></div>
        <div style="color:#6B6B6B;">[verification output]</div>
      </div>
    </div>
  </div>
</section>
```

**Copy rules:**
- Step label: "Step N" — sequential across the carousel
- Headline: the single action of this step — verb phrase ("Install Claude Code", "Connect the MCP")
- Checkboxes: 2–4 sub-tasks within this step — specific, actionable, scannable
- Sticky note: the "why this matters" in casual language — 5–8 words
- Terminal content: topic-accurate commands — match exactly what the reader would type

---

### STEP+UI-PANEL (step slide with light UI panel — for tool/interface screenshots)

```html
<section class="slide lt" id="slide-N">
  <div class="step-label">
    <div class="step-dash"></div>
    <span class="step-text">Step [N]</span>
  </div>

  <!-- Sticky note — bottom right this time for variety -->
  <div class="sticky" style="position:absolute; bottom:80px; right:90px; z-index:3; transform:rotate(-1.5deg);">
    <div class="sticky-text">[annotation]</div>
  </div>

  <div class="pad3">
    <div class="h-serif">[Step headline]</div>
    <div class="check-list">
      <div class="check-item"><div class="check-box"></div><span class="check-text">[item 1]</span></div>
      <div class="check-item"><div class="check-box"></div><span class="check-text">[item 2]</span></div>
      <div class="check-item"><div class="check-box"></div><span class="check-text">[item 3]</span></div>
    </div>
  </div>

  <!-- UI Panel — white card, light style -->
  <div style="position:absolute; left:60px; right:60px; top:580px; bottom:80px; z-index:2; overflow:hidden; background:#FFFFFF; border-radius:14px; box-shadow:0 2px 24px rgba(0,0,0,0.09); padding:28px 36px;">
    <div style="font-family:'JetBrains Mono',monospace; font-size:15px; font-weight:700; color:#3B82F6; margin-bottom:4px;">[Panel title]</div>
    <div style="font-family:'JetBrains Mono',monospace; font-size:14px; color:#9CA3AF; margin-bottom:24px;">[Subtitle]</div>

    <div style="font-family:'JetBrains Mono',monospace; font-size:14px; font-weight:700; color:#1A1A1A; margin-bottom:6px;">[Section A] <span style="font-weight:400; color:#9CA3AF;">([context])</span></div>
    <div style="font-family:'JetBrains Mono',monospace; font-size:14px; color:#6B7280; margin-bottom:20px;">
      <span style="color:#3B82F6;">› [item]</span> · <span style="color:#22C55E;">✓ connected</span> · [N] tools
    </div>

    <div style="font-family:'JetBrains Mono',monospace; font-size:14px; font-weight:700; color:#1A1A1A; margin-bottom:6px;">[Section B] <span style="font-weight:400; color:#9CA3AF;">(always available)</span></div>
    <div style="display:flex; flex-direction:column; gap:10px;">
      <div style="font-family:'JetBrains Mono',monospace; font-size:14px; color:#6B7280;">[item] · <span style="color:#D97706;">○ disabled</span></div>
      <div style="display:inline-block; border:1.5px solid #F59E0B; padding:6px 10px; width:fit-content;">
        <span style="font-family:'JetBrains Mono',monospace; font-size:14px; color:#1A1A1A;">[highlighted item]</span>
      </div>
      <div style="font-family:'JetBrains Mono',monospace; font-size:14px; color:#6B7280;">· <span style="color:#22C55E;">✓ connected</span> · [N] tools</div>
    </div>
  </div>
</section>
```

---

### STEP+VISUAL (step slide with screenshot frame or preview panel)

Use when showing results, before/after, preview of output, or a multi-card display.

```html
<section class="slide lt" id="slide-N">
  <div class="step-label">
    <div class="step-dash"></div>
    <span class="step-text">Step [N]</span>
  </div>

  <!-- Sticky note — bottom left -->
  <div class="sticky" style="position:absolute; bottom:90px; left:90px; z-index:3; transform:rotate(-2deg);">
    <div class="sticky-text">[annotation]</div>
  </div>

  <div class="pad3">
    <div class="h-serif">[Step headline]</div>
    <div class="check-list">
      <div class="check-item"><div class="check-box"></div><span class="check-text">[item 1]</span></div>
      <div class="check-item"><div class="check-box"></div><span class="check-text">[item 2]</span></div>
      <div class="check-item"><div class="check-box"></div><span class="check-text">[item 3]</span></div>
    </div>
  </div>

  <!-- Screenshot frame — shows tool/result preview -->
  <div style="position:absolute; left:90px; right:90px; top:580px; bottom:100px; z-index:2; background:#FFFFFF; border-radius:12px; box-shadow:0 2px 20px rgba(0,0,0,0.10); overflow:hidden; border:1px solid #E8E4DE;">

    <!-- Optional label tag above the screenshot area -->
    <div style="padding:14px 20px; background:#F5F2ED; border-bottom:1px solid #E8E4DE; display:flex; gap:12px; align-items:center;">
      <span class="tag">[Reference label]</span>
      <!-- Or two tags: before + after -->
      <!-- <span class="tag-outline">[Before]</span> -->
      <!-- <span class="tag tag-orange">[After]</span> -->
    </div>

    <!-- Content area — use for text-based result or caption of what's shown -->
    <div style="padding:28px 28px; background:#F9F9F9; height:100%;">
      <div style="font-family:'Outfit',sans-serif; font-size:18px; color:#6B6B6B; line-height:1.6;">
        [Describe what the reader sees here — or put actual content/result output.<br>
        This can be a multi-line summary of a tool output, a before/after state,<br>
        or a preview of slide content generated by the step.]
      </div>
    </div>

  </div>
</section>
```

---

### CTA (final slide — cream, centered, with handle)

```html
<section class="slide lt" id="slide-N">
  <!-- Top hairline -->
  <div class="v-line" style="position:absolute; top:60px; left:50%; height:90px; z-index:2;"></div>

  <!-- Handle pill -->
  <div style="position:absolute; top:50px; right:90px; display:inline-flex; align-items:center; border:1px solid rgba(0,0,0,0.18); border-radius:100px; padding:10px 20px; font-family:'Outfit',sans-serif; font-size:14px; font-weight:500; color:rgba(0,0,0,0.55); z-index:3;">@handle</div>

  <!-- CTA content — centered -->
  <div style="position:absolute; top:220px; left:110px; right:110px; z-index:2; text-align:center;">
    <div style="font-family:'Outfit',sans-serif; font-size:13px; font-weight:700; letter-spacing:0.14em; color:rgba(0,0,0,0.35); text-transform:uppercase; margin-bottom:40px;">Follow for more</div>
    <div style="font-family:'Playfair Display',serif; font-weight:900; font-size:108px; line-height:0.90; letter-spacing:-0.03em; color:#1A1A1A; text-align:left;">[Page<br>Name]</div>
    <div style="margin-top:36px; font-family:'Outfit',sans-serif; font-size:26px; font-weight:400; color:#6B6B6B; line-height:1.55; text-align:left; max-width:760px;">
      [Human tagline — mirrors what the carousel just taught. Specific and connected. No filler.]
    </div>
  </div>

  <!-- Bottom hairline -->
  <div class="v-line" style="position:absolute; bottom:60px; left:50%; height:90px; z-index:2;"></div>
</section>
```

---

## Slide map for typical editorial-step carousel (8–10 slides)

```
Slide 1   — DARK-COVER   : hook + topic + key phrase + stats if available
Slide 2   — TEXT-CENTER  : framing context — why this topic matters right now
Slide 3   — STEP+TERMINAL: step 1 — install / setup / first command
Slide 4   — STEP+UI-PANEL: step 2 — configure / connect
Slide 5   — STEP+TERMINAL: step 3 — first action / test it
Slide 6   — STEP+VISUAL  : step 4 — see results / before and after
Slide 7   — STEP+TERMINAL: step 5 (optional) — advanced action or secret mission
Slide 8   — TEXT-CENTER  : outcome statement — what they now have
Slide 9   — CTA          : page name + tagline + handle
```

Not every carousel needs all slide types. Only include STEP+UI-PANEL when showing an actual tool UI. Only include TEXT-CENTER slides when the content calls for a pause. Minimum 6 slides.

---

## Design rules

**Do:**
- Keep step numbers sequential — "Step 1" on slide 3 (first step slide), continuing from there
- Sticky notes: vary position and rotation angle across slides — top-right / bottom-left / bottom-right
- Terminal content: write real, accurate commands for the topic — no placeholder outputs
- Checkbox items: parallel structure, same grammatical form across all items on a slide
- CTA tagline: reference the carousel's most valuable insight, not a generic "follow me" line

**Don't:**
- Don't mix terminal dark and UI panel on the same slide — pick one component per slide
- Don't use gradient text (`.gd` / `.gl`) — not part of this aesthetic
- Don't use Wolf Media's dark background for step slides — only `#F5F2ED` cream for step slides
- Don't skip the step indicator — every step slide must have "Step N"
- No em dashes, no significance inflation, no vague endings
- No more than 4 checkbox items per step slide — more compresses the terminal

**Font fallbacks:**
If Playfair Display fails to load, content will fall back to Georgia (acceptable). Audit screenshots will reveal fallback — increase `waitForTimeout` to 6000 and retry.

---

## T3-specific audit checks

| Check | What to look for |
|---|---|
| Serif loaded | Headlines should have serifs (curved tails on letters). If they look sans-serif, font failed. Increase wait time. |
| Caveat loaded | Sticky note text should look handwritten/casual. If it looks like Outfit, Caveat failed. |
| Terminal not clipped | Last line of terminal content should have 15–20px breathing room before the slide bottom. If clipped, reduce `font-size` to 14px or remove one output line. |
| Checkboxes aligned | Box top should align with first line of text — `margin-top: 2px` on `.check-box` handles this. |
| Sticky note overlaps headline | If the sticky overlaps the headline text, move sticky lower or reduce headline font by 6px. |
| Vertical hairlines visible | On TEXT-CENTER slides — thin `#C8C4BC` hairlines should be just visible. If missing, check `left: 50%` positioning. |
| CTA page name fits | Page name at 108px should fit 2 lines. If it wraps to 3 lines, reduce to 90px. |
