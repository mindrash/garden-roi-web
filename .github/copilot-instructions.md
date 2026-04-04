# Garden ROI Web — Copilot Instructions

## Project
Companion website for the Garden ROI mobile app (iOS/Android). Hosted at gardenroi.com via GitHub Pages. Built with Astro v4, TypeScript strict mode.

## Related Repo
The mobile app lives at `~/projects/garden-roi`. Reference it for:
- Design tokens: `constants/theme.ts` (colors, fonts, spacing)
- Plant data: `assets/data/variety_library.json` (800+ USDA varieties)
- Brand assets: `assets/logo.png` (ladybug mascot), `assets/512-lcon.png`

## Architecture
- **Framework:** Astro v4 with static output
- **Content:** Astro Content Collections — `src/content/plants/` and `src/content/articles/`
- **Styling:** CSS custom properties in `src/styles/theme.css` matching mobile app theme
- **Fonts:** Inter + Piedra via Google Fonts (matches mobile app)
- **Deployment:** GitHub Actions → `gh-pages` branch → gardenroi.com

## Theme
Mirror `constants/theme.ts` exactly. Key values:
- Primary: `#2D5A27`, Secondary: `#5C3D2E`, Background: `#F8F9F5`
- Fonts: Piedra (headings/display), Inter (body)
- No hardcoded color or spacing values — always use CSS custom properties from `theme.css`

## Content Collections
- **plants**: Vegetable | Herb | Fruit — fields: name, scientific_name, category, days_min/max, avg_yield_lb, avg_price_lb, is_common, watering, sunlight, companion_plants
- **articles**: categories: homestead | roi | care | planning — fields: title, description, category, publishDate, featured

## API Endpoints
`/api/tips.json` and `/api/plants.json` must remain valid — the mobile app's future "Tips" section will consume these.

## Plan
Full implementation plan: `/memories/repo/plan.md`
