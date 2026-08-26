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
    image: "/images/Trishabh Miraya View.jpg",
  },
  {
    name: "Trishabh Greens",
    slug: "trishabh-greens",
    location: "Ramakrishna Chemburkar Marg, Chembur",
    type: "1, 2, 2.5 & 3 BHK Premium Apartments",
    price: "Price on Request",
    status: "Ongoing" as const,
    area: "1.5 Acres",
    units: "85",
    completion: "Dec 2026",
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
    name: "Trishabh Signet",
    slug: "trishabh-signet",
    location: "D.K. Sandu Marg, Chembur Gaothan",
    type: "3 & 4 BHK Luxury Residences",
    price: "Price on Request",
    status: "Completed" as const,
    area: "1.2 Acres",
    units: "45",
    completion: "Jan 2018",
    bgBase: "#DFE3E0",
    towerColor: "#6B7A75",
    highlight: "#98B8AC",
    image: "/images/Trishabh_Signet.jpg",
  },
  {
    name: "Tulsi Pride",
    slug: "tulsi-pride",
    location: "Chembur, Mumbai",
    type: "3 BHK Boutique Apartments",
    price: "Price on Request",
    status: "Completed" as const,
    area: "0.5 Acres",
    units: "15",
    completion: "Jun 2015",
    bgBase: "#E5E1DB",
    towerColor: "#8A7D70",
    highlight: "#C2A888",
    image: "/images/Tulsi_Pride.jpg",
  },
  {
    name: "One Meraki",
    slug: "one-meraki",
    location: "VN Purao Marg, Chembur",
    type: "2 & 3 BHK Premium Residences",
    price: "Price on Request",
    status: "Completed" as const,
    area: "1.8 Acres",
    units: "95",
    completion: "Mar 2024",
    bgBase: "#DFE2E5",
    towerColor: "#707A8A",
    highlight: "#88A2C2",
    image: "/images/One_Meraki.jpg",
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
  name: string;
  slug: string;
  status: string;
  location: string;
  type?: string;
  price?: string;
  area?: string;
  units?: string;
  completion?: string;
  bgBase?: string;
  towerColor?: string;
  highlight?: string;
  image?: string;
};

interface ProjectsPageProps {
  category?: "current" | "upcoming" | "completed";
  initialProjects?: SanityProject[];
}

export default function ProjectsPageClient({ category, initialProjects = [] }: ProjectsPageProps) {
  // Intelligently merge: use Sanity project if it exists, otherwise use hardcoded fallback
  const sourceProjects = [
    ...initialProjects,
    ...projects.filter((p) => !initialProjects.some((sp) => sp.slug === p.slug))
  ];

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
      <div className="container-luxury max-w-6xl">
        {/* Header - Editorial Split Style */}
        <div className="mb-24 lg:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-12">
          <div>
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
                fontSize: "clamp(3.5rem, 6vw, 6rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              A curated collection<br />of <em style={{ fontStyle: "italic", color: "#E86F16" }}>masterpieces.</em>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="max-w-xs text-[#3F3F46]/70 pb-3"
            style={{ fontFamily: "var(--font-josefin)", fontSize: "1.125rem", lineHeight: 1.6 }}
          >
            Since 1999, we have been crafting Mumbai's skyline with an unwavering 100% OC track record.
          </motion.p>
        </div>

        {/* Z-Axis Cascade Gallery */}
        <div className="flex flex-col gap-10 md:gap-0 md:-space-y-24 items-center">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {filteredProjects.map((project: any, index) => {
            const s = statusStyles[project.status];
            // Compute rotation to simulate physical photo cards casually tossed on a table.
            const rotClass = index % 2 === 0 ? "md:-rotate-[2deg]" : "md:rotate-[1.5deg]";
            const translateClass = index % 2 === 0 ? "md:-translate-x-4" : "md:translate-x-4";

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group cursor-pointer w-full max-w-4xl relative z-[${index * 10}] ${translateClass} ${rotClass} hover:z-[999] transition-transform duration-700`}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="bg-white rounded-[2rem] p-2 sm:p-3 overflow-hidden shadow-[0_20px_60px_-15px_rgba(22,22,22,0.1)] hover:shadow-[0_30px_80px_-20px_rgba(232,111,22,0.15)] border border-[#E7E2D9] transition-all duration-700 bg-clip-padding">
                    <div className="relative rounded-[calc(2rem-0.75rem)] overflow-hidden border border-black/5">
                      {/* Visual Area */}
                      <div className="h-[300px] sm:h-[450px] relative overflow-hidden" style={{ background: project.bgBase || "#EDE9E2" }}>
                        {project.image ? (
                          <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        ) : (
                        <svg className="w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" viewBox="0 0 500 360" preserveAspectRatio="xMidYMid slice">
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
                        
                        {/* Status badge - Floating Glass */}
                        <div className="absolute top-6 right-6">
                          <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 shadow-xl"
                            style={{
                              background: "rgba(255,255,255,0.9)",
                              color: s.text,
                              fontFamily: "var(--font-josefin)",
                              fontSize: "0.625rem",
                              letterSpacing: "0.15em",
                              textTransform: "uppercase",
                              fontWeight: 600,
                            }}
                          >
                            {s.dot && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E86F16] animate-pulse inline-block shadow-[0_0_8px_rgba(232,111,22,0.8)]" />
                            )}
                            {project.status}
                          </span>
                        </div>
                        
                        {/* Inner shadow for Doppelrand effect */}
                        <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] pointer-events-none rounded-[calc(2rem-0.75rem)]" />
                      </div>
                      
                      {/* Content Area */}
                      <div className="p-8 sm:p-10 bg-white">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-8">
                          <div>
                            <h3
                              className="text-[#161616] mb-3"
                              style={{ fontFamily: "var(--font-cinzel)", fontSize: "2.5rem", fontWeight: 400, lineHeight: 1 }}
                            >
                              {project.title || project.name}
                            </h3>
                            <div className="flex items-center gap-2 text-[#3F3F46]/60" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem", letterSpacing: "0.05em" }}>
                              <MapPin size={14} className="text-[#E86F16]" />
                              {project.location}
                            </div>
                          </div>
                          <div
                            className="w-14 h-14 rounded-full border border-[#E7E2D9] flex items-center justify-center text-[#161616] group-hover:border-[#E86F16] group-hover:bg-[#E86F16] group-hover:text-white transition-all duration-500 shadow-sm"
                          >
                            <ArrowRight size={18} className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-45" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#E7E2D9]">
                          <div>
                            <div className="text-[#3F3F46]/40 mb-2" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                              Residences
                            </div>
                            <div className="text-[#161616]" style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem" }}>
                              {project.configurations || project.type || project.shortDescription}
                            </div>
                          </div>
                          <div>
                            <div className="text-[#3F3F46]/40 mb-2" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                              Starting Price
                            </div>
                            <div className="text-[#E86F16]" style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", fontWeight: 500 }}>
                              {project.price || "Price on Request"}
                            </div>
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
