import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import {
  Search,
  Filter,
  X,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import freeDeliveryPromo from '../assets/promo/free delivery.png';
import allCategoryBanner from '../assets/images/all-category-banner.jpg';

const trendingSearchImages = import.meta.glob('../assets/trendind searchs/*', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const findTrendingImage = (fileName: string) =>
  Object.entries(trendingSearchImages).find(([path]) => path.endsWith(`/${fileName}`) || path.endsWith(`\\${fileName}`))?.[1] ?? '';

const Catalog: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [prescriptionFilter, setPrescriptionFilter] = useState('all');
  const [sortOption, setSortOption] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Pagination State
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories
  const categories = Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)));

  // Handle URL params for category and search
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const search = params.get('search');

    if (category && categories.includes(category)) {
      setSelectedCategories([category]);
    } else {
      setSelectedCategories([]);
    }

    if (search) {
      setSearchTerm(search);
    } else {
      setSearchTerm('');
    }
  }, [location.search, categories]);

  // Filter Logic
  useEffect(() => {
    let filtered = MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = product.price <= priceRange;
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrescription =
        prescriptionFilter === 'all' ||
        (prescriptionFilter === 'prescription' && product.prescription) ||
        (prescriptionFilter === 'otc' && !product.prescription);

      return matchesSearch && matchesPrice && matchesCategory && matchesPrescription;
    });

    // Sort Logic
    if (sortOption === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setProducts(filtered);
    setCurrentPage(1); // Reset to page 1 when filters change
  }, [searchTerm, priceRange, selectedCategories, prescriptionFilter, sortOption]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange(1000);
    setSelectedCategories([]);
    setPrescriptionFilter('all');
    setSortOption('');
  };

  // Prevent body scroll when mobile filter is open
  useEffect(() => {
    if (isMobileFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileFilterOpen]);

  // Pagination Logic
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const isIvermectinPage = selectedCategories.length === 1 && selectedCategories[0] === 'Ivermectin';
  const isFenbendazolePage = normalizedSearchTerm === 'fenbendazole';
  const isCollectionPage = isIvermectinPage || isFenbendazolePage;
  const isAllCategoryLanding =
    selectedCategories.length === 0 &&
    !searchTerm &&
    prescriptionFilter === 'all' &&
    sortOption === '' &&
    priceRange === 1000;
  const visibleProducts = isCollectionPage ? products : paginatedProducts;

  const allCategoryCards = [
    { title: 'ANTI FUNGAL', subtitle: 'Medication', href: '/all-pills?search=anti fungal', image: findTrendingImage('ANTI FUNGAL.png') },
    { title: 'ALLERGY', subtitle: 'Medication', href: '/all-pills?search=allergy', image: findTrendingImage('ALLERGY.png') },
    { title: 'ACNE', subtitle: 'Care', href: '/all-pills?search=acne', image: findTrendingImage('ACNE Care.png') },
    { title: 'ALZHEIMER', subtitle: 'Medication', href: '/all-pills?search=alzheimer', image: findTrendingImage('ALZHEIMER.png') },
    { title: 'ADDICTION', subtitle: 'Medication', href: '/all-pills?search=addiction', image: findTrendingImage('ADDICTION.png') },
    { title: 'ANTI BIOTICS', subtitle: 'Medication', href: '/all-pills?search=antibiotic', image: findTrendingImage('ANTI BIOTIC.png') },
    { title: 'ANTI CANCER', subtitle: 'Medication', href: '/all-pills?search=anti cancer', image: findTrendingImage('ANTI CANCER.png') },
    { title: 'ANTI MALERIAL', subtitle: 'Medication', href: '/all-pills?search=anti malarial', image: findTrendingImage('ANTI MALERIAL.png') },
    { title: 'ANTI MIGRAINE', subtitle: 'Medication', href: '/all-pills?search=migraine', image: findTrendingImage('ANTI MIGRAINE.png') },
    { title: 'ANTI PARKINSONIAN', subtitle: 'Medication', href: '/all-pills?search=parkinsonian', image: findTrendingImage('ANTI PARKINSONIAN.png') },
    { title: 'ANTI VIRAL', subtitle: 'Medication', href: '/all-pills?search=anti viral', image: findTrendingImage('ANTI VIRAL.png') },
    { title: 'ANTI WORM', subtitle: 'Medication', href: '/all-pills?search=worm', image: findTrendingImage('ANTI WORM.png') },
    { title: 'ARTHRITIS', subtitle: 'Medication', href: '/all-pills?search=arthritis', image: findTrendingImage('ARTHRITIS.png') },
    { title: 'ANXIETY', subtitle: 'Medication', href: '/all-pills?search=anxiety', image: findTrendingImage('ANXIETY.png') },
    { title: 'ASTHAMA', subtitle: 'Medication', href: '/all-pills?search=asthma', image: findTrendingImage('ASTHAMA.png') },
    { title: 'BIRTH CONTROL', subtitle: 'Medication', href: '/all-pills?search=birth control', image: findTrendingImage('BIRTH CONTROL.png') },
    { title: 'BLADDER', subtitle: 'Prostate', href: '/all-pills?search=bladder', image: findTrendingImage('BLADDER.png') },
    { title: 'BLOOD RELATED', subtitle: 'Medication', href: '/all-pills?search=blood', image: findTrendingImage('BLOOD RELATED.png') },
    { title: 'CARDIAC CARE', subtitle: 'Medication', href: '/all-pills?search=cardiac', image: findTrendingImage('CARDIAC CARE.png') },
    { title: 'COLON CARE', subtitle: 'Medication', href: '/all-pills?search=colon', image: findTrendingImage('COLON CARE.png') },
    { title: 'COVID CARE', subtitle: 'Medication', href: '/all-pills?search=covid', image: findTrendingImage('COVID CARE.png') },
    { title: 'DIABETES', subtitle: 'Treatment', href: '/all-pills?search=diabetes', image: findTrendingImage('DAIBETIC.png') },
    { title: 'ERECTILE', subtitle: 'Dysfunction', href: '/all-pills?category=Erectile Dysfunction', image: findTrendingImage('ERECTILE disfunction.png') },
    { title: 'EYE CARE', subtitle: 'Medication', href: '/all-pills?search=eye care', image: findTrendingImage('EYE CARE.png') },
    { title: 'FITNESS', subtitle: 'Medication', href: '/all-pills?search=fitness', image: findTrendingImage('FITNESS.png') },
    { title: 'GASTRO', subtitle: 'Medication', href: '/all-pills?search=gastro', image: findTrendingImage('GASTRO.png') },
    { title: 'HAIR CARE', subtitle: 'Medication', href: '/all-pills?search=hair care', image: findTrendingImage('HAIR CARE.png') },
    { title: 'HEALTH CARE', subtitle: 'Devices', href: '/all-pills?search=health care', image: findTrendingImage('HEALTH CARE DEVICES.png') },
    { title: 'HEPATITIS B', subtitle: 'Medication', href: '/all-pills?search=hepatitis', image: findTrendingImage('HEPATITIS B.png') },
    { title: 'HERBAL', subtitle: 'Products', href: '/all-pills?search=herbal', image: findTrendingImage('HERBAL Products.png') },
    { title: 'HIV-AIDS', subtitle: 'Medication', href: '/all-pills?category=HIV-AIDS', image: findTrendingImage('HIVAIDS.png') },
    { title: 'HORMONES', subtitle: 'Care', href: '/all-pills?search=hormones', image: findTrendingImage('HORMONES Care.png') },
    { title: 'IVERMECTIN', subtitle: 'Tablets', href: '/all-pills?category=Ivermectin', image: findTrendingImage('IVERMECTIN Tablets.png') },
    { title: 'UROLOGY', subtitle: 'Care', href: '/all-pills?search=urology', image: findTrendingImage('UROLOGY Care.png') },
    { title: 'LIFE SAVING', subtitle: 'Drug', href: '/all-pills?search=life saving', image: findTrendingImage('LIFE SAVING Drug.png') },
    { title: 'NEURO/CNS', subtitle: 'Care', href: '/all-pills?search=neuro', image: findTrendingImage('NEURO_CNS Care.png') },
    { title: 'NUTRITION', subtitle: 'Care', href: '/all-pills?search=nutrition', image: findTrendingImage('NUTRITION Care.png') },
    { title: 'ORTHO', subtitle: 'Care', href: '/all-pills?search=ortho', image: findTrendingImage('ORTHO Care.png') },
    { title: 'OEDEMA', subtitle: 'Care', href: '/all-pills?search=oedema', image: findTrendingImage('OEDEMA Care.png') },
    { title: 'PAIN & ANALGESIC', subtitle: 'Medication', href: '/all-pills?search=pain', image: findTrendingImage('PAIN & ANALGESIC Medication.png') },
    { title: 'RESPIRATORY', subtitle: 'Care', href: '/all-pills?search=respiratory', image: findTrendingImage('RESPIRATORY.png') },
    { title: 'SKIN', subtitle: 'Care', href: '/all-pills?search=skin care', image: findTrendingImage('SKIN Care.png') },
    { title: 'SLEEPING', subtitle: 'Disorder', href: '/all-pills?search=sleep', image: findTrendingImage('SLEEPING Disorder.png') },
    { title: 'THYROID CARE', subtitle: 'Medication', href: '/all-pills?search=thyroid', image: findTrendingImage('THYROID CARE Medication.png') },
    { title: 'KIDNEY/LIVER', subtitle: 'Medication', href: '/all-pills?search=kidney liver', image: findTrendingImage('KIDNEY_LIVER Medication.png') },
    { title: 'WEIGHT LOSS', subtitle: 'Medication', href: '/all-pills?search=weight loss', image: findTrendingImage('WEIGHT LOSS Medication.png') },
    { title: 'WOMEN CARE', subtitle: 'Medication', href: '/all-pills?search=women care', image: findTrendingImage('WOMEN.png') },
    { title: 'HCQS', subtitle: 'Medication', href: '/all-pills?search=hcqs', image: findTrendingImage('HCQS Medication.png') },
    { title: 'AZITHROMYCIN', subtitle: 'Medication', href: '/all-pills?search=azithromycin', image: findTrendingImage('AZITHROMYCIN Medication.png') }
  ];

  const categoryPalettes = [
    'from-[#6d8fa9] to-[#6488a3]',
    'from-[#8b84b8] to-[#8079ab]',
    'from-[#9c74ea] to-[#8d69e0]',
    'from-[#c1777d] to-[#b56f76]',
    'from-[#95a0f3] to-[#8794ec]',
    'from-[#c5ff68] to-[#b8f255]',
    'from-[#8f97f5] to-[#7d88ea]',
    'from-[#96bcc8] to-[#89b0bc]'
  ];

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const quickCategoryLinks = allCategoryCards.slice(0, 10);
  const collectionTitle = isIvermectinPage ? 'Ivermectin' : 'Fenbendazole';
  const collectionPromoImage = freeDeliveryPromo;

  const FilterContent = () => (
    <>
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat} className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              <span className={`flex-1 px-3 py-2 rounded-lg border border-gray-200 transition-colors text-sm ${selectedCategories.includes(cat) ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
        <div className="px-1">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>$0</span>
            <span>${priceRange}</span>
          </div>
        </div>
      </div>

      {/* Prescription Type */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4">Type</h4>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="prescription"
              checked={prescriptionFilter === 'all'}
              onChange={() => setPrescriptionFilter('all')}
              className="text-rose-600 focus:ring-rose-500"
            />
            <span className="ml-3 text-gray-700 text-sm">All Products</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="prescription"
              checked={prescriptionFilter === 'prescription'}
              onChange={() => setPrescriptionFilter('prescription')}
              className="text-rose-600 focus:ring-rose-500"
            />
            <span className="ml-3 text-gray-700 text-sm">Prescription Only</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="prescription"
              checked={prescriptionFilter === 'otc'}
              onChange={() => setPrescriptionFilter('otc')}
              className="text-rose-600 focus:ring-rose-500"
            />
            <span className="ml-3 text-gray-700 text-sm">Over-the-Counter</span>
          </label>
        </div>
      </div>

      {/* Clear Filters */}
      <button onClick={clearFilters} className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm">
        Clear All Filters
      </button>
    </>
  );

  const IvermectinCard: React.FC<{ product: typeof products[number] }> = ({ product }) => (
    <div className="group flex h-full flex-col px-0.5 sm:px-2">
      <Link
        to={`/product/${product.id}`}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/product/${product.id}`);
        }}
        className="mb-2 flex h-28 items-center justify-center overflow-hidden bg-transparent sm:mb-6 sm:h-64"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </Link>

      <Link
        to={`/product/${product.id}`}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/product/${product.id}`);
        }}
        className="mb-2 text-center text-[0.82rem] font-black leading-tight tracking-[-0.03em] text-[#1b6f6a] transition hover:text-[#114945] sm:mb-3 sm:text-[1.45rem]"
      >
        {product.name}
      </Link>

      <div className="mb-3 text-center text-[1.6rem] font-black text-[#1b6f6a] sm:mb-6 sm:text-[1.7rem]">
        ${product.price.toFixed(2)}
      </div>

      <button
        onClick={() => addToCart(product, 1)}
        className="mt-auto rounded-xl border border-[#2b7f79] bg-white px-2 py-2 text-sm font-bold text-[#1b6f6a] transition hover:bg-[#1b6f6a] hover:text-white sm:px-4 sm:py-3 sm:text-lg"
      >
        Add to Cart
      </button>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {isCollectionPage ? (
        <section className="bg-white pb-12">
          <div className="relative overflow-hidden">
            <img
              src={allCategoryBanner}
              alt={`${collectionTitle} banner`}
              className="h-[220px] w-full object-cover md:h-[280px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,64,58,0.86),rgba(7,64,58,0.42),rgba(7,64,58,0.12))]" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4 text-white sm:px-6 lg:px-8">
                <h1 className="text-5xl font-black tracking-[-0.05em] md:text-6xl">{collectionTitle}</h1>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 hidden flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="text-5xl font-black tracking-[-0.05em] text-[#2b6b6b] md:text-6xl">{collectionTitle}</h1>
                <div className="mt-4 flex items-center gap-2 text-xl font-bold text-[#2b6b6b]">
                  <Link to="/" className="hover:text-[#1b6f6a]">Home</Link>
                  <span className="text-slate-400">»</span>
                  <span className="text-slate-900">{collectionTitle}</span>
                </div>
              </div>

              <div className="w-full lg:w-[220px]">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full rounded-none border border-[#75a8a3] bg-white px-5 py-4 text-xl text-[#2b6b6b] outline-none"
                >
                  <option value="">Sort by</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-[360px_1fr]">
              <aside className="hidden lg:block">
                <div className="sticky top-32 space-y-8">
                  <div className="overflow-hidden rounded-none shadow-[0_18px_40px_rgba(10,78,62,0.2)]">
                    <img
                      src={collectionPromoImage}
                      alt={`${collectionTitle} promo`}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="p-0">
                    <h2 className="text-2xl font-black tracking-[-0.03em] text-[#1b6f6a]">Search category</h2>
                    <div className="mt-3 border-b border-[#cfe4e1] pb-2">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search medications..."
                        className="w-full bg-transparent text-base text-slate-700 outline-none placeholder:text-slate-400"
                      />
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-2">
                      {quickCategoryLinks.map((category) => (
                        <Link
                          key={`${category.title}-quick`}
                          to={category.href}
                          className="text-sm font-semibold text-[#1b6f6a] transition hover:text-[#114945] hover:underline"
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>

              <div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-12 xl:grid-cols-3">
                  {visibleProducts.map((product) => (
                    <IvermectinCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : isAllCategoryLanding ? (
      <section className="bg-white pb-14">
        <div className="relative mb-12 overflow-hidden">
          <div className="relative">
            <img
              src={allCategoryBanner}
              alt="All category banner"
              className="h-[220px] w-full object-cover md:h-[300px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,70,62,0.86),rgba(6,70,62,0.3),rgba(6,70,62,0.08))]" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">ALL CATEGORY</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {allCategoryCards.map((category, index) => (
              <Link
                key={`${category.title}-${category.subtitle}`}
                to={category.href}
                className={`group relative min-h-[162px] overflow-hidden rounded-[1.65rem] border-[3px] border-white bg-gradient-to-br p-3 text-white shadow-[0_6px_18px_rgba(17,77,72,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(17,77,72,0.22)] sm:min-h-[250px] sm:rounded-[2rem] sm:p-6 ${categoryPalettes[index % categoryPalettes.length]}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_32%)]" />
                <div className="pointer-events-none absolute inset-0 rounded-[1.65rem] ring-1 ring-inset ring-[#8ad2c2]/35 sm:rounded-[2rem]" />

                <div className="relative z-10 max-w-[72%]">
                  <h2 className="text-[1rem] font-black uppercase leading-[1.02] tracking-[-0.03em] sm:text-[2.05rem]">
                    {category.title}
                  </h2>
                  <p className="mt-1 text-[0.82rem] leading-none text-white/95 sm:mt-2 sm:text-[1.2rem]">
                    {category.subtitle}
                  </p>
                </div>

                <div className="absolute bottom-1.5 right-1.5 flex h-20 w-20 items-end justify-end transition duration-300 group-hover:scale-105 sm:bottom-3 sm:right-3 sm:h-32 sm:w-32">
                  <div className="absolute bottom-1 right-1 h-16 w-16 rounded-full bg-white/10 blur-xl sm:h-20 sm:w-20" />
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.title}
                      className="relative max-h-full max-w-full object-contain object-bottom-right"
                    />
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      ) : (
      <>
      {/* Page Header with Background Image */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
        <img
          src={allCategoryBanner}
          alt="Pharmacy Shelves"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">All Products</h1>
        </div>
      </section>

      {/* Search and Sort Bar */}
      <section className="py-8 bg-white border-b sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search medications..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </div>
            </div>
            <div className="flex gap-4 w-full lg:w-auto">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 font-medium flex items-center justify-center gap-2"
              >
                <Filter size={18} /> Filters
              </button>

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="flex-1 lg:flex-none w-full lg:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
              >
                <option value="">Sort by</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Mobile Filter Drawer (Overlay) */}
            <div
              className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)}></div>
              <div
                className={`absolute inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileFilterOpen ? 'translate-x-0' : 'translate-x-full'}`}
              >
                <div className="flex items-center justify-between p-4 border-b">
                  <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                    <X size={24} />
                  </button>
                </div>
                <div className="p-6 overflow-y-auto h-[calc(100vh-64px)]">
                  <FilterContent />
                </div>
              </div>
            </div>

            {/* Desktop Filter Sidebar */}
            <div className="hidden lg:block lg:w-1/4">
              <div className="filter-sidebar rounded-xl p-6 sticky top-40 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Filters</h3>
                <FilterContent />
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">All Medications</h2>
                <div className="flex items-center gap-4">
                  <p className="text-gray-600 text-sm font-medium"><span className="text-green-700">{products.length}</span> products found</p>
                  <span className="text-gray-300">|</span>
                  <p className="text-gray-600 text-sm">Page {currentPage} of {totalPages}</p>
                </div>
              </div>

              {paginatedProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-12 xl:grid-cols-3">
                    {visibleProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {!isCollectionPage && totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2 mt-12 pt-8 border-t border-gray-100">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-green-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200 transition-all"
                      >
                        <ChevronLeft size={18} />
                      </button>

                      {(() => {
                        let startPage = Math.max(1, currentPage - 1);
                        let endPage = Math.min(totalPages, startPage + 2);

                        // Adjust if we're near the end to still show 3 pages if possible
                        if (endPage - startPage < 2 && totalPages >= 3) {
                          if (startPage === 1) {
                            endPage = 3;
                          } else if (endPage === totalPages) {
                            startPage = Math.max(1, totalPages - 2);
                          }
                        }

                        const pages = [];
                        for (let i = startPage; i <= endPage; i++) {
                          pages.push(i);
                        }

                        return pages.map((page) => (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all duration-200 ${currentPage === page
                              ? 'bg-green-700 text-white shadow-md transform scale-105'
                              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-green-200'
                              }`}
                          >
                            {page}
                          </button>
                        ));
                      })()}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-green-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200 transition-all"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                  <button onClick={clearFilters} className="mt-4 text-rose-600 font-medium hover:underline">Clear Filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      </>
      )}
    </div>
  );
};

export default Catalog;

