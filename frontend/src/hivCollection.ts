import { Product } from './types';
import img1 from './assets/products/hiv/01-acto-pred-tablets.jpg';
import img2 from './assets/products/hiv/02-ab-phylline-capsules-acebrophylline.jpg';
import img3 from './assets/products/hiv/03-stavir-capsules-stavudine.jpg';
import img4 from './assets/products/hiv/04-zidovir-tablets-zidovudine.jpg';
import img5 from './assets/products/hiv/05-zepdon-tablet-raltegravir.jpg';
import img6 from './assets/products/hiv/06-x-vir-tablet-entecavir.jpg';
import img7 from './assets/products/hiv/07-triomune-tablet.jpg';
import img8 from './assets/products/hiv/08-trioday-tablet.jpg';
import img9 from './assets/products/hiv/09-tenvir-l-tablet.jpg';
import img10 from './assets/products/hiv/10-tenvir-em-tablet.jpg';
import img11 from './assets/products/hiv/11-tenvir-300mg.jpg';
import img12 from './assets/products/hiv/12-tavin-em-tablet-tenofovir-emtriotabine.jpg';
import img13 from './assets/products/hiv/13-tafero-em-tablet-emtricitabine.jpg';
import img14 from './assets/products/hiv/14-synthivan-tablet-atazanavir-ritonavir.jpg';
import img15 from './assets/products/hiv/15-ritomune-tablet-ritonavir.jpg';
import img16 from './assets/products/hiv/16-qvir-kit.jpg';
import img17 from './assets/products/hiv/17-nevimune-tablet-nevirapine.jpg';
import img18 from './assets/products/hiv/18-lopimune-tablet-lopinavir-ritonavir.jpg';
import img19 from './assets/products/hiv/19-lamivir-s-tablet-lamivudine-stavudine.jpg';
import img20 from './assets/products/hiv/20-lamivir-tablet-lamivudine.jpg';
import img21 from './assets/products/hiv/21-isentress-400mg-raltegravir.jpg';
import img22 from './assets/products/hiv/22-instgra-tablet-dolutegravir.jpg';
import img23 from './assets/products/hiv/23-epzicom-abamun-l.jpg';
import img24 from './assets/products/hiv/24-entavir-entecavir.jpg';
import img25 from './assets/products/hiv/25-entaliv-0-5-mg-entecavir.webp';
import img26 from './assets/products/hiv/26-efavir-tablet-efavirenz.jpg';
import img27 from './assets/products/hiv/27-duovir-e-kit-tablet.jpg';
import img28 from './assets/products/hiv/28-duovir-n-tablet.jpg';
import img29 from './assets/products/hiv/29-duovir-tablet.jpg';
import img30 from './assets/products/hiv/30-dinex-ec-didanosine.jpg';
import img31 from './assets/products/hiv/31-daruvir-tablet-darunavir.jpg';
import img32 from './assets/products/hiv/32-axentri-tablet-maraviroc.jpg';
import img33 from './assets/products/hiv/33-atazor-r-atazanavir-ritonavir.png';
import img34 from './assets/products/hiv/34-atavir-capsule-atazanavir.jpg';
import img35 from './assets/products/hiv/35-abec-l-tablet-abacavir-lamivudine.jpg';
import img36 from './assets/products/hiv/36-abamune-tablet-abacavir.jpg';
import img37 from './assets/products/hiv/37-abamune-l-abacavir-lamivudine.jpg';

export const HIV_COLLECTION_PRODUCTS: Product[] = [
  {
    id: 'acto-pred-tablets',
    name: 'Acto Pred Tablets',
    brand: 'Ivermectinkart',
    price: 15.00,
    prescription: false,
    image: img1,
    images: [img1],
    description: 'Acto Pred Tablets is a medicine used to treat a wide variety of medical conditions such as severe allergic conditions, asthma, rheumatic disorder, skin and eye disorders, and systemic lupus erythematosus. It provides relief by preventing the release of substances that cause inflammation.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/acto-pred-tablets' }
    ]
  },

  {
    id: 'ab-phylline-capsules-acebrophylline',
    name: 'AB Phylline Capsules (Acebrophylline)',
    brand: 'Ivermectinkart',
    price: 180.00,
    prescription: false,
    image: img2,
    images: [img2],
    description: 'AB Phylline Capsules is used to treat and prevent symptoms of asthma, bronchitis, and chronic obstructive pulmonary disorder (a lung disorder in which flow of air to the lung is blocked). It helps in relaxing the muscles of the air passages, thus widening it and making it easier to breathe.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/ab-phylline-capsules' }
    ]
  },

  {
    id: 'stavir-capsules-stavudine',
    name: 'Stavir Capsules (Stavudine)',
    brand: 'Ivermectinkart',
    price: 95.00,
    prescription: false,
    image: img3,
    images: [img3],
    description: 'Stavir Capsules belongs to a group of medicines called antiretrovirals. It is used to treat HIV (human immunodeficiency virus), the virus that can cause AIDS (acquired immunodeficiency syndrome). It helps to control HIV infection so your immune system can work better.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/stavir-capsules' }
    ]
  },

  {
    id: 'zidovir-tablets-zidovudine',
    name: 'Zidovir Tablets (Zidovudine)',
    brand: 'Ivermectinkart',
    price: 75.00,
    prescription: false,
    image: img4,
    images: [img4],
    description: 'Zidovir Tablets belongs to a group of medicines called antiretrovirals. It is used to treat HIV (human immunodeficiency virus), the virus that can cause AIDS (acquired immunodeficiency syndrome). It helps to control HIV infection so your immune system can work better.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/zidovir-tablets' }
    ]
  },

  {
    id: 'zepdon-tablet-raltegravir',
    name: 'Zepdon Tablet (Raltegravir)',
    brand: 'Ivermectinkart',
    price: 350.00,
    prescription: false,
    image: img5,
    images: [img5],
    description: 'Zepdon Tablet is an antiretrovirals. It is used to treat HIV (human immunodeficiency virus), the virus that can cause AIDS (acquired immunodeficiency syndrome). It prevents the multiplication of viruses in human cells and clears up your infection.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/zepdon-tablet' }
    ]
  },

  {
    id: 'x-vir-tablet-entecavir',
    name: 'X-Vir Tablet (Entecavir)',
    brand: 'Ivermectinkart',
    price: 200.00,
    prescription: false,
    image: img6,
    images: [img6],
    description: 'X-Vir Tablet is an antiviral medicine used in the treatment of hepatitis B virus (HBV) infection. It works by inhibiting the replication of the virus, thereby reducing its levels in the body. By suppressing viral replication, it helps to slow down the progression of liver damage.X Vir 0.5mg Tablet should be taken in an empty stomach. Take it in the exact dose and duration prescribed by your doctor. Follow the instructions carefully. Taking it regularly at the right times greatly increases the effectiveness and help improve liver function.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/x-vir-tablet-entecavir' }
    ]
  },

  {
    id: 'triomune-tablet',
    name: 'Triomune Tablet',
    brand: 'Ivermectinkart',
    price: 95.00,
    prescription: false,
    image: img7,
    images: [img7],
    description: 'Triomune Tablet is a combination of antiretrovirals medicines. It is prescribed to treat HIV (human immunodeficiency virus) infection. It boosts up the immunity to fight against HIV to manage or treat AIDS (acquired immunodeficiency syndrome).',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/triomune-tablet' }
    ]
  },

  {
    id: 'trioday-tablet',
    name: 'Trioday Tablet',
    brand: 'Ivermectinkart',
    price: 200.00,
    prescription: false,
    image: img8,
    images: [img8],
    description: 'Trioday Tablet is a combination of antiretrovirals medicines. It is prescribed to treat HIV (human immunodeficiency virus) infection. It boosts up the immunity to fight against HIV to manage or treat AIDS (acquired immunodeficiency syndrome).',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/trioday-tablet' }
    ]
  },

  {
    id: 'tenvir-l-tablet',
    name: 'Tenvir L Tablet',
    brand: 'Ivermectinkart',
    price: 150.00,
    prescription: false,
    image: img9,
    images: [img9],
    description: 'Tenvir L Tablet is a combination of two antiretrovirals. It is prescribed to treat HIV (human immunodeficiency virus) infection. It boosts up the immunity to fight against HIV to manage or treat AIDS (acquired immunodeficiency syndrome). Tenvir L Tablet restricts the growth of HIV in the body and reduces the risk of getting HIV-related complications to improve the lifespan of an individual. The medicine can be taken with or without food. Taking these medicines regularly at the same time increases their effectiveness. A dose of this medicine should not be missed as it can affect your recovery. It is important to complete the full course of the treatment until your doctor advises you to stop it.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/tenvir-l-tablet' }
    ]
  },

  {
    id: 'tenvir-em-tablet',
    name: 'Tenvir EM Tablet',
    brand: 'Ivermectinkart',
    price: 190.00,
    prescription: false,
    image: img10,
    images: [img10],
    description: 'Tenvir-EM Tablet belongs to a group of medicines called antiretrovirals. It is used to treat HIV (human immunodeficiency virus), the virus that can cause AIDS (acquired immunodeficiency syndrome). It helps to control HIV infection so your immune system can work better.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/tenvir-em-tablet' }
    ]
  },

  {
    id: 'tenvir-300mg',
    name: 'Tenvir 300mg',
    brand: 'Ivermectinkart',
    price: 52.00,
    prescription: false,
    image: img11,
    images: [img11],
    description: 'Tenvir 300mg is a prescription medication used to treat HIV-1 infection in adults. Each tablet contains 300 mg of Tenofovir Disoproxil Fumarate, an antiretroviral medication that works by slowing the growth of the virus in the body. This medication is typically taken once a day with or without food, as directed by a healthcare professional. It is important to continue taking Tenvir 300 mg regularly to experience its full benefits.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/tenvir-300mg' }
    ]
  },

  {
    id: 'tavin-em-tablet-tenofovir-emtriotabine',
    name: 'Tavin EM Tablet (Tenofovir & Emtriotabine)',
    brand: 'Ivermectinkart',
    price: 172.00,
    prescription: false,
    image: img12,
    images: [img12],
    description: 'Tavin EM Tablet belongs to a group of medicines called antiretrovirals. It is used to treat HIV (human immunodeficiency virus), the virus that can cause AIDS (acquired immunodeficiency syndrome). It helps to control HIV infection so your immune system can work better.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/tavin-em-tablet' }
    ]
  },

  {
    id: 'tafero-em-tablet-emtricitabine',
    name: 'Tafero EM Tablet (Emtricitabine)',
    brand: 'Ivermectinkart',
    price: 195.00,
    prescription: false,
    image: img13,
    images: [img13],
    description: 'Tafero EM Tablet belongs to a group of medicines called antiretrovirals. It is use to treat HIV (human immunodeficiency virus), the virus that can cause AIDS (acquired immunodeficiency syndrome). It helps to control HIV infection so your immune system can work better. Tafero EM Tablet is not a cure for HIV/AIDS and only helps to decrease the amount of HIV in your body.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/tafero-em-tablet' }
    ]
  },

  {
    id: 'synthivan-tablet-atazanavir-ritonavir',
    name: 'Synthivan Tablet (Atazanavir & Ritonavir)',
    brand: 'Ivermectinkart',
    price: 198.00,
    prescription: false,
    image: img14,
    images: [img14],
    description: 'Synthivan Tablet is a combination of antiretrovirals medicines. It is prescribed to treat HIV (human immunodeficiency virus) infection. It boosts up the immunity to fight against HIV to manage or treat AIDS (acquired immunodeficiency syndrome). Synthivan Tablet restricts the growth of HIV in the body and reduces the risk of getting HIV-related complications to improve the lifespan of an individual. The medicine should be taken with food. Taking these medicines regularly at the same time increases their effectiveness. A dose of this medicine should not be missed as it can affect your recovery. It is important to complete the full course of the treatment until your doctor advises you to stop it. Sudden discontinuation of the treatment may affect the potency of the medicine.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/synthivan-tablet' }
    ]
  },

  {
    id: 'ritomune-tablet-ritonavir',
    name: 'Ritomune Tablet (Ritonavir)',
    brand: 'Ivermectinkart',
    price: 156.00,
    prescription: false,
    image: img15,
    images: [img15],
    description: 'Ritomune Tablet is an antiviral or antiretroviral medicine. It is used in the treatment of HIV infection. It stops the virus from producing new viruses and clears up your infection. Ritomune 100mg Tablet should be taken with food, as this increases the absorption of the medicine into the body. You should take it in the dose and duration as advised by your doctor. Taking it at the same time every day will help you to remember to take it. Do not stop taking it until you have finished the complete course, even when you feel better. If you stop taking this medicine too early then infection may return or worsen.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/ritomune-tablet-ritonavir' }
    ]
  },

  {
    id: 'qvir-kit',
    name: 'Qvir Kit',
    brand: 'Ivermectinkart',
    price: 87.00,
    prescription: false,
    image: img16,
    images: [img16],
    description: 'Qvir Kit is a combination of antiretrovirals medicines. It is prescribed to treat HIV (human immunodeficiency virus) infection. It boosts up the immunity to fight against HIV to manage or treat AIDS (acquired immunodeficiency syndrome). Qvir Kit restricts the growth of HIV in the body and reduces the risk of getting HIV-related complications to improve the lifespan of an individual. The medicine should be taken with food. Taking these medicines regularly at the same time increases their effectiveness. A dose of this medicine should not be missed as it can affect your recovery. It is important to complete the full course of the treatment until your doctor advises you to stop it. Sudden discontinuation of the treatment may affect the potency of the medicine.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/qvir-kit' }
    ]
  },

  {
    id: 'nevimune-tablet-nevirapine',
    name: 'Nevimune Tablet (Nevirapine)',
    brand: 'Ivermectinkart',
    price: 190.00,
    prescription: false,
    image: img17,
    images: [img17],
    description: 'Nevimune Tablet belongs to a group of medicines called antiretrovirals. It is used to treat HIV (human immunodeficiency virus), the virus that can cause AIDS (acquired immunodeficiency syndrome). It helps to control HIV infection so your immune system can work better.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/nevimune-tablet' }
    ]
  },

  {
    id: 'lopimune-tablet-lopinavir-ritonavir',
    name: 'Lopimune Tablet (Lopinavir & Ritonavir)',
    brand: 'Ivermectinkart',
    price: 145.00,
    prescription: false,
    image: img18,
    images: [img18],
    description: 'Lopimune Tablet is an effective medication used in the treatment of HIV infection. Each tablet contains a combination of two anti-HIV medicines, lopinavir, and ritonavir, which work together to prevent the virus from multiplying in the body. This medication is commonly prescribed as a part of a comprehensive treatment plan for HIV/AIDS. Lopimune Tablet is available in a convenient tablet form, making it easy to take as prescribed by your healthcare provider. When taken as directed, Lopimune Tablet can help manage HIV infection and improve overall quality of life for those living with the condition.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/lopimune-tablet-1' }
    ]
  },

  {
    id: 'lamivir-s-tablet-lamivudine-stavudine',
    name: 'Lamivir S Tablet (Lamivudine & Stavudine)',
    brand: 'Ivermectinkart',
    price: 105.00,
    prescription: false,
    image: img19,
    images: [img19],
    description: 'Lamivir S Tablet is a combination of two antiretrovirals. It is prescribed to treat HIV (human immunodeficiency virus) infection. It boosts up the immunity to fight against HIV to manage or treat AIDS (acquired immunodeficiency syndrome).',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/lamivir-s-tablet' }
    ]
  },

  {
    id: 'lamivir-tablet-lamivudine',
    name: 'Lamivir Tablet (Lamivudine)',
    brand: 'Ivermectinkart',
    price: 80.00,
    prescription: false,
    image: img20,
    images: [img20],
    description: 'Lamivir Tablet is used in the treatment of HIV infection and chronic hepatitis B virus (HBV) infection. It prevents the multiplication of virus in human cells. This stops the virus from producing new viruses and clears up your infection.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/lamivir-tablet' }
    ]
  },

  {
    id: 'isentress-400mg-raltegravir',
    name: 'Isentress 400mg (Raltegravir)',
    brand: 'Ivermectinkart',
    price: 165.00,
    prescription: false,
    image: img21,
    images: [img21],
    description: 'Isentress 400mg is a prescription medication used in combination with other medications to treat HIV infection in adults and children. Each tablet contains 400 mg of the active ingredient, raltegravir, which works by blocking the integration of the HIV virus into the genetic material of human cells. This helps to control the spread of the virus in the body and reduce the amount of HIV in the blood.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/isentress-400mg' }
    ]
  },

  {
    id: 'instgra-tablet-dolutegravir',
    name: 'Instgra Tablet (Dolutegravir)',
    brand: 'Ivermectinkart',
    price: 185.00,
    prescription: false,
    image: img22,
    images: [img22],
    description: 'Instgra Tablet belongs to a group of medicines called antiretrovirals. It is used to treat HIV (human immunodeficiency virus), the virus that can cause AIDS (acquired immunodeficiency syndrome). It prevents the multiplication of viruses in human cells and clears up your infection.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/instgra-tablet' }
    ]
  },

  {
    id: 'epzicom-abamun-l',
    name: 'Epzicom (Abamun L )',
    brand: 'Ivermectinkart',
    price: 165.00,
    prescription: false,
    image: img23,
    images: [img23],
    description: 'Epzicom (Abamun L) is a prescription medication used to treat HIV (human immunodeficiency virus) infection. It belongs to a class of drugs called antiretrovirals, which work by reducing the amount of HIV in the body. This medication should be used in combination with other antiretroviral drugs to effectively control HIV. Each tablet of Epzicom contains a combination of two antiretroviral medications: abacavir and lamivudine.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/epzicom-abamun-l' }
    ]
  },

  {
    id: 'entavir-entecavir',
    name: 'Entavir (Entecavir)',
    brand: 'Ivermectinkart',
    price: 100.00,
    prescription: false,
    image: img24,
    images: [img24],
    description: 'Entavir is an antiviral medicine used in the treatment of hepatitis B virus (HBV) infection. It works by inhibiting the replication of the virus, thereby reducing its levels in the body. By suppressing viral replication, it helps to slow down the progression of liver damage.Entavir 1mg Tablet should be taken in an empty stomach. Take it in the exact dose and duration prescribed by your doctor. Follow the instructions carefully. Taking it regularly at the right times greatly increases the effectiveness and help improve liver function, and decrease the risk of complications associated with chronic HBV infection.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/entavir-entecavir' }
    ]
  },

  {
    id: 'entaliv-0-5-mg-entecavir',
    name: 'Entaliv 0.5 mg (Entecavir)',
    brand: 'Ivermectinkart',
    price: 46.00,
    prescription: false,
    image: img25,
    images: [img25],
    description: 'Entaliv 0.5 mg is a prescription medication used in the treatment of chronic hepatitis B virus (HBV) infection in adults. Each Entaliv tablet contains 0.5 mg of the active ingredient entecavir, which works by slowing the growth of the virus in the body. This medication is typically taken once daily on an empty stomach, at least 2 hours before or after a meal, to help maximize its effectiveness.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/entaliv-05-mg' }
    ]
  },

  {
    id: 'efavir-tablet-efavirenz',
    name: 'Efavir Tablet (Efavirenz)',
    brand: 'Ivermectinkart',
    price: 110.00,
    prescription: false,
    image: img26,
    images: [img26],
    description: 'Efavir Tablet belongs to a group of medicines called antiretrovirals. It is used to treat HIV (human immunodeficiency virus), the virus that can cause AIDS (acquired immunodeficiency syndrome). It helps to control HIV infection so your immune system can work better.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/efavir-tablet' }
    ]
  },

  {
    id: 'duovir-e-kit-tablet',
    name: 'Duovir-E Kit Tablet',
    brand: 'Ivermectinkart',
    price: 25.00,
    prescription: false,
    image: img27,
    images: [img27],
    description: 'Duovir-E Kit Tablet is a combination of three different antiretroviral medications, Lamivudine, Zidovudine, and Efavirenz, used for the treatment of HIV infection. This kit contains a 30-day supply of these three medications, making it convenient for patients to manage their treatment regimen. The combination of these drugs helps to suppress the replication of the HIV virus and reduce the viral load in the body.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/duovir-e-kit-tablet' }
    ]
  },

  {
    id: 'duovir-n-tablet',
    name: 'Duovir N Tablet',
    brand: 'Ivermectinkart',
    price: 100.00,
    prescription: false,
    image: img28,
    images: [img28],
    description: 'Duovir N Tablet is a combination of antiretrovirals medicines. It is prescribed to treat HIV (human immunodeficiency virus) infection. It boosts up the immunity to fight against HIV to manage or treat AIDS (acquired immunodeficiency syndrome).',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/duovir-n-tablet' }
    ]
  },

  {
    id: 'duovir-tablet',
    name: 'Duovir Tablet',
    brand: 'Ivermectinkart',
    price: 55.00,
    prescription: false,
    image: img29,
    images: [img29],
    description: 'Duovir Tablet is a highly effective antiretroviral medication used in the treatment of HIV infection and AIDS. It contains a combination of two active ingredients - lamivudine and zidovudine, which work together to suppress the growth of the virus and improve immune function. Duovir is available in tablet form and is taken orally with or without food, as directed by a healthcare professional. It is important to take this medication regularly and exactly as prescribed to achieve the best results.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/duovir-tablet' }
    ]
  },

  {
    id: 'dinex-ec-didanosine',
    name: 'DINEX EC (Didanosine)',
    brand: 'Ivermectinkart',
    price: 125.00,
    prescription: false,
    image: img30,
    images: [img30],
    description: 'DINEX EC belongs to a group of medicines called antiretrovirals. It is used to treat HIV (human immunodeficiency virus), the virus that can cause AIDS (acquired immunodeficiency syndrome). It helps to control HIV infection so your immune system can work better.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/dinex-ec' }
    ]
  },

  {
    id: 'daruvir-tablet-darunavir',
    name: 'Daruvir Tablet (Darunavir)',
    brand: 'Ivermectinkart',
    price: 500.00,
    prescription: false,
    image: img31,
    images: [img31],
    description: 'Daruvir Tablet is a combination of antiretrovirals medicines. It is prescribed to treat HIV (human immunodeficiency virus) infection. It boosts up the immunity to fight against HIV to manage or treat AIDS (acquired immunodeficiency syndrome). Daruvir Tablet restricts the growth of HIV in the body and reduces the risk of getting HIV-related complications to improve the lifespan of an individual. The medicine can be taken with or without food. Taking these medicines regularly at the same time increases their effectiveness. A dose of this medicine should not be missed as it can affect your recovery. It is important to complete the full course of the treatment until your doctor advises you to stop it. Sudden discontinuation of the treatment may affect the potency of the medicine.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/daruvir-tablet' }
    ]
  },

  {
    id: 'axentri-tablet-maraviroc',
    name: 'Axentri Tablet (Maraviroc)',
    brand: 'Ivermectinkart',
    price: 690.00,
    prescription: false,
    image: img32,
    images: [img32],
    description: 'Axentri Tablet belongs to a group of medicines called CCR5 antagonists. It is used to treat HIV (human immunodeficiency virus), the virus that can cause AIDS (acquired immunodeficiency syndrome). It prevents the entry of HIV virus into the human body and thus controls the infection.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/axentri-tablet' }
    ]
  },

  {
    id: 'atazor-r-atazanavir-ritonavir',
    name: 'Atazor R (Atazanavir/Ritonavir)',
    brand: 'Ivermectinkart',
    price: 170.00,
    prescription: false,
    image: img33,
    images: [img33],
    description: 'Atazor-R Tablet is a combination of antiretrovirals medicines. It is prescribed to treat HIV (human immunodeficiency virus) infection. It boosts up the immunity to fight against HIV to manage or treat AIDS (acquired immunodeficiency syndrome).',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/atazor-r' }
    ]
  },

  {
    id: 'atavir-capsule-atazanavir',
    name: 'Atavir Capsule (Atazanavir)',
    brand: 'Ivermectinkart',
    price: 180.00,
    prescription: false,
    image: img34,
    images: [img34],
    description: 'Atavir Capsule is an antiviral or antiretroviral medicine. It is used in the treatment of HIV infection. It stops the virus from producing new viruses and clears up your infection. Atavir 300mg Capsule should be taken with food, as this increases the absorption of the medicine into the body. You should take it in the dose and duration as advised by your doctor. Taking it at the same time every day will help you to remember to take it. Do not stop taking it until you have finished the complete course, even when you feel better. If you stop taking this medicine too early then infection may return or worsen.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/atavir-capsule-atazanavir' }
    ]
  },

  {
    id: 'abec-l-tablet-abacavir-lamivudine',
    name: 'Abec-L Tablet (Abacavir/Lamivudine)',
    brand: 'Ivermectinkart',
    price: 190.00,
    prescription: false,
    image: img35,
    images: [img35],
    description: 'Abec-L Tablet is an antiretroviral medication containing the active constituents Abacavir and Lamivudine. Both medications belong to a class of drugs called nucleoside reverse transcriptase inhibitors (NRTIs) and are often used in combination with other antiretroviral drugs as part of highly active antiretroviral therapy (HAART) or combination antiretroviral therapy (cART). It is used to treat HIV-1 infection. HIV-1 is a virus known as the Human immunodeficiency virus, which targets and eradicates immune system cells, ultimately weakening the body’s defense against infections.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/abec-l-tablet' }
    ]
  },

  {
    id: 'abamune-tablet-abacavir',
    name: 'Abamune Tablet (Abacavir)',
    brand: 'Ivermectinkart',
    price: 122.00,
    prescription: false,
    image: img36,
    images: [img36],
    description: 'Abamune Tablet belongs to a group of medicines called antiretrovirals. It is used to treat HIV (human immunodeficiency virus), the virus that can cause AIDS (acquired immunodeficiency syndrome). It helps to control HIV infection so your immune system can work better.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/abamune-tablet' }
    ]
  },

  {
    id: 'abamune-l-abacavir-lamivudine',
    name: 'Abamune L (Abacavir/Lamivudine)',
    brand: 'Ivermectinkart',
    price: 188.00,
    prescription: false,
    image: img37,
    images: [img37],
    description: 'Abamune L restricts the growth of HIV in the body and reduces the risk of getting HIV-related complications to improve the lifespan of an individual. The medicine may be taken with or without food. Taking these medicines regularly at the same time increases their effectiveness. A dose of this medicine should not be missed as it can affect your recovery. It is important to complete the full course of the treatment until your doctor advises you to stop it.',
    category: 'HIV-AIDS',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/abamune-l' }
    ]
  }
];
