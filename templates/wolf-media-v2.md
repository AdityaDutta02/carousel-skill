# Wolf Media v2 — Performance Report Template

Forensically extracted from @wolfmedia.in "₹1205 Crores closed in March 2026" carousel.
Use for: results reports, metrics breakdowns, performance recaps, before/after analyses.

---

## When to use

| Use v2 | Use v1 |
|---|---|
| Data is a results/performance story ("here's what we achieved") | Data is an educational insight ("here's what this means") |
| Multiple named entities need comparison (cities, platforms, products) | Single concept with supporting stats |
| User provides or references real photo assets | Pure text/data, no photos |
| Topic is a performance recap, metrics breakdown, or case study | Topic is an explainer, analysis, or trend breakdown |

---

## Key differences from Wolf Media v1

| Element | v1 (default) | v2 (this template) |
|---|---|---|
| Background dark | Warm charcoal `#131110` | Near-black `#080808` |
| Texture | Film grain SVG | City road-map network (inline SVG) |
| Typography case | Title / sentence case | ALL CAPS throughout |
| Gradient text | Yes (.gd / .gl) | No — pure white / grey contrast only |
| Cover | Dark hook with sub-pill | White + full-bleed B&W photo |
| Accent | Topic-adaptive color | Red `#E02020` (fixed) |
| Body pattern | Bold + muted regular | Bold label : muted normal, ALL CAPS |
| Progress bar | 2px fill hairline | Same — but lower opacity |
| Handle | Border pill | Same styling |

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
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; font-family: 'Outfit', -apple-system, 'Helvetica Neue', sans-serif; }

    .slide { width: 1080px; height: 1350px; display: none; position: relative; overflow: hidden; }
    .slide.active { display: block; }

    /* DARK — near-black */
    .dk2 { background: #080808; }

    /* WHITE */
    .wt2 { background: #FFFFFF; }

    /* MAP TEXTURE — inline SVG placed inside each dark slide as first child */
    /* See map SVG template below. Shared across all dk2 slides. */
    .map-bg {
      position: absolute; inset: 0;
      width: 1080px; height: 1350px;
      opacity: 0.045; pointer-events: none; z-index: 1;
    }

    /* HANDLE PILL */
    .handle2 {
      position: absolute; top: 55px; right: 90px;
      display: inline-flex; align-items: center;
      border: 1px solid rgba(255,255,255,0.26);
      border-radius: 100px; padding: 10px 20px;
      font-size: 14px; font-weight: 500;
      color: rgba(255,255,255,0.65); letter-spacing: 0.01em; z-index: 3;
    }
    .handle2-wt { border-color: rgba(0,0,0,0.18); color: rgba(0,0,0,0.55); }

    /* SECTION LABEL — small all-caps above headline */
    .lbl2 {
      display: block; font-size: 11px; font-weight: 700;
      letter-spacing: 0.14em; color: rgba(255,255,255,0.32);
      text-transform: uppercase; margin-bottom: 18px;
    }

    /* TYPOGRAPHY — ALL CAPS, fixed px */
    .h1-t2    { font-weight: 900; font-size: 92px;  line-height: 0.92; letter-spacing: -0.03em; color: #FFFFFF; text-transform: uppercase; }
    .h1-sm-t2 { font-weight: 900; font-size: 72px;  line-height: 0.94; letter-spacing: -0.02em; color: #FFFFFF; text-transform: uppercase; }
    .h1-wt-t2 { font-weight: 900; font-size: 72px;  line-height: 0.94; letter-spacing: -0.02em; color: #111111; text-transform: uppercase; }
    .hero-num  { font-weight: 900; font-size: 108px; line-height: 0.88; letter-spacing: -0.04em; color: #111111; text-transform: uppercase; }

    /* BODY TEXT — two-tier, ALL CAPS */
    .bb2  { font-size: 22px; font-weight: 700; line-height: 1.50; color: rgba(255,255,255,0.92); text-transform: uppercase; }
    .br2  { font-size: 20px; font-weight: 400; line-height: 1.65; color: rgba(255,255,255,0.50); text-transform: uppercase; }
    .wbb2 { font-size: 22px; font-weight: 700; line-height: 1.50; color: #111111; text-transform: uppercase; }
    .wbr2 { font-size: 20px; font-weight: 400; line-height: 1.65; color: #888888; text-transform: uppercase; }

    /* RED ACCENT */
    .red { color: #E02020; }
    .red-box {
      display: inline-flex; align-items: center;
      background: #E02020; color: #FFFFFF;
      padding: 5px 20px; font-weight: 900; font-size: inherit;
      text-transform: uppercase;
    }

    /* CONTENT PAD — anchored from top */
    .pad2    { position: absolute; inset: 0; padding: 90px; padding-top: 380px; z-index: 2; }
    .pad2-hi { position: absolute; inset: 0; padding: 90px; padding-top: 200px; z-index: 2; }

    /* PHOTO GRID */
    .pgrid { display: grid; grid-template-columns: 1fr 1fr; margin-top: 36px; }
    .pgrid-cell {
      position: relative; padding: 28px 24px; min-height: 210px;
      border: 1px solid rgba(255,255,255,0.10); overflow: hidden;
    }
    .pgrid-cell-wide { grid-column: 1 / -1; }
    .pgrid-photo {
      position: absolute; inset: 0; width: 100%; height: 100%;
      object-fit: cover; filter: grayscale(100%) brightness(0.38);
    }
    .pgrid-fallback {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, #161616 0%, #242424 100%);
    }
    .pgrid-fallback-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; }
    .pgrid-content { position: relative; z-index: 2; }
    .pgrid-name  { font-size: 26px; font-weight: 900; color: #FFFFFF; text-transform: uppercase; letter-spacing: -0.01em; line-height: 1.1; }
    .pgrid-label { font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.42); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 10px; }
    .pgrid-val   { font-size: 20px; font-weight: 700; color: #FFFFFF; line-height: 1.2; margin-top: 2px; }

    /* TABLE */
    .t2-table { width: 100%; border-collapse: collapse; margin-top: 36px; }
    .t2-table th {
      font-size: 12px; font-weight: 700; letter-spacing: 0.10em;
      color: #AAAAAA; text-transform: uppercase;
      padding: 14px 0; border-bottom: 2px solid #DCDCDC; text-align: left;
    }
    .t2-table th:last-child { text-align: right; }
    .t2-table td {
      font-size: 20px; font-weight: 500; color: #111111;
      text-transform: uppercase; padding: 18px 0;
      border-bottom: 1px solid #EBEBEB;
    }
    .t2-table td:last-child { text-align: right; font-weight: 700; }
    .t2-table tr:last-child td { border-bottom: none; }

    /* PLATFORM SECTION */
    .plat-section { padding: 30px 0; border-top: 1px solid rgba(255,255,255,0.09); }
    .plat-section:first-child { border-top: none; padding-top: 0; }
    .plat-header { display: flex; align-items: baseline; gap: 14px; flex-wrap: wrap; }
    .plat-name  { font-size: 22px; font-weight: 700; color: rgba(255,255,255,0.92); text-transform: uppercase; }
    .plat-label { font-size: 18px; font-weight: 400; color: rgba(255,255,255,0.46); text-transform: uppercase; }
    .plat-stat  { font-size: 52px; font-weight: 900; color: #FFFFFF; letter-spacing: -0.03em; line-height: 1; margin-top: 8px; display: block; text-transform: uppercase; }
    .plat-bullets { margin-top: 10px; list-style: none; display: flex; flex-direction: column; gap: 4px; }
    .plat-bullets li { font-size: 18px; font-weight: 400; color: rgba(255,255,255,0.50); text-transform: uppercase; line-height: 1.55; padding-left: 18px; position: relative; }
    .plat-bullets li::before { content: '•'; position: absolute; left: 0; color: rgba(255,255,255,0.28); }

    /* PROGRESS BAR */
    .prog-track2 { position: absolute; bottom: 60px; left: 90px; right: 90px; height: 2px; z-index: 3; }
    .dk2 .prog-track2 { background: rgba(255,255,255,0.10); }
    .wt2 .prog-track2 { background: rgba(0,0,0,0.08); }
    .prog-fill2 { height: 100%; }
    .dk2 .prog-fill2 { background: rgba(255,255,255,0.55); }
    .wt2 .prog-fill2 { background: rgba(0,0,0,0.42); }
  </style>
</head>
<body>
  <!-- slides go here -->
</body>
</html>
```

---

## Map texture SVG

Copy this as the first child of every `.dk2` slide. The network simulates a city road map at 4.5% opacity.

```html
<svg class="map-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" preserveAspectRatio="none">
  <g stroke="white" fill="none" stroke-width="1">
    <polyline points="0,174 158,166 338,179 516,164 698,176 878,163 1080,171"/>
    <polyline points="0,416 198,406 378,420 558,405 718,418 898,404 1080,413"/>
    <polyline points="0,668 168,658 348,671 528,656 708,669 888,654 1080,663"/>
    <polyline points="0,930 188,920 368,933 548,918 728,931 908,916 1080,925"/>
    <polyline points="0,1176 178,1166 358,1179 538,1164 718,1177 898,1162 1080,1171"/>
    <polyline points="202,0 194,186 204,372 194,558 204,744 194,930 204,1116 202,1350"/>
    <polyline points="446,0 438,202 448,404 438,606 448,808 438,1010 448,1212 446,1350"/>
    <polyline points="686,0 678,182 688,364 678,546 688,728 678,910 688,1092 686,1350"/>
    <polyline points="900,0 892,162 902,324 892,486 902,648 892,810 902,972 900,1350"/>
    <line x1="0"    y1="294"  x2="202" y2="174"/>
    <line x1="202"  y1="174"  x2="446" y2="416"/>
    <line x1="446"  y1="416"  x2="686" y2="174"/>
    <line x1="686"  y1="174"  x2="900" y2="416"/>
    <line x1="900"  y1="416"  x2="1080" y2="295"/>
    <line x1="0"    y1="542"  x2="202" y2="416"/>
    <line x1="202"  y1="416"  x2="446" y2="668"/>
    <line x1="446"  y1="668"  x2="686" y2="416"/>
    <line x1="686"  y1="416"  x2="900" y2="668"/>
    <line x1="900"  y1="668"  x2="1080" y2="542"/>
    <line x1="0"    y1="800"  x2="202" y2="668"/>
    <line x1="202"  y1="668"  x2="446" y2="930"/>
    <line x1="446"  y1="930"  x2="686" y2="668"/>
    <line x1="686"  y1="668"  x2="900" y2="930"/>
    <line x1="900"  y1="930"  x2="1080" y2="800"/>
    <line x1="0"    y1="1054" x2="202" y2="930"/>
    <line x1="202"  y1="930"  x2="446" y2="1176"/>
    <line x1="446"  y1="1176" x2="686" y2="930"/>
    <line x1="686"  y1="930"  x2="900" y2="1176"/>
    <line x1="900"  y1="1176" x2="1080" y2="1054"/>
    <line x1="102"  y1="0"    x2="202" y2="174"/>
    <line x1="324"  y1="0"    x2="202" y2="174"/>
    <line x1="562"  y1="0"    x2="446" y2="174"/>
    <line x1="800"  y1="0"    x2="686" y2="174"/>
    <line x1="980"  y1="0"    x2="900" y2="174"/>
    <line x1="102"  y1="1350" x2="202" y2="1176"/>
    <line x1="324"  y1="1350" x2="446" y2="1176"/>
    <line x1="562"  y1="1350" x2="446" y2="1176"/>
    <line x1="800"  y1="1350" x2="686" y2="1176"/>
    <line x1="980"  y1="1350" x2="900" y2="1176"/>
  </g>
</svg>
```

---

## Slide templates

### HOOK-PHOTO (always first — white, full-bleed photo)

```html
<section class="slide wt2 active" id="slide-1">
  <div class="handle2 handle2-wt">@handle</div>

  <!-- Top text — pure white zone, top 44% -->
  <div style="position:absolute; top:90px; left:90px; right:90px; z-index:3;">
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
      <span style="font-size:16px; font-weight:700; color:#111111; text-transform:uppercase; letter-spacing:0.10em;">WE</span>
      <span style="font-size:16px; font-weight:700; color:#111111; text-transform:uppercase; letter-spacing:0.10em;">CLOSED</span>
    </div>
    <div class="hero-num">[Hero metric — e.g. ₹1,100+ CRORES]</div>
    <div style="display:flex; align-items:center; gap:14px; margin-top:14px; flex-wrap:wrap;">
      <span style="font-size:32px; font-weight:900; color:#111111; text-transform:uppercase; letter-spacing:-0.01em;">[CONTEXT] IN</span>
      <span class="red-box" style="font-size:32px;">[PERIOD] ›</span>
    </div>
    <div style="margin-top:16px; font-size:13px; font-weight:700; color:#555555; text-transform:uppercase; letter-spacing:0.14em;">HERE'S HOW TO COPY US -></div>
  </div>

  <!-- Photo zone — fills bottom 58%, B&W desaturated -->
  <!-- Use real photo URL when available; remove fallback div when using img -->
  <div style="position:absolute; bottom:0; left:0; right:0; height:780px; z-index:1; overflow:hidden;">
    <!-- OPTION A — real photo: -->
    <!-- <img src="[PHOTO_URL]" alt="" style="width:100%; height:100%; object-fit:cover; filter:grayscale(100%) brightness(0.55);"> -->

    <!-- OPTION B — gradient fallback (use when no photo): -->
    <div style="width:100%; height:100%; background:linear-gradient(180deg, #1c1c1c 0%, #343434 60%, #1c1c1c 100%);"></div>

    <!-- Stats strip — overlays photo at bottom -->
    <div style="position:absolute; bottom:80px; left:90px; right:90px; z-index:2; display:flex; align-items:center; gap:36px;">
      <span style="font-size:16px; font-weight:700; color:rgba(255,255,255,0.88); text-transform:uppercase; letter-spacing:0.08em;">[STAT 1 VALUE] <span style="color:rgba(255,255,255,0.46); font-weight:400;">[STAT 1 LABEL]</span></span>
      <span style="color:rgba(255,255,255,0.25);">|</span>
      <span style="font-size:16px; font-weight:700; color:rgba(255,255,255,0.88); text-transform:uppercase; letter-spacing:0.08em;">[STAT 2 VALUE] <span style="color:rgba(255,255,255,0.46); font-weight:400;">[STAT 2 LABEL]</span></span>
    </div>
  </div>

  <div class="prog-track2" style="background:rgba(0,0,0,0.08);"><div class="prog-fill2" style="width:[N]%; background:rgba(0,0,0,0.40);"></div></div>
</section>
```

**Copy rules:**
- `[Hero metric]`: The single biggest number from the report. No sentence — just the number + unit.
- `[CONTEXT]`: 2–3 word phrase: "REAL ESTATE SALES", "AD REVENUE", "IMPRESSIONS"
- `[PERIOD]`: Month or quarter: "MARCH", "Q1 2026"
- `[STAT 1]` / `[STAT 2]`: Supporting proof stats — e.g. "12X AVERAGE ROAS", "152 CLIENT CAMPAIGNS"

---

### TEXT-BODY (dark with map — for qualitative breakdown slides)

```html
<section class="slide dk2" id="slide-N">
  <svg class="map-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" preserveAspectRatio="none">
    <!-- paste map SVG lines from above -->
  </svg>
  <div class="handle2">@handle</div>
  <div class="pad2">
    <span class="lbl2">[SECTION LABEL — e.g. WHAT WORKED FOR]</span>
    <div class="h1-t2">[HEADLINE LINE 1]<br>[HEADLINE LINE 2]</div>
    <div style="margin-top:44px; display:flex; flex-direction:column; gap:22px;">
      <div>
        <div class="bb2">[BOLD CATEGORY]:</div>
        <div class="br2" style="margin-top:6px;">[Explanation — 1 to 2 lines max]</div>
      </div>
      <div>
        <div class="bb2">[BOLD STATEMENT OR SUBCATEGORY]</div>
      </div>
      <div>
        <div class="bb2">[NEXT CATEGORY]:</div>
        <div class="br2" style="margin-top:6px;">[Explanation]</div>
      </div>
      <!-- Add more sections as needed; max 5 bold/normal pairs per slide -->
    </div>
  </div>
  <div class="prog-track2"><div class="prog-fill2" style="width:[N]%;"></div></div>
</section>
```

**Copy rules:**
- ALL CAPS is handled by CSS `text-transform: uppercase` — write copy in normal case for readability, CSS uppercases it
- Bold lines (`.bb2`): category name or key claim — 6 words max
- Normal lines (`.br2`): one supporting detail — 10–15 words max, no em dashes

---

### PHOTO GRID (dark with map — for entity/city/product comparisons)

```html
<section class="slide dk2" id="slide-N">
  <svg class="map-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" preserveAspectRatio="none">
    <!-- paste map SVG lines -->
  </svg>
  <div class="pad2-hi">
    <div class="h1-t2">[HEADLINE]<br>[SUBLINE]</div>
    <div class="pgrid">

      <!-- Cell with photo (use when real image available) -->
      <div class="pgrid-cell">
        <img class="pgrid-photo" src="[IMAGE_URL]" alt="">
        <div class="pgrid-content">
          <div class="pgrid-name">[ENTITY NAME]</div>
          <div class="pgrid-label">[METRIC 1 LABEL]</div>
          <div class="pgrid-val">[METRIC 1 VALUE]</div>
          <div class="pgrid-label">[METRIC 2 LABEL]</div>
          <div class="pgrid-val">[METRIC 2 VALUE]</div>
        </div>
      </div>

      <!-- Cell with fallback (use when no photo — uses entity accent color) -->
      <div class="pgrid-cell">
        <div class="pgrid-fallback">
          <div class="pgrid-fallback-accent" style="background:[ENTITY_COLOR];"></div>
        </div>
        <div class="pgrid-content">
          <div class="pgrid-name">[ENTITY NAME]</div>
          <div class="pgrid-label">[METRIC 1 LABEL]</div>
          <div class="pgrid-val">[METRIC 1 VALUE]</div>
          <div class="pgrid-label">[METRIC 2 LABEL]</div>
          <div class="pgrid-val">[METRIC 2 VALUE]</div>
        </div>
      </div>

      <!-- Span full width for a single remaining item -->
      <div class="pgrid-cell pgrid-cell-wide">
        <div class="pgrid-fallback">
          <div class="pgrid-fallback-accent" style="background:[ENTITY_COLOR];"></div>
        </div>
        <div class="pgrid-content">
          <div class="pgrid-name">[ENTITY NAME]</div>
          <div class="pgrid-label">[METRIC 1 LABEL]</div>
          <div class="pgrid-val">[METRIC 1 VALUE]</div>
          <div class="pgrid-label">[METRIC 2 LABEL]</div>
          <div class="pgrid-val">[METRIC 2 VALUE]</div>
        </div>
      </div>

    </div>
  </div>
  <div class="prog-track2"><div class="prog-fill2" style="width:[N]%;"></div></div>
</section>
```

**Grid rules:**
- Max 5 cells: 2+2 (four cells, two rows) or 2+2+1 (five cells, last row spanning full width)
- If even number of entities: 2×N grid, no spanning cell
- If odd: last cell gets `.pgrid-cell-wide`
- Minimum 2 metric rows per cell (label + value pairs)
- Entity accent colors for fallback: use brand hex if known, else `#2A2A2A`

---

### TABLE (white — for structured data comparison)

```html
<section class="slide wt2" id="slide-N">
  <div class="pad2-hi">

    <!-- Split header: headline left, hero number right -->
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0;">
      <div class="h1-wt-t2" style="max-width:440px;">[HEADLINE]<br>[LINE 2]<br>[LINE 3]</div>
      <div style="text-align:right; padding-top:6px;">
        <div style="font-size:11px; font-weight:700; letter-spacing:0.12em; color:#AAAAAA; text-transform:uppercase; margin-bottom:8px;">[TOTAL LABEL]</div>
        <div style="font-size:80px; font-weight:900; color:#E02020; letter-spacing:-0.04em; line-height:0.92; text-transform:uppercase;">[TOTAL VALUE]</div>
      </div>
    </div>

    <!-- Data table -->
    <table class="t2-table">
      <thead>
        <tr>
          <th>[COL 1 HEADER]</th>
          <th>[COL 2 HEADER]</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>[ROW LABEL]</td><td>[VALUE]</td></tr>
        <tr><td>[ROW LABEL]</td><td>[VALUE]</td></tr>
        <tr><td>[ROW LABEL]</td><td>[VALUE]</td></tr>
        <tr><td>[ROW LABEL]</td><td>[VALUE]</td></tr>
        <tr><td>[ROW LABEL]</td><td>[VALUE]</td></tr>
        <!-- Max 6 rows — more than 6 compresses too much at 1350px height -->
      </tbody>
    </table>

  </div>
  <div class="prog-track2"><div class="prog-fill2" style="width:[N]%;"></div></div>
</section>
```

**Copy rules:**
- `[TOTAL VALUE]`: Red, massive — the most important single number on this slide
- Table rows: name + value — no descriptions, no body copy. Pure data.
- Last row `td` border-bottom is removed by CSS (`:last-child` rule)
- Max 6 rows. If more data: split into two TABLE slides.

---

### PLATFORM (dark with map — for platform/tool/channel breakdown)

```html
<section class="slide dk2" id="slide-N">
  <svg class="map-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" preserveAspectRatio="none">
    <!-- paste map SVG lines -->
  </svg>
  <div class="handle2">@handle</div>
  <div class="pad2">
    <span class="lbl2">[SECTION LABEL — e.g. PLATFORM WISE REPORT]</span>
    <div class="h1-sm-t2">[HEADLINE]</div>

    <div style="margin-top:44px; display:flex; flex-direction:column;">

      <!-- Platform section 1 -->
      <div class="plat-section">
        <div class="plat-header">
          <!-- Optional: inline SVG logo or emoji icon -->
          <span class="plat-name">[PLATFORM / TOOL NAME]</span>
          <span class="plat-label">GAVE [OUTCOME TYPE]</span>
        </div>
        <span class="plat-stat">[MAIN METRIC]</span>
        <ul class="plat-bullets">
          <li>[BREAKDOWN ITEM — e.g. VIDEO ADS — ₹587 CR]</li>
          <li>[BREAKDOWN ITEM]</li>
          <li>[BREAKDOWN ITEM]</li>
        </ul>
      </div>

      <!-- Platform section 2 -->
      <div class="plat-section">
        <div class="plat-header">
          <span class="plat-name">[PLATFORM / TOOL NAME]</span>
          <span class="plat-label">GAVE [OUTCOME TYPE]</span>
        </div>
        <span class="plat-stat">[MAIN METRIC]</span>
        <ul class="plat-bullets">
          <li>[BREAKDOWN ITEM]</li>
          <li>[BREAKDOWN ITEM]</li>
        </ul>
      </div>

    </div>
  </div>
  <div class="prog-track2"><div class="prog-fill2" style="width:[N]%;"></div></div>
</section>
```

**Copy rules:**
- Max 2 platforms per slide — 3 compresses body text too much
- `[MAIN METRIC]`: the single biggest number from this platform — large, immediate
- Bullet items: `[FORMAT] — [VALUE]` format. No sentences, no adjectives.

---

### LIST (dark with map — for ranked items, top N, best performers)

```html
<section class="slide dk2" id="slide-N">
  <svg class="map-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" preserveAspectRatio="none">
    <!-- paste map SVG lines -->
  </svg>
  <div class="handle2">@handle</div>
  <div class="pad2">
    <div class="h1-t2">[HEADLINE]<br>[SUBLINE]</div>

    <!-- Section with platform icon label -->
    <div style="margin-top:44px; display:flex; flex-direction:column; gap:36px;">

      <div>
        <div class="bb2" style="margin-bottom:14px;">[CATEGORY LABEL — e.g. META]</div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; align-items:baseline; gap:16px;">
            <span style="font-size:13px; font-weight:700; color:rgba(255,255,255,0.28); min-width:24px; text-align:right;">1.</span>
            <div>
              <span class="bb2">[ITEM BOLD LABEL]</span>
              <span class="br2"> — [ITEM DETAIL]</span>
            </div>
          </div>
          <div style="display:flex; align-items:baseline; gap:16px;">
            <span style="font-size:13px; font-weight:700; color:rgba(255,255,255,0.28); min-width:24px; text-align:right;">2.</span>
            <div>
              <span class="bb2">[ITEM BOLD LABEL]</span>
              <span class="br2"> — [ITEM DETAIL]</span>
            </div>
          </div>
          <div style="display:flex; align-items:baseline; gap:16px;">
            <span style="font-size:13px; font-weight:700; color:rgba(255,255,255,0.28); min-width:24px; text-align:right;">3.</span>
            <div>
              <span class="bb2">[ITEM BOLD LABEL]</span>
              <span class="br2"> — [ITEM DETAIL]</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="bb2" style="margin-bottom:14px;">[CATEGORY LABEL — e.g. GOOGLE]</div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; align-items:baseline; gap:16px;">
            <span style="font-size:13px; font-weight:700; color:rgba(255,255,255,0.28); min-width:24px; text-align:right;">1.</span>
            <div>
              <span class="bb2">[ITEM]</span>
              <span class="br2"> — [DETAIL]</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="prog-track2"><div class="prog-fill2" style="width:[N]%;"></div></div>
</section>
```

---

### CTA (dark — always last)

```html
<section class="slide dk2" id="slide-N">
  <svg class="map-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" preserveAspectRatio="none">
    <!-- paste map SVG lines -->
  </svg>
  <div class="handle2">@handle</div>
  <div style="position:absolute; inset:0; padding:90px; padding-top:400px; z-index:2;">
    <div style="font-size:12px; font-weight:700; letter-spacing:0.16em; color:rgba(255,255,255,0.36); text-transform:uppercase; margin-bottom:40px;">FOLLOW FOR MORE</div>
    <div style="font-weight:900; font-size:108px; line-height:0.90; letter-spacing:-0.04em; color:#FFFFFF; text-transform:uppercase;">
      [PAGE<br>NAME]
    </div>
    <div style="margin-top:44px; font-size:26px; font-weight:400; color:rgba(255,255,255,0.60); text-transform:uppercase; line-height:1.55; max-width:760px; letter-spacing:0.01em;">
      [One-line result statement that mirrors the cover stat — e.g. "₹1,205 crores closed. Here's what we'd do differently."]
    </div>
  </div>
  <div class="prog-track2"><div class="prog-fill2" style="width:100%;"></div></div>
</section>
```

---

## Slide map for typical v2 carousel (9 slides)

```
Slide 1  — HOOK-PHOTO   : cover with hero metric + B&W photo
Slide 2  — TEXT-BODY    : qualitative breakdown (context + categories)
Slide 3  — PHOTO GRID   : entity/city/channel comparison grid
Slide 4  — TABLE        : structured data table with red hero total
Slide 5  — PLATFORM     : 2 platforms, big stats + bullet breakdowns
Slide 6  — LIST         : ranked items per category
Slide 7  — TEXT-BODY    : additional qualitative insight or "what changed"
Slide 8  — TEXT-BODY    : "differently this time" or recommendations
Slide 9  — CTA          : page name + tagline echoing cover
```

Minimum: 7 slides. Maximum: 12. Never pad with weak data.

---

## Design rules

**Do:**
- ALL CAPS is enforced by `text-transform: uppercase` in CSS — write template placeholders in normal case
- Photo grid: always put the most interesting entity first (top-left)
- Table: red total should be the highest number on the slide
- Platform stat: make the number as large as it can be without clipping
- CTA tagline: reference the cover stat directly — closes the loop

**Don't:**
- No gradient text (`.gd` / `.gl`) — v2 uses only pure white/grey contrast
- No sub-pills — v2 doesn't use pill-style subtitles on dark slides
- No warm charcoal — background must be near-black `#080808`
- No more than 2 platform sections per PLATFORM slide
- No more than 6 table rows per TABLE slide
- No em dashes in body copy
- No `clamp()` for font sizes

**Alternation rule:**
v2 alternates dark/white less strictly than v1. Dark slides dominate (70%). White appears only for TABLE slides. Multiple dark slides in a row is fine.

---

## T2-specific audit checks

In addition to standard audit checks, verify:

| Check | What to look for |
|---|---|
| Map texture visible | SVG lines faintly visible at 4-5% opacity on dark slides. If invisible, increase `opacity` to `0.055`. |
| Photo grid cells equal height | Use `min-height: 210px` on all cells — rows should look uniform. |
| Table not overflowing | 6+ rows = table extends past bottom. Cut to 6 max or split into two TABLE slides. |
| Hero number fits one line | HOOK-PHOTO hero number must not wrap. If it does, reduce `font-size` by 8px increments. |
| Red accent consistent | Only `#E02020` used for accent — no orange, no other reds. |
| ALL CAPS rendered | Body copy fully uppercased. If any mixed case appears, confirm `text-transform: uppercase` on `.bb2`, `.br2`, `.wbb2`, `.wbr2` classes. |
| Platform stat not clipped | `.plat-stat` at 52px — if clipping, reduce to 40px. |
