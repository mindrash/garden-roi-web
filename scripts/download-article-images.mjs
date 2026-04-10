/**
 * Download hero images for all article pages from Unsplash.
 *
 * Usage:
 *   UNSPLASH_KEY=your_access_key node scripts/download-article-images.mjs
 *
 * Optional - skip articles that already have an image:
 *   UNSPLASH_KEY=your_access_key node scripts/download-article-images.mjs --skip-existing
 *
 * Images are saved to public/images/articles/[slug].webp at 1200x630, max ~150KB.
 * Never commit this script with a key embedded in it.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';

const ACCESS_KEY = process.env.UNSPLASH_KEY;
if (!ACCESS_KEY) {
  console.error('Error: UNSPLASH_KEY environment variable is required.');
  console.error('Usage: UNSPLASH_KEY=your_key node scripts/download-article-images.mjs');
  process.exit(1);
}

const SKIP_EXISTING = process.argv.includes('--skip-existing');
const OUT_DIR = path.resolve('public/images/articles');
const CONTENT_DIR = path.resolve('src/content/articles');

// Manual overrides for slugs where the title produces poor Unsplash results
const SEARCH_OVERRIDES = {
  'the-500-dollar-garden': 'raised bed vegetable garden first year',
  'csa-vs-home-garden': 'farmers market vegetables fresh produce',
  'how-to-find-local-prices': 'grocery store vegetables produce aisle',
  'how-to-measure-yield': 'harvesting vegetables garden weighing scale',
  'soil-test-decision-chain': 'soil testing garden laboratory',
  'roi-by-region': 'united states map agriculture landscape',
  'freezer-math-garden-roi': 'chest freezer food preservation vegetables',
  'grocery-tier-roi': 'organic vegetables grocery store comparison',
  'food-forest-basics': 'food forest permaculture fruit trees',
  'perennial-vs-annual-roi': 'perennial garden asparagus herbs growing',
  'best-crops-by-zone': 'usda plant hardiness zone map garden',
  'seed-saving-guide': 'seed saving tomato pepper envelope dry',
  'first-three-years-roi': 'vegetable garden raised bed year one',
  'lacto-fermentation-preservation': 'fermented vegetables mason jars kimchi',
  'cover-crops-101': 'cover crop rye clover winter field',
  'composting-roi': 'compost bin backyard garden pile',
  'spring-garden-planning': 'garden planning seeds spring seedlings',
  'succession-planting-calendar': 'vegetable garden succession rows calendar',
  'companion-planting-basics': 'companion planting marigold tomato garden',
  'water-cost-per-crop': 'drip irrigation vegetable garden watering',
  'rain-barrel-roi': 'rainwater collection barrel garden outdoor',
  'soil-ph-by-crop': 'garden soil amendment lime ph meter',
  'growing-garlic-by-zone': 'garlic bulbs harvest curing hanging',
  'heirloom-vs-hybrid': 'heirloom tomato seeds variety colorful',
  'roi-by-region': 'farm field aerial agriculture crops usa',
  'soil-test-roi': 'soil test laboratory agriculture sample',
};

// Extract a usable search term from the article's frontmatter title
function titleToSearchTerm(slug, filePath) {
  if (SEARCH_OVERRIDES[slug]) return SEARCH_OVERRIDES[slug];

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^title:\s*["']?(.+?)["']?\s*$/m);
    if (match) {
      // Strip punctuation clutter, keep first 5-6 meaningful words
      const title = match[1]
        .replace(/[|:&$"']/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      const words = title.split(' ').slice(0, 6).join(' ');
      return words;
    }
  } catch (_) {}

  // Fallback: humanize slug
  return slug.replace(/-/g, ' ');
}

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'Accept-Encoding': 'identity' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return httpsGet(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks) }));
      res.on('error', reject);
    });
    req.on('error', reject);
  });
}

async function searchUnsplash(query) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape&client_id=${ACCESS_KEY}`;
  const { status, body } = await httpsGet(url);
  if (status !== 200) throw new Error(`Unsplash API returned ${status}`);
  const data = JSON.parse(body.toString());
  if (!data.results?.length) return null;
  return data.results[0].urls.regular; // ~1080px wide JPEG
}

async function downloadAndConvert(imageUrl, outPath) {
  const { status, body } = await httpsGet(imageUrl);
  if (status !== 200) throw new Error(`Image download returned ${status}`);
  await sharp(body)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(outPath);
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const slugs = fs.readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
    .sort();

  console.log(`Processing ${slugs.length} articles...`);

  const results = { ok: [], skipped: [], failed: [] };

  for (const slug of slugs) {
    const outPath = path.join(OUT_DIR, `${slug}.webp`);

    if (SKIP_EXISTING && fs.existsSync(outPath)) {
      console.log(`  SKIP  ${slug}`);
      results.skipped.push(slug);
      continue;
    }

    const filePath = path.join(CONTENT_DIR, `${slug}.md`);
    const term = titleToSearchTerm(slug, filePath);

    try {
      const url = await searchUnsplash(term);
      if (!url) {
        console.log(`  MISS  ${slug} (no results for "${term}")`);
        results.failed.push({ slug, reason: 'no results' });
        continue;
      }
      await downloadAndConvert(url, outPath);
      const kb = Math.round(fs.statSync(outPath).size / 1024);
      console.log(`  OK    ${slug} (${kb}KB) — "${term}"`);
      results.ok.push(slug);
    } catch (err) {
      console.log(`  FAIL  ${slug}: ${err.message}`);
      results.failed.push({ slug, reason: err.message });
    }

    // Unsplash free tier: 50 req/hour. 1 req per article + small buffer = safe at 1.5s
    await new Promise((r) => setTimeout(r, 1500));
  }

  console.log(`\nDone. ${results.ok.length} downloaded, ${results.skipped.length} skipped, ${results.failed.length} failed.`);
  if (results.failed.length) {
    console.log('Failed:');
    results.failed.forEach(({ slug, reason }) => console.log(`  ${slug}: ${reason}`));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
