"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, MapPin, Phone, Mail, Check } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/easing";

export default function ContactPageClient() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "General Inquiry",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      handleNext();
    } else {
      // Simulate submission
      setIsSubmitted(true);
    }
  };
  return (
    <div className="bg-[#FAF9F7] min-h-screen pt-32 pb-24">
      <div className="container-luxury">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-[#E86F16]" />
            <span className="text-[#3F3F46]/60 text-[10px] tracking-[0.2em] uppercase font-inter">
              Get In Touch
            </span>
            <div className="w-8 h-px bg-[#E86F16]" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="text-[#161616]"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Schedule a <em style={{ fontStyle: "italic", color: "#E86F16" }}>Private Viewing</em>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h3 className="font-cormorant text-3xl text-[#161616]">Corporate Office</h3>
              
              <div className="flex items-start gap-4">
                <MapPin className="text-[#E86F16] mt-1 shrink-0" size={20} />
                <p className="font-inter text-[#3F3F46] leading-relaxed">
                  Trishabh Group Headquarters<br />
                  12th Floor, The Capital Building<br />
                  Bandra Kurla Complex (BKC)<br />
                  Mumbai, Maharashtra 400051
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#E86F16] shrink-0" size={20} />
                <p className="font-inter text-[#3F3F46]">+91 22 6600 8800</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#E86F16] shrink-0" size={20} />
                <p className="font-inter text-[#3F3F46]">sales@trishabhgroup.com</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-[#EBE7E0] rounded-sm relative overflow-hidden border border-[#E7E2D9] group">
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                <MapPin className="text-[#161616]/20 group-hover:text-[#E86F16] transition-colors duration-500" size={32} />
                <span className="font-inter text-[10px] tracking-widest text-[#161616]/40 uppercase">Interactive Map Integration</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT_EXPO }}
            className="bg-white p-10 lg:p-14 border border-[#E7E2D9] rounded-sm shadow-[0_8px_40px_-12px_rgba(22,22,22,0.05)]"
          >
            <div className="h-[400px] flex flex-col justify-between">
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
                    <h3 className="font-cormorant text-3xl text-[#161616]">Inquiry Sent Successfully</h3>
                    <p className="font-inter text-[#3F3F46] max-w-sm mx-auto text-sm leading-relaxed">
                      Thank you for reaching out to Trishabh Group. A luxury real estate advisor will contact you shortly.
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
                    <div className="flex items-center gap-2 mb-8">
                      {[0, 1, 2, 3].map((i) => (
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
                            What is your full name?
                          </label>
                          <input
                            type="text"
                            autoFocus
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. John Doe"
                            className="w-full bg-transparent border-b border-[#E7E2D9] px-0 py-4 font-inter text-lg text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors placeholder:text-[#3F3F46]/30"
                            required
                          />
                        </div>
                      )}

                      {step === 1 && (
                        <div className="space-y-8">
                          <label className="font-cormorant text-3xl text-[#161616] block mb-2">
                            How can we reach you?
                          </label>
                          <div className="space-y-6">
                            <input
                              type="email"
                              autoFocus
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="Email Address"
                              className="w-full bg-transparent border-b border-[#E7E2D9] px-0 py-4 font-inter text-lg text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors placeholder:text-[#3F3F46]/30"
                              required
                            />
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="Phone Number"
                              className="w-full bg-transparent border-b border-[#E7E2D9] px-0 py-4 font-inter text-lg text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors placeholder:text-[#3F3F46]/30"
                              required
                            />
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-6">
                          <label className="font-cormorant text-3xl text-[#161616] block mb-2">
                            Which project interests you?
                          </label>
                          <select
                            autoFocus
                            value={formData.project}
                            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                            className="w-full bg-transparent border-b border-[#E7E2D9] px-0 py-4 font-inter text-lg text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors appearance-none cursor-pointer"
                          >
                            <option>General Inquiry</option>
                            <option>Trishabh Miraya (Ongoing)</option>
                            <option>Trishabh Greens (Completed)</option>
                            <option>Tulsi Meadows (Completed)</option>
                          </select>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-6">
                          <label className="font-cormorant text-3xl text-[#161616] block mb-2">
                            How can we assist you?
                          </label>
                          <textarea
                            autoFocus
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about your requirements..."
                            className="w-full bg-transparent border-b border-[#E7E2D9] px-0 py-4 font-inter text-lg text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors resize-none placeholder:text-[#3F3F46]/30"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-[#E7E2D9]">
                      {step > 0 ? (
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="flex items-center gap-2 text-[#3F3F46] hover:text-[#161616] font-inter text-xs tracking-widest uppercase transition-colors"
                        >
                          <ArrowLeft size={14} /> Back
                        </button>
                      ) : (
                        <div />
                      )}
                      
                      <button
                        type="submit"
                        className="group flex items-center gap-4 bg-[#E86F16] text-white rounded-full hover:bg-[#D4610F] transition-all duration-300"
                        style={{ padding: "8px 8px 8px 24px" }}
                      >
                        <span className="font-inter text-[11px] tracking-[0.15em] uppercase font-semibold mt-0.5">
                          {step === 3 ? "Submit Inquiry" : "Next Step"}
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

            {!isSubmitted && (
              <p className="text-[10px] text-[#3F3F46]/60 font-inter text-center mt-8 leading-relaxed max-w-sm mx-auto">
                By submitting this form, you authorize Trishabh Group and its representatives to contact you.
              </p>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
