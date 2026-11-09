import Link from "next/link";
import Image from "next/image";
import { clinic } from "@/data/clinic";
import { areas, services, type Faq } from "@/data/pages";
import { Footer, MobileBar } from "./SiteFooter";

const wa = (t: string) => `https://wa.me/91${clinic.whatsapp}?text=${encodeURIComponent(t)}`;

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function Header() {
  const drop = "invisible absolute left-0 top-full z-50 w-64 translate-y-1 rounded-2xl bg-white p-2 opacity-0 shadow-xl ring-1 ring-black/5 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100";
  const item = "block rounded-xl px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-mist hover:text-forest";
  return (
    <header className="panel relative z-30 mx-3 mt-3 sm:mx-6 sm:mt-5">
      <nav aria-label="Main" className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${clinic.name} home`}>
          <Image src="/logo.png" alt="" width={96} height={96} priority className="h-11 w-11 object-contain" />
          <span className="leading-none">
            <span className="display block text-xl font-semibold sm:text-2xl">Vishwaharsh</span>
            <span className="mt-1 flex items-center gap-2 text-[9px] font-semibold tracking-[0.42em] text-forest"><i className="h-px w-4 bg-forest/50" />AYURVED<i className="h-px w-4 bg-forest/50" /></span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 text-[15px] font-medium text-ink/80 lg:flex">
          <li><Link className="transition hover:text-forest" href="/">Home</Link></li>
          <li className="group relative">
            <Link className="inline-flex items-center gap-1 transition hover:text-forest" href="/services">Treatments <span aria-hidden className="text-xs">▾</span></Link>
            <ul className={drop}>{services.map((s) => <li key={s.slug}><Link className={item} href={`/services/${s.slug}`}>{s.navLabel}</Link></li>)}</ul>
          </li>
          <li className="group relative">
            <Link className="inline-flex items-center gap-1 transition hover:text-forest" href="/areas">Areas <span aria-hidden className="text-xs">▾</span></Link>
            <ul className={drop}>{areas.map((a) => <li key={a.slug}><Link className={item} href={`/areas/${a.slug}`}>{a.name}</Link></li>)}</ul>
          </li>
          <li><Link className="transition hover:text-forest" href="/doctor">Doctor</Link></li>
          <li><Link className="transition hover:text-forest" href="/#contact">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/#contact" className="btn hidden bg-forest !py-2.5 text-sm text-white shadow-[0_14px_30px_-14px_rgba(20,80,44,.7)] sm:inline-flex">Book Appointment →</Link>
          <details className="group relative lg:hidden">
            <summary className="btn btn-ghost !p-3" aria-label="Menu">
              <span className="relative block h-0.5 w-5 bg-ink before:absolute before:h-0.5 before:w-5 before:-translate-y-1.5 before:bg-ink after:absolute after:h-0.5 after:w-5 after:translate-y-1.5 after:bg-ink" />
            </summary>
            <div className="glass absolute right-0 top-full z-50 mt-3 max-h-[70vh] w-72 overflow-y-auto rounded-3xl p-3">
              <Link className={item} href="/">Home</Link>
              <p className="px-3 pt-2 text-[10px] font-bold uppercase tracking-widest text-ink/40">Treatments</p>
              {services.map((s) => <Link key={s.slug} className={item} href={`/services/${s.slug}`}>{s.navLabel}</Link>)}
              <p className="px-3 pt-2 text-[10px] font-bold uppercase tracking-widest text-ink/40">Areas</p>
              {areas.map((a) => <Link key={a.slug} className={item} href={`/areas/${a.slug}`}>{a.name}</Link>)}
              <Link className={item} href="/doctor">Doctor</Link>
              <Link className={item} href="/#contact">Contact</Link>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="mx-3 sm:mx-6">{children}</main>
      <Footer />
      <MobileBar />
    </>
  );
}

export function Crumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-2 pt-6 text-sm text-ink/55 sm:pt-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {it.path ? <Link href={it.path} className="transition hover:text-forest">{it.name}</Link> : <span aria-current="page" className="font-medium text-ink/80">{it.name}</span>}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqList({ title = "Frequently asked questions", faqs }: { title?: string; faqs: Faq[] }) {
  return (
    <section aria-labelledby="faq-h" className="panel mt-4 px-5 py-9 sm:mt-8 sm:px-10 sm:py-14">
      <h2 id="faq-h" className="display text-3xl font-semibold sm:text-4xl">{title}</h2>
      <div className="mt-6 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="glass group rounded-2xl p-5">
            <summary className="flex items-center justify-between gap-4 font-semibold">{f.q}<span className="plus text-2xl text-saffron transition-transform">+</span></summary>
            <p className="mt-3 text-ink/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function BookBand({ text, title = "Ready to begin?" }: { text: string; title?: string }) {
  return (
    <section className="relative mt-4 overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-[#24402c] to-leaf p-7 text-white sm:mt-8 sm:p-10">
      <div aria-hidden className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-saffron/30 blur-3xl" />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-script text-4xl text-[#ffd9a0]">{title}</p>
          <p className="mt-1 max-w-md text-white/75">Book an in-clinic or online consultation with Dr. Harshada Malge. We call within 1 working day to confirm.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={wa(text)} target="_blank" rel="noopener" className="btn bg-white text-ink">💬 Book on WhatsApp</a>
          <a href={`tel:+91${clinic.phone}`} className="btn border border-white/40 text-white hover:bg-white/10">📞 {clinic.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}

export const waLink = wa;
