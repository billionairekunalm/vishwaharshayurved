import { Hero, Marquee, About, Services, Doshas } from "@/components/SectionsA";
import { Journey, Doctor, Facilities, Shop, FAQ, Contact, Footer, MobileBar } from "@/components/SectionsB";
import { Clinic, Gallery, Stories } from "@/components/SectionsC";
import Ambient from "@/components/Ambient";
import { SmoothScroll } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Ambient />
      <SmoothScroll />
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
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
