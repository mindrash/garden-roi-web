// USDA Hardiness Zone data: frost dates and frost-free days
// Sources: USDA Plant Hardiness Zone Map; cooperative extension frost date tables

export interface ZoneData {
  zone: number;
  lastFrost: string;   // approximate last spring frost date
  firstFrost: string;  // approximate first fall frost date
  frostFreeDays: number;
  label: string;
  intro?: string;
}

export const ZONES: ZoneData[] = [
  {
    zone: 3,
    lastFrost: 'Jun 1',
    firstFrost: 'Sep 15',
    frostFreeDays: 90,
    label: 'Zone 3 (very cold)',
    intro: 'Zone 3 gardens run on a 90-day clock - last frost around June 1, first frost around September 15, and that is the entire season. Most warm-season crops need 70-90+ days of frost-free growing, which means the margin is thin before any setback from a late cold snap or early fall freeze. The crops that deliver real returns here are those that mature in under 70 days or that sidestep the season constraint entirely. Radishes finish in 30 days. Lettuce and spinach in 45-60 days. Kale in 55-65 days. These cool-season crops also carry strong retail prices - spinach and kale run $2-4 per pound fresh, and the seed cost to grow them is pennies per square foot of harvest. The single best-performing crop for Zone 3 on a cost-return basis is garlic. Garlic sidesteps the season problem by overwintering: plant cloves in October before the ground freezes hard, leave them dormant through winter, and harvest full heads the following July - timed to be a week or two past the last frost date, well before September 15. The Year 2 economics improve sharply when you replant from your own saved heads, cutting seed cost to zero. Perennial crops - asparagus, rhubarb, chives, hardy herbs like thyme - also perform well because their setup cost amortizes over 10-20 years of harvests with zero replanting. The constraint Zone 3 imposes most sharply is on warm-season crops: sweet potatoes need 100-120 days, melons 80-100, and full-flavored peppers need 75+ days post-transplant. Without a greenhouse or row cover for season extension, these crops are marginal to not viable. Determinate tomatoes in the 60-65 day range started indoors 6-8 weeks before June 1 are the outer edge of what works reliably. Build your Zone 3 garden around cool-season crops and overwintered perennials, and the short season becomes a workable constraint rather than a fatal one.',
  },
  {
    zone: 4,
    lastFrost: 'May 15',
    firstFrost: 'Sep 25',
    frostFreeDays: 130,
    label: 'Zone 4 (cold)',
    intro: 'A 130-day season from May 15 to September 25 opens the door to a real vegetable garden while still requiring careful variety selection for anything that pushes the frost-free limit. The anchor crops are the same as Zone 3 - garlic, fast-maturing greens, kale, perennial herbs - but the extra 40 days makes tomatoes and cucumbers genuinely viable with the right setup. The key word is setup. Full-season tomatoes need 10-12 weeks of indoor starts before the May 15 last frost date, which means seeds started in early March. Determinate varieties in the 60-70 day range are more forgiving: short-season types like Siletz and Glacier produce reliably in Zone 4 without requiring perfect timing. The ROI case for starting infrastructure - a simple LED grow light, a heat mat for germination - pays off quickly when you can start your own tomato transplants for cents each rather than paying $4-8 per started plant at the nursery. Garlic remains the highest-ROI crop in Zone 4 because it requires zero infrastructure, overwinters without attention, and the Year 2 replanting cost drops to zero when you save your own stock. The 130-day window also supports cucumbers (50-65 days from transplant) and summer squash (50-60 days), both of which produce heavily in the available season. What Zone 4 still eliminates: sweet potatoes reliably, long-season peppers, and melons without season extension. A cold frame or low tunnel adds 3-4 weeks on each end of the season, effectively pushing Zone 4 production into Zone 5 territory for the crops inside it. For gardeners willing to make that modest infrastructure investment, the calculus shifts considerably - and the payback on even a simple cold frame happens in the first season through earlier harvests and extended fall production.',
  },
  {
    zone: 5,
    lastFrost: 'May 1',
    firstFrost: 'Oct 5',
    frostFreeDays: 155,
    label: 'Zone 5 (cool)',
    intro: 'Zone 5 is the reference zone for most US gardening advice - last frost around May 1, first frost around October 5, 155 frost-free days. Most USDA and cooperative extension recommendations, most seed catalog descriptions, and most days-to-maturity numbers are written with a Zone 5 gardener in mind. That means the full catalog of warm-season vegetables is accessible here without heroic measures. Tomatoes, peppers, cucumbers, squash, beans, and corn all fit comfortably in the 155-day window when started at the right time. The highest-ROI crops in Zone 5 are the ones that rise to the top in most analyses: garlic leads because the Year 2 input cost drops to essentially zero once you are saving your own seed stock. Tomatoes follow - 10-15 pounds per plant at $3-5 per pound retail for heirloom varieties represents the best return per square foot of any annual crop at scale. Cucumbers with succession planting - three sowings spaced three weeks apart starting around Memorial Day - extend productive harvest from June through September and deliver far more total yield than a single planting. The fall garden is Zone 5\'s underused asset. Kale, spinach, and arugula planted in late August produce into October and survive light frosts without protection. Row covers push that window 4-6 weeks further. Garlic planted in October goes in after summer crops come out, using beds that would otherwise sit empty through the fall. The Zone 5 constraint is not season length but summer heat: lettuce bolts when temperatures consistently exceed 75°F, spinach follows day length past 14 hours, and cool-season crops planted too late into summer struggle regardless of frost dates. Time cool-season crops for April-May and again from late August onward, and Zone 5 supports two productive windows per year.',
  },
  {
    zone: 6,
    lastFrost: 'Apr 15',
    firstFrost: 'Oct 20',
    frostFreeDays: 185,
    label: 'Zone 6 (moderate)',
    intro: 'Zone 6 runs 185 frost-free days from around April 15 to October 20 - long enough to support everything Zone 5 grows with a more relaxed planting calendar and a genuine fall extension. The extra 30 days over Zone 5 means warm-season crops have more buffer before the fall frost, and cool-season fall crops can go in as late as early September with confidence. The high-ROI anchors here are tomatoes, garlic, and cucumbers. Tomatoes planted outdoors after the mid-April last frost have until October 20 to produce, and an indeterminate variety in fertile soil delivers 15-20+ lbs by season\'s end at $3-5 per pound for heirloom or specialty types - the highest-value crop most Zone 6 gardens can grow on a per-square-foot basis. Sweet potatoes become reliably viable in Zone 6: the 90-120 day requirement fits comfortably between a May 1 planting and a late-September harvest before first frost. Slips cost $3-5 for a dozen, and once you are saving your own roots for sprouting the following year, the input cost drops to near zero for a crop that yields 50-100 lbs from a modest planting. The fall garden in Zone 6 is legitimately productive. Brassicas - kale, broccoli, collards - planted in August produce until November in most years. Garlic goes in October and represents some of the best use of fall bed space in the zone. The planning challenge in Zone 6 is not season length but transitions: cool-season crops need to finish before late June as heat builds, then replant begins in late August as temperatures moderate. Work those two windows and Zone 6 becomes one of the most productive two-season garden zones in the country, delivering real returns from spring through late fall.',
  },
  {
    zone: 7,
    lastFrost: 'Apr 1',
    firstFrost: 'Nov 5',
    frostFreeDays: 215,
    label: 'Zone 7 (mild)',
    intro: 'Zone 7 spans 215 frost-free days from around April 1 to November 5, and the gardening calendar divides into two productive windows separated by a hot summer that shuts down cool-season crops. That two-season structure - spring through early summer, then fall through early winter - is the defining feature of Zone 7 gardening and the key to getting the most from the available time. The spring window runs April through June: cool-season crops thrive in the mild temperatures and warm-season crops get established before summer heat peaks. The fall window opens in late August and runs through November, sometimes into December, when brassicas, greens, and spinach planted in summer heat reach full production as temperatures drop. Kale and collards planted in August often produce continuously until January in Zone 7. Garlic planted in October sits through a mild winter and harvests in June - a particularly clean calendar fit, with fall planting coinciding with warm-season crop removal and the June harvest coming ahead of peak summer heat. The crops that differentiate Zone 7 from colder zones are the heat-lovers. Hot peppers are among the highest-ROI crops here because the long, hot summer develops the full capsaicin and flavor that shorter cool summers cannot achieve. Sweet potatoes planted May 1 have 120-150 days before November frost - more than enough for any variety. Okra, which is marginal in Zones 5-6, is reliable and productive in Zone 7. Perennial herbs - thyme, sage, oregano, rosemary - survive Zone 7 winters consistently and become permanent plants that reduce annual input costs over time. The constraint is summer heat itself: June through August is essentially a maintenance window for most cool-season crops, not a production period. Succession sowing of heat-tolerant varieties like heat-resistant lettuce can extend some cool-season production, but the two-season model is the core strategy.',
  },
  {
    zone: 8,
    lastFrost: 'Mar 15',
    firstFrost: 'Nov 25',
    frostFreeDays: 255,
    label: 'Zone 8 (warm)',
    intro: 'With 255 frost-free days from around March 15 to November 25, Zone 8 approaches year-round production for anyone who plans around the one real constraint: summer heat from mid-June through August, when daytime temperatures regularly exceed 90°F and cool-season crops cannot grow. Outside that roughly 10-week summer window, Zone 8 supports continuous production across three seasons. The warm-season growing window is long - from the March 15 last frost through late September - and supports the highest-value crops: tomatoes, sweet potatoes, peppers, eggplant, and cucumbers all thrive with the extended season. Sweet potatoes planted in April can grow 170 days before fall harvest, producing yields that exceed what compressed northern seasons allow. The fall-to-winter garden is Zone 8\'s clearest advantage. Kale, collards, spinach, and brassicas planted in September grow through October, November, and into December in most years without protection. Garlic planted in October sits through a mild winter and produces full heads by May or early June - one of the most efficient crops in the Zone 8 calendar. What makes Zone 8 economics particularly favorable is the perennial herb calculation. Rosemary, thyme, sage, and oregano do not die back in Zone 8 winters - they become permanent woody plants that expand year over year. After the initial planting cost, these herbs deliver $3-5 per pound at retail with zero annual replanting cost, and established plants produce cuttings for free expansion indefinitely. A single rosemary plant established in Year 1 can supply an entire household\'s needs from Year 2 forward. The planning task in Zone 8 is not finding enough growing days but sequencing crops to keep beds productive through all four quarters - succession planting and deliberate fall crop timing are more critical here than in colder zones.',
  },
  {
    zone: 9,
    lastFrost: 'Feb 15',
    firstFrost: 'Dec 10',
    frostFreeDays: 295,
    label: 'Zone 9 (hot)',
    intro: 'Zone 9 spans 295 frost-free days from around February 15 to December 10, but the practical growing calendar is partly reversed from what gardeners in colder zones expect. In most Zone 9 regions - coastal California, the Gulf Coast lowlands, central Florida - summer temperatures regularly exceed 95-100°F from June through September, shutting down cool-season crops and stressing many warm-season staples. The productive cool-season window runs October through April, with summer functioning more like the dormant season of a northern winter than a primary growing period. The crops that define Zone 9 ROI are those that either thrive in this reversed calendar or benefit from the zone\'s year-round warmth. Garlic planted in November harvests in May - fully workable with the mild Zone 9 winter. Cool-season crops like lettuce, spinach, kale, and brassicas planted in October reach peak production in the November-February window before summer heat arrives. The year-round herb advantage becomes more pronounced in Zone 9. Rosemary, thyme, sage, and oregano grow continuously here without winter dieback, expanding into large producing plants that need no replanting. Lemongrass is reliably perennial in Zone 9 and sells for $3-6 per pound at farmers markets and specialty grocers - it requires no infrastructure beyond planting and expands freely each season. Ginger and turmeric are viable in Zone 9b and warmer, adding high-value specialty crops to the production calendar. Fresh ginger runs $4-8 per pound at retail; homegrown turmeric has color intensity that dried commercial powder lacks. The summer heat window is not wasted for heat-tolerant crops: sweet potatoes, okra, southern peas, and hot peppers produce well from April through June before peak heat sets in. Zone 9\'s primary planning challenge is resisting the urge to apply northern-zone thinking to a fundamentally different calendar where the cool season is the peak season.',
  },
  {
    zone: 10,
    lastFrost: 'Jan 31',
    firstFrost: 'Dec 25',
    frostFreeDays: 330,
    label: 'Zone 10 (tropical)',
    intro: 'Zone 10 runs 330 frost-free days from around January 31 to December 25 - which in practice means frost is rarely the constraint, and the limiting factors on crop selection are summer heat, humidity, and rainfall patterns rather than cold. South Florida, the southern tip of Texas and Arizona, and most of Hawaii fall here, though Hawaii\'s microclimates span nearly four USDA zones depending on elevation. The Zone 10 gardening calendar runs cool-season crops from October through March, when temperatures are moderate enough for lettuce, brassicas, spinach, and garlic. Summer months are hot and humid in most Zone 10 locations, which is hostile to cool-season crops but ideal for tropical production that is commercially impossible or prohibitively expensive everywhere else in the US. Moringa (Moringa oleifera) grows as a perennial tree in Zone 10 and produces edible leaves marketed at $15-30 per pound dried at specialty retailers. Taro produces reliably in the wet summer heat. Ginger planted in spring harvests in fall at yields that make the $4-8 per pound retail price financially interesting. Lemongrass becomes a permanent fixture, expanding each year from the original planting at zero replanting cost. Fresh turmeric rhizomes retail at $6-10 per pound at natural food stores - a specialty crop with essentially no Zone 10 home garden competition. Standard crops perform here too: tomatoes and peppers grow through the cool season in Zone 10 locations that do not exceed 100°F in summer, and garlic planted in November harvests in April ahead of peak heat. The honest constraint is that Zone 10 summer heat eliminates many benchmark annual crops during the months when northern gardeners are at peak production. Build around the tropical perennials and the cool-season winter window, and Zone 10 produces crops that no other zone in the continental US can grow at all.',
  },
];

export const ZONE_MAP = new Map<number, ZoneData>(ZONES.map((z) => [z.zone, z]));

// Crops with days_max <= frostFreeDays can direct-sow in that zone
// Crops with days_max > frostFreeDays but days_min <= frostFreeDays - (indoor_weeks * 7) can start indoors
export function classifyCropForZone(
  daysMin: number,
  daysMax: number,
  indoorWeeksNeeded: number,
  frostFreeDays: number,
): 'direct-sow' | 'start-indoors' | 'marginal' | 'not-recommended' {
  if (daysMax <= frostFreeDays) {
    return 'direct-sow';
  }
  // Can it work with indoor start? effective season = daysMax - (indoorWeeks * 7)
  const indoorBoost = Math.max(indoorWeeksNeeded, 6) * 7; // at least 6 weeks indoor lead
  if (daysMin <= frostFreeDays && daysMax - indoorBoost <= frostFreeDays) {
    return 'start-indoors';
  }
  if (daysMin <= frostFreeDays + 14) {
    return 'marginal';
  }
  return 'not-recommended';
}
