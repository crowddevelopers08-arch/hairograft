import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import TreatmentJourneySection from "@/components/TreatmentJourneySection";
import RoadmapSection from "@/components/RoadmapSection";
import ConsultationCTASection from "@/components/ConsultationCTASection";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <HeroCarousel />
          <AboutSection />
          <TreatmentJourneySection />
          <RoadmapSection />
          <ConsultationCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
