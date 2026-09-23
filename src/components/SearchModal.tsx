import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onSearchFilterApply: (query: string) => void;
  currency: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onSearchFilterApply,
  currency,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const quickPills = [
    'Girls Modern',
    'Mary Jane',
    'Chunky Loafer',
    'Wholecut Oxford',
    'Double Monk',
    'Belgian Loafer',
    'Driving Shoe',
    'Chelsea Boot',
    'Heels',
    'Sandals',
    'Trainer'
  ];

  const matchedProducts = searchTerm.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.subName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (p.gender && p.gender.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (searchTerm.toLowerCase().includes('girl') && p.gender === 'girls') ||
          p.materials.some((m) => m.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : [];

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

  const handleApplyFullSearch = () => {
    if (searchTerm.trim()) {
      onSearchFilterApply(searchTerm.trim());
      onClose();
      const collectionEl = document.getElementById('collection');
      if (collectionEl) {
        collectionEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div 
        id="search-modal-container"
        className="w-full max-w-2xl bg-[#FAF7F2] border border-[#D5C7B0] shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in slide-in-from-top-4 duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-4 right-4 p-2 text-[#635A4D] hover:text-[#181716] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Search Header and Input */}
        <div className="space-y-3">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#8A6D3B] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            <span>Salon Catalog Search</span>
          </span>

          <div className="relative flex items-center border-b-2 border-[#181716] pb-2">
            <Search className="w-5 h-5 text-[#8A6D3B] mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleApplyFullSearch()}
              placeholder="Search by silhouette, heel height, or leather..."
              className="w-full bg-transparent text-base sm:text-lg font-serif text-[#181716] placeholder-[#9E9484] focus:outline-hidden"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="text-xs text-[#73695A] hover:text-[#181716] ml-2"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Quick Suggestions Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[11px] text-[#73695A] uppercase tracking-wider">Suggested:</span>
          {quickPills.map((pill) => (
            <button
              key={pill}
              onClick={() => setSearchTerm(pill)}
              className="px-2.5 py-1 bg-[#F3ECE1] border border-[#DCD0BE] hover:border-[#8A6D3B] text-[#544C3E] text-[11px] uppercase tracking-wider cursor-pointer transition-colors"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Results Preview */}
        {searchTerm.trim() && (
          <div className="space-y-3 pt-2 border-t border-[#E8DFC8] max-h-72 overflow-y-auto">
            <div className="flex justify-between items-center text-xs text-[#73695A]">
              <span className="uppercase tracking-wider">
                Matches ({matchedProducts.length})
              </span>
              {matchedProducts.length > 0 && (
                <button
                  onClick={handleApplyFullSearch}
                  className="text-[#8A6D3B] hover:text-[#181716] underline underline-offset-4 cursor-pointer"
                >
                  View All in Grid &rarr;
                </button>
              )}
            </div>

            {matchedProducts.length === 0 ? (
              <p className="text-xs text-[#73695A] py-6 text-center italic">
                No footwear matched &ldquo;{searchTerm}&rdquo;. Try another term like &ldquo;heels&rdquo; or &ldquo;loafer&rdquo;.
              </p>
            ) : (
              <div className="space-y-2">
                {matchedProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 hover:bg-[#F3ECE1] border border-transparent hover:border-[#D5C7B0] transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-14 bg-[#E8DFC8] overflow-hidden">
                        <img src={p.colors[0].image} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <h5 className="font-serif text-sm text-[#181716] group-hover:text-[#8A6D3B] transition-colors">
                          {p.name}
                        </h5>
                        <p className="text-[11px] text-[#73695A]">{p.categoryLabel} &bull; {p.subName}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-[#181716]">{formatPrice(p.price)}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8A6D3B] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
