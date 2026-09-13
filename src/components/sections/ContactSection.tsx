"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/easing";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid mobile number"),
  remarks: z.string().optional(),
});

type FormData = z.infer<typeof schema>;



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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — contact info & Map */}
          <div className="flex flex-col h-full">
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
              className="text-[#161616] mb-6"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Begin your<br />
              <em style={{ fontStyle: "italic", color: "#E86F16" }}>journey home.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE_OUT_EXPO }}
              className="text-[#3F3F46]/60 leading-relaxed mb-8 max-w-sm"
              style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
            >
              Share your details and our relationship manager will connect
              with you within 24 hours to schedule a personalised site visit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18, ease: EASE_OUT_EXPO }}
              className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E86F16] mt-1 shrink-0" />
                <span className="text-[#3F3F46] font-josefin text-sm leading-relaxed">
                  4, Rishabh shopping centre,<br />
                  Opp. Gulmarg society, Nr. VNP & RC marg,<br />
                  Chembur naka, Chembur (E), Mumbai 400071
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#E86F16] shrink-0" />
                  <span className="text-[#3F3F46] font-josefin text-sm">+91 99203 87722</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#E86F16] shrink-0" />
                  <span className="text-[#3F3F46] font-josefin text-sm">sales@trishabh.com</span>
                </div>
              </div>
            </motion.div>

            {/* Clean Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.24, ease: EASE_OUT_EXPO }}
              className="relative flex-1 min-h-[300px] w-full rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E7E2D9]/60 group"
            >
              {/* Clean Google Maps Embed */}
              <iframe
                src="https://maps.google.com/maps?q=Trishabh+Group,+4,+Rishabh+shopping+centre,+Chembur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
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
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                
                <h3 className="text-[#161616] text-2xl font-light mb-2" style={{ fontFamily: "var(--font-cinzel)" }}>
                  Schedule a Site Visit
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
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
                  
                  <div className="space-y-2 col-span-1 sm:col-span-2">
                    <input
                      {...register("phone")}
                      type="tel"
                      className={inputCls}
                      placeholder="Mobile number"
                      style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                    />
                    {errors.phone && (
                      <p className="text-[#E86F16]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem" }}>
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <textarea
                    {...register("remarks")}
                    rows={4}
                    className={`${inputCls} resize-none`}
                    placeholder="Remarks (optional)"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#E86F16] text-white rounded-xl py-4 hover:bg-[#D4610F] transition-all duration-300 disabled:opacity-60"
                    style={{
                      fontFamily: "var(--font-josefin)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      boxShadow: "0 4px 24px -4px rgba(232,111,22,0.4)",
                    }}
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>Submit Enquiry <ArrowRight size={14} /></>
                    )}
                  </button>
                  <p className="text-[#3F3F46]/40 text-center mt-4" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem" }}>
                    Your data is completely private and secure.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
