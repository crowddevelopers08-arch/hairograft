import {
  FiTrendingDown,
  FiActivity,
  FiLayers,
  FiGrid,
  FiAlertTriangle,
  FiClipboard,
} from "react-icons/fi";

const conditions = [
  { Icon: FiTrendingDown, title: "Early to moderate hair thinning" },
  { Icon: FiActivity, title: "Reduced hair density" },
  { Icon: FiLayers, title: "Pattern hair thinning" },
  { Icon: FiGrid, title: "An existing hair treatment plan" },
  { Icon: FiAlertTriangle, title: "A healthy scalp without active infection" },
];

export default function MicroneedlingUnderstandingSection() {
  return (
    <section className="bg-[#FEFEFE] overflow-hidden py-4 sm:py-6 md:py-7 lg:py-8 xl:py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h2
          className="text-center font-extrabold leading-[1.12] tracking-tight text-[#363435]
                       text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]"
        >
          Who Is an Ideal Candidate
          <br />
          for <span className="text-[#354C9C]">Microneedling?</span>
        </h2>

        <p
          className="mt-2 sm:mt-3 mx-auto text-center text-gray-500 leading-[1.75]
                      max-w-[540px] sm:max-w-[620px] lg:max-w-[680px]
                      text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]"
        >
          Microneedling may be suitable for individuals experiencing early to
          moderate hair thinning who want to support hair health and existing
          treatments.
        </p>

        {/* Pill */}
        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-1.5 flex-1 min-w-0">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C]" />
            <div className="flex-1 h-px bg-[#D8DDE8]" />
          </div>
          <div
            className="flex-shrink-0 bg-[#354C9C] text-white font-semibold rounded-lg
                          px-4 sm:px-5 md:px-7 py-2 sm:py-2.5
                          text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]
                          text-center mx-auto sm:mx-0"
          >
            You may be an ideal candidate if you have:
          </div>
          <div className="hidden sm:flex items-center gap-1.5 flex-1 min-w-0">
            <div className="flex-1 h-px bg-[#D8DDE8]" />
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C]" />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-1 sm:gap-2">
          {conditions.map((cond, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center
                bg-white rounded-2xl border border-[#D8DDE8]
                shadow-[0_2px_12px_rgba(53,76,156,0.05)]
                hover:shadow-[0_6px_24px_rgba(53,76,156,0.10)]
                hover:-translate-y-0.5 transition-all duration-200
                p-3 sm:p-4
                w-[calc(50%_-_4px)] sm:w-[calc(50%_-_6px)] lg:w-[calc(20%_-_8px)]"
            >
              <div
                className="flex items-center justify-center rounded-full bg-[#F7F8FC]
                              w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14"
              >
                <cond.Icon className="text-[#354C9C] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <p
                className="mt-1.5 sm:mt-2 font-bold text-[#363435] leading-snug
                            text-[11px] sm:text-[12px] md:text-[13px]"
              >
                {cond.title}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom info box */}
        <div
          className="mt-4 sm:mt-5 relative overflow-hidden
                        bg-[#F7F8FC] border border-[#D8DDE8] rounded-2xl
                        flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-4
                        p-4 sm:p-5"
        >
          <div
            className="absolute right-6 top-1/2 -translate-y-1/2
                          hidden md:grid grid-cols-5 gap-[10px]
                          pointer-events-none opacity-[0.18]"
          >
            {Array.from({ length: 25 }).map((_, k) => (
              <div key={k} className="w-[6px] h-[6px] rounded-full bg-[#354C9C]" />
            ))}
          </div>

          <div
            className="relative z-10 flex-shrink-0 flex items-center justify-center
                          rounded-full bg-[#354C9C] shadow-lg w-11 h-11 sm:w-12 sm:h-12"
          >
            <FiClipboard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>

          <div className="relative z-10 hidden sm:block flex-shrink-0 w-px self-stretch bg-[#D8DDE8]" />

          <p
            className="relative z-10 text-gray-700 leading-[1.7]
                        text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]"
          >
            Microneedling is not suitable for everyone, for example, where there
            is an active scalp infection, certain skin conditions, or hair loss
            caused by follicle scarring. A consultation with our specialists can
            help determine whether microneedling is appropriate for your scalp,
            hair type, and goals.
          </p>
        </div>
      </div>
    </section>
  );
}
