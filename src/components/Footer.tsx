import React from 'react';
import { ArrowUp, Instagram, Sparkles, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onNavigateSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onNavigateSection }) => {
  return (
    <footer className="bg-[#181716] text-[#EFE7DA] pt-16 pb-12 border-t border-[#2D2925]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#2D2925]">
          
          {/* Col 1 & 2: Brand Essence */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-[#FAF7F2] font-semibold uppercase">
                  LAMINE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              </div>
              <p className="text-[10px] tracking-[0.3em] text-[#A69C8B] uppercase font-light">
                Haute Chausserie &bull; Paris &bull; Florence &bull; Milan
              </p>
            </div>

            <p className="font-serif italic text-lg text-[#D4AF37]">
              &ldquo;Walk in Style. Walk with Confidence.&rdquo;
            </p>

            <p className="text-xs text-[#A69C8B] font-light leading-relaxed max-w-sm">
              Artisanal luxury footwear sculpted from top-tier Tuscan calfskin. Engineered to balance architectural daring with anatomical grace.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#3E3832] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#181716] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#A69C8B] tracking-wider">@lamine.atelier</span>
            </div>
          </div>

          {/* Col 3: Footwear Silhouettes */}
          <div className="space-y-4 text-xs">
            <h4 className="font-serif text-sm tracking-wider uppercase text-[#FAF7F2] font-semibold border-b border-[#2D2925] pb-2">
              The Silhouettes
            </h4>
            <ul className="space-y-2.5 text-[#A69C8B]">
              <li>
                <button onClick={() => onNavigateSection('collection')} className="hover:text-[#D4AF37] transition-colors">
                  Wholecut Oxfords & Brogues
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collection')} className="hover:text-[#D4AF37] transition-colors">
                  Double Monkstraps & Belgian Loafers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collection')} className="hover:text-[#D4AF37] transition-colors">
                  Pebble Driving Moccasins
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collection')} className="hover:text-[#D4AF37] transition-colors">
                  Sculptural Heels & Evening Pumps
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collection')} className="hover:text-[#D4AF37] transition-colors">
                  Strappy Sandals & Pointed Flats
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collection')} className="hover:text-[#D4AF37] transition-colors">
                  Kensington Jodhpur & Chelsea Boots
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: The Maison */}
          <div className="space-y-4 text-xs">
            <h4 className="font-serif text-sm tracking-wider uppercase text-[#FAF7F2] font-semibold border-b border-[#2D2925] pb-2">
              The Maison
            </h4>
            <ul className="space-y-2.5 text-[#A69C8B]">
              <li>
                <button onClick={() => onNavigateSection('about')} className="hover:text-[#D4AF37] transition-colors">
                  The Florence Atelier
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('why-lamine')} className="hover:text-[#D4AF37] transition-colors">
                  Wood-Lasting Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('why-lamine')} className="hover:text-[#D4AF37] transition-colors">
                  Certified Tuscan Tanneries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('reviews')} className="hover:text-[#D4AF37] transition-colors">
                  Client Voices & Press
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('editorial')} className="hover:text-[#D4AF37] transition-colors">
                  #WalkInLamine Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Client Concierge */}
          <div className="space-y-4 text-xs">
            <h4 className="font-serif text-sm tracking-wider uppercase text-[#FAF7F2] font-semibold border-b border-[#2D2925] pb-2">
              Client Concierge
            </h4>
            <ul className="space-y-2.5 text-[#A69C8B]">
              <li>
                <button onClick={() => onNavigateSection('contact')} className="hover:text-[#D4AF37] transition-colors">
                  Private Salon Booking
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('contact')} className="hover:text-[#D4AF37] transition-colors">
                  Instep & Arch Consultation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('contact')} className="hover:text-[#D4AF37] transition-colors">
                  Bespoke Patina Requests
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('contact')} className="hover:text-[#D4AF37] transition-colors">
                  Lifetime Re-Soling Spa
                </button>
              </li>
              <li>
                <span className="text-[#D4AF37] font-semibold">
                  Express Global Courier ($250+)
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Accreditations Strip */}
        <div className="py-8 border-b border-[#2D2925] flex flex-wrap items-center justify-between gap-4 text-xs text-[#A69C8B]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>100% Traceable Italian Leather</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>48-Hour Beechwood Lasted</span>
            </div>
          </div>

          <button
            onClick={onScrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] hover:text-[#FAF7F2] transition-colors cursor-pointer"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#787063] gap-4">
          <p>
            &copy; {new Date().getFullYear()} Lamine Haute Chausserie S.A. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <span className="hover:text-[#A69C8B] cursor-pointer">Privacy Charter</span>
            <span className="hover:text-[#A69C8B] cursor-pointer">Atelier Terms</span>
            <span className="hover:text-[#A69C8B] cursor-pointer">Certificate of Authenticity</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
