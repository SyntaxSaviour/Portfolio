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
          const isFeatured = item.featured;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28, rotate: index % 2 ? 1 : -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 140, damping: 18, delay: index * 0.04 }}
              whileHover={{ y: isFeatured ? -9 : -7, rotate: isFeatured ? (index % 2 ? -1 : 1) : 0 }}
              className={`border-ink ${item.color} text-ink transition-all dark:border-paper ${
                isFeatured
                  ? "border-[6px] p-6 shadow-brutal md:min-h-[320px] xl:col-span-2"
                  : "border-4 p-5 shadow-brutal-sm"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`border-2 border-ink bg-paper font-display font-black uppercase shadow-brutal-sm ${
                    isFeatured ? "px-3 py-2 text-sm" : "px-2 py-1 text-[11px]"
                  }`}
                >
                  {item.group}
                </span>
                <div
                  className={`flex shrink-0 items-center justify-center border-4 border-ink shadow-brutal-sm ${
                    isFeatured
                      ? `h-16 w-16 -rotate-2 ${item.badgeColor}`
                      : "h-10 w-10 bg-paper"
                  }`}
                >
                  <Icon className={isFeatured ? "h-9 w-9" : "h-6 w-6"} />
                </div>
              </div>
              <h3
                className={`font-display font-black uppercase leading-tight ${
                  isFeatured ? "mt-6 text-3xl sm:text-4xl" : "mt-5 text-2xl"
                }`}
              >
                {item.title}
              </h3>
              {item.team || item.role ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.team ? (
                    <span className="border-2 border-ink bg-paper px-2 py-1 font-display text-[11px] font-black uppercase shadow-brutal-sm">
                      Team: {item.team}
                    </span>
                  ) : null}
                  {item.role ? (
                    <span className="border-2 border-ink bg-ink px-2 py-1 font-display text-[11px] font-black uppercase text-paper shadow-brutal-sm">
                      {item.role}
                    </span>
                  ) : null}
                </div>
              ) : null}
              <p className={`mt-3 font-bold leading-relaxed ${isFeatured ? "text-base" : "text-sm"}`}>
                {item.detail}
              </p>
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
