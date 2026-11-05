import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, Caveat, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import { clinic, doctor, faqs, treatments } from "@/data/clinic";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });
const deva = Tiro_Devanagari_Hindi({ subsets: ["devanagari"], weight: "400", variable: "--font-devanagari", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const title = "Vishwaharsh Ayurved | Ayurvedic Doctor in Chinchwad, Pimpri-Chinchwad";
const description =
  "Dr. Harshada Malge (BAMS, MD Ayurveda) — Ayurvedic clinic in Chinchwad, Pune for mental health, diabetes, Garbhsanskar, Beejsanskar & Panchakarma. Book in-clinic or online consultation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Vishwaharsh Ayurved" },
  description,
  keywords: [
    "Ayurvedic doctor Chinchwad", "Ayurveda clinic Pimpri-Chinchwad", "Panchakarma Pune", "Garbhsanskar Pune",
    "Beejsanskar", "Ayurvedic diabetes treatment", "Ayurveda for anxiety and depression", "Dr Harshada Malge",
    "online Ayurveda consultation India", "आयुर्वेद चिंचवड",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: doctor.name }],
  openGraph: {
    type: "website", url: SITE_URL, siteName: clinic.name, title, description, locale: "en_IN",
    images: [{ url: "/images/hero.jpg", width: 1344, height: 768, alt: "Vishwaharsh Ayurved clinic" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/hero.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  other: { "geo.region": "IN-MH", "geo.placename": "Chinchwad, Pimpri-Chinchwad" },
};

export const viewport: Viewport = { themeColor: "#eef0ea", width: "device-width", initialScale: 1 };

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": `${SITE_URL}/#clinic`,
      name: clinic.name,
      alternateName: clinic.nameDevanagari,
      description,
      url: SITE_URL,
      image: `${SITE_URL}/images/hero.jpg`,
      logo: `${SITE_URL}/logo.png`,
      telephone: "+91" + clinic.phone,
      email: clinic.email,
      medicalSpecialty: ["Ayurvedic", "Psychiatric", "Endocrine", "Obstetric"],
      availableService: treatments.map((t) => ({ "@type": "MedicalTherapy", name: t.name, description: t.short })),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop no. 4, Shiwale Estate, Shivaji Park, Walhekarwadi Road",
        addressLocality: "Chinchwad", addressRegion: "Maharashtra", postalCode: clinic.address.pincode, addressCountry: "IN",
      },
      areaServed: ["Pimpri-Chinchwad", "Pune", "India"],
      knowsLanguage: ["mr", "hi", "en"],
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: days, opens: "10:00", closes: "13:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: [...days, "Sunday"], opens: "17:00", closes: "21:00" },
      ],
      physician: { "@id": `${SITE_URL}/#doctor` },
      sameAs: ["https://www.instagram.com/harshadamalgepatl", "https://www.instagram.com/mindeaseayurved"],
    },
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#doctor`,
      name: doctor.name,
      jobTitle: "Ayurvedic Physician & Counsellor",
      medicalSpecialty: "Ayurvedic",
      identifier: doctor.registration,
      description: doctor.philosophy,
      hasCredential: doctor.qualifications.map((q) => ({ "@type": "EducationalOccupationalCredential", name: q.full, credentialCategory: q.abbr })),
      alumniOf: doctor.education.map((e) => ({ "@type": "EducationalOrganization", name: e.institute })),
      worksFor: { "@id": `${SITE_URL}/#clinic` },
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#site`, url: SITE_URL, name: clinic.name, inLanguage: "en-IN" },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${dm.variable} ${caveat.variable} ${deva.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
