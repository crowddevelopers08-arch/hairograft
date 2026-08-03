import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import MicroneedlingHeroSection from "@/components/sections/MicroneedlingHeroSection";
import MicroneedlingIntroSection from "@/components/sections/MicroneedlingIntroSection";
import MicroneedlingWhyChooseUsSection from "@/components/sections/MicroneedlingWhyChooseUsSection";
import MicroneedlingUnderstandingSection from "@/components/sections/MicroneedlingUnderstandingSection";
import MicroneedlingBenefitsSection from "@/components/sections/MicroneedlingBenefitsSection";
import MicroneedlingIdealCandidateSection from "@/components/sections/MicroneedlingIdealCandidateSection";
import MicroneedlingProcessSection from "@/components/sections/MicroneedlingProcessSection";
import MicroneedlingTreatmentDurationSection from "@/components/sections/MicroneedlingTreatmentDurationSection";
import MicroneedlingRecoverySection from "@/components/sections/MicroneedlingRecoverySection";
import MicroneedlingBeforeAfterSection from "@/components/sections/MicroneedlingBeforeAfterSection";
import MicroneedlingFAQSection from "@/components/sections/MicroneedlingFAQSection";
import MicroneedlingFinalCTASection from "@/components/sections/MicroneedlingFinalCTASection";

export const metadata: Metadata = {
  title: "Microneedling for Hair in Chennai | Hair O Graft",
  description:
    "Scalp microneedling at Hair O Graft, Avadi Chennai. A minimally invasive hair treatment that supports scalp health, hair thinning care, and treatment absorption.",
  keywords: [
    "microneedling for hair Chennai",
    "scalp microneedling Chennai",
    "microneedling treatment Avadi",
    "hair loss treatment Chennai",
    "hair regrowth treatment Chennai",
    "hair thinning treatment Avadi",
    "non-surgical hair restoration Chennai",
    "microneedling Hair O Graft",
  ],
  openGraph: {
    title: "Microneedling for Hair in Chennai | Hair O Graft",
    description:
      "Scalp microneedling at Hair O Graft, Avadi Chennai. A personalised, minimally invasive option to support scalp health and hair thinning care.",
    url: "https://hairograft.com/services/hair-treatments/microneedling",
    siteName: "Hair O Graft",
    locale: "en_IN",
    type: "website",
  },
};

export default function MicroneedlingPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <MicroneedlingHeroSection />
          <MicroneedlingIntroSection />
          <MicroneedlingWhyChooseUsSection />
          <MicroneedlingUnderstandingSection />
          <MicroneedlingBenefitsSection />
          <MicroneedlingIdealCandidateSection />
          <MicroneedlingProcessSection />
          <MicroneedlingTreatmentDurationSection />
          <MicroneedlingRecoverySection />
          <MicroneedlingBeforeAfterSection />
          <MicroneedlingFAQSection />
          <MicroneedlingFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
