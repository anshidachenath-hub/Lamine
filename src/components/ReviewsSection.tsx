import React, { useState } from 'react';
import { Star, CheckCircle2, Quote, Sparkles, MessageSquare } from 'lucide-react';
import { Review } from '../types';
import { PRESS_ACCOLADES } from '../data/footwearData';

interface ReviewsSectionProps {
  reviews: Review[];
  onAddReview: (review: Review) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, onAddReview }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [showReviewModal, setShowReviewModal] = useState(false);
  
  // New review form states
  const [authorName, setAuthorName] = useState('');
  const [authorLocation, setAuthorLocation] = useState('');
  const [shoeModel, setShoeModel] = useState('The Aurelia Slingback (Crème Ivoire)');
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [fitRating, setFitRating] = useState<'True to Size' | 'Runs Slightly Small' | 'Runs Slightly Large'>('True to Size');
  const [submittedToast, setSubmittedToast] = useState(false);

  const filteredReviews = selectedFilter === 'all'
    ? reviews
    : reviews.filter((r) => r.shoeModel.toLowerCase().includes(selectedFilter.toLowerCase()));

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !text.trim()) return;

    const newRev: Review = {
      id: `user-rev-${Date.now()}`,
      author: authorName.trim(),
      location: authorLocation.trim() || 'Verified Client',
      verified: true,
      rating,
      date: 'Just now',
      title: title.trim() || 'Exceptional craftsmanship & posture',
      text: text.trim(),
      shoeModel,
      fitRating
    };

    onAddReview(newRev);
    setShowReviewModal(false);
    setAuthorName('');
    setAuthorLocation('');
    setTitle('');
    setText('');
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 4000);
  };

  return (
    <section 
      id="reviews" 
      className="py-20 sm:py-28 bg-[#F6EFE6] border-t border-[#E8DFC8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Press Accolades Banner */}
        <div className="mb-20">
          <p className="text-center text-xs uppercase tracking-[0.28em] text-[#8A6D3B] font-semibold mb-8">
            Global Fashion Critiques & Accolades
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRESS_ACCOLADES.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF7F2] p-6 border border-[#E3D8C6] shadow-xs flex flex-col justify-between space-y-4"
              >
                <Quote className="w-5 h-5 text-[#8A6D3B]/40" />
                <p className="text-xs italic text-[#4A433A] leading-relaxed font-serif text-sm">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="pt-2 border-t border-[#EAE0D1]">
                  <span className="text-xs uppercase tracking-[0.2em] font-serif font-bold text-[#181716]">
                    {item.publication}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Reviews Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.24em] text-[#8A6D3B] font-medium">
              <Sparkles className="w-3 h-3" />
              <span>Verified Patron Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#181716] font-normal tracking-tight">
              Testimonials of Elegance
            </h2>
            <p className="text-sm text-[#6E6455] font-light max-w-xl">
              Discover how our patrons across Paris, London, Milan, and New York navigate life with poise in Lamine.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="write-review-btn"
              onClick={() => setShowReviewModal(true)}
              className="px-6 py-3 bg-[#181716] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8A6D3B] transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Submit Experience</span>
            </button>
          </div>
        </div>

        {submittedToast && (
          <div className="mb-8 p-4 bg-[#E3EFE6] border border-[#A7CEB0] text-[#1E522C] text-xs rounded text-center tracking-wider font-medium animate-in fade-in">
            Thank you for sharing your experience. Your review has been recorded in the Lamine Atelier register.
          </div>
        )}

        {/* Model Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs">
          <span className="text-[#73695A] uppercase tracking-wider text-[11px] mr-2">Filter by Model:</span>
          {['all', 'Aurelia', 'Vittorio', 'Séléné', 'Cyra'].map((filterKey) => (
            <button
              key={filterKey}
              onClick={() => setSelectedFilter(filterKey)}
              className={`px-3 py-1.5 uppercase tracking-wider font-medium text-[11px] transition-colors cursor-pointer ${
                selectedFilter === filterKey
                  ? 'bg-[#181716] text-[#FAF7F2]'
                  : 'bg-[#FAF7F2] text-[#635A4D] border border-[#DCD0BE] hover:border-[#8A6D3B]'
              }`}
            >
              {filterKey === 'all' ? 'All Reviews' : filterKey}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredReviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-[#FAF7F2] p-6 sm:p-8 border border-[#E3D8C6] hover:border-[#8A6D3B] transition-all shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                {/* Rating and Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#8A6D3B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#2E6B47] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Purchase</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg text-[#181716] font-medium">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-[#574F43] font-light leading-relaxed">
                  {rev.text}
                </p>
              </div>

              {/* Review Author Footer */}
              <div className="pt-4 border-t border-[#EBE3D5] flex items-center justify-between text-xs">
                <div>
                  <p className="font-medium text-[#181716]">{rev.author}</p>
                  <p className="text-[11px] text-[#7A7061]">{rev.location} &bull; {rev.date}</p>
                </div>

                <div className="text-right">
                  <p className="text-[11px] font-medium text-[#8A6D3B]">{rev.shoeModel}</p>
                  <p className="text-[10px] text-[#7A7061] uppercase tracking-widest">{rev.fitRating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowReviewModal(false)}
        >
          <div 
            className="bg-[#FAF7F2] border border-[#D5C7B0] max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative animate-in fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-3 border-b border-[#E3D8C6]">
              <h3 className="font-serif text-xl text-[#181716]">Share Your Lamine Journey</h3>
              <button 
                onClick={() => setShowReviewModal(false)}
                className="text-lg font-bold text-[#73695A] hover:text-[#181716]"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block uppercase tracking-wider text-[#635A4D] font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Diane Laurent"
                    className="w-full bg-[#FAF7F2] border border-[#D5C7B0] p-2 focus:outline-hidden focus:border-[#8A6D3B]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-[#635A4D] font-medium mb-1">
                    City / Country
                  </label>
                  <input
                    type="text"
                    value={authorLocation}
                    onChange={(e) => setAuthorLocation(e.target.value)}
                    placeholder="e.g. Bordeaux, France"
                    className="w-full bg-[#FAF7F2] border border-[#D5C7B0] p-2 focus:outline-hidden focus:border-[#8A6D3B]"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#635A4D] font-medium mb-1">
                  Shoe Model
                </label>
                <select
                  value={shoeModel}
                  onChange={(e) => setShoeModel(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#D5C7B0] p-2 focus:outline-hidden focus:border-[#8A6D3B]"
                >
                  <option value="The Aurelia Slingback (Crème Ivoire)">The Aurelia Slingback (Crème Ivoire)</option>
                  <option value="The Vittorio Loafer (Espresso Brun)">The Vittorio Loafer (Espresso Brun)</option>
                  <option value="The Séléné Chelsea Boot (Noir Mat)">The Séléné Chelsea Boot (Noir Mat)</option>
                  <option value="The Cyra Sculpted Mule (Beige Crème)">The Cyra Sculpted Mule (Beige Crème)</option>
                  <option value="The Palais Evening Pump (Champagne Or)">The Palais Evening Pump (Champagne Or)</option>
                  <option value="The Monaco Studio Trainer (Alabaster Blanc)">The Monaco Studio Trainer (Alabaster Blanc)</option>
                </select>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#635A4D] font-medium mb-1">
                  Rating
                </label>
                <div className="flex gap-2 text-base">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setRating(num)}
                      className={`cursor-pointer ${num <= rating ? 'text-[#8A6D3B]' : 'text-[#CCC2B2]'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#635A4D] font-medium mb-1">
                  Review Headline
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Unbelievable arch comfort for all-day wear"
                  className="w-full bg-[#FAF7F2] border border-[#D5C7B0] p-2 focus:outline-hidden focus:border-[#8A6D3B]"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[#635A4D] font-medium mb-1">
                  Detailed Experience
                </label>
                <textarea
                  required
                  rows={3}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Describe the leather sensation, walkability, fit, and aesthetic response..."
                  className="w-full bg-[#FAF7F2] border border-[#D5C7B0] p-2 focus:outline-hidden focus:border-[#8A6D3B]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-[#E3D8C6]">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 border border-[#D5C7B0] text-[#635A4D] uppercase tracking-wider text-[11px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#181716] text-[#FAF7F2] uppercase tracking-[0.2em] font-medium hover:bg-[#8A6D3B] transition-colors"
                >
                  Publish Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
