import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AboutHeroBanner from "@/components/abouts/AboutHeroBanner";
import AboutWelcomeSection from "@/components/abouts/AboutWelcomeSection";
import ModernCareSection from "@/components/abouts/ModernCareSection";
import AboutFaqSection from "@/components/abouts/AboutFaqSection";

export const metadata: Metadata = {
  title: "About Hair O Graft | Skin, Hair & Dental Clinic in Avadi",
  description:
    "Learn about Hair O Graft, a multi-specialty clinic in Avadi, Chennai offering personalised skin, hair and dental care with expert guidance and proven treatments.",
};


export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <AboutHeroBanner />
          <AboutWelcomeSection />
          <ModernCareSection />
          <AboutFaqSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
