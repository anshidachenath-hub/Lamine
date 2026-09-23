import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Trash2, ArrowRight, ShieldCheck, Sparkles, Check, ShoppingBag, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  currency: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  currency,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const rawSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = discountApplied ? rawSubtotal * 0.10 : 0;
  const freeShippingThreshold = 250;
  const shippingCost = rawSubtotal >= freeShippingThreshold || rawSubtotal === 0 ? 0 : 25;
  const total = rawSubtotal - discountAmount + shippingCost;

  const formatPrice = (amount: number) => {
    switch (currency) {
      case 'EUR':
        return `€${Math.round(amount * 0.92)}`;
      case 'GBP':
        return `£${Math.round(amount * 0.79)}`;
      default:
        return `$${Math.round(amount)}`;
    }
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'LAMINE10') {
      setDiscountApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid privilege code. Try "LAMINE10"');
    }
  };

  const handleSimulatedCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1200);
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
            id="cart-drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md bg-[#FAF9F6] h-full shadow-2xl flex flex-col justify-between border-l border-[#E6E1D8] z-10"
          >
            {/* Top Drawer Header */}
            <div className="p-5 border-b border-[#E8E4DC] flex items-center justify-between bg-[#F4F1EA]">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-4 h-4 text-[#8A6D3B]" />
                <h3 className="font-serif text-lg text-[#141312] tracking-wide font-medium">
                  Shopping Bag ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                </h3>
              </div>
              <button 
                id="close-cart-drawer-btn"
                onClick={onClose}
                aria-label="Close cart"
                className="p-1.5 text-[#5A5245] hover:text-[#141312] transition-colors cursor-pointer rounded-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="bg-[#FAF9F6] p-3.5 border-b border-[#E8E4DC] text-xs space-y-1.5">
              <div className="flex justify-between text-[11px] text-[#5A5245]">
                <span>
                  {rawSubtotal >= freeShippingThreshold ? (
                    <span className="text-[#23663C] font-semibold flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      Unlocked Complimentary Express Courier
                    </span>
                  ) : (
                    <span>Add {formatPrice(freeShippingThreshold - rawSubtotal)} for Complimentary Courier</span>
                  )}
                </span>
                <span className="font-bold text-[#141312]">{Math.min(100, Math.round((rawSubtotal / freeShippingThreshold) * 100))}%</span>
              </div>
              <div className="w-full bg-[#E8E2D8] h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (rawSubtotal / freeShippingThreshold) * 100)}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="bg-[#8A6D3B] h-full" 
                />
              </div>
            </div>

            {/* Cart Item List */}
            <div className="flex-grow overflow-y-auto p-5 space-y-3.5">
              {checkoutComplete ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-14 space-y-4"
                >
                  <div className="w-16 h-16 bg-[#E8F3EB] text-[#24613B] rounded-full flex items-center justify-center mx-auto border border-[#A2D3B0] shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#141312]">Bespoke Order Reserved</h4>
                  <p className="text-xs text-[#635B4E] leading-relaxed max-w-xs mx-auto">
                    Thank you for selecting Lamine. Your reservation #LMN-{Math.floor(10000 + Math.random() * 90000)} has been sent to our Florentine dispatch atelier.
                  </p>
                  <button
                    onClick={() => {
                      setCheckoutComplete(false);
                      onClose();
                    }}
                    className="px-7 py-3 bg-[#141312] text-[#FAF9F6] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8A6D3B] transition-colors cursor-pointer shadow-sm"
                  >
                    Continue Exploring
                  </button>
                </motion.div>
              ) : cartItems.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F3EFE8] flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-8 h-8 text-[#A89C8C]" />
                  </div>
                  <p className="font-serif text-xl text-[#141312]">Your Shopping Bag is Empty</p>
                  <p className="text-xs text-[#7A7061] max-w-xs mx-auto">Discover our handcrafted Florentine silhouettes to elevate your stride.</p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-[#141312] text-[#FAF9F6] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8A6D3B] transition-colors cursor-pointer"
                  >
                    Browse The Collection
                  </button>
                </div>
              ) : (
                <AnimatePresence>
                  {cartItems.map((item, idx) => (
                    <motion.div 
                      key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex gap-4 p-3 bg-white border border-[#E8E4DC] shadow-xs relative"
                    >
                      <div className="w-20 h-24 bg-[#F2EDE4] shrink-0 border border-[#E0D8CB] overflow-hidden">
                        <img
                          src={item.selectedColor.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="flex-grow space-y-1.5 text-xs">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-serif font-medium text-sm text-[#141312]">{item.product.name}</h4>
                            <p className="text-[11px] text-[#73695A]">{item.selectedColor.name} &bull; EU {item.selectedSize}</p>
                          </div>
                          <button
                            onClick={() => onRemoveItem(idx)}
                            className="text-[#A19586] hover:text-[#B2382D] p-1 cursor-pointer transition-colors"
                            title="Remove silhouette"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                          {/* Quantity Selector */}
                          <div className="flex items-center border border-[#DDD5C7] bg-[#FAF9F6]">
                            <button
                              onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                              className="px-2 py-1 text-xs hover:bg-[#EFE8DC] transition-colors cursor-pointer text-[#4A4337]"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 py-1 text-xs font-semibold text-[#141312]">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                              className="px-2 py-1 text-xs hover:bg-[#EFE8DC] transition-colors cursor-pointer text-[#4A4337]"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-medium text-[#141312] text-sm">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer Subtotal & Checkout Section */}
            {cartItems.length > 0 && !checkoutComplete && (
              <div className="p-5 border-t border-[#E8E4DC] bg-[#F4F1EA] space-y-4 text-xs">
                {/* Promo code input */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Privilege Code (try LAMINE10)"
                    className="flex-grow bg-white border border-[#DCD4C6] px-3 py-2 text-xs uppercase focus:outline-hidden focus:border-[#8A6D3B]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#141312] text-[#FAF9F6] text-[11px] uppercase tracking-wider hover:bg-[#8A6D3B] transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>

                {discountApplied && (
                  <p className="text-[11px] text-[#23663C] font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Privilege Applied: 10% Welcome Atelier Courtesy
                  </p>
                )}

                {promoError && (
                  <p className="text-[11px] text-[#B2382D]">{promoError}</p>
                )}

                {/* Calculations Breakdown */}
                <div className="space-y-1.5 pt-2 border-t border-[#E2DBD0] text-[#5A5245]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(rawSubtotal)}</span>
                  </div>

                  {discountApplied && (
                    <div className="flex justify-between text-[#23663C]">
                      <span>Atelier Courtesy (10%)</span>
                      <span>-{formatPrice(discountAmount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Express Courier</span>
                    <span>{shippingCost === 0 ? 'Complimentary' : formatPrice(shippingCost)}</span>
                  </div>

                  <div className="flex justify-between text-sm font-serif font-bold text-[#141312] pt-2 border-t border-[#D5CDBD]">
                    <span>Total Amount</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  id="checkout-cta-btn"
                  onClick={handleSimulatedCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-4 bg-[#141312] text-[#FAF9F6] text-xs uppercase tracking-[0.24em] font-semibold hover:bg-[#8A6D3B] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-70"
                >
                  {isCheckingOut ? (
                    <span>Securing Atelier Dispatch...</span>
                  ) : (
                    <>
                      <span>Proceed to Atelier Checkout</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#73695A]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8A6D3B]" />
                  <span>Encrypted 256-Bit SSL Checkout &bull; 30-Day Atelier Returns</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

