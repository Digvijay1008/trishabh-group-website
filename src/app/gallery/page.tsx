"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";
import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/images/BLDG A B C-01.jpg", category: "Exteriors", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/images/DSC_7061.JPG", category: "Interiors", span: "col-span-1 row-span-1" },
  { id: 3, src: "/images/3.jpg", category: "Amenities", span: "col-span-1 row-span-1" },
  { id: 4, src: "/images/Tulsi Meadows Photo for Picture frame.jpg", category: "Exteriors", span: "col-span-1 row-span-2" },
  { id: 5, src: "/images/4.jpg", category: "Exteriors", span: "col-span-1 row-span-1" },
  { id: 6, src: "/images/5.jpg", category: "Interiors", span: "md:col-span-2 row-span-1" },
  { id: 7, src: "/images/7.jpg", category: "Amenities", span: "md:col-span-2 row-span-1" },
];

export default function GalleryPage() {
  return (
    <div className="bg-[#FAF9F7] min-h-screen pt-16 sm:pt-24 pb-20 sm:pb-32">
      <div className="container-luxury">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-[#E86F16]" />
            <span
              className="text-[#3F3F46]/50 uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem" }}
            >
              The Visual Experience
            </span>
            <div className="w-10 h-px bg-[#E86F16]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="text-[#161616] mb-8"
            style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1.05 }}
          >
            Gallery
          </motion.h1>
        </div>

        {/* BENTO GRID GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] sm:auto-rows-[250px] gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE_OUT_EXPO }}
              className={`relative group overflow-hidden bg-[#E8E2D8] ${img.span}`}
            >
              <Image 
                src={img.src} 
                alt={img.category} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-white uppercase tracking-widest text-xs font-medium font-josefin">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
