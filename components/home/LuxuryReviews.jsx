"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Quote } from "lucide-react";
import { luxuryReviews } from "@/utils/data/mockData";

export default function LuxuryReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? luxuryReviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === luxuryReviews.length - 1 ? 0 : prev + 1));
  };

  const current = luxuryReviews[currentIndex];

  return (
    <section className="py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]/60 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#9E7D52] font-semibold mb-2">
            <Sparkles size={12} className="text-[#C5A880]" />
            <span>Client Provenance</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#171513] font-normal tracking-tight mb-3">
            Words of Reverence & Trust
          </h2>
          <div className="flex items-center gap-2 text-xs text-[#827C75]">
            <div className="flex text-[#C5A880] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span>•</span>
            <span className="font-medium text-[#171513]">5.0 Rating</span>
            <span>based on 980+ Verified Commissions</span>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-white border border-[#E8E2D8] rounded-sm p-8 sm:p-12 md:p-16 shadow-xl relative">
          {/* Subtle Quote Icon */}
          <Quote 
            size={48} 
            className="text-[#E8D8BE]/40 absolute top-6 right-8 pointer-events-none hidden sm:block" 
          />

          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Stars */}
            <div className="flex text-[#C5A880] gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            {/* Testimonial Title */}
            <h3 className="font-serif text-xl sm:text-2xl text-[#171513] font-medium mb-4 leading-snug">
              &ldquo;{current.title}&rdquo;
            </h3>

            {/* Quote Body */}
            <p className="text-sm sm:text-base text-[#827C75] font-light leading-relaxed mb-8">
              {current.text}
            </p>

            {/* Client Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-[#E8E2D8]/60 w-full justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden relative border border-[#E8E2D8]">
                  <Image src={current.avatar} alt={current.author} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-semibold text-sm text-[#171513]">{current.author}</span>
                    <CheckCircle2 size={13} className="text-[#9E7D52]" />
                  </div>
                  <span className="text-[11px] text-[#827C75]">{current.city}, Nepal • {current.time}</span>
                </div>
              </div>

              {/* Commissioned Piece */}
              <div className="text-center sm:text-right">
                <span className="text-[10px] uppercase tracking-wider text-[#827C75] block">Commissioned Piece</span>
                <span className="text-xs font-medium text-[#171513]">{current.piecePurchased}</span>
              </div>
            </div>

          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between absolute inset-y-0 -left-4 -right-4 pointer-events-none">
            <button
              onClick={prevReview}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white border border-[#E8E2D8] text-[#171513] hover:text-[#C5A880] hover:border-[#C5A880] flex items-center justify-center shadow-md transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextReview}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white border border-[#E8E2D8] text-[#171513] hover:text-[#C5A880] hover:border-[#C5A880] flex items-center justify-center shadow-md transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {luxuryReviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-[#171513]" : "w-2 bg-[#E8E2D8]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
