import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Sparkles, ChevronDown } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  currency: string;
  onSelectCurrency: (c: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  currency,
  onSelectCurrency,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currencies = ['USD ($)', 'EUR (€)', 'GBP (£)'];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div 
        id="announcement-bar"
        className="bg-[#181716] text-[#EFE7DA] text-xs py-2 px-4 text-center tracking-[0.18em] uppercase font-medium flex items-center justify-center gap-2 border-b border-[#2C2926]"
      >
        <Sparkles className="w-3 h-3 text-[#D4AF37] animate-pulse" />
        <span>Complimentary Global Express Courier Over $250 &bull; Handcrafted in Tuscany</span>
        <Sparkles className="w-3 h-3 text-[#D4AF37] animate-pulse hidden sm:inline" />
      </div>

      {/* Main Navigation Bar */}
      <nav 
        id="main-navbar"
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFC8]' 
            : 'bg-[#FAF7F2]/80 backdrop-blur-xs border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Left Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.18em] uppercase font-medium text-[#4A453E]">
            <button 
              id="nav-collection"
              onClick={() => scrollToSection('collection')} 
              className="hover:text-[#181716] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B89758] hover:after:w-full after:transition-all cursor-pointer"
            >
              Collection
            </button>
            <button 
              id="nav-about"
              onClick={() => scrollToSection('about')} 
              className="hover:text-[#181716] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B89758] hover:after:w-full after:transition-all cursor-pointer"
            >
              The Atelier
            </button>
            <button 
              id="nav-why-lamine"
              onClick={() => scrollToSection('why-lamine')} 
              className="hover:text-[#181716] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B89758] hover:after:w-full after:transition-all cursor-pointer"
            >
              Why Lamine
            </button>
            <button 
              id="nav-reviews"
              onClick={() => scrollToSection('reviews')} 
              className="hover:text-[#181716] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B89758] hover:after:w-full after:transition-all cursor-pointer"
            >
              Reviews
            </button>
          </div>

          {/* Center Brand Logo */}
          <div className="flex-1 lg:flex-initial text-left lg:text-center">
            <a 
              id="brand-logo-link"
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-block group text-center"
            >
              <div className="flex items-center justify-start lg:justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89758]" />
                <span className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-[#181716] font-semibold uppercase group-hover:text-[#8C6D37] transition-colors">
                  LAMINE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89758]" />
              </div>
              <p className="text-[9px] tracking-[0.35em] text-[#7A7265] uppercase font-sans mt-0.5">
                Haute Chausserie &bull; Paris
              </p>
            </a>
          </div>

          {/* Right Action Icons (Search, Currency, Wishlist, Bag, Mobile Menu) */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Currency selector */}
            <div className="relative hidden md:block">
              <button
                id="currency-selector-btn"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center text-xs tracking-wider text-[#5A5348] hover:text-[#181716] transition-colors gap-1 py-1 cursor-pointer"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-[#7A7265]" />
              </button>

              {currencyDropdownOpen && (
                <div 
                  id="currency-dropdown-menu"
                  className="absolute right-0 mt-2 w-28 bg-[#FAF7F2] border border-[#E8DFC8] rounded shadow-lg py-1 z-50 text-xs"
                >
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        onSelectCurrency(curr.split(' ')[0]);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 hover:bg-[#EFE8DF] transition-colors ${
                        currency === curr.split(' ')[0] ? 'font-semibold text-[#181716]' : 'text-[#60594E]'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              aria-label="Search collection"
              className="p-1.5 text-[#38332C] hover:text-[#B89758] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              id="header-wishlist-btn"
              onClick={onOpenWishlist}
              aria-label="View wishlist"
              className="p-1.5 text-[#38332C] hover:text-[#B89758] transition-colors relative cursor-pointer"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlistCount > 0 && (
                <span 
                  id="wishlist-badge"
                  className="absolute -top-1 -right-1 bg-[#181716] text-[#FAF7F2] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium border border-[#D4AF37]"
                >
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Button */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              aria-label="View shopping bag"
              className="flex items-center gap-2 p-1.5 text-[#38332C] hover:text-[#B89758] transition-colors relative cursor-pointer"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span 
                    id="cart-badge"
                    className="absolute -top-1 -right-1.5 bg-[#B89758] text-[#FAF7F2] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs"
                  >
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs tracking-wider font-medium text-[#38332C]">
                Bag {cartCount > 0 ? `(${cartCount})` : ''}
              </span>
            </button>

            {/* Concierge DM direct button (Desktop) */}
            <button
              id="header-concierge-btn"
              onClick={() => scrollToSection('contact')}
              className="hidden xl:inline-flex items-center justify-center px-4 py-2 border border-[#181716] text-xs uppercase tracking-[0.18em] font-medium text-[#181716] hover:bg-[#181716] hover:text-[#FAF7F2] transition-all duration-300 cursor-pointer"
            >
              VIP Concierge
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-1.5 text-[#181716] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-drawer"
            className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFC8] px-6 py-8 space-y-6 animate-in slide-in-from-top duration-300"
          >
            <div className="flex flex-col space-y-4 text-sm tracking-[0.2em] uppercase font-medium text-[#2C2723]">
              <button 
                onClick={() => scrollToSection('collection')}
                className="text-left py-2 border-b border-[#EFE8DF] flex justify-between items-center"
              >
                <span>The Footwear Collection</span>
                <span className="text-[#B89758] text-xs">01</span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left py-2 border-b border-[#EFE8DF] flex justify-between items-center"
              >
                <span>The Atelier & Heritage</span>
                <span className="text-[#B89758] text-xs">02</span>
              </button>
              <button 
                onClick={() => scrollToSection('why-lamine')}
                className="text-left py-2 border-b border-[#EFE8DF] flex justify-between items-center"
              >
                <span>Why Lamine & Craft</span>
                <span className="text-[#B89758] text-xs">03</span>
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-left py-2 border-b border-[#EFE8DF] flex justify-between items-center"
              >
                <span>Client Voices & Press</span>
                <span className="text-[#B89758] text-xs">04</span>
              </button>
              <button 
                onClick={() => scrollToSection('editorial')}
                className="text-left py-2 border-b border-[#EFE8DF] flex justify-between items-center"
              >
                <span>#WalkInLamine Gallery</span>
                <span className="text-[#B89758] text-xs">05</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 border-b border-[#EFE8DF] flex justify-between items-center text-[#99773E]"
              >
                <span>VIP Concierge & DM</span>
                <span className="text-[#B89758] text-xs">06</span>
              </button>
            </div>

            <div className="pt-4 border-t border-[#E8DFC8] flex items-center justify-between text-xs text-[#6B6357]">
              <span>Currency:</span>
              <div className="flex gap-2">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => onSelectCurrency(curr.split(' ')[0])}
                    className={`px-2.5 py-1 border text-[11px] ${
                      currency === curr.split(' ')[0]
                        ? 'border-[#181716] bg-[#181716] text-[#FAF7F2]'
                        : 'border-[#D8CEBE] text-[#4A453E]'
                    }`}
                  >
                    {curr.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
