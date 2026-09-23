import React from 'react';
import { Feather, Shield, RefreshCw, Eye, Sparkles, Check, X } from 'lucide-react';

export const WhyLamine: React.FC = () => {
  const pillars = [
    {
      icon: Feather,
      title: 'Architectural Ergonomics',
      subtitle: 'Gravity Recalibration',
      text: 'Developed in tandem with Zurich orthopedic biomechanists, our hollowed-beechwood heels and contoured arches redistribute 60% of body weight to the calcaneus bone, allowing effortless day-to-night stride without fatigue.'
    },
    {
      icon: Shield,
      title: 'Top 3% Tuscan Leathers',
      subtitle: 'Uncompromising Provenance',
      text: 'We decline 97% of leather hides offered to us. Only the most supple, unblemished Tuscan boxcalf and lamb nappa receive the Lamine certification, developing an unmatched luminous patina that grows richer with every passing year.'
    },
    {
      icon: RefreshCw,
      title: 'Lifetime Atelier Re-Crafting',
      subtitle: 'Sustainable Heirloom Philosophy',
      text: 'Every pair is Blake-stitched or Goodyear-welted to allow complete disassembly and resoling. Bring your footwear to our Paris, Milan, or New York salons for annual spa rejuvenation and leather nourishing.'
    },
    {
      icon: Eye,
      title: 'Zero Overproduction',
      subtitle: 'Exclusivity by Design',
      text: 'We produce exclusively in numbered micro-batches of 120 to 250 pairs worldwide. When an edition is retired, its moulds are sealed in our Florence archive, safeguarding the rare distinctiveness of your wardrobe.'
    }
  ];

  const comparisonRows = [
    { feature: 'Lasted on moulds for minimum 48 hours', lamine: true, conventional: 'Less than 4 hours (synthetic mold)' },
    { feature: 'Dual-density hidden metatarsal arch support', lamine: true, conventional: 'Flat cardboard shank' },
    { feature: 'Traceable certified Tuscan vegetable tanned leather', lamine: true, conventional: 'Heavy chrome-treated split hides' },
    { feature: 'Complimentary annual shoe rejuvenation & resoling service', lamine: true, conventional: 'Disposable / no atelier support' },
    { feature: 'Limited numbered production runs with serial certificate', lamine: true, conventional: 'Mass factory overproduction' },
  ];

  return (
    <section 
      id="why-lamine"
      className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E8DFC8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.24em] text-[#8A6D3B] font-medium">
            <Sparkles className="w-3 h-3" />
            <span>The Standard of Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#181716] font-normal tracking-tight">
            Why Lamine
          </h2>
          <p className="text-sm sm:text-base text-[#6E6455] font-light leading-relaxed">
            True luxury is not defined by excess, but by the invisible mastery embedded in every step you take.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className="bg-[#FAF7F2] p-8 border border-[#E8DFC8] hover:border-[#8A6D3B] transition-all duration-300 shadow-xs flex flex-col justify-between space-y-6 group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F3ECE1] border border-[#D5C7B0] flex items-center justify-center text-[#8A6D3B] group-hover:bg-[#181716] group-hover:text-[#D4AF37] group-hover:border-[#181716] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A6D3B] font-semibold">
                      {p.subtitle}
                    </span>
                    <h3 className="text-lg font-serif text-[#181716] font-medium mt-1">
                      {p.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#635A4D] font-light leading-relaxed">
                  {p.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* The Comparative Ledger / Proof of Excellence Table */}
        <div className="bg-[#F5EFE7] border border-[#E3D8C6] p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl mx-auto space-y-6">
            
            <div className="text-center space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A6D3B] font-semibold">
                Transparency & Integrity
              </span>
              <h3 className="text-2xl font-serif text-[#181716]">
                The Atelier Difference
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#D5C7B0] text-[#73695A] uppercase tracking-wider">
                    <th className="py-3 px-3">Atelier Criterion</th>
                    <th className="py-3 px-3 text-[#181716] font-serif font-bold text-sm">Lamine Atelier</th>
                    <th className="py-3 px-3 text-[#877C6B]">Commercial Fashion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E3D8C6]">
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="hover:bg-[#EFE7DA] transition-colors">
                      <td className="py-3.5 px-3 font-medium text-[#2E2923]">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-3 text-[#181716] font-semibold">
                        <span className="inline-flex items-center gap-1.5 text-[#24613B]">
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Always Standard</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-[#7A7061] italic">
                        <span className="inline-flex items-center gap-1.5 text-[#964E40]">
                          <X className="w-3.5 h-3.5 stroke-[2]" />
                          <span>{row.conventional}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
