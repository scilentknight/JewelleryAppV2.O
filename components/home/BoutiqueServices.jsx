import { Gem, Sparkles, ShieldCheck, Truck } from "lucide-react";
import { boutiqueServices } from "@/utils/data/mockData";

export default function BoutiqueServices() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Gem": return <Gem size={24} className="text-[#C5A880]" />;
      case "Sparkles": return <Sparkles size={24} className="text-[#C5A880]" />;
      case "ShieldCheck": return <ShieldCheck size={24} className="text-[#C5A880]" />;
      case "Truck": return <Truck size={24} className="text-[#C5A880]" />;
      default: return <Sparkles size={24} className="text-[#C5A880]" />;
    }
  };

  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-[#E8E2D8]/60">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boutiqueServices.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white border border-[#E8E2D8]/60 rounded-sm hover:border-[#C5A880]/60 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="font-serif text-base text-[#171513] font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-[#827C75] leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
