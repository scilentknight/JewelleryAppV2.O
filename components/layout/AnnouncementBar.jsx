"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const announcements = [
  { text: "Complimentary Insured Delivery Across Nepal & Worldwide", href: "/about" },
  { text: "100% Certified Conflict-Free Natural Diamonds & 24K Hallmarking", href: "/about/ethical-sourcing" },
  { text: "Private VIP Showroom Consultations Available at New Road", href: "/contact" },
  { text: "Autumn / Winter 2026 Haute Joaillerie Collection Now Live", href: "/collections/high-jewelry" },
  { text: "Direct Atelier WhatsApp Concierge: +977-9803999930", href: "https://wa.me/9779803999930" }
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
        setIsFading(false);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const current = announcements[currentIndex];

  return (
    <aside aria-label="Announcements" className="bg-[#171513] text-[#E8D8BE] text-[11px] uppercase tracking-[0.18em] py-2 px-4 flex justify-center items-center overflow-hidden min-h-[32px] select-none border-b border-[#2A2521]">
      <div
        className={`transition-all duration-300 transform flex items-center gap-2 text-center font-medium ${
          isFading ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        <Sparkles size={11} className="text-[#C5A880] shrink-0" />
        <Link 
          href={current.href} 
          className="hover:text-white transition-colors duration-200 truncate max-w-[90vw]"
        >
          {current.text}
        </Link>
      </div>
    </aside>
  );
}
