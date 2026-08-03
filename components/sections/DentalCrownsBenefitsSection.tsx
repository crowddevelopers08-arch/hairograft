const offers = [
  {
    traditional: "Suited to minor or moderate damage",
    crown: "Suited to extensively damaged teeth",
  },
  {
    traditional: "Repairs a portion of the tooth",
    crown: "Covers the entire visible tooth",
  },
  {
    traditional: "Best for smaller repairs",
    crown: "Often used for cracked, worn, or post-root canal teeth",
  },
];

export default function DentalCrownsBenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg,#F7F8FC 0%,#ffffff 50%,#FEFEFE 100%)" }}
    >
      <div className="relative z-10 max-w-[1100px] mx-auto
                      px-4 sm:px-6 md:px-8 lg:px-10
                      py-10 sm:py-12 md:py-14 lg:py-16">

        <div className="text-center max-w-[720px] mx-auto">
          <h2 className="font-extrabold leading-[1.1] tracking-tight text-[#363435]
                         text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]">
            Why Choose a{" "}
            <span className="text-[#354C9C]">Dental Crown</span>
            <br className="hidden sm:block" />
            {" "}Over a Large Filling?
          </h2>
          <p className="mt-4 sm:mt-5 text-gray-500 leading-[1.8]
                        text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">
            A filling is often the better choice for minor damage. When a tooth is more
            extensively cracked, worn, or decayed, a filling may not hold well, and a crown
            can offer fuller, longer-lasting protection. The right option depends on how
            much healthy tooth remains.
          </p>
        </div>

        <div className="mt-5 sm:mt-6 overflow-hidden rounded-[28px] border border-[#D8DDE8]
                        bg-white shadow-[0_8px_28px_rgba(53,76,156,0.06)]">
          <div className="grid grid-cols-2">
            <div className="border-b border-[#D8DDE8] bg-[#F7F8FC] px-4 sm:px-6 py-4">
              <p className="font-bold text-[#363435] text-[14px] sm:text-[15px] md:text-[16px]">
                Large Filling
              </p>
            </div>
            <div className="border-b border-l border-[#D8DDE8] bg-[#354C9C] px-4 sm:px-6 py-4">
              <p className="font-bold text-white text-[14px] sm:text-[15px] md:text-[16px]">
                Dental Crown
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
                  {item.crown}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
