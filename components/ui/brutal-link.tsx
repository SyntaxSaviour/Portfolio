import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type BrutalLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  variant?: "yellow" | "red" | "green" | "blue" | "pink" | "paper";
  size?: "default" | "sm" | "lg";
  className?: string;
  download?: boolean;
  target?: string;
};

export function BrutalLink({
  href,
  children,
  icon: Icon,
  variant = "yellow",
  size = "default",
  className,
  download,
  target,
}: BrutalLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const content = (
    <>
      {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
      <span>{children}</span>
    </>
  );

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} download={download}>
        {content}
      </a>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} download={download}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      target={target ?? "_blank"}
      rel={target === "_self" ? undefined : "noreferrer"}
      download={download}
    >
      {content}
    </a>
  );
}
