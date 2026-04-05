import { Product } from './types';

const PACK_100_500 = [
  { text: '100' },
  { text: '200', modifier: 90 },
  { text: '300', modifier: 180 },
  { text: '400', modifier: 270 },
  { text: '500', modifier: 360 }
];

const PACK_30_500 = [
  { text: '30 tablet' },
  { text: '50 tablet', modifier: 18 },
  { text: '100 tablet', modifier: 45 },
  { text: '200 tablet', modifier: 90 },
  { text: '500 tablet', modifier: 210 }
];

const whyConsider = (name: string) =>
  [
    `${name} may be considered when a clinician confirms a parasitic infection and ivermectin is appropriate.`,
    'It offers practical oral dosing and broad familiarity in parasite-treatment protocols.',
    'Use should be individualized to diagnosis, age, body weight, and medical history.',
    'Always follow licensed healthcare guidance.'
  ].join('\n\n');

const sideEffects = (name: string) =>
  [
    `${name} can cause side effects, although many people tolerate it well when used correctly.`,
    'Common effects include dizziness, nausea, abdominal discomfort, vomiting, diarrhea, and mild rash.',
    'Rare but serious reactions include severe allergy, confusion, severe skin reactions, or liver-related effects.',
    'Seek urgent care for breathing trouble, swelling, severe rash, or severe neurologic symptoms.'
  ].join('\n\n');

const faqs = (name: string) =>
  [
    `How to buy ${name} online? Use only with a valid prescription and trusted pharmacy sources.`,
    'Are these drugs safe? Ivermectin is generally safe when used at correct dose under medical supervision.',
    'How effective is it? It is effective for selected parasitic infections when diagnosis and dosing are correct.',
    'What if you miss a dose? Take when remembered unless close to next dose; do not double-dose.',
    'Can it treat COVID-19? It is not an established standard COVID-19 treatment.',
    'How long does it take to work? Depends on infection; some improve in days, others in weeks.'
  ].join('\n\n');

export const IVERMECTIN_COLLECTION_PRODUCTS: Product[] = [
  {
    id: 'iverjohn-3mg',
    name: 'Iverjohn 3 mg (Ivermectin)',
    brand: 'Iverjohn',
    price: 120.0,
    prescription: true,
    image:
      'https://static.wixstatic.com/media/07e3c6_117fcfe1462945ca8e38b5049d35f052~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/07e3c6_117fcfe1462945ca8e38b5049d35f052~mv2.jpg',
    images: [
      'https://static.wixstatic.com/media/07e3c6_117fcfe1462945ca8e38b5049d35f052~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/07e3c6_117fcfe1462945ca8e38b5049d35f052~mv2.jpg'
    ],
    description: [
      'Iverjohn 3mg is a brand of ivermectin used to treat selected parasitic infections. Dose depends on body weight, infection, and medical history.',
      'Ivermectin is not broadly recommended as a standard treatment for COVID-19; research is ongoing.',
      'Common side effects include dizziness, nausea, vomiting, and diarrhea. Rare severe reactions can occur.',
      '',
      'Why Consider it Iverjohn 3mg?',
      'Consult a healthcare professional who can evaluate your history and symptoms. Ivermectin is commonly used for selected parasitic infections such as river blindness and threadworm infections.',
      '',
      'FAQs',
      faqs('Iverjohn 3mg'),
      '',
      'Iverjohn 3 mg contains ivermectin, an antiparasitic agent used in conditions such as scabies, roundworm infections, and river blindness under clinician guidance.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 5,
    reviews: 42,
    options: [{ label: 'Pack Size', choices: PACK_100_500 }]
  },
  {
    id: 'iverjohn-6mg',
    name: 'Iverjohn 6 mg (Ivermectin)',
    brand: 'Iverjohn',
    price: 145.0,
    prescription: true,
    image:
      'https://static.wixstatic.com/media/07e3c6_6a38b685f51d45e08972edfe08bb778e~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/07e3c6_6a38b685f51d45e08972edfe08bb778e~mv2.jpg',
    images: [
      'https://static.wixstatic.com/media/07e3c6_6a38b685f51d45e08972edfe08bb778e~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/07e3c6_6a38b685f51d45e08972edfe08bb778e~mv2.jpg'
    ],
    description: [
      'Iverjohn 6 mg is a higher-strength ivermectin tablet used for selected parasitic infections.',
      'Use only with healthcare guidance and prescribed dosing.',
      '',
      'Why Consider it Iverjohn 6mg?',
      whyConsider('Iverjohn 6mg'),
      '',
      'Side Effects',
      sideEffects('Iverjohn 6mg'),
      '',
      'FAQs',
      faqs('Iverjohn 6mg')
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.9,
    reviews: 38,
    options: [{ label: 'Pack Size', choices: PACK_100_500 }]
  },
  {
    id: 'ivermectin-paste-dewormer',
    name: 'Ivermectin Paste Dewormer',
    brand: 'Ivermectin',
    price: 35.0,
    prescription: false,
    image:
      'https://static.wixstatic.com/media/07e3c6_8003b014111941ceaf8fff42b2564f53~mv2.jpeg/v1/fill/w_494,h_203,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/07e3c6_8003b014111941ceaf8fff42b2564f53~mv2.jpeg',
    images: [
      'https://static.wixstatic.com/media/07e3c6_8003b014111941ceaf8fff42b2564f53~mv2.jpeg/v1/fill/w_494,h_203,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/07e3c6_8003b014111941ceaf8fff42b2564f53~mv2.jpeg'
    ],
    description: [
      'Ivermectin Paste Dewormer is effective against a wide range of parasites including strongyles, pinworms, and botflies.',
      'It is available in paste and liquid formats and should be used as part of a veterinarian-guided parasite-control plan.',
      '',
      'How Ivermectin paste Work',
      'Ivermectin paste is in the avermectin class and targets parasite nervous systems.',
      '',
      'How to use Ivermectin paste',
      'Common reference dose is 200 ug/kg (0.2 mg/kg) body weight in horses. Confirm exact dosing with a veterinarian.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 19,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '1 Tube' },
          { text: '2 Tube', modifier: 18 },
          { text: '4 Tube', modifier: 54 },
          { text: '6 Tube', modifier: 90 }
        ]
      }
    ]
  },
  {
    id: 'ivecop-standard-tablet',
    name: 'Ivecop standard tablet (Ivermectin)',
    brand: 'Ivecop',
    price: 260.0,
    prescription: true,
    image:
      'https://static.wixstatic.com/media/20d0e2_16b5c057e88d4c5c820acf572d0a663b~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_16b5c057e88d4c5c820acf572d0a663b~mv2.jpg',
    images: [
      'https://static.wixstatic.com/media/20d0e2_16b5c057e88d4c5c820acf572d0a663b~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_16b5c057e88d4c5c820acf572d0a663b~mv2.jpg'
    ],
    description: [
      'Ivermectin tablets are used for selected parasitic infections and should be used only when prescribed.',
      'Use with caution in allergy history, pregnancy, breastfeeding, and liver or neurological conditions.',
      '',
      'What is Ivermectin, and why is it used?',
      'It is used in physician-guided treatment of selected parasitic infections.',
      '',
      'Range of Ivermectin',
      'Strength and regimen vary by diagnosis and body weight.',
      '',
      'How to store?',
      'Store in a cool, dry place away from heat and moisture.',
      '',
      'Ivermectin and other medications',
      'Tell your clinician all medicines and supplements you take.',
      '',
      'Precautions and warnings',
      'Follow prescribed dose exactly and attend follow-up reviews.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.9,
    reviews: 27,
    options: [
      { label: 'Pack Size', choices: PACK_100_500 },
      { label: 'Strength', choices: [{ text: '3 mg' }, { text: '6 mg' }, { text: '12 mg' }] }
    ]
  },
  {
    id: 'iverjohn-12mg',
    name: 'Iverjohn 12mg (Ivermectin)',
    brand: 'Iverjohn',
    price: 160.0,
    prescription: true,
    image:
      'https://static.wixstatic.com/media/20d0e2_4c3aa5196245498dab3617061eee0047~mv2.png/v1/fill/w_498,h_498,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_4c3aa5196245498dab3617061eee0047~mv2.png',
    images: [
      'https://static.wixstatic.com/media/20d0e2_4c3aa5196245498dab3617061eee0047~mv2.png/v1/fill/w_498,h_498,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_4c3aa5196245498dab3617061eee0047~mv2.png'
    ],
    description: [
      'Iverjohn 12mg is a higher-strength ivermectin tablet for selected parasitic infections under clinician supervision.',
      '',
      'Why Consider it Iverjohn 12mg?',
      whyConsider('Iverjohn 12mg'),
      '',
      'Side Effects',
      sideEffects('Iverjohn 12mg'),
      '',
      'FAQs',
      faqs('Iverjohn 12mg')
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.9,
    reviews: 35,
    options: [{ label: 'Pack Size', choices: PACK_100_500 }]
  },
  {
    id: 'iverheal-usp-tablet',
    name: 'Iverheal USP Tablet (Ivermectin)',
    brand: 'Iverheal',
    price: 126.0,
    prescription: true,
    image:
      'https://static.wixstatic.com/media/20d0e2_76769b4030f84db6a6a88843c6f73a20~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_76769b4030f84db6a6a88843c6f73a20~mv2.jpg',
    images: [
      'https://static.wixstatic.com/media/20d0e2_76769b4030f84db6a6a88843c6f73a20~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_76769b4030f84db6a6a88843c6f73a20~mv2.jpg',
      'https://static.wixstatic.com/media/07e3c6_8d7fc79d32734962b092483653f70492~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/07e3c6_8d7fc79d32734962b092483653f70492~mv2.jpg',
      'https://static.wixstatic.com/media/07e3c6_7d2376b19c22421fa0a0f9866960d37c~mv2.jpeg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/07e3c6_7d2376b19c22421fa0a0f9866960d37c~mv2.jpeg'
    ],
    description: [
      'Iverheal USP Tablet is an oral ivermectin medicine used for selected parasitic infections of intestine, skin, and eyes.',
      '',
      'What Is Iverheal?',
      'A branded ivermectin line used under medical supervision.',
      '',
      'How Generic Ivermectin Pills Works',
      'It disrupts parasite nerve and muscle function.',
      '',
      'Recommended Ways to Take Iverheal Tablets',
      'Usually taken by mouth as prescribed, often on an empty stomach.',
      '',
      'Vital Precautions & Warnings',
      'Use only with prescription and clinician guidance.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 26,
    options: [
      { label: 'Pack Size', choices: PACK_30_500 },
      { label: 'Dose', choices: [{ text: '3 mg' }, { text: '6 mg', modifier: 10 }, { text: '12 mg', modifier: 18 }] }
    ]
  },
  {
    id: 'ivermectin-cream',
    name: 'Ivermectin Cream',
    brand: 'Ivrea',
    price: 50.0,
    prescription: false,
    image:
      'https://static.wixstatic.com/media/20d0e2_0db1341ac9084686b6138fea90cd0240~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_0db1341ac9084686b6138fea90cd0240~mv2.jpg',
    images: [
      'https://static.wixstatic.com/media/20d0e2_0db1341ac9084686b6138fea90cd0240~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_0db1341ac9084686b6138fea90cd0240~mv2.jpg'
    ],
    description: [
      'Ivermectin Cream is used for rosacea and helps reduce facial redness, swelling, and pimples.',
      '',
      'USES OF IVREA CREAM',
      'Rosacea; Treatment of selected parasitic skin infections.',
      '',
      'BENEFITS OF IVREA CREAM',
      'Can reduce inflammatory facial symptoms with regular use.',
      '',
      'SIDE EFFECTS OF IVREA CREAM',
      'Possible burning, irritation, itching, and redness at application site.',
      '',
      'HOW TO USE IVREA CREAM',
      'Apply a thin layer to clean, dry affected skin as directed.',
      '',
      'HOW IVREA CREAM WORKS',
      'Provides topical anti-inflammatory and antiparasitic activity.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.7,
    reviews: 17,
    options: [
      { label: 'Pack Size', choices: [{ text: '2 cream' }, { text: '4 cream', modifier: 25 }, { text: '6 cream', modifier: 45 }] }
    ]
  },
  {
    id: 'vermact-12mg',
    name: 'Vermact 12mg (Ivermectin)',
    brand: 'Vermact',
    price: 30.0,
    prescription: true,
    image:
      'https://static.wixstatic.com/media/20d0e2_8e0f63df26664e83873d6550607a2ec2~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_8e0f63df26664e83873d6550607a2ec2~mv2.jpg',
    images: [
      'https://static.wixstatic.com/media/20d0e2_8e0f63df26664e83873d6550607a2ec2~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_8e0f63df26664e83873d6550607a2ec2~mv2.jpg'
    ],
    description: [
      'Vermact 12mg is an antiparasitic tablet used for selected intestinal, skin, and eye parasite infections.',
      '',
      'USES OF VERMACT TABLET DT',
      'Treatment of Parasitic infections',
      '',
      'BENEFITS OF VERMACT TABLET DT',
      'Helps reduce parasite burden in indicated infections.',
      '',
      'SIDE EFFECTS OF VERMACT TABLET DT',
      'Possible nausea, dizziness, diarrhea, and abdominal discomfort.',
      '',
      'HOW TO USE VERMACT TABLET DT',
      'Use on an empty stomach as prescribed.',
      '',
      'HOW VERMACT TABLET DT WORKS',
      'Interferes with parasite nerve-muscle signaling.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.7,
    reviews: 14,
    options: [{ label: 'Pack Size', choices: PACK_30_500 }]
  },
  {
    id: 'iversun-tablet-6mg',
    name: 'Iversun Tablet 6mg (Ivermectin)',
    brand: 'Iversun',
    price: 36.0,
    prescription: true,
    image:
      'https://static.wixstatic.com/media/20d0e2_07080ad426744fb987ea6eedbad52aea~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_07080ad426744fb987ea6eedbad52aea~mv2.jpg',
    images: [
      'https://static.wixstatic.com/media/20d0e2_07080ad426744fb987ea6eedbad52aea~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_07080ad426744fb987ea6eedbad52aea~mv2.jpg'
    ],
    description: [
      'Iversun 6mg is used in clinician-guided treatment plans for selected parasitic infections.',
      '',
      'Used For',
      'Parasitic infections of intestinal tract, skin, and eyes.',
      '',
      'Dosage',
      'Weight-based and diagnosis-specific as prescribed.',
      '',
      'Description',
      'Follow the full prescribed plan to reduce risk of treatment failure.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.7,
    reviews: 15,
    options: [{ label: 'Pack Size', choices: PACK_30_500 }]
  },
  {
    id: 'covimectin-tablet-12mg',
    name: 'Covimectin Tablet 12mg (Ivermectin)',
    brand: 'Covimectin',
    price: 42.0,
    prescription: true,
    image:
      'https://static.wixstatic.com/media/20d0e2_4eaed3c479544645ace476fe4af61efe~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_4eaed3c479544645ace476fe4af61efe~mv2.jpg',
    images: [
      'https://static.wixstatic.com/media/20d0e2_4eaed3c479544645ace476fe4af61efe~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_4eaed3c479544645ace476fe4af61efe~mv2.jpg'
    ],
    description: [
      'Covimectin 12mg is an antiparasitic medication for selected intestinal, skin, and eye parasite infections.',
      '',
      'USES OF COVIMECTIN TABLET',
      'Treatment of Parasitic infections',
      '',
      'BENEFITS OF COVIMECTIN TABLET',
      'Provides targeted antiparasitic action for indicated infections.',
      '',
      'SIDE EFFECTS OF COVIMECTIN TABLET',
      'Possible nausea, dizziness, diarrhea, and stomach discomfort.',
      '',
      'HOW TO USE COVIMECTIN TABLET',
      'Take on empty stomach as prescribed.',
      '',
      'HOW COVIMECTIN TABLET WORKS',
      'Disrupts parasite nerve-muscle function.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 21,
    options: [{ label: 'Pack Size', choices: PACK_30_500 }]
  },
  {
    id: 'ivervid-tablet-6mg',
    name: 'Ivervid Tablet 6mg (Ivermectin)',
    brand: 'Ivervid',
    price: 110.0,
    prescription: true,
    image:
      'https://static.wixstatic.com/media/20d0e2_59af0285ba564fb1a8222021210180ab~mv2.jpeg/v1/fill/w_498,h_664,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_59af0285ba564fb1a8222021210180ab~mv2.jpeg',
    images: [
      'https://static.wixstatic.com/media/20d0e2_59af0285ba564fb1a8222021210180ab~mv2.jpeg/v1/fill/w_498,h_664,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_59af0285ba564fb1a8222021210180ab~mv2.jpeg'
    ],
    description: [
      'Ivervid 6mg Tablet is an antiparasitic medication used for selected intestinal, skin, and eye parasite infections.',
      '',
      'USES OF IVERCID TABLET',
      'Treatment of Parasitic infections',
      '',
      'BENEFITS OF IVERCID TABLET',
      'Supports effective parasite clearance in indicated use.',
      '',
      'SIDE EFFECTS OF IVERCID TABLET',
      'May include nausea, dizziness, abdominal discomfort, and diarrhea.',
      '',
      'HOW TO USE IVERCID TABLET',
      'Take as prescribed, usually on empty stomach.',
      '',
      'HOW IVERCID TABLET WORKS',
      'Targets parasite neuromuscular pathways.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 20,
    options: [{ label: 'Pack Size', choices: PACK_30_500 }]
  },
  {
    id: 'ivervid-tablet-3mg',
    name: 'Ivervid Tablet 3mg (Ivermectin)',
    brand: 'Ivervid',
    price: 95.0,
    prescription: true,
    image:
      'https://static.wixstatic.com/media/20d0e2_583e882c19b2449988c94930544581df~mv2.jpeg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_583e882c19b2449988c94930544581df~mv2.jpeg',
    images: [
      'https://static.wixstatic.com/media/20d0e2_583e882c19b2449988c94930544581df~mv2.jpeg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_583e882c19b2449988c94930544581df~mv2.jpeg'
    ],
    description: [
      'Ivervid 3mg Tablet is an antiparasitic option for selected infections under clinician supervision.',
      '',
      'USES OF IVERCID TABLET',
      'Treatment of Parasitic infections',
      '',
      'BENEFITS OF IVERCID TABLET',
      'Can reduce parasite burden and related symptoms in indicated use.',
      '',
      'SIDE EFFECTS OF IVERCID TABLET',
      'Possible nausea, dizziness, and mild gastrointestinal upset.',
      '',
      'HOW TO USE IVERCID TABLET',
      'Take as prescribed; do not double-dose.',
      '',
      'HOW IVERCID TABLET WORKS',
      'Interferes with parasite nerve transmission.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 18,
    options: [{ label: 'Pack Size', choices: PACK_30_500 }]
  },
  {
    id: 'ivervid-tablet-12mg',
    name: 'Ivervid Tablet 12mg (Ivermectin)',
    brand: 'Ivervid',
    price: 135.0,
    prescription: true,
    image:
      'https://static.wixstatic.com/media/20d0e2_c2f9cafbd9984699b467cfd50cc90d3a~mv2.jpeg/v1/fill/w_498,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_c2f9cafbd9984699b467cfd50cc90d3a~mv2.jpeg',
    images: [
      'https://static.wixstatic.com/media/20d0e2_c2f9cafbd9984699b467cfd50cc90d3a~mv2.jpeg/v1/fill/w_498,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_c2f9cafbd9984699b467cfd50cc90d3a~mv2.jpeg'
    ],
    description: [
      'Ivervid 12mg Tablet is an antiparasitic medicine used for selected intestinal, skin, and eye infections.',
      '',
      'USES OF IVERVID TABLET',
      'Treatment of Parasitic infections',
      '',
      'BENEFITS OF IVERVID TABLET',
      'Helps control susceptible parasite infections in clinician-guided treatment.',
      '',
      'SIDE EFFECTS OF IVERVID TABLET',
      'Can include nausea, dizziness, diarrhea, and abdominal discomfort.',
      '',
      'HOW TO USE IVERVID TABLET',
      'Take as prescribed, often on an empty stomach.',
      '',
      'HOW IVERVID TABLET WORKS',
      'Disrupts parasite neuromuscular activity.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 24,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '30 tablets' },
          { text: '50 tablets', modifier: 15 },
          { text: '100 tablets', modifier: 35 },
          { text: '200 tablets', modifier: 70 },
          { text: '300', modifier: 105 },
          { text: '500', modifier: 165 },
          { text: '1000', modifier: 310 }
        ]
      }
    ]
  }
];
