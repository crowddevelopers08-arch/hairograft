"use client";

import { badge, copy, h2, kicker, sectionPad, surface, wrap } from "./theme";

const reasons = [
  {
    id: "01",
    title: "Personalized Attention",
    text: "Every concern deserves an individual approach.",
  },
  {
    id: "02",
    title: "Professional Consultation",
    text: "Understand your options before beginning treatment.",
  },
  {
    id: "03",
    title: "Advanced Treatments",
    text: "Access modern Hair, Skin & Dental solutions.",
  },
  {
    id: "04",
    title: "Comfortable Experience",
    text: "A premium and professional clinic environment.",
  },
  {
    id: "05",
    title: "One Destination",
    text: "Hair, Skin and Dental care under one roof.",
  },
];

export default function InfluencerWhyChooseSection() {
  return (
    <section className={`relative overflow-hidden ${sectionPad} ${surface.darkAlt}`}>
      <div className={wrap}>
        <div className="mx-auto mb-8 max-w-[700px] text-center">
          <div className={`${kicker.onDark} mb-3.5`}>Why Influencers Choose Us</div>
          <h2 className={`${h2.onDark} mb-4`}>
            Why Do People in the Public Eye Choose{" "}
            <em className="italic text-[#EF3340]">Hair O Graft?</em>
          </h2>
          <p className={`${copy.onDark} mx-auto max-w-[570px] text-[13.5px] sm:text-[14.5px]`}>
            When your appearance is part of your profession, you need care you can
            confidently rely on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {reasons.map((reason) => (
            <article
              className="group relative overflow-hidden rounded-[15px] border border-[#EF3340]/25 bg-white/[0.04] px-5 pb-7 pt-6 transition-[transform,border-color,background-color] duration-300 before:absolute before:left-0 before:top-0 before:h-0.5 before:w-0 before:bg-[#EF3340] before:transition-[width] before:duration-[400ms] before:content-[''] hover:-translate-y-1.5 hover:border-[#EF3340]/55 hover:bg-white/[0.07] hover:before:w-full lg:rounded-[18px] lg:px-[22px] lg:pb-[34px] lg:pt-[30px]"
              key={reason.id}
            >
              <span className={`${badge.onDark} mb-4 lg:mb-[22px]`}>{reason.id}</span>
              <h3 className="mb-[11px] text-[17px] font-extrabold leading-[1.28] text-[#fffaf0] lg:text-[18px]">
                {reason.title}
              </h3>
              <p className="m-0 text-[12.5px] leading-[1.72] text-white/[0.58]">{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
