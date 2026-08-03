const offers = [
  {
    traditional: "Surface-level action",
    microneedling: "Stimulates the scalp through micro-channels",
  },
  {
    traditional: "Limited follicle stimulation",
    microneedling: "Encourages blood flow around follicles",
  },
  {
    traditional: "Variable absorption",
    microneedling: "May improve absorption of applied treatments",
  },
  {
    traditional: "Generic routine",
    microneedling: "Customised to your scalp and thinning pattern",
  },
];

export default function MicroneedlingBenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg,#F7F8FC 0%,#ffffff 50%,#FEFEFE 100%)" }}
    >
      <div
        className="relative z-10 max-w-[1100px] mx-auto
                      px-4 sm:px-6 md:px-8 lg:px-10
                      py-10 sm:py-12 md:py-14 lg:py-16"
      >
        <div className="text-center max-w-[720px] mx-auto">
          <h2
            className="font-extrabold leading-[1.1] tracking-tight text-[#363435]
                         text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]"
          >
            Why Choose{" "}
            <span className="text-[#354C9C]">Microneedling</span>
            <br className="hidden sm:block" /> Over Topical Products Alone?
          </h2>
          <p
            className="mt-4 sm:mt-5 text-gray-500 leading-[1.8]
                        text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]"
          >
            While topical products work mainly on the surface, microneedling is
            designed to stimulate the scalp and may support how well other
            treatments are absorbed.
          </p>
        </div>

        <div
          className="mt-5 sm:mt-6 overflow-hidden rounded-[28px] border border-[#D8DDE8]
                        bg-white shadow-[0_8px_28px_rgba(53,76,156,0.06)]"
        >
          <div className="grid grid-cols-2">
            <div className="border-b border-[#D8DDE8] bg-[#F7F8FC] px-4 sm:px-6 py-4">
              <p className="font-bold text-[#363435] text-[14px] sm:text-[15px] md:text-[16px]">
                Topical Products Alone
              </p>
            </div>
            <div className="border-b border-l border-[#D8DDE8] bg-[#354C9C] px-4 sm:px-6 py-4">
              <p className="font-bold text-white text-[14px] sm:text-[15px] md:text-[16px]">
                Microneedling Therapy
              </p>
            </div>
          </div>

          {offers.map((item, index) => (
            <div key={index} className="grid grid-cols-2">
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#E3E7F0]">
                <p className="text-[#555555] leading-[1.7] text-[13px] sm:text-[14px] md:text-[15px]">
                  {item.traditional}
                </p>
              </div>
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-l border-b border-[#E3E7F0] bg-[#FBFCFF]">
                <p className="font-semibold text-[#363435] leading-[1.7] text-[13px] sm:text-[14px] md:text-[15px]">
                  {item.microneedling}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-5 sm:mt-6 text-center text-gray-500 leading-[1.8]
                    text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]"
        >
          Microneedling is commonly recommended alongside other hair treatments
          as part of a personalised treatment plan.
        </p>
      </div>
    </section>
  );
}
