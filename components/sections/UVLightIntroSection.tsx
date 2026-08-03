import { FiSearch, FiUsers, FiZap, FiShield, FiHeart } from "react-icons/fi";
import type { IconType } from "react-icons";

const features: { number: string; title: string; Icon: IconType }[] = [
  { number: "01", title: "Expert hair and scalp consultations", Icon: FiSearch },
  { number: "02", title: "Experienced hair care professionals", Icon: FiUsers },
  { number: "03", title: "Advanced, autologous treatment technology", Icon: FiZap },
  { number: "04", title: "High standards of safety and hygiene", Icon: FiShield },
  { number: "05", title: "Patient-focused care and support", Icon: FiHeart },
];

const COL_CENTERS = [10, 30, 50, 70, 90];

function FeatureCard({ item }: { item: (typeof features)[0] }) {
  return (
    <div
      className="flex flex-col items-center text-center
                    bg-white rounded-xl sm:rounded-2xl border border-[#D8DDE8]
                    shadow-[0_4px_20px_rgba(53,76,156,0.06)]
                    hover:shadow-[0_8px_32px_rgba(53,76,156,0.14)]
                    hover:-translate-y-1 transition-all duration-300
                    px-3 pt-4 pb-3
                    sm:px-3 sm:pt-5 sm:pb-4
                    md:px-4 md:pt-6 md:pb-5"
    >
      <div
        className="flex items-center justify-center rounded-full
                      bg-[#F7F8FC] hover:bg-[#E2EBFF]
                      transition-colors duration-300 flex-shrink-0
                      w-11 h-11 sm:w-14 sm:h-14 md:w-[68px] md:h-[68px]"
      >
        <item.Icon className="text-[#354C9C] w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </div>
      <h3
        className="font-bold text-[#363435] leading-snug
                     mt-2 sm:mt-2.5 md:mt-3
                     text-[11px] sm:text-[12px] md:text-[13px]"
      >
        {item.title}
      </h3>
    </div>
  );
}

export default function UVLightIntroSection() {
  return (
    <section className="bg-gradient-to-b from-[#F7F8FC] via-[#FEFEFE] to-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-14">
        <h2
          className="text-center font-extrabold text-[#363435] leading-[1.2] tracking-tight
                        text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]"
        >
          Why Patients Choose{" "}
          <span className="text-[#354C9C]">Hair O Graft</span>
          <br className="hidden sm:block" /> for UV Light Therapy
        </h2>

        <p
          className="mx-auto text-center text-gray-600 leading-[1.8]
                       max-w-[600px] xl:max-w-[760px]
                       mt-3 sm:mt-4 md:mt-5 lg:mt-6
                       text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]"
        >
          At Hair O Graft, before recommending any treatment, our specialists
          conduct a detailed scalp and hair assessment to identify the cause of
          hair loss, evaluate scalp health, and create a personalised treatment
          plan.
        </p>

        <div className="flex justify-center mt-5 sm:mt-6">
          <div
            className="bg-[#354C9C] text-white font-semibold rounded-2xl
                          shadow-[0_8px_24px_rgba(53,76,156,0.35)]
                          px-5 sm:px-7 md:px-8 py-2 sm:py-2.5
                          text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
          >
            Patients trust us for:
          </div>
        </div>

        {/* Connector xl */}
        <div className="relative hidden xl:block" style={{ height: "58px" }}>
          <div
            className="absolute w-[3px] bg-[#D8DDE8]"
            style={{ left: "50%", top: 0, height: "18px", transform: "translateX(-50%)" }}
          />
          <div
            className="absolute bg-[#D8DDE8]"
            style={{ top: "18px", left: "10%", right: "10%", height: "3px" }}
          />
          <div
            className="absolute"
            style={{
              top: "18px",
              left: "10%",
              width: "16px",
              height: "30px",
              borderTop: "3px solid #D8DDE8",
              borderLeft: "3px solid #D8DDE8",
              borderTopLeftRadius: "10px",
            }}
          />
          <div
            className="absolute"
            style={{
              top: "18px",
              right: "10%",
              width: "16px",
              height: "30px",
              borderTop: "3px solid #D8DDE8",
              borderRight: "3px solid #D8DDE8",
              borderTopRightRadius: "10px",
            }}
          />
          {COL_CENTERS.slice(1, 4).map((pct) => (
            <div
              key={pct}
              className="absolute w-[3px] bg-[#D8DDE8]"
              style={{ left: `${pct}%`, top: "18px", height: "30px", transform: "translateX(-50%)" }}
            />
          ))}
          {COL_CENTERS.map((pct) => (
            <div
              key={pct}
              className="absolute rounded-full bg-[#354C9C] border-2 border-white shadow-sm"
              style={{
                left: `${pct}%`,
                top: "48px",
                width: "10px",
                height: "10px",
                transform: "translate(-50%, 0)",
              }}
            />
          ))}
        </div>

        {/* Simple connector sm-xl */}
        <div className="hidden sm:flex xl:hidden flex-col items-center mt-3 mb-1">
          <div className="w-[3px] h-4 bg-[#D8DDE8]" />
          <div className="w-2 h-2 rounded-full bg-[#354C9C] border-2 border-white shadow-sm" />
        </div>

        {/* Mobile marquee */}
        <div className="block sm:hidden mt-3 -mx-4 overflow-hidden">
          <div className="relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-8 z-10
                            bg-gradient-to-r from-[#F7F8FC] to-transparent pointer-events-none"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-8 z-10
                            bg-gradient-to-l from-[#F7F8FC] to-transparent pointer-events-none"
            />
            <div className="marquee-track gap-3 py-2 px-2">
              {[...features, ...features].map((item, i) => (
                <div key={i} className="w-[154px] flex-shrink-0">
                  <FeatureCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* sm+ grid */}
        <div
          className="hidden sm:grid mt-0 gap-3 md:gap-4
                        sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
        >
          {features.map((item) => (
            <FeatureCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
