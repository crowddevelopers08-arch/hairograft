"use client";

import { copy, h2, kicker, surface, wrap } from "./theme";

const promises = [
  "Personalized consultation",
  "Professional treatment guidance",
  "Modern technology",
  "Comfortable clinic environment",
  "Patient-focused care",
  "Transparent treatment journey",
];

export default function InfluencerTrustPromiseSection() {
  return (
    /* Pairs with the Final CTA below it — both dark, minimal gap between,
       so they read as one closing block. */
    <section
      className={`relative overflow-hidden px-4 pb-6 pt-[clamp(28px,4.4vh,52px)] sm:px-6 ${surface.dark}`}
    >
      <div className={wrap}>
        <div className="grid grid-cols-1 overflow-hidden rounded-[18px] border border-[#EF3340]/25 bg-white/[0.04] shadow-[0_26px_64px_rgba(0,0,0,0.44)] lg:grid-cols-2 lg:rounded-3xl">
          <div className="border-b border-[#EF3340]/20 bg-[#EF3340]/[0.09] px-[22px] py-[30px] lg:border-b-0 lg:border-r lg:px-[46px] lg:py-[52px]">
            <div className={`${kicker.leftOnDark} mb-3.5`}>Trust Promise</div>

            <h2 className={`${h2.onDark} mb-5 text-[clamp(27px,3.4vw,44px)] leading-[1.1]`}>
              Your Trust. Our <em className="italic text-[#EF3340]">Responsibility.</em>
            </h2>

            <p className={`${copy.onDark} m-0 max-w-none text-[13.5px] leading-[1.8] lg:max-w-[460px] lg:text-[14.5px] lg:leading-[1.85]`}>
              We don&apos;t believe in one-size-fits-all treatment.
            </p>
            <p className={`${copy.onDark} m-0 mt-3 max-w-none text-[13.5px] leading-[1.8] lg:max-w-[460px] lg:text-[14.5px] lg:leading-[1.85]`}>
              We believe in understanding first, recommending responsibly and guiding you
              throughout your journey.
            </p>
          </div>

          <div className="flex flex-col justify-center px-[22px] py-[30px] lg:px-[46px] lg:py-[52px]">
            <h3 className="m-0 mb-5 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#b7c7ff]">
              Our Promise
              <span className="mt-3 block h-px w-11 bg-[#EF3340]" />
            </h3>

            <ul className="m-0 mb-6 grid list-none grid-cols-1 gap-[9px] p-0 sm:grid-cols-2 lg:mb-[30px] lg:gap-3">
              {promises.map((promise) => (
                <li
                  className="flex items-start gap-3 rounded-[13px] border border-[#EF3340]/20 bg-[#EF3340]/[0.05] px-3.5 py-3 text-[13px] font-semibold leading-[1.55] text-white/[0.82] transition-[border-color,background-color,transform] duration-200 hover:-translate-y-[3px] hover:border-[#EF3340]/55 hover:bg-[#EF3340]/[0.11] lg:px-4 lg:py-[15px]"
                  key={promise}
                >
                  <span className="mt-px grid h-[19px] w-[19px] flex-none place-items-center rounded-full bg-[#EF3340] text-white">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {promise}
                </li>
              ))}
            </ul>

            <p className="m-0 border-t border-[#EF3340]/25 pt-6 text-[clamp(17px,2.1vw,23px)] font-bold italic leading-[1.5] text-[#b7c7ff]">
              Your confidence is our responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
