"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.18,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-[linear-gradient(90deg,rgba(14,116,144,0.85),rgba(21,151,165,1),rgba(125,211,252,0.9))] shadow-[0_8px_24px_rgba(21,151,165,0.3)]"
      style={{ scaleX }}
    />
  );
}
