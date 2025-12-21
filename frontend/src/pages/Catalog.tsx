import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Search, Filter, X, ChevronRight } from 'lucide-react';

const Catalog: React.FC = () => {
  const location = useLocation();
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
    }

    if (search) {
      setSearchTerm(search);
    }
  }, [location]);

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

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
              <span className={`flex-1 px-3 py-2 rounded-lg border border-gray-200 transition-colors text-sm ${selectedCategories.includes(cat) ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
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
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
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
              className="text-cyan-600 focus:ring-cyan-500"
            />
            <span className="ml-3 text-gray-700 text-sm">All Products</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="prescription"
              checked={prescriptionFilter === 'prescription'}
              onChange={() => setPrescriptionFilter('prescription')}
              className="text-cyan-600 focus:ring-cyan-500"
            />
            <span className="ml-3 text-gray-700 text-sm">Prescription Only</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="prescription"
              checked={prescriptionFilter === 'otc'}
              onChange={() => setPrescriptionFilter('otc')}
              className="text-cyan-600 focus:ring-cyan-500"
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

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header with Background Image */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=2000"
          alt="Pharmacy Shelves"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight">All Products</h1>
          <p className="text-lg lg:text-xl text-blue-100">Professional pharmaceutical solutions for your health needs</p>
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
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
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
                className="flex-1 lg:flex-none w-full lg:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
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
                  <p className="text-gray-600 text-sm font-medium"><span className="text-cyan-600">{products.length}</span> products found</p>
                  <span className="text-gray-300">|</span>
                  <p className="text-gray-600 text-sm">Page {currentPage} of {totalPages}</p>
                </div>
              </div>

              {paginatedProducts.length > 0 ? (
                <>
                  <div className="product-grid">
                    {paginatedProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2 mt-12 pt-8 border-t border-gray-100">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all duration-200 ${currentPage === page
                              ? 'bg-cyan-600 text-white shadow-md transform scale-105'
                              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-cyan-200'
                            }`}
                        >
                          {page}
                        </button>
                      ))}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-cyan-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200 transition-all"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                  <button onClick={clearFilters} className="mt-4 text-cyan-600 font-medium hover:underline">Clear Filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;