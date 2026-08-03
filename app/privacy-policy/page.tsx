import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ThankYouNavbar from "@/components/thank-you/ThankYouNavbar";
import ThankYouFooter from "@/components/thank-you/ThankYouFooter";
import PrivacyHeroBanner from "@/components/privacy-policy/PrivacyHeroBanner";
import PrivacyPolicyContentSection from "@/components/privacy-policy/PrivacyPolicyContentSection";

export const metadata: Metadata = {
  title: "Privacy Policy | Hair O Graft",
  description:
    "Read how Hair O Graft collects, uses, and protects your personal and medical information at our Avadi, Chennai clinic.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <ThankYouNavbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <PrivacyHeroBanner />
          <PrivacyPolicyContentSection />
        </ScrollReveal>
      </main>
      <ThankYouFooter />
    </div>
  );
}
