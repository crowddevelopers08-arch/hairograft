import {
  FiShield,
  FiCheckCircle,
  FiActivity,
  FiStar,
  FiZap,
} from "react-icons/fi";

const benefits = [
  { Icon: FiShield, title: "Restored tooth strength and function" },
  { Icon: FiCheckCircle, title: "Protection for a damaged or weakened tooth" },
  { Icon: FiActivity, title: "Improved ability to bite and chew comfortably" },
  { Icon: FiStar, title: "A natural-looking restoration with tooth-coloured crowns" },
  { Icon: FiZap, title: "Long-lasting durability with proper care" },
];

export default function DentalCrownsIdealCandidateSection() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-0">

        {/* Left panel */}
        <div
          className="relative flex flex-col justify-center
                      lg:w-[42%] xl:w-[38%]
                      px-6 sm:px-10 md:px-12 lg:px-10 xl:px-14
                      py-10 sm:py-12 lg:py-14 xl:py-16 overflow-hidden"
          style={{ background: "linear-gradient(145deg,#363435 0%,#1a3080 60%,#253d9e 100%)" }}
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle,#354C9C 0%,transparent 70%)" }} />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle,#354C9C 0%,transparent 70%)" }} />

          <h2 className="relative z-10 font-extrabold leading-[1.1] tracking-tight text-white
                         text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]">
            Benefits &amp; Results of{" "}
            <span className="text-[#FEEA1B]">Dental Crowns</span>
          </h2>

          <div className="relative z-10 flex items-center gap-1.5 mt-4 sm:mt-5">
            <div className="w-10 h-[3px] rounded-full bg-[#FEEA1B]" />
            <div className="w-4  h-[3px] rounded-full bg-[#FEEA1B] opacity-50" />
            <div className="w-2  h-[3px] rounded-full bg-[#FEEA1B] opacity-25" />
          </div>

          <p className="relative z-10 mt-4 sm:mt-5 text-white/65 leading-[1.75]
                        text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">
            A dental crown can restore both the function and appearance of a damaged tooth,
            often allowing you to return to normal eating and speaking.
          </p>

          <div className="relative z-10 mt-6 sm:mt-8 rounded-2xl border border-white/15
                          bg-white/10 px-4 sm:px-5 py-4">
            <p className="text-white/80 leading-[1.7] text-[13px] sm:text-[14px] md:text-[15px]">
              Many patients can use the tooth normally once the crown is fitted and settled.
              Individual results vary, and a crown&apos;s lifespan depends on the material used,
              your bite, and how well the tooth and gums are cared for over time.
            </p>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col justify-center bg-[#FEFEFE]
                        px-6 sm:px-10 md:px-12 lg:px-10 xl:px-14
                        py-10 sm:py-12 lg:py-14 xl:py-16">
          <div className="inline-flex self-start items-center gap-2 mb-5 sm:mb-6
                          bg-[#354C9C] text-white font-semibold rounded-lg
                          px-4 sm:px-5 py-2
                          text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]">
            Potential benefits and results may include:
          </div>

          {/* Mobile grid */}
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

          {/* sm+ list */}
          <div className="hidden sm:grid grid-cols-2 gap-x-6 gap-y-0">
            {benefits.map((b, i) => (
              <div key={i}
                className="flex items-center gap-3 py-3 border-b border-[#D8DDE8]
                           last:border-b-0 [&:nth-last-child(2)]:border-b-0">
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
