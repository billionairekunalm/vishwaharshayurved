"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { clinic } from "@/data/clinic";
import { gallery, results, type Media } from "@/data/media";
import { Heading, Reveal, Tilt, InstagramIcon } from "./ui";

const P = "/clinic/";

/** Muted looping preview that only plays while on screen. */
function Clip({ id, className = "" }: { id: string; className?: string }) {
  const v = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { e.isIntersecting ? v.current?.play().catch(() => {}) : v.current?.pause(); }, { threshold: 0.35 });
    if (v.current) io.observe(v.current);
    return () => io.disconnect();
  }, []);
  return <video ref={v} className={className} src={`${P}${id}.mp4`} poster={`${P}${id}.jpg`} muted loop playsInline preload="none" />;
}

/* ------------------------------ CLINIC (bento) ------------------------------ */
export function Clinic() {
  const tile = "group relative overflow-hidden rounded-[1.75rem] shadow-[0_20px_50px_-25px_rgba(40,70,45,.5)]";
  const cap = "glass absolute bottom-3 left-3 rounded-full px-4 py-1.5 text-xs font-semibold";
  return (
    <section id="clinic" className="panel mx-3 mt-3 sm:mt-8 px-5 py-9 sm:mx-6 sm:px-10 sm:py-16 lg:py-24" aria-labelledby="clinic-h">
      <div id="clinic-h"><Heading eyebrow="Visit us" sub={`${clinic.address.full}. Easy to find, warm to walk into.`}>Our clinic in <em className="text-leaf not-italic">Chinchwad</em></Heading></div>
      <div className="mt-7 sm:mt-12 grid auto-rows-[140px] grid-cols-2 gap-4 sm:auto-rows-[230px] lg:grid-cols-6">
        <Reveal className="col-span-2 row-span-2 lg:col-span-2">
          <Tilt className={`${tile} h-full`} max={5}>
            <Image src={`${P}storefront-board.jpg`} alt="Vishwaharsh Ayurved clinic entrance with the Healing Body, Mind & Soul signboard" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover object-top transition duration-700 group-hover:scale-105" />
            <span className={cap}>Clinic entrance</span>
          </Tilt>
        </Reveal>
        <Reveal className="col-span-2 lg:col-span-4" delay={0.08}>
          <Tilt className={`${tile} h-full`} max={4}>
            <Image src={`${P}signboard.jpg`} alt="Dawakhana signboard — Dr. Harshada Malge (Patil), BAMS, MD, Pune" fill sizes="(min-width:1024px) 66vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
            <span className={cap}>दवाखाना · Dr. Harshada Malge</span>
          </Tilt>
        </Reveal>
        <Reveal className="col-span-1 lg:col-span-2" delay={0.12}>
          <Tilt className={`${tile} h-full`} max={7}>
            <Image src={`${P}storefront-door.jpg`} alt="Decorated front door of the clinic" fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
            <span className={cap}>Welcome</span>
          </Tilt>
        </Reveal>
        <Reveal className="col-span-1 lg:col-span-2" delay={0.16}>
          <Tilt className={`${tile} h-full`} max={7}>
            <Image src={`${P}consult-room.jpg`} alt="Consultation room with doctor's chair and examination instruments" fill sizes="(min-width:1024px) 33vw, 50vw" className="object-cover object-[50%_65%] transition duration-700 group-hover:scale-105" />
            <span className={cap}>Consultation room</span>
          </Tilt>
        </Reveal>
      </div>
        <Reveal className="mt-4" delay={0.1}>
          <div className="glass flex flex-col justify-center gap-4 rounded-[1.75rem] p-5 sm:p-6 sm:flex-row sm:items-center sm:justify-between">
            <div><p className="display text-2xl font-semibold">{clinic.address.line1}</p><p className="text-sm text-ink/60">{clinic.address.line2}, {clinic.address.line3}</p></div>
            <a href={clinic.mapUrl} target="_blank" rel="noopener" className="btn btn-dark self-start !py-3">Get directions →</a>
          </div>
        </Reveal>
    </section>
  );
}

/* ------------------------------ GALLERY + LIGHTBOX ------------------------------ */
export function Gallery() {
  const [f, setF] = useState<"all" | "img" | "video">("all");
  const [open, setOpen] = useState<Media | null>(null);
  const [more, setMore] = useState(false);
  const list = gallery.filter((m) => f === "all" || m.kind === f);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);
  return (
    <section id="gallery" className="mx-3 mt-3 sm:mt-8 sm:mx-6" aria-labelledby="gal-h">
      <div className="panel px-5 py-9 sm:px-10 sm:py-16 lg:py-24">
        <div id="gal-h"><Heading eyebrow="Inside the clinic" sub="Real therapies, performed in our own Panchakarma theatre. Tap any photo or clip to see it larger.">Ayurveda, <em className="text-saffron not-italic">in practice</em></Heading></div>
        <div className="mt-8 flex gap-2" role="tablist" aria-label="Filter gallery">
          {([["all", "All"], ["img", "Photos"], ["video", "Videos"]] as const).map(([k, l]) => (
            <button key={k} role="tab" aria-selected={f === k} onClick={() => setF(k)} className={`chip !px-5 !py-2 !text-sm transition ${f === k ? "!bg-ink !text-white" : ""}`}>{l}</button>
          ))}
        </div>
        <div className="mt-8 columns-2 gap-4 lg:columns-4 [&>*]:mb-4">
          {list.map((m, i) => (
            <Reveal key={m.id} delay={(i % 4) * 0.06} className={`break-inside-avoid ${!more && i >= 6 ? "max-sm:hidden" : ""}`}>
              <button onClick={() => setOpen(m)} className="group relative block w-full overflow-hidden rounded-3xl bg-white text-left shadow-[0_16px_40px_-22px_rgba(40,70,45,.55)]" style={{ aspectRatio: `${m.w}/${m.h}` }} aria-label={`Open: ${m.caption}`}>
                {m.kind === "video"
                  ? <Clip id={m.id} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  : <Image src={`${P}${m.id}.jpg`} alt={m.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4 pt-10 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100 max-lg:opacity-100">{m.kind === "video" && "▶ "}{m.caption}</span>
              </button>
            </Reveal>
          ))}
        </div>
        {!more && <button onClick={() => setMore(true)} className="btn btn-dark mt-2 w-full justify-center sm:hidden">Show all {list.length} →</button>}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div data-lenis-prevent className="fixed inset-0 z-50 grid place-items-center bg-ink/80 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)} role="dialog" aria-modal aria-label={open.caption}>
            <motion.figure onClick={(e) => e.stopPropagation()} initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }} className="relative max-h-[92vh]">
              {open.kind === "video"
                ? <video src={`${P}${open.id}.mp4`} poster={`${P}${open.id}.jpg`} controls autoPlay playsInline className="max-h-[85vh] max-w-[92vw] rounded-3xl" />
                : <Image src={`${P}${open.id}.jpg`} alt={open.alt} width={open.w} height={open.h} sizes="92vw" className="max-h-[85vh] w-auto rounded-3xl object-contain" />}
              <figcaption className="mt-3 text-center text-sm font-semibold text-white">{open.caption}</figcaption>
              <button onClick={() => setOpen(null)} className="btn btn-ghost absolute -right-2 -top-2 !p-3" aria-label="Close">✕</button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ------------------------------ PATIENT STORIES ------------------------------ */
export function Stories() {
  const v = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => { const el = v.current!; if (el.paused) { el.muted = false; el.play(); } else el.pause(); };
  return (
    <section id="stories" className="panel mx-3 mt-3 sm:mt-8 px-5 py-9 sm:mx-6 sm:px-10 sm:py-16 lg:py-24" aria-labelledby="st-h">
      <div id="st-h"><Heading eyebrow="Patient stories" sub="A patient shares their experience of Ayurvedic care for Mansik vikar (mental health concerns). Press play, with sound on.">In our patients' <em className="text-leaf not-italic">own words</em></Heading></div>
      <div className="mt-7 sm:mt-12 grid items-start gap-6 sm:gap-10 lg:grid-cols-[320px_1fr]">
        <Reveal>
          <Tilt className="relative mx-auto w-[280px] rounded-[2.6rem] bg-ink p-2.5 shadow-2xl sm:w-[300px]" max={6}>
            <div className="relative aspect-[9/16] overflow-hidden rounded-[2.1rem] bg-black">
              <video ref={v} src={`${P}review.mp4`} poster={`${P}review.jpg`} playsInline preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onClick={toggle} className="h-full w-full cursor-pointer object-cover" aria-label="Patient review video" />
              {!playing && (
                <button onClick={toggle} aria-label="Play patient review" className="absolute inset-0 grid place-items-center bg-ink/25">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-white/90 pl-1 text-3xl text-ink shadow-xl transition hover:scale-110">▶</span>
                </button>
              )}
            </div>
          </Tilt>
        </Reveal>
        <div>
          <Reveal><h3 className="display text-2xl font-semibold">Results patients have shared</h3><p className="mt-1 text-sm text-ink/55">Individual results vary. Treatment is always personalised after consultation.</p></Reveal>
          <div className="snap mt-6 grid gap-4 sm:grid-cols-3">
            {results.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.1}>
                <Tilt className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-25px_rgba(40,70,45,.5)]" max={7}>
                  <div className="relative" style={{ aspectRatio: "3/4" }}>
                    <Image src={`${P}${m.id}.jpg`} alt={m.alt} fill sizes="(min-width:1024px) 22vw, (min-width:640px) 30vw, 90vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <p className="p-4 text-sm font-semibold">{m.caption}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <a href="https://instagram.com/mindeaseayurved" target="_blank" rel="noopener" className="btn btn-ghost mt-8"><InstagramIcon className="h-5 w-5 text-[#d62976]" />More stories on Instagram @mindeaseayurved →</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ MAP (always shown; the browser lazy-loads it as you scroll near) ------------------------------ */
export function MapSection() {
  const { lat, lng } = clinic.geo;
  return (
    <section id="map" className="panel mx-3 mt-3 px-5 py-9 sm:mx-6 sm:mt-8 sm:px-10 sm:py-16" aria-labelledby="map-h">
      <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div id="map-h"><Heading eyebrow="Find us" sub={clinic.address.full}>Come <em className="text-saffron not-italic">visit</em> us</Heading></div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={clinic.mapUrl} target="_blank" rel="noopener" className="btn btn-dark">📍 Open in Google Maps ↗</a>
          </div>
        </div>
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#eef0ea] shadow-[0_20px_50px_-25px_rgba(40,70,45,.5)] sm:aspect-[16/10]">
            <iframe title="Vishwaharsh Ayurved on Google Maps" className="absolute inset-0 h-full w-full border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=17&output=embed`} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}