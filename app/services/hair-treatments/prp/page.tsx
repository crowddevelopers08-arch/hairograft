import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PRPHeroSection from "@/components/sections/PRPHeroSection";
import PRPIntroSection from "@/components/sections/PRPIntroSection";
import PRPWhyChooseUsSection from "@/components/sections/PRPWhyChooseUsSection";
import PRPUnderstandingSection from "@/components/sections/PRPUnderstandingSection";
import PRPBenefitsSection from "@/components/sections/PRPBenefitsSection";
import PRPIdealCandidateSection from "@/components/sections/PRPIdealCandidateSection";
import PRPProcessSection from "@/components/sections/PRPProcessSection";
import PRPTreatmentDurationSection from "@/components/sections/PRPTreatmentDurationSection";
import PRPRecoverySection from "@/components/sections/PRPRecoverySection";
import PRPBeforeAfterSection from "@/components/sections/PRPBeforeAfterSection";
import PRPFAQSection from "@/components/sections/PRPFAQSection";
import PRPFinalCTASection from "@/components/sections/PRPFinalCTASection";

export const metadata: Metadata = {
  title: "PRP Hair Treatment in Chennai | Hair O Graft",
  description:
    "PRP (Platelet-Rich Plasma) hair treatment at Hair O Graft, Avadi Chennai. A non-surgical, autologous treatment for hair thinning and hair loss. Book a consultation today.",
  keywords: [
    "PRP hair treatment Chennai",
    "platelet rich plasma hair treatment Chennai",
    "PRP treatment Avadi",
    "hair loss treatment Chennai",
    "non-surgical hair restoration Chennai",
    "hair thinning treatment Avadi",
    "PRP hair treatment Hair O Graft",
    "autologous hair treatment Chennai",
  ],
  openGraph: {
    title: "PRP Hair Treatment in Chennai | Hair O Graft",
    description:
      "PRP (Platelet-Rich Plasma) hair treatment at Hair O Graft, Avadi Chennai. A personalised, non-surgical approach for hair thinning and hair loss.",
    url: "https://hairograft.com/services/prp",
    siteName: "Hair O Graft",
    locale: "en_IN",
    type: "website",
  },
};

export default function PRPPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <PRPHeroSection />
          <PRPIntroSection />
          <PRPWhyChooseUsSection />
          <PRPUnderstandingSection />
          <PRPBenefitsSection />
          <PRPIdealCandidateSection />
          <PRPProcessSection />
          <PRPTreatmentDurationSection />
          <PRPRecoverySection />
          <PRPBeforeAfterSection />
          <PRPFAQSection />
          <PRPFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
