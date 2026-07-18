"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";

const pillars = [
  {
    no: "01",
    title: "100% OC Guaranteed",
    body: "Every project we deliver has received Occupancy Certificate. No exceptions, no delays to your possession.",
  },
  {
    no: "02",
    title: "Zero Compromise Quality",
    body: "German fittings, Italian marble, structural steel that exceeds BIS standards. We source the best so you live the best.",
  },
  {
    no: "03",
    title: "Transparent Dealings",
    body: "No hidden charges. No last-minute surprises. Our agreements are plain-language and legally airtight.",
  },
  {
    no: "04",
    title: "Post-Handover Care",
    body: "Our relationship doesn't end at possession. Dedicated after-sales and society management support for 5 years.",
  },
];

export default function WhySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="why" className="bg-[#FAF9F7] py-16 lg:py-24 border-t border-[#E7E2D9]">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-[100px] lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
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
                The Trishabh Standard
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="text-[#161616] mb-8"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Your life&apos;s biggest<br />
              <em style={{ fontStyle: "italic" }}>investment deserves<br />this level of care.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18, ease: EASE_OUT_EXPO }}
              className="text-[#3F3F46]/60 leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
            >
              We&apos;ve seen what happens when developers cut corners. We built Trishabh
              Group to be the antidote — where every promise is a commitment in writing.
            </motion.p>
          </div>

          {/* Right — pillars */}
          <div className="space-y-0 divide-y divide-[#E7E2D9]">
            {pillars.map(({ no, title, body }, i) => (
              <motion.div
                key={no}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.12 + i * 0.1, ease: EASE_OUT_EXPO }}
                className="py-8 group"
              >
                <div className="flex items-start gap-6">
                  <span
                    className="text-[#E86F16] flex-shrink-0 mt-0.5"
                    style={{
                      fontFamily: "var(--font-josefin)",
                      fontSize: "0.6875rem",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {no}
                  </span>
                  <div>
                    <h3
                      className="text-[#161616] mb-3"
                      style={{
                        fontFamily: "var(--font-cinzel)",
                        fontSize: "1.375rem",
                        fontWeight: 400,
                        lineHeight: 1.2,
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-[#3F3F46]/60 leading-relaxed"
                      style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem" }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
