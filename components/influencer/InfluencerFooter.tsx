"use client";

import { btn, surface, wrap } from "./theme";

const quickLinks = [
  { name: "Home", href: "#top" },
  { name: "About Us", href: "#brand" },
  { name: "Doctor", href: "#doctor" },
  { name: "Process", href: "#process" },
  { name: "Treatments", href: "#treatments" },
  { name: "Contact", href: "#location" },
];

const treatmentLinks = ["Hair Treatments", "Skin Treatments", "Dental Treatments"];

const COL_HEAD = "m-0 mb-3.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#b7c7ff] lg:mb-5";
const LINK =
  "inline-block text-[12.5px] leading-[1.5] text-white/[0.58] no-underline transition-[color,padding-left] duration-200 hover:pl-1 hover:text-[#b7c7ff]";

export default function InfluencerFooter() {
  return (
    <footer
      id="contact"
      className={`relative overflow-hidden px-4 pt-[clamp(28px,4.4vh,52px)] sm:px-6 ${surface.darkDeep}`}
    >
      <div className={wrap}>
        <div className="grid grid-cols-1 gap-7 pb-8 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.5fr_0.6fr_0.85fr_0.95fr] lg:gap-9 lg:pb-11">
          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <img
                className="h-[52px] w-[52px] rounded-full border border-[#EF3340]/55 bg-white object-contain p-[3px] shadow-[0_0_0_4px_rgba(239,51,64,0.1)]"
                src="/logos.png"
                alt="Hair O Graft"
              />
              <span>
                <strong className="block text-[22px] font-extrabold leading-none text-[#fffaf0]">
                  Hair O Graft
                </strong>
                <span className="mt-1.5 block text-[8.5px] font-extrabold uppercase tracking-[0.3em] text-[#EF3340]">
                  Hair | Skin | Dental
                </span>
              </span>
            </div>

            <p className="m-0 mb-[22px] max-w-[330px] text-[13px] leading-[1.8] text-white/55">
              Advanced Hair, Skin &amp; Dental care with expert guidance, modern technology
              and personalised treatment plans.
            </p>

            <button
              type="button"
              className={`${btn.redSm} w-full justify-center sm:w-auto`}
              onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            >
              Book Your Free Consultation
            </button>
          </div>

          <div>
            <h3 className={COL_HEAD}>
              Quick Links
              <span className="mt-2.5 block h-px w-[26px] bg-[#EF3340]" />
            </h3>
            <ul className="m-0 grid list-none gap-2.5 p-0 lg:gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a className={LINK} href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={COL_HEAD}>
              Treatments
              <span className="mt-2.5 block h-px w-[26px] bg-[#EF3340]" />
            </h3>
            <ul className="m-0 grid list-none gap-2.5 p-0 lg:gap-3">
              {treatmentLinks.map((link) => (
                <li key={link}>
                  <a className={LINK} href="#treatments">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={COL_HEAD}>
              Contact
              <span className="mt-2.5 block h-px w-[26px] bg-[#EF3340]" />
            </h3>
            <div className="rounded-[13px] border border-[#EF3340]/20 bg-[#EF3340]/[0.05] px-4 py-4 transition-[border-color,background-color] duration-200 hover:border-[#EF3340]/45 hover:bg-[#EF3340]/[0.09]">
              <div className="mb-[7px] text-[8.5px] font-extrabold uppercase tracking-[0.16em] text-[#EF3340]">
                Phone
              </div>
              <a
                className="block text-[12.5px] leading-[1.7] text-white/[0.82] no-underline hover:text-[#b7c7ff]"
                href="tel:+917448866675"
              >
                +91 74488 66675
              </a>
            </div>
          </div>

          <div>
            <h3 className={COL_HEAD}>
              Location
              <span className="mt-2.5 block h-px w-[26px] bg-[#EF3340]" />
            </h3>
            <div className="rounded-[13px] border border-[#EF3340]/20 bg-[#EF3340]/[0.05] px-4 py-4">
              <span className="block text-[12.5px] leading-[1.7] text-white/[0.82]">
                256, New Military Road, Opposite Avadi Corporation Office, Nehru Bazaar,
                Thirumalai Rajapuram, Avadi, Chennai — 600054
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3.5 border-t border-[#EF3340]/20 py-6 pb-[86px] text-[11.5px] text-white/45 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between md:pb-6">
          <p className="m-0">
            Copyright © {new Date().getFullYear()}{" "}
            <strong className="font-extrabold text-white/80">Hair O Graft</strong>. All
            Rights Reserved.
          </p>

          <span className="inline-flex items-center gap-2.5">
            <a
              className="font-bold text-white/[0.62] no-underline transition-colors duration-200 hover:text-[#b7c7ff]"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            <span className="text-[#EF3340]/40">|</span>
            <a
              className="font-bold text-white/[0.62] no-underline transition-colors duration-200 hover:text-[#b7c7ff]"
              href="/terms-condition"
            >
              Terms &amp; Conditions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
