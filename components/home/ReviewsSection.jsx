"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/utils/data/mockData";
import { useRef } from "react";

export default function ReviewsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* Left Google Summary */}
          <div className="flex flex-col items-center shrink-0 md:w-56">
            <h3 className="text-2xl font-bold font-sans mb-2">EXCELLENT</h3>
            <div className="flex gap-0.5 text-[#FBBC05] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-gray-700 font-medium mb-3">
              Based on <strong>979 reviews</strong>
            </p>
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
              alt="Google" 
              width={80} 
              height={26}
            />
          </div>

          {/* Carousel Arrow Left */}
          <button 
            onClick={() => scroll("left")}
            className="hidden md:flex bg-white rounded-full p-2 shadow-md hover:bg-gray-50 text-gray-500 shrink-0 border border-gray-200 cursor-pointer transition-colors hover:text-gray-800"
            aria-label="Scroll reviews left"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Review Cards Carousel */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar w-full pb-2"
          >
            {reviews.map((review) => (
              <div key={review.id} className="bg-[#F8F9FA] rounded-lg p-5 min-w-[270px] max-w-[280px] shrink-0 border border-gray-100 shadow-sm flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden relative shrink-0">
                      <Image src={review.avatar} alt={review.author} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-gray-900 leading-tight">{review.author}</span>
                      <span className="text-[11px] text-gray-400">{review.time}</span>
                    </div>
                  </div>
                  {/* Google G icon */}
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width={16} height={16} className="shrink-0" />
                </div>
                
                <div className="flex items-center text-[#FBBC05] mb-2.5 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300"} />
                  ))}
                  <span className="ml-1 text-[#4285F4]">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </span>
                </div>

                <p className="text-[13px] text-gray-600 line-clamp-4 leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          {/* Carousel Arrow Right */}
          <button 
            onClick={() => scroll("right")}
            className="hidden md:flex bg-white rounded-full p-2 shadow-md hover:bg-gray-50 text-gray-500 shrink-0 border border-gray-200 cursor-pointer transition-colors hover:text-gray-800"
            aria-label="Scroll reviews right"
          >
            <ChevronRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}

