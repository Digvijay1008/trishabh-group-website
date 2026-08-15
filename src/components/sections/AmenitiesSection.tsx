"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { EASE_OUT_EXPO } from "@/lib/easing";

const amenities = [
  "Infinity Sky Pools",
  "Private Cinema Rooms",
  "Automated Valet Parking",
  "Zen Gardens",
  "Business Lounges",
  "Spa & Wellness Centers"
];

export default function AmenitiesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={containerRef} className="bg-[#161616] text-white py-16 lg:py-24 relative overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Image */}
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.4, ease: EASE_OUT_EXPO }}
              className="relative aspect-[16/9] lg:aspect-square w-full overflow-hidden"
            >
              <motion.div style={{ y, height: "110%" }} className="absolute inset-0 top-[-5%]">
                <Image
                  src="/amenity_pool.png"
                  alt="Luxury Infinity Pool"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#161616]/10" />
              </motion.div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="order-2 relative z-10 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-[#E86F16]" />
                <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-inter">
                  The Lifestyle
                </span>
              </div>
              
              <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-7xl leading-[1.1] mb-8 lg:mb-12">
                White-Glove<br />
                <span className="text-white/60">Amenities.</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-6 sm:gap-x-8">
                {amenities.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: EASE_OUT_EXPO }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E86F16]" />
                    <span className="font-inter text-sm text-white/80 tracking-wide">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
