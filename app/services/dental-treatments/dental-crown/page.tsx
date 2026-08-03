import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import DentalCrownsHeroSection from "@/components/sections/DentalCrownsHeroSection";
import DentalCrownsIntroSection from "@/components/sections/DentalCrownsIntroSection";
import DentalCrownsWhyChooseUsSection from "@/components/sections/DentalCrownsWhyChooseUsSection";
import DentalCrownsUnderstandingSection from "@/components/sections/DentalCrownsUnderstandingSection";
import DentalCrownsBenefitsSection from "@/components/sections/DentalCrownsBenefitsSection";
import DentalCrownsIdealCandidateSection from "@/components/sections/DentalCrownsIdealCandidateSection";
import DentalCrownsProcessSection from "@/components/sections/DentalCrownsProcessSection";
import DentalCrownsTreatmentDurationSection from "@/components/sections/DentalCrownsTreatmentDurationSection";
import DentalCrownsRecoverySection from "@/components/sections/DentalCrownsRecoverySection";
import DentalCrownsBeforeAfterSection from "@/components/sections/DentalCrownsBeforeAfterSection";
import DentalCrownsFAQSection from "@/components/sections/DentalCrownsFAQSection";
import DentalCrownsFinalCTASection from "@/components/sections/DentalCrownsFinalCTASection";

export const metadata: Metadata = {
  title: "Dental Crown Treatment in Chennai | Hair O Graft",
  description:
    "Dental crown treatment at Hair O Graft, Avadi Chennai. Restore and protect damaged, cracked, or weakened teeth with personalised dental care.",
  keywords: [
    "dental crown Chennai",
    "dental crown treatment Chennai",
    "dental crowns Avadi",
    "tooth crown Chennai",
    "zirconia crown Chennai",
    "ceramic crown Chennai",
    "dental restoration Avadi",
    "dental crowns Hair O Graft",
  ],
  openGraph: {
    title: "Dental Crown Treatment in Chennai | Hair O Graft",
    description:
      "Dental crown treatment at Hair O Graft, Avadi Chennai. Restore tooth strength, function, and appearance with personalised dental care.",
    url: "https://hairograft.com/services/dental-treatments/dental-crown",
    siteName: "Hair O Graft",
    locale: "en_IN",
    type: "website",
  },
};

export default function DentalCrownsPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <DentalCrownsHeroSection />
          <DentalCrownsIntroSection />
          <DentalCrownsWhyChooseUsSection />
          <DentalCrownsUnderstandingSection />
          <DentalCrownsBenefitsSection />
          <DentalCrownsIdealCandidateSection />
          <DentalCrownsProcessSection />
          <DentalCrownsTreatmentDurationSection />
          <DentalCrownsRecoverySection />
          <DentalCrownsBeforeAfterSection />
          <DentalCrownsFAQSection />
          <DentalCrownsFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
