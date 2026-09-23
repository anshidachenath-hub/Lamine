import React from 'react';
import { Sparkles, Compass, Scissors, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Sculptural Wooden Lasting',
      icon: Compass,
      desc: 'Each shoe shape is rested on seasoned Tuscan beechwood lasts for a minimum of 48 hours, allowing the leather to permanently memorize the anatomical curves of the foot.'
    },
    {
      num: '02',
      title: 'Ethical Full-Grain Tuscan Leathers',
      icon: Scissors,
      desc: 'We select exclusively from certified Gold-Rated Italian tanneries along the Arno river, utilizing natural chestnut tannins that deepen in luster and character with every season.'
    },
    {
      num: '03',
      title: 'Dual-Density Orthopedic Bed',
      icon: Sparkles,
      desc: 'Concealed beneath our sleek leather sockliner lies a dual-density shock absorption layer, mitigating 70% of metatarsal pressure without altering heel height aesthetics.'
    },
    {
      num: '04',
      title: 'Hand-Inked Edges & Gold Insignia',
      icon: HeartHandshake,
      desc: 'Before leaving Florence, every sole edge is beveled and hand-inked in three coats, finalized with our signature 24-karat gold leaf Lamine seal.'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 bg-[#F6EFE6] border-t border-[#E8DFC8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Atelier Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="aspect-[4/5] overflow-hidden bg-[#EAE0D1] border border-[#D5C7B0] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=85"
                  alt="Lamine Cordwaining Atelier in Florence"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Offset Decorative Accent Frame */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border border-[#8A6D3B]/40 -z-10 hidden sm:block pointer-events-none" />

              {/* Floating Atelier Quote Plaque */}
              <div className="absolute -bottom-8 right-4 max-w-xs bg-[#FAF7F2] p-5 border border-[#D5C7B0] shadow-lg">
                <p className="font-serif italic text-sm text-[#181716] leading-snug">
                  &ldquo;We do not merely create footwear; we engineer the architecture of poise.&rdquo;
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A6D3B] font-semibold mt-2">
                  Hélène Lamine &bull; Founder & Creative Director
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Atelier Narrative */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#8A6D3B] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8A6D3B]" />
              <span>The Atelier Narrative</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#181716] font-normal leading-[1.15]">
              Born in Paris. <br />
              Mastered in Tuscany.
            </h2>

            <p className="text-sm sm:text-base text-[#5C5346] font-light leading-relaxed">
              Founded on the belief that high fashion should liberate rather than constrain, Lamine is the synthesis of two historic footwear cultures: the sleek, uncompromising aesthetics of Parisian haute couture, and the generational master cordwaining of Florence.
            </p>

            <p className="text-sm sm:text-base text-[#5C5346] font-light leading-relaxed">
              Our workshop refuses the speed of disposable fast fashion. Every silhouette is produced in disciplined, numbered micro-batches to guarantee zero waste, meticulous single-stitch inspection, and traceable provenance from field to sole.
            </p>

            {/* Atelier Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E2D6C2]">
              <div>
                <span className="text-2xl sm:text-3xl font-serif text-[#181716] font-normal">1892</span>
                <p className="text-[10px] uppercase tracking-wider text-[#73695A] mt-0.5">Heritage Tannery Heritage</p>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-serif text-[#181716] font-normal">42</span>
                <p className="text-[10px] uppercase tracking-wider text-[#73695A] mt-0.5">Hand Inspections Per Pair</p>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-serif text-[#181716] font-normal">0%</span>
                <p className="text-[10px] uppercase tracking-wider text-[#73695A] mt-0.5">Synthetic Leather Fillers</p>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Stage Craftsmanship Process Cards */}
        <div className="pt-12 border-t border-[#E8DFC8]">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-[0.22em] text-[#8A6D3B] font-medium">
              The Protocol of Perfection
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#181716]">
              How Each Lamine Silhouette Comes to Life
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => {
              const IconComp = s.icon;
              return (
                <div
                  key={s.num}
                  className="bg-[#FAF7F2] p-6 border border-[#E3D8C6] hover:border-[#8A6D3B] transition-all duration-300 shadow-xs flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-serif font-bold text-[#8A6D3B] tracking-widest">
                        PHASE {s.num}
                      </span>
                      <IconComp className="w-4 h-4 text-[#8A6D3B] group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="text-base font-serif text-[#181716] font-medium">
                      {s.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#635A4D] font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
