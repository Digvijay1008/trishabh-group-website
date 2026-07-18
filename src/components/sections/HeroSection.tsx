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
      className="relative bg-[#161616] overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 0.72 }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Left-heavy dark gradient so left text pops */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/75 to-[#161616]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/65 via-transparent to-[#161616]/30" />
      </div>

      {/* Content wrapper — uses the design-system container but left-aligns */}
      <div
        className="relative z-10 flex flex-col justify-center container-luxury"
        style={{
          minHeight: "100svh",
          paddingTop: "clamp(90px, 12vh, 160px)",
          paddingBottom: "clamp(60px, 8vh, 120px)",
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
          style={{ gap: "clamp(1rem, 2.5vh, 1.75rem)", maxWidth: "min(600px, 55vw)" }}
        >

          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#E86F16] flex-shrink-0" />
            <span
              className="uppercase text-white/70"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "clamp(9px, 0.9vw, 11px)",
                letterSpacing: "0.22em",
              }}
            >
              Since 1999 · Mumbai
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-white drop-shadow-lg"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(3rem, 10vw, 9rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              fontWeight: 600,
            }}
          >
            Building Mumbai&apos;s<br />
            <em style={{ color: "#E86F16", fontStyle: "italic" }}>Landmarks.</em>
          </motion.h1>

          {/* Divider */}
          <motion.div variants={item}>
            <div ref={lineRef} className="h-px bg-white/20" style={{ width: "clamp(100px, 12vw, 180px)" }} />
          </motion.div>

          {/* Body */}
          <motion.p
            variants={item}
            className="text-white/72 leading-relaxed drop-shadow-md"
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "clamp(0.8125rem, 1.1vw, 1rem)",
              maxWidth: "min(400px, 100%)",
            }}
          >
            25+ years of unyielding trust and precision engineering — crafting
            exclusive lifestyles and legacies that stand for generations.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 bg-[#E86F16] text-white rounded-full hover:bg-[#D4610F] transition-all duration-300 group"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "clamp(9px, 0.9vw, 11px)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 500,
                padding: "clamp(10px, 1.2vh, 16px) clamp(20px, 2.5vw, 32px)",
                boxShadow: "0 4px 28px -4px rgba(232,111,22,0.5)",
              }}
            >
              Discover Our Portfolio
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white/65 hover:text-white transition-colors duration-300 group"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "clamp(9px, 0.9vw, 11px)",
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 z-10"
        style={{ left: "clamp(2rem, 5vw, 5rem)" }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>

    </section>
  );
}
