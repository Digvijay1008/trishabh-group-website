"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";

const testimonials = [
  {
    quote: "Trishabh Group didn't just build a home for us, they crafted a lifestyle. The attention to detail and timely delivery of our 4 BHK in Chembur was remarkable.",
    author: "Rahul Desai",
    project: "Trishabh Greens"
  },
  {
    quote: "The 100% OC promise isn't just marketing. Our society redevelopment went perfectly smooth without a single financial hitch. Highly professional team.",
    author: "Anjali Mehta",
    project: "Diamond Garden Redevelopment"
  },
  {
    quote: "From the grand lobby to the intricate marble work in our apartment, everything screams luxury. The Jain family has truly mastered the art of premium real estate.",
    author: "Vikram Singhania",
    project: "Trishabh Elegance"
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-[#161616] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#161616] to-[#2A2A2A] opacity-50" />
      <div className="container-luxury relative z-10">
        <div className="text-center mb-16">
           <span className="text-[#E86F16] mb-4 block uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem" }}>
             Client Stories
           </span>
           <h2 className="text-white" style={{ fontFamily: "var(--font-cinzel)", fontSize: "2.5rem", lineHeight: 1.1 }}>
             Testimonials
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2, ease: EASE_OUT_EXPO }}
              className="bg-white/5 p-10 border border-white/10 hover:border-[#E86F16]/50 transition-colors duration-500 relative flex flex-col"
            >
              {/* Large quote mark */}
              <div className="absolute top-6 left-8 text-[#E86F16]/20 font-serif" style={{ fontSize: "5rem", lineHeight: 0.5 }}>
                &ldquo;
              </div>
              <p className="text-white/80 leading-relaxed mb-8 relative z-10 flex-grow" style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem" }}>
                {t.quote}
              </p>
              <div className="mt-auto border-t border-white/10 pt-6">
                <div className="text-white font-medium" style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.125rem" }}>
                  {t.author}
                </div>
                <div className="text-[#E86F16] uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem" }}>
                  {t.project}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
