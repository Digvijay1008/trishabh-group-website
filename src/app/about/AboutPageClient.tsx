"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";
import MetricsSection from "@/components/sections/MetricsSection";

export default function AboutPageClient() {
  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
                >
                  The Legacy
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
                className="text-[#161616] mb-8"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05 }}
              >
                Building Mumbai&apos;s most <em style={{ fontStyle: "italic", color: "#E86F16" }}>exclusive addresses.</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.16, ease: EASE_OUT_EXPO }}
                className="text-[#3F3F46] leading-relaxed max-w-lg mb-6"
                style={{ fontFamily: "var(--font-inter)", fontSize: "1.125rem" }}
              >
                Since our inception in 1999, the Trishabh philosophy has remained unchanged: to build not just homes, but intergenerational legacies marked by uncompromised quality and trust.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE_OUT_EXPO }}
              className="relative aspect-square max-w-md ml-auto"
            >
              {/* Abstract luxury building illustration */}
              <div className="absolute inset-0 bg-[#E8E2D8] shadow-2xl">
                 <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="20" y="10" width="60" height="90" fill="#7A6B5B" />
                    <rect x="20" y="10" width="10" height="90" fill="#B89860" opacity="0.3" />
                    <rect x="35" y="30" width="10" height="15" fill="#fff" opacity="0.4" />
                    <rect x="55" y="30" width="10" height="15" fill="#fff" opacity="0.4" />
                    <rect x="35" y="60" width="10" height="15" fill="#fff" opacity="0.4" />
                    <rect x="55" y="60" width="10" height="15" fill="#fff" opacity="0.4" />
                 </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Metrics Section from homepage perfectly fits the About page as trust markers */}
      <MetricsSection />

      {/* Philosophy Section */}
      <section className="py-[120px] bg-white">
        <div className="container-luxury max-w-4xl mx-auto text-center">
          <span className="text-[#E86F16] mb-6 block" style={{ fontFamily: "var(--font-inter)", fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            The 100% OC Promise
          </span>
          <h2 className="text-[#161616] mb-10" style={{ fontFamily: "var(--font-cormorant)", fontSize: "3rem", lineHeight: 1.1 }}>
            We measure our success not in square feet, but in the trust of the families we house.
          </h2>
          <p className="text-[#3F3F46]/70 leading-relaxed text-lg" style={{ fontFamily: "var(--font-inter)" }}>
            In an industry where delays are common, Trishabh Group stands as a beacon of certainty. Every single project we have ever undertaken has been delivered with a full Occupancy Certificate. We believe that true luxury is peace of mind.
          </p>
        </div>
      </section>
    </div>
  );
}
