"use client";

import Image from "next/image";
import Link from "next/link";
import { dealOfTheDayProducts } from "@/utils/data/mockData";
import ProductCard from "@/components/product/ProductCard";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function DealOfTheDay() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 33
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="bg-[#FAF9F5] py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Banner */}
          <div className="relative w-full lg:w-[320px] shrink-0 h-[450px] overflow-hidden rounded-sm group">
            <Image 
              src="https://images.unsplash.com/photo-1599643478524-fb66f70a00ea?q=80&w=800&auto=format&fit=crop" 
              alt="Deal of the day banner" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col items-center text-center justify-center text-white">
              <span className="text-sm font-medium tracking-widest mb-4">HOT THIS MONTH</span>
              <h2 className="text-4xl font-serif font-bold leading-tight mb-2">Save an extra</h2>
              <h3 className="text-5xl font-serif font-bold text-yellow-300">50% Off</h3>
            </div>

            {/* Countdown Timer */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-sm flex items-center justify-center gap-4 text-black shadow-lg w-max">
              <div className="flex flex-col items-center min-w-[36px]">
                <span className="text-2xl font-bold font-serif leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[10px] tracking-wider uppercase mt-1 text-gray-600">HOURS</span>
              </div>
              <span className="text-xl font-serif pb-4">:</span>
              <div className="flex flex-col items-center min-w-[36px]">
                <span className="text-2xl font-bold font-serif leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[10px] tracking-wider uppercase mt-1 text-gray-600">MINS</span>
              </div>
              <span className="text-xl font-serif pb-4">:</span>
              <div className="flex flex-col items-center min-w-[36px]">
                <span className="text-2xl font-bold font-serif leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[10px] tracking-wider uppercase mt-1 text-gray-600">SECS</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-serif text-[#1C4637] flex items-center gap-2">
                Deal Of The Day 🌟
              </h2>
              <Link 
                href="/deals" 
                className="text-sm font-medium text-gray-500 hover:text-gray-800 flex items-center gap-1 group transition-colors"
              >
                See All Deals <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* 5 Product Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {dealOfTheDayProducts.slice(0, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
