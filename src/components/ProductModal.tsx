import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Heart, Star, Check, Truck, RotateCcw, Ruler, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product, ProductColor } from '../types';

interface ProductModalProps {
  product: Product | null;
  currency: string;
  isWishlisted: boolean;
  onClose: () => void;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, color: ProductColor, size: number, quantity: number) => void;
  onOpenConcierge: (shoeName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  currency,
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart,
  onOpenConcierge,
}) => {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState<0 | 1>(0);
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Sync default size when product opens
  React.useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[2] || product.sizes[0]);
      setSelectedColorIdx(0);
      setSelectedImageIdx(0);
      setQuantity(1);
      setShowSizeGuide(false);
    }
  }, [product]);

  if (!product) return null;

  const activeColor = product.colors[selectedColorIdx] || product.colors[0];
  const displayImage = selectedImageIdx === 0 ? activeColor.image : activeColor.secondaryImage;
  const currentSize = selectedSize || product.sizes[0];

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

  const handleAdd = () => {
    onAddToCart(product, activeColor, currentSize, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <div 
      id="product-details-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 md:p-8"
      onClick={onClose}
    >
      <motion.div 
        id="product-details-modal-content"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        className="relative w-full max-w-5xl bg-[#FAF9F6] border border-[#E6E1D8] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Modal Button */}
        <button
          id="close-product-modal-btn"
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/90 hover:bg-[#141312] hover:text-[#FAF9F6] text-[#141312] transition-colors border border-[#DDD5C7] cursor-pointer shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto flex-grow grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Multi-Angle Imagery & Thumbnails */}
          <div className="lg:col-span-7 bg-[#F4F1EA] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8E4DC]">
            
            {/* Main Stage Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#ECE7DC] border border-[#DDD5C7] shadow-inner flex items-center justify-center group">
              <motion.img
                key={displayImage}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={displayImage}
                alt={`${product.name} detail`}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />

              {/* Tag for Origin */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[#141312] border border-[#DDD5C7] shadow-2xs">
                Handcrafted in Florence &bull; Beechwood Mould
              </div>
            </div>

            {/* Thumbnail Switcher (Angles) */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={() => setSelectedImageIdx(0)}
                className={`relative w-16 h-20 border overflow-hidden transition-all cursor-pointer ${
                  selectedImageIdx === 0 ? 'border-[#8A6D3B] ring-2 ring-[#8A6D3B]/40' : 'border-[#DDD5C7] opacity-70 hover:opacity-100'
                }`}
              >
                <img src={activeColor.image} alt="Angle 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[8px] text-center uppercase tracking-widest py-0.5">Profile</span>
              </button>

              <button
                onClick={() => setSelectedImageIdx(1)}
                className={`relative w-16 h-20 border overflow-hidden transition-all cursor-pointer ${
                  selectedImageIdx === 1 ? 'border-[#8A6D3B] ring-2 ring-[#8A6D3B]/40' : 'border-[#DDD5C7] opacity-70 hover:opacity-100'
                }`}
              >
                <img src={activeColor.secondaryImage} alt="Angle 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[8px] text-center uppercase tracking-widest py-0.5">Vamp View</span>
              </button>
            </div>

          </div>

          {/* Right Column: Specifications, Fit Advice & Purchase Actions */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            {/* Header / Category / Price */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.22em] text-[#8A6D3B] font-semibold">
                  {product.categoryLabel}
                </span>

                <div className="flex items-center gap-1 text-xs text-[#141312]">
                  <Star className="w-3.5 h-3.5 fill-[#8A6D3B] text-[#8A6D3B]" />
                  <span className="font-semibold">{product.rating.toFixed(1)}</span>
                  <span className="text-[#877D6D]">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif text-[#141312] font-normal leading-tight">
                {product.name}
              </h2>
              <p className="text-xs text-[#6B6254] uppercase tracking-wider font-medium">
                {product.subName}
              </p>

              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-2xl font-serif text-[#141312] font-medium">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#948977] line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-[10px] uppercase tracking-widest text-[#6B6254] bg-[#EFECE5] px-2 py-0.5">
                  Taxes Included
                </span>
              </div>
            </div>

            {/* Colorway Selection */}
            <div className="space-y-2 pt-2 border-t border-[#E8E4DC]">
              <div className="flex justify-between items-center text-xs">
                <span className="uppercase tracking-wider text-[#5A5245] font-medium">
                  Colorway:
                </span>
                <span className="text-[#141312] font-serif font-medium text-sm">
                  {activeColor.name}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    id={`modal-color-${color.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      setSelectedColorIdx(idx);
                      setSelectedImageIdx(0);
                    }}
                    className={`flex items-center gap-2 p-1.5 border transition-all cursor-pointer ${
                      selectedColorIdx === idx 
                        ? 'border-[#8A6D3B] bg-[#EFE8DC]' 
                        : 'border-[#DDD5C7] hover:border-[#8A6D3B]'
                    }`}
                  >
                    <span 
                      className="w-5 h-5 rounded-full border border-black/10 inline-block shadow-2xs" 
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs text-[#141312] pr-1 hidden sm:inline">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector & Size Guide */}
            <div className="space-y-2 pt-2 border-t border-[#E8E4DC]">
              <div className="flex justify-between items-center text-xs">
                <span className="uppercase tracking-wider text-[#5A5245] font-medium">
                  Size (EU Standard):
                </span>
                <button
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="inline-flex items-center gap-1 text-[#8A6D3B] hover:text-[#141312] underline underline-offset-4 cursor-pointer text-[11px] tracking-wider font-medium"
                >
                  <Ruler className="w-3 h-3" />
                  <span>Size & Conversion Chart</span>
                </button>
              </div>

              {/* Size grid */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    id={`size-pill-${sz}`}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-center text-xs font-medium border transition-all cursor-pointer ${
                      currentSize === sz
                        ? 'bg-[#141312] text-[#FAF9F6] border-[#141312]'
                        : 'bg-white text-[#4A4339] border-[#DDD5C7] hover:border-[#8A6D3B] hover:text-[#141312]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>

              {/* Fit note */}
              <p className="text-[11px] text-[#7A7061] italic pt-1">
                Fit Recommendation: {product.fitAdvice}
              </p>

              {/* Size Guide Drawer Modal */}
              {showSizeGuide && (
                <div className="bg-[#F4F1EA] p-3.5 border border-[#DDD5C7] text-xs space-y-2 mt-2 animate-in fade-in">
                  <div className="flex justify-between items-center font-semibold text-[#141312]">
                    <span>
                      {product.gender === 'men' 
                        ? 'Men’s Sartorial Size Conversion' 
                        : product.gender === 'girls' 
                        ? 'Girls’ Junior & Youth Size Conversion' 
                        : 'Standard Women’s Footwear Conversion'}
                    </span>
                    <button onClick={() => setShowSizeGuide(false)} className="text-sm font-bold cursor-pointer">&times;</button>
                  </div>
                  <table className="w-full text-center text-[10px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#DDD5C7] text-[#73695A]">
                        <th className="py-1">EU</th>
                        <th>{product.gender === 'men' ? 'US Men' : product.gender === 'girls' ? 'US Girls/Youth' : 'US Women'}</th>
                        <th>UK</th>
                        <th>Foot Length</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E1D8]">
                      {product.gender === 'men' ? (
                        <>
                          <tr><td className="py-1 font-bold">39</td><td>6.5</td><td>6.0</td><td>25.1 cm</td></tr>
                          <tr><td className="py-1 font-bold">40</td><td>7.5</td><td>6.5</td><td>25.8 cm</td></tr>
                          <tr><td className="py-1 font-bold">41</td><td>8.5</td><td>7.5</td><td>26.5 cm</td></tr>
                          <tr><td className="py-1 font-bold">42</td><td>9.0 - 9.5</td><td>8.0</td><td>27.2 cm</td></tr>
                          <tr><td className="py-1 font-bold">43</td><td>10.0</td><td>9.0</td><td>28.0 cm</td></tr>
                          <tr><td className="py-1 font-bold">44</td><td>11.0</td><td>10.0</td><td>28.7 cm</td></tr>
                          <tr><td className="py-1 font-bold">45</td><td>12.0</td><td>11.0</td><td>29.4 cm</td></tr>
                          <tr><td className="py-1 font-bold">46</td><td>13.0</td><td>12.0</td><td>30.1 cm</td></tr>
                        </>
                      ) : product.gender === 'girls' ? (
                        <>
                          <tr><td className="py-1 font-bold">28</td><td>10.5 Kids</td><td>10.0</td><td>17.5 cm</td></tr>
                          <tr><td className="py-1 font-bold">29</td><td>11.5 Kids</td><td>11.0</td><td>18.2 cm</td></tr>
                          <tr><td className="py-1 font-bold">30</td><td>12.0 Kids</td><td>11.5</td><td>18.8 cm</td></tr>
                          <tr><td className="py-1 font-bold">31</td><td>13.0 Kids</td><td>12.5</td><td>19.5 cm</td></tr>
                          <tr><td className="py-1 font-bold">32</td><td>1.0 Youth</td><td>13.5</td><td>20.2 cm</td></tr>
                          <tr><td className="py-1 font-bold">33</td><td>1.5 - 2 Y</td><td>1.0</td><td>20.8 cm</td></tr>
                          <tr><td className="py-1 font-bold">34</td><td>2.5 - 3 Y</td><td>2.0</td><td>21.5 cm</td></tr>
                          <tr><td className="py-1 font-bold">35</td><td>3.5 - 4 Y</td><td>3.0</td><td>22.2 cm</td></tr>
                          <tr><td className="py-1 font-bold">36</td><td>4.5 - 5 Y</td><td>3.5</td><td>22.8 cm</td></tr>
                        </>
                      ) : (
                        <>
                          <tr><td className="py-1 font-bold">35</td><td>5.0</td><td>2.5</td><td>22.3 cm</td></tr>
                          <tr><td className="py-1 font-bold">36</td><td>5.5 - 6</td><td>3.5</td><td>23.0 cm</td></tr>
                          <tr><td className="py-1 font-bold">37</td><td>6.5</td><td>4.5</td><td>23.7 cm</td></tr>
                          <tr><td className="py-1 font-bold">38</td><td>7.5</td><td>5.5</td><td>24.4 cm</td></tr>
                          <tr><td className="py-1 font-bold">39</td><td>8.5</td><td>6.5</td><td>25.1 cm</td></tr>
                          <tr><td className="py-1 font-bold">40</td><td>9.5</td><td>7.5</td><td>25.8 cm</td></tr>
                          <tr><td className="py-1 font-bold">41</td><td>10.5</td><td>8.5</td><td>26.5 cm</td></tr>
                          <tr><td className="py-1 font-bold">42</td><td>11.5</td><td>9.5</td><td>27.2 cm</td></tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-3 pt-2 border-t border-[#E8E4DC]">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#DDD5C7] bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm hover:bg-[#F4F1EA] transition-colors cursor-pointer text-[#141312]"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-semibold text-[#141312]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm hover:bg-[#F4F1EA] transition-colors cursor-pointer text-[#141312]"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  id="modal-add-to-bag-btn"
                  onClick={handleAdd}
                  className={`flex-1 py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                    addedAnimation 
                      ? 'bg-[#23663C] text-white' 
                      : 'bg-[#141312] text-[#FAF9F6] hover:bg-[#8A6D3B]'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 stroke-[2.5]" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <span>Add to Bag &bull; {formatPrice(product.price * quantity)}</span>
                  )}
                </button>

                {/* Wishlist toggle */}
                <button
                  id="modal-wishlist-toggle-btn"
                  onClick={() => onToggleWishlist(product)}
                  aria-label="Wishlist"
                  className={`p-3.5 border border-[#DDD5C7] transition-colors cursor-pointer ${
                    isWishlisted ? 'bg-[#141312] text-[#D4AF37]' : 'bg-white text-[#141312] hover:bg-[#F4F1EA]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Private Concierge inquiry link */}
              <div className="text-center">
                <button
                  onClick={() => {
                    onClose();
                    onOpenConcierge(product.name);
                  }}
                  className="text-xs tracking-wider text-[#8A6D3B] hover:text-[#141312] uppercase inline-flex items-center gap-1.5 cursor-pointer font-medium"
                >
                  <span>Request Custom Fit via VIP Concierge DM</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Accordion / Details & Craftsmanship List */}
            <div className="space-y-3 pt-3 border-t border-[#E8E4DC] text-xs text-[#524B40]">
              <div>
                <h4 className="font-semibold uppercase tracking-wider text-[#141312] mb-1">
                  Craftsmanship & Architecture
                </h4>
                <p className="font-light leading-relaxed mb-2 text-[#635B4E]">
                  {product.description}
                </p>
                <ul className="space-y-1 list-disc list-inside text-[11px] text-[#635B4E]">
                  {product.details.map((det, i) => (
                    <li key={i}>{det}</li>
                  ))}
                </ul>
              </div>

              {/* Luxury Guarantee Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E8E4DC] text-[11px]">
                <div className="flex items-center gap-2 text-[#706657]">
                  <Truck className="w-3.5 h-3.5 text-[#8A6D3B]" />
                  <span>Complimentary Express Courier</span>
                </div>
                <div className="flex items-center gap-2 text-[#706657]">
                  <RotateCcw className="w-3.5 h-3.5 text-[#8A6D3B]" />
                  <span>30-Day Atelier Exchanges</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
};

