import React from 'react';
import { Instagram, Heart, Sparkles, ShoppingBag } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/footwearData';
import { Product } from '../types';

interface InstagramGalleryProps {
  onSelectProductById: (productId: string) => void;
  allProducts: Product[];
}

export const InstagramGallery: React.FC<InstagramGalleryProps> = ({ onSelectProductById }) => {
  return (
    <section 
      id="editorial"
      className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E8DFC8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.26em] text-[#8A6D3B] font-medium">
            <Instagram className="w-3.5 h-3.5" />
            <span>@lamine.atelier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#181716] font-normal tracking-tight">
            #WalkInLamine
          </h2>
          <p className="text-sm sm:text-base text-[#6E6455] font-light leading-relaxed">
            Spotted along Boulevard Saint-Germain, Lake Como, and Upper Madison. Tag your strides with #WalkInLamine to be featured in our seasonal salon gallery.
          </p>
        </div>

        {/* Instagram Visual Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div 
              key={post.id}
              className="group relative aspect-square overflow-hidden bg-[#EAE0D1] border border-[#E3D8C6] shadow-xs cursor-pointer"
              onClick={() => post.productId && onSelectProductById(post.productId)}
            >
              {/* Photo */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Dark Hover Overlay with Metadata */}
              <div className="absolute inset-0 bg-[#181716]/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-[#FAF7F2] text-xs">
                
                {/* Top: Handle and Likes */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-medium tracking-wider text-[#D4AF37]">
                    {post.handle}
                  </span>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-current text-[#D4AF37]" />
                    <span>{post.likes.toLocaleString()}</span>
                  </div>
                </div>

                {/* Center: Caption */}
                <p className="text-[10px] text-[#EFE7DA] font-light line-clamp-3 leading-tight italic">
                  &ldquo;{post.caption}&rdquo;
                </p>

                {/* Bottom: Shoppable Product Pill */}
                {post.productName && (
                  <div className="pt-2 border-t border-white/20">
                    <div className="flex items-center gap-1.5 bg-[#FAF7F2] text-[#181716] px-2 py-1.5 text-[9px] uppercase tracking-wider font-semibold hover:bg-[#8A6D3B] hover:text-white transition-colors">
                      <ShoppingBag className="w-3 h-3 text-[#8A6D3B]" />
                      <span className="truncate">{post.productName}</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Persistent Tiny Shoppable Icon on corner */}
              {post.productName && (
                <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-xs p-1 rounded-full text-white group-hover:hidden">
                  <ShoppingBag className="w-3 h-3 text-[#D4AF37]" />
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Instagram Follow CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#181716] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8A6D3B] transition-all duration-300 shadow-sm cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-[#D4AF37]" />
            <span>Follow @lamine.atelier</span>
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          </a>
        </div>

      </div>
    </section>
  );
};
