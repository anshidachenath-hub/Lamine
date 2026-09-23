import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  currency: string;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onQuickAdd: (product: Product, selectedColorIdx: number, size: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onQuickAdd,
}) => {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showSizeQuickSelect, setShowSizeQuickSelect] = useState(false);

  const activeColor = product.colors[selectedColorIdx] || product.colors[0];

  const formatPrice = (price: number) => {
    switch (currency) {
      case 'EUR':
        return `€${Math.round(price * 0.92)}`;
      case 'GBP':
        return `£${Math.round(price * 0.79)}`;
      default:
        return `$${price}`;
    }
  };

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group relative flex flex-col bg-white border border-[#E8E4DC] hover:border-[#8A6D3B]/60 transition-all duration-300 shadow-xs hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowSizeQuickSelect(false);
      }}
    >
      {/* Visual Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F4F1EA]">
        
        {/* Main vs Hover Image */}
        <img
          src={isHovered ? activeColor.secondaryImage : activeColor.image}
          alt={`${product.name} in ${activeColor.name}`}
          className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isBestseller && (
            <span className="px-2.5 py-1 bg-[#141312] text-[#FAF9F6] text-[9px] uppercase tracking-[0.2em] font-semibold shadow-xs">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-1 bg-[#8A6D3B] text-white text-[9px] uppercase tracking-[0.2em] font-semibold flex items-center gap-1 shadow-xs">
              <Sparkles className="w-2.5 h-2.5" />
              New Arrival
            </span>
          )}
          {product.gender && (
            <span className="px-2 py-0.5 bg-white/90 backdrop-blur-xs text-[#141312] text-[8px] uppercase tracking-[0.2em] font-bold border border-[#DDD5C7]">
              {product.gender === 'men' ? "Men's" : product.gender === 'girls' ? "Girls' Modern" : "Women's"}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-20 cursor-pointer shadow-xs ${
            isWishlisted 
              ? 'bg-[#141312] text-[#D4AF37] scale-110' 
              : 'bg-white/85 text-[#141312] hover:bg-white hover:text-[#8A6D3B]'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-[#D4AF37]' : ''}`} />
        </button>

        {/* Hover Quick Action Drawer */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#141312]/85 via-[#141312]/45 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-2 z-20">
          
          {/* Quick size selection flyout */}
          {showSizeQuickSelect ? (
            <div className="bg-[#FAF9F6] p-2.5 rounded-xs shadow-xl border border-[#DDD5C7] animate-in fade-in">
              <div className="flex justify-between items-center mb-1.5 px-0.5">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-[#5A5246]">
                  Select EU Size:
                </p>
                <button 
                  onClick={() => setShowSizeQuickSelect(false)}
                  className="text-xs text-[#8A6D3B] hover:text-[#141312] cursor-pointer"
                >
                  &times;
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => {
                      onQuickAdd(product, selectedColorIdx, sz);
                      setShowSizeQuickSelect(false);
                    }}
                    className="py-1 text-xs font-medium border border-[#DDD5C7] hover:bg-[#141312] hover:text-[#FAF9F6] hover:border-[#141312] transition-colors cursor-pointer bg-white"
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <button
                id={`quick-view-btn-${product.id}`}
                onClick={() => onQuickView(product)}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white text-[#141312] text-[10px] uppercase tracking-[0.16em] font-medium hover:bg-[#F4F1EA] transition-colors cursor-pointer shadow-xs"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect</span>
              </button>

              <button
                id={`quick-add-btn-${product.id}`}
                onClick={() => setShowSizeQuickSelect(true)}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#141312] text-[#FAF9F6] text-[10px] uppercase tracking-[0.16em] font-medium hover:bg-[#8A6D3B] transition-colors cursor-pointer shadow-xs"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Shop Now</span>
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Product Information Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3">
        
        <div className="space-y-1.5">
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[11px] tracking-wider text-[#7C6E59] uppercase">
            <span className="font-medium text-[#8A6D3B]">{product.categoryLabel}</span>
            <div className="flex items-center gap-1 text-[#8A6D3B]">
              <Star className="w-3 h-3 fill-current" />
              <span className="font-semibold text-[#141312]">{product.rating.toFixed(1)}</span>
              <span className="text-[#8C8375]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-lg font-serif text-[#141312] font-medium tracking-wide hover:text-[#8A6D3B] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#6B6254] font-light line-clamp-1">
            {product.subName}
          </p>
        </div>

        {/* Color Swatches and Price */}
        <div className="pt-2 border-t border-[#E8E4DC] flex items-center justify-between">
          {/* Swatches */}
          <div className="flex items-center space-x-1.5">
            {product.colors.map((c, idx) => (
              <button
                key={c.name}
                onClick={() => setSelectedColorIdx(idx)}
                aria-label={`Select ${c.name}`}
                title={c.name}
                className={`w-4 h-4 rounded-full border transition-all cursor-pointer ${
                  selectedColorIdx === idx 
                    ? 'ring-1 ring-offset-2 ring-[#8A6D3B] scale-110' 
                    : 'border-[#CCC2B2] opacity-80 hover:opacity-100'
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
            <span className="text-[10px] text-[#7C6E59] pl-1 font-light hidden sm:inline">
              {activeColor.name}
            </span>
          </div>

          {/* Price */}
          <div className="text-right">
            <span className="text-sm font-semibold tracking-wide text-[#141312]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="ml-1.5 text-xs text-[#9E9382] line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
