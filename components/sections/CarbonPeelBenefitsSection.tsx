const offers = [
  {
    regular: "Surface cleansing",
    carbonpeel: "Deep pore cleansing with laser",
  },
  {
    regular: "Manual extraction",
    carbonpeel: "Laser-assisted removal of oil & impurities",
  },
  {
    regular: "Temporary freshness",
    carbonpeel: "Improved tone, texture & oil control",
  },
  {
    regular: "Limited effect on deeper skin concerns",
    carbonpeel: "Gentle collagen stimulation",
  },
];

export default function CarbonPeelBenefitsSection() {
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
            className="
              font-extrabold leading-[1.1] tracking-tight text-[#363435]
              text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]
            "
          >
            Why Choose{" "}
            <span className="text-[#354C9C]">Carbon Peel</span>
            <br className="hidden sm:block" />
            {" "}Over a Regular Facial?
          </h2>
          <p
            className="
              mt-4 sm:mt-5 text-gray-500 leading-[1.8]
              text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]
            "
          >
            While traditional facials primarily focus on surface cleansing, Carbon Peel
            uses laser technology to deliver deeper cleansing, oil control, and skin
            refinement.
          </p>
        </div>

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
            Carbon Peel offers:
          </div>

          <div className="hidden sm:flex items-center gap-1.5 flex-1 min-w-0">
            <div className="flex-1 h-px bg-[#D8DDE8]" />
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C]" />
          </div>
        </div>

        <div className="mt-5 sm:mt-6 overflow-hidden rounded-[28px] border border-[#D8DDE8] bg-white shadow-[0_8px_28px_rgba(53,76,156,0.06)]">
          <div className="grid grid-cols-2">
            <div className="border-b border-[#D8DDE8] bg-[#F7F8FC] px-4 sm:px-6 py-4">
              <p className="font-bold text-[#363435] text-[14px] sm:text-[15px] md:text-[16px]">
                Regular Facial
              </p>
            </div>
            <div className="border-b border-l border-[#D8DDE8] bg-[#354C9C] px-4 sm:px-6 py-4">
              <p className="font-bold text-white text-[14px] sm:text-[15px] md:text-[16px]">
                Carbon Peel
              </p>
            </div>
          </div>

          {offers.map((item, index) => (
            <div key={index} className="grid grid-cols-2">
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#E3E7F0]">
                <p className="text-[#555555] leading-[1.7] text-[13px] sm:text-[14px] md:text-[15px]">
                  {item.regular}
                </p>
              </div>
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-l border-b border-[#E3E7F0] bg-[#FBFCFF]">
                <p className="font-semibold text-[#363435] leading-[1.7] text-[13px] sm:text-[14px] md:text-[15px]">
                  {item.carbonpeel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
