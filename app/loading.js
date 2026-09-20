export default function Loading() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-[#FAF8F5] px-4 py-24 min-h-[70vh]">
      {/* Animated Diamond Loader */}
      <div className="relative mb-6">
        <div className="w-14 h-14 border border-[#C5A880] rotate-45 animate-pulse"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-t-2 border-r-2 border-[#171513] rotate-45 animate-spin" style={{ animationDuration: "1.5s" }}></div>
        </div>
      </div>

      <span className="font-serif text-xs uppercase tracking-[0.3em] text-[#9E7D52] font-semibold animate-pulse">
        Sazuna Haute Joaillerie
      </span>
    </main>
  );
}
