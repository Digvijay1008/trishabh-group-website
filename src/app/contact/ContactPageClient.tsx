"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/easing";

export default function ContactPageClient() {
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="space-y-1">
                <label className="font-inter text-[11px] tracking-widest uppercase text-[#161616]">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors rounded-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="font-inter text-[11px] tracking-widest uppercase text-[#161616]">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+91"
                    className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors rounded-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-inter text-[11px] tracking-widest uppercase text-[#161616]">Email</label>
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-inter text-[11px] tracking-widest uppercase text-[#161616]">Project of Interest</label>
                <select className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 font-inter text-sm text-[#3F3F46] focus:outline-none focus:border-[#E86F16] transition-colors rounded-none appearance-none">
                  <option>General Inquiry</option>
                  <option>Trishabh Park View (Ongoing)</option>
                  <option>Trishabh Serenity (Upcoming)</option>
                  <option>Trishabh Crest (Completed)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-inter text-[11px] tracking-widest uppercase text-[#161616]">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we assist you?"
                  className="w-full bg-[#FAF9F7] border border-[#E7E2D9] px-4 py-3 font-inter text-sm text-[#161616] focus:outline-none focus:border-[#E86F16] transition-colors rounded-none resize-none"
                />
              </div>

              <button className="w-full mt-4 bg-[#161616] hover:bg-[#E86F16] text-white py-4 font-inter text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 flex items-center justify-center gap-3 group">
                Submit Inquiry
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-[#3F3F46]/60 font-inter text-center mt-6 leading-relaxed">
                By submitting this form, you authorize Trishabh Group and its representatives to contact you. <br className="hidden md:block"/>This project is registered under MahaRERA and is available on the website maharera.mahaonline.gov.in.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
