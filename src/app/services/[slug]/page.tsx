import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, serviceBySlug, services } from "@/data/pages";
import { doctor } from "@/data/clinic";
import { abs, breadcrumbLd, faqLd } from "@/lib/seo";
import { BookBand, Crumbs, FaqList, JsonLd, PageShell, waLink } from "@/components/PageShell";

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = serviceBySlug((await params).slug);
  if (!s) return {};
  const path = `/services/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: path },
    openGraph: { type: "website", url: abs(path), title: s.metaTitle, description: s.metaDescription, images: [{ url: s.image, alt: s.imageAlt }] },
    twitter: { card: "summary_large_image", title: s.metaTitle, description: s.metaDescription, images: [s.image] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = serviceBySlug((await params).slug);
  if (!s) notFound();
  const path = `/services/${s.slug}`;
  const related = s.related.map((r) => serviceBySlug(r)!).filter(Boolean);
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Treatments", path: "/services" }, { name: s.name, path }]),
      {
        "@type": "MedicalWebPage",
        "@id": `${abs(path)}#webpage`,
        url: abs(path),
        name: s.h1,
        description: s.metaDescription,
        inLanguage: "en-IN",
        primaryImageOfPage: abs(s.image),
        about: { "@type": "MedicalTherapy", name: s.name },
        reviewedBy: { "@id": abs("/#doctor") },
        isPartOf: { "@id": abs("/#site") },
      },
      {
        "@type": "Service",
        name: s.name,
        description: s.lead,
        url: abs(path),
        serviceType: s.name,
        provider: { "@id": abs("/#clinic") },
        areaServed: ["Chinchwad", "Pimpri-Chinchwad", "Pune"].map((n) => ({ "@type": "Place", name: n })),
      },
      faqLd(s.faqs),
    ],
  };

  return (
    <PageShell>
      <JsonLd data={ld} />
      <Crumbs items={[{ name: "Home", path: "/" }, { name: "Treatments", path: "/services" }, { name: s.name }]} />

      <article>
        <section className="panel mt-4 overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="px-5 py-9 sm:px-10 sm:py-14">
              <span className="chip text-leaf">{s.category}</span>
              <h1 className="display mt-4 text-3xl font-semibold leading-[1.1] sm:text-5xl">{s.h1}</h1>
              <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">{s.lead}</p>
              <p className="mt-4 text-sm text-ink/55">
                Reviewed by <Link href="/doctor" className="font-semibold text-forest underline-offset-2 hover:underline">Dr. Harshada Malge</Link>, BAMS, MD (Ayurveda) · Reg. {doctor.registration}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={waLink(s.waText)} target="_blank" rel="noopener" className="btn bg-forest text-white shadow-[0_16px_34px_-16px_rgba(20,80,44,.8)]">💬 Book on WhatsApp</a>
                <Link href="/#contact" className="btn btn-ghost">Request a call back</Link>
              </div>
            </div>
            <div className="relative min-h-[260px] lg:min-h-full">
              <Image src={s.image} alt={s.imageAlt} fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="panel mt-4 px-5 py-9 sm:mt-8 sm:px-10 sm:py-14" aria-labelledby="who-h">
          <h2 id="who-h" className="display text-3xl font-semibold sm:text-4xl">Who this is for</h2>
          <p className="mt-4 max-w-3xl text-ink/70">{s.whoFor}</p>
          <ul className="mt-5 flex flex-wrap gap-2">{s.conditions.map((c) => <li key={c} className="chip !px-4 !py-2 !text-sm">{c}</li>)}</ul>
        </section>

        <section className="panel mt-4 px-5 py-9 sm:mt-8 sm:px-10 sm:py-14" aria-labelledby="how-h">
          <h2 id="how-h" className="display text-3xl font-semibold sm:text-4xl">How we approach it</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {s.approach.map((st, i) => (
              <li key={st.t} className="glass rounded-3xl p-6">
                <span className="display text-4xl font-bold text-saffron/60">0{i + 1}</span>
                <h3 className="display mt-1 text-xl font-semibold">{st.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{st.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="panel mt-4 px-5 py-9 sm:mt-8 sm:px-10 sm:py-14" aria-labelledby="exp-h">
          <h2 id="exp-h" className="display text-3xl font-semibold sm:text-4xl">What to expect</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {s.expect.map((e) => <li key={e} className="flex gap-3 rounded-2xl bg-white/70 p-4 text-ink/75"><span aria-hidden className="text-leaf">✓</span>{e}</li>)}
          </ul>
        </section>

        <FaqList faqs={s.faqs} />

        <section className="panel mt-4 px-5 py-9 sm:mt-8 sm:px-10 sm:py-14" aria-labelledby="more-h">
          <h2 id="more-h" className="display text-3xl font-semibold sm:text-4xl">Related treatments</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="glass rounded-3xl p-5 transition hover:-translate-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-leaf">{r.category}</span>
                <p className="display mt-1 text-xl font-semibold">{r.name}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-forest">Read more →</span>
              </Link>
            ))}
          </div>
          <h3 className="mt-8 text-sm font-bold uppercase tracking-widest text-ink/45">We serve patients from</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {areas.map((a) => <li key={a.slug}><Link href={`/areas/${a.slug}`} className="chip !px-4 !py-2 !text-sm transition hover:bg-white">{a.name}</Link></li>)}
          </ul>
        </section>
      </article>

      <BookBand text={s.waText} />
    </PageShell>
  );
}
