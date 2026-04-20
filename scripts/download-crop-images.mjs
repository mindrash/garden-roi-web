/**
 * Download hero images for all crop pages from Unsplash.
 *
 * Usage:
 *   UNSPLASH_KEY=your_access_key node scripts/download-crop-images.mjs
 *
 * Optional - skip crops that already have an image:
 *   UNSPLASH_KEY=your_access_key node scripts/download-crop-images.mjs --skip-existing
 *
 * Images are saved to public/images/crops/[slug].webp at 1200x630, max ~150KB.
 * Never commit this script with a key embedded in it.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';

const ACCESS_KEY = process.env.UNSPLASH_KEY;
if (!ACCESS_KEY) {
  console.error('Error: UNSPLASH_KEY environment variable is required.');
  console.error('Usage: UNSPLASH_KEY=your_key node scripts/download-crop-images.mjs');
  process.exit(1);
}

const SKIP_EXISTING = process.argv.includes('--skip-existing');
const OUT_DIR = path.resolve('public/images/crops');
const CONTENT_DIR = path.resolve('src/content/plants');

// Human-readable search term overrides for slugs that need it
const SEARCH_OVERRIDES = {
  'cherry-tomato': 'cherry tomatoes',
  'hot-pepper': 'hot chili pepper',
  'sweet-pepper': 'bell pepper',
  'bok-choy': 'bok choy',
  'brussels-sprouts': 'brussels sprouts',
  'collard-greens': 'collard greens',
  'mustard-greens': 'mustard greens',
  'napa-cabbage': 'napa cabbage',
  'snap-pea': 'snap peas',
  'garden-pea': 'garden peas',
  'green-bean': 'green beans',
  'lima-bean': 'lima beans',
  'fava-bean': 'fava beans',
  'swiss-chard': 'swiss chard',
  'sweet-potato': 'sweet potato',
  'winter-squash': 'winter squash',
  'butternut-squash': 'butternut squash',
  'lemon-balm': 'lemon balm herb',
  'goji-berry': 'goji berries',
  'ground-cherry': 'ground cherry physalis',
  'jerusalem-artichoke': 'jerusalem artichoke',
  'pole-bean': 'pole bean climbing bean trellis',
  'holy-basil': 'holy basil tulsi herb',
  'mizuna': 'japanese mustard greens salad',
  'shiso': 'shiso perilla leaf herb',
  'honeyberry': 'haskap berry blue honeysuckle',
  'hardy-kiwi': 'kiwi fruit small',
  'new-zealand-spinach': 'spinach summer greens',
  'malabar-spinach': 'basella climbing spinach',
  'chrysanthemum-greens': 'chrysanthemum leaves edible',
  'water-chestnut': 'water chestnut Chinese',
  'aronia': 'aronia chokeberry black berry',
  'celtuce': 'stem lettuce Chinese vegetable',
  'culantro': 'cilantro herb fresh leaves',
  'yacon': 'jicama root tuber vegetable',
  'agretti': 'samphire sea vegetable greens',
  'cape-gooseberry': 'cape gooseberry physalis golden berry',
  'lotus-root': 'lotus root slice Chinese vegetable',
  'mashua': 'nasturtium tuber root vegetable',
  'oca': 'oca tuber root vegetable colorful',
  'popcorn': 'popcorn corn cob drying harvest',
  'salsify': 'parsnip root vegetable harvest',
  'scorzonera': 'black root vegetable harvest soil',
  'sea-kale': 'coastal plant white flowers cliffs',
  'tepary-bean': 'bean pods drying harvest dry beans',
  // Specialty crops batch (added 2026-04-20)
  'thai-basil': 'thai basil purple stems herb',
  'boysenberry': 'blackberry dark purple berries harvest',
  'black-currant': 'black currant ribes nigrum berries',
  'chestnut': 'chestnut castanea nuts harvest',
  'dragon-fruit': 'dragon fruit pitaya pink cactus',
  'ashwagandha': 'ashwagandha withania root herb',
  'wasabi': 'wasabi paste green Japanese condiment',
  'cardoon': 'cardoon cynara thistle vegetable',
  'catnip': 'catnip nepeta cataria herb',
  'pecan': 'pecan nuts harvest tree',
};

function searchTerm(slug) {
  return SEARCH_OVERRIDES[slug] ?? slug.replace(/-/g, ' ');
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

  console.log(`Processing ${slugs.length} crops...`);

  const results = { ok: [], skipped: [], failed: [] };

  for (const slug of slugs) {
    const outPath = path.join(OUT_DIR, `${slug}.webp`);

    if (SKIP_EXISTING && fs.existsSync(outPath)) {
      console.log(`  SKIP  ${slug}`);
      results.skipped.push(slug);
      continue;
    }

    const term = searchTerm(slug);
    try {
      const url = await searchUnsplash(term);
      if (!url) {
        console.log(`  MISS  ${slug} (no results for "${term}")`);
        results.failed.push({ slug, reason: 'no results' });
        continue;
      }
      await downloadAndConvert(url, outPath);
      const kb = Math.round(fs.statSync(outPath).size / 1024);
      console.log(`  OK    ${slug} (${kb}KB)`);
      results.ok.push(slug);
    } catch (err) {
      console.log(`  FAIL  ${slug}: ${err.message}`);
      results.failed.push({ slug, reason: err.message });
    }

    // Unsplash free tier: 50 req/hour. 1 req per crop + a small buffer = safe at 1.5s
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
