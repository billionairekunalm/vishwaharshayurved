import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/pages";
import { abs, breadcrumbLd } from "@/lib/seo";
import { BookBand, Crumbs, JsonLd, PageShell } from "@/components/PageShell";

const title = "Ayurvedic Treatments in Chinchwad, Pune";
const description = "Diabetes care, anxiety and depression support, Garbhsanskar, Beejsanskar, Panchakarma, leech therapy and online consultation with Dr. Harshada Malge.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { type: "website", url: abs("/services"), title, description, images: [{ url: "/images/hero.jpg" }] },
};

export default function ServicesIndex() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Treatments", path: "/services" }]),
      { "@type": "CollectionPage", name: title, url: abs("/services"), description, isPartOf: { "@id": abs("/#site") } },
      { "@type": "ItemList", itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: abs(`/services/${s.slug}`), name: s.name })) },
    ],
  };
  return (
    <PageShell>
      <JsonLd data={ld} />
      <Crumbs items={[{ name: "Home", path: "/" }, { name: "Treatments" }]} />
      <section className="panel mt-4 px-5 py-9 sm:px-10 sm:py-14">
        <span className="chip text-leaf">Treatments</span>
        <h1 className="display mt-4 text-3xl font-semibold leading-[1.1] sm:text-5xl">Ayurvedic treatments in Chinchwad, Pune</h1>
        <p className="mt-4 max-w-3xl text-ink/70 sm:text-lg">Every plan at Vishwaharsh Ayurved begins with a detailed consultation with Dr. Harshada Malge (MD Ayurveda), so the care is shaped around your constitution, lifestyle and the root cause of your concern.</p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="group block overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_50px_-25px_rgba(40,70,45,.45)] transition hover:-translate-y-1">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:1280px) 30vw, (min-width:640px) 45vw, 92vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-leaf">{s.category}</span>
                  <h2 className="display mt-1 text-2xl font-semibold leading-tight">{s.name}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-ink/65">{s.metaDescription}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-forest">Read the guide →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <BookBand text="Hello, I would like to book an appointment at Vishwaharsh Ayurved" />
    </PageShell>
  );
}
