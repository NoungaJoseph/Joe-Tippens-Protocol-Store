import urllib.request
import re

urls = [
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
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
        title = re.search(r'<meta property="og:title" content="(.*?)"', html)
        price = re.search(r'"price":\s*"?([0-9.]+)"?', html)
        if not price:
            price = re.search(r'property="product:price:amount" content="([0-9.]+)"', html)
        img = re.search(r'<meta property="og:image" content="(.*?)"', html)
        desc = re.search(r'<meta property="og:description" content="(.*?)"', html)
        
        print(f"URL: {url}")
        print(f"Title: {title.group(1) if title else 'N/A'}")
        print(f"Price: {price.group(1) if price else 'N/A'}")
        print(f"Img: {img.group(1) if img else 'N/A'}")
        print(f"Desc: {desc.group(1) if desc else 'N/A'}")
        print("---")
    except Exception as e:
        print(f"Failed {url}: {e}")
