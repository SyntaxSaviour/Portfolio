import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  kicker?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  kicker,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 130, damping: 16 }}
      className={cn(
        "mb-10 max-w-4xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span className="doodle-label -rotate-1">{eyebrow}</span>
      <h2 className="mt-5 font-display text-5xl font-black uppercase leading-none text-ink sm:text-6xl lg:text-7xl dark:text-paper">
        {title}
      </h2>
      {kicker ? (
        <p className="mt-4 max-w-2xl text-lg font-bold leading-relaxed text-zinc-800 dark:text-zinc-200">
          {kicker}
        </p>
      ) : null}
    </motion.div>
  );
}
