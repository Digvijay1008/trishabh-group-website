"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EASE_EXPO = [0.76, 0, 0.24, 1] as const;
const EASE_SMOOTH = [0.33, 1, 0.68, 1] as const;

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showPreloader, setShowPreloader] = useState(false);
  const [phase, setPhase] = useState<"loading" | "reveal" | "exit">("loading");

  const triggerExit = useCallback(() => {
    setPhase("reveal");
    setTimeout(() => {
      setPhase("exit");
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("trishabh_preloader_done", "true");
      }, 400);
    }, 1200);
  }, []);

  useEffect(() => {
    const hasRun = sessionStorage.getItem("trishabh_preloader_done");

    if (hasRun) {
      setIsLoading(false);
      return;
    }

    setShowPreloader(true);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 12) + 3;

      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(triggerExit, 500);
      } else {
        setProgress(currentProgress);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [triggerExit]);

  if (!showPreloader) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.0, ease: EASE_EXPO }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A]"
        >
          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
          />

          {/* Ambient glow */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(232,111,22,0.08) 0%, transparent 70%)",
            }}
            animate={{
              scale: phase === "reveal" ? [1, 1.8] : [1, 1.15, 1],
              opacity: phase === "reveal" ? [0.6, 0] : [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: phase === "reveal" ? 1.2 : 4,
              ease: "easeInOut",
              repeat: phase === "reveal" ? 0 : Infinity,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center px-6">

            {/* Horizontal lines flanking logo */}
            <div className="flex items-center gap-6 sm:gap-10 mb-8">
              <motion.div
                className="h-px bg-white/15"
                initial={{ width: 0 }}
                animate={{ width: phase === "reveal" ? 0 : 60 }}
                transition={{ duration: 1.2, delay: 0.3, ease: EASE_SMOOTH }}
              />

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: phase === "reveal" ? 0 : 1,
                  scale: phase === "reveal" ? 1.1 : 1,
                  y: phase === "reveal" ? -30 : 0,
                }}
                transition={{
                  opacity: { duration: 0.8, delay: phase === "reveal" ? 0 : 0.1, ease: EASE_SMOOTH },
                  scale: { duration: 1.0, delay: phase === "reveal" ? 0 : 0.1, ease: EASE_SMOOTH },
                  y: { duration: 0.8, ease: EASE_EXPO },
                }}
                className="flex justify-center"
              >
                <Image
                  src="/logo.png"
                  alt="Trishabh Group"
                  width={240}
                  height={72}
                  className="w-auto h-12 sm:h-14 md:h-16 object-contain brightness-0 invert"
                  priority
                />
              </motion.div>

              <motion.div
                className="h-px bg-white/15"
                initial={{ width: 0 }}
                animate={{ width: phase === "reveal" ? 0 : 60 }}
                transition={{ duration: 1.2, delay: 0.3, ease: EASE_SMOOTH }}
              />
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: phase === "reveal" ? 0 : 1,
                y: phase === "reveal" ? -20 : 0,
              }}
              transition={{ duration: 0.7, delay: phase === "reveal" ? 0 : 0.5, ease: EASE_SMOOTH }}
              className="text-white/40 mb-10 text-center"
              style={{
                fontFamily: "var(--font-josefin)",
                fontSize: "0.625rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
              }}
            >
              Building Legacy Since 1999
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 sm:w-56 flex flex-col items-center gap-4">
              <div className="w-full h-[1px] bg-white/10 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#E86F16] to-[#E86F16]/60 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                {/* Glow on the tip of the progress bar */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#E86F16]/60 blur-[6px]"
                  animate={{ left: `${Math.min(progress, 98)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              <motion.span
                className="text-white/30 tabular-nums"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === "reveal" ? 0 : 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                style={{
                  fontFamily: "var(--font-josefin)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.15em",
                }}
              >
                {progress.toString().padStart(3, "\u2007")}%
              </motion.span>
            </div>
          </div>

          {/* Bottom corner text */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-between px-8 sm:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "reveal" ? 0 : 0.25 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span style={{ fontFamily: "var(--font-josefin)", fontSize: "0.5625rem", letterSpacing: "0.2em", textTransform: "uppercase" }} className="text-white/40 hidden sm:block">
              Mumbai, India
            </span>
            <span style={{ fontFamily: "var(--font-josefin)", fontSize: "0.5625rem", letterSpacing: "0.2em", textTransform: "uppercase" }} className="text-white/40 hidden sm:block">
              Est. 1999
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
