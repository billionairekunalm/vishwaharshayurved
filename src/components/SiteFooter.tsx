// Server component (no client JS): shared by the home page and every SEO page.
import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/data/clinic";
import { areas, services } from "@/data/pages";

const wa = (t: string) => `https://wa.me/91${clinic.whatsapp}?text=${encodeURIComponent(t)}`;

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5.5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ------------------------------ FOOTER ------------------------------ */
// One markup for all screens. On phones it is compact (inline link lists, icon-only Instagram, no tagline);
// from "sm"/"md" up it expands to the roomy layout. Every link stays in the page for search engines.
export function Footer() {
  const head = "mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-white sm:mb-3 sm:text-sm sm:normal-case sm:tracking-normal";
  const links = "flex flex-wrap gap-x-3 gap-y-1 text-[13px] sm:block sm:space-y-1.5 sm:text-sm";
  return (
    <footer className="mx-3 mb-3 mt-4 rounded-[2rem] bg-ink px-5 py-6 text-white max-sm:pb-24 sm:mx-6 sm:mt-8 sm:rounded-[2.25rem] sm:px-10 sm:py-14">
      <div className="grid gap-5 md:grid-cols-3 md:gap-10">
        <div className="flex items-center gap-3 md:block">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white md:mb-3 md:h-16 md:w-16 md:rounded-2xl"><Image src="/logo.png" alt="" width={96} height={96} className="h-8 w-8 object-contain md:h-12 md:w-12" /></div>
          <div>
            <p className="display text-xl font-semibold leading-tight md:text-3xl">{clinic.name}</p>
            <p lang="mr" className="text-xs text-white/60 md:mt-1 md:text-base">{clinic.nameDevanagari}</p>
            <p className="mt-4 hidden max-w-xs text-sm text-white/60 md:block">{clinic.tagline}. Personalised Ayurveda in Chinchwad, Pimpri-Chinchwad.</p>
          </div>
        </div>
        <div className="text-[13px] leading-snug text-white/70 sm:text-sm">
          <p className={head + " max-md:hidden"}>Visit</p>
          <p>{clinic.address.full}</p>
          <p className="mt-1.5 md:mt-3"><a href={`tel:+91${clinic.phone}`} className="font-semibold text-white">{clinic.phoneDisplay}</a></p>
        </div>
        <div className="text-sm text-white/70">
          <p className={head + " max-md:hidden"}>Follow</p>
          <div className="flex gap-2 md:block">
            {clinic.social.instagram.map((h) => (
              <a key={h} className="group flex items-center gap-2.5 hover:text-white md:mb-2" href={`https://instagram.com/${h.slice(1)}`} target="_blank" rel="noopener" aria-label={`Instagram ${h}`}>
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white transition group-hover:scale-110 md:h-8 md:w-8"><InstagramGlyph /></span>
                <span className="hidden md:inline">{h}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav aria-label="Site links" className="mt-5 grid gap-4 border-t border-white/10 pt-4 text-white/70 sm:mt-10 sm:grid-cols-3 sm:gap-8 sm:pt-8">
        <div>
          <p className={head}>Treatments</p>
          <ul className={links}>{services.map((s) => <li key={s.slug}><Link className="hover:text-white" href={`/services/${s.slug}`}>{s.navLabel}</Link></li>)}</ul>
        </div>
        <div>
          <p className={head}>Areas we serve</p>
          <ul className={links}>{areas.map((a) => <li key={a.slug}><Link className="hover:text-white" href={`/areas/${a.slug}`}><span className="sm:hidden">{a.name}</span><span className="max-sm:hidden">Ayurvedic doctor in {a.name}</span></Link></li>)}</ul>
        </div>
        <div>
          <p className={head}>Explore</p>
          <ul className={links}>
            <li><Link className="hover:text-white" href="/doctor">Dr. Harshada Malge</Link></li>
            <li><Link className="hover:text-white" href="/services">All treatments</Link></li>
            <li><Link className="hover:text-white" href="/areas">All areas</Link></li>
            <li><Link className="hover:text-white" href="/#contact">Book an appointment</Link></li>
          </ul>
        </div>
      </nav>

      <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
        <p className="text-[11px] leading-snug text-white/40 sm:text-xs">© {new Date().getFullYear()} {clinic.name}. <span className="max-sm:hidden">Ayurvedic care is personalised after consultation and is not a substitute for emergency medical care.</span><span className="sm:hidden">Not a substitute for emergency medical care.</span></p>
        <a
          href="https://intellobyte.com"
          target="_blank"
          rel="noopener"
          title="Intellobyte builds websites like this one. Visit intellobyte.com"
          className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] text-white/70 transition hover:border-white/40 hover:bg-white/10 hover:text-white sm:self-auto sm:px-4 sm:py-2 sm:text-xs"
        >
          <span aria-hidden className="text-saffron transition group-hover:rotate-12">✦</span>
          <span>Website made by <b className="font-semibold text-white">Intellobyte</b></span>
          <span aria-hidden className="transition group-hover:translate-x-0.5">↗</span>
        </a>
      </div>
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
      <a href="/#contact" className={`${a} bg-ink text-white`}>Book</a>
    </nav>
  );
}
