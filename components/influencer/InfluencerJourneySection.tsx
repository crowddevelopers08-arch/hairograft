"use client";

import { h2, kicker, sectionPad, surface, wrap } from "./theme";

const steps = [
  {
    id: "01",
    title: "Consultation",
    text: "Tell us about your concern and what you want to achieve.",
  },
  {
    id: "02",
    title: "Analysis",
    text: "Our specialists understand your condition and assess your requirements.",
  },
  {
    id: "03",
    title: "Personalized Plan",
    text: "Receive a treatment approach designed around your individual needs.",
  },
  {
    id: "04",
    title: "Advanced Treatment",
    text: "Begin your treatment with expert guidance and modern technology.",
  },
  {
    id: "05",
    title: "Follow-Up",
    text: "Track your progress with continued professional guidance.",
  },
];

/** The `»` marker that sits mid-way along each connector. */
const Chevrons = () => (
  <svg
    className="flex-none text-[#EF3340]"
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1.5 1.5 5.5 6l-4 4.5M8 1.5 12 6l-4 4.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function InfluencerJourneySection() {
  return (
    <section id="process" className={`relative overflow-hidden ${sectionPad} ${surface.lightPlain}`}>
      <div className={wrap}>
        <div className="mx-auto mb-8 max-w-[640px] text-center lg:mb-[52px]">
          <div className={`${kicker.onLight} mb-3.5`}>Treatment Journey</div>
          <h2 className={`${h2.onLight} text-[clamp(28px,3.6vw,47px)] leading-[1.1]`}>
            Your Journey to <em className="italic text-[#EF3340]">Confidence</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 sm:gap-[30px] lg:grid-cols-5 lg:gap-[18px]">
          {steps.map((step, index) => (
            <article
              className="group relative flex flex-col items-center px-1 text-center"
              key={step.id}
            >
              {/* Connector: dashed rail broken by a » marker, spanning the gap to
                  the next circle. Spans from this column's centre to the next
                  one's, inset past both circles. Desktop only — the steps stack
                  below lg, where a horizontal rail makes no sense. */}
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-[30px] hidden w-[calc(100%+18px)] -translate-y-1/2 items-center gap-2 px-[36px] lg:flex"
                >
                  <span className="h-0 flex-1 border-t border-dashed border-[#EF3340]/30" />
                  <Chevrons />
                  <span className="h-0 flex-1 border-t border-dashed border-[#EF3340]/30" />
                </span>
              )}

              <span className="relative z-[1] mb-3.5 grid h-[52px] w-[52px] place-items-center rounded-full border border-[#EF3340]/35 bg-[#EF3340]/[0.07] text-[17px] font-extrabold text-[#334E9B] transition-[background-color,color,border-color,transform] duration-300 group-hover:-translate-y-1 group-hover:border-transparent group-hover:bg-[#EF3340] group-hover:text-white lg:mb-[22px] lg:h-[60px] lg:w-[60px] lg:shadow-[0_0_0_6px_#ffffff]">
                {step.id}
              </span>

              <h3 className="mb-2.5 text-[17px] font-extrabold leading-[1.28] text-[#111827] lg:text-[18px]">
                {step.title}
              </h3>
              <p className="m-0 text-[12.5px] leading-[1.72] text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-9 max-w-[720px]pt-6 text-center lg:mt-[16px] lg:pt-[10px]">
          <p className="m-0 text-[clamp(18px,2.4vw,27px)] font-bold italic leading-[1.5] text-[#334E9B]">
            Every great transformation starts with a conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
