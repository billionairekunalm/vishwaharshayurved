"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { clinic, doctor, faqs, facilities, patientJourney, products, servicesOffered } from "@/data/clinic";
import { Heading, Reveal, Squiggle, Tilt } from "./ui";
import { wa } from "./SectionsA";
import { buzz, HAPTIC } from "@/lib/haptic";

/* ------------------------------ JOURNEY ------------------------------ */
export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  return (
    <section id="journey" className="mx-3 mt-3 sm:mt-8 sm:mx-6" aria-labelledby="journey-h">
      <div className="panel px-5 py-9 sm:px-10 sm:py-16 lg:py-24">
        <div id="journey-h"><Heading eyebrow="Patient journey" align="center" sub="From the first message to long-term wellbeing — five unhurried steps.">Your path to <span className="relative inline-block text-leaf">balance<Squiggle className="absolute -bottom-2 left-0 w-full" /></span></Heading></div>
        <ol className="snap mt-7 sm:hidden">
          {patientJourney.map((s) => (
            <li key={s.step} className="glass rounded-3xl p-5">
              <span className="display text-4xl font-bold text-saffron">{s.step}</span>
              <h3 className="display mt-1 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.description}</p>
            </li>
          ))}
        </ol>
        <div ref={ref} className="relative mx-auto mt-16 hidden max-w-3xl sm:block">
          <div aria-hidden className="absolute left-6 top-2 bottom-2 w-1 rounded-full bg-ink/10 sm:left-1/2 sm:-translate-x-1/2">
            <motion.div className="w-full origin-top rounded-full bg-gradient-to-b from-saffron to-leaf" style={{ scaleY: scrollYProgress, height: "100%" }} />
          </div>
          <ol className="space-y-10">
            {patientJourney.map((s, i) => (
              <li key={s.step} className={`relative flex pl-16 sm:pl-0 ${i % 2 ? "sm:justify-start sm:pr-[52%]" : "sm:justify-end sm:pl-[52%]"}`}>
                <span className="absolute left-0 top-3 grid h-12 w-12 place-items-center rounded-full bg-white text-sm font-bold text-leaf shadow-lg ring-4 ring-cream sm:left-1/2 sm:-translate-x-1/2">{s.step}</span>
                <Reveal y={50} className="w-full">
                  <Tilt className="glass rounded-3xl p-6" max={6}>
                    <h3 className="display text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.description}</p>
                  </Tilt>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ DOCTOR ------------------------------ */
const SPEC_ICON = ["🧠", "🩸", "🤰"];
const TIMELINE = [
  { y: "2012", t: "BAMS", d: "RPAM, Purna", i: "🎓" },
  { y: "2016", t: "MD (Ayurveda)", d: "Tilak Ayurved Mahavidyalay, Pune", i: "🏛️" },
  { y: "Hospital", t: "PCMC, Moshi", d: "Clinical experience", i: "🏥" },
  { y: "Certified", t: "PGDCP + Garbhsanskar", d: "Counselling psychology and prenatal care", i: "📜" },
  { y: "2025", t: "Vishwaharsh Ayurved", d: "Her own clinic in Chinchwad", i: "🪷" },
];
const LANGS = [["मराठी", "Marathi"], ["हिन्दी", "Hindi"], ["English", "English"]];

function Seal() {
  return (
    <div className="absolute -bottom-6 -right-3 grid h-32 w-32 place-items-center sm:-right-8 sm:h-40 sm:w-40">
      <div className="absolute inset-0 rounded-full bg-white shadow-xl" />
      <svg viewBox="0 0 120 120" className="absolute inset-0 animate-[spin_26s_linear_infinite]" aria-hidden>
        <defs><path id="seal-ring" d="M60 60 m-45 0 a45 45 0 1 1 90 0 a45 45 0 1 1 -90 0" /></defs>
        <text fontSize="9.2" fontWeight="700" fill="#4c7a53" letterSpacing="1.6"><textPath href="#seal-ring" textLength="280">BAMS ✦ MD AYURVEDA ✦ PGDCP ✦ COUNSELLOR ✦</textPath></text>
      </svg>
      <div className="relative text-center leading-none">
        <p className="display bg-gradient-to-br from-saffron to-rose bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">10+</p>
        <p className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-ink/50">years</p>
      </div>
    </div>
  );
}

export function Doctor() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const letter = doctor.messageToPatients.split("\n\n");
  return (
    <section id="doctor" ref={ref} className="panel mx-3 mt-3 overflow-x-clip px-5 py-9 sm:mx-6 sm:mt-8 sm:px-10 sm:py-16 lg:py-24" aria-labelledby="doctor-h">
      {/* giant Devanagari watermark */}
      <span aria-hidden lang="hi" className="font-deva pointer-events-none absolute -right-4 top-2 select-none text-[6.5rem] leading-none text-saffron/[0.08] sm:text-[13rem]">आयुर्वेद</span>

      <div className="relative grid grid-cols-[minmax(0,1fr)] items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* ---------- portrait ---------- */}
        <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-24 lg:max-w-md">
          <div aria-hidden className="absolute -inset-3 rounded-t-[999px] rounded-b-[2.5rem] bg-gradient-to-b from-saffron/40 via-rose/30 to-sage/40 blur-md" />
          <motion.div style={{ y }} className="relative">
            <Tilt className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] border-[5px] border-white shadow-2xl" max={5}>
              <Image src="/clinic/doctor.jpg" alt="Dr. Harshada Malge, Ayurvedic physician at Vishwaharsh Ayurved" fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover object-[50%_30%]" />
            </Tilt>
            <Seal />
            <div className="glass bob absolute -left-2 bottom-16 rounded-2xl px-4 py-2.5 sm:-left-8">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/50">Reg. no.</p>
              <p className="display text-lg font-bold">{doctor.registration}</p>
            </div>
          </motion.div>
        </div>

        {/* ---------- story ---------- */}
        <div className="min-w-0">
          <Reveal><span className="chip text-leaf">Meet the doctor</span></Reveal>
          <h2 id="doctor-h" className="mt-4">
            <Reveal delay={0.05}><span className="font-script -mb-1 block -rotate-2 text-5xl text-saffron sm:text-7xl">Dr.</span></Reveal>
            <Reveal delay={0.1}>
              <span className="display block text-5xl font-bold leading-[0.95] sm:text-7xl">Harshada <span className="bg-gradient-to-r from-leaf via-leaf to-saffron bg-clip-text text-transparent">Malge</span></span>
            </Reveal>
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-4 flex flex-wrap items-center gap-x-3 text-xs font-bold uppercase tracking-[0.22em] text-ink/45 sm:text-sm">Ayurvedic Physician <span className="text-saffron">✦</span> Counsellor <span className="text-saffron">✦</span> Mentor of mind &amp; body</p>
          </Reveal>

          <Reveal delay={0.2}>
            <blockquote className="relative mt-8 rounded-3xl bg-gradient-to-br from-leaf/10 to-saffron/10 p-6 pl-8">
              <span aria-hidden className="font-script absolute -top-6 left-3 text-8xl leading-none text-saffron/60">“</span>
              <p className="display text-lg italic leading-snug text-ink/80 sm:text-xl">{doctor.philosophy}</p>
            </blockquote>
          </Reveal>

          {/* credential medals */}
          <p className="font-script mt-10 text-3xl text-leaf">Her qualifications</p>
          <div className="mt-3 grid grid-cols-3 gap-2.5 sm:gap-4">
            {doctor.qualifications.map((q, i) => (
              <Reveal key={q.abbr} delay={i * 0.1}>
                <Tilt className="h-full rounded-3xl bg-white p-4 text-center shadow-[0_18px_40px_-22px_rgba(40,70,45,.55)] ring-1 ring-ink/5 sm:p-5" max={10}>
                  <span className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold to-saffron text-sm text-white shadow">★</span>
                  <p className="display bg-gradient-to-br from-leaf to-ink bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">{q.abbr}</p>
                  <p className="mt-1 text-[11px] leading-snug text-ink/55 sm:text-xs">{q.full}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>

          {/* specialisations */}
          <p className="font-script mt-10 text-3xl text-leaf">What she heals</p>
          <ul className="mt-3 space-y-3">
            {doctor.specialisations.map((s, i) => (
              <li key={s}>
                <Reveal delay={i * 0.08}>
                  <div className="group glass flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1 hover:bg-white">
                    <span className="display w-9 text-3xl font-bold text-saffron/40 transition group-hover:text-saffron">0{i + 1}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-sage/40 to-white text-2xl shadow-inner" aria-hidden>{SPEC_ICON[i]}</span>
                    <span className="display text-lg font-semibold leading-tight sm:text-xl">{s}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          {/* timeline */}
          <p className="font-script mt-10 text-3xl text-leaf">Her journey</p>
          <ol className="snap mt-3 sm:hidden">
            {TIMELINE.map((t) => (
              <li key={t.t} className="glass rounded-3xl p-5">
                <span className="text-3xl" aria-hidden>{t.i}</span>
                <p className="display mt-1 text-2xl font-bold text-saffron">{t.y}</p>
                <p className="font-semibold">{t.t}</p>
                <p className="mt-1 text-sm text-ink/60">{t.d}</p>
              </li>
            ))}
          </ol>
          <ol className="relative mt-4 hidden border-l-2 border-dashed border-saffron/40 pl-8 sm:block">
            {TIMELINE.map((t, i) => (
              <li key={t.t} className="relative pb-6 last:pb-0">
                <span className="absolute -left-[3.2rem] top-0 grid h-10 w-10 place-items-center rounded-full bg-white text-lg shadow-lg ring-4 ring-cream" aria-hidden>{t.i}</span>
                <Reveal delay={i * 0.05}>
                  <p className="text-xs font-bold uppercase tracking-widest text-saffron">{t.y}</p>
                  <p className="display text-xl font-semibold">{t.t}</p>
                  <p className="text-sm text-ink/60">{t.d}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-ink/45">Speaks</span>
              {LANGS.map(([n, e]) => <span key={e} className="chip !px-4 !py-2 !text-sm" title={e}><span lang={e === "English" ? "en" : e === "Hindi" ? "hi" : "mr"}>{n}</span></span>)}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ---------- handwritten letter ---------- */}
      <div className="relative mt-16 grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[1.35fr_1fr]">
        <Reveal y={50}>
          <div className="relative -rotate-1 rounded-sm bg-[#fffdf3] p-7 shadow-[0_30px_60px_-30px_rgba(60,45,20,.55)] sm:p-10" style={{ backgroundImage: "repeating-linear-gradient(transparent 0 31px, rgba(76,122,83,.12) 31px 32px)" }}>
            <span aria-hidden className="absolute -top-3 left-10 h-7 w-24 rotate-[-4deg] bg-saffron/30" />
            <span aria-hidden className="absolute -top-3 right-10 h-7 w-24 rotate-[5deg] bg-rose/40" />
            <p className="font-script text-4xl text-saffron sm:text-5xl">Dear Patients,</p>
            <div className="font-script mt-3 space-y-3 text-[1.65rem] leading-[32px] text-ink/85 sm:text-3xl sm:leading-[32px]">
              {letter.slice(1).map((p, i) => <p key={i} className={i === letter.length - 2 ? "text-leaf" : ""}>{p}</p>)}
            </div>
            <p className="font-script mt-5 text-right text-3xl text-ink">— Dr. Harshada Malge</p>
          </div>
        </Reveal>
        <Reveal y={50} delay={0.1}>
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-[#24402c] to-leaf p-7 text-white sm:p-9">
            <div aria-hidden className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-saffron/30 blur-3xl" />
            <div className="relative">
              <p className="font-script text-4xl text-[#ffd9a0]">Let&apos;s talk</p>
              <p className="display mt-2 text-2xl font-semibold leading-tight sm:text-3xl">Your story deserves to be heard, not rushed.</p>
              <p className="mt-3 text-sm text-white/65">In-clinic, online or at home, whichever feels easiest for you.</p>
            </div>
            <a href="#contact" className="btn relative mt-8 !justify-center bg-white text-ink">Book a consultation <span aria-hidden>→</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ FACILITIES ------------------------------ */
const FAC_ICON: Record<string, string> = { "Consultation room": "🩺", "Panchakarma theatre": "🌿", "Steam / Swedana": "♨️", "In-house dispensary": "🪔", "Waiting area": "🛋️", Parking: "🅿️" };
const OFFER_ICON = ["🏡", "💻", "💬", "📦"];
export function Facilities() {
  return (
    <section className="mx-3 mt-3 sm:mx-6 sm:mt-8" aria-labelledby="fac-h">
      <div className="panel px-5 py-9 sm:px-10 sm:py-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="chip text-leaf">Facilities</span>
            <h2 id="fac-h" className="display mt-3 text-3xl font-semibold leading-[1.08] sm:text-4xl">Everything under one <em className="text-leaf not-italic">calm roof</em></h2>
          </div>
          <p className="max-w-xs text-sm text-ink/55">Consult, be treated and collect your medicines in the same place.</p>
        </div>
        <ul className="mt-6 grid grid-cols-3 gap-2.5 sm:mt-8 sm:grid-cols-6 sm:gap-4">
          {facilities.map((f, i) => (
            <li key={f}><Reveal delay={i * 0.05} className="h-full">
              <div className="glass flex h-full flex-col items-center justify-center gap-1.5 rounded-2xl px-2 py-4 text-center transition hover:-translate-y-1 sm:rounded-3xl sm:py-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-sage/40 to-white text-2xl shadow-inner sm:h-14 sm:w-14 sm:text-3xl" aria-hidden>{FAC_ICON[f] ?? "✓"}</span>
                <span className="text-[11px] font-semibold leading-tight sm:text-sm">{f}</span>
              </div>
            </Reveal></li>
          ))}
        </ul>
        <div className="relative mt-6 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-ink via-[#24402c] to-leaf p-5 text-white sm:mt-8 sm:p-8">
          <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-saffron/30 blur-3xl" />
          <p className="relative text-xs font-semibold uppercase tracking-widest text-white/60">Ways to consult</p>
          <ul className="relative mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:grid-cols-4 sm:gap-4">
            {servicesOffered.map((s, i) => (
              <li key={s} className="flex items-center gap-2.5 rounded-2xl bg-white/10 p-3 text-sm font-semibold backdrop-blur sm:flex-col sm:items-start sm:p-4">
                <span className="text-xl sm:text-2xl" aria-hidden>{OFFER_ICON[i]}</span>
                <span className="leading-tight">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
/* ------------------------------ SHOP ------------------------------ */
export function Shop() {
  return (
    <section id="shop" className="panel mx-3 mt-3 sm:mt-8 px-5 py-9 sm:mx-6 sm:px-10 sm:py-16 lg:py-24" aria-labelledby="shop-h">
      <div id="shop-h"><Heading eyebrow="Ayurvedic shop" sub="Prepared and dispensed under the doctor's guidance. Message us to confirm availability, dosage and suitability.">From our <em className="text-saffron not-italic">dispensary</em></Heading></div>
      <div className="mt-7 sm:mt-14 snap grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <Tilt className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_50px_-25px_rgba(40,70,45,.45)]">
              <div className="relative aspect-square overflow-hidden"><Image src={p.image} alt={`${p.name} — ${p.tagline}`} fill sizes="(min-width:1024px) 22vw, 45vw" className="object-cover" /><span className="chip absolute left-3 top-3">{p.form}</span></div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="display text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-ink/60">{p.tagline}</p>
                <p className="mt-3 text-xs text-ink/50">Key: {p.keyIngredients.join(" · ")}</p>
                <a href={wa(`Hello, I would like to enquire about ${p.name}`)} target="_blank" rel="noopener" className="btn btn-dark mt-auto !justify-center !py-2.5 text-sm" style={{ marginTop: "1.25rem" }}>Enquire on WhatsApp</a>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ FAQ ------------------------------ */
export function FAQ() {
  return (
    <section id="faq" className="mx-3 mt-3 sm:mt-8 sm:mx-6" aria-labelledby="faq-h">
      <div className="panel grid gap-10 px-5 py-16 sm:px-10 lg:grid-cols-[1fr_1.4fr] lg:py-24">
        <div id="faq-h"><Heading eyebrow="FAQ" sub="Quick answers to what patients ask most.">Got a <span className="relative inline-block">question?<Squiggle className="absolute -bottom-2 left-0 w-full" /></span></Heading></div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="glass group rounded-2xl p-5">
                <summary className="flex items-center justify-between gap-4 font-semibold">{f.q}<span className="plus text-2xl text-saffron transition-transform">+</span></summary>
                <p className="mt-3 text-ink/65">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT ------------------------------ */
const CONCERNS: [string, string][] = [["Mental health / stress", "🧠"], ["Diabetes", "🩸"], ["Garbhsanskar", "🤰"], ["Beejsanskar", "🌱"], ["Panchakarma", "🌿"], ["General consultation", "🩺"]];
const MODES: [string, string, string][] = [["In clinic", "🏥", "Visit us"], ["Online / video", "💻", "From home"], ["Home visit", "🏡", "We come to you"]];
const TIMES: [string, string, string][] = [["Morning", "🌅", "10 AM – 1 PM"], ["Evening", "🌇", "5 PM – 9 PM"]];

type ChoiceProps = { name: string; value: string; icon: string; label: string; sub?: string; defaultChecked?: boolean; checked?: boolean; disabled?: boolean; onChange?: () => void };
function Choice({ name, value, icon, label, sub, defaultChecked, checked, disabled, onChange }: ChoiceProps) {
  return (
    <label className={`relative block cursor-pointer ${disabled ? "pointer-events-none opacity-40" : ""}`}>
      <input type="radio" name={name} value={value} defaultChecked={defaultChecked} checked={checked} onChange={onChange} disabled={disabled} className="peer sr-only" />
      <span className="flex h-full items-center gap-2 rounded-2xl border-2 border-ink/10 bg-white px-2.5 py-3 text-[13px] font-semibold transition sm:gap-2.5 sm:px-3.5 sm:text-sm hover:border-leaf/40 peer-checked:border-leaf peer-checked:bg-leaf/10 peer-checked:shadow-[0_10px_22px_-12px_rgba(76,122,83,.8)] peer-focus-visible:ring-4 peer-focus-visible:ring-saffron/40">
        <span className="text-xl" aria-hidden>{icon}</span>
        <span className="min-w-0 leading-tight">{label}{sub && <span className="block text-[11px] font-medium text-ink/50">{sub}</span>}</span>
      </span>
    </label>
  );
}

function Step({ n, title }: { n: number; title: string }) {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-xs font-bold text-white">{n}</span>
      <p className="text-sm font-bold uppercase tracking-wider text-ink/70">{title}</p>
    </div>
  );
}

const input = "w-full rounded-2xl border-2 border-ink/10 bg-white py-3 pl-11 pr-4 outline-none transition placeholder:text-ink/30 focus:border-leaf focus:ring-4 focus:ring-leaf/15 user-invalid:border-rose-400 user-invalid:ring-4 user-invalid:ring-rose-100";
function Field({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/50">{label}</span>
      <span className="relative block"><span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg" aria-hidden>{icon}</span>{children}</span>
    </label>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [today, setToday] = useState("");
  const [time, setTime] = useState("Morning");
  const [sunday, setSunday] = useState(false);
  useEffect(() => { const d = new Date(); setToday(new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10)); }, []);
  const onDate = (v: string) => {
    const isSun = !!v && new Date(v + "T00:00").getDay() === 0; // Sunday: evening only
    setSunday(isSun);
    if (isSun) setTime("Evening");
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const msg = `Hello, I would like to book an appointment at ${clinic.name}.\n\nName: ${f.name}\nPhone: +91 ${f.phone}\nConcern: ${f.concern}\nMode: ${f.mode}\nPreferred date: ${f.date || "flexible"}\nPreferred time: ${time}\n${f.note ? `Notes: ${f.note}` : ""}`;
    buzz(HAPTIC.success);
    window.open(wa(msg), "_blank", "noopener");
    setSent(true);
  };
  return (
    <section id="contact" className="panel mx-3 mt-3 sm:mt-8 px-5 py-9 sm:mx-6 sm:px-10 sm:py-16 lg:py-24" aria-labelledby="contact-h">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div id="contact-h"><Heading eyebrow="Book appointment" sub="Share your concern and we will call you within 1 working day to confirm your appointment.">Begin your <em className="text-leaf not-italic">healing</em> journey</Heading></div>
          <address className="mt-8 space-y-4 not-italic">
            <Reveal><a href={`tel:+91${clinic.phone}`} className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1"><span className="text-2xl">📞</span><span><b>{clinic.phoneDisplay}</b><br /><span className="text-sm text-ink/55">Call or WhatsApp</span></span></a></Reveal>
            <Reveal delay={0.05}><a href={`mailto:${clinic.email}`} className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1"><span className="text-2xl">✉️</span><span><b className="break-all">{clinic.email}</b></span></a></Reveal>
            <Reveal delay={0.1}><a href={clinic.mapUrl} target="_blank" rel="noopener" className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1"><span className="text-2xl">📍</span><span><b>{clinic.address.line1}</b><br /><span className="text-sm text-ink/55">{clinic.address.line2}, {clinic.address.line3}</span></span></a></Reveal>
            <Reveal delay={0.15}><div className="glass rounded-2xl p-4"><p className="font-semibold">🕒 Clinic hours</p>{clinic.timings.map((t, i) => <p key={i} className="text-sm text-ink/65">{t.day}: {t.hours}</p>)}</div></Reveal>
          </address>
        </div>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[2rem] bg-white/80 shadow-[0_30px_70px_-35px_rgba(40,70,45,.6)] ring-1 ring-white">
            <div className="relative bg-gradient-to-br from-ink via-[#24402c] to-leaf px-6 py-5 text-white sm:px-8">
              <div aria-hidden className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-saffron/30 blur-2xl" />
              <p className="font-script relative text-3xl text-[#ffd9a0]">Book your visit</p>
              <p className="relative text-sm text-white/70">3 quick steps · we call you back within 1 working day</p>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="grid place-items-center px-6 py-14 text-center sm:px-8" role="status">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 10, delay: 0.1 }} className="grid h-20 w-20 place-items-center rounded-full bg-leaf text-4xl text-white shadow-xl">✓</motion.span>
                  <p className="display mt-5 text-3xl font-semibold">Thank you!</p>
                  <p className="mt-2 max-w-sm text-ink/65">WhatsApp has opened with your details. Just press send. {clinic.postSubmitMessage}</p>
                  <button type="button" onClick={() => setSent(false)} className="btn btn-ghost mt-6">Book another visit</button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={submit} className="space-y-7 p-5 sm:p-8" aria-label="Appointment request">
                  <fieldset>
                    <legend className="sr-only">What brings you in?</legend>
                    <Step n={1} title="What brings you in?" />
                    <div className="flex flex-wrap gap-2 sm:grid sm:grid-cols-2 sm:gap-2.5">
                      {CONCERNS.map(([c, ic], i) => <Choice key={c} name="concern" value={c} icon={ic} label={c} defaultChecked={i === 0} />)}
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className="sr-only">How would you like to consult?</legend>
                    <Step n={2} title="How would you like to consult?" />
                    <div className="grid grid-cols-3 gap-2.5 max-sm:grid-cols-1">
                      {MODES.map(([m, ic, sub], i) => <Choice key={m} name="mode" value={m} icon={ic} label={m} sub={sub} defaultChecked={i === 0} />)}
                    </div>
                  </fieldset>

                  <div>
                    <Step n={3} title="Your details" />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field icon="👤" label="Your name"><input required name="name" autoComplete="name" placeholder="e.g. Anita Patil" className={input} /></Field>
                      <Field icon="📞" label="Mobile number">
                        <input required name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={10} pattern="[6-9][0-9]{9}" title="Enter a 10-digit Indian mobile number" placeholder="10-digit number" className={input + " pl-[4.6rem]"} />
                        <span className="pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 text-sm font-semibold text-ink/50">+91</span>
                      </Field>
                      <Field icon="📅" label="Preferred date"><input name="date" type="date" min={today} onChange={(e) => onDate(e.target.value)} className={input} /></Field>
                      <div>
                        <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/50">Preferred time</span>
                        <div className="grid grid-cols-2 gap-2">
                          {TIMES.map(([t, ic, sub]) => <Choice key={t} name="time" value={t} icon={ic} label={t} sub={sub} checked={time === t} onChange={() => setTime(t)} disabled={sunday && t === "Morning"} />)}
                        </div>
                        {sunday && <p className="mt-1.5 text-xs text-ink/50">Sundays: evening 5 PM – 9 PM only.</p>}
                      </div>
                    </div>
                    <label className="mt-4 block">
                      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/50">Anything we should know? <span className="font-medium normal-case tracking-normal">(optional)</span></span>
                      <textarea name="note" rows={2} placeholder="Symptoms, current medicines, questions…" className="w-full rounded-2xl border-2 border-ink/10 bg-white px-4 py-3 outline-none transition placeholder:text-ink/30 focus:border-leaf focus:ring-4 focus:ring-leaf/15" />
                    </label>
                  </div>

                  <div>
                    <button className="btn btn-dark w-full justify-center !py-4 text-base" type="submit">
                      <span aria-hidden className="text-xl">💬</span>
                      Send request on WhatsApp
                    </button>
                    <p className="mt-3 text-center text-xs text-ink/45">🔒 Opens WhatsApp with your details filled in. No payment, no spam.</p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
