"use client";

import { surface } from "./theme";

const heroStats = [
  { num: "30+", label: "Influencer\nCollaborations" },
  { num: "1000+", label: "Patient\nExperiences" },
  { num: "Hair • Skin • Dental", label: "One Premium\nDestination" },
];

const collage = [
  { src: "/solution-hair.png", alt: "Hair treatment at Hair O Graft", span: "col-span-3 row-span-3" },
  { src: "/solution-skin.png", alt: "Skin treatment at Hair O Graft", span: "col-span-3 row-span-3" },
  { src: "/clinic-image.png", alt: "Hair O Graft clinic", span: "col-span-2 row-span-2" },
  { src: "/solution-dental.png", alt: "Dental care at Hair O Graft", span: "col-span-2 row-span-2" },
  { src: "/clinic-image-2.png", alt: "Hair O Graft treatment room", span: "col-span-2 row-span-2" },
];

export default function InfluencerHero() {
  return (
    <section
      className={`relative overflow-hidden px-4 pb-[clamp(28px,4.4vh,54px)] pt-[clamp(88px,13vh,122px)] sm:px-6 shorter:pt-[clamp(84px,12vh,110px)] ${surface.dark}`}
    >
      <div className="relative z-[2] mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-[52px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-[58px]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#EF3340]/40 bg-[#EF3340]/10 px-3.5 py-2 text-[8.5px] font-extrabold uppercase leading-[1.6] tracking-[0.14em] text-[#b7c7ff] sm:px-[18px] sm:text-[9.5px] sm:tracking-[0.19em] short:mb-4">
            <svg
              className="flex-none"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="#EF3340"
              aria-hidden="true"
            >
              <path d="M12 2l2.9 6.2 6.6.9-4.8 4.6 1.2 6.7L12 17.2 6.1 20.4l1.2-6.7L2.5 9.1l6.6-.9z" />
            </svg>
            Trusted by Influencers, Models, Actresses &amp; Public Figures
          </div>

          <h1 className="m-0 text-[clamp(38px,4.9vw,66px)] font-extrabold leading-[1.05] tracking-[-0.015em] text-[#fffaf0]">
            Where Confidence Meets
            <em className="block italic text-[#EF3340]">Expert Care.</em>
          </h1>

          <p className="mt-4 max-w-[540px] text-[15px] font-semibold italic leading-[1.5] text-[#b7c7ff] sm:mt-[22px] sm:text-[clamp(16px,1.7vw,20px)] short:mt-3.5">
            Advanced Hair, Skin &amp; Dental Treatments Chosen by People Who Value Their
            Appearance.
          </p>

          <div className="my-4 h-0.5 w-24 bg-[#EF3340] sm:mb-5 sm:mt-6 short:my-3.5" />

          <p className="m-0 max-w-[500px] text-[13.5px] leading-[1.78] text-white/[0.66] sm:text-[15px] sm:leading-[1.8] short:text-[14px] short:leading-[1.7]">
            From hair restoration and skin transformation to smile correction and dental
            care, Hair O Graft brings advanced treatments, expert guidance and a premium
            clinic experience under one roof.
          </p>

          <div className="my-[26px] flex flex-wrap gap-x-[22px] gap-y-[18px] sm:my-[34px] sm:gap-[34px] short:my-5 shorter:my-3.5">
            {heroStats.map((stat) => (
              <div className="relative pl-3.5 sm:pl-[18px]" key={stat.num}>
                <span className="absolute inset-y-1 left-0 w-0.5 bg-[#EF3340]" />
                <strong className="block text-[22px] font-extrabold leading-none text-[#b7c7ff] sm:text-[27px]">
                  {stat.num}
                </strong>
                <span className="mt-1.5 block whitespace-pre-line text-[8.5px] font-bold uppercase leading-[1.65] tracking-[0.1em] text-white/55 sm:mt-[7px] sm:text-[10px] sm:tracking-[0.13em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border-0 bg-[#EF3340] px-6 py-4 text-[12px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_16px_40px_rgba(239,51,64,0.28)] transition-[filter,transform,box-shadow] duration-200 hover:brightness-110 hover:shadow-[0_20px_52px_rgba(239,51,64,0.42)] active:scale-[0.98] sm:w-auto sm:px-9 sm:py-[18px] shorter:px-7 shorter:py-3.5"
              onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            >
              Book Your Free Consultation
            </button>
            <span className="max-w-none text-[11.5px] leading-[1.7] text-white/45 sm:max-w-[220px]">
              Your appearance matters. Choose the care that deserves your trust.
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-1.5 -top-4 z-[3] grid h-[88px] w-[88px] place-items-center rounded-full bg-[#EF3340] shadow-[0_18px_44px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.35)] sm:-right-2.5 sm:-top-6 sm:h-28 sm:w-28 lg:-right-[22px] lg:-top-[30px] lg:h-[132px] lg:w-[132px] short:h-[104px] short:w-[104px] shorter:h-[88px] shorter:w-[88px]">
            <span className="absolute inset-2 animate-[spin_26s_linear_infinite] rounded-full border border-dashed border-white/45 motion-reduce:animate-none" />
            <div className="relative z-[1] px-3 text-center">
              <strong className="block text-[21px] font-extrabold leading-none text-white lg:text-[30px]">
                30+
              </strong>
              <span className="mt-1 block text-[6px] font-extrabold uppercase leading-[1.5] tracking-[0.1em] text-white/80 lg:text-[7.5px] lg:tracking-[0.15em]">
                Influencer
                <br />
                Collaborations
              </span>
            </div>
          </div>

          <div className="grid auto-rows-[64px] grid-cols-6 gap-[9px] sm:auto-rows-[96px] sm:gap-3 short:auto-rows-[74px] short:gap-2.5 shorter:auto-rows-[54px] shorter:gap-2">
            {collage.map((tile) => (
              <figure
                className={`group relative overflow-hidden rounded-xl border border-[#EF3340]/25 bg-[#131728] shadow-[0_18px_46px_rgba(0,0,0,0.45)] sm:rounded-2xl ${tile.span}`}
                key={tile.src}
              >
                <img
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  src={tile.src}
                  alt={tile.alt}
                />
                <span className="pointer-events-none absolute inset-0 bg-[#03070f]/40" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
