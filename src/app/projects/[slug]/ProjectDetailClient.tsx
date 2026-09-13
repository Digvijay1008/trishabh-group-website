"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight, Download, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { EASE_OUT_EXPO } from "@/lib/easing";
import { notFound } from "next/navigation";

// Mock data (in a real app this would come from a CMS like Sanity)
const projectsData = {
  "trishabh-miraya": {
    name: "Trishabh Miraya",
    location: "Chembur, Mumbai",
    type: "3 & 4 BHK Luxury Residences",
    price: "Price on Request",
    status: "Ongoing",
    area: "2.1 Acres",
    units: "120",
    completion: "Dec 2026",
    bgBase: "#EDE9E2",
    towerColor: "#8C7B6B",
    highlight: "#C8A870",
    image: "/images/elevations/trishabh-miraya.jpg",
    vision: "Designed for the modern connoisseur, Miraya is an architectural triumph standing tall in the heart of Chembur. It seamlessly blends biophilic design principles with unparalleled luxury.",
    amenities: ["Infinity Edge Pool", "Private Cinema", "Sky Lounge", "State-of-the-art Gym", "Zen Garden"],
  },
  "trishabh-aura": {
    name: "Trishabh Aura",
    location: "Chembur, Mumbai",
    type: "2 & 2.5 BHK Golf-View Residences",
    price: "Price on Request",
    status: "Ongoing",
    area: "8 Floors",
    units: "Exclusive",
    completion: "Dec 2026",
    bgBase: "#E5E7E6",
    towerColor: "#758079",
    highlight: "#98A8A0",
    image: "/images/elevations/trishabh-aura.jpg",
    vision: "A luxury GOLF-VIEW tower offering for just a selected few with lavish 2 and 2.5 bedroom residences that serve as the perfect extension of your personality.",
    amenities: ["Golf View", "Premium Residences", "Advanced Security", "Private Lobby"],
  },
  "trishabh-greens": {
    name: "Trishabh Greens",
    location: "Chembur, Mumbai",
    type: "1, 2, 2.5 & 3 BHK Premium Apartments",
    price: "Price on Request",
    status: "Completed",
    area: "Basement + 14 Floors",
    units: "3 Towers",
    completion: "Completed",
    bgBase: "#E8E2D8",
    towerColor: "#7A6B5B",
    highlight: "#B89860",
    image: "/images/elevations/trishabh-greens.jpg",
    vision: "Comprising of 3 magnificent towers offers breath-taking view of Golf Club right from the 1st floor offering sprawling residences with modern amenities.",
    amenities: ["Golf View Garden", "Swimming Pool", "Indoor Games", "Banquet Hall", "Gymnasium"],
  },
  "tulsi-meadows": {
    name: "Tulsi Meadows",
    location: "Chembur, Mumbai",
    type: "3 BHK Ultra-Luxury Residences",
    price: "Price on Request",
    status: "Completed",
    area: "Podium + 7 Floors",
    units: "Exclusive",
    completion: "Completed",
    bgBase: "#E4DED4",
    towerColor: "#9A8A7A",
    highlight: "#D4B888",
    image: "/images/elevations/tulsi-meadows.jpg",
    vision: "Chembur's first ever 7 storey building with Rooftop swimming pool, Gymnasium, Steam room, Yoga & Meditation room Banquet hall & much more.",
    amenities: ["Yoga & Meditation Room", "Swimming Pool", "Steam Room", "Banquet Hall", "Gymnasium"],
  },
  "trishabh-signet": {
    name: "Trishabh Signet",
    location: "Chembur, Mumbai",
    type: "3 & 4 BHK Luxury Residences",
    price: "Price on Request",
    status: "Completed",
    area: "12 Floors",
    units: "Exclusive",
    completion: "Completed",
    bgBase: "#DFE3E0",
    towerColor: "#6B7A75",
    highlight: "#98B8AC",
    image: "/images/elevations/trishabh-signet.jpg",
    vision: "A stand-alone luxury tower offering for just a selected few with lavish 3 and 4 bedroom residences that serve as the perfect extension of your personality. Enjoys close proximity to all conveniences.",
    amenities: ["Luxury Residences", "Premium Location", "Advanced Security"],
  },
  "tulsi-pride": {
    name: "Tulsi Pride",
    location: "Chembur, Mumbai",
    type: "3 BHK Boutique Apartments",
    price: "Price on Request",
    status: "Completed",
    area: "14 Floors",
    units: "One flat per floor",
    completion: "Completed",
    bgBase: "#E5E1DB",
    towerColor: "#8A7D70",
    highlight: "#C2A888",
    image: "/images/elevations/tulsi-pride.jpg",
    vision: "A stilt + 14 stories, comprising of sprawling 3 BHK with a layout of one flat per floor that compliments your need for privacy, exclusivity and style.",
    amenities: ["Private Floor Layout", "Exclusivity", "Premium Location"],
  },
  "prabhat": {
    name: "Prabhat",
    location: "Chembur, Mumbai",
    type: "2 & 3 BHK Residential cum Commercial",
    price: "Price on Request",
    status: "Completed",
    area: "G + 6 Floors",
    units: "Mixed Use",
    completion: "Completed",
    bgBase: "#E8E2D8",
    towerColor: "#7A6B5B",
    highlight: "#B89860",
    image: "/images/elevations/prabhat.jpg",
    vision: "A 6-storey residential cum commercial building with well plan layout offering 2 & 3 BHK Residences located on most prime location of Chembur.",
    amenities: ["Prime Location", "Commercial Spaces", "Well-Planned Layout"],
  },
  "tulsi-villa": {
    name: "Tulsi Villa",
    location: "Chembur, Mumbai",
    type: "2 BHK Residences",
    price: "Price on Request",
    status: "Completed",
    area: "G + 6 Floors",
    units: "Exclusive",
    completion: "Completed",
    bgBase: "#DFE2E5",
    towerColor: "#707A8A",
    highlight: "#88A2C2",
    image: "/images/elevations/tulsi-villa.jpg",
    vision: "A beautiful residential development offering premium 2 BHK homes in the heart of Chembur with top-class construction.",
    amenities: ["Residential Complex", "Premium Finish"],
  },
  "tulsi-classic": {
    name: "Tulsi Classic",
    location: "Chembur, Mumbai",
    type: "Premium Residences",
    price: "Price on Request",
    status: "Completed",
    area: "Premium",
    units: "Exclusive",
    completion: "Completed",
    bgBase: "#EDE9E2",
    towerColor: "#8C7B6B",
    highlight: "#C8A870",
    image: "/images/elevations/tulsi-classic.jpg",
    vision: "A classic creation complete with top-of-the-line amenities and facilities combined with a liberal sprinkling of greenery.",
    amenities: ["Top-of-the-line Facilities", "Greenery & Landscaping"],
  },
  "tulsi-majestic": {
    name: "Tulsi Majestic",
    location: "Chembur, Mumbai",
    type: "3 BHK Boutique Apartments",
    price: "Price on Request",
    status: "Completed",
    area: "13 Floors",
    units: "Exclusive",
    completion: "Completed",
    bgBase: "#E4DED4",
    towerColor: "#9A8A7A",
    highlight: "#D4B888",
    image: "/images/elevations/tulsi-majestic.jpg",
    vision: "A boutique residential tower of 13 storeys with lavish 3 bed apartments that caters to aesthetic as well as recreational needs with ultra-modern amenities in an earthquake resistant design.",
    amenities: ["Earthquake Resistant Design", "Recreational Facilities", "Ultra-Modern Amenities"],
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectDetailClient({ slug, initialProject }: { slug: string, initialProject?: any }) {
  const isSanity = !!initialProject;
  const project = initialProject || projectsData[slug as keyof typeof projectsData];
  
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Immersive Hero */}
      <div className="relative h-[80vh] min-h-[600px] w-full flex items-end pb-24" style={{ background: project.bgBase || "#EDE9E2" }}>
        {project.image ? (
          <Image src={project.image} alt={project.name} fill className="object-cover" priority sizes="100vw" />
        ) : (
          <div className="absolute inset-0 opacity-20 flex items-center justify-center">
              <svg width="80%" height="80%" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <polygon points="20,100 80,100 50,0" fill={project.towerColor || "#8C7B6B"} />
              </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/80 via-[#161616]/20 to-transparent" />
        
        <div className="container-luxury relative z-10 w-full">
          <Link href="/projects" className="inline-flex items-center gap-2 text-[#161616]/60 hover:text-[#161616] mb-12 transition-colors" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            <ArrowLeft size={12} />
            Back to Portfolio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white mb-6" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.5625rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
              {project.status}
            </div>
            
            <h1 className="text-white mb-4" style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(3.5rem, 6vw, 6rem)", fontWeight: 400, lineHeight: 1 }}>
              {project.title || project.name}
            </h1>
            
            <div className="flex items-center gap-6 text-white/70" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}>
              <div className="flex items-center gap-1.5">
                <MapPin size={16} />
                {project.location}
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div>{project.configurations || project.type}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* The Vision & Specs */}
      <div className="py-12 lg:py-[120px]" ref={ref}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-[#E86F16]" />
                <span className="text-[#3F3F46]/50" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  The Vision
                </span>
              </div>
              <h2 className="text-[#161616] mb-8" style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1.2 }}>
                Where architecture meets<br />
                <em style={{ fontStyle: "italic", color: "#E86F16" }}>absolute perfection.</em>
              </h2>
              
              {isSanity && project.fullDescription ? (
                <div className="prose prose-lg text-[#3F3F46]/70 max-w-none" style={{ fontFamily: "var(--font-josefin)" }}>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {project.fullDescription.map((block: any, i: number) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return <p key={i} className="mb-4">{block.children?.map((c: any) => c.text).join('')}</p>;
                  })}
                </div>
              ) : (
                <p className="text-[#3F3F46]/70 leading-relaxed text-lg" style={{ fontFamily: "var(--font-josefin)" }}>
                  {project.vision || project.shortDescription}
                </p>
              )}
              
              {project.amenities && project.amenities.length > 0 && (
                <div className="mt-12 lg:mt-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-px bg-[#E86F16]" />
                    <span className="text-[#3F3F46]/50" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                      The Lifestyle
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {project.amenities.map((amenity: string) => (
                      <div key={amenity} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-[#E86F16] flex-shrink-0" />
                        <span className="text-[#3F3F46]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem" }}>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Project Gallery from Sanity */}
              {isSanity && project.gallery && project.gallery.length > 0 && (
                <div className="mt-12 lg:mt-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-px bg-[#E86F16]" />
                    <span className="text-[#3F3F46]/50" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                      Gallery
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {project.gallery.map((img: any, i: number) => (
                      <div key={i} className="aspect-[4/3] relative overflow-hidden rounded-sm">
                         <Image src={img.asset.url} alt="Gallery" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Variety of Floor Plans */}
              <div className="mt-12 lg:mt-16 border-t border-[#E7E2D9] pt-12 lg:pt-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-px bg-[#E86F16]" />
                  <span className="text-[#3F3F46]/50" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    Floor Plans & Layouts
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["2 BHK Premium", "3 BHK Luxury", "4 BHK Deck Residence"].map((plan) => (
                    <div key={plan} className="border border-[#E7E2D9] p-6 group hover:border-[#E86F16] transition-colors cursor-pointer flex justify-between items-center bg-[#FAF9F7]">
                      <div>
                        <h4 className="text-[#161616] mb-1" style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.25rem", fontWeight: 600 }}>{plan}</h4>
                        <span className="text-[#3F3F46]/60" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem" }}>Request Floor Plan</span>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-[#E7E2D9] flex items-center justify-center text-[#161616] group-hover:bg-[#E86F16] group-hover:text-white group-hover:border-[#E86F16] transition-all">
                        <Download size={14} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-4 lg:col-start-9"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
            >
              <div className="bg-[#FAF9F7] border border-[#E7E2D9] p-6 sm:p-10 lg:sticky lg:top-32">
                <h3 className="text-[#161616] mb-8 pb-6 border-b border-[#E7E2D9]" style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.75rem" }}>
                  Project Details
                </h3>
                
                <div className="space-y-6 mb-10">
                  {[
                    { label: "Starting Price", value: project.price },
                    { label: "Land Parcel", value: project.area },
                    { label: "Total Residences", value: project.units },
                    { label: "Completion Date", value: project.completion },
                  ].map(stat => (
                    <div key={stat.label}>
                      <div className="text-[#3F3F46]/40 mb-1" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        {stat.label}
                      </div>
                      <div className="text-[#161616]" style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", fontWeight: 500 }}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <Link
                    href="/#contact"
                    className="w-full flex items-center justify-between bg-[#E86F16] text-white px-6 py-4 rounded-sm hover:bg-[#D4610F] transition-colors"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500 }}
                  >
                    Request Viewing
                    <ChevronRight size={14} />
                  </Link>
                  <button
                    className="w-full flex items-center justify-between bg-transparent border border-[#E7E2D9] text-[#161616] px-6 py-4 rounded-sm hover:border-[#161616] transition-colors"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500 }}
                  >
                    Download Brochure
                    <Download size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
