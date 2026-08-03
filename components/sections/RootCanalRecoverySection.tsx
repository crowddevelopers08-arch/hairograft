import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const tips = [
  "Avoid chewing on the treated side until it is fully restored",
  "Take recommended pain relief if needed",
  "Maintaining good oral hygiene",
  "Eating soft foods for the first few days",
  "Attending any follow-up appointment for your crown or restoration",
];

export default function RootCanalRecoverySection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(170deg,#F7F8FC 0%,#FEFEFE 55%,#ffffff 100%)" }}
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10
                      py-8 sm:py-9 md:py-10 lg:py-10">

        <div className="text-center max-w-[760px] mx-auto mb-6 sm:mb-7 lg:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                          bg-[#354C9C]/10 border border-[#354C9C]/15">
            <span className="w-2 h-2 rounded-full bg-[#354C9C] flex-shrink-0" />
            <span className="text-[#354C9C] text-[11px] font-bold tracking-widest uppercase">
              Post-Treatment Care
            </span>
          </div>

          <h2 className="mt-4 font-extrabold leading-[1.1] tracking-tight text-[#363435]
                         text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]">
            Recovery &amp;{" "}
            <span className="text-[#354C9C]">Aftercare</span>
          </h2>

          <p className="mt-3 text-gray-500 leading-[1.75]
                        text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            Downtime for root canal treatment varies from person to person, though mild
            soreness for a few days is normal as the area heals.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-4 sm:gap-5 lg:gap-6 items-stretch">

          <div className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-full
                          rounded-[28px] overflow-hidden bg-white border border-[#D8DDE8]
                          shadow-[0_8px_30px_rgba(53,76,156,0.08)]">
            <div className="relative h-full min-h-[380px] sm:min-h-[280px]">
              <Image
                src="/root-treatment.png"
                alt="Root canal treatment aftercare"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2752]/75 via-[#1D2752]/20 to-transparent" />
            </div>
          </div>

          <div className="bg-white rounded-[28px] border border-[#D8DDE8]
                          shadow-[0_8px_30px_rgba(53,76,156,0.07)]
                          p-4 sm:p-5 md:p-5 lg:p-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E4E8F0]">
              <div className="w-10 h-10 rounded-2xl bg-[#354C9C] flex items-center justify-center flex-shrink-0">
                <FiCheckCircle className="w-5 h-5 text-white" />
              </div>
              <p className="text-[#354C9C] font-black tracking-widest uppercase text-[11px]">
                For a smooth recovery, we recommend:
              </p>
            </div>

            <div className="mt-4 space-y-3">
              {tips.map((tip, index) => (
                <div key={tip}
                  className="group flex items-start gap-3 rounded-2xl border border-[#E4E8F0]
                             bg-[#FBFCFF] px-4 py-3
                             hover:border-[#C9D4F4] hover:shadow-[0_8px_24px_rgba(53,76,156,0.08)]
                             transition-all duration-200">
                  <span className="w-7 text-[#354C9C] text-[18px] font-black leading-none opacity-15">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#354C9C]/10 flex items-center justify-center flex-shrink-0">
                    <FiCheckCircle className="w-4 h-4 text-[#354C9C]" />
                  </div>
                  <p className="text-[#555555] leading-[1.65] text-[14px] sm:text-[15px] md:text-[15px]">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
