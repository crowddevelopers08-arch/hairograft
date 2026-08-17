"use client";

import { badge, copy, h2, kicker, sectionPad, surface, wrap } from "./theme";

const pillars = [
  {
    id: "01",
    title: "Expert-Led Care",
    text: "Qualified professionals who understand your individual needs.",
  },
  {
    id: "02",
    title: "Advanced Technology",
    text: "Modern treatment technologies designed to support safe and effective care.",
  },
  {
    id: "03",
    title: "Personalized Approach",
    text: "Because no two patients have the same concern, condition or goal.",
  },
  {
    id: "04",
    title: "Premium Clinic Experience",
    text: "A professional, hygienic and comfortable environment designed around your experience.",
  },
  {
    id: "05",
    title: "Transparent Guidance",
    text: "Clear consultation and treatment guidance before you begin.",
  },
  {
    id: "06",
    title: "Result-Focused Care",
    text: "Treatment plans designed around meaningful, natural-looking improvement.",
  },
];

export default function InfluencerBrandAuthoritySection() {
  return (
    <section id="brand" className={`relative overflow-hidden ${sectionPad} ${surface.darkAlt}`}>
      <div className={wrap}>
        <div className="mx-auto mb-8 max-w-[700px] text-center short:mb-[18px]">
          <div className={`${kicker.onDark} mb-3.5`}>Brand Authority</div>
          <h2 className={`${h2.onDark} mb-[18px] short:text-[clamp(22px,2.8vw,34px)]`}>
            More Than a Clinic. A Brand Built Around{" "}
            <em className="italic text-[#EF3340]">Trust.</em>
          </h2>
          <p
            className={`${copy.onDark} mx-auto max-w-[610px] short:text-[13px] short:leading-[1.7]`}
          >
            At Hair O Graft, we believe premium care is not only about advanced treatments.
          </p>
          <p
            className={`${copy.onDark} mx-auto mt-3 max-w-[610px] short:text-[13px] short:leading-[1.7]`}
          >
            It is about understanding your concern, recommending what is right for you and
            creating an experience where you feel confident at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-[18px]">
          {pillars.map((pillar) => (
            <article
              className="group relative overflow-hidden rounded-2xl border border-[#EF3340]/25 bg-white/[0.04] px-[22px] pb-[22px] pt-[26px] transition-[transform,border-color,background-color] duration-300 before:absolute before:left-0 before:top-0 before:h-0.5 before:w-0 before:bg-[#EF3340] before:transition-[width] before:duration-[400ms] before:content-[''] hover:-translate-y-1.5 hover:border-[#EF3340]/55 hover:bg-white/[0.07] hover:before:w-full lg:rounded-[20px] lg:px-7 lg:pb-[34px] lg:pt-8 short:px-[22px] short:pb-[22px] short:pt-5"
              key={pillar.id}
            >
              <span className={`${badge.onDark} mb-4 short:mb-3.5 short:h-[38px] short:w-[38px]`}>
                {pillar.id}
              </span>
              <h3 className="mb-3 text-[18px] font-extrabold leading-[1.28] text-[#fffaf0] lg:text-[20px] short:mb-2 short:text-[17px]">
                {pillar.title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.75] text-white/[0.58] lg:text-[13.5px] short:text-[12.5px] short:leading-[1.6]">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
