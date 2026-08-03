/* ── Condition card icons (blue outline, viewBox 0 0 24 24) ── */

/** 1. Dull / tired-looking skin – droopy face */
function DullFaceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      {/* Droopy eye arcs (open downward) */}
      <path d="M8.5 10Q10 11.5 11.5 10" />
      <path d="M12.5 10Q14 11.5 15.5 10" />
      {/* Frown */}
      <path d="M9 14.5Q12 13 15 14.5" />
      {/* Tiredness dash marks on left cheek */}
      <line x1="3.5" y1="10.5" x2="5" y2="11" />
      <line x1="3.5" y1="12.5" x2="5" y2="12" />
    </svg>
  );
}

/** 2. Uneven skin texture – face in side profile */
function FaceProfileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Head outline */}
      <path d="M7 6C7 4 9 3 12 3C15.5 3 17 5.5 17 9V11" />
      <path d="M7 6V17C7 19.5 9 21 12 21H13C15.5 21 17 19 17 17V14.5" />
      {/* Nose bump */}
      <path d="M17 11L19 12.5L17 14.5" />
      {/* Mouth */}
      <line x1="12" y1="18" x2="15" y2="18" />
      {/* Eye */}
      <circle cx="13.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
      {/* Ear */}
      <path d="M7 12C6 12 5.5 12.5 5.5 13.5C5.5 14.5 6 15 7 15" />
    </svg>
  );
}

/** 3. Oily skin – simple clean teardrop */
function OilDropIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3C9.5 6.5 7 10.5 7 13.5a5 5 0 0010 0C17 10.5 14.5 6.5 12 3z" />
      {/* Inner shine */}
      <path d="M10 11C9.5 12 9.5 13 10 14" strokeOpacity="0.45" />
    </svg>
  );
}

/** 4. Mild acne concerns – three overlapping circles */
function AcneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="14" r="4" />
      <circle cx="7.5" cy="10" r="3" />
      <circle cx="17" cy="10.5" r="2.5" />
    </svg>
  );
}

/** Bottom box – clipboard with shield badge */
function ClipboardShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Clipboard body */}
      <path d="M16 3H17C18.1 3 19 3.9 19 5V17C19 18.1 18.1 19 17 19H7C5.9 19 5 18.1 5 17V5C5 3.9 5.9 3 7 3H8" />
      {/* Clip tab */}
      <rect x="9" y="2" width="6" height="3" rx="1.5" />
      {/* Top rule line */}
      <line x1="9" y1="9" x2="15" y2="9" />
      {/* Check mark */}
      <polyline points="9 13 11 15 15 11" />
      {/* Shield badge at bottom */}
      <path d="M8.5 16L8.5 19C8.5 20.5 10 22 12 22.5C14 22 15.5 20.5 15.5 19L15.5 16L12 15L8.5 16Z" strokeWidth="1.3" />
    </svg>
  );
}

/* ── Card data ── */
const conditions = [
  { Icon: DullFaceIcon,    title: "Dull, tired, or dehydrated skin" },
  { Icon: OilDropIcon,     title: "Oily, congested skin with clogged pores, blackheads, or whiteheads" },
  { Icon: FaceProfileIcon, title: "Uneven skin texture or reduced skin radiance" },
  { Icon: AcneIcon,        title: "Mild acne concerns or early signs of skin ageing" },
];

export default function UnderstandingSection() {
  return (
    <section className="bg-[#FEFEFE] overflow-hidden py-4 sm:py-6 md:py-7 lg:py-8 xl:py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* ── Heading ───────────────────────────────────────────────────
            Font ramp: 28 → 36 → 44 → 54 → 64 px
        ──────────────────────────────────────────────────────────────── */}
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
            HydraFacial?
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
          HydraFacial may be suitable for individuals who want to
          improve overall skin health and appearance.
        </p>

        {/* ── Pill with horizontal lines ─────────────────────────────── */}
        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          {/* Left: dot → line */}
          <div className="hidden sm:flex items-center gap-1.5 flex-1 min-w-0">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C]" />
            <div className="flex-1 h-px bg-[#D8DDE8]" />
          </div>

          {/* Pill */}
          <div
            className="
              flex-shrink-0 bg-[#354C9C] text-white font-semibold rounded-lg
              px-4 sm:px-5 md:px-7 py-2 sm:py-2.5
              text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]
              text-center mx-auto sm:mx-0
            "
          >
            You may be a good candidate if you have:
          </div>

          {/* Right: line → dot */}
          <div className="hidden sm:flex items-center gap-1.5 flex-1 min-w-0">
            <div className="flex-1 h-px bg-[#D8DDE8]" />
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C]" />
          </div>
        </div>

        {/* ── Condition cards ────────────────────────────────────────────
            flex-wrap + justify-center:
              xs  (<640px)  : 2 per row  — w-[calc(50%_-_6px)]
              sm  (640-1023): 3 per row  — sm:w-[calc(33.33%_-_8px)]
              lg  (1024px+) : 5 per row  — lg:w-[calc(20%_-_13px)]
            Last row's 4 cards auto-centre because of justify-center.
        ──────────────────────────────────────────────────────────────── */}
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
                lg:w-[calc(25%_-_8px)]
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

        {/* ── Bottom info box ──────────────────────────────────────────── */}
        <div
          className="
            mt-4 sm:mt-5
            relative overflow-hidden
            bg-[#F7F8FC] border border-[#D8DDE8] rounded-2xl
            flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-4
            p-4 sm:p-5
          "
        >
          {/* Decorative dot grid — top-right corner */}
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
            A consultation with our skincare specialists can help determine whether{" "}
            <span className="text-[#354C9C] font-semibold">HydraFacial</span>{" "}
            is appropriate for your skin type, concerns, and goals.
          </p>
        </div>

      </div>
    </section>
  );
}
