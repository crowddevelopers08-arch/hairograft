import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import KidsDentistryHeroSection from "@/components/sections/KidsDentistryHeroSection";
import KidsDentistryIntroSection from "@/components/sections/KidsDentistryIntroSection";
import KidsDentistryWhyChooseUsSection from "@/components/sections/KidsDentistryWhyChooseUsSection";
import KidsDentistryUnderstandingSection from "@/components/sections/KidsDentistryUnderstandingSection";
import KidsDentistryBenefitsSection from "@/components/sections/KidsDentistryBenefitsSection";
import KidsDentistryIdealCandidateSection from "@/components/sections/KidsDentistryIdealCandidateSection";
import KidsDentistryProcessSection from "@/components/sections/KidsDentistryProcessSection";
import KidsDentistryTreatmentDurationSection from "@/components/sections/KidsDentistryTreatmentDurationSection";
import KidsDentistryRecoverySection from "@/components/sections/KidsDentistryRecoverySection";
import KidsDentistryBeforeAfterSection from "@/components/sections/KidsDentistryBeforeAfterSection";
import KidsDentistryFAQSection from "@/components/sections/KidsDentistryFAQSection";
import KidsDentistryFinalCTASection from "@/components/sections/KidsDentistryFinalCTASection";

export const metadata: Metadata = {
  title: "Kids Dentistry Treatment in Chennai | Hair O Graft",
  description:
    "Kids dentistry treatment at Hair O Graft, Avadi Chennai. Gentle dental care for children, including check-ups, preventive care, tooth pain support, and child-friendly treatment planning.",
  keywords: [
    "kids dentistry Chennai",
    "kids dentistry Avadi",
    "children dentist Chennai",
    "pediatric dentist Avadi",
    "kids dental treatment Chennai",
    "child dental care Chennai",
    "children dental check-up Avadi",
    "kids dentistry Hair O Graft",
  ],
  openGraph: {
    title: "Kids Dentistry Treatment in Chennai | Hair O Graft",
    description:
      "Kids dentistry treatment at Hair O Graft, Avadi Chennai. Gentle, child-friendly dental care focused on comfort, prevention, and healthy smiles.",
    url: "https://hairograft.com/services/dental-treatments/kids-dentistry",
    siteName: "Hair O Graft",
    locale: "en_IN",
    type: "website",
  },
};

export default function KidsDentistryPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <KidsDentistryHeroSection />
          <KidsDentistryIntroSection />
          <KidsDentistryWhyChooseUsSection />
          <KidsDentistryUnderstandingSection />
          <KidsDentistryBenefitsSection />
          <KidsDentistryIdealCandidateSection />
          <KidsDentistryProcessSection />
          <KidsDentistryTreatmentDurationSection />
          <KidsDentistryRecoverySection />
          <KidsDentistryBeforeAfterSection />
          <KidsDentistryFAQSection />
          <KidsDentistryFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
