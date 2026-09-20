"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-[#FAF8F5] px-4 py-24 text-center min-h-[70vh]">
      <div className="mb-8 w-16 h-16 rounded-full bg-[#F4EFE6] border border-[#C5A880] flex items-center justify-center text-[#9E7D52]">
        <AlertCircle size={28} />
      </div>

      <h1 className="text-3xl md:text-4xl font-serif text-[#171513] mb-3 font-normal">A Temporary Interruption</h1>
      <p className="text-[#827C75] text-xs sm:text-sm max-w-md mb-10 leading-relaxed font-light">
        We encountered a momentary issue while rendering the salon view. Please refresh or return to the main gallery.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="bg-[#171513] hover:bg-[#C5A880] text-white hover:text-[#171513] text-xs font-semibold uppercase tracking-[0.2em] px-8 py-3.5 transition-all duration-300 shadow-sm cursor-pointer"
        >
          Retry Connection
        </button>
        <Link
          href="/"
          className="border border-[#C5A880] text-[#171513] hover:bg-[#C5A880] hover:text-white text-xs font-semibold uppercase tracking-[0.2em] px-8 py-3.5 transition-all duration-300"
        >
          Return to Maison
        </Link>
      </div>
    </main>
  );
}
