import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areaBySlug, areas, serviceBySlug } from "@/data/pages";
import { clinic } from "@/data/clinic";
import { abs, breadcrumbLd, faqLd } from "@/lib/seo";
import { BookBand, Crumbs, FaqList, JsonLd, PageShell, waLink } from "@/components/PageShell";

export const dynamicParams = false;
export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = areaBySlug((await params).slug);
  if (!a) return {};
  const path = `/areas/${a.slug}`;
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: a.keywords,
    alternates: { canonical: path },
    openGraph: { type: "website", url: abs(path), title: a.metaTitle, description: a.metaDescription, images: [{ url: "/clinic/storefront-board.jpg" }] },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const a = areaBySlug((await params).slug);
  if (!a) notFound();
  const path = `/areas/${a.slug}`;
  const popular = a.popular.map((p) => serviceBySlug(p)!).filter(Boolean);
  const others = areas.filter((x) => x.slug !== a.slug);
  const wa = `Hello, I am from ${a.name} and would like to book an appointment at Vishwaharsh Ayurved`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Areas we serve", path: "/areas" }, { name: a.name, path }]),
      {
        "@type": "WebPage",
        "@id": `${abs(path)}#webpage`,
        url: abs(path),
        name: a.h1,
        description: a.metaDescription,
        inLanguage: "en-IN",
        about: { "@id": abs("/#clinic") },
        isPartOf: { "@id": abs("/#site") },
      },
      { "@type": "MedicalClinic", "@id": abs("/#clinic"), areaServed: { "@type": "Place", name: a.name } },
      faqLd(a.faqs),
    ],
  };

  return (
    <PageShell>
      <JsonLd data={ld} />
      <Crumbs items={[{ name: "Home", path: "/" }, { name: "Areas we serve", path: "/areas" }, { name: a.name }]} />

      <article>
        <section className="panel mt-4 px-5 py-9 sm:px-10 sm:py-14">
          <span className="chip text-leaf">📍 {a.name}</span>
          <h1 className="display mt-4 max-w-3xl text-3xl font-semibold leading-[1.1] sm:text-5xl">{a.h1}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink/70 sm:text-lg">{a.lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={waLink(wa)} target="_blank" rel="noopener" className="btn bg-forest text-white shadow-[0_16px_34px_-16px_rgba(20,80,44,.8)]">💬 Book on WhatsApp</a>
            <a href={clinic.mapUrl} target="_blank" rel="noopener" className="btn btn-ghost">📍 Get directions</a>
          </div>
        </section>

        <div className="mt-4 grid gap-4 sm:mt-8 sm:gap-8 lg:grid-cols-2">
          <section className="panel px-5 py-9 sm:px-8 sm:py-12" aria-labelledby="reach-h">
            <h2 id="reach-h" className="display text-2xl font-semibold sm:text-3xl">Getting to the clinic from {a.name}</h2>
            <ul className="mt-5 space-y-3">{a.reach.map((r) => <li key={r} className="flex gap-3 text-ink/75"><span aria-hidden className="text-leaf">➜</span>{r}</li>)}</ul>
            <p className="mt-5 rounded-2xl bg-white/70 p-4 text-sm text-ink/65"><b>Clinic address:</b> {clinic.address.full}. Travel times are approximate and depend on traffic.</p>
          </section>
          <section className="panel px-5 py-9 sm:px-8 sm:py-12" aria-labelledby="why-h">
            <h2 id="why-h" className="display text-2xl font-semibold sm:text-3xl">Why patients from {a.name} choose us</h2>
            <ul className="mt-5 space-y-3">{a.why.map((r) => <li key={r} className="flex gap-3 text-ink/75"><span aria-hidden className="text-saffron">✦</span>{r}</li>)}</ul>
          </section>
        </div>

        <section className="panel mt-4 px-5 py-9 sm:mt-8 sm:px-10 sm:py-14" aria-labelledby="pop-h">
          <h2 id="pop-h" className="display text-3xl font-semibold sm:text-4xl">Popular treatments for patients from {a.name}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {popular.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="glass rounded-3xl p-6 transition hover:-translate-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-leaf">{s.category}</span>
                <p className="display mt-1 text-xl font-semibold">{s.name}</p>
                <p className="mt-2 line-clamp-2 text-sm text-ink/65">{s.metaDescription}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-forest">Read more →</span>
              </Link>
            ))}
          </div>
        </section>

        <FaqList title={`Questions from patients in ${a.name}`} faqs={a.faqs} />

        <section className="panel mt-4 px-5 py-9 sm:mt-8 sm:px-10 sm:py-12" aria-labelledby="nearby-h">
          <h2 id="nearby-h" className="text-sm font-bold uppercase tracking-widest text-ink/45">Other areas we serve</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {others.map((o) => <li key={o.slug}><Link href={`/areas/${o.slug}`} className="chip !px-4 !py-2 !text-sm transition hover:bg-white">{o.name}</Link></li>)}
          </ul>
        </section>
      </article>

      <BookBand text={wa} />
    </PageShell>
  );
}
