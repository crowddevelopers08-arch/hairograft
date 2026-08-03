/* —— Inline SVG icons — blue / white outline, viewBox 0 0 24 24 —— */

function CleansingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16l-6 7v6l-4 2V11z" />
      <circle cx="9"  cy="2" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="1.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="2" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function HydrationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3C9.5 6.5 7 10.5 7 13.5a5 5 0 0010 0C17 10.5 14.5 6.5 12 3z" />
      <path d="M10 11C9.5 12.5 9.5 13.5 10 14.5" strokeOpacity="0.45" />
    </svg>
  );
}

function BrightnessIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
      <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
      <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
      <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
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

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12A9 9 0 1 0 6 5.3" />
      <polyline points="3 3 3 6 6 6" />
      <circle cx="12" cy="13" r="4" />
      <path d="M10.5 14.5q1.5 1 3 0" />
    </svg>
  );
}

const benefits = [
  { Icon: CleansingIcon, title: "Antioxidant support" },
  { Icon: HydrationIcon, title: "Brighter-looking skin" },
  { Icon: BrightnessIcon, title: "More even-looking skin tone" },
  { Icon: SmoothTextureIcon, title: "Refreshed appearance" },
  { Icon: RefreshIcon, title: "Support for overall skin health" },
];

export default function GlutathioneIVIdealCandidateSection() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-0">
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
            <span className="text-[#FEEA1B]">Glutathione IV</span>
          </h2>

          <div className="relative z-10 flex items-center gap-1.5 mt-4 sm:mt-5">
            <div className="w-10 h-[3px] rounded-full bg-[#FEEA1B]" />
            <div className="w-4 h-[3px] rounded-full bg-[#FEEA1B] opacity-50" />
            <div className="w-2 h-[3px] rounded-full bg-[#FEEA1B] opacity-25" />
          </div>

          <p
            className="
              relative z-10 mt-4 sm:mt-5 text-white/65 leading-[1.75]
              text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]
            "
          >
            Glutathione IV is used as part of a personalised approach to skin health
            and wellness.
          </p>

          <div
            className="
              relative z-10 mt-6 sm:mt-8
              rounded-2xl border border-white/15 bg-white/10
              px-4 sm:px-5 py-4
            "
          >
            <p className="text-white/80 leading-[1.7] text-[13px] sm:text-[14px] md:text-[15px]">
              Results vary between individuals and are influenced by factors such as
              skin condition, lifestyle, sun exposure, and treatment consistency.
              Glutathione IV is not a guaranteed skin-whitening treatment.
            </p>
          </div>
        </div>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="
                  group relative overflow-hidden
                  bg-white rounded-2xl border border-[#D8DDE8]
                  shadow-[0_2px_14px_rgba(53,76,156,0.06)]
                  hover:shadow-[0_8px_28px_rgba(53,76,156,0.12)]
                  hover:-translate-y-0.5 transition-all duration-250
                  p-4 sm:p-5
                "
              >
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex-shrink-0 rounded-2xl bg-[#354C9C]
                      w-11 h-11 sm:w-12 sm:h-12
                      flex items-center justify-center
                      shadow-[0_6px_18px_rgba(53,76,156,0.25)]
                    "
                  >
                    <item.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        font-extrabold text-[#363435] leading-snug
                        text-[15px] sm:text-[16px] md:text-[17px]
                      "
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
