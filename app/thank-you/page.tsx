import type { Metadata } from "next";
import ThankYouNavbar from "@/components/thank-you/ThankYouNavbar";
import ThankYouFooter from "@/components/thank-you/ThankYouFooter";
import ThankYouSection from "@/components/thank-you/ThankYouSection";

export const metadata: Metadata = {
  title: "Thank You | Hair O Graft",
  description: "Thank you for reaching out to Hair O Graft. Our team will get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <div>
      <ThankYouNavbar />
      <main className="mt-[76px]">
        <ThankYouSection />
      </main>
      <ThankYouFooter />
    </div>
  );
}
