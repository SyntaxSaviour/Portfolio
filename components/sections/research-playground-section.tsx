"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { profile, researchPlayground } from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function ResearchPlaygroundSection() {
  return (
    <section id="lab" className="section-shell">
      <SectionHeading
        eyebrow="Research playground"
        title="Experimental systems lab."
        kicker="Loose, technical, and exploratory work that shapes the bigger builds."
      />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -34, rotate: -1 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="border-[6px] border-ink bg-ink p-6 text-paper shadow-brutal-lg dark:border-paper dark:bg-paper dark:text-ink"
        >
          <p className="font-mono text-sm font-black uppercase text-brutal-green dark:text-ink">
            lab/status
          </p>
          <h3 className="mt-4 font-display text-5xl font-black uppercase leading-none">
            Research before polish.
          </h3>
          <p className="mt-5 max-w-md text-lg font-bold leading-relaxed">
            This is where ideas are allowed to be rough: sensing networks, model probes,
            technical explanations, and Kaggle experiments that sharpen the real builds.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {researchPlayground.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 36, rotate: index % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 0.6 : -0.6 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 140, damping: 17, delay: index * 0.04 }}
              whileHover={{ y: -8, rotate: 0 }}
              className={`border-[5px] border-ink ${item.color} p-5 text-ink shadow-brutal dark:border-paper ${item.rotate}`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="border-4 border-ink bg-paper px-3 py-1 font-display text-xs font-black uppercase shadow-brutal-sm">
                  {item.kicker}
                </span>
                <span className="font-mono text-xs font-black uppercase">{item.year}</span>
              </div>
              <h3 className="mt-5 font-display text-3xl font-black uppercase leading-none">
                {item.title}
              </h3>
              <p className="mt-4 text-base font-black leading-snug">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className="border-2 border-ink bg-paper px-2 py-1 font-mono text-xs font-bold">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.actions.map((action) => (
                  <a
                    key={action}
                    href={action === "Discuss" ? "#contact" : profile.links[0].href}
                    target={action === "Discuss" ? undefined : "_blank"}
                    rel={action === "Discuss" ? undefined : "noreferrer"}
                    className="inline-flex items-center gap-2 border-4 border-ink bg-ink px-3 py-2 font-display text-xs font-black uppercase text-paper shadow-brutal-sm transition-all hover:-translate-y-1 hover:shadow-brutal"
                  >
                    {action === "Discuss" ? <ExternalLink className="h-4 w-4" /> : <Code2 className="h-4 w-4" />}
                    {action}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
