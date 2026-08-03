import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

import CarbonPeelHeroSection from "@/components/sections/CarbonPeelHeroSection";
import CarbonPeelIntroSection from "@/components/sections/CarbonPeelIntroSection";
import CarbonPeelWhyChooseUsSection from "@/components/sections/CarbonPeelWhyChooseUsSection";
import CarbonPeelUnderstandingSection from "@/components/sections/CarbonPeelUnderstandingSection";
import CarbonPeelBenefitsSection from "@/components/sections/CarbonPeelBenefitsSection";
import CarbonPeelIdealCandidateSection from "@/components/sections/CarbonPeelIdealCandidateSection";
import CarbonPeelProcessSection from "@/components/sections/CarbonPeelProcessSection";
import CarbonPeelTreatmentDurationSection from "@/components/sections/CarbonPeelTreatmentDurationSection";
import CarbonPeelRecoverySection from "@/components/sections/CarbonPeelRecoverySection";
import CarbonPeelBeforeAfterSection from "@/components/sections/CarbonPeelBeforeAfterSection";
import CarbonPeelFAQSection from "@/components/sections/CarbonPeelFAQSection";
import CarbonPeelFinalCTASection from "@/components/sections/CarbonPeelFinalCTASection";

export const metadata: Metadata = {
  title: "Carbon Peel Treatment in Chennai | Hair O Graft",
  description:
    "Advanced Carbon Peel (Hollywood Peel) treatment at Hair O Graft, Avadi Chennai. Clearer pores, reduced oiliness & radiant skin. Book your consultation today.",
  keywords: [
    "carbon peel Chennai",
    "Hollywood peel Avadi",
    "carbon laser peel Chennai",
    "skin treatment Chennai",
    "Hair O Graft",
  ],
  openGraph: {
    title: "Carbon Peel Treatment in Chennai | Hair O Graft",
    description:
      "Achieve clearer pores and radiant skin with professional Carbon Peel treatment at Hair O Graft, Avadi, Chennai.",
    type: "website",
  },
};

export default function CarbonPeelPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <CarbonPeelHeroSection />
          <CarbonPeelIntroSection />
          <CarbonPeelWhyChooseUsSection />
          <CarbonPeelUnderstandingSection />
          <CarbonPeelBenefitsSection />
          <CarbonPeelIdealCandidateSection />
          <CarbonPeelProcessSection />
          <CarbonPeelTreatmentDurationSection />
          <CarbonPeelRecoverySection />
          <CarbonPeelBeforeAfterSection />
          <CarbonPeelFAQSection />
          <CarbonPeelFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
