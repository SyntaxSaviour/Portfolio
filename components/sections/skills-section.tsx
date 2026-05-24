"use client";

import { motion } from "framer-motion";
import { marqueeSkills, skillGroups } from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I actually reach for."
        kicker="A practical stack for ML experiments, model building, data work, and deployment."
      />

      <div className="relative mb-10 overflow-hidden border-y-4 border-ink bg-brutal-yellow py-4 shadow-brutal-sm dark:border-paper">
        <div className="flex w-max animate-marquee gap-4">
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="border-4 border-ink bg-paper px-4 py-2 font-display text-sm font-black uppercase text-ink shadow-brutal-sm dark:border-paper"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, groupIndex) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 35, rotate: groupIndex % 2 ? 1.5 : -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 130, damping: 16 }}
              className={`brutal-card ${group.color} p-5 text-ink`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center border-4 border-ink bg-paper shadow-brutal-sm">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-3xl font-black uppercase">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -5, rotate: index % 2 ? 2 : -2, scale: 1.04 }}
                    className="cursor-default border-4 border-ink bg-paper px-3 py-2 font-display text-sm font-black uppercase text-ink shadow-brutal-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
