"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Code2, Download, Mail, Search, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { navItems, profile } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CommandItem = {
  label: string;
  detail: string;
  action: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { setTheme } = useTheme();

  const commands = useMemo<CommandItem[]>(
    () => [
      ...navItems.map((item) => ({
        label: `Jump to ${item.label}`,
        detail: item.href,
        action: () => {
          window.location.hash = item.href;
          setOpen(false);
        },
      })),
      {
        label: "Download resume",
        detail: "PDF",
        action: () => {
          window.open(profile.resume, "_blank");
          setOpen(false);
        },
      },
      {
        label: "Open GitHub",
        detail: "SyntaxSaviour",
        action: () => {
          window.open("https://github.com/SyntaxSaviour", "_blank", "noreferrer");
          setOpen(false);
        },
      },
      {
        label: "Send email",
        detail: profile.email,
        action: () => {
          window.location.href = `mailto:${profile.email}`;
          setOpen(false);
        },
      },
      {
        label: "Light mode",
        detail: "Theme",
        action: () => {
          setTheme("light");
          setOpen(false);
        },
      },
      {
        label: "Dark mode",
        detail: "Theme",
        action: () => {
          setTheme("dark");
          setOpen(false);
        },
      },
    ],
    [setTheme],
  );

  useEffect(() => {
    const openFromNav = () => setOpen(true);
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }

      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("open-command-palette", openFromNav);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("open-command-palette", openFromNav);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const visible = commands.filter((command) =>
    `${command.label} ${command.detail}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-ink/55 px-4 pt-28 backdrop-blur-[2px] dark:bg-paper/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ y: -40, rotate: -2, scale: 0.96 }}
            animate={{ y: 0, rotate: 0, scale: 1 }}
            exit={{ y: -20, rotate: 2, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="w-full max-w-2xl border-4 border-ink bg-paper p-3 shadow-brutal-lg dark:border-paper dark:bg-ink dark:shadow-brutal-dark"
          >
            <div className="flex items-center gap-3 border-4 border-ink bg-brutal-yellow px-3 py-2 dark:border-paper">
              <Search className="h-5 w-5 text-ink" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search actions..."
                className="min-h-12 flex-1 bg-transparent font-display text-lg font-black uppercase text-ink outline-none placeholder:text-ink/60"
              />
              <Button size="icon" variant="paper" aria-label="Close command palette" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-3 max-h-[55vh] overflow-y-auto border-4 border-ink bg-white dark:border-paper dark:bg-zinc-950">
              {visible.map((command, index) => (
                <button
                  key={`${command.label}-${command.detail}`}
                  onClick={command.action}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 border-b-4 border-ink px-4 py-4 text-left transition-colors hover:bg-brutal-blue hover:text-white dark:border-paper",
                    index % 2 === 0 && "bg-paper dark:bg-ink",
                  )}
                >
                  <span>
                    <span className="block font-display text-base font-black uppercase">
                      {command.label}
                    </span>
                    <span className="text-sm font-bold opacity-80">{command.detail}</span>
                  </span>
                  {command.label.includes("resume") ? <Download className="h-5 w-5" /> : null}
                  {command.label.includes("GitHub") ? <Code2 className="h-5 w-5" /> : null}
                  {command.label.includes("email") ? <Mail className="h-5 w-5" /> : null}
                </button>
              ))}
              {!visible.length ? (
                <div className="p-5 font-display text-lg font-black uppercase">No matching command.</div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
