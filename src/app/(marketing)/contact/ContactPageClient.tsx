"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Check } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/easing";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    remarks: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F7] min-h-[100dvh] pt-16 md:pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-luxury">
        
        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="space-y-12 lg:col-span-2"
          >
            <div className="space-y-8">
              <h3 className="font-cormorant text-3xl text-[#161616]">Corporate Office</h3>
              
              <div className="flex items-start gap-4">
                <MapPin className="text-[#E86F16] mt-1 shrink-0" size={20} />
                <p className="font-inter text-[#3F3F46] leading-relaxed">
                  4, Rishabh shopping centre,<br />
                  Opp. Gulmarg society, Nr. VNP & RC marg,<br />
                  monorail station, Chembur naka,<br />
                  Chembur (E), Mumbai 400 071.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#E86F16] shrink-0" size={20} />
                <p className="font-inter text-[#3F3F46]">+91 99203 87722</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#E86F16] shrink-0" size={20} />
                <p className="font-inter text-[#3F3F46]">sales@trishabh.com</p>
              </div>
            </div>

            {/* Real Map Integration */}
            <div className="w-full h-64 rounded-sm relative overflow-hidden border border-[#E7E2D9] group">
              <iframe
                title="Google Maps Location - Trishabh Group"
                src="https://maps.google.com/maps?q=Trishabh+Group,+4,+Rishabh+shopping+centre,+Chembur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Column - Normal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT_EXPO }}
            className="bg-white p-8 lg:p-12 border border-[#E7E2D9] rounded-sm shadow-[0_8px_40px_-12px_rgba(22,22,22,0.05)] lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 py-20"
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
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <h3 className="font-cormorant text-2xl text-[#161616] mb-6 border-b border-[#E7E2D9] pb-4">
                    Send us a message
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/60 mb-2 font-inter">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors rounded-sm placeholder:text-[#3F3F46]/30"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/60 mb-2 font-inter">Mobile Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 99203 87722"
                        className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors rounded-sm placeholder:text-[#3F3F46]/30"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/60 mb-2 font-inter">Remarks</label>
                    <textarea
                      rows={4}
                      value={formData.remarks}
                      onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                      placeholder="Any specific requirements or questions..."
                      className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors resize-none rounded-sm placeholder:text-[#3F3F46]/30"
                    />
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-[10px] text-[#3F3F46]/60 font-inter leading-relaxed max-w-xs">
                      By submitting this form, you authorize Trishabh Group and its representatives to contact you.
                    </p>
                    
                    <button
                      type="submit"
                      className="group flex items-center justify-center gap-3 bg-[#E86F16] text-white rounded-full hover:bg-[#D4610F] transition-all duration-300 w-full sm:w-auto"
                      style={{ padding: "8px 8px 8px 24px" }}
                    >
                      <span className="font-inter text-[11px] tracking-[0.15em] uppercase font-semibold mt-0.5">
                        Submit Inquiry
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                        <ArrowRight size={14} className="text-white" />
                      </div>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
