import { FiClock } from "react-icons/fi";

const durations = [
  "Healing and osseointegration typically take a few months",
  "Additional steps, such as bone grafting, may extend the overall timeline",
  "The exact duration depends on your case, healing, and the number of implants",
];

export default function DentalImplantsTreatmentDurationSection() {
  return (
    <section style={{ background: "linear-gradient(170deg,#F7F8FC 0%,#FEFEFE 55%,#ffffff 100%)" }}>
      <div
        className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10
                      py-10 sm:py-12 md:py-14 lg:py-16"
      >
        <div className="text-center max-w-[680px] mx-auto mb-8 sm:mb-10">
          <h2
            className="font-extrabold leading-[1.1] tracking-tight text-[#363435]
                         text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]"
          >
            Treatment <span className="text-[#354C9C]">Duration</span>
          </h2>
          <p
            className="mt-4 text-gray-500 leading-[1.8]
                        text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]"
          >
            Dental implant treatment is a multi-stage process carried out over several
            months, mainly because the implant needs time to fuse securely with the bone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
          {durations.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-2xl
                         border border-[#D8DDE8]
                         shadow-[0_2px_12px_rgba(53,76,156,0.05)]
                         hover:shadow-[0_6px_24px_rgba(53,76,156,0.10)]
                         hover:-translate-y-0.5 transition-all duration-200
                         px-5 py-4"
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full
                              bg-[#354C9C] w-10 h-10"
              >
                <FiClock className="text-white w-5 h-5" />
              </div>
              <p
                className="font-semibold text-[#363435] leading-snug
                            text-[14px] sm:text-[15px] md:text-[16px]"
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl overflow-hidden relative px-6 sm:px-8 md:px-10 py-5 sm:py-6"
          style={{ background: "linear-gradient(135deg,#354C9C 0%,#1a3080 60%,#363435 100%)" }}
        >
          <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full border-[16px] border-white/10 pointer-events-none" />
          <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full border-[12px] border-white/10 pointer-events-none" />
          <p
            className="relative z-10 text-center text-white/90 leading-[1.75]
                        text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]
                        max-w-[680px] mx-auto"
          >
            Your dental specialist will share an estimated timeline for your specific
            treatment plan after assessment.
          </p>
        </div>
      </div>
    </section>
  );
}
