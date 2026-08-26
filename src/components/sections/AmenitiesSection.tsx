"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { EASE_OUT_EXPO } from "@/lib/easing";

import { 
  Droplets, Film, CarFront, Leaf, 
  Briefcase, Sparkles 
} from "lucide-react";

const amenities = [
  { name: "Infinity Sky Pools", icon: Droplets, span: "sm:col-span-2", bg: "bg-white/5", delay: 0.4 },
  { name: "Private Cinema Rooms", icon: Film, span: "sm:col-span-1", bg: "bg-[#E86F16]/10", delay: 0.5 },
  { name: "Automated Valet Parking", icon: CarFront, span: "sm:col-span-1", bg: "bg-white/5", delay: 0.6 },
  { name: "Zen Gardens", icon: Leaf, span: "sm:col-span-1", bg: "bg-white/5", delay: 0.7 },
  { name: "Business Lounges", icon: Briefcase, span: "sm:col-span-1", bg: "bg-[#E86F16]/10", delay: 0.8 },
  { name: "Spa & Wellness Centers", icon: Sparkles, span: "sm:col-span-2", bg: "bg-white/5", delay: 0.9 }
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenities.map(({ name, icon: Icon, span, bg, delay }) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay, ease: EASE_OUT_EXPO }}
                    className={`flex items-start gap-4 p-5 rounded-2xl border border-white/10 ${bg} ${span} group hover:border-[#E86F16]/50 transition-colors duration-500 backdrop-blur-sm`}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Icon size={20} className="text-[#E86F16] opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <h4 
                        className="text-white/90 group-hover:text-white transition-colors font-medium mb-1"
                        style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.125rem" }}
                      >
                        {name}
                      </h4>
                      <div className="w-6 h-px bg-[#E86F16]/30 group-hover:w-12 transition-all duration-500" />
                    </div>
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
