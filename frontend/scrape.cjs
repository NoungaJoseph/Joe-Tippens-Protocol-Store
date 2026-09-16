const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const urls = [
"https://www.theskymeds.com/product-page/mebendazole-500-mg-ivermectin-25mg",
"https://www.theskymeds.com/product-page/ivermectin-tablet",
"https://www.theskymeds.com/product-page/fenbendazole-tablet",
"https://www.theskymeds.com/product-page/covilife-40mg-tablet-ivermectin",
"https://www.theskymeds.com/product-page/ivermectin-paste-dewormer",
"https://www.theskymeds.com/product-page/fenbendazole-888mg-human-wormentel-888",
"https://www.theskymeds.com/product-page/ivermectin-injection-1",
"https://www.theskymeds.com/product-page/ivervid-tablet-12mg-ivermectin",
"https://www.theskymeds.com/product-page/fenbendazole-444mg-human-wormentel-444mg",
"https://www.theskymeds.com/product-page/fenbendazole-500mg-human-wormentel-500",
"https://www.theskymeds.com/product-page/fenbendazole-222mg-human-wormentel-222",
"https://www.theskymeds.com/product-page/bevatas-100mg-injection",
"https://www.theskymeds.com/product-page/fenbendazole-150mg-human-wormentel-150",
"https://www.theskymeds.com/product-page/covimectin-tablet-12mg-ivermectin",
"https://www.theskymeds.com/product-page/iverjohn-6-mg",
"https://www.theskymeds.com/product-page/iversun-12-mg",
"https://www.theskymeds.com/product-page/iversun-6mg",
"https://www.theskymeds.com/product-page/evermil-10mg-tablet",
"https://www.theskymeds.com/product-page/vermact-12mg",
"https://www.theskymeds.com/product-page/ivervid-tablet-6mg-ivermectin",
"https://www.theskymeds.com/product-page/iverheal-6mg",
"https://www.theskymeds.com/product-page/iverheal-3mg",
"https://www.theskymeds.com/product-page/mebendazolemebex",
"https://www.theskymeds.com/product-page/fenbendazole-1000-mg",
"https://www.theskymeds.com/product-page/hydrogen-peroxide",
"https://www.theskymeds.com/product-page/ramiven-abemaciclib",
"https://www.theskymeds.com/product-page/armotraz-anastrozole",
"https://www.theskymeds.com/product-page/resihance-regorafenib",
"https://www.theskymeds.com/product-page/hydrea-hydroxyurea",
"https://www.theskymeds.com/product-page/crizalk-crizotinib",
"https://www.theskymeds.com/product-page/spexib-ceritinib",
"https://www.theskymeds.com/product-page/xovoltib-50mg-afatinib-dimaleate",
"https://www.theskymeds.com/product-page/cytotam-10-mg-tamoxifen",
"https://www.theskymeds.com/product-page/alphalan-melphalan",
"https://www.theskymeds.com/product-page/ca-atra-all-trans-retinoic-acid",
"https://www.theskymeds.com/product-page/celkeran-chlorambucil",
"https://www.theskymeds.com/product-page/cyendiv-nintedanib",
"https://www.theskymeds.com/product-page/cytoblastin-10-mg-vinblastine-sulphate",
"https://www.theskymeds.com/product-page/dacilon-0-5-mg-dactinomycin",
"https://www.theskymeds.com/product-page/cycloxan-50-mg-cyclophosphamide",
"https://www.theskymeds.com/product-page/erlocip-erlotinib",
"https://www.theskymeds.com/product-page/fempro-2-5-mg-letrozole",
"https://www.theskymeds.com/product-page/gemita-injection-gemcitabine",
"https://www.theskymeds.com/product-page/honvan-120-mg-fosfestrol-tetrasodium",
"https://www.theskymeds.com/product-page/imbruvica-140-mg-ibrutinib",
"https://www.theskymeds.com/product-page/kemoplat-injection-cisplatin",
"https://www.theskymeds.com/product-page/lenmid-lenalidomide",
"https://www.theskymeds.com/product-page/lupride-depot-leuprolide-acetate",
"https://www.theskymeds.com/product-page/endace-40-mg-megestrol-acetate",
"https://www.theskymeds.com/product-page/nublexa-40-mg-regorafenib",
"https://www.theskymeds.com/product-page/oxitan-oxaliplatin",
"https://www.theskymeds.com/product-page/palbace-125-mg-palbociclib",
"https://www.theskymeds.com/product-page/posid-50-mg-etoposide",
"https://www.theskymeds.com/product-page/rapact-everolimus",
"https://www.theskymeds.com/product-page/sorafenat-200-mg-sorafenib",
"https://www.theskymeds.com/product-page/thalix-thalidomide",
"https://www.theskymeds.com/product-page/votrient-pazopanib",
"https://www.theskymeds.com/product-page/xtane-25-mg-exemestane",
"https://www.theskymeds.com/product-page/xarelto-rivaroxaban",
"https://www.theskymeds.com/product-page/zecyte-abiraterone",
"https://www.theskymeds.com/product-page/soranib-200-mg-sorafenib",
"https://www.theskymeds.com/product-page/tagrisso-80mg-tablet-osimertinib",
"https://www.theskymeds.com/product-page/keytruda-injection",
"https://www.theskymeds.com/product-page/kisqali-ribociclib",
"https://www.theskymeds.com/product-page/imatib-imatinib"
];

const imgDir = path.join(__dirname, 'src', 'assets', 'products', 'anti-cancer');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

async function downloadImage(url, filepath) {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });
  return new Promise((resolve, reject) => {
    response.data.pipe(fs.createWriteStream(filepath))
      .on('finish', () => resolve())
      .on('error', e => reject(e));
  });
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const products = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`[${i+1}/${urls.length}] Scraping ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      
      const productData = await page.evaluate(() => {
        let name = '';
        let price = '';
        let description = '';
        let imgUrl = '';
        
        // JSON-LD fallback for solid base data
        const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
        for (const s of scripts) {
          try {
            const json = JSON.parse(s.innerText);
            if (json['@type'] === 'Product') {
              name = json.name || name;
              if (json.Offers && json.Offers.price) price = json.Offers.price;
              if (json.image && json.image.length > 0) {
                 imgUrl = json.image[0].contentUrl || json.image[0];
              } else if (typeof json.image === 'string') {
                 imgUrl = json.image;
              }
              break;
            }
          } catch(e) {}
        }
        
        // Also extract visible text for description, FAQ, usage
        // Usually wix product pages have accordion or info sections
        const infoElements = document.querySelectorAll('[data-hook="info-section-description"], .wix-ui-text');
        let fullText = Array.from(document.querySelectorAll('p, span[data-hook="info-section-title"], div[data-hook="info-section-description"]'))
          .map(el => el.innerText).join('\n');
          
        return { name, price, description: fullText.substring(0, 5000), imgUrl };
      });
      
      if (!productData.name) {
         productData.name = url.split('/').pop().replace(/-/g, ' ');
      }
      if (!productData.price) productData.price = "0.00";
      
      let imgFilename = 'default.jpg';
      if (productData.imgUrl) {
         imgFilename = `${i+1}-${productData.name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.jpg`;
         const imgPath = path.join(imgDir, imgFilename);
         try {
           await downloadImage(productData.imgUrl, imgPath);
         } catch (err) {
           console.log('Failed to download image', err.message);
         }
      }

      products.push({
        id: url.split('/').pop(),
        name: productData.name,
        brand: 'Skymeds',
        price: parseFloat(productData.price) || 0,
        prescription: false,
        imageFile: imgFilename,
        description: productData.description.replace(/\n/g, ' ').replace(/"/g, "'").trim(),
        category: 'Anti Cancer',
        url: url
      });
      
    } catch (e) {
      console.log(`Failed to scrape ${url}:`, e.message);
    }
  }

  await browser.close();

  // Generate collection file
  let imports = `import { Product } from './types';\n`;
  products.forEach((p, index) => {
    imports += `import img${index+1} from './assets/products/anti-cancer/${p.imageFile}';\n`;
  });

  let productArray = `\nexport const ANTI_CANCER_COLLECTION_PRODUCTS: Product[] = [\n`;
  products.forEach((p, index) => {
    productArray += `  {
    id: '${p.id}',
    name: "${p.name}",
    brand: 'Pure Protocol',
    price: ${p.price},
    prescription: false,
    image: img${index+1},
    images: [img${index+1}],
    description: "${p.description}",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: '${p.url}' }
    ]
  }${index < products.length - 1 ? ',' : ''}\n`;
  });
  productArray += `];\n`;

  const finalOutput = imports + productArray;
  fs.writeFileSync(path.join(__dirname, 'src', 'antiCancerCollection.ts'), finalOutput);
  console.log('Scraping complete. Created src/antiCancerCollection.ts');
})();
