"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Building2, Check, Home, Users, Ruler } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/easing";

export default function RedevelopmentPageClient() {
  const [formData, setFormData] = useState({
    societyName: "",
    address: "",
    contactPerson: "",
    phone: "",
    email: "",
    totalUnits: "",
    plotArea: "",
    remarks: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F7] min-h-screen pt-32 pb-24">
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
              Partner With Us
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
            Redeveloping <em style={{ fontStyle: "italic", color: "#E86F16" }}>Legacies</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="mt-6 text-[#3F3F46]/80 font-inter max-w-2xl mx-auto leading-relaxed"
          >
            With over two decades of expertise in transforming old societies into modern luxury landmarks, we ensure a seamless, transparent, and rewarding redevelopment process for all members.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="space-y-8 lg:col-span-2"
          >
            <h3 className="font-cormorant text-3xl text-[#161616]">Why Choose Trishabh?</h3>
            
            <div className="flex items-start gap-4 p-5 bg-white border border-[#E7E2D9] rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#E86F16]/10 flex items-center justify-center shrink-0">
                <Check className="text-[#E86F16]" size={18} />
              </div>
              <div>
                <h4 className="font-cormorant text-xl font-medium text-[#161616] mb-1">100% Track Record</h4>
                <p className="font-inter text-sm text-[#3F3F46]/70 leading-relaxed">Every redevelopment project undertaken has been completed with OC.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white border border-[#E7E2D9] rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#E86F16]/10 flex items-center justify-center shrink-0">
                <Home className="text-[#E86F16]" size={18} />
              </div>
              <div>
                <h4 className="font-cormorant text-xl font-medium text-[#161616] mb-1">Rent Protection</h4>
                <p className="font-inter text-sm text-[#3F3F46]/70 leading-relaxed">Guaranteed on-time transit rent payments throughout the construction phase.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white border border-[#E7E2D9] rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#E86F16]/10 flex items-center justify-center shrink-0">
                <Users className="text-[#E86F16]" size={18} />
              </div>
              <div>
                <h4 className="font-cormorant text-xl font-medium text-[#161616] mb-1">Transparent Agreements</h4>
                <p className="font-inter text-sm text-[#3F3F46]/70 leading-relaxed">Clear, no-hidden-clause documentation ensuring society member safety.</p>
              </div>
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
                    <Building2 size={32} />
                  </div>
                  <h3 className="font-cormorant text-3xl text-[#161616]">Proposal Received</h3>
                  <p className="font-inter text-[#3F3F46] max-w-sm mx-auto text-sm leading-relaxed">
                    Thank you for considering Trishabh Group. Our redevelopment acquisitions team will review your details and contact you shortly.
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
                    Submit Society Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/60 mb-2 font-inter">Society Name *</label>
                      <input
                        type="text"
                        value={formData.societyName}
                        onChange={(e) => setFormData({ ...formData, societyName: e.target.value })}
                        placeholder="Sunrise CHS"
                        className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors rounded-sm placeholder:text-[#3F3F46]/30"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/60 mb-2 font-inter">Location / Area *</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3F3F46]/40" size={16} />
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="e.g. Chembur"
                          className="w-full bg-[#FAF9F7] border border-[#E7E2D9] pl-10 pr-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors rounded-sm placeholder:text-[#3F3F46]/30"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/60 mb-2 font-inter">Contact Person *</label>
                      <input
                        type="text"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="Your Name (e.g. Secretary)"
                        className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors rounded-sm placeholder:text-[#3F3F46]/30"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/60 mb-2 font-inter">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 99999 99999"
                        className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors rounded-sm placeholder:text-[#3F3F46]/30"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/60 mb-2 font-inter">Total Existing Units</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3F3F46]/40" size={16} />
                        <input
                          type="number"
                          value={formData.totalUnits}
                          onChange={(e) => setFormData({ ...formData, totalUnits: e.target.value })}
                          placeholder="e.g. 24"
                          className="w-full bg-[#FAF9F7] border border-[#E7E2D9] pl-10 pr-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors rounded-sm placeholder:text-[#3F3F46]/30"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/60 mb-2 font-inter">Plot Area (Sq.Meters)</label>
                      <div className="relative">
                        <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3F3F46]/40" size={16} />
                        <input
                          type="number"
                          value={formData.plotArea}
                          onChange={(e) => setFormData({ ...formData, plotArea: e.target.value })}
                          placeholder="e.g. 1500"
                          className="w-full bg-[#FAF9F7] border border-[#E7E2D9] pl-10 pr-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors rounded-sm placeholder:text-[#3F3F46]/30"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#3F3F46]/60 mb-2 font-inter">Remarks</label>
                    <textarea
                      rows={3}
                      value={formData.remarks}
                      onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                      placeholder="Any specific requirements or current stage of redevelopment..."
                      className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors resize-none rounded-sm placeholder:text-[#3F3F46]/30"
                    />
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-[10px] text-[#3F3F46]/60 font-inter leading-relaxed max-w-xs">
                      All information shared is kept strictly confidential and used solely for evaluation purposes.
                    </p>
                    
                    <button
                      type="submit"
                      className="group flex items-center justify-center gap-3 bg-[#E86F16] text-white rounded-full hover:bg-[#D4610F] transition-all duration-300 w-full sm:w-auto"
                      style={{ padding: "8px 8px 8px 24px" }}
                    >
                      <span className="font-inter text-[11px] tracking-[0.15em] uppercase font-semibold mt-0.5">
                        Submit Proposal
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
