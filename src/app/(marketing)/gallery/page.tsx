"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

type GalleryItem = {
  id: number;
  src: string;
  title: string;
  category: "Landmarks" | "Interiors" | "Completed";
  span: string;
};

const galleryImages: GalleryItem[] = [
  // Block 1
  { id: 1, src: "/images/elevations/trishabh-miraya.jpg", title: "Trishabh Miraya", category: "Landmarks", span: "md:col-span-2 md:row-span-2 min-h-[380px] sm:min-h-[460px]" },
  { id: 2, src: "/images/DSC_7061.JPG", title: "Curated Luxury Living", category: "Interiors", span: "md:col-span-1 md:row-span-1 min-h-[220px]" },
  { id: 3, src: "/images/elevations/trishabh-aura.jpg", title: "Trishabh Aura", category: "Landmarks", span: "md:col-span-1 md:row-span-1 min-h-[220px]" },
  
  // Block 2
  { id: 4, src: "/images/elevations/trishabh-signet.jpg", title: "Trishabh Signet", category: "Landmarks", span: "md:col-span-1 md:row-span-2 min-h-[380px] sm:min-h-[460px]" },
  { id: 5, src: "/images/elevations/tulsi-pride.jpg", title: "Tulsi Pride", category: "Completed", span: "md:col-span-1 md:row-span-1 min-h-[220px]" },
  { id: 6, src: "/images/elevations/trishabh-greens.jpg", title: "Trishabh Greens", category: "Landmarks", span: "md:col-span-2 md:row-span-1 min-h-[220px]" },
  
  // Block 3
  { id: 7, src: "/images/5.jpg", title: "Master Suite Sanctuary", category: "Interiors", span: "md:col-span-2 md:row-span-1 min-h-[220px]" },
  { id: 8, src: "/images/Tulsi Meadows Photo for Picture frame.jpg", title: "Tulsi Meadows", category: "Completed", span: "md:col-span-1 md:row-span-2 min-h-[380px] sm:min-h-[460px]" },
  { id: 9, src: "/images/Raj Jain Front View 01.jpg", title: "Raj Jain Facade", category: "Landmarks", span: "md:col-span-1 md:row-span-1 min-h-[220px]" },
  
  // Block 4
  { id: 10, src: "/images/elevations/tulsi-classic.jpg", title: "Tulsi Classic", category: "Completed", span: "md:col-span-2 md:row-span-2 min-h-[380px] sm:min-h-[460px]" },
  { id: 11, src: "/images/3.jpg", title: "Spa & Wellness Bath", category: "Interiors", span: "md:col-span-1 md:row-span-1 min-h-[220px]" },
  { id: 12, src: "/images/elevations/tulsi-majestic.jpg", title: "Tulsi Majestic", category: "Completed", span: "md:col-span-1 md:row-span-1 min-h-[220px]" },
  { id: 13, src: "/images/BLDG A B C-01.jpg", title: "Trishabh Campus Enclave", category: "Completed", span: "md:col-span-2 md:row-span-1 min-h-[220px]" },
];

const categories = ["All", "Landmarks", "Interiors", "Completed"] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
  }, [selectedImageIndex, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
  }, [selectedImageIndex, filteredImages.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, nextImage, prevImage]);

  return (
    <div className="bg-[#FAF9F7] min-h-[100dvh] pt-20 sm:pt-28 pb-24 sm:pb-36">
      <div className="container-luxury">
        {/* Editorial Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-[#E86F16]" />
            <span
              className="text-[#3F3F46]/60 uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem" }}
            >
              The Visual Experience
            </span>
            <div className="w-10 h-px bg-[#E86F16]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="text-[#161616] mb-6"
            style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(3rem, 5.5vw, 4.75rem)", lineHeight: 1.05 }}
          >
            Curated Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: EASE_OUT_EXPO }}
            className="text-[#3F3F46]/70 max-w-lg mx-auto text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            An intimate visual showcase of Mumbai&apos;s most refined architectural landmarks, bespoke residences, and artisanal interior spaces.
          </motion.p>
        </div>

        {/* Category Filter Pills — High-End Micro-Interaction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT_EXPO }}
          className="flex items-center justify-center mb-16"
        >
          <div className="inline-flex p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E7E2D9] shadow-sm">
            {categories.map((cat) => {
              const count = cat === "All" ? galleryImages.length : galleryImages.filter((g) => g.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedImageIndex(null);
                  }}
                  className={`relative px-4 sm:px-6 py-2 rounded-full text-[11px] uppercase tracking-wider font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-[#3F3F46]/70 hover:text-[#161616]"
                  }`}
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-[#161616] rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat}
                    <span className={`text-[9px] ${isActive ? "text-[#E86F16]" : "text-[#3F3F46]/40"}`}>
                      ({count})
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Bento Grid Gallery with Double-Bezel Hardware Architecture */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-4 grid-flow-dense auto-rows-[230px] sm:auto-rows-[260px] gap-4 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: EASE_OUT_EXPO }}
                onClick={() => openLightbox(i)}
                className={`group cursor-pointer relative ${activeCategory === "All" ? img.span : "md:col-span-2 min-h-[300px]"}`}
              >
                {/* Outer Shell (Double-Bezel) */}
                <div className="bg-white/70 p-2 rounded-2xl md:rounded-[2rem] border border-[#E7E2D9] shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(232,111,22,0.18)] transition-all duration-700 hover:-translate-y-1.5 h-full backdrop-blur-sm">
                  {/* Inner Core */}
                  <div className="relative w-full h-full rounded-xl md:rounded-[calc(2rem-0.5rem)] overflow-hidden border border-black/5 bg-[#161616]">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Ambient Vignette Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/90 via-[#161616]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Top-Right Expand Icon Pill */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-md">
                      <Maximize2 size={13} className="text-[#E86F16]" />
                    </div>

                    {/* Bottom Metadata Label */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between transition-all duration-500">
                      <div>
                        <span
                          className="text-[#E86F16] uppercase tracking-[0.2em] text-[9px] sm:text-[10px] font-semibold block mb-1"
                          style={{ fontFamily: "var(--font-josefin)" }}
                        >
                          {img.category}
                        </span>
                        <h3
                          className="text-white text-base sm:text-lg font-normal"
                          style={{ fontFamily: "var(--font-cinzel)" }}
                        >
                          {img.title}
                        </h3>
                      </div>
                      <div className="hidden sm:flex items-center text-white/50 text-[10px] uppercase tracking-wider group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-josefin)" }}>
                        View ↗
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive High-End Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] bg-[#0A0A0A]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Top Bar Controls */}
            <div 
              className="absolute top-6 left-6 right-6 flex items-center justify-between z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E86F16] animate-pulse" />
                <span className="text-white/60 text-xs tracking-widest uppercase font-medium" style={{ fontFamily: "var(--font-josefin)" }}>
                  {filteredImages[selectedImageIndex].category} · {selectedImageIndex + 1} / {filteredImages.length}
                </span>
              </div>

              {/* Close Button with Micro-Bezel */}
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E86F16] text-white flex items-center justify-center border border-white/15 transition-all duration-300 hover:rotate-90 shadow-lg"
                aria-label="Close Lightbox"
              >
                <X size={18} />
              </button>
            </div>

            {/* Left Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E86F16] text-white flex items-center justify-center border border-white/15 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl"
              aria-label="Previous Image"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E86F16] text-white flex items-center justify-center border border-white/15 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl"
              aria-label="Next Image"
            >
              <ChevronRight size={20} />
            </button>

            {/* Main Stage Image with Double-Bezel Frame */}
            <motion.div
              key={selectedImageIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="relative max-w-5xl w-full max-h-[82vh] h-full flex flex-col items-center justify-center p-2 rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full rounded-xl md:rounded-[calc(2rem-0.5rem)] overflow-hidden">
                <Image
                  src={filteredImages[selectedImageIndex].src}
                  alt={filteredImages[selectedImageIndex].title}
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                />
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#161616]/90 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-center shadow-xl">
                <h4 className="text-white text-base sm:text-lg font-medium" style={{ fontFamily: "var(--font-cinzel)" }}>
                  {filteredImages[selectedImageIndex].title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
