"use client";

import { btn, copy, h2, kicker, sectionPad, surface, wrap } from "./theme";

const approachSteps = ["Understand", "Assess", "Plan", "Treat", "Follow Up"];

export default function InfluencerDoctorSection() {
  return (
    <section id="doctor" className={`relative overflow-hidden ${sectionPad} ${surface.light}`}>
      <div className={wrap}>
        <div className="mx-auto mb-8 max-w-[660px] text-center">
          <div className={`${kicker.onLight} mb-3.5`}>Doctor Authority</div>
          <h2 className={h2.onLight}>
            Expertise You Can Trust. Care You Can{" "}
            <em className="italic text-[#EF3340]">Feel.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-[18px] border border-[#EF3340]/30 bg-white shadow-[0_26px_64px_rgba(51,78,155,0.14)] lg:grid-cols-[0.8fr_1.2fr] lg:rounded-3xl">
          {/* min-h lives on the frame; the img is absolute so its intrinsic
              aspect ratio never inflates the grid row. */}
          <div className="relative min-h-[260px] overflow-hidden border-b border-[#EF3340]/20 bg-[#eef3ff] sm:min-h-[320px] lg:min-h-[300px] lg:border-b-0 lg:border-r">
            <img
              className="absolute inset-0 h-full w-full object-cover object-[center_26%]"
              src="/doctor.png"
              alt="Dr. E. Hema Shree"
              loading="lazy"
            />
            <span className="absolute bottom-[22px] left-[22px] rounded-full bg-[#EF3340] px-5 py-[11px] text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_rgba(239,51,64,0.32)]">
              Dr. E. Hema Shree
            </span>
          </div>

          <div className="flex flex-col justify-center px-[22px] py-[30px] lg:px-10 lg:py-[34px]">
            <h3 className="mb-2.5 text-[clamp(28px,3.2vw,42px)] font-extrabold leading-[1.08] text-[#111827]">
              Dr. E. <em className="italic text-[#334E9B]">Hema Shree</em>
            </h3>

            <p className="mb-4 text-[11.5px] font-bold uppercase leading-[1.7] tracking-[0.09em] text-slate-500">
              BDS | FMC | Aesthetic Practitioner &amp; Cosmetology Specialist
            </p>

            <p className={`${copy.onLight} m-0 max-w-[560px] text-[13.5px] leading-[1.8] lg:text-[14.5px] lg:leading-[1.72]`}>
              With 5+ years of clinical experience in advanced skin, hair and cosmetology
              treatments, Dr. E. Hema Shree focuses on understanding each patient&apos;s
              individual concerns before recommending a treatment approach.
            </p>

            <h4 className="mb-3 mt-[22px] text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#2B3E80]">
              Her Approach
              <span className="mt-2 block h-px w-11 bg-[#EF3340]" />
            </h4>

            <ul className="m-0 mb-[15px] flex list-none flex-wrap items-center gap-2 p-0">
              {approachSteps.map((step, index) => (
                <li className="inline-flex items-center gap-2" key={step}>
                  <span className="inline-flex rounded-full border border-[#EF3340]/30 bg-[#EF3340]/[0.08] px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.13em] text-[#2B3E80] transition-colors duration-200 hover:border-transparent hover:bg-[#EF3340] hover:text-white sm:px-[17px] sm:py-2.5 sm:text-[10px]">
                    {step}
                  </span>
                  {index < approachSteps.length - 1 && (
                    <span className="text-[13px] font-extrabold text-[#EF3340]/75">→</span>
                  )}
                </li>
              ))}
            </ul>

            <p className="m-0 text-[13.5px] italic leading-[1.65] text-slate-600 lg:text-[15px]">
              Because the right treatment starts with the right understanding.
            </p>

            <button
              type="button"
              className={`${btn.redSm} mt-5 self-stretch sm:self-start`}
              onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            >
              Meet Our Doctor →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
