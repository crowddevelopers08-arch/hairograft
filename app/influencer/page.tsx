import type { Metadata } from "next";

import InfluencerNavbar from "@/components/influencer/InfluencerNavbar";
import InfluencerMobileActionBar from "@/components/influencer/InfluencerMobileActionBar";
import InfluencerHero from "@/components/influencer/InfluencerHero";
import InfluencerTrustSection from "@/components/influencer/InfluencerTrustSection";
import InfluencerSocialProofSection from "@/components/influencer/InfluencerSocialProofSection";
import InfluencerBrandAuthoritySection from "@/components/influencer/InfluencerBrandAuthoritySection";
import InfluencerTrustStatsSection from "@/components/influencer/InfluencerTrustStatsSection";
import InfluencerCareCategoriesSection from "@/components/influencer/InfluencerCareCategoriesSection";
import InfluencerAmbienceSection from "@/components/influencer/InfluencerAmbienceSection";
import InfluencerDoctorSection from "@/components/influencer/InfluencerDoctorSection";
import InfluencerWhyChooseSection from "@/components/influencer/InfluencerWhyChooseSection";
import InfluencerVideoSection from "@/components/influencer/InfluencerVideoSection";
import InfluencerTestimonialsSection from "@/components/influencer/InfluencerTestimonialsSection";
import InfluencerJourneySection from "@/components/influencer/InfluencerJourneySection";
import InfluencerTrustPromiseSection from "@/components/influencer/InfluencerTrustPromiseSection";
import InfluencerFinalCtaSection from "@/components/influencer/InfluencerFinalCtaSection";
import InfluencerLocationSection from "@/components/influencer/InfluencerLocationSection";
import InfluencerFooter from "@/components/influencer/InfluencerFooter";

export const metadata: Metadata = {
  title: "Where Confidence Meets Expert Care | Hair O Graft",
  description:
    "Trusted by influencers, models, actresses and public figures. Advanced Hair, Skin & Dental treatments with expert guidance and a premium clinic experience in Avadi, Chennai.",
};

export default function InfluencerPage() {
  return (
    <>
      <InfluencerNavbar />
      <InfluencerMobileActionBar />

      {/* 01 */} <InfluencerHero />
      <InfluencerVideoSection />
      {/* 02 */} <InfluencerTrustSection />
      {/* 03 */} <InfluencerSocialProofSection />
      {/* 04 */} <InfluencerBrandAuthoritySection />
      {/* 06–08 */} <InfluencerCareCategoriesSection />
      {/* 09 */} <InfluencerAmbienceSection />
      {/* 10 */} <InfluencerDoctorSection />
      {/* 11 */}
      {/* 13 */} <InfluencerTestimonialsSection />
      {/* 14 */} <InfluencerJourneySection />
      {/* 15 */}
      {/* 16 */} <InfluencerFinalCtaSection />
      {/* 17 */} <InfluencerLocationSection />
      {/* 18 */} <InfluencerFooter />
    </>
  );
}
