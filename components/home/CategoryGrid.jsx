import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { luxuryCategories } from "@/utils/data/mockData";

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E2D8]/60">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#9E7D52] font-semibold mb-2">
              <Sparkles size={12} className="text-[#C5A880]" />
              <span>Curated Departments</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#171513] font-normal tracking-tight">
              High Jewelry Curation
            </h2>
          </div>

          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#171513] hover:text-[#C5A880] transition-colors group"
          >
            <span>View All Departments</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {luxuryCategories.map((cat, idx) => {
            const isLarge = idx === 0 || idx === 4;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className={`group relative overflow-hidden rounded-sm bg-white border border-[#E8E2D8]/80 shadow-xs hover:shadow-xl transition-all duration-700 flex flex-col justify-end p-6 md:p-8 cursor-pointer ${
                  isLarge ? "md:col-span-2 min-h-[340px] md:min-h-[420px]" : "min-h-[300px] md:min-h-[380px]"
                }`}
              >
                {/* Background Image with Zoom & Dark Gradient */}
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  className="object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
                />
                
                {/* Gradient Overlays for optimal readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/85 via-[#171513]/30 to-transparent group-hover:from-[#171513]/90 transition-colors duration-500"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#E8D8BE] font-medium mb-1">
                    Maison Series
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-white font-normal mb-2 leading-tight group-hover:text-[#E8D8BE] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#FAF8F5]/80 font-light max-w-md line-clamp-2 mb-4">
                    {cat.subtitle}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-white group-hover:text-[#C5A880] transition-colors">
                    Explore Gallery <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
