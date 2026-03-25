"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type ParallaxAccentProps = {
  className: string;
  offset?: number;
  children?: ReactNode;
};

export function ParallaxAccent({
  className,
  offset = 48,
  children,
}: ParallaxAccentProps) {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const y = useTransform(scrollY, [0, 1200], [0, reduceMotion ? 0 : offset]);

  return (
    <motion.div aria-hidden="true" className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
