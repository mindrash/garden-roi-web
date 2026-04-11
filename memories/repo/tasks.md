# Garden ROI Web — Task Backlog
_Last updated: April 10, 2026 (CA008-CA034, PE001-PE014, PB001-PB011 complete)_

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
**Status:** `[>]`
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
**Status:** `[>]`
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
**Status:** `[ ]`
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
**Status:** `[ ]`
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
**Status:** `[ ]`
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
**Status:** `[ ]`
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
**Status:** `[ ]`
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
**Status:** `[ ]`
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

## Done

- **T001-T011:** All infrastructure tasks complete (schema, routing, SEO, pages)
- **C001-C011:** All content rewrites complete (plants + articles)
- **P001-P007:** All Tier 1 new plant pages complete (garlic, kale, arugula, cherry-tomato, hot-pepper, garden-pea, winter-squash)
