import type { Metadata } from "next";
import Link from "next/link";
import { areas } from "@/data/pages";
import { clinic } from "@/data/clinic";
import { abs, breadcrumbLd } from "@/lib/seo";
import { BookBand, Crumbs, JsonLd, PageShell } from "@/components/PageShell";

const title = "Areas We Serve in Chinchwad & Pune";
const description = "Vishwaharsh Ayurved serves patients from Chinchwad, Pimpri-Chinchwad, Walhekarwadi, Akurdi, Nigdi, Moshi and Pune, in clinic and online.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/areas" },
  openGraph: { type: "website", url: abs("/areas"), title, description, images: [{ url: "/images/hero.jpg" }] },
};

export default function AreasIndex() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Areas we serve", path: "/areas" }]),
      { "@type": "CollectionPage", name: title, url: abs("/areas"), description, isPartOf: { "@id": abs("/#site") } },
    ],
  };
  return (
    <PageShell>
      <JsonLd data={ld} />
      <Crumbs items={[{ name: "Home", path: "/" }, { name: "Areas we serve" }]} />
      <section className="panel mt-4 px-5 py-9 sm:px-10 sm:py-14">
        <span className="chip text-leaf">Areas we serve</span>
        <h1 className="display mt-4 text-3xl font-semibold leading-[1.1] sm:text-5xl">Ayurvedic care across Chinchwad, Pimpri-Chinchwad and Pune</h1>
        <p className="mt-4 max-w-3xl text-ink/70 sm:text-lg">The clinic is at {clinic.address.full}. Patients visit from across the twin city and Pune, and online consultation with medicine courier reaches anywhere in India.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={`/areas/${a.slug}`} className="glass block h-full rounded-3xl p-6 transition hover:-translate-y-1">
                <span className="text-2xl" aria-hidden>📍</span>
                <h2 className="display mt-1 text-2xl font-semibold">{a.name}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-ink/65">{a.metaDescription}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-forest">See how to reach us →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <BookBand text="Hello, I would like to book an appointment at Vishwaharsh Ayurved" />
    </PageShell>
  );
}
