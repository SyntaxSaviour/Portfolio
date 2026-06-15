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
            const isCurrent = item.current;
            const mutedTextClass = isCurrent
              ? "text-ink"
              : "text-zinc-700 dark:text-zinc-200";

            return (
              <motion.article
                key={`${item.title}-${item.date}`}
                initial={{ opacity: 0, x: 34 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ type: "spring", stiffness: 130, damping: 18, delay: index * 0.03 }}
                className={`grid gap-4 border-ink p-4 transition-all dark:border-paper md:grid-cols-[auto_1fr] ${
                  isCurrent
                    ? "border-[6px] bg-brutal-yellow text-ink shadow-brutal lg:p-5"
                    : "border-4 bg-paper shadow-brutal-sm dark:bg-ink"
                }`}
              >
                <div
                  className={`flex items-center justify-center border-4 border-ink shadow-brutal-sm dark:border-paper ${
                    isCurrent ? "h-14 w-14 -rotate-2 bg-paper" : `h-12 w-12 ${item.color}`
                  }`}
                >
                  <Icon className={`${isCurrent ? "h-7 w-7" : "h-6 w-6"} text-ink`} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`font-mono text-xs font-black uppercase ${mutedTextClass}`}>
                      {item.date}
                    </span>
                    {isCurrent ? (
                      <span className="border-2 border-ink bg-ink px-2 py-1 font-display text-[11px] font-black uppercase text-paper dark:border-paper dark:bg-paper dark:text-ink">
                        Current
                      </span>
                    ) : null}
                    <span
                      className={`border-2 border-ink px-2 py-1 font-display text-[11px] font-black uppercase text-ink dark:border-paper ${
                        isCurrent ? "bg-paper" : "bg-brutal-yellow"
                      }`}
                    >
                      Internship
                    </span>
                    {item.location ? (
                      <span className={`font-mono text-xs font-black uppercase ${mutedTextClass}`}>
                        {item.location}
                      </span>
                    ) : null}
                  </div>
                  <h3
                    className={`mt-2 font-display font-black uppercase leading-tight ${
                      isCurrent ? "text-3xl" : "text-2xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-1 font-black uppercase ${
                      isCurrent ? "text-base text-ink" : "text-sm text-zinc-700 dark:text-zinc-200"
                    }`}
                  >
                    {item.place}
                  </p>
                  <p
                    className={`mt-3 text-sm font-bold leading-relaxed ${
                      isCurrent ? "text-ink" : "text-zinc-800 dark:text-zinc-200"
                    }`}
                  >
                    {item.body}
                  </p>
                  {item.tech ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`border-2 border-ink px-2 py-1 font-display text-[11px] font-black uppercase shadow-brutal-sm dark:border-paper ${
                            isCurrent ? "bg-paper text-ink" : "bg-brutal-yellow text-ink"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
