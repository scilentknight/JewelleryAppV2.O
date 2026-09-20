import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-[#FAF8F5] px-4 py-24 text-center min-h-[70vh]">
      {/* Diamond Icon */}
      <div className="mb-8">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 8L12 32L40 72L68 32L40 8Z" stroke="#C5A880" strokeWidth="1.5" fill="none" />
          <path d="M12 32H68" stroke="#C5A880" strokeWidth="1.5" />
          <path d="M28 8L22 32L40 72L58 32L52 8" stroke="#C5A880" strokeWidth="1.5" fill="none" />
          <path d="M40 8V32" stroke="#C5A880" strokeWidth="1.5" />
        </svg>
      </div>

      <h1 className="text-7xl md:text-8xl font-serif text-[#C5A880] mb-4 tracking-tight font-light">404</h1>
      <h2 className="text-2xl md:text-3xl font-serif text-[#171513] mb-3 font-normal">Page Not Found</h2>
      <p className="text-[#827C75] text-xs sm:text-sm max-w-md mb-10 leading-relaxed font-light">
        The requested archival page or piece might have been curated under a different collection, or is temporarily undergoing private salon review.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-[#171513] hover:bg-[#C5A880] text-white hover:text-[#171513] text-xs font-semibold uppercase tracking-[0.2em] px-8 py-3.5 transition-all duration-300 shadow-sm"
        >
          Return to Maison
        </Link>
        <Link
          href="/collections/high-jewelry"
          className="border border-[#C5A880] text-[#171513] hover:bg-[#C5A880] hover:text-white text-xs font-semibold uppercase tracking-[0.2em] px-8 py-3.5 transition-all duration-300"
        >
          Explore High Jewelry
        </Link>
      </div>
    </main>
  );
}
