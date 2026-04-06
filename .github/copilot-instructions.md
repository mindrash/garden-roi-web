# Garden ROI Web — Copilot Instructions

## Session Start Protocol — Required
At the start of every session, before doing any work:
1. Read the task methodology skill: `/Users/tlawson/.claude/skills/garden-roi-tasks/SKILL.md`
2. Read `/memories/repo/tasks.md` — this is the canonical backlog
3. Find the first `[>]` (in progress) task and continue it, OR start the first `[ ]` task
4. Mark the task `[>]` in `tasks.md` before touching any files
5. When done, mark `[?]` (needs verify), run acceptance criteria, then mark `[x]`

**Never start work without reading `tasks.md` first.** This file is provider-agnostic — any AI agent working on this project must follow this protocol.

**Story range mode:** If given specific story IDs (e.g., "complete A001-A003"), work each in sequence per the tasks.md entry. Do not skip ahead or batch stories.

## Project
Companion website for the Garden ROI mobile app (iOS/Android). Hosted at gardenroi.com via GitHub Pages. Built with Astro v6, TypeScript strict mode.

## Related Repo
The mobile app lives at `~/projects/garden-roi`. Reference it for:
- Design tokens: `constants/theme.ts` (colors, fonts, spacing)
- Plant data: `assets/data/variety_library.json` (800+ USDA varieties)
- Brand assets: `assets/logo.png` (ladybug mascot), `assets/512-lcon.png`

## Architecture
- **Framework:** Astro v6 with static output
- **Content:** Astro Content Collections with `glob` loader — `src/content/plants/` and `src/content/articles/`, schema in `src/content.config.ts`
- **Styling:** CSS custom properties in `src/styles/theme.css` matching mobile app theme
- **Fonts:** Inter + Piedra via Google Fonts (matches mobile app)
- **Deployment:** GitHub Actions → GitHub Pages → gardenroi.com

## Theme
Mirror `constants/theme.ts` exactly. Key values:
- Primary: `#2D5A27`, Secondary: `#5C3D2E`, Background: `#F8F9F5`
- Tab bar: `#3B2314`, Active gold: `#F5D547`, Inactive tan: `#C4A882`
- Fonts: Piedra (headings/display), Inter (body)

## Coding Standards — Non-Negotiable
These must be followed without being asked:

1. **No hardcoded values** — All colors, spacing, radii, and font references must use CSS custom properties from `src/styles/theme.css`. If a new token is needed, add it to `theme.css` first, then reference it. Never write a raw hex, px spacing value, or font name directly in a component style.

2. **Global styles in theme.css** — Site-wide styles (body, html, typography base, utility classes) live in `src/styles/theme.css`. Component-scoped `<style>` blocks are for layout and component-specific rules only.

3. **Reusable components** — Header, Footer, layouts, and repeated UI patterns are components in `src/components/` or `src/layouts/`. Never duplicate markup across pages.

4. **No inline styles** — Do not use `style=""` attributes on elements except for truly dynamic values that cannot be expressed any other way.

5. **Reference the mobile app** — Before implementing any UI element, check how the mobile app does it (`~/projects/garden-roi`). Match colors, typography, spacing, and interaction patterns to maintain brand consistency.

6. **Dev server is already running** — Never start a new dev server. Astro hot-reloads on file save. The server runs at `http://localhost:4321`.

## SEO Standards — Non-Negotiable
SEO is structural. Apply these on every page and component, not as a polish pass:

1. **Title pattern** — Crop pages: `[Crop]: ROI, Yield & Growing Guide`. Articles: specific claim, keyword-first. Never generic. Keep page title under 55 chars (BaseLayout appends `| Garden ROI`).

2. **Meta description** — 150–160 chars, contains primary keyword, states a specific benefit or number. No "Welcome to..." or "Learn about...".

3. **Structured data** — Every crop page and article page gets Article + BreadcrumbList JSON-LD. `BaseLayout.astro` always includes Organization JSON-LD. See `/memories/repo/seo-plan.md` for exact schemas.

4. **Images** — Every `<img>` must have: descriptive `alt` text, explicit `width` and `height` attributes, `loading="lazy"` (or `"eager"` for above-fold only). No bare `<img>` tags ever.

5. **Internal linking** — Every article links to at least 2 crop pages and 1 related article. Every crop page links to 2–3 related crops and 1–2 related articles. Anchor text must be descriptive — never "click here" or "learn more".

6. **Canonical URLs** — Already computed in `BaseLayout.astro`. Never create duplicate content at multiple URLs.

7. **hero_image as ogImage** — Pass `hero_image` from frontmatter as `ogImage` prop to `BaseLayout` on every crop and article page.

## Content Collections
- **plants** (served at `/crops/`): Vegetable | Herb | Fruit — fields: name, scientific_name, category, days_min/max, avg_yield_lb, avg_price_lb, seed_cost, is_common, watering, sunlight, companion_plants, hero_image
- **articles** (served at `/roi/`, `/homestead/`, `/guides/`): categories: homestead | roi | care | planning — fields: title, description, category, publishDate, featured, hero_image

## API Endpoints
`/api/tips.json` and `/api/plants.json` must remain valid — the mobile app's future "Tips" section will consume these.

## Plans
- IA: `/memories/repo/ia-plan.md`
- Content: `/memories/repo/content-plan.md`
- SEO: `/memories/repo/seo-plan.md`
- Open decisions: `/memories/repo/decisions.md`

## Content Creation
When writing or editing any plant entries, articles, or user-facing copy, load and follow the `garden-roi-content` skill at `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`.

## Writing Style — Non-Negotiable
- **No em dashes (—) ever.** They are an AI writing tell. Use ` - ` (space-hyphen-space) if a dash is needed. Most of the time a period or comma works better.
- **No em dashes in titles, descriptions, body copy, UI labels, or any other text.** If Claude Code or any other agent writes one, replace it before committing.
