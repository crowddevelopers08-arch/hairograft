"use client";

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6.2 2.8 8 6.9 6.5 8.1c1 2.1 2.6 3.7 5 5l1.3-1.6 4.1 1.8-.7 3.1c-.2.8-.9 1.3-1.7 1.2C7.7 16.9 3.1 12.3 2.4 5.5c-.1-.8.4-1.5 1.2-1.7l2.6-1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 8h14M7 2v4M13 2v4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

export default function MobileActionBar() {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-white border-t shadow-lg
        flex md:hidden
      "
    >
      {/* Call Now */}
      <a
        href="tel: +91 7448866675"
        className="
          flex-1 flex items-center justify-center gap-2
          py-4 font-semibold text-white
          bg-[#354f9f]
          text-[14px] lg:text-[16px]
          active:scale-95 transition
        "
      >
        <PhoneIcon />
        Call Now
      </a>

      {/* Book Now */}
      <a
        href="#lead-form"
        className="
          flex-1 flex items-center justify-center gap-2
          py-4 font-semibold
          text-black
          bg-white
          text-[14px] lg:text-[16px]
          border-l border-gray-200
          active:scale-95 transition
        "
      >
        <CalendarIcon />
        Book Now
      </a>
    </div>
  );
}
