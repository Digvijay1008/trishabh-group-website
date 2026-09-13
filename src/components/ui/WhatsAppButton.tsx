"use client";

import { motion } from "framer-motion";

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175.216 175.552"
      width={size}
      height={size}
      fill="white"
    >
      <path d="M87.882 14.14c-40.598 0-73.604 33.006-73.604 73.604 0 12.968 3.372 25.602 9.783 36.76l-10.396 37.953 38.874-10.196c10.76 5.858 22.898 8.944 35.343 8.944 40.598 0 73.604-33.006 73.604-73.604 0-19.662-7.654-38.148-21.56-52.054-13.906-13.906-32.392-21.407-52.044-21.407zm0 134.76c-11.294 0-22.36-3.036-31.998-8.774l-2.296-1.362-23.806 6.244 6.352-23.21-1.496-2.38c-6.312-10.034-9.646-21.626-9.646-33.564 0-33.71 27.432-61.142 61.142-61.142 16.336 0 31.688 6.362 43.232 17.906 11.544 11.544 17.898 26.896 17.898 43.236-.052 33.762-27.484 61.046-61.382 61.046zm33.52-45.756c-1.84-.92-10.876-5.366-12.564-5.978-1.688-.612-2.916-.92-4.144.92-1.228 1.84-4.756 5.978-5.832 7.206-1.076 1.228-2.152 1.38-3.992.46-1.84-.92-7.768-2.862-14.79-9.128-5.468-4.876-9.156-10.902-10.232-12.742-1.076-1.84-.114-2.836.808-3.752.828-.828 1.84-2.152 2.76-3.228.92-1.076 1.228-1.84 1.84-3.068.612-1.228.306-2.304-.154-3.228-.46-.92-4.144-9.986-5.68-13.678-1.496-3.588-3.016-3.1-4.144-3.16-1.076-.052-2.304-.064-3.532-.064-1.228 0-3.228.46-4.916 2.304-1.688 1.84-6.444 6.3-6.444 15.364 0 9.064 6.6 17.82 7.52 19.048.92 1.228 12.98 19.816 31.456 27.8 4.394 1.898 7.824 3.032 10.498 3.88 4.412 1.404 8.428 1.206 11.604.732 3.54-.528 10.876-4.448 12.412-8.744 1.536-4.296 1.536-7.98 1.076-8.744-.46-.768-1.688-1.228-3.528-2.148z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919920387722?text=Hello,%20I%20am%20interested%20in%20Trishabh%20Group%20projects."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.35)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={28} />

      {/* Pulse ring */}
      <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] opacity-0 animate-ping" style={{ animationDuration: '3s' }} />

      {/* Tooltip */}
      <span className="absolute left-[calc(100%+12px)] whitespace-nowrap bg-[#161616] text-white px-4 py-2 rounded-lg text-xs font-medium opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-lg" style={{ fontFamily: "var(--font-josefin)" }}>
        Chat with us
        <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#161616]" />
      </span>
    </motion.a>
  );
}
