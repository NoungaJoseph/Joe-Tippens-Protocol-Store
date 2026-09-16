const urls = [
  "https://www.ivermectinkart.com/product-page/sebifin-cream-terbinafine",
  "https://www.ivermectinkart.com/product-page/nailrox-nail-lacquer-ciclopirox",
  "https://www.ivermectinkart.com/product-page/ketocip-200-mg",
  "https://www.ivermectinkart.com/product-page/ebernet-cream",
  "https://www.ivermectinkart.com/product-page/clocip-b-cream-clotrimazole-beclometasone",
  "https://www.ivermectinkart.com/product-page/canesten-vaginal-cream-clotrimazole",
  "https://www.ivermectinkart.com/product-page/canesten-v6-tablet-vt",
  "https://www.ivermectinkart.com/product-page/fluka-150-mg",
  "https://www.ivermectinkart.com/product-page/forcan-50-mg",
  "https://www.ivermectinkart.com/product-page/forcan-200-mg",
  "https://www.ivermectinkart.com/product-page/forcan-150-mg"
];

async function run() {
  for (let url of urls) {
    try {
      const res = await fetch(url);
      const html = await res.text();
      const nameMatch = html.match(/<title>(.*?)<\/title>/);
      const priceMatchPattern1 = html.match(/"price":\s*([0-9.]+)/);
      const priceMatchPattern2 = html.match(/"price":\s*"([0-9.]+)"/);
      const priceMatchPattern3 = html.match(/property="product:price:amount" content="([0-9.]+)"/);
      const priceMatchPattern4 = html.match(/itemprop="price" content="([0-9.]+)"/);
      let price = priceMatchPattern4 ? priceMatchPattern4[1] : (priceMatchPattern3 ? priceMatchPattern3[1] : (priceMatchPattern2 ? priceMatchPattern2[1] : (priceMatchPattern1 ? priceMatchPattern1[1] : 'N/A')));
      const descMatch = html.match(/<meta property="og:description" content="(.*?)"/);
      const imgMatch = html.match(/<meta property="og:image" content="(.*?)"/);
      
      console.log(`URL: ${url}`);
      console.log(`Title: ${nameMatch ? nameMatch[1] : 'N/A'}`);
      console.log(`Price: ${price}`);
      console.log(`Desc: ${descMatch ? descMatch[1] : 'N/A'}`);
      console.log(`Img: ${imgMatch ? imgMatch[1] : 'N/A'}`);
      console.log('---');
    } catch(e) {
      console.log(`Failed for ${url}: ${e.message}`);
    }
  }
}
run();
