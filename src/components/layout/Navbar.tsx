"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Portfolio",
    href: "/projects",
    dropdown: [
      { label: "Current Projects", href: "/projects/current" },
      { label: "Upcoming Projects", href: "/projects/upcoming" },
      { label: "Completed Projects", href: "/projects/completed" }
    ],
  },
  { label: "The Legacy", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Redevelopment", href: "/redevelopment" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };
  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-6 left-1/2 z-50 transition-all duration-500 w-full max-w-5xl px-4 lg:px-0`}
      >
        <div className={`rounded-full p-2 pl-6 pr-2.5 flex items-center justify-between border transition-all duration-500 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-white" 
            : "bg-white/80 backdrop-blur-md shadow-lg border-white/60"
        }`}>
          {/* Logo */}
          <Link href="/" className="inline-flex items-center group flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Trishabh Group"
              width={160}
              height={48}
              className="w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              style={{ height: "clamp(36px, 4.5vh, 52px)" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center" style={{ gap: "clamp(1rem, 1.5vw, 2rem)" }}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && openDropdown(item.label)}
                onMouseLeave={closeDropdown}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 transition-colors duration-200 text-[#3F3F46] hover:text-[#161616]"
                  style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={10}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => openDropdown(item.label)}
                      onMouseLeave={closeDropdown}
                      className="absolute top-full left-0 mt-4 w-52 bg-white border border-[#E7E2D9] rounded-sm shadow-[0_16px_48px_-8px_rgba(22,22,22,0.12)] py-2"
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-5 py-2.5 text-[11px] tracking-[0.1em] uppercase text-[#3F3F46] hover:text-[#161616] hover:bg-[#FAF9F7] transition-colors duration-150"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="group flex items-center gap-4 bg-[#E86F16] text-white rounded-full hover:bg-[#D4610F] transition-all duration-300 active:scale-[0.98]"
              style={{ padding: "6px 6px 6px 20px" }}
            >
              <span 
                className="mt-0.5"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Schedule Site Visit
              </span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                <ArrowRight size={14} className="text-white" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#161616]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-[90px]"
          >
            <nav className="flex flex-col divide-y divide-[#E7E2D9] px-6 overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label} className="py-4">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm tracking-[0.15em] uppercase text-[#161616] block mb-3 font-medium"
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="flex flex-col gap-3 pl-4 border-l border-[#E7E2D9] my-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-[11px] tracking-[0.1em] uppercase text-[#3F3F46]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-auto p-6">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full gap-2 bg-[#E86F16] text-white text-[11px] tracking-[0.15em] uppercase font-medium px-6 py-3.5 rounded-full shadow-md"
              >
                Schedule Site Visit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
