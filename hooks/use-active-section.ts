"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds.map((id) => ({
      id,
      element: document.getElementById(id.replace("#", "")),
    })).filter((item): item is { id: string; element: HTMLElement } => Boolean(item.element));

    if (!elements.length) return;

    let frame = 0;

    const update = () => {
      const anchor = Math.min(window.innerHeight * 0.35, 260);
      const current =
        elements.find(({ element }) => {
          const rect = element.getBoundingClientRect();
          return rect.top <= anchor && rect.bottom >= anchor;
        }) ?? elements.reduce((nearest, item) => {
          const nearestDistance = Math.abs(nearest.element.getBoundingClientRect().top - anchor);
          const itemDistance = Math.abs(item.element.getBoundingClientRect().top - anchor);
          return itemDistance < nearestDistance ? item : nearest;
        }, elements[0]);

      setActive(current.id);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  return active;
}
