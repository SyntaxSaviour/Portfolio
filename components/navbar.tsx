"use client";

import { Command, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.href), []);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openCommand = () => window.dispatchEvent(new Event("open-command-palette"));

  return (
    <header className="fixed left-0 right-0 top-5 z-40 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 border-4 border-ink bg-paper p-2 shadow-brutal dark:border-paper dark:bg-ink dark:shadow-brutal-dark sm:gap-5 sm:p-3">
        <a
          href="#home"
          className="flex min-h-12 items-center border-4 border-ink bg-brutal-yellow px-3 font-display text-lg font-black uppercase text-ink shadow-brutal-sm transition-transform hover:-rotate-1 dark:border-paper sm:min-h-14 sm:px-5 sm:text-2xl"
        >
          FARZAN.EXE
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "border-4 border-transparent px-4 py-3 font-display text-xs font-black uppercase transition-all hover:border-ink hover:bg-brutal-yellow dark:hover:border-paper",
                active === item.href && "border-ink bg-brutal-blue text-white dark:border-paper",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            size="icon"
            variant="blue"
            aria-label="Open command palette"
            onClick={openCommand}
            title="Command"
            className="hidden sm:inline-flex"
          >
            <Command className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Button
            size="icon"
            variant="paper"
            aria-label="Open menu"
            className="lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl border-4 border-ink bg-brutal-yellow p-3 shadow-brutal dark:border-paper">
          <div className="grid gap-2 sm:grid-cols-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-4 border-ink bg-paper px-4 py-3 font-display text-base font-black uppercase text-ink shadow-brutal-sm dark:border-paper"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
