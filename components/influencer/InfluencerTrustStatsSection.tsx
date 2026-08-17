"use client";

import { h2, kicker, sectionPad, surface, wrap } from "./theme";

const stats = [
  { num: "30+", label: "Influencer Collaborations" },
  { num: "1000+", label: "Happy Patients" },
  { num: "5+", label: "Years of Clinical Experience" },
  { num: "12+", label: "Doctors & Specialists" },
  { num: "3", label: "Specialized Care Categories" },
  { num: "1", label: "Trusted Destination for Hair, Skin & Dental" },
];

export default function InfluencerTrustStatsSection() {
  return (
    <section className={`relative overflow-hidden ${sectionPad} ${surface.dark}`}>
      <div className={wrap}>
        <div className="mx-auto mb-8 max-w-[640px] text-center">
          <div className={`${kicker.onDark} mb-3.5`}>Trust Statistics</div>
          <h2 className={`${h2.onDark} text-[clamp(28px,3.6vw,47px)] leading-[1.1]`}>
            The Hair O Graft <em className="italic text-[#EF3340]">Difference</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#EF3340]/25 bg-white/[0.03] shadow-[0_24px_60px_rgba(0,0,0,0.42)] md:grid-cols-3 lg:grid-cols-6 lg:rounded-[20px]">
          {stats.map((stat) => (
            <div
              className="group relative border-b border-r border-[#EF3340]/20 px-3 py-6 text-center transition-colors duration-300 last:border-r-0 hover:bg-[#EF3340]/[0.08] lg:border-b-0 lg:px-5 lg:py-9"
              key={stat.label}
            >
              <span className="mx-auto mb-3.5 grid h-[34px] w-[34px] place-items-center rounded-full border border-[#EF3340]/40 text-[#EF3340] transition-colors duration-300 group-hover:border-transparent group-hover:bg-[#EF3340] group-hover:text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l2.9 6.2 6.6.9-4.8 4.6 1.2 6.7L12 17.2 6.1 20.4l1.2-6.7L2.5 9.1l6.6-.9z" />
                </svg>
              </span>
              <strong className="block text-[clamp(28px,3.1vw,40px)] font-extrabold leading-none text-[#b7c7ff]">
                {stat.num}
              </strong>
              <span className="mt-3 block text-[8.5px] font-bold uppercase leading-[1.75] tracking-[0.1em] text-white/[0.56] lg:text-[9.5px] lg:tracking-[0.13em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
