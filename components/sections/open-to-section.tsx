"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { openTo } from "@/lib/portfolio";

export function OpenToSection() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ type: "spring", stiffness: 130, damping: 18 }}
        className="border-[6px] border-ink bg-paper p-5 shadow-brutal-lg dark:border-paper dark:bg-ink"
      >
        <div className="grid gap-5 lg:grid-cols-[0.35fr_1fr_auto] lg:items-center">
          <div>
            <p className="doodle-label bg-brutal-green">Open to</p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none">
              Useful AI work.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {openTo.map((item) => (
              <div key={item.title} className="border-4 border-ink bg-white p-3 shadow-brutal-sm dark:border-paper">
                <h3 className="font-display text-base font-black uppercase text-ink">{item.title}</h3>
                <p className="mt-1 text-sm font-bold leading-snug text-zinc-800">{item.text}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex min-h-14 items-center justify-center gap-2 border-4 border-ink bg-brutal-pink px-6 py-4 font-display text-base font-black uppercase text-white shadow-brutal-sm transition-all hover:-translate-y-1 hover:shadow-brutal dark:border-paper"
          >
            <Send className="h-5 w-5" />
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
