"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Keyboard, Send, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { askFarzan } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function PlaygroundSection() {
  const [active, setActive] = useState(0);
  const [secret, setSecret] = useState(false);
  const [visibleLogs, setVisibleLogs] = useState(0);
  const [processing, setProcessing] = useState(true);
  const [typedResponse, setTypedResponse] = useState("");
  const konami = useMemo(
    () => [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ],
    [],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisibleLogs((value) => Math.min(value + 1, askFarzan.logs.length));
    }, 360);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let typingTimer = 0;
    const processingTimer = window.setTimeout(() => {
      setProcessing(false);
      setTypedResponse("");
      let cursor = 0;
      const answer = askFarzan.prompts[active].a;

      typingTimer = window.setInterval(() => {
        cursor += 2;
        setTypedResponse(answer.slice(0, cursor));
        if (cursor >= answer.length) {
          window.clearInterval(typingTimer);
        }
      }, 18);
    }, 420);

    setProcessing(true);
    setTypedResponse("");

    return () => {
      window.clearTimeout(processingTimer);
      window.clearInterval(typingTimer);
    };
  }, [active]);

  useEffect(() => {
    const buffer: string[] = [];
    const onKeyDown = (event: KeyboardEvent) => {
      buffer.push(event.key);
      buffer.splice(0, Math.max(0, buffer.length - konami.length));
      if (buffer.join("|") === konami.join("|")) {
        setSecret(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [konami]);

  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Interactive"
        title="Ask Farzan.exe"
        kicker="A terminal-style interface inspired by how I think about systems, AI, and building things."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="border-[6px] border-ink bg-ink p-5 text-paper shadow-brutal-lg dark:border-paper dark:bg-paper dark:text-ink"
        >
          <div className="mb-5 flex items-center justify-between border-4 border-paper bg-brutal-pink px-3 py-2 text-white dark:border-ink">
            <span className="font-display text-lg font-black uppercase">system logs</span>
            <Keyboard className="h-5 w-5" />
          </div>
          <div className="min-h-72 space-y-3 font-mono text-sm font-bold">
            {askFarzan.logs.map((log, index) => (
              <motion.p
                key={log}
                initial={{ opacity: 0, x: -12 }}
                animate={{
                  opacity: index < visibleLogs ? 1 : 0.15,
                  x: index === visibleLogs - 1 ? 8 : 0,
                }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                className={index === visibleLogs - 1 ? "text-brutal-green" : ""}
              >
                [{String(index + 1).padStart(2, "0")}] {log}
              </motion.p>
            ))}
            <motion.p
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              className="pt-3 text-brutal-yellow"
            >
              [{String(askFarzan.logs.length + 1).padStart(2, "0")}] listener online_
            </motion.p>
            {secret ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                className="mt-8 border-4 border-paper bg-brutal-yellow p-3 font-display text-lg font-black uppercase text-ink shadow-brutal-sm dark:border-ink"
              >
                hidden mode unlocked: recruiter remembers this portfolio.
              </motion.div>
            ) : null}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="brutal-card bg-brutal-blue p-5 text-ink"
        >
          <div className="flex flex-wrap gap-3">
            {askFarzan.prompts.map((prompt, index) => (
              <Button
                key={prompt.label}
                variant={active === index ? "yellow" : "paper"}
                size="sm"
                onClick={() => setActive(index)}
              >
                {prompt.label}
              </Button>
            ))}
          </div>

          <div className="mt-6 border-4 border-ink bg-paper p-5 shadow-brutal-sm">
            <div className="mb-4 flex items-center gap-2 font-display text-sm font-black uppercase">
              <Sparkles className="h-5 w-5" />
              ask_farzan.exe response
            </div>
            <AnimatePresence mode="wait">
              {processing ? (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="font-mono text-base font-black text-ink"
                >
                  processing<span className="animate-blink">...</span>
                </motion.div>
              ) : (
                <motion.p
                  key={askFarzan.prompts[active].label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ type: "spring", stiffness: 150, damping: 18 }}
                  className="min-h-32 text-xl font-black leading-relaxed"
                >
                  {typedResponse}
                  <span className="animate-blink">_</span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-5 flex items-center gap-3 border-4 border-ink bg-ink p-3 text-paper shadow-brutal-sm">
            <span className="font-mono text-sm font-bold">$ ask --topic {askFarzan.prompts[active].q}</span>
            <span className="animate-blink font-mono">_</span>
            <Send className="ml-auto h-5 w-5 text-brutal-green" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
