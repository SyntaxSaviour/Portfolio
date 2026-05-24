"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, experience } from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Professional signal."
        kicker="A cleaner pass through education, internships, and applied ML practice."
      />

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.aside
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="border-[6px] border-ink bg-paper p-5 shadow-brutal-lg dark:border-paper dark:bg-ink"
        >
          <div className="flex h-12 w-12 items-center justify-center border-4 border-ink bg-brutal-yellow shadow-brutal-sm dark:border-paper">
            <GraduationCap className="h-7 w-7 text-ink" />
          </div>
          <p className="mt-5 font-mono text-sm font-black uppercase text-zinc-700 dark:text-zinc-200">
            {education.date}
          </p>
          <h3 className="mt-3 font-display text-3xl font-black uppercase leading-tight">
            {education.title}
          </h3>
          <p className="mt-3 text-base font-black">{education.place}</p>
          <p className="mt-4 text-base font-bold leading-relaxed text-zinc-800 dark:text-zinc-200">
            {education.detail}
          </p>
        </motion.aside>

        <div className="space-y-4">
          {experience.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={`${item.title}-${item.date}`}
                initial={{ opacity: 0, x: 34 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ type: "spring", stiffness: 130, damping: 18, delay: index * 0.03 }}
                className="grid gap-4 border-4 border-ink bg-paper p-4 shadow-brutal-sm dark:border-paper dark:bg-ink md:grid-cols-[auto_1fr]"
              >
                <div className={`flex h-12 w-12 items-center justify-center border-4 border-ink ${item.color} shadow-brutal-sm dark:border-paper`}>
                  <Icon className="h-6 w-6 text-ink" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-black uppercase text-zinc-700 dark:text-zinc-200">
                      {item.date}
                    </span>
                    <span className="border-2 border-ink bg-brutal-yellow px-2 py-1 font-display text-[11px] font-black uppercase text-ink dark:border-paper">
                      Internship
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-black uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-black uppercase text-zinc-700 dark:text-zinc-200">
                    {item.place}
                  </p>
                  <p className="mt-3 text-sm font-bold leading-relaxed text-zinc-800 dark:text-zinc-200">
                    {item.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
