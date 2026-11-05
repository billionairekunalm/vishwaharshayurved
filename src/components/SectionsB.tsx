"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
export function Doctor() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <section id="doctor" ref={ref} className="panel mx-3 mt-3 sm:mt-8 overflow-hidden px-5 py-9 sm:mx-6 sm:px-10 sm:py-16 lg:py-24" aria-labelledby="doctor-h">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative">
          <div aria-hidden className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-rose/40 via-saffron/20 to-sage/40" />
          <motion.div style={{ y }} className="relative">
            <Tilt className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl sm:aspect-[4/5]" max={5}>
              <Image src="/clinic/doctor.jpg" alt="Dr. Harshada Malge, Ayurvedic physician at Vishwaharsh Ayurved" fill sizes="(min-width:1024px) 45vw, 90vw" className="object-cover object-[50%_30%]" priority={false} />
            </Tilt>
          </motion.div>
          <div className="glass bob absolute -right-2 bottom-8 rounded-2xl px-5 py-3 sm:-right-6">
            <p className="text-xs text-ink/55">Registration</p>
            <p className="font-bold">{doctor.registration}</p>
          </div>
        </div>
        <div>
          <div id="doctor-h"><Heading eyebrow="Meet the doctor" sub={doctor.philosophy}>Dr. Harshada <em className="text-leaf not-italic">Malge</em></Heading></div>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2">
              {doctor.qualifications.map((q) => <span key={q.abbr} title={q.full} className="chip !bg-ink !text-white">{q.abbr} · {q.full}</span>)}
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal><div className="glass h-full rounded-3xl p-5"><h3 className="font-semibold text-leaf">Specialisations</h3><ul className="mt-2 space-y-1 text-sm text-ink/70">{doctor.specialisations.map((s) => <li key={s}>✦ {s}</li>)}</ul></div></Reveal>
            <Reveal delay={0.1}><div className="glass h-full rounded-3xl p-5"><h3 className="font-semibold text-leaf">Education</h3><ul className="mt-2 space-y-1 text-sm text-ink/70">{doctor.education.map((e) => <li key={e.institute}>🎓 {e.institute} — {e.year}</li>)}<li>🌿 Garbhsanskar certificate course</li></ul></div></Reveal>
          </div>
          <Reveal delay={0.15}>
            <blockquote className="display mt-8 border-l-4 border-saffron pl-5 text-xl italic leading-snug text-ink/80">
              “Trust your body. Respect nature. Choose Ayurveda.”
            </blockquote>
          </Reveal>
        </div>
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
export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const msg = `Hello, I would like to book an appointment at ${clinic.name}.\nName: ${f.name}\nPhone: ${f.phone}\nConcern: ${f.concern}\nPreferred date: ${f.date || "flexible"}\nMode: ${f.mode}\n${f.note || ""}`;
    buzz(HAPTIC.success);
    window.open(wa(msg), "_blank", "noopener");
    setSent(true);
  };
  const field = "w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/15";
  return (
    <section id="contact" className="panel mx-3 mt-3 sm:mt-8 px-5 py-9 sm:mx-6 sm:px-10 sm:py-16 lg:py-24" aria-labelledby="contact-h">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div id="contact-h"><Heading eyebrow="Book appointment" sub="Share your concern and we will call you within 1 working day to confirm your appointment.">Begin your <em className="text-leaf not-italic">healing</em> journey</Heading></div>
          <address className="mt-8 space-y-4 not-italic">
            <Reveal><a href={`tel:+91${clinic.phone}`} className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1"><span className="text-2xl">📞</span><span><b>{clinic.phoneDisplay}</b><br /><span className="text-sm text-ink/55">Call or WhatsApp</span></span></a></Reveal>
            <Reveal delay={0.05}><a href={`mailto:${clinic.email}`} className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1"><span className="text-2xl">✉️</span><span><b>{clinic.email}</b></span></a></Reveal>
            <Reveal delay={0.1}><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address.full)}`} target="_blank" rel="noopener" className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1"><span className="text-2xl">📍</span><span><b>{clinic.address.line1}</b><br /><span className="text-sm text-ink/55">{clinic.address.line2}, {clinic.address.line3}</span></span></a></Reveal>
            <Reveal delay={0.15}><div className="glass rounded-2xl p-4"><p className="font-semibold">🕒 Clinic hours</p>{clinic.timings.map((t, i) => <p key={i} className="text-sm text-ink/65">{t.day}: {t.hours}</p>)}</div></Reveal>
          </address>
        </div>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="space-y-4 rounded-[2rem] bg-white/70 p-6 shadow-xl sm:p-8" aria-label="Appointment request">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold">Your name<input required name="name" autoComplete="name" className={field + " mt-1"} /></label>
              <label className="text-sm font-semibold">Phone<input required name="phone" type="tel" inputMode="tel" autoComplete="tel" className={field + " mt-1"} /></label>
            </div>
            <label className="block text-sm font-semibold">Main concern
              <select name="concern" className={field + " mt-1"}>
                {["Mental health / stress", "Diabetes", "Garbhsanskar", "Beejsanskar", "Panchakarma", "General consultation"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold">Preferred date<input name="date" type="date" className={field + " mt-1"} /></label>
              <label className="text-sm font-semibold">Mode<select name="mode" className={field + " mt-1"}><option>In clinic</option><option>Online / video</option><option>Home visit</option></select></label>
            </div>
            <label className="block text-sm font-semibold">Anything we should know?<textarea name="note" rows={2} className={field + " mt-1"} /></label>
            <button className="btn btn-dark w-full justify-center" type="submit">Send on WhatsApp →</button>
            {sent && <p role="status" className="text-center text-sm text-leaf">Opening WhatsApp — {clinic.postSubmitMessage}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */
export function Footer() {
  return (
    <footer className="mx-3 mb-3 mt-8 rounded-[2.25rem] bg-ink px-6 py-10 text-white max-sm:pb-28 sm:py-14 sm:mx-6 sm:px-10">
      <div className="grid gap-10 md:grid-cols-3">
        <div><div className="mb-3 grid h-16 w-16 place-items-center rounded-2xl bg-white"><Image src="/logo.png" alt="" width={48} height={48} className="h-12 w-12 object-contain" /></div><p className="display text-3xl font-semibold">{clinic.name}</p><p lang="mr" className="mt-1 text-white/60">{clinic.nameDevanagari}</p><p className="mt-4 max-w-xs text-sm text-white/60">{clinic.tagline}. Personalised Ayurveda in Chinchwad, Pimpri-Chinchwad.</p></div>
        <div className="text-sm text-white/70"><p className="mb-3 font-semibold text-white">Visit</p><p>{clinic.address.full}</p><p className="mt-3">{clinic.phoneDisplay}</p></div>
        <div className="text-sm text-white/70"><p className="mb-3 font-semibold text-white">Follow</p>{clinic.social.instagram.map((h) => <a key={h} className="block hover:text-white" href={`https://instagram.com/${h.slice(1)}`} target="_blank" rel="noopener">Instagram {h}</a>)}</div>
      </div>
      <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">© {new Date().getFullYear()} {clinic.name}. Ayurvedic care is personalised after consultation and is not a substitute for emergency medical care.</p>
    </footer>
  );
}

/* ------------------------------ MOBILE ACTION BAR ------------------------------ */
export function MobileBar() {
  const a = "flex flex-1 items-center justify-center gap-1.5 rounded-full py-3 text-sm font-semibold";
  return (
    <nav aria-label="Quick actions" className="glass fixed inset-x-3 bottom-3 z-40 flex gap-2 rounded-full p-1.5 sm:hidden">
      <a href={`tel:+91${clinic.phone}`} className={`${a} bg-white`}>📞 Call</a>
      <a href={wa(clinic.whatsappPrefill)} target="_blank" rel="noopener" className={`${a} bg-white`}>💬 WhatsApp</a>
      <a href="#contact" className={`${a} bg-ink text-white`}>Book</a>
    </nav>
  );
}
