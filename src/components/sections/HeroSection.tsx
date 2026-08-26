"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EASE_OUT_EXPO } from "@/lib/easing";

export default function HeroSection() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.4, delay: 1.0, ease: "expo.out" }
      );
    }
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <section
      className="relative bg-[#161616] overflow-hidden flex flex-col lg:flex-row"
      style={{ minHeight: "100svh" }}
    >
      {/* Left Typography Column (45%) */}
      <div
        className="relative z-10 flex flex-col justify-center w-full lg:w-[45%] px-6 md:px-12 lg:pl-16 xl:pl-24"
        style={{
          paddingTop: "clamp(120px, 15vh, 160px)",
          paddingBottom: "clamp(60px, 8vh, 120px)",
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full max-w-[500px] mx-auto lg:mx-0"
          style={{ gap: "clamp(1.25rem, 3vh, 2rem)" }}
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#E86F16] flex-shrink-0" />
            <span
              className="uppercase text-white/60"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "0.6875rem",
                letterSpacing: "0.22em",
              }}
            >
              Since 1999 · Mumbai
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-white"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 400,
            }}
          >
            Building Mumbai&apos;s<br />
            <em style={{ color: "#E86F16", fontStyle: "italic" }}>Landmarks.</em>
          </motion.h1>

          {/* Divider */}
          <motion.div variants={item}>
            <div ref={lineRef} className="h-px bg-white/10" style={{ width: "80px" }} />
          </motion.div>

          {/* Body */}
          <motion.p
            variants={item}
            className="text-white/60 leading-relaxed"
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "0.9375rem",
              maxWidth: "400px",
            }}
          >
            25+ years of unyielding trust and precision engineering — crafting
            exclusive lifestyles and legacies that stand for generations.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-6 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 bg-[#161616] border border-[#E86F16]/30 text-white rounded-full hover:bg-[#E86F16] hover:border-[#E86F16] hover:scale-[0.98] transition-all duration-300 group px-7 py-3.5"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "0.6875rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Our Portfolio
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 group"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "0.6875rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Contact Us
              <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Asset Column (55%) */}
      <div className="relative w-full lg:w-[55%] h-[50vh] lg:h-auto p-4 lg:p-6 lg:pl-0 flex">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: EASE_OUT_EXPO }}
          className="w-full h-full rounded-2xl lg:rounded-[2rem] overflow-hidden relative shadow-2xl bg-[#0a0a0a]"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Subtle vignette for the video */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 z-10 flex flex-col items-center gap-2"
      >
        <span 
          className="text-white/30 tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-josefin)", fontSize: "0.5rem" }}
        >
          Scroll
        </span>
        <div className="w-px h-8 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full bg-[#E86F16]"
          />
        </div>
      </motion.div>
    </section>
  );
}
