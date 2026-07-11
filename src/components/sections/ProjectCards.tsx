"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Trishabh Park View",
    location: "Chembur, Mumbai",
    type: "2, 3 & 4 BHK Residences",
    price: "₹ 2.45 Cr*",
    status: "Ongoing",
    area: "2.1 Acres",
    units: "240",
    completion: "Dec 2026",
    accent: "#E86F16",
    bgTone: "#F3F1EC",
  },
  {
    name: "Trishabh Serenity",
    location: "Powai, Mumbai",
    type: "3 & 4 BHK Sky Residences",
    price: "₹ 4.20 Cr*",
    status: "Launching Soon",
    area: "3.4 Acres",
    units: "180",
    completion: "Mar 2027",
    accent: "#161616",
    bgTone: "#FAF9F7",
  },
  {
    name: "Trishabh Estancia",
    location: "Thane, Mumbai",
    type: "2 & 3 BHK Residences",
    price: "₹ 1.80 Cr*",
    status: "Completed",
    area: "1.8 Acres",
    units: "320",
    completion: "Dec 2023",
    accent: "#3F3F46",
    bgTone: "#F3F1EC",
  },
];

export default function ProjectCards() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="projects" className="bg-[#FAF9F7] py-[120px] border-t border-[#E7E2D9]">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex items-start justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="divider" />
              <span className="text-label text-[#3F3F46]/50">04 — Project Showcase</span>
            </div>
            <h2 className="font-serif text-headline text-[#161616]">
              Our<br /><em>Residences</em>
            </h2>
          </div>
          <Link
            href="#"
            className="self-end inline-flex items-center gap-2 text-[#161616] text-[11px] tracking-[0.14em] uppercase font-medium border-b border-[#161616]/30 pb-0.5 hover:border-[#E86F16] hover:text-[#E86F16] transition-colors duration-200"
          >
            View All Projects
            <ArrowRight size={10} />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white border border-[#E7E2D9] rounded-sm overflow-hidden hover:border-[#E86F16]/30 transition-all duration-500"
              style={{ boxShadow: "0 4px 32px -4px rgba(22,22,22,0.06), 0 1px 4px rgba(22,22,22,0.03)" }}
            >
              {/* Image placeholder — architectural */}
              <div
                className="h-[260px] relative overflow-hidden"
                style={{ background: project.bgTone }}
              >
                {/* Architectural line grid suggesting elevation */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Building silhouette lines */}
                  <div className="absolute inset-x-12 bottom-0 top-8 opacity-10">
                    {[...Array(8)].map((_, j) => (
                      <div
                        key={j}
                        className="absolute bottom-0 w-px bg-[#161616]"
                        style={{
                          left: `${(j / 7) * 100}%`,
                          height: `${70 + Math.sin(j) * 20}%`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[#3F3F46]/50 text-[11px]">
                      <MapPin size={10} />
                      {project.location}
                    </div>
                    {/* Status badge */}
                    <span
                      className="text-[9px] tracking-[0.12em] uppercase font-medium px-2.5 py-1 rounded-full"
                      style={{
                        background:
                          project.status === "Ongoing"
                            ? "rgba(232,111,22,0.12)"
                            : project.status === "Completed"
                            ? "rgba(63,63,70,0.1)"
                            : "rgba(22,22,22,0.08)",
                        color:
                          project.status === "Ongoing"
                            ? "#E86F16"
                            : project.status === "Completed"
                            ? "#3F3F46"
                            : "#161616",
                      }}
                    >
                      {project.status === "Ongoing" && (
                        <span className="inline-block w-1 h-1 rounded-full bg-[#E86F16] mr-1.5 align-middle animate-pulse" />
                      )}
                      {project.status}
                    </span>
                  </div>
                </div>
                {/* Orange accent bar — visible on hover */}
                <div className="absolute top-0 right-0 w-0.5 h-0 bg-[#E86F16] group-hover:h-full transition-all duration-700" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-serif text-[#161616] text-xl leading-tight">{project.name}</h3>
                  <p className="font-sans text-[#3F3F46]/60 text-[12px] mt-1">{project.type}</p>
                </div>

                {/* Key specs */}
                <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#E7E2D9]">
                  {[
                    { val: project.area, lbl: "Area" },
                    { val: project.units, lbl: "Units" },
                    { val: project.completion, lbl: "Completion" },
                  ].map(({ val, lbl }) => (
                    <div key={lbl}>
                      <div className="font-sans text-[#161616] text-[13px] font-medium">{val}</div>
                      <div className="text-[9px] tracking-[0.1em] text-[#3F3F46]/40 uppercase mt-0.5">{lbl}</div>
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[9px] tracking-[0.1em] text-[#3F3F46]/40 uppercase">Starting From</div>
                    <div className="font-serif text-[#E86F16] text-xl mt-0.5">{project.price}</div>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.14em] uppercase font-medium text-[#161616] group-hover:text-[#E86F16] transition-colors duration-300"
                  >
                    Explore Project
                    <ArrowRight
                      size={10}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
