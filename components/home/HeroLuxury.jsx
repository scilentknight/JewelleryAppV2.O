import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { heroContent } from "@/utils/data/mockData";

export default function HeroLuxury() {
  return (
    <section className="relative bg-[#FAF8F5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E8E2D8]/60 overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-2xl">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#F4EFE6] border border-[#E8E2D8] rounded-full mb-6 text-[#9E7D52] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-semibold">
              <Sparkles size={12} className="text-[#C5A880]" />
              <span>{heroContent.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#171513] leading-[1.12] font-normal tracking-tight mb-6">
              The Art of <span className="italic font-serif text-[#9E7D52]">Eternal Radiance</span> & Rare Artistry.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#827C75] leading-relaxed mb-8 max-w-xl font-light">
              {heroContent.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link 
                href={heroContent.primaryCta.href}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#171513] hover:bg-[#C5A880] text-white hover:text-[#171513] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md group"
              >
                <span>{heroContent.primaryCta.text}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href={heroContent.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#171513] hover:border-[#C5A880] hover:bg-white text-[#171513] hover:text-[#9E7D52] text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300"
              >
                <span>{heroContent.secondaryCta.text}</span>
              </Link>
            </div>

            {/* Trust Accolades */}
            <div className="pt-6 border-t border-[#E8E2D8] flex flex-wrap items-center gap-6 text-xs text-[#827C75]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#C5A880]" />
                <span className="font-medium text-[#171513]">{heroContent.highlightText}</span>
              </div>
              <span className="hidden sm:inline text-[#E8E2D8]">•</span>
              <span className="tracking-wider uppercase text-[11px] text-[#9E7D52] font-medium">{heroContent.badge}</span>
            </div>

          </div>

          {/* Right Column: Layered Editorial Imagery (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              
              {/* Primary High-Fashion Portrait Frame */}
              <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src={heroContent.mainImage}
                  alt="Haute Joaillerie Model Portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#E8D8BE] block mb-1">
                    High Jewelry Exhibition
                  </span>
                  <p className="font-serif text-lg leading-tight font-light">
                    Solitaires Hand-Set in 18K Solid Gold
                  </p>
                </div>
              </div>

              {/* Floating Macro Solitaire Detail Card */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-44 sm:w-52 aspect-square rounded-sm overflow-hidden shadow-2xl border-4 border-white hidden sm:block bg-white group">
                <Image 
                  src={heroContent.detailImage}
                  alt="Solitaire Diamond Macro Detail"
                  fill
                  sizes="220px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs py-1.5 px-2 text-center">
                  <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-[#171513] block">
                    The Solitaire Series
                  </span>
                </div>
              </div>

              {/* Floating Certification Badge */}
              <div className="absolute -top-4 -right-4 bg-[#171513] text-[#E8D8BE] p-4 rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-xl border border-[#C5A880]/40 rotate-12">
                <span className="text-[8px] tracking-widest uppercase font-bold text-[#C5A880]">100%</span>
                <span className="text-[8px] uppercase tracking-tighter leading-none">ETHICAL DIAMONDS</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
