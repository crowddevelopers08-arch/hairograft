import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

import GlutathioneIVHeroSection from "@/components/sections/GlutathioneIVHeroSection";
import GlutathioneIVIntroSection from "@/components/sections/GlutathioneIVIntroSection";
import GlutathioneIVWhyChooseUsSection from "@/components/sections/GlutathioneIVWhyChooseUsSection";
import GlutathioneIVUnderstandingSection from "@/components/sections/GlutathioneIVUnderstandingSection";
import GlutathioneIVBenefitsSection from "@/components/sections/GlutathioneIVBenefitsSection";
import GlutathioneIVIdealCandidateSection from "@/components/sections/GlutathioneIVIdealCandidateSection";
import GlutathioneIVProcessSection from "@/components/sections/GlutathioneIVProcessSection";
import GlutathioneIVTreatmentDurationSection from "@/components/sections/GlutathioneIVTreatmentDurationSection";
import GlutathioneIVRecoverySection from "@/components/sections/GlutathioneIVRecoverySection";
import GlutathioneIVBeforeAfterSection from "@/components/sections/GlutathioneIVBeforeAfterSection";
import GlutathioneIVFAQSection from "@/components/sections/GlutathioneIVFAQSection";
import GlutathioneIVFinalCTASection from "@/components/sections/GlutathioneIVFinalCTASection";

export const metadata: Metadata = {
  title: "Glutathione IV Treatment in Chennai | Hair O Graft",
  description:
    "Experience professional Glutathione IV treatment at Hair O Graft, Avadi Chennai. Advanced skin wellness care with expert guidance. Book your consultation today.",
  keywords: [
    "Glutathione IV Chennai",
    "Glutathione IV Avadi",
    "skin treatment Chennai",
    "IV treatment Chennai",
    "Hair O Graft",
  ],
  openGraph: {
    title: "Glutathione IV Treatment in Chennai | Hair O Graft",
    description:
      "Discover professional Glutathione IV treatment at Hair O Graft, Avadi, Chennai.",
    type: "website",
  },
};

export default function GlutathioneIVPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <GlutathioneIVHeroSection />
          <GlutathioneIVIntroSection />
          <GlutathioneIVWhyChooseUsSection />
          <GlutathioneIVUnderstandingSection />
          {/* <GlutathioneIVBenefitsSection /> */}
          <GlutathioneIVIdealCandidateSection />
          <GlutathioneIVProcessSection />
          <GlutathioneIVTreatmentDurationSection />
          <GlutathioneIVRecoverySection />
          <GlutathioneIVBeforeAfterSection />
          <GlutathioneIVFAQSection />
          <GlutathioneIVFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
