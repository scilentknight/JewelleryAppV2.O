"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Check } from "lucide-react";

export default function NewsletterVIP() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-[#F4EFE6] border-b border-[#E8E2D8] relative overflow-hidden">
      {/* Decorative Shimmer Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
        
        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#9E7D52] font-semibold mb-3">
          <Sparkles size={12} className="text-[#C5A880]" />
          <span>The Private Circle</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171513] font-normal tracking-tight mb-4 leading-tight">
          Enter the World of Timeless Radiance
        </h2>

        <p className="text-xs sm:text-sm text-[#827C75] font-light leading-relaxed max-w-xl mx-auto mb-8">
          Receive private invitations to preview new haute joaillerie acquisitions, bespoke jewelry salon evenings, and gemstone curation insights.
        </p>

        {submitted ? (
          <div className="p-6 bg-white border border-[#C5A880] rounded-sm max-w-md mx-auto flex items-center justify-center gap-3 text-[#171513] animate-fade-in shadow-md">
            <Check size={18} className="text-[#9E7D52]" />
            <span className="font-serif text-sm">Thank you. You have been added to our private register.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3.5 bg-white border border-[#E8E2D8] text-xs text-[#171513] placeholder-[#827C75] outline-none rounded-sm focus:border-[#C5A880] transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#171513] hover:bg-[#C5A880] text-[#E8D8BE] hover:text-[#171513] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 rounded-sm shrink-0 flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Subscribe</span>
              <ArrowRight size={13} />
            </button>
          </form>
        )}

        <p className="text-[10px] text-[#827C75] mt-4 font-light">
          We respect your privacy. Unsubscribe at any time.
        </p>

      </div>
    </section>
  );
}
