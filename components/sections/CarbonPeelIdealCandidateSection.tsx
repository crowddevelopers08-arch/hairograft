/* ── Inline SVG icons ── */

function ImpuritiesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M8 13q2-2 8 0" />
      <path d="M9.5 9.5q.5 1 2.5 1t2.5-1" strokeOpacity="0.5" />
      <path d="M5 5l2 2M19 5l-2 2" strokeOpacity="0.4" />
    </svg>
  );
}

function OilControlIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3C9.5 6.5 7 10.5 7 13.5a5 5 0 0010 0C17 10.5 14.5 6.5 12 3z" />
      <line x1="9" y1="9" x2="15" y2="15" strokeOpacity="0.5" />
      <line x1="15" y1="9" x2="9" y2="15" strokeOpacity="0.5" />
    </svg>
  );
}

function SmoothTextureIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8C5 6.5 6.5 9.5 8 8S10.5 6.5 12 8 13.5 9.5 15 8 16.5 6.5 18 8 19.5 9.5 21 8" />
      <line x1="3" y1="13" x2="21" y2="13" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

function PoreRefinementIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8"  cy="8"  r="2" />
      <circle cx="16" cy="8"  r="2" />
      <circle cx="8"  cy="16" r="2" />
      <circle cx="16" cy="16" r="2" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" opacity="0.3" />
    </svg>
  );
}

function BrighterSkinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2"  x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2"  y1="12" x2="5"  y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.93"  y1="4.93"  x2="7.05"  y2="7.05" />
      <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
      <line x1="4.93"  y1="19.07" x2="7.05"  y2="16.95" />
      <line x1="16.95" y1="7.05"  x2="19.07" y2="4.93" />
    </svg>
  );
}

function AcneSupportIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

/* ── Benefit data ── */
const benefits = [
  { Icon: ImpuritiesIcon,    title: "Removal of surface impurities" },
  { Icon: OilControlIcon,    title: "Reduced oiliness" },
  { Icon: SmoothTextureIcon, title: "Improved skin texture" },
  { Icon: PoreRefinementIcon,title: "Less visible pores" },
  { Icon: BrighterSkinIcon,  title: "Brighter-looking skin" },
  { Icon: AcneSupportIcon,   title: "Support for acne-prone skin" },
];

export default function CarbonPeelIdealCandidateSection() {
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
            <span className="text-[#FEEA1B]">Carbon Peel</span>
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
            Carbon Peel may help improve overall skin appearance and is commonly used
            for oily, congested, and uneven-looking skin.
          </p>

          <div
            className="
              relative z-10 mt-6 sm:mt-8
              rounded-2xl border border-white/15 bg-white/10
              px-4 sm:px-5 py-4
            "
          >
            <p className="text-white/80 leading-[1.7] text-[13px] sm:text-[14px] md:text-[15px]">
              Results vary depending on skin type, skin condition, and treatment goals.
              Multiple sessions may be recommended based on individual needs.
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
            Potential benefits may include:
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
