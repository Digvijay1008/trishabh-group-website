"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { EASE_OUT_EXPO } from "@/lib/easing";

const metrics = [
  { value: 25, suffix: "+", label: "Years of\nExcellence" },
  { value: 15, suffix: "+", label: "Projects\nDelivered" },
  { value: 100, suffix: "%", label: "OC Received\nProjects" },
  { value: 5000, suffix: "+", label: "Happy\nFamilies" },
];

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || hasRun.current || !ref.current) return;
    hasRun.current = true;
    const el = ref.current;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2.2,
      ease: "power3.out",
      onUpdate: () => {
        el.textContent = Math.round(obj.val).toLocaleString("en-IN");
      },
    });
  }, [inView, target]);

  return <span ref={ref}>0</span>;
}

export default function MetricsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="trust" className="bg-[#161616] py-16 lg:py-24">
      <div className="container-luxury">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12 lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-px bg-[#E86F16]" />
              <span
                className="text-white/30"
                style={{
                  fontFamily: "var(--font-josefin)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Our Track Record
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="text-white"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Numbers that<br />
              <em style={{ fontStyle: "italic", color: "#E86F16" }}>speak for us.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE_OUT_EXPO }}
            className="text-white/40 leading-relaxed"
            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
          >
            Two and a half decades of delivering on every promise.
            Every project completed on time, every OC received, every family settled.
          </motion.p>
        </div>

        {/* Metrics grid — 1px white lines between cells */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {metrics.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#161616] p-6 sm:p-10"
            >
              <div
                className="text-white leading-none mb-4"
                style={{
                  fontFamily: "var(--font-cinzel)",
                  fontSize: "clamp(2.5rem,4.5vw,4rem)",
                  fontWeight: 300,
                }}
              >
                <Counter target={value} />
                <span style={{ color: "#E86F16" }}>{suffix}</span>
              </div>
              <div
                className="text-white/35 whitespace-pre-line leading-relaxed"
                style={{
                  fontFamily: "var(--font-josefin)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
