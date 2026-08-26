"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";
import { ArrowRight } from "lucide-react";

export default function RedevelopmentPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-32 bg-[#161616] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#E8E2D8]/10" />
        <div className="container-luxury relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-px bg-[#E86F16]" />
              <span
                className="text-white/70"
                style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                Society Redevelopment
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="mb-8"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Unlock the true potential of your <em style={{ fontStyle: "italic", color: "#E86F16" }}>Property.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: EASE_OUT_EXPO }}
              className="text-white/70 leading-relaxed max-w-xl mb-10"
              style={{ fontFamily: "var(--font-josefin)", fontSize: "1.125rem" }}
            >
              Partner with Trishabh Group for a seamless, transparent, and luxurious redevelopment process. We bring 25+ years of legacy, 100% OC delivery track record, and premium construction quality to your society.
            </motion.p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: EASE_OUT_EXPO }}
              className="inline-flex items-center gap-3 bg-[#E86F16] text-white px-8 py-4 uppercase tracking-widest hover:bg-white hover:text-[#161616] transition-colors duration-300"
              style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem", fontWeight: 500 }}
            >
              Start the Conversation
              <ArrowRight size={14} />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Why Us - Editorial Split */}
      <section className="py-[120px] lg:py-[180px] bg-[#FAF9F7] overflow-hidden">
        <div className="container-luxury max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
            
            {/* Left - Massive Typography */}
            <div className="lg:w-1/2 flex flex-col justify-start">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                className="sticky top-40"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-px bg-[#E86F16]" />
                  <span className="text-[#3F3F46]/50" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    The Trishabh Advantage
                  </span>
                </div>
                <h2 className="text-[#161616] mb-8" style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                  Why we are the <em style={{ fontStyle: "italic", color: "#E86F16" }}>gold standard</em> for redevelopment.
                </h2>
                <p className="text-[#3F3F46]/70 leading-relaxed max-w-md text-lg" style={{ fontFamily: "var(--font-josefin)" }}>
                  Rebuilding your society requires immense trust. We honor that trust with flawless execution, premium material selection, and zero financial surprises.
                </p>
              </motion.div>
            </div>

            {/* Right - Staggered Cards */}
            <div className="lg:w-1/2 flex flex-col gap-6 lg:pt-32">
              {[
                { title: "100% OC Track Record", desc: "Every project delivered with complete legal compliance and OC." },
                { title: "Zero Cost Overruns", desc: "Transparent financial planning with no hidden costs for society members." },
                { title: "Premium Amenities", desc: "Upgrading your lifestyle with state-of-the-art facilities." },
                { title: "Timely Delivery", desc: "Strict adherence to timelines backed by strong financial health." },
              ].map((feature, i) => {
                // Apply a slight offset to alternating cards for the organic staggered look
                const offsetClass = i % 2 !== 0 ? "lg:-ml-12" : "lg:ml-12";
                
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: EASE_OUT_EXPO }}
                    className={`bg-white p-8 sm:p-10 border border-[#E7E2D9] rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(22,22,22,0.04)] hover:shadow-2xl hover:border-[#E86F16]/30 transition-all duration-500 relative group ${offsetClass}`}
                  >
                    <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] pointer-events-none rounded-[2rem]" />
                    <div className="w-14 h-14 rounded-full bg-[#FAF9F7] text-[#E86F16] flex items-center justify-center mb-8 font-medium font-josefin border border-[#E7E2D9] group-hover:bg-[#E86F16] group-hover:text-white transition-colors duration-500">
                      0{i+1}
                    </div>
                    <h3 className="text-[#161616] mb-4" style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.5rem", fontWeight: 500 }}>
                      {feature.title}
                    </h3>
                    <p className="text-[#3F3F46]/70 leading-relaxed text-[0.9375rem]" style={{ fontFamily: "var(--font-josefin)" }}>
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 lg:py-[120px] bg-white border-t border-[#E7E2D9]">
        <div className="container-luxury max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#161616] mb-4" style={{ fontFamily: "var(--font-cinzel)", fontSize: "2.5rem" }}>
              Ready to Redevelop?
            </h2>
            <p className="text-[#3F3F46]/70" style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem" }}>
              Submit your society details below and our redevelopment experts will get in touch with you.
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/50 mb-2 font-josefin">Society Name</label>
                <input type="text" className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 outline-none focus:border-[#E86F16] transition-colors font-josefin" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/50 mb-2 font-josefin">Location</label>
                <input type="text" className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 outline-none focus:border-[#E86F16] transition-colors font-josefin" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/50 mb-2 font-josefin">Contact Person Name</label>
                <input type="text" className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 outline-none focus:border-[#E86F16] transition-colors font-josefin" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/50 mb-2 font-josefin">Phone Number</label>
                <input type="tel" className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 outline-none focus:border-[#E86F16] transition-colors font-josefin" />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/50 mb-2 font-josefin">Brief details about the property</label>
              <textarea rows={4} className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 outline-none focus:border-[#E86F16] transition-colors font-josefin resize-none" />
            </div>
            <button type="submit" className="w-full bg-[#161616] text-white py-4 uppercase tracking-widest text-xs font-medium hover:bg-[#E86F16] transition-colors duration-300 font-josefin">
              Submit Details
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
