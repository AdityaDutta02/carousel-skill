# Bold Blue Grotesk — Electric Statement Template

Forensically extracted from "Things We Should Normalize" carousel (designer-at-marketing-agency POV, 8 slides).
Use for: opinion lists, manifesto/normalize posts, "N things" statements, bold confessional content, hot takes, principle decks.

---

> **⚠️ Universal Rules override this spec.** See `SKILL.md` → "Universal Design Rules".
>
> - **Rule U1 interpretation**: The reference creator uses electric blue `#1A1AF0` for cover + CTA. This is a chromatic saturated accent (luminance ~0.07 but vivid hue), NOT a near-black-navy from the forbidden list (`#0F172A`, `#111827`, `#0E0E0E`, `#080808`, `#131110`, `#1B1B1B`). On a white feed, an electric-blue slide reads as a vivid statement, not a "black void". This satisfies U1's intent.
> - If strict-U1 compliance is required, swap to the **cream alt** variant for slide 1 + last (see "Cream alt" section below): grey `#E8E5DF` paper + electric-blue accent ribbon + dark ink headline.
> - **Rule U2**: The dot-grid texture on blue slides counts as one layer. Add at least one more — the spec includes a soft radial vignette stop (gradient on the blue) by default.
> - **Rule U3**: All eyebrow / footer / counter text is set at **28px** (well above 18px floor). Body subtitle: 56px. Headlines: 84–124px. No size in the spec drops below the 18px floor.

---

## When to use

| Use bold-blue-grotesk | Use something else |
|---|---|
| Topic is a "things we should normalize / stop / start" list | Topic is data-heavy with stats (use wolf-media-v1 / v2) |
| Voice is opinionated, personal, declarative | Voice is reportorial or step-by-step (use editorial-step) |
| Slides are short statements (1–4 lines each) — no body paragraphs | Slides need bold + muted body pairs (use wolf-media-v1) |
| Audience is creative / designer / marketer | Audience is technical / engineering (use ascii-pixel) |
| Want max-impact typographic shouting | Want quiet editorial breathing room (use figr-e-system) |

---

## Visual signature

| Element | Spec |
|---|---|
| **Backgrounds** | Two variants alternating: electric **blue** `#1A1AF0` + soft dot grid; **grey** `#D8D6D2` + heavy film grain |
| **Highlight** | Blue rectangle behind white headline text on grey slides — line-wrap-friendly box decoration |
| **Typography** | Inter weight 900 (Black). Tight tracking (`letter-spacing: -0.03em`). Inter Black is the closest free fallback to the reference's Helvetica Now Display Black. |
| **Hierarchy** | Eyebrow rail (top) + headline + optional subline + footer rail (bottom). Always anchored center vertical for body slides, top-anchored hero for cover. |
| **Eyebrow rail** | Two-piece title broken: left half at top-left, right half at top-right. Same on every slide. Acts as persistent topic header. |
| **Footer rail** | Two-piece context: left half + right half. Same on every slide. Acts as POV attribution. |
| **No counter / handle pill** | The eyebrow rail replaces the handle pill. The footer rail replaces the slide counter. No `01 / 08` numbering. |
| **Pixel cursor (cover only)** | Chunky 8-bit black-and-white mouse cursor SVG on the right side of the cover, near the headline. Optional — works without it but adds signature. |
| **Dot grid** | 4px white dots at `rgba(255,255,255,0.22)` opacity on blue, ~36px spacing. Used only on blue slides. |
| **Grain** | Heavy SVG `feTurbulence` noise at opacity 0.45 on grey slides. Visible coarse texture — like newsprint or screenprint. |

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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; font-family: 'Inter', -apple-system, 'Helvetica Neue', sans-serif; -webkit-font-smoothing: antialiased; }

    .slide { width: 1080px; height: 1350px; display: none; position: relative; overflow: hidden; }
    .slide.active { display: block; }

    /* ---------- BLUE VARIANT ---------- */
    .bg-blue {
      background:
        radial-gradient(ellipse 130% 90% at 50% 35%, rgba(80,80,255,0.18) 0%, transparent 60%),
        #1A1AF0;
    }
    /* Dot grid — small white dots, ~36px spacing */
    .bg-blue::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(circle, rgba(255,255,255,0.22) 1.4px, transparent 1.6px);
      background-size: 36px 36px;
      pointer-events: none;
      z-index: 1;
    }

    /* ---------- GREY GRAIN VARIANT ---------- */
    .bg-grey {
      background: #D8D6D2;
    }
    .bg-grey::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='linear' slope='0.55'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 320px 320px;
      mix-blend-mode: multiply;
      opacity: 0.45;
      pointer-events: none;
      z-index: 1;
    }

    /* ---------- EYEBROW RAIL — top-left + top-right ---------- */
    .rail-top {
      position: absolute;
      top: 76px; left: 90px; right: 90px;
      display: flex; justify-content: space-between;
      z-index: 4;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.005em;
    }
    .bg-blue .rail-top { color: #FFFFFF; }
    .bg-grey .rail-top { color: #0D0D0D; }

    /* ---------- FOOTER RAIL — bottom-left + bottom-right ---------- */
    .rail-bot {
      position: absolute;
      bottom: 76px; left: 90px; right: 90px;
      display: flex; justify-content: space-between;
      z-index: 4;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.005em;
    }
    .bg-blue .rail-bot { color: #FFFFFF; }
    .bg-grey .rail-bot { color: #0D0D0D; }

    /* ---------- CONTENT PAD ---------- */
    /* Body slides: vertically centered, manually offset via top padding to balance */
    .pad-center {
      position: absolute;
      inset: 0;
      padding: 0 90px;
      display: flex; flex-direction: column; justify-content: center;
      z-index: 3;
    }
    /* Cover: top-anchored to leave room for pixel cursor + subtitle */
    .pad-cover {
      position: absolute;
      inset: 0;
      padding: 240px 90px 0;
      z-index: 3;
    }

    /* ---------- TYPOGRAPHY ---------- */
    /* Hero cover headline — 4 lines, one word per line */
    .h-cover {
      font-weight: 900;
      font-size: 124px;
      line-height: 0.95;
      letter-spacing: -0.035em;
      color: #FFFFFF;
    }
    /* Standard body headline */
    .h-body {
      font-weight: 900;
      font-size: 92px;
      line-height: 0.98;
      letter-spacing: -0.030em;
    }
    .bg-blue .h-body { color: #FFFFFF; }
    .bg-grey .h-body { color: #0D0D0D; }

    /* Smaller body headline — use when headline is 4+ lines */
    .h-body-sm {
      font-weight: 900;
      font-size: 76px;
      line-height: 1.00;
      letter-spacing: -0.025em;
    }
    .bg-blue .h-body-sm { color: #FFFFFF; }
    .bg-grey .h-body-sm { color: #0D0D0D; }

    /* Subline — under the headline, regular weight */
    .sub {
      font-weight: 500;
      font-size: 60px;
      line-height: 1.06;
      letter-spacing: -0.020em;
      margin-top: 38px;
    }
    .bg-blue .sub { color: #FFFFFF; }
    .bg-grey .sub { color: #0D0D0D; }

    /* Cover subtitle — smaller, sits below 4-line hero */
    .sub-cover {
      font-weight: 500;
      font-size: 58px;
      line-height: 1.06;
      letter-spacing: -0.020em;
      color: #FFFFFF;
      margin-top: 56px;
    }

    /* ---------- HIGHLIGHT BLOCK — blue rectangle behind text (grey slides only) ---------- */
    /* Each line gets its own blue background. Uses inline span + box-decoration-break. */
    .highlight {
      display: inline;
      background: #1A1AF0;
      color: #FFFFFF;
      padding: 4px 18px 14px;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
      line-height: 1.08;
    }
    /* Wrapper that gives each highlighted line breathing room */
    .h-highlight {
      font-weight: 900;
      font-size: 84px;
      line-height: 1.40; /* extra leading because highlight padding eats space */
      letter-spacing: -0.030em;
    }

    /* ---------- PIXEL CURSOR (cover only) ---------- */
    .pixel-cursor {
      position: absolute;
      top: 360px;
      right: 80px;
      width: 280px;
      height: 320px;
      z-index: 3;
      image-rendering: pixelated;
      image-rendering: crisp-edges;
      shape-rendering: crispEdges;
    }
  </style>
</head>
<body>
  <!-- slides go here -->
</body>
</html>
```

---

## Slide templates

### COVER (always slide 1 — BLUE with pixel cursor)

```html
<section class="slide bg-blue active" id="slide-1">
  <div class="rail-top">
    <span>[LEFT EYEBROW — first half of carousel title, lowercase]</span>
    <span>[RIGHT EYEBROW — second half of carousel title, lowercase]</span>
  </div>

  <div class="pad-cover">
    <div class="h-cover">
      [WORD 1]<br>
      [WORD 2]<br>
      [WORD 3]<br>
      [WORD 4]
    </div>
    <div class="sub-cover">
      [Subtitle line 1]<br>
      [Subtitle line 2 — optional, can be one continuous phrase]
    </div>
  </div>

  <!-- Pixel cursor — 8-bit mouse arrow, ~18×20 pixel grid scaled up -->
  <svg class="pixel-cursor" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <!-- Each rect is 1 logical px = 1 grid cell. Black fill = arrow body, white = outline -->
    <g shape-rendering="crispEdges">
      <!-- White outline -->
      <rect x="1" y="1" width="2" height="1" fill="#FFFFFF"/>
      <rect x="1" y="2" width="3" height="1" fill="#FFFFFF"/>
      <rect x="1" y="3" width="4" height="1" fill="#FFFFFF"/>
      <rect x="1" y="4" width="5" height="1" fill="#FFFFFF"/>
      <rect x="1" y="5" width="6" height="1" fill="#FFFFFF"/>
      <rect x="1" y="6" width="7" height="1" fill="#FFFFFF"/>
      <rect x="1" y="7" width="8" height="1" fill="#FFFFFF"/>
      <rect x="1" y="8" width="9" height="1" fill="#FFFFFF"/>
      <rect x="1" y="9" width="10" height="1" fill="#FFFFFF"/>
      <rect x="1" y="10" width="11" height="1" fill="#FFFFFF"/>
      <rect x="1" y="11" width="12" height="1" fill="#FFFFFF"/>
      <rect x="1" y="12" width="13" height="1" fill="#FFFFFF"/>
      <rect x="1" y="13" width="6" height="1" fill="#FFFFFF"/>
      <rect x="9" y="13" width="3" height="1" fill="#FFFFFF"/>
      <rect x="1" y="14" width="5" height="1" fill="#FFFFFF"/>
      <rect x="10" y="14" width="3" height="1" fill="#FFFFFF"/>
      <rect x="2" y="15" width="3" height="1" fill="#FFFFFF"/>
      <rect x="10" y="15" width="3" height="1" fill="#FFFFFF"/>
      <rect x="11" y="16" width="3" height="1" fill="#FFFFFF"/>
      <rect x="11" y="17" width="3" height="1" fill="#FFFFFF"/>
      <rect x="12" y="18" width="2" height="1" fill="#FFFFFF"/>

      <!-- Black arrow body, inset from outline -->
      <rect x="2" y="2" width="1" height="1" fill="#0D0D0D"/>
      <rect x="2" y="3" width="2" height="1" fill="#0D0D0D"/>
      <rect x="2" y="4" width="3" height="1" fill="#0D0D0D"/>
      <rect x="2" y="5" width="4" height="1" fill="#0D0D0D"/>
      <rect x="2" y="6" width="5" height="1" fill="#0D0D0D"/>
      <rect x="2" y="7" width="6" height="1" fill="#0D0D0D"/>
      <rect x="2" y="8" width="7" height="1" fill="#0D0D0D"/>
      <rect x="2" y="9" width="8" height="1" fill="#0D0D0D"/>
      <rect x="2" y="10" width="9" height="1" fill="#0D0D0D"/>
      <rect x="2" y="11" width="10" height="1" fill="#0D0D0D"/>
      <rect x="2" y="12" width="4" height="1" fill="#0D0D0D"/>
      <rect x="8" y="12" width="4" height="1" fill="#0D0D0D"/>
      <rect x="2" y="13" width="4" height="1" fill="#0D0D0D"/>
      <rect x="9" y="13" width="2" height="1" fill="#0D0D0D"/>
      <rect x="3" y="14" width="2" height="1" fill="#0D0D0D"/>
      <rect x="10" y="14" width="2" height="1" fill="#0D0D0D"/>
      <rect x="3" y="15" width="1" height="1" fill="#0D0D0D"/>
      <rect x="10" y="15" width="2" height="1" fill="#0D0D0D"/>
      <rect x="11" y="16" width="2" height="1" fill="#0D0D0D"/>
      <rect x="11" y="17" width="2" height="1" fill="#0D0D0D"/>
    </g>
  </svg>

  <div class="rail-bot">
    <span>[LEFT FOOTER — POV first half, lowercase]</span>
    <span>[RIGHT FOOTER — POV second half, lowercase]</span>
  </div>
</section>
```

**Copy rules — cover:**
- `[WORD 1]` through `[WORD 4]`: one word per line. Title-case. Forms the carousel's master claim.
- Subtitle: 1–2 short lines describing the POV. Always title-case. Lowercase eyebrow rail above.
- Pixel cursor is the only decoration. Don't add icons, emojis, or photos.

---

### GREY-HIGHLIGHT (alt body slide — blue highlight block + dark subline)

```html
<section class="slide bg-grey" id="slide-N">
  <div class="rail-top">
    <span>[LEFT EYEBROW]</span>
    <span>[RIGHT EYEBROW]</span>
  </div>

  <div class="pad-center">
    <div class="h-highlight">
      <span class="highlight">[HEADLINE WORDS THAT BREAK ACROSS 2–4 LINES]</span>
    </div>
    <div class="sub" style="margin-top: 52px; color: #0D0D0D;">
      [Short subline — 4–8 words, title-case, often a punchline or principle]
    </div>
  </div>

  <div class="rail-bot">
    <span>[LEFT FOOTER]</span>
    <span>[RIGHT FOOTER]</span>
  </div>
</section>
```

**How the highlight breaks:**
- The blue background follows the text wraps. The `box-decoration-break: clone` rule makes each visual line get its own padded rectangle.
- Aim for 2–4 lines per highlight headline. Each line should be a coherent fragment (don't break mid-word).
- Manually insert `<br>` at the line break point you want — don't trust auto-wrap, it varies by font load.

**Copy rules — grey-highlight:**
- Headline: declarative or imperative. Title-case.
- Subline: punchline, principle, or proverb-style answer. Examples from reference: "Good work takes focus, not constant chat.", "Collaboration > ego", "Growth fuels better results".

---

### BLUE-PLAIN (alt body slide — solid white headline on blue)

```html
<section class="slide bg-blue" id="slide-N">
  <div class="rail-top">
    <span>[LEFT EYEBROW]</span>
    <span>[RIGHT EYEBROW]</span>
  </div>

  <div class="pad-center">
    <div class="h-body">
      [HEADLINE LINE 1]<br>
      [HEADLINE LINE 2]<br>
      [HEADLINE LINE 3]<br>
      [HEADLINE LINE 4 — optional]
    </div>
    <!-- Optional subline. Omit if headline is 4 lines. -->
    <div class="sub" style="margin-top: 42px;">
      [Optional subline — single line, regular weight]
    </div>
  </div>

  <div class="rail-bot">
    <span>[LEFT FOOTER]</span>
    <span>[RIGHT FOOTER]</span>
  </div>
</section>
```

**Use `.h-body-sm` (76px) instead of `.h-body` (92px) when:**
- Headline runs 4 lines and you also need a subline below
- Any single line exceeds ~22 characters at 92px

**Copy rules — blue-plain:**
- 1–4 line declarative statement.
- Sentence ends with period for finality, or no punctuation when the sentence is open-ended.
- Subline is optional. Use it only when the headline needs a clarifier — most blue-plain slides don't need one.

---

### CTA (always last — BLUE)

```html
<section class="slide bg-blue" id="slide-N">
  <div class="rail-top">
    <span>[LEFT EYEBROW]</span>
    <span>[RIGHT EYEBROW]</span>
  </div>

  <div class="pad-center">
    <div class="h-body" style="font-size: 124px; line-height: 1.00;">
      [CTA HOOK<br>
      LINE 1]<br>
      [CTA HOOK<br>
      LINE 2]
    </div>
    <div class="sub" style="margin-top: 52px;">
      [CTA invitation — e.g. "Let's chat<br>in the comments!"]
    </div>
  </div>

  <div class="rail-bot">
    <span>[LEFT FOOTER]</span>
    <span>[RIGHT FOOTER]</span>
  </div>
</section>
```

**Copy rules — CTA:**
- Hook is a question or invitation, never a flat statement. Reference uses: "Have / something / to add?"
- Subline directs the action: "Let's chat in the comments!" / "Save & share with a designer." / "Tell me which one hits hardest."
- Page name is NOT shown here — the footer rail already carries the POV attribution across every slide.

---

## Cream alt (strict U1 compliance)

If the channel requires Universal Rule U1 to be enforced literally (slide 1 + last must be near-white), replace blue with cream paper + thin blue accent ribbon:

```css
.bg-cream {
  background: #E8E5DF;
}
.bg-cream::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='linear' slope='0.40'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 320px 320px;
  mix-blend-mode: multiply;
  opacity: 0.30;
  pointer-events: none;
  z-index: 1;
}
.bg-cream .h-cover, .bg-cream .h-body, .bg-cream .sub, .bg-cream .sub-cover { color: #0D0D0D; }
.bg-cream .rail-top, .bg-cream .rail-bot { color: #0D0D0D; }

/* Thin accent ribbon — 6px blue strip at top or bottom */
.cream-ribbon {
  position: absolute;
  left: 0; right: 0;
  height: 6px;
  background: #1A1AF0;
  z-index: 2;
}
.cream-ribbon.top { top: 0; }
.cream-ribbon.bot { bottom: 0; }
```

On the cream cover and CTA, swap the pixel cursor color: outline becomes `#1A1AF0`, body stays `#0D0D0D`. Keeps the brand signal without a full blue field.

---

## Slide map for typical bold-blue-grotesk carousel (8 slides)

```
Slide 1 — COVER          : BLUE, 4-word hero stack + pixel cursor + subtitle
Slide 2 — GREY-HIGHLIGHT : blue highlight headline + dark subline
Slide 3 — BLUE-PLAIN     : white headline + optional white subline
Slide 4 — GREY-HIGHLIGHT : blue highlight headline + dark subline
Slide 5 — BLUE-PLAIN     : white headline (4 lines, no subline) — period ending
Slide 6 — GREY-HIGHLIGHT : blue highlight headline + dark subline
Slide 7 — BLUE-PLAIN     : white headline (3–4 lines) — final declarative
Slide 8 — CTA            : BLUE, question hook + comments invitation
```

Minimum: 6 slides. Maximum: 12. Never pad with weak statements.

**Alternation rule:**
Strict blue ↔ grey alternation between body slides. Two greys in a row is forbidden (the grain becomes monotonous). Two blues in a row is allowed only when one is a transition from cover or to CTA.

---

## Design rules

**Do:**
- Lowercase everything in the rail (top + bottom). Title-case everything in headlines and sublines.
- Break each carousel-title word onto its own line on the cover (4 words = 4 lines).
- Manually insert `<br>` for highlight headlines — auto-wrap will shift between font loads.
- Use periods at the end of declarative statements ("Mixing personal style ... fresh and authentic.")
- Keep the same rail text on every slide — it's the persistent header/footer that makes the deck feel cohesive.

**Don't:**
- No em dashes anywhere in body or headline copy.
- No gradient text — pure white on blue, pure dark on grey.
- No additional accent colors — blue `#1A1AF0` is the only accent. No red, no yellow, no secondary brand color.
- No icons or emojis except the cover pixel cursor.
- No mixed case on the rails (always lowercase) or in the headlines (always title-case).
- No `clamp()` for font sizes — fixed viewport at 1080px.
- No `text-transform: uppercase` (this template uses true title-case, not CSS uppercase).
- No slide counter or handle pill — the rails replace both.

---

## Audit checks (bold-blue-grotesk specific)

In addition to standard audit checks (Section 4), verify:

| Check | What to look for | Fix |
|---|---|---|
| Dot grid visible on blue | At 22% white opacity, dots should be just-barely-visible texture, not a wallpaper | If too strong, reduce opacity to 0.16. If invisible, bump dot radius to 1.6px. |
| Grain visible on grey | Should look like newsprint, not flat grey | If invisible, raise `.bg-grey::before` opacity to 0.55 |
| Highlight box-decoration-break works | Each visual line of `.highlight` gets its own blue box with vertical padding | If lines merge into one block: confirm `-webkit-box-decoration-break: clone` is present. Safari/WebKit needs the prefix. |
| Highlight padding consistent | Bottom padding visually larger than top (descenders need room) — `padding: 4px 18px 14px` is correct, not symmetric | Don't symmetrize the padding — the asymmetry is intentional |
| Pixel cursor crisp | No anti-aliasing blur on the pixel edges | Confirm `shape-rendering="crispEdges"` on the SVG `<g>` and `image-rendering: pixelated` on the wrapper |
| Rail text not clipped at edges | 90px side padding on rails matches headline padding | If rail wraps to new line, shorten the rail copy |
| No mid-word wrap in highlight headline | All `<br>` are at meaningful word boundaries | Manually adjust `<br>` insertion until each line is a clean phrase |
| Headline doesn't collide with rails | At least 80px gap between rail-top and headline, rail-bot and subline | Reduce headline font-size if collision occurs |
| Inter Black actually loaded | If fallback `Helvetica Neue` is rendering, weight 900 will still look strong but tracking will be off | Confirm font link is loaded (no console errors) and wait at least 2500ms before screenshotting |
| Pure blue + pure white contrast | Contrast ratio of `#FFFFFF` on `#1A1AF0` is 8.6:1 — passes WCAG AA Large | If it ever looks washy, you've likely added a translucent overlay; remove it |
