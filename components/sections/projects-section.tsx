"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { featuredBuilds } from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Featured builds"
        title="Flagship work, sharper signal."
        kicker="Applied AI systems with enough detail to inspect, discuss, and improve."
      />

      <div className="grid gap-7 lg:grid-cols-2">
        {featuredBuilds.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: project.hero ? 70 : 44, rotate: index % 2 ? 2 : -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: project.hero ? -0.5 : 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: project.hero ? 95 : 125, damping: 16 }}
            whileHover={{ y: project.hero ? -14 : -8, rotate: index % 2 ? -1 : 1 }}
            className={`relative border-[6px] border-ink ${project.color} text-ink shadow-brutal-lg dark:border-paper ${
              project.hero ? "lg:col-span-2 p-6 sm:p-8 lg:p-10" : "p-5"
            } ${project.rotate}`}
          >
            <div className="absolute right-3 top-3 rotate-6 border-4 border-ink bg-paper px-3 py-2 font-display text-xs font-black uppercase shadow-brutal-sm dark:border-paper sm:-right-4 sm:-top-4">
              {project.kicker}
            </div>
            <div className="flex flex-wrap items-start justify-between gap-4 pt-4">
              <div>
                <p className="font-mono text-sm font-black uppercase">{project.year}</p>
                <h3
                  className={`mt-2 font-display font-black uppercase leading-none ${
                    project.hero ? "text-6xl sm:text-7xl lg:text-8xl" : "text-4xl sm:text-5xl"
                  }`}
                >
                  {project.title}
                </h3>
              </div>
            </div>

            <p
              className={`mt-5 border-4 border-ink bg-paper p-4 font-black leading-relaxed shadow-brutal-sm ${
                project.hero ? "max-w-4xl text-xl sm:text-2xl" : "text-lg"
              }`}
            >
              {project.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="border-2 border-ink bg-ink px-2 py-1 font-mono text-xs font-bold text-paper">
                  {tech}
                </span>
              ))}
            </div>

            <div className={`mt-6 flex flex-wrap gap-3 ${project.hero ? "gap-4" : ""}`}>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 border-4 border-ink bg-paper font-display font-black uppercase text-ink shadow-brutal-sm transition-all hover:-translate-y-1 hover:shadow-brutal ${
                    project.hero ? "px-6 py-4 text-base" : "px-4 py-3 text-sm"
                  }`}
                >
                  <Code2 className="h-5 w-5" />
                  GitHub
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 border-4 border-ink bg-ink font-display font-black uppercase text-paper shadow-brutal-sm transition-all hover:-translate-y-1 hover:shadow-brutal ${
                    project.hero ? "px-6 py-4 text-base" : "px-4 py-3 text-sm"
                  }`}
                >
                  <ExternalLink className="h-5 w-5" />
                  Demo
                </a>
              ) : null}
              {project.discuss ? (
                <a
                  href={project.discuss}
                  className="inline-flex items-center gap-2 border-4 border-ink bg-ink px-4 py-3 font-display text-sm font-black uppercase text-paper shadow-brutal-sm transition-all hover:-translate-y-1 hover:shadow-brutal"
                >
                  <ExternalLink className="h-5 w-5" />
                  Discuss
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
