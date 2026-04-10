// USDA Hardiness Zone data: frost dates and frost-free days
// Sources: USDA Plant Hardiness Zone Map; cooperative extension frost date tables

export interface ZoneData {
  zone: number;
  lastFrost: string;   // approximate last spring frost date
  firstFrost: string;  // approximate first fall frost date
  frostFreeDays: number;
  label: string;
}

export const ZONES: ZoneData[] = [
  { zone: 3, lastFrost: 'Jun 1',  firstFrost: 'Sep 15', frostFreeDays: 90,  label: 'Zone 3 (very cold)' },
  { zone: 4, lastFrost: 'May 15', firstFrost: 'Sep 25', frostFreeDays: 130, label: 'Zone 4 (cold)' },
  { zone: 5, lastFrost: 'May 1',  firstFrost: 'Oct 5',  frostFreeDays: 155, label: 'Zone 5 (cool)' },
  { zone: 6, lastFrost: 'Apr 15', firstFrost: 'Oct 20', frostFreeDays: 185, label: 'Zone 6 (moderate)' },
  { zone: 7, lastFrost: 'Apr 1',  firstFrost: 'Nov 5',  frostFreeDays: 215, label: 'Zone 7 (mild)' },
  { zone: 8, lastFrost: 'Mar 15', firstFrost: 'Nov 25', frostFreeDays: 255, label: 'Zone 8 (warm)' },
  { zone: 9, lastFrost: 'Feb 15', firstFrost: 'Dec 10', frostFreeDays: 295, label: 'Zone 9 (hot)' },
  { zone: 10, lastFrost: 'Jan 31', firstFrost: 'Dec 25', frostFreeDays: 330, label: 'Zone 10 (tropical)' },
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
