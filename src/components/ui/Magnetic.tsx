"use client";

import { useRef, useState, ReactElement, cloneElement } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic({
  children,
  intensity = 0.5,
  springConfig = { stiffness: 150, damping: 15, mass: 0.1 },
}: {
  children: ReactElement;
  intensity?: number;
  springConfig?: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * intensity);
    y.set(middleY * intensity);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ x: springX, y: springY, display: "inline-block" }}
      className="magnetic-wrapper"
    >
      {children}
    </motion.div>
  );
}
