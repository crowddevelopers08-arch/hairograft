"use client";

import { Phone } from "lucide-react";

import { btn, copy, h2, kicker, surface, wrap } from "./theme";

export default function InfluencerFinalCtaSection() {
  return (
    /* Continues the dark block started by the Trust Promise section above. */
    <section
      className={`relative overflow-hidden px-4 pb-[clamp(28px,4.4vh,52px)] pt-6 sm:px-6 ${surface.dark}`}
    >
      <div
        className={`${wrap} grid grid-cols-1 items-center gap-7 rounded-[18px] border border-[#EF3340]/30 bg-[#111827] px-[22px] py-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.5)] lg:grid-cols-[1.3fr_0.7fr] lg:gap-9 lg:rounded-3xl lg:px-12 lg:py-[54px]`}
      >
        <div>
          <div className={`${kicker.leftOnDark} mb-3.5`}>Final CTA</div>

          <h2 className={`${h2.onDark} mb-3.5 text-[clamp(26px,3.3vw,42px)] tracking-[-0.014em]`}>
            Ready to Invest in Your <em className="italic text-[#EF3340]">Confidence?</em>
          </h2>

          <p className={`${copy.onDark} mb-[18px] max-w-[540px] text-[13.5px] sm:mb-[22px] sm:text-[14.5px]`}>
            Whether you&apos;re looking for healthier hair, clearer skin or a more confident
            smile, the first step is understanding what is right for you.
          </p>

          <p className="m-0 mb-[26px] text-[clamp(20px,2.6vw,31px)] font-extrabold leading-[1.2] text-[#b7c7ff]">
            Start With a Professional Consultation.
          </p>

          <div className="flex flex-col items-stretch gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="button"
              className={`${btn.red} justify-center`}
              onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            >
              Book Your Free Consultation
            </button>

            <a className={`${btn.ghostDark} justify-center`} href="tel:+917448866675">
              <Phone size={16} strokeWidth={2.4} />
              Call +91 74488 66675
            </a>
          </div>
        </div>

        <div className="rounded-[20px] border border-[#EF3340]/40 bg-[#EF3340]/[0.12] px-5 py-[26px] text-center lg:px-[30px] lg:py-9">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {["Hair.", "Skin.", "Dental."].map((word) => (
              <span
                className="text-[clamp(18px,2.2vw,25px)] font-extrabold italic text-[#b7c7ff]"
                key={word}
              >
                {word}
              </span>
            ))}
          </div>
          <span className="mx-auto mb-4 block h-px w-[54px] bg-[#EF3340]" />
          <p className="m-0 text-[12.5px] leading-[1.75] text-white/60">
            One premium destination for your complete appearance and confidence care.
          </p>
        </div>
      </div>
    </section>
  );
}
