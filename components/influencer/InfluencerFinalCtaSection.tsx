"use client";

import { ArrowRight, Phone } from "lucide-react";

import { btn, copy, h2, kicker, sectionPad, surface } from "./theme";

const PILLARS = ["Hair.", "Skin.", "Dental."];

export default function InfluencerFinalCtaSection() {
  return (
    /* Continues the dark block started by the Trust Promise section above.
       Deliberately plain: no glows, patterns or framing — a single centred
       column of type, spaced so the CTA is the only thing asking for
       attention. */
    <section className={`${sectionPad} ${surface.dark}`}>
      <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
        <div className={`${kicker.onDark} mb-5`}>Final CTA</div>

        <h2 className={`${h2.onDark} mb-4`}>
          Ready to Invest in Your <em className="italic text-[#EF3340]">Confidence?</em>
        </h2>

        <p className={`${copy.onDark} mb-7 text-[13.5px] sm:text-[14.5px]`}>
          Whether you&apos;re looking for healthier hair, clearer skin or a more confident
          smile, the first step is understanding what is right for you.
        </p>

        <p className="m-0 mb-8 text-[clamp(18px,2.2vw,24px)] font-extrabold leading-[1.35] text-[#b7c7ff]">
          Start With a Professional Consultation.
        </p>

        <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <button
            type="button"
            className={`${btn.red} group justify-center`}
            onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
          >
            Book Your Free Consultation
            <ArrowRight
              className="transition-transform duration-200 group-hover:translate-x-1"
              size={16}
              strokeWidth={2.6}
            />
          </button>

          <a className={`${btn.ghostDark} justify-center`} href="tel:+917448866675">
            <Phone size={16} strokeWidth={2.4} />
            Call +91 74488 66675
          </a>
        </div>

        {/* Single hairline is the only divider in the section */}
        <span className="my-4 h-px w-full" />

        <div className="mb-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          {PILLARS.map((word) => (
            <span
              className="text-[clamp(17px,1.9vw,21px)] font-extrabold italic leading-none text-[#b7c7ff]"
              key={word}
            >
              {word}
            </span>
          ))}
        </div>

        <p className="m-0 max-w-[450px] text-[12.5px] leading-[1.7] text-white/55">
          One premium destination for your complete appearance and confidence care.
        </p>
      </div>
    </section>
  );
}
