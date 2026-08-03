/* ── Condition card icons (blue outline, viewBox 0 0 24 24) ── */

/** 1. Persistent acne scars or pitted scars */
function PittedScarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <circle cx="9"  cy="10" r="1.2" />
      <circle cx="14" cy="9"  r="0.9" />
      <circle cx="12" cy="14" r="1.1" />
      <circle cx="16" cy="13" r="0.8" />
    </svg>
  );
}

/** 2. Acne marks that do not fade */
function FadingMarkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M9 11q1-1.5 3-1t2.5 1.5" strokeOpacity="0.55" />
      <circle cx="10" cy="13.5" r="1.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" />
      <circle cx="14.5" cy="11.5" r="1" fill="currentColor" fillOpacity="0.2" stroke="currentColor" />
    </svg>
  );
}

/** 3. Uneven skin texture or enlarged pores */
function UnevenTextureIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10C5 8.5 6.5 11.5 8 10S10.5 8.5 12 10 13.5 11.5 15 10 16.5 8.5 18 10 19.5 11.5 21 10" />
      <line x1="3" y1="14" x2="21" y2="14" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

/** 4. Pigmentation or redness left after breakouts */
function PigmentationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M8.5 11q3.5-2 7 0" strokeOpacity="0.5" />
      <ellipse cx="10" cy="14" rx="2" ry="1.2" fill="currentColor" fillOpacity="0.18" stroke="currentColor" />
      <ellipse cx="15" cy="13" rx="1.5" ry="1" fill="currentColor" fillOpacity="0.18" stroke="currentColor" />
    </svg>
  );
}

/** 5. Active acne with scarring concerns */
function ActiveAcneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="14" r="4" />
      <circle cx="7.5" cy="10" r="3" />
      <circle cx="17" cy="10.5" r="2.5" />
      <line x1="7.5" y1="6" x2="7.5" y2="4" strokeOpacity="0.6" />
      <line x1="17"  y1="7" x2="17"  y2="5" strokeOpacity="0.6" />
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
  { Icon: PittedScarIcon,    title: "Persistent acne scars or pitted scars" },
  { Icon: FadingMarkIcon,    title: "Acne marks that do not fade" },
  { Icon: UnevenTextureIcon, title: "Uneven skin texture or enlarged pores" },
  { Icon: PigmentationIcon,  title: "Pigmentation or redness left after breakouts" },
  { Icon: ActiveAcneIcon,    title: "Active acne with scarring concerns" },
];

export default function AcneScarUnderstandingSection() {
  return (
    <section className="bg-[#FEFEFE] overflow-hidden py-4 sm:py-6 md:py-7 lg:py-8 xl:py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* ── Heading ── */}
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
            Acne & Scar Removal Treatment?
          </span>
        </h2>

        {/* ── Subtitle ── */}
        <p
          className="
            mt-2 sm:mt-3 mx-auto text-center text-gray-500 leading-[1.75]
            max-w-[540px] sm:max-w-[620px] lg:max-w-[680px]
            text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]
          "
        >
          A consultation with our specialists can help determine whether treatment is
          appropriate for your skin type, concerns, and goals.
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
                sm:w-[calc(33.33%_-_6px)]
                lg:w-[calc(20%_-_8px)]
              "
            >
              {/* Icon circle */}
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

              {/* Title */}
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
          {/* Decorative dot grid */}
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

          {/* Blue icon circle */}
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

          {/* Vertical separator */}
          <div className="relative z-10 hidden sm:block flex-shrink-0 w-px self-stretch bg-[#D8DDE8]" />

          {/* Text */}
          <p
            className="
              relative z-10 text-gray-700 leading-[1.7]
              text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]
            "
          >
            A consultation with our specialists can help determine whether{" "}
            <span className="text-[#354C9C] font-semibold">treatment</span>{" "}
            is appropriate for your skin type, concerns, and goals.
          </p>
        </div>

      </div>
    </section>
  );
}
