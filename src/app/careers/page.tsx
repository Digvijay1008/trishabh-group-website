"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";
import { ArrowRight } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="bg-[#FAF9F7] min-h-screen pt-16 sm:pt-24 pb-20 sm:pb-32">
      <div className="container-luxury">
        {/* Header - Anti-Center Bias */}
        <div className="mb-16 lg:mb-24 max-w-4xl">
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
              Join Our Legacy
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="text-[#161616] mb-8"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(3rem, 5vw, 5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Build your career with<br />
            <em style={{ fontStyle: "italic", color: "#E86F16" }}>Trishabh Group.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: EASE_OUT_EXPO }}
            className="text-[#3F3F46] leading-relaxed max-w-xl text-lg"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            We are always looking for passionate architects, engineers, and sales professionals who share our uncompromising commitment to quality and 100% OC delivery.
          </motion.p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          
          {/* Bento Cell 1: Culture Image (Span 2 cols, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            className="md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden relative group bg-[#161616] min-h-[400px] border border-[#E7E2D9] shadow-sm p-2"
          >
            <div className="absolute inset-0 bg-[#E8E2D8] grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700">
               {/* Abstract Placeholder Graphic for Culture */}
               <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <rect width="100%" height="100%" fill="#E8E2D8" />
                 <circle cx="20" cy="80" r="40" fill="#E86F16" opacity="0.1" />
                 <circle cx="80" cy="20" r="30" fill="#E86F16" opacity="0.1" />
               </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[calc(2rem-0.5rem)]" />
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
              <span className="text-[#E86F16] mb-4 font-josefin text-[0.6875rem] uppercase tracking-widest">Our Culture</span>
              <h3 className="text-white text-3xl md:text-4xl font-cinzel mb-4">A legacy of excellence.</h3>
              <p className="text-white/80 font-josefin max-w-md text-sm leading-relaxed">
                We believe in fostering an environment where innovation thrives, precision is rewarded, and architectural dreams are brought to life without compromise.
              </p>
            </div>
          </motion.div>

          {/* Bento Cell 2: Job Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="bg-white rounded-[2rem] p-8 border border-[#E7E2D9] flex flex-col justify-between hover:shadow-xl hover:border-[#E86F16]/30 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] pointer-events-none rounded-[2rem]" />
            <div>
              <div className="flex justify-between items-start mb-8">
                <span className="text-[#E86F16] font-josefin text-[0.625rem] uppercase tracking-[0.2em] bg-[#E86F16]/10 px-3 py-1 rounded-full">Open</span>
                <ArrowRight size={16} className="text-[#161616] group-hover:-rotate-45 transition-transform duration-500" />
              </div>
              <h4 className="text-[#161616] font-cinzel text-xl mb-2">Senior Architect</h4>
              <p className="text-[#3F3F46]/70 font-josefin text-sm">Design & Planning</p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#E7E2D9] text-[#3F3F46]/50 font-josefin text-[0.6875rem] uppercase tracking-wider">
              Mumbai HQ &bull; Full Time
            </div>
          </motion.div>

          {/* Bento Cell 3: Job Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="bg-white rounded-[2rem] p-8 border border-[#E7E2D9] flex flex-col justify-between hover:shadow-xl hover:border-[#E86F16]/30 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] pointer-events-none rounded-[2rem]" />
            <div>
              <div className="flex justify-between items-start mb-8">
                <span className="text-[#E86F16] font-josefin text-[0.625rem] uppercase tracking-[0.2em] bg-[#E86F16]/10 px-3 py-1 rounded-full">Open</span>
                <ArrowRight size={16} className="text-[#161616] group-hover:-rotate-45 transition-transform duration-500" />
              </div>
              <h4 className="text-[#161616] font-cinzel text-xl mb-2">Project Manager</h4>
              <p className="text-[#3F3F46]/70 font-josefin text-sm">Construction</p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#E7E2D9] text-[#3F3F46]/50 font-josefin text-[0.6875rem] uppercase tracking-wider">
              Chembur Site &bull; Full Time
            </div>
          </motion.div>

          {/* Bento Cell 4: Email CTA (Span 3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT_EXPO }}
            className="md:col-span-3 bg-[#E8E2D8] rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#D8D0C0] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-[#161616] font-cinzel text-2xl mb-2">Don&apos;t see a perfect fit?</h4>
              <p className="text-[#161616]/70 font-josefin max-w-lg">
                Send us your resume anyway. We are always interested in connecting with top talent for future opportunities.
              </p>
            </div>
            <a 
              href="mailto:careers@trishabh.com" 
              className="relative z-10 group/btn flex items-center justify-center gap-4 bg-[#161616] text-white rounded-full hover:bg-[#E86F16] transition-all duration-300 active:scale-[0.98]"
              style={{ padding: "8px 8px 8px 24px" }}
            >
              <span className="font-josefin text-[0.6875rem] uppercase tracking-[0.15em] font-medium">Email Resume</span>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-105 group-hover/btn:translate-x-1">
                <ArrowRight size={14} className="text-white" />
              </div>
            </a>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
