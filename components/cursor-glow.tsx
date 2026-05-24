"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    const handleMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] hidden mix-blend-multiply md:block dark:mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle 180px at var(--cursor-x) var(--cursor-y), rgba(247,37,133,0.16), transparent 65%)",
      }}
    />
  );
}
