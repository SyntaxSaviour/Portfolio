"use client";

import { motion } from "framer-motion";
import { achievements, certifications } from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell py-14 lg:py-20">
      <SectionHeading
        eyebrow="Achievements"
        title="Proof points."
        kicker="Awards, hackathon energy, certifications, and recognitions without turning the page into a trophy wall."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28, rotate: index % 2 ? 1 : -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 140, damping: 18, delay: index * 0.04 }}
              whileHover={{ y: -7 }}
              className={`border-4 border-ink ${item.color} p-5 text-ink shadow-brutal-sm dark:border-paper`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="border-2 border-ink bg-paper px-2 py-1 font-display text-[11px] font-black uppercase">
                  {item.group}
                </span>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-black uppercase leading-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-bold leading-relaxed">{item.detail}</p>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="mt-8 overflow-hidden border-y-4 border-ink bg-ink py-4 text-paper shadow-brutal-sm dark:border-paper dark:bg-paper dark:text-ink"
      >
        <div className="flex w-max animate-marquee gap-3 px-4">
          {[...certifications, ...certifications].map((certificate, index) => (
            <span
              key={`${certificate}-${index}`}
              className="border-4 border-paper bg-brutal-yellow px-4 py-2 font-display text-xs font-black uppercase text-ink shadow-brutal-sm dark:border-ink"
            >
              {certificate}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
