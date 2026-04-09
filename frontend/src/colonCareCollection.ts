import { Product } from './types';

import pentasaSupp from './assets/products/colon/pentasa-supp.webp';
import pentasaGranules from './assets/products/colon/pentasa-granules.webp';
import pentasaTabs from './assets/products/colon/pentasa-tabs.jpg';
import anovateCream from './assets/products/colon/anovate-cream.jpg';
import anoblissCream from './assets/products/colon/anobliss-cream.jpg';

export const COLON_CARE_COLLECTION_PRODUCTS: Product[] = [
  {
    id: 'pentasa-suppository-1g-mesalamine',
    name: 'Pentasa Suppository 1g (Mesalamine)',
    brand: 'Ivermectinkart',
    price: 280.00,
    prescription: false,
    image: pentasaSupp,
    images: [pentasaSupp],
    description: 'Pentasa Suppository 1g (Mesalamine) is used to treat Crohn’s disease and ulcerative colitis, particularly when the lining tissue of the inner rectum is inflamed (proctitis). It works by reducing inflammation in the bowel, which helps alleviate symptoms such as diarrhea, bleeding, and stomach pain.',
    category: 'Colon Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/pentasa-suppository-1g-mesalamine' },
      { label: 'Pack Size', value: '30 Suppositories' }
    ]
  },
  {
    id: 'pentasa-granules-mesalamine',
    name: 'Pentasa Granules (Mesalamine)',
    brand: 'Ivermectinkart',
    price: 207.00,
    prescription: false,
    image: pentasaGranules,
    images: [pentasaGranules],
    description: 'Pentasa Granules (Mesalamine) Prolonged Release Granules is an anti-inflammatory medicine used to treat a type of bowel disease known as ulcerative colitis. It helps to reduce symptoms such as diarrhea, bleeding and stomach pain by reducing inflammation in the bowel. It may also be used to treat Crohn’s ileocolitis.',
    category: 'Colon Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/pentasa-granules-mesalamine' }
    ]
  },
  {
    id: 'pentasa-mesalamine',
    name: 'Pentasa (Mesalamine) Tablets',
    brand: 'Ivermectinkart',
    price: 218.00,
    prescription: false,
    image: pentasaTabs,
    images: [pentasaTabs],
    description: 'Pentasa (Mesalamine) is an anti-inflammatory medicine used to treat a type of bowel disease known as ulcerative colitis. It helps to reduce symptoms such as diarrhea, bleeding and stomach pain by reducing inflammation in the bowel. It may also be used to treat another type of bowel disease known as Crohn’s ileocolitis.',
    category: 'Colon Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/pentasa-mesalamine' }
    ]
  },
  {
    id: 'anovate-cream-beclometasone-lidocaine-phenylephrine',
    name: 'Anovate Cream (Beclometasone/Lidocaine/Phenylephrine)',
    brand: 'Ivermectinkart',
    price: 129.00,
    prescription: false,
    image: anovateCream,
    images: [anovateCream],
    description: 'Anovate Cream is a combination medicine used for the treatment of piles (hemorrhoids) and anal fissures. It helps to reduce pain, swelling, and itching associated with these conditions, providing rapid relief and supporting healing.',
    category: 'Colon Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/anovate-cream-beclometasonelidocainephenylephrine' }
    ]
  },
  {
    id: 'anobliss-cream-lidocaine-nifedipine',
    name: 'Anobliss Cream (Lidocaine/Nifedipine)',
    brand: 'Ivermectinkart',
    price: 107.00,
    prescription: false,
    image: anoblissCream,
    images: [anoblissCream],
    description: 'Anobliss Cream is a combination of two medicines: Lidocaine (a local anesthetic) and Nifedipine (a calcium channel blocker). It is used in the treatment of anal fissures to reduce pain and increase blood flow to the area, which promotes healing.',
    category: 'Colon Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/anobliss-cream-lidocainenifedipine' }
    ]
  }
];
