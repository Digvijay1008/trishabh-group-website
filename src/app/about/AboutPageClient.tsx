"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";
import MetricsSection from "@/components/sections/MetricsSection";

export default function AboutPageClient() {
  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-10 h-px bg-[#E86F16]" />
                <span
                  className="text-[#3F3F46]/50"
                  style={{ fontFamily: "var(--font-josefin)", fontSize: "0.625rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
                >
                  The Legacy
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
                className="text-[#161616] mb-8"
                style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05 }}
              >
                Building Mumbai&apos;s most <em style={{ fontStyle: "italic", color: "#E86F16" }}>exclusive addresses.</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.16, ease: EASE_OUT_EXPO }}
                className="text-[#3F3F46] leading-relaxed max-w-lg mb-6"
                style={{ fontFamily: "var(--font-josefin)", fontSize: "1.125rem" }}
              >
                Established in 1999, Trishabh Group, a renowned real estate developer in Mumbai and Navi Mumbai, was founded by the visionary Jain family. Over the years, we have been dedicated to creating architectural marvels and luxurious living spaces, establishing a remarkable track record of achieving 100% Occupation Certificates (OC) for all our projects to date.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE_OUT_EXPO }}
              className="relative aspect-square max-w-md ml-auto"
            >
              {/* Abstract luxury building illustration */}
              <div className="absolute inset-0 bg-[#E8E2D8] shadow-2xl">
                 <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="20" y="10" width="60" height="90" fill="#7A6B5B" />
                    <rect x="20" y="10" width="10" height="90" fill="#B89860" opacity="0.3" />
                    <rect x="35" y="30" width="10" height="15" fill="#fff" opacity="0.4" />
                    <rect x="55" y="30" width="10" height="15" fill="#fff" opacity="0.4" />
                    <rect x="35" y="60" width="10" height="15" fill="#fff" opacity="0.4" />
                    <rect x="55" y="60" width="10" height="15" fill="#fff" opacity="0.4" />
                 </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Metrics Section from homepage perfectly fits the About page as trust markers */}
      <MetricsSection />

      {/* Philosophy Section */}
      <section className="py-[120px] bg-white">
        <div className="container-luxury max-w-4xl mx-auto text-center">
          <span className="text-[#E86F16] mb-6 block" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            The 100% OC Promise
          </span>
          <h2 className="text-[#161616] mb-10" style={{ fontFamily: "var(--font-cinzel)", fontSize: "3rem", lineHeight: 1.1 }}>
            Exemplary Excellence in Every Project.
          </h2>
          <p className="text-[#3F3F46]/70 leading-relaxed text-lg" style={{ fontFamily: "var(--font-josefin)" }}>
            Our epitomes of excellence are a testament to our teamwork and sound management. We adhere to strict ethical standards and strive to deliver benchmark quality, breathing life into dreams and erecting high-rises that epitomize class and sophistication. Our unwavering commitment to quality and timely delivery has fostered a strong bond of trust with our clients for over 25 years.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-[120px] bg-[#E8E2D8]">
        <div className="container-luxury">
          <div className="text-center mb-16">
             <span className="text-[#E86F16] mb-4 block" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
               Board of Directors
             </span>
             <h2 className="text-[#161616]" style={{ fontFamily: "var(--font-cinzel)", fontSize: "2.5rem", lineHeight: 1.1 }}>
               Our Leadership
             </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-12">
            {[
              "Shantilal Badala",
              "Jaipal Jain",
              "Surendra Jain",
              "Raj Jain",
              "Komal Jain",
              "Mannan Jain",
              "Ria Jain",
              "Neha Kachhara"
            ].map((name, i) => (
              <motion.div 
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_OUT_EXPO }}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-[180px] h-[220px] mb-6 overflow-hidden bg-[#D8D0C0] grayscale group-hover:grayscale-0 transition-all duration-500 relative">
                  {/* Luxury placeholder image pattern */}
                  <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                     <rect x="0" y="0" width="100" height="100" fill="#7A6B5B" />
                     <path d="M 0 100 Q 50 20 100 100" fill="#B89860" opacity="0.4" />
                     <circle cx="50" cy="40" r="15" fill="#E86F16" opacity="0.3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/40 to-transparent" />
                </div>
                <h4 className="text-[#161616] mb-1" style={{ fontFamily: "var(--font-cinzel)", fontSize: "1.25rem", fontWeight: 600 }}>
                  {name}
                </h4>
                <div className="w-8 h-px bg-[#E86F16] mt-2 mb-2" />
                <span className="text-[#3F3F46]/70" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Director
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-[120px] bg-[#161616] text-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl mb-6 text-[#E86F16]" style={{ fontFamily: "var(--font-cinzel)" }}>Our Mission</h3>
              <ul className="text-white/70 space-y-4 text-sm leading-relaxed" style={{ fontFamily: "var(--font-josefin)" }}>
                <li>&bull; Providing superior developments to our customers through leadership, experience and knowledge.</li>
                <li>&bull; Engaging in honest, loyal and ethical business practices.</li>
                <li>&bull; Committing to passionately exceed our customer&apos;s expectations.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl mb-6 text-[#E86F16]" style={{ fontFamily: "var(--font-cinzel)" }}>Our Vision</h3>
              <ul className="text-white/70 space-y-4 text-sm leading-relaxed" style={{ fontFamily: "var(--font-josefin)" }}>
                <li>&bull; To serve our customers&apos; needs and consistently produce developments of lasting value.</li>
                <li>&bull; To be flexible, entrepreneurial, and aggressive, both as individuals and as a company.</li>
                <li>&bull; To believe in teamwork, innovation, professionalism, and long-term decision-making.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl mb-6 text-[#E86F16]" style={{ fontFamily: "var(--font-cinzel)" }}>Core Values</h3>
              <ul className="text-white/70 space-y-4 text-sm leading-relaxed" style={{ fontFamily: "var(--font-josefin)" }}>
                <li>&bull; <strong>Honesty:</strong> We always do what is right, fair, and ethical.</li>
                <li>&bull; <strong>Integrity:</strong> Respect and value all individuals, maintaining client confidentiality.</li>
                <li>&bull; <strong>Teamwork:</strong> We encourage and reward teamwork to deliver the best.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
