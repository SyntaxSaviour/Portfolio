"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail, Terminal } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroNotes, profile } from "@/lib/portfolio";
import { BrutalLink } from "@/components/ui/brutal-link";

function AnimatedSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % profile.subtitles.length);
    }, 1900);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex min-h-16 items-center overflow-visible border-4 border-ink bg-brutal-green px-4 py-3 text-2xl leading-none shadow-brutal-sm dark:border-paper sm:text-3xl">
      <motion.span
        key={profile.subtitles[index]}
        initial={{ y: 10, opacity: 0, rotate: -2 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
      >
        {profile.subtitles[index]}
      </motion.span>
      <span className="ml-2 animate-blink">_</span>
    </span>
  );
}

function FloatingNote({
  note,
  className,
  delay = 0,
}: {
  note: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute hidden border-4 border-ink px-3 py-2 font-display text-xs font-black uppercase shadow-brutal-sm dark:border-paper md:block ${className}`}
      animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ rotate: 5, scale: 1.05 }}
    >
      {note}
    </motion.div>
  );
}

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  const handleMove = (event: React.PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center px-4 pb-16 pt-36 sm:px-6 lg:px-8"
      onPointerMove={handleMove}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="relative"
        >
          <div className="mb-5 inline-flex rotate-[-2deg] items-center gap-2 border-4 border-ink bg-brutal-pink px-4 py-2 font-display text-sm font-black uppercase text-white shadow-brutal-sm dark:border-paper">
            <Terminal className="h-4 w-4" />
            AI lab online
          </div>

          <h1 className="font-display text-7xl font-black uppercase leading-none text-ink sm:text-8xl lg:text-9xl dark:text-paper">
            {profile.name}
          </h1>
          <div className="mt-5 font-display font-black uppercase text-ink dark:text-paper">
            <AnimatedSubtitle />
          </div>
          <p className="mt-6 max-w-2xl border-l-8 border-ink bg-paper p-4 text-lg font-bold leading-relaxed shadow-brutal-sm dark:border-paper dark:bg-ink sm:text-xl">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <BrutalLink href="#projects" variant="yellow" size="lg" icon={ArrowDown}>
              View Projects
            </BrutalLink>
            <BrutalLink href={profile.resume} variant="blue" size="lg" icon={Download} download>
              Resume Download
            </BrutalLink>
            <BrutalLink href="#contact" variant="pink" size="lg" icon={Mail}>
              Contact Me
            </BrutalLink>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 110, damping: 16, delay: 0.15 }}
        >
          <div className="absolute -inset-4 rotate-3 border-4 border-ink bg-brutal-yellow shadow-brutal dark:border-paper" />
          <div className="relative rotate-[-1.5deg] overflow-hidden border-[6px] border-ink bg-white p-3 shadow-brutal-lg dark:border-paper">
            <Image
              src={profile.image}
              alt="Portrait of Farzan"
              width={700}
              height={700}
              priority
              className="aspect-square w-full border-4 border-ink object-cover dark:border-paper"
            />
            <div className="absolute bottom-6 left-6 border-4 border-ink bg-brutal-green px-3 py-2 font-display text-sm font-black uppercase text-ink shadow-brutal-sm">
              CGPA 9.35
            </div>
          </div>

          <div className="absolute -right-5 top-5 rotate-6 border-4 border-ink bg-ink px-4 py-3 font-mono text-xs font-bold text-brutal-green shadow-brutal-sm dark:border-paper dark:bg-paper dark:text-ink">
            <p>$ npm run future</p>
            <p>compiling ideas...</p>
          </div>

          <FloatingNote note={heroNotes[0]} className="-left-24 top-12 bg-brutal-blue text-white" />
          <FloatingNote note={heroNotes[1]} className="-bottom-10 left-0 bg-brutal-red text-ink" delay={1} />
          <FloatingNote note={heroNotes[2]} className="right-0 bottom-24 bg-brutal-yellow text-ink" delay={2} />
          <FloatingNote note={heroNotes[3]} className="left-12 top-[-56px] bg-brutal-green text-ink" delay={3} />
          <FloatingNote note={heroNotes[4]} className="right-8 top-[-22px] bg-brutal-pink text-white" delay={4} />
        </motion.div>
      </div>
    </section>
  );
}
