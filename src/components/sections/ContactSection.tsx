"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, ArrowLeft, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
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

  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const nextStep = async (fields: (keyof FormData)[]) => {
    const isValid = await trigger(fields);
    if (isValid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

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
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col min-h-[400px]">
                
                {/* Progress Bar */}
                <div className="flex gap-2 mb-10">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-[#E7E2D9]">
                      <motion.div
                        className="h-full bg-[#E86F16]"
                        initial={{ width: "0%" }}
                        animate={{ width: step >= i ? "100%" : "0%" }}
                        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                      />
                    </div>
                  ))}
                </div>

                <div className="relative flex-1">
                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <motion.div
                        key="step0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <h3 className="text-[#161616] text-2xl font-light" style={{ fontFamily: "var(--font-cinzel)" }}>What is your name?</h3>
                        <div className="space-y-2">
                          <input
                            {...register("name")}
                            className={inputCls}
                            placeholder="Your full name"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                            autoFocus
                          />
                          {errors.name && (
                            <p className="text-[#E86F16]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem" }}>
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div className="flex justify-end pt-4">
                          <button
                            type="button"
                            onClick={() => nextStep(["name"])}
                            className="inline-flex items-center gap-2 bg-[#161616] text-white px-6 py-3 rounded-full hover:bg-[#E86F16] transition-colors duration-300"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                          >
                            Next <ArrowRight size={14} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <h3 className="text-[#161616] text-2xl font-light" style={{ fontFamily: "var(--font-cinzel)" }}>What is your email address?</h3>
                        <div className="space-y-2">
                          <input
                            {...register("email")}
                            type="email"
                            className={inputCls}
                            placeholder="your@email.com"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                            autoFocus
                          />
                          {errors.email && (
                            <p className="text-[#E86F16]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem" }}>
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                        <div className="flex justify-between pt-4">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="inline-flex items-center gap-2 text-[#3F3F46]/60 hover:text-[#161616] transition-colors"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                          >
                            <ArrowLeft size={14} /> Back
                          </button>
                          <button
                            type="button"
                            onClick={() => nextStep(["email"])}
                            className="inline-flex items-center gap-2 bg-[#161616] text-white px-6 py-3 rounded-full hover:bg-[#E86F16] transition-colors duration-300"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                          >
                            Next <ArrowRight size={14} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <h3 className="text-[#161616] text-2xl font-light" style={{ fontFamily: "var(--font-cinzel)" }}>What is the best number to reach you?</h3>
                        <div className="space-y-2">
                          <input
                            {...register("phone")}
                            type="tel"
                            className={inputCls}
                            placeholder="+91 98XXX XXXXX"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                            autoFocus
                          />
                          {errors.phone && (
                            <p className="text-[#E86F16]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem" }}>
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                        <div className="flex justify-between pt-4">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="inline-flex items-center gap-2 text-[#3F3F46]/60 hover:text-[#161616] transition-colors"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                          >
                            <ArrowLeft size={14} /> Back
                          </button>
                          <button
                            type="button"
                            onClick={() => nextStep(["phone"])}
                            className="inline-flex items-center gap-2 bg-[#161616] text-white px-6 py-3 rounded-full hover:bg-[#E86F16] transition-colors duration-300"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                          >
                            Next <ArrowRight size={14} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <h3 className="text-[#161616] text-2xl font-light" style={{ fontFamily: "var(--font-cinzel)" }}>Which project are you interested in?</h3>
                        <div className="space-y-2">
                          <div className="relative">
                            <select
                              {...register("project")}
                              className={`${inputCls} appearance-none pr-8 cursor-pointer`}
                              style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                            >
                              <option value="">Choose a project</option>
                              {projects.map((p) => <option key={p} value={p}>{p}</option>)}
                            </select>
                            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-[#3F3F46]/40 pointer-events-none mr-4" />
                          </div>
                          {errors.project && (
                            <p className="text-[#E86F16]" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem" }}>
                              {errors.project.message}
                            </p>
                          )}
                        </div>
                        <div className="flex justify-between pt-4">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="inline-flex items-center gap-2 text-[#3F3F46]/60 hover:text-[#161616] transition-colors"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                          >
                            <ArrowLeft size={14} /> Back
                          </button>
                          <button
                            type="button"
                            onClick={() => nextStep(["project"])}
                            className="inline-flex items-center gap-2 bg-[#161616] text-white px-6 py-3 rounded-full hover:bg-[#E86F16] transition-colors duration-300"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                          >
                            Next <ArrowRight size={14} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6 flex flex-col h-full"
                      >
                        <h3 className="text-[#161616] text-2xl font-light" style={{ fontFamily: "var(--font-cinzel)" }}>Any specific requirements? (Optional)</h3>
                        <div className="space-y-2 flex-1">
                          <textarea
                            {...register("message")}
                            rows={4}
                            className={`${inputCls} resize-none`}
                            placeholder="Tell us what you're looking for..."
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.9375rem" }}
                            autoFocus
                          />
                        </div>
                        
                        <div className="pt-6">
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
                          <div className="flex items-center justify-between mt-6">
                            <button
                              type="button"
                              onClick={prevStep}
                              className="inline-flex items-center gap-2 text-[#3F3F46]/60 hover:text-[#161616] transition-colors"
                              style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                            >
                              <ArrowLeft size={14} /> Back
                            </button>
                            <p className="text-[#3F3F46]/40" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem" }}>
                              Your data is completely private.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
