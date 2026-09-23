import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, Sparkles, Check } from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
  currency: string;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onQuickAdd: (product: Product, selectedColorIdx: number, size: number) => void;
  searchQuery?: string;
  onClearSearch?: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  currency,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  onQuickAdd,
  searchQuery = '',
  onClearSearch,
}) => {
  const [selectedGender, setSelectedGender] = useState<'all' | 'men' | 'women' | 'girls'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [onlyBestsellers, setOnlyBestsellers] = useState(false);

  // Filter products by gender first
  const genderFilteredProducts = useMemo(() => {
    if (selectedGender === 'men') {
      return products.filter((p) => p.gender === 'men' || p.gender === 'unisex');
    }
    if (selectedGender === 'women') {
      return products.filter((p) => p.gender === 'women' || p.gender === 'unisex' || !p.gender);
    }
    if (selectedGender === 'girls') {
      return products.filter((p) => p.gender === 'girls');
    }
    return products;
  }, [products, selectedGender]);

  // Dynamic category options based on selected gender
  const categories = useMemo(() => {
    if (selectedGender === 'girls') {
      return [
        { id: 'all', label: 'All Girls’ Modern' },
        { id: 'mary-janes', label: 'Modern Mary Janes' },
        { id: 'loafers', label: 'Chunky Lug Loafers' },
        { id: 'sneakers', label: 'Platform Trainers' },
        { id: 'boots', label: 'Chelsea & Ankle Boots' },
        { id: 'flats', label: 'Modern Ballerinas' },
        { id: 'sandals', label: 'Fisherman Sandals' },
      ];
    }
    if (selectedGender === 'men') {
      return [
        { id: 'all', label: 'All Men’s' },
        { id: 'oxfords', label: 'Wholecuts & Brogues' },
        { id: 'monkstraps', label: 'Double Monkstraps' },
        { id: 'loafers', label: 'Artisanal Loafers' },
        { id: 'boots', label: 'Boots & Jodhpurs' },
        { id: 'drivers', label: 'Driving Moccasins' },
        { id: 'sneakers', label: 'Studio Trainers' },
      ];
    }
    if (selectedGender === 'women') {
      return [
        { id: 'all', label: 'All Women’s' },
        { id: 'heels', label: 'Sculptural Heels' },
        { id: 'sandals', label: 'Strappy Sandals & Slides' },
        { id: 'flats', label: 'Refined Flats' },
        { id: 'boots', label: 'Minimalist Boots' },
        { id: 'loafers', label: 'Artisanal Loafers' },
        { id: 'mules', label: 'Evening Mules' },
        { id: 'sneakers', label: 'Studio Trainers' },
      ];
    }
    return [
      { id: 'all', label: 'All Silhouettes' },
      { id: 'mary-janes', label: 'Modern Mary Janes' },
      { id: 'oxfords', label: 'Oxfords & Brogues' },
      { id: 'heels', label: 'Sculptural Heels' },
      { id: 'monkstraps', label: 'Monkstraps' },
      { id: 'loafers', label: 'Loafers' },
      { id: 'sandals', label: 'Sandals & Slides' },
      { id: 'flats', label: 'Refined Flats' },
      { id: 'boots', label: 'Boots' },
      { id: 'drivers', label: 'Driving Shoes' },
      { id: 'mules', label: 'Evening Mules' },
      { id: 'sneakers', label: 'Studio Trainers' },
    ];
  }, [selectedGender]);

  const menCount = useMemo(() => products.filter((p) => p.gender === 'men' || p.gender === 'unisex').length, [products]);
  const womenCount = useMemo(() => products.filter((p) => p.gender === 'women' || !p.gender || p.gender === 'unisex').length, [products]);
  const girlsCount = useMemo(() => products.filter((p) => p.gender === 'girls').length, [products]);

  const filteredProducts = useMemo(() => {
    let list = [...genderFilteredProducts];

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (onlyBestsellers) {
      list = list.filter((p) => p.isBestseller || p.isNew);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subName.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.materials.some((m) => m.toLowerCase().includes(q))
      );
    }

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured order
        break;
    }

    return list;
  }, [genderFilteredProducts, selectedCategory, onlyBestsellers, searchQuery, sortBy]);

  return (
    <section 
      id="collection" 
      className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#EBE3D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs tracking-[0.24em] uppercase text-[#8A6D3B] font-medium">
            <Sparkles className="w-3 h-3" />
            <span>
              {selectedGender === 'girls'
                ? 'Modern Junior Atelier'
                : selectedGender === 'men'
                ? 'Sartorial Men’s Atelier'
                : selectedGender === 'women'
                ? 'Contemporary Women’s Atelier'
                : 'Master Cordwainer Collection'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#181716] font-normal tracking-tight">
            {selectedGender === 'girls'
              ? 'Girls’ Modern Collection'
              : selectedGender === 'men'
              ? 'Men’s Footwear Atelier'
              : selectedGender === 'women'
              ? 'Women’s Footwear Atelier'
              : 'The Footwear Atelier'}
          </h2>
          <p className="text-sm sm:text-base text-[#6E6455] font-light leading-relaxed">
            {selectedGender === 'girls'
              ? 'Architectural chunky lug soles, square-toe Mary Janes, and featherweight platform trainers engineered with ergonomic arch cushioning and supple Italian leathers.'
              : selectedGender === 'men'
              ? 'Wholecut Oxfords, double monkstraps, and Goodyear-welted boots hand-burnished with natural beeswax and oils for lasting distinction.'
              : 'Hand-lasted in Tuscany from first-selection full-grain leathers, balancing architectural distinction with effortless all-day stride poise.'}
          </p>
        </div>

        {/* Gender / Department Segmented Switcher */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1 bg-[#EAE2D3] border border-[#D5C7B0] max-w-full overflow-x-auto no-scrollbar">
            <button
              id="gender-filter-all"
              onClick={() => {
                setSelectedGender('all');
                setSelectedCategory('all');
              }}
              className={`px-4 sm:px-6 py-2 text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedGender === 'all'
                  ? 'bg-[#181716] text-[#FAF7F2] shadow-xs'
                  : 'text-[#615748] hover:text-[#181716]'
              }`}
            >
              All Creations ({products.length})
            </button>

            <button
              id="gender-filter-women"
              onClick={() => {
                setSelectedGender('women');
                setSelectedCategory('all');
              }}
              className={`px-4 sm:px-6 py-2 text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                selectedGender === 'women'
                  ? 'bg-[#181716] text-[#FAF7F2] shadow-xs'
                  : 'text-[#615748] hover:text-[#181716]'
              }`}
            >
              <span>Women’s Footwear</span>
              <span className={`text-[10px] px-1.5 py-0.2 font-normal rounded-xs ${
                selectedGender === 'women' ? 'bg-[#8A6D3B] text-white' : 'bg-[#DCD3C3] text-[#4A4235]'
              }`}>
                {womenCount}
              </span>
            </button>

            <button
              id="gender-filter-men"
              onClick={() => {
                setSelectedGender('men');
                setSelectedCategory('all');
              }}
              className={`px-4 sm:px-6 py-2 text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                selectedGender === 'men'
                  ? 'bg-[#181716] text-[#FAF7F2] shadow-xs'
                  : 'text-[#615748] hover:text-[#181716]'
              }`}
            >
              <span>Men’s Footwear</span>
              <span className={`text-[10px] px-1.5 py-0.2 font-normal rounded-xs ${
                selectedGender === 'men' ? 'bg-[#8A6D3B] text-white' : 'bg-[#DCD3C3] text-[#4A4235]'
              }`}>
                {menCount}
              </span>
            </button>

            <button
              id="gender-filter-girls"
              onClick={() => {
                setSelectedGender('girls');
                setSelectedCategory('all');
              }}
              className={`px-4 sm:px-6 py-2 text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                selectedGender === 'girls'
                  ? 'bg-[#181716] text-[#FAF7F2] shadow-xs'
                  : 'text-[#615748] hover:text-[#181716]'
              }`}
            >
              <span>Girls’ Modern</span>
              <span className={`text-[10px] px-1.5 py-0.2 font-normal rounded-xs ${
                selectedGender === 'girls' ? 'bg-[#8A6D3B] text-white' : 'bg-[#DCD3C3] text-[#4A4235]'
              }`}>
                {girlsCount}
              </span>
            </button>
          </div>
        </div>

        {/* Filters and Controls Bar */}
        <div className="mb-10 space-y-6">
          
          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-2">
            {categories.map((cat) => {
              const count = cat.id === 'all' 
                ? genderFilteredProducts.length 
                : genderFilteredProducts.filter(p => p.category === cat.id).length;

              // Hide category tab if no products match this gender + category
              if (cat.id !== 'all' && count === 0) return null;

              return (
                <button
                  key={cat.id}
                  id={`cat-tab-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-[#181716] text-[#FAF7F2] shadow-xs'
                      : 'bg-[#FAF7F2] text-[#60574A] border border-[#E0D5C3] hover:border-[#8A6D3B] hover:text-[#181716]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] opacity-75 font-normal ${
                    selectedCategory === cat.id ? 'text-[#D4AF37]' : 'text-[#8A6D3B]'
                  }`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sub-bar: Search Indicator, Bestseller Filter & Sort By */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#EBE3D5] text-xs">
            
            {/* Left: Results Count & Active Query Tag */}
            <div className="flex items-center gap-3">
              <span className="text-[#7C7160] uppercase tracking-wider">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'Design' : 'Designs'}
              </span>

              {searchQuery && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#EBE2D3] text-[#181716] rounded-full">
                  <span>Filtered: &ldquo;{searchQuery}&rdquo;</span>
                  {onClearSearch && (
                    <button 
                      onClick={onClearSearch}
                      className="ml-1 text-[#8A6D3B] hover:text-[#181716] font-bold"
                    >
                      &times;
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Right: Quick Toggles and Sort dropdown */}
            <div className="flex items-center gap-4">
              
              {/* Highlight Bestsellers Checkbox */}
              <button
                id="toggle-bestsellers-btn"
                onClick={() => setOnlyBestsellers(!onlyBestsellers)}
                className="flex items-center gap-1.5 text-[#544C3F] hover:text-[#181716] transition-colors cursor-pointer"
              >
                <div className={`w-3.5 h-3.5 border rounded-xs flex items-center justify-center transition-colors ${
                  onlyBestsellers ? 'bg-[#8A6D3B] border-[#8A6D3B] text-white' : 'border-[#B8AB96]'
                }`}>
                  {onlyBestsellers && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className="uppercase tracking-wider text-[11px]">Iconic Only</span>
              </button>

              <div className="h-4 w-[1px] bg-[#D5C7B0]" />

              {/* Sort By Select */}
              <div className="flex items-center gap-1.5">
                <SlidersHorizontal className="w-3 h-3 text-[#7C7160]" />
                <span className="text-[#7C7160] uppercase tracking-wider text-[11px]">Sort:</span>
                <select
                  id="catalog-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#FAF7F2] border border-[#D5C7B0] text-[#181716] px-2 py-1 uppercase tracking-wider text-[11px] focus:outline-hidden focus:border-[#8A6D3B] cursor-pointer"
                >
                  <option value="featured">Curator&rsquo;s Choice</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated Stride</option>
                </select>
              </div>

            </div>

          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div 
            id="products-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#F5EDE1] border border-dashed border-[#D5C7B0] p-8 space-y-4">
            <p className="text-lg font-serif text-[#181716]">No silhouettes match your current criteria.</p>
            <p className="text-xs text-[#7C7160] uppercase tracking-wider">Try adjusting your category selection or resetting your search filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setOnlyBestsellers(false);
                if (onClearSearch) onClearSearch();
              }}
              className="px-6 py-2.5 bg-[#181716] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8A6D3B] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
