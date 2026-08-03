/* ── Inline SVG icons ── */

function HairReductionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6C6 4 8 8 10 6S14 4 16 6 20 8 20 6" />
      <path d="M4 11C6 9 8 13 10 11S14 9 16 11 20 13 20 11" strokeOpacity="0.5" />
      <line x1="4" y1="17" x2="20" y2="17" strokeOpacity="0.25" />
      <line x1="7" y1="20" x2="17" y2="20" strokeOpacity="0.15" />
    </svg>
  );
}

function SmoothSkinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M7 12h10" />
      <path d="M7 8h6" strokeOpacity="0.5" />
      <path d="M7 16h8" strokeOpacity="0.5" />
    </svg>
  );
}

function NoRazorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2" width="10" height="5" rx="1.5" />
      <path d="M9 7v10a2 2 0 004 0V7" />
      <line x1="4" y1="4" x2="20" y2="20" strokeOpacity="0.5" />
    </svg>
  );
}

function NoIngrownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <line x1="9" y1="9" x2="15" y2="15" />
      <line x1="15" y1="9" x2="9" y2="15" />
    </svg>
  );
}

function MultiAreaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8"  cy="8"  r="3" />
      <circle cx="16" cy="8"  r="3" />
      <circle cx="8"  cy="16" r="3" />
      <circle cx="16" cy="16" r="3" />
    </svg>
  );
}

function ConvenienceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 15" />
      <polyline points="7 3 5 5 7 7" strokeOpacity="0.5" />
    </svg>
  );
}

/* ── Benefit data ── */
const benefits = [
  { Icon: HairReductionIcon, title: "Gradual reduction in unwanted hair" },
  { Icon: SmoothSkinIcon,    title: "Smoother-feeling skin" },
  { Icon: NoRazorIcon,       title: "Reduced need for frequent shaving or waxing" },
  { Icon: NoIngrownIcon,     title: "Fewer ingrown hairs" },
  { Icon: MultiAreaIcon,     title: "Suitable for multiple treatment areas" },
  { Icon: ConvenienceIcon,   title: "More convenient long-term unwanted hair management" },
];

export default function LaserHairRemovalIdealCandidateSection() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-0">

        {/* ── LEFT PANEL — dark navy ── */}
        <div
          className="
            relative flex flex-col justify-center
            lg:w-[42%] xl:w-[38%]
            px-6 sm:px-10 md:px-12 lg:px-10 xl:px-14
            py-10 sm:py-12 lg:py-14 xl:py-16
            overflow-hidden
          "
          style={{ background: "linear-gradient(145deg,#363435 0%,#1a3080 60%,#253d9e 100%)" }}
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle,#354C9C 0%,transparent 70%)" }} />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle,#354C9C 0%,transparent 70%)" }} />

          <h2
            className="
              relative z-10 font-extrabold leading-[1.1] tracking-tight text-white
              text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]
            "
          >
            Benefits &amp; Results of{" "}
            <span className="text-[#FEEA1B]">Laser Hair Removal</span>
          </h2>

          <div className="relative z-10 flex items-center gap-1.5 mt-4 sm:mt-5">
            <div className="w-10 h-[3px] rounded-full bg-[#FEEA1B]" />
            <div className="w-4  h-[3px] rounded-full bg-[#FEEA1B] opacity-50" />
            <div className="w-2  h-[3px] rounded-full bg-[#FEEA1B] opacity-25" />
          </div>

          <p
            className="
              relative z-10 mt-4 sm:mt-5 text-white/65 leading-[1.75]
              text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]
            "
          >
            Laser hair removal may help reduce unwanted hair and improve skin smoothness
            over a course of treatments. It can be suitable for a range of body areas
            and hair concerns.
          </p>

          <div
            className="
              relative z-10 mt-6 sm:mt-8
              rounded-2xl border border-white/15 bg-white/10
              px-4 sm:px-5 py-4
            "
          >
            <p className="text-white/80 leading-[1.7] text-[13px] sm:text-[14px] md:text-[15px]">
              Results vary depending on factors such as hair type, skin type, treatment
              area, and individual response to treatment.
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL — light, benefit list ── */}
        <div
          className="
            flex-1 flex flex-col justify-center
            bg-[#FEFEFE]
            px-6 sm:px-10 md:px-12 lg:px-10 xl:px-14
            py-10 sm:py-12 lg:py-14 xl:py-16
          "
        >
          <div className="inline-flex self-start items-center gap-2 mb-5 sm:mb-6
                          bg-[#354C9C] text-white font-semibold rounded-lg
                          px-4 sm:px-5 py-2
                          text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
            Potential benefits and results may include:
          </div>

          {/* ── Mobile grid (hidden sm+) ── */}
          <div className="grid grid-cols-2 gap-2 sm:hidden">
            {benefits.map((b, i) => (
              <div key={i}
                className="relative flex flex-col items-center text-center
                            bg-[#F7F8FC] border border-[#D8DDE8] rounded-xl
                            px-3 py-4 gap-2">
                <span className="absolute top-1.5 left-1.5 flex items-center justify-center
                                  rounded-full bg-[#354C9C] text-white font-bold
                                  w-6 h-6 text-[10px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center justify-center rounded-lg bg-white
                                shadow-sm w-11 h-11 mt-1.5">
                  <b.Icon className="text-[#354C9C] w-6 h-6" />
                </div>
                <p className="font-semibold text-[#363435] leading-snug text-[12px]">
                  {b.title}
                </p>
              </div>
            ))}
          </div>

          {/* ── sm+ list (hidden on mobile) ── */}
          <div className="hidden sm:grid grid-cols-2 gap-x-6 gap-y-0">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-[#D8DDE8] last:border-b-0 [&:nth-last-child(2)]:border-b-0">
                <span className="flex-shrink-0 flex items-center justify-center
                                  rounded-full bg-[#354C9C] text-white font-bold
                                  w-7 h-7 sm:w-8 sm:h-8 text-[10px] sm:text-[11px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-shrink-0 flex items-center justify-center
                                rounded-lg bg-[#F7F8FC] w-8 h-8 sm:w-9 sm:h-9">
                  <b.Icon className="text-[#354C9C] w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </div>
                <p className="font-semibold text-[#363435] leading-snug
                              text-[13px] sm:text-[14px] md:text-[15px]">
                  {b.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
