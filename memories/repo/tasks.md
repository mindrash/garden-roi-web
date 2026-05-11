# Garden ROI Web — Task Backlog
_Last updated: May 11, 2026 (T001-T012 + CF001-CF003 + F008-F013 + E001-E020 + D001-D012 + SR001-SR004 + S001-S002 + Z001-Z008 + R001-R008 complete)_

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
**Status:** `[x]`
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

## MVP Launch Sprint (M001-M006)

### M001 — Methodology & Data Sources Page
**Status:** `[x]`
**Files:** `src/pages/methodology.astro`
**What:** A "How we calculate ROI" page that cites every data source used across the site. Builds trust - without it the numbers feel invented.
**Details:**
- URL: `/methodology/`
- Add to Footer nav alongside Resources
- Sections: Retail Price Data (USDA ERS, AMS Market News), Yield Data (land-grant extension publications, which ones), ROI Formula (how seed cost, yield, and price combine), Variance Explanation (why Low/Typical/High differ), Currency/Date Policy (prices updated annually, year cited)
- Cite specific USDA datasets by name and URL: ERS Fruit & Vegetable Prices, AMS Market News, NASS Quick Stats
- For each section, name the primary source and the secondary fallback
- Internal links: /crops/ index, /roi/ index, /start-here/
- Use same page layout pattern as `start-here.astro` (single `.methodology-body` wrapper with `background-color: rgba(248, 249, 245, 0.88)`)
- No inline styles. CSS custom properties only. Zero em dashes.
**Acceptance:**
- Page renders at `/methodology/` with correct background coverage (no text over bg image)
- All data sources are named and linked
- Footer links to `/methodology/`
- `npx astro build` passes with 0 errors

---

### M002 — Companion Plants Cross-Linking on Crop Pages
**Status:** `[x]`
**Files:** `src/pages/crops/[slug].astro`
**What:** Companion plants on crop detail pages are currently plain text (comma-separated). Link each companion plant name to its `/crops/[slug]/` page if a matching plant entry exists.
**Details:**
- Read all plant slugs from the content collection at build time
- For each name in `companion_plants`, normalize to a slug (lowercase, spaces to hyphens)
- If a matching slug exists in the collection, render as `<a href="/crops/[slug]/">Name</a>`
- If no match, render as plain text (graceful fallback - not all companions have pages)
- No new layout changes - only the companion_plants fact row changes
- Test with tomato (companions: basil, carrot, marigold) - basil and carrot should link, marigold may not
**Acceptance:**
- Companion names that match a plant slug render as working internal links
- Companion names with no match render as plain text (no broken links)
- Links use descriptive text (the plant name) - not "click here"
- `npx astro build` passes with 0 errors

---

### M003 — Related Articles on Crop Pages
**Status:** `[x]`
**Files:** `src/pages/crops/[slug].astro`
**What:** Every crop detail page should surface 1-3 related articles from the content collection. Currently crop pages have no links to the article sections.
**Details:**
- At build time, collect all articles
- Match strategy (in priority order): 1) articles whose title or description contains the crop name, 2) articles tagged with a relevant category (roi, care, planning)
- Show a maximum of 3 articles. If fewer than 1 match, show nothing (no empty section)
- Render as a simple "Related Reading" section below the crop facts, before the footer
- Each article link shows title + description (one line, truncated at ~100 chars if needed)
- Link to the correct section path: roi articles → `/roi/[slug]/`, homestead → `/homestead/[slug]/`, care/planning → `/guides/[slug]/`
- Use same card/list style as other article listings on the site
- Section must have background coverage - no raw text over bg image
**Acceptance:**
- At least 10 crop pages show 1+ related article links (spot check: tomato, garlic, basil)
- No broken links
- Section is absent (not empty) on crops with zero matches
- `npx astro build` passes with 0 errors

---

### M004 — Pagefind Search UI
**Status:** `[x]`
**Files:** `src/components/SearchModal.astro` (new), `src/components/Header.astro`, `src/styles/theme.css`
**What:** Pagefind is already indexed in the deploy pipeline. Wire up a working search UI so visitors can actually use it. A search icon in the header that opens a modal is the standard pattern.
**Details:**
- Add a search icon button to the right side of the Header nav
- Clicking it opens a full-screen modal overlay with the Pagefind search UI
- Pagefind UI is loaded from `/pagefind/pagefind-ui.js` and `/pagefind/pagefind-ui.css` (generated at build time)
- Modal closes on Escape key or clicking the overlay backdrop
- In dev mode, Pagefind index won't exist - degrade gracefully (show "Search available on the live site")
- CSS: modal overlay uses `var(--color-overlay)`, modal panel uses `var(--color-bg)`, no hardcoded values
- Search icon uses an SVG inline or a Unicode character - no icon library dependencies
**Acceptance:**
- Search icon visible in Header on all pages
- Modal opens and closes correctly
- On production build, Pagefind returns results for crop names and article titles
- Dev mode degrades gracefully without throwing errors
- `npx astro build` passes with 0 errors

---

### M005 — "Quick Wins" Filter on /crops Index
**Status:** `[x]`
**Files:** `src/pages/crops/index.astro`
**What:** Add a "Quick Wins" filter button to the crops index that shows only crops with `days_max <= 60`. These are the fast-payoff crops (arugula, radish, lettuce, etc.) - a useful filter for new gardeners.
**Details:**
- Add a "Quick Wins" toggle button alongside the existing category filter buttons
- When active, filters the visible crops to only those where `days_max <= 60`
- Quick Wins filter stacks with category filter (e.g., can show "Quick Wins + Herb")
- Button style matches existing filter buttons - uses CSS custom properties, no hardcoded values
- State managed in client-side JS already present on the page
- Label: "Quick Wins (≤60 days)"
**Acceptance:**
- Quick Wins button renders alongside existing filter buttons
- Filters correctly to crops with `days_max <= 60`
- Stacks correctly with category filters
- `npx astro build` passes with 0 errors

---

### M006 — Tip of the Day on Homepage
**Status:** `[x]`
**Files:** `src/pages/index.astro`
**What:** Surface a rotating "Garden ROI Fact" on the homepage using the existing `/api/tips.json` endpoint. The infrastructure is already there - this just renders it.
**Details:**
- Fetch tips from `/api/tips.json` client-side on page load
- Pick a random tip from the array and display it in a dedicated section on the homepage
- If fetch fails, section is hidden entirely (no error state shown to user)
- Section label: "ROI Fact" or "Did You Know?"
- Rotates on page refresh (random pick each load, no animation required)
- Use the same section background pattern as other homepage sections
- Place it between the newsletter section and the footer, or between Features and newsletter - wherever feels natural in the existing layout
- No hardcoded colors or values
**Acceptance:**
- Tip renders on homepage using data from `/api/tips.json`
- Different tip shown on refresh (verify with 3+ refreshes)
- Section hidden (not broken) if the fetch fails
- `npx astro build` passes with 0 errors

---

## MVP Launch Sprint (M007-M008)

### M007 — Interactive ROI Estimator
**Status:** `[x]`
**Files:** `src/components/RoiEstimator.astro` (new), `src/pages/index.astro`, `src/pages/api/plants.json.ts`
**What:** A client-side calculator on the homepage. Visitor picks a crop, enters a plant count, and sees an estimated savings breakdown. CTA drives to the app download.
**Details:**

Step 1 - Add `seed_cost` to the plants API response in `src/pages/api/plants.json.ts`:
- Add `seed_cost: plant.data.seed_cost` to the `.map()` object alongside the existing fields

Step 2 - Create `src/components/RoiEstimator.astro`:
- At build time, fetch all plants from the content collection and serialize the fields needed into an inline JS variable: `name`, `slug`, `avg_yield_lb`, `avg_price_lb`, `seed_cost` — no client-side fetch needed, data is baked in at build time
- UI: a crop select dropdown (all 100 crops, sorted alphabetically) + a number input for plant count (default: 3, min: 1, max: 50)
- Output panel (updates on every change, no submit button):
  - Estimated yield: `avg_yield_lb × plants` lb
  - Grocery value: `yield × avg_price_lb` dollars
  - Seed investment: `seed_cost × plants` dollars
  - **Net savings: grocery value - seed investment** (the headline number, large text)
- Below the output: a single CTA button "Track your actual harvest →" linking to `/app/`
- If no crop selected, show a prompt ("Select a crop to see your estimated return")
- Label the output clearly: "Based on USDA average yield and retail price data"
- All styling uses CSS custom properties. No hardcoded values. No inline styles.
- Component uses same background/card pattern as other homepage sections

Step 3 - Add `<RoiEstimator />` to `src/pages/index.astro`:
- Place it after the hero/features section and before the newsletter section
- Section heading: "Estimate Your Return"

**Acceptance:**
- Dropdown shows all 100 crops
- Changing crop or plant count updates the output instantly (no page reload)
- Net savings is the visually prominent output number
- CTA links to `/app/`
- No hardcoded CSS values
- Background coverage: no text over background image
- `npx astro build` passes with 0 errors

---

### M008 — Hero Images for Crop and Article Pages
**Status:** `[x]`
**Agent fit:** This story is worked in batches as images are sourced. The agent's job is only to wire up images that are already present in `public/images/` — never to source, download, or generate images.

**Files:** `src/content/plants/*.md`, `src/content/articles/*.md`, `public/images/crops/`, `public/images/articles/`

**What:** Wire up hero images across crop and article pages. The `hero_image` field is already in the schema and both `BaseLayout.astro` and `ContentLayout.astro` already consume it for og:image and the page hero. This story only adds frontmatter entries for images that exist on disk.

**Image storage convention:**
- Crop images: `public/images/crops/[slug].webp` — slug matches the content file name exactly (e.g., `tomato.md` → `public/images/crops/tomato.webp`)
- Article images: `public/images/articles/[slug].webp` — slug matches the article file name exactly
- All images must be WebP format, max 200KB, recommended 1200×630px

**How to source images (human task, done before running this story):**
- Priority 1: Unsplash (unsplash.com) — free, no attribution required, high quality
- Priority 2: Pexels (pexels.com) — same license, good fallback
- Priority 3: Wikimedia Commons — filter by Creative Commons, covers obscure crops
- Priority 4: USDA ARS Image Gallery (ars.usda.gov/oc/images/photos) — public domain, authoritative
- Generate only what cannot be sourced — prompt style: "[crop] growing in a garden, natural light, close-up, no text"
- Convert all downloads to WebP using Squoosh (squoosh.app) before saving to `public/images/`

**Agent workflow — run this story once images are in place:**
1. Scan `public/images/crops/` for all `.webp` files present on disk
2. For each file found (e.g., `tomato.webp`), open `src/content/plants/tomato.md` and add `hero_image: /images/crops/tomato.webp` to frontmatter — only if the field is not already set
3. Repeat for `public/images/articles/` → `src/content/articles/`
4. Do not touch any content file that does not have a corresponding image on disk
5. Do not modify any field other than `hero_image`

**Acceptance:**
- Every content file with a `hero_image` frontmatter value has a corresponding file at that path in `public/images/`
- No content file has a `hero_image` value pointing to a file that does not exist (would cause a broken og:image)
- `npx astro build` passes with 0 errors

---

## Content Sprint — Original Depth Articles (Claude Code)

All stories below go to Claude Code. Load `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md` before writing any of them.

### CA001 — "The $500 Garden" — Complete cost audit of a real first-year setup
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/the-500-dollar-garden.md`
**What:** Anchor piece. A line-item cost audit of everything a first-year gardener actually spends: lumber ($60–$120), hardware cloth ($20–$30), soil ($60–$120), seeds ($15–$30), transplants ($20–$40), tools ($30–$80), amendments ($10–$20), pest control ($0–$20). Total: $215–$460. Then the other side: what that same garden produced, crop by crop, with retail equivalents. The article ends with a real net number — not a promise.
- Frontmatter: `category: roi`, `featured: true`, `publishDate: 2026-04-15`
- Target: 2,500+ words
- Must include: full itemized cost table, full harvest value table, zone-adjusted scenarios (Zone 5 vs Zone 7), a section on what to cut if budget is $300 vs $500
- Internal links: `/roi/raised-bed-break-even/`, `/roi/first-three-years-roi/`, `/crops/tomato/`, `/crops/basil/`
**Acceptance:**
- 2,500+ words
- Every cost figure cited or sourced from stated supplier ranges
- No em dashes, no motivational closing
- `npx astro build` passes with 0 errors

---

### CA002 — "Growing Garlic in Every US Climate Zone" — regional adaptation guide
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/growing-garlic-by-zone.md`
**What:** The most thorough garlic-by-zone guide on the web. Covers: planting timing zone by zone (fall in Zones 3–8, spring planting strategy for Zones 9–10), variety selection by zone (hardneck works in cold climates, softneck stores longer in warm ones), overwintering mulch requirements, scapes (Zones 3–6 only — hardneck), harvest timing signals, curing duration by humidity level.
- Frontmatter: `category: care`, `featured: false`, `publishDate: 2026-04-15`
- Target: 2,500+ words
- Must include: zone-by-zone planting calendar table, hardneck vs softneck comparison table, curing environment specs
- Internal links: `/crops/garlic/`, `/roi/first-three-years-roi/`, `/guides/succession-planting-calendar/`
**Acceptance:**
- 2,500+ words, zone table present, variety comparison table present
- USDA hardiness zone data cited, variety timing cited to extension sources
- No em dashes
- `npx astro build` passes with 0 errors

---

### CA003 — "Soil Test to First Harvest: The Decision Chain"
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/soil-test-decision-chain.md`
**What:** Step-by-step decision framework starting from a soil test result. What each number means (pH, N-P-K, Ca, Mg, CEC, organic matter %), what to do about it before planting, and how each deficiency shows up in crop yields. Structured as a decision tree: if your pH is X, do Y; if your N is low, here's the cost of amendment vs the yield penalty of ignoring it. Practical math on whether a $15 soil test pays for itself (it does, quickly).
- Frontmatter: `category: planning`, `featured: false`, `publishDate: 2026-04-20`
- Target: 2,000+ words
- Must include: soil test results interpretation table (metric, ideal range, what low/high means for crops), amendment cost vs yield penalty table
- Internal links: `/guides/soil-ph-by-crop/`, `/crops/tomato/`, `/crops/kale/`
**Acceptance:**
- 2,000+ words, interpretation table present
- Penn State or OSU Extension cited for amendment rates
- No em dashes
- `npx astro build` passes with 0 errors

---

### CA004 — "Freezer Math: The Real ROI of a Garden Freezer"
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/freezer-math-garden-roi.md`
**What:** What does it actually cost to freeze garden produce vs. buying frozen at retail? Chest freezer cost ($150–$300) amortized over 15 years = $10–$20/yr. Electricity cost ($30–$50/yr for a 7 cu ft chest freezer per DOE data). Per-bag freezing cost (bag + electricity): $0.08–$0.15/bag. Compare to: frozen green beans retail $2.50–$3.50/lb (USDA AMS), frozen spinach $3–$5/lb, frozen tomatoes/sauce $3–$6/lb equivalent.
- Frontmatter: `category: homestead`, `featured: false`, `publishDate: 2026-04-20`
- Target: 1,800+ words
- Must include: freezer amortization table, per-crop freeze value table, break-even calculation at 3 garden sizes
- Internal links: `/homestead/freezing-vs-canning/`, `/homestead/canning-financial-case/`, `/crops/green-bean/`
**Acceptance:**
- 1,800+ words, amortization table and per-crop table present
- DOE or ENERGY STAR data cited for electricity costs, USDA AMS cited for retail frozen prices
- No em dashes
- `npx astro build` passes with 0 errors

---

### CA005 — "The Perennial Garden Economy: Crops You Plant Once and Harvest for Decades"
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/perennial-garden-economy.md`
**What:** The most overlooked ROI category in home gardening. Covers: asparagus (3-year establishment, 20+ year harvest), established herb perennials (thyme, oregano, chives, lovage, sorrel), fruit perennials (strawberries, raspberries, blackberries, rhubarb). Structured around: what is the 10-year NPV of planting each crop today? Real math, not approximations.
- Frontmatter: `category: roi`, `featured: true`, `publishDate: 2026-04-22`
- Target: 2,500+ words
- Must include: 10-year ROI table by crop (establishment cost, annual harvest value, annual input cost, 10-yr net), asparagus detailed timeline, strawberry runner math
- Internal links: `/roi/first-three-years-roi/`, `/crops/garlic/`, `/crops/strawberry/`
**Acceptance:**
- 2,500+ words, 10-year ROI table present
- Establishment cost and yield data cited to extension sources
- No em dashes
- `npx astro build` passes with 0 errors

---

### CA006 — "What a CSA Share Actually Costs vs. Growing It Yourself"
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/csa-vs-home-garden.md`
**What:** An honest cost comparison between a typical CSA share ($400–$700/season for a half share, $700–$1,200 for a full share) and a home garden producing equivalent volume. What crops appear in a typical CSA box, what they cost at retail, what they cost to grow at home. Which crops the CSA does better. Which crops home growing does better. Not a polemic — an actual comparison with numbers.
- Frontmatter: `category: roi`, `featured: false`, `publishDate: 2026-04-25`
- Target: 2,000+ words
- Must include: typical CSA box contents + retail value table, same crops grown at home cost + value table, side-by-side net comparison
- Internal links: `/roi/raised-bed-break-even/`, `/roi/first-three-years-roi/`, `/crops/lettuce/`, `/crops/tomato/`
**Acceptance:**
- 2,000+ words, both tables present, side-by-side comparison present
- CSA price ranges cited (USDA NASS local food survey or equivalent)
- No em dashes
- `npx astro build` passes with 0 errors

---

### CA007 — New plant pages: broccoli, spinach, Swiss chard, sweet potato, beet
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/broccoli.md`, `src/content/plants/spinach.md`, `src/content/plants/swiss-chard.md`, `src/content/plants/sweet-potato.md`, `src/content/plants/beet.md`
**What:** Five Tier 2 plant pages. Each must meet the full plant entry standard: botanical identity, ROI case with cited numbers, growing requirements, what goes wrong, harvest and storage. Note: all five already have hero images downloaded at `public/images/crops/[slug].webp` - include `hero_image` in frontmatter.
- Broccoli: calabrese vs. sprouting types, side-shoot yield after main head, $2–$3/head retail (USDA AMS)
- Spinach: Savoy vs. flat-leaf, bolting management, succession planting model, $4–$6/lb cited
- Swiss chard: cut-and-come-again model, rainbow vs. single-color, mild-season performance
- Sweet potato: slip vs. root propagation, 90–120 day requirement, $1.50–$2.50/lb retail, slip production math
- Beet: greens + roots = double value, golden vs. red vs. Chioggia, 55–70 days, $2–$4/lb retail
**Acceptance:**
- All 5 files exist and pass `npx astro build`
- Each 600+ words
- All yield and price figures cited
- `seed_cost` and `hero_image` present in all frontmatter
- No em dashes

---

## Feature Sprint — Next Level (Copilot)

### NF001 — Zone Finder: pre-rendered crop recommendations by USDA zone
**Status:** `[x]`
**Agent:** Copilot
**Files:** `src/components/ZoneFinder.astro`, `src/pages/zone/[zone].astro`
**What:** Interactive component where visitor selects their USDA hardiness zone (3–11). Renders a filtered crop list showing: days to maturity vs frost-free days available, which crops need indoor start, which are direct-sow safe. Static output via `getStaticPaths`. No JS frameworks; a `<select>` that navigates to `/zone/[zone]/` is sufficient.
**Data source:** Plant frontmatter already has `days_min`, `days_max`. Add `direct_sow_ok: boolean` and `indoor_weeks_needed: number` fields to schema with safe defaults.
**Acceptance:**
- `/zone/5/`, `/zone/6/`, etc. pre-render with 0 errors
- Each zone page shows crops flagged as "direct sow" or "start indoors X weeks before last frost"
- Zone selector on homepage or header
- `npx astro build` passes with 0 errors

---

### NF002 — Crop Comparison: side-by-side $/sq ft for any 2 crops
**Status:** `[x]`
**Agent:** Copilot
**Files:** `src/components/CropCompare.astro`, `src/pages/compare.astro`
**What:** Static comparison page at `/compare/`. Pre-render 10+ common 2-crop combinations at `/compare/[slug1]-vs-[slug2]/`. Side-by-side table: seed cost, days to maturity, avg yield, avg price/lb, estimated gross value, estimated net. All data from Content Collections.
**Acceptance:**
- 10+ combinations pre-rendered with unique title/meta per page
- Table shows all 6 metrics from plant frontmatter
- Mobile-friendly
- `npx astro build` passes with 0 errors

---

### NF003 — Seasonal Planting Calendar: printable zone-specific page
**Status:** `[x]`
**Agent:** Copilot
**Files:** `src/pages/calendar/[zone].astro`, `src/components/PlantingCalendar.astro`
**What:** Pre-rendered `/calendar/5/`, `/calendar/6/`, etc. Visual grid: months on X axis, crop categories on Y axis. Each cell shows sow indoors / transplant / direct sow / harvest window. Derived from plant frontmatter + hard-coded frost date midpoints per zone. Print-friendly CSS (`@media print`).
**Acceptance:**
- Zones 3–10 pre-render with 0 errors
- Grid renders on desktop, tablet, and print
- Links to `/zone/[zone]/` and relevant crop pages
- `npx astro build` passes with 0 errors

---

### NF004 — Budget Planner: full-season cost + ROI projection
**Status:** `[x]`
**Agent:** Copilot
**Files:** `src/components/BudgetPlanner.astro`
**What:** Expand existing ROI Estimator into a full budget planner. Inputs: number of beds, bed size, crop mix selection (checkboxes), seeds vs transplants. Outputs: total input cost, total harvest value, net ROI, break-even week. All client-side vanilla JS. Crop data baked at build time into a JSON blob from Content Collections.
**Acceptance:**
- Accessible from homepage and `/app/`
- Handles 1–6 beds of user-selected sizes
- Output updates reactively on input change
- `npx astro build` passes with 0 errors

---

### NF005 — "What To Plant Now" homepage section
**Status:** `[x]`
**Agent:** Copilot
**Files:** `src/components/WhatToPlantNow.astro`
**What:** Homepage section that displays crops appropriate for the current month + selected zone. Uses `new Date()` client-side. Persists zone preference in `localStorage`. Fallback to Zone 6 if no zone stored or localStorage unavailable.
**Acceptance:**
- Renders on homepage below the hero
- Correct crops shown for current month + Zone 6 default
- Zone preference persists via localStorage
- `npx astro build` passes with 0 errors

---

---

## Content Expansion Sprint (CA008-CA012) — Claude Code

All stories in this sprint expand existing articles that are live but below minimum word count. The existing content is the starting point. Do not cut what is there. Add to it.

Load `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md` before writing any of these.

---

### CA008 — Expand garlic-roi-analysis.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/garlic-roi-analysis.md`
**What:** Existing article is 1,241 words. Strong per-clove baseline math. Expand to 2,000+ words with variety economics, scape economics, curing loss analysis, and scale comparisons.
**Add (do not replace existing content):**
- Hardneck vs softneck variety ROI comparison table: columns = variety type, avg cloves/lb, seed cost/lb, retail price/lb, weight return ratio, net/lb planted. Porcelain (Music, German Extra Hardy): 30-40 cloves/lb, $16-20/lb seed, $8-12/lb retail hardneck. Artichoke softneck (California Early, Inchelium Red): 50-70 cloves/lb, $12-16/lb seed, $3-5/lb conventional retail. Source: USDA AMS Specialty Crop Market News, seed garlic supplier price surveys.
- Scape economics section: hardneck garlic produces scapes in June (zones 4-7). Count: 1 scape per plant. Weight: 6-8 scapes per bunch at farmers markets, $3-5/bunch (USDA AMS local food data). A 50-plant bed = 50 scapes = 6-8 bunches = $18-40 bonus income before the bulb harvest. Scapes freeze well; no processing cost. This is harvest the plant would produce anyway.
- Curing loss factor: improperly cured garlic loses 20-30% of fresh weight as moisture evaporates (Cornell Cooperative Extension, *Garlic Production for the Gardener*, 2012). At 6 lbs fresh harvest, that is 1.2-1.8 lbs lost if sold fresh vs cured. Cured garlic stores 6-9 months. The math: cure correctly or lose $10-20 of value per 50-plant bed.
- Scale comparison table: 10-plant hobby patch vs 50-plant family supply vs 200-plant serious gardener. Columns: plants, seed cost ($), expected yield (lbs), retail equivalent value ($), net after seed cost ($). Show how ROI percentage stays constant but absolute dollars grow.
- Year 2+ economics paragraph: saving the largest heads to replant drops seed cost to $0. Seed selection pressure over 3-5 seasons adapts the variety to your specific microclimate. This is the compounding advantage that annual crops never offer.
**Acceptance:**
- 2,000+ words
- Hardneck vs softneck comparison table present
- Scape economics with specific dollar figures
- Curing loss factor with Cornell extension citation
- Scale comparison table (3 sizes)
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### CA009 — Expand canning-financial-case.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/canning-financial-case.md`
**What:** Existing article is 1,084 words. Has basic cost table and opening logic. Expand to 1,800+ words with per-crop processing case studies and safety grounding.
**Add:**
- Water bath vs pressure canning scope table: rows = product type (tomato sauce, dill pickles, jam/jelly, applesauce, green beans, low-acid vegetables). Columns = required method, why, safety consequence of wrong method, approximate processing time. Source: USDA Complete Guide to Home Canning (nchfp.uga.edu) and NCHFP — cite by name. This is the legal/safety foundation; readers need to know green beans require pressure canning or they can kill someone.
- Per-crop processing economics table: 5 crops with full math. For each: raw produce quantity needed, jars produced, processing cost (lid + energy), store-equivalent retail price, net value captured. Rows:
  - Tomato sauce: 21 lbs tomatoes → 7 quarts (NCHFP yield). Store price: Muir Glen organic quart $5.50, store-brand $2.50. Processing cost/jar: $0.35 lid + $0.10 energy = $0.45/jar ($3.15 total). Net value captured: $17.50-$38.50 vs nothing (tomatoes were garden surplus).
  - Dill pickles: 7 lbs cucumbers → 4 quarts. Store price: $3.50-5.00/quart. Processing cost: $1.80. Net: $14-20 from $2-3 in cucumbers and vinegar.
  - Green beans: 9 lbs beans → 7 quarts. REQUIRES pressure canner. Store equivalent: Del Monte quart $3.00. Processing cost: $0.45/jar. Net: $21 retail value, $3.15 processing = $17.85 net.
  - Strawberry jam: 5 lbs berries + 7 cups sugar → 8 half-pints. Store price: Bonne Maman $6/jar, store brand $3.50/jar. Processing cost: sugar ($2.50) + lids ($2.80) + energy ($0.50) = $5.80 total. Net value: $28-48 retail from garden surplus.
  - Applesauce: 10 lbs apples → 3 quarts. Store price: $4-7/quart. Processing cost: $1.35. Net: $12-21.
- When canning doesn't pencil out section: buying tomatoes specifically to can at summer peak retail ($1.50-2.00/lb) for sauce you could buy for $2.50/quart. The math: 5 lbs tomatoes at $1.80/lb = $9 to make one quart of sauce worth $3. This only makes financial sense with garden surplus, not purchased produce. Be explicit.
- Equipment amortization section: if you spend $120 on a pressure canner and use it 5 times per season for 15 years = $1.60 per canning session amortized. A water bath canner at $40 amortized over 15 years = $2.67/year. Equipment cost is trivial once established. The first season is the hard one.
**Acceptance:**
- 1,800+ words
- Water bath vs pressure canning scope table (with safety column) present
- Per-crop economics table (5 crops) with full math
- NCHFP cited for safety guidance
- "When it doesn't pencil out" section present
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### CA010 — Expand succession-planting-calendar.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/succession-planting-calendar.md`
**What:** Existing article is 1,094 words. Has frost-relative calendar and good structure. Expand to 1,800+ words with zone-specific frost date table, ROI gain math, and crop-specific succession interval guide.
**Add:**
- Zone-specific last frost date reference table: columns = USDA hardiness zone, average last spring frost date, average first fall frost date, frost-free days. Zone 3 (June 1-15 / Sept 5-20 / 90-110 days), Zone 4 (May 15-31 / Sept 20 - Oct 5 / 110-140 days), Zone 5 (May 1-14 / Oct 1-15 / 140-170 days), Zone 6 (Apr 15-30 / Oct 15-31 / 160-190 days), Zone 7 (Apr 1-14 / Oct 31 - Nov 15 / 190-220 days), Zone 8 (Mar 1-31 / Nov 15 - Dec 1 / 230-270 days). Source: USDA Agricultural Research Service frost date data, planthardiness.ars.usda.gov.
- Crop-specific succession interval table: columns = crop, succession interval (days between plantings), harvests achievable per season (zones 5-6), why this interval. Lettuce: 14 days, 5-6 harvests. Arugula: 21 days, 4-5 harvests. Spinach: 10 days, 5-6 harvests spring + 3-4 fall. Bush beans: 14-21 days, 3-4 harvests. Radish: 10 days, 8-10 harvests. Cilantro: 21 days, 4-5 harvests. Dill: 14 days, 4-5 harvests. Beets: 21 days, 3-4 harvests.
- ROI gain calculation: the money case for succession planting. Single planting of 4 linear feet of arugula: $6-9 retail value (0.75-1 lb at $8/lb). Three successions of same 4 feet: $18-27 retail value. From the same seed packet ($2.49). The extra $12-18 costs nothing but timing. Show this math explicitly for arugula and lettuce.
- Bed utilization math: a 4x8 bed sitting empty for 4 weeks = approximately $15-25 of foregone harvest (based on what that space could have produced in salad greens). Succession planting eliminates this dead time. Show the annual cost of a single-succession approach vs succession-optimized approach for a 4x8 bed focused on salad crops.
- Fall succession section expansion: fall succession is where most gardeners leave the most money. Spinach, arugula, kale, and chard all perform better in fall than spring in zones 5-7. Arugula seeded 6 weeks before first fall frost will produce through multiple light frosts under row cover. Calculate: 4-6 weeks of additional harvest at $8/lb arugula = $8-15 from one bed that would otherwise be pulled.
**Acceptance:**
- 1,800+ words
- Zone-specific frost date table (zones 3-8) present
- Crop-specific succession interval table present
- ROI gain math for at least 2 crops (arugula + lettuce)
- Fall succession section with dollar calculation
- USDA ARS frost date source cited
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### CA011 — Expand beginner-homestead-crops.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/beginner-homestead-crops.md`
**What:** Existing article is 681 words - too thin for its position as the homestead section entry point. Expand to 1,600+ words, built around ROI-first crop selection logic rather than "easy to grow" framing.
**Rebuild approach (keep the crop list, replace the structure):**
- Opening: reframe around grocery offset as the primary goal. What you grow should match what you buy. Three months of grocery receipts tells you more than any "best beginner crops" list.
- Crop selection framework section: introduce the concept of value density ($ per sq ft of bed space). High-value beginners: basil ($0.60-0.90/sq ft per season), lettuce ($0.40-0.65/sq ft), cherry tomatoes ($0.50-0.80/sq ft), arugula ($0.60-0.90/sq ft). These numbers change the conversation from "what's easy" to "what's worth planting." Source calculations from plant collection data; cite USDA AMS for prices.
- Per-crop table for the top 5 beginner homestead crops: columns = crop, sq ft needed per plant, plants per 4x8 bed (typical), seed cost, estimated season yield (lbs), retail value of yield, net after seed cost. Five crops: basil, lettuce, cherry tomato, arugula, green bean. All figures cited to USDA AMS and extension sources.
- Year 1 realistic expectations paragraph: what a 4x8 bed of these five crops can return. Not a promise - a calculation. Based on USDA average yields and AMS retail prices, a well-planted 4x8 bed returns $150-280 in grocery equivalents in Year 1. Input cost: $15-25 in seeds, $0-15 in amendments if soil is already decent.
- What beginners fail at section: three specific mistakes with dollar costs. (1) Too many zucchini - glut, zero market value. A single zucchini plant returns $5-8 in actual grocery offset; three plants overwhelm any household. (2) Starting with perennials like asparagus or rhubarb before understanding the 2-3 year wait - zero return year 1 means demoralization. (3) Not tracking - if you don't record what you harvested and what it cost at retail, you can't know if the garden is working.
- Internal links: `/crops/basil/`, `/crops/arugula/`, `/crops/cherry-tomato/`, `/roi/first-three-years-roi/`, `/app/`
**Acceptance:**
- 1,600+ words
- ROI-first structure (not "easiest crops" framing)
- Per-crop table for top 5 (5 rows, 7 columns) with all figures cited
- Year 1 return calculation with sourced figures
- "What beginners fail at" section with dollar costs
- Zero em dashes, no motivational closing
- `npx astro build` passes with 0 errors

---

### CA012 — Expand freezing-vs-canning.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/freezing-vs-canning.md`
**What:** Existing article is 1,291 words. Has equipment cost table and opening logic. Needs 1,800+ words with per-crop method recommendation table, long-term economics, and a freezer burn / quality loss section.
**Add:**
- Per-crop preservation method decision table: for each crop, which method (freeze / can / both / neither) and why. Rows: tomatoes (both - can for sauce, freeze for whole/chunks), green beans (can with pressure canner for shelf-stable; freeze for convenience), strawberries (freeze only - canned strawberries are commercially failure), blueberries (freeze only - best quality), cucumbers (pickles only - don't freeze), basil (freeze as pesto or oil-frozen; can't can), corn (freeze - blanch first; can for corn relish only), zucchini (freeze for baking use; worthless otherwise), dried hot peppers (neither - just dry them). Source: NCHFP best practices.
- Quality loss and its financial cost: freezer burn on improperly stored produce. USDA FSIS data: home frozen vegetables stored beyond 8-12 months lose significant quality. A freezer drawer of burned, wasted produce represents real dollar loss. Calculate what 10 lbs of sub-quality frozen tomatoes is worth: $0, compared to the $30-60 grocery equivalent if frozen correctly. Best practices to prevent this: proper containers, labeling, rotation, blanching per NCHFP guidelines.
- Long-term economics comparison: cumulative cost over 5 years for each method. Freezing: initial $0 (use existing freezer) or $180-250 amortized chest freezer cost over 5 years = $36-50/yr + $20-30/yr electricity + $10-15/yr bags = $66-95/yr. Canning (both methods): initial $110-200 equipment + $20-40/yr lids + $5-10/yr energy = $35-50/yr in steady state. At year 5, canning costs less per preserved pound IF you can a lot. Freezing wins on low-volume preservation. Show the crossover point.
- Space consideration: a 5-gallon bucket of frozen produce takes up significant freezer space. Calculate cubic feet needed for a full season of preservation (10 lbs green beans + 20 lbs tomatoes + 15 lbs berries = roughly 3-4 cubic feet). A 7 cu-ft chest freezer handles a full vegetable garden's surplus. A shared refrigerator freezer does not.
**Acceptance:**
- 1,800+ words
- Per-crop method decision table (9+ rows) present
- NCHFP cited for food safety guidance
- Long-term economics comparison with crossover point
- Zero em dashes
- `npx astro build` passes with 0 errors

---

## New Article Sprint — Data & ROI (CA013-CA020) — Claude Code

High-value articles that have not yet been written. Each addresses a specific ROI question with real data. Load the content skill before starting any.

Load `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md` before writing any of these.

---

### CA013 — Create organic-produce-cost-analysis.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/organic-produce-cost-analysis.md`
**Frontmatter:** `title: "Organic vs. Conventional: The Home Grower's Break-Even"`, `description: "USDA ERS organic price premium data shows which crops give organic buyers the highest return on growing their own. The break-even math for organic households."`, `category: roi`, `featured: false`, `publishDate: 2026-05-01`
**What:** For households buying organic produce, growing your own functions as replacing your most expensive line items. This article compares organic retail prices vs conventional retail prices vs home-grown cost for 12 key crops, showing which crops have the highest organic premium and therefore the strongest ROI case for organic home growers.
**Required content:**
- Organic price premium table: 12 crops with four columns: conventional retail avg price/lb (USDA ERS), organic retail avg price/lb (USDA ERS Organic Price Review or ERS Organic Survey), organic premium ($/lb and %), home-grown input cost/lb (seed cost + inputs ÷ yield). Crops to cover: tomatoes, lettuce, basil, strawberries, kale, spinach, bell peppers, cucumbers, blueberries, apples, peaches, zucchini. Source: USDA ERS Organic Price Series (ers.usda.gov/topics/natural-resources-environment/organic-agriculture) — cite by name and URL.
- The three-tier ROI comparison section: for each crop, a gardener replacing organic retail gets the organic premium as their effective return ON TOP of the conventional savings. Example: organic basil at $22/lb vs conventional at $15/lb vs home-grown at $0.50/lb effective cost — the organic buyer captures $21.50/lb in savings, not $14.50. Show this for the top 5 highest-premium crops.
- Which crops to prioritize section: rank the 12 crops by organic premium. Strawberries (~50-80% premium), apples (~40-60%), spinach (~40-60%), lettuce (~30-50%) tend to be highest. These are the crops where replacing organic retail with home-grown is most financially compelling.
- Which crops are NOT worth it for organic savings: zucchini (organic premium small, crop too abundant to have value), onions (organic premium low, retail price low, not worth bed space just for savings).
- Pesticide residue angle (factual, not advocacy): USDA PDP (Pesticide Data Program) publishes annual pesticide residue data on conventional produce. Crops with highest conventional residue incidence are the same crops where organic premium tends to be highest. Cross-reference without making health claims beyond what USDA data shows. Note that home-grown avoids pesticide application by default if grower doesn't spray.
- Target: 1,800+ words
- Internal links: `/roi/the-500-dollar-garden/`, `/crops/basil/`, `/crops/strawberry/`, `/roi/first-three-years-roi/`
**Acceptance:**
- 1,800+ words
- Organic premium table (12 crops) with USDA ERS citations
- Three-tier comparison for top 5 premium crops
- Prioritized crop list with explicit reasoning
- Zero em dashes, no health claims beyond what USDA data supports
- `npx astro build` passes with 0 errors

---

### CA014 — Create price-seasonality-guide.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/price-seasonality-guide.md`
**Frontmatter:** `title: "Price Seasonality: When Your Garden Saves the Most Money"`, `description: "USDA ERS monthly retail price data shows produce costs 30-80% more in winter than summer for the same crops. Here's how to time your preservation to capture the maximum savings."`, `category: roi`, `featured: false`, `publishDate: 2026-05-05`
**What:** Garden ROI is not a flat number. Tomatoes you grow in August replace $1.89/lb produce. Tomatoes preserved and used in January replace $3.50/lb produce. The gap between peak-season and off-season prices is where the real financial case for preservation lives. This article uses USDA ERS data to map seasonal price swings by crop and calculate the preservation arbitrage opportunity.
**Required content:**
- Seasonal price swing table: 10 crops with monthly low price and winter-peak price. Columns: crop, average summer peak price/lb, average winter price/lb, seasonal swing (%), preservation implication. Source: USDA ERS Vegetables and Pulses Yearbook (ers.usda.gov/topics/crops/vegetables-pulses) and USDA AMS seasonal price reports. Key swings to include: tomatoes (summer $1.50-2.00/lb, winter $3.00-4.50/lb, 80-120% swing), corn ($0.20-0.40/ear summer, $0.60-1.00/ear winter), peppers, basil (extreme seasonal variation), blueberries, strawberries.
- The preservation arbitrage concept: freeze or can during seasonal price lows, consume during price highs. Calculate the per-pound savings for tomatoes: preserve at peak-season input cost ($0.05-0.10/lb for garden-grown + $0.10 bag/energy cost), consume in winter replacing $3.50/lb retail tomatoes. Net savings: $3.25-3.35/lb compared to buying in winter.
- Which crops have the best seasonal swing worth preserving section: rank by preservation ROI. Calculate: (winter retail price - summer retail price) - preservation cost per pound = net seasonal arbitrage per pound. Show that high-swing crops (tomatoes, corn, berries) have dramatically better preservation economics than low-swing crops (carrots, onions, potatoes — which store well anyway).
- The sell-or-preserve calculation for farmers market growers: if you can sell fresh basil at $15/lb in August vs preserve it at $2/lb effective dried cost for winter use worth $4/lb of dried equivalent at retail — the math for selling vs preserving basil is NOT obvious. Include this for market gardeners.
- Regional price variation note: USDA AMS provides weekly reports by terminal market (Chicago, New York, Atlanta, etc.). Seasonal swings are larger in colder climates where local production completely stops in winter. A Zone 4 gardener preserving for winter sees larger ROI than a Zone 8 gardener with year-round local production available. Cite USDA AMS market news reports.
- Target: 1,800+ words
- Internal links: `/homestead/canning-financial-case/`, `/homestead/freezing-vs-canning/`, `/homestead/freezer-math-garden-roi/`, `/crops/tomato/`, `/crops/basil/`
**Acceptance:**
- 1,800+ words
- Seasonal price swing table (10 crops) with USDA ERS/AMS citations
- Preservation arbitrage calculation (explicit math for at least 3 crops)
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### CA015 — Create hardiness-zones-explained.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/hardiness-zones-explained.md`
**Frontmatter:** `title: "Beyond the Zone Map: What Hardiness Ratings Don't Tell You"`, `description: "USDA hardiness zones only measure average minimum winter temps. Here's the AHS heat zone map, microclimate factors, and what zone actually predicts vs. what it doesn't."`, `category: care`, `featured: false`, `publishDate: 2026-05-08`
**What:** Most gardeners know their USDA hardiness zone and stop there. The zone map only measures one variable: average annual minimum temperature. It says nothing about summer heat, soil drainage, humidity, precipitation, frost dates, growing degree days, or microclimate variation within a single property. This article explains the full picture.
**Required content:**
- USDA zone map mechanics: what it measures (average annual extreme minimum temperature, 30-year average). Zone 5 = -20 to -10°F. Zone 6 = -10 to 0°F. Link: planthardiness.ars.usda.gov. Cite USDA ARS as data source. How it's calculated (weather station data, GIS interpolation across the landscape).
- What zone DOESN'T measure section: (1) Heat - Zone 5 in Portland, OR and Zone 5 in Columbus, OH have the same minimum temperatures but very different summers. Portland stays cool (tomatoes struggle); Columbus gets hot summers (tomatoes thrive). This is why the American Horticultural Society created the AHS Heat Zone Map - measures heat days above 86°F per year. Cite: American Horticultural Society Heat Zone Map (ahs.org). (2) Frost dates - zone does not determine when your last spring frost or first fall frost occurs. Two Zone 6 gardens can have 3-week differences in last frost date. (3) Microclimate - south-facing walls in Zone 5 can grow Zone 7 plants. North-facing slopes in Zone 6 behave like Zone 4. What affects microclimate: slope aspect, wind protection, proximity to water, urban heat island, air drainage into frost pockets.
- Growing degree days (GDD) explanation: many vegetable crops use GDD accumulation to determine harvest timing, not calendar dates or zones. Corn requires 800-1800 GDD to reach harvest depending on variety. Tomatoes: 800-1200 GDD from transplant to first ripe fruit. Calculate GDD for your location: (high temp + low temp) / 2 - 50°F base temp. Actual GDD maps available from NOAA. Show why two Zone 6 gardens can have 20% different GDD accumulation based on regional climate patterns.
- Microclimate practical guide: how to identify frost pockets on your property (low areas, downhill from barriers); how to identify warm pockets (south-facing walls, thermal mass); how to measure 2-3°F of temperature difference that determines zone "upgrade" or "downgrade" within your own yard. This is the actionable part.
- Zone-appropriate crop selection section: which crops are genuinely zone-limited (asparagus in Zone 9 won't get dormancy it needs; artichokes in Zone 4 die without protection; figs in Zone 5 need wall protection or winter digging). Use real zone data, not vague statements. Source: USDA ARS plant hardiness data + extension recommendations.
- Target: 1,800+ words
- Internal links: `/guides/soil-ph-by-crop/`, `/guides/succession-planting-calendar/`, `/crops/garlic/`, `/crops/asparagus/`
**Acceptance:**
- 1,800+ words
- USDA zone map mechanics explained with planthardiness.ars.usda.gov link
- AHS Heat Zone Map reference present
- GDD explanation with calculation formula
- Microclimate practical guide sections
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### CA016 — Create heirloom-vs-hybrid.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/heirloom-vs-hybrid.md`
**Frontmatter:** `title: "Heirloom vs. Hybrid: The Seed Saving Economics"`, `description: "F1 hybrids don't breed true from saved seed. Open-pollinated heirlooms do. Here's the full financial comparison: disease resistance, seed saving ROI, and when each wins."`, `category: roi`, `featured: false`, `publishDate: 2026-05-10`
**What:** The heirloom vs hybrid question is usually framed as taste preference or authenticity. The real question is economic: F1 hybrid seed costs $3-6 per packet each year and cannot be saved; open-pollinated seed costs $2.50-4 per packet once and can supply you with seeds forever. But F1 hybrids often have disease resistance that prevents crop failures worth $20-40 per season. The math determines which wins.
**Required content:**
- F1 hybrid genetics section: how F1 crosses work (two inbred parent lines; hybrid vigor = heterosis; seeds from F2 generation segregate unpredictably). Why you can't save F1 seeds: they won't breed true. Cite Mendelian genetics for the mechanism (no exotic sources needed, this is basic biology). Source: Cornell Plant Breeding Program publications on hybrid crops (plantbreeding.cornell.edu).
- Disease resistance = yield insurance table: common tomato disease resistance codes explained: V (Verticillium), F (Fusarium), N (Nematode), T (Tobacco Mosaic Virus), A (Alternaria), TSWV (Tomato Spotted Wilt). Example comparison: Early Blight destroys unharvested heirloom tomatoes at rate of 60-70% yield loss in wet years (Cornell Plant Disease Diagnostic Lab data). Hybrid like Mountain Merit (VF plus Phytophthora resistance) maintains full yield. Dollar cost of that one crop failure: 10 plants × 15 lbs × $2.50/lb = $375. Seed cost difference: $4 heirloom vs $5 hybrid. The disease resistance premium of $1 per packet is not the relevant number.
- Seed saving economics table: 10 crops with columns: crop, heirloom packet cost ($), seeds per packet, plants per packet at typical spacing, saved seeds per plant, years supply from one packet (if saved), annual amortized cost. Show: one packet of Mortgage Lifter tomato ($3.50, 25 seeds) saves enough seed from one plant to supply 25 plants/year forever at $0.14/plant effectively. Same number of hybrid plants costs $5.25/year every year. The seed saving 10-year value: $52.50 cumulative savings on tomato seed alone.
- Which crops save easily section: self-pollinators are safe to save (tomatoes, peppers, beans, peas, lettuce). Cross-pollinators need isolation distance or are complex (cucurbits, brassicas, corn). For beginners: tomatoes are the easiest and highest-ROI seed saving target. Save the best fruit from 3-5 plants, ferment and dry seeds, store in glass — total time: 30 minutes. Value: $3-5 seed packet replaced every year forever.
- When hybrid wins the math: peppers in short-season climates (Zone 4-5). The F1 hybrid Ace pepper ripens 65 days from transplant; many heirlooms take 80-90 days. In Zone 4 with 110-140 frost-free days, the 20-day difference is the yield. The faster hybrid produces a full crop; the heirloom produces nothing before frost. This is where hybrid premium is worth paying. Be specific about the math.
- Target: 1,800+ words
- Internal links: `/homestead/seed-saving-guide/`, `/crops/tomato/`, `/crops/hot-pepper/`, `/roi/first-three-years-roi/`
**Acceptance:**
- 1,800+ words
- F1 genetics mechanism explained (with Cornell citation)
- Disease resistance yield insurance table (at least one real crop loss calculation)
- Seed saving economics table (10 crops)
- "When hybrid wins" section with zone-specific math
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### CA017 — Create plan-for-what-you-eat.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/plan-for-what-you-eat.md`
**Frontmatter:** `title: "Plan Your Garden Around What You Actually Eat"`, `description: "Three months of grocery receipts tell you more about what to grow than any planting guide. Here's the receipt audit method and what typical US households buy most."`, `category: planning`, `featured: false`, `publishDate: 2026-05-12`
**What:** Most beginners plant what sounds interesting. An ROI-focused approach starts with what the household already spends money on. This article introduces the grocery receipt audit as a garden planning tool and provides USDA data on what typical US households actually spend on produce.
**Required content:**
- The receipt audit method section: 3-month grocery receipt audit process. What to capture: every fresh produce line item, price paid, quantity. What to do with the data: rank items by total annual spend (3-month × 4 = full year estimate). The result is your personalized high-value target list. Tools: a notes app with photos of receipts, or the USDA's MyPlate food expenditure tracking tool.
- USDA household food expenditure data table: USDA ERS Food Expenditure Series data (ers.usda.gov/topics/food-nutrition-assistance/food-and-nutrition-assistance-research/food-expenditure-analysis). For an average US household, fresh vegetable spend was approximately $580-640/year in 2022-2023 (cite specific ERS dataset). Top fresh vegetable categories by household spend: potatoes, tomatoes, lettuce/salad greens, sweet corn, onions, peppers, cucumbers along with top fruit: bananas, apples, grapes, strawberries, watermelon. Present these as a table.
- "Grow your receipts" translation table: match top 10 US fresh produce purchases to garden viability. Columns: produce item, avg US household spend, home-grow feasibility (easy/moderate/difficult), bed space needed to replace estimated annual consumption, estimated seed/transplant cost. For the 5 most growable items: tomatoes, lettuce/salad greens, cucumbers, peppers, herbs. The herbs line will show the highest ROI per dollar spent because fresh herbs are criminally expensive at retail vs trivial to grow.
- The herb premium section: USDA ERS data shows fresh herbs cost $14-22/lb on average. A typical household buying one $3 bunch of fresh basil per week for three summer months spends $36 on basil. That household's entire basil consumption can be replaced by one $2.99 seed packet that produces a plant with 20+ cuttings. This is the fastest ROI in the home garden. Repeat this calculation for cilantro, parsley, mint.
- How to match garden space to household needs section: work backwards from the receipt audit. If the household buys $8 of salad greens per week, estimate how much growing space returns that volume. At 0.5-0.75 lb/week from a continuous lettuce/arugula mix, you need roughly 8-10 square feet in constant succession (replant every 2 weeks). At $5-7/lb retail, that's $2.50-5.25/week from 10 sq ft. The audit tells you the target; the spacing math tells you what it takes.
- Target: 1,800+ words
- Internal links: `/roi/the-500-dollar-garden/`, `/roi/raised-bed-break-even/`, `/crops/basil/`, `/crops/lettuce/`, `/crops/arugula/`
**Acceptance:**
- 1,800+ words
- USDA ERS household food expenditure data table with citation
- "Grow your receipts" translation table (10 items)
- Herb ROI calculation (at least 3 herbs)
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### CA018 — Create season-extension-tools.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/season-extension-tools.md`
**Frontmatter:** `title: "Season Extension: What Each Tool Actually Returns"`, `description: "Row covers, cold frames, and low tunnels each add 2-6 weeks to your growing season. Here's the cost of each tool and the harvest value of the extra weeks - the break-even math."`, `category: planning`, `featured: false`, `publishDate: 2026-05-15`
**What:** "Extend your season" appears in every gardening guide. Very few tell you what season extension actually returns in grocery savings per dollar spent on the tools. This article does that math for each tier of season extension, from $15 row covers to $2,000+ high tunnels.
**Required content:**
- Season extension tool comparison table: 5 tiers with columns: tool, typical cost (purchase), temperature protection (°F above ambient), effective added weeks (spring + fall), cost per added week, break-even harvest value needed. Row cover/floating fabric ($0.15-0.40/row foot, row 25 ft = $4-10): 4-6°F protection, adds 2-3 weeks spring + 3-4 fall = 5-7 extra weeks. Low tunnel with wire hoops + row cover ($0.50-1.50/row foot): 6-12°F protection, adds 4-6 extra weeks total. Cold frame ($40-120 DIY): 10-15°F protection, adds 4-8 weeks. Mini greenhouse/hoop house ($200-600 for 6x8): 15-20°F protection, adds 6-12 weeks. High tunnel ($2-5/sq ft, typically 1,000-2,000 sq ft commercial): 25°F+ protection, year-round in zones 5+. Sources: ATTRA (attra.ncat.org) for temperature protection data; USDA NRCS Cost-Share program data for hoop house costs.
- Break-even calculation section: row cover at $10 for 25 row feet protects early spring lettuce and arugula. Three extra weeks of harvest from that 25 feet: 25 row feet at 6-inch spacing = 50 plants. At 0.1 lb/plant/week = 5 lbs/week for 3 weeks = 15 lbs. At $5/lb spring arugula = $75 in harvest value. Break-even: one season. Show this math for each tier. Row covers break even in a single season. Cold frames break even in 2-3 seasons. The ROI case for each tool is completely different.
- The fall extension money section: fall is where season extension has the clearest ROI. August-planted arugula, spinach, kale protected by row cover continues producing through multiple frosts. In Zone 5, row cover can push the harvest season from mid-October to mid-November — 4 additional weeks at the peak of grocery store winter pricing. Calculate the dollar value of those 4 weeks for a 4x8 bed of greens.
- Cost share programs section: USDA NRCS offers high tunnel cost-share assistance under EQIP (Environmental Quality Incentives Program). Assistance can cover 50-75% of high tunnel cost for qualifying operations. Mention this with USDA NRCS URL, but be clear this is for serious production, not backyard hobbyists.
- Crops that don't benefit section: not everything benefits from season extension. Heat-loving crops (corn, squash, melons) cannot use early spring extension — they need warm soil and won't germinate below 60°F soil temperature. Season extension tools work for cool-season crops (greens, brassicas, root crops, alliums) and for the fall extension of warm-season crops (peppers and tomatoes producing til frost).
- Target: 1,800+ words
- Internal links: `/guides/succession-planting-calendar/`, `/crops/arugula/`, `/crops/spinach/`, `/crops/kale/`
**Acceptance:**
- 1,800+ words
- Season extension tool comparison table (5 tiers) with cited data
- Break-even calculations for at least 3 tiers
- ATTRA cited for temperature protection data
- USDA NRCS EQIP mentioned with URL for cost-share
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### CA019 — Create integrated-pest-management.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/integrated-pest-management.md`
**Frontmatter:** `title: "IPM for Home Gardens: The Economics of Pest Control"`, `description: "What does each pest actually cost you in lost harvest, and what's the cheapest method that stops it? IPM action thresholds and intervention cost vs. loss prevention math."`, `category: care`, `featured: false`, `publishDate: 2026-05-18`
**What:** IPM gets framed as an environmental philosophy. That's true, but the most immediately useful way to present it to a home gardener is economic: how much yield loss does each common pest cause, what does intervention cost, and at what threshold does spending money on control pay off?
**Required content:**
- The IPM action threshold concept: you don't spray (or do anything) because you saw one aphid. You spray when the economic damage threshold is reached — meaning pest density is high enough that crop losses exceed the cost of intervention. In IPM, this is called the "action threshold." Source: USDA NRCS IPM guidelines and EPA Integrated Pest Management page (epa.gov/pesticides/ipm). The gardener's version: if 5% of tomato leaves show aphid damage, the plant is under stress but likely recovers without intervention. At 30%, harvest is threatened. The calculation determines when it's worth $8 on insecticidal soap vs absorbing the loss.
- Common pest economic threshold table: 8 pests with columns: pest, crop affected, economic threshold (how many/how much damage before acting), estimated yield loss if untreated (% of expected harvest), low-cost intervention ($), intervention ROI (harvest value saved / intervention cost). Pests: aphids (most vegetables), squash vine borer (cucurbits), tomato hornworm, Colorado potato beetle, cucumber beetle, imported cabbageworm (brassicas), bean leaf beetle, spider mites. Source thresholds from land-grant extension resources (Cornell, Penn State, OSU, University of Minnesota Extension).
- Beneficial insect habitat ROI section: plants that attract predatory insects reduce pest pressure without any direct cost. Alyssum, borage, and dill attract *Aphidius* parasitic wasps and *Chrysoperla* lacewings that consume aphids. *Trichogramma* egg parasites attack tomato hornworm eggs. Research citation: Landis et al. (2000) in Annual Review of Entomology on arthropod management in agricultural landscapes; specific yield impact data from USDA ARS beneficial insect studies. The economic value: if companion plant habitat reduces aphid intervention frequency by 50%, and interventions cost $8 each with 3 per season, that's $12 saved from a $2 seed packet of alyssum.
- The "don't spray" default failure analysis: home gardeners default to spraying at first sign of any pest. Every pesticide application has costs: product cost ($5-20), application time, and ecological cost (kills beneficial insects including pollinators). Killing pollinators means crop failure in the next generation — which has a much higher dollar cost than the pest you were trying to eliminate. Calculate: losing 30% of squash pollination from a broad-spectrum spray that killed bees costs more than the 5% yield loss from the aphids you were spraying.
- Organic vs synthetic intervention cost comparison: for each major pest, what does organic intervention cost vs synthetic? And what is the difference in efficacy? Spinosad (organic-approved) for thrips: $15-25/bottle, highly effective, 4-day re-entry interval. Permethrin (synthetic): $8-15/bottle, broad-spectrum, kills everything. Insecticidal soap: $6-10/bottle, contact killer only, generally safe for beneficials. Be honest: synthetic broad-spectrum is often cheaper and faster. The IPM case is not that synthetic is always wrong, but that it should be last resort and targeted.
- Target: 1,800+ words
- Internal links: `/crops/tomato/`, `/crops/cucumber/`, `/crops/kale/`, `/homestead/companion-planting-basics/`
**Acceptance:**
- 1,800+ words
- Action threshold concept explained (with EPA/USDA NRCS citation)
- Economic threshold table (8 pests, all columns)
- Beneficial insect habitat section with specific insects cited
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### CA020 — Create rain-barrel-roi.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/rain-barrel-roi.md`
**Frontmatter:** `title: "Rain Barrel ROI: When Does Collecting Rainwater Pay?"`, `description: "EPA 0.623 gal/sq ft/inch formula calculates your roof's collection potential. Whether a $60 rain barrel pays off depends on your municipal water rate and annual rainfall. Here's the math."`, `category: homestead`, `featured: false`, `publishDate: 2026-05-20`
**What:** Rain barrels appear on every sustainability list. Whether they actually pay off depends entirely on local water rates and rainfall patterns. This article applies the EPA runoff formula to real scenarios across US climate regions.
**Required content:**
- Collection potential formula section: EPA runoff calculation: collection volume = roof area (sq ft) × rainfall (inches) × 0.623 (conversion factor) × efficiency factor (0.85 for typical sloped roof). Source: EPA WaterSense program (epa.gov/watersense). Example: a 1,000 sq ft roof section with 1 inch of rain collects 1,000 × 1 × 0.623 × 0.85 = 530 gallons. Show how to apply this for a typical home: a 200 sq ft roof section over a garden-adjacent downspout captures 530/5 = 106 gallons per inch of rain.
- Regional rainfall data table: 8 US cities with annual rainfall, typical collection potential from one 55-gal barrel collection point. Columns: city, climate region, annual rainfall (inches), collection per inch (gallons, based on 200 sq ft catchment), estimated annual collected (gallons). Cities: Seattle (WA, 38"/yr), Portland (OR, 36"), Denver (CO, 14"), Phoenix (AZ, 8"), Dallas (TX, 37"), Kansas City (MO, 40"), Atlanta (GA, 50"), New York (NY, 50"). Source: NOAA National Climate Data Center (ncdc.noaa.gov).
- Water cost by region table: municipal water rates vary 3x across the US. Columns: region/example city, average residential water rate ($/gal), source. Use AWWA (American Water Works Association) annual rate survey data — this is the standard industry source for water pricing. National average approximately $0.005-0.006/gal (AWWA 2023 survey). Western drought regions (Los Angeles, Phoenix metro): $0.010-0.018/gal. Tier-rate systems in drought regions can make marginal water extremely expensive.
- Break-even calculation table: 4 scenarios. For each: rain barrel cost ($60-80 for 55-gal basic; $120-200 for 100-gal), annual collection (gallons from regional table), annual water cost saved, years to break even. Show: Seattle ($0.005/gal, 40" rain, 2,492 gal/yr × $0.005 = $12.46/yr) → break-even 5-6 years. Phoenix ($0.016/gal, 8" rain, 499 gal/yr × $0.016 = $7.98/yr) → break-even 8-10 years (less rain but more expensive water = similar payback). Los Angeles ($0.018/gal, 15" rain, 935 gal/yr × $0.018 = $16.83/yr) → 4-5 year break-even.
- When rain barrels make sense and when they don't section: Make sense: high municipal water rates, supplemental summer watering for large gardens, educational/symbolic value (free), regions with moderate-high rainfall. Don't make sense: private well (marginal cost = $0), arid regions with almost no summer rain (Phoenix in July gets minimal rain, which is exactly when water is needed), heavy regulatory restrictions in some Western states (Colorado had limited residential rainwater collection until 2016 law change — note this legal history).
- Target: 1,600+ words
- Internal links: `/roi/water-cost-per-crop/`, `/roi/the-500-dollar-garden/`, `/crops/tomato/`
**Acceptance:**
- 1,600+ words
- EPA collection formula with WaterSense citation
- Regional rainfall table (8 cities) with NOAA citation
- Water cost by region with AWWA citation
- Break-even calculations (4 scenarios)
- Zero em dashes
- `npx astro build` passes with 0 errors

---

## Plant Expansion Sprint (PE001-PE006) — Claude Code

These are existing plant pages that are too short for the value of the crop. Expand each with more depth, better ROI math, and crop-specific details that make them genuinely useful.

Load `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md` before writing any of these.

---

### PE001 — Expand cauliflower.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/cauliflower.md`
**What:** Current file is 682 words. Expand to 1,200+ words with variety-specific ROI data, colored variety price premiums, blanching window economics, and zone-adjusted timing.
**Add:**
- Variety ROI comparison table: white standard (Snowball Y: $2.50-3.50/lb retail), orange (Cheddar: $4.50-7.00/lb — USDA AMS specialty), purple (Graffiti: $5.00-8.00/lb), Romanesco ($5.00-8.00/lb). Source: USDA AMS Specialty Crops Market News. The case for growing colored varieties: $3-4/lb premium over white for identical growing effort.
- Blanching explained with economic stakes: blanching (tying leaves over developing head to exclude light) prevents yellowing and preserves white curd quality. A yellowed head drops from $3.50 to near-zero market value — grocery stores won't sell yellowed cauliflower, and most home gardeners throw it out. The 10 minutes spent tying leaves protects $5-7 of harvest. Timing: check daily once head reaches 2-3 inches. The head goes from curd size to harvest-ready in 5-10 days depending on temperature. In heat, this window compresses to 3-5 days. Be emphatic: check it every day once it starts.
- Zone timing and failure mode analysis: Zone 4-5: transplant 2-3 weeks before last frost for spring crop; OR start from transplant 10-12 weeks before first fall frost for fall harvest. Fall crop often better in northern zones — cooler temps produce better curd. Zone 6-7: both spring and fall crops viable; fall timing easier (transplant late July/early August for October harvest). Zone 8+: primarily a fall/winter crop; spring cauliflower fails in heat. What goes wrong in each zone from a yield (ROI) perspective.
- Side crop potential: stems and leaves are edible (same as broccoli). A cauliflower plant that produced a perfect head also produces 1-2 lbs of stems/leaves. These replace nothing specific at retail, but they eliminate the "throw away the plant" assumption. Note: cauliflower does NOT produce side heads after the main harvest the way broccoli does — different plant architecture.
**Acceptance:**
- 1,200+ words
- Variety ROI comparison table (white, orange, purple, Romanesco)
- Blanching window explained with dollar stakes
- Zone-specific timing with failure analysis
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE002 — Expand brussels-sprouts.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/brussels-sprouts.md`
**What:** Current file is 710 words. Expand to 1,200+ words with timing-critical analysis, topping/pinching mechanics, aphid economics, and the frost sweetening case.
**Add:**
- Long-season timing by zone: brussels sprouts need 85-120 days to first harvest. In Zone 5, last frost May 10 + 120 days = September 7 first harvest — but the BEST sprouts come in October-November after frost. Plant math: start transplants indoors 4-6 weeks before transplant date, transplant 2-3 weeks before last frost as hardy seedlings, count 120+ days to harvest. Zone 4: transplant mid-April, harvest October. Zone 6-7: transplant late April/early May, harvest November-December. This is the most timing-sensitive vegetable in the home garden. Getting it wrong by 3 weeks means no harvest before freeze.
- Topping/pinching section with yield math: at 4-6 weeks before first expected frost (approximately early September in Zone 5), top the plant by pinching or cutting the growing tip. This forces energy from new leaf growth into the existing sprouts, doubling their mature size. Without topping: sprouts average 0.75-1 inch diameter. After topping: same plants, 1.5-2 inch diameter sprouts. Yield impact: better marketable/culinary sprouts AND larger individual mass. Cite University of Minnesota Extension for this technique.
- Aphid economic threshold section: brussels sprouts are the primary target for aphid colonies in the garden. A colony typically establishes under large outer leaves where squirting from above with water doesn't reach. At 5-10% leaf damage, plant is fine; at 30%+, the colony is affecting new growth. The critical threshold for brussels sprouts is whether aphids penetrate the developing sprout heads — if they do, the heads are unmarketable. Economic calculation: 15 plants × avg 1.5 lb/plant × $4.50/lb = $101.25 potential harvest. Spray or blast decision when 5+ heavily infested plants are seen.
- Frost sweetening economics: brussels sprouts exposed to at least two frosts (28-32°F) convert starches to sugars, dramatically improving flavor. USDA ARS post-harvest research documents sugar content increases of 50-70% after frost exposure. The gardener's advantage over grocery stores: store-bought brussels sprouts were harvested without frost exposure and shipped in refrigeration. Your frost-kissed November harvest is categorically different. This is non-replicable by any retail source. Value: fresh frost-kissed sprouts would fetch farmers market premium of $5-7/lb vs commodity $4/lb.
**Acceptance:**
- 1,200+ words
- Timing by zone table or explicit zone-specific text
- Topping/pinching instruction with yield math
- Aphid economic threshold with dollar stakes
- Frost sweetening with cited research
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE003 — Expand raspberry.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/raspberry.md`
**What:** Current file is 919 words. Expand to 1,400+ words with everbearing/summer-bearing comparison, primocane/floricane management, sucker propagation economics, and a 10-year ROI table.
**Add:**
- Summer-bearing vs everbearing comparison table: summer-bearing (one large crop in June-July, floricanes only, larger berry size, higher yield per harvest window). Everbearing/fall-bearing (two crops: June from second-year canes + August-October from first-year canes, smaller individual berries, extended season). Yield comparison: established summer-bearing plants average 4-6 lbs/plant/year (Penn State Extension, *Small Fruit Management*, 2019). Everbearing: 2-3 lbs/plant/year from each crop = 4-5 lbs total. Source: Penn State Extension.
- Primocane vs floricane biology section: critical for understanding why pruning decisions affect yield. Summer-bearing raspberry produces fruit on second-year canes (floricanes) only. First-year canes (primocanes) grow vegetatively. After fruiting, floricanes die. Pruning rule: remove all floricanes after harvest (they're done); let primocanes grow. Everbearing produces fruit at tips of first-year canes (primocane fruiting) in late summer, then the SAME cane overwinters and produces again in June. This means everbearing plants are never in a "zero cane" state.
- 10-year raspberry ROI table: establishment through Year 10. Columns: year, input cost ($), expected yield (lbs), revenue equivalent at $6/lb, net for year, cumulative net. Year 1: 5 plants at $6-10 each = $30-50, few or no berries (pinch flowers off first year), net -$30 to -$50. Year 2: $5-10 (mulch only), 3-5 lbs/plant × 5 plants = 15-25 lbs at $6 = $90-150, net $80-145. Year 3-10: plants triple via suckers to 15+ plants, $10/yr inputs, 40-80 lbs/yr yield at $6/lb = $240-480/yr. Cumulative 10-year net: $1,200-2,500 from initial $30-50 investment. Source yield data: Penn State Extension, USDA ARS.
- Sucker propagation economics: raspberry spreads via basal suckers (new shoots from roots). Each mature plant generates 3-6 new suckers per year. These are free new plants — dig and transplant in spring. Economic impact: 5 plants in Year 1 can become 15-25 plants by Year 3 at zero additional cost. At Year 3 yields, 20 plants × 3 lbs × $6/lb = $360/yr from a $40 initial investment. Calculated ROI: 800%+ over 10 years on initial investment.
- Disease pressure what-to-watch section: botrytis (gray mold on fruit in wet weather), cane blight, raspberry mosaic virus (spread by aphids — control aphids). These are the three failure modes that collapse the 10-year math. Basic avoidance: good air circulation (don't overplant), floricane removal after harvest (removes disease reservoir), aphid monitoring.
**Acceptance:**
- 1,400+ words
- Summer vs everbearing comparison table
- Primocane/floricane biology explained
- 10-year ROI table (Year 1 through Year 10, all columns)
- Sucker propagation with multiplication math
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE004 — Expand blackberry.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/blackberry.md`
**What:** Current file is 913 words. Expand to 1,400+ words with thornless vs thorned economics, native wild competition analysis, 10-year ROI table, and preservation value multiplier.
**Add:**
- Thornless vs thorned decision table: columns = type, examples (varieties), yield compared to thorned, cane management ease, cost difference (plants), recommendation. Thorned: Ouachita, Kiowa, Cherokee — 20-30% higher yield per cane (University of Arkansas Extension research), more vigorous, harder to harvest, more difficult to manage. Thornless: Triple Crown, Chester, Natchez — slightly lower yield, dramatically easier to harvest and manage, price premium at nurseries $3-5/plant more. For home use: thornless. For higher volume: thorned. Source: University of Arkansas Extension Small Fruits Research.
- Native wild blackberry context: in zones 4-7 throughout much of the eastern US, wild blackberries (*Rubus allegheniensis* and related species) grow along woodland edges. If the homestead has wild berry access, the ROI calculation changes. Calculate: 2 hours picking wild berries at an average of 2 lbs/hr = 4 lbs at $5.50/lb retail equivalent = $22/hr of effective return. Compare to planted blackberry patch ROI. The article is not anti-wild-blackberry -- make the point that if wild access exists, that's free Years 1 and 2. Plant your own patch for Years 3-20 when the wild patch has competition.
- 10-year blackberry ROI table: same structure as raspberry table. Initial purchase: 3 plants at $12-18 each = $36-54. Year 1: few or no berries. Year 2: 3-5 lbs/plant. Year 3+: plants multiply via root sprouts, 8-15 plants, 4-6 lbs/plant = 32-90 lbs/yr at $5.50/lb = $176-495/yr. Year 10 cumulative net: well above $1,000. Source: University of Arkansas Extension, USDA ARS.
- Preservation value multiplier: fresh blackberries at $5.50/lb at retail. Frozen blackberries at retail: $4-6/lb (comparable). Blackberry jam (artisan, local): $8-14 per half-pint (store), which requires about 1 lb of berries. Blackberry wine (small craft winery): bottles start at $15-22. Blackberry vinegar: $12-20/bottle specialty. The home grower's advantage: process surplus into these high-value products at near-zero additional cost. One additional hour processing 10 lbs of blackberries into jam produces 8-10 half-pints with retail equivalent of $64-140.
**Acceptance:**
- 1,400+ words
- Thornless vs thorned decision table (with University of Arkansas Extension citation)
- Wild blackberry context section
- 10-year ROI table
- Preservation value multiplier with specific products/prices
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE005 — Expand blueberry.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/blueberry.md`
**What:** Current file is 990 words. Expand to 1,600+ words. This crop has the most critical soil pH requirement of any common fruit; the pH story IS the blueberry story. Add pH establishment math, variety-by-zone guide, establishment timeline with yield ramp, and 10-year ROI.
**Add:**
- pH establishment as the primary cost section: blueberries require soil pH 4.5-5.5. Standard garden soil is typically pH 6.0-7.0. Lowering pH requires elemental sulfur applied months in advance. Amendment cost: elemental sulfur $10-15 for 6 lbs (covers 100 sq ft lowering pH by 1 unit, but soil type matters). Sandy soil: apply sulfur and retest in 3 months. Clay soil: takes 12-18 months to move pH significantly. The investment timeline: prepare soil the fall before planting; test pH before planting; test again at planting and adjust. Source: Michigan State University Extension *Blueberry Culture in the Home Garden*, E-1152.
- Blueberry compatibility warning: blueberries cannot be grown in the same bed or in the same soil system as most other vegetables. pH 4.5-5.5 is toxic to most vegetables (causes nutrient lockout). Blueberries require their own dedicated acidic bed, completely separate from the main garden. This is the most common beginner mistake with blueberries. The cost of this mistake: amended soil that killed adjacent crops + replanting loss.
- Variety guide by zone table: rows = variety type, minimum zone, maximum zone, harvest season, yield at maturity, key characteristic. Northern highbush varieties (Duke, Bluecray, Toro): Zone 4-7, earliest fruit (late June-July), 8-20 lbs/plant at maturity. Southern highbush (O'Neal, Sunshine Blue): Zone 7-9, early harvest, bred for low-chilling-hour requirement. Rabbiteye (Tifblue, Brightwell): Zone 7-9, heavy producers, 20-25 lbs/plant mature, must have two varieties for cross-pollination. Lowbush (*V. angustifolium*): Zone 3-6, low growing, spreads via rhizomes, lower per-plant yield but near-permanent planting. Source: USDA ARS Blueberry and Cranberry Research Lab; Michigan State and University of Maine Extension for northern varieties; University of Georgia Extension for southern highbush and rabbiteye.
- Establishment timeline and yield ramp table: Year 1: plant bare-root or container plants in spring, pinch all flowers (sacrifice first crop for root development), input cost $8-15/plant for 3-4 plants. Year 2: first small harvest (0.5-1 lb/plant), $0-5 input (mulch). Year 3: 2-4 lbs/plant. Year 4: 4-8 lbs/plant. Year 5+: 8-20 lbs/plant (northern highbush). Plants live 20-50 years. Source: Michigan State Extension.
- 10-year ROI table: same format as raspberry/blackberry tables. Initial investment: 4 plants ($10-15 each) + pH amendment ($30-60) + mulch ($15-25) = $95-145. Years 1-2: negligible or zero harvest. Years 3-5: yield ramp. Year 6-10: full production at 8-15 lbs/plant × 4 plants = 32-60 lbs/yr at $5-8/lb = $160-480/yr. Year 10 cumulative net: well positive. Highlight: year-20 cumulative return from one-time investment.
**Acceptance:**
- 1,600+ words
- pH establishment as primary cost, with MSU Extension citation
- Variety guide by zone table (4 types, all zones)
- Establishment yield ramp table (Year 1-10)
- 10-year ROI table
- Blueberry isolation from other beds explicitly stated
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE006 — Expand rhubarb.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/rhubarb.md`
**What:** Current file is 996 words. Expand to 1,400+ words with 20-year perennial arc, crown division economics, spring price premium analysis, and preservation cases.
**Add:**
- 20-year perennial economics: rhubarb is a true 20-25 year planting. Once established, it asks for essentially nothing except annual compost and division every 4-5 years. The math over 20 years from one crown: initial cost $8-15 (bare root crown or small plant). Year 2: first small harvest. Year 3+: 4-10 lbs/crown/year (Penn State Extension, *Rhubarb*, Fact Sheet HO-40). At $2.50-4.00/lb spring retail (USDA AMS — rhubarb prices peak sharply in March-May, then the season ends). Annual yield value: $10-40/yr. 20-year cumulative: $200-800 from one $12 investment. No other crop delivers this ratio.
- Crown division economics: divide rhubarb every 4-5 years to maintain vigor. Each division produces 3-5 new crowns from one established plant. Each new crown is worth $8-15 at retail garden centers (same price you paid for the original). Division creates: (1) free new plants for your own expansion, (2) share-able divisions with value. A 15-year-old rhubarb plant that has been divided twice now has 9-25 active plants. Give away extras, plant more, or compost old woody centers.
- Spring price premium analysis: rhubarb has the most pronounced seasonal price spike of any common garden crop. USDA AMS winter retail price: minimal supply, $4-7/lb in some markets. Peak May retail: $2-3/lb (peak supply). Late summer: typically not available at all — the season is over. The strategy: your rhubarb crown produces its major harvest in May-June, exactly when retail prices are still above average due to early season scarcity. Preserve surplus (jam, frozen chunks, compote) to extend the season into the summer and fall months.
- Zone requirement section: rhubarb requires winter dormancy in cold temperatures. This is NOT optional — plants need 500+ hours below 40°F for adequate chilling (similar concept to fruit trees). Zone 3-8 is the range. Zone 9+ is too warm; plants survive but don't thrive long-term, don't divide well, and gradually decline. This is the crop you cannot grow in the South, and that's part of what makes it valuable in cold climates: no competition from regions that produce tomatoes year-round.
- Leaves toxic warning (brief): emphasize leaves contain high oxalic acid concentrations. Only the red/green stalks are edible. This is not a controversy or new information; include it briefly with authoritative source (USDA FoodData Central shows oxalic acid content of rhubarb leaves is toxic at culinary doses). One sentence is sufficient.
**Acceptance:**
- 1,400+ words
- 20-year economics calculation with Penn State Extension citation
- Crown division economics with multiplication math
- Spring price premium using USDA AMS data
- Zone requirement with chilling hours
- Zero em dashes
- `npx astro build` passes with 0 errors

---

## New Plant Sprint (PB001-PB005) — Claude Code

Plants that have real ROI stories not yet covered on the site.

Load `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md` before writing any of these.

---

### PB001 — Create pole-bean.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/pole-bean.md`
**Frontmatter:**
```
name: Pole Bean
scientific_name: Phaseolus vulgaris (indeterminate)
category: Vegetable
days_min: 55
days_max: 65
avg_yield_lb: 5.0
avg_price_lb: 2.00
seed_cost: 2.99
is_common: true
watering: Regular; 1 inch/week; keep soil consistently moist once pods forming
sunlight: Full sun (6+ hours)
companion_plants: ["corn", "carrot"]
description: "Pole Bean (Phaseolus vulgaris) - 5 lbs/10-foot row over 8-10 weeks of continuous harvest. Unlike bush beans, picking triggers new production for the rest of the season."
hero_image: /images/crops/pole-bean.webp
```
**What:** Pole beans and bush beans grow from identical seeds. The difference is how long they produce: bush beans flush once in 2-3 weeks, then are done. Pole beans produce continuously for 8-12 weeks if you keep picking. This is the ROI distinction this article must make concrete, with math.
**Required sections:**
- What you're growing: indeterminate bean growing behavior vs. determinate (bush) beans. Botanical identity and how indeterminate growth applies to yield models.
- Pole vs bush ROI comparison table: columns = type, days to maturity, harvest window (weeks), total yield per 10-row-foot, seed cost/10 ft, input cost, yield value at $2/lb, net. Bush bean: 50-55 days, 2-3 weeks harvest, 4-6 lbs, $1.50, $0, $8-12, ~$7-11 net. Pole bean: 60-65 days to first, 8-12 weeks harvest, 10-18 lbs, $2.00, trellis $3 (one-time), $20-36, ~$17-30 net. Source: USDA AMS for retail bean price; extension data for yield comparison.
- Trellis options and economics: simple bamboo tripod ($0-5 with found materials), wire cattle panel ($0.50-1.50/row foot one-time), or string/stake system ($3-8 per 25-foot row). Trellis amortized over 5 years: negligible. Trellis improves air circulation, reducing disease and improving yield. The one-time infrastructure makes pole beans economically superior to bush beans in any setup beyond 1-2 plantings.
- Variety guide: Kentucky Wonder (heirloom, reliable, open-pollinated for seed saving), Rattlesnake (speckled, excellent fresh or dried), Dragon Tongue (flat wax pod type, farmers market premium), Yardlong/Asparagus Bean (different species, *Vigna unguiculata subsp. sesquipedalis*, grows 12-18 inch pods, popular in Asian cuisine, $2-4/lb specialty market). Each variety with days to maturity, best use, and any price premium.
- Succession possibility: unlike arugula, succession planting pole beans doesn't help much — one planting produces continuously until frost. The better strategy: plant one batch 2 weeks after the last frost; this gives full season production. Only replant if you want dried beans (let final pods dry on vine).
- Seed saving: pole beans are self-pollinating, easy to save. Let some pods dry completely on the vine, shell, dry for 2 more weeks indoors, store in airtight container. Year 2+: seed cost = $0.
**Acceptance:**
- 800+ words
- Pole vs bush ROI comparison table
- Trellis options with economics
- Variety guide (4 varieties)
- Seed saving instructions
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PB002 — Create peach.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/peach.md`
**Frontmatter:**
```
name: Peach
scientific_name: Prunus persica
category: Fruit
days_min: 1095
days_max: 1825
avg_yield_lb: 50.0
avg_price_lb: 2.50
seed_cost: 24.99
is_common: true
watering: Regular; 1 inch/week; reduce after leaf drop; drought-stress after fruit set reduces quality
sunlight: Full sun (8+ hours; more sun = more sugar accumulation)
companion_plants: ["arugula", "garlic"]
description: "Peach (Prunus persica) - Year 3-5 payback, 50-100 lbs at full maturity at $2-3/lb fresh. Chilling hours are the deciding variable: match variety to your location's winter chill."
hero_image: /images/crops/peach.webp
```
**What:** Peach trees require a one-time commitment of 3-5 years before meaningful harvest, then produce for 15-20 years. The ROI story is a long-arc investment, and chilling hours are the single most critical factor that determines whether the investment pays off at all.
**Required sections:**
- What you're actually buying: peach trees sold in commerce are grafted onto rootstocks. The scion (fruiting variety) determines flavor/size/disease resistance; the rootstock influences size (dwarfing or standard), soil adaptation, and disease resistance below ground. This matters because disease resistance often resides in rootstock choice, which nurseries rarely explain.
- Chilling hour requirement by variety table: columns = variety, chill hours needed, zones appropriate, harvest season, special notes. Include: Reliance (900-1100 hours, Zone 4-8, mid-August, extremely winter-hardy), Redhaven (950-1050 hours, Zone 5-8, late July, excellent commercial quality), Contender (1050 hours, Zone 4-8, August, disease-resistant), Winblo (850 hours, Zone 6-9, September), Flordaprince (150-200 hours, Zone 8-9, very early, low-chill), UFSharp (100-150 hours, Zone 9-10). Source: USDA ARS stone fruit research; University of Georgia Extension for low-chill varieties; Michigan State Extension for northern varieties. What chill hours means: hours between 32-45°F (ideally) from November through February. Most peach varieties need 800-1100 hours; low-chill varieties need 100-400 hours for warm climates.
- Clingstone vs freestone and ROI implications: freestone fruit separates cleanly from pit — better for fresh eating, slicing, and canning. Clingstone clings to pit — generally earlier-ripening, often sweeter, used by commercial canners. For home use: freestone nearly always preferred. For preservation: either works, but clingstone requires more processing time per pound. Retail price: canned peaches (standard commercial clingstones) $1.50-2.50/pound equivalent. Fresh freestone at farmers market $2-4/lb. Preserve your own freestone: captures fresh price in preserved form.
- 10-year ROI table: Year 1: $25-40 bare-root tree, planting labor. Years 1-2: minimal or no harvest (some growers remove early fruit to strengthen tree). Year 3: first real crop, 10-20 lbs. Year 4: 25-40 lbs. Year 5+: 50-100 lbs/year. At $2.50/lb: $125-250/yr at maturity. Year 10 cumulative net: strongly positive. Source: USDA ARS peach production data; Penn State Extension.
- Disease: brown rot (*Monilinia fructicola*) is the primary threat and the primary reason peach trees fail to deliver their ROI. Brown rot can destroy an entire harvest in 3-5 days of wet weather during ripening. Varieties with any level of resistance: Contender has moderate resistance. Most others don't. Management: preventive copper/lime sulfur spray at petal fall, proper sanitation (remove mummified fruit). Be honest: peaches require the most spray management of any common home fruit tree. This is the honest warning the article owes the reader.
**Acceptance:**
- 900+ words
- Chilling hour requirement table (6+ varieties)
- 10-year ROI table
- Brown rot warning with specific management guidance
- Clingstone vs freestone with preservation implications
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PB003 — Create peppermint.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/peppermint.md`
**Frontmatter:**
```
name: Peppermint
scientific_name: Mentha x piperita
category: Herb
days_min: 60
days_max: 90
avg_yield_lb: 0.5
avg_price_lb: 18.00
seed_cost: 3.99
is_common: true
watering: Regular; 1-1.5 inches/week; tolerates moist conditions; container soil dries faster than in-ground
sunlight: Full sun to part shade (4-6 hours works; more sun = higher menthol)
companion_plants: ["arugula", "tomato"]
description: "Peppermint (Mentha x piperita) - grow in containers only; spreads invasively in-ground. One container produces $15-25 equivalent of fresh mint tea per season. Propagates by stolon in water in 7-10 days."
hero_image: /images/crops/peppermint.webp
```
**What:** Peppermint is distinct from mint.md (which covers the broader genus). Peppermint specifically (*Mentha x piperita*) is a sterile hybrid of watermint and spearmint that MUST be propagated vegetatively — no viable seed. This changes the economics significantly. The tea market value, menthol content, and container-only requirement are what differentiate this entry.
**Required sections:**
- What it is (distinct from mint.md): The generic "mint" plant sold in garden centers is usually spearmint (*Mentha spicata*) or a hybrid. True peppermint is *Mentha x piperita* — higher menthol content than spearmint (~40% vs ~0.5%), sterile (no seed production), must be propagated by stolons or cuttings. This is why peppermint seed packets don't exist: they sprout spearmint or mint hybrids, not peppermint.
- Propagation economics: snip a 4-inch stem just below a leaf node, remove lower leaves, place in glass of water on a windowsill. Roots appear in 7-10 days. Source a single plant from a reputable nursery ($4-7) and propagate as many as needed. Year 2+: free plants from your own stolons. One peppermint container purchased once becomes a permanent free plant resource.
- Container requirement and soil: peppermint spreads via underground stolons at aggressive rate (18 inches/month in favorable conditions). In-ground planting without containment means it colonizes adjacent bed space in one season. Container culture solves this: 12-16" diameter container, high-quality potting mix (not garden soil, which compacts in pots), consistent moisture. A single 16" pot produces 4-6 oz fresh harvest per cutting cycle.
- Tea market value section: fresh peppermint at retail: $1.50-3.00/oz at grocery stores (USDA AMS). Dried peppermint for tea: $15-25/lb fresh equivalent at specialty retailers. One pot of peppermint tea serves 2: 3-4 fresh sprigs (0.25-0.5 oz). At $3/oz retail: $0.75-1.50/serving from grocery fresh mint. From your container: near-zero cost per serving. Annual retail equivalent of one 16" container: $30-60 in fresh herb used for tea, cooking, and garnish.
- Menthol content by cultivar: 'Mitcham' (Black Mitcham) peppermint: 55-60% menthol — the highest available. Standard commercial peppermint: 35-45% menthol. 'Chocolate Mint': lower menthol, different flavor profile, not true peppermint for tea purposes. 'Spearmint' comparison: 0.5-1% menthol — completely different sensory profile. Source: USDA ARS essential oil crop research.
**Acceptance:**
- 800+ words
- Propagation economics explained
- Container requirement clearly stated (in-ground = invasive)
- Tea value calculation with USDA AMS citation
- Menthol content by cultivar with USDA ARS citation
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PB004 — Create apple.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/apple.md`
**Frontmatter:**
```
name: Apple
scientific_name: Malus domestica
category: Fruit
days_min: 1460
days_max: 2555
avg_yield_lb: 80.0
avg_price_lb: 1.75
seed_cost: 34.99
is_common: true
watering: Regular during establishment (2 years); 1 inch/week; drought-tolerant once established
sunlight: Full sun (8+ hours; direct sun on fruit improves sugar accumulation and color)
companion_plants: ["arugula", "garlic"]
description: "Apple (Malus domestica) - 4-7 year payback on a dwarf variety, 40-100+ lbs at maturity. Disease resistance by variety is the single most important purchase decision."
hero_image: /images/crops/apple.webp
```
**What:** Apple trees are the ultimate long-arc investment in the home food system. An apple tree planted today is a 30-50 year productive asset that will outlive most other investments in the garden. The article must be honest about the 4-7 year wait, the critical importance of variety selection for disease resistance, and the difference between dwarf/semi-dwarf/standard tree economics.
**Required sections:**
- Rootstock determines size and timeline: semi-dwarf (EMLA 7 or EMLA 26 rootstock): 12-15 feet, fruiting starts at Year 4-6, 80-120 lbs at maturity. Dwarf (EMLA 27 or M.9): 6-10 feet, fruiting starts at Year 3-4, 40-60 lbs at maturity. Standard (seedling rootstock): 20-30 feet, fruiting starts at Year 7-10, 400-800 lbs at maturity (too large for most home lots). Source: Penn State Extension *Apple Rootstock and Tree Size* (Penn State Fruit Research and Extension Center).
- Disease resistance is the most important purchase decision: fire blight (*Erwinia amylovora*), apple scab (*Venturia inaequalis*), and cedar apple rust (*Gymnosporangium juniperi-virginianae*) are what kill apple production plans. An unresistant apple in a humid Zone 5-7 climate loses 30-60% of its crop to scab alone without fungicide management. Disease-resistant varieties require little or no spray management. Comparison table: variety, fire blight resistance, scab resistance, flavor, harvest timing. Include: Enterprise (high-high, excellent flavor, late October), Liberty (high-high, mild sweet, mid-September), Pristine (moderate-high, tart-sweet, August), Honeycrisp (low-moderate, exceptional flavor, September — be honest that it's disease-susceptible). Source: Cornell University's NYSAES apple program (cornell.edu/nysaes) — the leading source for disease resistance data.
- 10-year ROI table: dwarf variety. Year 1: tree cost $30-50, planting cost. Years 2-3: minimal harvest. Year 4: 10-20 lbs. Year 5: 20-40 lbs. Year 6-10+: 40-60 lbs/yr. At $1.75/lb retail for conventional or $3.50/lb organic equivalent: $70-105/yr conventional, $140-210/yr organic. 10-year cumulative assuming dwarf tree $40 + establishment inputs $20 = $60 start: $350-600 net over 10 years.  Source for yield data: USDA NASS apple production statistics, Cornell fruit research.
- Cross-pollination requirement: most apples need a different apple variety within 50-100 feet to pollinate. A single apple tree does not reliably fruit. Two trees from different but compatible varieties is the minimum. Exception: self-fertile varieties (Honeycrisp, Fuji, Golden Delicious) that produce without a partner, though even these benefit from cross-pollination. Be explicit: planning for one apple tree typically means buying two.
- Storage value and variety selection for preservation: varieties that store poorly (early-season like Lodi, Zestar) must be eaten, canned, or dried within 2-4 weeks. Late varieties (Fuji, Granny Smith, Braeburn) store 3-6 months in a cool garage or cellar. The household that can store 80 lbs of apples through February is capturing winter premium pricing ($3-4/lb January vs $1.50/lb harvest season from USDA AMS data).
**Acceptance:**
- 1,000+ words
- Rootstock size/timeline guide (3 rootstock types)
- Disease resistance comparison table (4+ varieties)
- 10-year ROI table (dwarf)
- Cross-pollination requirement explicitly stated
- Storage variety guidance with USDA AMS pricing
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PB005 — Create holy-basil.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/holy-basil.md`
**Frontmatter:**
```
name: Holy Basil
scientific_name: Ocimum tenuiflorum
category: Herb
days_min: 60
days_max: 75
avg_yield_lb: 0.25
avg_price_lb: 20.00
seed_cost: 2.99
is_common: false
watering: Moderate; 0.5-1 inch/week; drought-tolerant once established; good drainage essential
sunlight: Full sun (6-8 hours)
companion_plants: ["tomato", "eggplant"]
description: "Holy Basil (Ocimum tenuiflorum) - tulsi, the Ayurvedic herb. $15-25/oz dried at retail. Distinct clove-like flavor from sweet basil; grows more heat-tolerantly. Revered in India; increasingly available in US wellness markets."
hero_image: /images/crops/holy-basil.webp
```
**What:** Holy basil (tulsi) is botanically distinct from sweet basil (*Ocimum basilicum*) and has a completely different flavor profile, use case, and retail market. It is categorically NOT a substitute for or variant of basil.md. The article must clearly differentiate these and make the economic and culinary case for growing tulsi alongside but separate from sweet basil.
**Required sections:**
- What it is vs. what it isn't: *Ocimum tenuiflorum* (tulsi, holy basil) vs *Ocimum basilicum* (sweet basil). Different species, different flavor compounds. Tulsi contains eugenol (clove-like), methyl chavicol, and caryophyllene — producing a spicy, clove-pepper-anise flavor that is foreign to Italian cooking but central to Indian herbal medicine and Ayurvedic practice. Types of tulsi: Rama (green leaf, mild), Krishna (purple, stronger, spicier), Vana (wild/forest tulsi, most medicinal use). Source: USDA Germplasm Resources Information Network (GRIN) for botanical identity.
- Tea market and wellness economy: tulsi is one of the fastest-growing wellness herbs in the US market. According to SPINS market data and USDA ERS specialty crop data, fresh tulsi sells at $3-5/oz at farmers markets in urban markets. Dried tulsi for tea: $15-25/oz at natural food retailers (Mountain Rose Herbs, Frontier Co-Op list prices). Tulsi tea bags retail for $7-12/20-bag box. One plant provides enough dried leaf for 50-100 cups of tea. Do the math: retail value of one mature tulsi plant's seasonal output if sold dried = $30-50. Home use value (replacing purchased tulsi tea): $20-35 per season from one plant.
- Culinary use distinction from sweet basil: tulsi is not appropriate in caprese or Italian dishes; its flavor is too assertive and different. Best culinary uses: Indian curries and dal (traditional use), stir-fry applications where a spicy herb note is wanted, fresh in summer drinks (tulsi lemonade, a growing food service trend). The home grower's advantage: access to fresh tulsi, which is nearly impossible to find in standard grocery stores outside Indian specialty markets.
- Growing profile compared to sweet basil: holy basil is more heat-tolerant and more drought-tolerant than sweet basil. Where sweet basil wilts in 95°F full sun, holy basil thrives. This makes it a better choice for Zone 7-9 gardens where summer basil fails. It also is somewhat perennial in Zone 10+, unlike sweet basil which is strictly annual. Start from seed indoors 6-8 weeks before last frost (same as sweet basil) or direct sow after soil reaches 60°F.
- Sacred use context (brief): tulsi is a sacred plant in Hinduism, used in daily puja (worship) and considered protective. This is not marketing content — it's contextual information that explains the plant's ubiquity in Indian households and its non-Western value calculation, which is not purely economic. One paragraph is sufficient.
**Acceptance:**
- 800+ words
- Species distinction from sweet basil clearly stated
- Tea market value calculation with sourced retail prices
- Culinary use cases that are distinct from sweet basil
- Growing profile comparison (heat tolerance vs sweet basil)
- Zero em dashes
- `npx astro build` passes with 0 errors

---

## New Plant Sprint 2 (PB006-PB011) — Claude Code

### PB006 — Create spearmint.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/spearmint.md`
**Frontmatter:**
```
title: "Spearmint: ROI, Yield & Growing Guide"
description: "Spearmint grows in any moist soil, spreads aggressively, and retails at $3-6/oz fresh. Full ROI analysis, container management, and culinary use profile."
category: Herb
seed_cost: 3.00
avg_yield_lb: 2.0
avg_price_lb: 48.00
days_to_harvest: 60
is_perennial: true
is_common: true
watering: Moderate to high; 1-2 inches/week; tolerates wet soil
sunlight: Full sun to partial shade (4-8 hours)
companion_plants: ["cabbage", "tomato", "pea"]
description: "Spearmint (Mentha spicata) - the culinary workhorse of the mint family. Lower menthol content than peppermint; standard choice for mojitos, lamb, tabbouleh, and Middle Eastern cooking. Perennial in Zone 3-11; container strongly recommended."
hero_image: /images/crops/spearmint.webp
```
**What:** Spearmint is botanically and culinarily distinct from peppermint — lower menthol (0.5% vs. 50%+ in peppermint), sweeter, brighter flavor. It is the mint used in mojitos, mint juleps, tabbouleh, mint jelly, tzatziki, and most culinary applications. This page must clearly differentiate it from both peppermint.md and mint.md.
**Required sections:**
- Species identity: *Mentha spicata*. Distinguish from peppermint (*M. × piperita*, a hybrid of spearmint and watermint). Key flavor difference: spearmint has ~0.5% menthol by weight; peppermint has 40-55%. Source: USDA GRIN botanical record.
- Retail value: fresh cut spearmint at farmers markets $3-6/oz ($48-96/lb). USDA AMS specialty crop price reports. Dried: $12-20/oz. One 12-inch container plant can yield 4-8 oz of cut leaf per harvest cycle with 4-5 cycles per season = $12-30 seasonal value per container.
- Culinary use breakdown: cocktails (mojito, mint julep), Middle Eastern (tabbouleh, fattoush), Indian (raita, chutneys), Mediterranean (tzatziki, lamb dishes), desserts (mint chocolate, ice cream). Peppermint is the wrong mint for all of these — spearmint's lower menthol makes it food-friendly where peppermint is medicinal.
- Container imperative: all mints spread via underground runners (stolons) and will overrun a garden bed within 2 seasons. Container culture is not optional for most gardens. Best containers: terra cotta or fabric pots 12-16 inches diameter; repot every 2 years when rootbound. Sink containers into beds to deter runner escape.
- Overwintering: in Zone 6+, container spearmint can overwinter indoors on a sunny windowsill and be divided in spring. In Zone 3-5, cut back and mulch containers; bring indoors before hard freeze.
- Companion note: mint contains aromatic compounds that deter aphids and cabbage moths. Useful companion when planted in sunken containers near brassicas. Source: Penn State Extension companion planting guide.
**Acceptance:** 900+ words, species distinction from peppermint clear, retail price sourced, container management specific, zero em dashes, build passes.

---

### PB007 — Create pear.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/pear.md`
**Frontmatter:**
```
title: "Pear: ROI, Yield & Growing Guide"
description: "Pears produce 100-150 lbs per mature tree and retail at $1.50-2.50/lb. Lower disease pressure than apples in most climates. 10-year ROI model with cultivar guide."
category: Fruit
seed_cost: 35.00
avg_yield_lb: 100.0
avg_price_lb: 2.00
days_to_harvest: 1825
is_perennial: true
is_common: true
watering: Moderate; 1 inch/week during establishment; drought-tolerant at maturity
sunlight: Full sun (6-8 hours minimum)
companion_plants: ["garlic", "chives", "nasturtium"]
description: "European pear (Pyrus communis) and Asian pear (Pyrus pyrifolia) - lower fire blight susceptibility than apple in warm-summer regions; requires 2 trees for cross-pollination; 3-5 year payback on dwarf varieties."
hero_image: /images/crops/pear.webp
```
**What:** Pears are underrated in home fruit production. Compared to apples, they have lower fire blight susceptibility in many regions, are more tolerant of heavy clay soil, and most European varieties require less spray. The ROI story is the 10-year math on a dwarf tree.
**Required sections:**
- European vs. Asian pear: two species with different uses and harvest handling. European pear (*Pyrus communis*): harvest before maturity, ripen off-tree at room temperature (the distinguishing characteristic). Key varieties: Bartlett (most widely grown), Bosc (firm, baking), D'Anjou (stores to Feb), Comice (best fresh eating). Asian pear (*Pyrus pyrifolia*): harvest when ripe on tree; crisp texture like an apple; excellent fresh, poor for canning. Key varieties: Hosui, Shinko, Twentieth Century. Source: Cornell Cooperative Extension tree fruit guide.
- Disease comparison to apple: fire blight (*Erwinia amylovora*) is the key threat. European pears are moderately susceptible; Kieffer and Harrow Sweet are resistant cultivars. Asian pears generally lower susceptibility. Compare to apple: apple scab, cedar-apple rust, and fire blight all require spray programs in the East. Pears in the Pacific Northwest and mountain West often require zero fungicide. Source: Oregon State Extension, Cornell NYSAES.
- Pollination requirement: most pears require a second cultivar within 50 feet for cross-pollination. Notable self-fertile exception: Seckel (partial). Asian × European cross-pollination works. This doubles the land and cost commitment — be honest about it.
- 10-year ROI table for dwarf tree: Year 0 (purchase $35-50, planting supplies $15), Years 1-3 zero yield, Year 4 first light harvest (~10 lbs), Year 5 (~30 lbs), Years 6-10 (~80-120 lbs/year). At $2.00/lb retail: cumulative value after 10 years vs. cumulative cost. Use USDA ERS data for pear retail prices.
- Harvest and storage: European pears must be picked mature-green and ripened off the tree at 65-70°F. D'Anjou and Bosc can be cold-stored at 32°F for 3-5 months. Home production advantage: varieties bred for storage (not shipping durability) that are unavailable in most stores.
**Acceptance:** 1,400+ words, European/Asian distinction clear, disease comparison to apple with named cultivars, 10-year ROI table, zero em dashes, build passes.

---

### PB008 — Create mung-bean.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/mung-bean.md`
**Frontmatter:**
```
title: "Mung Bean: ROI, Yield & Growing Guide"
description: "Mung beans sprout indoors year-round in 4-5 days with zero soil. Retail sprout price: $3-5/lb. Full dry bean and sprouting ROI analysis."
category: Vegetable
seed_cost: 4.00
avg_yield_lb: 3.0
avg_price_lb: 4.00
days_to_harvest: 60
is_perennial: false
is_common: false
watering: Moderate; 1 inch/week; drought-tolerant; poor drainage is the primary threat
sunlight: Full sun (6-8 hours)
companion_plants: ["corn", "squash", "carrot"]
description: "Mung bean (Vigna radiata) - dual-use crop: grow as dry bean outdoors ($1.50-2.50/lb dried) or sprout indoors year-round ($3-5/lb fresh sprouts). Sprouting requires no soil, no outdoor growing season, and 4-5 days from dry bean to harvest."
hero_image: /images/crops/mung-bean.webp
```
**What:** The mung bean page has two equal stories: the outdoor dry bean crop (warm-season, 60 days, productive) and the indoor sprouting operation (year-round, zero soil, 4-5 day cycle). The indoor sprouting angle is the high-value differentiator - it's the only crop on this site that can be grown productively in an apartment with no outdoor space.
**Required sections:**
- Sprouting economics: one pound of dry mung beans costs $1.50-2.50 (bulk bin at natural food stores, or online). One pound dry yields ~5 lbs of finished sprouts ($3-5/lb retail = $15-25 retail value). Equipment: wide-mouth mason jar + sprouting lid ($2-5 total). Space: a kitchen counter. Time: rinse twice daily for 4-5 days. Source: USDA AMS for dry bean prices; retail sprout price from natural food retailer surveys.
- Indoor sprouting cycle table: Day 0 soak 8 hours; Day 1 rinse and drain; Days 2-4 rinse 2x/day; Day 4-5 harvest when roots are 1-1.5 inches. Optimal temp: 65-75°F. Light: indirect is fine; direct sun turns sprouts bitter.
- Outdoor dry bean growing: 60-day warm-season annual; direct sow after last frost; tolerates heat and drought better than most legumes; nitrogen-fixing. Yield: 0.5-1.5 lbs dried beans per 10-foot row. At $1.50-2.50/lb retail, ROI is modest — the outdoor value is primarily the nitrogen fixation and fresh-shell use, not the dried bean price. Cornell Vegetable Program for yield data.
- Nutrition density: mung sprouts have documented vitamin C (not present in dry bean; generated during germination), folate, and protein. Source: USDA FoodData Central. This is relevant for the home economics argument — sprouting unlocks nutrition that isn't in the dry bean.
- Storage of dry beans: properly dried mung beans store 2-5 years in airtight containers. This makes them a resilient pantry crop even if the sprouting window closes seasonally.
**Acceptance:** 900+ words, sprouting ROI math with sourced prices, sprouting cycle table, outdoor growing section, USDA FoodData Central nutrition citation, zero em dashes, build passes.

---

### PB009 — Create adzuki-bean.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/adzuki-bean.md`
**Frontmatter:**
```
title: "Adzuki Bean: ROI, Yield & Growing Guide"
description: "Adzuki beans retail at $3-5/lb dried and store indefinitely. Warm-season legume with nitrogen-fixing roots and a Japanese confectionery market that drives premium pricing."
category: Vegetable
seed_cost: 5.00
avg_yield_lb: 1.5
avg_price_lb: 4.00
days_to_harvest: 120
is_perennial: false
is_common: false
watering: Moderate; 1 inch/week; sensitive to waterlogging
sunlight: Full sun (6-8 hours)
companion_plants: ["corn", "squash", "cucumber"]
description: "Adzuki bean (Vigna angularis) - sweet dried bean; $3-5/lb retail in natural food stores; $6-10/lb for premium Japanese-origin varieties. Primary use: red bean paste (anko) for Asian confectionery. 120-day warm-season annual; nitrogen-fixing."
hero_image: /images/crops/adzuki-bean.webp
```
**What:** Adzuki beans are priced as a specialty crop in US markets because they're primarily imported from Japan and China. A home grower in Zone 5-9 can produce them domestically. The price premium ($3-5/lb vs. black bean at $1-2/lb) is the ROI story.
**Required sections:**
- Market context: adzuki beans are the primary ingredient in anko (red bean paste), used in mochi, dorayaki, daifuku, and pan-Asian confectionery. US market demand has grown with Japanese and Korean food culture. Retail: $3-5/lb at natural food stores (Bob's Red Mill, Eden Foods); $6-10/lb for premium Japanese-origin. Source: USDA AMS commodity price reports; retail survey.
- Growing profile: warm-season legume, Zone 5-9; direct sow after last frost when soil reaches 65°F. 120 days to dry harvest. Indeterminate; harvest when pods turn yellow-brown and rattle. Yield: 0.75-1.5 lbs dry per 10-foot row at standard spacing. Similar management to black bean. Source: University of Minnesota Extension legume growing guide.
- ROI compared to other legumes: table comparing adzuki ($3-5/lb), mung ($1.50-2.50/lb), black bean ($1-1.50/lb), navy bean ($1-1.25/lb). The premium justifies growing adzuki over generic beans if you use them.
- Nitrogen fixation value: like all legumes, adzuki fixes atmospheric nitrogen via *Bradyrhizobium* symbiosis. Inoculant recommended for first planting in soil with no legume history. University of Minnesota Extension estimates legume N-fixation at 50-200 lbs N/acre depending on conditions — in practice, the soil improvement is a real second-order ROI beyond the bean harvest.
- Dry storage: properly dried adzuki beans store 2-5 years at 40-70°F in airtight containers, indefinitely in freezer. This is the resilience argument for growing storage legumes.
**Acceptance:** 900+ words, price premium vs. commodity beans sourced, ROI table, nitrogen fixation section with citation, zero em dashes, build passes.

---

### PB010 — Create apple-mint.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/apple-mint.md`
**Frontmatter:**
```
title: "Apple Mint: ROI, Yield & Growing Guide"
description: "Apple mint has the mildest flavor in the mint family - no medicinal bite. Retails at $3-5/oz fresh. Container culture guide, culinary uses, and comparison to spearmint and peppermint."
category: Herb
seed_cost: 3.00
avg_yield_lb: 1.5
avg_price_lb: 48.00
days_to_harvest: 60
is_perennial: true
is_common: false
watering: Moderate to high; 1-2 inches/week; tolerates wet soil
sunlight: Full sun to partial shade (4-8 hours)
companion_plants: ["cabbage", "tomato", "broccoli"]
description: "Apple mint (Mentha suaveolens) - roundleaf mint, woolly mint. Mildest menthol content in the culinary mint family; subtle apple-like fragrance; fuzzy leaves. Best mint for fresh mojito garnishes and fruit salads where peppermint would overpower. Perennial Zone 5-11."
hero_image: /images/crops/apple-mint.webp
```
**What:** Apple mint completes the mint family coverage on this site (with mint.md, peppermint.md, spearmint.md). It has the lowest menthol content of any culinary mint, which makes it the best choice for applications where mint flavor is wanted without the cooling bite.
**Required sections:**
- Species identity: *Mentha suaveolens* (synonyms: roundleaf mint, woolly mint). Distinguished from spearmint (*M. spicata*) and peppermint (*M. × piperita*) by its hairy/fuzzy leaves (suaveolens = "sweetly scented"). Menthol content: trace amounts only vs. peppermint's 40-55%. Source: USDA GRIN.
- Mint family comparison table: species | menthol content | flavor profile | primary uses | hardiness zone. Include spearmint, peppermint, apple-mint, and pennyroyal (not culinary — note toxicity). This positions apple-mint correctly in the family.
- Culinary use: best for applications where any mint flavor is wanted but peppermint/spearmint's menthol would overpower — fruit salads, herbed simple syrups, mild herbal teas, fresh garnish. Also: traditional use in apple jelly (hence the name association, though it isn't botanically apple-related). Mint sauce for lamb: apple mint preferred over peppermint by British culinary tradition.
- Retail value: same market as spearmint fresh cut; $3-5/oz at farmers markets. Dried for tea: $10-18/oz. Yield and container management same as spearmint — same container imperative applies (stolon spreader).
- Growing notes: more tolerant of partial shade than spearmint or peppermint; useful under deciduous trees. Leaf texture (fuzzy) makes it less attractive to some insects — anecdotally lower aphid pressure than smooth-leaved mints, though no published data to cite definitively.
**Acceptance:** 800+ words, species distinction from spearmint and peppermint clear, mint family comparison table, culinary use profile distinct from other mints, zero em dashes, build passes.

---

### PB011 — Create cowpea.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/cowpea.md`
**Frontmatter:**
```
title: "Cowpea: ROI, Yield & Growing Guide"
description: "Cowpeas fix 100-150 lbs of nitrogen per acre and produce $2-4/lb dried beans in Zone 7-11. Heat and drought tolerance makes them productive where other legumes fail."
category: Vegetable
seed_cost: 4.00
avg_yield_lb: 2.5
avg_price_lb: 3.00
days_to_harvest: 75
is_perennial: false
is_common: false
watering: Low; drought-tolerant after establishment; 0.5-1 inch/week
sunlight: Full sun (8+ hours)
companion_plants: ["corn", "squash", "sorghum"]
description: "Cowpea (Vigna unguiculata) - blackeyed pea, southern pea, crowder pea. Extreme heat and drought tolerance; fixes 100-150 lbs N/acre. Fresh shell: $2-4/lb; dried: $1.50-2.50/lb. Primary food crop across tropical and subtropical US."
hero_image: /images/crops/cowpea.webp
```
**What:** Cowpeas are the heat-and-drought legume for Zone 7-11 gardens where green beans fail in summer. The story has two angles: food production (fresh shell or dried) and nitrogen fixation as a soil amendment. Neither angle is typically covered with real numbers online.
**Required sections:**
- Species and variety context: *Vigna unguiculata*. Major market classes: blackeyed peas (white with black eye; most widely known), crowder peas (closely packed in pod; starchier), cream peas (pale; mild), yard-long bean / asparagus bean (*V. unguiculata* subsp. *sesquipedalis*; same species, different form — very long pods, eaten fresh like green beans). Source: USDA GRIN; Southern Exposure Seed Exchange variety descriptions.
- Heat and drought profile: cowpeas germinate in soil temperatures up to 95°F and continue producing through 100°F air temperatures where green beans, garden peas, and snap beans cease production entirely. This is the primary value proposition for Zone 8-11 gardeners. Source: Texas A&M AgriLife Extension.
- Nitrogen fixation data: cowpeas fix 100-200 lbs of nitrogen per acre under good conditions — among the highest of common grain legumes. SARE (Sustainable Agriculture Research and Education) cowpea cover crop data. Worth quantifying: at $0.50-0.60/lb for urea nitrogen, fixing 100 lbs N/acre = $50-60/acre soil amendment value.
- Fresh shell vs. dried economics: fresh shell cowpeas require labor-intensive shelling but retail at $2-4/lb at southern farmers markets (USDA AMS Southern region data). Dried blackeyed peas: $1.50-2.50/lb retail. Table: fresh vs. dried yield per 10-foot row, retail value, storage life.
- Regional context: primary production zone is Zone 7b-11 (southeastern US, Southwest, California Central Valley). In Zone 6-7a: possible but requires full sun and a long warm season (80+ days above 70°F). Not a crop for Zone 5 and north.
**Acceptance:** 1,000+ words, variety classes clearly differentiated, nitrogen fixation data with SARE citation, fresh vs. dried economics table, regional applicability honest about northern limits, zero em dashes, build passes.

---

## New Article Sprint 3 (CA021-CA027) — Claude Code

### CA021 — Create drip-vs-hand-watering.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/drip-vs-hand-watering.md`
**Frontmatter:**
```
title: "Drip vs. Hand Watering: Hardware Payback & Yield Impact"
description: "A drip system for a 4x8 bed costs $35-60 and pays back in one season through reduced blossom end rot losses and water savings. The math on when drip irrigation is worth it."
category: roi
publishDate: 2026-04-15
featured: false
```
**Required sections:**
- System cost breakdown: basic drip kit for 4x8 bed (timer $15-25, mainline $8-12, emitters $5-10, stakes and connectors $5-8) = $33-55 total. Source: retail price survey of Rainbird, DripWorks, Amazon. Drip tape alternative for row gardens: $0.10-0.15/foot.
- Water use comparison: drip delivers water directly to root zone with 90-95% efficiency; overhead or hand watering 60-75% efficiency (evaporation, runoff). EPA WaterSense garden efficiency data. Quantify for a 4x8 bed: hand watering ~3 gallons/day in peak summer vs. drip ~1.5-2 gallons. At $0.005-0.01/gallon municipal water cost, annual savings $5-15 — not the primary payback driver.
- Blossom end rot prevention: BER in tomatoes, peppers, and squash is caused by calcium deficiency driven by inconsistent moisture, not calcium deficiency in soil. Consistent drip irrigation eliminates the moisture fluctuation that triggers BER. Data point: University of Florida IFAS trial data showing BER incidence reduction with drip vs. overhead. Quantify the loss prevention: a tomato plant with BER loses 20-40% of fruit in peak season. At $3-4/lb retail for heirlooms, 5 lost lbs = $15-20 per plant. One drip emitter prevents this.
- Payback calculation: table showing system cost, water savings, BER loss prevention, total Year 1 payback. For tomatoes: the BER prevention alone pays for the entire system in most cases. For low-BER crops (greens, root vegetables): payback is longer; hand watering may be fine.
- When hand watering is correct: small container gardens, irregular watering schedules, drought-tolerant crops (beans, squash), early spring and fall when evaporation is low. Drip infrastructure investment is only justified for high-value crops in peak summer.
**Acceptance:** 1,400+ words, BER prevention quantified with extension citation, payback table for 4x8 bed, honest about when drip isn't worth it, zero em dashes, build passes. Internal links to: tomato.md, sweet-pepper.md, water-cost-per-crop.md.

---

### CA022 — Create grocery-tier-roi.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/grocery-tier-roi.md`
**Frontmatter:**
```
title: "Organic Buyer ROI: Which Crops Justify Growing vs. Buying"
description: "USDA ERS price data shows organic produce costs 50-100% more than conventional for 12 key crops. Home-grown payback analysis by household type and consumption level."
category: roi
publishDate: 2026-04-15
featured: false
```
**Required sections:**
- USDA ERS organic price premium data: use USDA ERS Organic Prices report data for 12 crops: lettuce, spinach, tomato, broccoli, carrots, cucumber, strawberry, blueberry, apple, garlic, herbs (basil, cilantro), and sweet pepper. Build a table: crop | conventional retail | organic retail | premium % | home-grown cost/lb.
- Household segmentation: the ROI calculation is different for a household that buys all organic ($800-1,200/year premium) vs. mixed conventional/organic vs. conventional-only. Frame three household types with annual organic spend estimates.
- Top 10 "grow-don't-buy" list for organic buyers: crops where the organic premium is highest AND home production is most practical. Garlic (150-200% premium), herbs (200-400% premium), leafy greens (80-120% premium) top this list.
- Bottom 10 "buy-don't-grow" for organic buyers: crops where the premium is low AND home production is difficult. Sweet corn, onions, carrots (modest premiums, high space/effort requirements).
- Break-even table: for each of the 12 crops, how many lbs must a household produce to break even on seed + soil + water costs vs. buying organic. Show the math clearly — this is the actionable output for readers.
**Acceptance:** 1,600+ words, USDA ERS organic price data cited by report name and year, 12-crop comparison table, household segmentation, zero em dashes, build passes. Internal links to: organic-produce-cost-analysis.md, raised-bed-break-even.md, seeds-vs-transplants.md.

---

### CA023 — Create root-cellaring-modern-home.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/root-cellaring-modern-home.md`
**Frontmatter:**
```
title: "Root Cellaring Without a Root Cellar: Modern Storage by Crop"
description: "Unheated garage, basement corner, or refrigerator drawer - every home has usable cold storage. Temperature and humidity requirements for 15 crops, with storage life data."
category: homestead
publishDate: 2026-04-15
featured: false
```
**Required sections:**
- The four storage environments most homes have: refrigerator crisper (34-40°F, high humidity), unheated garage or mudroom (28-45°F, variable humidity - seasonal), kitchen counter/pantry (60-70°F, dry), basement corner away from furnace (45-55°F, moderate humidity). Map these to crops.
- Crop-by-crop storage table (15 crops minimum): crop | optimal temp (°F) | optimal humidity (%) | storage life | notes. Source: National Center for Home Food Preservation and USDA Complete Guide. Crops: potato, carrot, beet, turnip, parsnip, garlic, onion, winter squash, apple, pear, cabbage, celeriac, sweet potato, leek, dried beans.
- What ruins storage: the three enemies are ethylene gas (apples and pears ripen everything nearby), moisture (causes mold in onions and garlic), and temperature fluctuation (causes sprouting in potatoes). Specific separations required: apples away from all vegetables; onions/garlic away from potatoes.
- Economic case: a 50 lb bag of winter squash harvested in September can supply the household through February if stored correctly. At $1.50-2.00/lb retail, that's $75-100 of produce — stored for free in a garage. Quantify by crop.
- Practical setup: box + newspaper + unheated space setup for root vegetables. Refrigerator humidity management for greens. The $0 storage solution for most crops.
**Acceptance:** 1,600+ words, 15-crop storage table with NCHFP/USDA sourcing, practical home environment mapping, ethylene separation guidance, zero em dashes, build passes. Internal links to: winter-squash.md, garlic.md, carrot.md, potato.md.

---

### CA024 — Create lacto-fermentation-preservation.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/lacto-fermentation-preservation.md`
**Frontmatter:**
```
title: "Lacto-Fermentation: No-Equipment Preservation for Garden Surplus"
description: "Salt, water, a jar, and a vegetable. Lacto-fermentation is the safest home preservation method and the only one that requires zero equipment. Cost analysis and 5 staple recipes."
category: homestead
publishDate: 2026-04-15
featured: false
```
**Required sections:**
- Food safety basis: lacto-fermentation is safe because *Lactobacillus* bacteria produce lactic acid that drops pH below 4.6 — the threshold at which *Clostridium botulinum* cannot grow or produce toxin. This is why lacto-fermentation does not require pressure canning's heat treatment. Source: NCHFP (National Center for Home Food Preservation) fermentation safety guidance; USDA Complete Guide to Home Canning appendix on fermented vegetables.
- Cost comparison to canning: water bath canning requires: canning jars ($12-15/dozen), lids ($4-6/dozen, single-use), large pot ($20-40), jar lifter and funnel ($10-15). Total: $46-76 startup. Lacto-fermentation requires: mason jar (existing), salt ($0.50/lb non-iodized), vegetable. Total: $0 if you have a jar. This is the access-point argument.
- Five staple ferments with economics: (1) sauerkraut — 2 lbs cabbage → 1 quart fermented sauerkraut; retail $5-8/quart. (2) Lacto pickles — cucumber → dill pickles; retail $4-6/quart. (3) Fermented hot sauce — hot peppers → source; retail $6-10/bottle. (4) Kimchi — cabbage, daikon, scallion; retail $8-12/quart. (5) Fermented salsa — tomatoes, peppers, onion; retail $5-8/jar. For each: input cost, retail equivalent, 2-sentence process summary.
- Salt ratio science: 2% salt by weight inhibits pathogenic bacteria while allowing *Lactobacillus* to dominate; below 1.5% is risky; above 3% slows fermentation. Use weight, not volume — salt density varies by grind. This is the one technical requirement for safety.
- Timeline and storage: most vegetables ferment to edible stage in 3-7 days at 65-75°F; flavor continues to develop for 2-4 weeks. Refrigerator storage halts active fermentation; shelf life 3-6 months refrigerated. Counter-ferment in cool weather (60-68°F) for better flavor than warm ferments.
**Acceptance:** 1,600+ words, NCHFP food safety citation explicit, cost comparison table, 5 ferments with economics, salt ratio science, zero em dashes, build passes. Internal links to: canning-financial-case.md, freezing-vs-canning.md, cabbage.md, cucumber.md.

---

### CA025 — Create food-forest-basics.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/food-forest-basics.md`
**Frontmatter:**
```
title: "Food Forest Basics: 7-Layer System and 1,000 sq ft Economics"
description: "A food forest mimics woodland structure with canopy, sub-canopy, shrub, herb, ground cover, root, and vine layers. 1,000 sq ft example with species list and 10-year ROI."
category: homestead
publishDate: 2026-04-15
featured: false
```
**Required sections:**
- The 7-layer model with home-scale species for each layer: canopy tree (apple, pear, mulberry), sub-canopy/understory (serviceberry, pawpaw, elderberry), shrub (currant, gooseberry, aronia, hazelnut), herbaceous (comfrey, yarrow, mint, chives), ground cover (strawberry, creeping thyme, sweet woodruff), root/rhizosphere (garlic, Jerusalem artichoke, horseradish), vine (hardy kiwi, grape, hops). Source: Martin Crawford, *Creating a Forest Garden* (2010); Robert Hart, *Forest Gardening* (1991).
- 1,000 sq ft species list: realistic stocking for a 32x32 ft plot with full 7 layers. Include 1 canopy, 2-3 sub-canopy, 4-6 shrubs, ground cover throughout. Named species with Zone 5-7 hardiness. Do not over-plant — a common beginner mistake is canopy trees that shade out everything else within 5 years. Spacing matters.
- 10-year production timeline: Years 1-2 (establishment, minimal yield, primary output from herbs and ground cover), Years 3-4 (shrubs begin producing currants, elderberries, etc.), Years 5-7 (sub-canopy trees begin bearing; peak shrub production), Years 8-10 (canopy trees begin full production; system self-mulching; input labor at minimum). Quantify yield by year for the 1,000 sq ft example.
- Input cost reduction over time: Year 1 requires irrigation, mulch, fertilizer attention. By Year 5: mulch layer is self-replenishing via leaf drop and comfrey chop-and-drop; irrigation needs decline as canopy creates microclimate. This is the "compounding" ROI story — higher output, lower input, over time.
- Honest caveats: food forests require 5-10 years before meaningful tree fruit production; Zone 4 and colder limits species options significantly; canopy management is the hardest part (shading kills understory if unchecked). This is a multi-decade commitment.
**Acceptance:** 1,800+ words, 7-layer model with named species, 1,000 sq ft example with 10-year timeline, Crawford/Hart citations, honest caveats section, zero em dashes, build passes. Internal links to: apple.md, pear.md, elderberry.md, currant.md, perennial-garden-economy.md.

---

### CA026 — Create garden-layout-comparison.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/garden-layout-comparison.md`
**Frontmatter:**
```
title: "Garden Layout Compared: Square Foot vs. Row vs. Keyhole Yield Data"
description: "Square foot gardening yields 2-4x more per sq ft than traditional row gardening on paper - but the math ignores path width and bed economics. A layout comparison with real numbers."
category: planning
publishDate: 2026-04-15
featured: false
```
**Required sections:**
- Row gardening baseline: traditional row spacing for 5 crops (tomato, bean, carrot, lettuce, squash). Include path width in the calculation — a 3-foot row with 2-foot paths gives 60% productive soil, 40% path. Yield per total sq ft including paths. This is the denominator most yield comparisons omit.
- Square foot gardening (SFG): Mel Bartholomew's 1-ft grid with dense planting per Bartholomew's *All New Square Foot Gardening* (2013). Productive soil percentage: typically 80-90% (4x8 bed, 1-foot access path). SFG per-sq-ft yields for same 5 crops. Compare to row baseline. Source Bartholomew's spacing data honestly.
- Keyhole bed design: teardrop or U-shaped bed with central path notch; access from 3 sides; typical bed 6 feet wide with 18-inch central keyhole. Productive area: ~85%. Best for perennials and crops that don't require mechanical cultivation. Less common in published yield research — be honest about data gaps.
- Raised bed vs. in-ground: same layout can be raised or in-ground. Raised bed adds $50-200 construction cost but improves drainage, warms faster in spring, and eliminates compaction. Break-even vs. in-ground on raised bed cost: at 10-20% yield improvement (Penn State Extension soil compaction data), payback in 2-4 seasons on lumber cost.
- Decision matrix: table matching layout type to garden goals. Row: large volumes of single crops, mechanized cultivation, rural/suburban plots. SFG: small spaces, diverse crops, urban/suburban. Keyhole: perennials, herbs, small fruits, accessibility needs.
**Acceptance:** 1,600+ words, path-inclusive sq ft math for row gardening, SFG comparison with Bartholomew citation, raised vs. in-ground cost analysis, decision matrix, zero em dashes, build passes. Internal links to: raised-bed-break-even.md, the-500-dollar-garden.md, succession-planting-calendar.md.

---

### CA027 — Create roi-by-region.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/roi-by-region.md`
**Frontmatter:**
```
title: "Garden ROI by Region: Growing Season Days × Food Prices"
description: "USDA ERS food prices vary 15-25% by region. Growing season length varies from 90 days (Zone 4) to 300 days (Zone 10). The combined effect creates a 3-4x ROI multiplier between best and worst US regions."
category: roi
publishDate: 2026-04-15
featured: false
```
**Required sections:**
- USDA ERS regional food price data: USDA ERS "Fruit and Vegetable Prices" report by region (Northeast, Midwest, South, West). Build a table of 8 key crops × 4 regions showing retail price per lb. Northeast and West Coast prices typically run 15-25% above Midwest/South for fresh produce. Cite the specific ERS report by name.
- Growing season length by USDA hardiness zone: Zone 4 (90-120 days); Zone 5 (150-180 days); Zone 6 (180-210 days); Zone 7 (210-240 days); Zone 8 (240-270 days); Zone 9 (270-300 days); Zone 10 (300+ days). Source: USDA Plant Hardiness Zone Map technical notes; university extension frost date databases.
- Combined ROI multiplier table: Zone 4 + Midwest prices vs. Zone 9 + Pacific Coast prices. Using lettuce as the worked example: Zone 4 gardener can grow lettuce for ~150 days at Midwest prices ($1.50-2/lb); Zone 9 West Coast gardener can grow for 300 days at West Coast prices ($2.50-3.50/lb). Show the math: productive days × lbs/week × price/lb.
- Crop selection optimization by zone: short-season (Zone 4-5) gardeners maximize ROI by focusing on cold-tolerant, high-value crops: garlic, kale, arugula, peas, root vegetables. Long-season (Zone 8-10) gardeners can add heat crops: sweet potato, cowpea, okra, multiple tomato successions. Per-season value comparison.
- Cost of living adjustment: higher food prices in Northeast and West correlate with higher land and input costs. A raised bed built in San Francisco costs more than one in Kansas City. This context matters — high prices don't automatically mean higher net ROI if input costs scale proportionally.
**Acceptance:** 1,800+ words with USDA ERS regional food price table (8 crops × 4 regions), growing season table by zone with citations, combined ROI multiplier worked example, zone-specific crop recommendations, zero em dashes, build passes. This is an authority piece. Internal links to: best-crops-by-zone.md, hardiness-zones-explained.md, garlic-roi-analysis.md, price-seasonality-guide.md.

---

## Article Hero Images (D004) — Copilot

### D004 — Article hero images: script + frontmatter + download
**Status:** `[x]`
**Owner:** Copilot (infrastructure)
**What:** 39 articles have zero `hero_image` set. This means no OG image on social shares and an incomplete Article JSON-LD `image` property. Fix in two parts: (1) create `scripts/download-article-images.mjs` modeled on the existing `download-crop-images.mjs`, (2) add `hero_image` frontmatter to all 39 article files.

**Part 1 — Script (`scripts/download-article-images.mjs`):**
- Mirror `download-crop-images.mjs` exactly — same Unsplash API flow, same sharp resize to 1200x630 WebP at quality 82, same `--skip-existing` flag
- Read slugs from `src/content/articles/` (`.md` files)
- Output to `public/images/articles/[slug].webp`
- Search term derivation: use the article `title` frontmatter field (strip `|`, `:`, `&`, quotes; use first 5 words) rather than the raw slug, because article slugs like `csa-vs-home-garden` produce poor Unsplash results
- Add `SEARCH_OVERRIDES` map for any slugs that need manual terms (start with these known problematic ones):
  ```js
  'the-500-dollar-garden': 'raised bed vegetable garden',
  'csa-vs-home-garden': 'farmers market vegetables',
  'how-to-find-local-prices': 'grocery store vegetables produce',
  'how-to-measure-yield': 'harvesting vegetables garden scale',
  'soil-test-decision-chain': 'soil testing garden',
  'roi-by-region': 'map united states agriculture',
  'the-500-dollar-garden': 'raised bed vegetable garden first year',
  'freezer-math-garden-roi': 'chest freezer food preservation',
  'grocery-tier-roi': 'organic vegetables grocery store',
  'food-forest-basics': 'food forest permaculture fruit trees',
  ```
- Same rate-limit delay as crop script (1.5s between requests)
- Same summary output: OK / SKIP / MISS / FAIL per article

**Part 2 — Add `hero_image` to all 39 articles:**
After running the script successfully, add `hero_image: /images/articles/[slug].webp` to the frontmatter of every article in `src/content/articles/`. The field already exists in the articles schema as `z.string().optional()` — no schema change needed.

Do this programmatically: after script runs, for each article that got an `OK` image, insert the `hero_image` line into its frontmatter (after `featured:` or as the last frontmatter field).

**Run script:**
```
UNSPLASH_KEY=your_key node scripts/download-article-images.mjs
```

**Acceptance:**
- Script exists at `scripts/download-article-images.mjs`
- `public/images/articles/` directory contains WebP images for all 39 articles (MISS/FAIL get manual follow-up)
- All article `.md` files have `hero_image: /images/articles/[slug].webp` in frontmatter
- `npx astro build` passes with 0 errors
- Spot-check: `curl -I https://gardenroi.com/images/articles/the-500-dollar-garden.webp` (after deploy) returns 200

---

## Content Gap Sprint (CA028-CA030) — Claude Code

### CA028 — Create soil-test-roi.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/soil-test-roi.md`
**Frontmatter:**
```
title: "Soil Test ROI: What a $25 Test Actually Returns"
description: "A standard soil test costs $15-30 and identifies pH and nutrient deficiencies that cut yields 20-40%. The payback math for a 200 sq ft garden is under one season."
category: roi
publishDate: 2026-04-15
featured: false
```
**Required sections:**
- What a soil test is and costs: standard land-grant university test covers pH, phosphorus, potassium, calcium, magnesium, and organic matter. Cost: $15-30 from Penn State Extension, University of Vermont, UMass Extension, Clemson Extension — all have mail-in labs. Commercial labs (Logan Labs, Waypoint Analytical): $20-45. Most extension services include lime and fertilizer recommendations in the report at no extra charge.
- pH and yield: the primary payback mechanism. Vegetable garden optimal pH is 6.0-6.8. Below pH 5.5: phosphorus becomes chemically unavailable regardless of how much is in the soil (aluminum and manganese toxicity begins). Above pH 7.5: iron, manganese, and zinc lock out. Purdue University Extension data: pH correction can improve yields 20-40% in acidic soils. In a 200 sq ft garden producing $400/season at correct pH, that's $80-160 in recovered yield from a $20 test.
- Lime and sulfur payback table: pH 5.5 → 6.5 correction requires ~5 lbs dolomitic lime per 100 sq ft (Penn State recommendation). At $8-12 per 50 lb bag, cost is $1-2 per 100 sq ft. Payback vs. lost yield: immediate. pH correction takes 3-6 months, so test in fall for spring benefit. Sulfur to lower pH: about 1 lb/100 sq ft per 0.5 pH unit drop; acting slower (3-6 months); more relevant for blueberry growers.
- What a test won't show: soil biology, disease pathogens, drainage issues, compaction. Don't over-sell the test — it measures chemical status, not growing system health. A soil test on compacted subsoil tells you nothing useful about why your plants are failing.
- When to retest: every 2-3 years for maintained gardens; every year if making significant amendments. pH drifts over time (rainfall acidifies; wood ash raises it). Annual testing is overkill for most home gardeners.
- Break-even table: test cost ($15-30) vs. recovered yield value at 20% improvement on typical garden sizes (100 sq ft, 200 sq ft, 400 sq ft). Show that even at 100 sq ft, a $25 test pays back in the first season if a pH problem is identified.
**Acceptance:** 1,400+ words, Purdue Extension pH/yield citation named, break-even table with three garden sizes, honest about what test doesn't show, zero em dashes, build passes. Internal links to: raised-bed-break-even.md, garlic.md, blueberry.md, soil-ph-by-crop.md.

---

### CA029 — Create perennial-vs-annual-roi.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/perennial-vs-annual-roi.md`
**Frontmatter:**
```
title: "Perennial vs. Annual Crops: 10-Year ROI Comparison"
description: "Asparagus breaks even in Year 4 and produces for 20+ years. Garlic pays back in Year 1. A 10-year ROI model for 6 perennial and 6 annual crops side by side."
category: roi
publishDate: 2026-04-15
featured: false
```
**Required sections:**
- The core distinction: annual crops (tomato, basil, lettuce, beans) require replanting, new seeds or transplants, and full soil prep every season. Perennial crops (asparagus, rhubarb, strawberry, raspberry, garlic chives, herbs) establish once and produce for years — but have a 2-5 year establishment period before full production. The ROI curves are fundamentally different shapes.
- Annual ROI model (6 crops): tomato, basil, lettuce, cucumber, kale, green bean. For each: seed/transplant cost per season, yield per season (USDA AMS data), retail price per lb, net value per season, 10-year cumulative net. Table format. Annuals show positive ROI in Year 1 but flat compounding — the 10-year cumulative is roughly 10x the Year 1 value.
- Perennial ROI model (6 crops): asparagus, rhubarb, raspberry, strawberry, chives, spearmint. For each: establishment cost (Year 0), zero or minimal yield Years 1-2, buildout Years 2-3, full production Year 3-5+. 10-year cumulative net value. Table format. The break-even year varies: strawberry (Year 2), raspberry (Year 3-4), asparagus (Year 4-5). Source: Cornell Cooperative Extension asparagus establishment data; Louisiana State AgCenter strawberry yield data.
- The compounding advantage chart narrative: after Year 5, the perennial portfolio outperforms annuals per square foot because input costs (seed, transplant, soil amendment) are significantly lower. A 25 sq ft asparagus bed that cost $40 to establish produces $80-120/year at full production indefinitely. Year 10 cumulative net: ~$700 from a $40 investment.
- Mixed strategy: the optimal home garden has both. Annuals provide income-equivalent value in Year 1 while perennials establish. Frame the ideal allocation: 25-30% of garden space in perennials for long-term compounding, 70-75% in high-value annuals for immediate return.
- What perennials don't tell you: establishment failures are expensive (asparagus crown rot from poor drainage; strawberry runners overwhelming the plot; raspberry cane disease). The ROI model assumes successful establishment.
**Acceptance:** 1,600+ words, 10-year ROI tables for annuals and perennials (6 each), named extension data sources, honest about establishment risk, zero em dashes, build passes. Internal links to: asparagus.md, rhubarb.md, raspberry.md, strawberry.md, perennial-garden-economy.md, first-three-years-roi.md.

---

### CA030 — Expand composting-roi.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/composting-roi.md`
**Current word count:** ~1,459 words
**Target:** 1,800+ words
**What's missing from the current version:** The article has good cost math and system options but is missing: (1) nitrogen value quantification — what the compost replaces in fertilizer terms, not just bagged compost; (2) vermicomposting as a small-space/apartment option; (3) hot composting timeline and temperature requirements to kill weed seeds and pathogens; (4) what not to compost (and why — the food safety and weed seed arguments).
**Add these sections without rewriting what's already there:**
- Nitrogen replacement value: finished compost is ~1% nitrogen by weight (USDA ARS data). A cubic yard of finished compost (roughly 1,000 lbs) contains ~10 lbs of slowly available nitrogen. At urea nitrogen prices ($0.50-0.60/lb N), that's $5-6 in N value alone — small, but real. The primary fertility replacement value is in phosphorus, potassium, and organic matter, not nitrogen. Be accurate: compost is not a nitrogen fertilizer. Source: USDA ARS composting research.
- Hot composting requirements: a pile must reach 131-160°F for 3+ consecutive days to kill most weed seeds and human pathogens. This requires a C:N ratio of 25-30:1, moisture around 50-60% (squeeze test: a few drops from a handful), and pile size of at least 3x3x3 feet minimum for thermal mass. Below these minimums, you get slow cold compost — still useful, just slower and won't kill weed seeds. Source: Cornell Waste Management Institute composting guide.
- Vermicomposting (apartment/small-space option): 2 sq ft Rubbermaid bin + 1 lb red wigglers ($25-35 shipped) converts kitchen scraps to vermicast at 3-6 month cycles. Vermicast retail value: $20-50 per cubic foot (higher than standard compost due to microbial density). USDA ARS vermicomposting research. Practical note: not suitable for meat, dairy, or cooked foods; odor-free if managed correctly.
- Do not compost list with reasons: meat/dairy (anaerobic, attracts pests, odor); diseased plant material (pathogens survive cold piles); weeds that have gone to seed (unless hot composting); dog/cat waste (pathogen risk — Toxoplasma, Salmonella); coal ash (heavy metals). Source: NCHFP and EPA composting guidance.
**Acceptance:** Final article 1,800+ words, four new sections integrated without disrupting existing flow, USDA ARS and Cornell citations named, zero em dashes, build passes.

---

## Content Expansion Sprint (CA031-CA034, PE007-PE014) — Claude Code

### CA031 — Expand companion-planting-basics.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/companion-planting-basics.md`
**Current word count:** ~712 words
**Target:** 1,800+ words
**What's missing:** The article has good pairings but no economic frame, no evidence-level table across all pairings, no guild planting concept, no section on negative interactions beyond the 3 listed, and no actionable spacing or setup guidance. It reads like a list, not an analysis.
**Add these sections:**
- Economic case for companion planting: pest damage costs money. A tomato plant losing 20-30% of fruit to aphid colonies represents real dollar loss; insecticidal soap costs $8-12/season per bed. Quantify what companion deterrence is worth — even partial pest reduction has an ROI. Penn State Extension documents aphid damage thresholds on tomato.
- Evidence level table: expand the current pairing list to at least 8 pairings with a column for evidence basis (controlled trial / repeatable observation / folk wisdom). Include: tomato+basil, tomato+marigold, three sisters, carrots+tomatoes, lettuce+tall crops, mint+brassicas, beans+squash, nasturtium trap cropping, dill+beneficial insects. Give mechanism for each with named source.
- Spacing and practical setup: companion planting requires actual physical proximity to work. Basil volatiles reach 12-18 inches reliably; marigolds need to border the bed (not just one plant in a corner). Give specific spacing for each pair.
- Negative pairs expansion: beyond fennel, onions+beans, dill+tomatoes — add: brassicas+strawberry (allelopathic), potato+tomato (shared disease risk — *Phytophthora infestans*), cucumber+sage (documented inhibition). Give the mechanism for each.
- Guild planting: the concept of a functional grouping (e.g., tomato+basil+marigold+carrot) that addresses multiple goals simultaneously. Frame as the upgrade from pair-based thinking.
**Acceptance:** 1,800+ words, evidence-level table with 8+ pairings, mechanisms cited for all major claims, practical spacing guidance, zero em dashes, build passes.

---

### CA032 — Expand spring-garden-planning.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/spring-garden-planning.md`
**Current word count:** ~748 words
**Target:** 1,800+ words
**What's missing:** The 5-step framework is sound but every step is too thin. No worked example showing what a real 4x8 bed plan looks like. No ROI calculation showing what the plan should target. No frost-date calendar with specific numbers. No crop rotation guidance. No soil prep timeline.
**Add these sections:**
- Worked example for a 4x8 bed: taking the 5 steps and showing what a specific household (2 people, $50 annual vegetable spend targeted for offset) would actually plant. Use the value density table from beginner-homestead-crops.md as the input. Show the math: 4x8 = 32 sq ft × $0.50-0.65/sq ft/season = $16-21 value from lettuce alone, etc.
- Crop rotation basics: same family crops shouldn't occupy the same bed two years running. Solanums (tomato, pepper, eggplant) after legumes is the optimal sequence. Source: UC Davis ANR Vegetable Research and Information Center. This is a concrete planning decision that belongs in a spring planning article.
- Soil prep timeline: what you should do in February vs. March vs. 2 weeks before planting. Soil temperature matters — below 50°F, most vegetable seeds don't germinate. A $10 soil thermometer is the most useful early-spring tool. Source: Purdue Extension soil temperature guide.
- Frost-date calendar expansion: the existing table is good but needs specific numbers — expand with hardiness zone column, specific planting windows per zone, and a note on microclimate adjustments. Reference USDA ARS Plant Hardiness Zone Map (planthardiness.ars.usda.gov).
**Acceptance:** 1,800+ words, worked example for 4x8 bed with dollar values, crop rotation basics sourced, soil prep timeline, zero em dashes, build passes.

---

### CA033 — Expand how-to-measure-yield.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/how-to-measure-yield.md`
**Current word count:** ~789 words
**Target:** 1,800+ words
**What's missing:** The article covers scale vs. estimating and herbs, but has no crop-by-crop weight loss table (what you lose by weighing after trimming vs. before), no season totaling guidance, no comparison of what the same crop returns in different management styles (one harvest vs. succession), and no guidance on interpreting your data to improve next season.
**Add these sections:**
- Harvest weight loss table: for 8 common crops, what percent of fresh-harvested weight is lost to trimming/prep before eating. Tomatoes lose ~5% (core removal); basil loses 30-40% (stem removal); lettuce loses 15-25% (outer leaves, core); carrot loses 10-15% (tops, peel). Source: USDA AMS commodity grading standards define commercial trim losses; use these as the baseline. Explains why you should weigh pre-trim.
- Season total methodology: how to add up weekly harvests into a meaningful seasonal number. What a "good" season looks like per crop per square foot based on USDA extension yield data. Gives the reader benchmarks: if you got 8 lb of tomatoes from two plants, that's below average (extension estimates 10-15 lb/plant for indeterminate types, Penn State Extension); if you got 20 lb, that's excellent.
- Management style comparison: a succession-planted lettuce bed vs. single-wave lettuce bed. The succession version might produce 4-5 lb over the season; the single-wave might produce 1-2 lb. Yield tracking reveals this immediately; without tracking, both just "seemed like a lot of lettuce." Use data from succession-planting-calendar.md.
- Interpreting your data: end-of-season questions to ask. Which crop returned the highest value per square foot? Which underperformed the extension baseline? Did any crop require so many inputs (spray, trellising, water) that the net value was actually low? This turns yield data into planning decisions.
**Acceptance:** 1,800+ words, harvest weight loss table sourced to USDA AMS, season totaling guidance with extension benchmarks, management comparison, zero em dashes, build passes.

---

### CA034 — Expand how-to-find-local-prices.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/how-to-find-local-prices.md`
**Current word count:** ~798 words
**Target:** 1,800+ words
**What's missing:** The 3 methods are well explained but thin. No actual examples of regional price variation. No organic vs. conventional comparison table. No guidance on seasonal vs. annual pricing. No worked example showing how a price update changes an ROI calculation.
**Add these sections:**
- Regional price variation table: 8 key crops × Northeast/Midwest/South/West price comparison, sourced from USDA ERS "Fruit and Vegetable Prices" regional data. Show the actual dollar spread — this is the data readers need to know whether the national default is over- or under-stating their return.
- Organic vs. conventional comparison table: 8 crops with conventional retail, organic retail, and the premium percentage. Source: USDA ERS Organic Price Review. This belongs in a "finding your price" article because it's a critical variable that most gardeners ignore.
- Seasonal pricing guidance: same crop has different prices in different months. Cherry tomatoes in August cost $2/lb; in February they're $5/lb. If you're comparing your garden output against in-season retail you may significantly undercount the value, especially for preserved produce (frozen strawberries in December compared against December retail, not June retail). Source: USDA AMS monthly price data.
- Worked example: take a 4x8 bed with basil, cherry tomatoes, and lettuce. Calculate the ROI at national average prices. Then recalculate at (a) a high-cost city like Seattle and (b) a rural Midwest baseline. Show the spread in both directions. Numbers make the point better than explanation.
**Acceptance:** 1,800+ words, regional price table with 8 crops × 4 regions, organic premium table, seasonal pricing section, worked example with actual numbers, zero em dashes, build passes.

---

### PE007 — Expand ground-cherry.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/ground-cherry.md`
**Current word count:** ~825 words
**Target:** 1,400+ words
**What's missing:** ROI table by variety, succession planting for extended harvest, culinary and preservation section expanded (dried ground cherries at $12-18/lb is mentioned but not developed), and farmers market vs. home use economics.
**Add these sections:**
- Cultivar ROI comparison table: Aunt Molly's (most common, reliable yield), Goldie (high sugar, farmers market premium), Cossack Pineapple (large fruit, lower per-fruit count). For each: days to maturity, average plant yield, estimated retail value per plant. Sources: Johnny's Selected Seeds variety data; Cornell Cooperative Extension specialty vegetable trials.
- Succession planting: one sowing starts in late April indoors, first harvest mid-August. A second sowing in late May extends production into October. For a 90-day productive season, two sowings provide near-continuous harvest rather than one 3-week flush.
- Preservation expanded: dried ground cherries at $12-18/lb specialty retail. Drying method: 115°F in dehydrator for 8-10 hours until leathery. Jam and salsa preservation — the fruit's pectin content produces good jam set without added pectin; use tested recipe from NCHFP. A half-pint jar of ground cherry jam at specialty food retail: $8-12.
**Acceptance:** 1,400+ words, cultivar comparison table, preservation economics, zero em dashes, build passes.

---

### PE008 — Expand tomatillo.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/tomatillo.md`
**Current word count:** ~845 words
**Target:** 1,400+ words
**What's missing:** Variety comparison table with yield and flavor data, salsa verde preservation economics (the primary use case), heat stress management (the most common summer failure point), and zone guidance.
**Add these sections:**
- Variety comparison table: Toma Verde (standard commercial green), Grande Rio Verde (large fruit, high yield), Purple De Milpa (small, sweet, higher market price), Cisineros (purple, cold-tolerant). Days to maturity, approximate yield per plant, and best use for each. Source: University of Minnesota Extension tomatillo variety trials; OSU Extension specialty crop guide.
- Salsa verde preservation: the primary reason most households grow tomatillos in volume. NCHFP has a tested salsa verde recipe for water bath canning. Quantify: 4 cups roasted tomatillos + aromatics → 2 pints salsa verde. At $4-6/pint retail for jarred salsa verde, a 6-plant bed producing 15-20 lb yields 8-10 jars = $32-60 in preserved value. Use only tested NCHFP recipe — do not modify proportions.
- Heat stress and flower drop: temperatures above 95°F cause flower drop. In Zone 7-9 summers, this can interrupt fruit set for 2-4 weeks. Management: shade cloth rated 30-40% during peak heat, consistent moisture, and accept that some loss is normal. Do not prune during heat stress.
**Acceptance:** 1,400+ words, variety table, preservation economics with NCHFP citation, heat stress section, zero em dashes, build passes.

---

### PE009 — Expand gooseberry.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/gooseberry.md`
**Current word count:** ~858 words
**Target:** 1,400+ words
**What's missing:** A 10-year ROI table, cultivar comparison table with disease resistance data, pruning guide with specific cane-age management, and preservation economics.
**Add these sections:**
- 10-year ROI table: Year 0 (plant cost $4.99 + $10 soil prep), Year 1 (0.5 lb), Year 2 (1.5 lb), Year 3+ (4-6 lb/year). At $5/lb, cumulative value vs. cumulative input cost. Break-even: Year 3. Source: University of Minnesota Extension gooseberry production guide; USDA AMS specialty berry prices.
- Cultivar comparison table: Hinnomaki Red (Finnish, mildew-resistant, good flavor), Hinnomaki Yellow (gold fruit, good flavor), Poorman (American-European cross, vigorous, reliable), Invicta (British, white-green fruit, mildew-resistant, highest yield). Columns: fruit color, mildew resistance, Zone, approximate yield. Source: University of Vermont Extension small fruit guide.
- Pruning guide: gooseberries fruit on 1, 2, and 3-year-old canes. The management goal is to maintain a mix of all three ages, removing all canes older than 3 years. In practice: at dormant pruning, remove all canes at or near ground level that are more than 3 seasons old (wood is dark brown and gnarly vs. the lighter green-gray of young canes). Leave 4-5 canes of each age class. Open center pruning for airflow. Source: Cornell Cooperative Extension small fruits guide.
**Acceptance:** 1,400+ words, 10-year ROI table, cultivar comparison, pruning cane-age guidance, zero em dashes, build passes.

---

### PE010 — Expand scallion.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/scallion.md`
**Current word count:** ~863 words
**Target:** 1,400+ words
**What's missing:** Succession planting schedule for continuous harvest, comparison to bulbing onion economics, overwintering detail for Zone 6+, and a per-row ROI table.
**Add these sections:**
- Succession planting schedule: every 3 weeks from 4 weeks before last frost through July produces near-continuous scallion harvest. Table: sowing date → approximate harvest date → weeks of supply. In Zone 6, that's 5-6 sowings providing harvest from May through October. Penn State Extension vegetable production guide succession intervals.
- Scallion vs. bulbing onion comparison: scallions mature in 60-70 days vs. 100-130 days for bulbing onion; use less space; return value earlier; cannot be stored long-term. Bulbing onion returns more value per plant but at significantly longer time-to-harvest. Use the comparison to frame when scallions make more sense (small space, continuous supply) vs. bulbing onions (storage, larger yield per plant).
- Overwintering in Zone 6+: fall-planted *A. fistulosum* varieties with good cold hardiness (Evergreen Hardy White, Parade) survive Zone 6 winters under light mulch and resume growth before most spring crops are planted. This provides the earliest spring harvest of any allium. Source: Penn State Extension allium production guide.
- Per-row ROI table: 5-foot row data across 4 succession plantings: seed cost, yield per row, retail value, net value. Shows how succession multiplies the return from a modest investment.
**Acceptance:** 1,400+ words, succession schedule table, scallion vs. onion comparison, overwintering guidance, zero em dashes, build passes.

---

### PE011 — Expand purslane.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/purslane.md`
**Current word count:** ~868 words
**Target:** 1,400+ words
**What's missing:** A nutritional comparison table with other greens, cultivated vs. wild performance comparison, a cutting frequency and yield table, and more developed culinary use guidance.
**Add these sections:**
- Nutritional comparison table: purslane vs. spinach vs. kale vs. arugula for omega-3 (ALA), vitamin C, calcium, and iron per 100g. Source: USDA FoodData Central for all values. This is the table that justifies the "highest omega-3 of any leafy green" claim with actual numbers. Purslane: ~300-400mg ALA/100g; spinach: ~138mg; kale: ~180mg.
- Cultivated vs. wild performance comparison: wild purslane (*Portulaca oleracea* var.) has smaller leaves and prostrate growth. Cultivated varieties ('Goldgelber,' 'Gruner,' 'Golden Purslane') produce upright stems 8-12 inches tall with leaves 3-5x larger. At equivalent spacing, cultivated yields 3-5x more harvestablemass per square foot. University of Vermont specialty crops trial data.
- Cutting frequency and yield table: 4x4 bed, first harvest at 30 days, subsequent cuttings every 3-4 weeks until frost. 3 harvests/season typical in Zone 6. Per-harvest yield: 0.5-1.5 lb. Seasonal total: 1.5-4.5 lb at $4/lb = $6-18 from a bed that requires zero irrigation. Show the math.
- Culinary use expanded: Middle Eastern fattoush (the traditional use), Greek horta (wilted with olive oil and lemon), raw salads, and soup thickener. The mucilaginous quality - from the polysaccharides in the cell walls - functions like a natural thickener in soups and stews in the same way okra does. This isn't widely known and is useful for readers wondering what to do with a surplus.
**Acceptance:** 1,400+ words, USDA FoodData Central nutritional table, cultivated vs. wild yield comparison, cutting schedule with ROI, zero em dashes, build passes.

---

### PE012 — Expand marjoram.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/marjoram.md`
**Current word count:** ~877 words
**Target:** 1,400+ words
**What's missing:** Flavor and use comparison table vs. oregano (same genus, different crop), a dried vs. fresh value analysis, companion planting mechanism expanded, and a culinary use guide by dish type.
**Add these sections:**
- Marjoram vs. oregano comparison table: scientific name, flavor profile (volatile compounds: marjoram is high in sabinene hydrate; oregano is high in carvacrol and thymol — these are why they taste different), heat stability, culinary uses, cold hardiness. Source: USDA ARS essential oil composition data; Baser KH et al., *Flavour and Fragrance Journal* for volatileoil composition.
- Fresh vs. dried value analysis: marjoram loses nuance in drying unlike oregano, which intensifies. The practical implication: dried marjoram is worth growing for surplus, but the premium is in fresh marjoram for cooking. Fresh marjoram at $8-12/lb; dried at most grocery stores sells for $0.50-1.00/0.5 oz jar = $16-32/lb equivalent. Growing your own dried marjoram replaces specialty store purchases at significant markup. Show the math.
- Companion planting mechanism: marjoram's volatile oils (particularly sabinene hydrate and terpinen-4-ol) show documented repellent activity against certain thrips and aphid species. Unlike basil, which is well-studied, marjoram companion evidence is primarily from Italian intercropping research. Flag the evidence quality honestly. Source: Montemurro et al., *Industrial Crops and Products* (2016) on Origanum volatile deterrence.
- Culinary guide: this herb is underused because cooks don't know when to use it. Specific applications: French fines herbes mix (equal parts parsley, chervil, tarragon, marjoram); German Wurstkraut (sausage spice); egg dishes where oregano would be too assertive; tomato sauces where it's added in the final 2 minutes off heat. The use case is specifically "where you want herb flavor without intensity."
**Acceptance:** 1,400+ words, oregano comparison table, dried value math, companion mechanism cited, culinary guide, zero em dashes, build passes.

---

### PE013 — Expand radicchio.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/radicchio.md`
**Current word count:** ~879 words
**Target:** 1,400+ words
**What's missing:** A variety timing table (different types have different day ranges), blanching/forcing technique for Treviso types, ROI comparison to other chicories, and a culinary guide that makes the bitterness argument.
**Add these sections:**
- Variety timing and characteristic table: Chioggia (60-85 days, compact round head, most forgiving), Treviso Early (70-85 days, elongated, sharper flavor), Castelfranco (75-90 days, loose spotted head, mildest), Chioggia Rossa Verona (65-75 days, compact, cold-hardy to Zone 5). With columns: type, days from transplant, head shape, bitterness level, cold tolerance, best Zone. Source: Fedco Seeds variety descriptions; Johnny's Selected Seeds trial data.
- Blanching/forcing Treviso: cutting Treviso to 1 inch above the crown in October, covering the stumps with 4-6 inches of soil or a bucket to exclude light, and harvesting the etiolated regrowth (puntarelle) 3-4 weeks later is the traditional Italian production method. The forced growth is more tender and less bitter than standard heads. This is not widely described in US gardening literature. Source: Nardozzi, *Vegetable Gardening for New England*, for forcing technique reference.
- ROI vs. other chicories: radicchio at $4-6/lb vs. Belgian endive at $4-7/lb vs. escarole at $2-3/lb vs. frisée at $3-5/lb. For cooks in the chicory style, radicchio has the strongest market presence and easiest home production. The full chicory family competes for the same bed space and similar price points — show the comparison.
- Culinary guide for the bitter skeptic: raw in salads with sweet vinaigrette (bitterness and sweetness balance); grilled or roasted (heat reduces bitterness by breaking down bitter glycosides); braised in white wine; in risotto where color and subtle bitterness are the point. The bitterness is not a flaw to be minimized — it's the functional flavor. This framing helps readers understand what they're growing and why.
**Acceptance:** 1,400+ words, variety timing table, forcing technique, chicory ROI comparison, culinary guide, zero em dashes, build passes.

---

### PE014 — Expand tatsoi.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/plants/tatsoi.md`
**Current word count:** ~882 words
**Target:** 1,400+ words
**What's missing:** A cold-hardiness comparison table with other salad greens, a season-extension value calculation, more detail on row cover use, and a culinary use guide.
**Add these sections:**
- Cold-hardiness comparison table: tatsoi (15°F), kale (-10°F with cover), spinach (25°F unprotected / 20°F covered), arugula (20-25°F), mizuna (25-28°F), mâche (5°F). With columns: crop, low temp survival, frost texture, season extension weeks vs. lettuce. This table is the reason to grow tatsoi — the data makes the case better than prose. Source: Cornell Cooperative Extension; Penn State Extension cold-hardy greens guide.
- Season-extension value calculation: if tatsoi extends the fresh-greens season by 4-6 weeks beyond when lettuce, arugula, and spinach are done, and a typical household uses 0.5 lb of salad greens per week, that's 2-3 lb of additional produce at $4-6/lb retail = $8-18 in additional value from the same bed space. Show the math explicitly.
- Row cover use: floating row cover (1.5 oz/sq yd weight) extends tatsoi's effective season another 2-4 weeks in Zone 5-6. Temperature inside row cover on a 28°F night: approximately 35-38°F - above the no-cover tolerance of 15°F but the advantage is consistent production vs. freeze-thaw recovery cycles. Source: ATTRA (National Sustainable Agriculture Information Service) season extension guide.
- Culinary guide: tatsoi raw in salads (substitute anywhere you'd use baby spinach; similar flavor, different texture); stir-fried (handles high heat well; wilts quickly; 90-second maximum wok time for tender leaves); in miso soup or Asian broths where it's added in the final minute. The mild flavor and tender-yet-substantial texture makes it more versatile than it looks.
**Acceptance:** 1,400+ words, cold-hardiness table, season-extension value calculation, row cover guidance, zero em dashes, build passes.

---

## Pillar Page Sprint (F010) — Copilot

### F010 — Best ROI Crops pillar page
**Status:** `[x]`
**Owner:** Copilot (infrastructure/routing)
**URL:** `/crops/best-roi/`
**What:** A static pillar page that ranks the top 15 crops on the site by calculated ROI (net value per sq ft per season), with a comparison table and internal links to each crop page. This is a high-traffic target keyword page ("most profitable vegetables to grow", "best ROI garden crops") and an internal linking hub for the crops section.

**Data source:** All crop frontmatter already has `seed_cost`, `avg_yield_lb`, `avg_price_lb`, `days_to_harvest`. Calculate ROI as: `(avg_yield_lb × avg_price_lb) - seed_cost`. Use Astro content collections to query all plants, sort descending by calculated ROI, take top 15.

**Page structure:**
1. Hero section: headline "The 15 Highest-ROI Crops for the Home Garden" + 1-sentence intro (no fluff — lead with the data point: "Garlic returns $X per $1 of seed cost")
2. Comparison table: rank | crop name (linked to `/crops/[slug]/`) | seed cost | avg yield | avg price/lb | net value | days to harvest. Sortable would be ideal but static is acceptable for MVP.
3. Brief 2-3 sentence description for each top crop explaining WHY it ranks high (herb premium, low seed cost, high yield, etc.). Not a full growing guide — link to the crop page for that.
4. "How we calculate ROI" section: transparent formula disclosure — seed cost, average yield from USDA extension data, retail price from USDA AMS. Links to `/methodology/`.
5. Related: link to `/crops/` (full index), `/roi/raised-bed-break-even/`, `/start-here/`.

**Implementation notes:**
- New file: `src/pages/crops/best-roi.astro`
- Uses `getCollection('plants')` to pull all plant data
- Sort and slice top 15 at build time — fully static
- Use `BaseLayout` and match crops section styling
- `<title>`: "15 Highest-ROI Crops for Home Gardeners" (fits under 55 chars)
- `<meta description>`: "Garlic returns $8 per $1 invested. These 15 crops have the highest calculated ROI from USDA yield and price data. Full comparison table." (155 chars)
- Add JSON-LD: `ItemList` schema with 15 `ListItem` entries linking to each crop page

**Acceptance:**
- Page renders at `/crops/best-roi/` with 15 crops ranked by ROI formula
- Table includes all 6 columns, crops link to their individual pages
- JSON-LD `ItemList` present in page source
- Page linked from `/crops/` index and `/start-here/`
- `npx astro build` passes with 0 errors
- No hardcoded crop data — all values pulled from content collection frontmatter at build time

---

## Content Depth Sprint (D001-D007) — Claude Code

All stories in this sprint expand underweight articles and plant pages. Load `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md` before writing. Build must pass 0 errors after each story.

---

### D001 — Expand cover-crops-101.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/cover-crops-101.md`
**Current word count:** ~1,197 words
**Target:** 2,000+ words
**What's missing:** The article explains why cover crops work (nitrogen, weed suppression) and lists 4 species, but lacks a comparison table that lets readers choose the right species, zone-specific timing, a combined multi-year value calculation, and more detail on termination methods.
**Add these sections:**
- Cover crop species comparison table: rows = crimson clover, winter rye, hairy vetch, buckwheat, oats, field peas. Columns: zones, N fixation (lbs/acre from SARE data), biomass production (lbs/1,000 sq ft), seed cost ($/1,000 sq ft), best use, allelopathy risk. Source: SARE *Managing Cover Crops Profitably* (3rd ed.); NRCS plant fact sheets.
- Zone-specific timing table: when to sow (fall planting window by zone), when to terminate (minimum weeks before planting), relevant frost dates. Zones 4-8. Source: USDA ARS frost date data.
- Combined 5-year value calculation: year-by-year accumulation of nitrogen value ($0.06-0.14/100 sq ft/season) plus weed suppression time savings (6 hrs/season at $15/hr = $90). Show how the combined value over 5 years is $450-470, dwarfing the annual seed cost of $4-6/season. Makes explicit what "cumulative value" actually means with real numbers.
- Termination method comparison: mowing + waiting vs. till-in vs. occultation. Pros/cons of each for home gardens. Specific timing for rye (minimum 3 weeks due to allelopathy) vs. clover (2 weeks adequate). What to plant immediately after vs. what needs a wait period. Source: Cornell Cooperative Extension *Cover Crop Termination Guidelines*.
**Acceptance:** 2,000+ words, species comparison table with 6 rows, zone timing table, 5-year value calculation, zero em dashes, build passes.

---

### D002 — Expand soil-ph-by-crop.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/soil-ph-by-crop.md`
**Current word count:** ~1,423 words
**Target:** 2,000+ words
**What's missing:** Good chemistry and adjustment guidance exist, but no amendment cost table, no visual symptom guide, no worked example showing the full correction calculation.
**Add these sections:**
- Amendment comparison table: calcitic lime vs. dolomitic lime vs. wood ash (for raising pH) vs. elemental sulfur vs. aluminum sulfate vs. acidified compost (for lowering). Columns: material, typical $/50 lb bag, how it works, reaction speed, when to use it vs. alternatives, source. USDA NRCS and Penn State Extension sources.
- Visual symptom identification: what pH problems actually look like in the garden. Table: symptom (interveinal yellowing on young leaves = iron/manganese deficiency from high pH; brown speckling on older leaves = manganese toxicity from low pH; stunted roots = aluminum toxicity; poor nodulation on legumes = pH below 6.0). Each symptom with likely pH cause and correction.
- Worked example: a Zone 6 garden soil testing pH 5.2. Target: 6.5. Soil type: loam. Amendment needed: 100-150 lb/1,000 sq ft calcitic lime per Penn State rates. Timing: apply fall for spring planting. Cost: $20-30 in lime. Expected result timeline: 6 months to achieve full correction. Compare against cost of one season's reduced tomato yield from a pH 5.2 bed (~20% yield reduction on 4 plants at $3/lb = $30-50 in lost produce). The test pays for itself in one season.
- Regional soil context: Northeast/Mid-Atlantic soils tend to be naturally acidic (pH 4.5-6.0) due to high rainfall leaching calcium. Great Plains and Southwest soils trend alkaline (7.0-8.5) from low rainfall and calcareous parent material. Pacific Coast varies widely by microclimate. This context helps readers know their starting point before testing. Source: USDA NRCS Web Soil Survey regional data.
**Acceptance:** 2,000+ words, amendment cost table, visual symptom table, worked example with cost calculation, zero em dashes, build passes.

---

### D003 — Expand seed-saving-guide.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/seed-saving-guide.md`
**Current word count:** ~1,581 words
**Target:** 2,000+ words
**What's missing:** The easy-5 crops are well covered. The article doesn't address cross-pollinators, doesn't have a complete viability table, and doesn't explain what to do with excess seed.
**Add these sections:**
- Complete seed viability table: 15+ crops. Columns: crop, storage life at ideal conditions, germination temp range, self or cross pollinator, isolation distance if cross. Tomato 4-5 yr, pepper 2-3 yr, bean 3-4 yr, pea 3 yr, lettuce 2-3 yr, cucumber 5 yr (cross), squash 4-6 yr (cross, inbreeds within species), corn 2-3 yr (cross, 1000 ft), onion 1-2 yr, carrot 3 yr (cross, 1000 ft), brassica 3-5 yr (cross, 1000 ft). Source: USDA seed viability guidelines; Seed to Seed, Ashworth (Seed Savers Exchange, 2002).
- Managing cross-pollinating crops: cucumbers as the practical example. If growing one cucumber variety, seeds will grow true. If growing two cucumber varieties (Marketmore and Spacemaster), the seeds will cross. Solutions: time isolation (plant varieties 30+ days apart so blooms don't overlap), distance isolation (500+ feet between varieties, impractical for most home gardens), or hand pollination with masking tape seal. For the home gardener: the easiest answer is growing only one variety of each cross-pollinating crop per season.
- What to do with surplus seed: seed libraries (most US counties have a seed library through the public library system; seeds can be borrowed and returned at season end), seed swaps (local garden clubs, online communities, Seed Savers Exchange annual seed swap), seed donation to community gardens. The surplus from one healthy tomato plant - hundreds of seeds - has real value to other gardeners. Don't compost it.
**Acceptance:** 2,000+ words, viability table with 12+ crops, cross-pollination management section, surplus seed guidance, zero em dashes, build passes.

---

### D004 — Expand beginner-homestead-crops.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/beginner-homestead-crops.md`
**Current word count:** ~1,695 words
**Target:** 2,000+ words
**What's missing:** Article is strong on crop selection, ROI math, and common mistakes. Missing: a harvest calendar showing when each crop peaks in a typical season, and a year 2 expansion guide.
**Add these sections:**
- Harvest timing calendar: table showing what each of the 5 crops produces month by month in Zone 6 (May-October). Columns: crop, May, June, July, Aug, Sept, Oct. Cells: "starting/early", "peak", "declining/replant", "done", "fall succession" etc. This gives first-year gardeners realistic expectations for when they'll have food, not just if they will. Based on standard frost dates and maturity data.
- Year 2 expansion guide: once you've grown the core 5 through one season, which 3 crops to add next and why. Best candidates: garlic (plant in fall for summer harvest - lowest maintenance, high value, can be planned around existing bed schedule); cucumber (high value, complements existing tomato/basil bed, relatively easy); kale (extends season into winter, low maintenance once established). Each with brief rationale tied back to value density and production timing. This avoids the common Year 2 mistake of adding too many crops at once.
**Acceptance:** 2,000+ words, harvest calendar table, year 2 expansion section, zero em dashes, build passes.

---

### D005 — Expand canning-financial-case.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/canning-financial-case.md`
**Current word count:** ~1,810 words
**Target:** 2,200+ words
**What's missing:** Equipment amortization and safety are covered well. Missing: altitude adjustment (safety-critical and not yet mentioned), year-by-year equipment cost table, seasonal timing guide for when to can what.
**Add these sections:**
- Altitude adjustment: at elevations above 1,000 feet, water boils below 212°F - water bath processing times must increase, and pressure canning PSI must increase. Table: elevation range, boiling point of water, water bath adjustment (add minutes), pressure canning adjustment (increase PSI). Source: NCHFP altitude adjustment tables. This is a safety issue that omitting can cause botulism; it must be in any canning article.
- Year-by-year equipment amortization table: for a household that cans 40 jars/season of tomatoes and 20 jars/season of pickles. Columns: year, fixed costs (depreciation), lid costs, energy costs, total cost that year, cumulative total cost, cumulative value of product canned. Shows break-even clearly. Water bath canner ($40) + jars ($60) = $100 initial. Lids $8/year. Year 1 total: ~$115. Year 5 total: ~$147 (cumulative). Product value at $3.50/jar average: $210/year. 5-year product value: $1,050. 5-year net: $903.
- Seasonal canning calendar: what to process and when, by month. June: strawberry jam, rhubarb. July: blueberries, early dill pickles. August: tomatoes (main season), cucumbers. September: tomatoes (late), applesauce, salsa. October: winter squash (pressure), root vegetables. This shows readers when to have equipment ready, lids purchased, and time blocked. Source: NCHFP seasonal canning guides.
**Acceptance:** 2,200+ words, altitude adjustment table, amortization table, seasonal calendar, zero em dashes, build passes.

---

### D006 — Expand csa-vs-home-garden.md
**Status:** `[x]`
**Load skill:** garden-roi-content
**File:** `src/content/articles/csa-vs-home-garden.md`
**Current word count:** ~1,885 words
**Target:** 2,200+ words
**What's missing:** Year 1 vs Year 2+ comparison exists. Missing: a 10-year cumulative cost table, CSA type variation (not all CSAs are the same), and a section on skill accumulation as an asset.
**Add these sections:**
- 10-year cumulative cost table: CSA (full share at $900/year) vs. home garden (Year 1 $800 setup + recurring $160/year) vs. hybrid approach (half-share $500 + garden $200). Three scenarios, 10 rows (Year 1-10), cumulative cost column for each. Shows the compounding divergence. At Year 10: CSA total $9,000; home garden $2,240; hybrid $3,240. This is the clearest version of the 10-year math mentioned in the article but currently presented only as a paragraph.
- CSA type variation: not all CSAs deliver the same value. Standard vegetable CSA (most common, described above); specialty/cultural CSA (Korean, Mexican, Japanese varieties that home gardens rarely grow - highest uniqueness premium); community-run CSA (member-labor reduces cost 20-40%, usually nonprofit); farm-plus-CSA hybrid (pickup at farm includes u-pick options, adds direct market value). Brief table: type, typical price range, what you get that you can't replicate at home, who it's best for.
- The skill accumulation argument: a home garden gets better every year in ways a CSA subscription doesn't. Year 1: learning curve, lower yield, more crop failures. Year 3: you've solved your major pest problems, know your microclimate, know which varieties work. Year 5: perennial crops (strawberries, asparagus, herbs) are producing without replanting cost. The garden's effective ROI improves annually while the CSA cost stays flat. This isn't captured in a single-year analysis. Frame it as a compound return that a subscription service can't match.
**Acceptance:** 2,200+ words, 10-year cumulative cost table with 3 scenarios, CSA type table, skill accumulation section, zero em dashes, build passes.

---

### D007 — Expand five plant pages: broccoli, spinach, swiss-chard, sweet-potato, beet
**Status:** `[x]`
**Load skill:** garden-roi-content
**Files:** `src/content/plants/broccoli.md`, `src/content/plants/spinach.md`, `src/content/plants/swiss-chard.md`, `src/content/plants/sweet-potato.md`, `src/content/plants/beet.md`
**Current word counts:** broccoli 1,489 / spinach 1,427 / swiss-chard 1,109 / sweet-potato 1,181 / beet 1,147
**Target:** All at 1,600+ words minimum
**Add to each:**
- Broccoli (needs ~120 words): Add a spring vs. fall yield comparison section. Fall broccoli outperforms spring in two measurable ways: longer side shoot window (4-6 weeks vs 2-3 weeks due to cooling temperatures slowing bolt pressure) and better flavor (Penn State Extension). Quantify: fall broccoli may yield 4-5 lb per plant vs 2.5-3 lb from spring. That changes the per-plant value from $6-7.50 (spring) to $10-12.50 (fall) at $2.50/lb. One section, ~120 words.
- Spinach (needs ~175 words): Add a spring vs. fall ROI comparison. Fall spinach from a single sowing is typically more productive than spring succession because it matures in cooling temperatures with no bolt pressure. Quantify: spring succession (3 plantings, each 1-2 weeks productive) vs. fall single planting (4-6 weeks productive, potential overwintering). Data from Cornell Cooperative Extension and Penn State Extension. Table: spring succession (3 plantings × 0.5 lb/sqft × short window) vs. fall crop. ~175 words.
- Swiss chard (needs ~500 words): Add a season length comparison vs. other greens (chard runs 5-6 months vs spinach 4-6 weeks per sowing, lettuce 3-4 weeks per sowing). Add a cooking guide with specific applications: stems and leaves cook at different rates - stems need 3-4 minutes, leaves 1-2 minutes; rainbow chard color fades with prolonged cooking; best uses (sautéed with garlic, added to soups, stem gratin). Add a per-season yield accumulation calculation: one plant at 1 lb/season spread over 5-6 months gives what weekly rate, compared to what you'd buy. ~500 words.
- Sweet potato (needs ~420 words): Add a variety ROI comparison table (Beauregard at $1.75/lb conventional vs. Murasaki/Japanese white at $3-5/lb specialty; 4 lb per slip × price difference = significant ROI gap). Add a spacing and bed management section: slips planted 12-18 inches apart in rows 3-4 feet apart; 6 slips in a 4x8 bed; expected yield at full spacing. Source: University of Georgia Extension, NC State Extension. ~420 words.
- Beet (needs ~450 words): Add a succession planting section (spring crop timed 4-6 weeks before last frost + fall crop timed 10-12 weeks before first frost; each produces 20-30 lb from a 4x8 bed = 40-60 lb per season from one bed). Add a double-harvest value calculation: roots at $2.50/lb plus greens (thinnings, ~1 lb per 4-row-foot, valued at $3-4/lb as chard-equivalent) adds $3-8 in greens value to each sowing. Show the math: 2 sowings × (25 lb roots at $2.50 + 2 lb greens at $3.50) = $132 from $5 in seed. Sources: Penn State Extension, OSU Extension beet production guides. ~450 words.
**Acceptance:** All 5 files at 1,600+ words, each addition sourced, zero em dashes in any file, build passes after all 5 are updated.

---

## Plant Page Expansion Sprint 4 — Herbs and Vegetables

### PE015 — Expand oregano.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/oregano.md`
**Current word count:** ~911 words
**Target:** 1,600+ words
**What:** Expand with cultivar comparison table, multi-year perennial ROI table, and culinary guide.
**Add these sections:**
- Cultivar comparison table: 4-5 rows covering Greek oregano (*O. vulgare* subsp. *hirtum*, highest carvacrol 60-80%, used for dried, $8-15/lb dried at specialty), common/Italian oregano (*O. vulgare*, 20-40% carvacrol, milder, good fresh), Mexican oregano (*Lippia graveolens*, different genus entirely, used in Tex-Mex and mole, more citrusy), Golden oregano (*O. vulgare* 'Aureum', ornamental, low oil). Columns: cultivar, carvacrol %, best use, cold hardiness zone, notes.
- Multi-year perennial ROI table: Year 1 ($2.99 seed, ~6 oz fresh first season = ~$3.00 value, small net gain), Year 2 (established plant, 0.75 lb fresh = $6-9 in grocery value, seed cost $0), Year 3+ (divide every 2-3 years, free additional plants). Total 5-year value from one planting (~$35-45 in herb value vs $3 seed cost). Source: USDA AMS specialty herb data, Oregon State Extension herb value guides.
- Culinary applications: fresh vs dried ratio (1 tbsp fresh = 1 tsp dried; dried oregano more concentrated due to oil retention). Add to pizza/tomato sauces in last 5 minutes of cooking; longer cooking destroys volatile oils. Greek oregano specifically for dried use in Mediterranean cooking. Mexican oregano for chili, beans, mole - not interchangeable with Greek. Oregano infused oil: pack fresh into olive oil (use caution - low-acid herbs in oil require refrigeration to prevent botulism; NCHFP guidelines).
**Acceptance:**
- 1,600+ words total
- Cultivar comparison table present with carvacrol % data
- Multi-year ROI table with 5-year calculation
- All figures cited (USDA AMS or OSU/Cornell extension)
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE016 — Expand rosemary.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/rosemary.md`
**Current word count:** ~990 words
**Target:** 1,600+ words
**What:** Expand with propagation methods comparison table, variety cold-hardiness table, and multi-year ROI calculation.
**Add these sections:**
- Propagation methods comparison table: Seed (slow - 14-21 day germination, 6+ months to harvest size, 30-40% germination rate, lowest cost ~$3/packet); Stem cutting (3-4 week root development, 4-5 months to harvest size, free if you have a parent plant, 70-80% success with rooting hormone); Layering (bend a stem to the ground, cover with soil, roots form in 4-6 weeks, sever and transplant, 90%+ success, completely free). Columns: method, time to transplant size, cost, success rate, when to use.
- Cold-hardiness variety table: 'Arp' (Zone 6, developed at Fredericksburg VA, survives -10°F with mulch), 'Salem' (Zone 6 borderline), 'Madelene Hill' (Zone 6, similar to Arp), 'Tuscan Blue' (Zone 8+, upright, classic Italian flavor, best for mild climates), *R. officinalis* standard (Zone 7+, most common commercial form). Columns: variety, cold hardiness zone, habit (upright/spreading), primary use, notes.
- Multi-year perennial ROI: Year 1 (from cutting or transplant ~$3-5, ~4 oz first harvest = $2-3 value, slightly net negative); Year 2 (fully established, 0.5 lb harvest = $4-8 value, $0 seed cost); Year 3-10 (same plant, divides readily, each division is free). 10-year calculation: one $4 cutting returns 9 years of $4-8 annual value = $36-72 in rosemary. Source: USDA AMS specialty herbs, NC State Extension.
**Acceptance:**
- 1,600+ words total
- Propagation comparison table present
- Cold-hardiness variety table present with zone data
- Multi-year ROI calculated over 10 years
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE017 — Expand thyme.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/thyme.md`
**Current word count:** ~1,030 words
**Target:** 1,600+ words
**What:** Expand with cultivar comparison table, multi-year value calculation, and culinary applications.
**Add these sections:**
- Cultivar comparison table: Common/English thyme (*Thymus vulgaris*, 40-60% thymol/carvacrol, standard culinary use, Zone 5), French thyme (milder flavor, lower thymol, preferred for delicate applications, Zone 6), Lemon thyme (*T. citriodorus*, geraniol dominant, citrusy, excellent for fish and chicken, Zone 6), Creeping thyme (*T. serpyllum*, ornamental/walkable groundcover, culinary use secondary, Zone 4). Columns: cultivar, primary compound, flavor profile, hardiness zone, best culinary use.
- Multi-year value accumulation: perennial herb, one $2.99 planting returns value for 3-5 years before needing division. Year 1: ~3 oz harvest = $1.50-2.00 in grocery value; Year 2: 6 oz = $3.00-4.00; Year 3: full production, 0.4 lb = $4-6/year; divided plant produces 2-4 new plants. 5-year scenario: $3 seed cost produces $15-25 in cumulative thyme value plus free divisions. Source: USDA AMS, Purdue Extension herb guides.
- Culinary applications with timing: thyme added early in long braises and stews because heat-stable thymol survives long cooking; add fresh thyme to vinaigrettes and marinades for rawer application. Lemon thyme in compound butter for fish (1 tbsp lemon thyme + 4 tbsp butter = finishing butter for salmon). Thyme stems are woody - run your fingers backwards down the stem to strip leaves from woody stems. Dried thyme retains flavor better than most herbs; 6:1 fresh-to-dried conversion is typical.
**Acceptance:**
- 1,600+ words total
- Cultivar table with thymol/carvacrol data
- 5-year value accumulation calculated
- Culinary timing guidance (when to add in cooking)
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE018 — Expand sage.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/sage.md`
**Current word count:** ~979 words
**Target:** 1,600+ words
**What:** Expand with multi-year perennial ROI table and culinary use section.
**Add these sections:**
- Multi-year perennial ROI table (Years 1-5): Year 1 from seed (~$2.99 seed, slow establishment, ~2 oz first harvest, $1.50-2.00 value); Year 2 (established, 4-5 oz harvest, $3.00-4.00 value); Year 3 (full production, 0.4-0.5 lb harvest, $4.50-6.00 value at $10-12/lb dried equivalent); Year 4-5 (begin to get woody, evaluate for replacement - but take softwood cuttings in spring to propagate new plants for free). Cumulative 5-year value from one planting: $15-22 vs $3 seed cost. Source: USDA AMS specialty herbs, UC Davis ANR publication on culinary herb economics.
- Sage varieties comparison: Garden sage (*S. officinalis*, standard culinary, Zone 5-8), 'Berggarten' (large leaves, strong flavor, low seed set, non-flowering preference in cooking use, Zone 5), 'Purpurascens' (purple-gray leaves, decorative plus culinary, Zone 6), 'Tricolor' (variegated, less vigorous, primarily ornamental), Clary sage (*S. sclarea*, biennial, used in perfumery and some culinary applications - wine, vermouth).
- Culinary use section: brown butter sage (fry fresh sage leaves in foaming butter until crisp, 45-60 seconds - the classic preparation for pasta and gnocchi); sage stuffing (dried or fresh, stuffing recipes that call for 1-2 tbsp dried sage = 3-6 tbsp fresh); sage and pork (traditional pairing because sage's camphorous compounds cut fat; chop finely and incorporate into sausage or meatballs at 1 tsp per lb of meat); harvest timing for different uses (harvest before flowering for maximum oil content; once flowering, the leaves are still usable but milder).
**Acceptance:**
- 1,600+ words total
- Multi-year ROI table Years 1-5
- Variety comparison section
- Culinary technique section with brown butter method
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE019 — Expand chives.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/chives.md`
**Current word count:** ~969 words
**Target:** 1,600+ words
**What:** Expand with multi-year compounding value calculation, garlic chives vs regular chives comparison table, and culinary applications.
**Add these sections:**
- Multi-year compounding value calculation: chives are perennial and divide every 2-3 years. Scenario: 3 plants from one $2.99 packet in Year 1 (yield ~0.2 lb fresh = $1.60-2.00 value). Year 2: same 3 plants fully established, $4-6 value. Year 3: divide each clump into 3, now 9 plants - or give divisions away. Year 5: potential 27+ plants from original $2.99 investment. Even keeping just 9 plants: $12-18/year in chive value at $8-10/lb retail (USDA AMS). Total 5-year value from $2.99: approximately $30-40 in herb value plus free division plants.
- Garlic chives vs regular chives comparison table: *Allium schoenoprasum* (regular) vs *A. tuberosum* (garlic chives). Columns: species, leaf shape, flavor, flower color/timing, culinary use, growth habit, when to harvest. Regular: round hollow leaves, onion flavor, purple flowers June-July, snipped into eggs/potatoes/sour cream; Garlic: flat solid leaves, mild garlic flavor, white flowers August, used in stir-fries and dumplings, traditional in Chinese cooking (Korean jeon/jiuicai). Both edible, both perennial, garlic chives grow slightly larger and are more heat-tolerant.
- Culinary applications: heat sensitivity (chives lose flavor quickly when cooked; add at the very end or as a finish, not during cooking); classic uses (baked potato, scrambled eggs, cream cheese, chive butter for steak); flower buds edible and strongly flavored than mature flowers; garlic chive specific uses (Korean jeon pancakes, Chinese dumpling filling with egg and pork, stir-fry garnish). Drying comparison: dried chives are poor - most flavor lost; freezing (chopped into trays) works better for bulk harvest.
**Acceptance:**
- 1,600+ words total
- Multi-year compounding table with 5-year scenario
- Garlic chives vs regular chives comparison table
- Culinary section with heat sensitivity guidance
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE020 — Expand dill.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/dill.md`
**Current word count:** ~969 words
**Target:** 1,600+ words
**What:** Expand with dual-harvest value table, succession sowing guide, and culinary applications.
**Add these sections:**
- Dual-harvest value table: fronds vs seed heads from the same planting. Fronds: harvest begins at 40-60 days, yield 0.25 lb per plant across multiple cuts, retail $4-8/lb fresh = $1.00-2.00 per plant; Seed heads (pickling): harvest at 90-110 days, 3-6 heads per plant, retail equivalent $1-2/head at farmers markets; Dried seed: 1-3 tbsp per plant, retail dried dill seed $5-8/oz at specialty stores. Total dual-use value per plant: $3-5 vs $0.04 seed cost. Source: USDA AMS specialty herb surveys.
- Succession sowing guide: dill bolts quickly in heat and has a relatively short window for frond harvest before the plant shifts energy to seed production. To maintain a continuous frond supply from June through September, sow every 2-3 weeks. First sow: 2 weeks after last frost (seed heads arrive in August, ideal for pickle season). Second sow: 3 weeks later (fronds available July-August). Third sow: midsummer (fronds available August-September). Chart/table: sow date, frond harvest window, seed head timing, notes. Note that self-seeding plants can substitute for intentional succession in years 2+.
- Culinary applications: dill weed (fronds) vs dill seed are chemically different and not interchangeable. Fronds with fish (salmon, trout), cucumber salad, tzatziki, new potatoes - add at the end of cooking or raw; heat destroys volatile compounds quickly. Dill seed in pickling brine (1 tsp per quart jar standard), rye bread, Scandinavian cooking. Dill heads in whole-pack pickles - the head provides the seed and the frond flavor together. Freezing fronds vs drying: frozen retains more flavor; dried is acceptable for cooked applications where some oil loss doesn't matter.
**Acceptance:**
- 1,600+ words total
- Dual-harvest value table with per-plant calculation
- Succession sowing table/guide
- Culinary section distinguishing fronds from seed uses
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE021 — Expand parsley.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/parsley.md`
**Current word count:** ~986 words
**Target:** 1,600+ words
**What:** Expand with biennial value table, flat vs curly comparison table, and culinary applications.
**Add these sections:**
- Biennial value table: Year 1 (spring start, slow germination, productive July-November, yield 0.4-0.5 lb, value $2.40-3.00); Year 2 (spring regrowth before bolting, additional 0.2-0.3 lb harvest in April-May before flower stalk), overwintering in Zone 6+ under light mulch; 2-year total: 0.6-0.8 lb from one $2.49 packet = $3.60-4.80 in grocery value. Comparison to basil (annual, $1.50-2.00 per plant per season); parsley's advantage is the biennial life cycle spreading cost across two years.
- Flat vs curly comparison table: *Petroselinum crispum* var. *neapolitanum* (flat-leaf) vs *P. crispum* var. *crispum* (curly). Columns: type, flavor intensity, myristicin content, culinary applications, market value, visual use. Flat: stronger, more complex, $5-8/lb retail, used in chimichurri/gremolata/tabbouleh/cooking; Curly: milder, $3-5/lb retail, primarily garnish use. Conclusion in text: grow flat-leaf unless you specifically need garnish.
- Culinary applications where parsley is the main ingredient (not garnish): chimichurri (1 cup flat-leaf parsley + garlic + oil + vinegar + oregano - Argentine standard with grilled meat); gremolata (flat-leaf + lemon zest + garlic, traditional with osso buco, add raw at service); tabbouleh (flat-leaf dominant, 2 cups parsley to 0.5 cup bulgur - many Americans reverse this ratio incorrectly); parsley pesto (substitute for basil pesto with fresh garlic, walnuts, pecorino). Heat behavior: parsley handles gentle heat better than most herbs - adding to a braise in the last 10 minutes retains green color and some flavor.
**Acceptance:**
- 1,600+ words total
- Biennial value table (Year 1 and Year 2 harvest)
- Flat vs curly comparison table
- Culinary section with at least 3 specific applications
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE022 — Expand fennel.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/fennel.md`
**Current word count:** ~949 words
**Target:** 1,600+ words
**What:** Expand with Florence vs bronze comparison table, triple-harvest value calculation, and succession planting guide.
**Add these sections:**
- Florence vs bronze fennel comparison table: *F. vulgare* var. *azoricum* (Florence/finocchio) vs *F. vulgare* 'Purpurascens' (bronze perennial). Columns: form, annual vs perennial, edible parts, zone, primary use, spacing, bolt risk. Florence: annual, bulb + frond + seed, Zone 5+ as annual, bulb vegetable, 12" spacing, high bolt risk in heat; Bronze: perennial, frond + seed only (no bulb), Zone 6-10, herb/ornamental, 18-24" spacing, low bolt risk.
- Triple harvest value calculation: from one Florence fennel planting (10-foot row, 10 plants). Bulbs: 10 bulbs × 0.9 lb avg × $4/lb = $36. Fronds harvested while growing toward bulb: 10 plants × ~1 oz frond = ~0.6 lb × $10/lb specialty = $6. Seeds (from 2-3 bolted plants allowed to go to seed): ~2 tbsp/plant × $8/oz bulk dried = ~$2.50. Total triple-use value: ~$44.50 from $2.49 seed. Source: USDA AMS Specialty Crop Market News.
- Spring vs fall planting comparison: spring planting (4-6 weeks before last frost for early summer harvest; high bolt risk if summer comes hot and fast; best in zone 7+ or cool-summer climates like Pacific Northwest); fall planting (direct sow in late summer, matures in shortening days and cooling temps; lower bolt pressure; best approach for zones 8+). Table: season, sow timing, harvest window, bolt risk, best regions.
**Acceptance:**
- 1,600+ words total
- Florence vs bronze comparison table
- Triple harvest value calculation with per-component math
- Spring vs fall table
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE023 — Expand onion.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/onion.md`
**Current word count:** ~1,183 words
**Target:** 1,600+ words
**What:** Expand with starting method comparison table and storage variety duration comparison.
**Add these sections:**
- Starting method comparison table (Sets vs Transplants vs Direct Seed): Columns: method, cost per plant, variety access, bolt risk, days to harvest, best for. Sets: $0.10-0.20/set, limited to yellow/red storage types at hardware stores, moderate bolt risk, 60-80 days after planting, home gardeners wanting easy start; Transplants (self-started): $0.03-0.05/plant (packet cost), full variety access, low bolt risk, 100-120 days from seeding, gardeners who want specialty varieties; Transplants (purchased): $0.50-1.50/plant, good variety access, low bolt risk, 60-80 days after transplant, those who want transplant convenience without seed starting lead time; Direct seed: $0.02-0.04/plant, full variety access, lowest bolt risk, 120-150 days from seeding, highest-quality bulbs.
- Storage duration by variety type: Yellow storage (Copra, Stuttgarter): 8-10 months properly cured; Red storage (Redwing, Red Baron): 4-6 months; White storage (White Sweet Spanish): 1-4 months; Sweet types (Walla Walla, Vidalia): 1-3 months. Table: type, example varieties, storage duration, solids content (affects storage), best use. Note: solids content (measured as percentage dry weight) is the key predictor of storage life - higher solids = longer storage. Copra onion at 8-9% solids vs Walla Walla at 5-6% explains the 10-month vs 2-month storage difference (Cornell Cooperative Extension, *Onion Storage*, 2019).
**Acceptance:**
- 1,600+ words total
- Starting method comparison table with bolt risk and days columns
- Storage duration table with solids content
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE024 — Expand potato.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/potato.md`
**Current word count:** ~1,175 words
**Target:** 1,600+ words
**What:** Expand with variety comparison table and specialty vs standard ROI scenario.
**Add these sections:**
- Variety comparison table: 5-6 rows covering Russet Burbank (90-120 days, dry/starchy, best for baking/frying, $0.80-1.20/lb retail, stores 4-6 months), Yukon Gold (70-90 days, semi-waxy/buttery, all-purpose, $1.50-2.50/lb retail, stores 2-4 months), Red Norland (65-80 days, waxy, best for boiling/salads, $1.25-1.75/lb retail, stores 2-3 months), Russian Banana Fingerling (80-100 days, firm/waxy, specialty market, $3-5/lb retail, stores 2-3 months), All Blue/Purple Viking (90-110 days, starchy-waxy hybrid, specialty/anthocyanin, $3-4/lb retail, stores 2-3 months). Columns: variety, days to maturity, flesh type, best use, retail price/lb, storage duration.
- Specialty vs standard ROI scenario: Same 2 lb bag of seed potatoes ($5) planted in a 4x8 bed. Standard russet: 30-40 lb yield × $1.00/lb = $30-40 gross. Russian Banana fingerling: 25-30 lb yield × $4.00/lb = $100-120 gross (fingerlings yield slightly less by weight but significantly more by value). The case for specialty potatoes at home even if you don't sell: fingerlings at $4/lb are $6-8 at the farmers market for a small bag; growing them saves real money. Source: USDA AMS Specialty Crop Market News, University of Maine Cooperative Extension potato production data.
**Acceptance:**
- 1,600+ words total
- Variety comparison table with 5+ varieties
- Specialty vs standard ROI scenario with calculated numbers
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE025 — Expand asparagus.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/asparagus.md`
**Current word count:** ~1,197 words
**Target:** 1,600+ words
**What:** Expand with year-by-year ROI table and variety comparison.
**Add these sections:**
- Year-by-year ROI table (Years 1-15): columns: year, harvest (lb), value at $4.50/lb, cumulative value, cumulative cost (Year 1: $50-80 bed prep + crowns; Year 2+: $5/year mulch and amendments), net position. Year 1: 0 lb, $0, -$65. Year 2: 0.5 lb (token harvest), $2.25, -$68. Year 3: 3-4 lb, $13.50-18, -$57 to -$52. Year 4: 5-6 lb, $22-27, -$30 to -$25. Year 5: 7-8 lb, $31-36, net positive approximately Year 4-5. Year 10: 10-12 lb/year, cumulative net $150+ positive. Year 15: cumulative net $300+ positive. Source: Rutgers NJAES asparagus research, USDA AMS 2023.
- Variety comparison table: Jersey Knight (all-male hybrid, highest yield, Zone 4-8, Rutgers standard), Jersey Supreme (early harvest, all-male, Zone 4-8), Purple Passion (all-male hybrid, sweeter raw, turns green cooked, lower yield than Jersey series, Zone 4-8), Mary Washington (open-pollinated heirloom, widely available, male and female plants, 20-30% lower yield than all-male hybrids, Zone 3-8). Columns: variety, type (hybrid/OP), male-only?, hardiness zone, relative yield, notes.
**Acceptance:**
- 1,600+ words total
- Year-by-year ROI table with break-even year identified
- Variety table with all-male/open-pollinated distinction noted
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE026 — Expand eggplant.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/eggplant.md`
**Current word count:** ~1,173 words
**Target:** 1,600+ words
**What:** Expand with Japanese vs globe yield comparison table and black plastic mulch ROI section.
**Add these sections:**
- Japanese vs globe eggplant comparison table: Japanese types (Ichiban, Orient Express, Millionaire): 10-15 fruits/plant × 0.5-0.75 lb = 5-11 lb/plant, sets fruit at 65°F min soil temp, slim 6-8" fruit, thin skin, no bitterness, Zone 5+, excellent for zones 5-7; Globe types (Black Beauty, Classic, Dusky): 4-6 fruits/plant × 0.5-0.75 lb = 2-4.5 lb/plant, sets fruit above 70°F consistently, round 4-6" fruit, thick skin, can be bitter if overripe, Zone 7-9 optimal. Columns: type/example variety, fruits per plant, lb per plant, min fruit-set temp, fruit size, skin type, best zone, bitterness risk.
- Black plastic mulch ROI section: black plastic mulch ($15-25 for a 4x50 ft roll at farm supply) warms soil 5-10°F compared to bare ground (Penn State Extension). For eggplant in Zone 5-6 where soil temperature is the primary limiter: plastic mulch extends the effective growing season by 2-3 weeks at the start and extends harvest by retaining warmth in fall. Practical calculation: 4x8 bed, $8-12 in plastic (half a roll), increases eggplant yield by approximately 2-4 additional fruits per plant (2 plants × 3 additional fruits × 0.6 lb × $2.50/lb = $9-$15 additional value). Break-even: roughly year 1 even, year 2 net positive if you reuse the plastic. Compare: used without eggplant for tomatoes and peppers, same warming benefit applies.
**Acceptance:**
- 1,600+ words total
- Japanese vs globe comparison table with min fruit-set temp
- Black plastic mulch ROI section with calculation
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### PE027 — Expand corn.md to 1,600+ words
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/plants/corn.md`
**Current word count:** ~1,098 words
**Target:** 1,600+ words
**What:** Expand with sq ft ROI comparison table, corn type comparison, and Three Sisters system section.
**Add these sections:**
- Sq ft ROI comparison table: corn vs other crops in a 100 sq ft plot. Corn: 100-150 ears × $0.75/ear = $75-112 in 70-90 days. Green beans: 100 sq ft × 0.5 lb/sq ft × $2.50/lb = $125 in 55-65 days. Kale (cut-and-come-again): 100 sq ft × 1.5 lb/sq ft/season × $3/lb = $450 across 4-5 months. Lettuce (succession): 100 sq ft × 4 successions × 0.5 lb/sq ft × $3.50/lb = $700 (though this requires more management). The honest version of the corn ROI case. Source: USDA AMS retail prices, University of Illinois Extension corn yield data.
- Corn type comparison table: Standard sugary (su): classic flavor, sugars convert to starch within hours after harvest, cook same day, examples Golden Bantam; Sugar-enhanced (se): holds sweetness 1-3 days refrigerated, forgiving if you don't cook immediately, examples Kandy Korn/Bodacious; Supersweet (sh2): holds 5-7 days refrigerated, requires 300-foot isolation from other corn or timing separation to prevent starchy cross-pollination, examples Illini Xtra Sweet/Silver Queen sh2; Columns: type, sugar retention, post-harvest window, isolation required, flavor compared to standard.
- Three Sisters system section: the traditional Haudenosaunee planting system pairs corn with pole beans and squash. The beans fix atmospheric nitrogen (Rhizobium bacteria in root nodules, 50-100 lb N/acre annually in dense legume stands); the squash canopy shades out weeds and retains soil moisture; the corn provides the bean trellis. Practical planting guide: plant corn in a 4x4 minimum block first; when corn is 6-8 inches tall, plant beans 3-4 inches from each stalk; when beans are up, plant squash to fill gaps. The Three Sisters doesn't substantially improve corn yield in a single season, but it improves the overall ROI of the space by adding bean and squash yield to the same footprint. Example: 100 sq ft Three Sisters vs 100 sq ft corn alone. Add $60-80 in bean/squash value to the corn value.
**Acceptance:**
- 1,600+ words total
- Sq ft ROI comparison table (corn vs at least 2 other crops)
- Corn type comparison table (su/se/sh2)
- Three Sisters section with practical planting guide
- Zero em dashes
- `npx astro build` passes with 0 errors

---

## New Article Sprint

### NA001 — Create container-garden-roi.md
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/articles/container-garden-roi.md`
**What:** 1,800+ word article analyzing real ROI from container gardening vs in-ground, with container-specific crop recommendations and container size math.
**Details:**
- Lead: container gardening costs more per square foot than in-ground but the comparison is wrong; you're not comparing methods, you're comparing gardening vs not gardening in spaces where in-ground isn't possible.
- Cost comparison table: 5-gallon container ($3-8) vs 15-gallon ($8-15) vs 25-gallon ($15-30) vs half-barrel ($25-50) vs raised bed (4x8 = $80-200). Columns: container, cost, usable soil volume (cu ft), crops appropriate for, relative yield per dollar of infrastructure.
- Best crops for containers by container size: 5-gallon: herbs (basil, parsley, chives, thyme), lettuce, cherry tomatoes (in a 10-gallon), radishes, arugula. 10-15 gallon: cherry tomatoes (determinant types), peppers, kale, spinach. 25-gallon+: indeterminate tomatoes (barely adequate), cucumbers (with trellis), zucchini (one plant). Worked example: 6 x 5-gallon containers of herbs = $30-48 in containers + $20-30 soil = $50-78 infrastructure produces $100-150 in herbs per season.
- Container soil economics: potting mix costs $10-20/cu ft vs garden soil $0. A 5-gallon container holds 0.67 cu ft; a 25-gallon holds 3.3 cu ft. Refresh or replace every 2-3 years. One-year cost of soil for 6 five-gallon containers: $40-80. Soil cost is the hidden multiplier that makes container ROI worse than it looks on first calculation.
- Watering labor cost: containers dry out faster than in-ground beds, especially in summer heat. A 5-gallon container in full sun may need water every 1-2 days. Time cost at 2 minutes/container × 6 containers × 90 days = 18 hours. At even a nominal $10/hr value for your time, that's $180 in labor. Self-watering containers reduce frequency by 50-70%.
- Where containers win: apartment balconies, patios, rental properties (moveable), intensive herb production for kitchen access, decorative kitchen gardens. The ROI is in access and convenience, not in cost efficiency vs in-ground.
- Internal links: /crops/basil/, /crops/lettuce/, /crops/cherry-tomato/, /roi/raised-bed-break-even/
- publishDate: 2026-04-12, category: roi, featured: false
**Acceptance:**
- 1,800+ words
- Container size/cost table present
- Container soil cost calculation included
- Zero em dashes
- All prices cited (USDA AMS or extension sources)
- `npx astro build` passes with 0 errors

---

### NA002 — Create grow-lights-cost-analysis.md
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/articles/grow-lights-cost-analysis.md`
**What:** 1,800+ word article on electricity and hardware costs for indoor seed starting and year-round growing under artificial light, with break-even math by crop.
**Details:**
- Lead: grow lights are worth it for seed starting (6-8 week window, small plants, cheap T5 fluorescent), and the math deteriorates rapidly as you scale to year-round vegetable production.
- Light type comparison table: T5 fluorescent (legacy standard, $40-80/fixture, 50-60W per 4-ft fixture, works for seedlings and greens, 15,000-20,000 lumen output), T8 LED shop light (modern replacement, $20-40/fixture, 25-30W, similar or better output, cooler running, 10-15 year lifespan), Full-spectrum LED bar (purpose-built, $50-150/fixture, adjustable spectrum, best for fruiting crops if they can get enough intensity), HID (HPS/MH) (commercial standard, 250-1000W, high output, expensive to run, heat management required). Columns: type, cost, wattage, PPFD at 12", best use, annual electricity cost at 16 hr/day.
- Electricity cost math: kWh cost nationally averages $0.12-0.16/kWh (EIA 2023-2024 average). A 30W LED running 16 hours/day = 0.48 kWh/day = 14.4 kWh/month = $1.73-$2.30/month per fixture. For seed starting (6 weeks): $2.60-$3.45 total electricity per fixture for the entire season. For year-round greens under 4 fixtures: 4 × $2.30/month × 12 months = $110/year in electricity.
- Seed starting ROI (the clear case): 6 weeks × 4 trays × $0.75/tray electricity = $3 in electricity produces 100-200 transplants worth $1-6 each at nursery prices ($100-400 in transplant value). Clear positive ROI. The math that justifies a $50-100 grow light fixture.
- Year-round lettuce production under lights (the marginal case): 2 sq ft under lights × 4 plantings/year × 0.5 lb/planting × $3.50/lb = $14/year in lettuce value. Electricity: 2 fixtures × $2.30/month × 12 months = $55/year. Fixture cost amortized over 5 years: $40/5 = $8/year. Total cost: $63/year to produce $14 in lettuce. This is the case against grow lights for year-round production except in specific situations (high-value crops, expensive market, genuinely no alternative).
- Where grow lights make sense: seed starting (clear positive ROI), winter greens production in a climate where you'd otherwise buy $8 butter lettuce every week, microgreens (high value crop, low light requirements, dense production), herbs under kitchen counter lights for immediate access.
- Internal links: /roi/seeds-vs-transplants/, /crops/lettuce/, /crops/basil/
- publishDate: 2026-04-12, category: roi, featured: false
**Acceptance:**
- 1,800+ words
- Light type comparison table with wattage and annual electricity cost
- Electricity cost math shown step by step (kWh calculation)
- Seed starting ROI calculation vs year-round ROI calculation
- Zero em dashes
- EIA cited for electricity prices
- `npx astro build` passes with 0 errors

---

### NA003 — Create fall-garden-planning.md
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/articles/fall-garden-planning.md`
**What:** 1,800+ word guide to planning and planting the fall garden, with zone-specific timing table, crop selection, and succession from summer to fall.
**Details:**
- Lead: the fall garden is more productive per hour invested than the spring garden in most climates because you're working with a fixed deadline (first frost) and a selection of crops that genuinely prefer cool temperatures.
- Why fall beats spring for cool-season crops: soil is warm from summer (speeds germination vs cold spring soil), pest pressure drops as summer insects die back, Brassica flavor improves after frost (cold converts starches to sugars; broccoli, kale, Brussels sprouts, cabbage all improve in flavor), harvests don't need to be rushed before bolting because temperatures are falling not rising.
- Zone-by-zone timing table: count back from average first frost date. Columns: zone, avg first frost, plant brassica starts indoors (weeks before frost), direct sow brassicas, direct sow root veg (beets, carrots, turnips, radishes), direct sow spinach/arugula, notes. Zone 5: first frost Oct 1-15, plant starts July 15-Aug 1, direct sow brassicas Aug 1-15, root veg Aug 1-20, greens Aug 15-Sep 1. Zone 6: first frost Oct 15-31, similar timing shifted 2 weeks later. Zone 7: Nov 1-15, can push timing another 2-3 weeks. Use Cornell Cooperative Extension and University of Minnesota Extension frost date data.
- The critical window: most fall crops need 8-10 weeks from transplant or 10-14 weeks from direct seed to reach harvest size before hard frost. This means planning in June or July - most gardeners miss it because they're focused on summer harvest.
- Crop ROI by fall timing: kale (starts July, harvests September through December and beyond, high value cold crop at $3/lb); spinach (direct sow August, harvest September-November, can overwinter for spring flush); radishes (direct sow September, harvest in 25-30 days, the fastest ROI in the fall garden); beets (direct sow July-August, harvest September-October, roots and greens both valuable).
- Succession from summer: after pulling summer crops (tomatoes, cucumbers, beans), options for the same space: quick-turn greens (arugula, mizuna, radishes all harvestable in 25-35 days), garlic planting (October in most zones, harvested the following summer), winter rye cover crop (improves soil, manages erosion, killed by spring cultivation).
- Internal links: /crops/kale/, /crops/spinach/, /crops/beet/, /crops/arugula/, /zone/ pages
- publishDate: 2026-04-12, category: planning, featured: false
**Acceptance:**
- 1,800+ words
- Zone-by-zone timing table present
- Frost-improvement of brassica flavor explained with mechanism (starch-to-sugar conversion)
- Succession planting from summer addressed
- Zero em dashes
- Zone frost date data cited (Cornell Cooperative Extension or equivalent)
- `npx astro build` passes with 0 errors

---

### NA004 — Create crop-rotation-guide.md
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/articles/crop-rotation-guide.md`
**What:** 1,800+ word practical crop rotation guide with 4-year rotation plan, disease prevention rationale, and nitrogen fixation math.
**Details:**
- Lead: crop rotation is the closest thing to a free lunch in vegetable gardening. Moving plant families around your beds costs nothing and prevents diseases that would cost you entire plantings.
- Why it works: soilborne pathogens (Fusarium oxysporum, Verticillium dahliae, Phytophthora infestans, club root *Plasmodiophora brassicae*) are host-specific. Rotating away from susceptible host plants for 2-4 years reduces pathogen population density in the soil below threshold for significant disease. Cornell Plant Disease Diagnostic Clinic research shows 3-year rotation reduces Fusarium wilt incidence 60-80% in susceptible crops.
- The four plant families to rotate: Solanaceae (tomatoes, peppers, eggplant, potatoes - share Late Blight, Verticillium wilt); Brassicaceae (cabbage, broccoli, kale, arugula, radishes - share club root, black rot, downy mildew); Fabaceae (beans, peas - fix nitrogen, leave residual N for following crop); Cucurbitaceae (cucumbers, squash, melons - share Powdery Mildew, Cucumber Mosaic Virus). A 4-bed, 4-year rotation keeps each family cycling through.
- 4-year rotation table: 4 beds × 4 years. Year 1 Bed A: Solanaceae; Year 2: Cucurbitaceae; Year 3: Brassicaceae; Year 4: Fabaceae. Each bed's 4-year cycle. This is the standard extension service recommendation; cite Penn State Extension *Vegetable Crop Rotation*, Purdue Extension *Rotating Vegetable Crops*.
- Nitrogen fixation math: legumes (beans, peas) fix 40-200 lb of nitrogen per acre per season depending on conditions (USDA ARS, *Biological Nitrogen Fixation*). For a 4x8 bed (32 sq ft = 1/1360 acre): legume planting fixes roughly 0.03-0.15 lb N. At $1.50/lb for granular nitrogen fertilizer (urea), the nitrogen value of one season's bean planting in a small bed is $0.04-0.23 - small in dollar terms, but real. More meaningful at scale: a 100 sq ft bean planting fixes 0.1-0.4 lb N = $0.15-0.60 in fertilizer value saved.
- What rotation doesn't help: garlic allium white rot (*Sclerotium cepivorum*) survives in soil 20+ years; rotation is ineffective. Club root spores survive 20+ years. For these diseases, sanitation (removing infected plant material, sterilizing tools) and resistance is more effective than rotation.
- Internal links: /crops/tomato/, /crops/potato/, /crops/kale/, /crops/green-bean/, /crops/cucumber/
- publishDate: 2026-04-12, category: care, featured: false
**Acceptance:**
- 1,800+ words
- 4-year rotation table (4 beds × 4 years)
- Disease prevention mechanism explained (host-specific pathogens)
- Nitrogen fixation math included with USDA ARS citation
- Diseases where rotation doesn't help addressed
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### NA005 — Create small-space-vegetable-garden.md
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/articles/small-space-vegetable-garden.md`
**What:** 1,800+ word guide to maximizing production in small spaces (under 100 sq ft), with value-per-sq-ft table, vertical growing guide, and intensive spacing guide.
**Details:**
- Lead: the question isn't how much space you have - it's whether you're using it for crops that earn their square footage. Corn doesn't. Herbs absolutely do.
- Value per square foot per season table (the core data asset): 10-12 crops ranked by dollar value per square foot per season. Basil: $10-20/sq ft (intensive planting, successive harvests, $20/lb retail at farmers market); Arugula (cut-and-come-again): $8-15/sq ft; Lettuce (succession): $6-12/sq ft; Cherry tomato (indeterminate, trellised): $5-10/sq ft; Kale: $4-8/sq ft; Green bean (pole): $3-5/sq ft; Zucchini: $2-4/sq ft; Cucumber (trellised): $2-4/sq ft; Potato: $1-2/sq ft; Corn: $0.75-1.00/sq ft. Source: calculate from USDA AMS retail prices × typical yield per sq ft from extension publication data (University of California, *Vegetables in Small Gardens*, UC ANR Publication 8005).
- Vertical growing: crops that can be trellised to grow up rather than out. Indeterminate tomatoes (need 2 sq ft footprint, can grow 6+ feet tall, produces heavily). Pole beans vs bush beans: pole beans yield over 3× longer season from same footprint. Cucumbers: 1 plant needs 2 sq ft in-ground, produces 10-20 cucumbers with trellis. Winter squash trained vertically with slings for heavy fruits. Suggested trellis structures with cost: 6-foot cattle panel ($25-35) arched or flat; T-posts + wire ($15-25 per 8-foot section); DIY bamboo teepee for beans ($5-8 in materials).
- Intensive spacing (Square Foot Gardening basis, citing Mel Bartholomew's research): traditional row spacing leaves 50-60% of space in aisles. Intensive spacing removes aisles within the bed. Standard spacing table: tomato 1 per sq ft (with pruning), basil 4 per sq ft, lettuce 4 per sq ft, kale 1 per sq ft, green beans 9 per sq ft, radishes 16 per sq ft, carrots 16 per sq ft. Compare to traditional row recommendations.
- Succession planting for continuous harvest from 20 sq ft: 4x5 bed managed with successions. Month-by-month planting plan from April through September. Shows how the same 20 sq ft can produce 3-4 rounds of quick crops (lettuce, arugula, radishes) plus one season of longer crops (cherry tomato, kale) if planned well.
- Internal links: /crops/basil/, /crops/lettuce/, /crops/arugula/, /crops/cherry-tomato/, /crops/kale/, /compare/ pages
- publishDate: 2026-04-12, category: planning, featured: false
**Acceptance:**
- 1,800+ words
- Value per sq ft table with 10+ crops
- Vertical growing section with trellis cost data
- Intensive spacing table comparing traditional vs sq ft spacing
- Zero em dashes
- Source cited for yield-per-sq-ft data (UC ANR or equivalent extension)
- `npx astro build` passes with 0 errors

---

## SEO Sprint — Copilot

### SEO001 — Internal linking audit and pass
**Status:** `[x]`
**Agent:** Copilot
**What:** Audited all articles and crop pages for missing internal links. Fixed 9 articles with zero or one internal link. Each article now links to 2+ crop pages and 1+ related article.
**Acceptance:** Done — pushed commit `91d38de`.

---

### SEO002 — Open Graph image audit
**Status:** `[x]`
**Agent:** Copilot
**What:** Verified OG tags in `BaseLayout.astro` (already fully implemented). Updated default `ogImage` from `/logo.png` (299×335, too small) to `/bg-1.webp` (1024×1024). Crop and article pages already passed `hero_image` through to `og:image`.
**Acceptance:** Done — pushed commit `9e9f510`.

---

### SEO003 — Sitemap and index audit
**Status:** `[x]`
**Agent:** Copilot
**What:** Confirmed `@astrojs/sitemap` in `astro.config.mjs`. Built and verified 199 URLs in `sitemap-0.xml`. `robots.txt` correctly references sitemap. No orphan pages found.
**Acceptance:** Done — no code change needed.

---

## Crop Infrastructure Sprint — Copilot

### CI001 — Crop page link audit and second-article pass
**Status:** `[x]`
**Agent:** Copilot
**What:** Added second related article link to 34 high-traffic crop pages (each had only 1). Fixed missing `background-color` on `/crops/best-roi/` `.content-wrap` and `404.astro` `.not-found` (text was rendering over background image). Also wrote PE028-PE031 and NA006-NA007 story cards.
**Files affected:** 34 plant `.md` files, `src/pages/crops/best-roi.astro`, `src/pages/404.astro`
**Acceptance:** Done — pushed commit `c317c9d`.

---

## Plant Expansion Sprint 5 — Claude Code (PE028+)

### PE028 — Expand zucchini.md
**Status:** `[x]`
**Owner:** Claude Code (content)
**File:** `src/content/plants/zucchini.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Expand from current stub to 1,200+ words. Must have: (1) ROI section — zucchini $1–2/lb retail; high-yield crop that can produce 6–10 lb/plant/week at peak; total seasonal yield and value per plant vs. seed cost; (2) the oversupply problem — zucchini produces more than most households consume; harvesting strategies (pick small for quality) and surplus management (freezing, gifting, donation); (3) pest and disease — squash vine borer (Zones 5–8) and powdery mildew are the primary yield stoppers; control approaches; (4) variety comparison — dark green bush types vs. yellow summer squash vs. pattypan; (5) succession strategy — plant 2–3 staggered starts to avoid all-at-once production peak. No em dashes.
**Acceptance:** 1,200+ words, surplus math present, pest section included, zero em dashes, build passes.

---

### PE029 — Expand cabbage.md
**Status:** `[x]`
**Owner:** Claude Code (content)
**File:** `src/content/plants/cabbage.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Expand from current stub to 1,200+ words. Must have: (1) ROI section — green cabbage $0.60–1.20/lb retail; a single head produces 3–5 lbs; seed-to-harvest ROI math; (2) preservation value — cabbage is the primary sauerkraut crop; 5 lbs cabbage + 1 tbsp salt → ~1 quart sauerkraut ($6–10 retail); fermentation multiplier on harvest value; (3) storage — cabbage stores 3–6 months refrigerated or in root cellar; (4) pest management — cabbage loopers and imported cabbageworm are primary; row cover as prevention; (5) variety comparison — green storage types vs. red vs. savoy; harvest window and storage differences. No em dashes.
**Acceptance:** 1,200+ words, fermentation ROI math present, storage section included, price cited, zero em dashes, build passes.

---

### PE030 — Expand radish.md
**Status:** `[x]`
**Owner:** Claude Code (content)
**File:** `src/content/plants/radish.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Expand from current stub to 1,200+ words. Must have: (1) ROI section — radish $1.50–3/bunch retail; 25-day crop produces 8–10 radishes per linear foot; fastest return per day invested of any vegetable; (2) Daikon vs. French Breakfast vs. Easter Egg types — harvest size, maturity time, culinary use, and price per unit at retail; (3) as a succession crop — radishes can fill 25-day slots between slower crops, maximizing bed productivity; succession math (how many radish crops per season in a given zone); (4) cover crop and soil-breaker use — daikon radishes break compaction and decompose over winter; (5) seed saving — radishes self-seed freely; let some bolt for free seed bank. No em dashes.
**Acceptance:** 1,200+ words, succession math present, variety comparison included, price cited, zero em dashes, build passes.

---

### PE031 — Expand butternut-squash.md
**Status:** `[x]`
**Owner:** Claude Code (content)
**File:** `src/content/plants/butternut-squash.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Expand from current stub to 1,200+ words. Must have: (1) ROI section — butternut squash $1.50–2.50/lb retail; 2–4 squash per plant at 2–3 lbs each; seasonal yield and value; (2) storage advantage — butternut stores 3–5 months; total storage value math across winter months; (3) space requirement — vining habit needs 6–8 sq ft minimum; trellising option for small gardens; (4) variety comparison — butternut vs. acorn vs. spaghetti vs. kabocha — storage life and retail price differ; (5) curing process — 1–2 weeks at 80°F hardens skin for season-long storage. No em dashes.
**Acceptance:** 1,200+ words, storage ROI math present, variety comparison included, price cited, zero em dashes, build passes.

---

## New Article Sprint 2 — Claude Code (NA006+)

### NA006 — Create mulching-roi.md
**Status:** `[x]`
**Note:** Duplicate — `src/content/articles/mulching-guide.md` already covers mulch types, cost table, water savings math, and weed suppression ROI. No new file needed.

---

### NA007 — Create watering-schedule-by-crop.md
**Status:** `[x]`
**Note:** Dropped — practical care guide that doesn't clear the ROI bar for a site called Garden ROI. Water cost/savings already covered in water-cost-per-crop.md and drip-vs-hand-watering.md.

---

## Plant Page Expansion Sprint — Depth Pass 2 (PE028-PE031)

All four are existing plant files at ~900-930 words. Target: 1,600+ words each. Load content skill before writing any of them.

### PE028 — Expand cilantro.md to 1,600+ words
**Status:** `[x]`
**Files:** `src/content/plants/cilantro.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Deepen the existing cilantro page with a succession planting table, dual-harvest value calculation (leaves + coriander seed), and a culinary applications section.
**Details:**
- Read current file first. It covers bolting, slow-bolt cultivars ('Leisure', 'Santo'), ROI basics, growing requirements, what goes wrong, harvest/storage. Missing: specific succession timing table, per-season value calculation across multiple successions, culinary applications.
- **Section: Succession planting for continuous harvest** - The key to cilantro is planting small amounts often. Add a table: Zone/window/sow date/harvest window/gap to next sow. Example for Zone 6: Sow #1 Apr 1 (soil 55°F+), harvest window Apr 25-May 10, then gap 3 weeks; Sow #2 Apr 22, harvest May 15-Jun 1; continue through early June, then pause for summer heat, resume late Aug-Sep. Include: number of successions possible per season (Zone 5-6: 4-6 in spring+fall windows; Zone 7-8: 5-8), days to harvest per sowing (45-60 days from seed in spring, 35-45 in fall with shorter days). Cite: Penn State Extension *Herb Production*, Oregon State University Extension *Herbs in the Garden* for timing.
- **Section: Dual-harvest value table** - Cilantro is two crops from one seed packet. Table columns: harvest type / harvest window / yield per sowing / retail price / value per sowing. Leaf harvest: each succession produces 0.15-0.25 lb from a 2-ft row; $6-8/lb = $0.90-2.00/sowing. Coriander seed (let 2-3 plants bolt per succession): 0.5-1 tbsp dried seed per plant (roughly 0.02-0.04 oz per plant at ~3 plants per succession = 0.06-0.12 oz); ground coriander at $4-6/oz specialty retail = $0.24-0.72 per succession. Full season with 5 successions: leaf value $4.50-10.00, seed value $1.20-3.60, total $5.70-13.60 from a $1.99 packet. Source: USDA AMS Specialty Crop Market News for leaf price; specialty spice retail range for coriander seed.
- **Section: Culinary applications** - Cilantro is the most divisive herb in the American kitchen, which means it's also underused. Cover: (1) where to add it - raw and at the very end of cooking; adding cilantro to a hot pan destroys the volatile aldehydes that give it its flavor in 30 seconds. (2) Uses: salsa verde (the herb base alongside tomatillo and lime, 1/2 cup tightly packed per batch), chimichurri-style preparations, Indian dal (where fresh cilantro garnish is added tableside, not cooked in), Southeast Asian cooking (soups, curries). (3) Coriander seed vs cilantro leaf: entirely different flavor profiles. Coriander seed's main volatile compounds are linalool and terpinene, warm and citrusy; cilantro leaf's are the aldehyde compounds (dodecanal, decanal). Using one as a substitute for the other doesn't work. (4) Storage trick for fresh: cilantro stored upright in a glass with 1 inch of water, loosely covered with a bag, lasts 10-14 days vs 3-5 days wrapped in paper towel. (5) Freezing tip: blend 1 cup cilantro + 2 tbsp water, freeze flat in zip bags, breaks into portions. Preserves flavor reasonably well for cooked applications.
**Acceptance:**
- 1,600+ words total (verify with `wc -w`)
- Succession planting table present with Zone 5-6 example dates
- Dual-harvest value table present with full-season total from one packet
- Culinary applications section present covering raw-only use rule and coriander seed distinction
- Zero em dashes
- Penn State Extension or Oregon State cited for timing data
- USDA AMS cited for leaf price; specialty retail range stated for coriander seed
- `npx astro build` passes with 0 errors

---

### PE029 — Expand shallot.md to 1,600+ words
**Status:** `[x]`
**Files:** `src/content/plants/shallot.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Deepen the existing shallot page with a French vs Dutch variety comparison table, a year-by-year multiplication math table, a shallot vs onion ROI comparison, and a culinary applications section.
**Details:**
- Read current file first. It covers the 6-8x multiplication model, ROI basics, growing requirements, what goes wrong, harvest/storage. Missing: variety comparison table with specific cultivars, multi-year compounding table, shallot vs onion ROI side-by-side, culinary applications.
- **Section: Variety comparison table** - Columns: type / example cultivar(s) / offsets per set / storage months / skin color / flavor profile / relative retail premium. French gray ('Grise de Bretagne', 'Griselle'): 4-6 offsets, 3-4 months, gray-purple, intense/complex, highest premium ($7-9/lb specialty). Dutch yellow ('Dutch Yellow', 'Zebrune'): 6-10 offsets, 5-6 months, golden-tan, mild-sweet, moderate premium ($5-7/lb). Dutch red ('Ambition', 'Red Sun'): 6-8 offsets, 4-5 months, red-purple, mild, moderate ($4-6/lb). All USDA AMS Specialty Crop Market News (2023) for pricing; cultivar offset data from NC State Extension *Allium Production Guide*.
- **Section: Year-by-year multiplication table** - Shows the compounding effect over 3 years of saving sets. Inputs: start with one $3.99 packet = 12 sets. Year 1: 12 sets planted, harvest 72-96 bulbs at 0.25-0.5 lb each = 4-6 lb, save 15 best sets for replanting, sell/use remainder 4-5 lb × $5/lb = $20-25, net after seed cost: $16-21. Year 2: 15 sets planted (free), harvest 90-120 bulbs, save 20 sets, net $22-30 from $0 seed cost. Year 3: 20 sets (free), harvest 120-160 bulbs, save 25 sets, net $30-40. Cumulative 3-year value: $68-96 from $3.99 initial investment. Cite USDA AMS for per-pound pricing.
- **Section: Shallot vs onion - same bed, different return** - For a 4x8 bed (32 sq ft), compare shallots vs onions. Shallots at 6" spacing = 128 sets; at $5/lb = approximately $80-128 potential harvest value. Storage onions at same spacing: similar yield per plant (0.25-0.5 lb) but $1.00-1.50/lb = $16-26. The premium shallots command per pound makes them roughly 3-4x more valuable per square foot of bed space than storage onions. Cite USDA AMS for both price points.
- **Section: Culinary applications** - Shallot is a professional kitchen staple that home cooks underuse because they treat it as an expensive onion substitute. Cover: (1) Raw in vinaigrettes - macerated shallot (diced, soaked 10 min in vinegar or lemon juice to kill harsh bite) is the standard French vinaigrette base. The maceration reduces the sulfurous compounds that make raw alliums harsh while preserving the aromatic complexity. Use 1 minced shallot per 3 tbsp oil + 1 tbsp vinegar. (2) Mignonette - the sauce for raw oysters: 2 shallots finely minced + 1/4 cup red wine vinegar + cracked pepper, rest 1 hour. This is the application where French gray shallots specifically matter - the intensity carries through the acid. (3) Shallot confit - slow-cooked whole shallots in butter or oil at 200-225°F for 90 minutes until completely tender, golden, and sweet. Serve with roasted meats. These keep refrigerated 2 weeks. (4) Pan sauce base: when building a pan sauce after searing meat, minced shallot is the aromatic that goes into the hot pan before deglazing. It softens in 60 seconds and provides a sweet allium background that doesn't overpower the fond like onion would.
**Acceptance:**
- 1,600+ words total (verify with `wc -w`)
- French vs Dutch variety comparison table present
- Year-by-year multiplication table present (Year 1-3 with net values)
- Shallot vs onion per-bed value comparison present
- Culinary applications section covering vinaigrette, mignonette, and confit
- Zero em dashes
- USDA AMS cited for all pricing; NC State Extension cited for offset data
- `npx astro build` passes with 0 errors

---

### PE030 — Expand kohlrabi.md to 1,600+ words
**Status:** `[x]`
**Files:** `src/content/plants/kohlrabi.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Deepen the existing kohlrabi page with a variety comparison table, a two-season annual value calculation, a comparison of kohlrabi vs other cool-season brassicas for the same bed, and a culinary applications section.
**Details:**
- Read current file first. It covers kohlrabi-as-stem-not-root-vegetable, cultivar overview, ROI basics, growing requirements, pests/disease, harvest/storage. Missing: detailed variety table, annual two-season value math for a specific bed, brassica comparison, culinary applications.
- **Section: Variety comparison table** - Columns: cultivar / type / days to maturity / max size before woody / skin color / flavor notes / best use. White Vienna: standard green type, 45-50 days, 2-3 inch max, pale green, mild, fresh eating or cooking. Green Vienna: similar to White Vienna, slightly richer green, 50-55 days. Purple Vienna: 50-55 days, 2-3 inch, purple skin (white flesh), ornamental + flavorful, stronger farmers market appeal. Kossak: large-bulb type, 80 days, stays tender to 8-10 inches, yellow-green, mild, productive late-season variety. Gigante: Italian heirloom, 130+ days, grows to 10+ inches without getting woody, used for storage. Data from: University of Illinois Extension *Watch Your Garden Grow: Kohlrabi* (2020); Johnny's Selected Seeds variety data cross-referenced.
- **Section: Two-season production calendar and value** - Kohlrabi's 45-60-day maturity makes it possible to run two full crops in the same bed each season. Spring crop: direct sow 4 weeks before last frost (Zone 6: early April), harvest early June. Fall crop: direct sow 8 weeks before first frost (Zone 6: mid-August), harvest late September to October. For a 4x8 bed at 4-inch spacing = 96 plants. Spring harvest: 96 plants × 0.5 lb average = 48 lb × $2.50/lb = $120. Fall harvest: 96 plants × 0.5 lb = 48 lb × $2.50/lb = $120. Total annual value from one bed: $240 from $2.49 seed (one packet seeds both crops). Note: this is aggressive density; realistic yield for home gardeners is 30-40% lower (30-34 lb per planting × 2 = 60-68 lb annual, $150-170). Source: Penn State Extension *Kohlrabi* for yield range; USDA AMS for pricing.
- **Section: Kohlrabi vs other spring brassicas** - For a gardener with a 4x8 bed and a spring slot to fill before summer, the options are often kohlrabi, broccoli, or cabbage. Table: crop / days to maturity / yield per bed / retail price / bed value / time to plant summer crops. Kohlrabi: 45-60 days, 20-30 lb, $2.50/lb, $50-75, June 1 bed cleared. Broccoli: 60-85 days, 8-12 lb (heads), $2.50/lb, $20-30, late June cleared. Cabbage: 70-80 days, 15-20 lb, $0.75/lb, $11-15, late June cleared. Kohlrabi wins on speed-to-clearance and value per pound for the same space. The faster bed clearance also matters - getting out by June 1 vs late June gives you 4 extra weeks for summer crops. Source: Penn State Extension yield data; USDA AMS for pricing.
- **Section: Culinary applications** - Most gardeners who grow kohlrabi eat it one way: raw slices as a snack. It's underused. Cover: (1) Raw - the default. Peel (the skin is tough), slice thin, eat plain or with salt. The flavor is genuinely mild - cross between broccoli stem and apple. (2) Kohlrabi slaw - julienned kohlrabi + carrot + apple, dressed with apple cider vinegar, olive oil, salt. Better than cabbage slaw in texture because kohlrabi stays crisper. Use 3:1 kohlrabi to apple by volume. (3) Roasted - halved or quartered, 400°F for 25-30 minutes until caramelized. The sugars concentrate and the mild flavor deepens. Better with olive oil, salt, and a squeeze of lemon after roasting. (4) The leaves - kohlrabi leaves are nutritionally similar to kale (same species) and cook exactly like kale. Young leaves can go in salads; older leaves are best sauteed or braised. Don't waste them. (5) Kohlrabi doesn't store well once cut; keeps 3-4 weeks whole in the refrigerator. The bulb is 80-90% water - peel just before using.
**Acceptance:**
- 1,600+ words total (verify with `wc -w`)
- Variety comparison table with 5+ cultivars and days-to-maturity data
- Two-season annual bed value calculation present (spring + fall)
- Kohlrabi vs broccoli vs cabbage table for same spring window
- Culinary applications section covering raw, slaw, roasted, and leaves
- Zero em dashes
- Penn State Extension or University of Illinois Extension cited for yield data
- USDA AMS cited for pricing
- `npx astro build` passes with 0 errors

---

### PE031 — Expand tarragon.md to 1,600+ words
**Status:** `[x]`
**Files:** `src/content/plants/tarragon.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Deepen the existing tarragon page with a French vs Russian comparison table, a multi-year perennial ROI table, a propagation guide (division and cuttings), and a culinary applications section.
**Details:**
- Read current file first. It covers French vs Russian identification, perennial zones 4-7, basic ROI, growing requirements, what goes wrong, harvest/storage. Missing: side-by-side variety comparison table, multi-year ROI compounding table, propagation methods, culinary applications.
- **Section: French vs Russian tarragon comparison table** - This distinction is the single most important thing about tarragon and deserves a full table. Columns: characteristic / French tarragon (*A. dracunculus* var. *sativa*) / Russian tarragon (*A. dracunculus*). Leaf shape: narrow, lance-shaped, glossy / slightly wider, duller, may have serrated margins. Scent: strong anise/vanilla when crushed / little to no scent. Flavor: assertive anise, estragole-dominant / bland, grassy. Seed availability: sterile, no viable seed / sets viable seed. How to start: division or cutting only / can start from seed. Cold hardiness: zones 4-7 / zones 3-9. Retail value: $12-18/lb / not sold commercially. Growth habit: upright 18-24 inches, rarely flowers / taller and coarser, flowers and seeds. Why it's sold as seed: Russian tarragon can be sold in seed packets; French tarragon cannot. Any packet labeled "tarragon seed" is Russian. Source: Herb Society of America *Tarragon: An Herb Society of America Guide* (2006); USDA AMS for pricing.
- **Section: Perennial ROI table** - French tarragon compounds significantly in value over its 5-7 year lifespan. Columns: year / harvest (fresh weight) / value at $14/lb / cumulative value / input cost (cumulative). Year 1: 0.15 lb, $2.10, $2.10, $5 (division purchase). Year 2: 0.25 lb, $3.50, $5.60, $5. Year 3: 0.35 lb, $4.90, $10.50, $5. Year 4: 0.35 lb, $4.90, $15.40, $5 (divide and restart with 2 plants). Year 5+: 0.35 lb/plant × 2 plants = 0.70 lb, $9.80/yr, cumulative value exceeds $25 by year 5. The math: $5 total input, $25+ in herb value across 5 years. One plant's divisions create perpetual free supply. USDA AMS Specialty Crop Market News (2023) for $12-18/lb pricing.
- **Section: Propagation** - Since French tarragon produces no viable seed, propagation by division or stem cuttings is the only option. Cover both methods: (1) Division - best done in early spring when shoots are 2-3 inches tall, or in fall after the plant goes dormant. Dig the clump, separate into sections with 2-3 shoots each, replant at the same depth. Division every 2-3 years keeps the plant vigorous and creates free new plants. (2) Stem cuttings - take 3-4 inch soft tip cuttings in late spring before the plant becomes woody. Remove lower leaves, dip cut end in rooting hormone (IBA), insert into moist perlite. Keep at 65-70°F with indirect light; roots develop in 3-4 weeks. Success rate 60-70%. This is the way to multiply one purchased plant into many quickly. (3) Why you can't grow from seed and what to look for when buying: see "What it actually is" section (already in file). Add specific buying guidance: look for plants in herb section labeled specifically "French tarragon," not just "tarragon"; crush a leaf before purchasing to confirm strong anise scent.
- **Section: Culinary applications** - Tarragon is a foundational herb in classical French cooking, which makes it intimidating. It shouldn't be. Cover: (1) Béarnaise sauce - the application most associated with French tarragon. It's a hollandaise variant where white wine and tarragon vinegar replace lemon juice, and fresh tarragon is the finishing herb. The estragole compound in French tarragon is what gives béarnaise its distinctive flavor; Russian tarragon or dried tarragon produces a flat, characterless sauce. Standard ratio: 2 tbsp fresh tarragon + 2 tbsp tarragon vinegar reduced with shallot + 3 egg yolks + 1/2 cup clarified butter. (2) Fines herbes - the classic French blend of four equal-parts fresh herbs: parsley, tarragon, chervil, and chives. Used with delicate proteins (eggs, fish, chicken) where the herbs should complement, not overpower. Add raw or in the last 30 seconds of cooking. (3) Tarragon vinegar - the best preservation method. Fill a jar 2/3 full of fresh tarragon stems, pour white wine vinegar to cover, seal, let steep 2-3 weeks at room temperature out of direct light. Strain. Keeps 6-12 months. Used in vinaigrettes, béarnaise, mignonette, and anywhere you want the flavor without the fresh herb. (4) Chicken with tarragon (poulet à l'estragon) - the quintessential use. Fresh tarragon in the cavity + more added to the pan sauce in the last 5 minutes. Tarragon's anise character is natural with poultry in a way it isn't with beef or pork.
**Acceptance:**
- 1,600+ words total (verify with `wc -w`)
- French vs Russian comparison table with all key distinguishing characteristics
- Multi-year ROI table (Year 1-5+ with cumulative values)
- Propagation section covering division and stem cutting methods
- Culinary applications section covering béarnaise, fines herbes, tarragon vinegar, and chicken application
- Zero em dashes
- Herb Society of America or equivalent cited for botanical distinction
- USDA AMS cited for pricing
- `npx astro build` passes with 0 errors

---

## New Article Sprint — Depth 2 (NA006-NA007)

### NA006 — Create herb-preservation-guide.md
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/articles/herb-preservation-guide.md`
**What:** 1,800+ word practical guide to preserving the herb harvest - freezing, drying, and infusing - with a by-herb method table, drying ratios, value calculations, and food safety notes.
**Details:**
- Lead: most herb harvests happen in a single week and most gardeners don't have a plan for them. The wrong answer is letting the harvest go to waste; the right answer depends on which herb and how you cook.
- **The three methods and what each preserves:** Drying works best for herbs with low moisture content and high essential oil concentration (oregano, thyme, rosemary, sage, lavender). Drying concentrates flavor - 1 lb fresh oregano yields ~0.25 lb dried, but that dried material is often more potent per unit than grocery store dried herbs because it was fresh-harvested at peak oil concentration. Freezing preserves flavor better than drying for herbs with high moisture content and delicate volatile compounds (basil, tarragon, parsley, cilantro, chives). Infusing in vinegar or alcohol captures flavor into a shelf-stable liquid; infusing in oil requires refrigeration or heat processing due to botulism risk.
- **Drying methods and comparison table:** Columns: method / herbs it works for / temperature / time / volatile oil retention / cost. Air drying (bundle and hang): best for low-moisture herbs, 68-80°F, 7-14 days, good retention, $0. Dehydrator: works for all herbs, 95-115°F (critical - above 115°F destroys volatile oils; cite USDA Complete Guide to Home Canning, 2015 revision), 1-4 hours, excellent retention at correct temp, $30-100 equipment. Oven (lowest setting): use 170°F or lowest oven setting, door propped open, 2-4 hours, moderate retention (loses 20-30% of volatile oil vs air drying), $0 equipment. Microwave (emergency method): 30-second intervals until dry, fast but volatile oil loss significant; only for herbs you need quickly. The 4:1 ratio: 1 tablespoon fresh herbs generally equals 1 teaspoon dried. This is not universal - the ratio is closer to 3:1 for less volatile herbs (oregano, thyme) and can be 6:1 for highly volatile ones (tarragon, basil) where drying destroys the most.
- **Freezing methods:** (1) Whole sprigs: rosemary, thyme, sage - freeze on a sheet pan then transfer to bags. Best for woody herbs. (2) Chopped in water ice cubes: parsley, chives, basil, cilantro. Blend or chop finely, fill ice cube trays 2/3 with herbs, top with water, freeze. Each cube = roughly 1 tablespoon chopped herbs. (3) Chopped in olive oil ice cubes: better than water for basil (prevents oxidation/blackening). Same method, substitute olive oil for water. Use within 3 months for best flavor. (4) Pesto/puree freeze: blend herbs with enough olive oil to form a loose paste, freeze flat in zip bags. Better for larger quantities. (5) Whole-leaf flat freeze: basil can be frozen whole on a sheet pan, then layered with parchment in a bag. Use directly from frozen in cooked applications; texture suffers but flavor holds.
- **By-herb preservation method table:** The core data asset. Rows: cilantro / basil / parsley / tarragon / oregano / thyme / rosemary / chives / dill / sage / mint. Columns: best method / acceptable alternatives / do not dry (yes/no, with reason) / freezes well (yes/no) / infusion viability / storage duration. Examples: cilantro - freeze (oil cubes), do not dry (volatile oils lost), good frozen 3 months; oregano - air dry (peak oil at harvest), freezes but drying is better, excellent dried 1-2 years; tarragon - freeze (whole sprigs or oil cubes), do not dry (estragole lost), tarragon vinegar is best preservation, good frozen 2-3 months. Source: USDA National Center for Home Food Preservation guidelines; Herb Society of America preservation guides.
- **Herb-infused oil: the food safety issue** - Low-acid herbs in oil create anaerobic conditions where *Clostridium botulinum* can produce toxin at room temperature. This gets insufficient attention in popular herb guides. The USDA NCHFP (National Center for Home Food Preservation) states: herb-infused oils must be kept refrigerated and used within 1-2 weeks, OR the herbs must be thoroughly dried before infusion, OR the oil must be acidified (commercial producers acidify). Dried-herb-in-oil at room temperature is safe; fresh-herb-in-oil must stay refrigerated. Tarragon vinegar and herb vinegars are safe indefinitely because the acidity (minimum 5% acidity wine vinegar) prevents pathogen growth.
- **The value math** - Why bother? Dried oregano at grocery store: $2-4/oz. Home-grown and dried: $0 (year 2+ from a perennial plant). One mature oregano plant yields 0.5-1 lb fresh = 2-4 oz dried. At $3/oz average grocery price, one plant's annual harvest = $6-12 in dried oregano from $0 input. Dried thyme: $3-5/oz retail. Fresh basil frozen in oil: $15-25/lb fresh equivalent. The herbs where home preservation delivers the highest value: oregano, thyme, rosemary (dried, perennial, $0 input after year 1), and basil (frozen pesto, captures peak-season production when plants are maxing out).
- Internal links: /crops/basil/, /crops/oregano/, /crops/thyme/, /crops/rosemary/, /crops/parsley/, /crops/tarragon/
- publishDate: 2026-04-12, category: homestead, featured: false
**Acceptance:**
- 1,800+ words total
- Drying method comparison table (air/dehydrator/oven with temperature and volatile oil retention)
- By-herb preservation table (10+ herbs with best method, do-not-dry notes, storage duration)
- Herb-infused oil botulism risk addressed with NCHFP citation
- Value math showing dried herb grocery replacement value
- Zero em dashes
- USDA NCHFP cited for food safety; Herb Society of America or equivalent for method guidance
- `npx astro build` passes with 0 errors

---

### NA007 — Create mulching-guide.md
**Status:** `[x]`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**File:** `src/content/articles/mulching-guide.md`
**What:** 1,800+ word practical mulch guide covering types, costs, water savings, weed suppression math, and ROI calculation for vegetable garden use.
**Details:**
- Lead: mulch is the highest-leverage investment available for a vegetable garden and most people underuse it. Three inches of straw saves as much water as 2 additional waterings per week and eliminates 80% of hand-weeding time.
- **Mulch type comparison table** - The core data asset. Rows: wood chips / straw / grass clippings / newspaper + cardboard / black plastic / red plastic / landscape fabric. Columns: cost per sq ft / application depth / duration (seasons) / weed suppression (1-5) / moisture retention (1-5) / nitrogen impact / best for / notes. Examples: straw - $0.05-0.10/sq ft for 3-inch depth (one bale covers 50 sq ft at 3 inches, bales $8-12), 1 season, weed suppression 4/5, moisture retention 4/5, neutral-to-slight N tie-up, cool-season vegetables and pathways, use straw not hay (hay contains weed seeds). Wood chips - free if from local arborist (ChipDrop or equivalent), or $2-5/bag at garden centers, 2-3 inch depth, 2-3 seasons duration, suppression 5/5 for thickness, excellent moisture retention, significant N tie-up if fresh and mixed into soil (keep on surface only), permanent bed pathways and perennials. Black plastic - $0.03-0.08/sq ft, 1 season, suppression 5/5, moisture retention 5/5 (no evaporation), neutral N, warm-season crops (tomatoes, peppers, melons) especially in Zone 5-6 where soil warming matters, non-biodegradable (disposal cost and waste). Red plastic - similar to black, tomato-specific research shows 12-20% yield increase vs bare soil for tomatoes specifically (Alabama Cooperative Extension, 2010 study). Landscape fabric - $0.10-0.25/sq ft, 5-10 years, weed suppression excellent when new but degrades; often recommended but problematic for vegetable gardens because it must be disturbed for planting, and weed seeds accumulate on top of fabric over time. Newspaper + cardboard - free from recycling, must overlap 6 inches at seams, suppression good (4/5 when 4-6 layers thick), breaks down in 1 season improving soil, best as base layer under wood chips.
- **Water savings math** - Unmulched soil in summer loses 0.5-1 inch of water per week to surface evaporation (Cooperative Extension, multiple land-grant sources). A 3-inch straw mulch reduces this by 50-70% (Penn State Extension *Mulches for the Home Garden*, 2019). For a 100 sq ft bed: unmulched = 0.75 inches/week × 100 sq ft = 47 gallons/week. Mulched = 47 × 0.35 = 16 gallons/week. Savings: 31 gallons/week × 16 active summer weeks = 496 gallons. At $0.005/gallon average US water cost (EPA WaterSense data) = $2.48 in water saved. Low dollar value, but the real savings is time: if you're hand-watering or running a timer, reducing from 47 to 16 gallons/week changes the watering schedule from twice/week to once/week or less for most crops. Labor time saved: 1 hour/week × 16 weeks = 16 hours at $10/hr = $160 in time value over a season.
- **Weed suppression math** - Hand-weeding an unmulched 4x8 bed in summer takes 15-30 minutes per week. A 3-inch mulch layer reduces this to 5-10 minutes per week for the first 3-4 weeks (some light flush-through), then near-zero for the remainder of the season. Over a 20-week season: unmulched weeding = 20 weeks × 20 min = 400 min = 6.7 hours. Mulched weeding = 8 weeks × 10 min + 12 weeks × 2 min = 104 min = 1.7 hours. Time saved: 5 hours × $10/hr = $50 in labor value per bed per season. Straw for one bed: $3-5. The ROI on straw mulch for weed suppression alone is 10-17x in time value.
- **Wood chip sourcing: the free mulch option** - ArborChip / ChipDrop (chipdrop.com) connects property owners with free wood chip deliveries from local arborists who need to dispose of chips after tree work. A typical load is 5-20 cubic yards (enough to mulch a large garden at 3 inches for free, with significant leftover). The trade-off: you take the whole load, no scheduling control, chips are fresh (high moisture, may heat briefly). The main caution with fresh wood chips in vegetable beds: do not till them in. Fresh chips decompose by consuming nitrogen from the surrounding soil (nitrogen tie-up). On the surface as mulch, this is minimal. Mixed into soil, it causes nitrogen deficiency in plantings. Keep fresh chips on the surface; aged chips (1+ year) are safe to incorporate.
- **Black plastic for Zone 5-6 tomatoes and peppers** - In cold climates, the soil-warming effect of black plastic translates directly to yield. Tomato transplants into soil above 60°F establish faster and begin flowering 10-14 days earlier than plants set into 50°F soil (NC State Extension *Plasticulture for Home Vegetable Gardens*). Black plastic laid 2 weeks before transplanting raises soil temperature 5-8°F at 2-inch depth. In Zone 5-6 with a May 15-20 transplant date, this can effectively add 2-3 extra weeks of productive season. At typical cherry tomato yield of 8-12 lb per plant × $3-4/lb, 2 weeks of additional production = 1.5-2 lb additional × $3.50 = $5-7 per plant from a $0.10 investment in plastic per square foot of bed space.
- Internal links: /crops/tomato/, /crops/basil/, /crops/kale/, /guides/drip-vs-hand-watering/, /guides/water-cost-per-crop/
- publishDate: 2026-04-12, category: care, featured: false
**Acceptance:**
- 1,800+ words total
- Mulch type comparison table with 7+ types, cost per sq ft, and weed/moisture ratings
- Water savings math with gallon calculation and time value
- Weed suppression time math (hours saved per season, labor value)
- Wood chip sourcing section addressing ChipDrop and nitrogen tie-up caution
- Black plastic soil warming section with zone-specific yield data
- Zero em dashes
- Penn State Extension cited for mulch moisture retention data; NC State Extension or equivalent for plastic mulch soil warming
- `npx astro build` passes with 0 errors

---

## Done

- **T001-T011:** All infrastructure tasks complete (schema, routing, SEO, pages)
- **C001-C011:** All content rewrites complete (plants + articles)
- **P001-P007:** All Tier 1 new plant pages complete (garlic, kale, arugula, cherry-tomato, hot-pepper, garden-pea, winter-squash)

## Plant Expansion Sprint 6 — Common Stubs (PE032-PE039)

### PE032 — Expand mizuna.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/mizuna.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Mizuna is currently 823 words. Expand to 1,600+ with ROI math, succession table, and Asian cooking context.
**Details:**
- ROI case: $2.49 packet; 10 sq ft bed yields 4 lb; specialty grocery $4-6/lb for loose Asian greens; full season with 3-4 successions. Bagged mizuna at Whole Foods runs $5-7/lb — grow-your-own saves real money.
- Succession planting table: Zone 5-6 spring window (Mar 15–May 15) + fall window (Aug 15–Oct 1); sow dates, days to harvest (21-40), harvest window. Each succession from 2 sq ft yields ~0.8 lb.
- Variety comparison table: Early Mizuna (fastest, mildest), Kyoto Mizuna (larger, more peppery), Red Streaks (ornamental value for markets), Mibuna (similar but strap-leaved, slightly sweeter).
- Culinary use: raw in salads, quick stir-fry (wilts in 60 seconds over high heat), Japanese hot pot (nabe). Flavor compounds: glucosinolates (mild mustard notes), less bitter than arugula at same maturity.
- Companion with radish: both fast brassicas; plant together for aphid trap crop effect (radish takes the hit).
- What goes wrong: flea beetles (same row cover solution as arugula), bolting in heat (cut entire plant at 4 inches when stalk appears), downy mildew in wet fall weather.
- Cite: Cornell Cooperative Extension for Asian greens production; USDA AMS specialty vegetable price surveys.
**Acceptance:**
- 1,600+ words (`wc -w`)
- Succession table present with Zone 5-6 dates
- Variety comparison table present
- ROI math shows full-season value from one packet
- Zero em dashes
- `npx astro build` passes

---

### PE033 — Expand borage.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/borage.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Borage is currently 827 words. Expand with edible flower ROI, companion planting mechanism, and self-seeding economics.
**Details:**
- ROI case: $2.49 packet; edible flowers at farmers markets $10-25/lb (they weigh almost nothing — sell by the flat or by count); one plant produces hundreds of flowers over 6-8 weeks; leaves as cucumber-flavored salad addition. $2.49 packet → multiple plants → $15-40 in flower value if sold, significant culinary value if used.
- Edible flower market math: 1 flat of borage flowers (restaurant portion) = ~0.25 oz; restaurants pay $8-15/flat. One vigorous borage plant can produce 15-20 flats across its season.
- Companion planting mechanism: borage increases tomato resistance to tomato hornworm and improves flavor per folk tradition; the documented mechanism is that borage deters aphids and attracts predatory wasps via its open, accessible flower structure. UC Davis ANR notes borage as a beneficial insect habitat plant.
- Self-seeding economics: borage drops seed prolifically; once established in a bed, you rarely need to replant. Year 2 cost = $0. Flag this as the key long-term value.
- Growing requirements: direct sow only (taproot); germinates in 7-14 days at 60-70°F soil; full sun to partial shade; drought tolerant once established.
- What goes wrong: powdery mildew in late season (cosmetic, doesn't affect flowers); aphid colonies on new growth (tolerate unless severe — borage is itself a trap crop).
- Harvest: pick individual flowers when fully open; pinch stems just below flower; use same day for best presentation. Leaves edible young but get hairy/bristly with age.
- Cite: UC Davis ANR for companion planting mechanism; USDA AMS for edible flower pricing.
**Acceptance:**
- 1,600+ words
- Edible flower market math table or calculation present
- Self-seeding economics noted explicitly
- Companion mechanism explained with documented source
- Zero em dashes
- Build passes

---

### PE034 — Expand mustard-greens.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/mustard-greens.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Mustard greens is 829 words. Expand with Southern cooking context, seed-to-table ROI, succession math, and cover crop value.
**Details:**
- ROI: $1.99 packet; fast (30-45 days); yields 5 lb from 10 sq ft bed; $2.50/lb retail for bunched mustard greens. Full packet value: $12.50 gross. Specialty baby mustard greens: $5-8/lb at farmers markets.
- Variety comparison table: Giant Red (large, burgundy, peppery, 45 days), Southern Giant Curled (classic, 40 days, mild heat), Tendergreen (fastest, mildest, 30 days), Osaka Purple (ornamental + edible, 40 days), Florida Broadleaf (large, heat-tolerant, good fall crop).
- Succession: 3-4 sowings possible in spring (Zone 5-6: Mar 15 to Apr 30); single large fall planting (Aug 20 - Sep 5) outperforms all spring successions. Fall mustard greens get sweeter after light frost.
- Cover crop dual-use: mustard species (Brassica juncea) suppress soil-borne pathogens via glucosinolate release as the plant decomposes — "biofumigation." Till in at flowering stage; the glucosinolates volatilize and suppress Verticillium, Rhizoctonia, and some nematodes. Oregon State Extension and UC Davis document this. Seed cost as biofumigant: $12-30/lb of seed for broadcast cover crop application vs. food value if harvested first.
- Southern tradition: slow-braised with ham hocks or smoked turkey; the long braise wilts the pungency and concentrates flavor. This context positions mustard greens as a culturally significant crop worth growing.
- What goes wrong: flea beetles and aphids (standard brassica pests); bolting in heat (harvest before stalk appears); white rust in wet conditions.
- Cite: Oregon State Extension for biofumigation; USDA AMS for retail prices.
**Acceptance:**
- 1,600+ words
- Variety comparison table present
- Biofumigation section with mechanism and cited source
- Succession table with Zone 5-6 dates
- Zero em dashes
- Build passes

---

### PE035 — Expand mache.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/mache.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Mâche (corn salad) is 830 words. Expand with winter hardiness ROI, premium pricing math, and European context.
**Details:**
- ROI: $2.99 packet; 2 lb yield from 10 sq ft; retail $8-12/lb for mâche rosettes at specialty grocers (Whole Foods typically $9-11/lb in 3 oz clamshells). Full season value: $16-24 from $2.99 seed. The real case: mâche grows when nothing else does.
- Winter hardiness math: mâche tolerates -10°F when established and snow-covered; it overwinters in Zone 5 without row cover. In Zone 6-7 it's a genuine winter salad crop from November through March. Calculate grocery value of fresh salad greens over a 5-month winter window when retail prices peak ($10-14/lb in January-February per USDA AMS winter retail surveys).
- Variety comparison: Vit (fastest, widely adapted), Jade (larger rosettes, best for harvest), Cavallo (very cold-hardy, small rosette), D'Etampes (French heirloom, excellent flavor).
- Sowing protocol: direct sow in late August/early September for fall-winter harvest; mâche germinates poorly above 70°F soil. Fall sow only — spring crops bolt before establishing. Sow thickly (1 inch apart); no thinning needed; harvest whole rosettes at 2-3 inches across.
- Culinary note: mild, nutty flavor; pairs with beets, walnuts, and a light vinaigrette; traditional French bistro salad. Doesn't hold once cut — use within 2 days. The delicate shelf life is why it commands $10+/lb retail.
- What goes wrong: slugs in wet fall weather (only real pest); poor germination if soil stays above 68°F (sow later, not earlier); birds eat seedlings (row cover for first 2 weeks).
- Cite: Cornell Cooperative Extension for cold tolerance; USDA AMS for winter retail pricing.
**Acceptance:**
- 1,600+ words
- Winter hardiness math present (value over 5-month window)
- Variety comparison table
- Sowing protocol (fall-only) clearly explained with temperatures
- Zero em dashes
- Build passes

---

### PE036 — Expand rutabaga.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/rutabaga.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Rutabaga is 830 words. Expand with storage value math, comparison to turnip, and variety table.
**Details:**
- ROI: $1.99 packet; 4 lb yield from direct sow; retail $1.50-2.00/lb; gross value ~$6-8. Storage multiplier: rutabaga stored in root cellar through January-February when fresh root vegetables cost more and selection is thin. Calculate winter storage value at $2.00/lb for 3 months of stored harvest.
- Rutabaga vs. turnip comparison table: flavor (rutabaga sweeter, turnip sharper), size (rutabaga 3-5 lbs, turnip 0.5-1.5 lbs), days to maturity (rutabaga 90-100 vs. turnip 35-60), storage life (rutabaga 4-6 months, turnip 3-4 months), best use (rutabaga: roasting/mashing, turnip: raw/quick-cooked).
- Variety table: American Purple Top (standard, 90 days), Laurentian (classic Canadian, 100 days, excellent storage), Joan (faster, 85 days, milder flavor), Helenor (Swedish heirloom, excellent flavor).
- Growing window: rutabaga needs cool temperatures to develop sweetness; plant 90-100 days before first fall frost. In Zone 5-6 that's late June to mid-July direct sow. Summer heat doesn't kill it but slows development; the plant is maturing as temps cool in September-October.
- Storage: rutabaga stores 4-6 months in cool (32-40°F), high humidity (90-95%) conditions. Root cellar, unheated garage, or buried in damp sand. No curing needed unlike sweet potato. Wax coating (dip trimmed roots in paraffin) extends storage to 6+ months — standard commercial practice.
- What goes wrong: club root (same as cabbage family; rotation essential), flea beetles on young seedlings, forked roots from rocky soil.
- Cite: Penn State Extension for storage conditions; USDA ERS for retail pricing.
**Acceptance:**
- 1,600+ words
- Rutabaga vs. turnip comparison table
- Storage value math (months × lbs × price)
- Variety table with days to maturity
- Zero em dashes
- Build passes

---

### PE037 — Expand endive.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/endive.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Endive is 847 words. Expand with Belgian endive forcing ROI, chicory family context, and variety table.
**Details:**
- ROI: $2.99 packet; 2 lb yield at standard harvest; retail $3.50-5.00/lb for curly endive/frisée; Belgian endive (forced chicons) $6-10/lb. The forcing technique transforms a $2.99 packet into a premium product.
- Belgian endive forcing process: grow roots to full size in summer (80-90 days); dig roots in fall before hard freeze; store roots in cool dark place (35-40°F) for 4-6 weeks; then force chicons by planting roots upright in moist sand in a dark location at 50-65°F; harvest pale chicons in 3-4 weeks. Each root produces one chicon. University of Minnesota Extension documents the forcing process.
- Forcing ROI table: roots from 10 sq ft planting → 20-25 roots → 20-25 chicons at 0.25 lb each → 5-6 lb forced endive at $8/lb = $40-48 from $2.99 seed. Compare to standard harvest value of $7-10 from same packet.
- Variety table: Très Fine Maraîchère (fine-cut frisée, 85 days), Neos (broad-leaf batavian, 90 days, mild), Witloof Zoom (standard forcing variety for Belgian endive), Rhodos (curly, slow-bolt).
- Chicory family context: endive, escarole, radicchio, and Belgian endive are all Cichorium; the bitterness comes from lactucopicrin and lactucin. Blanching (covering the center of the plant for 1-2 weeks before harvest) reduces bitterness by blocking chlorophyll production.
- What goes wrong: tip burn in heat (cool-season only), slugs on outer leaves, bolting if planted too early in spring.
- Cite: University of Minnesota Extension for forcing; USDA AMS for retail prices.
**Acceptance:**
- 1,600+ words
- Belgian endive forcing process explained step-by-step
- Forcing ROI table (roots → chicons → value)
- Variety table
- Zero em dashes
- Build passes

---

### PE038 — Expand goji-berry.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/goji-berry.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Goji Berry is 848 words. Expand with multi-year yield ramp, fresh vs. dried pricing, and shrub establishment detail.
**Details:**
- ROI: $4.99 per plant; year 1 minimal yield (establishment); year 2: 1-2 lb; year 3+: 3-7 lb per plant. Fresh goji at farmers markets: $12-18/lb. Dried: $15-25/lb. Year 3+ gross value: $36-126/plant. Payback in year 2-3 depending on fresh vs. dried.
- Multi-year yield table: Year / Growth stage / Yield per plant / Fresh value ($15/lb) / Dried value ($20/lb). Show 5-year cumulative return from $4.99 investment.
- Fresh vs. dried comparison: fresh goji berries taste like a mild tomato-cranberry cross; quite different from the dried form most people know. Fresh berries don't travel well (3-5 day shelf life); dried are made by spreading berries on screens in shade for 1-2 weeks. Drying ratio approximately 4:1 (4 lb fresh = 1 lb dried). Dried store 1 year in airtight container.
- Variety note: most US nursery stock is Lycium barbarum (Chinese wolfberry); 'Phoenix Tears' and 'Big Lifeberry' are named cultivars with larger berries and better yield than generic stock. Named varieties worth the premium.
- Growing requirements: tolerates poor soil and drought once established (Zone 3-10); full sun; pH 6.0-8.0 (unusually wide range). Heavy pruning in spring keeps productive — gojis fruit on new wood. Without pruning they become sprawling and unproductive.
- Birds: goji berries attract birds heavily. Bird netting is not optional if yield is the goal.
- Propagation: softwood cuttings in June-July root readily; year 2 you can produce your own plants for expansion at zero cost.
- Cite: Cornell Cooperative Extension for Lycium production; USDA AMS for dried berry prices.
**Acceptance:**
- 1,600+ words
- Multi-year yield table (5 years, fresh and dried value)
- Fresh vs. dried comparison with drying ratio
- Named variety recommendations with rationale
- Zero em dashes
- Build passes


## Plant Expansion Sprint 7 — Common Stubs (PE040-PE047)

### PE040 — Expand watercress.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/watercress.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Watercress is 848 words. Expand with no-stream growing method, premium pricing math, and year-round harvest potential.
**Details:**
- ROI: $2.99 packet; 1.5 lb yield; retail $7-10/lb for bunched watercress; $2.99 investment → $10.50-15 gross value. Key advantage: watercress doesn't require running water — a container with water-retentive growing medium works.
- No-stream method: grow in wide, shallow containers (12-16 inch diameter) filled with aquatic compost or heavy potting mix; keep soil saturated (sit container in tray kept filled with water); change water weekly to prevent stagnation. Yield comparable to stream-grown plants. Source: RHS Growing Watercress in Containers.
- Year-round harvest in mild climates: watercress is perennial to Zone 6; in containers it can be kept productive indoors through winter. Month-by-month harvest calendar by zone.
- Premium market math: watercress is consistently the most expensive fresh herb/green at retail. Calculate value of 12 monthly harvests at 0.12 lb each = 1.5 lb/yr at $8/lb = $12/yr from a $2.99 packet; second year seed cost is $0 (plant persists).
- What goes wrong: bolting in heat (move container to shade in summer), aphids, and the main failure mode — letting the growing medium dry out even once. A single drying episode kills watercress faster than anything else.
- Culinary context: watercress soup (French classic), stir-fried with garlic (Cantonese preparation), raw in sandwiches and salads. The peppery glucosinolate compounds are heat-sensitive — add to cooked dishes at the very end or raw.
**Acceptance:** 1,600+ words; no-stream container method explained; ROI math present; zero em dashes; build passes.

---

### PE041 — Expand napa-cabbage.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/napa-cabbage.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Napa cabbage is 851 words. Expand with kimchi ROI section, variety table, and fall planting advantage.
**Details:**
- ROI: $2.49 packet; a single napa cabbage head weighs 3-6 lbs; retail $1.50-2.50/lb; packet plants 6-8 heads = 18-48 lbs gross value. Kimchi multiplier: 1 lb napa cabbage + other ingredients → 1 lb kimchi at $8-12/lb retail. Calculate kimchi ROI separately.
- Kimchi ROI table: 20 lb napa cabbage + $5 in other ingredients (garlic, ginger, gochugaru, fish sauce/salt) → 20 lb kimchi → $160-240 retail value. Seed cost: $2.49. Net: $152-232.
- Variety table: Blues (standard, 80 days, excellent storage), Minuet (small-head for small households, 60 days), Rubicon (bolt-resistant spring type), Wong Bok (heirloom, open-pollinated).
- Fall timing: napa cabbage is almost always better as a fall crop. Spring plants bolt reliably in the long days of May-June. Fall crop (direct sow July-Aug in Zone 5-6, 70-80 days before first frost) matures into cool weather, produces sweeter heads, and stores longer. One large fall planting outperforms spring attempts.
- Storage: whole heads 2-3 months refrigerated; fermented (kimchi) 6-12 months in fridge. The combination of fresh storage + fermentation makes napa one of the highest-utilization crops in a cold-climate garden.
- Cite: Penn State Extension for fall timing; USDA AMS for retail prices; standard kimchi formulation for ingredient costs.
**Acceptance:** 1,600+ words; kimchi ROI table; variety table; fall-only recommendation with evidence; zero em dashes; build passes.

---

### PE042 — Expand nasturtium.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/nasturtium.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Nasturtium is 854 words. Expand with edible flower economics, whole-plant use (leaves, buds, seeds), and companion planting mechanisms.
**Details:**
- ROI: $2.49 packet; produces hundreds of flowers over 3-4 months; edible flowers at $10-18/lb at specialty retailers; the plant also produces edible leaves (peppery, like arugula) and buds/seeds that can be pickled as capers. Full harvest value calculation across all three products.
- Whole-plant value table: flowers (0.1-0.2 lb/week × 10 weeks × $12/lb = $12-24), leaves (0.5 lb × $5/lb = $2.50), pickled buds/seeds ($6-10/jar retail for nasturtium "capers"). Total: $20-36 from $2.49 investment.
- Pickled nasturtium caper method: harvest green seed pods before they harden; brine in white wine vinegar with salt and sugar; 2 weeks. Flavor profile similar to actual capers (both contain glucosinolates); use in pasta, chicken piccata, potato salad.
- Companion planting: nasturtiums are a proven aphid trap crop — aphids preferentially colonize them over vegetables. Colorado State Extension documents nasturtium as a sacrificial host plant. Also attract beneficial predatory wasps via nectar. The mechanism is dual: aphid preference for nasturtium + wasp recruitment via flowers.
- Variety comparison: Whirlybird (compact bush, early flowering), Alaska (variegated leaves, edible and ornamental), Jewel Mix (standard climbing/mounding), Empress of India (dark foliage, deep red flowers, compact), Moonlight (pale yellow, trailing).
- Growing requirements: direct sow after last frost; full sun to partial shade; poor soil produces more flowers (avoid nitrogen-rich beds — you'll get leaves, not flowers); drought-tolerant.
**Acceptance:** 1,600+ words; whole-plant value table; pickled caper method; companion mechanism with cited source; variety table; zero em dashes; build passes.

---

### PE043 — Expand chamomile.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/chamomile.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Chamomile is 863 words. Expand with dried herb pricing math, German vs. Roman comparison, and self-seeding economics.
**Details:**
- ROI: $2.49 packet; 0.25 lb dried flowers per season per sq ft of planting; specialty dried chamomile $15-30/lb. From a 4 sq ft planting: 1 lb dried flowers = $15-30 value vs. $2.49 seed. Self-seeds freely; year 2 cost = $0.
- German vs. Roman comparison table: German chamomile (Matricaria chamomilla) — annual, 18-24 inches, higher apigenin content (the active compound), most commercially grown; Roman chamomile (Chamaemelum nobile) — perennial, 6-9 inches, spreading ground cover, milder flavor, Zone 4+. For ROI: German produces more dried material per season; Roman requires no replanting.
- Drying protocol: harvest flowers when fully open (disk center dome-shaped, not fully flat); dry in single layer at 95-100°F or air-dry in shade with good airflow; 1-2 weeks to fully dry. Store in glass jars away from light. 4-6 lb fresh flowers → 1 lb dried.
- Self-seeding economics: German chamomile drops seed prolifically. A single 4 sq ft patch, if allowed to go to seed at the end of season, will reseed the entire bed and spread to adjacent areas. Mark the bed and don't disturb soil in early spring. Year 2-5 cost = $0; coverage typically doubles each year.
- Apigenin content and tea quality: German chamomile contains 0.3-1.0% apigenin (the primary calming compound); Roman contains slightly less. Commercial chamomile tea uses German chamomile. 1 tsp dried flowers per 8 oz water is a standard infusion.
- Companion planting: chamomile's volatile compounds (bisabolol, chamazulene) have documented mild anti-fungal properties in the immediate root zone. UC Davis notes chamomile as a beneficial habitat plant for predatory wasps and hoverflies.
**Acceptance:** 1,600+ words; German vs. Roman comparison table; drying ROI math; self-seeding economics; zero em dashes; build passes.

---

### PE044 — Expand fenugreek.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/fenugreek.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Fenugreek is 865 words. Expand with dual-crop value (leaves + seeds), South Asian culinary context, and cover crop use.
**Details:**
- ROI: $1.99 packet; dual harvest — fresh leaves (methi) at 30-40 days, seeds at 90-120 days. Fresh methi greens: $4-8/lb at Indian grocery stores; seeds: $5-10/lb specialty. Calculate value of each harvest mode separately. A single packet used for greens = multiple successions; used for seed = one full crop.
- Dual-crop value table: fresh leaf harvest (3 successions of 0.5 lb each from 4 sq ft = 1.5 lb at $6/lb = $9), seed harvest (1 crop from 4 sq ft = 0.5 lb at $8/lb = $4), cover crop (nitrogen fixation value: 50-100 lbs N/acre = $0.25-0.50 for a 4 sq ft planting in fertilizer-equivalent).
- South Asian culinary context: methi (fresh fenugreek leaves) is used in dal, aloo methi (potato and fenugreek), and as a flatbread filling. The seeds are toasted and ground as a spice; key compound is sotolone (maple/curry aroma). Dried fenugreek leaves (kasuri methi) sell for $8-15/oz at Indian grocers.
- Succession for continuous leaf harvest: fenugreek matures fast (30-40 days for greens); 3-4 spring successions in Zone 5-6 before heat. Each sowing covers 2 sq ft; costs $0.25 in seed.
- Cover crop value: fenugreek fixes nitrogen as a legume; inoculant not required for moderate fixation. Till in at flowering for green manure. Best used as a late-summer cover to prep beds for spring.
- What goes wrong: powdery mildew in humid conditions (worse if crowded), root rot in wet soil, aphids on new growth.
**Acceptance:** 1,600+ words; dual-crop value table; culinary context for both leaf and seed; succession table; zero em dashes; build passes.

---

### PE045 — Expand stevia.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/stevia.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Stevia is 865 words. Expand with sweetener equivalent math, drying and processing, and zone limitations.
**Details:**
- ROI: $2.99 packet or $4-6 per transplant; dried stevia leaves: $20-40/lb specialty; one mature plant produces 0.25-0.5 lb dried leaves/season. Sweetener equivalent: 1 tsp dried stevia = approximately 1 cup sugar in sweetness. Calculate sugar replacement value.
- Sugar replacement table: 1 lb dried stevia leaves yields approximately 30-40 tsp of leaf powder; at 1 cup sugar equivalent per tsp, that's 30-40 cups of sugar replacement value; organic cane sugar $1-2/lb = $1-2/cup; total replacement value $30-80/lb of dried stevia. That's the real ROI case.
- Drying and processing: harvest stems when flowering begins (steviol glycoside concentration peaks at flowering); strip leaves and dry at 95°F or air-dry in shade; grind dried leaves to powder in spice grinder. Powder stores 1 year in airtight container.
- Zone limitations: stevia is perennial in Zone 9+; annual everywhere else. In Zone 5-8, start indoors 8-10 weeks before last frost; transplant after frost danger. The plant needs 120+ frost-free days to reach full productivity. Short-season growers (Zone 4-5) may find yield disappointing.
- Variety note: 'Candy' and 'Rebaudioside A' (Reb-A) selections have sweeter, less bitter profiles than standard species. The bitterness in standard stevia comes from stevioside vs. rebaudioside ratio — Reb-A dominant selections taste much better.
**Acceptance:** 1,600+ words; sugar replacement value table; drying protocol; zone limitation clearly stated; Reb-A variety recommendation; zero em dashes; build passes.

---

### PE046 — Expand sunflower.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/sunflower.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Sunflower is 876 words. Expand with seed yield vs. cut flower market split, bird/squirrel management, and variety table.
**Details:**
- ROI split: sunflowers are two different crops — seed production ($3-6/lb hulled seeds at specialty retail) and cut flowers ($2-5/stem at farmers markets, $1-3 wholesale). Decide which you're growing; the plant care differs.
- Cut flower ROI: 1 packet ($2.49, ~50 seeds) → 50 plants → 50 stems at $2.50 average = $125 gross value if sold. Even for home use, cut sunflowers last 7-12 days in a vase; buying equivalent at a florist costs $3-6/stem.
- Seed production math: one large-headed sunflower (Giant Russian, Mammoth) yields 1,000-2,000 seeds per head; at 0.005 oz each that's 0.3-0.6 oz per head, roughly 0.02-0.04 lb per plant. 10 plants = 0.2-0.4 lb hulled seeds; at $5/lb specialty = $1-2. Modest ROI for seeds unless growing for bird feed ($1-2/lb bulk).
- Variety table by use: Cut flower (Sunrich Orange, ProCut series, Italian White — branching, multiple stems); Seed harvest (Mammoth Russian, Giant Grey Stripe — large heads, high seed count); Dual-use (Heirloom Titan, Autumn Beauty — decent both).
- Bird and squirrel management: paper bag over head as seeds ripen; cut head and hang to dry indoors when back of head turns yellow-green. Seeds mature 30-45 days after petal drop.
- Succession for cut flowers: sunflowers bloom once and are done; succession sow every 2-3 weeks from last frost to 8 weeks before first frost for continuous cut flower production across summer.
**Acceptance:** 1,600+ words; cut flower vs. seed ROI comparison; variety table by use; succession planting for cut flowers; zero em dashes; build passes.

---

### PE047 — Expand sorrel.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/sorrel.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Sorrel is 877 words. Expand with perennial value math, culinary applications, and variety comparison.
**Details:**
- ROI: $2.49 packet or $4-6 per plant; perennial to Zone 3; once established, produces for 10+ years; cut-and-come-again for the entire growing season. Year 1 yield modest; year 2+: 2-4 lb/season per established clump. Retail: $6-10/lb for specialty sorrel. 10-year cumulative value from one planting: 2 lb/yr × $8/lb × 8 productive years = $128 from $2.49. No replanting required.
- Perennial value table: Year / Yield / Value / Cumulative value. Show years 1-10 with establishment ramp.
- Variety comparison: Common Sorrel (Rumex acetosa) — tart, high oxalic acid, large leaves; French Sorrel (R. scutatus) — milder, lower oxalic acid, smaller shield-shaped leaves, better for raw use; Blood-Veined Sorrel (R. sanguineus) — ornamental, mild flavor, farmers market appeal; Silver Shield (selected R. scutatus) — most mild, best culinary.
- Culinary applications: sorrel sauce (classic French accompaniment to salmon — the oxalic acid "cooks" the fish proteins on contact, similar to ceviche effect); sorrel soup (cream-based, Eastern European tradition); raw in salads (use French sorrel for lower oxalate); wilted as a condiment. Key note: sorrel turns an unappetizing khaki-green when cooked over high heat — use over low heat or add raw.
- Oxalic acid note: sorrel contains oxalic acid (same as spinach and rhubarb); people with kidney stones or gout should eat in moderation. Normal culinary quantities are not a concern for healthy adults.
- Management: divide clumps every 3-4 years to maintain vigor; remove flowering stalks to redirect energy to leaves; cut back to 2 inches in late summer for a flush of tender fall growth.
**Acceptance:** 1,600+ words; 10-year perennial value table; variety comparison table; culinary applications with the cooking-color note; zero em dashes; build passes.


## Plant Expansion Sprint 8 — Common Stubs (PE048-PE055)

Sprint 8 covers: lemon-balm, celeriac, edamame, watermelon, parsnip, cantaloupe, leek, calendula.

### PE048 — Expand lemon-balm.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/lemon-balm.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Lemon balm is 880 words. Expand with dried herb value, container containment strategy, and medicinal context.
**Details:**
- ROI: perennial; $2.49-3.99 for plants or packet; dried lemon balm $15-25/lb specialty; fresh bunches $4-8/lb. Once established spreads aggressively — one planting fills a bed in 2 seasons. Contains in containers. Annual dried yield from a 4 sq ft planting: 0.5-1 lb = $7.50-25 value.
- Container vs. in-ground trade-off: lemon balm in ground spreads via rhizomes and will overtake a bed. Options: (1) grow in a buried container (cut-off 5-gallon pot sunk to rim); (2) grow in above-ground containers; (3) accept spread and mow edges seasonally. Be explicit about this — it's the most important management decision.
- Rosmarinic acid content: lemon balm's primary active compound; mildly calming, antiviral properties documented in vitro. Harvest just before flowering when concentration peaks. Cite: American Botanical Council, HerbalGram for rosmarinic acid.
- Culinary and beverage use: lemon balm tea (fresh or dried), compound butter, herb vinegar, lemon balm sorbet. Volatile lemon compounds (geraniol, citral, citronellal) dissipate quickly with heat — use fresh in cooked applications added last.
- Propagation: divides readily every spring; once you have one plant, you can fill a garden and give divisions to neighbors. Year 2 propagation cost = $0.
**Acceptance:** 1,600+ words; container vs. in-ground decision explained; dried herb value math; rosmarinic acid cited; zero em dashes; build passes.

---

### PE049 — Expand celeriac.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/celeriac.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Celeriac is 881 words. Expand with long-season management, celery comparison ROI, and storage value.
**Details:**
- ROI: $2.49 packet; long season (110-120 days); 1 root = 1-1.5 lb; retail $2-4/lb; packet plants 6-8 roots = 6-12 lb gross. Key value proposition: celeriac stores 3-6 months and tastes like celery without the watering demands of celery.
- Celery vs. celeriac comparison: celery needs consistent heavy watering (1.5-2 inches/week), fails in heat, requires blanching for mild flavor, limited storage (2-3 weeks). Celeriac is more drought-tolerant once established, no blanching needed, stores 6 months. For most home gardeners, celeriac is a better investment of space and effort than celery.
- Indoor start essential: celeriac needs 10-12 weeks indoors before transplant (Zone 5-6: start February, transplant April). Germination is slow and erratic at 65-70°F; surface sow, keep moist, expect 2-3 weeks.
- Earthing up technique: as roots develop, remove side shoots and the outer 2-3 leaf stalks to expose the upper root to air. This promotes round, clean root development. Roots left with side shoots produce knobby, hard-to-peel results.
- Storage: store roots with tops removed in cold (33-36°F), high humidity. Root cellar or refrigerator in a plastic bag with some moisture. 3-6 months without quality loss.
- Culinary note: celeriac remoulade (French classic — raw julienned with mustard mayo); roasted whole at 400°F (sweet and nutty); puréed with potato.
**Acceptance:** 1,600+ words; celery vs. celeriac comparison table; earthing up technique explained; storage conditions stated; zero em dashes; build passes.

---

### PE050 — Expand edamame.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/edamame.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Edamame is 884 words. Expand with grocery store price comparison, variety table, and succession for extended harvest.
**Details:**
- ROI: $2.99 packet; 1.5-2 lb shelled edamame per 10-foot row; retail $4-6/lb for fresh/frozen shelled edamame. Frozen edamame is the comparison — it's always available at $3-5/lb. Fresh home-grown edamame eaten within hours of harvest has genuinely different flavor (no shipping, no blanch-freeze cycle). Calculate: 1 row × 2 lb × $5/lb = $10 gross vs. $2.99 seed.
- Grocery comparison: frozen Costco edamame ~$3.50/lb; fresh farmers market edamame $5-7/lb; home-grown within hours of harvest: incomparable. The freshness argument is the ROI case.
- Variety table: Envy (standard, 75 days, widely adapted), Midori Giant (large pods, 75 days), Chiba Green (fast, 68 days, good for short seasons), Besweet 292 (sweet, 78 days), Sayamusume (Japanese heirloom, excellent flavor, 75 days).
- Succession for extended harvest: each variety has a 5-7 day harvest window at peak maturity (M+R stage — pods full, beans touching). Succession sow every 10-14 days from last frost to 75 days before first frost. 4 successions = 4 harvest windows spread across summer.
- Harvesting at M+R stage: pods should be plump but beans still green and sweet. Once yellow, starchy and less palatable. Harvest entire plant at once by pulling from ground; strip pods at table.
- Inoculant: edamame is a soybean; inoculate with Bradyrhizobium japonicum for nitrogen fixation. First-time soybean growers need to add inoculant — native soil populations may be too low.
**Acceptance:** 1,600+ words; grocery price comparison; variety table; succession sowing calendar; inoculant requirement stated; zero em dashes; build passes.

---

### PE051 — Expand watermelon.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/watermelon.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Watermelon is 888 words. Expand with small-space variety focus, ripeness testing methods, and honest ROI reality check.
**Details:**
- ROI honest assessment: full-size watermelons at retail: $0.25-0.50/lb. A 15-20 lb melon costs $4-10 at the store. Growing your own is borderline on pure ROI unless you're growing specialty varieties. The real case is flavor (vine-ripened sugar content far exceeds shipped melons) and specialty types unavailable at most stores.
- Specialty variety premium: heirloom watermelons at farmers markets: $1-2/lb ($15-30/melon); Moon and Stars, Charleston Grey, Sugar Baby, Orangeglo. Home gardeners can access these; grocery stores cannot.
- Small-space varieties table: Bush Sugar Baby (6-8 lb, compact vine, 75 days), Golden Midget (3-5 lb, turns yellow at ripeness, 70 days), Minilee (8-10 lb, bush habit, 70 days), Bush Jubilee (10-15 lb, semi-compact, 80 days). Full-size vines need 20-30 sq ft; bush types need 6-10 sq ft.
- Ripeness testing (the most common home-grower failure): tendril nearest fruit dries and turns brown (not the long tendrils); ground spot turns from white to creamy yellow; hollow thump sound; skin surface loses glossy sheen. All four indicators together = ripe.
- Trellising technique for small gardens: vertical trellis with melon hammock (pantyhose or mesh produce bag) supports individual fruits. Keeps fruit off ground, saves space, good airflow.
- Pollination: watermelon requires bee pollination. If bees are absent, hand-pollinate with small brush. First flowers are male (no tiny melon behind the flower); female flowers appear 1-2 weeks later. Know the difference.
**Acceptance:** 1,600+ words; honest ROI reality check with specialty variety premium; small-space variety table; 4-indicator ripeness method; zero em dashes; build passes.

---

### PE052 — Expand parsnip.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/parsnip.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Parsnip is 890 words. Expand with frost sweetening mechanism, fresh seed requirement, and storage ROI.
**Details:**
- ROI: $2.49 packet; 4 lb yield; retail $2-3/lb; gross value $8-12. Storage value: parsnips in ground overwinter and improve with frost. Calculate value of a January harvest when fresh root vegetables are expensive and scarce.
- Frost sweetening: parsnips convert starch to sugar in cold — the same mechanism as salsify and carrot. A root harvested in November after multiple frosts is measurably sweeter than one harvested in September. Leave roots in ground until needed; they store in-situ for months. Dig as needed from November through February in Zone 5-6. This is the primary grow-your-own advantage.
- Fresh seed is essential: parsnip seed loses viability faster than almost any other vegetable — buy fresh seed each year. Germination from 2-year-old seed drops from 80%+ to under 30%. Stated as a non-negotiable.
- Slow germination management: parsnips take 2-3 weeks to germinate even under ideal conditions (soil 50-60°F). Mark rows clearly. Some gardeners sow radish in the same row as a row marker — radishes germinate in 5 days and mark where the parsnip row is before parsnip emerges.
- Variety table: Hollow Crown (classic heirloom, 95 days), Javelin (smooth, canker-resistant, 100 days), Harris Model (sweet, fine-grained, 120 days), Gladiator (fast, 95 days, canker-resistant).
- Canker (Itersonilia perplexans): the most common parsnip disease; brown-orange rot at shoulder. Canker-resistant varieties (Javelin, Gladiator) are the practical solution. Rotation helps.
**Acceptance:** 1,600+ words; frost sweetening explanation; fresh seed requirement prominent; variety table with canker resistance; winter harvest value calculation; zero em dashes; build passes.

---

### PE053 — Expand cantaloupe.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/cantaloupe.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Cantaloupe is 903 words. Expand with Brix measurement, variety table, and honest space-requirement math.
**Details:**
- ROI: $2.49 packet; retail cantaloupe $0.50-1.00/lb ($2-4/melon); home-grown specialty types $2-4/lb at farmers markets. Similar to watermelon, the case is vine-ripened Brix (sweetness) and specialty varieties.
- Brix and sugar content: standard grocery store cantaloupe averages 11-13 Brix. Home-grown from high-Brix varieties (Hale's Best Jumbo, Sugar Cube) can reach 16-18 Brix when vine-ripened. Brix measurements can be taken with a cheap ($15) refractometer. Higher Brix = meaningfully sweeter flavor, not just a marketing claim.
- Variety table: Hale's Best Jumbo (classic, 86 days, 14-16 Brix, excellent flavor), Athena (commercial standard, 75 days, disease-resistant), Sugar Cube (small 4-5 lb, 16-18 Brix, personal-size), Collective Farm Woman (Ukrainian heirloom, 70 days, cream-colored flesh), Collective Farm Woman needs 80°F+ consistently.
- Space math: standard cantaloupe vines spread 4-6 feet; each plant needs 10-15 sq ft. A 4×8 raised bed fits 2 plants maximum. Be honest: cantaloupes are a space investment. In-ground or large garden only.
- Harvest indicator: "full slip" — the stem separates from the fruit with gentle pressure when ripe. Don't wait for softening or color change alone. Netting surface texture changes from green to tan.
- Powdery mildew is the primary disease; affects all cucurbits. Resistant varieties (Athena, Aphrodite) maintain productivity better in humid climates.
**Acceptance:** 1,600+ words; Brix explanation; variety table with Brix ratings; space math with honest assessment; full-slip harvest indicator; zero em dashes; build passes.

---

### PE054 — Expand leek.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/leek.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Leek is 909 words. Expand with earthing-up technique, season extension value, and premium variety ROI.
**Details:**
- ROI: $2.99 packet; 5 lb yield; retail $3-5/lb; gross value $15-25. Fall leeks at farmers markets often command premium prices ($4-6/bunch); grocery stores often have leeks in fall/winter at $2-3 each ($3-5/lb).
- Earthing up is the whole technique: leeks develop their mild, white shank by being hilled with soil as they grow — blocking light from the shank blanches it. Without earthing up, you get a short white section and long green (edible but tougher). Standard practice: hill 2-3 inches of soil against shanks every 2-3 weeks as they grow. Alternative: plant in a 6-inch deep trench and gradually fill as plants grow.
- Overwintering value: some leek varieties (Bandit, Tadorna, King Richard) are cold-hardy to 0°F when established. Leave in ground through winter; harvest as needed from October through March in Zone 5-6 when other fresh alliums aren't available. Winter leek = premium value.
- Variety table with season: early (King Richard, 75 days, tender but not hardy), mid (Lincoln, 90 days, good all-around), late/winter (Tadorna, 120 days, very hardy, blue-green flag leaves), overwintering (Bandit, 130 days, survives to -10°F).
- Transplant vs. direct sow: leeks are almost always started indoors (10-12 weeks) or in an outdoor seedbed. Direct sow is possible but slow; transplants establish faster and allow earthing-up from the start.
- Allium leaf miner warning: the same pest that damages garlic. Row cover early in the season is effective prevention in affected regions (Northeast US primarily as of 2024).
**Acceptance:** 1,600+ words; earthing up technique with specifics; overwintering variety table; winter harvest value calculation; zero em dashes; build passes.

---

### PE055 — Expand calendula.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/calendula.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Calendula is 914 words. Expand with skincare market value, dried petal pricing, and cut flower economics.
**Details:**
- ROI: $2.49 packet; three product streams: dried petals for skincare/tea ($20-40/lb), cut flowers ($1-3/stem at markets), companion planting value. One plant produces 40-60 flowers over its season.
- Dried petal value calculation: 1 lb dried petals requires 5-8 lb fresh flowers; one vigorous plant produces 0.5-1 lb fresh flowers over a season. 10-plant row = 5-10 lb fresh = 0.6-2 lb dried. Dried calendula petals at $30/lb = $18-60 from $2.49 seed.
- Skincare market context: calendula infused oil (petals in carrier oil for 4-6 weeks) is the base for calendula salve, a $15-30 retail product with documented anti-inflammatory properties. The active compounds (flavonoids, triterpenoids) are fat-soluble, hence oil infusion. Annmarie Gianni, Weleda, and other natural skincare brands use calendula as a primary ingredient.
- Continuous blooming management: calendula blooms continuously if deadheaded. Deadhead every 3-5 days. Stop deadheading at end of season to collect seed. Self-seeds readily; year 2 is often free.
- Variety table by use: Pacific Beauty Mix (cut flower, large blooms), Resina (highest resin/active compound content, best for herbal use), Neon (bright orange for market appeal), Touch of Red (bicolor, distinctive market flower).
- Cool-season timing: calendula prefers cool weather; spring and fall are peak production. In Zone 6+, fall planting (September) produces lush plants that may overwinter and bloom early spring. Summer heat reduces flowering.
**Acceptance:** 1,600+ words; dried petal value calculation; skincare market context with active compounds cited; variety table by use; continuous bloom management; zero em dashes; build passes.


## Plant Expansion Sprint 9 — Common Stubs (PE056-PE063)

Sprint 9 covers: snap-pea, turnip, collard-greens, amaranth, elderberry, lima-bean, lavender, currant.

### PE056 — Expand snap-pea.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/snap-pea.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Snap pea is 916 words. Expand with succession table, trellis ROI, and fresh vs. frozen price comparison.
**Details:**
- ROI: $2.99 packet; 3-5 lb per 10-foot row; retail $3-6/lb fresh snap peas ($4.99/lb at typical grocery). Frozen snap peas: $2.50-3.50/lb. Fresh, vine-ripened snap peas eaten within hours have sugar content noticeably higher than store-bought (sugars convert to starch within 24 hours of harvest — same mechanism as sweet corn). Calculate value: 4 lb × $4.50/lb = $18 gross vs. $2.99 seed.
- Succession table: spring window Zone 5-6 (Mar 20 – May 10); 3 sowings 2 weeks apart; each sowing lasts 2-3 weeks before heat. Fall window (Aug 15 – Sep 10); 2 sowings. Total successions: 5 per season. Table: sow date, harvest window, expected yield per 10-ft row.
- Trellis requirement: bush types (Sugar Ann, 18 inches) need no support; climbing types (Sugar Snap, 6 feet) need trellis. Trellis cost: $5-15 one-time for cattle panel or bamboo/twine. Climbing types produce 30-40% more per linear foot than bush types because vertical growth captures light from both sides.
- Variety comparison: Sugar Ann (bush, 52 days), Sugar Snap (climbing, 70 days, original OP variety), Super Sugar Snap (climbing, 64 days, disease-resistant), Cascadia (climbing, 60 days, powdery mildew resistant), Avalanche (white flower, 60 days, good flavor).
- Sugar conversion science: once harvested, snap pea sugars (sucrose, glucose) begin converting to starch. At 70°F, 50% of sugars convert in 6 hours. Refrigerate immediately and eat within 24 hours for best flavor. This is the fundamental reason home-grown beats store-bought.
**Acceptance:** 1,600+ words; succession table; trellis yield comparison; sugar conversion science; variety comparison table; zero em dashes; build passes.

---

### PE057 — Expand turnip.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/turnip.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Turnip is 922 words. Expand with turnip greens dual-crop value, fall timing advantage, and variety table.
**Details:**
- ROI: $1.99 packet; 4 lb root yield; retail $1.75-2.50/lb roots; $7-10 gross value. But turnip is a two-crop plant: roots + greens. Fresh turnip greens at farmers markets: $2-4/lb. Calculate dual-crop value: roots (4 lb × $2/lb = $8) + greens (2 lb × $3/lb = $6) = $14 total from $1.99 packet.
- Dual-crop management: harvest outer leaves beginning at 30 days while letting roots develop to 45-60 days. Don't strip all leaves (plant needs some for root development). Target: 3-4 outer leaves per harvest.
- Fall flavor advantage: turnips sown 45-60 days before first frost (Zone 5-6: late July to early August) mature into cooling weather. Cold converts starch to sugar; fall turnips are mild and sweet. Spring-planted turnips that mature in heat can be sharp and pithy.
- Variety table: Purple Top White Globe (standard, 55 days, roots + greens), Hakurei (Japanese salad turnip, 38 days, mild enough to eat raw, smaller root), Seven Top (greens-only type, very productive top, modest root), Scarlet Queen (red-skinned, 45 days, visual appeal), Golden Ball (yellow flesh, sweet, 60 days).
- Cooking context: French navarin (braised turnip and lamb stew); glazed turnips (butter, honey, thyme — transforms sharp flavor); raw Hakurei in salads. Hakurei types changed the American perception of turnips at farmers markets starting in the 2000s.
**Acceptance:** 1,600+ words; dual-crop value calculation; variety table with days and use; fall timing recommendation; zero em dashes; build passes.

---

### PE058 — Expand collard-greens.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/collard-greens.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Collard greens is 924 words. Expand with long harvest window math, Southern cooking context, and winter hardiness.
**Details:**
- ROI: $2.49 packet; 5 lb yield over season; retail $2.50/lb; gross $12.50. But collards are a cut-and-come-again crop — a single plant can produce for 6-8 months in mild climates. Calculate extended harvest value.
- Extended harvest math: in Zone 6-7, collards planted in April produce from June through February — 8-9 months. At 0.5 lb/week harvested from 3 plants: 0.5 lb × 35 weeks = 17.5 lb total × $2.50/lb = $43.75 from $2.49 seed. No other green produces this value from one planting.
- Winter hardiness: collards are the most cold-hardy brassica; established plants handle -10°F with light protection. Flavor improves significantly after frost (starch-to-sugar conversion). "Collards need kissing by frost" — December/January collards are the best of the year.
- Long-season management: remove lower leaves as they yellow; keep top 6-8 leaves; plant can reach 3-4 feet tall over a season. Side-dress with nitrogen every 6 weeks (collards are heavy feeders).
- Variety table: Georgia (heirloom standard, heat and cold-tolerant), Flash (semi-savoyed, upright, 60 days), Champion (compact, 60 days, good for containers), Top Bunch (bolt-resistant, good spring type), Blue Max (blue-green, very cold-hardy, good for overwintering).
- Southern tradition: slow-braised for 1-2 hours with smoked meat; the long braise is traditional and intentional — it converts the sulfur compounds to sweeter flavors and softens oxalic acid. Pot liquor (the braising liquid) is nutritionally dense and drunk separately.
**Acceptance:** 1,600+ words; 8-month harvest value calculation; variety table; winter hardiness data; Southern cooking context; zero em dashes; build passes.

---

### PE059 — Expand amaranth.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/amaranth.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Amaranth is 926 words. Expand with grain vs. leaf dual-crop value, seed yield math, and heat tolerance advantage.
**Details:**
- ROI dual-crop: $2.99 packet; leaf amaranth (harvest young leaves like spinach, $4-8/lb); grain amaranth (let go to seed — 1 plant produces 40,000-60,000 seeds, roughly 0.25-0.5 oz/plant; specialty amaranth grain $5-8/lb). Calculate: leaf harvest (1 lb × $6 = $6) + grain (from 6 plants: 0.1 lb × $6/lb = $0.60). Leaf harvest is the primary ROI; grain is a bonus.
- Grain yield math: a 10-plant stand at full maturity produces roughly 0.5-0.75 lb of cleaned grain. At $6/lb: $3-4.50. Modest but the plant is drought-tolerant and grows where nothing else thrives in summer heat.
- Heat tolerance: amaranth is one of very few greens that improves in summer heat rather than bolting. While spinach and lettuce fail above 80°F, amaranth thrives at 90-100°F. This fills the summer greens gap that most cool-season crops can't cover.
- Variety distinction: leaf types (Red Garnet, Green Tails — harvest young at 18-24 inches) vs. grain types (Golden Giant, Hopi Red Dye, Plainsman — let mature to 5-6 feet); ornamental types (Love Lies Bleeding) yield both but less efficiently. Don't confuse them.
- Nutritional context: amaranth grain is a complete protein (contains lysine, which most grains lack). Quinoa comparison: amaranth grain has similar protein profile to quinoa at lower retail price. Home-grown = significant savings vs. $5-8/lb store.
- What goes wrong: aphid infestations on new growth (tolerate unless severe), seedheads stripped by birds before harvest (row cover or harvest at first seed maturity).
**Acceptance:** 1,600+ words; dual-crop value (leaf + grain) explicitly calculated; heat tolerance gap-filler section; variety distinction; zero em dashes; build passes.

---

### PE060 — Expand elderberry.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/elderberry.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Elderberry is 932 words. Expand with syrup market value, multi-year yield ramp, and food safety (raw berry toxicity).
**Details:**
- ROI: $19.99 per plant (bare-root shrub); established plant (year 3+): 10-15 lb berries/season; retail fresh elderberries $8-15/lb; elderberry syrup (8 oz bottle) $12-20 retail. Multi-year payback calculation.
- Food safety first: raw elderberries contain sambunigrin, a cyanogenic glycoside, which causes nausea and vomiting. Must be cooked before consuming. This is not optional information — it must be stated clearly. Flowers are safe raw. Ripe cooked berries are safe. Cite: Cornell Cooperative Extension.
- Syrup value calculation: 1 lb berries + 1 cup honey + spices → 16 oz elderberry syrup (2 cups) with retail value $15-20. From 10 lb harvest: 10 bottles × $17 = $170 in syrup value from a $19.99 plant that costs nothing ongoing.
- Multi-year table: Year 1 (establishment, minimal berry); Year 2 (3-5 lb); Year 3 (8-12 lb); Year 4+ (12-20 lb). Cumulative 5-year value at $10/lb: $330-480 from one plant.
- Pollinators: elderberry is partially self-fertile but yields are significantly higher with 2 different cultivars. Plant in pairs.
- Variety table: Bob Gordon (highest yield, ~15 lb/plant, developed by University of Missouri), Adams (reliable heirloom, 10-12 lb), Nova (Canadian, cold-hardy, good flavor), Ranch (western adaptation, drought-tolerant).
**Acceptance:** 1,600+ words; food safety warning prominent and cited; syrup value math; multi-year yield table; variety table with yield data; zero em dashes; build passes.

---

### PE061 — Expand lima-bean.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/lima-bean.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Lima bean is 933 words. Expand with fresh vs. dried pricing split, heat requirement, and variety table.
**Details:**
- ROI: $2.99 packet; 3 lb shelled fresh or 1.5 lb dried; fresh baby limas $3-5/lb; dried $2-4/lb. Fordhook types (large-seeded) at farmers markets can reach $5-8/lb fresh. Calculate both paths.
- Fresh vs. dried comparison table: fresh lima beans (harvest green at 75-80 days, shell, eat immediately or freeze); dried (let pods brown and dry on vine, 85-95 days, shell, store 1 year). Fresh value higher per pound; dried stores indefinitely without freezer.
- Heat requirement: lima beans need consistent warmth — soil temp 65°F+, no transplanting (direct sow only). In Zone 5, this means no-earlier-than late May. Lima beans planted in cold soil rot. They thrive in the summer heat that defeats other beans.
- Pole vs. bush comparison: pole limas (King of the Garden, Christmas Lima) produce over a longer window but need 6-foot trellis; bush limas (Henderson, Fordhook 242) mature faster and need no support. Pole types produce more total yield per plant; bush types are easier to manage.
- Variety table: Fordhook 242 (bush, large seeded, 75 days, meaty flavor), Henderson (bush, small butter bean, 65 days), King of the Garden (pole, heirloom, 85 days, excellent flavor), Christmas/Speckled (pole, large seeds, striking appearance, 90 days).
- What goes wrong: bean beetles (same as green beans); incomplete pod fill in cool summers (need 85°F+ days during pod set); anthracnose in wet years.
**Acceptance:** 1,600+ words; fresh vs. dried value comparison; pole vs. bush table; heat requirement stated clearly; variety table; zero em dashes; build passes.

---

### PE062 — Expand lavender.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/lavender.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Lavender is 936 words. Expand with dried flower and essential oil market, variety-by-climate table, and multi-year establishment.
**Details:**
- ROI: $3.99-5.99 per plant; dried lavender bunches: $5-15/bunch retail; dried loose: $15-30/lb; lavender essential oil: $30-80/oz. Established plant (year 2+): 0.5-1 lb dried stems per season. Value: $7.50-30/plant/year once established.
- Lavender essential oil reality check: commercial lavender essential oil requires steam distillation equipment ($500-2,000+). Not practical for home scale. The realistic ROI is dried bundles, culinary lavender (food-grade), and sachets — not oil.
- Variety-by-climate table: this is the most important information for lavender growers. English lavender (Lavandula angustifolia) — cold-hardy to Zone 4, best for cold climates, best culinary flavor; French lavender (L. stoechas) — Zone 7+, showier flower, not cold-hardy; Spanish lavender (L. dentata) — Zone 8+; Lavandin (L. × intermedia, e.g., Grosso, Provence) — most productive for dried bundles, Zone 5-6, higher camphor content, less culinary.
- Multi-year establishment: lavender from seed is possible but slow and variable (2 years to first meaningful harvest). Plants from cuttings or nursery transplants establish in year 1, bloom lightly year 2, full production year 3+. A 5-year established lavender hedge is essentially free production.
- Drainage is non-negotiable: lavender dies in wet, poorly-drained soil. Root rot from overwet conditions is the primary cause of failure. Raised beds, gravel mulch, and lean soil (not amended with compost) produce the best plants. Mediterranean native — it wants dry, alkaline, lean conditions.
**Acceptance:** 1,600+ words; variety-by-climate table; dried bundle value calculation; essential oil reality check; drainage requirement stated as non-negotiable; zero em dashes; build passes.

---

### PE063 — Expand currant.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/currant.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Currant is 937 words. Expand with black vs. red vs. white comparison, jam value math, and cold-climate advantage.
**Details:**
- ROI: $12-18/plant (bare-root); established plant (year 2+): 5-10 lb berries; retail fresh currants $8-15/lb (rare in US grocery stores); currant jam: $8-14/jar retail. Multi-year payback.
- US market gap: fresh currants are almost unavailable in American grocery stores (historical federal regulation banned black currants as alternate host for white pine blister rust; regulation lifted federally 1966 but some states maintained bans until 2000s). This market gap means home-grown is often the only way to get fresh currants. This is the primary ROI argument.
- Black vs. red vs. white comparison table: black currant (Ribes nigrum — highest flavor intensity, highest vitamin C, tart, best for jam/cordial, some cold-hardiness to Zone 3); red currant (R. rubrum — milder, beautiful fresh, excellent jelly, productive); white currant (albino red currant mutation — mildest, sweet, attractive at markets, same growing conditions as red).
- Jam value: 5 lb currants + 4 lb sugar → 8-10 half-pint jars at $10/jar = $80-100 jam value. Seed cost $14.99 (one-time). Year 3+ annual jam value exceeds initial plant cost every season.
- Cold hardiness advantage: black and red currants are among the most cold-hardy fruits — Zone 3-4. They bloom late enough to miss most late frosts. Reliable fruit production where peaches, plums, and apples fail.
- What goes wrong: powdery mildew (use resistant varieties: Titania, Ben Connan, Rovada), currant fruit fly, gooseberry sawfly (strip leaves overnight — pick larvae off by hand; use Bt if severe).
**Acceptance:** 1,600+ words; black/red/white comparison table; jam value math; US market gap context; cold-hardiness advantage; zero em dashes; build passes.


## Plant Expansion Sprint 10 — Common Stubs (PE064-PE071)

Sprint 10 covers: okra, arugula, peppermint, bok-choy, green-bean, fig, jerusalem-artichoke, celery.

### PE064 — Expand okra.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/okra.md`
**Details:** Heat requirement and harvest window discipline; variety table; Southern vs. Indian culinary context; slime management (dry cooking methods). ROI: $1.99 packet; 5-8 lb/season; retail $2-4/lb. Key point: pick pods at 2-3 inches daily — pods go from perfect to woody in 24 hours.

---

### PE065 — Expand arugula.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/arugula.md`
**Details:** Arugula is 957 words. Succession table (10-12 sowings possible); wild vs. cultivated variety comparison (Roquette vs. Astro — heat tolerance differs significantly); spring vs. fall flavor (fall arugula is milder, sweeter); cut-and-come-again technique; grocery price comparison ($6-10/lb baby arugula).

---

### PE066 — Expand mint.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/mint.md`
**Details:** Peppermint is 958 words. Container containment (mint spreads via runners — most critical management info); dried herb value ($15-25/lb); tea value calculation; variety comparison (peppermint vs. spearmint vs. chocolate mint vs. apple mint); menthol content peaks just before flowering.

---

### PE067 — Expand bok-choy.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/bok-choy.md`
**Details:** Bok choy is 960 words. Baby vs. full-size comparison (baby harvested at 30 days, full-size 45-60 days; baby commands premium $4-7/lb vs. full-size $1.50-3/lb); variety table; stir-fry timing (bok choy goes from raw to perfectly wilted in 90 seconds over high heat — overcooking is the failure); flea beetle management.

---

### PE068 — Expand green-bean.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/green-bean.md`
**Details:** Green bean is 984 words. Bush vs. pole comparison table (pole beans produce 2-3x more per plant but need trellis; bush beans faster for canning window); succession planting for canning-quantity harvest; blanching and freezing technique; fresh vs. frozen ROI; variety table including specialty (Dragon Tongue, Rattlesnake, Blue Lake).

---

### PE069 — Expand fig.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/fig.md`
**Details:** Fig is 986 words. Container culture for cold-climate overwintering (Zone 5-6); Brown Turkey vs. Chicago Hardy vs. Celeste comparison; breba (first crop) vs. main crop distinction; drying figs ($8-15/lb dried vs. $3-5/lb fresh); overwintering technique for zone-pushers.

---

### PE070 — Expand jerusalem-artichoke.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/jerusalem-artichoke.md`
**Details:** Jerusalem artichoke is 988 words. Containment strategy (spreads aggressively — buried container same as mint); inulin content and digestive effects (honest warning); flavor improvement after frost; variety comparison (Stampede for short seasons, Fuseau for smooth tubers); tuber storage (leave in ground until needed, or dig and store in cool/humid conditions).

---

### PE071 — Expand celery.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/celery.md`
**Details:** Celery is 1,005 words. Consistent heavy watering requirement (the primary failure mode); trench-growing for blanching; leaf celery (cutting celery) vs. stalk celery as easier alternative; $3-5/lb retail comparison; flavor difference between home-grown (more intense) and store-bought (mostly water).

---

## Plant Expansion Sprint 11 — Common Stubs (PE072-PE079)

Sprint 11 covers: artichoke, grape, cherry-tomato, pumpkin, chickpea, kale, acorn-squash, fava-bean.

### PE072 — Expand artichoke.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/artichoke.md`
**Details:** Artichoke is 1,011 words. Perennial in Zone 7+, annual in Zone 5-6; vernalization trick for annual culture (brief cold period to trigger flowering); variety comparison (Green Globe vs. Violetto vs. Imperial Star); secondary and tertiary buds after main harvest; specialty market value ($3-5/each retail vs. $1-2 for commercial).

---

### PE073 — Expand grape.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/grape.md`
**Details:** Grape is 1,032 words. American vs. European vs. hybrid variety climate requirements; annual pruning as the central skill (70% of old wood removed every year — skip this and yield collapses); table grape vs. wine grape vs. juice grape ROI comparison; 3-year establishment before meaningful yield; black rot and downy mildew management.

---

### PE074 — Expand cherry-tomato.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/cherry-tomato.md`
**Details:** Cherry tomato is 1,051 words. Indeterminate vs. determinate distinction (indeterminate produces all season; determinate all at once); $4-8/pint at farmers markets vs. $3-5 grocery; skin-splitting prevention (consistent watering); variety table (Sun Gold, Sweet Million, Black Cherry, Yellow Pear, Juliet); container culture feasibility.

---

### PE075 — Expand pumpkin.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/pumpkin.md`
**Details:** Pumpkin is 1,074 words. Carving vs. pie vs. giant-growing split; seed production value ($5-10/lb specialty seeds); fall retail premium ($3-8/pumpkin at farm stands vs. $1-2 wholesale); space math (full-size vines 15-20 sq ft each); mini pumpkins for high-value market; hand pollination for giant types.

---

### PE076 — Expand chickpea.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/chickpea.md`
**Details:** Chickpea is 1,087 words. Dry vs. fresh (green chickpeas "ceci") use; long-season management (100-110 days; needs hot dry finish); Desi vs. Kabuli type comparison; nitrogen fixation as cover crop; hummus value calculation (1 lb dried chickpeas → 3 lb hummus at $4-6/lb retail = $12-18 value vs. $0.90 seed cost).

---

### PE077 — Expand kale.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/kale.md`
**Details:** Kale is 1,094 words. Curly vs. lacinato vs. red Russian vs. Siberian comparison table; cut-and-come-again management for 8-month production; baby kale premium ($6-10/lb vs. $2.50/lb mature); winter hardiness (Siberian to Zone 3); frost sweetening; overwintering harvest value in Zone 5-6.

---

### PE078 — Expand acorn-squash.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/acorn-squash.md`
**Details:** Acorn squash is 1,118 words. Curing vs. no-curing (acorn squash cures in 1-2 weeks vs. butternut's 4 weeks); storage comparison by variety; retail $1.50-3.00/squash; stuffed acorn squash as highest-value use; Honey Bear (smaller, AAS winner) vs. Table Ace vs. Carnival comparison; space vs. yield math.

---

### PE079 — Expand fava-bean.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/fava-bean.md`
**Details:** Fava bean is 1,124 words. Double-shelling labor vs. reward (fava beans require removing beans from pod AND slipping inner skin for best results); fresh vs. dried split; spring vs. fall planting window (fall plant in Zone 7+ overwinters and yields earliest spring harvest); nitrogen fixation value; Mediterranean culinary tradition (ful medames, fave al guanciale).

---

## Plant Expansion Sprint 12 — Common Stubs (PE080-PE087)

Sprint 12 covers: tomato, lettuce, cucumber, garlic, cherry (fruit), plus highest-priority not-common stubs.

### PE080 — Expand tomato.md to 2,000+ words
**Status:** `[x]`
**File:** `src/content/plants/tomato.md`
**Details:** Tomato is the flagship crop — currently 1,136 words is not enough. Expand to 2,000+. Needs: determinate vs. indeterminate in depth; pruning (suckering) technique and yield impact; blossom end rot cause and prevention; late blight vs. early blight distinction; variety table by use (slicing, paste, cherry, beefsteak, heirloom); canning math (6-8 lb tomatoes → 1 quart canned → 3-4 years of pasta sauce ROI).

---

### PE081 — Expand lettuce.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/lettuce.md`
**Details:** Lettuce is 1,162 words. Cut-and-come-again vs. head lettuce comparison; succession planting for year-round harvest; heat-tolerant varieties for summer gap; baby leaf premium ($6-10/lb vs. $2-3/lb head); container and indoor growing; type comparison (butterhead, romaine, loose-leaf, crisphead) with days and temperature preferences.

---

### PE082 — Expand cucumber.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/cucumber.md`
**Details:** Cucumber is 1,174 words. Slicing vs. pickling vs. Persian comparison; bitter prevention (consistent watering + keeping fruits off soil); trellising for straight fruits and less disease; pickling ROI (10 lb cucumbers + $2 in brine ingredients → 8-10 pints of pickles at $4-7/jar retail); powdery mildew resistant varieties.

---

### PE083 — Expand garlic.md to 2,000+ words
**Status:** `[x]`
**File:** `src/content/plants/garlic.md`
**Details:** Garlic is 1,184 words. Already good but expand to 2,000+. Add: scape recipes and value (scapes = early harvest crop at $3-6/lb at farmers markets); seed-saving protocol for year-2 free seed; flavor comparison of hardneck subtypes (Rocambole vs. Porcelain vs. Purple Stripe); storage comparison (hardneck 6-8 months vs. softneck 9-12 months); zone-specific planting date table.

---

### PE084 — Expand cherry.md to 1,600+ words
**Status:** `[x]`
**File:** `src/content/plants/cherry.md`
**Details:** Cherry is 1,192 words. Sweet vs. sour cherry distinction (sweet needs partner; sour is self-fertile); bird netting as non-optional management; dwarf and semi-dwarf rootstock for small gardens; cherry to jam ratio ($8-12/lb fresh, $12-18/jar jam); Nanking cherry (Prunus tomentosa) as reliable shrub-form alternative to tree cherries.

---


## New Plant Batch 5 (PB012-PB021)

### PB012 — Create cape-gooseberry.md
**Status:** `[x]`
**File:** `src/content/plants/cape-gooseberry.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** New plant entry, 800+ words. Cape gooseberry (Physalis peruviana) — papery-husked berry, $8-12/lb at specialty retailers, start indoors 8-10 weeks before last frost.
**Details:**
- Frontmatter: name Cape Gooseberry, scientific_name Physalis peruviana, category Fruit, days_min 70, days_max 80, avg_yield_lb 3.0, avg_price_lb 9.00, seed_cost 2.99, is_common false, direct_sow_ok false, indoor_weeks_needed 8
- Related to ground cherry (Physalis pruinosa) but larger, sweeter, more productive; flavor described as pineapple-vanilla
- Zone 9+ perennial; grown as annual in colder zones; needs long warm season
- Husks protect fruit for extended storage (3-4 weeks at room temp once husked)
- Specialty market value: sold by the flat at upscale grocers and farmers markets; used as garnish, in tarts, in chutneys
- Start indoors essential; transplant after last frost; full sun; moderate water
**Acceptance:** 800+ words; ROI math; growing requirements; zone context; build passes.

---

### PB013 — Create popcorn.md
**Status:** `[x]`
**File:** `src/content/plants/popcorn.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** New plant entry, 800+ words. Popcorn (Zea mays var. everta) — distinct from sweet corn; specialty heirloom popcorn $5-10/lb at farmers markets.
**Details:**
- Frontmatter: name Popcorn, scientific_name Zea mays var. everta, category Vegetable, days_min 95, days_max 110, avg_yield_lb 5.0, avg_price_lb 6.00, seed_cost 2.99, is_common false, direct_sow_ok true, indoor_weeks_needed 0
- Must be isolated from sweet corn (cross-pollination ruins both crops — 400 feet minimum or time-staggered planting)
- Dry on plant until husks paper-dry (90-100 days after silking); cure further indoors before shelling
- Specialty variety table: Robust 997 (high yield, neutral flavor), Glass Gem (ornamental, stores as decoration, fair popping), Dakota Black (small kernels, nutty), Strawberry (small red ears, good popper)
- Home-popped value: 1 lb kernels → 15-20 cups popped corn; specialty flavored popcorn $5-8/bag at retail
- The heirloom color story: Glass Gem and similar varieties cannot be found in stores; this is the primary grow-your-own case
**Acceptance:** 800+ words; isolation requirement stated; curing protocol; variety table; build passes.

---

### PB014 — Create oca.md
**Status:** `[x]`
**File:** `src/content/plants/oca.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** New plant entry, 800+ words. Oca (Oxalis tuberosa) — Andean tuber, $10-15/lb at specialty retailers.
**Details:**
- Frontmatter: name Oca, scientific_name Oxalis tuberosa, category Vegetable, days_min 180, days_max 220, avg_yield_lb 4.0, avg_price_lb 12.00, seed_cost 14.99, is_common false, start_cost_label "Tubers (1 lb)", direct_sow_ok true, indoor_weeks_needed 0
- Long-day crop: tubers form as days shorten in fall; in short-season zones (5-6) this means a race against first frost. Row cover extends season and is often necessary.
- Sour flavor from oxalic acid; sweetens significantly after 2-3 days in full sun post-harvest (sun-sweetening converts oxalic acid)
- Colors: red, pink, yellow, orange — visually striking; farmers market appeal
- Zone 8+ can leave tubers in ground year-round (perennial); Zones 5-7 must dig before hard freeze
- Store cool and dark; tubers keep 4-6 months
**Acceptance:** 800+ words; long-day mechanism explained; sun-sweetening noted; zone limitations; build passes.

---

### PB015 — Create salsify.md
**Status:** `[x]`
**File:** `src/content/plants/salsify.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** New plant entry, 800+ words. Salsify (Tragopogon porrifolius) — "oyster plant," $3-5/lb.
**Details:**
- Frontmatter: name Salsify, scientific_name Tragopogon porrifolius, category Vegetable, days_min 120, days_max 150, avg_yield_lb 3.0, avg_price_lb 4.00, seed_cost 2.49, is_common false, direct_sow_ok true, indoor_weeks_needed 0
- Flavor described as mild oyster-like with slightly sweet, nutty notes
- Long-season root; direct sow early spring; needs deep loose soil like parsnip
- Edible flower buds and young shoots as bonus harvest
- Scorzonera (Scorzonera hispanica) is the black-skinned relative; milder, higher inulin, often preferred. Can create brief comparison.
- Store in ground over winter (frost improves flavor); dig in spring before plant flowers
- Market rarity: almost never found in grocery stores; specialty restaurants pay premium; grow-your-own is often the only access
**Acceptance:** 800+ words; growing requirements; storage; scorzonera comparison; build passes.

---

### PB016 — Create scorzonera.md
**Status:** `[x]`
**File:** `src/content/plants/scorzonera.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** New plant entry, 800+ words. Scorzonera (Scorzonera hispanica) — black salsify, $4-6/lb.
**Details:**
- Frontmatter: name Scorzonera, scientific_name Scorzonera hispanica, category Vegetable, days_min 120, days_max 150, avg_yield_lb 3.0, avg_price_lb 5.00, seed_cost 2.99, is_common false, direct_sow_ok true, indoor_weeks_needed 0
- Black skin, white flesh; peels easily after blanching in boiling water
- Can leave in ground 2 years for larger roots — perennial in mild climates
- Inulin content: prebiotic fiber; marketed in Europe as diabetic-friendly root vegetable
- Edible flowers (yellow, dandelion-like) in year 2
- Practically absent from US grocery stores; European specialty markets carry it seasonally
**Acceptance:** 800+ words; growing requirements; 2-year option; market rarity; build passes.

---

### PB017 — Create sea-kale.md
**Status:** `[x]`
**File:** `src/content/plants/sea-kale.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** New plant entry, 800+ words. Sea kale (Crambe maritima) — perennial, forced blanched shoots $15-25/lb.
**Details:**
- Frontmatter: name Sea Kale, scientific_name Crambe maritima, category Vegetable, days_min 365, days_max 730, avg_yield_lb 1.0, avg_price_lb 18.00, seed_cost 4.99, is_common false, direct_sow_ok false, indoor_weeks_needed 8
- Perennial; Zone 4-9; established crown produces for 20+ years
- Year 1-2: establishment only (no harvest). Year 3+: force shoots in late winter by covering crown with a pot or box to exclude light; forced shoots emerge pale, tender, nutty-flavored
- Forcing method: place large pot or forcing jar over crown in February; harvest blanched shoots at 6-8 inches; leave some shoots to grow out for photosynthesis and crown recovery
- UK tradition: popular Victorian vegetable; nearly forgotten in US; specialty restaurants pay premium for forced sea kale shoots
- The long-term ROI case: $4.99 plant → 20-year production → forced shoots at $18/lb → year 3-23 value
**Acceptance:** 800+ words; forcing method explained; multi-year production table; market context; build passes.

---

### PB018 — Create tepary-bean.md
**Status:** `[x]`
**File:** `src/content/plants/tepary-bean.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** New plant entry, 800+ words. Tepary bean (Phaseolus acutifolius) — drought-resistant heritage bean, $5-10/lb.
**Details:**
- Frontmatter: name Tepary Bean, scientific_name Phaseolus acutifolius, category Vegetable, days_min 60, days_max 90, avg_yield_lb 2.0, avg_price_lb 7.00, seed_cost 3.99, is_common false, direct_sow_ok true, indoor_weeks_needed 0
- Native to Sonoran Desert; most drought-tolerant legume in cultivation; thrives with minimal irrigation
- Two harvests: green pods eaten fresh at 45-50 days; dry beans at 60-90 days
- Varieties: Brown Flecked, Blue Speckled, White, Desert Iron Woman (Tohono O'odham traditional selection)
- Niche market: Native American food sovereignty crop; heritage grain shops pay $8-12/lb for named varieties
- Low water requirement is the primary ROI angle for drought-prone regions — produces where common beans fail
- Nitrogen-fixing legume; leave roots in soil at season end
**Acceptance:** 800+ words; drought tolerance as primary selling point; variety table; water usage comparison; build passes.

---

### PB019 — Create mashua.md
**Status:** `[x]`
**File:** `src/content/plants/mashua.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** New plant entry, 800+ words. Mashua (Tropaeolum tuberosum) — Andean tuber, ornamental climbing vine.
**Details:**
- Frontmatter: name Mashua, scientific_name Tropaeolum tuberosum, category Vegetable, days_min 180, days_max 220, avg_yield_lb 5.0, avg_price_lb 10.00, seed_cost 12.99, is_common false, start_cost_label "Tubers (6-count)", direct_sow_ok true, indoor_weeks_needed 0
- Relative of nasturtium; same family (Tropaeolaceae); tubers, leaves, and flowers all edible
- Tubers raw have sharp peppery flavor; cooking eliminates pungency; or sun-sweeten like oca
- Ornamental value: beautiful climbing vine with orange flowers; dual use as edible + landscape plant
- Long-season tuber like oca; forms tubers in short days; needs frost protection in fall
- Pest-repelling properties: mashua contains isothiocyanates that repel insects and some nematodes; used as companion plant in Andean polycultures
**Acceptance:** 800+ words; raw vs. cooked flavor distinction; ornamental value; companion plant properties; build passes.

---

### PB020 — Create cape-gooseberry.md (skip - PB012)
**Status:** `[x]`
**Note:** Covered in PB012 above.

---

### PB021 — Create lotus-root.md
**Status:** `[x]`
**File:** `src/content/plants/lotus-root.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** New plant entry, 800+ words. Lotus root (Nelumbo nucifera) — aquatic vegetable, $4-8/lb.
**Details:**
- Frontmatter: name Lotus Root, scientific_name Nelumbo nucifera, category Vegetable, days_min 150, days_max 180, avg_yield_lb 5.0, avg_price_lb 6.00, seed_cost 14.99, is_common false, start_cost_label "Rhizome section", direct_sow_ok false, indoor_weeks_needed 0
- Grown in tubs, ponds, or shallow water features; requires 2-3 feet of water depth and full sun
- Tubers develop in fall; harvest by draining and digging or reaching into mud
- Beautiful ornamental plant (national flower of several Asian countries); flowers mid-summer
- Container culture: 25-30 gallon barrel or stock tank; 6 inches of heavy clay-loam soil + 12-18 inches of water; no drainage
- Culinary: stir-fry, soup, pickled, chips; the lace-like cross-section pattern makes it a visual standout at markets
- Zone 4+; dormant in winter; rhizome survives cold water temperatures in a container that doesn't freeze solid
**Acceptance:** 800+ words; container culture method; harvest protocol; ornamental context; build passes.

---

## New Article Sprint (NA008-NA012)

### NA008 — Create greenhouse-roi.md
**Status:** `[x]`
**File:** `src/content/articles/greenhouse-roi.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** 2,000+ word ROI analysis of season extension structures: cold frame vs. low tunnel vs. hoop house vs. polycarbonate greenhouse. Must include a break-even calculation for each structure type.
**Details:**
- Category: roi; featured: false
- Structure comparison table: Cold frame (DIY $20-50, extends season 4-6 weeks, best for: hardening off + overwintering greens), Low tunnel (polypropylene row cover + hoops, $30-80/100 ft, extends 4-6 weeks, best for: row crops), Caterpillar tunnel ($200-400, extends 8-12 weeks, best for: high-value crops mid-season), Gothic arch hoop house ($1,500-4,000, extends season 12-16 weeks, best for: tomatoes + peppers early/late), Polycarbonate greenhouse ($3,000-15,000+, year-round potential, best for: seed starting + tropical crops)
- Break-even calculation per structure: cost ÷ annual value of extended-season production. Example: $300 caterpillar tunnel adds 4 weeks of tomato production at $3/lb × 10 lb/week from 20-foot bed = $120/year → 2.5 year payback.
- Heating costs: unheated vs. heated; propane/electric cost per degree-day to maintain 40°F vs. 50°F setpoint. Heated greenhouses dramatically increase operating cost and extend payback period.
- What justifies the cost: early tomatoes (June vs. August harvest, $4-6/lb farmers market vs. commodity prices), seedling production (starting your own vs. buying transplants at $3-5 each × 50 plants = $150-250/year), overwintered greens (salad greens at $8-12/lb in January-February).
- Zone-specific value: Zone 4-5 gains more from season extension than Zone 7-8 where season is already long enough. Calculate extended-season value by zone.
- Source: University of Vermont Extension for hoop house economics; USDA SARE for small farm tunnel data.
**Acceptance:** 2,000+ words; structure comparison table; break-even calculation for at least 3 structure types; zone-specific value; heating cost reality check; zero em dashes; build passes.

---

### NA009 — Create no-dig-gardening-roi.md
**Status:** `[x]`
**File:** `src/content/articles/no-dig-gardening-roi.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** 1,800+ word ROI analysis of no-dig/no-till gardening vs. conventional tilling. Charles Dowding method. Break-even on cardboard + compost investment.
**Details:**
- Category: roi; featured: false
- Method: sheet mulch over existing lawn/weeds with cardboard (free from boxes) + 4-6 inches of compost ($30-80 for a 4×8 bed, $50-100 for 4×12); plant directly into compost layer. No tilling, no ground prep beyond suppressing weeds.
- Cost comparison: Traditional bed prep (tilling service $80-150, or rented tiller $60-80/day, soil amendment $50-100) vs. no-dig setup ($50-120 in compost + free cardboard). No-dig is comparable cost for year 1.
- Labor comparison: Traditional annual spring tilling (2-4 hours/bed); no-dig annual maintenance (add 1-2 inch compost top-dress in fall, 30 minutes/bed). Labor savings over 5 years is substantial.
- Weed suppression value: research from Charles Dowding's market garden shows no-dig beds have 85% fewer weed hours than dug beds after year 1 (cite: Dowding, No Dig: Nurture Your Soil to Grow Better Veg with Less Effort, 2022). At $20/hour labor equivalent, 3 hours saved/bed/season = $60/year per bed.
- Soil biology argument: tilling disrupts fungal networks and earthworm populations; no-dig beds show higher soil organic matter and better water retention over time. Source: USDA NRCS Soil Health guidance.
- Year-by-year comparison table: Year 1-5; Traditional (tilling cost, weed labor, amendment) vs. No-Dig (setup cost, annual compost, near-zero weed labor). Show cumulative cost difference.
- Practical guide: cardboard sourcing (liquor stores, appliance stores give it free); cardboard overlap (6-inch minimum to prevent weed breakthrough); compost sources (municipal, farm, purchased); what to plant first year (most crops work; avoid deep root crops like parsnips in year 1).
**Acceptance:** 1,800+ words; year-by-year cost comparison table; weed-suppression ROI calculation; Dowding cited; zero em dashes; build passes.

---

### NA010 — Create food-preservation-equipment-roi.md
**Status:** `[x]`
**File:** `src/content/articles/food-preservation-equipment-roi.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** 2,000+ word break-even analysis of food preservation equipment: food dehydrator, pressure canner, water bath canner, vacuum sealer, chest freezer.
**Details:**
- Category: roi; featured: false
- Equipment comparison table: columns = equipment, cost, annual operating cost, annual capacity, payback period at stated throughput
  - Chest freezer ($200-400, $30-50 electricity/year, ~300 lb frozen produce, 1-2 year payback at $1.50/lb produce value)
  - Water bath canner ($25-40, minimal ongoing, 200+ jars/year capacity, < 1 year payback)
  - Pressure canner ($100-150, minimal ongoing, 150+ jars/year capacity, 1-2 year payback)
  - Food dehydrator ($40-150, $0.10-0.30 per batch electricity, 50+ lb dried produce/year, 2-3 year payback)
  - Vacuum sealer ($50-150, $0.10-0.25/bag, extends frozen produce life 2-3x, 2-3 year payback)
- Freeze dryer deliberately excluded as home-scale footnote: $3,000-5,000 units with 15+ year payback; only makes sense for extreme output.
- Produce value math per method: 10 lb fresh tomatoes → $2-3 canned (water bath, 3-4 pints × $1.50/pt home value) vs. $10-15 frozen vs. $20-30 dried. Each method has different value multiplication.
- What pairs with what crop: tomatoes → water bath canning; green beans → pressure canning (low acid); herbs → dehydrator; berries → freezer first, jam second; peppers → freezer or dehydrator.
- Jar economics: Mason jars are a one-time investment that last 10+ years (lids replaced annually at $0.15-0.30 each). Amortize jar cost over 10 years: a $30 case of 12 jars = $3/jar/year ÷ 2 uses/year = $1.50 per use. Add lid ($0.20) = $1.70 per jar of home-canned produce — compare to $3-6 retail.
**Acceptance:** 2,000+ words; equipment comparison table with payback; preserve-value-by-method comparison; jar cost amortization; zero em dashes; build passes.

---

### NA011 — Create vertical-gardening-roi.md
**Status:** `[x]`
**File:** `src/content/articles/vertical-gardening-roi.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** 1,800+ word ROI analysis of vertical growing: trellis cost vs. yield-per-sq-ft improvement for pole beans, cucumbers, tomatoes, peas.
**Details:**
- Category: roi; featured: false
- Core calculation: compare yield-per-sq-ft for vertical vs. sprawling crops. Example: pole beans on a 6-foot trellis use 1 sq ft of ground space and produce 3-4 lb/season; bush beans use 2-3 sq ft and produce 1.5-2 lb. Pole beans = 3-4 lb/sq ft vs. bush beans = 0.6-1 lb/sq ft. The trellis multiplies yield per square foot 4-5x.
- Trellis cost comparison table: cattle panel (8×16 ft, $30-45, 10-year life = $3-4.50/year), bamboo and twine ($5-10/season, replaceable), T-posts with wire ($20-40, multi-year), wooden A-frame ($15-25 lumber, 3-5 year life), commercial tomato cage ($3-8 each, 5-10 year life).
- Crop-by-crop vertical yield table: pole beans, cucumbers, tomatoes (indeterminate), peas, squash (with hammock support), melon (with hammock support). Include: ground space used, vertical production window, yield per linear foot of trellis, trellis cost amortized per season.
- Small-space case study: a 4-foot wide raised bed with a 6-foot trellis at the back produces: back 1 foot (pole beans or cucumbers on trellis) + front 3 feet (low-growing crops like lettuce, radish, beets). Effectively doubles crop density.
- Air circulation and disease: vertical growing improves airflow around leaves, reducing fungal pressure (early blight, powdery mildew). Quantify: well-trellised cucumbers may need 1-2 fewer fungicide applications than sprawling; row cover and trellis combinations reduce pest damage.
**Acceptance:** 1,800+ words; yield-per-sq-ft comparison with math; trellis cost table with annual amortized cost; small-space case study; zero em dashes; build passes.

---

### NA012 — Create crop-loss-risk-management.md
**Status:** `[x]`
**File:** `src/content/articles/crop-loss-risk-management.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** 1,800+ word practical guide to managing garden crop risk: succession planting, variety diversity, row cover, and crop insurance equivalents for home gardeners.
**Details:**
- Category: roi; featured: false
- Frame as ROI protection: the ROI calculations elsewhere on this site assume a successful harvest. What happens when it fails? This article addresses risk mitigation as part of the financial analysis.
- Risk table by threat: late frost (mitigation: row cover, transplant timing, cold-tolerant varieties; probability by zone), pest pressure (mitigation: row cover, trap crops, IPM; expected yield reduction without mitigation 10-30%), drought (mitigation: drip irrigation, mulch, drought-tolerant varieties), disease (mitigation: crop rotation, resistant varieties, spacing for airflow).
- Succession planting as insurance: three plantings of lettuce 3 weeks apart — if one fails to frost or bolts, two remain. Calculate: 3 × $0.50 in seed = $1.50 insurance cost to protect $20+ in expected harvest value.
- Variety diversity as insurance: plant 2-3 varieties of tomatoes rather than one. If one fails to blight, others may resist. Heirloom + F1 hybrid provides both flavor diversity and disease resistance coverage.
- Row cover ROI: $30-60 for 50 feet of floating row cover (reusable 3-5 years = $6-20/year amortized). Eliminates flea beetles on brassicas, prevents frost damage through multiple events, extends season by 4-6 weeks. Calculate value of each benefit separately.
- Zone-specific risk calendar: highest-risk periods by month and zone; what to have ready (row cover, backup varieties, succession seeds).
**Acceptance:** 1,800+ words; risk table with mitigation and probability; succession-as-insurance math; row cover ROI calculation; zero em dashes; build passes.


---

## Data Integrity Sprint

### DI001 — Rename seed_cost to start_cost and audit all plant start data
**Status:** `[x]`
**Files:** `src/content.config.ts`, `src/content/plants/*.md`, `src/components/RoiEstimator.astro`, `src/pages/compare/index.astro`, `src/pages/compare/[...slugs].astro`, `src/pages/crops/[slug].astro`
**What:** Rename the `seed_cost` schema field to `start_cost`, make `start_cost_label` required with no default, and audit every plant file to ensure the label and cost reflect the realistic starting method (seed packet, transplant, bare-root plant, division, rooted cutting, etc.).
**Details:**
- Schema change: rename `seed_cost` → `start_cost` in `src/content.config.ts`; change `start_cost_label` from `z.string().optional().default('Seed packet')` to `z.string()` (required, no default)
- Find/replace all references to `seed_cost` across components: `RoiEstimator.astro`, `compare/index.astro`, `compare/[...slugs].astro`, `crops/[slug].astro`, and any other consumers
- Audit every plant `.md` file frontmatter: set `start_cost_label` to the realistic starting method:
  - Trees/shrubs (apple, cherry, blueberry, etc.): "Bare-root plant" or "Grafted tree" with cost reflecting nursery price
  - Perennials started from divisions (chives, mint, lemon balm, asparagus): "Division" or "Potted plant"
  - Crops where transplant is the norm (tomato, pepper, eggplant): "Transplant" with cost reflecting a 6-pack or single transplant price
  - Crops genuinely started from seed: keep "Seed packet"
  - Crops started from tubers/rhizomes (ginger, turmeric, potato, oca, lotus root): "Seed tuber" or "Rhizome section"
- Prior agreement from session: the `start_cost_label` was introduced specifically because "seed" is the wrong framing for many crops. It was made optional as a temporary measure; it should now be required.
- Reference: goji berry already uses `start_cost_label: "Bare-root plant"` as the established pattern.
**Acceptance:**
- `npx astro build` passes with 0 errors
- No plant file uses `seed_cost` (field renamed throughout)
- Every plant file has an explicit `start_cost_label` that accurately describes the start method
- ROI estimator and compare pages display the correct label for each crop
- No regressions on `/crops/`, `/compare/`, or the ROI estimator widget

---

### DI002 — Audit and align frontmatter ROI numbers against plant page body text
**Status:** `[x]`
**Files:** `src/content/plants/*.md`
**What:** The frontmatter `avg_yield_lb`, `avg_price_lb`, and `start_cost` fields are the canonical numbers used by the ROI estimator and compare tool. Several plant pages have body text that states different numbers. Audit all pages and reconcile — body text must reference or be consistent with frontmatter values.
**Details:**
- Priority crops identified as mismatched (body text overstates vs. frontmatter):
  - `arugula.md`: frontmatter `avg_yield_lb: 0.5` but body describes 7+ lb/season from succession planting
  - `lettuce.md`: frontmatter `avg_yield_lb: 1.5` but body describes cut-and-come-again producing far more
  - `kale.md`: frontmatter `avg_yield_lb: 2.0` but body describes 8-month harvest at much higher totals
  - `snap-pea.md`: frontmatter `avg_yield_lb: 1.0` but body describes higher succession yields
  - `chives.md`: frontmatter `avg_yield_lb: 0.2` resulting in negative ROI; a mature clump produces 0.5-1 lb/season
  - `sweet-basil.md`: frontmatter `avg_yield_lb: 0.5` but one well-grown plant produces this in a month
  - `elderberry.md`: frontmatter `avg_yield_lb: 5.0` but body and ROI table reference 10-20 lb at maturity
- Data errors to fix first:
  - `saffron.md`: `avg_yield_lb: 0.0` is a data entry error — likely `0.02` (about 0.6 oz per plant, consistent with saffron yields); fix and verify gross value recalculates correctly
  - Peppermint appears twice in the plant inventory with different price values — identify and remove the duplicate
- For each mismatched crop: decide whether the frontmatter is wrong (update it to match what the body says is achievable) or the body is wrong (update body text to match the conservative frontmatter number). The frontmatter should reflect a realistic single-plant/single-packet per-season yield, not best-case succession yields.
- Prices to verify against USDA AMS Specialty Crop Market News 2023-2024:
  - `sea-buckthorn.md`: `avg_price_lb: 20.00` — verify; $8-15/lb is the typical specialty market range
  - `popcorn.md`: `avg_price_lb: 6.00` — verify; retail popcorn kernels run $2-4/lb; $6 may only apply to specialty heirloom varieties
- Document the source for any price that's changed in a comment or the body text citation
**Acceptance:**
- No plant page body text states a yield, price, or ROI figure that contradicts its own frontmatter
- Saffron `avg_yield_lb` is a non-zero value with a citation
- Peppermint duplicate resolved
- Sea buckthorn and popcorn prices verified or corrected with source cited
- `npx astro build` passes with 0 errors

---

## Content Expansion Sprint — Thin Pages (CE)

Five plant pages are under 1000 words — below the depth standard for the site. All five have valid frontmatter and basic content but need full expansion to the 1600+ word standard: variety comparison tables, ROI math, growing requirements with specific ranges, and failure modes.

---

### CE001 — Expand chrysanthemum-greens.md to depth standard
**Status:** `[x]`
**Files:** `src/content/plants/chrysanthemum-greens.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Full expansion of chrysanthemum greens (*Glebionis coronaria*) page. Currently 828 words — below the 1600+ word standard.
**Details:**
- Frontmatter data: `avg_yield_lb: 0.75`, `avg_price_lb: 5.00`, `start_cost: 2.49`, companions: Radish, Spinach, Lettuce
- Key content gaps to fill: variety comparison (Garland/Crown Daisy types vs Japanese types; leaf vs stem harvest types), ROI math ($5/lb specialty greens vs 0.75 lb/plant), succession planting window (spring and fall cool-season use), flavor profile and kitchen uses (hotpot, stir-fry, sukiyaki — context sets retail demand), growing differences between leaf-type and stem-type selections
- Retail price context: Asian grocery stores $3-6/lb; specialty grocery $6-10/lb (USDA AMS specialty vegetable data); the $5/lb frontmatter is a reasonable midpoint
- Scientific name: *Glebionis coronaria* (formerly *Chrysanthemum coronarium*); note the reclassification and that *Leucanthemum* (Shasta daisy) is a different genus — common confusion
- Companion plants in frontmatter: Radish, Spinach, Lettuce — explain the cool-season succession logic
- Cover: what it actually is (two distinct phenotypes — leaf and stem), ROI case, growing requirements, what goes wrong (bolting in heat is the main issue, same biology as lettuce), harvest and kitchen use
**Acceptance:**
- Page is 1600+ words
- Contains a variety comparison table (at minimum: leaf type vs stem type, with harvest timing differences)
- Contains ROI math using the frontmatter figures
- No em dashes, no motivational closing
- `npx astro build` passes with 0 errors

---

### CE002 — Expand lovage.md to depth standard
**Status:** `[x]`
**Files:** `src/content/plants/lovage.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Full expansion of lovage (*Levisticum officinale*) page. Currently 908 words.
**Details:**
- Frontmatter data: `avg_yield_lb: 0.5`, `avg_price_lb: 8.00`, `start_cost: 2.99`, companions: Arugula, Fennel
- Key content gaps: lovage is a perennial herb with a very strong celery flavor; its value case is not a big harvest yield but replacement of expensive celery at $8-10/lb specialty herb pricing; explain why lovage doesn't appear in grocery stores (too perishable, too pungent) — that's what makes home growing it uniquely valuable
- Describe the full plant: tall (4-6 ft) perennial umbelliferous herb, USDA zones 3-8, looks like a giant celery plant; all parts edible (leaves, stems, seeds, root); flavor is intense, much stronger than celery — 1 tbsp lovage = 1 rib celery in a recipe
- ROI case: the 0.5 lb yield at $8/lb gives $4 gross value against $2.99 seed cost; modest in year 1. The real case is that a single established plant produces for 10+ years, and a established crown in year 2-3 produces 2-4 lb of usable leaves per season (cite: Herb Society of America, Levisticum officinale monograph)
- Growing notes: needs a permanent spot (perennial), prefers rich moist soil, partial shade in hot climates, can reach 6 ft in bloom; cut flower stalks to keep leaf production going
- Companion logic: planted with Arugula and Fennel — both are strong-flavored crops that don't compete with lovage's flavor profile; Fennel specifically should NOT be near most vegetables (allelopathic) but lovage tolerates it
- Kitchen use: soups, stocks, sauces — works anywhere celery would; young stems can be used like celery sticks; seeds are a spice
**Acceptance:**
- Page is 1600+ words
- Contains ROI multi-year table (year 1 through year 5, similar to chives model)
- No em dashes, no motivational closing
- `npx astro build` passes with 0 errors

---

### CE003 — Expand shiso.md to depth standard
**Status:** `[x]`
**Files:** `src/content/plants/shiso.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Full expansion of shiso (*Perilla frutescens*) page. Currently 926 words.
**Details:**
- Frontmatter data: `avg_yield_lb: 1.5`, `avg_price_lb: 10.00`, `start_cost: 2.99`, companions: Basil, Eggplant
- Key content gaps: shiso is a crop with a legitimate retail market gap — it's expensive ($10-15/lb at Japanese/Korean grocers) and self-seeds freely, so once established it's essentially free production for years
- Explain the two types clearly: green shiso (*P. frutescens* var. *crispa*, also called Ao Shiso) and red/purple shiso (*P. frutescens* var. *purpurea*, Aka Shiso) — different uses, different markets. Red is used for umeboshi coloring and pickling; green is the sashimi garnish and tempura ingredient. Both have similar value but different culinary roles.
- Also: Korean perilla (*P. frutescens* var. *japonica*) — slightly different leaf shape, larger, commonly used in Korean BBQ wraps (kkaennip). Seeds available from Korean seed suppliers. Note this variety distinction matters for culinary use.
- ROI case: 1.5 lb/plant × $10/lb = $15 gross vs $2.99 seed cost. Plants self-seed; after year 1 your seed cost drops to zero. A single bed managed over 3 years has zero ongoing seed cost.
- Self-seeding behavior: this is both a feature and a management consideration — shiso can become weedy in warm climates. Harvest before seed set to control spread, or let it naturalize if you want a permanent bed.
- Growing: heat-loving, fast-growing annual; direct sow after last frost; thinning is important; full sun in cool climates, afternoon shade in hot ones; harvest by pinching top leaves to prevent bolting
- Companion logic: Basil is a reasonable companion (both are heat-loving Lamiaceae relatives); Eggplant traditionally paired in Japanese cooking — shiso planted nearby provides a culinary combination at harvest
**Acceptance:**
- Page is 1600+ words
- Contains a table comparing green vs red vs Korean perilla types
- Contains ROI math including the self-seeding multi-year case
- No em dashes, no motivational closing
- `npx astro build` passes with 0 errors

---

### CE004 — Expand romanesco.md to depth standard
**Status:** `[x]`
**Files:** `src/content/plants/romanesco.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Full expansion of romanesco (*Brassica oleracea* var. *botrytis*) page. Currently 932 words.
**Details:**
- Frontmatter data: `avg_yield_lb: 2.0`, `avg_price_lb: 5.00`, `start_cost: 3.49`, companions: Garlic, Arugula
- Key content gaps: romanesco is the specific reason to grow it instead of broccoli or cauliflower — flavor (nuttier than cauliflower, less sulfurous than broccoli), the appearance (fractal spiral heads that command premium pricing), and the narrow harvest window that makes fresh home-grown superior to any store version
- Clarify taxonomy: romanesco is botanically *B. oleracea* var. *botrytis* — the same subspecies as cauliflower, not broccoli (even though it looks like green broccoli). The spiral fractal geometry is a naturally occurring mathematical pattern (approximate Fibonacci sequence in the florets), not a modern hybrid trait.
- ROI case: at $5/lb specialty grocery pricing, a 2-lb head = $10 gross value from a $3.49 seed packet. The more important price comparison: whole romanesco heads sell for $4-8 each at farmers markets and specialty grocers ($4-10/lb at retail per USDA AMS specialty vegetable data 2023-24); grocery stores rarely stock it. Home-grown is the only practical source for most people.
- Growing: long season (75-100 days), needs to be started indoors 6-8 weeks before transplant; temperature-sensitive — best flavor development happens in cool fall temperatures; spring-planted romanesco often fails because heat arrives before heads form; fall planting (transplant late July in Zone 6 for October harvest) is the reliable schedule
- Key varieties: Veronica (most available, reliable, Italian origin), Gitano (slightly more heat-tolerant), Minaret (older heirloom, more variable)
- What goes wrong: cutting the central head triggers side-shoot development but romanesco side shoots are small and irregular — less productive than broccoli for side harvest; heat causes the head to open (rice up) before reaching full size; inconsistent germination compared to cauliflower
**Acceptance:**
- Page is 1600+ words
- Contains the fall planting schedule by zone (similar to kale zone table)
- Contains ROI math vs. retail pricing with source citation
- No em dashes, no motivational closing
- `npx astro build` passes with 0 errors

---

### CE005 — Expand lemongrass.md to depth standard
**Status:** `[x]`
**Files:** `src/content/plants/lemongrass.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Full expansion of lemongrass (*Cymbopogon citratus*) page. Currently 992 words.
**Details:**
- Frontmatter data: `avg_yield_lb: 1.0`, `avg_price_lb: 5.00`, `start_cost: 3.99`, companions: Basil, Mint
- Key content gaps: lemongrass is worth growing primarily because retail stalks are consistently poor quality (dry, cracked, no fragrance) while fresh home-grown stalks have genuinely different culinary value; retail price ($4-8/lb per USDA AMS) understates the quality gap
- Taxonomy: *Cymbopogon citratus* is West Indian lemongrass, the culinary type; *C. flexuosus* is East Indian lemongrass, used more for essential oil production; both are available in US seed catalogs but *C. citratus* is what kitchen use calls for
- Perennial in zones 9-11; treated as annual or brought indoors in zones 6-8; key growing information for temperate growers: start from division (a grocery store stalk rooted in water works), not easily grown from seed; explain the economics of starting from a rooted stalk vs. potted nursery plant
- ROI case: at $5/lb, 1.0 lb yield = $5 gross vs $3.99 start cost. Modest per-season ROI. The real case is that a clump overwinters in zones 8+, divides annually, and produces 3-5 lb per mature clump (cite: University of Florida IFAS Extension, *Lemongrass* fact sheet). In zones 6-7, the economics depend on whether you bring it indoors.
- Kitchen uses: Thai curry pastes, soups (tom kha, tom yum), teas; the tender inner core is the edible part; outer leaves for tea and infusions only (too fibrous to eat)
- Growing: needs full sun, warm soil, does not tolerate frost; harvest outer stalks at soil level once the clump is established; in zones 6-8, pot it up and bring it inside before first frost; in spring, divide and replant
- Pests: essentially pest-free — the volatile oils that give lemongrass its fragrance deter most insects; this is its companion planting value
**Acceptance:**
- Page is 1600+ words
- Contains zone-specific growing strategy table (zones 6-7: annual/overwintered; zones 8+: perennial)
- Contains ROI math for both annual-treatment and perennial-treatment scenarios
- No em dashes, no motivational closing
- `npx astro build` passes with 0 errors

---

## New Plant Sprint (NP)

---

### NP001 — Write soybean.md
**Status:** `[x]`
**Files:** `src/content/plants/soybean.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Complete encyclopedia entry for soybean (*Glycine max*). The site has edamame (immature soybean harvest) but not the dry bean use case. Soybean as a dry bean crop is a distinct growing and use context.
**Details:**
- Frontmatter: name: Soybean, scientific_name: Glycine max, category: Vegetable, days_min: 75, days_max: 120, avg_yield_lb: 3.0, avg_price_lb: 3.00, start_cost: 2.99, start_cost_label: "Seed packet", is_common: true, watering: Moderate; 1 inch/week, consistent moisture critical at pod fill, sunlight: Full sun (6+ hours), companion_plants: ["Corn", "Squash"]
- Explain the edamame vs dry soybean distinction clearly: edamame is the immature green soybean harvested at 80% pod fill before the beans harden; dry soybean is the mature dried bean. Same plant, different harvest timing, different markets, different value.
- Why grow dry soybean at home? The home dry bean case: dried soybeans at grocery stores run $2-4/lb for commodity soy. Organic dried soybeans run $3-6/lb. Home-grown dry soybeans from specialty varieties (black soybeans, colored varieties unavailable commercially) can be valuable at $4-8/lb at farmers markets for specialty types. The real argument is fresh processing: fresh dry soybeans can be made into tofu, soy milk, or miso at home from known-variety beans — the quality and variety control is the value, not the raw per-pound economics.
- Cite USDA NASS for commodity soybean production data; note the commodity market is dominated by industrial production and home growers cannot compete on price for standard varieties — the value is in specialty types
- Growing: inoculate seeds with Bradyrhizobium japonicum (nitrogen-fixing bacteria) before planting for best yields; this is important for soybeans grown in soil that has never had soybeans — commercial soybean inoculant is $3-5 at seed suppliers; direct sow after last frost when soil is above 60°F
- Harvest timing for dry beans: let pods dry on the plant until they rattle; harvest before fall rains soften pods; hang entire plants upside down in a dry location; thresh by beating against inside of a barrel or rolling between palms
- Varieties worth naming: Butterbean (large, yellow), Black Jet (black soybean, good for Japanese recipes), Envy (compact, specifically bred for edamame use but can be let to mature for dry beans)
- Related crops: link to edamame and corn (Three Sisters context)
**Acceptance:**
- Page is 1600+ words
- Clearly explains edamame vs dry soybean distinction in first section
- Contains ROI math for both commodity and specialty pricing scenarios
- Frontmatter matches schema exactly
- `npx astro build` passes with 0 errors

---

## Compare Expansion Sprint (CX)

---

### CX001 — Add 12 new comparison pairs
**Status:** `[x]`
**Files:** `src/data/comparisons.ts`
**What:** Expand the pre-rendered comparison pairs from 12 to 24. The current pairs are all from common vegetables; this adds herbs, fruit, and more vegetable pairs that represent real shopper comparisons.
**Details:**
- Add these 12 new pairs to `COMPARISON_PAIRS` in `src/data/comparisons.ts`:
  - `['broccoli', 'cauliflower']` — classic substitute decision
  - `['potato', 'sweet-potato']` — high-volume starch crops
  - `['thyme', 'rosemary']` — perennial herb comparison
  - `['basil', 'parsley']` — two most common culinary herbs
  - `['blueberry', 'strawberry']` — common berry crops
  - `['garlic', 'shallot']` — allium crop comparison
  - `['mint', 'basil']` — fast-growing herb comparison
  - `['zucchini', 'cucumber']` — summer squash vs cuke
  - `['carrot', 'parsnip']` — root vegetable comparison
  - `['lettuce', 'spinach']` — cool season greens
  - `['tomato', 'cherry-tomato']` — already exists, skip; replace with `['tomato', 'hot-pepper']`
  - `['beet', 'radish']` — fast root crops
- Verify all slugs exist in `src/content/plants/` before adding (check: broccoli, cauliflower, potato, sweet-potato, thyme, rosemary, parsley, blueberry, shallot, mint, zucchini, parsnip, spinach, hot-pepper, beet, radish — all should exist)
- The static page generator (`getStaticPaths` in `compare/[...slugs].astro`) automatically pre-renders all pairs in this array; adding to the array is sufficient
**Acceptance:**
- `src/data/comparisons.ts` has 24 pairs (12 original + 12 new)
- All new slugs verified to exist in `src/content/plants/`
- `npx astro build` passes with 0 errors and generates 12 additional compare pages (282 + 12 = 294 pages, approximately)
- Each new pair page renders correctly at `/compare/[slug1]-vs-[slug2]/`

---

## Article Sprint — ROI Roundups (AR)

---

### AR001 — Write herb-roi-comparison.md
**Status:** `[x]`
**Files:** `src/content/articles/herb-roi-comparison.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Anchor article comparing the 8 highest-value culinary herbs by grocery savings, space efficiency, and maintenance level. Target: /roi/ section. 2000+ words.
**Details:**
- Category: roi
- Title: "Herb Garden ROI: The 8 Highest-Value Culinary Herbs Compared"
- Description: ~155 chars, keyword-first
- Featured: false
- publishDate: 2026-04-18
- The 8 herbs to compare (use frontmatter data as the source of truth for numbers):
  - Basil: avg_yield_lb 0.5, avg_price_lb 14.99, start_cost 3.50 → ROI multiple: 2.1×
  - Cilantro: check frontmatter
  - Parsley: check frontmatter
  - Mint: check frontmatter
  - Thyme: check frontmatter
  - Rosemary: check frontmatter
  - Chives: avg_yield_lb 0.25, avg_price_lb 8.00, start_cost 2.49
  - Dill: check frontmatter
- The article must contain an original comparison table: herb, avg_yield_lb, avg_price_lb, gross value, start_cost, net value, ROI multiple — computed from the frontmatter data
- Structure: open with the specific claim (which herb has the highest ROI and why); comparison table; deep dive on the top 3 with specific growing notes relevant to value (how to maximize yield, when to harvest to maximize price per pound); the bottom 3 and why they still make sense despite lower ROI
- Must link to at least 4 individual herb crop pages (/crops/basil/, /crops/mint/, etc.) and 1 related article
- Pull the actual frontmatter numbers from `src/content/plants/basil.md`, `cilantro.md`, `parsley.md`, `mint.md`, `thyme.md`, `rosemary.md`, `chives.md`, `dill.md` before writing
**Acceptance:**
- Page is 2000+ words
- Comparison table is present with computed ROI multiples from actual frontmatter data
- Links to at least 4 herb crop pages
- publishDate, category (roi), description, title all correct in frontmatter
- `npx astro build` passes with 0 errors


---

## New Plant Sprint 2 (NP2) — Specialty & Tree Crops

---

### P094 — thai-basil.md
**Status:** `[x]`
**Files:** `src/content/plants/thai-basil.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Plant encyclopedia entry for Thai basil (*Ocimum basilicum* var. *thyrsiflora*), a distinct species from sweet basil with anise/licorice flavor, purple stems, and significantly higher retail price per pound due to limited availability.
**Details:**
- Frontmatter: name: Thai Basil, scientific_name: Ocimum basilicum var. thyrsiflora, category: Herb, days_min: 60, days_max: 90, avg_yield_lb: 0.5, avg_price_lb: 18.00, start_cost: 3.49, start_cost_label: "Seed packet", is_common: false, watering: "Moderate; 1 inch/week", sunlight: "Full sun (6+ hours)", companion_plants: ["Tomato", "Pepper"]
- Distinguish from sweet basil clearly: Thai basil (*O. basilicum* var. *thyrsiflora*) has purple stems, stiff waxy leaves, and an anise-licorice flavor from methyl chavicol (estragole) rather than the linalool-forward flavor of sweet basil. It is a different variety — not interchangeable in Thai cooking.
- The ROI case: Thai basil retails at $2.99-4.99 per small bunch at Asian grocery stores; bunch weight is typically 2-4 oz, equivalent to $12-24/lb. The $18/lb figure is a conservative midpoint. Sweet basil by comparison: $14.99/lb. Thai basil is less available than sweet basil, which drives the premium. At a specialty grocer or natural food store, Thai basil regularly runs $20-25/lb.
- Growing notes: same cultural requirements as sweet basil — heat-loving, frost-sensitive, full sun. However, Thai basil bolts more slowly than sweet basil under heat stress. The firmer leaf structure also makes it easier to harvest cleanly. Pinch flower buds to prolong leaf production, same as sweet basil.
- Flavor chemistry: methyl chavicol (estragole) is the primary aromatic compound — same compound found in fennel and star anise. Cite Duke's Phytochemical and Ethnobotanical Databases or a peer-reviewed analysis of *O. basilicum* chemotype variation.
- Culinary uses: Thai curries (green, red, massaman), pho, larb. Distinctly different application from Italian sweet basil — not a substitute in either direction. Frame this as a specialty crop with a captive market (Asian cooking households) and limited supermarket availability.
- Include variety comparison: 'Siam Queen' (All-America Selections 1997 winner, most common; compact habit, large leaves), 'Cardinal' (ornamental, purple flowers; lower culinary yield but striking), unnamed Thai market types from Asian seed suppliers (Kitazawa Seed Co.)
- Hero image: /images/crops/thai-basil.webp
**Acceptance:**
- Page is 1600+ words
- Contains ROI calculation with sourced per-pound price
- Flavor chemistry section with named compound and citation
- Variety table with at least 3 entries
- `npx astro build` passes with 0 errors

---

### P095 — boysenberry.md
**Status:** `[x]`
**Files:** `src/content/plants/boysenberry.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Plant encyclopedia entry for boysenberry (*Rubus* ursinus x idaeus hybrid), a large trailing cane berry with exceptional flavor and poor fresh-market availability — the ROI case rests on what you can't buy.
**Details:**
- Frontmatter: name: Boysenberry, scientific_name: Rubus ursinus x idaeus, category: Fruit, days_min: 60, days_max: 90, avg_yield_lb: 4.0, avg_price_lb: 7.00, start_cost: 12.99, start_cost_label: "Bare-root cane", is_common: false, watering: "Regular; 1-1.5 inches/week", sunlight: "Full sun (6+ hours)", companion_plants: ["Garlic", "Mint"]
- Historical context: boysenberry was developed by Rudolph Boysen in the 1920s in California; Walter Knott of Knott's Berry Farm commercially popularized it in the 1930s. The berry is a complex hybrid of loganberry (itself a blackberry x red raspberry cross) with dewberry. The precise parentage is still debated in horticultural literature.
- Why you can't buy them: boysenberries have very soft fruit that bruises easily and has only a 1-2 day shelf life fresh. Commercial fresh berry distribution requires 7-10 days in the supply chain. This makes commercially grown fresh boysenberries essentially non-existent in mainstream grocery stores; most boyberry products are frozen, canned, or jam. If you want fresh boysenberries, you grow them. This is the core ROI argument — the product isn't available for comparison purchase.
- Retail price reference: frozen boysenberries at specialty stores run $6-9/lb; fresh at u-pick farms (where they exist) run $5-8/lb. USDA AMS Specialty Crop Market News doesn't carry boysenberry data consistently — cite u-pick pricing and frozen berry market as reference.
- Cane management: boysenberries produce on second-year canes (floricanes), same as blackberries. First-year canes (primocanes) are vegetative only. After harvest, remove floricanes to the ground; primocanes that fruited are done. Train new primocanes up the trellis for next year's crop. Without trellis and management, boysenberries become an impenetrable trailing mess.
- Zone range: zones 5-9. They are less cold-hardy than blackberries; primocanes need protection in zones 5-6 (cover or mulch heavily before first freeze). In zones 8-9, they thrive with minimal care.
- Yield and multi-year table: year 1 = 0 (primocanes only), year 2 = 2-3 lb/plant, year 3+ = 4-6 lb/plant as the root system matures. Build a table showing this ramp.
- Hero image: /images/crops/boysenberry.webp
**Acceptance:**
- Page is 1600+ words
- Contains cane management explanation (primocane/floricane cycle)
- Multi-year yield table (years 1-3+)
- Addresses the fresh availability argument clearly (why home-grown is the only way to get fresh boysenberries)
- `npx astro build` passes with 0 errors

---

### P096 — black-currant.md
**Status:** `[x]`
**Files:** `src/content/plants/black-currant.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Plant encyclopedia entry for black currant (*Ribes nigrum*), a high-vitamin-C shrub berry with significant legal history in the US (federal ban lifted 2003 but some states still restrict planting). The site already has currant.md (covering red and white currant); this page is specifically for *R. nigrum* and its distinct flavor, uses, and growing profile.
**Details:**
- Frontmatter: name: Black Currant, scientific_name: Ribes nigrum, category: Fruit, days_min: 90, days_max: 120, avg_yield_lb: 4.0, avg_price_lb: 10.00, start_cost: 14.99, start_cost_label: "Bare-root plant", is_common: false, watering: "Regular; 1 inch/week", sunlight: "Full sun to partial shade", companion_plants: ["Arugula", "Garlic"]
- Legal history: black currants were banned in many US states in the early 1900s because *Ribes* spp. serve as an alternate host for white pine blister rust (*Cronartium ribicola*), a fungal disease that devastated the timber industry. The federal ban was lifted in 1966 and turned over to states; many states maintained their own bans. As of 2024, most states have lifted restrictions but some northeastern and upper midwest states still regulate or restrict *Ribes* planting. Cite Cornell Cooperative Extension white pine blister rust documentation and recommend readers check their state's department of agriculture. This is important practical information — a reader could legally be restricted from growing this plant.
- Flavor and use: black currant flavor is described as intense, earthy, slightly resinous — very different from red or white currant. Used in Cassis (crème de cassis liqueur), jams, syrups, wines. The fruit contains 3-5× the vitamin C of oranges per gram (cite USDA National Nutrient Database or equivalent). In the UK, Ribena (black currant cordial) is a mainstream product; in the US, fresh black currants are rare enough to be specialty items.
- Retail pricing: fresh black currants at specialty produce markets run $8-14/lb when available. Dried black currants: $12-20/lb. Frozen: $5-8/lb. Fresh fruit at farmers markets commands the premium. Use $10/lb as a conservative midpoint.
- Growing: black currant is a multi-stemmed shrub, easier to manage than cane fruits. Produces on both one-year and two-year wood (unlike red currant which fruits mainly on spurs). Renewal pruning: cut 1/3 of oldest canes to ground annually to encourage new productive wood. Yields are consistent from year 3 onward: 3-6 lb per mature plant annually. USDA cold hardiness zones 3-6 for most varieties; needs winter chill hours.
- Varieties: 'Ben Sarek' (dwarf, very high yield, downy mildew resistant; Agriculture Canada/Scottish Crop Research Institute), 'Consort' (rust-resistant, important in areas where blister rust is a concern; Cornell Agricultural Experiment Station selection), 'Tiben' (large berry, high sugar; Czech Republic origin, widely available in US nurseries)
- Hero image: /images/crops/black-currant.webp
**Acceptance:**
- Page is 1600+ words
- Contains clear legal/restriction section with state-check recommendation
- Multi-year yield data with variety comparison table
- Flavor and use section distinguishes black currant clearly from red/white currant
- `npx astro build` passes with 0 errors

---

### P097 — chestnut.md
**Status:** `[x]`
**Files:** `src/content/plants/chestnut.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Plant encyclopedia entry for chestnut (*Castanea* spp.), a tree nut crop with a 10-20 year production horizon and compelling lifetime ROI for gardeners with land. Focus on American-Asian hybrids bred for blight resistance after the American chestnut (*C. dentata*) was functionally wiped out by chestnut blight (*Cryphonectria parasitica*) in the early 20th century.
**Details:**
- Frontmatter: name: Chestnut, scientific_name: Castanea spp., category: Fruit, days_min: 90, days_max: 120, avg_yield_lb: 20.0, avg_price_lb: 4.00, start_cost: 29.99, start_cost_label: "Bare-root tree", is_common: false, watering: "Moderate; drought tolerant once established", sunlight: "Full sun (6+ hours)", companion_plants: ["Comfrey", "Garlic"]
- Historical context (important and compelling): the American chestnut (*Castanea dentata*) was functionally eliminated from eastern North American forests between 1904 and 1940 by chestnut blight (*Cryphonectria parasitica*), an Asian fungal pathogen introduced on Japanese chestnut nursery stock imported to the Bronx Zoo. An estimated 3-4 billion trees were killed — one of the most catastrophic ecological events in North American history. The American Chestnut Foundation has been breeding blight-resistant American-Chinese hybrids since 1983. Home growers today plant primarily *C. mollissima* (Chinese chestnut), *C. crenata* (Japanese chestnut), or hybrid cultivars from the Dunstan Chestnut program (Chestnut Hill Outdoors) or USDA breeding work.
- Why the home ROI case matters: retail chestnuts run $3-6/lb fresh in fall at grocery stores; $5-8/lb at farmers markets. Most commercial US chestnut production is imported or from small specialty orchards — there is genuine market demand that home growers and small landholders can supply. A mature 15-year-old chestnut tree can yield 40-80 lb of nuts per season.
- Multi-year production table: year 1-3 = 0 (establishment), year 4-5 = 5-10 lb, year 6-8 = 10-25 lb, year 9+ = 25-50+ lb. Total 20-year ROI at $4/lb: significant. Build the table.
- Planting requirements: chestnuts require two varieties for cross-pollination (unlike most tree nuts, they are not self-fertile). Plant two different cultivars within 40-50 feet. Soil pH 5.0-6.5 — they are acid-loving and intolerant of alkaline soil or compaction. Well-drained loam or sandy loam preferred; they tolerate poor soil but not waterlogged.
- Dunstan Chestnut is the primary commercially available blight-resistant hybrid in the US; developed by Dr. Robert Dunstan in the 1950s by crossing a surviving American chestnut tree (resistant by chance) with Chinese chestnut. It is sold by Chestnut Hill Outdoors and produces large nuts with good flavor. Other sources: Nolin River Nut Tree Nursery, Burnt Ridge Nursery.
- Harvest and storage: chestnuts fall naturally when ripe (different from other tree nuts). Collect burrs from the ground; they open on their own at maturity. Do not harvest unripe. Chestnuts have high moisture content (50-60%) unlike other tree nuts — they cannot be stored at room temperature for long. Refrigerate for 1-3 months or freeze for up to 1 year. Unlike walnuts and pecans, chestnuts are primarily starch-based (not oil-based) and are used more like a grain — roasting, flour, stuffings.
- Zone range: *C. mollissima* zones 4-8; *C. crenata* zones 5-9; Dunstan hybrids zones 5-9.
- Hero image: /images/crops/chestnut.webp
**Acceptance:**
- Page is 1800+ words (tree crop warrants extra depth given long investment horizon)
- American chestnut blight history included — this is context readers need to understand the species
- Multi-year yield table (years 1-20 timeline)
- Cross-pollination requirement clearly stated (two-variety planting)
- Harvest and storage section addresses high moisture content
- `npx astro build` passes with 0 errors

---

### P098 — dragon-fruit.md
**Status:** `[x]`
**Files:** `src/content/plants/dragon-fruit.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Plant encyclopedia entry for dragon fruit / pitaya (*Selenicereus undatus*, formerly *Hylocereus undatus*), a vining tropical cactus with dramatically high retail prices and viable home production in zones 9-11 (or containers in colder zones).
**Details:**
- Frontmatter: name: Dragon Fruit, scientific_name: Selenicereus undatus, category: Fruit, days_min: 30, days_max: 50, avg_yield_lb: 10.0, avg_price_lb: 8.00, start_cost: 14.99, start_cost_label: "Cutting or plant", is_common: false, watering: "Low to moderate; drought tolerant", sunlight: "Full sun (6+ hours)", companion_plants: ["Passion Fruit", "Citrus"]
- Note: the days_min/days_max refer to time from flower to ripe fruit (30-50 days), not from planting to first fruit. First fruit typically occurs 12-18 months from a rooted cutting in good conditions, 2-3 years from seed. Clarify this in the body.
- Species note: the most common commercial variety (*S. undatus*) has white flesh; *S. costaricensis* and *S. megalanthus* have red flesh and yellow skin variants respectively. Reclassification from *Hylocereus* to *Selenicereus* was confirmed by USDA PLANTS database following phylogenetic revision (Korotkova et al., 2017, *Willdenowia*).
- The ROI case: dragon fruit retails for $5-12 per individual fruit at US grocery stores; individual fruits weigh 0.5-1.5 lb. This is $4-24/lb depending on the store and variety. USDA AMS Specialty Crop Market News shows wholesale dragon fruit at $1-3/lb for conventional imported product. The large premium at retail reflects specialty status. For red-flesh varieties ('Physical Graffiti', 'American Beauty'), prices run higher. A mature plant yields 4-6 fruiting cycles per year, each cycle producing multiple fruits per plant.
- Growing zones: viable in the ground in USDA zones 9-11 (frost-free or very light frost only). In zones 7-8, plants can survive with protection but production is reduced. In zones 4-6, container growing with overwinter indoors is required; this changes the economics significantly.
- Support structure: dragon fruit is a vining cactus that needs a sturdy trellis or post — at minimum a 6-inch diameter post set 5-6 feet tall, with a circular support platform at the top. The vine can reach 20+ feet and produce for 20-30 years. University of Florida IFAS is the primary US research source for dragon fruit production; cite their dragon fruit growing guide.
- Pollination: most common commercial varieties (*S. undatus*) are self-fertile. Some varieties require cross-pollination. Night-blooming flowers open for only one night; the window for hand-pollination (important for indoor/container plants with limited pollinators) is 10pm-2am. Use a small paintbrush to transfer pollen.
- Varieties to mention: 'American Beauty' (red flesh, self-fertile, bred for US conditions), 'Physical Graffiti' (red flesh, higher sugar, from nurseries like California Tropicals), 'Neitzel' (white flesh, reliable producer, disease-resistant for Florida conditions), 'Edgar's Baby' (smaller fruit, very productive)
- Hero image: /images/crops/dragon-fruit.webp
**Acceptance:**
- Page is 1600+ words
- Species/variety overview table with at least 3 varieties
- Container vs. in-ground growing section with zone guidance
- Pollination section including hand-pollination instructions for indoor plants
- `npx astro build` passes with 0 errors

---

### P099 — ashwagandha.md
**Status:** `[x]`
**Files:** `src/content/plants/ashwagandha.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Plant encyclopedia entry for ashwagandha (*Withania somnifera*), an Ayurvedic medicinal root crop with very high dried-root value at retail and viable production in zone 7+ as an annual or short-lived perennial.
**Details:**
- Frontmatter: name: Ashwagandha, scientific_name: Withania somnifera, category: Herb, days_min: 150, days_max: 180, avg_yield_lb: 0.5, avg_price_lb: 40.00, start_cost: 2.99, start_cost_label: "Seed packet", is_common: false, watering: "Low; drought tolerant once established", sunlight: "Full sun (6+ hours)", companion_plants: ["Garlic", "Basil"]
- The ROI case is explicit: dried ashwagandha root at bulk herb suppliers runs $20-35/lb; retail products (capsules, powders) price the root equivalent at $40-80/lb once you back-calculate from the product contents. A single plant produces 0.25-0.75 lb of fresh root, which dries to approximately 0.1-0.3 lb. At $40/lb for dried root, one plant yields $4-12 in equivalent retail value from a $0.06 in seed (typical price per seed at 50 seeds per packet). The high per-pound value makes this a legitimate homestead medicinal crop.
- Important caveat: home-grown ashwagandha root is for personal use. The root cannot be sold as a supplement without FDA compliance (GMP certification for dietary supplements). Frame clearly: grow for your own use, not for sale.
- Growing profile: ashwagandha is native to India, the Mediterranean, and North Africa. It's in the Solanaceae family (nightshade family — same as tomato, pepper, eggplant). Grown as a long-season annual in most of the US. The plant needs warm temperatures (70-95°F) and full sun; it is drought-tolerant and actually performs better in poor, well-drained soil than in rich garden soil. High fertility leads to more vegetative growth and less root development.
- Harvest: roots are harvested in late fall when the plant begins to die back after setting berries. Dig carefully — the taproot can be 12-18 inches deep. Wash roots, slice into 1/4-inch rounds, dry at 100-110°F in a dehydrator until fully dry (12-18 hours). Store in airtight glass jars. Properly dried root keeps 1-2 years.
- Zone considerations: grows as an annual in zones 5-7; perennial in zones 8-11 (plant survives winter but root is harvested in fall in all zones regardless). In zones 5-6, start indoors 6-8 weeks before last frost to get a full season.
- Safety note: ashwagandha is contraindicated in pregnancy (uterine stimulant properties documented in Ayurvedic and some clinical literature). Note this without overstating it.
- Variety note: most ashwagandha sold is unnamed or from Indian landrace populations. 'Poshita' is one commercial variety with documented higher withanolide content (the active compound class). Cite USDA or NIH National Center for Complementary and Integrative Health for basic safety/use information.
- Hero image: /images/crops/ashwagandha.webp
**Acceptance:**
- Page is 1600+ words
- ROI calculation with dried-root weight-loss factor (fresh to dry ratio)
- Soil fertility caveat (less fertility = better root)
- Pregnancy contraindication noted
- `npx astro build` passes with 0 errors

---

### P100 — wasabi.md
**Status:** `[x]`
**Files:** `src/content/plants/wasabi.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Plant encyclopedia entry for wasabi (*Eutrema japonicum*), the most expensive culinary crop by weight that's viable for home production. High fail rate, high reward, genuinely difficult to grow — don't oversell it.
**Details:**
- Frontmatter: name: Wasabi, scientific_name: Eutrema japonicum, category: Herb, days_min: 540, days_max: 720, avg_yield_lb: 0.25, avg_price_lb: 100.00, start_cost: 12.99, start_cost_label: "Rhizome or plant", is_common: false, watering: "High; constant moisture, never waterlogged", sunlight: "Partial shade (2-4 hours dappled)", companion_plants: ["Arugula", "Watercress"]
- Note on days_min/days_max: this is 18-24 months (540-720 days) from planting to a harvestable rhizome of meaningful size. This is the most important single fact about growing wasabi and must be stated clearly at the top.
- The ROI case: fresh wasabi rhizome retails for $70-160/lb in the US — it is the most expensive culinary ingredient by weight available in the American fresh produce market. Most "wasabi" in restaurants and stores is dyed horseradish paste; true *E. japonicum* rhizome is almost never available to consumers outside of high-end Japanese restaurants. A single plant yielding 0.25 lb of rhizome at $100/lb = $25 of product. That sounds modest, but the input cost is a $12.99 plant and 18-24 months of patience, not ongoing expense.
- Why it's so expensive: wasabi requires very specific conditions — consistently cool temperatures (50-70°F), high humidity, indirect light, near-constant moisture without waterlogging, and clean water. It evolved in the streamside environments of Japanese mountain forests. Commercial production in Japan is done in sawa (streamside channels) with continuously flowing cold spring water. The difficulty of replicating this environment is why fresh wasabi costs what it does.
- Home growing feasibility: achievable in zones 7-9 in a shaded, moist garden bed, or indoors under controlled conditions. The Pacific Northwest (zones 8-9 with cool, wet climate) is the best region in the continental US. Key management: shade cloth 50-70% to filter direct sun; consistent moisture from misting or drip irrigation; cool temperatures year-round (wasabi goes dormant or dies above 85°F). The plant is a close relative of arugula and watercress (all Brassicaceae).
- Plant vs. rhizome purchasing: most home growers start from plants or offsets (pups), not seeds. Seeds are difficult to germinate and slow. Commercial sources in the US: Pacific Coast Wasabi (Washington State), some specialty herb nurseries. Starting from seed takes 3+ years to harvest. Starting from a division or plant from a reliable source takes 18-24 months.
- Harvest: the rhizome (not technically a root — it's a modified stem) is ready when it reaches 2-3 cm in diameter. Grate only what you use immediately — the volatile isothiocyanate compounds that give wasabi its flavor dissipate within 15-20 minutes of grating. This is why restaurant-quality fresh wasabi cannot be replicated with any packaged product.
- After harvest, the plant produces sideshoots (kokanme) and leaves that continue to grow; harvest does not kill the plant.
- Hero image: /images/crops/wasabi.webp
**Acceptance:**
- Page is 1600+ words
- Lead clearly states 18-24 months to harvest (not buried)
- Growing conditions section explains why these requirements exist (Japanese streamside ecology)
- 15-20 minute flavor window after grating explained
- Pacific Northwest regional suitability addressed
- `npx astro build` passes with 0 errors

---

### P101 — cardoon.md
**Status:** `[x]`
**Files:** `src/content/plants/cardoon.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Plant encyclopedia entry for cardoon (*Cynara cardunculus* var. *altilis*), the artichoke's wild ancestor. Grown for its blanched leaf stalks (not the flower bud), it's a tall architectural vegetable that's almost completely absent from US grocery stores — making home growing the only practical way to eat it.
**Details:**
- Frontmatter: name: Cardoon, scientific_name: Cynara cardunculus var. altilis, category: Vegetable, days_min: 120, days_max: 150, avg_yield_lb: 3.0, avg_price_lb: 6.00, start_cost: 3.49, start_cost_label: "Seed packet", is_common: false, watering: "Regular; 1-1.5 inches/week", sunlight: "Full sun (6+ hours)", companion_plants: ["Artichoke", "Fennel"]
- Botanical relationship: cardoon is the wild ancestor of the globe artichoke (*Cynara cardunculus* var. *scolymus*). The artichoke was domesticated for its edible flower bud; cardoon was domesticated separately for its edible leaf stalks. Same species, different selection pressure over centuries of cultivation. The plant looks like a very large, thornier artichoke — it can reach 5-6 feet tall.
- What you eat: the inner leaf stalks and midribs, harvested after blanching. Blanching (wrapping or tying the plant for 3-4 weeks to exclude light) removes bitterness and whitens the stalks. Without blanching, the stalks are intensely bitter and basically inedible. This is a distinct step — not optional.
- Flavor and availability: blanched cardoon stalks taste like a cross between artichoke and celery, with a slight bitterness remaining. It is a traditional ingredient in Piedmontese bagna cauda, Christmas stews in southern France and North Africa, and Sicilian cuisine. Retail availability: essentially nonexistent outside specialty Italian grocers in major cities. Farmers market price when available: $4-8/lb. The $6/lb figure is a reasonable midpoint.
- Growing: cardoon is typically started indoors 8-10 weeks before last frost. It needs a long season (120-150 days) and does not tolerate heavy frost as a seedling, though established plants are surprisingly hardy (zone 7+ reliably, zone 6 with protection). In zones 8-10, cardoon can be grown as a perennial. In colder zones, treat as an annual.
- Blanching technique: about 3-4 weeks before intended harvest, tie the leaves together loosely around the plant into a column, then wrap with burlap, paper, or corrugated cardboard to exclude light. This etiolation process removes chlorophyll and breaks down the bitter compounds. Harvest at or just before first frost for peak tenderness.
- Culinary use section: bagna cauda preparation (anchovy, garlic, butter/olive oil sauce) as the classic pairing; cardoon gratin (traditional Christmas Eve dish in Piedmont); Moroccan tagine with cardoon and preserved lemon.
- Hero image: /images/crops/cardoon.webp
**Acceptance:**
- Page is 1600+ words
- Botanical relationship to artichoke clearly explained
- Blanching step described with specific technique (3-4 weeks, materials, method)
- Culinary uses with at least one specific preparation
- `npx astro build` passes with 0 errors

---

### P102 — catnip.md
**Status:** `[x]`
**Files:** `src/content/plants/catnip.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Plant encyclopedia entry for catnip (*Nepeta cataria*), a dual-market herb: culinary and wellness use (mild sedative tea) and pet market (cat toys, catnip spray). Growing for home use is straightforward; the ROI case covers both uses.
**Details:**
- Frontmatter: name: Catnip, scientific_name: Nepeta cataria, category: Herb, days_min: 75, days_max: 90, avg_yield_lb: 0.5, avg_price_lb: 15.00, start_cost: 2.99, start_cost_label: "Seed packet", is_common: false, watering: "Low to moderate; drought tolerant once established", sunlight: "Full sun to partial shade", companion_plants: ["Squash", "Cucumber", "Mint"]
- Botanical note: *N. cataria* is in the mint family (Lamiaceae); not to be confused with catmint (*N. mussinii* or *N. faassenii*), which is primarily ornamental, has smaller flowers, and less of the nepetalactone compound that attracts cats. Catmint is the garden perennial; catnip is the one that does something to cats.
- The cat response: nepetalactone, the primary volatile compound in *N. cataria*, binds to feline olfactory receptors and triggers a response in approximately 50-70% of cats (the response is genetic; some cats don't react). The response is non-harmful: typically 5-15 minutes of rolling, rubbing, and vocalizing, followed by a refractory period of 30 minutes during which the cat cannot be re-stimulated. Cite a peer-reviewed source: Hatch (1972), *Economic Botany*, or Bol et al. (2017), *iScience* — the latter confirmed nepetalactone activates the same opioid system as other feline chemical stimulants.
- Culinary and wellness use: the human use of catnip is as a mild sedative tea. The same nepetalactone compounds, via ingestion rather than inhalation, produce a mild calming effect in humans similar to mild chamomile. Used in Europe for centuries for insomnia and anxiety. USDA Natural Products Laboratory has documented the active compounds; cite the USDA Database of Bioactive Compounds in Plants.
- The ROI case: dried catnip retails at $10-20/lb at pet stores and $12-20/lb at herb suppliers. A productive plant yields 0.3-0.75 lb of harvestable aerial parts per season (leaves, stems, flower buds). At $15/lb, that's $4.50-11.25 per plant. Multiple plants = meaningful savings for households with cats.
- Growing: *N. cataria* is a perennial in zones 3-9. Start from seed (slow — 2-4 weeks to germinate) or division. Seedlings need protection from cats until established — cats will destroy young plants in the seedling stage. Once woody and established, the plant can tolerate cat attention better, though some protection (cages) is useful in the first season.
- Harvest: harvest aerial parts (leaves, stems, flowers) in mid-season before the plant fully flowers for highest nepetalactone content. Cut plants back by half; they will rebound for a second harvest in the same season.
- Companion planting note: catnip is documented to repel aphids, flea beetles, and squash bugs due to nepetalactone's insecticidal properties. Cornell Cooperative Extension documents catnip as a natural insect deterrent. This is the companion plant case.
- Hero image: /images/crops/catnip.webp
**Acceptance:**
- Page is 1600+ words
- Catnip vs. catmint distinction clearly made
- Nepetalactone chemistry and cat response explained with citation
- Human use (tea, calming effect) documented
- Companion planting repellent properties cited
- `npx astro build` passes with 0 errors

---

### P103 — pecan.md
**Status:** `[x]`
**Files:** `src/content/plants/pecan.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Plant encyclopedia entry for pecan (*Carya illinoinensis*), a native North American tree nut with the longest investment horizon of any food crop on the site and the highest lifetime ROI of any tree in the temperate US.
**Details:**
- Frontmatter: name: Pecan, scientific_name: Carya illinoinensis, category: Fruit, days_min: 90, days_max: 120, avg_yield_lb: 30.0, avg_price_lb: 8.00, start_cost: 39.99, start_cost_label: "Bare-root tree", is_common: false, watering: "Moderate; deep watering 2-3 times/week when young", sunlight: "Full sun (6+ hours)", companion_plants: ["Comfrey", "Garlic"]
- Note: days_min/days_max refer to the harvest window (90-120 days from nut set in late summer to harvest in fall), not from planting to first production. First meaningful harvest is typically year 6-8; full production year 10-15. This must be stated clearly.
- The scale context: pecan is the only nut tree native to North America and is commercially grown in the US on roughly 300,000 acres (USDA NASS, 2022). Georgia, New Mexico, and Texas dominate commercial production. Retail pecans run $7-14/lb in shell, $12-20/lb shelled. A mature pecan tree in production yields 50-100+ lb of in-shell nuts per season. The lifetime ROI from one $39.99 tree is staggering when the math is done out.
- Multi-year production timeline: year 1-5 = establishment, no yield; year 6-8 = 5-15 lb in a good year; year 9-12 = 20-40 lb; year 13-20 = 40-80 lb; year 20+ = 50-100+ lb. Build this as a table. Cite USDA ARS pecan production data and Texas A&M AgriLife Extension pecan program data (one of the most comprehensive extension resources on pecan in the US).
- Cross-pollination requirement: pecans are monoecious — male catkins and female flowers are on the same tree, but the pollen shed and female receptivity do not always overlap (protandrous vs protogynous types). For reliable production, plant one Type I (protandrous) and one Type II (protogynous) variety together. Without compatible pollen shed, production is significantly reduced even if the tree flowers. This is non-negotiable information.
- Varieties: Type I (protandrous, pollen shed first): 'Desirable' (primary commercial variety in the Deep South; large nuts, excellent flavor), 'Wichita' (Texas origin, high yield, smaller nut; heat tolerant). Type II (protogynous, female flowers receptive first): 'Stuart' (heirloom variety, widely available, good cold hardiness), 'Elliott' (scab-resistant, important for humid climates), 'Kanza' (northern-adapted, bred by USDA for zones 5-6; lower yield but cold hardy). Cite USDA ARS release notes for Kanza and Texas A&M variety trials for Desirable/Wichita.
- Pecan scab (*Venturia effusa*) is the primary disease issue in the eastern US — a fungal pathogen that devastates unprotected orchards in humid conditions. Scab-resistant varieties (Elliott, Kanza, Caddo) are critical in zones 6-8 east of the Mississippi. In drier western climates (New Mexico, Arizona, parts of Texas), scab pressure is lower and more varieties are viable.
- Zone range: zones 6-9 for commercial production; zone 5 with northern-adapted varieties (Kanza, Posey). The tree needs 200+ chill hours but also a long, warm growing season for nut fill — this is why production concentrates in the South.
- Zinc deficiency is the single most common nutritional problem in home-grown pecans. Symptom: rosette (small, crinkled leaves); caused by high soil pH locking up zinc. Apply chelated zinc foliar spray in early spring before budbreak. All major pecan extension resources (Texas A&M, USDA) address this.
- Hero image: /images/crops/pecan.webp
**Acceptance:**
- Page is 1800+ words (tree crop with long investment horizon warrants extra depth)
- Multi-year yield table (years 1-20+)
- Type I/Type II cross-pollination requirement clearly explained with variety examples
- Pecan scab discussion with resistant variety recommendations
- Zinc deficiency addressed
- `npx astro build` passes with 0 errors

---

## Article Sprint 2 — ROI Deep-Dives & Planning Guides (AR)

---

### AR002 — tomato-roi-deep-dive.md
**Status:** `[x]`
**Files:** `src/content/articles/tomato-roi-deep-dive.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Anchor ROI article for the tomato page. Tomato is the highest-traffic crop on the site and the single most-asked question in home gardening economics. 2500+ words covering per-plant math by variety type, actual grocery savings, and the honest cases for and against growing tomatoes.
**Details:**
- Category: roi, featured: true, publishDate: 2026-04-18
- Title: "Tomato ROI: The Math Behind Growing vs. Buying (By Variety)"
- The hook: tomato is the most common answer to "what's the best thing to grow" — but the math is not as simple as people assume. Indeterminate heirloom tomatoes at $4-7/lb at the farmers market look compelling. But a single indeterminate plant requiring 6 feet of cage space needs to yield 10+ lb just to break even on inputs. Some do. Many don't.
- Build a per-variety-type ROI table: columns are variety type (beefsteak/indeterminate, Roma/paste, cherry tomato, hybrid slicer), avg_yield_lb from frontmatter + extension data, retail price/lb (USDA AMS Specialty Crop Market News 2023), gross value, start cost (transplant vs. seed), net value per plant, net value per square foot. Include both seed-start cost and transplant cost to show break-even difference.
- Source data from the site's own crop pages: `/crops/tomato/` for slicers, `/crops/cherry-tomato/` for cherry types. Cross-reference with Cornell Small Farms Program yield data for home/market garden scale.
- Cherry tomato ROI case: cherry tomatoes are arguably the best ROI of any tomato type because the per-pound retail price is highest ($4-8/lb vs. $2-4/lb for slicers) and the yield is typically higher per square foot. A single indeterminate cherry tomato plant ('Sungold', 'Sweet Million') regularly yields 8-12 lb per season.
- Honest costs people undercount: water, fertilizer side-dress nitrogen (0.5 lb actual N per plant per season for high-yield production), cage ($5-15 that lasts 10+ years), support stake. Calculate these into a full-cost scenario vs. bare-bones scenario.
- The comparison problem: a home-grown tomato is not the same product as a grocery store tomato. Grocery tomatoes are picked at pink stage (gas-ripened in transit) to survive 7-10 days of cold chain. A garden tomato ripens on the vine. The flavor difference is real and documented. But this doesn't inflate the ROI math — address it honestly.
- Who shouldn't grow tomatoes: if you're in a zone with <120 days between last and first frost, indeterminate varieties will not reach full production. Determinates (Roma, Celebrity) are the better choice for short-season zones 3-5.
- Internal links: /crops/tomato/, /crops/cherry-tomato/, /roi/first-three-years-roi/, /roi/seeds-vs-transplants/
**Acceptance:**
- Page is 2500+ words
- Per-variety ROI table present with actual calculations
- Cherry vs. beefsteak vs. Roma comparison with specific numbers
- Full-cost vs. bare-bones input scenarios both worked out
- Zero em dashes, no motivational closing
- `npx astro build` passes with 0 errors

---

### AR003 — vegetable-value-per-square-foot.md
**Status:** `[x]`
**Files:** `src/content/articles/vegetable-value-per-square-foot.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** ROI ranking article comparing 20+ vegetables by net value per square foot — the single most useful number for optimizing a small garden. 2000+ words.
**Details:**
- Category: roi, featured: false, publishDate: 2026-04-18
- Title: "Value Per Square Foot: Which Vegetables Pay the Most for the Space They Take"
- The hook: space is the real constraint in most home gardens. If you have a 4x8 bed (32 sq ft), which crops return the most per square foot? This is a different question than ROI multiple — a crop can have a high ROI multiple but low value per square foot if it takes a lot of space. Corn, for example, looks fine on a per-stalk basis but terrible per square foot.
- Calculate value per square foot for each crop: avg_yield_lb / typical spacing (sq ft per plant) * avg_price_lb - start_cost_per_sq_ft. Use the site's own frontmatter data as the source. Pull avg_yield_lb and avg_price_lb from the site's crop data for all crops included.
- Create a master table of 20+ crops ranked by net value/sq ft: columns are crop, spacing (sq ft/plant), yield/plant, price/lb, gross value, start cost, net value, net value/sq ft.
- Expected top performers: herbs (basil, cilantro, dill, chives — high price/lb, small footprint), salad greens (lettuce, arugula, spinach — fast turnover, succession planting multiplies $/sq ft), cherry tomatoes (high value per plant but takes 4-6 sq ft). Expected bottom: corn (needs 1 sq ft per stalk, yields 1-2 ears), winter squash (8-12 sq ft, modest value), watermelon (12-20 sq ft).
- Add a "succession multiplier" column for crops where multiple plantings fit in the same sq ft in one season — arugula gets 4-5 plantings, radish gets 4-6, lettuce gets 3-4. This dramatically changes the per-season $/sq ft calculation for fast crops.
- "Best use of 32 sq ft" worked example: given one 4x8 bed, what specific crop mix maximizes annual value? Work out the actual recommendation with square footage allocations and estimated total value.
- Internal links: /roi/herb-roi-comparison/ and at least 5 individual crop pages for the top performers
**Acceptance:**
- Page is 2000+ words
- Master table with 20+ crops and calculated net value/sq ft
- Succession multiplier column or equivalent explanation
- "Best 32 sq ft" worked example with specific crop allocations
- All source data from frontmatter or cited extensions
- `npx astro build` passes with 0 errors

---

### AR004 — fruit-tree-payback-timeline.md
**Status:** `[x]`
**Files:** `src/content/articles/fruit-tree-payback-timeline.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Multi-year payback timeline comparison for 8 common fruit trees. The ROI math for trees is fundamentally different from annuals — the 20-year picture matters more than year one. 2000+ words.
**Details:**
- Category: roi, featured: false, publishDate: 2026-04-18
- Title: "Fruit Tree Payback Timeline: When Each Tree Covers Its Cost"
- The hook: a dwarf apple tree costs $35-50, produces for 15-20 years, and by year five is putting out 40-60 lb of fruit per season. The payback math is completely different from annual crops, and most people thinking about planting trees have never seen the numbers laid out clearly.
- Build a payback timeline table for 8 fruit trees: apple (dwarf), pear (dwarf), peach, plum, cherry (sweet), cherry (tart), fig, and persimmon. Columns: tree cost, year first significant production, year of break-even (cumulative value ≥ input cost), year 5 cumulative value, year 10 cumulative value, year 20 cumulative value. Use actual frontmatter data for yield and price where crops exist on the site; for crops not on the site, cite university extension yield data.
- Use current crop pages: /crops/apple/, /crops/pear/, /crops/peach/, /crops/plum/ should already exist. Pull their avg_yield_lb and avg_price_lb as the basis. For cherry and fig, check if pages exist; if not, note the sources.
- Dwarf vs. standard tree economics: dwarf trees cost more per tree, start production sooner, yield less at maturity, have shorter productive lives, and require less space. Standard trees cost less, take longer to start, yield much more at maturity, live 30-50+ years. The per-tree cost comparison is wrong — you need to compare lifetime yield. Build a simple comparison: one standard apple tree vs. three dwarf apple trees in the same square footage.
- The skip-ahead investment insight: if you plant fruit trees today and move in 5 years, you've likely harvested some fruit but not hit payback. If the next owner enjoys 20 years of production, that's value you created without capturing. This is real and worth acknowledging — tree planting is partly an act of patience or an investment in property value.
- Annual maintenance cost inputs to include in the calculation: tree dormant spray ($3-5/year for oil and copper), fertilizer ($5-10/year), pruning tools (amortized to <$2/year). These affect the break-even math.
- Internal links: individual crop pages for each tree covered
**Acceptance:**
- Page is 2000+ words
- Payback timeline table for 8 fruit trees with specific years to break-even
- Dwarf vs. standard comparison with lifetime yield math
- Annual maintenance cost factored into break-even calculation
- `npx astro build` passes with 0 errors

---

### AR005 — beginner-10-crop-starter-guide.md
**Status:** `[x]`
**Files:** `src/content/articles/beginner-10-crop-starter-guide.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Planning guide selecting the 10 best crops for a new gardener's first season — chosen for high ROI, forgiving growing requirements, and crops where garden-fresh quality noticeably exceeds store-bought. 2000+ words.
**Details:**
- Category: planning, featured: false, publishDate: 2026-04-18
- Title: "First Garden: The 10 Crops That Give New Growers the Best Chance"
- Not a generic "tomatoes and basil" list. Criteria must be explicit: (1) ROI multiple > 3×, OR store quality notably inferior, OR both; (2) Forgiving of beginner mistakes — doesn't need perfect soil, tolerates missed waterings, doesn't require complex timing; (3) Fast enough to harvest in year one without disappointment.
- Selection criteria table: list the 10 crops with the criteria score for each. Show why each made the cut.
- The 10 crops (justify each): snap peas (fast, foolproof, flavor advantage over store), cherry tomatoes (high value, forgiving, dramatic quality gap), basil (easy from transplant, high value, can't buy garden-fresh), kale (long harvest season, nutritional density, 5+ lb return), radish (25 days, morale win for beginners), green beans (direct sow, reliable, $4-6/lb fresh), zucchini (extremely productive — sometimes too productive, honest about this), lettuce (cut-and-come-again, fast return, seed is cheap), cilantro (cheap seed, high price per pound, widely used), chives (perennial starter — plant once for years of use).
- Per-crop section: each crop gets 150-200 words covering what to buy (seed or transplant), when to plant (zone-referenced), what to watch for, and expected first harvest timeline.
- What to leave out for year one: advice is as important as inclusion. Frame this clearly. Don't start with: carrots (need well-prepared deep soil, easy to fail), peppers (long season, many beginners under-yield them), corn (space-hungry, needs mass planting for pollination), melons (space, heat, timing), broccoli (caterpillar pressure, timing precision).
- One worked 4x8 bed plan: exactly what to plant in a 32 sq ft bed from this list, with spacing, and estimated season value.
- Internal links: individual crop pages for all 10 crops listed
**Acceptance:**
- Page is 2000+ words
- Selection criteria made explicit, not just a list
- "What to avoid year one" section present with reasons
- One worked 4x8 bed planting plan
- Links to all 10 crop pages
- `npx astro build` passes with 0 errors

---

### AR006 — continuous-harvest-crops.md
**Status:** `[x]`
**Files:** `src/content/articles/continuous-harvest-crops.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Planning guide identifying crops that produce continuously over weeks or months vs. crops that produce once (all at once). The distinction is important for planning garden output across a season and avoiding the glut-famine cycle. 1800+ words.
**Details:**
- Category: planning, featured: false, publishDate: 2026-04-18
- Title: "Continuous Harvest Crops: What Keeps Producing and What Gives You Everything at Once"
- The distinction: some crops produce over an extended window (pick-and-it-keeps-producing); others produce a single flush that's all done in 2-3 weeks. New gardeners often don't know which is which, then get overwhelmed with zucchini in August or wonder why their snap peas are done in three weeks.
- Create a two-column classification table: Continuous Harvest (kale, chard, basil, cherry tomatoes, beans, herbs, cut-and-come-again lettuce, chives, mint, shiso) vs. Once-and-Done (garlic, onion, potato, carrot, corn, beet, broccoli head). Add a third column: "Extendable by succession" — crops where multiple plantings solve the flush problem (lettuce, cilantro, radish, snap peas, arugula).
- For each category, explain WHY the crop behaves the way it does: cut-and-come-again crops (lettuce, kale, herbs) respond to harvest by producing new growth; indeterminate crops (tomatoes, beans) keep flowering and setting fruit as long as conditions allow; determinate crops (corn, beets) have a fixed lifecycle and all mature at once.
- Succession planting schedule section: for the key "extendable" crops, give a specific sowing schedule. Lettuce: sow every 2 weeks, April through September (shade cloth in summer). Cilantro: sow every 3 weeks, March through May; pause; resume in August for fall. Radish: sow every 2 weeks, March through October.
- The 4-season approach: a well-planned garden should have something harvestable every week from April through November (in zones 5-7). What needs to be planted when to achieve that? Build a month-by-month harvest calendar showing what's producing in each month from a well-planned garden.
- Internal links: /crops/lettuce/, /crops/kale/, /crops/cilantro/, /crops/snap-pea/, and /guides/succession-planting-calendar/ if it exists
**Acceptance:**
- Page is 1800+ words
- Continuous vs. once-and-done classification table present
- Succession planting schedule for key extendable crops
- Month-by-month harvest calendar (April through November)
- `npx astro build` passes with 0 errors

---

### AR007 — winter-garden-planning.md
**Status:** `[x]`
**Files:** `src/content/articles/winter-garden-planning.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Planning guide for extending the growing season into late fall and winter using cold-hardy crops, row cover, cold frames, and unheated hoop houses. Specific to zones 5-8; clearly differentiated by zone. 2000+ words.
**Details:**
- Category: planning, featured: false, publishDate: 2026-04-18
- Title: "Winter Garden Planning: What Grows Cold, How Cold, and How to Extend It"
- The hook: most gardeners stop in October. A significant portion of the cold-season vegetable calendar is being left unharvested. In zone 6, spinach overwintered under a cold frame is alive and producing in March — before the outdoor soil has thawed.
- Frame the article around the "four layers of cold protection" and what each enables, by zone:
  1. No protection: crops that survive hard frost in the open ground (spinach to 20°F, mache to 0°F, kale to 15-20°F, arugula to 20-25°F, leeks to 0-10°F) — cite Eliot Coleman's *Four Season Harvest* and *The Winter Harvest Handbook* for zone hardiness data on winter vegetables
  2. Row cover (floating row cover, 4-6°F protection): extends tender crops 4-6 weeks into fall; allows cold-tolerant crops to produce later and recover faster in spring
  3. Cold frame (8-15°F protection): enables spinach, arugula, mache, lettuce to produce through zone 6-7 winter; most growth occurs on sunny days even in December-January
  4. Unheated hoop house (15-20°F protection): genuine four-season production in zones 5-6; crops that would be frozen outdoors are actively growing
- Zone-specific planting calendar: what to plant by last planting date for each protection level, by zone (5, 6, 7, 8). A table: crop, last outdoor sowing date by zone, last cold-frame sowing date, expected harvest window. This is the actionable core of the article.
- The ROI case for winter extension: a cold frame built from scrap lumber and an old window costs $0-30 and adds 4-6 weeks on each end of the season. What does that translate to in food? Spinach in November and March = additional 20-30 lb at $4-6/lb from a $15 investment.
- Key crops for winter production: spinach (most productive under cold frames), mache/corn salad (the most cold-hardy salad green — tolerates temperatures near 0°F and produces through winter in cold frames), kale, arugula, claytonia/winter purslane, overwintered garlic (planted fall, harvested following summer). Cite ATTRA (*Season Extension Techniques for Market Gardeners*) for production specifics.
- Internal links: /crops/spinach/, /crops/kale/, /crops/arugula/, /crops/lettuce/
**Acceptance:**
- Page is 2000+ words
- Four layers of cold protection framework clearly explained
- Zone-differentiated planting calendar table (zones 5-8)
- Cold frame ROI calculation present
- Key crops for each protection level identified
- `npx astro build` passes with 0 errors

---

### AR008 — pest-id-treatment-thresholds.md
**Status:** `[x]`
**Files:** `src/content/articles/pest-id-treatment-thresholds.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Care guide covering identification and treatment thresholds for the 12 most economically significant vegetable garden pests. Structured around IPM (Integrated Pest Management) principles — the goal is not zero pests, it's knowing when the economic cost of damage exceeds the cost of intervention. 2000+ words.
**Details:**
- Category: care, featured: false, publishDate: 2026-04-18
- Title: "Garden Pest ID and Treatment Thresholds: When to Act, When to Wait"
- The hook: not every pest sighting requires action. A few aphids on a tomato plant will be handled by the parasitic wasps already in your garden if you wait 48 hours. Spraying kills both. Understanding when damage actually affects yield — the concept of the economic injury level from IPM — is the skill most home gardeners lack.
- Explain IPM briefly: Integrated Pest Management is the framework developed by university extension systems and USDA NRCS for making treatment decisions based on pest population levels and damage thresholds, not on zero-tolerance. The key concept is the Economic Injury Level (EIL) — the pest density at which control measures are cost-justified. Cite UC Davis IPM Program as the primary reference.
- Build an identification and threshold table for 12 pests: pest name (common + scientific), crops affected, identification description, treatment threshold (what level of damage/population justifies action), and first-line response. The 12 pests:
  1. Aphids (multiple species) — broad; 25+ per growing tip before treatment typically justified; water spray first
  2. Tomato hornworm (*Manduca quinquemaculata*) — Solanaceae; any large hornworm on a small plant is threshold; hand-pick; note the white parasitic wasp eggs
  3. Squash vine borer (*Melittia cucurbitae*) — Cucurbits; prevention only (row cover before moths arrive); treatment after entry is too late
  4. Cabbage worm / imported cabbageworm (*Pieris rapae*) — Brassicas; Bt (Bacillus thuringiensis) works if applied while caterpillars are small; row cover prevents completely
  5. Cucumber beetle (striped: *Acalymma vittatum*; spotted: *Diabrotica undecimpunctata*) — cucurbits; vector for bacterial wilt so threshold is lower than damage alone suggests
  6. Colorado potato beetle (*Leptinotarsa decemlineata*) — Solanaceae; hand-pick adults and egg masses; Bt effective against young larvae; develops pesticide resistance extremely fast — avoid repeated pyrethroid use
  7. Flea beetles (*Altica* spp. and others) — brassicas, eggplant; heavy damage in seedling stage; row cover most effective; plants typically outgrow moderate damage
  8. Whitefly (*Trialeurodes vaporariorum*) — broad; yellow sticky traps monitor populations; insecticidal soap for control; avoid broad-spectrum insecticides that kill parasitic wasps
  9. Spider mites (*Tetranychus urticae*) — triggered by hot, dry conditions; strong water spray most effective; neem oil works
  10. Slugs (*Deroceras reticulatum* and others) — broad; iron phosphate bait (Sluggo) is effective and safe around pets and wildlife
  11. Cutworms (various *Agrotis* spp.) — seedlings; collar around transplant stem prevents most damage; Bt soil drench effective
  12. Japanese beetle (*Popillia japonica*) — broad; grub treatment in lawn in July-August; adult hand-picking on high-value crops; avoid pheromone traps (attract more than they catch)
- Internal links: individual crop pages for the main crops affected
**Acceptance:**
- Page is 2000+ words
- IPM/EIL concept explained in the lead
- Pest identification table with 12 entries (common name, scientific name, threshold, first response)
- Row cover recommended for preventable pests (SVB, cabbageworm)
- `npx astro build` passes with 0 errors

---

### AR009 — dehydrator-roi.md
**Status:** `[x]`
**Files:** `src/content/articles/dehydrator-roi.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Homestead ROI analysis for a food dehydrator — when does the appliance pay for itself, which crops yield the best dehydration ROI, and what's the honest math on dried herbs vs. store-bought dried herbs. 2000+ words.
**Details:**
- Category: homestead, featured: false, publishDate: 2026-04-18
- Title: "Dehydrator ROI: When the Appliance Pays for Itself and Which Crops Make It Worth It"
- Equipment costs: entry-level dehydrator (Cosori, Nesco Snackmaster, Excalibur 4-tray) $60-100. Mid-range (Excalibur 9-tray) $200-300. Commercial-grade entry ($500+). The article should focus on the $60-120 range that most home users buy.
- Operating cost: a 500-watt dehydrator running for 8 hours costs approximately $0.40-0.60 in electricity at $0.10-0.15/kWh national average (cite EIA national average residential electricity rate). This is often ignored in ROI calculations — factor it in.
- Payback calculation framework: dehydrator cost ÷ (savings per batch) = batches to break even. Work through specific crop examples.
- Build a crop-by-crop dehydration ROI table: crop, fresh yield input (lbs), dehydrated output (lbs, weight loss factor), equivalent retail dried product value, electricity cost per batch, net value per batch, batches to break even on a $80 dehydrator. Include:
  - Herbs (basil, thyme, oregano, dill): weight loss 90%; retail dried herbs $10-40/oz = $160-640/lb. One batch of fresh basil from the garden → $8-15 of dried basil equivalent.
  - Tomatoes (sun-dried/semi-dried): weight loss 85-90%; retail sun-dried tomatoes $8-15/lb dried. 10 lb fresh → 1-1.5 lb dried → $8-22 value.
  - Hot peppers (dried cayenne, paprika): weight loss 80-85%; retail ground dried pepper $8-20/lb. 5 lb fresh → 0.75-1 lb dried.
  - Mushrooms: weight loss 90-95%; retail dried mushrooms (not shiitake, which require logs — focus on chanterelle or oyster if growing, or purchased in season) $15-30/lb dried.
  - Elderberries: weight loss 75-80%; retail dried elderberries $10-20/lb. Covered in elderberry page, cross-reference.
  - Fruit leather (strawberry, apple, plum): less dramatic ROI but high utilization value for harvest gluts.
- The herb math is where the appliance pays back fastest: a single batch of homegrown basil, thyme, and oregano processed together can produce $30-50 of dried herb equivalent in one 6-8 hour run. The dehydrator pays back in 2-4 batches.
- What doesn't make economic sense to dehydrate: anything where dried equivalents are cheap (carrots, onions, commercial dried vegetables — retail $1-3/lb); anything where the fresh product is more valuable than the dried (fresh berries vs. dried berries, for example).
- Internal links: /crops/basil/, /crops/tomato/, /crops/elderberry/, /crops/hot-pepper/
**Acceptance:**
- Page is 2000+ words
- Crop-by-crop dehydration ROI table with weight loss factors and retail value comparisons
- Electricity operating cost factored in
- Payback calculation worked for at least 3 crop scenarios
- `npx astro build` passes with 0 errors

---

### AR010 — harvest-glut-triage.md
**Status:** `[x]`
**Files:** `src/content/articles/harvest-glut-triage.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Practical homestead guide for what to do when everything produces at once — prioritizing which crops to process first, which to give away, which to freeze, which to dehydrate, and which to just eat. Organized as a decision framework, not a generic list. 1800+ words.
**Details:**
- Category: homestead, featured: false, publishDate: 2026-04-18
- Title: "Harvest Glut Triage: What to Process First, What to Give Away, What to Let Go"
- The hook: the glut moment is real. You planted eight zucchini plants in May and by July you have more than you can use, your neighbors won't take your calls, and half the zucchini are the size of a child's baseball bat. This is a planning failure, but since the zucchini are here now, what's the best thing to do?
- The triage principle: not all surplus is worth the same effort to preserve. The framework is:
  1. What will rot soonest? (Process immediately: tomatoes, berries, green beans)
  2. What stores well without any processing? (Leave alone for now: winter squash, onions, garlic, potatoes)
  3. What is highest value if preserved? (Prioritize processing: herbs, hot peppers, elderberries)
  4. What is lowest value per hour of preservation work? (Zucchini: give away or compost; the processing time doesn't justify it unless you're making zucchini bread in quantity)
- Crop-specific triage matrix: for 15+ common glut crops, what to do: zucchini (give away/compost, or shred and freeze for baking, 10 minutes/lb); cucumber (pickle or give away — fresh cucumbers don't store); tomatoes (sauce/paste/freeze whole, high value per hour); basil (make pesto and freeze in ice cube trays, or dry — most value preserved); green beans (blanch and freeze, easy, worth doing); hot peppers (dry or pickle, high value); winter squash (cure and store, no processing needed); garlic (braid and hang, no processing needed); herbs generally (dry or freeze).
- Batch cooking section: when the volume is large enough to justify cooking time, what's the most efficient path? Roasting a sheet pan of tomatoes and freezing the puree takes 20 minutes of active work per 5 lb of tomatoes. Canning whole tomatoes takes 2 hours. The time investment is a real variable.
- What to give away and what not to bother: honest advice. Zucchini by the bushel, food banks often don't want large quantities of produce they can't store. Better targets: neighbor with no garden, local Buy Nothing group, church potluck. Don't feel obligated to process everything.
- The planning fix: briefly address the root cause — growing 8 zucchini plants when 2 would have served the household adequately. The glut triage guide is a symptom of a planning problem. Connect to succession planting and right-sizing guides.
- Internal links: /roi/dehydrator-roi/, /crops/tomato/, /crops/zucchini/, /crops/basil/, /crops/hot-pepper/
**Acceptance:**
- Page is 1800+ words
- Triage framework clearly stated (4 questions, in order)
- Crop-specific triage matrix for 15+ crops
- Time-per-pound estimates for key preservation methods
- `npx astro build` passes with 0 errors

---

### AR011 — berry-roi-comparison.md
**Status:** `[x]`
**Files:** `src/content/articles/berry-roi-comparison.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** ROI comparison of the four main home garden berries — strawberry, raspberry, blueberry, blackberry. Covers startup cost, years to full production, yield, retail price, and 5-year cumulative ROI. 2000+ words.
**Details:**
- Category: roi, featured: false, publishDate: 2026-04-22
- Title: "Berry Patch ROI: Strawberry, Raspberry, Blueberry, and Blackberry Compared"
- Description: 150-160 chars
- Key data per berry: strawberry ($20-30 for 25 bare-root crowns, year 1 production, 0.5-1 lb/plant, $3-5/lb retail); raspberry (bare cane $3-5 each, year 2 production, 1-2 qt/cane/season, $4-6/pt or $8-12/lb retail); blueberry (need 2+ varieties for cross-pollination, $15-25/plant, year 3-4 production, 5-10 lb/mature bush, $4-6/pt or $3-5/lb retail); blackberry ($8-15/plant or $2-4 for root cuttings, year 2 production, 10-20 lb/mature cane cluster, $4-8/pt or $5-8/lb retail)
- Build a 5-year cumulative ROI table for each berry showing: year, investment (plants + soil amendment + mulch), yield lb, gross value, cumulative net
- Blueberry soil prep cost is a real variable — they require pH 4.5-5.5 which often means sulfur amendments and peat moss ($20-50 extra); this must be in the cost model
- Raspberry primocane/floricane management affects yield dramatically — everbearing vs. summer-bearing math differs
- Strawberry's "replace every 3 years" model changes the long-run math vs. other berries that are semi-permanent plantings
- Blackberry's aggressive spreading is a management cost or benefit depending on the gardener
- Sources: USDA NASS fruit price data; university extension yield data (Cornell, OSU, NC State small fruit guides)
- Internal links: /crops/strawberry/, /crops/raspberry/, /crops/blueberry/, /crops/blackberry/
**Acceptance:**
- 2000+ words
- 5-year cumulative ROI table for all 4 berries
- Soil prep costs included for blueberry
- `npx astro build` passes

---

### AR012 — pepper-roi-analysis.md
**Status:** `[x]`
**Files:** `src/content/articles/pepper-roi-analysis.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** ROI analysis of hot peppers with emphasis on value-added processing: fresh vs. dried vs. ground vs. fermented hot sauce. Shows how drying multiplies value 5-8x. 2000+ words.
**Details:**
- Category: roi, featured: false, publishDate: 2026-04-22
- Title: "Hot Pepper ROI: Fresh, Dried, and Fermented Value Compared"
- Description: 150-160 chars
- Fresh retail prices (USDA AMS): jalapeños $2-4/lb; cayenne $3-6/lb; serrano $3-5/lb; Thai chili $4-8/lb; habanero $5-10/lb
- Dried retail prices: dried cayenne $15-30/lb; ground paprika $8-20/lb; dried hot pepper flakes $12-25/lb; whole dried chilis $10-20/lb
- Drying weight loss: 85-90% (10 lb fresh → 1-1.5 lb dried); so 10 lb cayenne worth $30-60 fresh → 1.25 lb dried worth $19-38 BUT uses 10x less storage space and lasts 1-2 years
- Fermented hot sauce: small-batch artisan hot sauce at farmers markets $8-15 per 5 oz bottle; home production cost ~$0.50-1.00/bottle from homegrown peppers
- Yield data: cayenne 50-100 peppers per plant (1-2 lb fresh); jalapeño 25-35 per plant (1-1.5 lb); habanero 50-100 per plant (0.5-1 lb); Thai chili 100-200 per plant (0.5-1 lb)
- Build table: variety, plants needed for 1 lb dried, seed cost, yield lb fresh per plant, equivalent dried oz, retail dried value, seed-to-shelf ROI multiple
- Paprika section: sweet paprika is a distinct processing use case; 10 lb fresh red peppers → 1 lb dried paprika powder; retail paprika $8-15/lb; home-grown paprika is a meaningful kitchen product
- Sources: USDA AMS Specialty Crop Market News; NC State Extension pepper production guide
- Internal links: /crops/hot-pepper/, /crops/sweet-pepper/, /roi/dehydrator-roi/
**Acceptance:**
- 2000+ words
- Value table comparing fresh vs. dried vs. fermented economics
- Drying weight loss factored explicitly
- `npx astro build` passes

---

### AR013 — root-vegetable-roi.md
**Status:** `[x]`
**Files:** `src/content/articles/root-vegetable-roi.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** ROI comparison of the 5 main root vegetables: carrot, beet, parsnip, turnip, radish. Per-sq-ft yield, retail price, seed cost, days to harvest. Includes a quick-turn/slow-turn analysis. 1800+ words.
**Details:**
- Category: roi, featured: false, publishDate: 2026-04-22
- Title: "Root Vegetable ROI: Carrot, Beet, Parsnip, Turnip, and Radish Compared"
- Description: 150-160 chars
- Data per crop: carrot (70-80 days, 1-2 lb/sq ft, $1.50-2.50/lb retail, $2.49 seed packet covers 100+ row feet); beet (50-70 days, 1.5-2.5 lb/sq ft, $1.50-2.50/lb retail, dual harvest: greens + roots); parsnip (100-120 days, 1-1.5 lb/sq ft, $2-4/lb retail, frost-sweetened); turnip (45-60 days, 1.5-2.5 lb/sq ft, $1-2/lb retail, dual harvest: greens worth $3-5/lb); radish (25-35 days, 0.5-1 lb/sq ft, $1.50-3/lb retail, fastest payback per day)
- Radish is unique: 25-30 days from seed to harvest means 4-5 successions per season in a single bed; calculate annualized ROI per sq ft accounting for turnover rate
- Parsnip's 100+ day timeline is the slowest but retail price is highest; worth growing only if you're patient and have the bed space
- Beet greens: retail value $3-5/lb for beet greens (sold separately at grocery stores/farmers markets); a crop that produces both roots and greens has higher effective $/sq ft
- Soil prep note: all root vegetables need deep, loose, rock-free soil; raised beds with amended soil significantly outperform clay; factor in the raised bed infrastructure cost or soil amendment cost (link to raised-bed-break-even.md)
- Build comparison table: crop, days to harvest, yield lb/sq ft, retail $/lb, seed cost, gross value/sq ft, successions possible/season, annualized gross value/sq ft
- Sources: USDA AMS prices; university extension yield data
- Internal links: /crops/carrot/, /crops/beet/, /crops/radish/, /crops/turnip/, /crops/parsnip/
**Acceptance:**
- 1800+ words
- Comparison table with annualized gross value per sq ft
- Radish succession math worked out
- `npx astro build` passes

---

### AR014 — microgreens-roi.md
**Status:** `[x]`
**Files:** `src/content/articles/microgreens-roi.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** ROI analysis of growing microgreens — the indoor, 7-14 day crop that retails for $20-40/lb at farmers markets. Covers seed cost, tray cost, light cost, yield, and break-even. 1800+ words.
**Details:**
- Category: roi, featured: false, publishDate: 2026-04-22
- Title: "Microgreens ROI: The 14-Day Crop That Returns $25 a Pound"
- Description: 150-160 chars
- What microgreens are: seedlings harvested at the cotyledon or first true leaf stage, typically 7-14 days after germination; not the same as sprouts (which are grown in water without soil)
- Key crops and retail prices: sunflower microgreens $20-35/lb; pea shoots $15-25/lb; radish microgreens $20-30/lb; broccoli microgreens $25-40/lb (sulforaphane content drives premium); basil microgreens $30-50/lb; amaranth $20-35/lb
- Growing inputs: 10"×20" tray holds 1-2 oz of seed for most crops; seed costs $0.10-1.00 per tray depending on crop; potting medium $0.20-0.50/tray; water negligible; light cost if using grow lights: a 24W LED strip running 16 hrs/day = $0.04/day = $0.56/10-day grow cycle
- Yield per 10"×20" tray: 4-8 oz of finished microgreens depending on crop; at $20-35/lb that's $5-11 per tray
- Break-even: a basic setup (10 trays, LED light strip, growing medium) costs $50-100; payback in 10-20 trays worth of production
- Honest limits: microgreens require consistent attention (daily misting or bottom watering), don't store well after harvest (3-7 day fridge life), and the retail price assumes you're selling them or using them vs. buying them at farmers market prices ($4-8 per 2oz clamshell). Home use case is different from commercial case.
- Build table: crop, seed cost/tray, days to harvest, yield oz/tray, retail $/lb, gross value/tray, net value/tray, net value/sq ft/year (based on continuous production)
- Sources: USDA specialty crop market data; Johnny's Seeds microgreen trial data; Cornell extension indoor production
- Internal links: /crops/radish/, /crops/basil/, /crops/sunflower/
**Acceptance:**
- 1800+ words
- Per-tray economics table with net value
- Home use vs. commercial use distinction made explicit
- `npx astro build` passes

---

### AR015 — salad-greens-roi.md
**Status:** `[x]`
**Files:** `src/content/articles/salad-greens-roi.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** ROI comparison of growing salad greens vs. buying pre-washed clamshell mix. Covers lettuce, arugula, spinach, mache, and mesclun mix. Includes a cut-and-come-again yield model. 1800+ words.
**Details:**
- Category: roi, featured: false, publishDate: 2026-04-22
- Title: "Salad Mix ROI: Growing Your Own vs. $5 Clamshell Kits"
- Description: 150-160 chars
- Retail reference point: 5 oz clamshell salad mix at grocery store $3.99-5.99 = $12.77-19.17/lb; organic spring mix $6.99-8.99 per 5oz = $22-29/lb — this is the benchmark to beat
- Cut-and-come-again model: leaf lettuce, arugula, spinach, and mache all regrow after cutting; a 4×4 ft bed planted densely yields multiple cuts per season; model 4-6 harvests of 0.5-1 lb each from a single planting = 2-6 lb per season per 4×4 bed
- Succession strategy: cool-season greens (spinach, mache, arugula) for spring and fall; heat-tolerant lettuce varieties and basil microgreens bridging summer; the goal is 9-10 months of salad production in zones 5-7
- Per-crop data: leaf lettuce (30-45 days, $0.99-1.99 seed packet, 0.5-1 lb/sq ft per cut, $1.50-3/lb retail loose); arugula (30-40 days, $1.99-2.99 seed packet, 0.5-1 lb/sq ft per cut, $4-8/lb retail); spinach (40-50 days, $1.99-2.99 seed packet, 0.5-1 lb/sq ft, $2-4/lb retail); mache (45-70 days, $2.49-3.49 seed packet, 0.25-0.5 lb/sq ft, $8-15/lb retail — tiny seeds, premium price)
- Mache is the highest-value salad green by retail price per pound and almost never available outside farmers markets and specialty grocers; worth highlighting
- A household eating one 5oz salad serving per person 4x/week for 2 people = 2.5 lb/week = ~100 lb/year of salad greens; at $12/lb average retail = $1,200/year in salad spending — the comparison number
- A 4×4 bed with succession planting can provide 20-30% of that if actively managed
- Sources: USDA AMS retail prices; Cornell vegetable growing guides; Johnny's salad growing guide
- Internal links: /crops/lettuce/, /crops/arugula/, /crops/spinach/, /crops/mache/
**Acceptance:**
- 1800+ words
- Comparison table: home grown $/lb vs retail $/lb for each green
- Annual household salad spend vs. garden equivalent section
- `npx astro build` passes

---

### AR016 — freeze-dryer-roi.md
**Status:** `[x]`
**Files:** `src/content/articles/freeze-dryer-roi.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** ROI analysis of home freeze dryers ($2,500-4,000) vs. dehydrators, freezers, and canning. When the expensive appliance makes sense, when it doesn't. 2000+ words.
**Details:**
- Category: roi, featured: false, publishDate: 2026-04-22
- Title: "Freeze Dryer ROI: When a $3,000 Appliance Pays Off"
- Description: 150-160 chars
- Equipment cost: Harvest Right small ($2,495 MSRP, 7-10 lb/batch capacity); medium ($3,195, 10-15 lb/batch); large ($3,995, 18-27 lb/batch). These are the dominant consumer brand. No meaningful competition at home scale.
- Operating cost: freeze dryer draws 110V, 9 amps during freeze phase, less during dry; roughly 1-2 kWh per pound processed; at $0.13/kWh national average = $0.13-0.26/lb in electricity. A 10 lb batch costs $1.30-2.60 in electricity to process.
- Freeze-dried retail value: strawberries $25-40/lb; raspberries $30-50/lb; blueberries $20-35/lb; mixed vegetables $15-25/lb; herbs (dill, basil, chives) $40-80/lb. Compare to dehydrated prices: freeze-dried commands a 2-4x premium because texture is preserved.
- The weight loss factor: freeze-drying removes ~95% of moisture vs. dehydrating's 85-90%; a 10 lb batch of strawberries → 0.5 lb freeze-dried. At $35/lb retail, that's $17.50 of product from 10 lb of fresh berries ($3-5/lb retail = $30-50 raw input). The value isn't in the retail comparison — it's in preservation quality and shelf life.
- Shelf life case: freeze-dried food lasts 20-25 years sealed vs. 1-2 years dehydrated vs. 6-12 months frozen; the ROI argument for freeze-drying is long-term food security, not cost savings in a conventional sense
- Break-even math: $2,495 machine ÷ ($17.50 net value per batch) = 143 batches to break even, assuming you value the output at retail freeze-dried prices. At 1 batch/week for 6 months/year = 26 batches/year; payback in 5.5 years. At 2 batches/week = payback in 2.75 years.
- Honest comparison: a chest freezer at $200 preserves 400+ lb of garden produce per year and pays back in one season. A dehydrator at $80 pays back in 2-4 batches. A freeze dryer is a serious long-term investment that only makes sense for high-volume gardeners processing premium crops consistently.
- Who it makes sense for: households preserving 200+ lb of produce annually; anyone prioritizing 20-year shelf life over short-term savings; households growing premium berries and herbs at scale
- Sources: Harvest Right MSRP; EIA electricity price data; USDA AMS freeze-dried retail prices
- Internal links: /roi/dehydrator-roi/, /roi/fruit-tree-payback-timeline/, /crops/strawberry/, /crops/raspberry/
**Acceptance:**
- 2000+ words
- Break-even calculation with batch count and years
- Explicit comparison to dehydrator and chest freezer alternatives
- `npx astro build` passes

---

### AR017 — summer-garden-planning.md
**Status:** `[x]`
**Files:** `src/content/articles/summer-garden-planning.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Planning guide for the summer garden — what to direct-sow after spring crops, how to manage heat stress, which crops need to come out and which go in. Companion to spring/fall/winter planning articles. 1800+ words.
**Details:**
- Category: planning, featured: false, publishDate: 2026-04-22
- Title: "Summer Garden Planning: Succession After Spring, Heat Management, and the August Reset"
- Description: 150-160 chars
- The planning problem this solves: many gardeners have a productive spring, then the garden stalls or dies back in July heat, then they don't replant for fall until it's too late. This article closes that gap.
- Summer crop categories: (1) true heat lovers that need to go in now — tomatoes, peppers, eggplant, basil, okra, sweet potatoes; (2) succession fills — second planting of cucumbers, summer squash, green beans for fall harvest; (3) the "August reset" — pulling bolted spring crops and seeding fall brassicas (kale, broccoli, cabbage), fall lettuce, carrots, beets — timing is 8-10 weeks before first frost
- Zone-differentiated summer start dates: zone 5-6 last frost May 15-30, heat crops set out after that, August reset starts Aug 1-15; zone 7-8 last frost April 1-15, heat crops in earlier, August reset starts Aug 15-Sept 1; zone 9-10 different altogether — winter garden is the productive season, summer is the slow season
- Heat stress management: soil temps above 95°F inhibit root growth; mulching with 3-4" straw or wood chips keeps soil temps 10-20°F cooler; shade cloth 30-40% for lettuce and spinach extends spring crops into early summer by 2-3 weeks
- Succession timing math: cucumber 50-60 days to harvest; planted July 15 in zone 6 = harvest Sept 15-Oct 1, ahead of first frost Oct 15-20. Green beans 50-55 days; planted July 20 = harvest Sept 10-15. These succession plantings are often ignored but can double fall yield.
- The August 1 window: this is the most commonly missed planting date. Broccoli transplants set out Aug 1-10 in zones 5-6 mature in 60-80 days = Oct 1-20, right at fall harvest timing. Same for cauliflower, cabbage, kale.
- Sources: Cornell extension; OSU extension succession planting guides; university NRCS zone data
- Internal links: /planning/spring-garden-planning/, /planning/fall-garden-planning/, /planning/winter-garden-planning/, /planning/succession-planting-calendar/
**Acceptance:**
- 1800+ words
- Zone-differentiated planting calendar (at minimum zone 5-6, 7-8)
- August reset section with specific days-to-harvest math
- `npx astro build` passes

---

### AR018 — tomato-training-guide.md
**Status:** `[x]`
**Files:** `src/content/articles/tomato-training-guide.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Care guide on pruning and training tomatoes — specifically the yield and quality impact of different management styles for indeterminate vs determinate types. Data-backed, not just technique description. 1800+ words.
**Details:**
- Category: care, featured: false, publishDate: 2026-04-22
- Title: "Pruning and Training Tomatoes: Indeterminate vs. Determinate Management and the Yield Data"
- Description: 150-160 chars
- The core distinction: indeterminate tomatoes keep growing and producing until frost (most heirlooms, cherry tomatoes, most slicers); determinate tomatoes set a fixed number of fruit, ripen them over 2-3 weeks, then stop (most paste tomatoes, many bred for commercial harvest)
- Why this matters for management: indeterminate plants benefit from pruning suckers and single-stem or two-stem training to concentrate energy into fruit; determinate plants are often best left alone (pruning removes fruit-bearing nodes)
- Sucker pruning yield data: Penn State Extension trials show single-stem indeterminate tomatoes produce 10-20% fewer total fruits but 15-25% larger individual fruits vs. unpruned plants; for cherry tomatoes, pruning rarely makes sense because small fruit size is the point; for slicers and beefsteaks, larger individual fruit has higher value per unit
- Trellising systems: stake + string (Florida weave), cage, trellis wire, or single stake — structural comparison with cost and yield implications
- Soil temperature and transplant timing note: tomatoes set out when soil is below 55°F show yellowing and stunted growth; soil temp at 65°F+ is the correct target for transplanting, not just air temp after last frost
- Disease management through training: good air circulation (from proper pruning and spacing) reduces early blight (*Alternaria solani*) and Septoria leaf spot (*Septoria lycopersici*) incidence; dense, unpruned plants retain moisture and create conditions for disease; the yield argument for pruning is partly disease avoidance, not just fruit size
- The practical case: a 4-ft cage takes 10 minutes to install and zero maintenance; single-stake with weekly tying takes 30 minutes total per plant per season; for 4 plants, the extra time investment is 80 minutes for potentially 15-20% larger fruit — worth it for beefsteak, not worth it for cherry
- Sources: Penn State Extension tomato production guide; NC State Extension disease management; Rutgers cooperative extension
- Internal links: /crops/tomato/, /crops/cherry-tomato/, /roi/tomato-roi-deep-dive/
**Acceptance:**
- 1800+ words
- Explicit comparison table: single-stem vs. unpruned indeterminate yield and fruit size data
- Determinate vs indeterminate distinction made clear early
- `npx astro build` passes

---

### AR019 — medicinal-herb-garden.md
**Status:** `[x]`
**Files:** `src/content/articles/medicinal-herb-garden.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Homestead article on growing herbs for tea, tinctures, and medicinal use. Honest about evidence, focused on what actually has documented use and retail value. 2000+ words.
**Details:**
- Category: homestead, featured: false, publishDate: 2026-04-22
- Title: "Medicinal and Tea Herb Garden: What's Worth Growing, What Evidence Exists"
- Description: 150-160 chars
- Tone note: honest and evidence-graded. Do not make unsupported medical claims. Grade each herb's evidence: "traditional use documented" vs "clinical trial evidence exists" vs "well-established mechanism." Never claim to treat or cure anything.
- Herbs worth growing with retail value context: chamomile ($12-25/lb dried; clinical trial evidence for mild anxiolytic effect — cite meta-analysis); lemon balm ($8-18/lb dried; evidence for mild sedative and antiviral properties in vitro); peppermint ($8-15/lb dried; well-established mechanism for digestive symptoms, IBS — cite NIH); lavender ($15-30/lb dried; aromatherapy evidence for anxiety; culinary use too); echinacea ($12-22/lb dried; mixed evidence for immune function; most studied herb after St. John's Wort); valerian ($10-20/lb dried; sleep research, mixed results); ashwagandha ($15-30/lb dried; adaptogen, cortisol evidence building)
- Tea herb economics: a pound of dried chamomile makes ~180-200 cups of tea at a standard 2g/cup; $15/lb bulk retail ÷ 190 cups = $0.08/cup home-grown equivalent vs $0.25-0.50 per tea bag at retail; the savings are real but modest
- Growing requirements by herb: chamomile (annual, direct sow, $1.99/packet); lemon balm (perennial zones 4-9, spreads aggressively, $3-4/plant); peppermint (perennial, must be contained, spreads via rhizomes); lavender (perennial zones 5-9, needs well-drained alkaline soil); echinacea (perennial zones 3-9, slow to establish, 2-3 years to full production)
- Harvesting and drying: most medicinal herbs are most potent at or just before full bloom; drying at 95-115°F preserves volatile oils better than higher temperatures; bundle drying vs. screen drying vs. dehydrator
- Legal note: tincture-making for personal use is legal; selling tinctures as supplements requires FDA compliance; brief mention only
- Sources: NIH National Center for Complementary and Integrative Health (NCCIH) for evidence grades; USDA AMS for retail prices; peer-reviewed citations for specific herbs
- Internal links: /crops/chamomile/, /crops/lavender/, /crops/lemon-balm/, /crops/peppermint/, /crops/ashwagandha/
**Acceptance:**
- 2000+ words
- Evidence grade stated for each herb (not just "used for centuries")
- Retail price and per-cup economics table
- No unsupported health claims
- `npx astro build` passes

---

### AR020 — preserving-peppers-guide.md
**Status:** `[x]`
**Files:** `src/content/articles/preserving-peppers-guide.md`
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**What:** Practical homestead guide covering all four main pepper preservation methods: drying, fermenting, freezing, and pickling. Includes which method suits which pepper type and a time/value comparison. 1800+ words.
**Details:**
- Category: homestead, featured: false, publishDate: 2026-04-22
- Title: "Preserving Hot Peppers: Drying, Fermenting, Freezing, and Pickling Compared"
- Description: 150-160 chars
- Method overview and best use case:
  - **Drying**: best for thin-walled peppers (cayenne, Thai chili, ancho/poblano, paprika types); removes 85-90% moisture; shelf life 1-2 years in sealed jar; produces ground spice or dried whole chilis; 115-135°F dehydrator for 6-12 hours, or air-dried on string in warm dry climate
  - **Fermenting**: lacto-fermentation for thick-walled peppers (jalapeño, serrano, habanero); 2% salt brine; 5-7 days at room temp; produces fermented hot sauce base or pickled peppers; live cultures, refrigerator shelf life 6+ months; process produces the umami/complexity that vinegar-based sauces lack
  - **Freezing**: fastest, lowest effort; all peppers freeze well; blanching optional (unblanched peppers turn slightly softer on thaw but are fine for cooking); frozen peppers excellent for cooked applications (chili, stir fry, stuffed peppers); not suitable for fresh use after freezing; shelf life 6-12 months in freezer
  - **Pickling (quick/vinegar)**: jalapeños and banana peppers are the standard; 1:1 vinegar/water brine with salt and sugar; processed in water bath canner for shelf stability or kept in fridge for quick pickles; heat of pepper is muted by pickling
- Pepper × method compatibility matrix: build a table — pepper type, wall thickness, heat level, recommended methods (✓/✗/best), notes
- Scoville heat retention: fermenting reduces perceived heat slightly as capsaicin breaks down; drying concentrates heat (fewer grams = same capsaicin load = hotter per unit weight); freezing has no meaningful effect on heat
- Value comparison: 10 lb jalapeños ($25-40 at retail) → dried jalapeño flakes worth $15-25 after drying (weight loss 90%); → 20 jars of pickled jalapeños worth $3-5 each = $60-100 retail equivalent; → fermented hot sauce in 5oz bottles worth $8-12 each × 15 bottles = $120-180 retail equivalent. Fermenting produces the highest retail-equivalent value.
- Sources: National Center for Home Food Preservation (NCHFP) for safe canning/pickling procedures; USDA Complete Guide to Home Canning; fermentation safety from university extension
- Internal links: /crops/hot-pepper/, /roi/pepper-roi-analysis/, /roi/dehydrator-roi/, /homestead/lacto-fermentation-preservation/
**Acceptance:**
- 1800+ words
- Pepper × method compatibility table
- Value comparison across all 4 methods for a standard 10 lb harvest
- `npx astro build` passes

---

## Content Triage Sprint — Deletes & Rewrites (T001-T012)

_Agent: Claude Code. Load skill: `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md` before any rewrite._
_These tasks fix quality problems in existing content before new content is added. Work in order: deletes first, then rewrites._

---

### T001 — Delete pepper.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** No skill needed — file deletion only.
**Files:** `src/content/plants/pepper.md`
**What:** Delete this file. It covers bell pepper only, has wrong yield data, and omits hot pepper ROI entirely. It has been superseded by `sweet-pepper.md` and `hot-pepper.md`.
**Details:**
- Confirm `src/content/plants/sweet-pepper.md` and `src/content/plants/hot-pepper.md` both exist before deleting
- Delete `src/content/plants/pepper.md`
- Search all other content files for internal links pointing to `/crops/pepper/` — update any found links to point to `/crops/sweet-pepper/` or `/crops/hot-pepper/` as appropriate
- Check `public/images/crops/pepper.webp` — delete if it exists (image is no longer needed)
**Acceptance:**
- `src/content/plants/pepper.md` does not exist
- No broken internal links to `/crops/pepper/`
- `npx astro build` passes with 0 errors

---

### T002 — Delete rosemary.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** No skill needed — file deletion only.
**Files:** `src/content/plants/rosemary.md`
**What:** Delete this file. It omits Zone 6/7 hardiness failure (rosemary is not reliably hardy below Zone 7) and contains absurd value math ("thousands of dollars" from a $4 plant).
**Details:**
- Delete `src/content/plants/rosemary.md`
- Search all other content files for internal links pointing to `/crops/rosemary/` — remove or replace with `/crops/thyme/` or `/crops/oregano/` where contextually appropriate
- Check `public/images/crops/rosemary.webp` — delete if it exists
**Acceptance:**
- `src/content/plants/rosemary.md` does not exist
- No broken internal links to `/crops/rosemary/`
- `npx astro build` passes with 0 errors

---

### T003 — Delete zucchini.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** No skill needed — file deletion only.
**Files:** `src/content/plants/zucchini.md`
**What:** Delete this file. Zucchini is the worst ROI vegetable (retails $0.80-1.20/lb, produces so much it becomes a burden). Presenting it as a high-value crop is misleading. It is already covered honestly in the `harvest-glut-triage.md` article.
**Details:**
- Delete `src/content/plants/zucchini.md`
- Search all other content files for internal links pointing to `/crops/zucchini/` — remove or replace the link (e.g., reference the harvest-glut-triage article instead)
- Check `public/images/crops/zucchini.webp` — delete if it exists
**Acceptance:**
- `src/content/plants/zucchini.md` does not exist
- No broken internal links to `/crops/zucchini/`
- `npx astro build` passes with 0 errors

---

### T004 — Delete garden-roi-explained.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** No skill needed — file deletion only.
**Files:** `src/content/articles/garden-roi-explained.md`
**What:** Delete this file. It uses emoji star ratings and fictional market tier percentages. It has been superseded by the `grocery-tier-roi.md` article.
**Details:**
- Confirm `src/content/articles/grocery-tier-roi.md` exists before deleting
- Delete `src/content/articles/garden-roi-explained.md`
- Search all other content files for internal links pointing to this article — update to point to `/roi/grocery-tier-roi/` where appropriate
**Acceptance:**
- `src/content/articles/garden-roi-explained.md` does not exist
- No broken internal links
- `npx astro build` passes with 0 errors

---

### T005 — Rewrite tomato.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/tomato.md` → keep slug, rewrite content
**What:** Full rewrite. Add cultivar distinction (slicing vs. paste vs. cherry tomato), cited yield data by type, and zone context.
**Details:**
- Keep existing frontmatter fields; update values to match cited data
- Slicing tomatoes (beefsteak, Better Boy): 10-15 lb per plant; $1.50-2.50/lb retail (USDA AMS)
- Paste tomatoes (Roma, San Marzano): 8-12 lb per plant; $1.00-2.00/lb retail; higher processing value
- Cherry tomatoes (Sungold, Sweet 100): 3-5 lb per plant; $3-6/lb retail; highest retail $/lb
- Explain that `cherry-tomato.md` exists as a separate page for cherry type deep-dive; link to it
- Yield data: cite Cornell Extension or Rutgers tomato production guide
- Zone context: requires 60-90 frost-free days; best in zones 5-11; zone 4 requires short-season varieties
- Disease context: early blight, late blight, septoria leaf spot — briefly mention, link to `integrated-pest-management.md`
- Internal links: `/crops/cherry-tomato/`, `/crops/basil/`, `/roi/garlic-roi-analysis/`, `/guides/tomato-training-guide/`
- No em dashes; no motivational closing
**Acceptance:**
- Cultivar type distinction (slicing/paste/cherry) is explicit
- All yield and price figures cited
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### T006 — Rewrite basil.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/basil.md`
**What:** Fix internal math inconsistency and cite USDA ERS pricing. The current file states $14.99/lb retail in one place and "$4-6 for 1 oz" in another — these are contradictory (1 oz at $4-6 = $64-96/lb).
**Details:**
- Correct retail price: fresh-cut basil $6-10/lb retail (USDA AMS); specialty/organic $10-14/lb; the oz-package pricing at retail ($3-4/0.75oz) works out to $64-85/lb but that's the clamshell premium, not the bulk price — be honest about this distinction
- Varieties: Genovese (standard culinary, highest yield), Thai basil (licorice/anise flavor, $8-14/lb), Lemon basil (citrus notes, $10-16/lb), Purple/Dark Opal (ornamental, lower yield)
- Yield: Genovese basil 0.5-1.5 lb per plant per season with regular harvest; cite Johnny's Seeds or Penn State Extension
- Zone context: annual everywhere; start indoors 4-6 weeks before last frost; cannot tolerate temps below 50°F
- Preservation: best preserved as pesto frozen in ice cube trays — link to `herb-preservation-guide.md`
- Internal links: `/crops/tomato/`, `/roi/herb-roi-comparison/`, `/homestead/herb-preservation-guide/`
- No em dashes; no motivational closing
**Acceptance:**
- No contradictory price figures
- Variety notes present (Genovese/Thai/Lemon at minimum)
- All figures cited
- `npx astro build` passes with 0 errors

---

### T007 — Rewrite strawberry.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/strawberry.md`
**What:** Distinguish June-bearing vs. everbearing vs. day-neutral types. Fix Year 1 vs. established plant yield. Cite extension data.
**Details:**
- June-bearing: one large crop in late spring/early summer; highest yield per plant in peak year (1-2 lb); best for preserving/freezing
- Everbearing: two smaller crops (spring + fall); lower per-harvest yield; better for fresh eating across a longer season
- Day-neutral: fruit continuously from June through frost; 0.5-1 lb/plant/season; best for containers; less affected by daylength
- Year 1 reality: most growers pinch flowers in Year 1 to build root mass; actual harvest is minimal
- Year 2-3 established yield: 1-2 lb per plant for June-bearing (cite OSU Extension or NCSU small fruit guide)
- Retail price: $3-5/lb conventional; $5-8/lb organic (USDA AMS)
- "Replace every 3 years" model: plants decline after 3 years; runners can be propagated as replacements at zero cost
- Companion plant note: do not plant near brassicas; plant near borage for pollinator attraction
- Internal links: `/roi/berry-roi-comparison/`, `/crops/raspberry/`, `/crops/blueberry/`
- No em dashes; no motivational closing
**Acceptance:**
- Three type distinctions (June-bearing/everbearing/day-neutral) clearly explained
- Year 1 vs. established yield distinction made explicit
- All figures cited to extension sources
- `npx astro build` passes with 0 errors

---

### T008 — Rewrite mint.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/mint.md`
**What:** Add hardiness zone context. Replace vague value claim with real yield math. Note that `peppermint.md` and `spearmint.md` exist as separate pages.
**Details:**
- Mint covers the genus broadly; this page should function as an overview with links to peppermint and spearmint pages
- Hardiness: most mint species are hardy Zones 3-9; die back in winter but return from rhizomes in spring
- Container requirement: mint spreads aggressively via underground rhizomes — plant only in containers or raised beds with root barriers; this is non-optional practical advice
- Yield: a single 12-inch pot produces 0.25-0.5 lb fresh mint per season with regular harvesting; retail fresh mint $4-8/lb (USDA AMS)
- Dried mint: $8-15/lb dried; 4:1 fresh-to-dry ratio by weight
- The honest ROI: mint is low-maintenance perennial with modest retail value; its real value is convenience (fresh herbs on demand vs. buying $1.99 grocery store bundles)
- Internal links: `/crops/peppermint/`, `/crops/spearmint/`, `/homestead/herb-preservation-guide/`, `/roi/herb-roi-comparison/`
- No em dashes; no motivational closing
**Acceptance:**
- Container/root containment requirement stated explicitly
- Zone hardiness stated
- Retail price cited
- Links to peppermint.md and spearmint.md present
- `npx astro build` passes with 0 errors

---

### T009 — Rewrite cucumber.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/cucumber.md`
**What:** Distinguish slicing, pickling, and Persian types. Clarify trellised vs. ground yield difference.
**Details:**
- Slicing cucumbers (Straight Eight, Marketmore): 8-12 fruit per plant; $1.00-2.00/lb retail; best fresh
- Pickling cucumbers (National Pickling, Calypso): smaller, higher skin-to-flesh ratio; $1.00-1.50/lb; required for canning quality pickles — slicers make soft pickles
- Persian cucumbers (mini/snacking): $2.50-4.00/lb retail; high demand at grocery stores; compact plant
- Trellis yield vs. ground: trellised plants produce 20-30% more fruit (better air circulation, easier harvest, less rot); a 6-ft trellis in a 4-ft bed width supports 2-3 plants
- Days to harvest: 50-70 days depending on type; cite seed company data (Johnny's, Burpee)
- Heat requirement: cucumbers sulk below 60°F; plant after soil is consistently warm (65°F+)
- Note: cucumbers do not store well post-harvest; fresh use or pickling within 24-48 hours of harvest for best quality
- Internal links: `/homestead/canning-financial-case/`, `/crops/zucchini/` → replace with `/guides/harvest-glut-triage/` since zucchini is being deleted
- No em dashes; no motivational closing
**Acceptance:**
- Three type distinctions (slicing/pickling/Persian) present
- Trellised vs. ground yield comparison present
- All price/yield figures cited
- `npx astro build` passes with 0 errors

---

### T010 — Rewrite lettuce.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/lettuce.md`
**What:** Source the savings estimate. Add butterhead/romaine/loose-leaf bolt timing by zone.
**Details:**
- Types: loose-leaf (fastest, cut-and-come-again, 30-45 days); butterhead/Bibb (45-60 days, heads; less heat-tolerant); romaine (60-75 days; most heat-tolerant lettuce type; highest retail value)
- Retail prices (USDA AMS): romaine hearts $1.50-2.50/lb; butterhead $2.50-4.00/lb; spring mix/loose-leaf $6-12/lb (pre-washed clamshell price per pound)
- Bolt timing by zone: Zone 5-6, loose-leaf bolts when daytime temps consistently exceed 80°F (mid-June to early July); romaine holds 2-3 weeks longer; butterhead bolts quickest
- Cut-and-come-again yield model: 4-6 harvests of outer leaves before bolt; each harvest 0.25-0.5 lb per plant
- Succession planting: every 2-3 weeks for continuous harvest spring and fall; link to `succession-planting-calendar.md`
- Fall lettuce: direct sow 8 weeks before first fall frost; often more productive than spring planting (cooling temps extend season)
- Internal links: `/roi/salad-greens-roi/`, `/guides/succession-planting-calendar/`, `/crops/arugula/`, `/crops/spinach/`
- No em dashes; no motivational closing
**Acceptance:**
- Three type distinctions (loose-leaf/butterhead/romaine) present
- Bolt timing with zone context
- Retail prices cited (USDA AMS)
- `npx astro build` passes with 0 errors

---

### T011 — Rewrite green-bean.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/plants/green-bean.md`
**What:** Cite yield data. Source all ROI figures. Distinguish bush vs. pole bean types.
**Details:**
- Bush beans: determinate, all pods ready in 7-10 day window, 50-60 days; good for canning/freezing batches; 0.5-1 lb per plant (cite Cornell or OSU extension)
- Pole beans: indeterminate, produce continuously for 6-8 weeks, 65-80 days to first harvest; higher total yield per plant (1.5-3 lb); require trellis; better for fresh eating season
- Retail price (USDA AMS): $1.50-2.50/lb fresh; $1.00-1.50/lb frozen equivalent
- Seed cost: $2-4 for enough seed to plant a 4×8 bed (~30 plants)
- ROI calculation: 30 bush bean plants × 0.75 lb = 22.5 lb @ $2/lb = $45 gross value; seed cost $3; net harvest value $42 from one 4×8 bed in a 55-day window
- Canning value: 1.5 lb fresh beans per quart jar; pressure canning required (low-acid vegetable)
- Note: green beans do not transplant — direct sow only; soil must be above 60°F
- Internal links: `/homestead/canning-financial-case/`, `/crops/pole-bean/`, `/guides/succession-planting-calendar/`
- No em dashes; no motivational closing
**Acceptance:**
- Bush vs. pole distinction explicit
- Yield data cited to extension source
- ROI calculation present with stated inputs
- `npx astro build` passes with 0 errors

---

### T012 — Rewrite raised-bed-break-even.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/raised-bed-break-even.md`
**What:** Replace fictional cost ranges with sourced lumber and soil prices. Keep the break-even structure and math framework — only the input numbers need sourcing.
**Details:**
- Lumber: 2×10×8 Douglas fir at Home Depot/Lowe's as of 2025: $8-12/board; a 4×8 bed requires 4 boards = $32-48 in lumber (cite as surveyed retail price, regional variation noted)
- Alternatively: 2×12 cedar (rot-resistant, lasts 10-15 years) at $15-25/board; same 4 boards = $60-100; amortized cost per year is $6-10/year over 10 years vs. $32-48 one-time for pine lasting 4-6 years
- Soil: a 4×8×10" bed requires ~24 cubic feet of fill; bagged Mel's Mix equivalent costs $0.80-1.20/quart = $61-92 for the full bed; bulk delivery of topsoil/compost blend $30-50/yard; a 4×8 bed uses ~1 yard = $30-50
- Total 4×8 bed setup cost: pine lumber + bagged soil = $93-140; cedar + bulk soil = $90-150; these are the honest Year 1 ranges
- Annual input cost (Years 2+): top-dress with 1-2" of compost ($15-30 bagged or free from home pile), seeds ($15-30 for a full season of plantings) = $30-60/year
- Break-even math: if the bed produces $200 of harvest value in Year 1 (realistic with garlic + tomatoes + basil in a 4×8), break-even is mid-first-season on inputs but Year 2 on amortized setup
- Sources: cite specific retailer price survey date; cite Cornell or extension for harvest value estimates
- Internal links: `/roi/first-three-years-roi/`, `/crops/garlic/`, `/crops/tomato/`, `/crops/basil/`
- No em dashes; no motivational closing
**Acceptance:**
- All cost figures have a stated source or "surveyed retail price, [date]" attribution
- Break-even calculation uses the sourced numbers
- Zero em dashes
- `npx astro build` passes with 0 errors

---

## Content Fixes Sprint (CF001-CF003)

_Agent: Claude Code. Load skill: `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md` before any rewrite._
_These are the remaining quality fixes from `memories/repo/content-plan.md`. Small scope — no full rewrites, just citation and copy fixes._

---

### CF001 — Fix beginner-homestead-crops.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/beginner-homestead-crops.md`
**What:** Remove motivational closing paragraph. Source all yield and savings claims throughout the article.
**Details:**
- Read the full article first; identify every yield figure, savings claim, and price assertion
- For each: either add an inline citation (USDA ERS/AMS, land-grant extension) or replace with a stated calculation from explicit inputs
- Delete the closing paragraph if it contains "journey", "rewarding", "hope you enjoy", or any similar motivational register
- Do not change the article's structure or add new sections — citation and closing fix only
- Zero em dashes throughout
**Acceptance:**
- No unsourced yield or savings figures remain
- No motivational closing paragraph
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### CF002 — Fix spring-garden-planning.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/spring-garden-planning.md`
**What:** Link the USDA Plant Hardiness Zone Map. Source all planting calendar dates to extension recommendations.
**Details:**
- Add a link to the USDA zone map (`https://planthardiness.ars.usda.gov/`) where zones are first mentioned
- For every planting date or timing recommendation in the article, add a parenthetical citation: e.g., "(Cornell Extension, 2024)" or "(OSU Extension Vegetable Planting Calendar)"
- If a date cannot be cited to an extension source, replace it with a frost-relative date (e.g., "4-6 weeks before last frost") which is inherently defensible
- Do not restructure the article — targeted fixes only
- Zero em dashes throughout
**Acceptance:**
- USDA zone map URL present and linked
- Every planting date either has a citation or uses frost-relative framing
- Zero em dashes
- `npx astro build` passes with 0 errors

---

### CF003 — Add citations to companion-planting-basics.md
**Status:** `[x]`
**Agent:** Claude Code
**Load skill:** `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`
**Files:** `src/content/articles/companion-planting-basics.md`
**What:** Add citations for two specific claims: marigold/nematode suppression and basil/thrips deterrence. The article structure is sound — this is a citation-only fix.
**Details:**
- Find the marigold/nematode claim. Cite: Rickard, D.A. (2000). "Marigolds for Nematode Control." University of Florida IFAS Extension, or equivalent peer-reviewed source. If the exact mechanism stated in the article doesn't match what the research shows, correct the claim to match the evidence.
- Find the basil/thrips deterrence claim. Cite a peer-reviewed study or university extension source. If strong evidence doesn't exist, soften the language from "repels" to "may reduce" or "has been associated with reduced thrips pressure in some trials" — do not state causation without evidence.
- Do not restructure the article or add new sections
- Zero em dashes throughout
**Acceptance:**
- Marigold/nematode claim has a linked or parenthetical citation
- Basil/thrips claim is either cited or hedged to match actual evidence
- Zero em dashes
- `npx astro build` passes with 0 errors

---

## Feature Sprint 2 — IA & Homepage (F008-F013)

_Agent: GitHub Copilot. These are infrastructure and UI tasks — no content writing required._

---

### F008 — Category Subpages for /crops/
**Status:** `[x]`
**Agent:** Copilot
**Files:** `src/pages/crops/[category].astro` (new), or three separate files; `src/pages/crops/index.astro`
**What:** Add static category subpages: `/crops/vegetables/`, `/crops/herbs/`, `/crops/fruit/`. Each is independently indexable with its own title, meta description, and h1. Resolved per decision D5 in `memories/repo/decisions.md`.
**Details:**
- Use a dynamic route `src/pages/crops/[category].astro` with `getStaticPaths()` returning the three categories, OR three static files — either approach is fine
- Each page filters the plants collection by `data.plant_type` matching "Vegetable", "Herb", or "Fruit"
- Each page has a unique `<title>` (e.g., "Vegetable Crops: ROI, Yield & Growing Guides"), unique `<meta description>`, and unique `<h1>`
- Render the same `PlantCard` grid used on `/crops/index.astro`; reuse all existing card styles
- Add category links to `/crops/index.astro` — e.g., filter tabs or a "Browse by type" nav that links to `/crops/vegetables/`, etc. These replace or supplement the existing client-side category filter if one exists.
- Add BreadcrumbList JSON-LD on each category page: `Home > Crops > Vegetables`
- All CSS via existing custom properties — no hardcoded values
**Acceptance:**
- `/crops/vegetables/`, `/crops/herbs/`, `/crops/fruit/` all render correctly
- Each has a unique title, meta description, and h1
- BreadcrumbList JSON-LD present on each
- Crop count on each category page matches the plants collection filtered by type
- `npx astro build` passes with 0 errors

---

### F009 — Rework Homepage Hero and Section Anchors
**Status:** `[x]`
**Agent:** Copilot
**Files:** `src/pages/index.astro`
**What:** Replace the feature icon strip (🌱💰🏡📱) with real content cards. Update the hero copy to be specific and numbers-forward per the IA plan spec in `memories/repo/ia-plan.md`.
**Details:**
- **Hero copy:** Replace current hero headline and subhead with something specific and data-grounded. Example pattern: "Garlic returns $14/sq ft. Here's how to grow it." or "Your garden should break even by August. Here's how to get there." Pull the actual top-ROI crop dynamically from the plants collection (logic already exists in `index.astro` as `topCrop`) and use its name and computed ROI in the headline.
- **Remove icon strip:** Delete the 🌱💰🏡📱 feature block entirely
- **Add 3-column section anchors:** One featured card each for Crops, ROI, and Homestead sections. Each card shows: section label, one featured article or crop title, a 1-sentence description, and a "View all →" link. Use the `ArticleCard` or `PlantCard` components already available, or a simpler inline card — do not write new CSS unless necessary.
- **Featured content:** Crops anchor → `topCrop`; ROI anchor → `roiArticle` (already computed); Homestead anchor → `homesteadArticle` (already computed). Variables already exist in the frontmatter — use them.
- All colors via CSS custom properties; no hardcoded hex values; no inline styles
- Background opacity rule: any text section must have a solid/semi-opaque background per AGENTS.md
**Acceptance:**
- Icon strip is gone
- Hero headline references a specific crop name and ROI figure (dynamic, not hardcoded)
- 3-column section anchors are present and link to `/crops/`, `/roi/`, `/homestead/`
- No hardcoded colors or inline styles
- `npx astro build` passes with 0 errors

---

### F010 — Add Breadcrumb Component
**Status:** `[x]`
**Agent:** Copilot
**Files:** `src/components/Breadcrumb.astro` (new), `src/layouts/ArticleLayout.astro`, `src/pages/crops/[slug].astro`
**What:** Add a reusable Breadcrumb component and wire it into crop pages and article pages. Breadcrumb also serves as BreadcrumbList JSON-LD (structured data already added per-page; this consolidates it).
**Details:**
- Create `src/components/Breadcrumb.astro` that accepts a `crumbs` prop: array of `{ label: string, href?: string }`. Last crumb has no href (current page).
- Example usage: `<Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Crops', href: '/crops/' }, { label: crop.data.title }]} />`
- Style: simple text with `>` or `/` separators; use `--color-text-muted` or equivalent CSS variable for separator and inactive crumbs; active (last) crumb uses `--color-text` or similar. No complex styling.
- Emit a `<script type="application/ld+json">` BreadcrumbList JSON-LD block from the component, generated from the `crumbs` prop, so each page gets structured data automatically.
- Wire into `src/pages/crops/[slug].astro`: `Home > Crops > [Crop Name]`
- Wire into `src/layouts/ArticleLayout.astro`: `Home > [Section] > [Article Title]` — derive section label from `article.data.category` (roi → "ROI", homestead → "Homestead", care → "Guides", planning → "Guides")
- Place breadcrumb above the `<h1>` on each page
**Acceptance:**
- Breadcrumb renders correctly on a crop page and an article page
- BreadcrumbList JSON-LD is present and valid on both (test with Google Rich Results Test or schema.org validator)
- No hardcoded colors; uses CSS custom properties only
- `npx astro build` passes with 0 errors

---

### F011 — Related Crops and Articles on Crop Pages
**Status:** `[x]`
**Agent:** Copilot
**Files:** `src/pages/crops/[slug].astro`
**What:** Add a "Related Crops" section (2-3 crops by same plant type or adjacent ROI tier) and a "Related Articles" section (1-2 articles that link to this crop) to the bottom of every crop page.
**Details:**
- **Related Crops:** Filter plants collection excluding the current crop; sort by ROI score descending; take the top 3 from the same `plant_type`. Display as a compact row of `PlantCard` components (or a simplified version — 3 cards in a row).
- **Related Articles:** Filter articles collection to find entries where the body mentions the crop slug, OR use a simpler approach: match articles where `data.category` is `roi` or `homestead` and `data.featured` is true (top 2). A simple heuristic is fine — perfect matching is not required.
- Section headings: "Related Crops" and "Further Reading" (or similar — keep it plain)
- Place both sections above the existing app CTA at the bottom of the page
- All styling via existing CSS custom properties; use `.glass-card` for card containers if appropriate
- No new CSS classes unless unavoidable
**Acceptance:**
- Related Crops section shows 2-3 crop cards on every crop page
- Related Articles section shows 1-2 article links on every crop page
- No crop page shows itself in related crops
- `npx astro build` passes with 0 errors

---

### F012 — Related Articles on Article Pages
**Status:** `[x]`
**Agent:** Copilot
**Files:** `src/layouts/ArticleLayout.astro`
**What:** Add a "Further Reading" section at the bottom of every article page showing 2-3 articles from the same category.
**Details:**
- In `ArticleLayout.astro`, accept the current article's `category` and `slug` as props (or derive from the content entry passed in)
- Query the articles collection; filter to same category; exclude the current article; sort by `publishDate` descending; take top 3
- Render as a simple list or compact card row using `ArticleCard` component
- Section heading: "Further Reading"
- Place above the footer, below the main article content
- No hardcoded colors or inline styles
**Acceptance:**
- Every article page shows 2-3 related articles from the same category
- No article shows itself in further reading
- `npx astro build` passes with 0 errors

---

### F013 — Internal Linking Audit: Top 20 Crop Pages
**Status:** `[x]`
**Agent:** Copilot
**Files:** Various `src/content/plants/*.md`
**What:** Audit the 20 highest-traffic crop pages (highest ROI score) and ensure each links to at least 2 related crops and 1 related article, per SEO standards in AGENTS.md. This is a targeted pass — not all 192 pages.
**Details:**
- Identify the top 20 crops by ROI score: `avg_yield_lb * avg_price_lb / start_cost`. Check the existing sort logic in `crops/index.astro` for reference.
- For each of the 20, open the `.md` file and check the body for internal links to other crop pages (`/crops/`) and articles (`/roi/`, `/homestead/`, `/guides/`)
- If a crop page has fewer than 2 crop links or 0 article links, add them. Anchor text must be descriptive (crop name or article topic — not "click here" or "read more")
- Suitable link targets: crops in the same plant type, crops mentioned in the article content, articles that reference this crop by name
- Do not add links that feel forced; if a page already has adequate linking, move on
- Track which pages were updated in the task completion summary
**Acceptance:**
- All 20 top-ROI crop pages have at minimum 2 internal crop links and 1 article link in the body
- All new anchor text is descriptive
- `npx astro build` passes with 0 errors

---

## SEO Infrastructure Sprint

### S001 — FAQPage JSON-LD on Top 20 Crop Pages
**Status:** `[x]`
**Agent:** Copilot
**Files:** `src/pages/crops/[slug].astro`
**What:** Add `FAQPage` JSON-LD to the top 20 highest-ROI crop pages to enable Google featured snippets for common "how long does X take to grow", "how much does X yield", "what are good companion plants for X" queries.
**Details:**
- Top 20 crops by ROI = `avg_yield_lb * avg_price_lb / start_cost`, same sort as `/crops/best-roi/`
- In `[slug].astro`, build a `faqJsonLd` object from available frontmatter data. Standard FAQ questions to include for every crop:
  1. "How long does [name] take to grow?" → Answer: "From seed to harvest, [name] takes [days_min]–[days_max] days."
  2. "How much does [name] yield per plant?" → Answer: "[avg_yield_lb] lbs average per plant or per season."
  3. "What are good companion plants for [name]?" → Answer built from `companion_plants` array.
- Render as a second `<script type="application/ld+json">` block (alongside the existing Article JSON-LD) only when the current crop is in the top-20 ROI list
- Compute the top-20 list inline at build time using the same `allPlants` collection that's already available
- FAQPage schema: `@context: "https://schema.org"`, `@type: "FAQPage"`, `mainEntity: [{ @type: "Question", name: "...", acceptedAnswer: { @type: "Answer", text: "..." } }]`
**Acceptance:**
- Top 20 crop pages each have a valid FAQPage JSON-LD block in rendered HTML
- Crop pages outside the top 20 do NOT get FAQ JSON-LD (conditional rendering)
- FAQ answers are factually grounded in frontmatter data — no invented text
- `npx astro build` passes with 0 errors

---

### S002 — Zone Page Editorial Intro Infrastructure
**Status:** `[x]`
**Agent:** Copilot
**Files:** `src/data/zones.ts`, `src/pages/zone/[zone].astro`
**What:** Add an `intro` string field to the `ZoneData` interface and render it on zone pages above the crop classification lists. Claude will fill in the content (Z001–Z008) — this task only wires the template.
**Details:**
- Add `intro?: string` to the `ZoneData` interface in `zones.ts`
- Add a placeholder intro to each zone entry (one sentence each): `"Zone [N] editorial content coming soon."`
- In `[zone].astro`, render `{zoneData.intro && <p class="zone-intro">{zoneData.intro}</p>}` below the `.zone-summary` stats block and above the first crop section
- Style: `.zone-intro` should use `var(--color-text)`, `font-size: var(--text-base)`, `margin-bottom: var(--space-4)`, `max-width: 65ch`
- No hardcoded colors or px values
**Acceptance:**
- `ZoneData` interface has `intro?: string`
- All 8 zone entries in `ZONES` have a placeholder intro string
- Zone pages render the intro paragraph when present
- `npx astro build` passes with 0 errors

---

## Content Expansion Sprint — E-series (Crop Depth Pass)

**Context:** As of May 2026, the 40 thinnest crop pages are 937–1,290 words. Full-depth reference pages (tomato, basil, kale) are ~1,800–2,200 words. The gap covers specialty/uncommon crops that Claude has written as functional stubs. The E-series expands each to full depth.

**All E-series tasks:** Load skill at `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`. Target 1,800+ words in the body. Every expansion must add: cultivar specifics (named varieties with notes), zone context (which USDA zones suit this crop), at least one USDA ERS/AMS or land-grant extension citation in the ROI section, and a preservation/kitchen section if not already present. Zero em dashes. No motivational closing.

**Style reference:** Read `src/content/plants/tomato.md` or `src/content/plants/basil.md` before starting — these are the depth standard.

---

### E001 — Expand malabar-spinach.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/malabar-spinach.md`
**Current word count:** ~937
**ROI angle:** Heat-tolerant spinach substitute when true spinach bolts. High yield in zone 8–10 summers. $3–5/lb fresh at farmers markets (treat as premium greens). Cultivar note: red-stemmed (Basella rubra) vs. green-stemmed (Basella alba) — flavor and appearance differ.
**Must include:** Cultivar section (red vs green), zone fit (thrives 8–10, usable 6–7 with season extension), pest (slugs, aphids), preservation (blanch and freeze for cooked applications), kitchen (stir-fry, soups — mucilaginous texture note).
**Acceptance:** Body 1,800+ words, zero em dashes, cited price or yield source, `npx astro build` passes.

---

### E002 — Expand epazote.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/epazote.md`
**Current word count:** ~964
**ROI angle:** Specialty herb commanding $4–8/lb fresh at Mexican/Latin grocers and farmers markets. Near-zero input cost after establishment — self-seeding annual. Dual-value: culinary and reputed antiparasitic folk medicine use drives specialty demand.
**Must include:** Cultivar note (one species, but fresh vs. dried flavor difference worth covering), zone fit (annual everywhere, perennial zone 9+), self-seeding behavior (can become aggressive), preservation (drying method and potency loss), kitchen (black bean applications, correct usage amounts — toxic in large quantities, must note).
**Acceptance:** Body 1,800+ words, zero em dashes, cited price source, `npx astro build` passes.

---

### E003 — Expand new-zealand-spinach.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/new-zealand-spinach.md`
**Current word count:** ~1,004
**ROI angle:** Fills the summer gap when true spinach bolts — extends the harvest window by 3+ months. $3–4/lb market price. Cut-and-come-again; one planting produces until frost.
**Must include:** Distinct from true spinach (Tetragonia tetragonioides, not Spinacia), zone fit (warm-season, zones 5–10), germination note (slow — scarify or soak seeds 24h), heat tolerance advantage, pest (generally pest-resistant — worth noting), preservation (blanch and freeze), kitchen (mild flavor, cooks like spinach but needs more washing due to texture).
**Acceptance:** Body 1,800+ words, zero em dashes, `npx astro build` passes.

---

### E004 — Expand winter-savory.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/winter-savory.md`
**Current word count:** ~1,005
**ROI angle:** Perennial herb (zones 5+) with near-zero year-2+ input cost. $5–8/lb dried at specialty retailers. Pairs with beans — traditional companion that also commands higher fresh herb premium than common herbs.
**Must include:** Distinction from summer savory (perennial vs. annual, stronger flavor), zone fit (woody perennial 5+, annual elsewhere), propagation (cuttings vs. seed), harvest timing (before flowering for peak flavor), preservation (drying — retains flavor better than fresh storage), kitchen (bean dishes, game meat, charcuterie applications).
**Acceptance:** Body 1,800+ words, zero em dashes, `npx astro build` passes.

---

### E005 — Expand yardlong-bean.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/yardlong-bean.md`
**Current word count:** ~1,038
**ROI angle:** Extremely productive in heat — outperforms green beans by 2–3x yield per plant in zone 7+ summers. $2–4/lb retail. 60-day crop; succession plant for continuous harvest.
**Must include:** Cultivar section (red-seeded vs. green, black-eyed vs. light-seeded types), zone fit (heat-lover, best zones 7–11), trellising requirement (vigorous climber, 8–10 ft), harvest timing (pick at 12–18 inches — not when "yard long" which is overripe), pest (aphids, spider mites in heat), preservation (blanch-freeze, pickled), kitchen (stir-fry primary, distinct from snap bean texture — not interchangeable raw).
**Acceptance:** Body 1,800+ words, zero em dashes, `npx astro build` passes.

---

### E006 — Expand culantro.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/culantro.md`
**Current word count:** ~1,052
**ROI angle:** Specialty herb commanding $2–4/bunch at Latin and Caribbean markets — often more expensive per oz than cilantro. Heat-tolerant and bolt-resistant where cilantro fails. Not interchangeable in flavor but used in the same cuisines.
**Must include:** Distinction from cilantro (Eryngium foetidum vs. Coriandrum sativum — related in use, not in species), zone fit (perennial zones 9–11, annual elsewhere), shade tolerance advantage (grows under taller crops), harvest (outer leaves, not whole plant), pest (slug pressure in shade conditions), preservation (freezing retains flavor better than drying), kitchen (Caribbean sofritos, Vietnamese pho, Thai curries — specific dish applications).
**Acceptance:** Body 1,800+ words, zero em dashes, `npx astro build` passes.

---

### E007 — Expand galangal.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/galangal.md`
**Current word count:** ~1,054
**ROI angle:** $8–15/lb fresh at Asian markets; $20–30/lb dried. Rhizome crop that multiplies in the ground. Low annual input cost after establishing rhizomes. Niche but commanding premium — specialty grocery demand is consistent.
**Must include:** Distinction between greater galangal (Alpinia galanga) and lesser galangal (A. officinarum) — different culinary uses, cover both, zone fit (perennial zones 9–11, container/annual zones 5–8), rhizome division for propagation, harvest timing (1 year for fresh use, 2+ for larger rhizomes), preservation (freeze fresh, dry for powder — drying significantly reduces volatile oils), kitchen (Thai curries, tom kha, not substitutable with ginger).
**Acceptance:** Body 1,800+ words, zero em dashes, cited price source, `npx astro build` passes.

---

### E008 — Expand serviceberry.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/serviceberry.md`
**Current word count:** ~1,076
**ROI angle:** Early-season fruit (June) filling the gap between strawberries and summer berries. $6–12/lb at farmers markets where available — undersupplied because commercial production is minimal. Multi-trunk shrub or small tree; long productive lifespan (20+ years).
**Must include:** Species note (Amelanchier alnifolia for fruit, A. canadensis and A. arborea for ornamental — emphasize alnifolia for edible production), zone fit (extremely cold-hardy, zones 2–9), wildlife pressure (birds — netting required), harvest timing (berries ripen over 1–2 weeks, pick when deep purple-blue), preservation (fresh shelf life short — 3 days; freeze immediately or make jam), kitchen (pie, jam, fresh eating; flavor like mild blueberry with almond undertone — explain the almond note).
**Acceptance:** Body 1,800+ words, zero em dashes, `npx astro build` passes.

---

### E009 — Expand honeyberry.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/honeyberry.md`
**Current word count:** ~1,087
**ROI angle:** Earliest fruiting shrub in cold climates (ripens before strawberries, zones 3–6). $8–15/lb where sold fresh. Underserved market — most home growers don't know it. Cold-hardy to -40°F; outperforms any other berry in zone 3–4.
**Must include:** Species note (Lonicera caerulea, haskap in Japan/Canada — same plant, different common names), cultivar pairs (requires two different cultivars for pollination — name specific compatible pairs like 'Tundra' + 'Indigo Gem'), zone fit (zones 3–6, performs poorly in zone 7+ heat), harvest (early June, berries release easily when ripe), pest (generally low pest pressure, but birds), preservation (freezes excellently — better than fresh), kitchen (strong flavor compared to blueberry, best cooked in jam/pie, raw eating is an acquired taste — honest note).
**Acceptance:** Body 1,800+ words, zero em dashes, `npx astro build` passes.

---

### E010 — Expand chinese-broccoli.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/chinese-broccoli.md`
**Current word count:** ~1,090
**ROI angle:** $3–5/lb at Asian markets; more expensive than broccoli. Succession crop — cut stems regrow. 50–60 days to first harvest, then continuous for 4–6 weeks before bolting.
**Must include:** Cultivar section (standard vs. 'Crispy Blue' vs. 'Kaiho' — different stem thickness and bolt tolerance), zone fit (cool-season, best spring/fall zones 3–9, year-round zones 7–9 with timing), harvest trigger (harvest when 30–40% of buds are open — later than this and flavor declines), pest (imported cabbageworm, aphids — standard brassica pests), preservation (blanch-freeze; not suitable for drying), kitchen (stir-fry with oyster sauce is canonical; also steamed with ginger; stems and leaves cooked differently — stems longer, leaves added last).
**Acceptance:** Body 1,800+ words, zero em dashes, `npx astro build` passes.

---

### E011 — Expand vietnamese-coriander.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/vietnamese-coriander.md`
**Current word count:** ~1,094
**ROI angle:** $3–5/bunch at Vietnamese and Southeast Asian markets. Heat-tolerant cilantro substitute — grows where cilantro bolts. Cut-and-come-again; low input after rooting cuttings.
**Must include:** Species note (Persicaria odorata, not related to Coriandrum), zone fit (perennial zones 9–11, frost-sensitive annual elsewhere, overwinter indoors), propagation by stem cuttings (roots in water in 1 week — fast and free), taste comparison to cilantro (similar but distinct — citrusy with a slight menthol note), pest (generally pest-free in hot weather, slug pressure in cool damp), preservation (poor — best fresh, freezing acceptable for cooked use), kitchen (Vietnamese pho, laksa, rice paper rolls — specific dish context).
**Acceptance:** Body 1,800+ words, zero em dashes, `npx astro build` passes.

---

### E012 — Expand water-chestnut.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/water-chestnut.md`
**Current word count:** ~1,124
**ROI angle:** $3–6/lb fresh at Asian markets. Aquatic crop — uses water space not competing with garden beds. Crunchy texture survives cooking (unlike most vegetables) — unique niche. High-value processed forms (canned, flour) suggest demand.
**Must include:** Species note (Eleocharis dulcis, not the floating water chestnut Trapa natans which is invasive), growing method (containers with water, pond margins, or small water garden), zone fit (warm-season, zones 7–11 for outdoor production; zones 5–6 possible in containers brought inside), corm division propagation, harvest (drain water in fall, dig corms), pest (generally pest-free due to aquatic environment), preservation (fresh 2 weeks refrigerated; canned commercial product; can slice and freeze for stir-fry), kitchen (stir-fry standard; maintain crunch by adding late; water chestnut flour as thickener).
**Acceptance:** Body 1,800+ words, zero em dashes, `npx astro build` passes.

---

### E013 — Expand feijoa.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/feijoa.md`
**Current word count:** ~1,134
**ROI angle:** $4–8/lb at specialty and Latin markets (sold as pineapple guava). Perennial shrub — productive for 20+ years. Self-fertile varieties available, but cross-pollination improves yield. Low-maintenance once established.
**Must include:** Cultivar section ('Coolidge' self-fertile vs. 'Mammoth', 'Nazemetz' which need cross-pollination — name them), zone fit (zones 8–11; brief cold hardiness to 15°F but fruit quality drops at limits), harvest (falls when ripe — catch with netting under tree or pick when gives to gentle squeeze), pest (generally low; occasional scale), preservation (very short shelf life — 3–5 days fresh; freeze pulp immediately; jams and chutneys best use of surplus), kitchen (scoop flesh from skin; flavor is guava-mint-pineapple; raw eating primary, also baked goods and preserves).
**Acceptance:** Body 1,800+ words, zero em dashes, `npx astro build` passes.

---

### E014 — Expand water-spinach.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/water-spinach.md`
**Current word count:** ~1,141
**ROI angle:** $2–4/lb at Asian markets; extremely fast-growing (harvest in 30 days). Semi-aquatic or moist soil growing; extremely productive in heat and humidity zones 8+.
**Must include:** Regulatory note (Ipomoea aquatica is a Federal Noxious Weed in the US — legal to grow in FL, TX, HI with permits; other states vary — agents must include this; it's a key differentiator vs. other crops), growing method (moist soil or water culture), zone fit (best zones 9–11, usable zones 7–8 as annual), harvest (young shoots 6–8 inches; regrows rapidly), pest (aphids, spider mites in dry conditions), preservation (wilts quickly — 2 days max fresh; freezing acceptable for cooked use), kitchen (hollow stems — distinctive; stir-fry with garlic and oyster sauce canonical; morning glory greens in Thai/Vietnamese cooking).
**Acceptance:** Body 1,800+ words, regulatory note present, zero em dashes, `npx astro build` passes.

---

### E015 — Expand agretti.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/agretti.md`
**Current word count:** ~1,157
**ROI angle:** $8–15/lb at specialty and Italian markets — highly seasonal (spring only), undersupplied in US. Seed viability short (use fresh seed); this creates a barrier to entry that keeps supply low and prices high.
**Must include:** Common name confusion (agretti, monk's beard, roscano, land seaweed — all same plant: Salsola soda), seed freshness critical (purchase current-season seed only — germination drops sharply after 6 months; this is the most common failure point), zone fit (cool-season spring crop, zones 5–9), harvest window (short — 4–6 weeks in spring before heat causes bitterness), preservation (blanch-freeze; drying not recommended), kitchen (Italian cooking — lemon, olive oil, simple preparations; distinct texture — dense and slightly crunchy like samphire).
**Acceptance:** Body 1,800+ words, seed freshness warning present, zero em dashes, `npx astro build` passes.

---

### E016 — Expand medlar.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/medlar.md`
**Current word count:** ~1,165
**ROI angle:** $8–20/lb at specialty markets where sold at all — extremely rare commercially. Long-lived tree (50+ years); essentially no input cost after year 5. Unique harvest timing (late fall, after frost).
**Must include:** The bletting process (fruit must be bletted — allowed to soften/partially ferment before eating — this is non-negotiable to explain; unripe medlar is inedible), zone fit (zones 5–9, cold-hardy), cultivar section ('Nottingham', 'Royal', 'Dutch' — size and flavor differences), harvest (pick after first frost, then blet 2–6 weeks at cool room temperature until flesh turns dark brown and soft), pest (generally low; fireblight in wet springs), preservation (bletted fruit keeps 2 weeks; medlar jelly is the primary preservation method), kitchen (medlar cheese/jelly with game; roasted bletted medlar; historical British dish with cream).
**Acceptance:** Body 1,800+ words, bletting process explained, zero em dashes, `npx astro build` passes.

---

### E017 — Expand hazelnut.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/hazelnut.md`
**Current word count:** ~1,173
**ROI angle:** $4–8/lb in-shell at markets; $12–20/lb shelled. Long-lived multi-stemmed shrub (not tree); first harvest year 3–5, then productive 40+ years. Requires two different varieties for cross-pollination.
**Must include:** Cultivar pairs for cross-pollination ('Jefferson' + 'Eta', or 'Barcelona' + 'Ennis' — name them), species note (American hazelnut Corylus americana vs. European C. avellana — disease resistance differences), zone fit (American hazelnut zones 4–9; European 5–8), Eastern Filbert Blight (EFB) — critical disease issue for European hazelnuts in eastern US; American varieties resistant; hybrid varieties ('Jefferson', 'Eta') recommended for east coast, pest (squirrels — main economic threat), harvest (nuts fall when ripe — collect from ground), preservation (dry in shell for 1–2 months; shell and store in cool dry space 1 year; freeze shelled for 2+ years), kitchen (roasting before using intensifies flavor; blanching to remove skin; hazelnut flour from home-ground nuts).
**Acceptance:** Body 1,800+ words, EFB disease note present, cross-pollination cultivar pairs named, zero em dashes, `npx astro build` passes.

---

### E018 — Expand daikon.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/daikon.md`
**Current word count:** ~1,175
**ROI angle:** $1–2/lb retail; extremely high yield (one root 1–2 lbs). Also sold as cover crop/tillage radish ($40–60/lb for seed — not relevant for home grower but signals commercial demand). Greens edible too — dual harvest.
**Must include:** Cultivar section ('Miyashige', 'April Cross', 'KN-Bravo' purple — size and season differences), zone fit (cool-season, fall-planted in most zones; year-round in zones 9–10), greens harvest (leaves edible — mild flavor; harvest young for salads), soil improvement value (deep taproot breaks compaction — agronomic note), pest (root maggots — organic control), preservation (refrigerated 1–2 weeks fresh; lacto-fermented (dongchimi, kkakdugi) primary Asian preservation method — must cover; can also pickle quickly in rice vinegar), kitchen (Japanese cuisine — raw in salads, pickled as tsukemono, grated as daikon oroshi condiment, simmered in oden; Korean kimchi ingredient).
**Acceptance:** Body 1,800+ words, zero em dashes, `npx astro build` passes.

---

### E019 — Expand aronia.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/aronia.md`
**Current word count:** ~1,182
**ROI angle:** $4–8/lb fresh at farmers markets; $15–25/lb dried; $20–40/lb frozen for commercial buyers. High antioxidant profile drives premium pricing. Low-maintenance shrub; zones 3–9; heavy yields in year 3+.
**Must include:** Species note (Aronia melanocarpa black chokeberry vs. A. arbutifolia red — black is the commercial/edible variety; red is mainly ornamental), cultivar section ('Viking', 'Nero', 'McKenzie' — yield and size differences; 'Viking' is the commercial standard), zone fit (zones 3–9; extremely cold-hardy), harvest timing (August–September; pick when fully black and slightly soft; high astringency raw — important to note), pest (generally pest-free — one of the site's most low-maintenance fruit crops), preservation (freeze fresh; dry for powder; juice; wine; jelly — cover all major options), kitchen (too astringent for raw eating in quantity; best cooked in jams, baked goods, juiced and sweetened; mix with apple or other fruit to balance tannins).
**Acceptance:** Body 1,800+ words, astringency note present, zero em dashes, `npx astro build` passes.

---

### E020 — Expand peanut.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/plants/peanut.md`
**Current word count:** ~1,217
**ROI angle:** $3–6/lb raw in-shell; $8–12/lb as boiled peanuts at roadside stands and farmers markets (zone 7+ Southern US). Nitrogen-fixing legume — improves soil for following crops. Unique geocarpic fruiting (peg buries in soil — must explain).
**Must include:** Cultivar section ('Valencia' 3-4 seeds/pod, best for home boiling; 'Virginia' large kernel for roasting; 'Spanish' for peanut butter — explain the differences), zone fit (110–130 day crop, best zones 7–10; marginal zone 6 with season extension), the peg formation process (after flowers are pollinated, a peg grows down and buries into soil — the peanut develops underground; must cover because most gardeners don't know this), harvest (pull plants when leaves yellow; cure 2–4 weeks before shelling), pest (fungal issues in wet seasons — proper curing prevents aflatoxin, this is a food safety note to include), preservation (fresh boiled within 24h; raw dried in shell 6+ months; roasted in shell 3+ months), kitchen (boiled peanuts — Southern preparation; roasting at home; peanut butter from fresh-ground).
**Acceptance:** Body 1,800+ words, peg formation explained, aflatoxin/curing note present, zero em dashes, `npx astro build` passes.

---

## Zone Editorial Sprint — Z-series

**Context:** Zone pages at `/zone/3/` through `/zone/10/` exist and dynamically list crops classified by frost-free days. They currently have no editorial intro content. Z001–Z008 add zone-specific written context.

**Dependency:** S002 must be completed first (Copilot adds `intro` field to ZoneData and renders it in `[zone].astro`).

**All Z-series tasks:** Load skill at `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`. Target 250–400 words per intro. Content must cite USDA frost data (already in ZoneData), name the 2–3 highest-ROI crops that thrive in the zone with brief reasoning, and note the zone's primary constraint (season length, heat, humidity, freeze-thaw cycles). Zero em dashes. No motivational closing. Edit `src/data/zones.ts` directly — replace the placeholder intro for the zone.

---

### Z001 — Zone 3 Editorial Intro
**Status:** `[x]`
**Agent:** Claude
**File:** `src/data/zones.ts` — Zone 3 entry `intro` field
**Zone facts:** Last frost Jun 1, first frost Sep 15, 90 frost-free days
**Key angle:** Shortest season in the catalog — 90 days eliminates most warm-season crops. Best ROI crops are those that mature in under 70 days: fast herbs (dill, cilantro, parsley), cool-season vegetables (lettuce, spinach, kale, radish), and cold-tolerant perennials (rhubarb, asparagus, garlic). Note: garlic planted in fall, harvested next July — it straddles the growing season and is among the best ROI crops for Zone 3.
**Acceptance:** `intro` field present and non-placeholder, 250–400 words, cites Jun 1 / Sep 15 dates, names at least 2 specific crops with ROI reasoning, zero em dashes.

---

### Z002 — Zone 4 Editorial Intro
**Status:** `[x]`
**Agent:** Claude
**File:** `src/data/zones.ts` — Zone 4 entry `intro` field
**Zone facts:** Last frost May 15, first frost Sep 25, 130 frost-free days
**Key angle:** 130 days opens the door to tomatoes and peppers with indoor starts. Still risky for long-season varieties — note early-maturing cultivars (determinate tomatoes 60–70 days). Garlic, herbs, and perennials (rhubarb, asparagus) are the anchor crops. Zone 4 gardeners benefit most from indoor starting infrastructure — mention payback of season extension tools.
**Acceptance:** `intro` field present and non-placeholder, 250–400 words, cites May 15 / Sep 25 dates, names at least 2 specific crops, zero em dashes.

---

### Z003 — Zone 5 Editorial Intro
**Status:** `[x]`
**Agent:** Claude
**File:** `src/data/zones.ts` — Zone 5 entry `intro` field
**Zone facts:** Last frost May 1, first frost Oct 5, 155 frost-free days
**Key angle:** Zone 5 is the benchmark zone for most US gardening advice. 155 days supports full-season tomatoes, peppers, cucumbers, and squash. Garlic ROI remains exceptional. Fall extension with low tunnels adds 4–6 weeks. Kale and other brassicas can overwinter in mild Zone 5 winters with protection.
**Acceptance:** `intro` field present and non-placeholder, 250–400 words, cites May 1 / Oct 5 dates, names at least 2 specific crops, zero em dashes.

---

### Z004 — Zone 6 Editorial Intro
**Status:** `[x]`
**Agent:** Claude
**File:** `src/data/zones.ts` — Zone 6 entry `intro` field
**Zone facts:** Last frost Apr 15, first frost Oct 20, 185 frost-free days
**Key angle:** 185 days is comfortable for all warm-season crops without indoor starting. Fall garden is productive — brassicas and greens planted August can produce until November. Sweet potatoes (90–120 days) are borderline viable without tricks. Garlic, tomatoes, and cucumbers are the high-ROI leaders.
**Acceptance:** `intro` field present and non-placeholder, 250–400 words, cites Apr 15 / Oct 20 dates, names at least 2 specific crops, zero em dashes.

---

### Z005 — Zone 7 Editorial Intro
**Status:** `[x]`
**Agent:** Claude
**File:** `src/data/zones.ts` — Zone 7 entry `intro` field
**Zone facts:** Last frost Apr 1, first frost Nov 5, 215 frost-free days
**Key angle:** Zone 7 is the sweet spot for year-round gardening with planning. Two-season gardening: spring/summer warm crops + fall/winter cool crops (kale, collards, spinach, garlic). Summer heat limits cool-season crops June–August. High-value summer crops: hot peppers, sweet potatoes, okra (heat-lovers that underperform in colder zones). Garlic planted October harvested June.
**Acceptance:** `intro` field present and non-placeholder, 250–400 words, cites Apr 1 / Nov 5 dates, names at least 2 specific crops, zero em dashes.

---

### Z006 — Zone 8 Editorial Intro
**Status:** `[x]`
**Agent:** Claude
**File:** `src/data/zones.ts` — Zone 8 entry `intro` field
**Zone facts:** Last frost Mar 15, first frost Nov 25, 255 frost-free days
**Key angle:** Zone 8 allows near-year-round production with proper crop sequencing. Summer heat (July–August) is the primary constraint — this is when cool-season crops cannot grow. Winter gardening is productive without protection for hardy greens. High-ROI crops: garlic (Oct–Jun), sweet potatoes (Apr–Sep), hot peppers, herbs (perennial in Zone 8 — thyme, sage, oregano, rosemary all become permanent fixtures reducing year-over-year input costs).
**Acceptance:** `intro` field present and non-placeholder, 250–400 words, cites Mar 15 / Nov 25 dates, names at least 2 specific crops, zero em dashes.

---

### Z007 — Zone 9 Editorial Intro
**Status:** `[x]`
**Agent:** Claude
**File:** `src/data/zones.ts` — Zone 9 entry `intro` field
**Zone facts:** Last frost Feb 15, first frost Dec 10, 295 frost-free days
**Key angle:** Zone 9 (coastal CA, Gulf Coast, central FL) has a reversed gardening calendar in some regions — cool-season crops grow October–April, summer heat limits production. Perennial herbs are permanent. High-value subtropical crops viable: lemongrass, ginger, turmeric, moringa (zones 9b+). Garlic planted November harvested May. Year-round herb production is the primary ROI advantage vs. colder zones.
**Acceptance:** `intro` field present and non-placeholder, 250–400 words, cites Feb 15 / Dec 10 dates, names at least 2 specific crops, zero em dashes.

---

### Z008 — Zone 10 Editorial Intro
**Status:** `[x]`
**Agent:** Claude
**File:** `src/data/zones.ts` — Zone 10 entry `intro` field
**Zone facts:** Last frost Jan 31, first frost Dec 25, 330 frost-free days
**Key angle:** Zone 10 (south FL, Hawaii, far south TX/AZ) essentially has no frost constraint. The limiting factor is summer heat and humidity rather than cold. Cool-season crops fail in summer but thrive October–March. Tropical crops (moringa, taro, ginger, turmeric, lemongrass, dragon fruit) are the differentiators — crops that cannot be grown economically anywhere else in the US. Note: many "Zone 10" gardeners are in Hawaii, which has microclimates ranging from Zone 9a to Zone 13 depending on elevation.
**Acceptance:** `intro` field present and non-placeholder, 250–400 words, cites Jan 31 / Dec 25 dates, names at least 2 specific crops, zero em dashes.

---

## ROI Deep Dive Sprint — R-series

**Context:** The site has ROI deep dives for garlic, tomato, herbs (aggregate), peppers, berries (aggregate), root vegetables (aggregate), microgreens, and salad greens. These stories add individual deep dives for high-traffic perennial and annual crops not yet covered solo.

**Template:** Read `src/content/articles/garlic-roi-analysis.md` before starting — this is the depth and structure standard. Every article must include: actual dollar math (input cost, gross value, net value, ROI multiple), multi-year projections where applicable, cited prices (USDA ERS, USDA AMS, or land-grant extension), and a break-even analysis. Category: `roi`. Target 2,000+ words.

**All R-series tasks:** Load skill at `/Users/tlawson/.claude/skills/garden-roi-content/SKILL.md`.

---

### R001 — asparagus-roi-analysis.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/articles/roi/asparagus-roi-analysis.md` → serves at `/roi/asparagus-roi-analysis/`
**Frontmatter:** `title: "Asparagus ROI: The 3-Year Investment That Pays Back for 20"`, `category: roi`, `description` 150–160 chars with "asparagus ROI" keyword
**ROI angle:** Crown cost ($2–4 each, 25 crowns needed for a family = $50–100 start cost). Year 1: no harvest. Year 2: partial harvest. Year 3+: full harvest, 1–2 lbs per crown per season. At $4–6/lb (USDA AMS), 25 crowns yield $100–300/year for 20+ years. Amortize setup cost: $50–100 crown cost + $20–30 soil prep = $80–130 total. Break-even at end of year 3. Year 4–20 ROI is essentially infinite (input = $0). Cover annual maintenance (topdressing with compost; no replanting).
**Must include:** Year-by-year yield table (Year 0 setup, Year 1 no harvest, Year 2 partial, Year 3+ full), male vs. female variety ROI difference (male plants yield more — 'Jersey Knight', 'Jersey Supreme'; explain why), bed preparation cost (deep tilling, trench method — cite extension), USDA price citation, link to asparagus crop page and fruit-tree-payback-timeline article.
**Acceptance:** 2,000+ words, dollar math present, cited prices, year-by-year table, zero em dashes, `npx astro build` passes.

---

### R002 — blueberry-roi-analysis.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/articles/roi/blueberry-roi-analysis.md` → serves at `/roi/blueberry-roi-analysis/`
**Frontmatter:** `title: "Blueberry ROI: When a $30 Bush Earns $200 a Year"`, `category: roi`
**ROI angle:** Highbush blueberry bush costs $15–30. Year 1: minimal fruit. Year 2: 1–2 lbs. Year 3+: 5–10 lbs per bush. Retail $5–8/lb (USDA AMS). 4 bushes (minimum for cross-pollination) = $60–120 start cost, $60 soil acidification (sulfur, peat), $30 mulch = ~$150–210 total setup. Year 4: 4 bushes × 7 lbs × $6 = $168 gross. By year 5: setup costs recovered. Bushes produce 20–30+ years.
**Must include:** Soil pH requirement (4.5–5.5 — this is the #1 failure point; explain pH testing and amendment cost), cultivar categories (highbush, lowbush, rabbiteye — different zone fits), cross-pollination requirement, bird netting as necessary capital cost, year-by-year yield projection table, USDA price citation, link to blueberry crop page and berry-roi-comparison article.
**Acceptance:** 2,000+ words, dollar math, soil pH section, cited prices, year-by-year table, zero em dashes, `npx astro build` passes.

---

### R003 — sweet-potato-roi-analysis.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/articles/roi/sweet-potato-roi-analysis.md` → serves at `/roi/sweet-potato-roi-analysis/`
**Frontmatter:** `title: "Sweet Potato ROI: Year 2 Costs Drop to Nearly Zero"`, `category: roi`
**ROI angle:** Year 1: buy slips ($3–5 for 12 slips, typically). Grow. Harvest. Select 4–6 roots for sprouting. Year 2+: slip propagation from your own roots — input cost drops to $0 for slips. Yield: 4–8 lbs per plant from 12 plants = 50–100 lbs. At $1.50–2.50/lb (USDA AMS) = $75–250 gross value. Year 2 net (minus fertilizer and water) approaches gross. Cover: slip production method (water glass technique), curing (cure at 85–90°F for 7–10 days before storage — critical for sweetness and shelf life), storage (55–60°F, 6–12 months).
**Must include:** Slip propagation tutorial (water glass method with jar and toothpicks), curing process and why it matters (converts starches to sugars, heals cuts), storage duration (the 6–12 month storage is a major ROI multiplier — eating your own sweet potatoes in March vs. buying at $2/lb), USDA price citation, link to sweet potato crop page and root-vegetable-roi article.
**Acceptance:** 2,000+ words, slip propagation section, curing section, dollar math, cited prices, zero em dashes, `npx astro build` passes.

---

### R004 — onion-roi-analysis.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/articles/roi/onion-roi-analysis.md` → serves at `/roi/onion-roi-analysis/`
**Frontmatter:** `title: "Onion ROI: Sets vs. Seeds vs. Transplants — Which Wins?"`, `category: roi`
**ROI angle:** Three starting methods with different economics: (1) Sets: $3–5/lb, ~100 sets, easiest, but limited variety selection and higher bolting rate. (2) Seeds: $2–4/packet, 300+ seeds, full variety access, lower cost per plant, requires indoor start 10–12 weeks ahead. (3) Transplants: $4–8/bunch of 60, mid-range cost, good variety selection. Yield: 0.75 lb per onion, 100 plants = 75 lbs. At $1–2/lb (USDA AMS) = $75–150 gross. Best ROI: seeds ($4 for 300 seeds vs. $4 for 80 sets). Storage: cured onions store 3–6 months — value captured over winter.
**Must include:** Side-by-side cost comparison table (sets vs. seeds vs. transplants: cost per plant, variety selection, bolting risk, yield), long-day vs. short-day vs. day-neutral cultivar explanation (zone-specific — critical to get right), curing process, storage duration as ROI amplifier, USDA price citation, link to onion crop page and root-vegetable-roi.
**Acceptance:** 2,000+ words, comparison table, long/short day explanation, dollar math, cited prices, zero em dashes, `npx astro build` passes.

---

### R005 — rhubarb-roi-analysis.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/articles/roi/rhubarb-roi-analysis.md` → serves at `/roi/rhubarb-roi-analysis/`
**Frontmatter:** `title: "Rhubarb ROI: A 20-Year Plant That Pays Back by Year 3"`, `category: roi`
**ROI angle:** Crown cost $5–10. Year 1: minimal harvest (let plant establish). Year 2: modest harvest. Year 3+: 3–5 lbs per crown per season, ongoing for 15–20 years. At $3–5/lb fresh (USDA AMS) = $9–25 per crown per year. Single crown: setup $10, returns $15+ annually from year 3 indefinitely. Division propagation every 5–7 years expands the patch for free. Zero annual input cost after establishment (top-dress with compost annually).
**Must include:** Division propagation (how and when — early spring; free multiplication of the patch), forced rhubarb technique (pot over crown in winter — produces pale, tender stalks worth $8–12/lb at specialty markets), cultivar section ('Victoria', 'Crimson Red', 'Canada Red' — yields and flavor), zone fit (requires cold winters for dormancy — zones 3–7 ideal; zones 8+ problematic), LEAF TOXICITY NOTE (leaves are toxic — stalks only, this is a required safety note), USDA price citation, link to rhubarb crop page and perennial-garden-economy.
**Acceptance:** 2,000+ words, toxicity warning present, forced rhubarb section, dollar math, cited prices, zero em dashes, `npx astro build` passes.

---

### R006 — cucumber-roi-analysis.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/articles/roi/cucumber-roi-analysis.md` → serves at `/roi/cucumber-roi-analysis/`
**Frontmatter:** `title: "Cucumber ROI: Why Succession Planting Triples Your Harvest"`, `category: roi`
**ROI angle:** Single planting yields for 4–6 weeks then declines. Three successions (every 3 weeks) extend harvest June–September. Seed cost: $3–5/packet for 30+ seeds — 3 successions use 12–15 seeds total, essentially one packet. Yield: 10–20 lbs per plant; 4 plants per succession × 3 successions = 12 plants × 15 lbs = 180 lbs potential. At $1.50–3/lb (USDA AMS; higher for specialty types) = $270–540 gross. Net after seed and water: $250–500+. Single-planting comparison: 4 plants × 15 lbs × $2 = $120. The succession premium is the story.
**Must include:** Succession planting schedule (dates, spacing between plantings), slicing vs. pickling vs. specialty variety ROI comparison (pickling cucumbers in bulk vs. English cucumbers at $3+/lb), trellising yield benefit (vertical production; more per square foot), cucumber beetle as the primary pest threat (economic threshold note), homemade pickle economics (pickling surplus value — link to lacto-fermentation-preservation or canning-financial-case), USDA price citation, link to cucumber crop page.
**Acceptance:** 2,000+ words, succession planting schedule, dollar math showing single vs. succession comparison, cited prices, zero em dashes, `npx astro build` passes.

---

### R007 — kale-roi-analysis.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/articles/roi/kale-roi-analysis.md` → serves at `/roi/kale-roi-analysis/`
**Frontmatter:** `title: "Kale ROI: The Cut-and-Come-Again Crop That Keeps Paying"`, `category: roi`
**ROI angle:** Seed cost $2–4/packet. Start 6–8 plants. Cut outer leaves; inner growing point continues. Single planting produces spring through fall — 6+ months. In zones 6+, overwinters and produces again next spring before bolting. Yield: 1–2 lbs/week × 20 weeks = 20–40 lbs from $3 in seed. At $2–4/lb (USDA AMS organic rates higher) = $40–160 gross. ROI: 13–53x. One of the highest ROI crops on the site when harvesting continuously vs. single-harvest crops.
**Must include:** Harvest method (outer-leaf only; never cut below the growing tip; explain what happens when you do), cultivar section ('Lacinato'/dinosaur kale vs. 'Red Russian' vs. 'Curly Green' — flavor and cold hardiness differences), overwintering in zones 6–9 (frost sweetening — flavor improves after frost; this is a genuine culinary advantage), year-round timeline (spring planting → summer harvest → fall sweetening → winter overwintering → spring bolt → replant), baby kale as microgreen-style cut (higher $/lb in smaller quantities), USDA price citation, link to kale crop page and salad-greens-roi.
**Acceptance:** 2,000+ words, harvest method section, cultivar comparison, overwintering section, dollar math, cited prices, zero em dashes, `npx astro build` passes.

---

### R008 — raspberry-roi-analysis.md
**Status:** `[x]`
**Agent:** Claude
**File:** `src/content/articles/roi/raspberry-roi-analysis.md` → serves at `/roi/raspberry-roi-analysis/`
**Frontmatter:** `title: "Raspberry ROI: Cane Management and the Year-2 Payoff"`, `category: roi`
**ROI angle:** Cane cost $3–6 per bare-root, buy 6–10 to establish a row. Year 1: floricane varieties produce nothing (first year canes are primocanes; fruit comes on second-year floricanes). Primocane (fall-bearing) varieties produce a small fall crop year 1. Year 2: full production, 1–2 lbs per cane, 10 canes = 10–20 lbs. At $4–8/lb fresh (USDA AMS) = $40–160 gross. By year 2, setup costs ($30–60 canes + trellis materials) recovered. Years 3–10: expanding patch (suckers create new canes for free), zero replanting cost.
**Must include:** Floricane vs. primocane distinction (critical — determines whether you get year-1 fruit; name examples: 'Heritage' primocane, 'Latham' floricane), cane management pruning schedule (after-harvest removal of spent floricanes; tipping primocanes; fall-bearing renovation), trellis system cost and amortization, patch expansion via suckers (free multiplication; patch doubles every 2–3 years without buying new canes), Japanese beetle as the primary pest (economic damage peak, timing, organic controls), USDA price citation, link to raspberry crop page and berry-roi-comparison.
**Acceptance:** 2,000+ words, floricane/primocane section, cane management pruning calendar, dollar math, cited prices, zero em dashes, `npx astro build` passes.

---

## Sprint D — Problem-Diagnosis / Care Articles

**Purpose:** Fill the `care` category gap (9 vs. roi's 35). These target high-intent search queries people use when something is wrong in the garden right now. Each article gets Article + BreadcrumbList JSON-LD. All are Claude tasks.

---

### D001 — blossom-end-rot.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/blossom-end-rot.md` → serves at `/guides/blossom-end-rot/`
**Frontmatter:** `title: "Blossom End Rot: Cause, Fix, and Prevention"`, `category: care`
**What it must deliver:** Explain that BER is calcium deficiency in the fruit tissue but the cause is almost always inconsistent watering preventing calcium uptake, not soil calcium shortage. Distinguish tomato, pepper, squash, and eggplant - each has different susceptibility patterns. Diagnosis section: photograph description of what BER looks like vs. other bottom rot causes (fungal). Fix section: what to do immediately (remove affected fruits, mulch, water consistently), what does NOT work (foliar calcium sprays - explain why). Prevention: mulch depth, drip irrigation scheduling, container soil considerations.
**Must include:** The foliar calcium spray debunking (this is the #1 misinformation people encounter), crop-specific susceptibility table, watering schedule math (how many inches per week, how to measure), citation from university extension (Cornell or Penn State BER fact sheet), links to tomato crop page, pepper crop page, mulching-guide article, drip-vs-hand-watering article.
**Acceptance:** 1,800+ words, diagnosis section, fix section, prevention section, calcium spray debunked, cited sources, zero em dashes, `npx astro build` passes.

---

### D002 — tomato-leaf-problems.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/tomato-leaf-problems.md` → serves at `/guides/tomato-leaf-problems/`
**Frontmatter:** `title: "Tomato Leaf Problems: 8 Causes by Symptom"`, `category: care`
**What it must deliver:** Symptom-first diagnostic guide. Structure around what the grower sees, not what the disease is. Eight sections: (1) lower leaves yellow + drop (early blight pattern), (2) leaves curl up (heat stress, physiological - usually harmless), (3) leaves curl under (viral: TYLCV or physiological - how to tell), (4) purple/bronze discoloration (phosphorus deficiency, cold soil, or TSWV), (5) brown/black spots (early blight vs. Septoria leaf spot - how to differentiate by spot size and ring pattern), (6) wilting despite adequate water (Fusarium wilt vs. bacterial wilt - the stem cut test), (7) mottled/mosaic pattern (TMV or other mosaic virus), (8) blossom drop (temperature extremes - blossom set thresholds).
**Must include:** A clear table mapping symptom → likely cause → action, the stem-cut test for bacterial wilt (floating tissue in water produces milky ooze vs. Fusarium's brown vascular ring), temperature thresholds for blossom drop, link to blossom-end-rot article, tomato crop page, integrated-pest-management article.
**Acceptance:** 1,800+ words, symptom-first structure, diagnostic table, stem-cut test described, zero em dashes, cited university extension, `npx astro build` passes.

---

### D003 — powdery-mildew-treatment.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/powdery-mildew-treatment.md` → serves at `/guides/powdery-mildew-treatment/`
**Frontmatter:** `title: "Powdery Mildew: Treatment, Prevention, and Resistant Varieties"`, `category: care`
**What it must deliver:** Clear distinction from downy mildew (same name, different pathogen, different conditions). Diagnosis: white powdery coating on upper leaf surface (vs. downy mildew's grayish fuzz on underside). Conditions that promote it: low humidity + poor airflow, NOT wet weather (opposite of most fungal diseases - this surprises people). Spray treatment options ranked by efficacy and cost: potassium bicarbonate (most effective), baking soda (works but phytotoxic at high rates - explain dosing), neem oil (preventive, not curative), copper fungicide (stronger, resistance risk). Resistant variety selection as the best long-term solution.
**Must include:** The humidity paradox (powdery mildew thrives in dry, warm weather - not wet), crop list with high susceptibility (squash, cucumber, zucchini, peas, grapes), potassium bicarbonate spray recipe and schedule, the baking soda overdose warning, resistant variety examples for squash and cucumber, link to cucumber crop page, squash/zucchini crop page, integrated-pest-management article.
**Acceptance:** 1,800+ words, clear downy vs. powdery distinction, humidity paradox explained, treatment comparison, zero em dashes, cited sources, `npx astro build` passes.

---

### D004 — squash-vine-borer.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/squash-vine-borer.md` → serves at `/guides/squash-vine-borer/`
**Frontmatter:** `title: "Squash Vine Borer: Identification, Treatment, and Succession Planting Fix"`, `category: care`
**What it must deliver:** Life cycle of Melittia cucurbitae (one generation in northern US, two in south - timing difference changes the control strategy). Identification: the adult moth (wasp mimic, red abdomen, flies in daytime), the egg (flat, brown, laid singly at stem base), the larva (inside the vine, frass at entry hole). Entry wound diagnosis. Treatment: if caught early, the vine surgery method (slit, extract larvae, cover wound with soil, keep moist to re-root). If past the point of saving: rapid crop termination and composting (NOT in the compost pile if larvae are present). Prevention: row cover timing based on moth emergence, second planting strategy (plant late July when moth flight is over - the real long-term fix for zone 6+), butternut and cushaw squash resistance.
**Must include:** Moth emergence timing by zone (use USDA map or degree-day model), the vine surgery technique (step by step), resistant species list (Cucurbita moschata species: butternut, cushaw; not C. pepo: zucchini, pumpkin), second planting timing table by zone, link to zucchini crop page, squash crop page (if exists), succession-planting-calendar article.
**Acceptance:** 1,800+ words, life cycle section, identification section, vine surgery described step by step, resistant varieties, zero em dashes, cited sources, `npx astro build` passes.

---

### D005 — aphid-management.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/aphid-management.md` → serves at `/guides/aphid-management/`
**Frontmatter:** `title: "Aphid Control: When to Act and When to Wait"`, `category: care`
**What it must deliver:** The threshold principle: a few aphids are harmless and attract beneficial predators - premature spraying destroys the predator population and makes the problem worse. Economic threshold concept applied to home gardens. Identification: species differences (green peach aphid, black bean aphid, wooly aphid on apple, root aphids in containers). The honeydew/sooty mold secondary problem. Ants as aphid farmers - if ants are climbing the plant, aphids are being protected from predators. Natural predator timeline: it takes 7-10 days for ladybug larvae to establish after first aphid colony appears. When to intervene: wilting, severe distortion, virus transmission risk (aphids as virus vectors). Controls: forceful water spray (most effective, zero cost), insecticidal soap (contact kill only, respray in 3 days), neem oil (residual).
**Must include:** The "wait for predators" principle with timeline, ant-as-aphid-farmer section, insecticidal soap homemade recipe and concentration warning (too strong kills plants), the virus transmission risk scenario (when aphids require urgent control), link to integrated-pest-management article, tomato crop page, pepper crop page.
**Acceptance:** 1,800+ words, threshold section, predator timeline, ant management section, when-to-act guidance, zero em dashes, cited sources, `npx astro build` passes.

---

### D006 — overwatering-vs-underwatering.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/overwatering-vs-underwatering.md` → serves at `/guides/overwatering-vs-underwatering/`
**Frontmatter:** `title: "Overwatering vs. Underwatering: How to Tell the Difference"`, `category: care`
**What it must deliver:** The core confusion: both cause wilting. Diagnosis by elimination and soil feel. The finger test and when it's reliable (raised beds vs. in-ground - soil type matters). Container-specific patterns: how plastic vs. terracotta pots change watering frequency, root-bound plants vs. fresh mix. The overwatering damage sequence: root hypoxia → root death → plant cannot take up water despite wet soil → wilting despite wet soil (the confusing case). Recovery: how to rehabilitate an overwatered container plant. Underwatering signs: crispy leaf edges, soil pulling away from container edges, specific wilting pattern (all leaves, not just lower). Soil moisture meters: are they worth it (the ones under $15 are unreliable; the ones over $40 are useful).
**Must include:** The "wilting despite wet soil" explanation (overwatering root death), container vs. in-ground differences, specific finger test protocol, soil moisture meter assessment with price guidance, link to mulching-guide, drip-vs-hand-watering, raised-bed-break-even articles.
**Acceptance:** 1,800+ words, overwatering root death mechanism explained, container section, diagnostic protocol, zero em dashes, cited sources, `npx astro build` passes.

---

### D007 — why-plants-bolt.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/why-plants-bolt.md` → serves at `/guides/why-plants-bolt/`
**Frontmatter:** `title: "Why Plants Bolt and How to Prevent It"`, `category: care`
**What it must deliver:** Bolting = premature flowering triggered by the plant sensing reproductive urgency. Two primary triggers: photoperiod (day length crossing a threshold) and temperature (vernalization in reverse - warm after cold breaks dormancy). Crop-specific section: lettuce bolts on day length AND heat; spinach is photoperiod-triggered almost entirely; cilantro is famously intolerant of heat; brassicas bolt on cold-then-warm cycles; beets and carrots bolt in year 2 (biennial - important to distinguish from premature bolt). What happens to flavor after bolting: bitter compounds in lettuce and spinach, seed production priority draws from leaf tissue. Prevention by crop: succession planting timing, shade cloth for heat delay, variety selection (slow-bolt cultivars - name specific ones), succession timing table. Salvage: bolt-resistant varieties, using bolted cilantro for coriander seed.
**Must include:** Vernalization reversal explanation, per-crop bolt triggers table (lettuce/spinach/cilantro/brassicas), slow-bolt variety examples for each, using bolted cilantro for coriander, link to cilantro/coriander crop page, lettuce crop page, succession-planting-calendar article, fall-garden-planning article.
**Acceptance:** 1,800+ words, per-crop bolt triggers section, variety table, salvage section, zero em dashes, `npx astro build` passes.

---

### D008 — nutrient-deficiency-guide.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/nutrient-deficiency-guide.md` → serves at `/guides/nutrient-deficiency-guide/`
**Frontmatter:** `title: "Vegetable Nutrient Deficiencies: Visual ID and Fix"`, `category: care`
**What it must deliver:** Visual identification guide for the 6 most common deficiencies in vegetable gardens. For each: what you see, why it happens, quick fix, and long-term prevention. (1) Nitrogen: older leaves yellow first, overall pale green - distinguish from natural senescence. (2) Phosphorus: purple-red underside of leaves, dark green overall - cold soil mimics this and is the more common cause. (3) Potassium: leaf edge scorch, older leaves first - distinguish from windburn and salt damage. (4) Calcium: BER, tip burn in lettuce/brassica heads - covered briefly, refer to D001. (5) Iron: young leaves yellow, veins stay green (interveinal chlorosis) - common in high-pH soil, note this is a soil pH problem not an iron soil shortage. (6) Magnesium: older leaves, interveinal chlorosis, V-shaped yellowing from leaf tip. The soil test as the definitive answer - connect to soil-test-roi article.
**Must include:** The pH-lock explanation for iron (iron unavailable above pH 7.0 even if soil contains it), how cold soil mimics phosphorus deficiency, the soil test recommendation throughout, distinction between mobile nutrients (N, P, K, Mg - older leaves affected first) vs. immobile (Ca, Fe, B - new growth affected first) as the key diagnostic principle, link to soil-ph-by-crop article, soil-test-decision-chain article, soil-test-roi article.
**Acceptance:** 1,800+ words, 6-deficiency structure, mobile vs. immobile nutrient principle, pH-lock explained, zero em dashes, cited sources, `npx astro build` passes.

---

### D009 — slug-and-snail-control.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/slug-and-snail-control.md` → serves at `/guides/slug-and-snail-control/`
**Frontmatter:** `title: "Slug and Snail Control: What Works and What Doesn't"`, `category: care`
**What it must deliver:** Honest assessment of popular control methods ranked by actual efficacy. Beer traps: work but require daily emptying and rebating - labor cost makes them impractical at scale. Copper tape: marginal evidence, does not work in rain, not cost-effective. Diatomaceous earth: only effective when bone dry, useless after rain or irrigation (i.e., the exact conditions slugs emerge in). Salt: kills on contact but damages soil and is impractical to apply at scale. Iron phosphate bait (Sluggo): breaks down to iron and phosphate, soil-safe, OMRI listed, genuinely effective - this is the clear recommendation. Metaldehyde bait: effective but toxic to pets and wildlife. Cultural controls: eliminate daytime hiding spots, water in morning not evening, copper mesh barriers for raised beds.
**Must include:** The beer trap labor math (how many traps, how often to refill), the diatomaceous earth rain problem (why it fails exactly when slugs are most active), iron phosphate as the clear winner with price per treatment, pet safety warning for metaldehyde, link to mulching-guide (mulch as slug habitat - tradeoff), raised-bed-break-even article, integrated-pest-management article.
**Acceptance:** 1,800+ words, method-by-method ranking, iron phosphate recommendation with reasoning, pet safety note, zero em dashes, cited sources, `npx astro build` passes.

---

### D010 — cucumber-beetle-control.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/cucumber-beetle-control.md` → serves at `/guides/cucumber-beetle-control/`
**Frontmatter:** `title: "Cucumber Beetle: Identification, Damage, and Control"`, `category: care`
**What it must deliver:** Two species: spotted (Diabrotica undecimpunctata) and striped (Acalymma vittatum) - different geographic ranges, same damage. The secondary threat: striped cucumber beetle is the primary vector of bacterial wilt (Erwinia tracheiphila) - a plant infected by a beetle can't be saved, making early control critical in eastern US. Identification: size, coloring, egg clusters at soil base. Life cycle: overwintering adult, spring emergence, root feeding by larvae, adult feeding on leaves and flowers. Control timing: adults in early spring before egg laying is the critical window. Kaolin clay as early-season physical barrier. Row cover until flowering (must remove for pollination). Pyrethrin as last resort. Resistant varieties.
**Must include:** Bacterial wilt transmission mechanism and why infected plants cannot be saved, the stick-test for bacterial wilt (pull stem apart slowly - stringy threads = bacterial wilt), geographic range map context (striped beetle + bacterial wilt worst in eastern US, less issue west of Rockies), row cover pollination timing issue, link to cucumber crop page, powdery-mildew-treatment article (integrated pest context), integrated-pest-management article.
**Acceptance:** 1,800+ words, two-species section, bacterial wilt transmission explained, stick-test described, control timing section, zero em dashes, cited sources, `npx astro build` passes.

---

### D011 — root-rot-prevention.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/root-rot-prevention.md` → serves at `/guides/root-rot-prevention/`
**Frontmatter:** `title: "Root Rot in Vegetable Gardens: Causes, Diagnosis, and Prevention"`, `category: care`
**What it must deliver:** Root rot is a symptom, not a single disease - caused by Pythium, Phytophthora, Fusarium, or Rhizoctonia depending on conditions. All share the common trigger: waterlogged anaerobic soil. Diagnosis: pull up the plant and look at roots - healthy roots are white and firm, rotted roots are brown/black and mushy. Aboveground signs: sudden wilting despite moist soil (same confusion as overwatering - because that IS the cause). Soil and container factors: compacted clay soils, pots without drainage, raised beds with impermeable liner. Prevention: soil structure (organic matter, perlite for drainage in containers), raised beds in heavy clay areas, drip irrigation over overhead watering. Fungicide drench: only useful as preventive or at very first sign; copper-based; pyrethrin not effective.
**Must include:** Root pull diagnostic (white vs. brown/mushy), the clay soil compaction problem, raised bed as the structural fix, perlite ratios for container mixes, link to raised-bed-break-even, overwatering-vs-underwatering, soil-ph-by-crop articles.
**Acceptance:** 1,800+ words, diagnosis section (root pull described), soil structure section, container section, zero em dashes, cited sources, `npx astro build` passes.

---

### D012 — deer-and-rabbit-fencing.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/deer-and-rabbit-fencing.md` → serves at `/guides/deer-and-rabbit-fencing/`
**Frontmatter:** `title: "Deer and Rabbit Fencing: Heights, Materials, and Cost Breakdown"`, `category: care`
**What it must deliver:** Two separate problems with different solutions. Rabbits: ground level, chew cleanly (vs. deer's ragged tear), 2-foot hardware cloth buried 6 inches down is the definitive solution. Deer: highly variable by season (worst in late winter when browse is scarce), jump ability overestimated in many references (8-foot vertical clear, but 6-foot fence works in most garden contexts because deer assess both height and width), and behavioral repellent options with honest efficacy assessment (motion-activated sprinklers: effective but expensive; soap bars: marginal; commercial spray repellents: work for 2-3 weeks then require reapplication). The double-fence strategy for high-pressure areas. Cost breakdown: 100-foot perimeter, hardware cloth vs. welded wire vs. polypropylene deer fence.
**Must include:** Rabbit hardware cloth spec with burial depth, deer jump height nuance (they prefer not to jump into confined spaces - explains why 6-foot works when 8-foot seems required by physics), repellent reapplication schedule and annual cost, the double-fence principle, cost table for 100-foot perimeter in 3 material options, link to raised-bed-break-even (fencing as part of setup cost), integrated-pest-management article, the-500-dollar-garden article.
**Acceptance:** 1,800+ words, separate rabbit and deer sections, cost table, repellent efficacy honest assessment, zero em dashes, cited sources, `npx astro build` passes.

---

## Sprint SR — Specialty High-Drama ROI Articles

**Purpose:** The site's differentiator is honest ROI math. These four crops have the most extreme economics and generate the most shareable content. All are Claude tasks, `roi` category.

---

### SR001 — saffron-roi-analysis.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/saffron-roi-analysis.md` → serves at `/roi/saffron-roi-analysis/`
**Frontmatter:** `title: "Saffron ROI: Growing the World's Most Expensive Spice"`, `category: roi`
**ROI angle:** Retail price: $10–25/gram ($300–700/oz) for quality saffron (USDA AMS or cite specialty spice market reports). Each Crocus sativus corm produces one flower per year with 3 stigmas. It takes roughly 150–200 flowers to produce 1 gram dried saffron. Corm cost: $1–2 per bulb from specialty suppliers (Harris Seeds, Holland Bulb Farms pricing). 50 corms = $50–100. 50 corms × 1 flower each = 50 flowers = 0.25–0.33 grams dried saffron × $10–15/gram (conservative wholesale) = $2.50–5.00 year 1. BUT corms multiply: each corm produces 2–7 cormlets per season. By year 3: 50 corms → 350+ corms → 1.75+ grams saffron = $17.50–26.25+. The math improves every year as the patch expands with zero replanting cost. Labor is the real cost: harvest is 1–2 hours per gram at the scale most home gardeners operate. The honest answer: you're not producing saffron to save money on saffron. You're producing it because the patch doubles every year for free and the product is genuinely valuable.
**Must include:** Per-corm cost and flower math (show the work), the corm multiplication rate over 3 years (table), the harvest labor reality (1-2 hours per gram), comparison to buying retail (break-even analysis), growing conditions (Crocus sativus needs dry summer dormancy - this limits zones without irrigation control), harvest timing (stigmas must be harvested the morning they open, before noon), drying and storage (correct drying preserves crocin content), link to saffron crop page, garlic-roi-analysis (as the ROI deep-dive format reference), perennial-garden-economy article.
**Acceptance:** 2,000+ words, per-corm math, 3-year corm multiplication table, harvest labor section, break-even analysis, cited prices, zero em dashes, `npx astro build` passes.

---

### SR002 — wasabi-roi-analysis.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/wasabi-roi-analysis.md` → serves at `/roi/wasabi-roi-analysis/`
**Frontmatter:** `title: "Wasabi ROI: The $100/lb Vegetable That Tests Every Gardener"`, `category: roi`
**ROI angle:** Fresh wasabi rhizome sells for $80–150/lb at specialty retailers and Japanese restaurants (cite Oregon Wasabi or Pacific Coast Wasabi market pricing, or USDA specialty crop data). Setup cost: rhizome divisions or tissue culture plants, $15–30 per plant from specialty suppliers. Wasabi (Wasabia japonica) requires: cool temperatures (50–70°F), moving water or extremely consistent moisture, high humidity, filtered light. This is not a difficult crop in the Pacific Northwest; it is nearly impossible in most of the continental US without infrastructure. Time to harvest: 18–24 months from planting to first rhizome harvest. Yield: 100–200 grams per plant at harvest. At $80/lb ($176/kg = $5/100g): 100g = $5. NOT a financially compelling case at home scale. The honest analysis: wasabi makes financial sense only if you have a Pacific Northwest climate naturally, a restaurant buyer lined up, and space for 50+ plants. For most gardeners, it's a fascinating specialty crop with high failure risk and modest returns.
**Must include:** The "fake wasabi" context (95% of wasabi served in the US is horseradish/mustard/dye paste - real wasabi is genuinely rare and valuable), the climate requirements and what infrastructure costs to replicate them, the 18-24 month patience requirement, yield and price math, the honest verdict (who it makes sense for, who it doesn't), comparison to growing ginger or turmeric as alternatives for exotic-crop gardeners, link to wasabi crop page, heirloom-vs-hybrid article, saffron-roi-analysis (as companion piece).
**Acceptance:** 2,000+ words, the fake-wasabi context section, climate requirements and cost, yield/price math, honest verdict section, cited prices, zero em dashes, `npx astro build` passes.

---

### SR003 — hops-roi-analysis.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/hops-roi-analysis.md` → serves at `/roi/hops-roi-analysis/`
**Frontmatter:** `title: "Hops ROI: Growing the $10/oz Craft Beer Ingredient"`, `category: roi`
**ROI angle:** Fresh hops at farmers markets and homebrew shops: $2–4/oz fresh, $8–15/oz dried whole cone, $15–25/oz pelletized (cite homebrewing supply pricing or USDA specialty crop data). Rhizome cost: $5–15 per rhizome (variety dependent - Cascade is common and cheaper; Citra and Mosaic are proprietary and unavailable as rhizomes). Year 1: small harvest (plant establishes bine system). Year 2 onward: 1–2 lbs dried hops per plant (Cascade under good conditions). At $10/oz dried = $160/lb: 1.5 lbs = $240 per established plant per year. BUT the vertical growing infrastructure (poles, wire, twine, or trellis system) costs $30–80 per plant setup. Plants live 20+ years with crown division for free propagation. The honest math: hops are genuinely high-value if you have the vertical space (minimum 15 feet), the right climate (need cold winters for dormancy), and a use for them (homebrew or local buyers).
**Must include:** The homebrew market context (why home growers can find buyers or self-consume at premium value), variety section (Cascade as the beginner variety, Centennial, Chinook; avoid proprietary varieties with no rhizome availability), vertical infrastructure cost and amortization, the 15-foot minimum height requirement, year 1 vs. year 2+ yield trajectory, drying and storage (hops oxidize rapidly - proper drying and vacuum storage required), link to hops crop page, perennial-garden-economy article, berry-roi-comparison (as a comparison reference for perennial crop economics).
**Acceptance:** 2,000+ words, variety section, infrastructure cost, year 1/2+ yield table, drying/storage section, cited prices, zero em dashes, `npx astro build` passes.

---

### SR004 — is-corn-worth-growing.md
**Status:** `[x]`
**Agent:** Claude
**Load skill:** garden-roi-content
**File:** `src/content/articles/is-corn-worth-growing.md` → serves at `/roi/is-corn-worth-growing/`
**Frontmatter:** `title: "Is Corn Worth Growing? The Home Garden Math Says Probably Not"`, `category: roi`
**ROI angle:** Sweet corn retail: $0.25–1.00/ear at peak season, $0.50–2.00 off-season (USDA AMS). Space requirement: 12–18 inches per plant in a block (not rows - corn is wind pollinated and needs a 4×4 minimum block). 16 plants minimum for pollination in a 16 sq ft block. Yield: 1–2 ears per plant. 16 plants = 20–25 ears maximum. At $0.50/ear = $10–12.50 gross. Space cost: 16 sq ft producing $10 in corn vs. 16 sq ft of tomatoes producing $80–160 or peppers producing $60–100. The verdict: corn is the worst ROI crop in the garden on a per-square-foot basis. BUT: the "peak season eaten 30 minutes after harvest" argument is real - flavor degrades faster than any other vegetable (sugars convert to starch within hours). This is the one legitimate argument for home corn: quality you literally cannot buy.
**Must include:** The pollination block requirement (why you can't grow 2 plants in a row), the sugar-to-starch degradation timeline (how fast corn loses sweetness after harvest - cite food science), the space opportunity cost calculation (corn vs. tomatoes vs. peppers in same square footage), heirloom varieties for flavor (not ROI), the honest verdict (the ONE reason it makes sense: flavor you can't buy), link to corn crop page, vegetable-value-per-square-foot article, tomato crop page.
**Acceptance:** 2,000+ words, pollination block section, sugar-starch degradation, opportunity cost table, honest verdict, cited prices and food science source, zero em dashes, `npx astro build` passes.

