# Garden ROI Web — Task Backlog
_Last updated: April 6, 2026_

This is the **single source of truth** for all implementation work. Plan files (`ia-plan.md`, `seo-plan.md`, `content-plan.md`, `decisions.md`) are reference docs — this file is the tracker.

---

## How This Works

**Statuses:**
- `[ ]` — TODO, not started
- `[>]` — IN PROGRESS (only one task should be in this state at a time)
- `[?]` — NEEDS VERIFY (implemented, awaiting testing/confirmation)
- `[x]` — DONE (verified and complete)

**Session start protocol:** Read this file. Find the first `[>]` task and continue it. If none, start the first `[ ]` in the active sprint. Full methodology in `/Users/tlawson/.claude/skills/garden-roi-tasks/SKILL.md`.

**Story range mode:** When given specific IDs (e.g., "complete A001-A003"), work each in sequence. Do not skip ahead.

**Acceptance criteria are non-negotiable.** A task is not `[x]` until every criterion passes, not just when the code is written.

---

## Article Sprint — ROI & Homestead

### A001 — Create garlic-roi-analysis.md
**Status:** `[x]`
**Files:** `src/content/articles/garlic-roi-analysis.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Anchor ROI article for /roi/ section. Full per-clove cost math and multi-year economics.
**Details:**
- Per-clove cost: seed garlic $12-$20/lb, ~40-50 cloves/lb = $0.25-$0.40/clove (cite seed garlic suppliers)
- Retail price: USDA ERS domestic hardneck $5-$12/lb, conventional softneck $3-$5/lb
- Weight ROI: 1 lb seed -> 6-8 lb harvested = 6:1 to 8:1 return by weight
- Year 2+ economics: save largest heads to replant, seed cost = $0.00
- Storage premium: 6-9 month storage means one season covers household year-round
- Honest Year 1 costs vs. steady state
- Internal links: /crops/garlic/, /crops/tomato/, and related article /roi/raised-bed-break-even/
- CTA to /app/
- `publishDate: 2026-04-05`, `category: roi`, `featured: true`
**Acceptance:**
- All price/yield figures cited (USDA ERS or AMS)
- Zero em dashes
- No motivational closing paragraph
- `npx astro build` passes with 0 errors

---

### A002 — Create seeds-vs-transplants.md
**Status:** `[x]`
**Files:** `src/content/articles/seeds-vs-transplants.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Cost comparison - when seed wins, when transplant wins, with break-even math.
**Details:**
- Per-plant seed cost examples: tomato ~$0.25, pepper ~$0.35, basil ~$0.10
- Nursery transplant cost: $2-$6 per plant
- Break-even calculation: at what yield does the transplant premium pay off?
- Crops where transplant makes sense: peppers (long lead time, high per-plant value)
- Crops where seed always wins: beans, peas, carrots, arugula (don't transplant); basil (50 seeds cost $0.10)
- Time cost of starting indoors: 6-8 weeks management - is that worth $3-$5/plant savings?
- Zone 4-5: transplants often necessary for tomatoes and peppers to reach full yield in short season
- Internal links: /crops/tomato/, /crops/basil/, /crops/lettuce/, and related article /roi/first-three-years-roi/
- CTA to /app/
- `publishDate: 2026-04-05`, `category: roi`, `featured: false`
**Acceptance:**
- All figures cited or clearly calculated from stated inputs
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### A003 — Create first-three-years-roi.md
**Status:** `[x]`
**Files:** `src/content/articles/first-three-years-roi.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Honest year-by-year ROI timeline for a new garden from cold start.
**Details:**
- Year 1: Setup cost $185-$360 for 4x8 bed (from raised-bed-break-even article data). Realistic harvest $150-$250 if planted intelligently. Likely net negative.
- Year 2: Setup amortized. Annual inputs $45-$90 (seeds, amendments). Same bed returns $200-$350. Net positive $110-$260.
- Year 3+: Soil improves, skills improve, perennial crops (herbs, strawberries) add zero-input value, seed saving begins
- Compounding factors: better soil = better yield; saved seed = lower input cost; experience = fewer crop losses
- What derails the timeline: wrong crops, pest/disease losses, poor soil prep, not tracking
- Internal links: /crops/tomato/, /crops/garlic/, and related article /roi/raised-bed-break-even/
- CTA to /app/
- `publishDate: 2026-04-05`, `category: roi`, `featured: false`
**Acceptance:**
- Year 1/2/3 numbers grounded in cited data or clearly stated assumptions
- No "journey" language
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### A004 — Create canning-financial-case.md
**Status:** `[x]`
**Files:** `src/content/articles/canning-financial-case.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Financial case for home canning - when it pencils out, when it doesn't.
**Details:**
- Equipment costs: water bath canner $30-$50, pressure canner $80-$150, wide-mouth quart jars $12-$18/dozen, lids $4-$8/box of 12
- Per-jar processed cost: lid ~$0.35 + energy ~$0.08-$0.15 per jar
- When canning wins: 21 lbs surplus tomatoes -> ~9 quarts sauce. Store equivalent $4-$6/quart = $36-$54 retail value. Processing cost ~$3-$5.
- When canning doesn't win: low-value produce (zucchini at $0.80/lb), or buying produce specifically to can at summer retail prices
- Food safety: USDA Complete Guide to Home Canning and NCHFP - acidic foods for water bath, low-acid require pressure canning
- Internal links: /crops/tomato/, /crops/green-bean/, and related article /homestead/beginner-homestead-crops/
- CTA to /app/
- `publishDate: 2026-04-05`, `category: homestead`, `featured: false`
**Acceptance:**
- Equipment costs cited or documented as survey ranges
- NCHFP cited for safety guidance
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### A005 — Create soil-ph-by-crop.md
**Status:** `[x]`
**Files:** `src/content/articles/soil-ph-by-crop.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Practical soil pH reference with nutrient lockout mechanism explained and pH chart by crop family.
**Details:**
- Why pH matters: phosphorus locks out above 7.5 and below 5.5; iron/manganese toxic at low pH; N-fixing bacteria pH-sensitive
- pH ranges by crop family (cite Penn State Extension, OSU Extension, or similar):
  - Brassicas: 6.0-7.5 (higher end reduces clubroot)
  - Nightshades: 6.0-6.8
  - Cucurbits: 6.0-6.8
  - Legumes: 6.0-7.0 (nodulation drops at low pH)
  - Root crops: 6.0-7.0
  - Leafy greens: 6.0-7.0
  - Alliums: 6.0-7.0
  - Strawberries: 5.5-6.5
  - Blueberries: 4.5-5.5 (the outlier - explain why they can't be grown with other crops)
- Adjustment: lime raises pH, elemental sulfur lowers. Application rates and lead time.
- Soil test: $15-$25 from land-grant extension lab. Payback math on the test.
- Internal links: /crops/tomato/, /crops/kale/, and related article /guides/companion-planting-basics/
- `publishDate: 2026-04-05`, `category: care`, `featured: false`
**Acceptance:**
- pH ranges cited to extension sources
- Adjustment rates cited
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### A006 — Create succession-planting-calendar.md
**Status:** `[x]`
**Files:** `src/content/articles/succession-planting-calendar.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Week-by-week succession planting calendar for Zones 5/6 with extrapolation guide for other zones.
**Details:**
- Core principle with concrete example: three lettuce plantings 2 weeks apart vs. one large planting
- Calendar in frost-relative dates (zone-portable):
  - 8-10 wks before last frost: Start peppers indoors
  - 6-8 wks: Start tomatoes, eggplant; direct sow spinach/peas/radishes
  - 4-6 wks: Direct sow lettuce, arugula; start basil, cucumbers indoors
  - 2-4 wks: Direct sow kale, chard; first lettuce succession
  - Last frost: Transplant tomatoes, peppers; direct sow beans, cucumbers, squash
  - 2-4 wks after: Second lettuce/arugula succession; more beans
  - 6-8 wks after: Third lettuce succession; start fall brassica transplants
  - 8-10 wks before first fall frost: Transplant fall kale/broccoli; direct sow fall lettuce/arugula/spinach
  - 4-6 wks before first fall frost: Final arugula/spinach succession
- Extrapolation guide: Zone 4 = shift spring dates ~2 weeks later; Zone 7 = shift ~2-3 weeks earlier
- Link USDA zone map: https://planthardiness.ars.usda.gov/
- ROI connection: consistent harvest = consistent grocery savings; lumpy harvest = waste or giveaways
- Internal links: /crops/lettuce/, /crops/arugula/, /crops/radish/, and related article /guides/spring-garden-planning/
- `publishDate: 2026-04-05`, `category: planning`, `featured: false`
**Acceptance:**
- Calendar uses frost-relative dates throughout (not calendar months)
- USDA zone map URL present
- Zero em dashes
- `npx astro build` passes with 0 errors

---

## Plant Sprint — Tier 2 (P008-P015)

---

### P008 — spinach.md ✓
**Goal:** Create `src/content/plants/spinach.md`
**Details:**
- `scientific_name: Spinacia oleracea`, `category: Vegetable`
- `days_min: 37`, `days_max: 50`, `avg_yield_lb: 0.5`, `avg_price_lb: 3.50`, `seed_cost: 2.99`
- Cool-season, cut-and-come-again, bolts in heat - angle body copy on spring/fall windows
- Cite USDA AMS for price range $3-5/lb
- `companion_plants`: ["strawberry", "garlic"]
**Acceptance:**
- All required frontmatter fields present and valid
- Body copy covers ROI angle, planting timing, bolting risk
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### P009 — carrot.md ✓
**Goal:** Create `src/content/plants/carrot.md`
**Details:**
- `scientific_name: Daucus carota`, `category: Vegetable`
- `days_min: 70`, `days_max: 80`, `avg_yield_lb: 1.0`, `avg_price_lb: 1.75`, `seed_cost: 2.49`
- Direct sow only, loose soil requirement, thinning critical - cover these honestly
- Price $1.50-2.50/lb; ROI angle is freshness and variety access (rainbow types $4-6/lb specialty)
- Cite USDA AMS for conventional price; mention specialty variety premium
- `companion_plants`: ["tomato", "lettuce"]
**Acceptance:**
- All required frontmatter fields present and valid
- Body copy covers direct-sow requirement, soil prep, and variety value angle
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### P010 — radish.md ✓
**Goal:** Create `src/content/plants/radish.md`
**Details:**
- `scientific_name: Raphanus sativus`, `category: Vegetable`
- `days_min: 25`, `days_max: 30`, `avg_yield_lb: 0.5`, `avg_price_lb: 2.50`, `seed_cost: 1.99`
- 25-day cycle = fastest vegetable, succession planting every 2 weeks is core advice
- Companion planting role: aphid trap crop for brassicas - cite extension source
- Cite USDA AMS for $2-3/lb price range
- `companion_plants`: ["kale", "arugula"]
**Acceptance:**
- All required frontmatter fields present and valid
- Body copy emphasizes succession planting math and companion planting role
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### P011 — zucchini.md ✓
**Goal:** Create `src/content/plants/zucchini.md`
**Details:**
- `scientific_name: Cucurbita pepo`, `category: Vegetable`
- `days_min: 50`, `days_max: 65`, `avg_yield_lb: 10`, `avg_price_lb: 1.00`, `seed_cost: 2.99`
- Honest ROI section: high yield but low price per lb, value is in early-season availability and preservation
- Cover preservation angle: freezing shredded zucchini for baking (eliminates store purchases)
- Cite USDA AMS $0.80-1.20/lb; cite extension for yield estimates
- `companion_plants`: ["basil", "mint"]
**Acceptance:**
- All required frontmatter fields present and valid
- Body copy is honest about price/lb, pivots to volume and preservation ROI
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### P012 — broccoli.md ✓
**Goal:** Create `src/content/plants/broccoli.md`
**Details:**
- `scientific_name: Brassica oleracea var. italica`, `category: Vegetable`
- `days_min: 80`, `days_max: 100`, `avg_yield_lb: 1.5`, `avg_price_lb: 2.50`, `seed_cost: 3.49`
- Secondary shoot value: after main head, side shoots continue for weeks - factor into ROI
- Timing critical: transplant 6-8 weeks before first frost for fall crop; direct sow 10-12 weeks before
- Cite USDA AMS for $2-3/lb; cite extension for secondary shoot yield
- `companion_plants`: ["mint", "arugula"]
**Acceptance:**
- All required frontmatter fields present and valid
- Body copy covers secondary shoot harvest and timing windows
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### P013 — swiss-chard.md ✓
**Goal:** Create `src/content/plants/swiss-chard.md`
**Details:**
- `scientific_name: Beta vulgaris var. cicla`, `category: Vegetable`
- `days_min: 55`, `days_max: 70`, `avg_yield_lb: 1.0`, `avg_price_lb: 3.50`, `seed_cost: 2.49`
- Heat-tolerant alternative to spinach - explicitly position it this way in body copy
- Cut-and-come-again harvest method, single planting lasts full season
- Cite USDA AMS for $3-4/lb; cite extension for heat tolerance vs spinach
- `companion_plants`: ["garlic", "strawberry"]
**Acceptance:**
- All required frontmatter fields present and valid
- Body copy positions chard as the summer spinach alternative with data
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### P014 — sweet-pepper.md ✓
**Goal:** Create `src/content/plants/sweet-pepper.md`
**Details:**
- `scientific_name: Capsicum annuum`, `category: Vegetable`
- `days_min: 70`, `days_max: 90`, `avg_yield_lb: 2.0`, `avg_price_lb: 3.00`, `seed_cost: 3.99`
- Separate from hot-pepper.md - different audience and use case
- Long season payback: slow start, heavy production once established in heat
- Bell peppers $2-4/lb retail; colored bells (red/yellow) $4-6/lb - ROI angle is growing colored types
- Cite USDA AMS for price data; cite extension for yield
- `companion_plants`: ["basil", "tomato"]
**Acceptance:**
- All required frontmatter fields present and valid
- Body copy covers colored vs green price premium and heat requirements
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### P015 — eggplant.md ✓
**Goal:** Create `src/content/plants/eggplant.md`
**Details:**
- `scientific_name: Solanum melongena`, `category: Vegetable`
- `days_min: 70`, `days_max: 85`, `avg_yield_lb: 3.0`, `avg_price_lb: 2.50`, `seed_cost: 3.49`
- Asian varieties (Japanese, Chinese) are more productive than Italian globe types - make this the ROI angle
- Heat-lover: needs warm soil, benefits from black plastic mulch in northern zones
- Cite USDA AMS for $2-3/lb; cite extension for variety productivity comparisons
- `companion_plants`: ["basil", "tomato"]
**Acceptance:**
- All required frontmatter fields present and valid
- Body copy covers Asian variety advantage and heat requirement
- Zero em dashes
- `npx astro build` passes with 0 errors

---

## Article Sprint (A007-A012)

---

### A007 — composting-roi.md ✓
**Goal:** Create `src/content/articles/composting-roi.md`
**Details:**
- `title: "Composting ROI: What a Backyard Pile Actually Saves You"`
- `description:` 150-160 chars, keyword-first on "composting ROI"
- `category: homestead`, `publishDate: 2026-04-07`, `featured: false`
- Core math: bagged compost costs $8-15/bag; a 3-bin system produces equivalent of 20-30 bags/year
- Cover materials (leaves, kitchen scraps, grass clippings) as free inputs
- Cite USDA ARS for compost carbon sequestration data; cite extension for cost comparisons
- Internal links: /crops/tomato/, /crops/kale/, and related article /homestead/beginner-homestead-crops/
**Acceptance:**
- Frontmatter complete and valid
- Math is explicit: cost per yard of bagged vs homemade
- No invented numbers - all figures cited
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### A008 — seed-saving-guide.md ✓
**Goal:** Create `src/content/articles/seed-saving-guide.md`
**Details:**
- `title: "Seed Saving: Which Crops to Start With and What It Saves"`
- `description:` 150-160 chars, keyword-first on "seed saving"
- `category: homestead`, `publishDate: 2026-04-08`, `featured: false`
- Self-pollinators only for beginners: tomato, pepper, bean, pea, lettuce - explain why (no isolation needed)
- 10-year cost elimination math: avg packet $3.50, 5 crops saved = $17.50/yr = $175 over 10 years
- Briefly cover storage: cool/dry/dark, paper envelopes, viability years per crop
- Internal links: 2 crop pages (tomato, green-bean or garden-pea) + 1 related article
**Acceptance:**
- Frontmatter complete and valid
- Self-pollinator list is accurate and explained
- 10-year math is explicit
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### A009 — best-crops-by-zone.md ✓
**Goal:** Create `src/content/articles/best-crops-by-zone.md`
**Details:**
- `title: "Highest ROI Crops by USDA Hardiness Zone"`
- `description:` 150-160 chars, keyword-first on "best crops by zone"
- `category: planning`, `publishDate: 2026-04-09`, `featured: false`
- Cover zones 3-9, 2-3 top crops per zone with brief reasoning (growing season length, price, yield)
- Use data from variety_library.json and USDA AMS for price validation
- Link to USDA zone map (already established URL from spring-garden-planning.md)
- Internal links: /crops/garlic/, /crops/tomato/, /crops/lettuce/, /crops/kale/, and related article /guides/spring-garden-planning/
**Acceptance:**
- Frontmatter complete and valid
- Zone 3-9 coverage is explicit and reasoned
- All price figures cited
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### A010 — freezing-vs-canning.md ✓
**Goal:** Create `src/content/articles/freezing-vs-canning.md`
**Details:**
- `title: "Freezing vs. Canning: Which Preservation Method Pencils Out"`
- `description:` 150-160 chars, keyword-first on "freezing vs canning"
- `category: homestead`, `publishDate: 2026-04-10`, `featured: false`
- No-equipment preservation angle: freezing requires only bags/containers vs canning startup cost ($80-150)
- Freezing payback: immediate; canning payback: 3-5 seasons depending on volume
- What freezes well vs what needs canning (tomatoes/pickles vs corn/peas/beans)
- Cite USDA NCHFP for safe preservation guidance; cite extension for cost comparisons
- Internal links: 2 crop pages (zucchini, tomato or green-bean) + 1 related article
**Acceptance:**
- Frontmatter complete and valid
- Cost comparison is explicit with cited figures
- USDA NCHFP cited for safety guidance
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### A011 — cover-crops-101.md ✓
**Goal:** Create `src/content/articles/cover-crops-101.md`
**Details:**
- `title: "Cover Crops 101: The No-Cost Way to Build Soil Between Seasons"`
- `description:` 150-160 chars, keyword-first on "cover crops"
- `category: homestead`, `publishDate: 2026-04-11`, `featured: false`
- Focus on crimson clover nitrogen fixation: SARE data shows 70-150 lbs N/acre
- Convert to backyard scale: a 100 sq ft bed fixed ~0.15-0.35 lbs N = $0.25-0.60 worth of fertilizer
- Also cover weed suppression ROI: fewer hours weeding next season
- Seed cost: crimson clover $2-4/lb, covers 300-500 sq ft
- Cite SARE (Sustainable Agriculture Research & Education) for nitrogen data; cite extension for weed suppression
- Internal links: /crops/garlic/, /crops/kale/, and related article /guides/spring-garden-planning/
**Acceptance:**
- Frontmatter complete and valid
- N-fixation math converted to backyard scale
- SARE cited explicitly
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### A012 — water-cost-per-crop.md ✓
**Goal:** Create `src/content/articles/water-cost-per-crop.md`
**Details:**
- `title: "Water Cost by Crop: What You Actually Pay to Irrigate a Garden"`
- `description:` 150-160 chars, keyword-first on "water cost garden"
- `category: roi`, `publishDate: 2026-04-12`, `featured: false`
- Use EPA WaterSense data for average water rates ($0.004-0.009 per gallon in US)
- Per-crop water use from extension sources: tomatoes ~1-2 gal/day, lettuce ~0.5 gal/day
- Drip vs hand water: drip reduces use 30-50% per EPA WaterSense
- Build a simple cost table: crop | water/week | cost/season at avg rate
- Internal links: 2 crop pages (tomato, lettuce or cucumber) + 1 related article
**Acceptance:**
- Frontmatter complete and valid
- EPA WaterSense cited for water rates and drip efficiency
- Cost table present with at least 5 crops
- Zero em dashes
- `npx astro build` passes with 0 errors

---

## Feature Sprint (F001-F007)

_These stories came out of an external product review. Each is independent - any agent can pick one up. Ordered by impact._

---

### F001 — Fix 800+ Varieties Copy on app.astro
**Status:** `[x]`
**Agent fit:** Any — copy-only change, no code knowledge required.
**Files:** `src/pages/app.astro`
**What:** The page claims "800+ varieties" without distinguishing web vs. app. Users arriving at the website see 14 crop pages and feel misled.
**Details:**
- Find all references to "800+" or "800 varieties" in `src/pages/app.astro`
- Add a clarifying sentence near each mention, e.g.: "The app includes the full 800+ variety database. The web library features the highest-ROI crops with in-depth growing and financial guides."
- Do not remove the 800+ claim - it's a selling point for the app. Just contextualize it.
- Anchor text must be descriptive — no "click here"
**Acceptance:**
- The web/app library distinction is explicit in the copy
- No claim feels misleading relative to the website's current crop count
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### F002 — Convert Background Images to WebP
**Status:** `[x]`
**Agent fit:** Terminal-capable agent (needs ImageMagick or cffmpeg, or Node sharp script).
**Files:** `public/bg-1.png`, `public/bg-2.png`, and any component referencing them
**What:** PNG background images are larger than necessary. Convert to WebP to reduce payload on mobile.
**Details:**
- Identify all .png background images in `public/` referenced in components or pages
- Convert each to .webp using `cwebp`, ImageMagick `convert`, or a Node script with `sharp`
- Update all references (CSS `background-image`, `src=`, etc.) to point to the .webp versions
- Keep the original .png as fallback only if a `<picture>` element is used; otherwise delete after verifying WebP references work
- Target: each background image under 200KB
**Acceptance:**
- No component or page references the old .png filenames
- `npx astro build` passes with 0 errors
- Image file sizes confirmed in terminal output

---

### F003 — ROI Calculator Component
**Status:** `[x]`
**Agent fit:** Frontend dev agent - Astro component + vanilla JS, no backend.
**Files:** `src/components/RoiCalculator.astro` (new), embed in `src/pages/index.astro` or `src/pages/app.astro`
**What:** A client-side quick savings estimator. User picks a crop, enters plant count, sees estimated seasonal savings. This is the strongest conversion hook - immediate value before app download.
**Details:**
- Component inputs: crop selector (dropdown of crops from content collection), number of plants (number input, 1-20)
- Output: "Estimated Seasonal Savings: $X.XX" based on `avg_yield_lb * avg_price_lb * plants`
- Use `client:load` directive so it's interactive
- Pull crop data from a static JSON endpoint (`/api/plants.json` already exists - use it) or hardcode top 10 crops as a data array in the component
- Style with existing CSS custom properties from `theme.css` - no hardcoded values
- Add a subtext below the result: "Track your actual harvest in the Garden ROI app to see real savings vs. estimates."
- Link subtext CTA to `/app/`
- Embed the component in a visible location on the homepage (`src/pages/index.astro`) above the fold
**Acceptance:**
- Calculator shows a result on crop selection + plant count change (no submit button needed)
- Result updates reactively as inputs change
- Mobile responsive
- No hardcoded colors or spacing
- Zero inline styles
- `npx astro build` passes with 0 errors

---

### F004 — Add Sort Options to /crops Index
**Status:** `[x]`
**Agent fit:** Frontend dev agent - client-side JS sort on existing rendered list.
**Files:** `src/pages/crops/index.astro`
**What:** Currently sorts by ROI only. Add "Days to Harvest" and "Price per Pound" sort options.
**Details:**
- Add a sort control bar above the crop grid (3 buttons or a `<select>`): "Best ROI" | "Fastest Harvest" | "Highest Price/lb"
- Sort logic runs client-side on the already-rendered crop cards using `data-*` attributes
- Add `data-roi`, `data-days`, `data-price` attributes to each crop card at render time in Astro
- "Fastest Harvest" sorts by `days_min` ascending
- "Highest Price/lb" sorts by `avg_price_lb` descending
- "Best ROI" is `avg_yield_lb * avg_price_lb` descending (existing default)
- Style controls with CSS custom properties - active sort state uses `--color-active-gold`
- No page reload on sort change
**Acceptance:**
- All three sort modes work correctly
- Active sort button is visually indicated
- Crop count doesn't change between sorts (no filtering, just reordering)
- `npx astro build` passes with 0 errors

---

### F005 — Add Search to /crops Index with Pagefind
**Status:** `[x]`
**Agent fit:** Frontend dev agent comfortable with Astro build integrations.
**Files:** `astro.config.mjs`, `src/pages/crops/index.astro`, `package.json`
**What:** Add a search bar to the /crops index using Pagefind, which indexes at build time and runs client-side. No backend needed.
**Details:**
- Install Pagefind: `npm install pagefind` and add the Astro integration per Pagefind docs (https://pagefind.app/docs/astro/)
- Scope search to crop pages only (Pagefind supports `data-pagefind-body` attribute to limit indexing)
- Add `data-pagefind-body` to the main content area in `src/pages/crops/[slug].astro`
- Add search UI to `src/pages/crops/index.astro` above the crop grid using Pagefind's default UI or a custom `<input>` with Pagefind JS API
- Style search input with CSS custom properties; no hardcoded values
- Search results should filter the displayed crop cards, not navigate to a new page
**Acceptance:**
- Typing in the search bar filters the visible crop cards
- Search scoped to crop content only (not articles)
- `npx astro build` passes with 0 errors
- Build output includes Pagefind index files in `dist/`

---

### F006 — Rotating "Garden Fact" on Homepage
**Status:** `[x]`
**Agent fit:** Any frontend agent - small component, uses existing data endpoint.
**Files:** `src/components/GardenFact.astro` (new), `src/pages/index.astro`
**What:** Surface a rotating fact or ROI stat on the homepage using the existing `/api/tips.json` endpoint. Makes the site feel active and data-driven.
**Details:**
- Create `GardenFact.astro` component with `client:load`
- On mount, fetch `/api/tips.json` and display a randomly selected tip
- Show tip text and a "Another fact" button that picks a new random tip from the array
- Keep it compact: one sentence of tip text, one button, no modal or overlay
- Place it in a visually distinct "Did you know?" callout block on `src/pages/index.astro`
- Style with CSS custom properties; use `--color-secondary` or `--color-tab-bar` for the callout background to distinguish from page background
- No hardcoded colors
**Acceptance:**
- A random tip displays on page load
- Button cycles to a different random tip without repeating the same tip twice in a row
- `npx astro build` passes with 0 errors

---

### F007 — CollectionPage Schema on /crops Index
**Status:** `[x]`
**Agent fit:** Any agent comfortable with JSON-LD structured data.
**Files:** `src/pages/crops/index.astro`
**What:** Add `CollectionPage` JSON-LD schema to the /crops index so Google understands it as a crop database, not just a list of links.
**Details:**
- Add a `<script type="application/ld+json">` block to `src/pages/crops/index.astro`
- Schema type: `CollectionPage` with `hasPart` listing each crop as a `ListItem` pointing to its canonical URL
- Generate the `hasPart` array dynamically from the same content collection query already used to render the page
- Include: `@type`, `name`, `description`, `url` (canonical), `hasPart[]` with `@type: ListItem`, `url`, `name` per crop
- Use the site's canonical base URL from `astro.config.mjs` (already defined as `site`)
**Acceptance:**
- JSON-LD block is present and valid (test with Google Rich Results Test or schema.org validator)
- `hasPart` count matches the number of crop cards on the page
- `npx astro build` passes with 0 errors

---

## Content Articles (A013-A014)

---

### A013 — how-to-measure-yield.md
**Status:** `[x]`
**Files:** `src/content/articles/how-to-measure-yield.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Practical guide to measuring garden yield so users can trust the ROI numbers.
**Details:**
- `title: "How to Measure Garden Yield: Kitchen Scale vs. Estimating"`, `category: roi`, `publishDate: 2026-04-13`, `featured: false`
- Kitchen scale method: weigh every harvest immediately, log in app - most accurate
- Estimating method: count × average weight per item (cite USDA AMS average weights per commodity)
- What to do with herbs: bunch weight vs. stem count
- Common mistakes: weighing after trimming (you lose weight), not logging small harvests
- Internal links: /crops/tomato/, /crops/lettuce/, related article /roi/garlic-roi-analysis/
**Acceptance:**
- USDA AMS cited for average commodity weights
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### A014 — how-to-find-local-prices.md
**Status:** `[x]`
**Files:** `src/content/articles/how-to-find-local-prices.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Teaches users how to find their actual local retail prices to get accurate ROI numbers.
**Details:**
- `title: "How to Find Local Produce Prices for Accurate Garden ROI"`, `category: roi`, `publishDate: 2026-04-14`, `featured: false`
- Why national averages understate ROI in high-cost cities and overstate it in rural areas
- Method 1: USDA AMS local market reports (free, weekly, by region) - link to ams.usda.gov/market-news
- Method 2: Check your grocery store receipt - photograph it, log the per-lb price
- Method 3: Farmers market premium - often 2-3x grocery for same crop
- The app uses national USDA averages as defaults - override with your local price for accurate numbers
- Internal links: /crops/tomato/, /crops/garlic/, related article /roi/first-three-years-roi/
**Acceptance:**
- USDA AMS market news URL present and accurate
- Zero em dashes
- `npx astro build` passes with 0 errors

---

## Deployment & Infrastructure (D001-D003)

---

### D001 — Deploy to gardenroi.com via GitHub Pages
**Status:** `[x]`
**Agent fit:** Terminal-capable agent with git access.
**Files:** `.github/workflows/deploy.yml` (create or verify), `astro.config.mjs`
**What:** The site has never shipped to gardenroi.com. Get it live.
**Details:**
- Check if `.github/workflows/deploy.yml` exists and is correctly configured for GitHub Pages
- `astro.config.mjs` must have `site: 'https://gardenroi.com'` and `base: '/'`
- Workflow should: checkout → install → `npm run build` → `npx pagefind --site dist` → deploy `dist/` to `gh-pages` branch
- Verify GitHub Pages is configured to serve from `gh-pages` branch in repo settings
- Do NOT push or trigger deployment without user confirmation - just verify config is correct and report what needs to happen
**Acceptance:**
- `.github/workflows/deploy.yml` exists and is syntactically valid
- `astro.config.mjs` has correct `site` URL
- Report any manual steps needed (repo settings, secrets, etc.)

---

### D002 — Verify App Store Links on /app page
**Status:** `[x]`
**Agent fit:** Any agent.
**Files:** `src/pages/app.astro`, `src/components/AppStoreBadges.astro`
**What:** The iOS and Android download buttons currently have placeholder or missing URLs. Verify and update with real store URLs when they are available.
**Details:**
- Open `src/components/AppStoreBadges.astro` and `src/pages/app.astro`
- Find all App Store and Google Play link `href` values
- Report what URLs are currently set - do not change them without the user providing the real store URLs
- If URLs are placeholder (`#`, `/`, empty), flag them clearly
**Acceptance:**
- Report of current link state delivered to user
- No changes made without user-provided store URLs

---

### D003 — Hero Images for Crop and Article Pages
**Status:** `[ ]`
**Agent fit:** Any agent (asset sourcing is a human task - this story is for wiring them up once images exist).
**Files:** `src/content/plants/*.md`, `src/content/articles/*.md`, `public/images/`
**What:** All 22 crop pages and 16 article pages are missing hero images. The `hero_image` field is in the schema and used in the template - it just needs images and frontmatter entries.
**Details:**
- Images should be placed in `public/images/crops/[slug].webp` and `public/images/articles/[slug].webp`
- Each file gets: `hero_image: /images/crops/[slug].webp` in frontmatter
- All images must have explicit `width` and `height` in the template `<img>` tag (already handled in template)
- This story should only be started when actual image assets exist in `public/images/`
- Do not generate placeholder images - wait for real assets
**Acceptance:**
- All crop and article pages with a `hero_image` frontmatter value render the image without error
- `npx astro build` passes with 0 errors

---

## Plant Expansion Sprint — Batch 1 (P016-P025)

---

### P016 — corn.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/corn.md`
- `scientific_name: Zea mays`, `category: Vegetable`, `days_min: 65`, `days_max: 90`
- `avg_yield_lb: 0.5`, `avg_price_lb: 0.80`, `seed_cost: 2.99`
- ROI angle: ears of sweet corn at $0.50-1.00 each retail vs. $0.06/seed. Space-hungry - be honest about sq ft cost.
- Cite USDA AMS for price; cite extension for spacing requirements
- `companion_plants`: ["green-bean", "zucchini"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P017 — beet.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/beet.md`
- `scientific_name: Beta vulgaris subsp. vulgaris`, `category: Vegetable`, `days_min: 55`, `days_max: 70`
- `avg_yield_lb: 0.5`, `avg_price_lb: 2.50`, `seed_cost: 2.49`
- ROI angle: dual harvest - roots AND greens. Greens are free bonus. Specialty varieties (Chioggia) $4-6/lb.
- Cite USDA AMS; mention greens value separately
- `companion_plants`: ["kale", "arugula"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P018 — onion.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/onion.md`
- `scientific_name: Allium cepa`, `category: Vegetable`, `days_min: 90`, `days_max: 120`
- `avg_yield_lb: 0.75`, `avg_price_lb: 1.50`, `seed_cost: 2.99`
- ROI angle: storage crop - one harvest lasts 6-8 months. Bulk value. Sets vs. seed economics.
- Cite USDA AMS for $1-2/lb; extension for storage duration
- `companion_plants`: ["tomato", "carrot"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P019 — potato.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/potato.md`
- `scientific_name: Solanum tuberosum`, `category: Vegetable`, `days_min: 70`, `days_max: 90`
- `avg_yield_lb: 5.0`, `avg_price_lb: 1.25`, `seed_cost: 4.99`
- ROI angle: high yield per plant, long storage, fingerling/purple varieties $3-5/lb specialty premium
- Cite USDA AMS; note seed potato cost vs. grocery potato (don't use grocery store potatoes)
- `companion_plants`: ["green-bean", "mint"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P020 — sweet-potato.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/sweet-potato.md`
- `scientific_name: Ipomoea batatas`, `category: Vegetable`, `days_min: 90`, `days_max: 120`
- `avg_yield_lb: 4.0`, `avg_price_lb: 1.75`, `seed_cost: 3.99`
- ROI angle: slip propagation means year 2+ input cost drops to near zero. Heat-lover, long season.
- Cite USDA AMS for $1.50-2.50/lb; extension for slip production
- `companion_plants`: ["arugula", "spinach"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P021 — pumpkin.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/pumpkin.md`
- `scientific_name: Cucurbita pepo`, `category: Vegetable`, `days_min: 90`, `days_max: 120`
- `avg_yield_lb: 12.0`, `avg_price_lb: 0.75`, `seed_cost: 2.99`
- ROI angle: high yield but low price/lb. Value is in specialty/pie pumpkins ($2-4/lb) vs carving types. Space-hungry warning.
- Cite USDA AMS; note pie vs. carving variety price difference
- `companion_plants`: ["corn", "green-bean"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P022 — butternut-squash.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/butternut-squash.md`
- `scientific_name: Cucurbita moschata`, `category: Vegetable`, `days_min: 85`, `days_max: 110`
- `avg_yield_lb: 5.0`, `avg_price_lb: 1.75`, `seed_cost: 2.99`
- ROI angle: 3-6 month storage window stretches the value season. One vine = 3-5 squash.
- Cite USDA AMS for $1.50-2.50/lb; extension for storage duration
- `companion_plants`: ["corn", "radish"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P023 — cabbage.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/cabbage.md`
- `scientific_name: Brassica oleracea var. capitata`, `category: Vegetable`, `days_min: 70`, `days_max: 120`
- `avg_yield_lb: 3.0`, `avg_price_lb: 1.25`, `seed_cost: 2.49`
- ROI angle: fermentation (sauerkraut/kimchi) multiplies value - $6-10/lb retail. Storage crop.
- Cite USDA AMS; mention fermentation value angle
- `companion_plants`: ["mint", "arugula"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P024 — cauliflower.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/cauliflower.md`
- `scientific_name: Brassica oleracea var. botrytis`, `category: Vegetable`, `days_min: 80`, `days_max: 100`
- `avg_yield_lb: 2.0`, `avg_price_lb: 3.50`, `seed_cost: 3.49`
- ROI angle: colored varieties (orange, purple, romanesco) fetch $5-8/lb. Timing critical - heat ruins head.
- Cite USDA AMS for $3-5/lb; extension for blanching technique to protect head
- `companion_plants`: ["mint", "garlic"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P025 — brussels-sprouts.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/brussels-sprouts.md`
- `scientific_name: Brassica oleracea var. gemmifera`, `category: Vegetable`, `days_min: 85`, `days_max: 110`
- `avg_yield_lb: 1.5`, `avg_price_lb: 4.50`, `seed_cost: 2.99`
- ROI angle: highest $ per plant of all brassicas. Frost improves flavor - fall timing is the key.
- Cite USDA AMS for $4-6/lb; extension for frost sweetening effect
- `companion_plants`: ["mint", "garlic"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

## Plant Expansion Sprint — Batch 2 (P026-P035)

---

### P026 — cilantro.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/cilantro.md`
- `scientific_name: Coriandrum sativum`, `category: Herb`, `days_min: 45`, `days_max: 60`
- `avg_yield_lb: 0.25`, `avg_price_lb: 6.00`, `seed_cost: 1.99`
- ROI angle: $4-8/lb retail, bolts fast - succession plant every 3 weeks. Coriander seed = bonus harvest.
- Cite USDA AMS; mention coriander seed dual use
- `companion_plants`: ["tomato", "spinach"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P027 — parsley.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/parsley.md`
- `scientific_name: Petroselinum crispum`, `category: Herb`, `days_min: 70`, `days_max: 90`
- `avg_yield_lb: 0.5`, `avg_price_lb: 6.00`, `seed_cost: 2.49`
- ROI angle: biennial, survives winter in zones 6+. Cut-and-come-again, high restaurant/market value.
- Cite USDA AMS for $5-8/lb; note flat vs. curly variety demand
- `companion_plants`: ["tomato", "arugula"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P028 — dill.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/dill.md`
- `scientific_name: Anethum graveolens`, `category: Herb`, `days_min: 40`, `days_max: 60`
- `avg_yield_lb: 0.25`, `avg_price_lb: 5.50`, `seed_cost: 1.99`
- ROI angle: dill heads for pickling = high value. Fronds + seeds = two harvests. Self-sows freely.
- Cite USDA AMS; note pickling use and seed harvest
- `companion_plants`: ["cucumber", "lettuce"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P029 — oregano.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/oregano.md`
- `scientific_name: Origanum vulgare`, `category: Herb`, `days_min: 80`, `days_max: 90`
- `avg_yield_lb: 0.5`, `avg_price_lb: 10.00`, `seed_cost: 2.49`
- ROI angle: perennial in zones 5+, so year 2+ input = $0. Dried weight is concentrated value.
- Cite USDA AMS for $8-12/lb fresh; note dried multiplier
- `companion_plants`: ["tomato", "sweet-pepper"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P030 — thyme.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/thyme.md`
- `scientific_name: Thymus vulgaris`, `category: Herb`, `days_min: 90`, `days_max: 180`
- `avg_yield_lb: 0.25`, `avg_price_lb: 12.00`, `seed_cost: 2.99`
- ROI angle: perennial in zones 5+, woody shrub lives 3-5 years. French thyme vs. common - flavor difference.
- Cite USDA AMS for $10-15/lb; extension for perennial management
- `companion_plants`: ["tomato", "eggplant"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P031 — chives.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/chives.md`
- `scientific_name: Allium schoenoprasum`, `category: Herb`, `days_min: 60`, `days_max: 90`
- `avg_yield_lb: 0.25`, `avg_price_lb: 8.00`, `seed_cost: 2.49`
- ROI angle: perennial, divides every 3 years (free propagation), edible flowers are bonus. Near-zero ongoing cost.
- Cite USDA AMS; mention dividing for free new plants
- `companion_plants`: ["tomato", "carrot"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P032 — sage.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/sage.md`
- `scientific_name: Salvia officinalis`, `category: Herb`, `days_min: 75`, `days_max: 90`
- `avg_yield_lb: 0.5`, `avg_price_lb: 10.00`, `seed_cost: 2.99`
- ROI angle: perennial shrub, zones 5+. Harvest spring and fall for best flavor. Dried sage = concentrated value.
- Cite USDA AMS for $8-12/lb; note fresh vs. dried economics
- `companion_plants`: ["tomato", "cabbage"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P033 — leek.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/leek.md`
- `scientific_name: Allium ampeloprasum`, `category: Vegetable`, `days_min: 100`, `days_max: 130`
- `avg_yield_lb: 0.75`, `avg_price_lb: 3.50`, `seed_cost: 2.99`
- ROI angle: $3-5/lb retail, long season but low input after transplant. Winter-hardy varieties survive frost.
- Cite USDA AMS; note winter hardiness for extended harvest
- `companion_plants`: ["carrot", "arugula"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P034 — collard-greens.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/collard-greens.md`
- `scientific_name: Brassica oleracea var. viridis`, `category: Vegetable`, `days_min: 60`, `days_max: 75`
- `avg_yield_lb: 1.0`, `avg_price_lb: 2.50`, `seed_cost: 2.49`
- ROI angle: heat-tolerant when kale bolts. Cut-and-come-again. Southern staple with long harvest window.
- Cite USDA AMS for $2-4/lb; extension for heat tolerance vs. other brassicas
- `companion_plants`: ["garlic", "mint"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P035 — bok-choy.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/bok-choy.md`
- `scientific_name: Brassica rapa subsp. chinensis`, `category: Vegetable`, `days_min: 45`, `days_max: 60`
- `avg_yield_lb: 1.0`, `avg_price_lb: 2.50`, `seed_cost: 2.49`
- ROI angle: fast-growing cool-season, $2-4/lb retail, baby bok choy at 30 days fetches premium price.
- Cite USDA AMS; note baby vs. full size pricing
- `companion_plants`: ["garlic", "radish"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

## Plant Expansion Sprint — Batch 3 (P036-P045)

---

### P036 — blueberry.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/blueberry.md`
- `scientific_name: Vaccinium corymbosum`, `category: Fruit`, `days_min: 60`, `days_max: 90`
- `avg_yield_lb: 5.0`, `avg_price_lb: 5.00`, `seed_cost: 8.99`
- ROI angle: Year 1-2 establishment, year 3+ yields 5-10 lb/bush at $5-8/lb. 20-year productive life = massive long-term ROI.
- Cite USDA AMS for $4-8/lb; extension for soil pH requirement (4.5-5.5)
- `companion_plants`: ["strawberry", "arugula"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P037 — raspberry.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/raspberry.md`
- `scientific_name: Rubus idaeus`, `category: Fruit`, `days_min: 60`, `days_max: 90`
- `avg_yield_lb: 2.0`, `avg_price_lb: 6.00`, `seed_cost: 4.99`
- ROI angle: $5-8/lb, spreads via suckers (free new plants), everbearing varieties give two crops/year.
- Cite USDA AMS; note sucker propagation economics
- `companion_plants`: ["garlic", "arugula"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P038 — blackberry.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/blackberry.md`
- `scientific_name: Rubus allegheniensis`, `category: Fruit`, `days_min: 60`, `days_max: 90`
- `avg_yield_lb: 3.0`, `avg_price_lb: 5.50`, `seed_cost: 4.99`
- ROI angle: thornless varieties now widely available. Higher yield than raspberry per cane. Spreads aggressively - one purchase lasts a lifetime.
- Cite USDA AMS for $4-8/lb; note containment for aggressive spreaders
- `companion_plants`: ["arugula", "mint"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P039 — watermelon.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/watermelon.md`
- `scientific_name: Citrullus lanatus`, `category: Fruit`, `days_min: 75`, `days_max: 90`
- `avg_yield_lb: 15.0`, `avg_price_lb: 0.50`, `seed_cost: 2.99`
- ROI angle: low $/lb but personal-size varieties (icebox) at $3-5 each retail. Space requirement is the real cost.
- Cite USDA AMS; note icebox vs. standard variety economics
- `companion_plants`: ["corn", "radish"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P040 — cantaloupe.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/cantaloupe.md`
- `scientific_name: Cucumis melo var. cantalupensis`, `category: Fruit`, `days_min: 75`, `days_max: 90`
- `avg_yield_lb: 5.0`, `avg_price_lb: 1.25`, `seed_cost: 2.99`
- ROI angle: $1-2/lb retail but homegrown flavor is categorically better. French Charentais types $4-6/lb specialty.
- Cite USDA AMS; note flavor premium for vine-ripened vs. store-bought
- `companion_plants`: ["corn", "radish"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P041 — rhubarb.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/rhubarb.md`
- `scientific_name: Rheum rhabarbarum`, `category: Fruit`, `days_min: 365`, `days_max: 540`
- `avg_yield_lb: 3.0`, `avg_price_lb: 3.00`, `seed_cost: 4.99`
- ROI angle: perennial, 20+ year productive life. Year 2 first harvest. After year 3, $0 input for $9+ annual yield per crown. Divide crowns for free expansion.
- Cite USDA AMS for $2-4/lb; extension for crown division
- `companion_plants`: ["strawberry", "garlic"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P042 — fennel.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/fennel.md`
- `scientific_name: Foeniculum vulgare`, `category: Vegetable`, `days_min: 65`, `days_max: 90`
- `avg_yield_lb: 1.0`, `avg_price_lb: 4.00`, `seed_cost: 2.49`
- ROI angle: bulb + fronds + seeds = three harvests. Bronze fennel perennial, Florence (bulbing) annual. $3-6/lb retail.
- Cite USDA AMS; cover bulb vs. herb fennel distinction
- `companion_plants`: ["arugula", "lettuce"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P043 — kohlrabi.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/kohlrabi.md`
- `scientific_name: Brassica oleracea var. gongylodes`, `category: Vegetable`, `days_min: 45`, `days_max: 60`
- `avg_yield_lb: 0.75`, `avg_price_lb: 2.50`, `seed_cost: 2.49`
- ROI angle: fastest brassica after radish, $2-4/lb retail, unusual enough to command farmers market premium. Both bulb and leaves edible.
- Cite USDA AMS; note rapid growth for succession planting
- `companion_plants`: ["arugula", "beet"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P044 — tomatillo.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/tomatillo.md`
- `scientific_name: Physalis philadelphica`, `category: Vegetable`, `days_min: 75`, `days_max: 100`
- `avg_yield_lb: 3.0`, `avg_price_lb: 3.50`, `seed_cost: 2.99`
- ROI angle: $3-5/lb retail, rarely available fresh in many markets - high local demand. Need 2 plants for cross-pollination.
- Cite USDA AMS; note two-plant minimum requirement
- `companion_plants`: ["basil", "eggplant"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

### P045 — turnip.md
**Status:** `[x]`
**Goal:** Create `src/content/plants/turnip.md`
- `scientific_name: Brassica rapa subsp. rapa`, `category: Vegetable`, `days_min: 30`, `days_max: 60`
- `avg_yield_lb: 0.75`, `avg_price_lb: 1.75`, `seed_cost: 1.99`
- ROI angle: baby turnips at 30 days; dual harvest (root + greens). Greens are more nutritious than root. Underused crop with fast payback.
- Cite USDA AMS; cover baby turnip vs. full-size economics
- `companion_plants`: ["radish", "arugula"]
**Acceptance:** All required fields, zero em dashes, `npx astro build` passes.

---

## Plant Expansion Sprint — Batch 4 (P046-P055)

### P046 — asparagus.md
`[x]` `Asparagus officinalis` | Vegetable | days_min: 730 days_max: 1095 | yield: 1.0lb price: 4.50 seed: 5.99 | ROI angle: perennial 20+ years, year 3+ yields free forever, $4-6/lb. Cite USDA AMS. companions: ["tomato", "basil"]

### P047 — artichoke.md
`[x]` `Cynara scolymus` | Vegetable | days_min: 85 days_max: 100 | yield: 2.0lb price: 4.00 seed: 3.99 | ROI angle: perennial in zones 7+, $3-5/lb, secondary buds extend harvest. Cite USDA AMS. companions: ["arugula", "fennel"]

### P048 — celery.md
`[x]` `Apium graveolens` | Vegetable | days_min: 85 days_max: 120 | yield: 2.0lb price: 2.00 seed: 2.49 | ROI angle: $1.50-2.50/lb, long harvest window, self-blanching varieties. Cite USDA AMS. companions: ["tomato", "leek"]

### P049 — celeriac.md
`[x]` `Apium graveolens var. rapaceum` | Vegetable | days_min: 100 days_max: 120 | yield: 1.5lb price: 4.00 seed: 2.99 | ROI angle: $3-5/lb, rarely found in stores, storage crop. Cite USDA AMS. companions: ["leek", "arugula"]

### P050 — parsnip.md
`[x]` `Pastinaca sativa` | Vegetable | days_min: 100 days_max: 130 | yield: 1.0lb price: 2.50 seed: 2.49 | ROI angle: frost sweetens flavor, $2-3/lb, stores in ground through winter. Cite USDA AMS. companions: ["carrot", "arugula"]

### P051 — rutabaga.md
`[x]` `Brassica napus var. napobrassica` | Vegetable | days_min: 80 days_max: 100 | yield: 2.0lb price: 1.75 seed: 1.99 | ROI angle: $1.50-2.50/lb, stores 4-6 months, underused crop with minimal competition. Cite USDA AMS. companions: ["arugula", "radish"]

### P052 — mustard-greens.md
`[x]` `Brassica juncea` | Vegetable | days_min: 35 days_max: 50 | yield: 0.75lb price: 3.00 seed: 1.99 | ROI angle: fast-growing, $2-4/lb, cut-and-come-again, heat-tolerant. Cite USDA AMS. companions: ["arugula", "garlic"]

### P053 — endive.md
`[x]` `Cichorium endivia` | Vegetable | days_min: 85 days_max: 100 | yield: 0.5lb price: 4.00 seed: 2.99 | ROI angle: $3-5/lb specialty green, blanching increases value, rarely homegrown. Cite USDA AMS. companions: ["arugula", "lettuce"]

### P054 — radicchio.md
`[x]` `Cichorium intybus var. foliosum` | Vegetable | days_min: 60 days_max: 85 | yield: 0.5lb price: 5.00 seed: 2.99 | ROI angle: $4-6/lb, premium Italian bitter green rarely found fresh, fall timing critical. Cite USDA AMS. companions: ["arugula", "fennel"]

### P055 — mizuna.md
`[x]` `Brassica rapa var. nipposinica` | Vegetable | days_min: 20 days_max: 40 | yield: 0.5lb price: 4.00 seed: 2.49 | ROI angle: fastest salad green after radish, $3-5/lb, baby leaf harvest at 20 days. Cite USDA AMS. companions: ["arugula", "radish"]

**Acceptance for each:** All required frontmatter fields, body copy covers ROI angle, zero em dashes, `npx astro build` passes.

---

## Plant Expansion Sprint — Batch 5 (P056-P070)

### P056 — tatsoi.md
`[x]` `Brassica rapa var. narinosa` | Vegetable | days_min: 25 days_max: 45 | yield: 0.5lb price: 4.00 seed: 2.49 | ROI angle: cold-hardy to 15°F, extends season, $3-5/lb specialty. Cite USDA AMS. companions: ["arugula", "radish"]

### P057 — sorrel.md
`[x]` `Rumex acetosa` | Herb | days_min: 60 days_max: 90 | yield: 0.5lb price: 6.00 seed: 2.49 | ROI angle: perennial, $5-8/lb, lemon-flavored cut-and-come-again. Year 2+ near-zero input. Cite USDA AMS. companions: ["arugula", "chives"]

### P058 — lemon-balm.md
`[x]` `Melissa officinalis` | Herb | days_min: 70 days_max: 90 | yield: 0.5lb price: 8.00 seed: 2.99 | ROI angle: perennial zones 4+, spreads freely (free new plants), $6-10/lb dried. Cite USDA AMS. companions: ["mint", "basil"]

### P059 — rosemary.md
`[x]` `Salvia rosmarinus` | Herb | days_min: 90 days_max: 180 | yield: 0.5lb price: 12.00 seed: 3.49 | ROI angle: perennial zones 7+ (annual elsewhere), $10-15/lb, woody shrub lives 10+ years. Cite USDA AMS. companions: ["sage", "thyme"]

### P060 — lavender.md
`[x]` `Lavandula angustifolia` | Herb | days_min: 90 days_max: 365 | yield: 0.5lb price: 15.00 seed: 3.99 | ROI angle: perennial, dried bundles $8-20 retail, culinary + craft dual market. Cite USDA AMS. companions: ["thyme", "sage"]

### P061 — tarragon.md
`[x]` `Artemisia dracunculus var. sativa` | Herb | days_min: 60 days_max: 90 | yield: 0.25lb price: 14.00 seed: 3.49 | ROI angle: French tarragon must be propagated from divisions (not seed), $12-18/lb. Cite USDA AMS. companions: ["arugula", "chives"]

### P062 — marjoram.md
`[x]` `Origanum majorana` | Herb | days_min: 60 days_max: 80 | yield: 0.25lb price: 10.00 seed: 2.49 | ROI angle: sweeter than oregano, $8-12/lb, annual but self-sows. Cite USDA AMS. companions: ["basil", "oregano"]

### P063 — borage.md
`[x]` `Borago officinalis` | Herb | days_min: 50 days_max: 70 | yield: 0.25lb price: 6.00 seed: 1.99 | ROI angle: edible flowers $6-10/lb specialty, self-sows prolifically (one purchase = forever). Cite USDA AMS. companions: ["tomato", "cucumber"]

### P064 — nasturtium.md
`[x]` `Tropaeolum majus` | Herb | days_min: 35 days_max: 52 | yield: 0.25lb price: 8.00 seed: 1.99 | ROI angle: entire plant edible (flowers + leaves + seeds), flowers $8-12/lb specialty market. Cite USDA AMS. companions: ["cucumber", "zucchini"]

### P065 — edamame.md
`[x]` `Glycine max` | Vegetable | days_min: 70 days_max: 90 | yield: 1.0lb price: 4.00 seed: 2.99 | ROI angle: $3-5/lb fresh shelled, nitrogen-fixing crop improves soil. Cite USDA AMS. companions: ["corn", "carrot"]

### P066 — lima-bean.md
`[x]` `Phaseolus lunatus` | Vegetable | days_min: 65 days_max: 90 | yield: 0.5lb price: 3.50 seed: 2.99 | ROI angle: $3-5/lb fresh, rarely sold fresh in stores (competitive advantage). Cite USDA AMS. companions: ["corn", "carrot"]

### P067 — fava-bean.md
`[x]` `Vicia faba` | Vegetable | days_min: 75 days_max: 100 | yield: 1.0lb price: 5.00 seed: 3.49 | ROI angle: $4-6/lb, cool-season only, nitrogen-fixer, cover crop dual use. Cite USDA AMS. companions: ["arugula", "spinach"]

### P068 — snap-pea.md
`[x]` `Pisum sativum var. macrocarpon` | Vegetable | days_min: 55 days_max: 70 | yield: 1.0lb price: 4.00 seed: 3.49 | ROI angle: $3-5/lb, eat pod and pea, higher value than shelling peas. Cite USDA AMS. companions: ["lettuce", "spinach"]

### P069 — okra.md
`[x]` `Abelmoschus esculentus` | Vegetable | days_min: 50 days_max: 65 | yield: 2.0lb price: 3.00 seed: 2.49 | ROI angle: prolific in heat, $2-4/lb, harvest daily or pods toughen. Cite USDA AMS. companions: ["sweet-pepper", "eggplant"]

### P070 — jerusalem-artichoke.md
`[x]` `Helianthus tuberosus` | Vegetable | days_min: 100 days_max: 150 | yield: 8.0lb price: 3.50 seed: 4.99 | ROI angle: perennial, spreads aggressively (warn users), $3-5/lb, massive yield once established. Cite USDA AMS. companions: ["arugula", "sunflower"]

**Acceptance for each:** All required frontmatter fields, body copy covers ROI angle, zero em dashes, `npx astro build` passes.

---

## Plant Expansion Sprint — Batch 6 (P071-P093)

### P071 — sunflower.md
`[x]` `Helianthus annuus` | Vegetable | days_min: 70 days_max: 90 | yield: 0.5lb price: 8.00 seed: 1.99 | ROI angle: seeds $6-10/lb, sprouts $12/lb specialty, edible petals. Cite USDA AMS. companions: ["corn", "cucumber"]

### P072 — ground-cherry.md
`[x]` `Physalis pruinosa` | Fruit | days_min: 70 days_max: 80 | yield: 2.0lb price: 6.00 seed: 2.99 | ROI angle: $5-8/lb, rarely sold commercially, high local demand. Related to tomatillo. Cite USDA AMS. companions: ["basil", "tomatillo"]

### P073 — currant.md
`[x]` `Ribes rubrum` | Fruit | days_min: 60 days_max: 90 | yield: 3.0lb price: 7.00 seed: 4.99 | ROI angle: $6-10/lb, perennial shrub 15+ years, rarely found in US stores. Cold-hardy to zone 3. Cite USDA AMS. companions: ["arugula", "garlic"]

### P074 — gooseberry.md
`[x]` `Ribes uva-crispa` | Fruit | days_min: 60 days_max: 90 | yield: 4.0lb price: 5.00 seed: 4.99 | ROI angle: $4-7/lb, perennial 15+ years, zone 3 hardy, extremely rare in stores. Cite USDA AMS. companions: ["arugula", "chives"]

### P075 — fig.md
`[x]` `Ficus carica` | Fruit | days_min: 90 days_max: 150 | yield: 8.0lb price: 4.50 seed: 9.99 | ROI angle: $4-6/lb, can overwinter in containers in cold zones, two crops/year in warm zones. Cite USDA AMS. companions: ["arugula", "basil"]

### P076 — grape.md
`[x]` `Vitis vinifera` | Fruit | days_min: 90 days_max: 180 | yield: 10.0lb price: 2.50 seed: 6.99 | ROI angle: perennial vine 30+ years, table grapes $2-4/lb, concord types for juice/jelly $1-3/lb. Cite USDA AMS. companions: ["arugula", "oregano"]

### P077 — elderberry.md
`[x]` `Sambucus nigra` | Fruit | days_min: 90 days_max: 120 | yield: 5.0lb price: 8.00 seed: 5.99 | ROI angle: dried berries $10-20/lb wellness market premium, medicinal demand growing. Perennial shrub. Cite USDA AMS. companions: ["arugula", "garlic"]

### P078 — goji-berry.md
`[x]` `Lycium barbarum` | Fruit | days_min: 90 days_max: 150 | yield: 2.0lb price: 12.00 seed: 4.99 | ROI angle: dried $10-20/lb, fresh nearly impossible to find retail. Perennial zones 3-10. Cite USDA AMS. companions: ["arugula", "chives"]

### P079 — amaranth.md
`[x]` `Amaranthus cruentus` | Vegetable | days_min: 50 days_max: 75 | yield: 1.0lb price: 5.00 seed: 2.49 | ROI angle: grain + greens dual harvest, $4-7/lb grain, heat-tolerant. Cite USDA AMS. companions: ["corn", "arugula"]

### P080 — shallot.md
`[x]` `Allium cepa var. aggregatum` | Vegetable | days_min: 90 days_max: 120 | yield: 1.0lb price: 5.00 seed: 3.99 | ROI angle: $4-7/lb retail, each bulb produces 6-8 offsets (10x multiplication), gourmet staple. Cite USDA AMS. companions: ["carrot", "arugula"]

### P081 — scallion.md
`[x]` `Allium fistulosum` | Vegetable | days_min: 60 days_max: 70 | yield: 0.5lb price: 4.00 seed: 2.49 | ROI angle: $3-5/lb, can regrow from kitchen scraps (plant the roots), cut-and-come-again. Cite USDA AMS. companions: ["carrot", "arugula"]

### P082 — mache.md
`[x]` `Valerianella locusta` | Vegetable | days_min: 45 days_max: 60 | yield: 0.25lb price: 8.00 seed: 2.99 | ROI angle: $6-10/lb premium salad green, cold-hardy to 5°F, rarely available fresh. Cite USDA AMS. companions: ["arugula", "spinach"]

### P083 — napa-cabbage.md
`[x]` `Brassica rapa subsp. pekinensis` | Vegetable | days_min: 70 days_max: 80 | yield: 4.0lb price: 2.00 seed: 2.49 | ROI angle: $1.50-2.50/lb, high yield, kimchi production multiplies value 3-5x. Cite USDA AMS. companions: ["garlic", "arugula"]

### P084 — watercress.md
`[x]` `Nasturtium officinale` | Herb | days_min: 30 days_max: 40 | yield: 0.25lb price: 7.00 seed: 2.99 | ROI angle: $6-9/lb, can grow in containers with standing water, no soil needed. Cite USDA AMS. companions: ["arugula", "mint"]

### P085 — shiso.md
`[x]` `Perilla frutescens` | Herb | days_min: 60 days_max: 80 | yield: 0.25lb price: 10.00 seed: 2.99 | ROI angle: $8-14/lb, essential for Japanese cooking, nearly impossible to find fresh outside Asian markets. Cite USDA AMS. companions: ["basil", "eggplant"]

### P086 — lemongrass.md
`[x]` `Cymbopogon citratus` | Herb | days_min: 75 days_max: 100 | yield: 1.0lb price: 5.00 seed: 3.99 | ROI angle: $4-7/lb, divides freely each season (free new plants), overwinter indoors in cold zones. Cite USDA AMS. companions: ["basil", "mint"]

### P087 — chamomile.md
`[x]` `Matricaria chamomilla` | Herb | days_min: 60 days_max: 90 | yield: 0.25lb price: 12.00 seed: 2.49 | ROI angle: dried flowers $10-16/lb, self-sows freely, medicinal demand. Cite USDA AMS. companions: ["lavender", "arugula"]

### P088 — stevia.md
`[x]` `Stevia rebaudiana` | Herb | days_min: 60 days_max: 90 | yield: 0.25lb price: 20.00 seed: 3.99 | ROI angle: dried leaves $15-25/lb, 200x sweeter than sugar, replaces purchased sweetener. Cite USDA AMS. companions: ["basil", "mint"]

### P089 — calendula.md
`[x]` `Calendula officinalis` | Herb | days_min: 45 days_max: 60 | yield: 0.25lb price: 10.00 seed: 1.99 | ROI angle: edible flowers $8-14/lb, skin-care market value, self-sows. Cite USDA AMS. companions: ["tomato", "arugula"]

### P090 — lovage.md
`[x]` `Levisticum officinale` | Herb | days_min: 75 days_max: 90 | yield: 0.5lb price: 8.00 seed: 2.99 | ROI angle: perennial zones 4+, celery flavor without celery's difficulty, $6-10/lb. Cite USDA AMS. companions: ["arugula", "fennel"]

### P091 — fenugreek.md
`[x]` `Trigonella foenum-graecum` | Herb | days_min: 30 days_max: 45 | yield: 0.5lb price: 5.00 seed: 2.49 | ROI angle: leaves + seeds dual harvest, $4-7/lb, nitrogen fixer, common in Indian cooking. Cite USDA AMS. companions: ["arugula", "spinach"]

### P092 — purslane.md
`[x]` `Portulaca oleracea` | Vegetable | days_min: 50 days_max: 60 | yield: 0.5lb price: 4.00 seed: 2.49 | ROI angle: $3-6/lb at farmers markets, grows in poor soil, omega-3 content = nutritional premium. Cite USDA AMS. companions: ["arugula", "carrot"]

### P093 — romanesco.md
`[x]` `Brassica oleracea var. botrytis` | Vegetable | days_min: 75 days_max: 100 | yield: 2.0lb price: 5.00 seed: 3.49 | ROI angle: $4-7/lb specialty, striking visual sells at premium, rarely in stores outside specialty grocers. Cite USDA AMS. companions: ["garlic", "arugula"]

**Acceptance for each:** All required frontmatter fields, body copy covers ROI angle, zero em dashes, `npx astro build` passes.

---

## UI Features

### F009 — Homepage newsletter signup card
**Status:** `[x]`
**Agent fit:** Any agent with file edit access.
**Files:** `src/pages/index.astro` (or extract to `src/components/NewsletterSignup.astro`)

**What:** Replace the "Track Your Garden's Return On Investment" app-store glass card on the homepage with a newsletter signup card. Keep the same glass card visual and section position.

**Google Form details:**
- Submit endpoint: `https://docs.google.com/forms/d/e/1FAIpQLScewT4ZxcVIMnCaNscXeu6hWGWHRj_a6xwidloIDoYU9Sw8Bw/formResponse`
- Email field name: `entry.1425617156`
- Method: POST via `fetch` with `mode: 'no-cors'` (opaque response - treat every non-throw as success)

**Card - default state:**
- Heading: "Get planting tips and ROI data in your inbox"
- Subtext: "Seasonal crop picks, yield comparisons, and homestead guides. No spam."
- Email input + "Subscribe" button on same row
- Button uses `var(--color-primary)` background

**Card - success state (swap in-place, no reload):**
- Heading: "You're in."
- Body: "Expect planting tips and ROI breakdowns at the start of each season."
- No form, no re-entry

**Behavior:**
- Client-side email format validation before submit (native `type="email"` + check for `@` and `.`) - show inline error if invalid, do not submit
- Disable input + button, show "Subscribing..." during fetch
- On fetch resolve (any result, since no-cors is opaque): show success state
- On fetch throw (network error): show inline error "Something went wrong. Try again."
- Persist success to `localStorage` key `newsletter-subscribed`. On page load, if key exists, render success state immediately (skip the form)

**Styling:**
- All colors, spacing, radius via CSS custom properties - no hardcoded values
- Input border: `1px solid var(--color-border)` (add token to theme.css if missing)
- Error text: `var(--color-error)` (add token to theme.css if missing, use a red tone matching the brand palette)
- Match glass card style of the calculator and encyclopedia sections

**Acceptance:**
- Valid email submits to Google Form (verify in Google Forms responses tab)
- Success state appears immediately after submit
- Invalid email shows error, does not submit
- Refreshing after subscribe shows success state (localStorage check)
- `npx astro build` passes with 0 errors

---

### F008 — Crops page: table view toggle
**Status:** `[x]`
**Agent fit:** Any agent with file edit access.
**Files:** `src/pages/crops/index.astro`

**Why:** At 100 entries the card grid requires endless scrolling to compare crops. A user trying to answer "which herbs mature in under 45 days?" or "what has the best $/lb yield?" has no way to scan that quickly in card view. A table view puts all the comparison data in one visible pass.

**What to build:** A view toggle (grid icon / list icon) that switches between the existing card grid and a new table/row layout. Both views share the same search + filter + sort state.

**Table columns (in order):**
1. **Crop** - linked name + category badge
2. **Days** - `days_min–days_max` (e.g. "60–80")
3. **Yield** - `avg_yield_lb` lb/plant
4. **Price** - `$avg_price_lb/lb`
5. **Seed Cost** - `$seed_cost`
6. **Est. ROI** - calculated: `(avg_yield_lb × avg_price_lb) - seed_cost`, formatted as `$X.XX` - this is the point of the site and should be the default sort column in table view

**Sorting:** In table view, clicking a column header sorts by that column (toggle asc/desc). The existing sort dropdown still works in card view.

**Defaults:** Table view defaults to sort by Est. ROI descending (highest value crops first). Card view keeps its existing default (featured first, then alphabetical).

**Persistence:** Store the chosen view mode in `localStorage` as `crops-view` (`'grid'` or `'table'`) so it survives page navigation.

**Mobile:** Table view is desktop/tablet only (hide the toggle and stay in card view below 640px). A condensed table on a 375px screen is unreadable.

**Styling:** Table uses CSS custom properties only - no hardcoded values. Header row uses `var(--color-primary)` background with white text. Alternating row tint using `var(--color-background)` / a 4% darkened variant. Sortable column headers get a `▲`/`▼` indicator.

**Acceptance:**
- Toggle button visible on desktop, hidden on mobile
- Table renders all 100 crops with correct data from content collection
- Est. ROI column calculates correctly and is default sort in table view
- Clicking column headers sorts correctly, asc/desc toggle works
- Search + category filter work identically in both views
- View preference persists across page reloads
- `npx astro build` passes with 0 errors

---

## Done

- **T001-T011:** All infrastructure tasks complete (schema, routing, SEO, pages)
- **C001-C011:** All content rewrites complete (plants + articles)
- **P001-P007:** All Tier 1 new plant pages complete (garlic, kale, arugula, cherry-tomato, hot-pepper, garden-pea, winter-squash)
