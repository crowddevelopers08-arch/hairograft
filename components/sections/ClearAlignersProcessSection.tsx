import {
  FiSearch,
  FiDroplet,
  FiDisc,
  FiCrosshair,
  FiClipboard,
} from "react-icons/fi";

const steps = [
  {
    Icon: FiSearch,
    title: "Consultation & Dental Assessment:",
    desc: "Evaluation of your teeth, gums, and bite to check your suitability for aligners.",
  },
  {
    Icon: FiDroplet,
    title: "Digital Scan & Treatment Planning:",
    desc: "A digital scan is used to map your teeth and plan each stage of movement.",
  },
  {
    Icon: FiDisc,
    title: "Custom Aligner Fitting:",
    desc: "Your custom-made aligners are provided along with guidance on wearing and caring for them.",
  },
  {
    Icon: FiClipboard,
    title: "Progress Reviews & Aftercare:",
    desc: "Regular reviews help track progress, with retainer guidance once treatment is complete.",
  },
];

const TOTAL_H = 500;
const CARD_H = 175;
const LINE_H = 22;
const CIRCLE_D = 56;
const SPACER_H = TOTAL_H - CARD_H - LINE_H - CIRCLE_D;

export default function ClearAlignersProcessSection() {
  return (
    <section
      id="process"
      className="overflow-hidden"
      style={{ background: "linear-gradient(170deg,#F7F8FC 0%,#FEFEFE 55%,#ffffff 100%)" }}
    >
      <div
        className="max-w-[1400px] mx-auto
                      px-4 sm:px-6 md:px-8 lg:px-10
                      py-10 sm:py-12 md:py-14 lg:py-16"
      >
        <div className="text-center max-w-[760px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2
            className="font-extrabold leading-[1.1] tracking-tight text-[#363435]
                         text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]"
          >
            Our <span className="text-[#354C9C]">Clear Aligner</span> Treatment Approach
          </h2>
          <p
            className="mt-4 text-gray-500 leading-[1.8]
                        text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]"
          >
            Every aligner treatment at Hair O Graft begins with a thorough dental
            assessment to understand your teeth, gums, bite, and goals.
          </p>
          <div
            className="mt-5 inline-flex items-center rounded-lg bg-[#354C9C] text-white
                          font-semibold px-4 sm:px-5 py-2
                          text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
          >
            The treatment process includes:
          </div>
        </div>

        {/* Desktop zigzag */}
        <div className="hidden lg:block relative" style={{ height: `${TOTAL_H}px` }}>
          <div
            className="absolute left-0 right-0 bg-[#D8DDE8]"
            style={{ top: `${CARD_H + LINE_H + CIRCLE_D / 2}px`, height: "2px" }}
          />

          <div className="grid grid-cols-4 h-full">
            {steps.map((step, i) => {
              const above = i % 2 === 0;
              return (
                <div key={step.title} className="flex flex-col items-center px-1">
                  {above ? (
                    <>
                      <div
                        className="w-full bg-white rounded-2xl border border-[#D8DDE8]
                          shadow-[0_2px_14px_rgba(53,76,156,0.07)] p-4 overflow-hidden"
                        style={{ height: `${CARD_H}px` }}
                      >
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#F7F8FC] flex items-center justify-center">
                            <step.Icon className="text-[#354C9C] w-5 h-5" />
                          </div>
                        </div>
                        <h4 className="font-extrabold text-[#363435] text-[13px] lg:text-[14px] leading-snug mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-500 text-[12px] lg:text-[13px] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                      <div className="w-[2px] bg-[#D8DDE8]" style={{ height: `${LINE_H}px` }} />
                      <div
                        className="flex-shrink-0 rounded-full bg-[#354C9C] flex items-center
                                    justify-center shadow-[0_4px_16px_rgba(53,76,156,0.40)] relative z-10"
                        style={{ width: `${CIRCLE_D}px`, height: `${CIRCLE_D}px` }}
                      >
                        <step.Icon className="text-white w-7 h-7" />
                      </div>
                      <div style={{ height: `${SPACER_H}px` }} />
                    </>
                  ) : (
                    <>
                      <div style={{ height: `${SPACER_H}px` }} />
                      <div
                        className="flex-shrink-0 rounded-full bg-[#354C9C] flex items-center
                                    justify-center shadow-[0_4px_16px_rgba(53,76,156,0.40)] relative z-10"
                        style={{ width: `${CIRCLE_D}px`, height: `${CIRCLE_D}px` }}
                      >
                        <step.Icon className="text-white w-7 h-7" />
                      </div>
                      <div className="w-[2px] bg-[#D8DDE8]" style={{ height: `${LINE_H}px` }} />
                      <div
                        className="w-full bg-white rounded-2xl border border-[#D8DDE8]
                          shadow-[0_2px_14px_rgba(53,76,156,0.07)] p-4 overflow-hidden"
                        style={{ height: `${CARD_H}px` }}
                      >
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#F7F8FC] flex items-center justify-center">
                            <step.Icon className="text-[#354C9C] w-5 h-5" />
                          </div>
                        </div>
                        <h4 className="font-extrabold text-[#363435] text-[13px] lg:text-[14px] leading-snug mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-500 text-[12px] lg:text-[13px] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet list */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 sm:left-7 top-5 bottom-5 w-[2px] bg-[#D8DDE8]" />
          <div className="space-y-4 sm:space-y-5">
            {steps.map((step) => (
              <div key={step.title} className="flex items-start gap-3 sm:gap-4 relative">
                <div
                  className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#354C9C]
                                flex items-center justify-center
                                shadow-[0_4px_16px_rgba(53,76,156,0.35)] relative z-10"
                >
                  <step.Icon className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div
                  className="flex-1 bg-white rounded-2xl border border-[#D8DDE8]
                                shadow-[0_2px_14px_rgba(53,76,156,0.07)] p-4 sm:p-5 min-w-0"
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F7F8FC] flex items-center justify-center flex-shrink-0">
                      <step.Icon className="text-[#354C9C] w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="font-extrabold text-[#363435] text-[16px] sm:text-[18px] md:text-[20px] leading-snug mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-6 sm:mt-8 rounded-2xl px-6 sm:px-8 md:px-10 py-5 sm:py-6"
          style={{ background: "linear-gradient(135deg,#354C9C 0%,#1a3080 60%,#363435 100%)" }}
        >
          <p className="text-center text-white/90 leading-[1.75] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">
            Each treatment plan is customised based on individual alignment
            concerns and goals.
          </p>
        </div>
      </div>
    </section>
  );
}
