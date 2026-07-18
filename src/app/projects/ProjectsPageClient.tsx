"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { EASE_OUT_EXPO } from "@/lib/easing";

const projects = [
  {
    name: "Trishabh Miraya",
    slug: "trishabh-miraya",
    location: "Chembur, Mumbai",
    type: "3 & 4 BHK Luxury Residences",
    price: "Price on Request",
    status: "Ongoing" as const,
    area: "2.1 Acres",
    units: "120",
    completion: "Dec 2026",
    bgBase: "#EDE9E2",
    towerColor: "#8C7B6B",
    highlight: "#C8A870",
    image: "/images/1.jpg",
  },
  {
    name: "Trishabh Greens",
    slug: "trishabh-greens",
    location: "Chembur East, Mumbai",
    type: "2 & 3 BHK Premium Apartments",
    price: "Price on Request",
    status: "Completed" as const,
    area: "1.5 Acres",
    units: "85",
    completion: "Mar 2022",
    bgBase: "#E8E2D8",
    towerColor: "#7A6B5B",
    highlight: "#B89860",
    image: "/images/BLDG A B C-01.jpg",
  },
  {
    name: "Tulsi Meadows",
    slug: "tulsi-meadows",
    location: "Sion-Trombay Road, Chembur",
    type: "4 BHK Ultra-Luxury Deck Residences",
    price: "Price on Request",
    status: "Completed" as const,
    area: "3.0 Acres",
    units: "60",
    completion: "Dec 2020",
    bgBase: "#E4DED4",
    towerColor: "#9A8A7A",
    highlight: "#D4B888",
    image: "/images/Tulsi Meadows Photo for Picture frame.jpg",
  },
  {
    name: "Trishabh Signature",
    slug: "trishabh-signature",
    location: "Diamond Garden, Chembur",
    type: "Boutique 3 BHK Homes",
    price: "Price on Request",
    status: "Completed" as const,
    area: "0.8 Acres",
    units: "35",
    completion: "Jan 2018",
    bgBase: "#DFE3E0",
    towerColor: "#6B7A75",
    highlight: "#98B8AC",
    image: "/images/2.jpg",
  }
];

const statusStyles: Record<string, { bg: string; text: string; dot: boolean }> = {
  current: { bg: "rgba(232,111,22,0.1)", text: "#E86F16", dot: true },
  upcoming: { bg: "rgba(22,22,22,0.07)", text: "#161616", dot: false },
  completed: { bg: "rgba(63,63,70,0.08)", text: "#3F3F46", dot: false },
  Ongoing: { bg: "rgba(232,111,22,0.1)", text: "#E86F16", dot: true },
  "Launching Soon": { bg: "rgba(22,22,22,0.07)", text: "#161616", dot: false },
  Completed: { bg: "rgba(63,63,70,0.08)", text: "#3F3F46", dot: false },
};

type SanityProject = {
  title: string;
  slug: string;
  status: string;
  location: string;
  shortDescription?: string;
  configurations?: string;
  mainImage?: { asset: { url: string } };
};

interface ProjectsPageProps {
  category?: "current" | "upcoming" | "completed";
  initialProjects?: SanityProject[];
}

export default function ProjectsPageClient({ category, initialProjects = [] }: ProjectsPageProps) {
  const isSanity = initialProjects.length > 0;
  const sourceProjects = isSanity ? initialProjects : projects;

  const filteredProjects = category 
    ? sourceProjects.filter(p => {
        if (category === "current") return p.status === "current" || p.status === "Ongoing";
        if (category === "upcoming") return p.status === "upcoming" || p.status === "Launching Soon";
        if (category === "completed") return p.status === "completed" || p.status === "Completed";
        return true;
      })
    : sourceProjects;

  return (
    <div className="bg-[#FAF9F7] min-h-screen pt-12 pb-32">
      <div className="container-luxury">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-[#E86F16]" />
            <span
              className="text-[#3F3F46]/50"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "0.625rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              The Portfolio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="text-[#161616]"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(3rem, 5vw, 5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            A curated collection<br />of <em style={{ fontStyle: "italic", color: "#E86F16" }}>masterpieces.</em>
          </motion.h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {filteredProjects.map((project: any, index) => {
            const s = statusStyles[project.status];
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: EASE_OUT_EXPO }}
                className="group cursor-pointer"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="bg-white border border-[#E7E2D9] rounded-sm overflow-hidden hover:border-[#E86F16]/25 transition-colors duration-500 shadow-[0_4px_32px_-4px_rgba(22,22,22,0.04)]">
                    {/* Visual Area */}
                    <div className="h-[360px] relative overflow-hidden" style={{ background: project.bgBase || "#EDE9E2" }}>
                      {isSanity && project.mainImage?.asset?.url ? (
                        <img src={project.mainImage.asset.url} alt={project.title} className="w-full h-full object-cover" />
                      ) : project.image ? (
                        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                      ) : (
                      <svg className="w-full h-full" viewBox="0 0 500 360" preserveAspectRatio="xMidYMid slice">
                        {/* Dynamic SVG graphic matching the project colors */}
                        <defs>
                          <linearGradient id={`tg-${index}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={project.towerColor} stopOpacity="0.9" />
                            <stop offset="100%" stopColor={project.towerColor} stopOpacity="1" />
                          </linearGradient>
                          <linearGradient id={`wg-${index}`} x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor={project.highlight} stopOpacity="0.8" />
                            <stop offset="100%" stopColor={project.highlight} stopOpacity="0.4" />
                          </linearGradient>
                        </defs>
                        <rect width="500" height="360" fill={project.bgBase} />
                        {/* Tower Base */}
                        <rect x="180" y="60" width="140" height="260" fill={`url(#tg-${index})`} />
                        <rect x="180" y="60" width="30" height="260" fill={project.highlight} opacity="0.2" />
                        
                        {/* Windows */}
                        {[...Array(8)].map((_, row) =>
                          [0, 1, 2, 3].map((col) => (
                            <rect
                              key={`win-${index}-${row}-${col}`}
                              x={200 + col * 30}
                              y={90 + row * 28}
                              width={20}
                              height={18}
                              fill={project.highlight}
                              opacity={0.4 + ((row * 5 + col) % 5) * 0.1}
                              rx="0.5"
                            />
                          ))
                        )}
                        {/* Ground */}
                        <rect x="0" y="320" width="500" height="40" fill={project.towerColor || "#8C7B6B"} opacity="0.2" />
                        <ellipse cx="100" cy="330" rx="60" ry="40" fill="#5A6B4A" opacity="0.2" />
                        <ellipse cx="420" cy="335" rx="50" ry="35" fill="#5A6B4A" opacity="0.15" />
                      </svg>
                      )}
                      
                      {/* Status */}
                      <div className="absolute top-5 right-5">
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                          style={{
                            background: s.bg,
                            color: s.text,
                            fontFamily: "var(--font-josefin)",
                            fontSize: "0.5625rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            fontWeight: 500,
                          }}
                        >
                          {s.dot && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E86F16] animate-pulse inline-block" />
                          )}
                          {project.status}
                        </span>
                      </div>
                      
                      <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#E86F16] group-hover:h-full transition-all duration-700" />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3
                            className="text-[#161616]"
                            style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.1 }}
                          >
                            {project.title || project.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-[#3F3F46]/50 mt-2" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.8125rem" }}>
                            <MapPin size={12} />
                            {project.location}
                          </div>
                        </div>
                        <div
                          className="w-10 h-10 rounded-full border border-[#E7E2D9] flex items-center justify-center text-[#161616] group-hover:border-[#E86F16] group-hover:bg-[#E86F16] group-hover:text-white transition-all duration-300"
                        >
                          <ArrowRight size={14} className="transition-transform duration-300 group-hover:-rotate-45" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#E7E2D9]">
                        <div>
                          <div className="text-[#3F3F46]/40 mb-1" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.5625rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            Residences
                          </div>
                          <div className="text-[#161616]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem" }}>
                            {project.configurations || project.type || project.shortDescription}
                          </div>
                        </div>
                        <div>
                          <div className="text-[#3F3F46]/40 mb-1" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.5625rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            Starting Price
                          </div>
                          <div className="text-[#E86F16]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem", fontWeight: 500 }}>
                            {project.price || "Price on Request"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
