import { profile } from "@/lib/portfolio";

export function Footer() {
  return (
    <footer className="relative z-10 border-t-[6px] border-ink bg-ink px-4 py-10 text-paper dark:border-paper dark:bg-paper dark:text-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-2xl font-black uppercase">
          Built with caffeine, curiosity, and questionable sleep schedules.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="w-fit border-4 border-paper bg-brutal-yellow px-4 py-2 font-display text-sm font-black uppercase text-ink shadow-brutal-sm dark:border-ink"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
