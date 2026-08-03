const scarTypes = [
  "Ice Pick Scars",
  "Boxcar Scars",
  "Rolling Scars",
  "Post-Inflammatory Hyperpigmentation (PIH)",
  "Post-Inflammatory Erythema (PIE)",
  "Hypertrophic Scars",
];

export default function AcneScarWhyChooseUsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:    "url('/acwhy.png')",
        backgroundSize:     "cover",
        backgroundPosition: "right center",
        backgroundRepeat:   "no-repeat",
        backgroundColor:    "#F7F8FC",
      }}
    >
      {/* Mobile overlay */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{ background: "rgba(247,248,252,0.93)" }}
      />
      {/* Desktop overlay — solid on left, fades right */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right,rgba(247,248,252,1) 0%,rgba(247,248,252,1) 42%,rgba(247,248,252,0.45) 62%,rgba(247,248,252,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center
                      min-h-[auto] lg:min-h-[640px] xl:min-h-[700px]
                      px-4 sm:px-8 md:px-12 lg:px-14 xl:px-16 2xl:px-20
                      py-8 sm:py-12 lg:py-0">

        <div className="w-full lg:max-w-[54%] xl:max-w-[50%]">

          {/* Heading */}
          <h2 className="font-extrabold leading-[1.05] tracking-tight text-[#363435]
                          text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]">
            What is
            <br />
            <span className="text-[#354C9C]">Acne & Scar Removal Treatment?</span>
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-5 text-[#555555] leading-[1.75]
                        text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            Acne scars can form when deeper layers of the skin are damaged during the healing process.
            Since different scar types respond differently to treatment, a professional skin assessment
            helps determine the most suitable approach for your skin concerns.
          </p>

          {/* Pill */}
          <div className="mt-4 sm:mt-5 inline-flex items-center bg-[#354C9C] text-white font-semibold rounded-lg
                          px-4 sm:px-5 py-2 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
            Common types of acne scars include:
          </div>

          {/* Scar types grid */}
          <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {scarTypes.map((type, i) => (
              <div
                key={i}
                className="flex items-center gap-3
                           bg-white rounded-xl border border-[#D8DDE8]
                           shadow-[0_2px_12px_rgba(53,76,156,0.06)]
                           px-4 py-3"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#354C9C]
                                flex items-center justify-center
                                text-white font-bold text-[11px]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-semibold text-[#363435] leading-snug
                              text-[13px] sm:text-[14px] md:text-[15px]">
                  {type}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-4 sm:mt-5 flex items-start gap-3
                          bg-[#F7F8FC] border border-[#D8DDE8] rounded-xl px-4 py-3">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C] mt-2" />
            <p className="text-[#555555] leading-[1.7] text-[13px] sm:text-[14px] md:text-[15px]">
              Different scar types require different treatment approaches, which is why
              professional evaluation is essential.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
