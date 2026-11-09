"use client";
import { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { clinic, doctor, navLinks, story, treatments, trustStats } from "@/data/clinic";
import { Counter, Heading, LazyMount, Reveal, Squiggle, Tilt } from "./ui";
import { buzz, HAPTIC } from "@/lib/haptic";
import { Ingredient } from "./GateArt";
import { ArrowIcon, CareLine, LeafLine, LotusLine, MortarLine, PhoneIcon, WhatsAppIcon } from "./HeroIcons";
import type { Dosha } from "./Scene3D";

const DoshaScene = dynamic(() => import("./Scene3D").then((m) => m.DoshaScene), { ssr: false });

export const wa = (t: string) => `https://wa.me/91${clinic.whatsapp}?text=${encodeURIComponent(t)}`;

/* ------------------------------ NAV + HERO ------------------------------ */
const NAV: [string, string][] = [["about", "About"], ["services", "Services"], ["doctor", "Doctor"], ["journey", "Patient Journey"], ["gallery", "Gallery"], ["contact", "Contact"]];
const FEATURES = [
  { Icon: LotusLine, a: "Root-Cause", b: "Healing" },
  { Icon: MortarLine, a: "Natural &", b: "Safe Treatment" },
  { Icon: CareLine, a: "Personalised", b: "Care" },
  { Icon: LeafLine, a: "Holistic", b: "Wellness" },
];
const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const [open, setOpen] = useState(false);
  const [k, setK] = useState(0); // bumps when the entrance doors open, replaying the hero animation
  useEffect(() => {
    const f = () => setK(1);
    window.addEventListener("doors-open", f);
    return () => window.removeEventListener("doors-open", f);
  }, []);
  return (
    <header id="home" className="panel relative mx-3 mt-3 overflow-hidden sm:mx-6 sm:mt-5">
      {/* soft leaf shadows in the corners */}
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 w-44 rotate-[30deg] opacity-30 blur-[3px] sm:-left-16 sm:-top-14 sm:w-64 sm:opacity-40"><Ingredient name="Tulsi" className="w-full" /></div>
      <div aria-hidden className="pointer-events-none absolute -left-16 top-40 hidden w-40 -rotate-[20deg] opacity-40 blur-[3px] lg:block"><Ingredient name="Neem" className="w-full" /></div>
      <div aria-hidden className="pointer-events-none absolute -bottom-14 -right-10 w-56 -rotate-[25deg] opacity-45 blur-[3px] sm:w-80"><Ingredient name="Neem" className="w-full" /></div>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(ellipse_at_100%_30%,rgba(120,150,110,.14),transparent_70%)]" />

      <nav aria-label="Main" className="relative z-30 flex items-center justify-between gap-4 px-5 py-5 sm:px-10">
        <a href="#home" className="flex items-center gap-3" aria-label={clinic.name}>
          <Image src="/logo.png" alt="" width={96} height={96} priority className="h-12 w-12 object-contain" />
          <span className="leading-none">
            <span className="display block text-2xl font-semibold sm:text-[1.75rem]">Vishwaharsh</span>
            <span className="mt-1 flex items-center gap-2 text-[10px] font-semibold tracking-[0.42em] text-forest"><i className="h-px w-5 bg-forest/50" />AYURVED<i className="h-px w-5 bg-forest/50" /></span>
          </span>
        </a>
        <ul className="hidden items-center gap-8 whitespace-nowrap text-[15px] font-medium text-ink/80 xl:flex">
          {NAV.map(([id, label]) => <li key={id}><a className="transition hover:text-forest" href={`#${id}`}>{label}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <a href={`tel:+91${clinic.phone}`} aria-label="Call us" className="hidden h-12 w-12 place-items-center rounded-full border border-forest/50 text-forest transition hover:bg-forest hover:text-white sm:grid"><PhoneIcon /></a>
          <a href="#contact" className="btn hidden bg-forest !py-3 text-white shadow-[0_14px_30px_-14px_rgba(20,80,44,.7)] sm:inline-flex">Book Appointment <ArrowIcon /></a>
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

      <div className="relative grid items-center gap-6 px-5 pb-10 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:pb-14">
        {/* ---------- words ---------- */}
        <div key={k} className="relative z-10 py-2 lg:py-10">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8, ease }}
            className="inline-flex items-center gap-3 rounded-full bg-white/85 px-4 py-2 text-sm font-medium text-forest shadow-[0_10px_26px_-16px_rgba(40,70,45,.55)] ring-1 ring-black/5">
            <LeafLine className="h-5 w-5" /> Authentic Ayurvedic Care <span aria-hidden className="h-4 w-px bg-forest/30" /> Chinchwad, Pune
          </motion.p>

          <h1 className="display mt-6 text-[2.7rem] font-medium leading-[1.04] tracking-tight sm:text-6xl xl:text-[4.5rem]">
            <span className="relative inline-block">
              {"Heal the root,".split(" ").map((w, i) => (
                <Fragment key={i}><motion.span className="mr-[.25em] inline-block" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 + i * 0.1, duration: 0.9, ease }}>{w}</motion.span>{" "}</Fragment>
              ))}
              <motion.span aria-hidden initial={{ opacity: 0, scale: 0.4, rotate: -30 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 1, duration: 0.8, ease }} className="absolute -right-10 -top-3 hidden sm:block">
                <Ingredient name="Tulsi" className="drift h-12 w-12 xl:h-14 xl:w-14" />
              </motion.span>
            </span>
            <br />
            {"not just the".split(" ").map((w, i) => (
              <Fragment key={i}><motion.span className="mr-[.25em] inline-block" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.55 + i * 0.1, duration: 0.9, ease }}>{w}</motion.span>{" "}</Fragment>
            ))}
            <motion.span className="relative inline-block italic text-leaf" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.85, duration: 0.9, ease }}>
              symptom.
              <motion.svg aria-hidden viewBox="0 0 300 22" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-leaf sm:-bottom-3 sm:h-4"
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ transformOrigin: "left" }} transition={{ delay: 1.4, duration: 0.9, ease: "easeOut" }}>
                <path d="M2 13C70 19 170 6 298 2 192 13 84 21 2 13Z" fill="currentColor" />
              </motion.svg>
            </motion.span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8, ease }} className="mt-7 max-w-md text-base leading-relaxed text-ink/65 sm:text-lg">
            Personalised Ayurvedic treatment by Dr. Harshada Malge for long-term, natural and holistic healing.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} lang="mr" className="mt-1.5 text-sm text-ink/40">{clinic.taglineDevanagari}</motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.8, ease }} className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn bg-forest text-white shadow-[0_16px_34px_-16px_rgba(20,80,44,.8)]">Book Appointment <ArrowIcon /></a>
            <a href={wa(clinic.whatsappPrefill)} target="_blank" rel="noopener" className="btn border border-ink/15 bg-white/80 text-ink hover:bg-white"><WhatsAppIcon className="h-6 w-6 text-[#1f9d55]" /> WhatsApp Us</a>
          </motion.div>

          <motion.ul initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.9, ease }} className="mt-10 grid grid-cols-2 gap-x-5 gap-y-5 sm:flex sm:items-center sm:gap-0">
            {FEATURES.map(({ Icon, a, b }, i) => (
              <li key={a} className={`flex items-center gap-2.5 sm:shrink-0 ${i ? "sm:ml-4 sm:border-l sm:border-ink/15 sm:pl-4 xl:ml-6 xl:pl-6" : ""}`}>
                <Icon className="h-8 w-8 shrink-0 text-forest sm:h-9 sm:w-9 xl:h-10 xl:w-10" />
                <span className="whitespace-nowrap text-[13px] font-medium leading-tight text-ink/80 sm:text-sm">{a}<br />{b}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* ---------- arch niche: mortar & pestle, herbs and hibiscus ---------- */}
        <div className="relative mx-auto mt-4 w-full max-w-[580px] lg:mt-0">
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.3, duration: 1.2, ease }}>
            <Image src="/images/hero-arch.jpg" alt="Ayurvedic herbs: a stone mortar and pestle with fresh leaves, a herbal oil bottle, powder and a hibiscus flower on a marble stand" width={979} height={944} priority sizes="(min-width:1024px) 45vw, 92vw"
              className="h-auto w-full [mask-image:radial-gradient(ellipse_at_50%_50%,#000_52%,transparent_92%)]" />
          </motion.div>
          <a href="#clinic" className="glass bob relative z-20 mx-auto -mt-3 flex w-fit items-center gap-3 rounded-2xl p-2 pr-5 lg:absolute lg:-bottom-3 lg:right-2 lg:mx-0 lg:mt-0">
            <Image src="/clinic/storefront-door.jpg" alt="" width={56} height={56} className="h-14 w-14 rounded-xl object-cover" />
            <span className="text-left text-xs leading-tight"><b className="block text-sm">Visit our clinic</b>Shivaji Park, Chinchwad</span>
          </a>
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
// Each home-page treatment links to its own full page (better for visitors and for search engines).
const TREATMENT_PAGE: Record<string, string> = { psychological: "mental-health", diabetes: "diabetes-treatment", garbhsanskar: "garbhsanskar", beejsanskar: "beejsanskar", panchakarma: "panchakarma", "online-consultation": "online-consultation" };
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
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={t.image} alt={t.name} fill sizes="(min-width:1280px) 30vw, (min-width:640px) 45vw, 90vw" className="object-cover transition duration-700 group-hover:scale-110" />
                  <span className="chip absolute left-4 top-4">{t.category}</span>
                </div>
                <div className="p-6" style={{ transform: "translateZ(30px)" }}>
                  <h3 className="display text-2xl font-semibold leading-tight">{t.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{t.short}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
                    <button className="text-leaf" aria-label={`Quick view: ${t.name}`}>Quick view →</button>
                    {TREATMENT_PAGE[t.id] && <Link href={`/services/${TREATMENT_PAGE[t.id]}`} onClick={(e) => e.stopPropagation()} className="text-forest underline-offset-4 hover:underline">Full guide →</Link>}
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center"><Link href="/services" className="btn btn-ghost">View all treatments, including leech therapy →</Link></p>
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
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={wa(`Hello, I would like to book: ${sel.name}`)} target="_blank" rel="noopener" className="btn btn-dark">Book this on WhatsApp →</a>
                {TREATMENT_PAGE[sel.id] && <Link href={`/services/${TREATMENT_PAGE[sel.id]}`} className="btn btn-ghost">Read the full guide</Link>}
              </div>
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
          <LazyMount className="absolute inset-0"><DoshaScene active={d} onSelect={(x) => { if (x !== d) buzz(HAPTIC.select); setD(x); }} className="absolute inset-0" /></LazyMount>
        </div>
      </div>
    </section>
  );
}
