import { Product, Review } from './types';

// Import Images
import onco1 from './assets/images/onco-adjunct-pathway-1.webp';
import onco2 from './assets/images/onco-adjunct-pathway-2.webp';
import onco3 from './assets/images/onco-adjunct-pathway-3.webp';
import onco4 from './assets/images/onco-adjunct-pathway-4.webp';
import onco5 from './assets/images/onco-adjunct-pathway-5.webp';

// Protocol Images
import proto1 from './assets/products/protocol/1.webp';
import proto2 from './assets/products/protocol/2.jpeg';
import proto3 from './assets/products/protocol/3.avif';
import proto4 from './assets/products/protocol/4.jpg';
import proto5 from './assets/products/protocol/5.jpeg';
import proto6 from './assets/products/protocol/6.jpeg';
import proto7 from './assets/products/protocol/7.webp';
import proto8 from './assets/products/protocol/8.jpeg';
import proto9 from './assets/products/protocol/9.webp';
import proto10 from './assets/products/protocol/10.webp';
import proto11 from './assets/products/protocol/11.webp';
import proto12 from './assets/products/protocol/12.jpg';
import proto13 from './assets/products/protocol/13.jpeg';

import vitB50 from './assets/images/vitamin-b50.jpg';
import vitB17Caps from './assets/images/vitamin-b17-caps.jpg';
import cbdOil from './assets/images/cbd-oil.webp';
import cisplatin from './assets/images/cisplatin-injection.jpg';
import doxorex from './assets/images/doxorex-50.jpg';
import fenbenPowder from './assets/images/fenbendazole-powder.jpg';
import fenbenTabs from './assets/images/fenbendazole-tablets.jpg';
import gemcitabine from './assets/images/gemcitabine.webp';
import imatinib from './assets/images/imatinib.jpg';
import iverheal from './assets/images/iverheal-6.jpg';
import ivermectinPaste from './assets/images/ivermectin-paste.jpg';
import ivermectinTabs from './assets/images/ivermectin-12.avif';
import livingoodB from './assets/images/livingood-b-complex.jpg';
import mebendazole from './assets/images/mebendazole.jpeg';
import milkThistle from './assets/images/milk-thistle.jpeg';
import multiLongevity from './assets/images/multivitamin-longevity.jpg';
import ozempic025 from './assets/images/ozempic-025.png';
import ozempic05 from './assets/images/ozempic-05.jpg';
import ozempic1 from './assets/images/ozempic-1.jpg';
import paclitaxel from './assets/images/paclitaxel.jpg';
import prohealthNad from './assets/images/prohealth-nad.jpg';
import rituximab from './assets/images/rituximab.jpeg';
import rybelsus14 from './assets/images/rybelsus-14.png';
import rybelsus3 from './assets/images/rybelsus-3.webp';
import rybelsus7 from './assets/images/rybelsus-7.bmp';
import safeguardPaste from './assets/images/safeguard-paste.jpg';
import tamoxifen from './assets/images/tamoxifen.jpg';
import trastuzumab from './assets/images/trastuzumab.jpeg';
import usaTrio from './assets/images/usa-medical-trio.webp';
import vitBComplex from './assets/images/usa-medical-b-complex.jpg';
import vitB17Cup from './assets/images/vitamin-b17-cup.jpg';

// Blog Images (Local)
import blogJoe from './assets/images/blog/blog-joe.png';
import blogFenben from './assets/images/blog/blog-fenben.png';
import blogCbd from './assets/images/blog/blog-cbd.png';
import blogB17 from './assets/images/blog/blog-b17.png';
import blog5 from './assets/images/blog/blog-5.jpg';
import blog6 from './assets/images/blog/blog-6.jpg';
import blog7 from './assets/images/blog/blog-7.jpg';
import blog8 from './assets/images/blog/blog-8.jpg';
import blog9 from './assets/images/blog/blog-9.jpg';
import blog10 from './assets/images/blog/blog-10.jpg';
import blog11 from './assets/images/blog/blog-11.jpg';
import blog12 from './assets/images/blog/blog-12.jpg';
import blog13 from './assets/images/blog/blog-13.jpg';
import blog14 from './assets/images/blog/blog-14.jpg';
import blog15 from './assets/images/blog/blog-15.jpg';

// Helper to generate random reviews
const generateReviews = (productId: string, count: number): Review[] => {
  const names = ["Sarah M.", "John D.", "Michael R.", "Emily K.", "Robert B.", "Jessica T.", "David W.", "Jennifer L.", "William H.", "Elizabeth S."];
  const sentiments = [
    "Absolutely amazing product. It changed my life!",
    "Very effective and fast shipping. Highly recommend.",
    "Good quality, standard packaging. Will order again.",
    "Helped me a lot with my protocol. Thank you!",
    "Genuine product, verified by my doctor.",
    "Great customer service, they helped me with dosage.",
    "Fast delivery and discreet packaging.",
    "Starting to feel the difference after 2 weeks.",
    "Exactly what I was looking for.",
    "Best price I found online for this quality."
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `rev-${productId}-${i}`,
    author: names[i % names.length],
    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString(),
    rating: 5, // Force high rating as per user request (mostly 5 stars)
    content: sentiments[i % sentiments.length]
  }));
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "onco-adjunct",
    name: "Onco-Adjunct Pathway",
    brand: "Onco-Adjunct",
    price: 250.00,
    oldPrice: 300.00,
    prescription: false,
    image: "https://fastpharm.store/wp-content/uploads/2025/01/IMG_7894.webp",
    images: ["https://fastpharm.store/wp-content/uploads/2025/01/IMG_7894.webp", onco2, onco3, onco4, onco5],
    description: "Onco-Adjunct Pathway are a series of supplements designed to support cancer treatment and overall health.",
    category: 'Supplements',
    rating: 5.0,
    reviews: 4,
    reviewsData: generateReviews("onco-adjunct", 4)
  },
  {
    id: "120-day-protocol",
    name: "120 Days Protocol",
    brand: "In Stock",
    price: 750.00,
    prescription: false,
    image: proto1,
    images: [proto1, proto2, proto3, proto4, proto5, proto6, proto7, proto8, proto9, proto10, proto11, proto12, proto13],
    description: "1. •Here’s a general overview of the updated Joe Tippens Protocol and the typical dosages for each supplement:\n\n. Fenbendazole\n- Typical dosage: 444mg per day.\n\n. Ivermectin\n- Typical dosage: 12mg to 15mg per day.\n\n. Vitamin B17 (Amygdalin)\n- Typical dosage: 100mg to 500mg per day, taken orally.\n\n. Vitamin E\n- Typical dosage: 400 IU to 800 IU per day.\n\n. Milk Thistle/TUDCA\n- Typical dosage: 150mg to 300mg of Milk Thistle extract per day, and 500mg to 1000mg of TUDCA per day.\n\n. FECO (Full Extract Cannabis Oil)\n- Typical dosage: varies widely depending on the individual and the specific product; start with a low dose (e.g., 1/4 teaspoon) and gradually increase as needed.\n\n. Turkey Tail Mushroom\n- Typical dosage: 500mg to 2000mg per day of the dried mushroom or extract.\n\n. Onco Adjunct Pathways (OAPs)\n\nOnco Adjunct Pathway 1 (OAP1)\n- Typical dosage: 2-3 capsules per day.\n\nOnco Adjunct Pathway 2 (OAP2)\n- Typical dosage: 2-3 capsules per day.\n\nOnco Adjunct Pathway 3 (OAP3)\n- Typical dosage: 2-3 capsules per day.\n\nOnco Adjunct Pathway 4 (OAP4)\n- Typical dosage: 2-3 capsules per day.",
    category: 'Protocols',
    rating: 5.0,
    reviews: 12,
    reviewsData: generateReviews("120-day-protocol", 12)
  },
  {
    id: "vit-b50",
    name: "365 by Whole Foods Market, Vitamin B50 Complex, 90 Veg Capsules",
    brand: "365 by Whole Foods",
    price: 100.00,
    prescription: false,
    image: vitB50,
    description: "Vitamin B50 Complex supplement.",
    category: 'Supplements',
    rating: 5.0,
    reviews: 3,
    reviewsData: generateReviews("vit-b50", 3)
  },
  {
    id: "vit-b17-caps",
    name: "Asterveda Vitamin B17 Amygdalin 99.5% Apricot Extract Organic Natural - 60 Capsules",
    brand: "Asterveda",
    price: 200.00,
    prescription: false,
    image: vitB17Caps,
    description: "High purity Vitamin B17 capsules.",
    category: 'Supplements',
    rating: 5.0,
    reviews: 5,
    reviewsData: generateReviews("vit-b17-caps", 5)
  },
  {
    id: "cbd-oil-kids",
    name: "CBD Oil",
    brand: "USA Medical",
    price: 75.00,
    prescription: false,
    image: cbdOil,
    description: "This 500 mg CBD Oil is a gentle introduction to the power of CBD. Calm your mind, relax your body, deepen your sleep, and support your mental health.",
    category: 'CBD',
    rating: 5.0,
    reviews: 8,
    options: [
      {
        label: "Strength",
        choices: [
          { text: "500mg (30ml/microdose)", price: 75.00 },
          { text: "800mg (average strength)", price: 120.00 },
          { text: "1000mg (30ml/low strength)", price: 150.00 },
          { text: "3000mg (30ml/full strength)", price: 300.00 },
          { text: "8000mg full spectrum", price: 500.00 }
        ]
      }
    ],
    reviewsData: generateReviews("cbd-oil-kids", 8)
  },
  {
    id: "cisplatin",
    name: "Cisplatin Injection",
    brand: "Generic",
    price: 200.00,
    prescription: true,
    image: cisplatin,
    description: "Cisplatin 50mg Injection is a medicine that is used for the treatment of Cancer Of Ovary, Testis Cancer, Head And Neck Cancer, Bladder Cancer, Cervical Cancer, Lung Cancer. Works by inhibiting the growth of cancerous cells.",
    category: 'Injections',
    rating: 5.0,
    reviews: 3,
    reviewsData: generateReviews("cisplatin", 3)
  },
  {
    id: "doxorex",
    name: "DOXOREX50 - DOXORUBICIN-HYDROCHLORIDE",
    brand: "Doxorex",
    price: 200.00,
    prescription: true,
    image: doxorex,
    description: "Doxorubicin Hydrochloride injection.",
    category: 'Injections',
    rating: 5.0,
    reviews: 4,
    reviewsData: generateReviews("doxorex", 4)
  },
  {
    id: "fenben-powder",
    name: "Fenbendazole 100g Powder",
    brand: "Fenben Lab",
    price: 113.00,
    prescription: false,
    image: fenbenPowder,
    description: "Pure powder form.",
    category: 'Anti-Parasites',
    rating: 5.0,
    reviews: 20,
    options: [
      {
        label: "Size",
        choices: [
          { text: "100g", price: 113.00 },
          { text: "250g", price: 227.00 }
        ]
      }
    ],
    reviewsData: generateReviews("fenben-powder", 20)
  },
  {
    id: "fenben-tabs",
    name: "Fenbendazole Tablets",
    brand: "Fenben Lab",
    price: 120.00,
    prescription: false,
    image: fenbenTabs,
    description: "Purity >99%, by Fenben Lab, Certified Third-Party Laboratory Tested, Analysis Report Included, 90 capsules.",
    category: 'Anti-Parasites',
    rating: 5.0,
    reviews: 35,
    options: [
      {
        label: "Strength",
        choices: [
          { text: "222mg", price: 120.00 },
          { text: "444mg", price: 210.00 }
        ]
      }
    ],
    reviewsData: generateReviews("fenben-tabs", 35)
  },
  {
    id: "gemcitabine",
    name: "Gemcitabine Piece",
    brand: "Generic",
    price: 200.00,
    prescription: true,
    image: gemcitabine,
    description: "Gemcitabine is used in combination with carboplatin to treat ovarian cancer.",
    category: 'Injections',
    rating: 5.0,
    reviews: 3,
    reviewsData: generateReviews("gemcitabine", 3)
  },
  {
    id: "imatinib",
    name: "Imatinib Mesylate Tabs",
    brand: "Generic",
    price: 150.00,
    prescription: true,
    image: imatinib,
    description: "Imatinib Mesylate Tablets.",
    category: 'Oncology',
    rating: 5.0,
    reviews: 6,
    options: [
      {
        label: "Weight",
        choices: [
          { text: "100mg", price: 150.00 },
          { text: "400mg", price: 360.00 }
        ]
      }
    ],
    reviewsData: generateReviews("imatinib", 6)
  },
  {
    id: "iverheal",
    name: "Iverheal 6 MG ( IVERMECTIN 6 MG )",
    brand: "Iverheal",
    price: 63.00,
    prescription: true,
    image: iverheal,
    description: "Iverheal 6mg Tablets.",
    category: 'Ivermectin',
    rating: 5.0,
    reviews: 15,
    options: [
      {
        label: "Number of Tablets",
        choices: [
          { text: "90 tablets", price: 63.00 },
          { text: "120 tablets", price: 80.00 }, // Estimated intermediate prices
          { text: "150 tablets", price: 100.00 },
          { text: "300 tablets", price: 150.00 }
        ]
      }
    ],
    reviewsData: generateReviews("iverheal", 15)
  },
  {
    id: "ivermectin-paste",
    name: "Ivermectin Paste",
    brand: "Generic",
    price: 60.00,
    prescription: false,
    image: ivermectinPaste,
    description: "Ivermectin Paste.",
    category: 'Anti-Parasites',
    rating: 5.0,
    reviews: 9,
    options: [
      {
        label: "Packs",
        choices: [
          { text: "5 tubes", price: 60.00 },
          { text: "10 tubes", price: 115.00 }
        ]
      }
    ],
    reviewsData: generateReviews("ivermectin-paste", 9)
  },
  {
    id: "ivermectin-tabs",
    name: "Ivermectin Tablets USP 12 Mg",
    brand: "Generic",
    price: 120.00,
    prescription: true,
    image: ivermectinTabs,
    description: "Ivermectin Tablets USP 12 Mg.",
    category: 'Ivermectin',
    rating: 5.0,
    reviews: 22,
    options: [
      {
        label: "Packs",
        choices: [
          { text: "5 packs", price: 120.00 },
          { text: "10 packs", price: 220.00 }
        ]
      }
    ],
    reviewsData: generateReviews("ivermectin-tabs", 22)
  },
  {
    id: "livingood-b",
    name: "Livingood Daily Vitamin B Complex Capsules",
    brand: "Livingood",
    price: 100.00,
    prescription: false,
    image: livingoodB,
    description: "Daily Vitamin B Complex Capsules.",
    category: 'Supplements',
    rating: 5.0,
    reviews: 4,
    reviewsData: generateReviews("livingood-b", 4)
  },
  {
    id: "mebendazole",
    name: "Mebendazole",
    brand: "Generic",
    price: 180.00,
    prescription: false,
    image: mebendazole,
    description: "Mebendazole is a type of medicine for treating worms. Helps a lot in dealing with cancer cells.",
    category: 'Anti-Parasites',
    rating: 5.0,
    reviews: 7,
    reviewsData: generateReviews("mebendazole", 7)
  },
  {
    id: "milk-thistle",
    name: "MILK THISTLE",
    brand: "Generic",
    price: 65.00,
    oldPrice: 75.00,
    prescription: false,
    image: milkThistle,
    description: "Milk thistle protects your liver. It may help prevent age-related decline in brain function. It may improve cancer treatment.",
    category: 'Supplements',
    rating: 5.0,
    reviews: 5,
    reviewsData: generateReviews("milk-thistle", 5)
  },
  {
    id: "multi-longevity",
    name: "Multivitamin Longevity Powder for Healthy Aging",
    brand: "Generic",
    price: 117.00,
    prescription: false,
    image: multiLongevity,
    description: "Whole Body Health and Immune Support - Digestive and Gut Health.",
    category: 'Supplements',
    rating: 5.0,
    reviews: 3,
    reviewsData: generateReviews("multi-longevity", 3)
  },
  {
    id: "ozempic-025",
    name: "Ozempic 0.25MG (Semaglutide)",
    brand: "Ozempic",
    price: 350.00,
    oldPrice: 450.00,
    prescription: true,
    image: ozempic025,
    description: "Indication: Weight Loss",
    category: 'Semaglutide',
    rating: 5.0,
    reviews: 8,
    reviewsData: generateReviews("ozempic-025", 8)
  },
  {
    id: "ozempic-05",
    name: "Ozempic 0.5MG (Semaglutide)",
    brand: "Ozempic",
    price: 365.00,
    oldPrice: 450.00,
    prescription: true,
    image: ozempic05,
    description: "Indication: Weight Loss",
    category: 'Semaglutide',
    rating: 5.0,
    reviews: 10,
    reviewsData: generateReviews("ozempic-05", 10)
  },
  {
    id: "ozempic-1",
    name: "Ozempic 1MG (Semaglutide)",
    brand: "Ozempic",
    price: 389.00,
    oldPrice: 499.00,
    prescription: true,
    image: ozempic1,
    description: "Indication: Weight Loss",
    category: 'Semaglutide',
    rating: 5.0,
    reviews: 12,
    reviewsData: generateReviews("ozempic-1", 12)
  },
  {
    id: "paclitaxel",
    name: "Paclitaxel Injection - 300mg",
    brand: "TAXOMA",
    price: 200.00,
    prescription: true,
    image: paclitaxel,
    description: "Category: Lung Cancer, Breast Cancer. Dosage Form: Parenteral. Dose: 43.4 ml. Packaging Size: 300 mg.",
    category: 'Injections',
    rating: 5.0,
    reviews: 3,
    reviewsData: generateReviews("paclitaxel", 3)
  },
  {
    id: "prohealth-nad",
    name: "ProHealth NAD Triple Boost Ultra with 500mg Niagen NR",
    brand: "ProHealth",
    price: 100.00,
    prescription: false,
    image: prohealthNad,
    description: "ProHealth NAD Triple Boost Ultra with 500mg Niagen NR.",
    category: 'Supplements',
    rating: 5.0,
    reviews: 4,
    reviewsData: generateReviews("prohealth-nad", 4)
  },
  {
    id: "rituximab",
    name: "Rituximab",
    brand: "Generic",
    price: 200.00,
    prescription: true,
    image: rituximab,
    description: "Rituximab is used to treat cancers of the white blood system such as leukemias and lymphomas.",
    category: 'Oncology',
    rating: 4.8,
    reviews: 5,
    reviewsData: generateReviews("rituximab", 5)
  },
  {
    id: "rybelsus-14",
    name: "RYBELSUS 14 MG",
    brand: "Rybelsus",
    price: 130.00,
    prescription: true,
    image: rybelsus14,
    description: "Indication: Type 2 Diabetes, weight loss",
    category: 'Semaglutide',
    rating: 5.0,
    reviews: 6,
    reviewsData: generateReviews("rybelsus-14", 6)
  },
  {
    id: "rybelsus-3",
    name: "RYBELSUS 3 MG",
    brand: "Rybelsus",
    price: 90.00,
    prescription: true,
    image: rybelsus3,
    description: "Indication: Type 2 Diabetes, weight loss",
    category: 'Semaglutide',
    rating: 5.0,
    reviews: 4,
    reviewsData: generateReviews("rybelsus-3", 4)
  },
  {
    id: "rybelsus-7",
    name: "RYBELSUS 7 MG",
    brand: "Rybelsus",
    price: 105.00,
    oldPrice: 110.00,
    prescription: true,
    image: rybelsus7,
    description: "Indication: Type 2 Diabetes, weight loss",
    category: 'Semaglutide',
    rating: 5.0,
    reviews: 5,
    reviewsData: generateReviews("rybelsus-7", 5)
  },
  {
    id: "safeguard-paste",
    name: "SafeGaurd (Fenbendazole) Paste",
    brand: "SafeGuard",
    price: 25.00,
    prescription: false,
    image: safeguardPaste,
    description: "SafeGaurd (Fenbendazole) Paste.",
    category: 'Anti-Parasites',
    rating: 5.0,
    reviews: 45,
    options: [
      {
        label: "Packs",
        choices: [
          { text: "1 pack", price: 25.00 },
          { text: "5 packs", price: 120.00 },
          { text: "10 packs", price: 230.00 }
        ]
      }
    ],
    reviewsData: generateReviews("safeguard-paste", 45)
  },
  {
    id: "tamoxifen",
    name: "Tamoxifen",
    brand: "Generic",
    price: 250.00,
    prescription: true,
    image: tamoxifen,
    description: "Tamoxifen Citrate Tablets.",
    category: 'Oncology',
    rating: 5.0,
    reviews: 7,
    reviewsData: generateReviews("tamoxifen", 7)
  },
  {
    id: "trastuzumab",
    name: "Trastuzumab Drugs",
    brand: "Herceptin",
    price: 200.00,
    prescription: true,
    image: trastuzumab,
    description: "Trastuzumab Drugs.",
    category: 'Oncology',
    rating: 5.0,
    reviews: 4,
    reviewsData: generateReviews("trastuzumab", 4)
  },
  {
    id: "usa-trio",
    name: "USA Medical Signature Trio | The Ultimate Holistic Health Bundle",
    brand: "USA Medical",
    price: 300.00,
    prescription: false,
    image: usaTrio,
    description: "A potent, entirely holistic remedy intended to fully restore and rejuvenate your body and mind.",
    category: 'Supplements',
    rating: 5.0,
    reviews: 15,
    reviewsData: generateReviews("usa-trio", 15)
  },
  {
    id: "vit-b-complex",
    name: "Vitamin B Complex",
    brand: "Generic",
    price: 100.00,
    prescription: false,
    image: vitBComplex,
    description: "Indication: Gummies",
    category: 'Supplements',
    rating: 5.0,
    reviews: 3,
    reviewsData: generateReviews("vit-b-complex", 3)
  },
  {
    id: "vit-b17-cup",
    name: "Vitamin B17",
    brand: "Apricot Power",
    price: 150.00,
    prescription: false,
    image: vitB17Cup,
    description: "Amygdalin supplement.",
    category: 'Supplements',
    rating: 5.0,
    reviews: 9,
    options: [
      {
        label: "Package",
        choices: [
          { text: "5 cups", price: 150.00 },
          { text: "10 cups", price: 250.00 },
          { text: "20 cups", price: 320.00 }
        ]
      }
    ],
    reviewsData: generateReviews("vit-b17-cup", 9)
  }
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/all-pills' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding the Joe Tippens Protocol",
    excerpt: "An in-depth look at the origin, components, and anecdotal success of the Joe Tippens cancer protocol.",
    content: `
      <p class="mb-4">The Joe Tippens Protocol gained international attention after Joe Tippens shared his remarkable story of recovery from terminal small-cell lung cancer. This alternative approach revolves around a combination of repurposed medications and specific supplements.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Core Components</h3>
      <p class="mb-4">The protocol typically includes Fenbendazole, Vitamin E, Curcumin, and CBD oil. Proponents believe these elements work synergistically to support the body's natural defenses and potentially inhibit the growth of abnormal cells.</p>
      <div class="bg-rose-50 p-6 rounded-xl border-l-4 border-rose-500 my-8">
        <h4 class="font-bold text-rose-800 mb-2">Key Insight</h4>
        <p class="text-rose-700 m-0">While primarily based on anecdotal evidence, the protocol has sparked numerous discussions in the medical community about the potential of repurposed drugs in oncology.</p>
      </div>
      <p class="mb-4">It is crucial for anyone considering this protocol to do so under the guidance of a healthcare professional, ensuring it complements their overall treatment strategy safely.</p>
    `,
    image: blogJoe,
    date: "December 20, 2025",
    author: "Protocol Specialist",
    category: "Protocols"
  },
  {
    id: 2,
    title: "Benefits of Fenbendazole for Human Health",
    excerpt: "Exploring the research and potential therapeutic applications of Fenbendazole beyond its traditional uses.",
    content: `
      <p class="mb-4">Fenbendazole, traditionally an anthelmintic used in veterinary medicine, has recently become a subject of intense research for its potential anti-cancer properties in humans.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mechanism of Action</h3>
      <p class="mb-4">Cellular studies suggest that Fenbendazole may act as a microtubule-destabilizing agent, similar to some chemotherapy drugs, but with a different safety profile. It appears to interfere with glucose uptake in abnormal cells, effectively 'starving' them of their primary energy source.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Research and Safety</h3>
      <p class="mb-4">While clinical trials are ongoing, preliminary data and historical safety profiles provide a foundation for further exploration into its role as an adjunct therapy in integrative oncology.</p>
    `,
    image: blogFenben,
    date: "December 18, 2025",
    author: "Research Team",
    category: "Science"
  },
  {
    id: 3,
    title: "CBD Oil: Full Spectrum vs Isolate Guide",
    excerpt: "Learn the differences between Full Spectrum and Isolate CBD to choose the right option for your wellness journey.",
    content: `
      <p class="mb-4">Choosing the right CBD product can be confusing. The primary distinction lies in the extraction process and the final profile of cannabinoids present in the oil.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Full Spectrum: The Entourage Effect</h3>
      <p class="mb-4">Full spectrum CBD contains all naturally occurring compounds in the hemp plant, including trace amounts of THC. Many believe this creates an 'entourage effect' where the compounds work better together than alone.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">CBD Isolate: Pure and Simple</h3>
      <p class="mb-4">CBD isolate is 99% pure CBD with all other plant compounds removed. It's often preferred by those who want to avoid even trace amounts of THC or have specific sensitivities.</p>
    `,
    image: blogCbd,
    date: "December 15, 2025",
    author: "Wellness Expert",
    category: "CBD"
  },
  {
    id: 4,
    title: "Vitamin B17 and Immune System Support",
    excerpt: "Discover the myths and facts surrounding Amygdalin (B17) and its role in supporting cellular health.",
    content: `
      <p class="mb-4">Vitamin B17, also known as Amygdalin or Laetrile, is a compound found naturally in many plants, most notably in the seeds of apricots and bitter almonds.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cellular Health</h3>
      <p class="mb-4">Proponents of B17 suggest it plays a role in supporting the body's internal surveillance system. In a controlled supplement regimen, it is often used for its potential to support overall immune function and cellular integrity.</p>
      <p class="mb-4">As with any concentrated supplement, purity and dosage are critical. We prioritize high-grade Amygdalin to ensure the best possible support for your wellness protocol.</p>
    `,
    image: blogB17,
    date: "December 12, 2025",
    author: "Nutritionist",
    category: "Supplements"
  },
  {
    id: 5,
    title: "The Critical Role of Zinc in Recovery",
    excerpt: "Why zinc is an essential mineral for cellular repair, immune response, and overall recovery during illness.",
    content: `
      <p class="mb-4">Zinc is a trace element that's necessary for a healthy immune system. A lack of zinc can make a person more susceptible to disease and illness.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Immune Function</h3>
      <p class="mb-4">Zinc is involved in numerous aspects of cellular metabolism. It is required for the catalytic activity of approximately 100 enzymes and it plays a role in immune function, protein synthesis, wound healing, DNA synthesis, and cell division.</p>
    `,
    image: blog5,
    date: "December 10, 2025",
    author: "Medical Team",
    category: "Wellness"
  },
  {
    id: 6,
    title: "5 Tips for Safe Online Pharmacy Shopping",
    excerpt: "Ensuring you receive genuine medications and supplements when ordering health products online.",
    content: `
      <p class="mb-4">Buying medicine online can be convenient and cost-effective, but it's important to know how to identify trustworthy sources.</p>
      <ul class="list-decimal pl-6 mb-6 space-y-4">
        <li><strong>Verify Credentials:</strong> Ensure the pharmacy is licensed and has verifiable contact info.</li>
        <li><strong>Check for Transparency:</strong> Look for detailed product information and third-party lab results.</li>
        <li><strong>Secure Payments:</strong> Only use websites with secure, encrypted payment gateways.</li>
        <li><strong>Read Reviews:</strong> Authentic customer feedback can provide insight into reliability.</li>
        <li><strong>Consult First:</strong> Always speak with your doctor before starting any new treatment found online.</li>
      </ul>
    `,
    image: blog6,
    date: "December 8, 2025",
    author: "Safety Officer",
    category: "Advice"
  },
  {
    id: 7,
    title: "How Ivermectin Works: A Comprehensive Guide",
    excerpt: "An objective look at Ivermectin's mechanisms of action and its emerging role in modern protocols.",
    content: `
      <p class="mb-4">Originally known for its potent anti-parasitic effects, Ivermectin is being re-evaluated for its potential broader biological activities, including anti-inflammatory and antiviral properties.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Mechanism</h3>
      <p class="mb-4">Research suggests Ivermectin may block certain transport proteins that abnormal cells or viruses use to move across cell membranes, effectively hindering their ability to replicate or maintain their structure.</p>
    `,
    image: blog7,
    date: "December 5, 2025",
    author: "Research Team",
    category: "Science"
  },
  {
    id: 8,
    title: "Boosting Immunity Naturally Through Diet",
    excerpt: "Focus on these key food groups to naturally strengthen your body's defensive capabilities.",
    content: `
      <p class="mb-4">Your diet plays a pivotal role in your immune health. Consuming foods rich in antioxidants, vitamins, and minerals can help your body fight off pathogens more effectively.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Superfoods for Immunity</h3>
      <p class="mb-4">Incorporate more citrus fruits for Vitamin C, red bell peppers for beta-carotene, and garlic for its immune-boosting sulfur compounds like allicin.</p>
    `,
    image: blog8,
    date: "December 3, 2025",
    author: "Dietitian",
    category: "Wellness"
  },
  {
    id: 9,
    title: "The Science Behind Anti-Parasitic Protocols",
    excerpt: "Why clearing parasites can be a foundational step in restoring metabolic health and vitality.",
    content: `
      <p class="mb-4">Chronic parasitic infections can subtly drain the body of nutrients and create systemic inflammation, which can complicate other health issues.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Protocol Integration</h3>
      <p class="mb-4">Strategic use of anti-parasitic agents aims to reduce this baseline stress on the body, potentially allowing higher-level recovery protocols to be more effective.</p>
    `,
    image: blog9,
    date: "December 1, 2025",
    author: "Medical Team",
    category: "Science"
  },
  {
    id: 10,
    title: "Gut Health and Its Impact on Mental Well-being",
    excerpt: "Understanding the gut-brain axis and how a healthy microbiome supports a stable mood and clear mind.",
    content: `
      <p class="mb-4">The gut is often called the 'second brain' because of the vast network of neurons and the complex interaction between gut bacteria and the nervous system.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Gut-Brain Axis</h3>
      <p class="mb-4">Bacteria in the gut produce neurotransmitters like serotonin and dopamine, which significantly influence mood and cognitive function. Maintaining a diverse microbiome through probiotics and fiber is essential for mental clarity.</p>
    `,
    image: blog10,
    date: "November 28, 2025",
    author: "Wellness Expert",
    category: "Health"
  },
  {
    id: 11,
    title: "Top Supplements for Longevity and Vitality",
    excerpt: "Our top picks for maintaining energy and health as you age, based on the latest longevity research.",
    content: `
      <p class="mb-4">Aging is a biological process that can be influenced by diet, lifestyle, and strategic supplementation.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Longevity Essentials</h3>
      <p class="mb-4">Key supplements like NAD+ boosters, Resveratrol, and Omega-3s are at the forefront of longevity science, helping to maintain cellular energy and reduce age-related inflammation.</p>
    `,
    image: blog11,
    date: "November 25, 2025",
    author: "Ageing Specialist",
    category: "Wellness"
  },
  {
    id: 12,
    title: "Managing Inflammation Through Anti-Inflammatory Diet",
    excerpt: "Chronic inflammation is at the root of many diseases. Learn how to tame it with your fork.",
    content: `
      <p class="mb-4">Inflammation is the body's natural response to injury or infection, but when it becomes chronic, it can lead to serious health problems.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Anti-Inflammatory Principles</h3>
      <p class="mb-4">Avoid processed sugars and trans fats, and load up on fatty fish, leafy greens, and colorful berries. Turmeric and ginger are also powerful natural anti-inflammatories to include in your daily routine.</p>
    `,
    image: blog12,
    date: "November 22, 2025",
    author: "Dietitian",
    category: "Health"
  },
  {
    id: 13,
    title: "Sleep Hygiene: The Foundation of Recovery",
    excerpt: "Why 'sleeping on it' is actually one of the best things you can do for your cellular repair and immune system.",
    content: `
      <p class="mb-4">During sleep, the body undergoes critical repair processes that don't happen while awake. From clearing brain toxins to repairing muscle tissue, sleep is non-negotiable for health.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Better Sleep Tips</h3>
      <p class="mb-4">Maintain a consistent schedule, cool down your room, and eliminate blue light exposure at least an hour before bed to optimize your melatonin production.</p>
    `,
    image: blog13,
    date: "November 20, 2025",
    author: "Sleep Coach",
    category: "Wellness"
  },
  {
    id: 14,
    title: "Stress Management Techniques for Chronic Patients",
    excerpt: "Compassionate advice and practical tools for managing the mental strain of long-term health journeys.",
    content: `
      <p class="mb-4">Facing a chronic illness is emotionally taxing. Managing stress is not just about feeling better mentally; it's about reducing the cortisol levels that can hinder physical healing.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Toolbox for Calm</h3>
      <p class="mb-4">Guided meditation, breathwork, and joining support groups can provide the necessary emotional scaffolding to manage the ups and downs of recovery.</p>
    `,
    image: blog14,
    date: "November 18, 2025",
    author: "Psychologist",
    category: "Advice"
  },
  {
    id: 15,
    title: "Holistic Approaches to Modern Wellness",
    excerpt: "Bridging the gap between traditional wisdom and modern science for a more complete picture of health.",
    content: `
      <p class="mb-4">Holistic health means looking at the whole person—body, mind, and spirit. It's about finding the balance between specialized medical treatments and foundational wellness practices.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Interative Care</h3>
      <p class="mb-4">By combining cutting-edge medicine with ancient practices like acupuncture, proper nutrition, and movement, we can create a more resilient and vibrant life.</p>
    `,
    image: blog15,
    date: "November 15, 2025",
    author: "Wellness Expert",
    category: "Wellness"
  }
];