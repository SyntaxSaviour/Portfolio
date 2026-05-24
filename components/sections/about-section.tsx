"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Personal lab notes."
        kicker="AI/ML student, model tinkerer, systems thinker, and professional over-optimizer of ideas."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="brutal-card rotate-[-1deg] bg-brutal-yellow p-6 sm:p-8"
        >
          <p className="max-w-3xl text-2xl font-black leading-snug text-ink sm:text-3xl">
            {about.bio}
          </p>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {about.points.map((point) => (
              <div
                key={point}
                className="border-4 border-ink bg-paper p-3 text-sm font-black leading-snug text-ink shadow-brutal-sm"
              >
                {point}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="brutal-card bg-ink p-4 font-mono text-sm text-brutal-green dark:bg-paper dark:text-ink"
        >
          <div className="mb-4 flex gap-2">
            <span className="h-4 w-4 border-2 border-ink bg-brutal-red dark:border-paper" />
            <span className="h-4 w-4 border-2 border-ink bg-brutal-yellow dark:border-paper" />
            <span className="h-4 w-4 border-2 border-ink bg-brutal-green dark:border-paper" />
          </div>
          <div className="space-y-4">
            {about.terminal.map((line) => (
              <div key={line.command}>
                <p className="text-white dark:text-ink">$ {line.command}</p>
                <p className="pl-4 font-bold">{line.output}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {about.lore.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35, rotate: index % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 1 : -1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 150, damping: 17, delay: index * 0.04 }}
              whileHover={{ y: -8, rotate: 0 }}
              className={`brutal-card ${item.color} p-5 text-ink`}
            >
              <Icon className="mb-4 h-8 w-8" />
              <h3 className="font-display text-xl font-black uppercase">{item.title}</h3>
              <p className="mt-3 text-sm font-bold leading-relaxed">{item.text}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
