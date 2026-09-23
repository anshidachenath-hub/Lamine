import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Heart, ShoppingBag, Eye, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistedProducts: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onMoveToBag: (product: Product) => void;
  currency: string;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistedProducts,
  onRemoveFromWishlist,
  onQuickView,
  onMoveToBag,
  currency,
}) => {
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            id="wishlist-drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md bg-[#FAF9F6] h-full shadow-2xl flex flex-col justify-between border-l border-[#E6E1D8] z-10"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#E8E4DC] flex items-center justify-between bg-[#F4F1EA]">
              <div className="flex items-center gap-2.5">
                <Heart className="w-4 h-4 text-[#8A6D3B] fill-current" />
                <h3 className="font-serif text-lg text-[#141312] tracking-wide font-medium">
                  Saved Wishlist ({wishlistedProducts.length})
                </h3>
              </div>
              <button 
                onClick={onClose}
                aria-label="Close wishlist"
                className="p-1.5 text-[#5A5245] hover:text-[#141312] transition-colors cursor-pointer rounded-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto p-5 space-y-3.5">
              {wishlistedProducts.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F3EFE8] flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-[#A89C8C]" />
                  </div>
                  <p className="font-serif text-xl text-[#141312]">No Saved Silhouettes</p>
                  <p className="text-xs text-[#7A7061] max-w-xs mx-auto">
                    Curate your personal collection of Florentine favorites for effortless review and consideration.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-[#141312] text-[#FAF9F6] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8A6D3B] transition-colors cursor-pointer"
                  >
                    Explore Footwear
                  </button>
                </div>
              ) : (
                <AnimatePresence>
                  {wishlistedProducts.map((p) => (
                    <motion.div 
                      key={p.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex gap-4 p-3 bg-white border border-[#E8E4DC] shadow-xs relative"
                    >
                      <div className="w-20 h-24 bg-[#F2EDE4] shrink-0 border border-[#E0D8CB] overflow-hidden">
                        <img
                          src={p.colors[0].image}
                          alt={p.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="flex-grow space-y-2 text-xs">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-serif font-medium text-sm text-[#141312]">{p.name}</h4>
                            <p className="text-[11px] text-[#73695A]">{p.categoryLabel} &bull; {formatPrice(p.price)}</p>
                          </div>
                          <button
                            onClick={() => onRemoveFromWishlist(p)}
                            className="text-[#A19586] hover:text-[#B2382D] p-1 cursor-pointer transition-colors"
                            title="Remove from favorites"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                          <button
                            onClick={() => {
                              onClose();
                              onQuickView(p);
                            }}
                            className="flex-1 py-1.5 px-2 text-[10px] uppercase tracking-wider font-medium border border-[#DDD5C7] hover:bg-[#F4F1EA] transition-colors flex items-center justify-center gap-1 cursor-pointer text-[#141312]"
                          >
                            <Eye className="w-3 h-3" />
                            <span>Inspect</span>
                          </button>

                          <button
                            onClick={() => onMoveToBag(p)}
                            className="flex-1 py-1.5 px-2 text-[10px] uppercase tracking-wider font-medium bg-[#141312] text-[#FAF9F6] hover:bg-[#8A6D3B] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <ShoppingBag className="w-3 h-3" />
                            <span>+ Bag</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {wishlistedProducts.length > 0 && (
              <div className="p-4 border-t border-[#E8E4DC] bg-[#F4F1EA] text-center">
                <p className="text-[11px] text-[#73695A]">
                  Artisanal stock and sizing availability reserved for active clients.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

