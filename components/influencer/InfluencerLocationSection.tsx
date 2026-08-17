"use client";

import { btn, h2, kicker, sectionPad, surface, wrap } from "./theme";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15793.3643832925!2d77.29797765!3d8.268807250000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a5263e325fff74f%3A0x4413836d8698cdd3!2sHair%20O%20Graft%2C%20256%2C%20New%20Military%20Rd%2C%20opposite%20to%20avadi%20corporation%20office%2C%20Nehru%20Bazaar%2C%20Thirumalai%20Rajapuram%2C%20Avadi%2C%20Chennai%2C%20Tamil%20Nadu%20600054!3m2!1d13.1161572!2d80.1037365!5e0!3m2!1sen!2sin!4v1779093799806!5m2!1sen!2sin";

const MAP_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Hair+O+Graft,+256,+New+Military+Rd,+opposite+to+avadi+corporation+office,+Nehru+Bazaar,+Thirumalai+Rajapuram,+Avadi,+Chennai,+Tamil+Nadu+600054";

export default function InfluencerLocationSection() {
  return (
    <section id="location" className={`relative overflow-hidden ${sectionPad} ${surface.light}`}>
      <div className={wrap}>
        <div className="grid grid-cols-1 overflow-hidden rounded-[18px] border border-[#EF3340]/30 bg-white shadow-[0_26px_64px_rgba(51,78,155,0.13)] lg:grid-cols-[0.9fr_1.1fr] lg:rounded-3xl">
          <div className="flex flex-col justify-center border-b border-[#EF3340]/20 px-[22px] py-[30px] lg:border-b-0 lg:border-r lg:px-[46px] lg:py-[52px]">
            <div className={`${kicker.leftOnLight} mb-3.5`}>Location</div>

            <h2 className={`${h2.onLight} mb-6 text-[clamp(27px,3.4vw,44px)] leading-[1.1]`}>
              Visit <em className="italic text-[#EF3340]">Hair O Graft</em>
            </h2>

            <address className="mb-6 rounded-2xl border border-[#EF3340]/25 border-l-[3px] border-l-[#EF3340] bg-[#EF3340]/[0.06] px-5 py-5 not-italic lg:px-[26px] lg:py-6">
              <strong className="mb-2 block text-[17px] font-extrabold leading-[1.4] text-[#111827] lg:text-[19px]">
                256, New Military Road,
              </strong>
              <span className="block text-[13.5px] leading-[1.85] text-slate-600 lg:text-[14.5px]">
                Opposite Avadi Corporation Office,
              </span>
              <span className="block text-[13.5px] leading-[1.85] text-slate-600 lg:text-[14.5px]">
                Nehru Bazaar, Thirumalai Rajapuram,
              </span>
              <span className="block text-[13.5px] leading-[1.85] text-slate-600 lg:text-[14.5px]">
                Avadi, Chennai — 600054
              </span>
            </address>

            <p className="m-0 mb-7 text-[13px] leading-[1.8] text-slate-600 lg:text-[13.5px]">
              Serving Avadi, Ambattur, Thirumullaivoyal, Mogappair, Madhuravoyal, Red Hills
              and surrounding Chennai areas.
            </p>

            <a
              className={`${btn.redSm} self-stretch sm:self-start`}
              href={MAP_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions →
            </a>
          </div>

          <div className="relative min-h-[280px] bg-[#eef3ff] lg:min-h-[470px]">
            <iframe
              className="absolute inset-0 block h-full w-full border-0"
              src={MAP_EMBED}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hair O Graft location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
