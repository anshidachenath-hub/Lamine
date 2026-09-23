import { useState, useEffect } from 'react';
import { PRODUCTS, REVIEWS } from './data/footwearData';
import { Product, ProductColor, CartItem, Review } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { AboutSection } from './components/AboutSection';
import { WhyLamine } from './components/WhyLamine';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramGallery } from './components/InstagramGallery';
import { ContactDM } from './components/ContactDM';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // State for products and reviews
  const [products] = useState<Product[]>(PRODUCTS);
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);

  // Cart state with persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lamine_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state with persistence
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('lamine_wishlist');
      return saved ? JSON.parse(saved) : ['aurelia-slingback'];
    } catch {
      return ['aurelia-slingback'];
    }
  });

  // UI modal states
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [conciergeInterest, setConciergeInterest] = useState('');

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('lamine_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('lamine_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart operations
  const handleAddToCart = (product: Product, color: ProductColor, size: number, quantity: number = 1) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor.name === color.name &&
          item.selectedSize === size
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      } else {
        return [...prev, { product, selectedColor: color, selectedSize: size, quantity }];
      }
    });

    showToast(`Added ${product.name} (EU ${size}) to your Shopping Bag`);
  };

  const handleQuickAdd = (product: Product, selectedColorIdx: number, size: number) => {
    const color = product.colors[selectedColorIdx] || product.colors[0];
    handleAddToCart(product, color, size, 1);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    setCart((prev) => {
      const next = [...prev];
      next[index].quantity = quantity;
      return next;
    });
  };

  const handleRemoveFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    showToast('Removed silhouette from your Shopping Bag');
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed ${product.name} from Wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved ${product.name} to Wishlist`);
        return [...prev, product.id];
      }
    });
  };

  const handleMoveFromWishlistToBag = (product: Product) => {
    handleAddToCart(product, product.colors[0], product.sizes[1] || product.sizes[0], 1);
  };

  // Navigation helpers
  const scrollToSection = (id: string) => {
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

  const handleOpenConciergeWithProduct = (shoeName: string) => {
    setConciergeInterest(shoeName);
    scrollToSection('contact');
  };

  const handleSelectProductById = (productId: string) => {
    const found = products.find((p) => p.id === productId);
    if (found) {
      setSelectedProduct(found);
    }
  };

  const handleAddReview = (newReview: Review) => {
    setReviewsList((prev) => [newReview, ...prev]);
  };

  const wishlistedProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1815] font-sans selection:bg-[#C5A880]/30 selection:text-[#181716] relative flex flex-col">
      
      {/* Persistent Luxury Toast Alert */}
      {toastMessage && (
        <div 
          id="atelier-toast-notification"
          className="fixed bottom-6 right-6 z-50 bg-[#181716] text-[#FAF7F2] px-5 py-3 border border-[#8A6D3B] shadow-2xl flex items-center gap-3 text-xs tracking-wider animate-in slide-in-from-bottom-5 duration-300"
        >
          <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Navigation Header */}
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        currency={currency}
        onSelectCurrency={setCurrency}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        
        {/* Minimalist Hero Section */}
        <Hero
          featuredProduct={products[0]}
          onSelectProduct={setSelectedProduct}
          onExploreClick={() => scrollToSection('collection')}
          onConciergeClick={() => scrollToSection('contact')}
        />

        {/* Premium Footwear Product Showcase & Catalog */}
        <ProductCatalog
          products={products}
          currency={currency}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={setSelectedProduct}
          onQuickAdd={handleQuickAdd}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
        />

        {/* About Us ("The Lamine Atelier") */}
        <AboutSection />

        {/* Why Lamine (The 4 Pillars & Transparent Standards) */}
        <WhyLamine />

        {/* Customer Reviews & Testimonials */}
        <ReviewsSection 
          reviews={reviewsList}
          onAddReview={handleAddReview}
        />

        {/* Instagram-style Editorial Gallery (#WalkInLamine) */}
        <InstagramGallery
          allProducts={products}
          onSelectProductById={handleSelectProductById}
        />

        {/* Contact & Direct Message (DM) / Concierge & Boutiques */}
        <ContactDM
          initialShoeInterest={conciergeInterest}
        />

      </main>

      {/* Luxury Footer */}
      <Footer
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateSection={scrollToSection}
      />

      {/* Product Details Modal / Drawer */}
      <ProductModal
        product={selectedProduct}
        currency={currency}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onClose={() => setSelectedProduct(null)}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onOpenConcierge={handleOpenConciergeWithProduct}
      />

      {/* Slide-out Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        currency={currency}
      />

      {/* Slide-out Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistedProducts={wishlistedProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onQuickView={setSelectedProduct}
        onMoveToBag={handleMoveFromWishlistToBag}
        currency={currency}
      />

      {/* Catalog Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={setSelectedProduct}
        onSearchFilterApply={(query) => setSearchQuery(query)}
        currency={currency}
      />

    </div>
  );
}
