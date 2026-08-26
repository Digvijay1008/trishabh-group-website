"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Building2, MapPin, Calendar, Smartphone, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Message = {
  id: string;
  sender: "bot" | "user";
  text?: string;
  component?: React.ReactNode;
};

const BOT_AVATAR = "/logo.png"; // We'll just use a generic representation or the logo

export default function Concierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Welcome to Trishabh Group. I am your automated concierge. How may I assist you today?",
    },
  ]);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showOptions]);

  const handleOptionClick = (optionText: string, actionId: string) => {
    // Hide options immediately
    setShowOptions(false);
    
    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: "user", text: optionText },
    ]);

    // Bot response simulation
    setTimeout(() => {
      let botResponse: Message = { id: (Date.now() + 1).toString(), sender: "bot" };

      switch (actionId) {
        case "projects":
          botResponse.text = "Here are quick links to our latest developments:";
          botResponse.component = (
            <div className="flex flex-col gap-2 mt-2">
              <Link href="/projects/current" className="text-xs flex items-center justify-between p-2 rounded bg-white/5 border border-white/10 hover:bg-[#E86F16]/20 transition-colors">
                <span>Current Projects</span> <ExternalLink size={12} />
              </Link>
              <Link href="/projects/upcoming" className="text-xs flex items-center justify-between p-2 rounded bg-white/5 border border-white/10 hover:bg-[#E86F16]/20 transition-colors">
                <span>Upcoming Projects</span> <ExternalLink size={12} />
              </Link>
            </div>
          );
          break;
        case "visit":
          botResponse.text = "Excellent. You can schedule a private site visit using our online booking system.";
          botResponse.component = (
            <Link href="/contact" className="mt-2 inline-flex items-center gap-2 bg-[#E86F16] text-white text-[10px] uppercase tracking-wider px-4 py-2 rounded-full hover:bg-[#D4610F] transition-colors">
              <Calendar size={12} /> Book Now
            </Link>
          );
          break;
        case "whatsapp":
          botResponse.text = "Connecting you to our Sales Team on WhatsApp...";
          // Automatically trigger WhatsApp in a new tab after a brief delay
          setTimeout(() => {
            window.open("https://wa.me/919999999999?text=Hello,%20I%20am%20interested%20in%20Trishabh%20Group%20projects.", "_blank");
          }, 1000);
          break;
        case "redevelopment":
          botResponse.text = "We are pioneers in redevelopment. Please fill out our specialized inquiry form so we can evaluate your property.";
          botResponse.component = (
            <Link href="/redevelopment" className="mt-2 inline-flex items-center gap-2 bg-[#E86F16] text-white text-[10px] uppercase tracking-wider px-4 py-2 rounded-full hover:bg-[#D4610F] transition-colors">
              <Building2 size={12} /> Redevelopment Inquiry
            </Link>
          );
          break;
      }

      setMessages((prev) => [...prev, botResponse]);
      
      // Show options again after response
      setTimeout(() => setShowOptions(true), 1000);
    }, 600);
  };

  return (
    <>
      {/* Concierge Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#111111] text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 ${isOpen ? "pointer-events-none opacity-0 scale-75" : ""}`}
        aria-label="Open Concierge"
      >
        <MessageSquare size={24} className="text-[#E86F16]" />
        
        {/* Notification Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#E86F16] border-2 border-[#111111] rounded-full animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[380px] h-[500px] max-h-[calc(100vh-6rem)] bg-[#1A1A1A] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-white/10"
          >
            {/* Header */}
            <div className="bg-[#111111] p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center p-1.5">
                  <Image src="/logo.png" alt="Trishabh" width={24} height={24} className="w-full h-auto object-contain brightness-0 invert" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-medium tracking-wide" style={{ fontFamily: "var(--font-josefin)" }}>Trishabh Concierge</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white/50 text-[10px] uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col max-w-[85%] ${msg.sender === "user" ? "self-end items-end" : "self-start items-start"}`}>
                  <div 
                    className={`p-3.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user" 
                        ? "bg-[#E86F16] text-white rounded-tr-sm" 
                        : "bg-[#222222] text-white/90 rounded-tl-sm border border-white/5"
                    }`}
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    {msg.text}
                    {msg.component}
                  </div>
                  <span className="text-[9px] text-white/30 mt-1.5 uppercase tracking-wider px-1">
                    {msg.sender === "bot" ? "Concierge" : "You"}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Options Area */}
            <div className="p-4 bg-[#161616] border-t border-white/5">
              <AnimatePresence mode="wait">
                {showOptions ? (
                  <motion.div
                    key="options"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col gap-2"
                  >
                    <button onClick={() => handleOptionClick("View Current Projects", "projects")} className="text-left w-full p-3 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] border border-white/5 text-white/80 text-xs transition-colors flex items-center gap-3">
                      <Building2 size={14} className="text-[#E86F16]" /> View Current Projects
                    </button>
                    <button onClick={() => handleOptionClick("Schedule a Site Visit", "visit")} className="text-left w-full p-3 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] border border-white/5 text-white/80 text-xs transition-colors flex items-center gap-3">
                      <Calendar size={14} className="text-[#E86F16]" /> Schedule a Site Visit
                    </button>
                    <button onClick={() => handleOptionClick("Speak to Sales (WhatsApp)", "whatsapp")} className="text-left w-full p-3 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] border border-white/5 text-white/80 text-xs transition-colors flex items-center gap-3">
                      <Smartphone size={14} className="text-[#E86F16]" /> Speak to Sales (WhatsApp)
                    </button>
                    <button onClick={() => handleOptionClick("Redevelopment Inquiry", "redevelopment")} className="text-left w-full p-3 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] border border-white/5 text-white/80 text-xs transition-colors flex items-center gap-3">
                      <MapPin size={14} className="text-[#E86F16]" /> Redevelopment Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-[172px] flex items-center justify-center text-white/40 text-xs italic"
                  >
                    <span className="flex gap-1">
                      <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }}>.</motion.span>
                      <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>.</motion.span>
                      <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>.</motion.span>
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
