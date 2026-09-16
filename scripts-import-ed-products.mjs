import fs from 'node:fs/promises';
import path from 'node:path';

const BASE_DIR = process.cwd();
const FRONTEND_SRC = path.join(BASE_DIR, 'frontend', 'src');
const IMAGE_DIR = path.join(FRONTEND_SRC, 'assets', 'products', 'ed');
const OUT_FILE = path.join(FRONTEND_SRC, 'edCollection.ts');

const URLS = [
  'https://www.ivermectinkart.com/product-page/vardegra-20-mg-vardenafil-20mg',
  'https://www.ivermectinkart.com/product-page/vigora-100mg-sildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/vigora-gold-lido-spray-lidocaine',
  'https://www.ivermectinkart.com/product-page/aurogra-100-mg-sildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/tadarise-20mg-tadalafil',
  'https://www.ivermectinkart.com/product-page/tadapox-tadalafildapoxetine',
  'https://www.ivermectinkart.com/product-page/vega-100-mgsildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/malegra-fxt-sildenafil-citratefluoxetine',
  'https://www.ivermectinkart.com/product-page/vidalista-5mg-tadalafil',
  'https://www.ivermectinkart.com/product-page/super-tadapox-tadalafildapoxetine',
  'https://www.ivermectinkart.com/product-page/super-p-force-oral-jelly',
  'https://www.ivermectinkart.com/product-page/vidalista-black-80-tadalafil',
  'https://www.ivermectinkart.com/product-page/tadarise-pro-20mg-tadalafil',
  'https://www.ivermectinkart.com/product-page/tastylia-10mg-tadalafil',
  'https://www.ivermectinkart.com/product-page/sildigra-super-power-sildenafildapoxetine',
  'https://www.ivermectinkart.com/product-page/udenafil-100mg-udaforce',
  'https://www.ivermectinkart.com/product-page/penegra-50mg-sildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/begma-200mg-sildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/hiforce-50-mg-sildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/silditop-sildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/vega-extra-cobra-120-jelly-sildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/avagra-100-avanafil',
  'https://www.ivermectinkart.com/product-page/lovento-oral-jelly-orange-flavour',
  'https://www.ivermectinkart.com/product-page/p-force-fort-sildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/tadaflo-20-tadalafil-20mg',
  'https://www.ivermectinkart.com/product-page/alvitra-20mg-vardenafil',
  'https://www.ivermectinkart.com/product-page/cobra-200-sildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/avanair-200-mg-tablet',
  'https://www.ivermectinkart.com/product-page/varda-super-power-vardenafildapoxetine',
  'https://www.ivermectinkart.com/product-page/lovento-oral-jelly-pineapple-flavour',
  'https://www.ivermectinkart.com/product-page/tadaflo-10-tadalafil-10mg',
  'https://www.ivermectinkart.com/product-page/penegra-xpress-50mg-sildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/cenforce-ld-sildenafildapoxetine',
  'https://www.ivermectinkart.com/product-page/malegra-gold-sildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/filitra-40mg-vardenafil',
  'https://www.ivermectinkart.com/product-page/mahagra-25mg-sildenafil-citrate',
  'https://www.ivermectinkart.com/product-page/caverta-100mg-sildenafil',
  'https://www.ivermectinkart.com/product-page/malegra-200mg'
];

const SLUG_SEEN = new Map();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const decodeEntities = (value) =>
  String(value ?? '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/â€™/g, "'")
    .replace(/â€œ|â€/g, '"')
    .replace(/â€“|â€”/g, '-');

const esc = (value) =>
  String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '')
    .replace(/\n/g, '\\n');

const toSlug = (input) =>
  String(input)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'product';

const uniqueSlug = (base) => {
  const count = SLUG_SEEN.get(base) ?? 0;
  SLUG_SEEN.set(base, count + 1);
  return count === 0 ? base : `${base}-${count + 1}`;
};

const extractJsonLd = (html) => {
  const scripts = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const match of scripts) {
    const raw = match[1].trim();
    if (!raw) continue;
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const product = parsed.find((x) => x?.['@type'] === 'Product');
        if (product) return product;
      }
      if (parsed?.['@type'] === 'Product') return parsed;
      if (parsed?.['@graph']) {
        const product = parsed['@graph'].find((x) => x?.['@type'] === 'Product');
        if (product) return product;
      }
    } catch {
      // Ignore invalid JSON-LD blocks.
    }
  }
  return null;
};

const normalizeImageValue = (value) => {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) {
    for (const item of value) {
      const normalized = normalizeImageValue(item);
      if (normalized) return normalized;
    }
    return '';
  }
  if (typeof value === 'object') {
    return (
      value.url ||
      value.contentUrl ||
      value.image ||
      value.src ||
      value['@id'] ||
      ''
    );
  }
  return '';
};

const firstImage = (product) => {
  if (!product) return '';
  return normalizeImageValue(product.image);
};

const coercePrice = (product) => {
  const offers = product?.offers ?? product?.Offers;
  const pick = Array.isArray(offers) ? offers[0] : offers;
  const value = pick?.price ?? product?.price;
  const num = Number.parseFloat(String(value ?? '0').replace(/[^\d.]/g, ''));
  return Number.isFinite(num) ? num : 0;
};

const fallbackFromMeta = (html, name) => {
  const pick = (regex) => html.match(regex)?.[1]?.trim() ?? '';
  const metaTitle = pick(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i);
  const metaDesc = pick(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  const ogImage = pick(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i);
  const wixPrice = pick(/data-hook=["']formatted-primary-price["'][^>]*data-wix-price=["']([^"']+)["']/i);
  const numericPrice = Number.parseFloat(wixPrice.replace(/[^\d.]/g, ''));
  return {
    name: name || metaTitle || 'Unnamed product',
    description: metaDesc || 'Product details available on request.',
    image: ogImage,
    price: Number.isFinite(numericPrice) ? numericPrice : 0
  };
};

const downloadImage = async (url, fileStem) => {
  const normalizedUrl = normalizeImageValue(url);
  if (!normalizedUrl) return '';

  const cleanUrl = normalizedUrl.split('?')[0];
  const extMatch = cleanUrl.match(/\.([a-zA-Z0-9]{2,5})$/);
  const ext = extMatch ? `.${extMatch[1].toLowerCase()}` : '.jpg';
  const fileName = `${fileStem}${ext}`;
  const filePath = path.join(IMAGE_DIR, fileName);

  const response = await fetch(normalizedUrl, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    }
  });
  if (!response.ok) {
    throw new Error(`Image download failed (${response.status}) for ${normalizedUrl}`);
  }
  const bytes = new Uint8Array(await response.arrayBuffer());
  await fs.writeFile(filePath, bytes);

  return `./assets/products/ed/${fileName}`;
};

const scrapeOne = async (url, index) => {
  const page = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    }
  });

  if (!page.ok) {
    throw new Error(`Failed to fetch ${url} (${page.status})`);
  }

  const html = await page.text();
  const jsonLd = extractJsonLd(html);

  const fallback = fallbackFromMeta(html, jsonLd?.name);
  const name = decodeEntities((jsonLd?.name || fallback.name || `ED Product ${index + 1}`).trim());
  const description = decodeEntities((jsonLd?.description || fallback.description || 'Product description unavailable.').trim());
  const price = coercePrice(jsonLd) || fallback.price || 0;
  const imageUrl = firstImage(jsonLd) || fallback.image;

  const slug = uniqueSlug(toSlug(name));
  const localImagePath = await downloadImage(imageUrl, `${String(index + 1).padStart(2, '0')}-${slug}`);

  return {
    id: slug,
    name,
    brand: 'Ivermectinkart',
    price,
    description,
    imagePath: localImagePath,
    sourceUrl: url
  };
};

const generateCollectionTs = (items) => {
  const imports = items
    .map((item, index) => `import img${index + 1} from '${item.imagePath}';`)
    .join('\n');

  const rows = items
    .map(
      (item, index) => `  {
    id: '${esc(item.id)}',
    name: '${esc(item.name)}',
    brand: '${esc(item.brand)}',
    price: ${Number(item.price || 0).toFixed(2)},
    prescription: false,
    image: img${index + 1},
    images: [img${index + 1}],
    description: '${esc(item.description)}',
    category: 'Erectile Dysfunction',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: '${esc(item.sourceUrl)}' }
    ]
  }`
    )
    .join(',\n\n');

  return `import { Product } from './types';\n${imports}\n\nexport const ED_COLLECTION_PRODUCTS: Product[] = [\n${rows}\n];\n`;
};

const main = async () => {
  await fs.mkdir(IMAGE_DIR, { recursive: true });

  const products = [];
  for (let i = 0; i < URLS.length; i += 1) {
    const url = URLS[i];
    process.stdout.write(`Scraping ${i + 1}/${URLS.length}: ${url}\n`);
    try {
      const product = await scrapeOne(url, i);
      products.push(product);
    } catch (error) {
      process.stdout.write(`Failed on ${url}: ${error.message}\n`);
    }
    await sleep(150);
  }

  const ts = generateCollectionTs(products);
  await fs.writeFile(OUT_FILE, ts, 'utf8');

  process.stdout.write(`\nSaved ${products.length} products -> ${path.relative(BASE_DIR, OUT_FILE)}\n`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
