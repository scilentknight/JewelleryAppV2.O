"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { dropdownCategories, navigationItems } from "@/utils/data/mockData";

export default function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [expandedNav, setExpandedNav] = useState(null);

  const getPrefix = (level) => (level > 0 ? "-".repeat(level) + " " : "");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("q", searchQuery.trim());
    if (selectedCategory && selectedCategory !== "All categories") {
      params.set("category", selectedCategory.toLowerCase().replace(/\s+/g, "-"));
    }
    const queryString = params.toString();
    router.push(queryString ? `/search?${queryString}` : "/search");
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
  };

  const toggleSubmenu = (index) => {
    setExpandedNav(expandedNav === index ? null : index);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D8] transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Mobile Menu & Desktop Search Trigger */}
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-[#171513] hover:text-[#C5A880] p-1.5 transition-colors"
              aria-label="Open luxury menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>

            {/* Desktop Search Button */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#827C75] hover:text-[#171513] transition-colors py-1.5 px-3 border border-[#E8E2D8] rounded-full hover:border-[#C5A880] bg-white/60"
            >
              <Search size={14} className="text-[#C5A880]" />
              <span>Search Fine Jewelry...</span>
            </button>
          </div>

          {/* Center: Luxury Maison Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <Link href="/" className="group flex flex-col items-center">
              <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-semibold text-[#171513] group-hover:text-[#C5A880] transition-colors duration-300">
                ALORA
              </span>
              <span className="text-[9px] tracking-[0.35em] text-[#827C75] uppercase mt-0.5 font-medium">
                HAUTE JOAILLERIE • KATHMANDU
              </span>
            </Link>
          </div>

          {/* Right: VIP Concierge, Account, Wishlist, Cart */}
          <div className="flex items-center justify-end gap-3 md:gap-5 flex-1 text-[#171513]">
            {/* Mobile Search Icon */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="lg:hidden p-1.5 text-[#171513] hover:text-[#C5A880] transition-colors"
              aria-label="Open search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            {/* Account */}
            <Link 
              href="/account" 
              className="hidden sm:flex items-center gap-1.5 text-xs tracking-wider uppercase text-[#171513] hover:text-[#C5A880] transition-colors p-1"
              title="Client Account"
            >
              <User size={18} strokeWidth={1.5} />
            </Link>

            {/* Wishlist */}
            <Link 
              href="/wishlist" 
              className="relative p-1.5 text-[#171513] hover:text-[#C5A880] transition-colors"
              title="Saved Pieces"
            >
              <Heart size={19} strokeWidth={1.5} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#C5A880] rounded-full"></span>
            </Link>

            {/* Shopping Bag */}
            <Link 
              href="/cart" 
              className="relative flex items-center gap-1 p-1.5 text-[#171513] hover:text-[#C5A880] transition-colors"
              title="Shopping Bag"
            >
              <ShoppingBag size={19} strokeWidth={1.5} />
              <span className="bg-[#171513] text-[#E8D8BE] text-[10px] font-medium px-1.5 py-0.2 rounded-full min-w-[18px] text-center leading-4">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Luxury Search Modal Overlay */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-fade-in">
          <div className="bg-[#FAF8F5] border border-[#E8E2D8] w-full max-w-2xl rounded-sm shadow-2xl p-6 relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8]">
              <span className="font-serif text-lg text-[#171513] tracking-wider flex items-center gap-2">
                <Sparkles size={16} className="text-[#C5A880]" />
                Explore The Haute Joaillerie Catalog
              </span>
              <button 
                onClick={() => setSearchModalOpen(false)}
                className="text-[#827C75] hover:text-[#171513] p-1"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="mt-6 flex flex-col md:flex-row gap-3">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-3 bg-white border border-[#E8E2D8] text-xs text-[#171513] outline-none rounded-sm cursor-pointer md:w-48 font-medium"
              >
                <option value="All categories">All Categories</option>
                {dropdownCategories.map((cat, idx) => (
                  <option key={idx} value={cat.label}>
                    {getPrefix(cat.level)}{cat.label}
                  </option>
                ))}
              </select>
              <div className="flex-1 flex items-center border border-[#E8E2D8] bg-white rounded-sm overflow-hidden focus-within:border-[#C5A880]">
                <input 
                  type="text" 
                  placeholder="Search solitaire rings, haute colliers, diamond earrings..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3 text-sm text-[#171513] outline-none bg-transparent"
                  autoFocus
                />
                <button 
                  type="submit"
                  className="px-5 bg-[#171513] hover:bg-[#C5A880] text-white text-xs uppercase tracking-widest font-medium py-3.5 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="mt-4 flex items-center gap-2 text-xs text-[#827C75]">
              <span className="font-medium text-[#171513]">Popular Searches:</span>
              <Link href="/rings/engagement-rings" onClick={() => setSearchModalOpen(false)} className="hover:text-[#C5A880] underline">Engagement Rings</Link>
              <span>•</span>
              <Link href="/wedding-necklace" onClick={() => setSearchModalOpen(false)} className="hover:text-[#C5A880] underline">Bridal Colliers</Link>
              <span>•</span>
              <Link href="/earrings/diamond-studs" onClick={() => setSearchModalOpen(false)} className="hover:text-[#C5A880] underline">Solitaire Studs</Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex animate-fade-in">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-4/5 max-w-sm bg-[#FAF8F5] h-full shadow-2xl flex flex-col z-10 overflow-y-auto border-r border-[#E8E2D8]">
            <div className="p-6 border-b border-[#E8E2D8] flex items-center justify-between bg-white">
              <div>
                <span className="font-serif text-xl font-bold tracking-[0.2em] text-[#171513]">ALORA</span>
                <p className="text-[9px] tracking-widest text-[#827C75] uppercase">HAUTE JOAILLERIE</p>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#827C75] hover:text-[#171513]"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 py-4 px-4 overflow-y-auto">
              <p className="px-2 py-2 text-[10px] font-bold text-[#827C75] uppercase tracking-[0.2em]">Collections & High Jewelry</p>
              <ul className="flex flex-col space-y-1">
                {navigationItems.map((item, index) => (
                  <li key={index} className="border-b border-[#E8E2D8]/50 pb-1">
                    <div className="flex items-center justify-between py-2 px-2 hover:bg-white/60 rounded-sm">
                      <Link 
                        href={item.href} 
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs uppercase tracking-[0.14em] font-medium text-[#171513] hover:text-[#C5A880] flex-1"
                      >
                        {item.name}
                      </Link>
                      {item.subItems && item.subItems.length > 0 && (
                        <button 
                          onClick={() => toggleSubmenu(index)} 
                          className="p-1 text-[#827C75] hover:text-[#171513]"
                        >
                          {expandedNav === index ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        </button>
                      )}
                    </div>

                    {item.subItems && item.subItems.length > 0 && expandedNav === index && (
                      <ul className="bg-white/70 py-2 pl-4 pr-2 space-y-1 my-1 rounded-sm border-l-2 border-[#C5A880]">
                        {item.subItems.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link 
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-xs text-[#827C75] hover:text-[#171513] transition-colors"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border-t border-[#E8E2D8] bg-white flex flex-col gap-3">
              <Link 
                href="/account" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#171513] hover:text-[#C5A880]"
              >
                <User size={16} /> Client Portal / Account
              </Link>
              <Link 
                href="/wishlist" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#171513] hover:text-[#C5A880]"
              >
                <Heart size={16} /> Saved Curations (Wishlist)
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center bg-[#171513] text-[#E8D8BE] text-xs uppercase tracking-widest py-3 hover:bg-[#C5A880] hover:text-white transition-colors"
              >
                Book Private Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
