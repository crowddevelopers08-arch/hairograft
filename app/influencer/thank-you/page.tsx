import type { Metadata } from "next";
import Link from "next/link";

import { btn, copy, em, h2, kicker, surface } from "@/components/influencer/theme";

export const metadata: Metadata = {
  title: "Thank You | Hair O Graft",
  description:
    "Your consultation request has been received. The Hair O Graft team will call you shortly to confirm your appointment.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    title: "We review your request",
    text: "Our front-desk team checks your preferred date and time against the doctor's schedule.",
  },
  {
    title: "We call to confirm",
    text: "Expect a call on the number you shared, usually within a few working hours.",
  },
  {
    title: "You meet the doctor",
    text: "Walk in for your consultation and get a personalised treatment plan — no obligation.",
  },
];

export default function InfluencerThankYouPage() {
  return (
    <main className={`min-h-screen ${surface.darkDeep}`}>
      {/* Slim header — the landing page navbar is anchor-driven and would
          dead-link here, so this page carries its own. */}
      <header className="border-b border-[#EF3340]/15 bg-[#08090f]/90">
        <div className="mx-auto flex h-[66px] max-w-[1280px] items-center justify-between gap-5 px-4 sm:px-6 lg:h-[76px]">
          <Link className="inline-flex flex-none items-center gap-3 no-underline" href="/influencer">
            <img
              className="h-[38px] w-[38px] rounded-full border border-[#EF3340]/55 bg-white object-contain p-0.5 shadow-[0_0_0_3px_rgba(239,51,64,0.12)] lg:h-11 lg:w-11"
              src="/logos.png"
              alt="Hair O Graft"
            />
            <span className="flex flex-col leading-none">
              <strong className="text-[16px] font-extrabold tracking-[0.01em] text-[#fffaf0] lg:text-[19px]">
                Hair O Graft
              </strong>
              <span className="mt-1 text-[7px] font-bold uppercase tracking-[0.28em] text-[#EF3340] lg:text-[8px] lg:tracking-[0.34em]">
                Hair · Skin · Dental
              </span>
            </span>
          </Link>

          <a
            className="text-[11.5px] font-extrabold uppercase tracking-[0.1em] text-[#b7c7ff] no-underline transition-colors duration-200 hover:text-[#EF3340]"
            href="tel:+917448866675"
          >
            +91 74488 66675
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-[clamp(44px,9vh,88px)] sm:px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(239,51,64,0.18),transparent_38%),radial-gradient(circle_at_82%_18%,rgba(51,78,155,0.28),transparent_34%)]" />

        <div className="relative z-[1] mx-auto flex max-w-[820px] flex-col items-center text-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-[#EF3340] shadow-[0_18px_45px_rgba(239,51,64,0.35)]">
            <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m5 12.5 4.3 4.3L19 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.7"
              />
            </svg>
          </span>

          <div className={`${kicker.onDark} mt-7`}>Request Received</div>

          <h1 className={`${h2.onDark} mt-4 text-[clamp(30px,4.6vw,52px)]`}>
            Thank you — your <em className={em.red}>consultation</em> is booked.
          </h1>

          <p className={`${copy.onDark} mt-5 max-w-[620px] text-[15px]`}>
            We have received your details. A Hair O Graft care advisor will call you shortly to
            confirm your appointment date and time.
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a className={btn.red} href="tel:+917448866675">
              Call Us Now
            </a>
            <Link className={btn.ghostDark} href="/influencer">
              Back To Home
            </Link>
          </div>
        </div>

        <ol className="relative z-[1] mx-auto mt-[clamp(38px,6vh,64px)] grid max-w-[1080px] grid-cols-1 gap-4 sm:grid-cols-3">
          {nextSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-[18px] border border-[#EF3340]/25 bg-white/[0.04] px-6 py-7 text-left"
            >
              <span className="grid h-[46px] w-[46px] place-items-center rounded-full border border-[#EF3340]/45 text-[14px] font-extrabold text-[#b7c7ff]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong className="mt-4 block text-[15.5px] font-extrabold text-[#fffaf0]">
                {step.title}
              </strong>
              <span className={`${copy.onDark} mt-2 block text-[13.5px]`}>{step.text}</span>
            </li>
          ))}
        </ol>

        <address className="relative z-[1] mx-auto mt-[clamp(32px,5vh,52px)] max-w-[620px] text-center text-[13px] not-italic leading-[1.9] text-white/55">
          256, New Military Rd, opposite to Avadi Corporation Office,
          <br />
          Nehru Bazaar, Thirumalai Rajapuram, Avadi, Chennai — 600054
        </address>
      </section>
    </main>
  );
}
