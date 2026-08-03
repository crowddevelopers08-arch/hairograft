import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

import LaserHairRemovalHeroSection from "@/components/sections/LaserHairRemovalHeroSection";
import LaserHairRemovalIntroSection from "@/components/sections/LaserHairRemovalIntroSection";
import LaserHairRemovalWhyChooseUsSection from "@/components/sections/LaserHairRemovalWhyChooseUsSection";
import LaserHairRemovalUnderstandingSection from "@/components/sections/LaserHairRemovalUnderstandingSection";
import LaserHairRemovalBenefitsSection from "@/components/sections/LaserHairRemovalBenefitsSection";
import LaserHairRemovalIdealCandidateSection from "@/components/sections/LaserHairRemovalIdealCandidateSection";
import LaserHairRemovalProcessSection from "@/components/sections/LaserHairRemovalProcessSection";
import LaserHairRemovalTreatmentDurationSection from "@/components/sections/LaserHairRemovalTreatmentDurationSection";
import LaserHairRemovalRecoverySection from "@/components/sections/LaserHairRemovalRecoverySection";
import LaserHairRemovalBeforeAfterSection from "@/components/sections/LaserHairRemovalBeforeAfterSection";
import LaserHairRemovalFAQSection from "@/components/sections/LaserHairRemovalFAQSection";
import LaserHairRemovalFinalCTASection from "@/components/sections/LaserHairRemovalFinalCTASection";

export const metadata: Metadata = {
  title: "Laser Hair Removal in Chennai | Hair O Graft",
  description:
    "Professional laser hair removal treatment at Hair O Graft, Avadi Chennai. Achieve long-lasting smooth skin with advanced laser technology. Book your consultation today.",
  keywords: [
    "laser hair removal Chennai",
    "laser hair removal Avadi",
    "permanent hair removal Chennai",
    "skin treatment Chennai",
    "Hair O Graft",
  ],
  openGraph: {
    title: "Laser Hair Removal in Chennai | Hair O Graft",
    description:
      "Achieve long-lasting smooth skin with professional laser hair removal at Hair O Graft, Avadi, Chennai.",
    type: "website",
  },
};

export default function LaserHairRemovalPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <LaserHairRemovalHeroSection />
          <LaserHairRemovalIntroSection />
          <LaserHairRemovalWhyChooseUsSection />
          <LaserHairRemovalUnderstandingSection />
          <LaserHairRemovalBenefitsSection />
          <LaserHairRemovalIdealCandidateSection />
          <LaserHairRemovalProcessSection />
          <LaserHairRemovalTreatmentDurationSection />
          <LaserHairRemovalRecoverySection />
          <LaserHairRemovalBeforeAfterSection />
          <LaserHairRemovalFAQSection />
          <LaserHairRemovalFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
