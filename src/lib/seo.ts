// Single source for the site address. Set NEXT_PUBLIC_SITE_URL (e.g. https://vishwaharshayurved.com) in production.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const abs = (path: string) => `${SITE_URL}${path}`;

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});
