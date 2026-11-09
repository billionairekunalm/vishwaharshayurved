import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinic, doctor } from "@/data/clinic";
import { services } from "@/data/pages";
import { abs, breadcrumbLd } from "@/lib/seo";
import { BookBand, Crumbs, JsonLd, PageShell } from "@/components/PageShell";

const title = "Dr. Harshada Malge, Ayurvedic Doctor";
const description = "Dr. Harshada Malge, BAMS, MD (Ayurveda), PGDCP. Registration I-74724-A, 10 years' experience in mental health, diabetes, Garbhsanskar and Panchakarma.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["Dr Harshada Malge", "Ayurvedic doctor Chinchwad", "MD Ayurveda Pune", "Ayurvedic counsellor Pimpri-Chinchwad"],
  alternates: { canonical: "/doctor" },
  openGraph: { type: "profile", url: abs("/doctor"), title, description, images: [{ url: "/clinic/doctor.jpg", alt: "Dr. Harshada Malge" }] },
};

const timeline = [
  { y: "2012", t: "BAMS", d: "RPAM, Purna" },
  { y: "2016", t: "MD (Ayurveda)", d: "Tilak Ayurved Mahavidyalay, Pune" },
  { y: "Experience", t: "PCMC, Moshi", d: "Clinical experience in the Pimpri-Chinchwad area" },
  { y: "Certified", t: "PGDCP and Garbhsanskar", d: "Post Graduate Diploma in Counselling Psychology; certificate course in Garbhsanskar" },
  { y: clinic.establishedYear, t: "Vishwaharsh Ayurved", d: "Her own clinic in Chinchwad" },
];

export default function DoctorPage() {
  const letter = doctor.messageToPatients.split("\n\n");
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Doctor", path: "/doctor" }]),
      {
        "@type": "ProfilePage",
        "@id": `${abs("/doctor")}#webpage`,
        url: abs("/doctor"),
        name: title,
        description,
        inLanguage: "en-IN",
        mainEntity: { "@id": abs("/#doctor") },
        isPartOf: { "@id": abs("/#site") },
      },
      {
        "@type": "Physician",
        "@id": abs("/#doctor"),
        image: abs("/clinic/doctor.jpg"),
        url: abs("/doctor"),
        knowsLanguage: ["mr", "hi", "en"],
        knowsAbout: doctor.specialisations,
      },
    ],
  };
  return (
    <PageShell>
      <JsonLd data={ld} />
      <Crumbs items={[{ name: "Home", path: "/" }, { name: "Doctor" }]} />

      <section className="panel mt-4 overflow-hidden">
        <div className="grid items-center gap-8 px-5 py-9 sm:px-10 sm:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-[5px] border-white shadow-2xl">
            <Image src="/clinic/doctor.jpg" alt="Dr. Harshada Malge, Ayurvedic physician at Vishwaharsh Ayurved, Chinchwad" fill priority sizes="(min-width:1024px) 32vw, 90vw" className="object-cover object-[50%_30%]" />
          </div>
          <div>
            <span className="chip text-leaf">Meet the doctor</span>
            <h1 className="mt-4">
              <span className="font-script block -rotate-2 text-5xl text-saffron sm:text-6xl">Dr.</span>
              <span className="display block text-4xl font-bold leading-[0.95] sm:text-6xl">Harshada Malge</span>
            </h1>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-ink/45">Ayurvedic Physician · Counsellor</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">{doctor.philosophy}</p>
            <dl className="mt-6 grid grid-cols-2 gap-3 text-sm sm:max-w-md">
              <div className="glass rounded-2xl p-4"><dt className="text-ink/50">Registration</dt><dd className="display text-lg font-bold">{doctor.registration}</dd></div>
              <div className="glass rounded-2xl p-4"><dt className="text-ink/50">Experience</dt><dd className="display text-lg font-bold">{doctor.experienceYears}+ years</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="panel mt-4 px-5 py-9 sm:mt-8 sm:px-10 sm:py-14" aria-labelledby="qual-h">
        <h2 id="qual-h" className="display text-3xl font-semibold sm:text-4xl">Qualifications</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {doctor.qualifications.map((q) => (
            <li key={q.abbr} className="rounded-3xl bg-white p-6 text-center shadow-[0_18px_40px_-22px_rgba(40,70,45,.55)] ring-1 ring-ink/5">
              <p className="display bg-gradient-to-br from-leaf to-ink bg-clip-text text-4xl font-bold text-transparent">{q.abbr}</p>
              <p className="mt-1 text-sm text-ink/60">{q.full}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-ink/55">Registration number <b>{doctor.registration}</b>. Consultations in Marathi, Hindi and English.</p>
      </section>

      <section className="panel mt-4 px-5 py-9 sm:mt-8 sm:px-10 sm:py-14" aria-labelledby="spec-h">
        <h2 id="spec-h" className="display text-3xl font-semibold sm:text-4xl">Areas of special interest</h2>
        <p className="mt-3 max-w-2xl text-ink/65">Dr. Malge&apos;s specialisations are psychological diseases, diabetes management, and Beejsanskar and Garbhsanskar.</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="glass block h-full rounded-3xl p-5 transition hover:-translate-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-leaf">{s.category}</span>
                <p className="display mt-1 text-xl font-semibold">{s.name}</p>
                <span className="mt-2 inline-block text-sm font-semibold text-forest">Read more →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel mt-4 px-5 py-9 sm:mt-8 sm:px-10 sm:py-14" aria-labelledby="path-h">
        <h2 id="path-h" className="display text-3xl font-semibold sm:text-4xl">Education and experience</h2>
        <ol className="relative mt-6 border-l-2 border-dashed border-saffron/40 pl-8">
          {timeline.map((t) => (
            <li key={t.t} className="relative pb-7 last:pb-0">
              <span aria-hidden className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full bg-saffron ring-4 ring-cream" />
              <p className="text-xs font-bold uppercase tracking-widest text-saffron">{t.y}</p>
              <p className="display text-xl font-semibold">{t.t}</p>
              <p className="text-sm text-ink/60">{t.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="panel mt-4 px-5 py-9 sm:mt-8 sm:px-10 sm:py-14" aria-labelledby="note-h">
        <h2 id="note-h" className="display text-3xl font-semibold sm:text-4xl">A note to patients</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-lg leading-relaxed text-ink/75">
          {letter.slice(1).map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <p className="font-script mt-4 text-3xl text-ink">Dr. Harshada Malge</p>
      </section>

      <BookBand text="Hello, I would like to book a consultation with Dr. Harshada Malge" />
    </PageShell>
  );
}
