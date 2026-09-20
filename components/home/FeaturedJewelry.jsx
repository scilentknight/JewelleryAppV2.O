"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { signatureProducts } from "@/utils/data/mockData";
import ProductCard from "@/components/product/ProductCard";

const tabs = ["ALL PIECES", "RINGS", "NECKLACES", "EARRINGS", "BRACELETS", "BRIDAL"];

export default function FeaturedJewelry() {
  const [activeTab, setActiveTab] = useState("ALL PIECES");

  const filteredProducts = activeTab === "ALL PIECES"
    ? signatureProducts
    : signatureProducts.filter(p => p.category === activeTab);

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E8E2D8]/60">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Header with Title & Tabs */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#9E7D52] font-semibold mb-2">
            <Sparkles size={12} className="text-[#C5A880]" />
            <span>The Signature Curation</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171513] font-normal tracking-tight mb-4">
            Masterpiece Creations
          </h2>
          <p className="text-xs sm:text-sm text-[#827C75] font-light">
            Individually certified diamonds, precision set in solid hallmarked gold. Each piece is an exemplar of Kathmandu craftsmanship.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-5 py-2 text-[11px] uppercase tracking-[0.18em] font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#171513] text-[#E8D8BE] shadow-xs"
                    : "bg-white/80 text-[#827C75] hover:text-[#171513] border border-[#E8E2D8]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 bg-white border border-[#E8E2D8] rounded-sm gap-4">
          <div>
            <h4 className="font-serif text-lg text-[#171513] font-medium mb-1">
              Seeking a Specific Diamond Cut or Custom Carat?
            </h4>
            <p className="text-xs text-[#827C75]">
              Our master gemologists source rare GIA/IGI-certified stones directly for custom bespoke commissions.
            </p>
          </div>

          <Link
            href="/bespoke"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF8F5] hover:bg-[#171513] text-[#171513] hover:text-[#E8D8BE] border border-[#171513] text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 shrink-0"
          >
            <span>Commission Custom Piece</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}
