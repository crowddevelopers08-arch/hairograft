import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GFCHeroSection from "@/components/sections/GFCHeroSection";
import GFCIntroSection from "@/components/sections/GFCIntroSection";
import GFCWhyChooseUsSection from "@/components/sections/GFCWhyChooseUsSection";
import GFCUnderstandingSection from "@/components/sections/GFCUnderstandingSection";
import GFCBenefitsSection from "@/components/sections/GFCBenefitsSection";
import GFCIdealCandidateSection from "@/components/sections/GFCIdealCandidateSection";
import GFCProcessSection from "@/components/sections/GFCProcessSection";
import GFCTreatmentDurationSection from "@/components/sections/GFCTreatmentDurationSection";
import GFCRecoverySection from "@/components/sections/GFCRecoverySection";
import GFCBeforeAfterSection from "@/components/sections/GFCBeforeAfterSection";
import GFCFAQSection from "@/components/sections/GFCFAQSection";
import GFCFinalCTASection from "@/components/sections/GFCFinalCTASection";

export const metadata: Metadata = {
  title: "GFC Hair Treatment in Chennai | Hair O Graft",
  description:
    "GFC (Growth Factor Concentrate) hair treatment at Hair O Graft, Avadi Chennai. A non-surgical, autologous treatment for hair thinning and hair loss. Book a consultation today.",
  keywords: [
    "GFC hair treatment Chennai",
    "growth factor concentrate Chennai",
    "GFC treatment Avadi",
    "hair loss treatment Chennai",
    "non-surgical hair restoration Chennai",
    "hair thinning treatment Avadi",
    "GFC hair treatment Hair O Graft",
    "autologous hair treatment Chennai",
  ],
  openGraph: {
    title: "GFC Hair Treatment in Chennai | Hair O Graft",
    description:
      "GFC (Growth Factor Concentrate) hair treatment at Hair O Graft, Avadi Chennai. A personalised, non-surgical approach for hair thinning and hair loss.",
    url: "https://hairograft.com/services/gfc",
    siteName: "Hair O Graft",
    locale: "en_IN",
    type: "website",
  },
};

export default function GFCPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <GFCHeroSection />
          <GFCIntroSection />
          <GFCWhyChooseUsSection />
          <GFCUnderstandingSection />
          <GFCBenefitsSection />
          <GFCIdealCandidateSection />
          <GFCProcessSection />
          <GFCTreatmentDurationSection />
          <GFCRecoverySection />
          <GFCBeforeAfterSection />
          <GFCFAQSection />
          <GFCFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
