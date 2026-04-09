import { Product } from './types';

import img01 from './assets/products/cardiac/01-lotensyl-lercanidipine.jpg';
import img02 from './assets/products/cardiac/02-irovel-irbesartan.jpg';
import img03 from './assets/products/cardiac/03-zytanix-metolazone.jpg';
import img04 from './assets/products/cardiac/04-zocor-simvastatin.jpg';
import img05 from './assets/products/cardiac/05-xarelto-20mg-rivaroxaban.jpg';
import img06 from './assets/products/cardiac/06-vymada-sacubitril-valsartan.jpg';
import img07 from './assets/products/cardiac/07-valzaar-160-mg-valsartan.jpg';
import img08 from './assets/products/cardiac/08-triplixam-tablet-perindopril-erbumine-indapamide-and-amlodipine.jpg';
import img09 from './assets/products/cardiac/09-terapress-terazosin.jpg';
import img10 from './assets/products/cardiac/10-telma-r-telmisartan-and-ramipril-tablet.jpg';
import img11 from './assets/products/cardiac/11-telma-beta-tablet-er-telmisartan-and-metoprolol-succinate.jpg';
import img12 from './assets/products/cardiac/12-sumatriptan-tablet-1.jpg';
import img13 from './assets/products/cardiac/13-rosubest-rosuvastatin.jpg';
import img14 from './assets/products/cardiac/14-rioteph-riociguat.jpg';
import img15 from './assets/products/cardiac/15-refsav-tablet-sacubitril-and-valsartan.jpg';
import img16 from './assets/products/cardiac/16-ramnil-t-tablet-telmisartan-and-ramipril.jpg';
import img17 from './assets/products/cardiac/17-ramistar-h-tablet-ramipril-and-hydrochlorothiazide.jpg';
import img18 from './assets/products/cardiac/18-q-press-h-tablet-quinapril-and-hydrochlorothiazide.jpg';
import img19 from './assets/products/cardiac/19-provanol-propranolol-1.jpg';
import img20 from './assets/products/cardiac/20-pivasta-pitavastatin.jpg';
import img21 from './assets/products/cardiac/21-olmesar-olmesartan.jpg';
import img22 from './assets/products/cardiac/22-nexred-tablet-bempedoic-acid.jpg';
import img23 from './assets/products/cardiac/23-nebicard-nebivolol.jpg';
import img24 from './assets/products/cardiac/24-mymarda-tablet-sacubitril-and-valsartan.jpg';
import img25 from './assets/products/cardiac/25-losar-losartan-potassium.jpg';
import img26 from './assets/products/cardiac/26-listril-plus-tablet-lisinopril-and-hydrochlorothiazide.jpg';
import img27 from './assets/products/cardiac/27-listril-lisinopril.jpg';
import img28 from './assets/products/cardiac/28-lipicard-fenofibrate.jpg';
import img29 from './assets/products/cardiac/29-labebet-tablet-labetalol.jpg';
import img30 from './assets/products/cardiac/30-kerendia-finerenone.jpg';
import img31 from './assets/products/cardiac/31-hftril-tablet-sacubitril-and-valsartan.jpg';
import img32 from './assets/products/cardiac/32-ezentia-tablet-ezetimibe.jpg';
import img33 from './assets/products/cardiac/33-ezedoc-tablet-ezetimibe.jpg';
import img34 from './assets/products/cardiac/34-eptus-eplerenone.jpg';
import img35 from './assets/products/cardiac/35-endobloc-ambrisentan.jpg';
import img36 from './assets/products/cardiac/36-enapril-ht-tablet-enalapril-hydrochlorothiazide.jpg';
import img37 from './assets/products/cardiac/37-enapril-tablet-enalapril.jpg';
import img38 from './assets/products/cardiac/38-cytogard-trimetazidine.jpg';
import img39 from './assets/products/cardiac/39-coversyl-plus-tablet-perindopril-erbumine-and-indapamide.jpg';
import img40 from './assets/products/cardiac/40-cardace-h-tablet-ramipril-hydrochlorothiazide.jpg';
import img41 from './assets/products/cardiac/41-brillo-tablet-bempedoic-acid.jpg';
import img42 from './assets/products/cardiac/42-bosentas-bosentan.jpg';
import img43 from './assets/products/cardiac/43-bemzire-tablet-bempedoic-acid.jpg';
import img44 from './assets/products/cardiac/44-bempify-tablet-bempedoic-acid.jpg';
import img45 from './assets/products/cardiac/45-atorva-atorvastatin.jpg';
import img46 from './assets/products/cardiac/46-aspisol-tablet-aspirin-and-glycine.jpg';
import img47 from './assets/products/cardiac/47-arnx-tablet-sacubitril-valsartan.jpg';
import img48 from './assets/products/cardiac/48-arnipin-tablet-sacubitril-and-valsartan.jpg';
import img49 from './assets/products/cardiac/49-arney-tablet.jpg';
import img50 from './assets/products/cardiac/50-arkamin-tablet-clonidine.jpg';
import img51 from './assets/products/cardiac/51-alsectan-tablet-sacubitril-and-valsartan.jpg';
import img52 from './assets/products/cardiac/52-alpostin-injection-alprostadil.jpg';

export const CARDIAC_COLLECTION_PRODUCTS: Product[] = [
  {
    id: 'lotensyl-lercanidipine',
    name: 'Lotensyl (Lercanidipine)',
    brand: 'Ivermectinkart',
    price: 35.00,
    prescription: true,
    image: img01,
    images: [img01],
    description: 'Lotensyl 10 Tablet is a medicine used to treat high blood pressure (hypertension). It belongs to a group of medicines known as calcium channel blockers and helps to lower blood pressure and reduce the workload of the heart. This helps prevent heart attacks and strokes. It works by relaxing the blood vessels so that blood can flow more easily around your body.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/lotensyl-lercanidipine' }
    ]
  },
  {
    id: 'irovel-irbesartan',
    name: 'Irovel (Irbesartan)',
    brand: 'Ivermectinkart',
    price: 40.00,
    prescription: true,
    image: img02,
    images: [img02],
    description: 'Irovel 150 Tablet is used to treat high blood pressure and heart failure. Lowering blood pressure helps to prevent future heart attacks and stroke. This medicine is also effective in preserving kidney function in patients with diabetes. It relaxes blood vessels and makes it easier for your heart to pump blood around your body.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/irovel-irbesartan' }
    ]
  },
  {
    id: 'zytanix-metolazone',
    name: 'Zytanix (Metolazone)',
    brand: 'Ivermectinkart',
    price: 30.00,
    prescription: true,
    image: img03,
    images: [img03],
    description: 'Zytanix 2.5 Tablet is a type of diuretic (water pill) medicine. This medicine reduces excess fluid levels in the body and is used to treat edema (fluid overload) associated with heart, liver, kidney, or lung disease. It is also used in treatment of hypertension (high blood pressure). It makes you lose excess water through urine.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/zytanix-metolazone' }
    ]
  },
  {
    id: 'zocor-simvastatin',
    name: 'Zocor (Simvastatin)',
    brand: 'Ivermectinkart',
    price: 45.00,
    prescription: true,
    image: img04,
    images: [img04],
    description: 'ZOCOR 20 MG TABLET belongs to a group of medicines called statins. It is used to lower cholesterol and to reduce the risk of heart disease. It works by reducing the amount of \'bad\' cholesterol (LDL) and triglycerides in the blood, while raising the \'good\' cholesterol (HDL) levels.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/zocor-simvastatin' }
    ]
  },
  {
    id: 'xarelto-20mg-rivaroxaban',
    name: 'Xarelto 20mg (Rivaroxaban)',
    brand: 'Ivermectinkart',
    price: 180.00,
    prescription: true,
    image: img05,
    images: [img05],
    description: 'Xarelto 20mg Tablet is a medicine known as an anticoagulant or blood thinner. It is used to prevent and treat blood clots (deep vein thrombosis and pulmonary embolism), reduce the risk of stroke in patients with non-valvular atrial fibrillation, and treat coronary artery disease or peripheral artery disease.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/xarelto-20mg-rivaroxaban' }
    ]
  },
  {
    id: 'vymada-sacubitril-valsartan',
    name: 'Vymada (Sacubitril/Valsartan)',
    brand: 'Ivermectinkart',
    price: 250.00,
    prescription: true,
    image: img06,
    images: [img06],
    description: 'Vymada 50mg Tablet is a combination medicine used to treat heart failure. It reduces the risk of hospitalization and death due to heart failure in patients with chronic heart failure. It works by reducing the workload of the heart and improving its pumping efficiency.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/vymada-sacubitril-valsartan' }
    ]
  },
  {
    id: 'valzaar-160-mg-valsartan',
    name: 'Valzaar 160 mg (Valsartan)',
    brand: 'Ivermectinkart',
    price: 55.00,
    prescription: true,
    image: img07,
    images: [img07],
    description: 'Valzaar 160 Tablet is used to treat high blood pressure and heart failure. Lowering blood pressure helps prevent future heart attacks and strokes. It works by relaxing blood vessels so blood flows more easily, reducing the risk of heart attack, stroke, and kidney problems.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/valzaar-160-mg-valsartan' }
    ]
  },
  {
    id: 'triplixam-tablet',
    name: 'Triplixam Tablet (Perindopril, Indapamide & Amlodipine)',
    brand: 'Ivermectinkart',
    price: 75.00,
    prescription: true,
    image: img08,
    images: [img08],
    description: 'Triplixam 4mg/1.25mg/5mg Tablet is a combination medicine used in the treatment of hypertension. It contains three active ingredients that work together to lower blood pressure: Perindopril (ACE inhibitor), Indapamide (diuretic), and Amlodipine (calcium channel blocker).',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/triplixam-tablet-perindopril-erbumine-indapamide-and-amlodipine' }
    ]
  },
  {
    id: 'terapress-terazosin',
    name: 'Terapress (Terazosin)',
    brand: 'Ivermectinkart',
    price: 35.00,
    prescription: true,
    image: img09,
    images: [img09],
    description: 'Terapress 1 Tablet belongs to a class of medicines called alpha-blockers. It is used to treat high blood pressure (hypertension) and symptoms of benign prostatic hyperplasia (BPH). It works by relaxing blood vessels so blood can flow more easily and relaxing the muscles in the prostate and bladder neck.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/terapress-terazosin' }
    ]
  },
  {
    id: 'telma-r-telmisartan-ramipril',
    name: 'Telma-R (Telmisartan & Ramipril)',
    brand: 'Ivermectinkart',
    price: 60.00,
    prescription: true,
    image: img10,
    images: [img10],
    description: 'Telma-R 5 Tablet is a medicine used to treat hypertension (high blood pressure). It is a combination of two medicines that together reduce high blood pressure by relaxing the blood vessels and reducing the workload on the heart. This helps to prevent heart attacks and strokes.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/telma-r-telmisartan-and-ramipril-tablet' }
    ]
  },
  {
    id: 'telma-beta-telmisartan-metoprolol',
    name: 'Telma-Beta Tablet ER (Telmisartan & Metoprolol)',
    brand: 'Ivermectinkart',
    price: 55.00,
    prescription: true,
    image: img11,
    images: [img11],
    description: 'Telma-Beta 25 Tablet ER is a medicine used for treating high blood pressure. It contains two medicines that work together to lower blood pressure: Telmisartan (angiotensin receptor blocker) and Metoprolol Succinate (beta-blocker). Together, they relax blood vessels and slow the heart rate.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/telma-beta-tablet-er-telmisartan-and-metoprolol-succinate' }
    ]
  },
  {
    id: 'sumatriptan-tablet',
    name: 'Sumatriptan Tablet',
    brand: 'Ivermectinkart',
    price: 45.00,
    prescription: true,
    image: img12,
    images: [img12],
    description: 'Sumatriptan Tablet is used in the treatment of migraines. It relieves the symptoms of migraine including severe headaches, nausea, and sensitivity to light and sound. It works by narrowing blood vessels in the brain and blocking pain signals from being sent to the brain.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/sumatriptan-tablet-1' }
    ]
  },
  {
    id: 'rosubest-rosuvastatin',
    name: 'Rosubest (Rosuvastatin)',
    brand: 'Ivermectinkart',
    price: 50.00,
    prescription: true,
    image: img13,
    images: [img13],
    description: 'Rosubest 20 Tablet belongs to a group of medicines called statins. It is used to lower cholesterol and reduce the risk of heart disease. It works by reducing LDL (bad) cholesterol and triglycerides and raising HDL (good) cholesterol levels, significantly lowering cardiovascular risk.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/rosubest-rosuvastatin' }
    ]
  },
  {
    id: 'rioteph-riociguat',
    name: 'Rioteph (Riociguat)',
    brand: 'Ivermectinkart',
    price: 320.00,
    prescription: true,
    image: img14,
    images: [img14],
    description: 'Rioteph 1mg Tablet is a prescription medicine used to treat pulmonary arterial hypertension (PAH) and chronic thromboembolic pulmonary hypertension (CTEPH). It works by relaxing and widening the blood vessels in the lungs, making it easier for the heart to pump blood.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/rioteph-riociguat' }
    ]
  },
  {
    id: 'refsav-sacubitril-valsartan',
    name: 'Refsav Tablet (Sacubitril & Valsartan)',
    brand: 'Ivermectinkart',
    price: 220.00,
    prescription: true,
    image: img15,
    images: [img15],
    description: 'Refsav 100 Tablet is a combination of two medicines used to treat heart failure. It reduces the risk of cardiovascular death and hospitalization in patients with chronic heart failure with reduced ejection fraction. It works by reducing the workload of the heart.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/refsav-tablet-sacubitril-and-valsartan' }
    ]
  },
  {
    id: 'ramnil-t-telmisartan-ramipril',
    name: 'Ramnil-T Tablet (Telmisartan & Ramipril)',
    brand: 'Ivermectinkart',
    price: 55.00,
    prescription: true,
    image: img16,
    images: [img16],
    description: 'Ramnil-T Tablet is a medicine used to treat hypertension (high blood pressure). It is a combination of Telmisartan and Ramipril which work together to relax blood vessels, making it easier for the heart to pump blood and reducing the risk of heart attack and stroke.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/ramnil-t-tablet-telmisartan-and-ramipril' }
    ]
  },
  {
    id: 'ramistar-h-ramipril-hydrochlorothiazide',
    name: 'Ramistar-H Tablet (Ramipril & Hydrochlorothiazide)',
    brand: 'Ivermectinkart',
    price: 48.00,
    prescription: true,
    image: img17,
    images: [img17],
    description: 'Ramistar-H 5 Tablet is a medicine used to treat hypertension (high blood pressure). It is a combination of Ramipril (ACE inhibitor) and Hydrochlorothiazide (diuretic). Together they work to lower blood pressure and reduce fluid retention.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/ramistar-h-tablet-ramipril-and-hydrochlorothiazide' }
    ]
  },
  {
    id: 'q-press-h-quinapril-hydrochlorothiazide',
    name: 'Q Press H Tablet (Quinapril & Hydrochlorothiazide)',
    brand: 'Ivermectinkart',
    price: 52.00,
    prescription: true,
    image: img18,
    images: [img18],
    description: 'Q Press H 20 mg/12.5 mg Tablet is a medicine used to treat hypertension (high blood pressure). It contains Quinapril (ACE inhibitor) and Hydrochlorothiazide (diuretic) which work together to lower blood pressure by reducing fluid volume and relaxing blood vessels.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/q-press-h-tablet-quinapril-and-hydrochlorothiazide' }
    ]
  },
  {
    id: 'provanol-propranolol',
    name: 'Provanol (Propranolol)',
    brand: 'Ivermectinkart',
    price: 38.00,
    prescription: true,
    image: img19,
    images: [img19],
    description: 'Provanol SR 40 Tablet helps decrease anxiety and relieve tremors. It belongs to the beta-blocker class of medicines. It helps in treating high blood pressure, irregular heartbeats, angina, and in preventing migraines. It works by reducing the heart rate and lowering the workload on the heart.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/provanol-propranolol-1' }
    ]
  },
  {
    id: 'pivasta-pitavastatin',
    name: 'Pivasta (Pitavastatin)',
    brand: 'Ivermectinkart',
    price: 65.00,
    prescription: true,
    image: img20,
    images: [img20],
    description: 'Pivasta 2 Tablet belongs to a group of medicines called statins. It is used to treat high cholesterol and reduce the risk of heart attack, stroke, and other cardiovascular events. It works by reducing LDL (bad) cholesterol and triglycerides while increasing HDL (good) cholesterol.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/pivasta-pitavastatin' }
    ]
  },
  {
    id: 'olmesar-olmesartan',
    name: 'Olmesar (Olmesartan)',
    brand: 'Ivermectinkart',
    price: 42.00,
    prescription: true,
    image: img21,
    images: [img21],
    description: 'Olmesar 20 Tablet is a medicine used in the treatment of hypertension (high blood pressure). It belongs to the angiotensin receptor blocker (ARB) class. It works by blocking the action of a chemical that usually tightens blood vessels, helping blood flow more easily and reducing blood pressure.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/olmesar-olmesartan' }
    ]
  },
  {
    id: 'nexred-bempedoic-acid',
    name: 'Nexred Tablet (Bempedoic Acid)',
    brand: 'Ivermectinkart',
    price: 95.00,
    prescription: true,
    image: img22,
    images: [img22],
    description: 'Nexred Tablet is used to lower cholesterol and reduce the risk of heart disease. It contains Bempedoic Acid which works by inhibiting an enzyme in the liver responsible for producing cholesterol. It is used in patients who cannot tolerate statins or need additional cholesterol lowering.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/nexred-tablet-bempedoic-acid' }
    ]
  },
  {
    id: 'nebicard-nebivolol',
    name: 'Nebicard (Nebivolol)',
    brand: 'Ivermectinkart',
    price: 40.00,
    prescription: true,
    image: img23,
    images: [img23],
    description: 'Nebicard 5 Tablet belongs to a group of medicines called beta-blockers. It is used to treat hypertension (high blood pressure) and heart failure. It works by blocking the action of adrenaline on the heart, which lowers the heart rate and reduces blood pressure.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/nebicard-nebivolol' }
    ]
  },
  {
    id: 'mymarda-sacubitril-valsartan',
    name: 'Mymarda Tablet (Sacubitril & Valsartan)',
    brand: 'Ivermectinkart',
    price: 210.00,
    prescription: true,
    image: img24,
    images: [img24],
    description: 'Mymarda 24mg/26mg Tablet is a combination of two medicines used to treat heart failure. It reduces the risk of cardiovascular death and hospitalization due to heart failure. It works by improving the heart\'s output and reducing the fluid and pressure buildup.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/mymarda-tablet-sacubitril-and-valsartan' }
    ]
  },
  {
    id: 'losar-losartan-potassium',
    name: 'Losar (Losartan Potassium)',
    brand: 'Ivermectinkart',
    price: 35.00,
    prescription: true,
    image: img25,
    images: [img25],
    description: 'Losar 50 Tablet is a medicine used to treat high blood pressure and heart failure. It belongs to the angiotensin receptor blocker (ARB) class. By blocking the action of angiotensin II, it helps relax blood vessels and reduces the heart\'s workload, preventing strokes and heart attacks.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/losar-losartan-potassium' }
    ]
  },
  {
    id: 'listril-plus-lisinopril-hydrochlorothiazide',
    name: 'Listril Plus Tablet (Lisinopril & Hydrochlorothiazide)',
    brand: 'Ivermectinkart',
    price: 45.00,
    prescription: true,
    image: img26,
    images: [img26],
    description: 'Listril Plus Tablet is a medicine used to treat hypertension (high blood pressure). It is a combination of Lisinopril (ACE inhibitor) and Hydrochlorothiazide (diuretic), which work together to lower blood pressure and reduce excess fluid in the body.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/listril-plus-tablet-lisinopril-and-hydrochlorothiazide' }
    ]
  },
  {
    id: 'listril-lisinopril',
    name: 'Listril (Lisinopril)',
    brand: 'Ivermectinkart',
    price: 32.00,
    prescription: true,
    image: img27,
    images: [img27],
    description: 'Listril 5 Tablet is widely used to treat high blood pressure and heart failure. It belongs to the ACE inhibitor class of medicines. It helps lower blood pressure, reduces the risk of heart attack and stroke, and slows kidney damage caused by diabetes.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/listril-lisinopril' }
    ]
  },
  {
    id: 'lipicard-fenofibrate',
    name: 'Lipicard (Fenofibrate)',
    brand: 'Ivermectinkart',
    price: 50.00,
    prescription: true,
    image: img28,
    images: [img28],
    description: 'Lipicard 160 Tablet is a medicine used to treat high cholesterol. It works by lowering triglyceride levels and raising HDL (good) cholesterol. It belongs to the fibrate class of lipid-lowering medicines and is often used alongside dietary changes to manage hyperlipidemia.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/lipicard-fenofibrate' }
    ]
  },
  {
    id: 'labebet-labetalol',
    name: 'Labebet Tablet (Labetalol)',
    brand: 'Ivermectinkart',
    price: 48.00,
    prescription: true,
    image: img29,
    images: [img29],
    description: 'Labebet 100mg Tablet is a medicine used for treating high blood pressure (hypertension). It belongs to the alpha and beta blocker class. It works by blocking the effects of adrenaline on both alpha and beta receptors, which relaxes blood vessels and slows the heart rate.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/labebet-tablet-labetalol' }
    ]
  },
  {
    id: 'kerendia-finerenone',
    name: 'Kerendia (Finerenone)',
    brand: 'Ivermectinkart',
    price: 280.00,
    prescription: true,
    image: img30,
    images: [img30],
    description: 'Kerendia 10 Tablet is a medicine used for reducing the risk of heart attack and heart failure in adults with chronic kidney disease associated with type 2 diabetes. It is a non-steroidal mineralocorticoid receptor antagonist that reduces kidney and cardiovascular complications.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/kerendia-finerenone' }
    ]
  },
  {
    id: 'hftril-sacubitril-valsartan',
    name: 'Hftril Tablet (Sacubitril & Valsartan)',
    brand: 'Ivermectinkart',
    price: 200.00,
    prescription: true,
    image: img31,
    images: [img31],
    description: 'Hftril 50 Tablet is a combination of two medicines used to treat heart failure. It reduces the risk of cardiovascular death and hospitalization. It works by blocking the breakdown of beneficial peptides that help the heart function while also blocking the harmful effects of angiotensin II.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/hftril-tablet-sacubitril-and-valsartan' }
    ]
  },
  {
    id: 'ezentia-ezetimibe',
    name: 'Ezentia Tablet (Ezetimibe)',
    brand: 'Ivermectinkart',
    price: 60.00,
    prescription: true,
    image: img32,
    images: [img32],
    description: 'Ezentia Tablet is a medicine used to treat high cholesterol. It works by blocking absorption of cholesterol from the gut, thereby reducing the amount of cholesterol entering the bloodstream. It is often used alone or in combination with statins to manage cholesterol levels.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/ezentia-tablet-ezetimibe' }
    ]
  },
  {
    id: 'ezedoc-ezetimibe',
    name: 'Ezedoc Tablet (Ezetimibe)',
    brand: 'Ivermectinkart',
    price: 58.00,
    prescription: true,
    image: img33,
    images: [img33],
    description: 'Ezedoc 10 Tablet is a medicine used to treat high cholesterol. It reduces the absorption of cholesterol from food in the intestine and lowers LDL (bad) cholesterol levels in the blood. It is an effective option for patients who need additional cholesterol reduction beyond statins.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/ezedoc-tablet-ezetimibe' }
    ]
  },
  {
    id: 'eptus-eplerenone',
    name: 'Eptus (Eplerenone)',
    brand: 'Ivermectinkart',
    price: 90.00,
    prescription: true,
    image: img34,
    images: [img34],
    description: 'Eptus 25 Tablet is a medicine known as a diuretic (water pill). It is used to treat heart failure after a heart attack and high blood pressure. It is a selective aldosterone blocker that helps reduce the risk of cardiovascular death and hospitalization in patients with heart failure.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/eptus-eplerenone' }
    ]
  },
  {
    id: 'endobloc-ambrisentan',
    name: 'Endobloc (Ambrisentan)',
    brand: 'Ivermectinkart',
    price: 350.00,
    prescription: true,
    image: img35,
    images: [img35],
    description: 'Endobloc 5 Tablet is a prescription medicine used to treat pulmonary arterial hypertension (PAH). It works by blocking endothelin receptors which cause the narrowing of blood vessels in the lungs, thereby improving exercise capacity and delaying disease progression.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/endobloc-ambrisentan' }
    ]
  },
  {
    id: 'enapril-ht-enalapril-hydrochlorothiazide',
    name: 'Enapril-HT Tablet (Enalapril & Hydrochlorothiazide)',
    brand: 'Ivermectinkart',
    price: 40.00,
    prescription: true,
    image: img36,
    images: [img36],
    description: 'Enapril-HT Tablet is a medicine used to treat hypertension (high blood pressure). It combines Enalapril (ACE inhibitor) and Hydrochlorothiazide (diuretic) to lower blood pressure by relaxing blood vessels and reducing excess fluid in the body.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/enapril-ht-tablet-enalapril-hydrochlorothiazide' }
    ]
  },
  {
    id: 'enapril-enalapril',
    name: 'Enapril Tablet (Enalapril)',
    brand: 'Ivermectinkart',
    price: 32.00,
    prescription: true,
    image: img37,
    images: [img37],
    description: 'Enapril 5 Tablet belongs to a group of medicines known as angiotensin-converting enzyme (ACE) inhibitors. It is used to treat high blood pressure and heart failure. It works by relaxing blood vessels, which helps the heart pump blood more efficiently.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/enapril-tablet-enalapril' }
    ]
  },
  {
    id: 'cytogard-trimetazidine',
    name: 'Cytogard (Trimetazidine)',
    brand: 'Ivermectinkart',
    price: 45.00,
    prescription: true,
    image: img38,
    images: [img38],
    description: 'Cytogard Tablet is an anti-anginal medicine used for treating heart-related chest pain (angina). It works by protecting the heart muscle from the damage caused by reduced blood and oxygen supply, helping metabolize glucose more efficiently during periods of low oxygen.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/cytogard-trimetazidine' }
    ]
  },
  {
    id: 'coversyl-plus-perindopril-indapamide',
    name: 'Coversyl Plus Tablet (Perindopril & Indapamide)',
    brand: 'Ivermectinkart',
    price: 65.00,
    prescription: true,
    image: img39,
    images: [img39],
    description: 'Coversyl Plus Tablet is a medicine used to treat hypertension (high blood pressure). It is a combination of Perindopril (ACE inhibitor) and Indapamide (diuretic) which work together to lower blood pressure and reduce the risk of cardiovascular events.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/coversyl-plus-tablet-perindopril-erbumine-and-indapamide' }
    ]
  },
  {
    id: 'cardace-h-ramipril-hydrochlorothiazide',
    name: 'Cardace H Tablet (Ramipril & Hydrochlorothiazide)',
    brand: 'Ivermectinkart',
    price: 38.00,
    prescription: true,
    image: img40,
    images: [img40],
    description: 'Cardace H 2.5 Tablet is a medicine used to treat hypertension (high blood pressure). It combines Ramipril (ACE inhibitor) and Hydrochlorothiazide (diuretic) to lower blood pressure effectively, reducing the risk of strokes, heart attacks, and kidney problems.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/cardace-h-tablet-ramipril-hydrochlorothiazide' }
    ]
  },
  {
    id: 'brillo-bempedoic-acid',
    name: 'Brillo Tablet (Bempedoic Acid)',
    brand: 'Ivermectinkart',
    price: 90.00,
    prescription: true,
    image: img41,
    images: [img41],
    description: 'Brillo 180mg Tablet is used to lower cholesterol and reduce the risk of heart disease. It works by inhibiting an enzyme called ATP-citrate lyase in the liver, which plays a key role in cholesterol synthesis. It lowers LDL cholesterol effectively, especially in statin-intolerant patients.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/brillo-tablet-bempedoic-acid' }
    ]
  },
  {
    id: 'bosentas-bosentan',
    name: 'Bosentas (Bosentan)',
    brand: 'Ivermectinkart',
    price: 380.00,
    prescription: true,
    image: img42,
    images: [img42],
    description: 'Bosentas 62.5 Tablet is a prescription medicine used to treat pulmonary arterial hypertension (PAH). It works by blocking the action of endothelin, a substance that causes blood vessels in the lungs to narrow, thereby improving exercise capacity and reducing the progression of disease.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/bosentas-bosentan' }
    ]
  },
  {
    id: 'bemzire-bempedoic-acid',
    name: 'Bemzire Tablet (Bempedoic Acid)',
    brand: 'Ivermectinkart',
    price: 88.00,
    prescription: true,
    image: img43,
    images: [img43],
    description: 'Bemzire 180mg Tablet is used to lower cholesterol and reduce the risk of heart disease. It contains bempedoic acid which blocks cholesterol synthesis in the liver. It is particularly useful for patients who are statin-intolerant and need to lower their LDL cholesterol levels.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/bemzire-tablet-bempedoic-acid' }
    ]
  },
  {
    id: 'bempify-bempedoic-acid',
    name: 'Bempify Tablet (Bempedoic Acid)',
    brand: 'Ivermectinkart',
    price: 85.00,
    prescription: true,
    image: img44,
    images: [img44],
    description: 'Bempify Tablet 180mg is used to lower cholesterol and reduce the risk of heart disease. Bempedoic acid inhibits ATP-citrate lyase, a liver enzyme upstream of HMG-CoA reductase in the cholesterol biosynthesis pathway, effectively reducing LDL cholesterol.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/bempify-tablet-bempedoic-acid' }
    ]
  },
  {
    id: 'atorva-atorvastatin',
    name: 'Atorva (Atorvastatin)',
    brand: 'Ivermectinkart',
    price: 40.00,
    prescription: true,
    image: img45,
    images: [img45],
    description: 'Atorva Tablet belongs to a group of medicines called statins. It is used to lower cholesterol and reduce the risk of heart disease, heart attack, and stroke. It works by blocking an enzyme in the liver that is responsible for producing cholesterol, thereby reducing LDL levels.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/atorva-atorvastatin' }
    ]
  },
  {
    id: 'aspisol-aspirin-glycine',
    name: 'Aspisol Tablet (Aspirin & Glycine)',
    brand: 'Ivermectinkart',
    price: 20.00,
    prescription: false,
    image: img46,
    images: [img46],
    description: 'Aspisol 75 Tablet is a combination of two medicines used for prevention of heart attack. It contains Aspirin (antiplatelet) and Glycine which work together to prevent blood clots from forming inside blood vessels, thereby reducing the risk of heart attack and stroke.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/aspisol-tablet-aspirin-and-glycine' }
    ]
  },
  {
    id: 'arnx-sacubitril-valsartan',
    name: 'Arnx Tablet (Sacubitril & Valsartan)',
    brand: 'Ivermectinkart',
    price: 215.00,
    prescription: true,
    image: img47,
    images: [img47],
    description: 'Arnx 100 Tablet is a combination of two medicines used to treat heart failure. It reduces the risk of death and hospitalization in patients with chronic heart failure with reduced ejection fraction. It works by enhancing beneficial peptides and blocking angiotensin II.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/arnx-tablet-sacubitril-valsartan' }
    ]
  },
  {
    id: 'arnipin-sacubitril-valsartan',
    name: 'Arnipin Tablet (Sacubitril & Valsartan)',
    brand: 'Ivermectinkart',
    price: 205.00,
    prescription: true,
    image: img48,
    images: [img48],
    description: 'Arnipin 100 Tablet is a combination of two medicines used to treat heart failure. It is indicated for patients with chronic heart failure with reduced ejection fraction to reduce the risk of cardiovascular death and hospitalization for heart failure.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/arnipin-tablet-sacubitril-and-valsartan' }
    ]
  },
  {
    id: 'arney-sacubitril-valsartan',
    name: 'Arney Tablet (Sacubitril & Valsartan)',
    brand: 'Ivermectinkart',
    price: 200.00,
    prescription: true,
    image: img49,
    images: [img49],
    description: 'Arney 100 Tablet is a combination of two medicines used to treat heart failure. It helps reduce the risk of cardiovascular death and hospitalization in patients with heart failure. It combines the benefits of neprilysin inhibition and angiotensin receptor blockade.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/arney-tablet' }
    ]
  },
  {
    id: 'arkamin-clonidine',
    name: 'Arkamin Tablet (Clonidine)',
    brand: 'Ivermectinkart',
    price: 25.00,
    prescription: true,
    image: img50,
    images: [img50],
    description: 'Arkamin Tablet is a medicine used in the treatment of hypertension (high blood pressure). It contains Clonidine, which works by stimulating alpha-2 receptors in the brain, reducing the sympathetic outflow and decreasing heart rate and peripheral vascular resistance.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/arkamin-tablet-clonidine' }
    ]
  },
  {
    id: 'alsectan-sacubitril-valsartan',
    name: 'Alsectan Tablet (Sacubitril & Valsartan)',
    brand: 'Ivermectinkart',
    price: 230.00,
    prescription: true,
    image: img51,
    images: [img51],
    description: 'Alsectan 97mg/103mg Tablet is a combination of two medicines used to treat heart failure. It is used for patients with chronic heart failure with reduced ejection fraction (HFrEF) to reduce the risk of cardiovascular mortality and morbidity. The highest strength formulation for maximal heart protection.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/alsectan-tablet-sacubitril-and-valsartan' }
    ]
  },
  {
    id: 'alpostin-alprostadil',
    name: 'Alpostin Injection (Alprostadil)',
    brand: 'Ivermectinkart',
    price: 180.00,
    prescription: true,
    image: img52,
    images: [img52],
    description: 'Alpostin 500mcg Injection is used to treat patent ductus arteriosus (PDA) in newborn babies. It is also used in the treatment of erectile dysfunction in adults. It works by relaxing the smooth muscle in blood vessel walls, increasing blood flow to the targeted area.',
    category: 'Cardiac Care',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.ivermectinkart.com/product-page/alpostin-injection-alprostadil' }
    ]
  }
];
