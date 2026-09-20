"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles } from "lucide-react";

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const href = product.href || `/products/${product.id}`;

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="group relative flex flex-col bg-white border border-[#E8E2D8]/60 hover:border-[#C5A880]/60 transition-all duration-500 rounded-sm overflow-hidden h-full">
      {/* Product Image Frame */}
      <Link href={href} className="relative aspect-[4/5] w-full bg-[#F4EFE6] overflow-hidden block">
        {/* Main Image */}
        <Image 
          src={product.image} 
          alt={product.title} 
          fill 
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className={`object-cover transition-transform duration-700 ${
            product.secondaryImage ? "group-hover:opacity-0" : "group-hover:scale-105"
          }`}
        />

        {/* Secondary Image on Hover if available */}
        {product.secondaryImage && (
          <Image 
            src={product.secondaryImage} 
            alt={`${product.title} Alternate View`}
            fill 
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 absolute inset-0"
          />
        )}

        {/* Luxury Tag */}
        {product.tag && (
          <div className="absolute top-3 left-3 bg-[#171513]/90 backdrop-blur-xs text-[#E8D8BE] text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-xs z-10">
            {product.tag}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#171513] hover:text-[#C5A880] transition-colors shadow-xs z-10"
        >
          <Heart 
            size={14} 
            className={isWishlisted ? "fill-[#C5A880] text-[#C5A880]" : "text-[#171513]"} 
          />
        </button>

        {/* Quick View / Inquire Overlay on hover */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white font-medium bg-[#171513]/90 px-4 py-2 rounded-xs">
            Discover Piece
          </span>
        </div>
      </Link>
      
      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow justify-between text-center bg-white">
        <div>
          {/* Category / Material */}
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#827C75] font-medium block mb-1">
            {product.category || "FINE JEWELRY"}
          </span>

          {/* Title */}
          <h3 className="font-serif text-sm md:text-base text-[#171513] group-hover:text-[#C5A880] transition-colors line-clamp-1 mb-1 font-medium">
            <Link href={href}>{product.title}</Link>
          </h3>

          {/* Gemstone / Metal Specs */}
          {product.stone && (
            <p className="text-[11px] text-[#827C75] line-clamp-1 mb-2">
              {product.stone} • {product.metal}
            </p>
          )}
        </div>

        {/* Pricing */}
        <div className="pt-2 border-t border-[#E8E2D8]/50 flex items-center justify-center gap-2.5">
          {product.oldPrice && (
            <span className="text-xs text-[#827C75] line-through font-normal">
              {product.oldPrice}
            </span>
          )}
          <span className="text-sm font-semibold text-[#171513] tracking-tight">
            {product.price || product.newPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
