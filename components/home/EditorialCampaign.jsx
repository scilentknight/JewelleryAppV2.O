import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { editorialCampaign } from "@/utils/data/mockData";

export default function EditorialCampaign() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[580px] flex items-center justify-center overflow-hidden border-b border-[#E8E2D8]/60 group">
      {/* Background Campaign Image */}
      <Image
        src={editorialCampaign.image}
        alt="Sazuna Editorial Campaign"
        fill
        sizes="100vw"
        className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
      />

      {/* Cinematic Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10 text-center flex flex-col items-center py-16">
        
        {/* Campaign Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF8F5]/15 backdrop-blur-md border border-white/20 rounded-full text-[#E8D8BE] text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-semibold mb-6">
          <Sparkles size={12} className="text-[#C5A880]" />
          <span>{editorialCampaign.tagline}</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.15] mb-6 max-w-2xl">
          {editorialCampaign.headline}
        </h2>

        {/* Subtext */}
        <p className="text-xs sm:text-sm md:text-base text-[#FAF8F5]/85 font-light leading-relaxed max-w-xl mb-8">
          {editorialCampaign.subtext}
        </p>

        {/* Action Button */}
        <Link
          href={editorialCampaign.ctaHref}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#FAF8F5] hover:bg-[#C5A880] text-[#171513] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl group/btn"
        >
          <span>{editorialCampaign.ctaText}</span>
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>

      </div>
    </section>
  );
}
