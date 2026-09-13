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
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
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

            {/* Interactive Map with Glassmorphic Contact Details */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.24, ease: EASE_OUT_EXPO }}
              className="relative flex-1 min-h-[350px] w-full rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E7E2D9]/60 group"
            >
              {/* Grayscale Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.90967341857!2d72.89423696504288!3d19.075775836894086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5e227976e19%3A0xc3c6b245041a774c!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.1) opacity(0.8)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              
              {/* Frosted Glass Contact Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white shadow-xl">
                <div className="space-y-4">
                  {[
                    { Icon: Phone, text: "+91 22 XXX XXXXX" },
                    { Icon: Mail, text: "info@trishabh.com" },
                    { Icon: MapPin, text: "Trishabh House, Chembur, Mumbai" },
                  ].map(({ Icon, text }) => (
                    <div key={text} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full border border-[#E7E2D9]/80 bg-white/50 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-[#E86F16]" />
                      </div>
                      <span
                        className="text-[#161616] pt-1.5 leading-snug"
                        style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem" }}
                      >
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
                  
                  <div className="space-y-2">
                    <input
                      {...register("phone")}
                      type="tel"
                      className={inputCls}
                      placeholder="Phone number"
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
                  <input
                    {...register("email")}
                    type="email"
                    className={inputCls}
                    placeholder="Email address"
                    style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                  />
                  {errors.email && (
                    <p className="text-[#E86F16]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem" }}>
                      {errors.email.message}
                    </p>
                  )}
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
