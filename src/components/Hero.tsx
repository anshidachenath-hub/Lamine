import React from 'react';
import { ArrowDown, Sparkles, ShieldCheck, Feather, Award } from 'lucide-react';
import { Product } from '../types';

interface HeroProps {
  featuredProduct: Product;
  onSelectProduct: (product: Product) => void;
  onExploreClick: () => void;
  onConciergeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  featuredProduct,
  onSelectProduct,
  onExploreClick,
  onConciergeClick,
}) => {
  return (
    <section 
      id="hero-section"
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6EFE7] to-[#FAF7F2]"
    >
      {/* Decorative Subtle Background Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#EBDDC8]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#DFD3BF]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative Column */}
          <div className="lg:col-span-6 space-y-8 text-left z-10">
            
            {/* Seasonal Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D5C7B0] bg-[#FAF7F2]/80 backdrop-blur-xs text-[11px] uppercase tracking-[0.25em] font-medium text-[#7C6E59]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89758]" />
              <span>Haute Chausserie &bull; Edition 2026</span>
            </div>

            {/* Core Tagline & Display Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#181716] leading-[1.12] tracking-tight">
                Walk in Style. <br />
                <span className="italic font-normal text-[#8A6D3B]">
                  Walk with Confidence.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#5E564B] font-light leading-relaxed max-w-xl">
                Lamine brings together the quiet discipline of classical Florentine wood-lasted cordwaining with contemporary architectural lines. Crafted to honor the grace of your stride.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-explore-collection-btn"
                onClick={onExploreClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#181716] text-[#FAF7F2] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#8A6D3B] transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Explore The Collection</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-concierge-btn"
                onClick={onConciergeClick}
                className="inline-flex items-center justify-center px-8 py-4 border border-[#4A433A]/40 text-[#2C2722] text-xs uppercase tracking-[0.22em] font-medium hover:border-[#181716] hover:bg-[#FAF7F2] transition-all duration-300 cursor-pointer"
              >
                Private Concierge &bull; DM
              </button>
            </div>

            {/* Hallmarks of Craftsmanship Strip */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E8DFC8]">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#8A6D3B]">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-serif font-semibold tracking-wider text-[#181716]">48 Hours</span>
                </div>
                <p className="text-[11px] text-[#6B6357] uppercase tracking-wider font-medium">Hand-Lasted Shape</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#8A6D3B]">
                  <Feather className="w-4 h-4" />
                  <span className="text-xs font-serif font-semibold tracking-wider text-[#181716]">Italian Nappa</span>
                </div>
                <p className="text-[11px] text-[#6B6357] uppercase tracking-wider font-medium">100% Traceable</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#8A6D3B]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-serif font-semibold tracking-wider text-[#181716]">Anatomic</span>
                </div>
                <p className="text-[11px] text-[#6B6357] uppercase tracking-wider font-medium">Dual Cushion Arch</p>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Showcase Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Editorial Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#EFE8DC] border border-[#E3D8C6] shadow-2xl">
                <img
                  src={featuredProduct.colors[0].image}
                  alt="Lamine Luxury Footwear Showcase"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Hallmark */}
                <div className="absolute top-4 left-4 bg-[#FAF7F2]/90 backdrop-blur-md px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#181716] border border-[#E0D4C0] shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#B89758]" />
                  <span>Florence Atelier Signature</span>
                </div>

                {/* Floating Interactive Product Card */}
                <div 
                  id="hero-featured-product-card"
                  onClick={() => onSelectProduct(featuredProduct)}
                  className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md p-4 border border-[#E8DFC8] shadow-lg cursor-pointer hover:border-[#8A6D3B] transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A6D3B] font-medium">
                        Iconic Silhouette
                      </p>
                      <h2 className="text-base font-serif text-[#181716] font-semibold group-hover:text-[#8A6D3B] transition-colors">
                        {featuredProduct.name}
                      </h2>
                      <p className="text-xs text-[#6B6357] font-light">
                        {featuredProduct.subName} &bull; ${featuredProduct.price} USD
                      </p>
                    </div>

                    <span className="text-[11px] uppercase tracking-widest text-[#181716] underline underline-offset-4 font-medium group-hover:text-[#8A6D3B]">
                      Inspect &rarr;
                    </span>
                  </div>
                </div>

              </div>

              {/* Decorative Background Offset Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C5A880]/50 -z-10 hidden sm:block pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
