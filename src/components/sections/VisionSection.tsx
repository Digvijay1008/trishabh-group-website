"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { EASE_OUT_EXPO } from "@/lib/easing";

export default function VisionSection() {
  const containerRef = useRef<HTMLElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="bg-[#FAF9F7] py-32 lg:py-48 relative overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: EASE_OUT_EXPO }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-[#E86F16]" />
                <span className="text-[#3F3F46]/60 text-[10px] tracking-[0.2em] uppercase font-inter">
                  The Vision
                </span>
              </div>
              
              <h2 className="text-[#161616] font-cormorant text-5xl lg:text-7xl leading-[1.1] mb-8">
                Designing<br />
                Tomorrow&apos;s<br />
                <em className="text-[#E86F16]">Heritage.</em>
              </h2>
              
              <div className="space-y-6 text-[#3F3F46] font-inter text-[15px] leading-relaxed max-w-md">
                <p>
                  At Trishabh Group, we view real estate not as construction, but as the curation of life&apos;s finest moments. Every line drawn and every material selected serves a singular purpose: elevating the human experience.
                </p>
                <p>
                  Our interiors are sanctuaries of light, space, and serenity. We collaborate with world-renowned architects to ensure that crossing the threshold of a Trishabh residence feels like arriving at a masterpiece you can call home.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(10% 0 0 0)" }}
              animate={inView ? { opacity: 1, clipPath: "inset(0 0 0 0)" } : {}}
              transition={{ duration: 1.4, ease: EASE_OUT_EXPO }}
              className="relative aspect-[4/5] w-full overflow-hidden"
            >
              <motion.div style={{ y, height: "120%" }} className="absolute inset-0 top-[-10%]">
                <Image
                  src="/interior_vision.png"
                  alt="Luxury Interior Design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
