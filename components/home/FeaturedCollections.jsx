import Image from "next/image";
import Link from "next/link";
import { featuredCategories } from "@/utils/data/mockData";

export default function FeaturedCollections() {
  const bgColors = ["bg-[#153A4F]", "bg-[#2D635C]", "bg-[#5A272A]"];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCategories.map((category, index) => {
            const href = category.href || "/collections";
            return (
              <Link 
                key={category.id} 
                href={href}
                className={`relative h-[300px] w-full overflow-hidden flex flex-col justify-between items-center p-8 group ${bgColors[index % bgColors.length]} cursor-pointer`}
              >
                {/* Using mix-blend for the background image to replicate the screenshot style */}
                <div className="absolute inset-0 opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-white font-serif text-lg tracking-widest text-center max-w-[200px]">
                  {category.title}
                </h3>

                {/* Button */}
                <span className="relative z-10 bg-[#B08D79] group-hover:bg-[#A07A65] text-white text-xs font-bold tracking-wider px-6 py-2.5 mt-auto transition-colors">
                  {category.buttonText}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
