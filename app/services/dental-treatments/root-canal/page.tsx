import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import RootCanalHeroSection from "@/components/sections/RootCanalHeroSection";
import RootCanalIntroSection from "@/components/sections/RootCanalIntroSection";
import RootCanalWhyChooseUsSection from "@/components/sections/RootCanalWhyChooseUsSection";
import RootCanalUnderstandingSection from "@/components/sections/RootCanalUnderstandingSection";
import RootCanalBenefitsSection from "@/components/sections/RootCanalBenefitsSection";
import RootCanalIdealCandidateSection from "@/components/sections/RootCanalIdealCandidateSection";
import RootCanalProcessSection from "@/components/sections/RootCanalProcessSection";
import RootCanalTreatmentDurationSection from "@/components/sections/RootCanalTreatmentDurationSection";
import RootCanalRecoverySection from "@/components/sections/RootCanalRecoverySection";
import RootCanalBeforeAfterSection from "@/components/sections/RootCanalBeforeAfterSection";
import RootCanalFAQSection from "@/components/sections/RootCanalFAQSection";
import RootCanalFinalCTASection from "@/components/sections/RootCanalFinalCTASection";

export const metadata: Metadata = {
  title: "Root Canal Treatment in Chennai | Hair O Graft",
  description:
    "Root canal treatment at Hair O Graft, Avadi Chennai. Gentle endodontic care to relieve tooth pain, treat infection, and help preserve your natural tooth.",
  keywords: [
    "root canal treatment Chennai",
    "root canal treatment Avadi",
    "root canal dentist Chennai",
    "endodontic treatment Chennai",
    "tooth pain treatment Avadi",
    "infected tooth treatment Chennai",
    "dental root canal Chennai",
    "root canal Hair O Graft",
  ],
  openGraph: {
    title: "Root Canal Treatment in Chennai | Hair O Graft",
    description:
      "Gentle root canal treatment at Hair O Graft, Avadi Chennai, designed to relieve pain, treat infection, and preserve your natural tooth.",
    url: "https://hairograft.com/services/dental-treatments/root-canal",
    siteName: "Hair O Graft",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootCanalPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <RootCanalHeroSection />
          <RootCanalIntroSection />
          <RootCanalWhyChooseUsSection />
          <RootCanalUnderstandingSection />
          <RootCanalBenefitsSection />
          <RootCanalIdealCandidateSection />
          <RootCanalProcessSection />
          <RootCanalTreatmentDurationSection />
          <RootCanalRecoverySection />
          <RootCanalBeforeAfterSection />
          <RootCanalFAQSection />
          <RootCanalFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
