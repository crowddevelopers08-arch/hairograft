import AboutHealthcare from "@/components/hairtreatment/AboutHealthcare";
import BeforeAfter from "@/components/hairtreatment/beforeafter";
import ClinicGallery from "@/components/hairtreatment/ClinicGallery";
import ClinicHeroTemplate from "@/components/hairtreatment/ClinicHeroTemplate";
import FaqSection from "@/components/hairtreatment/FaqSection";
import Footer from "@/components/hairtreatment/Footer";
import HairGrowthCta from "@/components/hairtreatment/HairGrowthCta";
import MobileActionBar from "@/components/hairtreatment/MobileActionBar";
import ProfessionalsSection from "@/components/hairtreatment/ProfessionalsSection";
import ScrollAnimations from "@/components/hairtreatment/ScrollAnimations";
import WhatToExpect from "@/components/hairtreatment/WhatToExpect";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollAnimations />
      <ClinicHeroTemplate />
      <BeforeAfter />
      <AboutHealthcare />
      <ClinicGallery />
      <WhatToExpect />
      <ProfessionalsSection />
      <FaqSection />
      <HairGrowthCta />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
