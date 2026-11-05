"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { clinic, doctor, navLinks, story, treatments, trustStats } from "@/data/clinic";
import { Counter, Heading, Reveal, Squiggle, Tilt } from "./ui";
import { buzz, HAPTIC } from "@/lib/haptic";
import type { Dosha } from "./Scene3D";

const LotusScene = dynamic(() => import("./Scene3D").then((m) => m.LotusScene), { ssr: false });
const DoshaScene = dynamic(() => import("./Scene3D").then((m) => m.DoshaScene), { ssr: false });

export const wa = (t: string) => `https://wa.me/91${clinic.whatsapp}?text=${encodeURIComponent(t)}`;

/* ------------------------------ NAV + HERO ------------------------------ */
export function Hero() {
  const [open, setOpen] = useState(false);
  const [k, setK] = useState(0); // bumps when the entrance doors open, replaying the hero animation
  useEffect(() => {
    const f = () => setK(1);
    window.addEventListener("doors-open", f);
    return () => window.removeEventListener("doors-open", f);
  }, []);
  return (
    <header id="home" className="panel mx-3 mt-3 overflow-hidden sm:mx-6 sm:mt-5">
      <nav aria-label="Main" className="relative z-30 flex items-center justify-between px-5 py-5 sm:px-10">
        <a href="#home" className="flex items-center gap-2.5" aria-label={clinic.name}>
          <Image src="/logo.png" alt="" width={44} height={44} className="h-11 w-11 object-contain" />
          <span className="display text-xl font-semibold">Vishwaharsh <span className="text-leaf">Ayurved</span></span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium whitespace-nowrap text-ink/70 xl:flex">
          {navLinks.slice(1).map((l) => (
            <li key={l.id}><a className="transition hover:text-ink" href={`#${l.id}`}>{l.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-dark hidden !py-2.5 text-sm sm:inline-flex">Book Appointment</a>
          <button className="btn btn-ghost !p-3 xl:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="relative block h-0.5 w-5 bg-ink before:absolute before:h-0.5 before:w-5 before:-translate-y-1.5 before:bg-ink after:absolute after:h-0.5 after:w-5 after:translate-y-1.5 after:bg-ink" />
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass absolute inset-x-4 top-full z-40 rounded-3xl p-4 xl:hidden">
              {navLinks.map((l) => <li key={l.id}><a onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-medium hover:bg-white" href={`#${l.id}`}>{l.label}</a></li>)}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      <div className="relative grid items-center gap-2 px-5 pb-10 sm:px-10 lg:grid-cols-[1.02fr_1fr] lg:pb-16">
        <div key={k} className="relative z-10 py-2 lg:py-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="chip mb-6 inline-block text-leaf">
            🌿 {clinic.address.locality} · {doctor.qualifications[1].abbr} (Ayurveda)
          </motion.p>
          <h1 className="display text-[2.75rem] font-bold leading-[1.02] sm:text-6xl xl:text-7xl">
            {"Heal the root,".split(" ").map((w, i) => (
              <motion.span key={i} className="mr-[.25em] inline-block" initial={{ y: 60, opacity: 0, rotateX: -60 }} animate={{ y: 0, opacity: 1, rotateX: 0 }} transition={{ delay: 0.25 + i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>{w}</motion.span>
            ))}
            <br />
            {"not just the".split(" ").map((w, i) => (
              <motion.span key={i} className="mr-[.25em] inline-block" initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>{w}</motion.span>
            ))}
            <span className="relative inline-block text-leaf">
              symptom.
              <Squiggle className="absolute -bottom-3 left-0 w-full" />
            </span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-5 max-w-lg text-base leading-relaxed sm:mt-9 sm:text-lg text-ink/65">
            Personalised Ayurvedic care with Dr. Harshada Malge — for mind, metabolism, motherhood and deep rejuvenation. In Chinchwad, or online from anywhere.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} lang="mr" className="mt-2 text-sm text-ink/45">{clinic.taglineDevanagari}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-dark">Get Started <span aria-hidden>→</span></a>
            <a href={wa(clinic.whatsappPrefill)} target="_blank" rel="noopener" className="btn btn-ghost">💬 WhatsApp us</a>
          </motion.div>
        </div>
        <div className="relative -mx-4 h-[330px] sm:h-[520px] lg:mx-0 lg:h-[660px]">
          <div aria-hidden className="absolute inset-x-6 top-10 bottom-6 -z-0 rounded-full bg-[radial-gradient(closest-side,#ffe3d0,transparent)] opacity-80 blur-2xl" />
          <a href="#clinic" className="glass bob absolute bottom-4 right-4 z-20 flex items-center gap-3 rounded-2xl p-2 pr-5 sm:bottom-8 sm:right-8">
            <Image src="/clinic/storefront-door.jpg" alt="" width={56} height={56} className="h-14 w-14 rounded-xl object-cover" />
            <span className="text-left text-xs leading-tight"><b className="block text-sm">Visit our clinic</b>Shivaji Park, Chinchwad</span>
          </a>
          <LotusScene className="absolute inset-0 [mask-image:radial-gradient(closest-side,#000_88%,transparent)]" />
        </div>
      </div>
    </header>
  );
}

/* ------------------------------ MARQUEE ------------------------------ */
export function Marquee() {
  const words = ["Prakriti Assessment", "Panchakarma", "Garbhsanskar", "Beejsanskar", "Mind & Manas", "Diabetes Care", "Dinacharya", "Swarnprashan", "Online Consults", "Medicine Courier"];
  return (
    <div aria-hidden className="mt-3 overflow-hidden py-1 sm:mt-8 sm:py-4">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="display flex items-center gap-10 text-2xl font-semibold text-ink/25 sm:text-5xl">{w}<span className="text-saffron">✦</span></span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ ABOUT ------------------------------ */
export function About() {
  return (
    <section id="about" className="panel mx-3 mt-3 sm:mt-8 px-5 py-9 sm:mx-6 sm:px-10 sm:py-16 lg:py-24" aria-labelledby="about-h">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Tilt className="aspect-square overflow-hidden rounded-[2rem] shadow-2xl sm:aspect-[4/5]" max={6}>
            <Image src="/clinic/doctor-camp.jpg" alt="Dr. Harshada Malge at the clinic desk beside an Arogya Tapasani Shibir health camp banner" fill sizes="(min-width:1024px) 45vw, 90vw" className="object-cover object-[50%_72%]" />
            <div className="glass bob absolute left-3 top-3 rounded-2xl px-4 py-2.5 sm:left-5 sm:top-5 sm:w-64 sm:p-4">
              <p className="display text-2xl font-bold text-leaf sm:text-3xl">10+ years</p>
              <p className="text-xs text-ink/65 sm:text-sm">of Ayurvedic practice in Chinchwad.</p>
            </div>
          </Tilt>
        </Reveal>
        <div>
          <div id="about-h"><Heading eyebrow="Our story" sub={story.whyStarted.split("\n\n")[0]}>Health deserves to be <em className="text-leaf not-italic">understood</em>, not just treated.</Heading></div>
          <Reveal delay={0.1} className="hidden sm:block"><p className="mt-5 whitespace-pre-line leading-relaxed text-ink/65">{story.whatMakesDifferent.split("\n\n").slice(0, 2).join("\n\n")}</p></Reveal>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4">
            {trustStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="glass rounded-3xl p-4 sm:p-5">
                  <p className="display text-4xl sm:text-5xl font-bold text-ink"><Counter to={s.value} suffix={s.suffix} /></p>
                  <p className="mt-1 text-sm text-ink/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SERVICES ------------------------------ */
export function Services() {
  const [sel, setSel] = useState<(typeof treatments)[number] | null>(null);
  return (
    <section id="services" className="mx-3 mt-3 sm:mt-8 sm:mx-6" aria-labelledby="services-h">
      <div className="panel px-5 py-9 sm:px-10 sm:py-16 lg:py-24">
        <div id="services-h"><Heading eyebrow="Treatments" sub="Six paths to balance — each shaped around your Prakriti, lifestyle and the root cause. Tap any card for the full process.">Care that feels made for <em className="text-saffron not-italic">you</em></Heading></div>
        <div className="mt-7 sm:mt-14 snap grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {treatments.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 0.1}>
              <Tilt className="group h-full cursor-pointer overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_50px_-25px_rgba(40,70,45,.45)]" onClick={() => setSel(t)}>
                <div className="relative h-52 overflow-hidden">
                  <Image src={t.image} alt={t.name} fill sizes="(min-width:1280px) 30vw, (min-width:640px) 45vw, 90vw" className="object-cover transition duration-700 group-hover:scale-110" />
                  <span className="chip absolute left-4 top-4">{t.category}</span>
                </div>
                <div className="p-6" style={{ transform: "translateZ(30px)" }}>
                  <h3 className="display text-2xl font-semibold leading-tight">{t.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{t.short}</p>
                  <button className="mt-5 text-sm font-semibold text-leaf" aria-label={`Details: ${t.name}`}>Explore treatment →</button>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {sel && (
          <motion.div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-3 backdrop-blur-sm sm:items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)} role="dialog" aria-modal aria-label={sel.name}>
            <motion.div onClick={(e) => e.stopPropagation()} initial={{ y: 80, scale: 0.94, rotateX: 12 }} animate={{ y: 0, scale: 1, rotateX: 0 }} exit={{ y: 60, opacity: 0 }} transition={{ type: "spring", damping: 24, stiffness: 220 }}
              className="panel max-h-[90vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-9" style={{ transformPerspective: 1000 }}>
              <button onClick={() => setSel(null)} className="btn btn-ghost float-right !p-3" aria-label="Close">✕</button>
              <span className="chip text-leaf">{sel.category}</span>
              <h3 className="display mt-3 text-3xl font-semibold sm:text-4xl">{sel.name}</h3>
              <p className="mt-3 text-ink/65">{sel.short}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">{sel.highlights.map((h) => <li key={h} className="glass rounded-2xl p-3 text-sm">✦ {h}</li>)}</ul>
              <dl className="mt-6 space-y-4 text-sm">
                {([["Process", sel.process], ["Duration", sel.duration], ["Follow-ups", sel.sessions], ["Suitable for", sel.suitable], ["Before you come", sel.beforeAfter]] as const).map(([k, v]) => (
                  <div key={k}><dt className="font-semibold text-leaf">{k}</dt><dd className="mt-0.5 text-ink/70">{v}</dd></div>
                ))}
              </dl>
              <a href={wa(`Hello, I would like to book: ${sel.name}`)} target="_blank" rel="noopener" className="btn btn-dark mt-8">Book this on WhatsApp →</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ------------------------------ DOSHAS (interactive 3D) ------------------------------ */
const DOSHAS: Record<Dosha, { el: string; text: string; traits: string }> = {
  Vata: { el: "Air + Space", text: "The principle of movement — breath, circulation, nerve impulses and thought.", traits: "Creative, quick, light. When out of balance: anxiety, dryness, restless sleep." },
  Pitta: { el: "Fire + Water", text: "The principle of transformation — digestion, metabolism, intellect and drive.", traits: "Focused, sharp, warm. When out of balance: irritability, acidity, inflammation." },
  Kapha: { el: "Earth + Water", text: "The principle of structure — stability, immunity, lubrication and calm.", traits: "Steady, nurturing, strong. When out of balance: heaviness, lethargy, congestion." },
};
export function Doshas() {
  const [d, setD] = useState<Dosha>("Pitta");
  return (
    <section id="doshas" className="panel mx-3 mt-3 sm:mt-8 overflow-hidden px-5 py-9 sm:mx-6 sm:px-10 sm:py-16 lg:py-24" aria-labelledby="dosha-h">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <div id="dosha-h"><Heading eyebrow="Know your Prakriti" sub="Every consultation begins by understanding your unique constitution. Hover or tap the orbs to explore the three doshas.">Three energies. <em className="text-leaf not-italic">One</em> you.</Heading></div>
          <AnimatePresence mode="wait">
            <motion.div key={d} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass mt-5 rounded-3xl p-5 sm:mt-8 sm:p-6">
              <p className="chip inline-block">{DOSHAS[d].el}</p>
              <h3 className="display mt-3 text-3xl font-semibold">{d}</h3>
              <p className="mt-2 text-ink/70">{DOSHAS[d].text}</p>
              <p className="mt-3 text-sm text-ink/55">{DOSHAS[d].traits}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative h-[300px] sm:h-[420px] lg:h-[560px]">
          <div aria-hidden className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_45%,#fff,#efe9f8_60%,transparent)]" />
          <DoshaScene active={d} onSelect={(x) => { if (x !== d) buzz(HAPTIC.select); setD(x); }} className="absolute inset-0" />
        </div>
      </div>
    </section>
  );
}
