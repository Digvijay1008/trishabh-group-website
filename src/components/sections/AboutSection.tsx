"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { EASE_OUT_EXPO } from "@/lib/easing";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="bg-white py-[120px] border-t border-[#E7E2D9]">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
              className="flex items-center gap-4 mb-8"
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
                The Legacy
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="text-[#161616] mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Welcome to<br />
              <em style={{ fontStyle: "italic", color: "#E86F16" }}>TRISHABH GROUP!</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE_OUT_EXPO }}
              className="text-[#3F3F46] leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem" }}
            >
              With our pillars of dedication, commitment and discipline, we have created sheer
              architectural marvels and stunning spaces of luxury living in Mumbai &amp; Navi Mumbai
              since 1999. We have successfully completed several projects in Residential, Commercial 
              and Hospitality segment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22, ease: EASE_OUT_EXPO }}
              className="text-[#3F3F46]/70 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem" }}
            >
              Every residence carries our ironclad promise — 100% OC delivery, flawless
              craftsmanship, and a white-glove service relationship that extends well beyond handover.
            </motion.p>

            {/* Signature line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 pt-8 border-t border-[#E7E2D9]"
            >
              <div
                className="text-[#161616]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.5rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Jain Family
              </div>
              <div
                className="text-[#3F3F46]/50 mt-1"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Founder &amp; Chairman
              </div>
            </motion.div>
          </div>

          {/* Right — visual grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Large block */}
            <div
              className="col-span-2 h-[280px] rounded-sm overflow-hidden relative"
              style={{ background: "#EDE9E2" }}
            >
              <Image
                src="/lobby_legacy.png"
                alt="Trishabh Legacy Lobby"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Small block 1 */}
            <div className="h-[160px] rounded-sm overflow-hidden" style={{ background: "#E8E2D8" }}>
              <svg className="w-full h-full" viewBox="0 0 240 160" preserveAspectRatio="xMidYMid slice">
                <rect width="240" height="160" fill="#D8D0C0" />
                {/* Stone / marble texture suggestion */}
                <path d="M20,40 Q80,20 120,60 Q160,100 220,50" stroke="#C4B8A4" strokeWidth="1.5" fill="none" opacity="0.5" />
                <path d="M0,80 Q60,60 100,100 Q140,140 200,90" stroke="#C4B8A4" strokeWidth="1" fill="none" opacity="0.35" />
                <path d="M50,0 Q90,40 80,80 Q70,120 120,140" stroke="#C4B8A4" strokeWidth="0.8" fill="none" opacity="0.3" />
                <rect x="0" y="130" width="240" height="30" fill="#C4B49A" opacity="0.4" />
              </svg>
            </div>

            {/* Small block 2 */}
            <div className="h-[160px] rounded-sm overflow-hidden" style={{ background: "#EDE4D8" }}>
              <svg className="w-full h-full" viewBox="0 0 240 160" preserveAspectRatio="xMidYMid slice">
                <rect width="240" height="160" fill="#E0D4C0" />
                {/* Travertine / warm stone texture */}
                {[...Array(10)].map((_, i) => (
                  <line key={i} x1="0" y1={i * 16} x2="240" y2={i * 16 + 4} stroke="#C8BC9A" strokeWidth="0.8" opacity="0.35" />
                ))}
                <ellipse cx="80" cy="70" rx="25" ry="15" fill="#C8BC9A" opacity="0.15" />
                <ellipse cx="170" cy="100" rx="18" ry="10" fill="#C8BC9A" opacity="0.12" />
                <rect x="0" y="130" width="240" height="30" fill="#C8B49A" opacity="0.35" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
