import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ClearAlignersHeroSection from "@/components/sections/ClearAlignersHeroSection";
import ClearAlignersIntroSection from "@/components/sections/ClearAlignersIntroSection";
import ClearAlignersWhyChooseUsSection from "@/components/sections/ClearAlignersWhyChooseUsSection";
import ClearAlignersUnderstandingSection from "@/components/sections/ClearAlignersUnderstandingSection";
import ClearAlignersBenefitsSection from "@/components/sections/ClearAlignersBenefitsSection";
import ClearAlignersIdealCandidateSection from "@/components/sections/ClearAlignersIdealCandidateSection";
import ClearAlignersProcessSection from "@/components/sections/ClearAlignersProcessSection";
import ClearAlignersTreatmentDurationSection from "@/components/sections/ClearAlignersTreatmentDurationSection";
import ClearAlignersRecoverySection from "@/components/sections/ClearAlignersRecoverySection";
import ClearAlignersBeforeAfterSection from "@/components/sections/ClearAlignersBeforeAfterSection";
import ClearAlignersFAQSection from "@/components/sections/ClearAlignersFAQSection";
import ClearAlignersFinalCTASection from "@/components/sections/ClearAlignersFinalCTASection";

export const metadata: Metadata = {
  title: "Clear Aligners in Chennai | Hair O Graft",
  description:
    "Clear aligners at Hair O Graft, Avadi Chennai. Custom-made, removable, transparent aligners for discreet teeth straightening. Book a dental consultation today.",
  keywords: [
    "clear aligners Chennai",
    "clear aligners Avadi",
    "teeth aligners Chennai",
    "invisible aligners Chennai",
    "transparent braces Chennai",
    "teeth straightening Avadi",
    "orthodontic aligners Chennai",
    "clear aligners Hair O Graft",
  ],
  openGraph: {
    title: "Clear Aligners in Chennai | Hair O Graft",
    description:
      "Custom-made clear aligners at Hair O Graft, Avadi Chennai. A discreet, removable option for improving teeth alignment and smile aesthetics.",
    url: "https://hairograft.com/services/dental-treatments/aligners",
    siteName: "Hair O Graft",
    locale: "en_IN",
    type: "website",
  },
};

export default function ClearAlignersPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <ClearAlignersHeroSection />
          <ClearAlignersIntroSection />
          <ClearAlignersWhyChooseUsSection />
          <ClearAlignersUnderstandingSection />
          <ClearAlignersBenefitsSection />
          <ClearAlignersIdealCandidateSection />
          <ClearAlignersProcessSection />
          <ClearAlignersTreatmentDurationSection />
          <ClearAlignersRecoverySection />
          <ClearAlignersBeforeAfterSection />
          <ClearAlignersFAQSection />
          <ClearAlignersFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
