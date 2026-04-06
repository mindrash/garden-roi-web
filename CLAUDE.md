# Garden ROI Web — Claude Code Instructions

## Session Start Protocol — Required

Before touching any files:

1. Read the task methodology skill:
   ```
   cat /Users/tlawson/.claude/skills/garden-roi-tasks/SKILL.md
   ```
2. Read the canonical backlog:
   ```
   cat memories/repo/tasks.md
   ```
3. Find the first `[>]` (in progress) task and continue it, OR start the first `[ ]` task.
4. Mark the task `[>]` in `memories/repo/tasks.md` before touching any files.
5. When done, mark `[?]`, run acceptance criteria, then mark `[x]`.

**Never start work without reading `tasks.md` first.**

**Story range mode:** If given specific story IDs (e.g., "complete A001-A003"), work each in sequence per the tasks.md entry. Do not skip ahead or batch stories.

---

## Project

Companion website for the Garden ROI mobile app. Hosted at gardenroi.com via GitHub Pages.

- **Framework:** Astro v6, static output, TypeScript strict mode
- **Dev server:** Already running at `http://localhost:4321`. Never start a new one.
- **Build check:** `npx astro build` - must pass with 0 errors before marking any task `[x]`

## Related Repo

Mobile app at `~/projects/garden-roi`:
- Design tokens: `constants/theme.ts`
- Plant data: `assets/data/variety_library.json` (800+ USDA varieties, use for price/yield validation)

## Content Standards — Non-Negotiable

- **No em dashes (—) ever.** Use ` - ` (space-hyphen-space) or rewrite the sentence.
- **No hardcoded CSS values.** All colors, spacing, fonts use CSS custom properties from `src/styles/theme.css`.
- **Prices must be cited.** USDA ERS, USDA AMS, or land-grant extension. No invented numbers.
- **No motivational closings.** No "journey", "rewarding experience", or "hope you enjoy" language.
- Load the content skill before writing any plant entries or articles:
  `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`

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
