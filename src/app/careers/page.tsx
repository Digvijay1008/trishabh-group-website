"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";
import { ArrowRight } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="bg-[#FAF9F7] min-h-screen pt-24 pb-32">
      <div className="container-luxury">
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-[#E86F16]" />
            <span
              className="text-[#3F3F46]/50"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "0.625rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Join Our Legacy
            </span>
            <div className="w-10 h-px bg-[#E86F16]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="text-[#161616] mb-8"
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Build your career with<br />
            <em style={{ fontStyle: "italic", color: "#E86F16" }}>Trishabh Group.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: EASE_OUT_EXPO }}
            className="text-[#3F3F46] leading-relaxed"
            style={{ fontFamily: "var(--font-josefin)", fontSize: "1.125rem" }}
          >
            We are always looking for passionate architects, engineers, and sales professionals who share our uncompromising commitment to quality and 100% OC delivery.
          </motion.p>
        </div>

        {/* Current Openings */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-[#161616] mb-8" style={{ fontFamily: "var(--font-cinzel)", fontSize: "2rem" }}>
            Current Openings
          </h3>
          
          <div className="space-y-6">
            {[
              { title: "Senior Architect", department: "Design & Planning", location: "Mumbai HQ", type: "Full Time" },
              { title: "Project Manager", department: "Construction", location: "Chembur Site", type: "Full Time" },
              { title: "Luxury Sales Executive", department: "Sales & Marketing", location: "Mumbai HQ", type: "Full Time" },
            ].map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: EASE_OUT_EXPO }}
                className="group bg-white border border-[#E7E2D9] p-8 flex flex-col md:flex-row items-start md:items-center justify-between hover:border-[#E86F16]/50 transition-colors duration-300 cursor-pointer shadow-sm hover:shadow-md"
              >
                <div>
                  <h4 className="text-[#161616] mb-2" style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.5rem", fontWeight: 600 }}>
                    {job.title}
                  </h4>
                  <div className="flex items-center gap-4 text-[#3F3F46]/70" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem" }}>
                    <span>{job.department}</span>
                    <span className="w-1 h-1 rounded-full bg-[#E86F16]" />
                    <span>{job.location}</span>
                    <span className="w-1 h-1 rounded-full bg-[#E86F16]" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <div className="w-12 h-12 rounded-full border border-[#E7E2D9] flex items-center justify-center text-[#161616] group-hover:bg-[#E86F16] group-hover:text-white group-hover:border-[#E86F16] transition-all duration-300">
                    <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center border-t border-[#E7E2D9] pt-16">
            <h4 className="text-[#161616] mb-4" style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.5rem" }}>
              Don&apos;t see a perfect fit?
            </h4>
            <p className="text-[#3F3F46]/70 mb-8" style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem" }}>
              Send us your resume anyway. We are always interested in connecting with top talent.
            </p>
            <a href="mailto:careers@trishabh.com" className="inline-block bg-[#E86F16] text-white px-8 py-4 uppercase text-xs tracking-widest font-medium hover:bg-[#161616] transition-colors duration-300" style={{ fontFamily: "var(--font-josefin)" }}>
              Email Your Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
