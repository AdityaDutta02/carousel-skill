# instagram-carousel

A Claude Code skill that produces research-backed, visually premium Instagram carousels.

## What it does

1. Researches the topic (3 parallel web searches, data < 18 months old)
2. Structures content into 7–12 slides based on depth
3. Designs a pixel-perfect 1080×1350 HTML file (visual-impact principles)
4. Audits every slide with Playwright (auto-fix loop, max 3 iterations)
5. Exports individual PNGs per slide
6. Generates a hybrid SEO/AEO Instagram caption with tiered hashtags
7. Logs user change requests and detects recurring patterns to self-improve

## How to trigger

Just say it in Claude Code:
- "make me a carousel about [topic] for my page [handle]"
- "carousel on [topic], page: [Page Name] [handle]"

The skill auto-invokes.

## Inputs required

| Input | Example |
|---|---|
| Topic | "seed funding for startups" |
| Page handle | `@thefounderlab` |
| Page name | "The Founder Lab" |

## Self-improvement

Every user change during iteration is logged to `scripts/improvement-log.json`.
When a category (fonts, typography, color, layout, etc.) recurs 3+ times across sessions,
the skill surfaces a pattern alert and proposes targeted SKILL.md updates.

Run the analyzer manually at any time:
```bash
node ~/.claude/skills/instagram-carousel/scripts/analyze-patterns.mjs
```

## Output

- `slide-01.png` through `slide-NN.png` at 1080×1350
- Instagram caption (hybrid SEO/AEO, ~1.5–2% keyword density)
- Hashtag set: 20–25 tags across 3 tiers (niche / mid / broad)
- Token usage report via `rtk gain --history`

## File structure

```
instagram-carousel/
├── SKILL.md                        — skill instructions (loaded by Claude Code)
├── README.md                       — this file
├── scripts/
│   ├── log-change.mjs              — logs user changes per session
│   ├── analyze-patterns.mjs        — detects recurring issues, proposes SKILL.md edits
│   ├── build-previews.mjs          — generates visual template previews (cover/grid/full)
│   └── improvement-log.json        — persistent change history across all sessions
├── templates/
│   ├── <name>.md                   — template specs (one per template)
│   ├── sources/                    — placeholder HTML demo per template, screenshotted by build script
│   └── previews/
│       ├── gallery.html            — side-by-side comparison page (open in browser)
│       └── <name>/                 — per-template webp previews
│           ├── cover.webp          — slide 1 alone, ~540×W
│           ├── grid.webp           — 2×2 contact sheet of 4 sampled slides
│           └── full.webp           — vertical strip of all slides at 25%
└── references/
    └── *.md                        — design-system reference docs
```

## Visual template previews

Every template in the skill ships with rendered webp previews so users (and you) can see the look before picking. The selection dialog in SKILL.md Section 0 Step 3 inlines the `grid.webp` for each template, and `templates/previews/gallery.html` lays them out side-by-side.

### When to rebuild

Rebuild previews **any time you do one of:**
1. Change the visual design of an existing template (CSS, colors, layout, typography)
2. Add a new template
3. Edit the placeholder HTML in `templates/sources/`

### How to rebuild

```bash
# All templates
node ~/.claude/skills/instagram-carousel/scripts/build-previews.mjs

# One or a few templates
node ~/.claude/skills/instagram-carousel/scripts/build-previews.mjs figr-a-manifesto figr-b-toolkit
```

The script uses Playwright (Chromium) to screenshot each slide from the template's source HTML, composites them via in-memory HTML grids, then converts to WebP via Pillow (Python).

Requirements:
- `playwright` installed at `/opt/homebrew/lib/node_modules/playwright`
- `python3` with Pillow (`pip3 install Pillow`)

Adding a new template? Add an entry to the `TEMPLATES` array in `build-previews.mjs` (specifying `dims` and `slideMode`), drop a demo HTML at `templates/sources/<name>.html`, then run the script.
