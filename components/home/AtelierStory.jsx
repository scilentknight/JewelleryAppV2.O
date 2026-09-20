"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { atelierHeritage } from "@/utils/data/mockData";

export default function AtelierStory() {
  const [counts, setCounts] = useState(atelierHeritage.stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts(
        atelierHeritage.stats.map((s) => Math.min(Math.floor(s.target * progress), s.target))
      );

      if (step >= steps) {
        clearInterval(timer);
        setCounts(atelierHeritage.stats.map((s) => s.target));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section className="py-24 bg-[#171513] text-[#FAF8F5] relative overflow-hidden border-b border-[#2A2521]">
      {/* Ambient background glow */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atelier Narrative (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3">
              <Sparkles size={12} />
              <span>{atelierHeritage.sectionTag}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] font-normal tracking-tight leading-tight mb-6">
              {atelierHeritage.title}
            </h2>

            <blockquote className="border-l-2 border-[#C5A880] pl-4 italic text-sm sm:text-base text-[#E8D8BE] font-light leading-relaxed mb-6">
              &ldquo;{atelierHeritage.quote}&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-[#827C75] leading-relaxed mb-8 font-light">
              {atelierHeritage.description}
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C5A880] hover:bg-[#9E7D52] text-[#171513] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md group"
            >
              <span>Discover Our Heritage</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Layered Atelier Visuals (6 cols) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[480px]">
              
              {/* Primary Master Craftsman Image */}
              <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden shadow-2xl border-2 border-[#2A2521]">
                <Image
                  src={atelierHeritage.imageMain}
                  alt="Sazuna Master Jeweller at work"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/70 via-transparent to-transparent"></div>
              </div>

              {/* Inset Finished Jewelry Detail */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-44 sm:w-52 aspect-square rounded-sm overflow-hidden shadow-2xl border-4 border-[#171513] hidden sm:block">
                <Image
                  src={atelierHeritage.imageCraft}
                  alt="Precision Gemsetting Detail"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>

              {/* Gold Hallmark Badge */}
              <div className="absolute top-6 right-6 bg-[#171513]/90 backdrop-blur-md border border-[#C5A880]/50 px-3 py-2 rounded-xs flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#C5A880]" />
                <span className="text-[10px] uppercase tracking-widest text-[#E8D8BE] font-medium">
                  24K Hallmarked
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Dynamic Animated Statistics Bar */}
        <div 
          ref={statsRef}
          className="mt-20 pt-12 border-t border-[#2A2521] grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {atelierHeritage.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-serif text-4xl sm:text-5xl font-light text-[#FAF8F5] mb-2 tracking-tight">
                {counts[idx]}
                <span className="text-[#C5A880]">{stat.suffix}</span>
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#827C75] font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
