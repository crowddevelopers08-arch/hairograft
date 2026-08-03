import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import DandruffHeroSection from "@/components/sections/DandruffHeroSection";
import DandruffIntroSection from "@/components/sections/DandruffIntroSection";
import DandruffWhyChooseUsSection from "@/components/sections/DandruffWhyChooseUsSection";
import DandruffUnderstandingSection from "@/components/sections/DandruffUnderstandingSection";
import DandruffBenefitsSection from "@/components/sections/DandruffBenefitsSection";
import DandruffIdealCandidateSection from "@/components/sections/DandruffIdealCandidateSection";
import DandruffProcessSection from "@/components/sections/DandruffProcessSection";
import DandruffTreatmentDurationSection from "@/components/sections/DandruffTreatmentDurationSection";
import DandruffRecoverySection from "@/components/sections/DandruffRecoverySection";
import DandruffBeforeAfterSection from "@/components/sections/DandruffBeforeAfterSection";
import DandruffFAQSection from "@/components/sections/DandruffFAQSection";
import DandruffFinalCTASection from "@/components/sections/DandruffFinalCTASection";

export const metadata: Metadata = {
  title: "Dandruff Treatment in Chennai | Hair O Graft",
  description:
    "Professional dandruff treatment at Hair O Graft, Avadi Chennai. Personalised scalp care to manage flaking, itching, and scalp irritation. Book a consultation today.",
  keywords: [
    "dandruff treatment Chennai",
    "scalp treatment Chennai",
    "anti dandruff treatment Avadi",
    "scalp care Chennai",
    "dandruff solution Chennai",
    "scalp flaking treatment Avadi",
    "dandruff treatment Hair O Graft",
    "professional scalp care Chennai",
  ],
  openGraph: {
    title: "Dandruff Treatment in Chennai | Hair O Graft",
    description:
      "Professional dandruff treatment at Hair O Graft, Avadi Chennai. A personalised scalp care approach to manage flaking, itching, and scalp irritation.",
    url: "https://hairograft.com/services/dandruff-treatment",
    siteName: "Hair O Graft",
    locale: "en_IN",
    type: "website",
  },
};

export default function DandruffTreatmentPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <DandruffHeroSection />
          <DandruffIntroSection />
          <DandruffWhyChooseUsSection />
          <DandruffUnderstandingSection />
          <DandruffBenefitsSection />
          <DandruffIdealCandidateSection />
          <DandruffProcessSection />
          <DandruffTreatmentDurationSection />
          <DandruffRecoverySection />
          <DandruffBeforeAfterSection />
          <DandruffFAQSection />
          <DandruffFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
