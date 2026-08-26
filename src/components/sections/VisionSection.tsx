"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { EASE_OUT_EXPO } from "@/lib/easing";

export default function VisionSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Dramatic parallax for the full-bleed background
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[90vh] md:h-[100svh] overflow-hidden bg-[#161616]">
      {/* Full Bleed Parallax Background */}
      <motion.div style={{ y, height: "130%" }} className="absolute inset-0 top-[-15%] w-full">
        <Image
          src="/images/2.jpeg"
          alt="Luxury Interior Design"
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
      </motion.div>
      
      {/* Heavy Vignette & Gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#161616]/80 via-[#161616]/40 to-[#161616]/90" />
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(22,22,22,0.9)]" />

      {/* Centered Manifesto Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        <motion.div
          style={{ opacity }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#E86F16]" />
            <span className="text-white/60 text-[0.6875rem] tracking-[0.25em] uppercase font-josefin">
              The Vision
            </span>
            <div className="w-12 h-px bg-[#E86F16]" />
          </div>
          
          <h2 
            className="text-white font-cinzel text-5xl md:text-6xl lg:text-8xl leading-[1.0] mb-8"
            style={{ fontWeight: 400, letterSpacing: "-0.02em" }}
          >
            Designing<br />
            <em className="text-[#E86F16]" style={{ fontStyle: "italic" }}>Heritage.</em>
          </h2>
          
          <div className="space-y-6 text-white/70 font-josefin text-base md:text-lg leading-relaxed max-w-2xl">
            <p>
              At Trishabh Group, we view real estate not as construction, but as the curation of life&apos;s finest moments. Every line drawn and every material selected serves a singular purpose: elevating the human experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
