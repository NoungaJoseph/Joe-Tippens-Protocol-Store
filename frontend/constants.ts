import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
    // Most Loved / Featured Specifics
    { id: "usa-trio", name: "USA Medical Signature Trio", brand: "USA Medical", price: 300.00, prescription: false, image: "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?auto=format&fit=crop&q=80&w=400", description: "The Ultimate Holistic Health Bundle containing CBD, Vitamins and Minerals.", category: 'Supplements', rating: 5.0, reviews: 42 },
    { id: "safeguard-paste", name: "SafeGaurd (Fenbendazole) Paste", brand: "SafeGuard", price: 25.00, prescription: false, image: "https://images.unsplash.com/photo-1550572017-ed108ec3163e?auto=format&fit=crop&q=80&w=400", description: "High efficacy paste formulation.", category: 'Anti-Parasites', rating: 4.8, reviews: 156 },
    { id: "iverheal-6", name: "Iverheal 6 MG ( IVERMECTIN )", brand: "Iverheal", price: 63.00, prescription: true, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400", description: "Anti-parasitic medication. Prescription required.", category: 'Ivermectin', rating: 4.7, reviews: 89 },
    { id: "fenben-powder", name: "Fenbendazole 100g Powder", brand: "Fenben Lab", price: 113.00, prescription: false, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400", description: "Pure powder form for flexible dosing.", category: 'Anti-Parasites', rating: 4.9, reviews: 210 },
    
    // Featured
    { id: "fenben-tabs", name: "Fenbendazole Tablets", brand: "Fenben Lab", price: 120.00, prescription: false, image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400", description: "Convenient tablet form.", category: 'Anti-Parasites', rating: 4.8, reviews: 300 },
    { id: "ivermectin-12", name: "Ivermectin Tablets USP 12 Mg", brand: "Generic", price: 120.00, prescription: true, image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400", description: "Standard USP grade Ivermectin.", category: 'Ivermectin', rating: 4.6, reviews: 120 },
    { id: "cbd-oil", name: "CBD Oil Full Spectrum", brand: "NatureMade", price: 75.00, prescription: false, image: "https://images.unsplash.com/photo-1609159348638-724e0f49743c?auto=format&fit=crop&q=80&w=400", description: "Premium CBD oil for inflammation and wellness support.", category: 'Anabolics', rating: 5.0, reviews: 654 },
    { id: "vit-b17", name: "Vitamin B17", brand: "Apricot Power", price: 150.00, prescription: false, image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400", description: "Amygdalin supplement.", category: 'Supplements', rating: 4.5, reviews: 90 },
    
    // New Arrivals & Additional Products for Pagination
    { id: "semaglutide", name: "Semaglutide Injection", brand: "Ozempic Generic", price: 250.00, prescription: true, image: "https://images.unsplash.com/photo-1628771065518-0d82f0263320?auto=format&fit=crop&q=80&w=400", description: "GLP-1 agonist for weight management.", category: 'Semaglutide', rating: 4.8, reviews: 45 },
    { id: "pain-001", name: "Ibuprofen 200mg", brand: "Advil", price: 12.99, prescription: false, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400", description: "Anti-inflammatory pain reliever.", category: 'Pain Relief', rating: 4.8, reviews: 245 },
    { id: "amoxicillin", name: "Amoxicillin 500mg", brand: "Generic", price: 18.00, prescription: true, image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400", description: "Antibiotic for bacterial infections.", category: 'Antibiotics', rating: 4.5, reviews: 56 },
    { id: "lipitor", name: "Lipitor (Atorvastatin)", brand: "Pfizer", price: 45.00, prescription: true, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400", description: "Cholesterol lowering medication.", category: 'Heart Health', rating: 4.7, reviews: 112 },
    { id: "viagra", name: "Viagra 100mg", brand: "Pfizer", price: 85.00, prescription: true, image: "https://images.unsplash.com/photo-1550572017-ed108ec3163e?auto=format&fit=crop&q=80&w=400", description: "Treatment for erectile dysfunction.", category: 'Erectile Dysfunction', rating: 4.9, reviews: 420 },
    { id: "cialis", name: "Cialis 20mg", brand: "Lilly", price: 90.00, prescription: true, image: "https://images.unsplash.com/photo-1628771065518-0d82f0263320?auto=format&fit=crop&q=80&w=400", description: "Long-lasting ED treatment.", category: 'Erectile Dysfunction', rating: 4.8, reviews: 310 },
    { id: "melatonin", name: "Melatonin 5mg", brand: "Nature's Bounty", price: 15.00, prescription: false, image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400", description: "Sleep aid supplement.", category: 'Supplements', rating: 4.6, reviews: 88 },
    { id: "multivitamin", name: "Men's Multivitamin", brand: "One A Day", price: 22.00, prescription: false, image: "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?auto=format&fit=crop&q=80&w=400", description: "Daily vitamin supplement.", category: 'Supplements', rating: 4.7, reviews: 150 },
    { id: "fish-oil", name: "Omega-3 Fish Oil", brand: "Nordic Naturals", price: 35.00, prescription: false, image: "https://images.unsplash.com/photo-1609159348638-724e0f49743c?auto=format&fit=crop&q=80&w=400", description: "Heart and brain health support.", category: 'Supplements', rating: 4.9, reviews: 200 },
    { id: "probiotic", name: "Probiotic 50 Billion", brand: "Garden of Life", price: 40.00, prescription: false, image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400", description: "Digestive and immune support.", category: 'Supplements', rating: 4.8, reviews: 180 },
    { id: "zinc", name: "Zinc Picolinate 50mg", brand: "Now Foods", price: 12.00, prescription: false, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400", description: "Immune system support.", category: 'Supplements', rating: 4.7, reviews: 95 },
    { id: "vit-c", name: "Vitamin C 1000mg", brand: "Emergen-C", price: 18.00, prescription: false, image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400", description: "Immune support drink mix.", category: 'Supplements', rating: 4.8, reviews: 300 },
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/all-pills' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

// Generate 50 Blog Posts
export const BLOG_POSTS = Array.from({ length: 50 }, (_, i) => {
  const titles = [
    "Understanding the Joe Tippens Protocol",
    "Benefits of Fenbendazole for Human Health",
    "CBD Oil: Full Spectrum vs Isolate Guide",
    "Vitamin B17 and Immune System Support",
    "The Critical Role of Zinc in Recovery",
    "5 Tips for Safe Online Pharmacy Shopping",
    "How Ivermectin Works: A Comprehensive Guide",
    "Boosting Immunity Naturally Through Diet",
    "The Science Behind Anti-Parasitic Protocols",
    "Gut Health and Its Impact on Mental Well-being",
    "Top Supplements for Longevity and Vitality",
    "Managing Inflammation Through Anti-Inflammatory Diet",
    "Sleep Hygiene: The Foundation of Recovery",
    "Stress Management Techniques for Chronic Patients",
    "Holistic Approaches to Modern Wellness",
    "Understanding Dosage: Guidelines and Safety",
    "The History of Penicillin and Antibiotics",
    "Essential Vitamins for Daily Energy",
    "Detoxification: Separating Myths from Facts",
    "Exercise Strategies for Chronic Conditions",
    "The Benefits of Curcumin and Turmeric",
    "Melatonin: More Than Just a Sleep Aid",
    "Omega-3 Fatty Acids: Heart and Brain Health",
    "Probiotics vs Prebiotics: What You Need to Know",
    "The Impact of Sugar on the Immune System"
  ];
  
  const images = [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1609159348638-724e0f49743c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1550572017-ed108ec3163e?auto=format&fit=crop&q=80&w=800"
  ];

  const categories = ["Protocols", "Research", "Supplements", "Nutrition", "Safety", "Wellness", "Recovery"];

  return {
    id: i + 1,
    title: i < titles.length ? titles[i] : `${titles[i % titles.length]} - Advanced Insights`,
    excerpt: "Discover the latest insights, research, and practical advice in our comprehensive guide designed to help you make informed decisions about your health journey.",
    content: `
      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Importance of this Topic</h3>
      <p class="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Understanding the nuances of this subject is critical for maintaining optimal health standards.</p>
      
      <p class="mb-4">Recent studies have shown significant correlation between lifestyle choices and long-term outcomes. By integrating these practices into your daily routine, you can experience measurable improvements in vitality and resilience.</p>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Benefits</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Improved Cellular Health:</strong> Supporting the body's natural repair mechanisms.</li>
        <li><strong>Enhanced Immune Function:</strong> Strengthening defenses against environmental stressors.</li>
        <li><strong>Better Quality of Life:</strong> Promoting energy, clarity, and emotional balance.</li>
        <li><strong>Long-term Sustainability:</strong> Creating habits that last a lifetime.</li>
      </ul>

      <div class="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500 mb-8 my-8">
        <h4 class="font-bold text-emerald-800 mb-2">Expert Tip</h4>
        <p class="text-emerald-700 m-0">Always consult with a healthcare professional before starting any new supplement regimen, especially if you have existing health conditions.</p>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical Applications</h3>
      <p class="mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
    `,
    image: images[i % images.length],
    date: new Date(Date.now() - i * 86400000 * 3).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    author: ["Dr. Sarah Smith", "Medical Team", "Wellness Expert", "Nutritionist Jane"][i % 4],
    category: categories[i % categories.length]
  };
});