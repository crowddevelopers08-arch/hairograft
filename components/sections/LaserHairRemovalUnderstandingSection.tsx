/* ── Condition card icons (blue outline, viewBox 0 0 24 24) ── */

/** 1. Unwanted hair on face, underarms, arms, legs, body */
function UnwantedHairIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      <line x1="16" y1="3" x2="18" y2="1" />
      <line x1="18" y1="4" x2="21" y2="3" />
      <line x1="17" y1="6" x2="20" y2="6" />
    </svg>
  );
}

/** 2. Frequent ingrown hairs or irritation from shaving/waxing */
function IrritationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2" width="10" height="5" rx="1.5" />
      <path d="M9 7v10a2 2 0 004 0V7" />
      <path d="M5 14l2-1M19 14l-2-1" strokeOpacity="0.5" />
      <path d="M5 17l1-1M19 17l-1-1" strokeOpacity="0.35" />
    </svg>
  );
}

/** 3. Coarse or dense body hair growth */
function CoarseHairIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6C6 4 8 8 10 6S14 4 16 6 20 8 20 6" />
      <path d="M4 12C6 10 8 14 10 12S14 10 16 12 20 14 20 12" />
      <path d="M4 18C6 16 8 20 10 18S14 16 16 18 20 20 20 18" />
    </svg>
  );
}

/** 4. Sensitivity to traditional hair removal methods */
function SensitivityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M9 10Q10 8.5 12 9T15 10" strokeOpacity="0.5" />
      <path d="M9 14.5Q10.5 16 12 14.5T15 14.5" />
      <line x1="3.5" y1="10" x2="5.5" y2="11" strokeOpacity="0.4" />
      <line x1="3.5" y1="13" x2="5.5" y2="12.5" strokeOpacity="0.4" />
      <line x1="20.5" y1="10" x2="18.5" y2="11" strokeOpacity="0.4" />
    </svg>
  );
}

/** 5. Preference for a longer-term hair reduction option */
function LongTermIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 15" />
      <polyline points="17 3 19 5 17 7" strokeOpacity="0.5" />
    </svg>
  );
}

/** Bottom box – clipboard with shield badge */
function ClipboardShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3H17C18.1 3 19 3.9 19 5V17C19 18.1 18.1 19 17 19H7C5.9 19 5 18.1 5 17V5C5 3.9 5.9 3 7 3H8" />
      <rect x="9" y="2" width="6" height="3" rx="1.5" />
      <line x1="9" y1="9" x2="15" y2="9" />
      <polyline points="9 13 11 15 15 11" />
      <path d="M8.5 16L8.5 19C8.5 20.5 10 22 12 22.5C14 22 15.5 20.5 15.5 19L15.5 16L12 15L8.5 16Z" strokeWidth="1.3" />
    </svg>
  );
}

/* ── Card data ── */
const conditions = [
  { Icon: UnwantedHairIcon, title: "Unwanted hair on the face, underarms, arms, legs, or body" },
  { Icon: IrritationIcon,   title: "Frequent ingrown hairs or irritation from shaving or waxing" },
  { Icon: CoarseHairIcon,   title: "Coarse or dense body hair growth" },
  { Icon: SensitivityIcon,  title: "Sensitivity to traditional hair removal methods" },
  { Icon: LongTermIcon,     title: "A preference for a longer-term hair reduction option" },
];

export default function LaserHairRemovalUnderstandingSection() {
  return (
    <section className="bg-[#FEFEFE] overflow-hidden py-4 sm:py-6 md:py-7 lg:py-8 xl:py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        <h2
          className="
            text-center font-extrabold leading-[1.12] tracking-tight text-[#363435]
            text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]
          "
        >
          Who Is an Ideal Candidate
          <br />
          for{" "}
          <span className="text-[#354C9C]">
            Laser Hair Removal?
          </span>
        </h2>

        <p
          className="
            mt-2 sm:mt-3 mx-auto text-center text-gray-500 leading-[1.75]
            max-w-[540px] sm:max-w-[620px] lg:max-w-[680px]
            text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]
          "
        >
          Laser hair removal may be suitable for individuals who want to reduce unwanted
          hair and minimise frequent shaving or waxing.
        </p>

        {/* ── Pill with horizontal lines ── */}
        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-1.5 flex-1 min-w-0">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C]" />
            <div className="flex-1 h-px bg-[#D8DDE8]" />
          </div>

          <div
            className="
              flex-shrink-0 bg-[#354C9C] text-white font-semibold rounded-lg
              px-4 sm:px-5 md:px-7 py-2 sm:py-2.5
              text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]
              text-center mx-auto sm:mx-0
            "
          >
            You may be an ideal candidate if you have:
          </div>

          <div className="hidden sm:flex items-center gap-1.5 flex-1 min-w-0">
            <div className="flex-1 h-px bg-[#D8DDE8]" />
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C]" />
          </div>
        </div>

        {/* ── Condition cards ── */}
        <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-1 sm:gap-2">
          {conditions.map((cond, i) => (
            <div
              key={i}
              className="
                flex flex-col items-center text-center
                bg-white rounded-2xl
                border border-[#D8DDE8]
                shadow-[0_2px_12px_rgba(53,76,156,0.05)]
                hover:shadow-[0_6px_24px_rgba(53,76,156,0.10)]
                hover:-translate-y-0.5
                transition-all duration-200
                p-3 sm:p-4 md:p-4
                w-[calc(50%_-_4px)]
                sm:w-[calc(50%_-_6px)]
                lg:w-[calc(20%_-_8px)]
              "
            >
              <div
                className="
                  flex items-center justify-center rounded-full bg-[#F7F8FC]
                  w-11 h-11
                  sm:w-12 sm:h-12
                  md:w-14 md:h-14
                "
              >
                <cond.Icon
                  className="
                    text-[#354C9C]
                    w-5 h-5
                    sm:w-6 sm:h-6
                    md:w-7 md:h-7
                  "
                />
              </div>

              <p
                className="
                  mt-1.5 sm:mt-2 font-bold text-[#363435] leading-snug
                  text-[11px] sm:text-[12px] md:text-[13px]
                "
              >
                {cond.title}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom info box ── */}
        <div
          className="
            mt-4 sm:mt-5
            relative overflow-hidden
            bg-[#F7F8FC] border border-[#D8DDE8] rounded-2xl
            flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-4
            p-4 sm:p-5
          "
        >
          <div
            className="
              absolute right-6 top-1/2 -translate-y-1/2
              hidden md:grid grid-cols-5 gap-[10px]
              pointer-events-none opacity-[0.18]
            "
          >
            {Array.from({ length: 25 }).map((_, k) => (
              <div key={k} className="w-[6px] h-[6px] rounded-full bg-[#354C9C]" />
            ))}
          </div>

          <div
            className="
              relative z-10 flex-shrink-0
              flex items-center justify-center
              rounded-full bg-[#354C9C] shadow-lg
              w-11 h-11 sm:w-12 sm:h-12
            "
          >
            <ClipboardShieldIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>

          <div className="relative z-10 hidden sm:block flex-shrink-0 w-px self-stretch bg-[#D8DDE8]" />

          <p
            className="
              relative z-10 text-gray-700 leading-[1.7]
              text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]
            "
          >
            A consultation with our skincare specialists can help determine whether{" "}
            <span className="text-[#354C9C] font-semibold">laser hair removal</span>{" "}
            is appropriate for your skin type and goals.
          </p>
        </div>

      </div>
    </section>
  );
}
