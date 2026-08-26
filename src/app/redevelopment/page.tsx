"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

export default function RedevelopmentPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    societyName: "",
    location: "",
    contactName: "",
    phone: "",
    details: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep((s) => Math.min(s + 1, 2));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      handleNext();
    } else {
      setIsSubmitted(true);
    }
  };
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
          <div className="bg-[#FAF9F7] p-10 lg:p-14 border border-[#E7E2D9] rounded-sm shadow-sm">
            <div className="h-[320px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#E86F16]/10 flex items-center justify-center text-[#E86F16] mb-4">
                      <Check size={32} />
                    </div>
                    <h3 className="font-cormorant text-3xl text-[#161616]">Details Submitted</h3>
                    <p className="font-josefin text-[#3F3F46] max-w-sm mx-auto text-sm leading-relaxed">
                      Thank you. Our redevelopment experts will review your society's details and contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
                    className="space-y-8 h-full flex flex-col"
                    onSubmit={handleSubmit}
                  >
                    {/* Step Indicators */}
                    <div className="flex items-center gap-2 mb-6">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                            i <= step ? "bg-[#E86F16]" : "bg-[#E7E2D9]"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex-grow flex flex-col justify-center">
                      {step === 0 && (
                        <div className="space-y-6">
                          <label className="font-cormorant text-3xl text-[#161616] block mb-2">
                            Tell us about your society
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                              type="text"
                              autoFocus
                              value={formData.societyName}
                              onChange={(e) => setFormData({ ...formData, societyName: e.target.value })}
                              placeholder="Society Name"
                              className="w-full bg-transparent border-b border-[#E7E2D9] px-0 py-4 font-josefin text-lg text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors placeholder:text-[#3F3F46]/30"
                              required
                            />
                            <input
                              type="text"
                              value={formData.location}
                              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                              placeholder="Location (e.g. Chembur)"
                              className="w-full bg-transparent border-b border-[#E7E2D9] px-0 py-4 font-josefin text-lg text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors placeholder:text-[#3F3F46]/30"
                              required
                            />
                          </div>
                        </div>
                      )}

                      {step === 1 && (
                        <div className="space-y-6">
                          <label className="font-cormorant text-3xl text-[#161616] block mb-2">
                            Who should we contact?
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                              type="text"
                              autoFocus
                              value={formData.contactName}
                              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                              placeholder="Contact Person Name"
                              className="w-full bg-transparent border-b border-[#E7E2D9] px-0 py-4 font-josefin text-lg text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors placeholder:text-[#3F3F46]/30"
                              required
                            />
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="Phone Number"
                              className="w-full bg-transparent border-b border-[#E7E2D9] px-0 py-4 font-josefin text-lg text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors placeholder:text-[#3F3F46]/30"
                              required
                            />
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-6">
                          <label className="font-cormorant text-3xl text-[#161616] block mb-2">
                            Property Details
                          </label>
                          <textarea
                            autoFocus
                            rows={3}
                            value={formData.details}
                            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                            placeholder="Brief details about the property, plot size, etc."
                            className="w-full bg-transparent border-b border-[#E7E2D9] px-0 py-4 font-josefin text-lg text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors resize-none placeholder:text-[#3F3F46]/30"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-6">
                      {step > 0 ? (
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="flex items-center gap-2 text-[#3F3F46] hover:text-[#161616] font-josefin text-xs tracking-widest uppercase transition-colors"
                        >
                          <ArrowLeft size={14} /> Back
                        </button>
                      ) : (
                        <div />
                      )}
                      
                      <button
                        type="submit"
                        className="group flex items-center gap-4 bg-[#161616] text-white rounded-full hover:bg-[#E86F16] transition-all duration-300"
                        style={{ padding: "8px 8px 8px 24px" }}
                      >
                        <span className="font-josefin text-[11px] tracking-[0.15em] uppercase font-medium">
                          {step === 2 ? "Submit Details" : "Next Step"}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                          <ArrowRight size={14} className="text-white" />
                        </div>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
