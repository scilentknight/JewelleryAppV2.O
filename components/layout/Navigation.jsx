import Link from "next/link";
import { navigationItems } from "@/utils/data/mockData";

export default function Navigation() {
  return (
    <nav className="bg-[#FAF8F5] hidden lg:block border-b border-[#E8E2D8]/60 select-none">
      <div className="container mx-auto px-6 max-w-7xl flex justify-center">
        <ul className="flex items-center gap-7 xl:gap-9">
          {navigationItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link 
                href={item.href} 
                className="text-[11px] font-semibold text-[#25221E] hover:text-[#C5A880] tracking-[0.18em] transition-colors flex items-center gap-1.5 py-3.5 relative"
              >
                <span>{item.name}</span>
                {item.subItems && item.subItems.length > 0 && (
                  <svg 
                    width="6" 
                    height="4" 
                    viewBox="0 0 6 4" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="text-[#827C75] group-hover:text-[#C5A880] group-hover:rotate-180 transition-transform duration-300"
                  >
                    <path d="M3 4L0 0H6L3 4Z" />
                  </svg>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A880] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Luxury Dropdown Menu */}
              {item.subItems && item.subItems.length > 0 && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-[#FAF8F5]/95 backdrop-blur-md shadow-2xl border border-[#E8E2D8] min-w-[240px] py-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 rounded-sm">
                  <div className="px-4 py-1.5 mb-1 border-b border-[#E8E2D8]/50">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#827C75] font-bold">Curated Series</span>
                  </div>
                  <ul className="flex flex-col">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link 
                          href={subItem.href} 
                          className="block px-4 py-2 text-xs text-[#25221E] hover:text-[#C5A880] hover:bg-white/80 transition-colors tracking-wide font-medium"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

