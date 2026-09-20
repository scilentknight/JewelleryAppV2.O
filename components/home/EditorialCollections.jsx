import Image from "next/image";
import Link from "next/link";
import { editorialCollections } from "@/utils/data/mockData";

export default function EditorialCollections() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {editorialCollections.map((collection) => {
            const href = collection.href || "/collections";
            return (
              <Link 
                key={collection.id} 
                href={href}
                className="relative h-[250px] sm:h-[300px] w-full group overflow-hidden cursor-pointer"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Optional overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-between p-6 sm:p-8">
                  <h3 className="text-white font-serif text-lg tracking-widest text-center">
                    {collection.title}
                  </h3>
                  <span className="bg-[#B08D79] group-hover:bg-[#A07A65] text-white text-xs font-bold tracking-wider px-6 py-2.5 transition-colors">
                    {collection.buttonText}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
