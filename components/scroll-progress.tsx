"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-2 w-full origin-left border-b-2 border-ink bg-brutal-pink dark:border-paper"
      style={{ scaleX }}
    />
  );
}
