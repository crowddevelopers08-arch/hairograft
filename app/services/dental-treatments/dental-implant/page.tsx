import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import DentalImplantsHeroSection from "@/components/sections/DentalImplantsHeroSection";
import DentalImplantsIntroSection from "@/components/sections/DentalImplantsIntroSection";
import DentalImplantsWhyChooseUsSection from "@/components/sections/DentalImplantsWhyChooseUsSection";
import DentalImplantsUnderstandingSection from "@/components/sections/DentalImplantsUnderstandingSection";
import DentalImplantsBenefitsSection from "@/components/sections/DentalImplantsBenefitsSection";
import DentalImplantsIdealCandidateSection from "@/components/sections/DentalImplantsIdealCandidateSection";
import DentalImplantsProcessSection from "@/components/sections/DentalImplantsProcessSection";
import DentalImplantsTreatmentDurationSection from "@/components/sections/DentalImplantsTreatmentDurationSection";
import DentalImplantsRecoverySection from "@/components/sections/DentalImplantsRecoverySection";
import DentalImplantsBeforeAfterSection from "@/components/sections/DentalImplantsBeforeAfterSection";
import DentalImplantsFAQSection from "@/components/sections/DentalImplantsFAQSection";
import DentalImplantsFinalCTASection from "@/components/sections/DentalImplantsFinalCTASection";

export const metadata: Metadata = {
  title: "Dental Implant Treatment in Chennai | Hair O Graft",
  description:
    "Dental implant treatment at Hair O Graft, Avadi Chennai. Fixed, natural-looking tooth replacement options planned after a detailed dental assessment.",
  keywords: [
    "dental implants Chennai",
    "dental implants Avadi",
    "dental implant treatment Chennai",
    "tooth implant Chennai",
    "missing tooth replacement Avadi",
    "fixed teeth replacement Chennai",
    "implant dentist Chennai",
    "dental implants Hair O Graft",
  ],
  openGraph: {
    title: "Dental Implant Treatment in Chennai | Hair O Graft",
    description:
      "Dental implant treatment at Hair O Graft, Avadi Chennai. Restore missing teeth with fixed, natural-looking implant-supported crowns.",
    url: "https://hairograft.com/services/dental-treatments/dental-implant",
    siteName: "Hair O Graft",
    locale: "en_IN",
    type: "website",
  },
};

export default function DentalImplantsPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <DentalImplantsHeroSection />
          <DentalImplantsIntroSection />
          <DentalImplantsWhyChooseUsSection />
          <DentalImplantsUnderstandingSection />
          <DentalImplantsBenefitsSection />
          <DentalImplantsIdealCandidateSection />
          <DentalImplantsProcessSection />
          <DentalImplantsTreatmentDurationSection />
          <DentalImplantsRecoverySection />
          <DentalImplantsBeforeAfterSection />
          <DentalImplantsFAQSection />
          <DentalImplantsFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
