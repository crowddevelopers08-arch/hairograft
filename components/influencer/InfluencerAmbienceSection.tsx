"use client";

import { copy, h2, kicker, sectionPad, surface } from "./theme";

const features = [
  { title: "Premium Ambience", text: "A welcoming environment designed for your comfort." },
  { title: "Modern Technology", text: "Advanced systems supporting modern treatments." },
  { title: "Professional Care", text: "Expert guidance throughout your treatment journey." },
  {
    title: "Patient-First Experience",
    text: "Your comfort and confidence remain at the centre of every visit.",
  },
];

const icons = [
  <svg key="amb" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.6V21h14V9.6" />
    <path d="M9.5 21v-6h5v6" />
  </svg>,
  <svg key="tech" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2v4M12 18v4M4.9 4.9l2.9 2.9M16.2 16.2l2.9 2.9M2 12h4M18 12h4M4.9 19.1l2.9-2.9M16.2 7.8l2.9-2.9" />
    <circle cx="12" cy="12" r="3.4" />
  </svg>,
  <svg key="care" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>,
  <svg key="patient" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21.2l7.7-7.8 1.1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>,
];

const gallery = [
  { src: "/clinic-image.png", alt: "Hair O Graft clinic interior", span: "col-span-2" },
  { src: "/clinic-image-1.png", alt: "Hair O Graft consultation space", span: "" },
  { src: "/solution-skin.png", alt: "Hair O Graft treatment room", span: "" },
];

export default function InfluencerAmbienceSection() {
  return (
    <section className={`relative overflow-hidden ${sectionPad} ${surface.dark}`}>
      {/* items-stretch (not items-center): the gallery column is told to match
          the copy column's height rather than sitting centred against it. */}
      <div className="relative z-[1] mx-auto grid max-w-[1280px] grid-cols-1 items-stretch gap-11 lg:grid-cols-[1fr_1.06fr] lg:gap-14">
        <div>
          <div className={`${kicker.leftOnDark} mb-4`}>Clinic Ambience</div>

          <h2 className={`${h2.onDark} mb-5 short:text-[clamp(22px,2.7vw,34px)]`}>
            Step Into a Different Kind of{" "}
            <em className="italic text-[#EF3340]">Clinic Experience.</em>
          </h2>

          <p
            className={`${copy.onDark} max-w-none text-[13.5px] leading-[1.8] lg:max-w-[480px] lg:text-[14.5px] lg:leading-[1.85] short:text-[13px] short:leading-[1.7]`}
          >
            Premium care begins with the environment you walk into.
          </p>
          <p
            className={`${copy.onDark} mt-3 max-w-none text-[13.5px] leading-[1.8] lg:max-w-[480px] lg:text-[14.5px] lg:leading-[1.85] short:text-[13px] short:leading-[1.7]`}
          >
            From our reception and consultation spaces to our treatment areas, every part of
            Hair O Graft is designed to create a professional, hygienic and comfortable
            experience.
          </p>

          <div className="mt-[26px] grid grid-cols-1 gap-[11px] sm:grid-cols-2 lg:mt-8 lg:gap-3.5 short:mt-5">
            {features.map((feature, index) => (
              <article
                className="rounded-[15px] border border-[#EF3340]/20 bg-[#EF3340]/[0.06] px-[18px] pb-5 pt-[18px] transition-[border-color,transform,background-color] duration-300 hover:-translate-y-1 hover:border-[#EF3340]/50 hover:bg-[#EF3340]/[0.12] lg:px-5 lg:pb-6 lg:pt-[22px] short:px-4 short:pb-[17px] short:pt-4"
                key={feature.title}
              >
                <span className="mb-3.5 grid h-10 w-10 place-items-center rounded-xl border border-[#EF3340]/35 bg-[#EF3340]/10 text-[#b7c7ff] short:mb-2.5 short:h-[34px] short:w-[34px]">
                  {icons[index]}
                </span>
                <h3 className="mb-2 text-[12px] font-extrabold uppercase leading-[1.45] tracking-[0.11em] text-[#fffaf0]">
                  {feature.title}
                </h3>
                <p className="m-0 text-[12px] leading-[1.68] text-white/[0.56] short:text-[11.5px] short:leading-[1.55]">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Desktop: this wrapper is the grid item, and its only child is taken
            out of flow — so it contributes no intrinsic height and the row is
            sized purely by the copy column. Without that, the images' natural
            size drove the row and the copy column stretched to match, leaving
            dead space under the cards. */}
        <div className="lg:relative">
          {/* Two rows: hero shot across the top, the pair beneath. The fr
              tracks divide whatever height the copy column set, so the two
              columns end level and the bottom images absorb the slack.
              Mobile keeps fixed px rows — the columns are stacked there. */}
          <div className="grid grid-cols-2 grid-rows-[266px_168px] gap-2.5 lg:absolute lg:inset-0 lg:grid-rows-[minmax(0,1.62fr)_minmax(0,1fr)] lg:gap-3.5 short:gap-[11px] shorter:gap-2">
            {gallery.map((shot) => (
              <figure
                className={`group relative min-h-0 overflow-hidden rounded-[14px] border border-[#EF3340]/25 bg-[#131728] shadow-[0_18px_46px_rgba(0,0,0,0.42)] lg:rounded-[18px] ${shot.span}`}
                key={shot.src}
              >
                <img
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                />
                <span className="pointer-events-none absolute inset-0 bg-[#03070f]/35" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
