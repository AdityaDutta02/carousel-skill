---
name: instagram-carousel
description: >
  Creates a fully designed, research-backed Instagram carousel from a topic.
  Use this skill whenever the user mentions "carousel", "instagram carousel",
  "make me a carousel", "carousel for [topic]", or provides a topic + page handle.
  The skill researches the topic, structures content into 7–12 slides, designs
  a pixel-perfect 1080×1350 HTML file using the Wolf Media design system, audits
  every slide with Playwright, exports individual PNGs, and generates a hybrid
  SEO/AEO Instagram caption with tiered hashtags. Also handles change iterations:
  user reviews PNGs, requests edits, skill re-exports only affected slides.
  Invoke this skill even if the user only says "make a carousel about X" or
  "carousel on [topic] for my page".
---

# Instagram Carousel Skill

Produces research-backed, visually premium Instagram carousels as individual
PNG slides (1080×1350) plus a hybrid SEO/AEO caption. Never start designing
before research is complete. Never ship without Playwright audit passing.

**Pipeline order:** Inputs → Context check → Research → carousel-writer-sms content → Slide architecture → Wolf Media HTML → Playwright audit → PNG export → Caption

The default design system is Wolf Media (see Section 3). If the user provides
reference images from a different creator, run Section 2.5 first to extract
a new design system before touching Section 3.

---

## 0. INPUTS — Collect Before Starting

Always collect these before proceeding. If missing, ask in one message:

| Input | Example | Required |
|---|---|---|
| **Topic** | "seed funding for startups" | Yes |
| **Page handle** | `@thefounderlab` | Yes |
| **Page name** | "The Founder Lab" | Yes |
| **Template** | wolf-media-v1 / wolf-media-v2 | No — auto-select from topic |
| **Reference images** | New creator screenshots | No — only needed for Section 2.5 |

The last slide is always a CTA. Page name + handle always appear.

### Template selection

**Always ask the user before starting.** Infer a recommendation from the topic, then present options and wait for confirmation. Do not begin research until the user picks a template.

#### Step 1 — Identify the channel

**Is this for figr.design's UI/UX channel?** If the user mentions `figr.design`, `@figr.design`, or a UI/UX design leadership audience, offer Figr Templates (Section 0a) instead of the Wolf Media templates. These are a separate design system for a different channel.

If the channel is unclear, ask: "Is this for figr.design's UI/UX channel, or a different page?"

#### Step 2 — Infer a recommendation

**Wolf Media / general channel** — use these signals:

| Template | Recommend when |
|---|---|
| **wolf-media-v1** | Data analysis, insight breakdowns, explainers, trend reports, educational content — the default for most topics |
| **wolf-media-v2** | Topic is a results/performance report, case study, or before/after analysis. Signals: "results", "closed", "we generated", "performance", "report", "₹/$ total", "how we", city/channel comparison with real numbers |
| **editorial-step** | Step-by-step tutorials, how-to guides, tool walkthroughs. Signals: "how to", "step by step", "tutorial", "guide", "walkthrough", "set up", "using Claude", "prompt", "workflow", "automate" |
| **ascii-pixel** | Major AI/tech company announcements, frontier-tech news, abstract/futuristic topics where a standard infographic would feel generic. Signals: "ASCII", "pixel art", "terminal style", "Anthropic aesthetic", Anthropic/OpenAI/SpaceX news |

**figr.design channel** — use these signals:

| Template | Recommend when |
|---|---|
| **figr-a-manifesto** | Bold frameworks, principle lists, editorial statements ("N signs/rules/things"). Alternating dark/light typographic rhythm. |
| **figr-b-toolkit** | Practical how-tos, process frameworks, actionable methods. Structured card layout, all light slides. |
| **figr-c-beforeafter** | Shift-based contrasts, pattern corrections, "before you do X / after you do X". Signals: "shifts", "before/after", "wrong vs right", "stop/start", binary state pairs. |
| **figr-g-spacing** | Long-form "N rules / N principles / N habits" lists with sketched diagrams + handwritten coral "Note:" annotations. Notebook/working-file aesthetic (paper grain, corner crosshairs, ruler arc). 12-slide cover→myth→rules→takeaway→resources→CTA structure. Signals: "N rules", "N principles", "save this list", "things designers ignore", topic needs per-point illustrations. |

#### Step 3 — Present the choice

**For Wolf Media / general channel:**

Show this message (adapt the recommendation marker to whichever template fits best):

---

**Which visual template would you like?**

| # | Template | Aesthetic | Best for |
|---|---|---|---|
| 1 | **Wolf Media v1** | Dark charcoal + film grain, Outfit font, gradient text fades | Data explainers, trend reports, insight breakdowns |
| 2 | **Wolf Media v2** | Stark black + bold ALL CAPS, red accent, map textures | Performance reports, metrics, case studies |
| 3 | **Editorial Step** | Cream paper + Playfair serif, sticky notes, terminal panels | Step-by-step tutorials, tool walkthroughs, how-to guides |
| 4 | **ASCII/Pixel** | Warm beige + Space Mono, ASCII globe, pixel bot, orange accent | AI/tech marketing, Anthropic-style, cutting-edge topics |

→ I recommend **[Template Name]** for this topic. Reply with a number (1–4) or just say "go ahead" to use the recommendation.

---

**For figr.design channel:**

Show this message:

---

**Which figr.design template would you like?**

| # | Template | Aesthetic | Best for |
|---|---|---|---|
| 1 | **Figr A — Manifesto** | Inter, alternating dark navy / light, ghost numbers, cyan accents | Frameworks, principle lists, bold editorial statements |
| 2 | **Figr B — Toolkit** | Inter, all-light, elevated card with cyan border-left, concentric rings | How-tos, practical methods, actionable processes |
| 3 | **Figr C — Before / After** | Dark zinc BEFORE / white AFTER split, red ✗ cyan ✓ markers, bridge gradient | Shift-based frameworks, before/after contrasts, pattern corrections |

→ I recommend **[Template Name]** for this topic. Reply with a number (1–3) or just say "go ahead" to use the recommendation.

---

Wait for the user's reply before proceeding to Section 1 (Research).

#### Step 4 — Load the template spec

Once the user confirms a template:

- **wolf-media-v1**: Use Section 3 inline (no external file needed)
- **wolf-media-v2**: Read `templates/wolf-media-v2.md` fully before touching Section 3
- **editorial-step**: Read `templates/editorial-step.md` fully before touching Section 3
- **ascii-pixel**: Read `templates/ascii-pixel.md` fully before touching Section 3
- **figr-a-manifesto**: Read `templates/figr-a-manifesto.md` fully, then follow Section 0a
- **figr-b-toolkit**: Read `templates/figr-b-toolkit.md` fully, then follow Section 0a
- **figr-c-beforeafter**: Read `templates/figr-c-beforeafter.md` fully, then follow Section 0a
- **figr-g-spacing**: Read `templates/figr-g-spacing.md` fully, then follow Section 0a (12-slide variant — expand the rules section between Myth and Takeaway)

For Wolf Media and Editorial templates, all other sections (research, carousel-writer-sms, Playwright audit, export, caption) run identically.

For Figr Templates, follow Section 0a instead of Sections 1–3.

### Dependency: Social Media Context

Before writing any content, check for `.agents/social-media-context-sms.md` in the project root.

- **File exists:** Read it fully. It defines the user's voice, tone, audience, and content pillars. All copy in Section 1.5 must match this voice.
- **File missing:** Stop and ask the user to run `/social-media-context-sms` first to capture their voice. Do not proceed without it — voice-matched copy is the primary reason this skill uses carousel-writer-sms.

---

## 0a. FIGR TEMPLATES — Design Pipeline

**Use this section only when the user has selected figr-a-manifesto, figr-b-toolkit, figr-c-beforeafter, or figr-g-spacing.**

These templates target figr.design's UI/UX channel, audience: design leads and managers. They have their own design system (Inter font, cyan `#00C8B4`, deep navy `#0F172A`), brand voice (editorial, confident, direct), and 7-slide narrative structure.

Skip Sections 1–3. Follow this pipeline instead.

### Content structure (all figr templates)

```
Slide 1: Hook        — dark (figr-a) or light (figr-b)
Slide 2: The Problem — frame the core failure/challenge
Slide 3: Tip / Shift 01
Slide 4: Tip / Shift 02
Slide 5: Tip / Shift 03
Slide 6: Tip / Shift 04
Slide 7: CTA         — "Save this." / "Which will you try first?"
```

### Step 1 — Write the content

Write all 7 slides before touching the HTML. For each slide:
- Slide label (e.g. "PROBLEM", "TIP 01")
- Headline (h2 / h1): max 2 lines, confident, direct, no hedging
- Body: max 3–4 lines. Cut until each sentence earns its place.
- Tag chip (figr-b only): 1–2 word theme

Content rules for figr.design voice:
- No listicles ("Here are 3 things…") — write in declarative statements
- No soft hedging ("might", "could", "perhaps") — everything is stated as fact
- Frame tips as observations a senior designer has earned, not advice a junior gives
- The "before" state should feel painfully recognizable. The "after" should feel achievable.

### Step 2 — Build the HTML

Read the template spec file fully. Use the HTML skeleton from the spec as the starting point.

Replace all `[PLACEHOLDER]` tokens with actual content. Do not invent new CSS classes — use only what the spec defines.

Key rules:
- Slide counter format: `01 / 07` through `07 / 07` (zero-padded, space around slash)
- Brand block always: `<span class="brand-name">figr.design</span><span class="brand-handle">@figr.design</span>`
- Ghost numbers (figr-a only): 01–05 on slides 2–6, counting content order not slide position
- Badge numbers (figr-b only): 1–5 on slides 2–6

### Step 3 — Playwright audit

Run the standard Playwright audit from Section 4. Check for:
- Overflow: no text clipping, no panel overflow beyond 1080px
- Brand block: confirms "figr.design" and "@figr.design" (not "figr" alone)
- Counter: all 7 slides have correct counter
- Type legibility: h1/h2 minimum 40px, body minimum 16px
- Contrast: white on `#0F172A` and `#18181B` passes WCAG AA

### Step 4 — PNG export and caption

Follow Sections 5 and 6 as normal. Caption voice: editorial, direct, one short hook sentence + the key framework idea + CTA.

---

## 1. RESEARCH PHASE

Run three WebSearch queries in parallel:

```
WebSearch: "[topic] statistics 2025"
WebSearch: "[topic] latest trends 2025"
WebSearch: "[topic] expert insights data"
```

Extract and keep only:
- Statistics with named sources and dates (discard anything older than 18 months)
- Direct definitions suitable for the "What is X?" question
- Expert claims and quotable insights
- Surprising or counter-intuitive data points (highest engagement)

Discard: opinion pieces without data, vague claims without numbers, marketing copy.

After research, report token usage:
```bash
rtk gain
```

---

## 1.5. CONTENT WRITING — carousel-writer-sms

After research is complete, use the carousel-writer-sms skill to write the slide copy.
This produces voice-matched, audience-specific content rather than generic AI copy.
Do not skip this step. Do not write slide copy manually.

### How to invoke

Pass the following to carousel-writer-sms:
- **Topic:** the carousel topic from Section 0 inputs
- **Research findings:** paste the key stats, quotes, and data points extracted in Section 1
- **Target slide count:** 7–12 (match to number of distinct ideas in research)
- **Goal:** educate / data storytelling (default for this skill)
- **Voice:** already captured in `.agents/social-media-context-sms.md` — carousel-writer-sms reads it automatically

carousel-writer-sms returns slide-by-slide text blocks in this format:
```
Slide 1 (Cover) — Headline + Subtitle
Slide 2 (Context) — 1-2 framing sentences
Slides 3–N (Body) — Header + Body (max 30 words)
Slide N (CTA) — Summary + CTA action
```

### Mapping carousel-writer-sms output → Wolf Media slide types

| carousel-writer-sms block | Wolf Media slide type | Notes |
|---|---|---|
| Cover (Headline + Subtitle) | HOOK dark | Headline → h1-xl, Subtitle → sub-pill |
| Context (framing 1-2 sentences) | STATS dark or INSIGHT dark | Use STATS if you have 3 numbers; INSIGHT if narrative |
| Body — single stat or finding | INSIGHT (dark/white alternating) | One per slide |
| Body — process or steps | NUMBERED LIST dark | 3–4 steps |
| Body — named entities/companies | COMPANY GRID white | 2-col layout |
| Penultimate — summary/save-this | FINDINGS white 2×2 | 4 titled takeaways |
| CTA | CTA accent slide | Always last |

After mapping, you have: slide count, slide type per position, and the copy for each.
Proceed to Section 2 to finalise architecture, then Section 3 to build the HTML.

---

## 2. CONTENT ARCHITECTURE

Content copy comes from Section 1.5 (carousel-writer-sms). This section covers
slide structure, type assignment, and AEO copy quality checks.

### Slide count rule
Count distinct extractable ideas from carousel-writer-sms output. Assign one slide per idea.
Minimum 7 slides, maximum 12. Never pad with weak ideas to hit a number.
Never compress two strong ideas into one slide to save slides.

### Slide map template

```
Slide 1   — HOOK        : boldest stat or most surprising claim (from carousel-writer-sms Cover)
Slide 2   — STATS       : 3 horizontal stat rows with label + value
Slides 3–N — DATA/INSIGHT : one distinct finding per slide (alternate dark/white)
Slide N-1 — TAKEAWAY    : 2×2 findings grid with title + 1-sentence desc each
Slide N   — CTA         : left-aligned editorial with page name + tagline
```

### Slide type inventory

| Type | When to use | Background |
|---|---|---|
| HOOK | Slide 1 always | Dark |
| STATS | 3 horizontal stat rows | Dark |
| INSIGHT | Single finding with bold + regular body | Alternate dark/white |
| NUMBERED LIST | Process / how-it-works (3–4 steps) | Dark |
| COMPANY GRID | 2-col list of named entities | White |
| FINDINGS | 2×2 grid of title + desc | White |
| CTA | Last slide always | Accent color |

Alternation rule: dark slides anchor data and hooks. White slides reveal concepts and lists. Never put two white slides back to back.

### Per-slide copy checks — AEO/extractability
Apply these to the carousel-writer-sms output before building HTML. Fix any that fail.
- Display headline: 8–18 words, must work as a standalone claim out of context
- Every stat must have a named source or date (not "some experts say")
- Bold body line (.bb / .wbb): lead with the fact, not the setup
- Regular body line (.br / .wbr): add specific context — number, name, date, outcome
- No invented data — every claim traces back to Section 1 research
- No em dashes, no significance inflation, no vague endings (see Section 5.5 humanizer rules)

---

## 2.5. REFERENCE DESIGN ANALYSIS (run only if new reference images provided)

If the user provides screenshots of a carousel creator they want to match, extract
a new design system using `references/design-analysis-scaffold.md` before touching
Section 3. Write the extracted spec to `references/[creator]-design-system.md` and
use it as the source of truth for Section 3 instead of the defaults below.

See `references/design-analysis-scaffold.md` for the full extraction protocol.

---

## 3. DESIGN — Wolf Media System

This is the default design system, derived from forensic analysis of Wolf Media
(@wolfmedia.in) carousels. It produces the warm-editorial dark/white alternating
aesthetic. Do not deviate unless Section 2.5 produced a different spec.

### 3a. HTML skeleton

Single HTML file. Each slide = `section.slide`. Active class toggled by Playwright.

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
    /* RESET */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; font-family: 'Outfit', -apple-system, 'Helvetica Neue', sans-serif; }

    .slide { width: 1080px; height: 1350px; display: none; position: relative; overflow: hidden; }
    .slide.active { display: block; }

    /* DARK SLIDE — warm charcoal + vignette + film grain */
    .dk {
      background:
        radial-gradient(ellipse 130% 90% at 30% 20%, rgba(38,32,24,0.65) 0%, transparent 55%),
        #131110;
    }
    .dk::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.50' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 300px 300px;
      opacity: 0.26;
      pointer-events: none;
      z-index: 1;
    }

    /* WHITE SLIDE */
    .wt { background: #FFFFFF; }

    /* CTA SLIDE — accent color with grain and vignette */
    /* Replace #1B6AE4 with topic-appropriate accent */
    .ct {
      background:
        radial-gradient(ellipse 120% 80% at 20% 80%, rgba(12,30,80,0.70) 0%, transparent 60%),
        #1B6AE4;
    }
    .ct::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.50' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 300px 300px;
      opacity: 0.22;
      pointer-events: none;
      z-index: 1;
    }

    /* CONTENT — anchored from top, never bottom */
    .pad { position: absolute; inset: 0; padding: 90px; padding-top: 490px; z-index: 2; }
    .wt .pad { padding-top: 460px; }
    /* Override per-slide with inline style="padding-top: Npx" when content is taller (e.g. numbered list: 370px) */

    /* HANDLE PILL */
    .handle-tl { position: absolute; top: 55px; left: 90px; display: inline-flex; align-items: center; border: 1px solid rgba(255,255,255,0.30); border-radius: 100px; padding: 10px 20px; font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.68); letter-spacing: 0.01em; z-index: 3; }
    .handle-tr { position: absolute; top: 55px; right: 90px; display: inline-flex; align-items: center; border: 1px solid rgba(255,255,255,0.30); border-radius: 100px; padding: 10px 20px; font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.68); letter-spacing: 0.01em; z-index: 3; }

    /* PROGRESS BAR — 2px hairline at bottom */
    .prog-track { position: absolute; bottom: 60px; left: 90px; right: 90px; height: 2px; z-index: 3; }
    .dk .prog-track { background: rgba(255,255,255,0.14); }
    .wt .prog-track { background: rgba(0,0,0,0.10); }
    .ct .prog-track { background: rgba(255,255,255,0.22); }
    .prog-fill { height: 100%; }
    .dk .prog-fill { background: rgba(255,255,255,0.68); }
    .wt .prog-fill { background: rgba(0,0,0,0.52); }
    .ct .prog-fill { background: rgba(255,255,255,0.88); }

    /* TYPOGRAPHY — fixed px, no clamp() */
    .h1    { font-weight: 800; font-size: 100px; line-height: 0.92; letter-spacing: -0.04em; color: #FFFFFF; }
    .h1-xl { font-weight: 800; font-size: 116px; line-height: 0.90; letter-spacing: -0.04em; color: #FFFFFF; }
    .h1-sm { font-weight: 800; font-size: 86px;  line-height: 0.93; letter-spacing: -0.04em; color: #FFFFFF; }

    /* GRADIENT TEXT — THE signature technique */
    /* Dark slide: white fading to dim */
    .gd { background: linear-gradient(90deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.22) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; display: inline-block; width: fit-content; }
    /* White slide: dark fading to grey */
    .gl { background: linear-gradient(90deg, #2C2C2C 0%, #ABABAB 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; display: inline-block; width: fit-content; }
    .blk { color: #111111; }

    /* BODY TEXT — two-tier hierarchy */
    .bb  { font-size: 26px; font-weight: 700; line-height: 1.45; color: rgba(255,255,255,0.92); }
    .br  { font-size: 24px; font-weight: 400; line-height: 1.60; color: rgba(255,255,255,0.50); }
    .wbb { font-size: 26px; font-weight: 700; line-height: 1.45; color: #141414; }
    .wbr { font-size: 24px; font-weight: 400; line-height: 1.60; color: #888888; }

    /* SUBTITLE PILL — hook slide */
    .sub-pill { display: inline-flex; align-items: center; border: 1.5px solid rgba(255,255,255,0.26); border-radius: 100px; padding: 14px 34px; font-size: 22px; font-weight: 500; color: rgba(255,255,255,0.80); margin-top: 46px; letter-spacing: 0.01em; }

    /* STAT BOXES — horizontal label:value rows */
    .stat-row { display: flex; align-items: center; border: 1px solid rgba(255,255,255,0.18); border-radius: 10px; padding: 20px 28px; background: rgba(255,255,255,0.04); width: fit-content; min-width: 580px; }
    .stat-row + .stat-row { margin-top: 12px; }
    .stat-lbl { font-size: 22px; font-weight: 400; color: rgba(255,255,255,0.68); }
    .stat-val { font-size: 24px; font-weight: 800; color: #FFFFFF; }

    /* FINDINGS GRID — 2×2 white slide */
    .findings-grid { display: grid; grid-template-columns: 1fr 1fr; }
    .finding { padding: 24px 0; border-bottom: 1px solid #E4E4E4; }
    .finding:nth-child(odd) { padding-right: 50px; }
    .finding:nth-child(even) { padding-left: 50px; border-left: 1px solid #E4E4E4; }
    .finding:nth-last-child(-n+2) { border-bottom: none; }
    .finding-title { font-size: 26px; font-weight: 700; color: #111111; line-height: 1.3; margin-bottom: 8px; }
    .finding-desc { font-size: 21px; font-weight: 400; color: #888888; line-height: 1.55; }

    /* COMPANY GRID — 2-col white slide */
    .co-grid { display: grid; grid-template-columns: 1fr 1fr; margin-top: 36px; }
    .co-item { padding: 16px 0; border-bottom: 1px solid #E4E4E4; }
    .co-item:nth-child(odd) { padding-right: 44px; }
    .co-item:nth-child(even) { padding-left: 44px; border-left: 1px solid #E4E4E4; }
    .co-item:nth-last-child(-n+2) { border-bottom: none; }
    .co-name { font-size: 24px; font-weight: 700; color: #111111; }
    .co-role { font-size: 18px; color: #999999; margin-top: 2px; }
  </style>
</head>
<body>
  <!-- slides go here -->
</body>
</html>
```

### 3b. Slide templates

**HOOK slide (always first, always dark):**
```html
<section class="slide dk active" id="slide-1">
  <div class="handle-tr">@handle</div>
  <div class="pad" style="padding-top: 560px;">
    <div class="h1-xl">
      [Line 1 — solid white]<br>
      <span class="gd">[Line 2 — gradient faded]</span><br>
      <span class="gd">[Line 3 — gradient faded]</span>
    </div>
    <div class="sub-pill">[One-line hook subtext]</div>
  </div>
  <div class="prog-track"><div class="prog-fill" style="width:9.1%;"></div></div>
</section>
```

**STATS slide (dark):**
```html
<section class="slide dk" id="slide-N">
  <div class="handle-tl">@handle</div>
  <div class="pad">
    <div class="h1">[Headline]<br><span class="gd">[Gradient line]</span></div>
    <div style="margin-top: 46px;">
      <div class="stat-row"><span class="stat-lbl">[Label]:&nbsp;</span><span class="stat-val">[Value]</span></div>
      <div class="stat-row"><span class="stat-lbl">[Label]:&nbsp;</span><span class="stat-val">[Value]</span></div>
      <div class="stat-row"><span class="stat-lbl">[Label]:&nbsp;</span><span class="stat-val">[Value]</span></div>
    </div>
    <div style="margin-top: 30px;"><p class="br">[Single sourced context sentence]</p></div>
  </div>
  <div class="prog-track"><div class="prog-fill" style="width:[N]%;"></div></div>
</section>
```

**INSIGHT slide (white):**
```html
<section class="slide wt" id="slide-N">
  <div class="pad">
    <div class="h1 blk">[Headline]<br><span class="gl">[Gradient line]</span><br><span class="gl">[Gradient line]</span></div>
    <div style="margin-top: 44px; max-width: 820px;">
      <p class="wbb">[Bold lead — specific fact or claim]</p>
      <p class="wbr" style="margin-top: 10px;">[Regular context — no em dashes, no "quietly", no "a species crossed"]</p>
    </div>
  </div>
  <div class="prog-track"><div class="prog-fill" style="width:[N]%;"></div></div>
</section>
```

**NUMBERED LIST slide (dark, use for process/how-it-works):**
```html
<section class="slide dk" id="slide-N">
  <div class="handle-tl">@handle</div>
  <div class="pad" style="padding-top: 370px;">
    <div class="h1-sm">[Headline]<br><span class="gd">[Gradient line]</span></div>
    <div style="margin-top: 50px; display: flex; flex-direction: column;">
      <div style="display: flex; align-items: flex-start; gap: 32px; padding: 30px 0; border-top: 1px solid rgba(255,255,255,0.10);">
        <span style="font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.28); letter-spacing: 0.08em; min-width: 28px; padding-top: 6px;">01</span>
        <div>
          <div style="font-size: 24px; font-weight: 700; color: rgba(255,255,255,0.92); line-height: 1.3; margin-bottom: 8px;">[Step title]</div>
          <div style="font-size: 24px; font-weight: 400; color: rgba(255,255,255,0.46); line-height: 1.50;">[Step description]</div>
        </div>
      </div>
      <!-- repeat for 02, 03 — last item adds border-bottom -->
    </div>
  </div>
  <div class="prog-track"><div class="prog-fill" style="width:[N]%;"></div></div>
</section>
```

**COMPANY GRID slide (white):**
```html
<section class="slide wt" id="slide-N">
  <div class="pad" style="padding-top: 390px;">
    <div class="h1-sm blk">[Headline]<br><span class="gl">[Gradient line]</span></div>
    <div class="co-grid">
      <div class="co-item"><div class="co-name">[Name]</div><div class="co-role">[Role/description]</div></div>
      <!-- repeat — highlighted item gets co-name class only, regular weight -->
    </div>
  </div>
  <div class="prog-track"><div class="prog-fill" style="width:[N]%;"></div></div>
</section>
```

**FINDINGS GRID slide (white — use as penultimate "save this" slide):**
```html
<section class="slide wt" id="slide-N">
  <div class="pad" style="padding-top: 390px;">
    <div class="h1 blk">[Headline]<br><span class="gl">[Gradient line]</span></div>
    <div class="findings-grid" style="margin-top: 44px;">
      <div class="finding"><div class="finding-title">[Title]</div><div class="finding-desc">[1-sentence desc — specific, no filler endings]</div></div>
      <div class="finding"><div class="finding-title">[Title]</div><div class="finding-desc">[1-sentence desc]</div></div>
      <div class="finding"><div class="finding-title">[Title]</div><div class="finding-desc">[1-sentence desc]</div></div>
      <div class="finding"><div class="finding-title">[Title]</div><div class="finding-desc">[1-sentence desc]</div></div>
    </div>
  </div>
  <div class="prog-track"><div class="prog-fill" style="width:[N]%;"></div></div>
</section>
```

**CTA slide (always last — left-aligned editorial):**
```html
<section class="slide ct" id="slide-N">
  <div class="handle-tl">@handle</div>
  <div style="position:absolute; inset:0; padding:90px; padding-top:430px; z-index:2;">
    <div style="font-size:13px; font-weight:700; letter-spacing:0.14em; color:rgba(255,255,255,0.50); text-transform:uppercase; margin-bottom:36px;">Follow for more</div>
    <div style="font-family:'Outfit',sans-serif; font-weight:800; font-size:108px; line-height:0.90; letter-spacing:-0.04em; color:#FFFFFF;">
      [Page Name]<br>[if two words, break here]
    </div>
    <div style="margin-top:40px; max-width:740px; font-size:28px; font-weight:400; line-height:1.50; color:rgba(255,255,255,0.78);">
      [Human tagline — connects to carousel story, 10–15 words, no filler. E.g.: "Six months from now, this story is everywhere. You read it today."]
    </div>
  </div>
  <div class="prog-track"><div class="prog-fill" style="width:100%;"></div></div>
</section>
```

### 3c. Design rules — what to enforce

**Progress bar widths:** Divide 100% by slide count. Round to 1 decimal.
- 11 slides: 9.1, 18.2, 27.3, 36.4, 45.5, 54.5, 63.6, 72.7, 81.8, 90.9, 100
- 9 slides: 11.1, 22.2, 33.3, 44.4, 55.6, 66.7, 77.8, 88.9, 100

**CTA accent color by topic mood:**
| Topic | Accent |
|---|---|
| Finance / startup | #1B6AE4 (blue) |
| Health / wellness | #1A6B4A (emerald) |
| Technology | #1A4A6B (navy) |
| Marketing / social | #6B1A4A (deep rose) |
| Education | #4A1A6B (violet) |

**Typography size selector:**
- h1-xl (116px): Short punchy hook (3 words per line or fewer)
- h1 (100px): Standard headline (4–5 words per line)
- h1-sm (86px): When more than 3 lines needed

**BANNED in Wolf Media system:**
- `clamp()` for font sizes (fixed viewport, use px)
- `display: flex` on `.slide.active` (use `display: block` — content is absolutely positioned)
- Centered H1 as sole hierarchy signal
- em dashes in body copy (use colons or periods)
- `min-height: 1350px` — use `height: 1350px` with `overflow: hidden` and top-anchored `.pad`
- oklch() color tokens (use hex)

---

## 4. PLAYWRIGHT AUDIT LOOP

Run automatically after generating the HTML. Never skip. Max 3 iterations.

### Audit script

```js
// carousel-audit.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { webkit } = require('/opt/homebrew/lib/node_modules/playwright');

const SLIDE_COUNT = /* set from content architecture step */;
const FILE_PATH = '/tmp/carousel.html';

const browser = await webkit.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1080, height: 1350 });
await page.goto(`file://${FILE_PATH}`, { waitUntil: 'load' });
await page.waitForTimeout(4000);

for (let i = 1; i <= SLIDE_COUNT; i++) {
  await page.evaluate(idx => {
    document.querySelectorAll('.slide').forEach((s, n) => {
      s.classList.toggle('active', n + 1 === idx);
    });
  }, i);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/audit-slide-${i}.png` });
  console.log(`audited slide ${i}/${SLIDE_COUNT}`);
}

await browser.close();
```

### After each screenshot, inspect for:

| Issue | Root cause | Fix |
|---|---|---|
| Text clipped at bottom | `.pad` padding-top too high for content | Reduce padding-top or font sizes |
| Gradient text invisible | `-webkit-text-fill-color` not set or `display` not `inline-block` | Add `display: inline-block; width: fit-content` to .gd/.gl |
| Film grain missing | SVG data URI mangled (& vs %26) | Check SVG encoding in ::before |
| Font shows sans fallback | Google Fonts CDN timed out | Increase waitForTimeout to 5000; verify font link |
| Slide blank | `display: none` not toggled | Check `classList.toggle('active', n + 1 === idx)` logic |
| Content floats to bottom | Used flex layout with justify-content: flex-end | Switch to top-anchored `position: absolute; padding-top: Npx` |
| Progress bar wrong width | Calculation error | Recalculate: 100 / SLIDE_COUNT × slideIndex, 1 decimal |

Fix → re-screenshot → verify. State the bug + root cause + fix before each edit.
Never rewrite the entire file for a single bug — targeted edits only.

After audit loop completes:
```bash
rtk gain
```

---

## 5. PNG EXPORT

Once all audit screenshots pass, export final PNGs:

```js
// carousel-export.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { webkit } = require('/opt/homebrew/lib/node_modules/playwright');

const SLIDE_COUNT = /* from content step */;
const FILE_PATH = '/tmp/carousel.html';
const OUTPUT_DIR = '/tmp/carousel-final/';

const browser = await webkit.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1080, height: 1350 });
await page.goto(`file://${FILE_PATH}`, { waitUntil: 'load' });
await page.waitForTimeout(4000);

for (let i = 1; i <= SLIDE_COUNT; i++) {
  await page.evaluate(idx => {
    document.querySelectorAll('.slide').forEach((s, n) => {
      s.classList.toggle('active', n + 1 === idx);
    });
  }, i);
  await page.waitForTimeout(400);
  await page.screenshot({
    path: `${OUTPUT_DIR}slide-${String(i).padStart(2,'0')}.png`,
    clip: { x: 0, y: 0, width: 1080, height: 1350 }
  });
  console.log(`exported slide ${i}/${SLIDE_COUNT}`);
}

await browser.close();
console.log(`Done. ${SLIDE_COUNT} slides → ${OUTPUT_DIR}`);
```

Ensure output directory exists before running:
```bash
mkdir -p /tmp/carousel-final/
```

---

## 5.5. COPY STANDARDS — Humanizer Rules

Apply before finalizing any slide copy. These are the recurring AI patterns that
make carousel copy feel generic and unsaveable.

### Banned patterns

| Pattern | Example | Fix |
|---|---|---|
| Em dashes as connective tissue | "73% — a number that shocked D.C." | Use colon or period: "73%: this shocked D.C." |
| Significance inflation | "a species crossed", "a turning point", "reshaping the landscape" | Remove. State the fact, not its importance. |
| Vague positive endings | "The threshold is crossed." "The future looks bright." | Replace with a specific outcome or number. |
| "quietly" / "simply" / "just" | "closed quietly in April 2026" | Delete the adverb entirely. |
| Grandiose last sentences | "That's what it looks like when the world's best AI hunts threats before they're threats." | One clean specific fact instead. |
| Generic positive conclusions | "Exciting times lie ahead." | The carousel's last body slide should end with a fact, not an emotion. |
| Outline "Challenges and Future Prospects" | Formulaic section headings | Break into specific named findings instead. |
| "Not just X — it's Y" constructions | "It's not just autocomplete, it's creativity at scale." | Direct statement: "It generates [X] in [Y] context." |
| Vague attributions | "Experts believe", "Industry observers note" | Name the source and date, or cut the claim. |

### What good copy looks like

Good: "Before Mythos, every AI scored 0 on expert hacking benchmarks. Now it passes 3 in 4."
Bad: "Mythos represents a pivotal moment — a species crossed, a threshold surpassed, highlighting its crucial role."

Good: "Mythos scored 3/10 in April 2026. Every other model still scored 0."
Bad: "The gap between 0 and 3 closed quietly in April 2026, underscoring its transformative potential."

Good: "73% on expert hacking tests that no AI could pass before 2025."
Bad: "73% on tests that stumped every model before 2025. The threshold is crossed."

### AEO extractability test
Before finalizing each slide, ask: "Can this headline stand alone as a cited fact in an AI-generated answer?" If yes, it passes. If it requires surrounding context to make sense, rewrite it.

---

## 6. CAPTION GENERATION (Hybrid SEO/AEO)

### Structure

```
[Hook sentence — primary keyword natural in first 10 words]

[Value line 1 — data point or insight from slide content]
[Value line 2 — second distinct insight]
[Value line 3 — actionable takeaway]

[CTA line — "Save this. Share it with someone who needs to know about [X]."]

.
[Hashtags — one block, no line breaks between tags]
```

### Keyword integration rules
- Primary keyword: appears once in hook, once more in body — never repeated beyond that
- Secondary keywords: 2–3, woven naturally into value lines
- Target density: 1.5–2% — reads like a human wrote it
- BANNED: stacking keywords ("startup funding seed funding early stage funding venture")
- Every keyword must serve the sentence it's in — if removing it doesn't hurt meaning, remove it
- Apply same humanizer rules as slide copy — no AI vocabulary, no em dashes

### Hashtag tiers (20–25 total)

| Tier | Post volume | Count | Purpose |
|---|---|---|---|
| Tier 1 — Niche | < 500K posts | 3–5 | High relevance, low competition |
| Tier 2 — Mid | 500K–5M posts | 8–10 | Core discoverability |
| Tier 3 — Broad | 5M+ posts | 7–10 | Reach amplification |

Mix all three tiers in one block. Research hashtag volumes via WebSearch if needed.

---

## 7. CHANGE ITERATION

When user requests edits after reviewing PNGs:

1. Identify which slide(s) need changes
2. Edit only those sections in the HTML — no full rewrites
3. Re-run Playwright audit on changed slides only (not full deck)
4. Re-export only changed PNGs
5. Deliver changed PNGs + note which slide numbers changed

```bash
rtk gain --history
```

---

## 8. DELIVERY CHECKLIST

Before reporting done, verify every item:

**All templates:**
- [ ] Research from sources < 18 months old, all stats named + dated
- [ ] Slide count between 7 and 12
- [ ] Last slide is CTA — left-aligned editorial, human tagline, handle pill
- [ ] Outfit font loaded (not system fallback)
- [ ] No `clamp()` for font sizes
- [ ] No em dashes in body copy
- [ ] No vague significance endings ("the threshold is crossed", "a species crossed", "the future is bright")
- [ ] Each headline works as a standalone extractable claim (AEO test)
- [ ] Progress bar widths correct (100 / N per slide, 1 decimal)
- [ ] All slides pass Playwright audit (no clipping, no blank slides)
- [ ] PNGs exported at exactly 1080×1350 with clip coordinates
- [ ] Caption keywords not stacked, reads naturally
- [ ] 20–25 hashtags in three tiers
- [ ] Token usage reported via `rtk gain --history`

**Wolf Media v1 only:**
- [ ] Dark/white alternation holds (no two white slides back to back)
- [ ] Film grain texture visible on dark slides
- [ ] Gradient text uses `display: inline-block; width: fit-content`

**Wolf Media v2 only:**
- [ ] Map texture SVG present in every dk2 slide (not missing from any)
- [ ] ALL CAPS throughout — no mixed-case body text
- [ ] No gradient text classes used (no .gd / .gl)
- [ ] Hero number on HOOK-PHOTO fits one line without wrapping
- [ ] Red accent `#E02020` only — no warm tones or other reds
- [ ] Photo grid cells uniform height (210px min-height set)
- [ ] Table has max 6 rows — flag if more and split

**Editorial Step only:**
- [ ] All 4 fonts loaded: Playfair Display, Outfit, Caveat, JetBrains Mono
- [ ] Step label (`— Step N`) present on every step slide
- [ ] Terminal window uses correct colors: chrome `#2D2D2D`, content `#1C1C1C`, traffic lights `#FF5F57 / #FFBD2E / #28CA41`
- [ ] JetBrains Mono used exclusively inside terminal and Claude Code panel
- [ ] Sticky note text in Caveat font — not Outfit
- [ ] Cream background `#F5F2ED` — not pure white or grey
- [ ] Dark cover slide uses `#0E0E0E` — not `#131110` (wolf-media-v1 charcoal)
- [ ] No film grain texture (`.dk::before`) — cream slides are clean

**ASCII/Pixel only:**
- [ ] Both fonts loaded: Space Mono + Outfit (not JetBrains Mono — wrong template)
- [ ] ASCII globe SVG present on COVER and INSIGHT slides (light and dark versions correct)
- [ ] Pixel bot crisp: `image-rendering:pixelated` + `shape-rendering:crispEdges` set
- [ ] Progress dot track correct: (K-1) orange done segs → 1 dot → (N-K) grey segs
- [ ] No progress track on CTA slide (final slide only)
- [ ] Terminal slide uses `lt4` (light) background — NEVER `dk4` (no contrast otherwise)
- [ ] Terminal window has explicit height (e.g. `height:500px`) — not `flex:1` filling whole slide
- [ ] Terminal body max 12 lines — no overflow past slide height
- [ ] Interpretation callout positioned at `terminal-top + terminal-height + 40px`
- [ ] ASCII box label on PIXEL-HERO uses CSS border divs — not `<pre>` (pre wraps unpredictably)
- [ ] No CSS animations (globe is static SVG — no `animation:` rules)
- [ ] Warm beige `#FBF6EC` on light slides — not pure white

---

## TOKEN REPORTING

Report at end of each phase and at session end:

```bash
rtk gain              # current session snapshot
rtk gain --history    # per-command breakdown
```

---

## 9. SELF-IMPROVEMENT PROTOCOL

This skill learns from every carousel session. Changes users request during
iteration (Section 7) are not just fixes — they are signals about gaps in
the skill's instructions. Capture them. Analyze patterns. Tighten the skill.

### Step 1 — Log every user change

After applying any user-requested edit, append to the change log:

```bash
node ~/.claude/skills/instagram-carousel/scripts/log-change.mjs \
  --topic "[topic]" \
  --slide "[slide number or 'caption']" \
  --issue "[what the user asked to change, verbatim or paraphrased]" \
  --fix "[what you changed in the HTML/caption]" \
  --category "[fonts|typography|color|layout|content|caption|cta|export|copy]"
```

Categories: `fonts`, `typography`, `color`, `layout`, `content`, `caption`, `cta`, `export`, `copy`

### Step 2 — Check for patterns

When a category accumulates 3+ issues across different sessions, surface a pattern alert and propose a SKILL.md edit.

Run analyzer:
```bash
node ~/.claude/skills/instagram-carousel/scripts/analyze-patterns.mjs
```

On user approval, edit SKILL.md and push:
```bash
cd ~/.claude/skills/instagram-carousel
git add SKILL.md scripts/improvement-log.json
git commit -m "fix(skill): address recurring [category] pattern from [N] sessions"
git push
```

### Improvement log location
```
~/.claude/skills/instagram-carousel/scripts/improvement-log.json
```
