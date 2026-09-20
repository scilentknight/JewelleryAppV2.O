import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck, Gem, Award, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#171513] text-[#FAF8F5] pt-20 pb-10 border-t border-[#2A2521]">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Top Maison Banner */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-16 border-b border-[#2A2521] gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-semibold flex items-center gap-2 mb-2">
              <Sparkles size={12} /> The Alora Promise
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#FAF8F5] leading-snug">
              Every Diamond Tells an Eternal Story of Radiance & Grace.
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C5A880] hover:bg-[#9E7D52] text-[#171513] text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300"
            >
              <span>Book Showroom Appointment</span>
              <ArrowUpRight size={14} />
            </Link>
            <a
              href="https://wa.me/9779803999930"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#443D36] hover:border-[#C5A880] text-[#E8D8BE] text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>

        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-[#2A2521]">
          
          {/* Column 1: Maison Provenance */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <span className="font-serif text-2xl tracking-[0.25em] font-semibold text-[#FAF8F5]">ALORA</span>
              <p className="text-[9px] tracking-[0.35em] text-[#C5A880] uppercase mt-1">HAUTE JOAILLERIE • EST. 1998</p>
            </div>
            <p className="text-xs text-[#827C75] leading-relaxed max-w-sm">
              Nepal&apos;s premier destination for rare, conflict-free natural diamonds, 24K pure goldsmithing, and bespoke heirloom engagement masterpieces.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-[#FAF8F5]/80 mt-2">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#C5A880] shrink-0 mt-0.5" />
                <span>New Road Showroom, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#C5A880] shrink-0" />
                <span>+977-1-5914477 • +977-9801082897</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#C5A880] shrink-0" />
                <span>contact@alorajewellers.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={14} className="text-[#C5A880] shrink-0" />
                <span>Sun – Fri: 10:30 AM – 7:30 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: High Jewelry */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">Collections</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#827C75]">
              <li><Link href="/rings/diamond-rings" className="hover:text-[#FAF8F5] transition-colors">Solitaire Diamond Rings</Link></li>
              <li><Link href="/wedding-necklace" className="hover:text-[#FAF8F5] transition-colors">Royal Wedding Colliers</Link></li>
              <li><Link href="/earrings/diamond-studs" className="hover:text-[#FAF8F5] transition-colors">Diamond Studs & Drops</Link></li>
              <li><Link href="/mangalsutra" className="hover:text-[#FAF8F5] transition-colors">Sacred Mangalsutras</Link></li>
              <li><Link href="/bracelets/tennis-bracelets" className="hover:text-[#FAF8F5] transition-colors">Tennis Diamond Bracelets</Link></li>
              <li><Link href="/nosepins/diamond-nosepins" className="hover:text-[#FAF8F5] transition-colors">Fine Diamond Nosepins</Link></li>
              <li><Link href="/collections/high-jewelry" className="hover:text-[#FAF8F5] transition-colors">Haute Joaillerie Archive</Link></li>
            </ul>
          </div>

          {/* Column 3: The Maison */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">The Maison</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#827C75]">
              <li><Link href="/about" className="hover:text-[#FAF8F5] transition-colors">Atelier Heritage</Link></li>
              <li><Link href="/about/ethical-sourcing" className="hover:text-[#FAF8F5] transition-colors">Ethical Diamond Grading</Link></li>
              <li><Link href="/bespoke" className="hover:text-[#FAF8F5] transition-colors">Bespoke Commissions</Link></li>
              <li><Link href="/testimonials" className="hover:text-[#FAF8F5] transition-colors">Client Testimonials</Link></li>
              <li><Link href="/quality-certification" className="hover:text-[#FAF8F5] transition-colors">Hallmark Certification</Link></li>
              <li><Link href="/contact" className="hover:text-[#FAF8F5] transition-colors">Visit Kathmandu Boutique</Link></li>
            </ul>
          </div>

          {/* Column 4: Client Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">Client Services</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#827C75]">
              <li><Link href="/shipping-delivery" className="hover:text-[#FAF8F5] transition-colors">Insured Shipping & Delivery</Link></li>
              <li><Link href="/maintenance-repair" className="hover:text-[#FAF8F5] transition-colors">Complimentary Lifetime Care</Link></li>
              <li><Link href="/ring-size-guide" className="hover:text-[#FAF8F5] transition-colors">Bespoke Sizing Guide</Link></li>
              <li><Link href="/exchange-return-policy" className="hover:text-[#FAF8F5] transition-colors">Exchange & Buyback Terms</Link></li>
              <li><Link href="/order-tracking" className="hover:text-[#FAF8F5] transition-colors">Track Your Commission</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#FAF8F5] transition-colors">Client Confidentiality</Link></li>
            </ul>
          </div>

        </div>

        {/* Accreditations & Certifications Bar */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-6 border-b border-[#2A2521] text-xs text-[#827C75]">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Gem size={15} className="text-[#C5A880]" />
              <span>100% Certified Conflict-Free Natural Diamonds</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-[#C5A880]" />
              <span>Government Hallmarked Pure Gold (18K & 24K)</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={15} className="text-[#C5A880]" />
              <span>Guaranteed Lifetime Buyback & Authenticity</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[#827C75]">
            <a href="https://instagram.com/alorajewellers" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors uppercase tracking-widest text-[10px]">Instagram</a>
            <span>•</span>
            <a href="https://facebook.com/alorajewellers" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors uppercase tracking-widest text-[10px]">Facebook</a>
            <span>•</span>
            <a href="https://tiktok.com/@alorajewellers" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors uppercase tracking-widest text-[10px]">TikTok</a>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#635E59] gap-4">
          <p>&copy; {new Date().getFullYear()} ALORA FINE JEWELLERS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#FAF8F5] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#FAF8F5] transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-[#FAF8F5] transition-colors">Accessibility</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

