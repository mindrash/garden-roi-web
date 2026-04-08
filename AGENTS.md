# Garden ROI Web — Agent Instructions

> **Canonical file.** All AI agents working on this repository (Claude Code, GitHub Copilot, OpenAI Codex, etc.) read this file. `CLAUDE.md` and `.github/copilot-instructions.md` are stubs that point here. Make changes to this file only.

---

## Session Start Protocol — Required

Before touching any files:

1. Read the task methodology skill: `/Users/tlawson/.claude/skills/garden-roi-tasks/SKILL.md`
2. Read the canonical backlog: `memories/repo/tasks.md`
3. Find the first `[>]` (in progress) task and continue it, OR start the first `[ ]` task
4. Mark the task `[>]` in `memories/repo/tasks.md` before touching any files
5. When done, mark `[?]`, run acceptance criteria, then mark `[x]`

**Never start work without reading `tasks.md` first.**

**Story range mode:** If given specific story IDs (e.g., "complete E001-E004"), work each in sequence per the tasks.md entry. Do not skip ahead or batch stories.

## Network Error Recovery Protocol

If a network error interrupts work mid-session (e.g., `net::ERR_CONNECTION_CLOSED`), recover without requiring the user to re-explain context:

1. Check the in-context todo list — the current in-progress task is marked `[-]`
2. Check `memories/repo/tasks.md` — find the `[>]` task and resume it
3. Do NOT re-read files already confirmed read in the current session
4. Resume from the exact point of interruption — do not restart from the beginning
5. Confirm the resume point in one sentence to the user, then proceed

**Recovery is silent by default.** The user should not have to repeat instructions.

## Agent Role Split

**GitHub Copilot** handles:
- Infrastructure, routing, component work, bug fixes
- Story planning and tasks.md maintenance
- Code review and build verification
- Anything that doesn't require writing 1,000+ words of original content

**Claude Code** handles:
- All content writing: plant encyclopedia entries, articles, guides
- Any task with `Load skill: garden-roi-content` in its story definition
- Content expansion and rewrites (E-series stories)
- Anything requiring the content skill at `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`

**When to hand off:** If Copilot encounters a content writing task, write the task story to `memories/repo/tasks.md` with full spec and prompt the user to run Claude Code on those story IDs. Do not write articles in Copilot.

---

## Project

Companion website for the Garden ROI mobile app (iOS/Android). Hosted at gardenroi.com via GitHub Pages.

- **Framework:** Astro v6, static output, TypeScript strict mode
- **Dev server:** Already running at `http://localhost:4321`. Never start a new one.
- **Build check:** `npx astro build` — must pass with 0 errors before marking any task `[x]`

## Related Repo

Mobile app at `~/projects/garden-roi`:
- Design tokens: `constants/theme.ts` (colors, fonts, spacing)
- Plant data: `assets/data/variety_library.json` (800+ USDA varieties, use for price/yield validation)
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

1. **No hardcoded values** — All colors, spacing, radii, and font references must use CSS custom properties from `src/styles/theme.css`. Never write a raw hex, px spacing value, or font name directly in a component style.

2. **Global styles in theme.css** — Site-wide styles live in `src/styles/theme.css`. Component-scoped `<style>` blocks are for layout and component-specific rules only.

3. **Reusable components** — Header, Footer, layouts, and repeated UI patterns are components in `src/components/` or `src/layouts/`. Never duplicate markup across pages.

4. **No inline styles** — Do not use `style=""` attributes except for truly dynamic values.

5. **Reference the mobile app** — Before implementing any UI element, check `~/projects/garden-roi`. Match colors, typography, spacing, and interaction patterns.

6. **All content sections must have a solid or semi-opaque background** — The site body has a background image. Any page section containing text MUST have `background-color: rgba(248, 249, 245, 0.97)` (or higher opacity) on the page's main content wrapper. Alternating section tints use `rgba(0, 0, 0, 0.04)` on top of that. **Never render text directly over the background image.** This is the most common visual bug on this site — check every page you touch.

## Content Standards — Non-Negotiable

- **No em dashes (—) ever.** Use ` - ` (space-hyphen-space) or rewrite the sentence.
- **Prices must be cited.** USDA ERS, USDA AMS, or land-grant extension. No invented numbers.
- **No motivational closings.** No "journey", "rewarding experience", "hope you enjoy" language.
- **Load the content skill** before writing any plant entries or articles: `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
- **Depth standard:** Articles must deliver what their title promises. If the title says "ROI," there must be actual math. If it says "break-even," there must be a break-even calculation. Summaries dressed as analysis are rejected. Target 1,800+ words for standalone articles; 2,500+ for anchor pieces.

## SEO Standards — Non-Negotiable

1. **Title pattern** — Crop pages: `[Crop]: ROI, Yield & Growing Guide`. Articles: keyword-first, specific claim. Keep under 55 chars (BaseLayout appends `| Garden ROI`).
2. **Meta description** — 150–160 chars, contains primary keyword, states a specific benefit or number.
3. **Structured data** — Every crop page and article gets Article + BreadcrumbList JSON-LD. BaseLayout includes Organization JSON-LD.
4. **Images** — Every `<img>` must have: descriptive `alt`, explicit `width` and `height`, `loading="lazy"` (or `"eager"` for above-fold only).
5. **Internal linking** — Every article links to at least 2 crop pages and 1 related article. Every crop page links to 2–3 related crops and 1–2 articles. Anchor text must be descriptive.
6. **Canonical URLs** — Already computed in `BaseLayout.astro`. Never create duplicate content.

## Content Collections

- **plants** (served at `/crops/`): Vegetable | Herb | Fruit
- **articles** (served at `/roi/`, `/homestead/`, `/guides/`): homestead | roi | care | planning

## Key Paths

| Purpose | Path |
|---|---|
| Task backlog | `memories/repo/tasks.md` |
| Plant entries | `src/content/plants/` |
| Article entries | `src/content/articles/` |
| Content schema | `src/content.config.ts` |
| Theme tokens | `src/styles/theme.css` |
| Content skill | `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md` |
| Task skill | `/Users/tlawson/.claude/skills/garden-roi-tasks/SKILL.md` |

## API Endpoints

`/api/tips.json` and `/api/plants.json` must remain valid — the mobile app will consume these.

## Plans

- IA: `memories/repo/ia-plan.md`
- Content: `memories/repo/content-plan.md`
- SEO: `memories/repo/seo-plan.md`
- Open decisions: `memories/repo/decisions.md`
