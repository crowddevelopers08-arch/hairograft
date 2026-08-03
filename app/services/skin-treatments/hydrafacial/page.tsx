import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

import HeroSection from "@/components/sections/HeroSection";
import HydraFacialIntroSection from "@/components/sections/HydraFacialIntroSection";
import IntroSection from "@/components/sections/IntroSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import UnderstandingSection from "@/components/sections/UnderstandingSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import IdealCandidateSection from "@/components/sections/IdealCandidateSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TreatmentDurationSection from "@/components/sections/TreatmentDurationSection";
import RecoverySection from "@/components/sections/RecoverySection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "HydraFacial Treatment in Chennai | Hair O Graft",
  description:
    "Experience medical-grade HydraFacial treatment at Hair O Graft, Avadi Chennai. Deep cleansing, intense hydration & instant brightness. Book your consultation today.",
  keywords: [
    "HydraFacial Chennai",
    "HydraFacial Avadi",
    "skin treatment Chennai",
    "facial treatment Chennai",
    "Hair O Graft",
  ],
  openGraph: {
    title: "HydraFacial Treatment in Chennai | Hair O Graft",
    description:
      "Reveal healthier, brighter skin with professional-grade HydraFacial treatment at Hair O Graft, Avadi, Chennai.",
    type: "website",
  },
};

export default function HydraFacialPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <HeroSection />
          {/* <HydraFacialIntroSection /> */}
          <IntroSection />
          <WhyChooseUsSection />
          <UnderstandingSection />
          <BenefitsSection />
          <IdealCandidateSection />
          <ProcessSection />
          <TreatmentDurationSection />
          <RecoverySection />
          <BeforeAfterSection />
          <FAQSection />
          <FinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
