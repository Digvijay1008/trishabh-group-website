"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { EASE_OUT_EXPO } from "@/lib/easing";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="bg-white py-16 lg:py-24 border-t border-[#E7E2D9]">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

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
                  fontFamily: "var(--font-josefin)",
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
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(2rem, 5vw, 5.5rem)",
                fontWeight: 500,
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
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
              style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
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
              style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
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
                  fontFamily: "var(--font-cinzel)",
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
                  fontFamily: "var(--font-josefin)",
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
            <div className="h-[160px] rounded-sm overflow-hidden relative" style={{ background: "#E8E2D8" }}>
              <Image
                src="/images/Trishabh_Signet.jpg"
                alt="Trishabh Signet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 16vw"
              />
            </div>

            {/* Small block 2 */}
            <div className="h-[160px] rounded-sm overflow-hidden relative" style={{ background: "#EDE4D8" }}>
              <Image
                src="/images/One_Meraki.jpg"
                alt="One Meraki"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 16vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
