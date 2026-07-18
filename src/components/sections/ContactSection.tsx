"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/easing";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  project: z.string().min(1, "Please select a project"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const projects = [
  "Trishabh Park View — Chembur",
  "Trishabh Serenity — Powai",
  "Trishabh Estancia — Thane",
  "General Enquiry",
];

const inputCls =
  "w-full bg-[#FAF9F7] border border-[#E7E2D9] rounded-xl px-4 py-3.5 text-[#161616] placeholder:text-[#3F3F46]/50 focus:outline-none focus:border-[#E86F16] focus:bg-white focus:ring-1 focus:ring-[#E86F16]/20 transition-all duration-300";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
  };

  return (
    <section ref={ref} id="contact" className="bg-white py-16 lg:py-24 border-t border-[#E7E2D9]">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left — contact info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              className="flex items-center gap-4 mb-8"
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
                Get in Touch
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="text-[#161616] mb-8"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Begin your<br />
              <em style={{ fontStyle: "italic" }}>journey home.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE_OUT_EXPO }}
              className="text-[#3F3F46]/60 leading-relaxed mb-12 max-w-sm"
              style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
            >
              Share your details and our relationship manager will connect
              with you within 24 hours to schedule a personalised site visit.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.24, ease: EASE_OUT_EXPO }}
              className="space-y-5"
            >
              {[
                { Icon: Phone, text: "+91 22 XXX XXXXX" },
                { Icon: Mail, text: "info@trishabh.com" },
                { Icon: MapPin, text: "Trishabh House, Chembur, Mumbai — 400071" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full border border-[#E7E2D9] flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-[#3F3F46]/50" />
                  </div>
                  <span
                    className="text-[#3F3F46] pt-2 leading-snug"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT_EXPO }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-[#E7E2D9]/50"
          >
            {isSubmitSuccessful ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center space-y-5">
                <div className="w-14 h-14 rounded-full border border-[#E86F16] flex items-center justify-center">
                  <span className="text-[#E86F16] text-xl">✓</span>
                </div>
                <h3
                  className="text-[#161616]"
                  style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.75rem", fontWeight: 400 }}
                >
                  Thank You
                </h3>
                <p
                  className="text-[#3F3F46]/60"
                  style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem" }}
                >
                  Our team will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    className="text-[#3F3F46]/50 block"
                    style={{
                      fontFamily: "var(--font-josefin)",
                      fontSize: "0.625rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    className={inputCls}
                    placeholder="Your full name"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                  />
                  {errors.name && (
                    <p className="text-[#E86F16]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem" }}>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    className="text-[#3F3F46]/50 block"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
                  >
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className={inputCls}
                    placeholder="your@email.com"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                  />
                  {errors.email && (
                    <p className="text-[#E86F16]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem" }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label
                    className="text-[#3F3F46]/50 block"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className={inputCls}
                    placeholder="+91 98XXX XXXXX"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                  />
                  {errors.phone && (
                    <p className="text-[#E86F16]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem" }}>
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Project */}
                <div className="space-y-2">
                  <label
                    className="text-[#3F3F46]/50 block"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
                  >
                    Select Project
                  </label>
                  <div className="relative">
                    <select
                      {...register("project")}
                      className={`${inputCls} appearance-none pr-8 cursor-pointer`}
                      style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                    >
                      <option value="">Choose a project</option>
                      {projects.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-[#3F3F46]/40 pointer-events-none" />
                  </div>
                  {errors.project && (
                    <p className="text-[#E86F16]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem" }}>
                      {errors.project.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    className="text-[#3F3F46]/50 block"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    className={`${inputCls} resize-none`}
                    placeholder="Any specific requirements or questions?"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#E86F16] text-white rounded-full py-4 hover:bg-[#D4610F] transition-all duration-300 disabled:opacity-60"
                  style={{
                    fontFamily: "var(--font-josefin)",
                    fontSize: "0.625rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    boxShadow: "0 4px 24px -4px rgba(232,111,22,0.4)",
                  }}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>Submit Enquiry <ArrowRight size={11} /></>
                  )}
                </button>

                <p
                  className="text-center text-[#3F3F46]/30"
                  style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem" }}
                >
                  We respect your privacy. Your data is never shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
