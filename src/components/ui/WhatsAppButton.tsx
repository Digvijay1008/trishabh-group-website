"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919999999999?text=Hello,%20I%20am%20interested%20in%20Trishabh%20Group%20projects."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.3)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      
      {/* Pulse Effect */}
      <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] opacity-0 animate-ping" style={{ animationDuration: '3s' }} />
    </motion.a>
  );
}
