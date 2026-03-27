import { Product } from './types';
import ivm01 from './assets/ivermectin-collection/ivm-01.jpg';
import ivm02 from './assets/ivermectin-collection/ivm-02.jpg';
import ivm03 from './assets/ivermectin-collection/ivm-03.jpeg';
import ivm04 from './assets/ivermectin-collection/ivm-04.jpg';
import ivm05 from './assets/ivermectin-collection/ivm-05.png';
import ivm06 from './assets/ivermectin-collection/ivm-06.jpg';
import ivm07 from './assets/ivermectin-collection/ivm-07.jpg';
import ivm08 from './assets/ivermectin-collection/ivm-08.jpg';
import ivm09 from './assets/ivermectin-collection/ivm-09.jpg';
import ivm10 from './assets/ivermectin-collection/ivm-10.jpg';
import ivm11 from './assets/ivermectin-collection/ivm-11.jpeg';
import ivm12 from './assets/ivermectin-collection/ivm-12.jpeg';
import ivm13 from './assets/ivermectin-collection/ivm-13.jpeg';

export const IVERMECTIN_COLLECTION_PRODUCTS: Product[] = [
  {
    id: 'ivermectin-injection-1',
    name: 'Ivermectin Injection 1%',
    brand: 'Ivermectinkart',
    price: 60.0,
    prescription: true,
    image: ivm01,
    images: [ivm01],
    description:
      'Ivermectin Injection 1% is a potent antiparasitic formulation selected for controlled dosing support. It is commonly considered where a high-strength ivermectin presentation is preferred and should be used according to qualified medical guidance.',
    category: 'Ivermectin',
    rating: 4.9,
    reviews: 18,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '1 vial', price: 60.0 },
          { text: '3 vials', price: 165.0 }
        ]
      }
    ]
  },
  {
    id: 'iverjohn-3mg',
    name: 'Iverjohn 3 mg (Ivermectin)',
    brand: 'Iverjohn',
    price: 120.0,
    prescription: true,
    image: ivm02,
    images: [ivm02],
    description:
      'Iverjohn 3 mg is an ivermectin tablet presentation used in antiparasitic treatment protocols. This lower-strength option is often chosen where flexible dose planning is required under professional supervision.',
    category: 'Ivermectin',
    rating: 5.0,
    reviews: 27,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '100 tablets', price: 120.0 },
          { text: '200 tablets', price: 225.0 }
        ]
      }
    ]
  },
  {
    id: 'iverjohn-6mg',
    name: 'Iverjohn 6 mg (Ivermectin)',
    brand: 'Iverjohn',
    price: 145.0,
    prescription: true,
    image: ivm03,
    images: [ivm03],
    description:
      'Iverjohn 6 mg delivers ivermectin in a stronger tablet format for patients or buyers looking for a mid-strength option. It is commonly selected for parasite-directed care plans and should be taken exactly as advised.',
    category: 'Ivermectin',
    rating: 5.0,
    reviews: 24,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '100 tablets', price: 145.0 },
          { text: '200 tablets', price: 275.0 }
        ]
      }
    ]
  },
  {
    id: 'ivermectin-paste-dewormer',
    name: 'Ivermectin Paste Dewormer',
    brand: 'Durvet',
    price: 35.0,
    prescription: false,
    image: ivm04,
    images: [ivm04],
    description:
      'Ivermectin Paste Dewormer is a concentrated paste format commonly used in antiparasitic routines. It offers a practical alternative to tablet products and is frequently chosen for straightforward single-product purchasing.',
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 19,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '1 tube', price: 35.0 },
          { text: '3 tubes', price: 96.0 }
        ]
      }
    ]
  },
  {
    id: 'covilife-40mg',
    name: 'Covilife 40mg Tablet (Ivermectin)',
    brand: 'Covilife',
    price: 380.0,
    prescription: true,
    image: ivm05,
    images: [ivm05],
    description:
      'Covilife 40mg Tablet is a high-strength ivermectin product intended for carefully planned dosing strategies. Buyers typically choose this product when they need a stronger unit strength in tablet form.',
    category: 'Ivermectin',
    rating: 5.0,
    reviews: 14,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '50 tablets', price: 380.0 },
          { text: '100 tablets', price: 720.0 }
        ]
      }
    ]
  },
  {
    id: 'albendazole-tablet',
    name: 'Albendazole Tablet',
    brand: 'Ivermectinkart',
    price: 150.0,
    prescription: true,
    image: ivm06,
    images: [ivm06],
    description:
      'Albendazole Tablet is a broad-spectrum antiparasitic medicine often purchased alongside ivermectin-focused products. It is commonly selected where users want an established deworming option in tablet form.',
    category: 'Ivermectin',
    rating: 4.9,
    reviews: 13,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '50 tablets', price: 150.0 },
          { text: '100 tablets', price: 285.0 }
        ]
      }
    ]
  },
  {
    id: 'albendazole-400mg',
    name: 'Albendazole 400mg Tablet',
    brand: 'Ivermectinkart',
    price: 70.0,
    prescription: true,
    image: ivm07,
    images: [ivm07],
    description:
      'Albendazole 400mg Tablet provides a stronger single-tablet strength for antiparasitic use. It is often considered for parasite management plans where a 400 mg presentation is preferred.',
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 11,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '30 tablets', price: 70.0 },
          { text: '60 tablets', price: 130.0 }
        ]
      }
    ]
  },
  {
    id: 'fenbendazole-tablet',
    name: 'Fenbendazole Tablet',
    brand: 'Fenbendazole',
    price: 160.0,
    prescription: false,
    image: ivm08,
    images: [ivm08],
    description:
      'Fenbendazole Tablet is a widely recognized deworming product that appears in many antiparasitic shopping carts alongside ivermectin products. It is valued for straightforward tablet use and protocol compatibility.',
    category: 'Ivermectin',
    rating: 5.0,
    reviews: 21,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '90 tablets', price: 160.0 },
          { text: '180 tablets', price: 305.0 }
        ]
      }
    ]
  },
  {
    id: 'doxycycline-100mg',
    name: 'Doxycycline 100mg',
    brand: 'Doxycycline',
    price: 120.0,
    prescription: true,
    image: ivm09,
    images: [ivm09],
    description:
      'Doxycycline 100mg is a frequently paired support medication in broader treatment routines. Buyers often select it when they need a dependable 100 mg antibiotic format to complement physician-directed protocols.',
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 10,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '50 capsules', price: 120.0 },
          { text: '100 capsules', price: 228.0 }
        ]
      }
    ]
  },
  {
    id: 'fluvoxin-100mg',
    name: 'Fluvoxin Tablet 100mg (Fluvoxamine)',
    brand: 'Fluvoxin',
    price: 45.0,
    prescription: true,
    image: ivm10,
    images: [ivm10],
    description:
      'Fluvoxin Tablet 100mg contains fluvoxamine in a straightforward oral tablet format. It is often added to broader support kits where buyers want a reliable 100 mg branded option.',
    category: 'Ivermectin',
    rating: 4.7,
    reviews: 9,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '30 tablets', price: 45.0 },
          { text: '60 tablets', price: 84.0 }
        ]
      }
    ]
  },
  {
    id: 'amoxycillin-capsule',
    name: 'Amoxycillin Capsule',
    brand: 'Amoxycillin',
    price: 150.0,
    prescription: true,
    image: ivm11,
    images: [ivm11],
    description:
      'Amoxycillin Capsule is a classic antibiotic presentation favored for routine physician-led treatment planning. This capsule format is often chosen when users want a familiar oral option with flexible pack sizing.',
    category: 'Ivermectin',
    rating: 4.8,
    reviews: 12,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '60 capsules', price: 150.0 },
          { text: '120 capsules', price: 285.0 }
        ]
      }
    ]
  },
  {
    id: 'amoxyheal-cv-625',
    name: 'Amoxyheal CV 625 (Amoxycillin And Potassium Clavulanate)',
    brand: 'Amoxyheal CV',
    price: 48.0,
    prescription: true,
    image: ivm12,
    images: [ivm12],
    description:
      'Amoxyheal CV 625 combines amoxycillin with potassium clavulanate in a broad-use oral tablet. It is commonly selected when a combined antibiotic formulation is preferred over a single-agent product.',
    category: 'Ivermectin',
    rating: 4.7,
    reviews: 8,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '20 tablets', price: 48.0 },
          { text: '40 tablets', price: 90.0 }
        ]
      }
    ]
  },
  {
    id: 'mebendazole-tablet',
    name: 'Mebendazole Tablet',
    brand: 'Mebendazole',
    price: 150.0,
    prescription: false,
    image: ivm13,
    images: [ivm13],
    description:
      'Mebendazole Tablet is another antiparasitic option frequently considered in deworming and parasite-focused product collections. It is valued for simple tablet-based use and broad familiarity among buyers.',
    category: 'Ivermectin',
    rating: 4.9,
    reviews: 16,
    options: [
      {
        label: 'Pack Size',
        choices: [
          { text: '60 tablets', price: 150.0 },
          { text: '120 tablets', price: 290.0 }
        ]
      }
    ]
  }
];
