"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";

const locations = [
  { name: "Chembur", desc: "The green heart of the city, perfectly connected." },
  { name: "Powai", desc: "Lakeside serenity meets modern urban infrastructure." },
  { name: "South Mumbai", desc: "The ultimate address of prestige and heritage." }
];

export default function NeighborhoodsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="bg-[#EDE9E2] py-32 lg:py-48 relative">
      <div className="container-luxury">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-10 h-px bg-[#E86F16]" />
            <span className="text-[#3F3F46]/60 text-[10px] tracking-[0.2em] uppercase font-inter">
              Prime Locations
            </span>
            <div className="w-10 h-px bg-[#E86F16]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="font-cormorant text-5xl lg:text-7xl leading-[1.1] text-[#161616] mb-8"
          >
            Dominating Mumbai&apos;s<br />
            Finest <em className="text-[#E86F16]">Pincodes.</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: EASE_OUT_EXPO }}
              className="bg-white p-12 text-center border border-[#E7E2D9] group hover:border-[#E86F16]/30 transition-colors duration-500"
            >
              <h3 className="font-cormorant text-3xl text-[#161616] mb-4 group-hover:text-[#E86F16] transition-colors duration-500">{loc.name}</h3>
              <p className="font-inter text-sm text-[#3F3F46]/70 leading-relaxed max-w-[200px] mx-auto">
                {loc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
