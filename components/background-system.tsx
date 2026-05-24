"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export function BackgroundSystem() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const particles: Particle[] = [];
    const pointer = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let raf = 0;

    const reset = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      particles.length = 0;
      const count = width < 768 ? 24 : 46;
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
        });
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.lineWidth = 2;

      particles.forEach((particle, index) => {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 150) {
          particle.vx += (dx / Math.max(distance, 1)) * 0.025;
          particle.vy += (dy / Math.max(distance, 1)) * 0.025;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.985;
        particle.vy *= 0.985;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        context.beginPath();
        context.fillStyle = index % 3 === 0 ? "#F72585" : index % 3 === 1 ? "#4D96FF" : "#FFD93D";
        context.arc(particle.x, particle.y, 3.5, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = "#101010";
        context.stroke();

        for (let next = index + 1; next < particles.length; next += 1) {
          const other = particles[next];
          const gap = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (gap < 118) {
            context.beginPath();
            context.globalAlpha = 1 - gap / 118;
            context.strokeStyle = "#101010";
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
            context.globalAlpha = 1;
          }
        }
      });

      raf = window.requestAnimationFrame(draw);
    };

    const onPointer = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    reset();
    draw();

    window.addEventListener("resize", reset);
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", reset);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [shouldReduceMotion]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-25 dark:opacity-20" />
    </div>
  );
}
