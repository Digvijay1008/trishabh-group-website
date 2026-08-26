"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

// Custom SVG social icons (brand icons not in lucide)
const SocialIcons = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
};

const social = [
  { Icon: SocialIcons.Instagram, href: "https://www.instagram.com/trishabhgroup/", label: "Instagram" },
  { Icon: SocialIcons.LinkedIn, href: "https://www.linkedin.com/company/trishabhgroup", label: "LinkedIn" },
  { Icon: SocialIcons.YouTube, href: "https://www.youtube.com/@trishabhgroup3291", label: "YouTube" },
  { Icon: SocialIcons.Facebook, href: "https://www.facebook.com/trishabhgroup/", label: "Facebook" },
];

const navLinks = [
  { label: "The Legacy", href: "/about" },
  { label: "Current Projects", href: "/projects/current" },
  { label: "Upcoming Projects", href: "/projects/upcoming" },
  { label: "Completed Projects", href: "/projects/completed" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111111] text-white overflow-hidden">
      {/* Noise overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />

      {/* ── Top CTA Strip ── */}
      <div className="relative border-b border-white/8">
        <div className="container-luxury py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p
              className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Ready to Begin?
            </p>
            <p
              className="text-white"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Schedule a <em style={{ color: "#E86F16", fontStyle: "italic" }}>Private Site Visit</em>
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#E86F16] text-white rounded-full hover:bg-[#D4610F] transition-all duration-300 group flex-shrink-0"
            style={{
              fontFamily: "var(--font-josefin)",
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
              padding: "14px 28px",
              boxShadow: "0 4px 24px -4px rgba(232,111,22,0.4)",
            }}
          >
            Book Now
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="relative container-luxury pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.png"
                alt="Trishabh Group"
                width={150}
                height={50}
                className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
            <p
              className="text-white/50 leading-relaxed text-sm"
              style={{ fontFamily: "var(--font-josefin)", maxWidth: "280px" }}
            >
              Since 1999, Trishabh Group has been crafting Mumbai&apos;s most prestigious addresses with unmatched trust, 100% OC delivery, and precision engineering.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {social.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/12 flex items-center justify-center text-white/45 hover:border-[#E86F16] hover:text-[#E86F16] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4
              className="text-white/35 text-[10px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="relative text-white/60 hover:text-white text-sm transition-colors duration-300 inline-flex items-center group w-fit"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {link.label}
                    {/* Animated Underline */}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E86F16] transition-all duration-500 ease-out group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <h4
              className="text-white/35 text-[10px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_15px_rgba(232,111,22,0.15)] group-hover:bg-[#E86F16]/10 transition-colors">
                  <MapPin size={13} className="text-[#E86F16]" />
                </div>
                <span
                  className="text-white/55 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  Trishabh Group,<br />
                  Mumbai, Maharashtra<br />
                  <span className="text-white/30 text-xs">(Full address to be updated)</span>
                </span>
              </li>
              <li>
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-3.5 text-white/55 hover:text-white text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  <Phone size={14} className="text-[#E86F16] flex-shrink-0" />
                  +91 XXXXX XXXXX
                  <span className="text-white/25 text-xs">(Update with real number)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@trishabhgroup.com"
                  className="flex items-center gap-3.5 text-white/55 hover:text-white text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  <Mail size={14} className="text-[#E86F16] flex-shrink-0" />
                  info@trishabhgroup.com
                  <span className="text-white/25 text-xs">(Update)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <p
              className="text-white/30 text-xs"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              © {year} Trishabh Group. All Rights Reserved.
            </p>
            <p
              className="text-white/20 text-[10px] leading-relaxed"
              style={{ fontFamily: "var(--font-josefin)", maxWidth: "520px" }}
            >
              This project is registered under MahaRERA. Registration details are available on the website maharera.mahaonline.gov.in. The images shown are for representational purposes only.
            </p>
          </div>
          <div className="flex items-center gap-5 flex-shrink-0">
            {["Privacy Policy", "Terms of Use", "Disclaimer"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/25 hover:text-white/55 text-[10px] transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
