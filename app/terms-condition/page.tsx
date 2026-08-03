import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ThankYouNavbar from "@/components/thank-you/ThankYouNavbar";
import ThankYouFooter from "@/components/thank-you/ThankYouFooter";
import TermsHeroBanner from "@/components/terms-condition/TermsHeroBanner";
import TermsConditionContentSection from "@/components/terms-condition/TermsConditionContentSection";

export const metadata: Metadata = {
  title: "Terms & Conditions | Hair O Graft",
  description:
    "Read the terms and conditions for booking appointments, receiving treatment, and using the Hair O Graft website in Avadi, Chennai.",
};

export default function TermsConditionPage() {
  return (
    <div>
      <ThankYouNavbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <TermsHeroBanner />
          <TermsConditionContentSection />
        </ScrollReveal>
      </main>
      <ThankYouFooter />
    </div>
  );
}
