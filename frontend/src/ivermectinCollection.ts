import { Product } from './types';

const PACK_100_500 = [
  { text: '100 tablets' },
  { text: '200 tablets', modifier: 90 },
  { text: '300 tablets', modifier: 180 },
  { text: '400 tablets', modifier: 270 },
  { text: '500 tablets', modifier: 360 }
];

const FAQ_BLOCK = (name: string) =>
  [
    `How to buy ${name} online? Use only with a valid prescription and buy from licensed pharmacies.`,
    'Is it safe? It is generally well tolerated when used as directed by a healthcare professional.',
    'What if a dose is missed? Take it when remembered unless it is close to the next dose; do not double-dose.',
    'How long does it take to work? It depends on the infection; some symptoms improve in days while others take weeks.'
  ].join('\n');

const WHY_CONSIDER_BLOCK = (name: string) =>
  [
    `${name} may be considered when your clinician confirms a parasitic infection and chooses ivermectin as part of care.`,
    'It is commonly selected for practical dosing, broad clinical familiarity, and established antiparasitic use.',
    'Always follow clinician guidance and local treatment protocols.'
  ].join('\n');

const SIDE_EFFECT_BLOCK =
  [
    'Common side effects can include dizziness, nausea, diarrhea, abdominal discomfort, and mild skin reactions.',
    'Less common but serious reactions may include allergic symptoms, severe rash, confusion, or liver-related effects.',
    'Seek medical care promptly if severe symptoms occur.'
  ].join('\n');

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
      'Iverjohn 3 mg is a brand of ivermectin medication used to treat certain parasitic infections in humans. The dose depends on body weight, infection type, and medical history.',
      'Ivermectin is not broadly approved as a standard COVID-19 treatment; evidence remains mixed and clinicians should guide decisions.',
      'Iverjohn 3 mg may cause side effects such as dizziness, nausea, vomiting, and diarrhea. Rare serious effects can occur.',
      'Always consult a healthcare professional before taking this medicine.',
      '',
      'Why Consider Iverjohn 3 mg?',
      WHY_CONSIDER_BLOCK('Iverjohn 3 mg'),
      '',
      'Some Interesting Insights About Ivermectin',
      'Ivermectin is an antiparasitic medicine used against infections caused by certain worms, lice, and mites. It works by disrupting parasite nerve and muscle function.',
      '',
      'FAQs',
      FAQ_BLOCK('Iverjohn 3 mg'),
      '',
      'Additional Product Description',
      'Iverjohn 3 mg contains ivermectin, an antiparasitic agent used for conditions such as river blindness, scabies, and roundworm infections. It works by paralyzing and killing susceptible parasites.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 5.0,
    reviews: 31,
    highlights: ['Strength: 3 mg', 'Category: Antiparasitic', 'Prescription required', 'Oral tablet'],
    additionalInfo: [
      { label: 'Active Ingredient', value: 'Ivermectin' },
      { label: 'Strength', value: '3 mg' },
      { label: 'Pack Size', value: '100, 200, 300, 400, 500 tablets' },
      { label: 'Why Consider', value: WHY_CONSIDER_BLOCK('Iverjohn 3 mg') },
      { label: 'Side Effects', value: SIDE_EFFECT_BLOCK },
      { label: 'FAQs', value: FAQ_BLOCK('Iverjohn 3 mg') }
    ],
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
      'Iverjohn 6 mg is a highly effective medication that contains ivermectin, an antiparasitic agent used to treat selected parasitic infections.',
      'Iverjohn 6 mg is a higher-strength tablet option compared with 3 mg and should be used strictly under clinician guidance.',
      '',
      'Why Consider Iverjohn 6 mg?',
      WHY_CONSIDER_BLOCK('Iverjohn 6 mg'),
      '',
      'Side Effects',
      SIDE_EFFECT_BLOCK,
      '',
      'FAQs',
      FAQ_BLOCK('Iverjohn 6 mg')
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.9,
    reviews: 29,
    highlights: ['Strength: 6 mg', 'High-strength tablet option', 'Prescription required', 'Oral use'],
    additionalInfo: [
      { label: 'Active Ingredient', value: 'Ivermectin' },
      { label: 'Strength', value: '6 mg' },
      { label: 'Pack Size', value: '100, 200, 300, 400, 500 tablets' },
      { label: 'Why Consider', value: WHY_CONSIDER_BLOCK('Iverjohn 6 mg') },
      { label: 'Side Effects', value: SIDE_EFFECT_BLOCK },
      { label: 'FAQs', value: FAQ_BLOCK('Iverjohn 6 mg') }
    ],
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
      'Ivermectin Paste Dewormer is effective against a wide range of parasites and is available in paste and liquid formats.',
      'Incorporating ivermectin in a full parasite-control strategy can help reduce infestation burden; however, resistance can occur with improper use.',
      '',
      'How Ivermectin Paste Works',
      'Ivermectin belongs to the avermectin class and targets parasite nervous systems while having comparatively low impact on mammalian cells at recommended use.',
      '',
      'How to Use',
      'Commercial formulations vary. Dose calculations should be accurate and guided by a veterinary professional when used in animals.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 22,
    highlights: ['Paste format', 'Broad antiparasitic use', '1, 2, 4, or 6 tube packs', 'Follow dosing instructions'],
    additionalInfo: [
      { label: 'Form', value: 'Oral paste' },
      { label: 'Common Packs', value: '1 tube, 2 tubes, 4 tubes, 6 tubes' }
    ],
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '1 tube' },
          { text: '2 tubes', modifier: 30 },
          { text: '4 tubes', modifier: 95 },
          { text: '6 tubes', modifier: 150 }
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
      'Ivermectin Tablets are used for selected parasitic infections and work by paralyzing and killing susceptible parasites.',
      '',
      'What is Ivermectin and why is it used?',
      'It is used for conditions such as intestinal strongyloidiasis and other confirmed parasitic infections depending on physician diagnosis.',
      '',
      'Before use',
      'Use only if prescribed. Avoid use when there is known hypersensitivity to ivermectin or formulation components.',
      '',
      'Storage and precautions',
      'Store in a cool, dry place away from direct sunlight. Keep out of reach of children.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.9,
    reviews: 20,
    highlights: ['Standard tablet format', 'Prescription required', 'Pack size with strength selection', 'Clinician-guided use'],
    additionalInfo: [
      { label: 'Active Ingredient', value: 'Ivermectin' },
      { label: 'Pack Size', value: '100, 200, 300, 400, 500 tablets' },
      { label: 'Strength', value: 'Selectable on product page' }
    ],
    options: [
      { label: 'Pack Size', choices: PACK_100_500 },
      {
        label: 'Strength',
        choices: [{ text: '3 mg' }, { text: '6 mg' }, { text: '12 mg' }]
      }
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
      'Iverjohn 12 mg contains ivermectin and is used for physician-directed treatment of selected parasitic infections.',
      'This higher-strength option should only be used when a clinician determines it is appropriate.',
      '',
      'Why Consider Iverjohn 12 mg?',
      WHY_CONSIDER_BLOCK('Iverjohn 12 mg'),
      '',
      'Side Effects',
      SIDE_EFFECT_BLOCK,
      '',
      'FAQs',
      FAQ_BLOCK('Iverjohn 12 mg')
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.9,
    reviews: 23,
    highlights: ['Strength: 12 mg', 'Higher-strength option', 'Prescription required', 'Oral tablet'],
    additionalInfo: [
      { label: 'Active Ingredient', value: 'Ivermectin' },
      { label: 'Strength', value: '12 mg' },
      { label: 'Pack Size', value: '100, 200, 300, 400, 500 tablets' },
      { label: 'Why Consider', value: WHY_CONSIDER_BLOCK('Iverjohn 12 mg') },
      { label: 'Side Effects', value: SIDE_EFFECT_BLOCK },
      { label: 'FAQs', value: FAQ_BLOCK('Iverjohn 12 mg') }
    ],
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
      'Iverheal USP Tablet (Ivermectin) is an antiparasitic oral medicine used in physician-guided treatment plans for skin, intestinal, and eye-related parasitic infections.',
      'Patients with scabies and filariasis are often evaluated for ivermectin options depending on diagnosis and severity.',
      '',
      'What is Iverheal?',
      'Iverheal is a branded ivermectin tablet line. It should be purchased and used only with a valid prescription.',
      '',
      'How Generic Ivermectin Pills Work',
      'Ivermectin targets parasite nervous systems and can help clear susceptible parasites.',
      '',
      'Recommended Ways to Take Iverheal Tablets',
      'Use exactly as prescribed, usually on an empty stomach unless your clinician advises otherwise.',
      '',
      'Vital Precautions and Warnings',
      'Use under clinician supervision, especially with liver disease, neurological disorders, pregnancy, or breastfeeding.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 26,
    highlights: ['USP tablet presentation', 'Includes image gallery', 'Prescription required', 'Dose and pack selectable'],
    additionalInfo: [
      { label: 'Active Ingredient', value: 'Ivermectin' },
      { label: 'Dose', value: 'Selectable on product page' },
      { label: 'Pack Size', value: 'Selectable on product page' }
    ],
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '30 tablets' },
          { text: '50 tablets', modifier: 22 },
          { text: '100 tablets', modifier: 68 },
          { text: '200 tablets', modifier: 145 },
          { text: '500 tablets', modifier: 380 }
        ]
      },
      { label: 'Dose', choices: [{ text: '3 mg' }, { text: '6 mg' }, { text: '12 mg' }] }
    ]
  },
  {
    id: 'ivermectin-cream',
    name: 'Ivermectin Cream',
    brand: 'Ivrea',
    price: 50.0,
    prescription: true,
    image:
      'https://static.wixstatic.com/media/20d0e2_0db1341ac9084686b6138fea90cd0240~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_0db1341ac9084686b6138fea90cd0240~mv2.jpg',
    images: [
      'https://static.wixstatic.com/media/20d0e2_0db1341ac9084686b6138fea90cd0240~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20d0e2_0db1341ac9084686b6138fea90cd0240~mv2.jpg'
    ],
    description: [
      'Ivermectin Cream is used in treatment of rosacea and helps reduce redness, swelling, and pimples.',
      'Apply on clean, dry skin exactly as directed. Avoid contact with eyes, mouth, and inside the nose.',
      '',
      'Uses',
      'Rosacea, clinician-directed parasite-related skin treatment.',
      '',
      'Benefits',
      'Targeted topical treatment with localized action on affected skin.',
      '',
      'Side Effects',
      'Temporary burning, irritation, itching, or redness at the application site can occur.',
      '',
      'How to Use',
      'Apply a thin layer once daily or as prescribed.',
      '',
      'How it Works',
      'Acts on parasite-related inflammatory pathways and helps reduce lesion burden in susceptible conditions.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.7,
    reviews: 18,
    highlights: ['Topical cream', 'Commonly used for rosacea', 'Prescription recommended', '2/4/6 cream pack options'],
    additionalInfo: [
      { label: 'Form', value: 'Topical cream' },
      { label: 'Pack Size', value: '2 cream, 4 cream, 6 cream' }
    ],
    options: [
      {
        label: 'Pack Size',
        choices: [{ text: '2 cream' }, { text: '4 cream', modifier: 45 }, { text: '6 cream', modifier: 90 }]
      }
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
      'Vermact 12mg is an antiparasitic medication used for intestinal, skin, and eye parasite infections under medical advice.',
      'It is often taken on an empty stomach as directed, and hydration is recommended unless your clinician advises otherwise.',
      '',
      'Uses',
      'Treatment of parasitic infections.',
      '',
      'Benefits',
      'Supports parasite clearance and symptom relief in susceptible infections.',
      '',
      'Side Effects',
      SIDE_EFFECT_BLOCK,
      '',
      'How to Use',
      'Take exactly as prescribed; do not self-adjust dose.',
      '',
      'How it Works',
      'Paralyzes and kills susceptible parasites by affecting their neuromuscular function.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.7,
    reviews: 16,
    highlights: ['Strength: 12 mg', 'Tablet DT format', 'Prescription required', 'Low entry price'],
    additionalInfo: [{ label: 'Pack Size', value: 'Selectable on product page' }],
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '30 tablets' },
          { text: '50 tablets', modifier: 12 },
          { text: '100 tablets', modifier: 36 },
          { text: '200 tablets', modifier: 80 },
          { text: '500 tablets', modifier: 220 }
        ]
      }
    ]
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
      'Iversun 6 mg is listed as an ivermectin product for parasite-focused treatment plans under medical supervision.',
      '',
      'Used For',
      'Parasitic infections of intestinal tract, skin, and eyes.',
      '',
      'Dosage',
      'Dose is individualized by body weight and diagnosis; follow clinician instructions.',
      '',
      'Description',
      'Continue treatment as prescribed to reduce risk of incomplete parasite clearance.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.6,
    reviews: 14,
    highlights: ['Strength: 6 mg', 'Tablet format', 'Prescription required', '30 to 500 tablet pack options'],
    additionalInfo: [{ label: 'Pack Size', value: '30, 50, 100, 200, 500 tablets' }],
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '30 tablets' },
          { text: '50 tablets', modifier: 10 },
          { text: '100 tablets', modifier: 30 },
          { text: '200 tablets', modifier: 70 },
          { text: '500 tablets', modifier: 190 }
        ]
      }
    ]
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
      'Covimectin 12 mg is an antiparasitic medication used to treat selected parasitic infections.',
      'It is typically taken on an empty stomach as prescribed by a healthcare professional.',
      '',
      'Uses',
      'Treatment of parasitic infections.',
      '',
      'Benefits',
      'Helps clear susceptible parasites and reduce related symptoms.',
      '',
      'Side Effects',
      SIDE_EFFECT_BLOCK,
      '',
      'How to Use',
      'Take exactly as prescribed and avoid dose changes without medical advice.',
      '',
      'How it Works',
      'Disrupts parasite neuromuscular activity, causing paralysis and death of susceptible organisms.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.7,
    reviews: 17,
    highlights: ['Strength: 12 mg', 'Tablet format', 'Prescription required', '30 to 500 tablet pack options'],
    additionalInfo: [{ label: 'Pack Size', value: '30, 50, 100, 200, 500 tablets' }],
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '30 tablets' },
          { text: '50 tablets', modifier: 14 },
          { text: '100 tablets', modifier: 36 },
          { text: '200 tablets', modifier: 84 },
          { text: '500 tablets', modifier: 220 }
        ]
      }
    ]
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
      'Ivervid 6mg Tablet is an antiparasitic medication used in treatment of intestinal, skin, and eye parasite infections.',
      'Generally taken on an empty stomach as advised by a clinician.',
      '',
      'Uses',
      'Treatment of parasitic infections.',
      '',
      'Benefits',
      'Supports clinical parasite clearance when used correctly.',
      '',
      'Side Effects',
      SIDE_EFFECT_BLOCK,
      '',
      'How to Use',
      'Use only under prescription and complete follow-up as advised.',
      '',
      'How it Works',
      'Acts on parasite nervous signaling and helps eliminate susceptible organisms.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 13,
    highlights: ['Strength: 6 mg', 'Tablet format', 'Prescription required', 'Pack sizes aligned with category tablets'],
    additionalInfo: [{ label: 'Pack Size', value: '30, 50, 100, 200, 500 tablets' }],
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '30 tablets' },
          { text: '50 tablets', modifier: 25 },
          { text: '100 tablets', modifier: 60 },
          { text: '200 tablets', modifier: 130 },
          { text: '500 tablets', modifier: 340 }
        ]
      }
    ]
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
      'Ivervid 3mg Tablet is an antiparasitic medication used for selected intestinal, skin, and eye parasite infections.',
      'Usually taken on an empty stomach per clinician guidance.',
      '',
      'Uses',
      'Treatment of parasitic infections.',
      '',
      'Benefits',
      'Lower-strength ivermectin option for clinician-guided dose planning.',
      '',
      'Side Effects',
      SIDE_EFFECT_BLOCK,
      '',
      'How to Use',
      'Use exactly as prescribed and avoid self-dosing changes.',
      '',
      'How it Works',
      'Disrupts parasite neuromuscular function and supports parasite elimination.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 12,
    highlights: ['Strength: 3 mg', 'Lower-strength tablet option', 'Prescription required', 'Oral use'],
    additionalInfo: [{ label: 'Pack Size', value: '30, 50, 100, 200, 500 tablets' }],
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '30 tablets' },
          { text: '50 tablets', modifier: 20 },
          { text: '100 tablets', modifier: 52 },
          { text: '200 tablets', modifier: 115 },
          { text: '500 tablets', modifier: 300 }
        ]
      }
    ]
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
      'Ivervid Tablet 12mg is an antiparasitic medication used in treatment of selected parasitic infections of intestinal tract, skin, and eyes.',
      'Generally taken on an empty stomach, with dose based on clinician instruction and patient profile.',
      '',
      'Uses',
      'Treatment of parasitic infections.',
      '',
      'Benefits',
      'Higher-strength ivermectin tablet option for clinician-guided plans.',
      '',
      'Side Effects',
      SIDE_EFFECT_BLOCK,
      '',
      'How to Use',
      'Take exactly as prescribed; do not double-dose if one dose is missed.',
      '',
      'How it Works',
      'Interferes with parasite nerve function leading to paralysis and death of susceptible parasites.'
    ].join('\n\n'),
    category: 'Ivermectin',
    rating: 4.9,
    reviews: 15,
    highlights: ['Strength: 12 mg', 'Higher-strength option', 'Prescription required', 'Wide pack-size range'],
    additionalInfo: [{ label: 'Pack Size', value: '30, 50, 100, 200, 300, 500, 1000 tablets' }],
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '30 tablets' },
          { text: '50 tablets', modifier: 20 },
          { text: '100 tablets', modifier: 55 },
          { text: '200 tablets', modifier: 125 },
          { text: '300 tablets', modifier: 195 },
          { text: '500 tablets', modifier: 340 },
          { text: '1000 tablets', modifier: 700 }
        ]
      }
    ]
  }
];
