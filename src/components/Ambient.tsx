"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { buzz, HAPTIC } from "@/lib/haptic";
import { INGREDIENTS, Ingredient, Mandala, Namaste, type Ing } from "./GateArt";

/* Calm Ayurvedic ambience, synthesised live (no audio files, no licensing):
   tanpura drone pattern + bansuri-style flute phrases in Raag Bhoopali (Sa Re Ga Pa Dha) + soft kalimba notes + singing bowls, through a warm echo and reverb. */
let engine: AudioContext | null = null;
function startAmbient(): AudioContext {
  if (engine) return engine; // one engine only (also survives React strict-mode double mount)
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const ctx = new AC();
  engine = ctx;
  const now = () => ctx.currentTime;
  const rand = (a: number, b: number) => a + Math.random() * (b - a);

  // master chain: gentle compressor, slow fade-in
  const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -20; comp.ratio.value = 3; comp.connect(ctx.destination);
  const master = ctx.createGain(); master.gain.setValueAtTime(0, now()); master.gain.linearRampToValueAtTime(0.7, now() + 7); master.connect(comp);

  // lush reverb (generated, darkened) + soft feedback echo
  const rl = ctx.sampleRate * 5.5;
  const ir = ctx.createBuffer(2, rl, ctx.sampleRate);
  for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); let lp = 0; for (let i = 0; i < rl; i++) { lp += ((Math.random() * 2 - 1) - lp) * 0.35; d[i] = lp * Math.pow(1 - i / rl, 2.6); } }
  const rev = ctx.createConvolver(); rev.buffer = ir;
  const wet = ctx.createGain(); wet.gain.value = 0.75; rev.connect(wet); wet.connect(master);
  const dry = ctx.createGain(); dry.gain.value = 0.62; dry.connect(master);
  const echo = ctx.createDelay(2); echo.delayTime.value = 0.62;
  const fb = ctx.createGain(); fb.gain.value = 0.36; const echoLp = ctx.createBiquadFilter(); echoLp.type = "lowpass"; echoLp.frequency.value = 2200;
  echo.connect(echoLp); echoLp.connect(fb); fb.connect(echo); echoLp.connect(rev);
  const bus = ctx.createGain(); bus.connect(dry); bus.connect(rev);
  const send = ctx.createGain(); send.gain.value = 0.5; bus.connect(send); send.connect(echo);

  // breath noise source (shared)
  const nb = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
  { const d = nb.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }

  // ---- warm pad (Sa + Pa), slowly breathing ----
  const padLp = ctx.createBiquadFilter(); padLp.type = "lowpass"; padLp.frequency.value = 520; padLp.connect(bus);
  const padLfo = ctx.createOscillator(); padLfo.frequency.value = 0.045; const padLfoG = ctx.createGain(); padLfoG.gain.value = 180; padLfo.connect(padLfoG); padLfoG.connect(padLp.frequency); padLfo.start();
  ([[65.41, 0.1], [130.81, 0.1], [196, 0.07], [261.63, 0.045], [329.63, 0.02]] as const).forEach(([f, g]) => {
    for (const dt of [-6, 6]) {
      const o = ctx.createOscillator(); o.type = "triangle"; o.frequency.value = f; o.detune.value = dt;
      const gn = ctx.createGain(); gn.gain.value = g;
      const l = ctx.createOscillator(); l.frequency.value = rand(0.03, 0.11); const lg = ctx.createGain(); lg.gain.value = g * 0.5; l.connect(lg); lg.connect(gn.gain);
      o.connect(gn); gn.connect(padLp); o.start(); l.start();
    }
  });

  // ---- tanpura: Pa - Sa - Sa - low Sa, harmonically rich with a gentle "jivari" shimmer ----
  const re = new Float32Array(26), im = new Float32Array(26);
  for (let n = 1; n < 26; n++) im[n] = (1 / Math.pow(n, 1.15)) * (n % 7 === 0 ? 1.6 : 1);
  const tWave = ctx.createPeriodicWave(re, im);
  const tanpura = (f: number, when: number) => {
    const o = ctx.createOscillator(); o.setPeriodicWave(tWave); o.frequency.value = f;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.Q.value = 1.2;
    lp.frequency.setValueAtTime(3200, when); lp.frequency.exponentialRampToValueAtTime(500, when + 3.8);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, when); g.gain.exponentialRampToValueAtTime(0.17, when + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, when + 5);
    o.connect(lp); lp.connect(g); g.connect(bus); o.start(when); o.stop(when + 5.2);
  };
  const tSeq = [196, 261.63, 261.63, 130.81]; let ti = 0;
  const tLoop = () => { if (ctx.state === "running") tanpura(tSeq[ti++ % 4], now() + 0.05); setTimeout(tLoop, 1500 + rand(-60, 90)); };

  // ---- bansuri flute ----
  const flute = (f: number, when: number, dur: number, vol = 0.1) => {
    const o = ctx.createOscillator(); o.type = "sine"; o.frequency.setValueAtTime(f * 0.97, when); o.frequency.linearRampToValueAtTime(f, when + 0.14);
    const o2 = ctx.createOscillator(); o2.type = "triangle"; o2.frequency.value = f * 2;
    const g2 = ctx.createGain(); g2.gain.value = 0.1;
    const vib = ctx.createOscillator(); vib.frequency.value = 5 + Math.random() * 0.8;
    const vg = ctx.createGain(); vg.gain.setValueAtTime(0, when); vg.gain.linearRampToValueAtTime(f * 0.007, when + dur * 0.7);
    vib.connect(vg); vg.connect(o.frequency);
    const env = ctx.createGain(); env.gain.setValueAtTime(0.0001, when); env.gain.exponentialRampToValueAtTime(vol, when + 0.2); env.gain.setValueAtTime(vol, when + dur); env.gain.exponentialRampToValueAtTime(0.0001, when + dur + 0.9);
    const tone = ctx.createBiquadFilter(); tone.type = "lowpass"; tone.frequency.value = 3200;
    o.connect(env); o2.connect(g2); g2.connect(env);
    const br = ctx.createBufferSource(); br.buffer = nb; br.loop = true;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = f * 2; bp.Q.value = 1.6;
    const bg = ctx.createGain(); bg.gain.value = 0.55; br.connect(bp); bp.connect(bg); bg.connect(env);
    env.connect(tone); tone.connect(bus);
    const end = when + dur + 1;
    [o, o2, vib, br].forEach((n) => { n.start(when); n.stop(end); });
  };
  const bhoopali = [392, 440, 523.25, 587.33, 659.25, 784, 880]; // G A C D E G A  (Pa Dha Sa Re Ga Pa Dha)
  const phrase = () => {
    if (ctx.state !== "running") { setTimeout(phrase, 1000); return; } // browser still blocking sound: wait, never queue notes
    let t = now() + 0.2, i = Math.floor(rand(2, 5));
    const len = Math.floor(rand(4, 8));
    for (let n = 0; n < len; n++) {
      const last = n === len - 1;
      const dur = last ? rand(2.8, 4.2) : rand(0.9, 2.2);
      if (last) i = 2; // resolve home to Sa
      flute(bhoopali[i], t, dur, 0.085 + Math.random() * 0.03);
      t += dur * rand(0.78, 0.95);
      i = Math.max(0, Math.min(bhoopali.length - 1, i + (Math.random() < 0.6 ? (Math.random() < 0.5 ? -1 : 1) : (Math.random() < 0.5 ? -2 : 2))));
    }
    setTimeout(phrase, (t - now()) * 1000 + rand(6000, 12000)); // long rests keep it spacious
  };

  // ---- kalimba-style soft notes ----
  const kal = [261.63, 293.66, 329.63, 392, 440, 523.25, 587.33, 659.25];
  const note = (f: number, when: number, vol = 0.07) => {
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, when); g.gain.exponentialRampToValueAtTime(vol, when + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, when + 3.4); g.connect(bus);
    ([[1, "sine", 1], [4.02, "sine", 0.18], [2, "triangle", 0.2]] as const).forEach(([m, type, a]) => { const o = ctx.createOscillator(); o.type = type; o.frequency.value = f * m; const og = ctx.createGain(); og.gain.value = a; o.connect(og); og.connect(g); o.start(when); o.stop(when + 3.5); });
  };
  let ki = 3;
  const kLoop = () => {
    if (ctx.state !== "running") { setTimeout(kLoop, 1000); return; }
    const t = now() + 0.05, arp = Math.random() < 0.4 ? 4 : 1;
    for (let i = 0; i < arp; i++) { ki = Math.max(0, Math.min(kal.length - 1, ki + (arp > 1 ? 1 : Math.round(rand(-2, 2))))); note(kal[ki], t + i * 0.45); }
    if (ki > 5) ki = 2;
    setTimeout(kLoop, rand(5000, 9500));
  };

  // ---- singing bowl ----
  const bowl = (when: number) => {
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, when); g.gain.exponentialRampToValueAtTime(0.09, when + 0.7); g.gain.exponentialRampToValueAtTime(0.0001, when + 12); g.connect(bus);
    ([[1, 1], [2.01, 0.4], [2.99, 0.2], [4.2, 0.1]] as const).forEach(([m, a]) => { const o = ctx.createOscillator(); o.type = "sine"; o.frequency.value = 196 * m + (m === 1 ? 0.7 : 0); const og = ctx.createGain(); og.gain.value = a; o.connect(og); og.connect(g); o.start(when); o.stop(when + 12.2); });
  };
  const bLoop = () => { if (ctx.state === "running") bowl(now() + 0.1); setTimeout(bLoop, rand(26000, 38000)); };

  bowl(now() + 0.4);
  setTimeout(tLoop, 300);
  setTimeout(phrase, 5000);
  setTimeout(kLoop, 3500);
  setTimeout(bLoop, 30000);

  document.addEventListener("visibilitychange", () => (document.hidden ? ctx.suspend() : ctx.resume()));
  return ctx;
}
const GREETINGS = ["नमस्ते", "नमस्कार", "Namaste", "स्वागत"];
const BG: { n: Ing; x: number; y: number; s: number; d: number }[] = [
  { n: "Tulsi", x: 6, y: 10, s: 54, d: 0 }, { n: "Padma", x: 84, y: 8, s: 64, d: 1 }, { n: "Haldi", x: 4, y: 40, s: 50, d: 2 },
  { n: "Deepam", x: 90, y: 38, s: 52, d: 0.5 }, { n: "Neem", x: 8, y: 70, s: 58, d: 1.5 }, { n: "Kesar", x: 86, y: 68, s: 52, d: 2.5 },
  { n: "Amla", x: 22, y: 86, s: 48, d: 1 }, { n: "Dalchini", x: 72, y: 88, s: 52, d: 0 }, { n: "Padma", x: 24, y: 4, s: 40, d: 2 }, { n: "Tulsi", x: 70, y: 3, s: 40, d: 1.2 },
];
const wood = "repeating-linear-gradient(90deg,rgba(0,0,0,.08) 0 2px,transparent 2px 11px),repeating-linear-gradient(90deg,rgba(255,220,160,.05) 0 1px,transparent 1px 23px),linear-gradient(180deg,#7d4b27,#5a3218 55%,#6d4020)";

function Door({ side, open }: { side: "left" | "right"; open: boolean }) {
  const left = side === "left";
  const gold = "border-[3px] border-[#d9a93e]/60";
  return (
    <motion.div
      className="absolute top-0 h-full w-1/2 overflow-hidden"
      style={{ [left ? "left" : "right"]: 0, transformOrigin: left ? "left center" : "right center", background: wood, boxShadow: "inset 0 0 80px rgba(0,0,0,.55)", backfaceVisibility: "hidden", willChange: "transform" }}
      animate={{ rotateY: open ? (left ? 112 : -112) : 0 }}
      transition={{ duration: 3, delay: 0.5, ease: [0.45, 0.05, 0.2, 1] }}
    >
      <motion.div aria-hidden className="absolute inset-0 z-10 bg-black" initial={{ opacity: 0 }} animate={{ opacity: open ? 0.6 : 0 }} transition={{ duration: 3, delay: 0.5, ease: "easeIn" }} />
      <div aria-hidden className={`absolute inset-x-[9%] top-[5%] bottom-[53%] rounded-[1.5rem] ${gold}`} style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,.45), 0 0 0 2px rgba(0,0,0,.25)" }} />
      <div aria-hidden className={`absolute inset-x-[9%] top-[53%] bottom-[5%] rounded-[1.5rem] ${gold}`} style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,.45), 0 0 0 2px rgba(0,0,0,.25)" }} />
      {/* brass studs along the seam */}
      <div aria-hidden className={`absolute top-0 h-full w-4 ${left ? "right-1" : "left-1"}`} style={{ background: "radial-gradient(circle,#ffe9a8 0 32%,#a9781f 58%,transparent 62%) 0 0/100% 34px repeat-y" }} />
      {/* half mandala on each door */}
      <div aria-hidden className="absolute top-1/2 aspect-square -translate-y-1/2" style={{ width: "min(110vh, 170%)", [left ? "right" : "left"]: 0, transform: `translate(${left ? "50%" : "-50%"},-50%)` }}>
        <Mandala className="h-full w-full drop-shadow-[0_4px_10px_rgba(0,0,0,.5)]" />
      </div>
    </motion.div>
  );
}

export default function Ambient() {
  const [phase, setPhase] = useState<"closed" | "opening" | "gone">("closed");
  const [g, setG] = useState(0);
  useEffect(() => { const t = setInterval(() => setG((v) => (v + 1) % GREETINGS.length), 1800); return () => clearInterval(t); }, []);
  useEffect(() => {
    document.documentElement.style.overflow = phase === "gone" ? "" : "hidden";
    return () => { document.documentElement.style.overflow = ""; };
  }, [phase]);

  const sound = () => {
    try { const c = startAmbient(); if (c.state !== "running") c.resume().catch(() => {}); } catch { /* audio unsupported: site still works */ }
  };
  const opened = useRef(false);
  const openDoors = (withSound: boolean) => {
    if (withSound) sound();
    if (opened.current) return;
    opened.current = true;
    setPhase("opening");
    setTimeout(() => buzz(HAPTIC.doors), 500); // rumble in time with the swing
    setTimeout(() => { (window as unknown as { __doorsOpen?: boolean }).__doorsOpen = true; window.dispatchEvent(new Event("doors-open")); buzz(HAPTIC.bloom); }, 2300);
    setTimeout(() => setPhase("gone"), 4200);
  };
  // Not tapped within 4.5s → doors open on their own. Browsers only allow sound after a touch,
  // so the music starts at the visitor's first tap / key press instead.
  useEffect(() => {
    const t = setTimeout(() => openDoors(false), 4500);
    // Try to start music the moment the page opens. If the browser blocks it (most do until a touch),
    // retry on the visitor's first touch / tap / key press, then stop listening once it is playing.
    sound();
    const ev = ["pointerdown", "touchend", "click", "keydown"] as const;
    const unlock = () => {
      try {
        const c = startAmbient();
        c.resume().then(() => { if (c.state === "running") ev.forEach((e) => window.removeEventListener(e, unlock)); }).catch(() => {});
      } catch { /* ignore */ }
    };
    ev.forEach((e) => window.addEventListener(e, unlock));
    return () => { clearTimeout(t); ev.forEach((e) => window.removeEventListener(e, unlock)); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const enter = () => openDoors(true);  const open = phase === "opening";
  if (phase === "gone") return null;
  return (
    <div id="gate" role="dialog" aria-modal aria-label="Welcome to Vishwaharsh Ayurved" className="fixed inset-0 z-[100] overflow-hidden" style={{ perspective: "1800px", pointerEvents: open ? "none" : "auto" }}>
      <noscript><style>{`#gate{display:none}`}</style></noscript>
      <Door side="left" open={open} />
      <Door side="right" open={open} />
      {/* seam of light */}
      <motion.div aria-hidden className="absolute inset-y-0 left-1/2 w-[260px] -ml-[130px]" style={{ background: "linear-gradient(90deg,transparent,rgba(255,233,168,.95),transparent)", willChange: "transform, opacity" }} initial={{ opacity: 0.2, scaleX: 0.03 }} animate={open ? { opacity: [0.2, 0.85, 0], scaleX: [0.03, 0.7, 1.6] } : { opacity: 0.2, scaleX: 0.03 }} transition={{ duration: 3, delay: 0.5, ease: "easeOut" }} />

      {/* ingredients floating on the doors */}
      <motion.div aria-hidden className="absolute inset-0" animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.7 }}>
        {BG.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.1, type: "spring", damping: 12 }}
            className="drift absolute drop-shadow-[0_6px_8px_rgba(0,0,0,.45)]" style={{ left: `${b.x}%`, top: `${b.y}%`, width: b.s, animationDelay: `${b.d}s` }}>
            <Ingredient name={b.n} className="h-full w-full" />
          </motion.div>
        ))}
      </motion.div>

      {/* welcome medallion */}
      <div className="absolute inset-0 grid place-items-center px-3">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.92 }} animate={open ? { opacity: 0, y: -30, scale: 0.9 } : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: open ? 0.9 : 1.2, delay: open ? 0 : 0.2, ease: open ? [0.4, 0, 0.2, 1] : [0.16, 1, 0.3, 1] }}
          className="relative w-[min(92vw,400px)] max-h-[96svh] overflow-hidden bg-[linear-gradient(180deg,#fffaf0,#f6ecd9)] px-6 pb-6 pt-4 text-center shadow-[0_30px_80px_rgba(0,0,0,.55),0_0_0_4px_rgba(217,169,62,.7),0_0_0_9px_rgba(90,50,24,.6)]"
          style={{ borderRadius: "200px 200px 28px 28px" }}
        >
          <div className="relative mx-auto h-[190px] w-[170px] sm:h-[240px] sm:w-[215px]">
            <Namaste className="h-full w-full" />
            <AnimatePresence mode="wait">
              <motion.span key={g} initial={{ opacity: 0, y: 8, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }}
                className="display absolute -right-10 top-0 rounded-2xl rounded-bl-sm bg-white px-3 py-1.5 text-lg font-semibold text-saffron shadow-lg sm:-right-16 sm:text-xl" lang={g === 2 ? "en" : "hi"}>
                🙏 {GREETINGS[g]}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="mt-1 flex items-center justify-center gap-2.5">
            <Image src="/logo.png" alt="" width={56} height={56} priority className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
            <h1 className="display text-2xl font-semibold leading-none sm:text-3xl">Vishwaharsh <span className="text-leaf">Ayurved</span></h1>
          </div>
          <p lang="mr" className="mt-1.5 text-sm text-ink/55">विश्वहर्ष आयुर्वेद</p>
          <p className="mt-1 text-xs text-ink/50">Healing body, mind and soul</p>
          <button autoFocus onClick={enter} className="btn btn-dark mt-4 !px-8">Enter <span aria-hidden>✦</span></button>
          <p className="mt-3 text-[11px] text-ink/45">🔊 Tap Enter for sound · Tulsi · Neem · Haldi · Amla · Kesar</p>
        </motion.div>
      </div>
    </div>
  );
}