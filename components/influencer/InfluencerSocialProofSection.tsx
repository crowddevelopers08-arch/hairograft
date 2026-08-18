"use client";

import { btn, copy, h2, kicker, sectionPad, surface, wrap } from "./theme";

const proofCards = [
  {
    id: "01",
    title: "Influencer Stories",
    meta: "Hair • Skin • Dental",
    image: "/solution-hair.png",
  },
  {
    id: "02",
    title: "Creator Experiences",
    meta: "Real visits • Real conversations",
    image: "/modern.png",
  },
  {
    id: "03",
    title: "Patient Journeys",
    meta: "Personalised care • Guided treatment",
    image: "/solution-dental.png",
  },
];

export default function InfluencerSocialProofSection() {
  return (
    <section className={`relative overflow-hidden ${sectionPad} ${surface.light}`}>
      <div className={wrap}>
        <div className="mx-auto mb-8 max-w-[720px] text-center short:mb-[18px]">
          <div className={`${kicker.onLight} mb-3.5`}>Social Proof</div>
          <h2 className={`${h2.onLight} mb-4 short:text-[clamp(22px,2.7vw,33px)]`}>
            If They Trust Their Looks With Us, You Can Trust Your{" "}
            <em className="italic text-[#EF3340]">Care</em> With Us.
          </h2>
          <p
            className={`${copy.onLight} mx-auto max-w-[560px] short:text-[13px] short:leading-[1.7]`}
          >
            Discover the Hair O Graft experience through the people who have visited,
            experienced and shared it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {proofCards.map((card) => (
            <article
              className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl border border-[#EF3340]/25 bg-[#111827] px-[22px] py-6 shadow-[0_18px_46px_rgba(51,78,155,0.16)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-[7px] hover:border-[#EF3340]/60 hover:shadow-[0_28px_64px_rgba(51,78,155,0.26)] last:md:col-span-2 last:lg:col-span-1 lg:min-h-[380px] lg:rounded-[20px] lg:px-7 lg:py-[30px] short:min-h-[268px]"
              key={card.title}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07] group-hover:opacity-[0.72]"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="absolute inset-0 bg-[#03070f]/70" />

              <span className="absolute right-[22px] top-[22px] z-[2] grid h-11 w-11 place-items-center rounded-full border border-[#EF3340]/50 bg-[#03070f]/50 text-[14px] font-extrabold text-[#b7c7ff] backdrop-blur-[6px]">
                {card.id}
              </span>

              <div className="relative z-[2]">
                <h3 className="mb-2.5 text-2xl font-extrabold leading-[1.2] text-[#fffaf0]">
                  {card.title}
                </h3>
                <p className="m-0 text-[11px] font-bold uppercase leading-[1.65] tracking-[0.14em] text-[#b7c7ff]">
                  {card.meta}
                </p>
                <span className="mt-4 block h-0.5 w-[46px] bg-[#EF3340]" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center short:mt-5">
          <a className={`${btn.red} w-full justify-center sm:w-auto`} href="#experiences">
            See Our Influencer Experiences
          </a>
        </div>
      </div>
    </section>
  );
}
