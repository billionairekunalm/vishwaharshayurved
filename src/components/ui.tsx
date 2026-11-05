"use client";
import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const l = new Lenis({ lerp: 0.09 });
    let id = requestAnimationFrame(function raf(t) { l.raf(t); id = requestAnimationFrame(raf); });
    return () => { cancelAnimationFrame(id); l.destroy(); };
  }, []);
  return null;
}

export function Reveal({ children, delay = 0, y = 40, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

/** Hand-drawn underline that draws itself, like the reference video. */
export function Squiggle({ className = "", color = "#e58a2d" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 300 18" className={className} fill="none" aria-hidden>
      <motion.path d="M3 12 C 50 2, 90 16, 140 8 S 240 4, 297 10" stroke={color} strokeWidth="5" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.5, ease: "easeInOut" }} />
    </svg>
  );
}

/** 3D hover tilt with spring physics + moving glare. */
export function Tilt({ children, className = "", max = 10, onClick }: { children: React.ReactNode; className?: string; max?: number; onClick?: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 200, damping: 18 });
  const gx = useTransform(x, [-0.5, 0.5], ["20%", "80%"]);
  const gy = useTransform(y, [-0.5, 0.5], ["20%", "80%"]);
  return (
    <motion.div ref={ref} onClick={onClick} className={`relative ${className}`} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, transformStyle: "preserve-3d" }}
      onPointerMove={(e) => { const r = ref.current!.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5); }}
      onPointerLeave={() => { x.set(0); y.set(0); }}>
      {children}
      <motion.span aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity hover:opacity-100" style={{ background: useTransform([gx, gy], ([a, b]) => `radial-gradient(260px circle at ${a} ${b}, rgba(255,255,255,.55), transparent 60%)`) }} />
    </motion.div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true });
  useEffect(() => {
    if (!seen) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; } });
    return () => c.stop();
  }, [seen, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export function Heading({ eyebrow, children, sub, align = "left" }: { eyebrow: string; children: React.ReactNode; sub?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal><span className="chip text-leaf">{eyebrow}</span></Reveal>
      <Reveal delay={0.08}><h2 className="display mt-4 text-3xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">{children}</h2></Reveal>
      {sub && <Reveal delay={0.16}><p className="mt-3 text-base leading-relaxed text-ink/65 sm:mt-5 sm:text-lg">{sub}</p></Reveal>}
    </div>
  );
}
