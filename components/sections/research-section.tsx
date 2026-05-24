"use client";

import { motion } from "framer-motion";
import { currentlyExploring } from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function ResearchSection() {
  return (
    <section id="exploring" className="section-shell py-14 lg:py-20">
      <SectionHeading
        eyebrow="Currently exploring"
        title="Ideas in active rotation."
        kicker="Compact focus areas I keep returning to while building."
      />

      <div className="grid gap-4 lg:grid-cols-4">
        {currentlyExploring.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <motion.article
              key={interest.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 150, damping: 18, delay: index * 0.04 }}
              whileHover={{ y: -6 }}
              className={`border-4 border-ink ${interest.color} p-5 text-ink shadow-brutal-sm dark:border-paper`}
            >
              <Icon className="mb-4 h-8 w-8" />
              <h3 className="font-display text-2xl font-black uppercase">{interest.title}</h3>
              <p className="mt-3 text-sm font-bold leading-relaxed">{interest.text}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
