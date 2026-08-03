import FaqSection from "@/components/general-treatment/FaqSection";
import MobileActionBar from "@/components/general-treatment/fat-mobile-action-bar";
import Footer from "@/components/general-treatment/Footer";
import HairOGraftOverview from "@/components/general-treatment/HairOGraftOverview";
import HemashreeCertificate from "@/components/general-treatment/HemashreeCertificate";
import ClinicHero from "@/components/general-treatment/HeroSection";
import MobilePhoneButton from "@/components/general-treatment/MobilePhoneButton";
import ConsultationStages from "@/components/general-treatment/stage";
import TestimonialsSection from "@/components/general-treatment/TestimonialsSection";
import Navbar from "@/components/general-treatment/Navbar";
import TreatmentShowcase from "@/components/general-treatment/TreatmentShowcase";
import WhyChooseTreatments from "@/components/general-treatment/WhyChooseTreatments";


export default function Home() {
  return(
    <>
    <MobileActionBar />
    <MobilePhoneButton />
    <Navbar />
    <ClinicHero />
    <ConsultationStages />
    <HairOGraftOverview />
    <HemashreeCertificate />
    <TreatmentShowcase />
    <WhyChooseTreatments />
    <TestimonialsSection />
    <FaqSection />
    <Footer />


    </>
  );
}
