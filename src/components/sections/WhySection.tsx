"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";

const pillars = [
  {
    no: "01",
    title: "Delivered on Time",
    body: "We know that waiting for your home is stressful. That's why we stick strictly to our timelines and ensure the Occupancy Certificate (OC) is ready before you move in.",
  },
  {
    no: "02",
    title: "Built to Last",
    body: "We never cut corners. From the deep foundation to the final coat of paint, we use high-quality materials because your family's safety and comfort come first.",
  },
  {
    no: "03",
    title: "Complete Transparency",
    body: "No hidden costs and no confusing jargon. We believe in clear, straightforward communication so you always know exactly what you are paying for.",
  },
  {
    no: "04",
    title: "Here for You, Always",
    body: "Handing over the keys isn't the end of our journey together. Our dedicated support team is always just a call away, ready to help you settle in comfortably.",
  },
];

export default function WhySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="why" className="bg-[#FAF9F7] py-20 lg:py-32 border-t border-[#E7E2D9]">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-px bg-[#E86F16]" />
              <span
                className="text-[#3F3F46]/60"
                style={{
                  fontFamily: "var(--font-josefin)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.25em",
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
                fontSize: "clamp(2.25rem, 4vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Building homes<br />
              <em style={{ fontStyle: "italic", color: "#E86F16" }}>you can trust,</em><br />
              for generations.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18, ease: EASE_OUT_EXPO }}
              className="text-[#3F3F46]/70 leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-josefin)", fontSize: "1.0625rem" }}
            >
              At Trishabh Group, we know that buying a home is deeply personal. It's not just a transaction; it's a milestone. That's why we focus on absolute transparency, reliable quality, and keeping our word — so you can focus on building memories.
            </motion.p>
          </div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8 mt-12 lg:mt-0">
            {pillars.map(({ no, title, body }, i) => (
              <motion.div
                key={no}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: EASE_OUT_EXPO }}
                className="bg-white border border-[#E7E2D9]/70 p-8 lg:p-10 rounded-[2rem] group hover:-translate-y-1.5 hover:border-[#E86F16]/30 hover:shadow-[0_20px_40px_-12px_rgba(232,111,22,0.08)] transition-all duration-500 flex flex-col justify-between"
                style={{ minHeight: "260px" }}
              >
                <div>
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF9F7] text-[#E86F16] mb-8 border border-[#E7E2D9] group-hover:bg-[#E86F16] group-hover:text-white transition-colors duration-500"
                    style={{
                      fontFamily: "var(--font-josefin)",
                      fontSize: "0.8125rem",
                      letterSpacing: "0.15em",
                      fontWeight: 500,
                    }}
                  >
                    {no}
                  </span>
                  <h3
                    className="text-[#161616] mb-4"
                    style={{
                      fontFamily: "var(--font-cinzel)",
                      fontSize: "1.375rem",
                      fontWeight: 500,
                      lineHeight: 1.25,
                    }}
                  >
                    {title}
                  </h3>
                </div>
                <p
                  className="text-[#3F3F46]/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                >
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
