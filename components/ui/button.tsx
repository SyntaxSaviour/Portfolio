import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 border-4 border-ink px-5 py-3 font-display text-sm font-black uppercase text-ink shadow-brutal-sm transition-all duration-150 hover:-translate-y-1 hover:translate-x-1 hover:shadow-brutal active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brutal-pink disabled:pointer-events-none disabled:opacity-60 dark:border-paper",
  {
    variants: {
      variant: {
        yellow: "bg-brutal-yellow",
        red: "bg-brutal-red",
        green: "bg-brutal-green",
        blue: "bg-brutal-blue",
        pink: "bg-brutal-pink text-white",
        paper: "bg-paper dark:bg-ink dark:text-paper",
      },
      size: {
        default: "min-h-12 px-5 py-3",
        sm: "min-h-10 px-3 py-2 text-xs",
        lg: "min-h-14 px-7 py-4 text-base",
        icon: "h-12 w-12 p-0",
      },
    },
    defaultVariants: {
      variant: "yellow",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
