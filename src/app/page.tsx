import { Hero, Marquee, About, Services, Doshas } from "@/components/SectionsA";
import { Journey, Doctor, Facilities, Shop, FAQ, Contact } from "@/components/SectionsB";
import { Footer, MobileBar } from "@/components/SiteFooter";
import { Clinic, Gallery, MapSection, Stories } from "@/components/SectionsC";
import Ambient from "@/components/Ambient";
import { HapticLayer, SmoothScroll } from "@/components/ui";
import { faqs } from "@/data/clinic";
import { faqLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...faqLd(faqs) }) }} />
      <Ambient />
      <SmoothScroll />
      <HapticLayer />
      <Hero />
      <main>
        <Marquee />
        <About />
        <Clinic />
        <Services />
        <Doshas />
        <Doctor />
        <Gallery />
        <Stories />
        <Journey />
        <Facilities />
        <Shop />
        <FAQ />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
