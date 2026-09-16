import { Product } from './types';
import img1 from './assets/products/anti-cancer/1-mebendazole-500-mg--amp--ivermectin-25mg.jpg';
import img2 from './assets/products/anti-cancer/2-ivermectin-tablet-standard-.jpg';
import img3 from './assets/products/anti-cancer/3-fenbendazole-tablet.jpg';
import img4 from './assets/products/anti-cancer/4-covilife-40mg-tablet--ivermectin-.jpg';
import img5 from './assets/products/anti-cancer/5-ivermectin-paste-dewormer.jpg';
import img6 from './assets/products/anti-cancer/6-fenbendazole-888mg-human--wormentel-888-.jpg';
import img7 from './assets/products/anti-cancer/7-ivermectin-injection-1-.jpg';
import img8 from './assets/products/anti-cancer/8-ivervid-tablet-12mg--ivermectin-.jpg';
import img9 from './assets/products/anti-cancer/9-fenbendazole-444mg-human--wormentel-444mg-.jpg';
import img10 from './assets/products/anti-cancer/10-fenbendazole-500mg-human--wormentel-500-.jpg';
import img11 from './assets/products/anti-cancer/11-fenbendazole-222mg-human--wormentel-222-.jpg';
import img12 from './assets/products/anti-cancer/12-bevatas-100mg-injection.jpg';
import img13 from './assets/products/anti-cancer/13-fenbendazole-150mg-human--wormentel-150-.jpg';
import img14 from './assets/products/anti-cancer/14-covimectin-tablet-12mg--ivermectin-.jpg';
import img15 from './assets/products/anti-cancer/15-iverjohn-6-mg--ivermectin-.jpg';
import img16 from './assets/products/anti-cancer/16-iversun-12-mg.jpg';
import img17 from './assets/products/anti-cancer/17-iversun-6mg.jpg';
import img18 from './assets/products/anti-cancer/18-evermil-10mg-tablet.jpg';
import img19 from './assets/products/anti-cancer/19-vermact--ivermectin-12-mg.jpg';
import img20 from './assets/products/anti-cancer/20-ivervid-tablet-6mg--ivermectin-.jpg';
import img21 from './assets/products/anti-cancer/21-iverheal-6mg.jpg';
import img22 from './assets/products/anti-cancer/22-iverheal-3mg--ivermectin-.jpg';
import img23 from './assets/products/anti-cancer/23-mebendazole-mebex-.jpg';
import img24 from './assets/products/anti-cancer/24-fenbendazole-1000-mg.jpg';
import img25 from './assets/products/anti-cancer/25-hydrogen-peroxide.jpg';
import img26 from './assets/products/anti-cancer/26-ramiven--abemaciclib-.jpg';
import img27 from './assets/products/anti-cancer/27-armotraz--anastrozole-.jpg';
import img28 from './assets/products/anti-cancer/28-resihance--regorafenib-.jpg';
import img29 from './assets/products/anti-cancer/29-hydrea--hydroxyurea-.jpg';
import img30 from './assets/products/anti-cancer/30-crizalk--crizotinib-.jpg';
import img31 from './assets/products/anti-cancer/31-spexib--ceritinib-.jpg';
import img32 from './assets/products/anti-cancer/32-xovoltib-50mg--afatinib-dimaleate-.jpg';
import img33 from './assets/products/anti-cancer/33-cytotam-10-mg--tamoxifen-.jpg';
import img34 from './assets/products/anti-cancer/34-alphalan--melphalan-.jpg';
import img35 from './assets/products/anti-cancer/35-ca-atra--all-trans-retinoic-acid-.jpg';
import img36 from './assets/products/anti-cancer/36-celkeran--chlorambucil-.jpg';
import img37 from './assets/products/anti-cancer/37-cyendiv--nintedanib-.jpg';
import img38 from './assets/products/anti-cancer/38-cytoblastin-10-mg--vinblastine-sulphate-.jpg';
import img39 from './assets/products/anti-cancer/39-dacilon-0-5-mg--dactinomycin-.jpg';
import img40 from './assets/products/anti-cancer/40-cycloxan-50-mg--cyclophosphamide-.jpg';
import img41 from './assets/products/anti-cancer/41-erlocip--erlotinib-.jpg';
import img42 from './assets/products/anti-cancer/42-fempro-2-5-mg--letrozole-.jpg';
import img43 from './assets/products/anti-cancer/43-gemita-injection--gemcitabine-.jpg';
import img44 from './assets/products/anti-cancer/44-honvan-120-mg--fosfestrol-tetrasodium-.jpg';
import img45 from './assets/products/anti-cancer/45-imbruvica-140-mg--ibrutinib-.jpg';
import img46 from './assets/products/anti-cancer/46-kemoplat-injection--cisplatin-.jpg';
import img47 from './assets/products/anti-cancer/47-lenmid--lenalidomide-.jpg';
import img48 from './assets/products/anti-cancer/48-lupride-depot--leuprolide-acetate-.jpg';
import img49 from './assets/products/anti-cancer/49-endace-40-mg--megestrol-acetate-.jpg';
import img50 from './assets/products/anti-cancer/50-nublexa-40-mg--regorafenib-.jpg';
import img51 from './assets/products/anti-cancer/51-oxitan--oxaliplatin-.jpg';
import img52 from './assets/products/anti-cancer/52-palbace-125-mg--palbociclib-.jpg';
import img53 from './assets/products/anti-cancer/53-posid-50-mg--etoposide-.jpg';
import img54 from './assets/products/anti-cancer/54-rapact--everolimus-.jpg';
import img55 from './assets/products/anti-cancer/55-sorafenat-200-mg--sorafenib-.jpg';
import img56 from './assets/products/anti-cancer/56-thalix--thalidomide-.jpg';
import img57 from './assets/products/anti-cancer/57-votrient--pazopanib-.jpg';
import img58 from './assets/products/anti-cancer/58-xtane-25-mg--exemestane-.jpg';
import img59 from './assets/products/anti-cancer/59-xarelto--rivaroxaban-.jpg';
import img60 from './assets/products/anti-cancer/60-zecyte--abiraterone-.jpg';
import img61 from './assets/products/anti-cancer/61-sorafenib-200-mg-tablet--soranib-.jpg';
import img62 from './assets/products/anti-cancer/62-tagrisso-80mg-tablet--osimertinib-.jpg';
import img63 from './assets/products/anti-cancer/63-keytruda-injection.jpg';
import img64 from './assets/products/anti-cancer/64-kisqali---ribociclib-.jpg';
import img65 from './assets/products/anti-cancer/65-imatib-100-imatinib-.jpg';

export const ANTI_CANCER_COLLECTION_PRODUCTS: Product[] = [
  {
    id: 'mebendazole-500-mg-ivermectin-25mg',
    name: "Mebendazole 500 Mg &amp; Ivermectin 25mg",
    brand: 'Pure Protocol',
    price: 150,
    prescription: false,
    image: img1,
    images: [img1],
    description: "Mebendazole 500 Mg & Ivermectin 25mg, trusted medications for effective treatment of parasitic infections. Our commitment to quality and customer care ensures you receive authentic products supported by expert guidance. Whether managing intestinal worms or other parasitic conditions, Mebendazole 500 Mg & Ivermectin 25mg from Skymeds offers a convenient and professional solution. Experience fast, secure service and knowledgeable support tailored to your health needs. Trust Skymeds for your pharmacy essentials with confidence and ease. I'm still waiting for my delivery, but I have been following the tracking number and my parcel is on its way and should be here next week! Customer service has responded immediately to my every question, so I will be placing future orders. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/mebendazole-500-mg-ivermectin-25mg' }
    ]
  },
  {
    id: 'ivermectin-tablet',
    name: "Ivermectin Tablet(Standard)",
    brand: 'Pure Protocol',
    price: 180,
    prescription: false,
    image: img2,
    images: [img2],
    description: "Ivermectin is an antiparasitic medication used to treat a variety of conditions caused by parasites, including onchocerciasis (river blindness), strongyloidiasis, and lymphatic filariasis. This tablet is also effective in treating certain types of skin conditions caused by parasites such as scabies and rosacea. Each tablet contains the active ingredient ivermectin, which works by paralyzing and killing the parasites, thus providing relief from the associated symptoms. This medication is available in a convenient tablet form, making it easy to take as prescribed by your healthcare provider. Trust in the quality and effectiveness of our Ivermectin Tablet for the treatment of parasitic infections. In this era wherein the level of food poisoning is increasing due to the prevalence of toxins in the food, the immune system of the people is weakening to the great possible extent. This medicine is very effective in treating different forms of infections and the medicine is also very much needed to enhance the level of the immune system. In this era wherein the level of food poisoning is increasing due to the prevalence of toxins in the food, the immune system of the people is weakening to the great possible extent. This medicine is very effective in treating different forms of infections and the medicine is also very much needed to enhance the level of the immune system.   This medicine is very helpful to cure infections. These infections can be of earthworms or parasites.   This medicine is also very helpful to reduce the possibility of stomach infections.   This medicine is at the same time also very helpful to boost the immune system of the body. The immunity gets a boost since this medicine is known for supplying the required amount of nutrients to the body.   This medicine is also very helpful to cure the disease of Scabies. This is one of the most deadly parasite infections which is prevalent there. This medicine is also very helpful to do away with excessive toxic proteins.   When we talk of Filariasis, this disease can be easily cured by regular doses of this medicine. This medicine is at the same time effective to treat adult worms like earthworms which are ideally found in intestines.   This medicine is very effective to treat the menace of Onchocerciasis. This is very effective to cure the menace of itching and other types of ailments. Ideally, this medicine is very helpful to treat the side effects of another sort of antibiotics.   This medicine is also useful for kids. This is because of the reason that it is completely safe for the kids and does not at the same point in time have any effect on their growth rate in the body.    This medicine is very helpful to cure infections. These infections can be of earthworms or parasites. This medicine is also very helpful to reduce the possibility of stomach infections. This medicine is at the same time also very helpful to boost the immune system of the body. The immunity gets a boost since this medicine is known for supplying the required amount of nutrients to the body. This medicine is also very helpful to cure the disease of Scabies. This is one of the most deadly parasite infections which is prevalent there. This medicine is also very helpful to do away with excessive toxic proteins. When we talk of Filariasis, this disease can be easily cured by regular doses of this medicine. This medicine is at the same time effective to treat adult worms like earthworms which are ideally found in intestines. This medicine is very effective to treat the menace of Onchocerciasis. This is very effective to cure the menace of itching and other types of ailments. Ideally, this medicine is very helpful to treat the side effects of another sort of antibiotics. This medicine is also useful for kids. This is because of the reason that it is completely safe for the kids and does not at the same point in time have any effect on their growth rate in the body. The medicine gets dissolved in the stomach and works directly on the worms that are found in the stomach. You get to enjoy the best of your health as this medicine is safe as it dissolves completely and kills the worms and also makes them unconscious and they are passed out from the anus in the form of Faeces. The medicine gets dissolved in the stomach and works directly on the worms that are found in the stomach. You get to enjoy the best of your health as this medicine is safe as it dissolves completely and kills the worms and also makes them unconscious and they are passed out from the anus in the form of Faeces. However, be it any sort of medicine, there will be situations in which they have to intake at any cost. Therefore, their dosage has to result in the best possible manner so that the benefits achieved are more than the side effects which have been listed out above. In such situation",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/ivermectin-tablet' }
    ]
  },
  {
    id: 'fenbendazole-tablet',
    name: "Fenbendazole tablet",
    brand: 'Pure Protocol',
    price: 160,
    prescription: false,
    image: img3,
    images: [img3],
    description: "Discover the highly effective Fenbendazole tablet, available at Skymeds—a leading global distributor of high-quality generic medicines. Known for its broad-spectrum effectiveness, reliability, and potency, Fenbendazole has gained recognition among researchers and patients alike for its wide range of therapeutic applications. Fenbendazole is an anthelmintic medication widely utilized in veterinary medicine to combat parasitic infestations in animals. Fenbendazole is an anthelmintic medication widely utilized in veterinary medicine to combat parasitic infestations in animals. Fenbendazole is typically prescribed forGastrointestinal Parasitic Infections: Targeting a variety of worms, including roundworms, hookworms, whipworms, and certain types of tapeworms in animals.Dosage: The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian.Precautions:Use Fenbendazole under the guidance of a veterinary professional.Inform the veterinarian about any existing health conditions, ongoing medications, or known allergies.Follow the prescribed dosage and administration instructions precisely.Benefits of Fenbendazole:Effective against a broad spectrum of gastrointestinal parasites.Convenient oral administration in various forms such as tablets, granules, or paste.Considered safe for use in various animal species.Loads of Available Brands: Fenbendazole is available under various brands in formulations suitable for different animal species, providing options for veterinarians and pet owners. Fenbendazole is typically prescribed forGastrointestinal Parasitic Infections: Targeting a variety of worms, including roundworms, hookworms, whipworms, and certain types of tapeworms in animals.Dosage: The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian.Precautions:Use Fenbendazole under the guidance of a veterinary professional.Inform the veterinarian about any existing health conditions, ongoing medications, or known allergies.Follow the prescribed dosage and administration instructions precisely.Benefits of Fenbendazole:Effective against a broad spectrum of gastrointestinal parasites.Convenient oral administration in various forms such as tablets, granules, or paste.Considered safe for use in various animal species.Loads of Available Brands: Fenbendazole is available under various brands in formulations suitable for different animal species, providing options for veterinarians and pet owners. Common side effects may include mild gastrointestinal upset, such as vomiting or diarrhea. Severe side effects are rare but should be reported to a veterinarian. Common side effects may include mild gastrointestinal upset, such as vomiting or diarrhea. Severe side effects are rare but should be reported to a veterinarian. Effective against a broad spectrum of gastrointestinal parasites. Convenient oral administration in various forms such as tablets, granules, or paste. Considered safe for use in various animal species. The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian. The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian. Be happy to give a positive review as long as I get the product. First round stuck in Jamaica New York, Second round we'll see. Because of that I picked a neutral star position No able to leave a review until I receive my meds Arrived on time ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/fenbendazole-tablet' }
    ]
  },
  {
    id: 'covilife-40mg-tablet-ivermectin',
    name: "Covilife 40mg Tablet (Ivermectin)",
    brand: 'Pure Protocol',
    price: 380,
    prescription: false,
    image: img4,
    images: [img4],
    description: "Covilife 40mg Tablet is used to treat various parasitic infections such as strongyloidiasis (intestinal worms), onchocerciasis (river blindness), and scabies. It works by paralyzing and killing parasites, helping the body eliminate them effectively.   It is effective against several types of parasites at the larval and adult phases. This anthelmintic drug works by targeting parasites, paralyzing and killing them so that they are eventually expelled from the bloodstream. Ivermectin 40mg is a strong dose of an anti-worming drug for adults and children, particularly indicated for addressing parasitic worm infections like Strongyloidiasis, onchocerciasis (river blindness), scabies, head lice, body lice, cutaneous larva migrans, lymphatic filariasis, ascariasis, trichuriasis, enterobiasis (pinworm), and gnathostomiasis.  It is effective against several types of parasites at the larval and adult phases. This anthelmintic drug works by targeting parasites, paralyzing and killing them so that they are eventually expelled from the bloodstream.  This medicine is also available in low-strength alternatives like 3mg, 6mg, 12mg & 24mg. The specific dosage is advised as per the patient’s age, body weight, type and severity of underlying symptoms, previous treatments (if any), etc. Hence, proceed with this or any alternative dosage upon medical consultation only. Ivermectin 40mg is a strong dose of an anti-worming drug for adults and children, particularly indicated for addressing parasitic worm infections like Strongyloidiasis, onchocerciasis (river blindness), scabies, head lice, body lice, cutaneous larva migrans, lymphatic filariasis, ascariasis, trichuriasis, enterobiasis (pinworm), and gnathostomiasis. It is effective against several types of parasites at the larval and adult phases. This anthelmintic drug works by targeting parasites, paralyzing and killing them so that they are eventually expelled from the bloodstream. This medicine is also available in low-strength alternatives like 3mg, 6mg, 12mg & 24mg. The specific dosage is advised as per the patient’s age, body weight, type and severity of underlying symptoms, previous treatments (if any), etc. Hence, proceed with this or any alternative dosage upon medical consultation only. Ivermectin 40mg Tablet is a broad-spectrum antiparasitic, advised for:  River blindness (onchocerciasis) Threadworm infestations like Strongyloidiasis Liaises, i.e., African Eye Worm Roundworm infestation, like Ascariasis Lymphatic Filariasis or Elephantiasis Whipworm infestation, like Trichuriasis Ivermectin 40mg Tablet is a broad-spectrum antiparasitic, advised for: Ivermectin 40mg is mostly advised as a single-dose treatment because of its strong and powerful composition. Follow the indications shared by the physician for ensuring safety. Remember to use this drug on an empty stomach only because food interferes with its performance, and the symptoms might not improve as expected.  Swallow Ivermectin 40 tablet as a whole with a glass of water. Don’t alter the tablet form by crushing, chewing, or breaking the same.  Missed a dose, now what? In case you missed out on taking the dosage as per scheduled timings, wait for at least 2 hours after the meal so you can catch up. Ivermectin 40mg is mostly advised as a single-dose treatment because of its strong and powerful composition. Follow the indications shared by the physician for ensuring safety. Remember to use this drug on an empty stomach only because food interferes with its performance, and the symptoms might not improve as expected. Swallow Ivermectin 40 tablet as a whole with a glass of water. Don’t alter the tablet form by crushing, chewing, or breaking the same. Missed a dose, now what? In case you missed out on taking the dosage as per scheduled timings, wait for at least 2 hours after the meal so you can catch up. Buy Ivermectin 40mg Online should only be from reputable sources like skymeds.store, where you get FDA-approved medicines, high-quality guaranteed, full product information, reasonable pricing & generous discounts (flat 30% off on this product – use code SKY30). Understanding the priority of healthcare, we ship the orders promptly so they reach you within 6 – 15 days only. Buy Ivermectin 40mg Online should only be from reputable sources like skymeds.store, where you get FDA-approved medicines, high-quality guaranteed, full product information, reasonable pricing & generous discounts (flat 30% off on this product – use code SKY30). Understanding the priority of healthcare, we ship the orders promptly so they reach you within 6 – 15 days only. I never received my Ivermectin. SkyMeds: Top online destination for Ivermectin & essential meds Fast, safe, and secure delivery in #USA & UK Prioritizing your health with every order. About us Contact us Blog Sitemap ​ Privacy policy Return policy",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/covilife-40mg-tablet-ivermectin' }
    ]
  },
  {
    id: 'ivermectin-paste-dewormer',
    name: "Ivermectin Paste Dewormer",
    brand: 'Pure Protocol',
    price: 35,
    prescription: false,
    image: img5,
    images: [img5],
    description: "Ivermectin is effective against a wide range of parasites, including small and large strongyles, pinworms, botflies as well as external parasites, such as mites or lice. This medication is available in both a paste and liquid format. Incorporating ivermectin as part of a comprehensive parasite control program enables horse owners to protect their horses from parasitic infestations. However, some parasites are developing resistance to ivermectin and other deworming agents due to the improper use of these products. Consult with your veterinarian prior to administering ivermectin paste or liquid to your horse. Your veterinarian will help you determine the proper dosage regimen and provide guidance for an effective deworming strategy.  Ivermectin belongs to a chemical class of macrocyclic lactones called avermectins. Avermectins are fermentation by-products derived from soil-dwelling Streptomyces bacteria.  These compounds have broad-spectrum antiparasitic properties against nematodes and arthropods. Their unique mechanism of action targets parasites effectively yet has minimal impact on the cells of mammals.  Ivermectin belongs to a chemical class of macrocyclic lactones called avermectins. Avermectins are fermentation by-products derived from soil-dwelling Streptomyces bacteria. These compounds have broad-spectrum antiparasitic properties against nematodes and arthropods. Their unique mechanism of action targets parasites effectively yet has minimal impact on the cells of mammals.  Ivermectin is available in a variety of commercial formulations and combination products, most commonly as an oral paste. While this medication was initially introduced as an intramuscular injection, this form was discontinued due to adverse reactions.  In North America, ivermectin is usually available in a prefilled syringe or tube at a 1.87% concentration, or as a 1% liquid drench.  The recommended dose is 200 µg/kg or 0.2 mg/kg of the horse’s body weight. Ask your veterinarian for help with estimating your horse’s weight to ensure you provide the correct dosage of this drug. Ivermectin is available in a variety of commercial formulations and combination products, most commonly as an oral paste. While this medication was initially introduced as an intramuscular injection, this form was discontinued due to adverse reactions. In North America, ivermectin is usually available in a prefilled syringe or tube at a 1.87% concentration, or as a 1% liquid drench. The recommended dose is 200 µg/kg or 0.2 mg/kg of the horse’s body weight. Ask your veterinarian for help with estimating your horse’s weight to ensure you provide the correct dosage of this drug. HelloDear Ones, I Did Not yet receive it ! I’ve not started using it yet it’s for my Jackapoo who was diagnosed with untreatable cancer basically sent home on palliative care, however I have been giving her 3 days on Fenbendazole with 4 days off I plan to start with the Ivermectin on Thursday fingers crossed ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/ivermectin-paste-dewormer' }
    ]
  },
  {
    id: 'fenbendazole-888mg-human-wormentel-888',
    name: "Fenbendazole 888mg Human (Wormentel 888)",
    brand: 'Pure Protocol',
    price: 220,
    prescription: false,
    image: img6,
    images: [img6],
    description: "Fenbendazole 888mg Human (Wormentel 888) is an effective and safe dewormer for dogs and cats. It can treat various gastrointestinal parasitic infections, including roundworms, hookworms, whipworms, and tapeworms. This medication comes in oral suspension or tablet form, making it easy to administer to your pet. It is also available in different dosage strengths, depending on your pet's weight and the severity of the infection. With Fenbendazole, you can help your furry friend stay healthy and parasite-free. Fenbendazole is an anthelmintic medication widely utilized in veterinary medicine to combat parasitic infestations in animals. Fenbendazole is an anthelmintic medication widely utilized in veterinary medicine to combat parasitic infestations in animals. Fenbendazole is typically prescribed forGastrointestinal Parasitic Infections: Targeting a variety of worms, including roundworms, hookworms, whipworms, and certain types of tapeworms in animals.Dosage: The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian.Precautions:Use Fenbendazole under the guidance of a veterinary professional.Inform the veterinarian about any existing health conditions, ongoing medications, or known allergies.Follow the prescribed dosage and administration instructions precisely.Benefits of Fenbendazole:Effective against a broad spectrum of gastrointestinal parasites.Convenient oral administration in various forms such as tablets, granules, or paste.Considered safe for use in various animal species.Loads of Available Brands: Fenbendazole is available under various brands in formulations suitable for different animal species, providing options for veterinarians and pet owners. Fenbendazole is typically prescribed forGastrointestinal Parasitic Infections: Targeting a variety of worms, including roundworms, hookworms, whipworms, and certain types of tapeworms in animals.Dosage: The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian.Precautions:Use Fenbendazole under the guidance of a veterinary professional.Inform the veterinarian about any existing health conditions, ongoing medications, or known allergies.Follow the prescribed dosage and administration instructions precisely.Benefits of Fenbendazole:Effective against a broad spectrum of gastrointestinal parasites.Convenient oral administration in various forms such as tablets, granules, or paste.Considered safe for use in various animal species.Loads of Available Brands: Fenbendazole is available under various brands in formulations suitable for different animal species, providing options for veterinarians and pet owners. Common side effects may include mild gastrointestinal upset, such as vomiting or diarrhea. Severe side effects are rare but should be reported to a veterinarian. Common side effects may include mild gastrointestinal upset, such as vomiting or diarrhea. Severe side effects are rare but should be reported to a veterinarian. Effective against a broad spectrum of gastrointestinal parasites. Convenient oral administration in various forms such as tablets, granules, or paste. Considered safe for use in various animal species. The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian. The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/fenbendazole-888mg-human-wormentel-888' }
    ]
  },
  {
    id: 'ivermectin-injection-1',
    name: "Ivermectin Injection 1%",
    brand: 'Pure Protocol',
    price: 54.99,
    prescription: false,
    image: img7,
    images: [img7],
    description: "Ivermectin Injection 1% Sterile Solution is a parasiticide for the treatment and control of internal and external parasites of cattle and swine.  Indicated for effective treatment and control of gastrointestinal roundworms, lungworms, grubs, sucking lice, and mange mites in cattle and gastrointestinal roundworms, lungworms, lice, and mange mites in swine. Cattle and swine.   Special Minor Use: Reindeer and American bison (see insert for additional information) Cattle and swine.  Special Minor Use: Reindeer and American bison (see insert for additional information) Broad Spectrum: effective against a wide range of external and internal parasites in beef cattle and swine Convenient: single, small volume dose required Effective: causes paralysis and death of parasites and helps prevent reinfection Package safety: rigid plastic vials provide for a firm grip and prevent breakage, individual vial cartons protect vial contents from sunlight Economical: inexpensive ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/ivermectin-injection-1' }
    ]
  },
  {
    id: 'ivervid-tablet-12mg-ivermectin',
    name: "Ivervid Tablet 12mg (Ivermectin)",
    brand: 'Pure Protocol',
    price: 135,
    prescription: false,
    image: img8,
    images: [img8],
    description: "Ivervid Tablet 12mg (Ivermectin) is an antiparasitic medication. It is used to treat parasitic infections of your intestinal tract, skin, and eyes.  Your doctor will explain how to take Ivervid 12mg Tablet and how much you need. Read the instructions that come with the medicine to make sure you take it correctly. Generally, it is taken on an empty stomach. You usually need to take it only once to get rid of your infection. However, if you do not feel better after taking it, talk to your doctor. To get the most benefit from the medicine, drink lots of fluids and avoid caffeine when taking this medication.  This medicine is generally safe with little or no side effects. Your doctor may get stool and blood tests after taking the medication to see if you have gotten rid of the infection. Remember before taking it, you should ask your doctor’s advice if you are pregnant or breastfeeding. Treatment of Parasitic infections Treatment of Parasitic infections Ivervid 12mg Tablet helps treat many parasitic infections of your intestinal tract, skin, and eyes. It works by paralyzing and killing the parasites causing the infection. This medicine usually makes you feel better quite quickly. However, you should continue taking it as long as it is prescribed even when you feel better, to make sure that all parasites are killed and do not become resistant. Ivervid 12mg Tablet helps treat many parasitic infections of your intestinal tract, skin, and eyes. It works by paralyzing and killing the parasites causing the infection. This medicine usually makes you feel better quite quickly. However, you should continue taking it as long as it is prescribed even when you feel better, to make sure that all parasites are killed and do not become resistant. Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Ivervid  Dizziness Itching Peripheral edema Fever Joint pain Swelling of lymph nodes Synovitis Nausea Diarrhea Orthostatic hypotension (sudden lowering of blood pressure on standing) Facial swelling Fast heart rate Increased white blood cell count (eosinophils) Increased hemoglobin Increased alanine aminotransferase Increased aspartate aminotransferase Decreased white blood cell count Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Ivervid Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Ivervid 12mg Tablet is to be taken empty stomach. Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Ivervid 12mg Tablet is to be taken empty stomach. Ivervid 12mg Tablet is an antiparasitic medication. It works by binding to the muscle and nerve cells of worms, causing their paralysis and death. This treats your infection. Ivervid 12mg Tablet is an antiparasitic medication. It works by binding to the muscle and nerve cells of worms, causing their paralysis and death. This treats your infection. Ivervid 3 mg  Ivervid Tablet 6mg (Ivermectin) Ivervid 3 mg Ivervid Tablet 6mg (Ivermectin) Excellent customer service and great (Ivervid ivermectin) product. I am happy with the Skymeds team! My order arrived when promised, and contained the promised pills. Have not received my order as yet ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/ivervid-tablet-12mg-ivermectin' }
    ]
  },
  {
    id: 'fenbendazole-444mg-human-wormentel-444mg',
    name: "Fenbendazole 444MG Human (Wormentel 444MG)",
    brand: 'Pure Protocol',
    price: 200,
    prescription: false,
    image: img9,
    images: [img9],
    description: "Fenbendazole 444MG Human (Wormentel 444MG) is an effective and safe dewormer for dogs and cats. It can treat various gastrointestinal parasitic infections, including roundworms, hookworms, whipworms, and tapeworms. This medication comes in oral suspension or tablet form, making it easy to administer to your pet. It is also available in different dosage strengths, depending on your pet's weight and the severity of the infection. With Fenbendazole, you can help your furry friend stay healthy and parasite-free. Fenbendazole is an anthelmintic medication widely utilized in veterinary medicine to combat parasitic infestations in animals. Fenbendazole is an anthelmintic medication widely utilized in veterinary medicine to combat parasitic infestations in animals. Fenbendazole is typically prescribed forGastrointestinal Parasitic Infections: Targeting a variety of worms, including roundworms, hookworms, whipworms, and certain types of tapeworms in animals.Dosage: The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian.Precautions:Use Fenbendazole under the guidance of a veterinary professional.Inform the veterinarian about any existing health conditions, ongoing medications, or known allergies.Follow the prescribed dosage and administration instructions precisely.Benefits of Fenbendazole:Effective against a broad spectrum of gastrointestinal parasites.Convenient oral administration in various forms such as tablets, granules, or paste.Considered safe for use in various animal species.Loads of Available Brands: Fenbendazole is available under various brands in formulations suitable for different animal species, providing options for veterinarians and pet owners. Fenbendazole is typically prescribed forGastrointestinal Parasitic Infections: Targeting a variety of worms, including roundworms, hookworms, whipworms, and certain types of tapeworms in animals.Dosage: The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian.Precautions:Use Fenbendazole under the guidance of a veterinary professional.Inform the veterinarian about any existing health conditions, ongoing medications, or known allergies.Follow the prescribed dosage and administration instructions precisely.Benefits of Fenbendazole:Effective against a broad spectrum of gastrointestinal parasites.Convenient oral administration in various forms such as tablets, granules, or paste.Considered safe for use in various animal species.Loads of Available Brands: Fenbendazole is available under various brands in formulations suitable for different animal species, providing options for veterinarians and pet owners. Common side effects may include mild gastrointestinal upset, such as vomiting or diarrhea. Severe side effects are rare but should be reported to a veterinarian. Common side effects may include mild gastrointestinal upset, such as vomiting or diarrhea. Severe side effects are rare but should be reported to a veterinarian. Effective against a broad spectrum of gastrointestinal parasites. Convenient oral administration in various forms such as tablets, granules, or paste. Considered safe for use in various animal species. The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian. The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/fenbendazole-444mg-human-wormentel-444mg' }
    ]
  },
  {
    id: 'fenbendazole-500mg-human-wormentel-500',
    name: "Fenbendazole 500MG Human (Wormentel 500)",
    brand: 'Pure Protocol',
    price: 210,
    prescription: false,
    image: img10,
    images: [img10],
    description: "Fenbendazole 500MG Human (Wormentel 500) is an effective and safe dewormer for dogs and cats. It can treat various gastrointestinal parasitic infections, including roundworms, hookworms, whipworms, and tapeworms. This medication comes in oral suspension or tablet form, making it easy to administer to your pet. It is also available in different dosage strengths, depending on your pet's weight and the severity of the infection. With Fenbendazole, you can help your furry friend stay healthy and parasite-free. Fenbendazole is an anthelmintic medication widely utilized in veterinary medicine to combat parasitic infestations in animals. Fenbendazole is an anthelmintic medication widely utilized in veterinary medicine to combat parasitic infestations in animals. Fenbendazole is typically prescribed forGastrointestinal Parasitic Infections: Targeting a variety of worms, including roundworms, hookworms, whipworms, and certain types of tapeworms in animals.Dosage: The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian.Precautions:Use Fenbendazole under the guidance of a veterinary professional.Inform the veterinarian about any existing health conditions, ongoing medications, or known allergies.Follow the prescribed dosage and administration instructions precisely.Benefits of Fenbendazole:Effective against a broad spectrum of gastrointestinal parasites.Convenient oral administration in various forms such as tablets, granules, or paste.Considered safe for use in various animal species.Loads of Available Brands: Fenbendazole is available under various brands in formulations suitable for different animal species, providing options for veterinarians and pet owners. Fenbendazole is typically prescribed forGastrointestinal Parasitic Infections: Targeting a variety of worms, including roundworms, hookworms, whipworms, and certain types of tapeworms in animals.Dosage: The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian.Precautions:Use Fenbendazole under the guidance of a veterinary professional.Inform the veterinarian about any existing health conditions, ongoing medications, or known allergies.Follow the prescribed dosage and administration instructions precisely.Benefits of Fenbendazole:Effective against a broad spectrum of gastrointestinal parasites.Convenient oral administration in various forms such as tablets, granules, or paste.Considered safe for use in various animal species.Loads of Available Brands: Fenbendazole is available under various brands in formulations suitable for different animal species, providing options for veterinarians and pet owners. Common side effects may include mild gastrointestinal upset, such as vomiting or diarrhea. Severe side effects are rare but should be reported to a veterinarian. Common side effects may include mild gastrointestinal upset, such as vomiting or diarrhea. Severe side effects are rare but should be reported to a veterinarian. Effective against a broad spectrum of gastrointestinal parasites. Convenient oral administration in various forms such as tablets, granules, or paste. Considered safe for use in various animal species. The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian. The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/fenbendazole-500mg-human-wormentel-500' }
    ]
  },
  {
    id: 'fenbendazole-222mg-human-wormentel-222',
    name: "Fenbendazole 222MG Human (Wormentel 222)",
    brand: 'Pure Protocol',
    price: 180,
    prescription: false,
    image: img11,
    images: [img11],
    description: "Fenbendazole 222MG Human (Wormentel 222) is an effective and safe dewormer for dogs and cats. It can treat various gastrointestinal parasitic infections, including roundworms, hookworms, whipworms, and tapeworms. This medication comes in oral suspension or tablet form, making it easy to administer to your pet. It is also available in different dosage strengths, depending on your pet's weight and the severity of the infection. With Fenbendazole, you can help your furry friend stay healthy and parasite-free. Fenbendazole is an anthelmintic medication widely utilized in veterinary medicine to combat parasitic infestations in animals. Fenbendazole is an anthelmintic medication widely utilized in veterinary medicine to combat parasitic infestations in animals. Fenbendazole is typically prescribed forGastrointestinal Parasitic Infections: Targeting a variety of worms, including roundworms, hookworms, whipworms, and certain types of tapeworms in animals.Dosage: The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian.Precautions:Use Fenbendazole under the guidance of a veterinary professional.Inform the veterinarian about any existing health conditions, ongoing medications, or known allergies.Follow the prescribed dosage and administration instructions precisely.Benefits of Fenbendazole:Effective against a broad spectrum of gastrointestinal parasites.Convenient oral administration in various forms such as tablets, granules, or paste.Considered safe for use in various animal species.Loads of Available Brands: Fenbendazole is available under various brands in formulations suitable for different animal species, providing options for veterinarians and pet owners. Fenbendazole is typically prescribed forGastrointestinal Parasitic Infections: Targeting a variety of worms, including roundworms, hookworms, whipworms, and certain types of tapeworms in animals.Dosage: The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian.Precautions:Use Fenbendazole under the guidance of a veterinary professional.Inform the veterinarian about any existing health conditions, ongoing medications, or known allergies.Follow the prescribed dosage and administration instructions precisely.Benefits of Fenbendazole:Effective against a broad spectrum of gastrointestinal parasites.Convenient oral administration in various forms such as tablets, granules, or paste.Considered safe for use in various animal species.Loads of Available Brands: Fenbendazole is available under various brands in formulations suitable for different animal species, providing options for veterinarians and pet owners. Common side effects may include mild gastrointestinal upset, such as vomiting or diarrhea. Severe side effects are rare but should be reported to a veterinarian. Common side effects may include mild gastrointestinal upset, such as vomiting or diarrhea. Severe side effects are rare but should be reported to a veterinarian. Effective against a broad spectrum of gastrointestinal parasites. Convenient oral administration in various forms such as tablets, granules, or paste. Considered safe for use in various animal species. The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian. The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/fenbendazole-222mg-human-wormentel-222' }
    ]
  },
  {
    id: 'bevatas-100mg-injection',
    name: "Bevatas 100mg injection",
    brand: 'Pure Protocol',
    price: 230,
    prescription: false,
    image: img12,
    images: [img12],
    description: "Bevatas 100 injection is an anti-cancer drug. It is used to treat colon cancer, rectal cancer, non-small cell lung cancer, kidney cancer, brain tumors, ovarian cancer, and cervical cancer. It is also used to treat ovarian cancer, fallopian tube cancer, and primary peritoneal cancer. Use effective birth control during treatment and for at least 6 months after your last dose. This drug may cause fertility problems in women, so if you are planning to become pregnant in the near future, talk to your doctor about preserving your ovaries. If you have any dental problems that require surgery, tell your doctor before taking this drug. Cancer of colon and rectum Non-small cell lung cancer Kidney cancer Brain tumor Ovarian cancer Cervical cancer Metastatic breast cancer Liver Cancer Serious side effects:  Headache Vision changes Confusion Severe allergic reactions High blood pressure Delayed wound healing after surgery Protein in the urine Severe infections Perforation of the intestine Risk of bleeding and hemorrhage Heart problems due to increased heart rate Mouth ulcers, dry mouth Difficulty breathing Serious side effects: Numbness in the limbs Weakness and decreased energy Diarrhea, nausea, vomiting, abdominal pain Constipation Loss of appetite Weight loss Changes in taste and speech Decreased white blood cell count Fever Dry skin Back pain  More information about Bevatas 100 mg injection  Store Bevatas 100mg injection at 2℃. Do not freeze or shake. Keep out of reach of children and away from light. Store in original packaging to avoid exposure to light and moisture. More information about Bevatas 100 mg injection ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/bevatas-100mg-injection' }
    ]
  },
  {
    id: 'fenbendazole-150mg-human-wormentel-150',
    name: "Fenbendazole 150MG Human (Wormentel 150)",
    brand: 'Pure Protocol',
    price: 160,
    prescription: false,
    image: img13,
    images: [img13],
    description: "Fenbendazole 150MG Human (Wormentel 150 is an effective and safe dewormer for dogs and cats. It can treat various gastrointestinal parasitic infections, including roundworms, hookworms, whipworms, and tapeworms. This medication comes in oral suspension or tablet form, making it easy to administer to your pet. It is also available in different dosage strengths, depending on your pet's weight and the severity of the infection. With Fenbendazole, you can help your furry friend stay healthy and parasite-free. Fenbendazole is an anthelmintic medication widely utilized in veterinary medicine to combat parasitic infestations in animals. Fenbendazole is an anthelmintic medication widely utilized in veterinary medicine to combat parasitic infestations in animals. Fenbendazole is typically prescribed forGastrointestinal Parasitic Infections: Targeting a variety of worms, including roundworms, hookworms, whipworms, and certain types of tapeworms in animals.Dosage: The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian.Precautions:Use Fenbendazole under the guidance of a veterinary professional.Inform the veterinarian about any existing health conditions, ongoing medications, or known allergies.Follow the prescribed dosage and administration instructions precisely.Benefits of Fenbendazole:Effective against a broad spectrum of gastrointestinal parasites.Convenient oral administration in various forms such as tablets, granules, or paste.Considered safe for use in various animal species.Loads of Available Brands: Fenbendazole is available under various brands in formulations suitable for different animal species, providing options for veterinarians and pet owners.    Fenbendazole is typically prescribed forGastrointestinal Parasitic Infections: Targeting a variety of worms, including roundworms, hookworms, whipworms, and certain types of tapeworms in animals.Dosage: The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian.Precautions:Use Fenbendazole under the guidance of a veterinary professional.Inform the veterinarian about any existing health conditions, ongoing medications, or known allergies.Follow the prescribed dosage and administration instructions precisely.Benefits of Fenbendazole:Effective against a broad spectrum of gastrointestinal parasites.Convenient oral administration in various forms such as tablets, granules, or paste.Considered safe for use in various animal species.Loads of Available Brands: Fenbendazole is available under various brands in formulations suitable for different animal species, providing options for veterinarians and pet owners. Common side effects may include mild gastrointestinal upset, such as vomiting or diarrhea. Severe side effects are rare but should be reported to a veterinarian. Common side effects may include mild gastrointestinal upset, such as vomiting or diarrhea. Severe side effects are rare but should be reported to a veterinarian. Effective against a broad spectrum of gastrointestinal parasites. Convenient oral administration in various forms such as tablets, granules, or paste. Considered safe for use in various animal species The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian. The dosage of Fenbendazole varies depending on the type of parasite being targeted, the species of the animal, and its weight. It is administered orally, usually as a single dose or over a course of several days as directed by a veterinarian. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/fenbendazole-150mg-human-wormentel-150' }
    ]
  },
  {
    id: 'covimectin-tablet-12mg-ivermectin',
    name: "Covimectin Tablet 12mg (Ivermectin)",
    brand: 'Pure Protocol',
    price: 60,
    prescription: false,
    image: img14,
    images: [img14],
    description: "Covimectin Tablet 12mg (Ivermectin) is an antiparasitic medication. It is used to treat parasitic infections of your intestinal tract, skin, and eyes.  Your doctor will explain how to take Covimectin 12 Tablet and how much you need. Read the instructions that come with the medicine to make sure you take it correctly. Generally, it is taken on an empty stomach. You usually need to take it only once to get rid of your infection. However, if you do not feel better after taking it, talk to your doctor. To get the most benefit from the medicine, drink lots of fluids and avoid caffeine when taking this medication.  This medicine is generally safe with little or no side effects. Your doctor may get stool and blood tests after taking the medication to see if you have gotten rid of the infection. Remember before taking it, you should ask your doctor’s advice if you are pregnant or breastfeeding. Treatment of Parasitic infections Covimectin 12 Tablet helps treat many parasitic infections of your intestinal tract, skin, and eyes. It works by paralyzing and killing the parasites causing the infection. This medicine usually makes you feel better quite quickly. However, you should continue taking it as long as it is prescribed even when you feel better, to make sure that all parasites are killed and do not become resistant. Covimectin 12 Tablet helps treat many parasitic infections of your intestinal tract, skin, and eyes. It works by paralyzing and killing the parasites causing the infection. This medicine usually makes you feel better quite quickly. However, you should continue taking it as long as it is prescribed even when you feel better, to make sure that all parasites are killed and do not become resistant. Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Covimectin  Dizziness Itching Peripheral edema Fever Joint pain Swelling of lymph nodes Synovitis Nausea Diarrhea Orthostatic hypotension (sudden lowering of blood pressure on standing) Facial swelling Fast heart rate Increased white blood cell count (eosinophils) Increased hemoglobin Increased alanine aminotransferase Increased aspartate aminotransferase Decreased white blood cell count   Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Covimectin Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Covimectin 12 Tablet is to be taken empty stomach. Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Covimectin 12 Tablet is to be taken empty stomach. Covimectin 12 Tablet is an antiparasitic medication. It works by binding to the muscle and nerve cells of worms, causing their paralysis and death. This treats your infection. Covimectin 12 Tablet is an antiparasitic medication. It works by binding to the muscle and nerve cells of worms, causing their paralysis and death. This treats your infection. Didn’t receive product,and the don’t respond to emails or messages. I know now why they have no phone number.im out over 400 dollars and my sister continues to dye waiting for them to respond. Ordering was easy and received the delivery in good order ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/covimectin-tablet-12mg-ivermectin' }
    ]
  },
  {
    id: 'iverjohn-6-mg',
    name: "Iverjohn 6 mg (Ivermectin)",
    brand: 'Pure Protocol',
    price: 145,
    prescription: false,
    image: img15,
    images: [img15],
    description: "Iverjohn-6 Tablet belongs to the class of anti-parasitic medicines, also known as anthelmintics. It is a widely used medication to treat various infections caused by parasites, including strongyloidiasis (a roundworm infection) and control onchocerciasis (a worm infection that affects skin and eyes). These parasitic infections can affect the quality of life and lead to life-threatening conditions if left untreated, especially in people with weakened defence (immune) systems. Iverjohn-6 Tablet contains ivermectin, which works by attaching to the inside of the parasite. It finally paralyzes and destroys the parasite or it prevents adult parasites from creating larvae for a while. Thus it effectively treats parasitic infections. Take this medication as advised by your doctor. Do not alter the dose without your doctor’s advice. Common side-effects of Iverjohn-6 Tablet are headache, dizziness, muscle pain, nausea, or upset stomach. You may also experience orthostatic hypotension (dizziness when getting up too quickly from a sitting or lying position). Most of these side effects of Iverjohn-6 Tablet do not require medical attention and gradually resolve over time. However, if the side effects are persistent, reach out to your doctor. Before starting Iverjohn-6 Tablet , inform your doctor if you are allergic to ivermectin or other medications. Do not consume Iverjohn-6 Tablet if you are pregnant and breastfeeding without consulting the doctor. Tell your doctor if you are taking sedatives, anti-anxiety, or anti-epileptic drugs. Tell your doctor if you have a medical history of meningitis, human African trypanosomiasis, African sleeping sickness (an infection caused by the bite of tsetse fly in African countries), or illness that weakens the immune system, such as HIV or AIDS. Before taking the Iverjohn-6 Tablet , inform your doctor about your medical history and other medications you are currently taking to rule out any potential negative effects. Iverjohn-6 Tablet is used in the treatment of parasitic infections [Strongyloidiasis (a threadworm infection), onchocerciasis (a worm infection)]. The detailed uses of Iverjohn-6 Tablet are as follows: • Treatment of parasitic infections: Iverjohn-6 Tablet is used to treat parasitic infections like strongyloidiasis and onchocerciasis, by targeting and eliminating the parasites that cause them. • Scabies treatment: Iverjohn-6 Tablet effectively treats scabies by targeting the mites that cause intense itching and skin irritation. • Lice infection: Iverjohn-6 Tablet treats head lice infection by killing both lice and eggs, especially when other treatments aren't effective. • Filariasis management: Iverjohn-6 Tablet is also utilized to manage lymphatic filariasis by targeting the filarial worms that can cause severe complications if left untreated. • Ectoparasitic infections: Iverjohn-6 Tablet treats ectoparasitic infections caused by parasites living on the skin or in hair, effectively by targeting external parasites. Iverjohn-6 Tablet is used in the treatment of parasitic infections [Strongyloidiasis (a threadworm infection), onchocerciasis (a worm infection)]. The detailed uses of Iverjohn-6 Tablet are as follows: • Treatment of parasitic infections: Iverjohn-6 Tablet is used to treat parasitic infections like strongyloidiasis and onchocerciasis, by targeting and eliminating the parasites that cause them. • Scabies treatment: Iverjohn-6 Tablet effectively treats scabies by targeting the mites that cause intense itching and skin irritation. • Lice infection: Iverjohn-6 Tablet treats head lice infection by killing both lice and eggs, especially when other treatments aren't effective. • Filariasis management: Iverjohn-6 Tablet is also utilized to manage lymphatic filariasis by targeting the filarial worms that can cause severe complications if left untreated. • Ectoparasitic infections: Iverjohn-6 Tablet treats ectoparasitic infections caused by parasites living on the skin or in hair, effectively by targeting external parasites. Swallow it as a whole with water; do not crush, break or chew it. Swallow it as a whole with water; do not crush, break or chew it. Iverjohn-6 Tablet is an anti-parasitic medication. It can kill the parasites by acting on the nervous system. It starves the worms by inducing paralysis, consequently leading them to death. In the case of strongyloidiasis, it kills the parasites present in the intestine, completely treating the infection. In the case of onchocerciasis, it can only control the infection as it can kill the developing worms but not the adult worms. Iverjohn-6 Tablet is an anti-parasitic medication. It can kill the parasites by acting on the nervous system. It starves the worms by inducing paralysis, consequently leading them to death. In the case of strongyloidiasis, it kills the parasites present in the int",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/iverjohn-6-mg' }
    ]
  },
  {
    id: 'iversun-12-mg',
    name: "Iversun 12 mg",
    brand: 'Pure Protocol',
    price: 42,
    prescription: false,
    image: img16,
    images: [img16],
    description: "Iversun 12mg Tablet DT is an antiparasitic medication. It is used to treat parasitic infections of your intestinal tract, skin, and eyes.  Your doctor will explain how to take Iversun 12mg Tablet DT and how much you need. Read the instructions that come with the medicine to make sure you take it correctly. Generally, it is taken on an empty stomach. You usually need to take it only once to get rid of your infection. However, if you do not feel better after taking it, talk to your doctor. To get the most benefit from the medicine, drink lots of fluids and avoid caffeine when taking this medication.  This medicine is generally safe with little or no side effects. Your doctor may get stool and blood tests after taking the medication to see if you have gotten rid of the infection. Remember before taking it, you should ask your doctor’s advice if you are pregnant or breastfeeding. Treatment of Parasitic infections  BENEFITS OF IVERSUN TABLET DT  Treatment of resistant intestinal worm infections (strongyloidiasis) • Management of severe ectoparasitic infestations (crusted scabies) • Therapy for advanced onchocerciasis (river blindness) • Treatment of other complicated parasitic infections as prescribed BENEFITS OF IVERSUN TABLET DT Treatment of resistant intestinal worm infections (strongyloidiasis) • Management of severe ectoparasitic infestations (crusted scabies) • Therapy for advanced onchocerciasis (river blindness) • Treatment of other complicated parasitic infections as prescribed Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Iversun  Dizziness Itching Peripheral edema Fever Joint pain Swelling of lymph nodes Synovitis Nausea Diarrhea Orthostatic hypotension (sudden lowering of blood pressure on standing) Facial swelling Fast heart rate Increased white blood cell count (eosinophils) Increased hemoglobin Increased alanine aminotransferase Increased aspartate aminotransferase Decreased white blood cell count Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Iversun Take this medicine in the dose and duration as advised by your doctor. Dissolve it in a glass of water before taking it. Iversun 12mg Tablet DT is to be taken empty stomach. Take this medicine in the dose and duration as advised by your doctor. Dissolve it in a glass of water before taking it. Iversun 12mg Tablet DT is to be taken empty stomach. Iversun 12mg Tablet DT is an antiparasitic medication. It works by binding to the muscle and nerve cells of worms, causing their paralysis and death. This treats your infection. Iversun 12mg Tablet DT is an antiparasitic medication. It works by binding to the muscle and nerve cells of worms, causing their paralysis and death. This treats your infection. Iversun 6mg Iversun 6mg I saw Skymed on X. I have purchased from IndiaMart in the past. This was a great transaction and seamless. Great job! ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/iversun-12-mg' }
    ]
  },
  {
    id: 'iversun-6mg',
    name: "Iversun 6mg",
    brand: 'Pure Protocol',
    price: 36,
    prescription: false,
    image: img17,
    images: [img17],
    description: "Iversun 6mg Tablet contains ivermectin for treating parasitic infections including scabies, intestinal worms, and river blindness. This antiparasitic medication works by paralyzing and eliminating parasites, often requiring just one dose for complete treatment. Take on an empty stomach with water as directed by your doctor. While generally well-tolerated, some patients may experience mild dizziness or nausea. Not recommended during pregnancy without medical supervision. Available with fast, discreet worldwide shipping from skymeds.store  Prescription required. Always consult your healthcare provider for proper diagnosis and treatment instructions. • Treatment of intestinal worm infections (strongyloidiasis) • Management of parasitic skin conditions (scabies, head lice) • Therapy for eye infections (onchocerciasis/river blindness) • Treatment of other parasitic infections as prescribed • Treatment of intestinal worm infections (strongyloidiasis) • Management of parasitic skin conditions (scabies, head lice) • Therapy for eye infections (onchocerciasis/river blindness) • Treatment of other parasitic infections as prescribed  Effective against multiple parasite types Typically requires only single-dose administration Rapid symptom relief in most cases Proven safety profile when used as directed Convenient oral tablet formulation   Common effects (usually mild and temporary): • Nausea or vomiting (10-15% of patients) • Diarrhea or abdominal discomfort • Dizziness or lightheadedness • Skin rash or itching • Headache  Serious effects (rare): • Severe allergic reactions • Neurological symptoms • Vision changes Seek immediate medical attention if serious effects occur.  Common effects (usually mild and temporary): • Nausea or vomiting (10-15% of patients) • Diarrhea or abdominal discomfort • Dizziness or lightheadedness • Skin rash or itching • Headache Serious effects (rare): • Severe allergic reactions • Neurological symptoms • Vision changes Seek immediate medical attention if serious effects occur. • Take on an empty stomach with water (1 hour before or 2 hours after food) • Swallow whole – do not crush, chew, or break • Typically administered as single dose (follow doctor’s instructions) • May require follow-up stool tests to confirm parasite clearance • Maintain proper hydration during treatment  • Take on an empty stomach with water (1 hour before or 2 hours after food) • Swallow whole – do not crush, chew, or break • Typically administered as single dose (follow doctor’s instructions) • May require follow-up stool tests to confirm parasite clearance • Maintain proper hydration during treatment Iversun 6mg Tablet contains ivermectin which binds selectively to glutamate-gated chloride channels in parasite nerve and muscle cells. This binding causes increased chloride ion permeability, leading to hyperpolarization of cells and subsequent paralysis and death of the parasite. The 6mg dosage provides effective treatment while minimizing side effects.  Iversun 6mg Tablet contains ivermectin which binds selectively to glutamate-gated chloride channels in parasite nerve and muscle cells. This binding causes increased chloride ion permeability, leading to hyperpolarization of cells and subsequent paralysis and death of the parasite. The 6mg dosage provides effective treatment while minimizing side effects.  Alcohol: Strictly avoid for 48 hours after dose Pregnancy: Contraindicated due to fetal risk Breastfeeding: Discontinue nursing during treatment Driving: Avoid for 24 hours after administration Kidney/Liver Disease: Use with caution under supervision Children: Safety established for children >15kg body weight   As Iversun is typically a single-dose treatment, missed doses don’t usually apply. If your doctor has prescribed a different regimen, contact them immediately for guidance. Never take a double dose to compensate for a missed one.  As Iversun is typically a single-dose treatment, missed doses don’t usually apply. If your doctor has prescribed a different regimen, contact them immediately for guidance. Never take a double dose to compensate for a missed one. Iversun 12 mg  Iversun 12 mg ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/iversun-6mg' }
    ]
  },
  {
    id: 'evermil-10mg-tablet',
    name: "Evermil 10mg Tablet",
    brand: 'Pure Protocol',
    price: 180,
    prescription: false,
    image: img18,
    images: [img18],
    description: "Evermil 10mg Tablet is used to prevent rejection of the organs of transplant patients. It regulates the body’s immune response to allow the body to accept the transplanted organ. It can also be utilized in conjunction with other drugs to treat breast cancer the pancreas, lung, and kidneys. Prevention of organ rejection in transplant patients Treatment of Breast cancer Advanced pancreatic neuroendocrine tumours Treatment of Lung cancer Treatment of Kidney cancer Everolimus 10mg tablet reduces the function of a protein, mammalian targeted of rapamycin (mTOR) which regulates the growth of cells. It can slow down the growth of cancerous cells by inhibiting the mTOR protein. It also aids in reducing the size of tumors as well as improve outcomes for patients. Everolimus 10mg tablet reduces the function of a protein, mammalian targeted of rapamycin (mTOR) which regulates the growth of cells. It can slow down the growth of cancerous cells by inhibiting the mTOR protein. It also aids in reducing the size of tumors as well as improve outcomes for patients. Infection Cough Wheezing Increase urine output or severely decreased urine output Tiredness Bleeding Fatigue with Weight loss Difficulty breathing, or swallowing Swelling of face Severe itching Weakness Sinus inflammation Infection of ear Diarrhea Upper respiratory tract infection Breastfeeding: Not Safe Evermil 10mg tablets may pass into breast milk and may harm a nursing baby. It is not safe to take these tablets.  Alcohol Consumption: Not Safe Drinking alcohol may affect how well Evermil 10mg tablets work. Stop drinking alcohol while taking this medicine.  Liver: Talk to your doctor Before taking Evermil 10mg tablets, tell your doctor if you have liver problems. Regular monitoring with liver function tests is recommended.  Lungs: Talk to your doctor It is not known whether Evermil 10mg tablets can be used in patients with lung disease. If you have lung disease, talk to your doctor before starting treatment.  Driving: Not Safe It is not safe to drive a car or operate heavy machinery after taking Evermil 10mg tablets. This may cause dizziness and decreased concentration.  Danger during pregnancy: Evermil 10 mg tablets are not recommended for pregnant women as they may harm the unborn baby. Consult your doctor if you are pregnant or planning to become pregnant during the treatment period. Breastfeeding: Not Safe Evermil 10mg tablets may pass into breast milk and may harm a nursing baby. It is not safe to take these tablets. Alcohol Consumption: Not Safe Drinking alcohol may affect how well Evermil 10mg tablets work. Stop drinking alcohol while taking this medicine. Liver: Talk to your doctor Before taking Evermil 10mg tablets, tell your doctor if you have liver problems. Regular monitoring with liver function tests is recommended. Lungs: Talk to your doctor It is not known whether Evermil 10mg tablets can be used in patients with lung disease. If you have lung disease, talk to your doctor before starting treatment. Driving: Not Safe It is not safe to drive a car or operate heavy machinery after taking Evermil 10mg tablets. This may cause dizziness and decreased concentration. Danger during pregnancy: Evermil 10 mg tablets are not recommended for pregnant women as they may harm the unborn baby. Consult your doctor if you are pregnant or planning to become pregnant during the treatment period. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/evermil-10mg-tablet' }
    ]
  },
  {
    id: 'vermact-12mg',
    name: "Vermact (Ivermectin)12 mg",
    brand: 'Pure Protocol',
    price: 140,
    prescription: false,
    image: img19,
    images: [img19],
    description: "Vermact 12 Tablet DT is a dispersible ivermectin formulation for treating parasitic infections like scabies and intestinal worms. This easy-to-administer tablet dissolves in water, making it ideal for those who have difficulty swallowing pills. The 12mg strength provides effective parasite elimination, often requiring just one dose. Take on an empty stomach as directed by your doctor. While generally well-tolerated, some patients may experience mild dizziness or nausea. Not recommended during pregnancy without medical supervision. Available with fast, discreet worldwide shipping from skymeds.store. Prescription required. Always consult your healthcare provider for proper diagnosis and treatment instructions. Onchocerciasis  This drug is used to treat onchocerciasis, a parasitic infection of Onchocerca volvulus, spread by a lukewarm bite characterized by itchy skin, and vision.  Strongyloidiasis  Vermact is used to treat strongyloidiasis, an intestinal infection caused by the roundworm Strongyloides stercoralis, characterized by abdominal pain and diarrhea.  Scabies  It is used to treat scabies, a skin infection caused by the Sarcoptes scabiei tick, characterized by itchy and red rashes. Onchocerciasis This drug is used to treat onchocerciasis, a parasitic infection of Onchocerca volvulus, spread by a lukewarm bite characterized by itchy skin, and vision. Strongyloidiasis Vermact is used to treat strongyloidiasis, an intestinal infection caused by the roundworm Strongyloides stercoralis, characterized by abdominal pain and diarrhea. Scabies It is used to treat scabies, a skin infection caused by the Sarcoptes scabiei tick, characterized by itchy and red rashes. Your doctor will tell you how to take Vermact 12mg and how much you need. Read the instructions on the medication and make sure you are taking it correctly.  Vermact is usually taken on an empty stomach. Usually, you only need to take it once to get rid of the infection. However, if you do not feel better after taking it, see your doctor.  To get the most out of your medication, drink plenty of fluids, and avoid caffeine while taking this medication.  Your doctor will tell you how to take Vermact 12mg and how much you need. Read the instructions on the medication and make sure you are taking it correctly. Vermact is usually taken on an empty stomach. Usually, you only need to take it once to get rid of the infection. However, if you do not feel better after taking it, see your doctor. To get the most out of your medication, drink plenty of fluids, and avoid caffeine while taking this medication.  Headache Dizziness Fever Skin rash Increased heartbeat Loss of appetite Abdominal pain Swelling Diarrhea   Missed dose.  As soon as you remember, take the missed dose. When it’s time for your next dose, skip the missed dose. Do not increase your dose to make up for a missed dose.  Overdose  In case of overdose, seek emergency treatment or consult a doctor.  Missed dose. As soon as you remember, take the missed dose. When it’s time for your next dose, skip the missed dose. Do not increase your dose to make up for a missed dose. Overdose In case of overdose, seek emergency treatment or consult a doctor. Alcohol  It is not safe to drink alcohol with 12mg Vermact.  Pregnant  Vermact may not be safe to use during pregnancy. Human studies are limited, but animal studies have been shown to have detrimental effects on developing children. Your doctor will evaluate the potential benefits and risks before prescribing them. Talk to your doctor.  Breastfeeding  Vermact is safe while breastfeeding. Limited human data suggests that the drug does not pose a serious risk to children.  Driving  Vermact generally does not affect your ability to drive.  kidney  Information on the use of Vermact in patients with renal impairment is limited. Talk to your doctor.  liver  Limited information on the use of Vermact in patients with liver disease. Talk to your doctor.  Alcohol It is not safe to drink alcohol with 12mg Vermact. Pregnant Vermact may not be safe to use during pregnancy. Human studies are limited, but animal studies have been shown to have detrimental effects on developing children. Your doctor will evaluate the potential benefits and risks before prescribing them. Talk to your doctor. Breastfeeding Vermact is safe while breastfeeding. Limited human data suggests that the drug does not pose a serious risk to children. Driving Vermact generally does not affect your ability to drive. kidney Information on the use of Vermact in patients with renal impairment is limited. Talk to your doctor. liver Limited information on the use of Vermact in patients with liver disease. Talk to your doctor. SkyMeds: Top online destination for Ivermectin & essential meds Fast, safe, and secure delivery in #USA & UK Prioritizing your health with every order. Abo",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/vermact-12mg' }
    ]
  },
  {
    id: 'ivervid-tablet-6mg-ivermectin',
    name: "Ivervid Tablet 6mg (Ivermectin)",
    brand: 'Pure Protocol',
    price: 110,
    prescription: false,
    image: img20,
    images: [img20],
    description: "Ivervid 6mg Tablet is an antiparasitic medication. It is used to treat parasitic infections of your intestinal tract, skin, and eyes.  Your doctor will explain how to take Ivercid 6mg Tablet and how much you need. Read the instructions that come with the medicine to make sure you take it correctly. Generally, it is taken on an empty stomach. You usually need to take it only once to get rid of your infection. However, if you do not feel better after taking it, talk to your doctor. To get the most benefit from the medicine, drink lots of fluids and avoid caffeine when taking this medication.   Treatment of Parasitic infections Treatment of Parasitic infections Ivercid 6mg Tablet helps treat many parasitic infections of your intestinal tract, skin, and eyes. It works by paralyzing and killing the parasites causing the infection. This medicine usually makes you feel better quite quickly. However, you should continue taking it as long as it is prescribed even when you feel better, to make sure that all parasites are killed and do not become resistant.  Ivercid 6mg Tablet helps treat many parasitic infections of your intestinal tract, skin, and eyes. It works by paralyzing and killing the parasites causing the infection. This medicine usually makes you feel better quite quickly. However, you should continue taking it as long as it is prescribed even when you feel better, to make sure that all parasites are killed and do not become resistant. Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Ivercid   Dizziness Itching Peripheral edema Fever Joint pain Swelling of lymph nodes Synovitis Nausea Diarrhea Orthostatic hypotension (sudden lowering of blood pressure on standing) Facial swelling Fast heart rate Increased white blood cell count (eosinophils) Increased hemoglobin Increased alanine aminotransferase Increased aspartate aminotransferase Decreased white blood cell count   Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Ivercid Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Ivercid 6mg Tablet is to be taken empty stomach.  Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Ivercid 6mg Tablet is to be taken empty stomach. Ivercid 6mg Tablet is an antiparasitic medication. It works by binding to the muscle and nerve cells of worms, causing their paralysis and death. This treats your infection.  Ivercid 6mg Tablet is an antiparasitic medication. It works by binding to the muscle and nerve cells of worms, causing their paralysis and death. This treats your infection. Ivervid 3 mg  Ivervid Tablet 12mg (Ivermectin)     Ivervid 3 mg Ivervid Tablet 12mg (Ivermectin)   ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/ivervid-tablet-6mg-ivermectin' }
    ]
  },
  {
    id: 'iverheal-6mg',
    name: "Iverheal 6mg",
    brand: 'Pure Protocol',
    price: 138,
    prescription: false,
    image: img21,
    images: [img21],
    description: "Iverheal 6mg Tablet is an antiparasitic medicine used to treat parasitic infections of the intestines, skin, and eyes. It works by paralyzing and killing parasites or stopping their reproduction, allowing your body to eliminate the infection effectively. Take Iverheal 6mg Tablet on an empty stomach with a full glass of water.  In most cases, only a single dose is needed, but your doctor may adjust the dosage based on your condition.  Follow your doctor’s instructions closely and do not skip doses.  If you do not see improvement after taking the medicine, consult your doctor. Take Iverheal 6mg Tablet on an empty stomach with a full glass of water. In most cases, only a single dose is needed, but your doctor may adjust the dosage based on your condition. Follow your doctor’s instructions closely and do not skip doses. If you do not see improvement after taking the medicine, consult your doctor. Some people may experience:  Nausea  Diarrhea  Dizziness  Itching (pruritus)    Some people may experience: Nausea Diarrhea Dizziness Itching (pruritus)   Drink plenty of fluids during the treatment.  Avoid caffeine to help your body stay hydrated.  Your doctor may recommend follow-up stool or blood tests to ensure the infection has cleared completely. Drink plenty of fluids during the treatment. Avoid caffeine to help your body stay hydrated. Your doctor may recommend follow-up stool or blood tests to ensure the infection has cleared completely. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/iverheal-6mg' }
    ]
  },
  {
    id: 'iverheal-3mg',
    name: "Iverheal 3mg (Ivermectin)",
    brand: 'Pure Protocol',
    price: 126,
    prescription: false,
    image: img22,
    images: [img22],
    description: "Iverheal 3mg (Ivermectin) by Healing Pharma is a mild-dose antiparasitic tablet commonly used in the early stages of infection. Doctors often recommend this strength for patients who are starting treatment or require a lower dosage based on their condition. This medicine works by gradually targeting parasites and stopping their activity inside the body. Because of its lower strength, it is considered suitable for individuals who need a controlled and balanced approach rather than a strong immediate dose. In many cases, Iverheal 3mg is chosen when symptoms are not severe or when the treatment plan begins with a lighter dosage before moving to higher strengths if needed. This tablet is generally suitable for first-time users, mild infection cases, or patients who are advised to begin with a lower dose. This tablet is generally suitable for first-time users, mild infection cases, or patients who are advised to begin with a lower dose. Take the tablet on an empty stomach with a glass of water. Always follow your doctor’s instructions regarding dosage. Take the tablet on an empty stomach with a glass of water. Always follow your doctor’s instructions regarding dosage. Some people may experience mild effects such as dizziness, nausea, or slight fatigue. These usually do not last long. Some people may experience mild effects such as dizziness, nausea, or slight fatigue. These usually do not last long. 3mg is often preferred when the infection is mild or when a patient needs to start treatment carefully. 3mg is often preferred when the infection is mild or when a patient needs to start treatment carefully. Store in a cool and dry place, away from direct sunlight and moisture. Store in a cool and dry place, away from direct sunlight and moisture. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/iverheal-3mg' }
    ]
  },
  {
    id: 'mebendazolemebex',
    name: "Mebendazole(Mebex)",
    brand: 'Pure Protocol',
    price: 150,
    prescription: false,
    image: img23,
    images: [img23],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/mebendazolemebex' }
    ]
  },
  {
    id: 'fenbendazole-1000-mg',
    name: "Fenbendazole 1000 mg",
    brand: 'Pure Protocol',
    price: 250,
    prescription: false,
    image: img24,
    images: [img24],
    description: "Fenbendazole 1000 mg is a broad spectrum methylcarbamate benzimidazole anthelmintic that is used for the reduction and removal of nematode and protozoal parasites in many species.     Fenbendazole is used in the treatment of worm infections, schistosoma infections, diarrhea, periodontitis, liver abscesses, intestinal amoebiasis, hepatic amoebiasis and filariasis. Fenbendazole is used in the treatment of worm infections, schistosoma infections, diarrhea, periodontitis, liver abscesses, intestinal amoebiasis, hepatic amoebiasis and filariasis. Fenbendazole affects the permeability of the cell membrane thereby killing the worms. Fenbendazole affects the permeability of the cell membrane thereby killing the worms. Nausea, Vomiting, Headache, Abdominal pain, Dizziness, Vertigo, Abnormal liver function tests, Fever, Hair loss Nausea, Vomiting, Headache, Abdominal pain, Dizziness, Vertigo, Abnormal liver function tests, Fever, Hair loss ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/fenbendazole-1000-mg' }
    ]
  },
  {
    id: 'hydrogen-peroxide',
    name: "Hydrogen Peroxide",
    brand: 'Pure Protocol',
    price: 20,
    prescription: false,
    image: img25,
    images: [img25],
    description: "Hydrogen Peroxide Solution is an antiseptic and antifungal agent used on the wounded skin to prevent infection. When applied to the skin, it releases oxygen and causes effervescence (foams). This helps remove dead skin and cleans the wound making the recovery process faster.  Hydrogen Peroxide Solution is for external use only. You should always use it exactly as your doctor has told you. The affected area should be clean and dry before application. You must wash your hands thoroughly before and after applying this medicine. This medicine should be used regularly to get the most benefit from it. Do not use more than you need as it will not clear your condition faster and some side effects may be increased. If your condition goes on for longer than four weeks or gets worse at any time, let your doctor know. You can help this medicine work better by keeping the affected areas clean, making sure they are dry and washing your hands before and after treating the infection.  The most common side effects are scaling of skin, itching, redness of skin, stinging sensation, and swelling. Most of these are temporary and usually resolve with time. Contact your doctor straight away if you are at all concerned about any of these side effects. Pregnant or breastfeeding women should also consult their doctor before taking this medicine. Wound infection In Wound infection  Hydrogen Peroxide Solution is an antiseptic that is used for the treatment and prevention of wound infection. Hydrogen Peroxide Solution kills and prevents the growth of infection-causing microbes, thereby preventing abrasions, cuts, or any break in the skin from getting infected. Keep the affected area clean and use the medicine as prescribed by your doctor. In Wound infection Hydrogen Peroxide Solution is an antiseptic that is used for the treatment and prevention of wound infection. Hydrogen Peroxide Solution kills and prevents the growth of infection-causing microbes, thereby preventing abrasions, cuts, or any break in the skin from getting infected. Keep the affected area clean and use the medicine as prescribed by your doctor. Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Hydrogen Peroxide  Skin peeling Itching Stinging sensation Erythema (skin redness) Edema (swelling) Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Hydrogen Peroxide    Use this medicine in the dose and duration as advised by your doctor. Check the label for directions before use.   Use this medicine in the dose and duration as advised by your doctor. Check the label for directions before use.    Hydrogen Peroxide Solution is an antiseptic. When applied on the skin, it works by releasing oxygen and causes effervescence. This helps remove dead skin and cleans the wound.   Hydrogen Peroxide Solution is an antiseptic. When applied on the skin, it works by releasing oxygen and causes effervescence. This helps remove dead skin and cleans the wound. What Other Healing Advantages Does Hydrogen Peroxide Have...? For eg.. Would It Cure Diseases Like Cancer Or Any Other...! ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/hydrogen-peroxide' }
    ]
  },
  {
    id: 'ramiven-abemaciclib',
    name: "RAMIVEN (ABEMACICLIB)",
    brand: 'Pure Protocol',
    price: 425,
    prescription: false,
    image: img26,
    images: [img26],
    description: "Metastatic breast cancer In Metastatic breast cancer  Ramiven 150mg Tablet helps treat breast cancer and may be used alone or in combination with other medicines or treatment modalities, like chemotherapy. This medicine is used when other medicines have not shown significant improvement and the cancer has spread to other parts as well. It relieves the symptoms of breast cancer, such as breast lumps, bloody discharge from nipples, or changes in the shape or texture of the breast. Ramiven 150mg Tablet kills or stops the growth of cancer cells and also prevents the multiplication of such cells. Discuss with your doctor if any of the side effects bother you. In Metastatic breast cancer Ramiven 150mg Tablet helps treat breast cancer and may be used alone or in combination with other medicines or treatment modalities, like chemotherapy. This medicine is used when other medicines have not shown significant improvement and the cancer has spread to other parts as well. It relieves the symptoms of breast cancer, such as breast lumps, bloody discharge from nipples, or changes in the shape or texture of the breast. Ramiven 150mg Tablet kills or stops the growth of cancer cells and also prevents the multiplication of such cells. Discuss with your doctor if any of the side effects bother you. Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Ramiven  Hair loss Headache Cough Joint pain Dizziness Fatigue Infection Abnormal blood cell count Increased liver enzymes Decreased white blood cell count (neutrophils) Diarrhea Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Ramiven    Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Ramiven 150mg Tablet may be taken with or without food, but it is better to take it at a fixed time.   Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Ramiven 150mg Tablet may be taken with or without food, but it is better to take it at a fixed time.    Ramiven 150mg Tablet works by blocking the action of an abnormal protein that triggers the multiplication of cancer cells. This helps slow or prevent the spread of cancer cells.   Ramiven 150mg Tablet works by blocking the action of an abnormal protein that triggers the multiplication of cancer cells. This helps slow or prevent the spread of cancer cells. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/ramiven-abemaciclib' }
    ]
  },
  {
    id: 'armotraz-anastrozole',
    name: "ARMOTRAZ (ANASTROZOLE)",
    brand: 'Pure Protocol',
    price: 80,
    prescription: false,
    image: img27,
    images: [img27],
    description: "Breast cancer    In Breast cancer  Armotraz Tablet relieves the symptoms of breast cancer such as breast lumps, bloody discharge from nipple or changes in the shape or texture of the breast. It works by altering the production of those hormones in the body that are essential for the growth and spread of breast cancer. It may also interact with other hormones or have a direct effect on the cancer to stop its growth.   In Breast cancer Armotraz Tablet relieves the symptoms of breast cancer such as breast lumps, bloody discharge from nipple or changes in the shape or texture of the breast. It works by altering the production of those hormones in the body that are essential for the growth and spread of breast cancer. It may also interact with other hormones or have a direct effect on the cancer to stop its growth. Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Armotraz  Hot flashes Nausea Osteoporosis Skin rash Weakness Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Armotraz    Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Armotraz Tablet may be taken with or without food, but it is better to take it at a fixed time.   Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Armotraz Tablet may be taken with or without food, but it is better to take it at a fixed time.    Armotraz Tablet is an aromatase inhibitor. It works by lowering the amount of estrogen (natural female hormone) produced in the body. This can lower or stop the growth of some breast cancer cells that need estrogen to grow.   Armotraz Tablet is an aromatase inhibitor. It works by lowering the amount of estrogen (natural female hormone) produced in the body. This can lower or stop the growth of some breast cancer cells that need estrogen to grow. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/armotraz-anastrozole' }
    ]
  },
  {
    id: 'resihance-regorafenib',
    name: "RESIHANCE (REGORAFENIB)",
    brand: 'Pure Protocol',
    price: 850,
    prescription: false,
    image: img28,
    images: [img28],
    description: "Major & minor side effects for Resihance Tablet  Coughing up blood Dizziness Headache Bleeding gums Nosebleed Hair loss Major & minor side effects for Resihance Tablet Uses of Resihance Tablet  What is it prescribed for?  Colorectal Cancer Gastrointestinal stromal tumor Hepatocellular carcinoma Uses of Resihance Tablet What is it prescribed for? Concerns  Commonly asked questions  How long does it take for this medicine to take effect?  The amount of time taken by this medicine to show its effect is subject to vary based on the intended use.  How long do the effects of this medicine last?  The amount of time for which this medicine remains effective in the body is subject to vary based on the intended use and duration of use.  Is it safe to consume alcohol while taking this medicine?  Interaction with alcohol is unknown. It is advisable to consult your doctor before consumption.  Is this a habit forming medicine?  No habit-forming tendencies were reported.  Can this medicine be taken during pregnancy?  This medicine is not recommended for use in pregnant women unless necessary. All the risks and benefits should be discussed with the doctor before taking this medicine.  Can this medicine be taken while breast-feeding?  This medicine is not recommended for use in breastfeeding women unless necessary. All the risks and benefits should be discussed with the doctor before taking this medicine. If this medicine is used, close monitoring of the infant for any undesired side effects is recommended. Concerns Commonly asked questions How long does it take for this medicine to take effect? The amount of time taken by this medicine to show its effect is subject to vary based on the intended use. How long do the effects of this medicine last? The amount of time for which this medicine remains effective in the body is subject to vary based on the intended use and duration of use. Is it safe to consume alcohol while taking this medicine? Interaction with alcohol is unknown. It is advisable to consult your doctor before consumption. Is this a habit forming medicine? No habit-forming tendencies were reported. Can this medicine be taken during pregnancy? This medicine is not recommended for use in pregnant women unless necessary. All the risks and benefits should be discussed with the doctor before taking this medicine. Can this medicine be taken while breast-feeding? This medicine is not recommended for use in breastfeeding women unless necessary. All the risks and benefits should be discussed with the doctor before taking this medicine. If this medicine is used, close monitoring of the infant for any undesired side effects is recommended. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/resihance-regorafenib' }
    ]
  },
  {
    id: 'hydrea-hydroxyurea',
    name: "Hydrea (Hydroxyurea)",
    brand: 'Pure Protocol',
    price: 45,
    prescription: false,
    image: img29,
    images: [img29],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/hydrea-hydroxyurea' }
    ]
  },
  {
    id: 'crizalk-crizotinib',
    name: "Crizalk (Crizotinib)",
    brand: 'Pure Protocol',
    price: 2150,
    prescription: false,
    image: img30,
    images: [img30],
    description: "Non-small cell lung cancer In Non-small cell lung cancer  Non-small cell lung cancer is one of the major kinds of lung cancer and it affects both smokers as well as non-smokers. Crizalk 250mg Capsule helps treat non-small cell lung cancer and may be given alone or in combination with other medicines. It is a potent and very toxic medicine and you should discuss the risks and benefits with your doctor. You should avoid drinking alcohol while having this treatment and drink plenty of water to stay hydrated. In Non-small cell lung cancer Non-small cell lung cancer is one of the major kinds of lung cancer and it affects both smokers as well as non-smokers. Crizalk 250mg Capsule helps treat non-small cell lung cancer and may be given alone or in combination with other medicines. It is a potent and very toxic medicine and you should discuss the risks and benefits with your doctor. You should avoid drinking alcohol while having this treatment and drink plenty of water to stay hydrated. Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Crizalk  Nausea Vomiting Diarrhea Constipation Abdominal pain Visual impairment Dizziness Taste change Fatigue Decreased appetite Rash Decreased white blood cell count (neutrophils) Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Crizalk    Take this medicine in the dose and duration as advised by your doctor. Crizalk 250mg Capsule may be taken with or without food, but it is better to take it at a fixed time.   Take this medicine in the dose and duration as advised by your doctor. Crizalk 250mg Capsule may be taken with or without food, but it is better to take it at a fixed time.    Crizalk 250mg Capsule is an anti-cancer medication. It works by blocking the action of the abnormal protein that signals cancer cells to multiply. This helps to stop or slow the spread of cancer cells.   Crizalk 250mg Capsule is an anti-cancer medication. It works by blocking the action of the abnormal protein that signals cancer cells to multiply. This helps to stop or slow the spread of cancer cells. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/crizalk-crizotinib' }
    ]
  },
  {
    id: 'spexib-ceritinib',
    name: "SPEXIB (CERITINIB)",
    brand: 'Pure Protocol',
    price: 450,
    prescription: false,
    image: img31,
    images: [img31],
    description: "Non-small cell lung cancer    In Non-small cell lung cancer  Non-small cell lung cancer is one of the major kinds of lung cancer and it affects both smokers as well as non-smokers. Spexib Capsule helps treat non-small cell lung cancer and may be given alone or in combination with other medicines. It is a potent and very toxic medicine and you should discuss the risks and benefits with your doctor. You should avoid drinking alcohol while having this treatment and drink plenty of water to stay hydrated.   In Non-small cell lung cancer Non-small cell lung cancer is one of the major kinds of lung cancer and it affects both smokers as well as non-smokers. Spexib Capsule helps treat non-small cell lung cancer and may be given alone or in combination with other medicines. It is a potent and very toxic medicine and you should discuss the risks and benefits with your doctor. You should avoid drinking alcohol while having this treatment and drink plenty of water to stay hydrated. Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Spexib  Diarrhea Fatigue Nausea Vomiting Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Spexib    Take this medicine in the dose and duration as advised by your doctor. Spexib Capsule may be taken with or without food, but it is better to take it at a fixed time.   Take this medicine in the dose and duration as advised by your doctor. Spexib Capsule may be taken with or without food, but it is better to take it at a fixed time.    Spexib Capsule is an anti-cancer medication. It works by blocking the action of the abnormal protein that signals cancer cells to multiply. This helps to stop or slow the spread of cancer cells.   Spexib Capsule is an anti-cancer medication. It works by blocking the action of the abnormal protein that signals cancer cells to multiply. This helps to stop or slow the spread of cancer cells. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/spexib-ceritinib' }
    ]
  },
  {
    id: 'xovoltib-50mg-afatinib-dimaleate',
    name: "XOVOLTIB 50MG (AFATINIB DIMALEATE)",
    brand: 'Pure Protocol',
    price: 1080,
    prescription: false,
    image: img32,
    images: [img32],
    description: "Non-small cell lung cancer In Non-small cell lung cancer  Non-small cell lung cancer is one of the major kinds of lung cancer and it affects both smokers as well as non-smokers. Xovoltib 50mg Tablet helps treat non-small cell lung cancer and may be given alone or in combination with other medicines. It is a potent and very toxic medicine and you should discuss the risks and benefits with your doctor. You should avoid drinking alcohol while having this treatment and drink plenty of water to stay hydrated.  In Non-small cell lung cancer Non-small cell lung cancer is one of the major kinds of lung cancer and it affects both smokers as well as non-smokers. Xovoltib 50mg Tablet helps treat non-small cell lung cancer and may be given alone or in combination with other medicines. It is a potent and very toxic medicine and you should discuss the risks and benefits with your doctor. You should avoid drinking alcohol while having this treatment and drink plenty of water to stay hydrated. Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Xovoltib   Diarrhea Rash Dry skin Nausea Vomiting Loss of appetite Itching Stomatitis (Inflammation of the mouth) Nail disorder   Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Xovoltib    Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Xovoltib 50mg Tablet is to be taken empty stomach.    Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Xovoltib 50mg Tablet is to be taken empty stomach.    Xovoltib 50mg Tablet is an anti-cancer medication. It works by binding and inhibiting the enzyme receptors (EGFR, HER2, and HER4) that are responsible for the growth of cancer cells. Hence, resulting in the downregulation of signaling pathways. This is how it to stop or slow the spread of cancer.    Xovoltib 50mg Tablet is an anti-cancer medication. It works by binding and inhibiting the enzyme receptors (EGFR, HER2, and HER4) that are responsible for the growth of cancer cells. Hence, resulting in the downregulation of signaling pathways. This is how it to stop or slow the spread of cancer. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/xovoltib-50mg-afatinib-dimaleate' }
    ]
  },
  {
    id: 'cytotam-10-mg-tamoxifen',
    name: "CYTOTAM 10 MG (TAMOXIFEN)",
    brand: 'Pure Protocol',
    price: 58,
    prescription: false,
    image: img33,
    images: [img33],
    description: "Breast cancer In Breast cancer  Cytotam 10mg Tablet relieves the symptoms of breast cancer such as breast lumps, bloody discharge from nipple or changes in the shape or texture of the breast. It works by altering the production of those hormones in the body that are essential for the growth and spread of breast cancer, both in pre as well as postmenopausal women. It may also interact with other hormones or have a direct effect on the cancer to stop its growth. In Breast cancer Cytotam 10mg Tablet relieves the symptoms of breast cancer such as breast lumps, bloody discharge from nipple or changes in the shape or texture of the breast. It works by altering the production of those hormones in the body that are essential for the growth and spread of breast cancer, both in pre as well as postmenopausal women. It may also interact with other hormones or have a direct effect on the cancer to stop its growth. Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Cytotam  Hot flashes Nausea Vaginal discharge Vaginal bleeding Mood swings Fluid retention Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Cytotam    Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Cytotam 10mg Tablet may be taken with or without food, but it is better to take it at a fixed time.   Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Cytotam 10mg Tablet may be taken with or without food, but it is better to take it at a fixed time.    Cytotam 10mg Tablet is a hormone-based medication. It works by binding to estrogen receptors and blocking the effects of estrogen (a natural female hormone) in the breast tissue. This slows down the growth and multiplication of breast cancer cells.   Cytotam 10mg Tablet is a hormone-based medication. It works by binding to estrogen receptors and blocking the effects of estrogen (a natural female hormone) in the breast tissue. This slows down the growth and multiplication of breast cancer cells. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/cytotam-10-mg-tamoxifen' }
    ]
  },
  {
    id: 'alphalan-melphalan',
    name: "ALPHALAN (MELPHALAN)",
    brand: 'Pure Protocol',
    price: 220,
    prescription: false,
    image: img34,
    images: [img34],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/alphalan-melphalan' }
    ]
  },
  {
    id: 'ca-atra-all-trans-retinoic-acid',
    name: "CA ATRA (ALL-TRANS RETINOIC ACID)",
    brand: 'Pure Protocol',
    price: 450,
    prescription: false,
    image: img35,
    images: [img35],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/ca-atra-all-trans-retinoic-acid' }
    ]
  },
  {
    id: 'celkeran-chlorambucil',
    name: "CELKERAN (CHLORAMBUCIL)",
    brand: 'Pure Protocol',
    price: 80,
    prescription: false,
    image: img36,
    images: [img36],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/celkeran-chlorambucil' }
    ]
  },
  {
    id: 'cyendiv-nintedanib',
    name: "CYENDIV (NINTEDANIB)",
    brand: 'Pure Protocol',
    price: 450,
    prescription: false,
    image: img37,
    images: [img37],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/cyendiv-nintedanib' }
    ]
  },
  {
    id: 'cytoblastin-10-mg-vinblastine-sulphate',
    name: "CYTOBLASTIN 10 MG (VINBLASTINE SULPHATE)",
    brand: 'Pure Protocol',
    price: 40,
    prescription: false,
    image: img38,
    images: [img38],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/cytoblastin-10-mg-vinblastine-sulphate' }
    ]
  },
  {
    id: 'dacilon-0-5-mg-dactinomycin',
    name: "DACILON 0.5 MG (DACTINOMYCIN)",
    brand: 'Pure Protocol',
    price: 90,
    prescription: false,
    image: img39,
    images: [img39],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/dacilon-0-5-mg-dactinomycin' }
    ]
  },
  {
    id: 'cycloxan-50-mg-cyclophosphamide',
    name: "CYCLOXAN 50 MG (CYCLOPHOSPHAMIDE)",
    brand: 'Pure Protocol',
    price: 90,
    prescription: false,
    image: img40,
    images: [img40],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/cycloxan-50-mg-cyclophosphamide' }
    ]
  },
  {
    id: 'erlocip-erlotinib',
    name: "ERLOCIP (ERLOTINIB)",
    brand: 'Pure Protocol',
    price: 220,
    prescription: false,
    image: img41,
    images: [img41],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/erlocip-erlotinib' }
    ]
  },
  {
    id: 'fempro-2-5-mg-letrozole',
    name: "FEMPRO 2.5 MG (LETROZOLE)",
    brand: 'Pure Protocol',
    price: 150,
    prescription: false,
    image: img42,
    images: [img42],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/fempro-2-5-mg-letrozole' }
    ]
  },
  {
    id: 'gemita-injection-gemcitabine',
    name: "GEMITA INJECTION (GEMCITABINE)",
    brand: 'Pure Protocol',
    price: 160,
    prescription: false,
    image: img43,
    images: [img43],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/gemita-injection-gemcitabine' }
    ]
  },
  {
    id: 'honvan-120-mg-fosfestrol-tetrasodium',
    name: "HONVAN 120 MG (FOSFESTROL TETRASODIUM)",
    brand: 'Pure Protocol',
    price: 80,
    prescription: false,
    image: img44,
    images: [img44],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/honvan-120-mg-fosfestrol-tetrasodium' }
    ]
  },
  {
    id: 'imbruvica-140-mg-ibrutinib',
    name: "IMBRUVICA 140 MG (IBRUTINIB)",
    brand: 'Pure Protocol',
    price: 6280,
    prescription: false,
    image: img45,
    images: [img45],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/imbruvica-140-mg-ibrutinib' }
    ]
  },
  {
    id: 'kemoplat-injection-cisplatin',
    name: "KEMOPLAT INJECTION (CISPLATIN)",
    brand: 'Pure Protocol',
    price: 40,
    prescription: false,
    image: img46,
    images: [img46],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/kemoplat-injection-cisplatin' }
    ]
  },
  {
    id: 'lenmid-lenalidomide',
    name: "LENMID (LENALIDOMIDE)",
    brand: 'Pure Protocol',
    price: 180,
    prescription: false,
    image: img47,
    images: [img47],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/lenmid-lenalidomide' }
    ]
  },
  {
    id: 'lupride-depot-leuprolide-acetate',
    name: "LUPRIDE DEPOT (LEUPROLIDE ACETATE)",
    brand: 'Pure Protocol',
    price: 160,
    prescription: false,
    image: img48,
    images: [img48],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/lupride-depot-leuprolide-acetate' }
    ]
  },
  {
    id: 'endace-40-mg-megestrol-acetate',
    name: "ENDACE 40 MG (MEGESTROL ACETATE)",
    brand: 'Pure Protocol',
    price: 75,
    prescription: false,
    image: img49,
    images: [img49],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/endace-40-mg-megestrol-acetate' }
    ]
  },
  {
    id: 'nublexa-40-mg-regorafenib',
    name: "NUBLEXA 40 MG (REGORAFENIB)",
    brand: 'Pure Protocol',
    price: 1250,
    prescription: false,
    image: img50,
    images: [img50],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/nublexa-40-mg-regorafenib' }
    ]
  },
  {
    id: 'oxitan-oxaliplatin',
    name: "OXITAN (OXALIPLATIN)",
    brand: 'Pure Protocol',
    price: 60,
    prescription: false,
    image: img51,
    images: [img51],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/oxitan-oxaliplatin' }
    ]
  },
  {
    id: 'palbace-125-mg-palbociclib',
    name: "PALBACE 125 MG (PALBOCICLIB)",
    brand: 'Pure Protocol',
    price: 2650,
    prescription: false,
    image: img52,
    images: [img52],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/palbace-125-mg-palbociclib' }
    ]
  },
  {
    id: 'posid-50-mg-etoposide',
    name: "POSID 50 MG (ETOPOSIDE)",
    brand: 'Pure Protocol',
    price: 55,
    prescription: false,
    image: img53,
    images: [img53],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/posid-50-mg-etoposide' }
    ]
  },
  {
    id: 'rapact-everolimus',
    name: "RAPACT (EVEROLIMUS)",
    brand: 'Pure Protocol',
    price: 1460,
    prescription: false,
    image: img54,
    images: [img54],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/rapact-everolimus' }
    ]
  },
  {
    id: 'sorafenat-200-mg-sorafenib',
    name: "SORAFENAT 200 MG (SORAFENIB)",
    brand: 'Pure Protocol',
    price: 260,
    prescription: false,
    image: img55,
    images: [img55],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/sorafenat-200-mg-sorafenib' }
    ]
  },
  {
    id: 'thalix-thalidomide',
    name: "THALIX (THALIDOMIDE)",
    brand: 'Pure Protocol',
    price: 230,
    prescription: false,
    image: img56,
    images: [img56],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/thalix-thalidomide' }
    ]
  },
  {
    id: 'votrient-pazopanib',
    name: "VOTRIENT (PAZOPANIB)",
    brand: 'Pure Protocol',
    price: 240,
    prescription: false,
    image: img57,
    images: [img57],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/votrient-pazopanib' }
    ]
  },
  {
    id: 'xtane-25-mg-exemestane',
    name: "XTANE 25 MG (EXEMESTANE)",
    brand: 'Pure Protocol',
    price: 120,
    prescription: false,
    image: img58,
    images: [img58],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/xtane-25-mg-exemestane' }
    ]
  },
  {
    id: 'xarelto-rivaroxaban',
    name: "XARELTO (RIVAROXABAN)",
    brand: 'Pure Protocol',
    price: 120,
    prescription: false,
    image: img59,
    images: [img59],
    description: "",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/xarelto-rivaroxaban' }
    ]
  },
  {
    id: 'zecyte-abiraterone',
    name: "Zecyte (Abiraterone)",
    brand: 'Pure Protocol',
    price: 950,
    prescription: false,
    image: img60,
    images: [img60],
    description: "Prostate cancer   In Prostate cancer  Prostate gland is a small walnut-sized gland that produces a fluid called seminal fluid that nourishes and transports sperms in males. The most common symptom of prostate cancer is difficulty with urination, but sometimes there are no symptoms at all. Zecyte 250mg Tablet decreases or stops the growth of cancer cells by decreasing the amount of testosterone (natural hormone in males) in men. This also relieves difficulty in passing urine and makes it easier for you to urinate. In Prostate cancer Prostate gland is a small walnut-sized gland that produces a fluid called seminal fluid that nourishes and transports sperms in males. The most common symptom of prostate cancer is difficulty with urination, but sometimes there are no symptoms at all. Zecyte 250mg Tablet decreases or stops the growth of cancer cells by decreasing the amount of testosterone (natural hormone in males) in men. This also relieves difficulty in passing urine and makes it easier for you to urinate. Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Zecyte  Edema (swelling) Vomiting Decreased potassium level in blood Fatigue Anemia (low number of red blood cells) Urinary tract infection Diarrhea High blood pressure Cough Joint swelling Increased levels of blood fat Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Zecyte    Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Zecyte 250mg Tablet is to be taken empty stomach.   Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Zecyte 250mg Tablet is to be taken empty stomach.    Zecyte 250mg Tablet is an anticancer medication. It works by preventing androgen (male hormone) production in man. This is done by inhibiting an enzyme (CYP17) that is responsible for the production of androgen. This is how it slows down the growth of prostate cancer.   Zecyte 250mg Tablet is an anticancer medication. It works by preventing androgen (male hormone) production in man. This is done by inhibiting an enzyme (CYP17) that is responsible for the production of androgen. This is how it slows down the growth of prostate cancer. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/zecyte-abiraterone' }
    ]
  },
  {
    id: 'soranib-200-mg-sorafenib',
    name: "Sorafenib 200 mg Tablet (Soranib)",
    brand: 'Pure Protocol',
    price: 450,
    prescription: false,
    image: img61,
    images: [img61],
    description: "Liver cancer Kidney cancer Thyroid cancer   In Liver cancer  Liver cancer is the cancer that develops in the cells of the liver called hepatocytes. There may be no symptoms present in the early stages of the cancer but as the disease advances to later stages symptoms such as weight loss, stomach pain, vomiting and yellowed skin. Soranib Tablet kills the cancer cells and prevents further growth and spread of cancer to other unaffected areas. Follow your doctor’s instructions carefully and do not drink alcohol or smoke. Alcohol intake or smoking can worsen your condition and hinder your recovery. In Liver cancer Liver cancer is the cancer that develops in the cells of the liver called hepatocytes. There may be no symptoms present in the early stages of the cancer but as the disease advances to later stages symptoms such as weight loss, stomach pain, vomiting and yellowed skin. Soranib Tablet kills the cancer cells and prevents further growth and spread of cancer to other unaffected areas. Follow your doctor’s instructions carefully and do not drink alcohol or smoke. Alcohol intake or smoking can worsen your condition and hinder your recovery. Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them  Common side effects of Soranib  Fatigue Nausea Loss of appetite Diarrhea Abdominal pain Hair loss Weight loss Rash Painful blisters on hands and feet Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them Common side effects of Soranib    Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Soranib Tablet is to be taken empty stomach.   Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Soranib Tablet is to be taken empty stomach.    Soranib Tablet is an anti-cancer medication. It works by blocking the action of the abnormal protein that signals cancer cells to multiply. This helps to stop or slow the spread of cancer cells.   Soranib Tablet is an anti-cancer medication. It works by blocking the action of the abnormal protein that signals cancer cells to multiply. This helps to stop or slow the spread of cancer cells. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/soranib-200-mg-sorafenib' }
    ]
  },
  {
    id: 'tagrisso-80mg-tablet-osimertinib',
    name: "Tagrisso 80mg Tablet (Osimertinib)",
    brand: 'Pure Protocol',
    price: 3575,
    prescription: false,
    image: img62,
    images: [img62],
    description: "Tagrisso 80mg Tablet (Osimertinib) is a prescription medication used to treat adults who have non-small cell lung cancer that has spread to other parts of the body. It works by stopping the growth and spread of cancer cells. This medicine is available for purchase online, with overnight shipping available in the USA. Tagrisso 80mg Tablet (Osimertinib) is an effective treatment for lung cancer and should be taken as directed by your healthcare provider. This medication is safe and easy to use, and can help you fight your cancer. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/tagrisso-80mg-tablet-osimertinib' }
    ]
  },
  {
    id: 'keytruda-injection',
    name: "KEYTRUDA INJECTION",
    brand: 'Pure Protocol',
    price: 7800,
    prescription: false,
    image: img63,
    images: [img63],
    description: "Keytruda Injection is a revolutionary cancer treatment that helps the body's own immune system to fight cancer. It has been proven to be an effective treatment for certain kinds of cancer, including non-small cell lung cancer, melanoma, and bladder cancer. This FDA-approved injection is easy to use and comes with detailed instructions to ensure safe and effective treatment. Buy Keytruda Injection today and fight cancer with the power of your own immune system ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/keytruda-injection' }
    ]
  },
  {
    id: 'kisqali-ribociclib',
    name: "KISQALI  (Ribociclib)",
    brand: 'Pure Protocol',
    price: 1230,
    prescription: false,
    image: img64,
    images: [img64],
    description: "Kisqali 200mg Tablet (Ribociclib) is an oral prescribed medication used for the treatment of hormone receptor positive, human epidermal growth factor receptor 2 negative, advanced or metastatic breast cancer. It is available in packs of 28 tablets and should be taken as directed by your doctor. It has been clinically proven to slow down the growth of cancer cells and should be taken as part of a comprehensive treatment plan. Shop now to get your Kisqali 200mg Tablet (Ribociclib) at our online pharmacy store ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/kisqali-ribociclib' }
    ]
  },
  {
    id: 'imatib-imatinib',
    name: "Imatib 100(IMATINIB)",
    brand: 'Pure Protocol',
    price: 245,
    prescription: false,
    image: img65,
    images: [img65],
    description: "Imatib 100Tablet (Imatinib mesylate) is a prescription medication used to treat various types of cancer, including chronic myelogenous leukemia, gastrointestinal stromal tumors, and certain types of skin cancer. This medication works by blocking the growth of cancer cells. Imatib Tablet is available in 100mg and 400mg strengths and should be taken as directed by a physician. Buy Imatib Tablet online to experience the convenience of ordering and having it delivered directly to your doorstep. ",
    category: 'Anti Cancer',
    dosage: '',
    rating: 5,
    reviews: 0,
    additionalInfo: [
      { label: 'Source', value: 'https://www.theskymeds.com/product-page/imatib-imatinib' }
    ]
  }
];
