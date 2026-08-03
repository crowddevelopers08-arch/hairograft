import Image from "next/image";

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const tips = [
  "Apply sunscreen regularly",
  "Follow a gentle skincare routine",
  "Avoid harsh exfoliants for a few days",
  "Limit excessive sun exposure",
  "Follow any aftercare instructions provided by your clinician",
];

export default function CarbonPeelRecoverySection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(170deg,#F7F8FC 0%,#FEFEFE 55%,#ffffff 100%)" }}
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-9 md:py-10 lg:py-10">
        <div className="text-center max-w-[760px] mx-auto mb-6 sm:mb-7 lg:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#354C9C]/10 border border-[#354C9C]/15">
            <span className="w-2 h-2 rounded-full bg-[#354C9C] flex-shrink-0" />
            <span className="text-[#354C9C] text-[11px] font-bold tracking-widest uppercase">
              Post-Treatment Care
            </span>
          </div>

          <h2 className="mt-4 font-extrabold leading-[1.1] tracking-tight text-[#363435] text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]">
            Recovery &{" "}
            <span className="text-[#354C9C]">Aftercare</span>
          </h2>

          <p className="mt-3 text-gray-500 leading-[1.75] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            Carbon Peel generally involves little to no downtime, although some patients may
            experience temporary redness or warmth following treatment.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-4 sm:gap-5 lg:gap-6 items-stretch">
          <div className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-full rounded-[28px] overflow-hidden bg-white border border-[#D8DDE8] shadow-[0_8px_30px_rgba(53,76,156,0.08)]">
            <div className="relative h-full min-h-[350px] sm:min-h-[280px]">
              <Image
                src="/carbonlaser.png"
                alt="Carbon peel aftercare"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2752]/75 via-[#1D2752]/20 to-transparent" />
            </div>
          </div>

          <div className="bg-white rounded-[28px] border border-[#D8DDE8] shadow-[0_8px_30px_rgba(53,76,156,0.07)] p-4 sm:p-5 md:p-5 lg:p-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#E4E8F0]">
              <div className="w-10 h-10 rounded-2xl bg-[#354C9C] flex items-center justify-center flex-shrink-0">
                <CheckCircleIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[#354C9C] font-black tracking-widest uppercase text-[11px]">
                  After treatment, you may be advised to:
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {tips.map((tip, index) => (
                <div
                  key={tip}
                  className="group flex items-start gap-3 rounded-2xl border border-[#E4E8F0] bg-[#FBFCFF] px-4 py-3 hover:border-[#C9D4F4] hover:shadow-[0_8px_24px_rgba(53,76,156,0.08)] transition-all duration-200"
                >
                  <span className="w-7 text-[#354C9C] text-[18px] font-black leading-none opacity-15">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#354C9C]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircleIcon className="w-4 h-4 text-[#354C9C]" />
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
