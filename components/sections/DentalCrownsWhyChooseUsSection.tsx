import { FiInfo, FiShield, FiList, FiCheckCircle } from "react-icons/fi";
import type { IconType } from "react-icons";

const rows: { Icon: IconType; text: string }[] = [
  {
    Icon: FiInfo,
    text: "A dental crown is a custom-made cap that covers a damaged, decayed, or weakened tooth to restore its shape, strength, and appearance.",
  },
  {
    Icon: FiShield,
    text: "The crown fits over the visible part of the tooth above the gum line, protecting what remains of the natural tooth while restoring normal function. Crowns are commonly recommended after root canal treatment, for cracked or worn teeth, for large cavities that a filling cannot support, or to complete a dental bridge or implant.",
  },
  {
    Icon: FiList,
    text: "Common crown materials include metal crowns, porcelain-fused-to-metal (PFM) crowns, all-ceramic or porcelain crowns, and zirconia crowns.",
  },
  {
    Icon: FiCheckCircle,
    text: "Unlike a filling, which repairs a small area, a crown covers the whole tooth for fuller protection.",
  },
];

export default function DentalCrownsWhyChooseUsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/dental-crown-process.png')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#F7F8FC",
      }}
    >
      {/* Mobile overlay */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{ background: "rgba(247,248,252,0.93)" }}
      />
      {/* Desktop overlay */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right,rgba(247,248,252,1) 0%,rgba(247,248,252,1) 42%,rgba(247,248,252,0.45) 62%,rgba(247,248,252,0) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col justify-center
                      min-h-[auto] lg:min-h-[640px] xl:min-h-[700px]
                      px-4 sm:px-8 md:px-12 lg:px-14 xl:px-16 2xl:px-20
                      py-8 sm:py-12 lg:py-0">

        <div className="w-full lg:max-w-[54%] xl:max-w-[50%]">

          <h2 className="font-extrabold leading-[1.05] tracking-tight text-[#363435]
                          text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]">
            What is a
            <br />
            <span className="text-[#354C9C]">Dental Crown?</span>
          </h2>

          <div className="mt-5 sm:mt-7 lg:mt-8 space-y-3 sm:space-y-5">
            {rows.map((row, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4">

                <div className="flex-shrink-0 rounded-full
                                bg-[#354C9C]
                                shadow-[0_4px_16px_rgba(53,76,156,0.30)]
                                flex items-center justify-center
                                w-[52px] h-[52px]
                                sm:w-[72px] sm:h-[72px]
                                lg:w-[80px] lg:h-[80px]">
                  <row.Icon className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                </div>

                <div className="hidden sm:block flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C] opacity-60 mt-5" />

                <div className="flex-1 bg-white rounded-xl sm:rounded-2xl
                                border border-[#D8DDE8]
                                shadow-[0_2px_16px_rgba(53,76,156,0.07)]
                                px-3 sm:px-5 py-2.5 sm:py-4">
                  <p className="text-[#555555] leading-[1.65]
                                text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
                    {row.text}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
