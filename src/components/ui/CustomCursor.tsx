"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on desktop devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Expand cursor on clickable elements or elements with data-cursor-hover
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.hasAttribute('data-cursor-hover') ||
        target.closest('[data-cursor-hover]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide on mobile or touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  const variants: Variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      height: 12,
      width: 12,
      backgroundColor: "rgba(232, 111, 22, 1)",
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 35
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(232, 111, 22, 0.2)",
      border: "1px solid rgba(232, 111, 22, 0.5)",
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 400,
        damping: 30
      }
    }
  };

  return (
    <>
      {/* The main trailing dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
      />
    </>
  );
}
