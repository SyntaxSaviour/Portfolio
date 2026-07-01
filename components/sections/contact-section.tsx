"use client";

import { motion } from "framer-motion";
import { Code2, Download, Link2, Mail, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { BrutalLink } from "@/components/ui/brutal-link";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio hello from ${name || "someone interesting"}`);
    const body = encodeURIComponent(message || "Hey Farjan, I saw your portfolio and wanted to connect.");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Drop a signal."
        kicker="For internships, AI projects, research collaborations, or thoughtful model interpretability work."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="brutal-card bg-brutal-yellow p-5 text-ink"
        >
          <h3 className="font-display text-4xl font-black uppercase">Signal links</h3>
          <p className="mt-3 text-lg font-black leading-relaxed">
            Based in {profile.location}. Available for sharp ML problems, thoughtful AI work, and technical experiments with real constraints.
          </p>
          <div className="mt-6 grid gap-3">
            <BrutalLink href={`mailto:${profile.email}`} variant="paper" icon={Mail}>
              {profile.email}
            </BrutalLink>
            <BrutalLink href="https://linkedin.com/in/farjan-alam" variant="blue" icon={Link2}>
              LinkedIn
            </BrutalLink>
            <BrutalLink href="https://github.com/SyntaxSaviour" variant="green" icon={Code2}>
              GitHub
            </BrutalLink>
            <BrutalLink href="https://www.kaggle.com/" variant="pink" icon={Send}>
              Kaggle
            </BrutalLink>
            <BrutalLink href={profile.resume} variant="red" icon={Download} download>
              Resume Download
            </BrutalLink>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="border-[6px] border-ink bg-paper p-5 shadow-brutal-lg dark:border-paper dark:bg-ink"
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="font-display text-sm font-black uppercase">Name</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="min-h-14 border-4 border-ink bg-white px-4 font-bold text-ink shadow-brutal-sm outline-none focus:bg-brutal-yellow dark:border-paper"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2">
              <span className="font-display text-sm font-black uppercase">Message</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="min-h-48 resize-y border-4 border-ink bg-white px-4 py-3 font-bold text-ink shadow-brutal-sm outline-none focus:bg-brutal-yellow dark:border-paper"
                placeholder="Tell Farjan what you are building..."
              />
            </label>
            <Button type="submit" variant="pink" size="lg" className="w-full">
              <Send className="h-5 w-5" />
              Launch Email
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
