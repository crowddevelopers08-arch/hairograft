"use client";

import { CalendarCheck, Phone } from "lucide-react";

const BTN =
  "inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.13em] no-underline transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.98]";

export default function InfluencerMobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex gap-2.5 border-t border-[#EF3340]/30 bg-[#05060b]/95 px-3.5 pb-3 pt-2.5 shadow-[0_-14px_36px_rgba(0,0,0,0.5)] backdrop-blur-[14px] md:hidden">
      <a
        className={`${BTN} border border-[#EF3340]/45 bg-[#EF3340]/10 text-[#b7c7ff]`}
        href="tel:+917448866675"
        aria-label="Call clinic"
      >
        <Phone size={15} strokeWidth={2.4} />
        Call Now
      </a>

      <button
        type="button"
        className={`${BTN} border-0 bg-[#EF3340] text-white shadow-[0_10px_26px_rgba(239,51,64,0.3)]`}
        onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
        aria-label="Book free consultation"
      >
        <CalendarCheck size={15} strokeWidth={2.4} />
        Book Now
      </button>
    </div>
  );
}
