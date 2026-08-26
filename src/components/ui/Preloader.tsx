"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Only run on client and only run once per session
    const hasRun = sessionStorage.getItem("trishabh_preloader_done");
    
    if (hasRun) {
      setIsLoading(false);
      return;
    }

    setShowPreloader(true);

    // Simulate loading progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        
        // Wait a tiny bit at 100% before triggering exit
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("trishabh_preloader_done", "true");
        }, 600);
      } else {
        setProgress(currentProgress);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  if (!showPreloader) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111111]"
        >
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
          />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#E86F16] mb-4"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "0.15em",
              }}
            >
              TRISHABH
            </motion.div>
            
            <div className="flex items-center gap-4 w-64">
              <div className="flex-1 h-px bg-white/20 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#E86F16]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <span 
                className="text-white/60 w-10 text-right"
                style={{ fontFamily: "var(--font-josefin)", fontSize: "0.75rem", letterSpacing: "0.1em" }}
              >
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
