# Crop Inventory Alignment: Mobile App vs. Web Encyclopedia

Last updated: 2026-04-12

## Changes Made (2026-04-12)

Implemented the display_name / is_common curation plan across the mobile app:

**variety_library.json:**
- Added `display_name` field to all 41 curated is_common=true entries (e.g., "Garden Tomato" → display_name "Tomato")
- Added `web_slug` field linking entries to their web encyclopedia page where one exists
- Demoted 53 entries from is_common=true to false (ornamentals, wild species, wrong-genus entries, regional variants covered by existing crops)
- Result: 627 total entries, 41 is_common=true (down from 94)

**Mobile app code changes:**
- `database.ts`: migrations for `display_name TEXT` and `web_slug TEXT` columns
- `seed-data.ts`: INSERT includes new columns; refresh pass runs on every launch to propagate curation updates to existing installs
- `types/models.ts`: `display_name: string | null` and `web_slug: string | null` added to `Variety`
- `variety-repository.ts`: search uses `COALESCE(display_name, name) LIKE ? OR name LIKE ?` — common name finds it, USDA name still finds it
- `plant-repository.ts`: JOIN queries use `COALESCE(v.display_name, v.name) AS variety_name` — all downstream screens automatically show display name
- `planning.ts`: both recommendation queries updated to COALESCE
- `add-plant.tsx`: FlatList renders `item.display_name ?? item.name`

## Overview

The mobile app (`~/projects/garden-roi`) and the web encyclopedia (`~/projects/garden-roi-web`) maintain separate but related crop inventories with different scope and naming conventions.

| | Mobile App | Web App |
|---|---|---|
| **File** | `assets/data/variety_library.json` | `src/content/plants/*.md` |
| **Total entries** | 627 | 121 |
| **Flagged `is_common`** | 94 | n/a (all web entries are curated) |
| **Schema** | id, usda_symbol, name, scientific_name, category, min_days, max_days, avg_yield_lb, avg_price_lb, is_common | All mobile fields + seed_cost, watering, sunlight, companion_plants, direct_sow_ok, indoor_weeks_needed, hero_image, description (long-form body) |

## Naming Convention Mismatch

The two apps use different naming conventions. **Do not compare by slug alone.**

| Mobile name | Web slug |
|---|---|
| Garden Tomato | tomato |
| Irish Potato | potato |
| Garden Cucumber | cucumber |
| European Plum | plum |
| Garden Pea | garden-pea |
| Ruvo Kale | broccoli-rabe |

The mobile app uses USDA-official plant names; the web uses common kitchen names. Cross-referencing requires fuzzy/keyword matching, not exact slug comparison.

## Coverage Summary

Of the 94 mobile `is_common=true` crops:

- **82 are covered** by existing web plants (either by exact name or through naming variants — e.g., all pear variants → `pear`, all mint variants → `mint`)
- **12 have no web equivalent** (see below)

The web has 121 entries — more than mobile's 94 common crops — because the web was curated independently to include crops that matter for home gardeners but weren't flagged `is_common` in the mobile library, or use different groupings (e.g., `green-bean` covers adzuki bean, kidney bean, moth bean, rice bean, sieva bean, etc.).

## Mobile Common Crops Not Yet in Web

These 12 mobile `is_common=true` crops have no web equivalent. Actionability varies:

| Crop | Category | Yield | Price | Notes |
|---|---|---|---|---|
| **Peanut** | Vegetable | 3 lb | $3/lb | High priority — mainstream crop |
| **Soybean** | Vegetable | 3 lb | $3/lb | Medium — we have edamame (same plant); dried/roasted use case differs |
| **Bitter Melon** (Balsampear) | Vegetable | 12 lb | $1.99/lb | Medium — common in Asian cooking; unusual in US home gardens |
| **Pigeonpea** | Vegetable | 3 lb | $3/lb | Low-medium — South Asian staple, unusual in US |
| **Hyacinthbean** | Vegetable | 3 lb | $3/lb | Low — lablab bean; ornamental, edible, niche |
| Calamint | Herb | 0.5 lb | $15/lb | Low — obscure herb; limited culinary relevance |
| Gingermint | Herb | 0.5 lb | $15/lb | Low — mint variant; covered adequately by mint/spearmint |
| Jackbean | Vegetable | 3 lb | $3/lb | Low — tropical legume; not commonly grown in US |
| Sword Jackbean | Vegetable | 3 lb | $3/lb | Low — same as above |
| European Dewberry | Fruit | 5 lb | $6/lb | Low — covered adequately by blackberry |
| European Mountain Ash | Fruit | 5 lb | $6/lb | Low — ornamental/wildlife, not a kitchen crop |
| Bushbean | Vegetable | 3 lb | $3/lb | Duplicate — same plant as green-bean |

**Recommended additions from this list:** Peanut (clear gap), Soybean (if focusing on dried bean use case distinct from edamame), Bitter Melon (high yield, common in Asian markets).

## The 533 `is_common=false` Mobile Crops

These are mostly USDA-registered subspecies, regional varieties, and specialist crops — not mainstream home garden options. Breakdown: 429 Vegetables, 78 Herbs, 26 Fruits.

Examples of the type: Alkali Pepperweed, Apalachicola False Rosemary, Brazosmint, African Locust Bean. These are unlikely candidates for the web encyclopedia in its current scope.

**Exceptions worth watching:** any high-value herb or specialty fruit that becomes mainstream could be promoted to web coverage on a case-by-case basis.

## Estimating Remaining Web Work

The web encyclopedia's practical completion target is covering all mobile `is_common=true` crops plus any additional crops that are common in home gardens but weren't in the mobile library's common set.

| Status | Count |
|---|---|
| Mobile common covered in web | 82 |
| Web-only crops (not in mobile common) | 39 |
| Mobile common not in web | 12 |
| **Actionable gaps (high/medium priority)** | **~3** (Peanut, Soybean, Bitter Melon) |

The web encyclopedia at 121 crops is substantially complete against the mobile `is_common` baseline. Future expansion should focus on:
1. The 3 actionable mobile gaps above
2. New crops identified by user requests or content strategy (not mobile-driven)
3. Depth expansion of existing pages rather than breadth

## Per-Run Capacity

When writing new crop pages in bulk, practical limits per session:
- **15 crops** — comfortable; quality consistent throughout
- **20 crops** — achievable with pre-planned data (scientific names, yield figures, seed costs, companion plants) loaded before writing starts
- **25+ crops** — quality risk on later entries as context fills; not recommended

Pre-planning each crop with key data before the writing run significantly increases per-run capacity. The fat story card format used in tasks.md supports this.
