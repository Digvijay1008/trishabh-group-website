"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { EASE_OUT_EXPO } from "@/lib/easing";

const projects = [
  {
    name: "Trishabh Park View",
    location: "Chembur, Mumbai",
    type: "2, 3 & 4 BHK Residences",
    price: "₹ 2.45 Cr*",
    status: "Ongoing" as const,
    area: "2.1 Acres",
    units: "240",
    completion: "Dec 2026",
    bgBase: "#EDE9E2",
    towerColor: "#8C7B6B",
    highlight: "#C8A870",
  },
  {
    name: "Trishabh Serenity",
    location: "Powai, Mumbai",
    type: "3 & 4 BHK Sky Residences",
    price: "₹ 4.20 Cr*",
    status: "Launching Soon" as const,
    area: "3.4 Acres",
    units: "180",
    completion: "Mar 2027",
    bgBase: "#E8E2D8",
    towerColor: "#7A6B5B",
    highlight: "#B89860",
  },
  {
    name: "Trishabh Estancia",
    location: "Thane West",
    type: "2 & 3 BHK Residences",
    price: "₹ 1.80 Cr*",
    status: "Completed" as const,
    area: "1.8 Acres",
    units: "320",
    completion: "Dec 2023",
    bgBase: "#E4DED4",
    towerColor: "#9A8A7A",
    highlight: "#D4B888",
  },
];

type SanityProject = {
  title: string;
  slug: string;
  status: string;
  location: string;
  shortDescription?: string;
  configurations?: string;
  mainImage?: { asset: { url: string } };
};

const statusStyles: Record<string, { bg: string; text: string; dot: boolean }> = {
  current: { bg: "rgba(232,111,22,0.1)", text: "#E86F16", dot: true },
  upcoming: { bg: "rgba(22,22,22,0.07)", text: "#161616", dot: false },
  completed: { bg: "rgba(63,63,70,0.08)", text: "#3F3F46", dot: false },
  // Fallbacks for dummy data
  Ongoing: { bg: "rgba(232,111,22,0.1)", text: "#E86F16", dot: true },
  "Launching Soon": { bg: "rgba(22,22,22,0.07)", text: "#161616", dot: false },
  Completed: { bg: "rgba(63,63,70,0.08)", text: "#3F3F46", dot: false },
};

function ProjectCard({
  project,
  index,
  inView,
  isSanity = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any;
  index: number;
  inView: boolean;
  isSanity?: boolean;
}) {
  const s = statusStyles[project.status] || { bg: "rgba(63,63,70,0.08)", text: "#3F3F46", dot: false };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.14, ease: EASE_OUT_EXPO }}
      className="group bg-white border border-[#E7E2D9] rounded-sm overflow-hidden hover:border-[#E86F16]/25 transition-colors duration-500"
      style={{ boxShadow: "0 4px 32px -4px rgba(22,22,22,0.06)" }}
    >
      {/* Image panel — architectural illustration */}
      <div className="h-[260px] relative overflow-hidden" style={{ background: project.bgBase }}>
        {isSanity && project.mainImage?.asset?.url ? (
          <img src={project.mainImage.asset.url} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <svg className="w-full h-full" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id={`tg${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={project.towerColor || "#8C7B6B"} stopOpacity="0.9" />
                <stop offset="100%" stopColor={project.towerColor || "#8C7B6B"} stopOpacity="1" />
              </linearGradient>
              <linearGradient id={`wg${index}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={project.highlight || "#C8A870"} stopOpacity="0.8" />
                <stop offset="100%" stopColor={project.highlight || "#C8A870"} stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id={`sky${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C8B89A" stopOpacity="0.3" />
                <stop offset="100%" stopColor={project.bgBase || "#EDE9E2"} stopOpacity="0" />
              </linearGradient>
            </defs>

            <rect width="400" height="260" fill={`url(#sky${index})`} />

            {/* Main tower */}
            <rect x="140" y="30" width="120" height="210" fill={`url(#tg${index})`} />
            {/* Highlight strip */}
            <rect x="140" y="30" width="28" height="210" fill={project.highlight || "#C8A870"} opacity="0.2" />
            {/* Top cap */}
            <rect x="130" y="16" width="140" height="20" fill={project.towerColor || "#8C7B6B"} opacity="0.9" />

            {/* Side wing */}
            <rect x="40" y="90" width="108" height="150" fill={project.towerColor || "#8C7B6B"} opacity="0.75" />
            <rect x="40" y="90" width="20" height="150" fill={project.highlight || "#C8A870"} opacity="0.12" />
            <rect x="252" y="90" width="108" height="150" fill={project.towerColor || "#8C7B6B"} opacity="0.75" />
            <rect x="340" y="90" width="20" height="150" fill={project.highlight || "#C8A870"} opacity="0.12" />

            {/* Windows — tower */}
            {[...Array(6)].map((_, row) =>
              [0, 1, 2].map((col) => (
                <rect
                  key={`w${index}-${row}-${col}`}
                  x={158 + col * 34}
                  y={50 + row * 30}
                  width={22}
                  height={18}
                  fill={`url(#wg${index})`}
                  opacity={0.5 + col * 0.1}
                  rx="1"
                />
              ))
            )}

            {/* Windows — wings */}
            {[...Array(4)].map((_, row) =>
              [0, 1].map((col) => (
                <rect
                  key={`wl${index}-${row}-${col}`}
                  x={55 + col * 40}
                  y={108 + row * 34}
                  width={26}
                  height={18}
                  fill={`url(#wg${index})`}
                  opacity={0.35}
                  rx="1"
                />
              ))
            )}
            {[...Array(4)].map((_, row) =>
              [0, 1].map((col) => (
                <rect
                  key={`wr${index}-${row}-${col}`}
                  x={268 + col * 40}
                  y={108 + row * 34}
                  width={26}
                  height={18}
                  fill={`url(#wg${index})`}
                  opacity={0.35}
                  rx="1"
                />
              ))
            )}

            {/* Ground */}
            <rect x="0" y="240" width="400" height="20" fill={project.towerColor || "#8C7B6B"} opacity="0.25" />
            {/* Trees */}
            <ellipse cx="30" cy="252" rx="35" ry="45" fill="#5A6B4A" opacity="0.3" />
            <ellipse cx="370" cy="256" rx="30" ry="38" fill="#5A6B4A" opacity="0.25" />
          </svg>
        )}

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{
              background: s.bg,
              color: s.text,
              fontFamily: "var(--font-inter)",
              fontSize: "0.5625rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {s.dot && (
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#E86F16] animate-pulse"
                style={{ display: "inline-block" }}
              />
            )}
            {project.status}
          </span>
        </div>

        {/* Orange reveal line on hover */}
        <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#E86F16] group-hover:h-full transition-all duration-700" />
      </div>

      {/* Card body */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3
              className="text-[#161616]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.375rem",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              {project.title || project.name}
            </h3>
            <div
              className="flex items-center gap-1 text-[#3F3F46]/50 mt-1"
              style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem" }}
            >
              <MapPin size={10} />
              {project.location}
            </div>
          </div>
        </div>

        <p
          className="text-[#3F3F46]/60 mb-4"
          style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem" }}
        >
          {project.configurations || project.type || project.shortDescription}
        </p>

        {/* Specs */}
        {!isSanity && (
          <div
            className="grid grid-cols-3 gap-3 py-4 border-y border-[#E7E2D9] mb-4"
          >
            {[
              { val: project.area, lbl: "Land Area" },
              { val: project.units, lbl: "Homes" },
              { val: project.completion, lbl: "Completion" },
            ].map(({ val, lbl }) => (
              <div key={lbl}>
                <div
                  className="text-[#161616] font-medium"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem" }}
                >
                  {val}
                </div>
                <div
                  className="text-[#3F3F46]/40 mt-0.5"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.5625rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {lbl}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-end justify-between">
          <div>
            <div
              className="text-[#3F3F46]/40"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.5625rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Starting From
            </div>
            <div
              className="text-[#E86F16] mt-0.5"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.375rem",
                fontWeight: 400,
              }}
            >
              {project.price || "Price on Request"}
            </div>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 group-hover:text-[#E86F16] text-[#161616] transition-colors duration-300"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.625rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Enquire Now
            <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ initialProjects = [] }: { initialProjects?: SanityProject[] }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const displayProjects = initialProjects.length > 0 ? initialProjects : projects;
  const isSanity = initialProjects.length > 0;

  return (
    <section ref={ref} id="projects" className="bg-[#FAF9F7] py-[120px] border-t border-[#E7E2D9]">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex items-start justify-between mb-16 flex-wrap gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-px bg-[#E86F16]" />
              <span
                className="text-[#3F3F46]/50"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Curated Collection
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="text-[#161616]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              The<br /><em style={{ fontStyle: "italic" }}>Masterpieces</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="self-end"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#161616] border-b border-[#161616]/25 pb-0.5 hover:text-[#E86F16] hover:border-[#E86F16] transition-colors duration-200"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.6875rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              View Full Portfolio
              <ArrowRight size={10} />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {displayProjects.map((project: any, i) => (
            <ProjectCard key={project.title || project.name} project={project} index={i} inView={inView} isSanity={isSanity} />
          ))}
        </div>
      </div>
    </section>
  );
}
