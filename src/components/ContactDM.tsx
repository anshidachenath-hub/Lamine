import React, { useState } from 'react';
import { Send, MessageCircle, Instagram, Phone, MapPin, Sparkles, CheckCircle2, Clock, Mail } from 'lucide-react';
import { BOUTIQUES } from '../data/footwearData';
import { ConciergeInquiry } from '../types';

interface ContactDMProps {
  initialShoeInterest?: string;
}

export const ContactDM: React.FC<ContactDMProps> = ({ initialShoeInterest = '' }) => {
  const [formData, setFormData] = useState<ConciergeInquiry>({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Sizing Consultation',
    preferredContact: 'Instagram DM',
    message: '',
    shoeInterest: initialShoeInterest,
  });

  const [activeBoutiqueIdx, setActiveBoutiqueIdx] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    const generatedTicket = `LMN-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);
    setIsSubmitted(true);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
  };

  const activeBoutique = BOUTIQUES[activeBoutiqueIdx];

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-28 bg-[#F5EDE1] border-t border-[#E8DFC8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.24em] text-[#8A6D3B] font-medium">
            <Sparkles className="w-3 h-3" />
            <span>Dedicated Atelier Concierge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#181716] font-normal tracking-tight">
            Direct Message & Concierge
          </h2>
          <p className="text-sm sm:text-base text-[#6E6455] font-light leading-relaxed">
            Whether you require bespoke instep guidance, private salon reservations in Paris or Milan, or a custom patina commission, our master cordwainers respond personally within 2 hours.
          </p>
        </div>

        {/* Quick Instant Messaging Action Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 p-4 bg-[#FAF7F2] border border-[#D5C7B0] hover:border-[#8A6D3B] hover:bg-[#181716] hover:text-[#FAF7F2] text-[#181716] text-xs uppercase tracking-[0.18em] font-medium transition-all group shadow-xs cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-[#8A6D3B] group-hover:text-[#D4AF37]" />
            <span>DM on Instagram</span>
          </a>

          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 p-4 bg-[#FAF7F2] border border-[#D5C7B0] hover:border-[#8A6D3B] hover:bg-[#181716] hover:text-[#FAF7F2] text-[#181716] text-xs uppercase tracking-[0.18em] font-medium transition-all group shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#8A6D3B] group-hover:text-[#D4AF37]" />
            <span>WhatsApp Concierge</span>
          </a>

          <a
            href="tel:+33142680012"
            className="flex items-center justify-center gap-2.5 p-4 bg-[#FAF7F2] border border-[#D5C7B0] hover:border-[#8A6D3B] hover:bg-[#181716] hover:text-[#FAF7F2] text-[#181716] text-xs uppercase tracking-[0.18em] font-medium transition-all group shadow-xs cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#8A6D3B] group-hover:text-[#D4AF37]" />
            <span>Call Paris Atelier</span>
          </a>
        </div>

        {/* Two-Column Grid: Concierge Form & Boutiques Map/Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Interactive Concierge DM Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-10 border border-[#D5C7B0] shadow-md">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-5 animate-in fade-in">
                <div className="w-16 h-16 bg-[#E8F3EB] text-[#24613B] rounded-full flex items-center justify-center mx-auto border border-[#A2D3B0]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#8A6D3B] font-bold">
                    Concierge Dispatch Confirmed
                  </span>
                  <h3 className="text-2xl font-serif text-[#181716]">
                    Thank you, {formData.name}
                  </h3>
                  <p className="text-xs text-[#635B4E] max-w-md mx-auto leading-relaxed">
                    Your inquiry has been assigned to our Senior Fitting Master in Paris. You will receive a direct reply via {formData.preferredContact} within 2 business hours.
                  </p>
                </div>

                <div className="p-3.5 bg-[#F5EDE1] border border-[#D5C7B0] inline-block text-xs">
                  <span className="text-[#73695A] uppercase tracking-wider">Priority Ticket Reference: </span>
                  <span className="font-mono font-bold text-[#181716]">{ticketId}</span>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Sizing Consultation',
                        preferredContact: 'Instagram DM',
                        message: '',
                        shoeInterest: '',
                      });
                    }}
                    className="px-6 py-2.5 border border-[#181716] text-xs uppercase tracking-[0.2em] hover:bg-[#181716] hover:text-[#FAF7F2] transition-colors cursor-pointer"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                
                <div className="border-b border-[#E3D8C6] pb-4">
                  <h3 className="text-xl font-serif text-[#181716] font-medium">
                    Initiate Direct Inquiry
                  </h3>
                  <p className="text-[11px] text-[#73695A] font-light mt-0.5">
                    Personalized attention for bespoke fittings, bridal styling, or order assistance.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase tracking-wider text-[#544C3F] font-medium mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Lady Eleanor Laurent"
                      className="w-full bg-[#FAF7F2] border border-[#D5C7B0] p-3 text-xs focus:outline-hidden focus:border-[#8A6D3B]"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-[#544C3F] font-medium mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="eleanor@haute.com"
                      className="w-full bg-[#FAF7F2] border border-[#D5C7B0] p-3 text-xs focus:outline-hidden focus:border-[#8A6D3B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase tracking-wider text-[#544C3F] font-medium mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                      className="w-full bg-[#FAF7F2] border border-[#D5C7B0] p-3 text-xs focus:outline-hidden focus:border-[#8A6D3B]"
                    >
                      <option value="Sizing Consultation">Instep & Arch Sizing Advice</option>
                      <option value="Bespoke Order">Bespoke Leather Commission</option>
                      <option value="Private Atelier Appointment">Private Atelier Fitting (Paris/Milan/NY)</option>
                      <option value="Bridal Service">Bridal Footwear Suite</option>
                      <option value="General Inquiry">General Atelier Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-[#544C3F] font-medium mb-1.5">
                      Preferred Reply Channel
                    </label>
                    <select
                      value={formData.preferredContact}
                      onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value as any })}
                      className="w-full bg-[#FAF7F2] border border-[#D5C7B0] p-3 text-xs focus:outline-hidden focus:border-[#8A6D3B]"
                    >
                      <option value="Instagram DM">Instagram DM</option>
                      <option value="WhatsApp">WhatsApp Message</option>
                      <option value="Email">Email Dispatch</option>
                      <option value="Phone">Phone Call from Stylist</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[#544C3F] font-medium mb-1.5">
                    Shoe Model of Interest (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.shoeInterest}
                    onChange={(e) => setFormData({ ...formData, shoeInterest: e.target.value })}
                    placeholder="e.g. The Aurelia Slingback in Crème Ivoire (Size EU 38)"
                    className="w-full bg-[#FAF7F2] border border-[#D5C7B0] p-3 text-xs focus:outline-hidden focus:border-[#8A6D3B]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[#544C3F] font-medium mb-1.5">
                    Your Message / Fitting Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention any specific foot width questions, event dates, or appointment preferences..."
                    className="w-full bg-[#FAF7F2] border border-[#D5C7B0] p-3 text-xs focus:outline-hidden focus:border-[#8A6D3B]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#181716] text-[#FAF7F2] text-xs uppercase tracking-[0.24em] font-medium hover:bg-[#8A6D3B] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Dispatch to Concierge</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right: Global Atelier Boutiques & VIP Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Global Atelier Locations Box */}
            <div className="bg-[#FAF7F2] p-8 border border-[#D5C7B0] shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#8A6D3B] font-semibold">
                  Maison Salons
                </span>
                <h3 className="text-xl font-serif text-[#181716]">
                  Global Boutique Salons
                </h3>
              </div>

              {/* City Switcher Tabs */}
              <div className="flex border-b border-[#E3D8C6]">
                {BOUTIQUES.map((b, idx) => (
                  <button
                    key={b.city}
                    onClick={() => setActiveBoutiqueIdx(idx)}
                    className={`py-2 px-4 text-xs uppercase tracking-wider font-medium border-b-2 -mb-[2px] transition-colors cursor-pointer ${
                      activeBoutiqueIdx === idx
                        ? 'border-[#8A6D3B] text-[#181716] font-semibold'
                        : 'border-transparent text-[#73695A] hover:text-[#181716]'
                    }`}
                  >
                    {b.city}
                  </button>
                ))}
              </div>

              {/* Active Boutique Details Card */}
              <div className="space-y-4 text-xs text-[#524B40] pt-2">
                <div className="space-y-1">
                  <h4 className="font-serif text-base text-[#181716] font-medium">
                    {activeBoutique.name}
                  </h4>
                  <div className="flex items-start gap-2 text-[#635A4D]">
                    <MapPin className="w-3.5 h-3.5 text-[#8A6D3B] shrink-0 mt-0.5" />
                    <span>{activeBoutique.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#635A4D]">
                  <Clock className="w-3.5 h-3.5 text-[#8A6D3B] shrink-0" />
                  <span>{activeBoutique.hours}</span>
                </div>

                <div className="flex items-center gap-2 text-[#635A4D]">
                  <Phone className="w-3.5 h-3.5 text-[#8A6D3B] shrink-0" />
                  <a href={`tel:${activeBoutique.phone}`} className="hover:text-[#8A6D3B] underline underline-offset-2">
                    {activeBoutique.phone}
                  </a>
                </div>

                <div className="pt-3 border-t border-[#EAE0D1]">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-[#8A6D3B] mb-1.5">
                    Exclusive Salon Privileges:
                  </p>
                  <ul className="space-y-1 text-[11px] list-disc list-inside text-[#635A4D]">
                    {activeBoutique.services.map((svc, i) => (
                      <li key={i}>{svc}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Newsletter VIP Privilege Club Box */}
            <div className="bg-[#181716] text-[#FAF7F2] p-8 border border-[#2C2926] shadow-md space-y-4">
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.24em] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Lamine Society</span>
              </div>

              <h4 className="text-xl font-serif leading-tight">
                Receive 10% Welcome Privilege on Your First Acquisition
              </h4>

              <p className="text-xs text-[#D8D1C5] font-light leading-relaxed">
                Be granted early access to numbered seasonal silhouettes, private salon invitations, and private atelier dispatches.
              </p>

              {newsletterSuccess ? (
                <div className="p-3.5 bg-[#2E6B47]/30 border border-[#2E6B47] text-[#D4AF37] text-xs font-mono text-center tracking-wider">
                  Welcome to Lamine. Use code <span className="font-bold text-white">LAMINE10</span> at checkout.
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <div className="relative flex-grow">
                    <Mail className="w-3.5 h-3.5 text-[#73695A] absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-[#24211E] border border-[#3E3A35] pl-9 pr-3 py-2.5 text-xs text-[#FAF7F2] placeholder-[#73695A] focus:outline-hidden focus:border-[#D4AF37]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#8A6D3B] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#A38249] transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
