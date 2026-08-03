
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import UVLightHeroSection from "@/components/sections/UVLightHeroSection";
import UVLightIntroSection from "@/components/sections/UVLightIntroSection";
import UVLightWhyChooseUsSection from "@/components/sections/UVLightWhyChooseUsSection";
import UVLightUnderstandingSection from "@/components/sections/UVLightUnderstandingSection";
import UVLightBenefitsSection from "@/components/sections/UVLightBenefitsSection";
import UVLightIdealCandidateSection from "@/components/sections/UVLightIdealCandidateSection";
import UVLightProcessSection from "@/components/sections/UVLightProcessSection";
import UVLightTreatmentDurationSection from "@/components/sections/UVLightTreatmentDurationSection";
import UVLightRecoverySection from "@/components/sections/UVLightRecoverySection";
import UVLightBeforeAfterSection from "@/components/sections/UVLightBeforeAfterSection";
import UVLightFAQSection from "@/components/sections/UVLightFAQSection";
import UVLightFinalCTASection from "@/components/sections/UVLightFinalCTASection";

export const metadata: Metadata = {
  title: "UV Light Therapy for Hair in Chennai | Hair O Graft",
  description:
    "UV light therapy at Hair O Graft, Avadi Chennai. Controlled phototherapy for scalp conditions and hair concerns, guided by specialist assessment.",
  keywords: [
    "UV light therapy Chennai",
    "UV light therapy for hair Chennai",
    "phototherapy for scalp Chennai",
    "UV hair treatment Avadi",
    "scalp phototherapy Chennai",
    "non-surgical hair restoration Chennai",
    "hair loss treatment Chennai",
    "UV light therapy Hair O Graft",
  ],
  openGraph: {
    title: "UV Light Therapy for Hair in Chennai | Hair O Graft",
    description:
      "Controlled UV light therapy at Hair O Graft, Avadi Chennai, for suitable scalp and hair concerns after specialist evaluation.",
    url: "https://hairograft.com/services/hair-treatments/uv-light",
    siteName: "Hair O Graft",
    locale: "en_IN",
    type: "website",
  },
};

export default function UVLightPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <UVLightHeroSection />
          <UVLightIntroSection />
          <UVLightWhyChooseUsSection />
          <UVLightUnderstandingSection />
          <UVLightBenefitsSection />
          <UVLightIdealCandidateSection />
          <UVLightProcessSection />
          <UVLightTreatmentDurationSection />
          <UVLightRecoverySection />
          <UVLightBeforeAfterSection />
          <UVLightFAQSection />
          <UVLightFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
