"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";
import { ArrowRight, ChevronRight, Briefcase, Award, Users } from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "Senior Architect",
    department: "Design & Planning",
    location: "Mumbai HQ",
    type: "Full Time"
  },
  {
    id: 2,
    title: "Project Manager",
    department: "Construction",
    location: "Chembur Site",
    type: "Full Time"
  },
  {
    id: 3,
    title: "Sales Executive",
    department: "Sales & Marketing",
    location: "Mumbai HQ",
    type: "Full Time"
  },
  {
    id: 4,
    title: "Site Engineer",
    department: "Engineering",
    location: "Multiple Sites",
    type: "Full Time"
  }
];

export default function CareersPage() {
  return (
    <div className="bg-[#FAF9F7] min-h-[100dvh] pt-16 md:pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Enhanced Hero */}
      <section className="container-luxury mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-[#E86F16]" />
            <span
              className="text-[#3F3F46]/50"
              style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              Join Our Legacy
            </span>
            <div className="w-10 h-px bg-[#E86F16]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="text-[#161616] mb-8"
            style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05 }}
          >
            Build your career with<br />
            <em style={{ fontStyle: "italic", color: "#E86F16" }}>Trishabh Group.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="text-[#3F3F46]/80 leading-relaxed max-w-2xl mx-auto text-lg"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            We are always seeking passionate architects, engineers, and sales professionals who share our uncompromising commitment to quality and architectural excellence.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="bg-white py-16 md:py-24 border-y border-[#E7E2D9]">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-[#161616] text-3xl font-cinzel mb-4">Why Trishabh Group?</h2>
            <p className="text-[#3F3F46]/70 font-inter max-w-lg mx-auto text-sm">
              An environment where innovation thrives, precision is rewarded, and architectural dreams are brought to life without compromise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                icon: Award,
                title: "Excellence as Standard",
                desc: "We don't settle for average. Every project we undertake is a pursuit of perfection."
              },
              {
                icon: Briefcase,
                title: "Growth Opportunities",
                desc: "Work alongside seasoned professionals and grow your expertise in the luxury real estate sector."
              },
              {
                icon: Users,
                title: "Collaborative Culture",
                desc: "A supportive environment where every team member's contribution is valued and recognized."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE_OUT_EXPO }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[#FAF9F7] border border-[#E7E2D9] flex items-center justify-center mb-6 group-hover:bg-[#E86F16]/5 transition-colors duration-500">
                  <item.icon size={24} className="text-[#E86F16]" />
                </div>
                <h3 className="text-xl text-[#161616] font-cinzel mb-3">{item.title}</h3>
                <p className="text-[#3F3F46]/70 font-inter text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24">
        <div className="container-luxury max-w-5xl">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="text-[#161616] text-3xl font-cinzel mb-3">Open Positions</h2>
              <p className="text-[#3F3F46]/70 font-inter text-sm">Join our team of specialists.</p>
            </div>
            <div className="text-[#3F3F46]/50 font-josefin text-xs uppercase tracking-widest">{JOBS.length} Roles Available</div>
          </div>

          <div className="space-y-4">
            {JOBS.map((job, i) => (
              <motion.a
                href={`mailto:careers@trishabhgroup.com?subject=Application for ${job.title}`}
                key={job.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_OUT_EXPO }}
                className="group block bg-white border border-[#E7E2D9] rounded-2xl p-6 lg:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#E86F16]/30 transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[#E86F16] font-josefin text-[0.625rem] uppercase tracking-[0.2em] bg-[#E86F16]/10 px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-xl font-cinzel text-[#161616] group-hover:text-[#E86F16] transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 text-[#3F3F46]/60 font-inter text-xs">
                      <span>{job.location}</span>
                      <span className="w-1 h-1 rounded-full bg-[#E7E2D9]" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-[#161616] font-josefin text-xs uppercase tracking-widest font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Apply Now
                    </span>
                    <div className="w-12 h-12 rounded-full border border-[#E7E2D9] flex items-center justify-center group-hover:bg-[#E86F16] group-hover:border-[#E86F16] transition-all duration-500">
                      <ChevronRight size={18} className="text-[#161616] group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* General CTA */}
      <section className="container-luxury max-w-5xl pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          className="bg-[#161616] rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E86F16]/10 blur-[100px] rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <h3 className="text-white text-3xl font-cinzel mb-4">Don&apos;t see a perfect fit?</h3>
            <p className="text-white/70 font-inter max-w-lg mx-auto mb-10 text-sm leading-relaxed">
              We are continually expanding our team. Send us your resume, and our HR department will reach out when a suitable position becomes available.
            </p>
            
            <a 
              href="mailto:careers@trishabhgroup.com?subject=General Application" 
              className="inline-flex items-center justify-center gap-3 bg-[#E86F16] text-white rounded-full hover:bg-[#D4610F] transition-all duration-300"
              style={{ padding: "14px 32px" }}
            >
              <span className="font-josefin text-[0.75rem] uppercase tracking-[0.15em] font-medium">Send Resume</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
