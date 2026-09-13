"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";
import { ArrowRight, Building2, ShieldCheck, Scale, Ruler, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function RedevelopmentPage() {
  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      {/* Immersive Hero Section */}
      <div className="relative h-[85vh] min-h-[600px] w-full flex items-end pb-24 lg:pb-32 overflow-hidden bg-[#161616]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/elevations/trishabh-miraya.jpg" 
            alt="Trishabh Redevelopment" 
            fill 
            className="object-cover opacity-60" 
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/40 to-transparent z-10" />
        
        <div className="container-luxury relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-[#E86F16]" />
            <span
              className="text-white/60"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "0.625rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Rebuilding Legacies
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="text-white mb-6 max-w-4xl"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(3rem, 6vw, 6rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Reimagining Legacies.<br />
            <em style={{ fontStyle: "italic", color: "#E86F16" }}>Redefining Lives.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: EASE_OUT_EXPO }}
            className="text-white/80 leading-relaxed max-w-2xl text-lg sm:text-xl"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            Transforming aging societies into modern masterpieces, while preserving the soul and unity of your community.
          </motion.p>
        </div>
      </div>

      {/* The Philosophy - Editorial Block */}
      <div className="py-24 lg:py-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: EASE_OUT_EXPO }}
            >
              <h2 className="text-[#161616] font-cinzel text-4xl lg:text-5xl mb-8 leading-tight">
                A sensitive <em className="text-[#E86F16]">transition.</em>
              </h2>
              <div className="space-y-6 text-[#3F3F46] font-josefin text-lg leading-relaxed">
                <p>
                  Redevelopment is more than just construction; it is a sensitive transition. We understand that your home holds decades of memories. 
                </p>
                <p>
                  Our approach ensures that while you upgrade to state-of-the-art amenities and enhanced security, the warmth and unity of your society remain untouched. We don&apos;t just rebuild walls; we elevate lifestyles and secure your future.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: EASE_OUT_EXPO }}
            >
              <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden mt-12">
                 <Image src="/images/elevations/tulsi-classic.jpg" alt="Classic Architecture" fill className="object-cover" />
              </div>
              <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden mb-12">
                 <Image src="/images/elevations/trishabh-signet.jpg" alt="Modern Architecture" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Trishabh Advantage (Why Us?) */}
      <div className="bg-[#161616] py-24 lg:py-32 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E86F16]/10 via-[#161616] to-[#161616] pointer-events-none" />
        <div className="container-luxury relative z-10">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            >
              <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl mb-4">The Trishabh Advantage</h2>
              <p className="font-josefin text-white/60 text-lg max-w-xl">
                A legacy built on trust, financial strength, and an unwavering commitment to quality.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
            {[
              {
                icon: <CheckCircle2 size={32} strokeWidth={1} />,
                title: "100% OC Track Record",
                desc: "An immaculate history of delivering projects on time with full regulatory compliance and Occupation Certificates."
              },
              {
                icon: <ShieldCheck size={32} strokeWidth={1} />,
                title: "Absolute Transparency",
                desc: "Clear communication, robust financial backing, and no hidden clauses. Your society remains in the loop at every stage."
              },
              {
                icon: <Building2 size={32} strokeWidth={1} />,
                title: "Zero-Compromise Quality",
                desc: "Premium materials, branded fittings, and earthquake-resistant designs that stand the test of time."
              }
            ].map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: EASE_OUT_EXPO }}
                className="group"
              >
                <div className="text-[#E86F16] mb-8 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-[#E86F16] group-hover:text-white transition-colors duration-500">
                  {adv.icon}
                </div>
                <h3 className="font-cinzel text-2xl mb-4">{adv.title}</h3>
                <p className="font-josefin text-white/60 leading-relaxed text-[0.9375rem]">
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Additions Grid */}
      <div className="py-24 lg:py-32">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-[#161616] font-cinzel text-4xl lg:text-5xl mb-6">Value Additions</h2>
            <p className="text-[#3F3F46] font-josefin max-w-2xl mx-auto text-lg">
              Beyond just a new building, we ensure your transition comes with tangible benefits that elevate your standard of living.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: <Ruler size={24} />, title: "Enhanced Carpet Area", desc: "Enjoy significantly larger, better-planned living spaces." },
              { icon: <Scale size={24} />, title: "Substantial Corpus", desc: "Generous corpus funds to secure your society's financial future." },
              { icon: <MapPin size={24} />, title: "Relocation Assistance", desc: "Hassle-free support and rent during the transition period." },
              { icon: <Sparkles size={24} />, title: "Modern Amenities", desc: "Access to gyms, rooftop gardens, and advanced security." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE_OUT_EXPO }}
                className="bg-white p-8 rounded-[2rem] border border-[#E7E2D9] hover:border-[#E86F16]/30 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="text-[#161616] mb-6 opacity-60 group-hover:text-[#E86F16] group-hover:opacity-100 transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="font-cinzel text-[#161616] text-xl mb-3">{item.title}</h4>
                <p className="font-josefin text-[#3F3F46]/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="py-24 lg:py-32 bg-white border-t border-[#E7E2D9]">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            className="mb-16 lg:mb-24 text-center"
          >
            <h2 className="text-[#161616] font-cinzel text-4xl lg:text-5xl mb-6">The Transition Journey</h2>
            <p className="text-[#3F3F46] font-josefin max-w-2xl mx-auto text-lg">
              A transparent, structured, and hassle-free roadmap to your new home.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-[#E7E2D9] hidden md:block" />
            
            {[
              { title: "Feasibility Study", desc: "Comprehensive structural and commercial analysis of your existing society." },
              { title: "Transparent Proposal", desc: "Presenting a clear, mutually beneficial offer detailing areas, corpus, and timelines." },
              { title: "Legal Agreement", desc: "Execution of the Development Agreement with absolute legal transparency." },
              { title: "Smooth Relocation", desc: "Assisting members in vacating and providing alternate accommodation rent." },
              { title: "Rapid Construction", desc: "Fast-tracked building using premium materials, with regular progress updates." },
              { title: "Grand Handover", desc: "Delivering your new, luxurious homes on time, complete with the Occupation Certificate." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE_OUT_EXPO }}
                className="relative flex items-start gap-8 mb-12 last:mb-0"
              >
                <div className="hidden md:flex relative z-10 w-[55px] h-[55px] rounded-full bg-white border border-[#E7E2D9] items-center justify-center text-[#E86F16] font-josefin font-medium shrink-0 shadow-sm">
                  0{idx + 1}
                </div>
                <div className="bg-[#FAF9F7] p-8 rounded-[2rem] border border-[#E7E2D9] w-full hover:border-[#E86F16]/20 hover:shadow-md transition-all duration-300">
                  <div className="md:hidden text-[#E86F16] font-josefin text-sm mb-2 font-medium">Step 0{idx + 1}</div>
                  <h4 className="font-cinzel text-2xl text-[#161616] mb-3">{step.title}</h4>
                  <p className="font-josefin text-[#3F3F46]/80 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 lg:py-32 bg-[#E8E2D8]">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-[#161616] font-cinzel text-4xl md:text-5xl mb-6">Begin Your Society&apos;s Transformation</h2>
            <p className="text-[#3F3F46] font-josefin text-lg mb-10">
              Invite Trishabh Group for a detailed feasibility study and discover the true potential of your property.
            </p>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 bg-[#161616] text-white rounded-full hover:bg-[#E86F16] transition-all duration-300 group/btn"
              style={{ padding: "12px 12px 12px 32px" }}
            >
              <span className="font-josefin text-[0.75rem] uppercase tracking-[0.15em] font-medium">Request Feasibility Study</span>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-105 group-hover/btn:translate-x-1">
                <ArrowRight size={16} className="text-white" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
