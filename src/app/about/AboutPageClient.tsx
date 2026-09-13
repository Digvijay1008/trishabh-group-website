"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/easing";
import MetricsSection from "@/components/sections/MetricsSection";
import Image from "next/image";

export default function AboutPageClient() {
  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-32">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
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
                  Our Legacy
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease: EASE_OUT_EXPO }}
                className="text-[#161616] mb-8"
                style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 400, lineHeight: 1.1 }}
              >
                A Legacy That Defines Sign of Experience & <em style={{ fontStyle: "italic", color: "#E86F16" }}>Tradition of Trust.</em>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.16, ease: EASE_OUT_EXPO }}
                className="border-l-2 border-[#E86F16]/30 pl-6 mb-8"
              >
                <p
                  className="text-[#3F3F46] leading-relaxed max-w-lg italic"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem" }}
                >
                  "When a family runs a business, it becomes a legacy, and that legacy lives on in every home we create"
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22, ease: EASE_OUT_EXPO }}
                className="text-[#3F3F46]/80 leading-relaxed max-w-xl"
                style={{ fontFamily: "var(--font-josefin)", fontSize: "1.0625rem" }}
              >
                Trishabh Group, established in 1999 by the visionary Jain family, is a premier real estate developer rooted in Mumbai and Navi Mumbai. For over two decades, we have been shaping skylines and lifestyles through architectural excellence, ethical practices, and unwavering commitment to quality.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE_OUT_EXPO }}
              className="lg:col-span-5 relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/elevations/trishabh-miraya.jpg" 
                alt="Trishabh Group Legacy" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(22,22,22,0.3)] pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Metrics Section from homepage perfectly fits the About page as trust markers */}
      <MetricsSection />

      {/* Trishabh Principles Section */}
      <section className="py-[120px] bg-white border-y border-[#E7E2D9]">
        <div className="container-luxury max-w-6xl">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-px bg-[#E86F16]" />
            <span 
              className="text-[#E86F16]" 
              style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              Trishabh Principles
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-[#161616]" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}>Dedication & Discipline</h3>
              <p className="text-[#3F3F46]/70 leading-relaxed text-sm" style={{ fontFamily: "var(--font-josefin)" }}>
                Our journey is defined by dedication, discipline, & innovation—pillars that have helped us deliver landmark projects across the residential, commercial, and hospitality sectors. Every development is a reflection of our belief in harmonizing luxury with functionality, and aesthetics with sustainability.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-[#161616]" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}>100% Track Record</h3>
              <p className="text-[#3F3F46]/70 leading-relaxed text-sm" style={{ fontFamily: "var(--font-josefin)" }}>
                We take pride in our 100% track record of Occupation Certificates (OC), a testament to our timely delivery and regulatory compliance. Each project is personally overseen by our leadership and executed by a team of seasoned professionals, ensuring meticulous attention to detail and superior construction standards.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-[#161616]" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}>Building Trust</h3>
              <p className="text-[#3F3F46]/70 leading-relaxed text-sm" style={{ fontFamily: "var(--font-josefin)" }}>
                At Trishabh Group, we don’t just build structures—we build trust. Our clients, partners, and communities know us for our transparency, reliability, and ability to turn dreams into enduring realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Editorial Split & Staggered Cards */}
      <section className="py-[120px] bg-[#FAF9F7] relative">
        <div className="container-luxury max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative items-start">
            
            {/* Left Side: Sticky Title */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-px bg-[#E86F16]" />
                    <span className="text-[#3F3F46]/50" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.6875rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                      Our Team
                    </span>
                 </div>
                 <h2 className="text-[#161616] mb-6 pr-8" style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(2rem, 3vw, 2.75rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                   Led by a legacy of entrepreneurial vision and <em style={{ fontStyle: "italic", color: "#E86F16" }}>strategic growth</em>
                 </h2>
                 <p className="text-[#3F3F46]/60 max-w-sm" style={{ fontFamily: "var(--font-josefin)", fontSize: "1rem", lineHeight: 1.6 }}>
                   Anchored by its founding and next-generation leaders.
                 </p>
              </div>
            </div>
            
            {/* Right Side: Staggered Double-Bezel Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                {[
                  {
                    name: "Mr. Shantilal Haraklal Badala (Jain)",
                    desc: "A science graduate from Guru Nanak Khalsa College, Mr. Shantilal began his career in jewellery retail in 1986, managing the renowned Bhawani Jewellers in Chembur along with his brothers until 2009. He entered the real estate industry in 1999, and for over 26 years has been a driving force behind the Group’s development initiatives."
                  },
                  {
                    name: "Mr. Jaipal Haraklal Jain",
                    desc: "With a background in commerce, Mr. Jaipal started in jewellery retail in 1990 and transitioned into real estate development in 1999. His leadership and deep industry experience have been instrumental in expanding the Group’s footprint."
                  },
                  {
                    name: "Mr. Surendra Haraklal Jain",
                    desc: "An alumnus of R. A. Podar College, Mr. Surendra joined the family’s jewellery business in 1994 and ventured into real estate in 1999. With over two decades of hands-on involvement, he remains a key contributor to the Group’s success."
                  },
                  {
                    name: "Raj Shantilal Jain",
                    desc: "A graduate of R. A. Podar College and MBA from Narsee Monjee, Mr. Raj Jain joined the Group in 2009 and has since contributed extensively to the strategic growth and operations of all group real estate companies over the last 15 years."
                  },
                  {
                    name: "Mrs. Neha Kachara",
                    desc: "An accomplished Interior Designer, joined Trishabh Group in 2012. Her 14 years of expertise in interior design has helped transform the group's real estate ventures into thoughtfully curated living and working spaces that blend aesthetics with functionality."
                  },
                  {
                    name: "CA Mrs. Komal Raj Jain",
                    desc: "A qualified Chartered Accountant, Mrs. Komal Jain entered the Group in 2014 and continues to play a pivotal role in financial strategy, compliance, and operational excellence."
                  },
                  {
                    name: "Mr. Mannan Jaipal Jain",
                    desc: "A commerce graduate from Lala Lajpatrai College, Mr. Mannan Jain joined the business in 2022. His forward-looking approach and enthusiasm mark the promising next chapter of leadership."
                  },
                  {
                    name: "Mrs. Ria Jain",
                    desc: "An LLB graduate, has been serving as our trusted legal advisor since 2016. As a valued member of the Trishabh family, her legal expertise and unwavering dedication have played a pivotal role in successfully executing several of our most ambitious projects."
                  }
                ].map((leader, i) => (
                  <motion.div 
                    key={leader.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: EASE_OUT_EXPO }}
                    className={`group w-full ${i % 2 === 1 ? 'sm:mt-24' : ''}`}
                  >
                    {/* Outer Shell */}
                    <div className="bg-white/40 rounded-[2rem] p-2 border border-[#E7E2D9] shadow-sm hover:shadow-[0_20px_60px_-15px_rgba(232,111,22,0.15)] transition-all duration-700 bg-clip-padding backdrop-blur-sm hover:-translate-y-2 h-full">
                      {/* Inner Core */}
                      <div className="bg-white rounded-[calc(2rem-0.5rem)] p-8 sm:p-10 border border-black/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] h-full flex flex-col">
                        <h4 className="text-[#161616] text-xl mb-4 group-hover:text-[#E86F16] transition-colors duration-500" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 500 }}>
                          {leader.name}
                        </h4>
                        <div className="w-8 h-px bg-[#E7E2D9] group-hover:bg-[#E86F16] group-hover:w-16 mb-6 transition-all duration-500" />
                        <p className="text-[#3F3F46]/70 leading-relaxed text-[0.875rem]" style={{ fontFamily: "var(--font-josefin)" }}>
                          {leader.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
