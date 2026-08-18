"use client";

import { btn, h2, kicker, sectionPad, surface, wrap } from "./theme";

/**
 * Client-supplied embed. Centred on 13.1156,80.1010 — Avadi, Chennai — with
 * the clinic address as the query. `!5e1` selects satellite/hybrid tiles.
 *
 * (An earlier embed was a `maps/embed?pb=` *directions* string whose viewport
 * centre was `2d77.297!3d8.268`, i.e. Kanyakumari district, ~600km from the
 * marker — the pin was right and the camera was wrong.)
 */
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3693.4761456374054!2d80.10103422484397!3d13.115695687213048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s256%2C%20New%20Military%20Rd%2C%20opposite%20to%20avadi%20corporation%20office%2C%20Nehru%20Bazaar%2C%20Thirumalai%20Rajapuram%2C%20Avadi%2C%20Chennai%2C%20Tamil%20Nadu%20600054!5e1!3m2!1sen!2sin!4v1787050438225!5m2!1sen!2sin";

/** Client-supplied share link for the "Get Directions" button. */
const MAP_DIRECTIONS = "https://maps.app.goo.gl/as1DmGSFLFYSpb469";

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
