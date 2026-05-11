# Garden ROI Web — Open Decisions & Architecture Notes

---

## Compare Tool Architecture (Resolved — do not re-propose comparison article writing)

**Decision:** The `/compare/` route is a **data-driven static generator**, not a content writing surface.

**How it works:**
- `src/data/comparisons.ts` exports `COMPARISON_PAIRS: [string, string][]` — a list of slug pairs
- `src/pages/compare/[...slugs].astro` statically pre-renders one page per pair at build time
- All metrics (start cost, days to maturity, avg yield, retail price, gross value, net value, ROI multiple) are **computed dynamically** from plant frontmatter data — no written content per page
- The page template handles layout, comparison table, winner highlighting, and related pairs automatically

**Adding a new comparison:** Add one line to `COMPARISON_PAIRS` in `comparisons.ts`. The page generates on next build. No content writing, no article creation.

**Constraint:** Pairs must reference slugs with matching `.md` files in `src/content/plants/`. If a plant is deleted, remove its pairs from `COMPARISON_PAIRS` to avoid silent dead-pair failures (the flatMap returns `[]` for missing plants — no build error, just missing pages).

**Dead pairs to avoid:** `['thyme', 'rosemary']` and `['zucchini', 'cucumber']` were removed when rosemary.md and zucchini.md were deleted (May 2026).

**Conclusion:** Do not plan comparison expansion as a Claude content task. Adding new pairs is a Copilot one-liner, not a sprint story.

---

## Structured Data Status (as of May 2026)

Already implemented on all pages:
- **Organization JSON-LD** — BaseLayout.astro (site-wide)
- **BreadcrumbList JSON-LD** — ContentLayout.astro (auto-generated from `breadcrumbs` prop; used on all crop and guide pages)
- **Article JSON-LD** — ArticleLayout.astro (all /roi/, /homestead/, /guides/ articles) and crops/[slug].astro

Gap:
- **FAQPage JSON-LD** — not implemented. Top crop pages are candidates for featured snippet capture via FAQ schema on common questions (days to maturity, yield per plant, companion plants). This is a Copilot task (S001).

---

## Zone Page Architecture

Zone pages at `/zone/[zone]/` are fully dynamic:
- Data lives in `src/data/zones.ts` — `ZONES` array and `ZONE_MAP`
- `src/pages/zone/[zone].astro` generates one page per zone (3–10)
- Crop classification (`direct-sow`, `start-indoors`, `marginal`, `not-recommended`) computed via `classifyCropForZone()` using frost-free days vs. crop days_min/days_max
- Zone pages currently have no editorial intro content — only auto-generated title/description and dynamic crop lists

**Planned:** Add `intro: string` field to `ZoneData` interface and render it above crop lists (S002, Copilot). Claude then fills in zone-specific editorial content (Z001–Z008).
