import Image from "next/image";

const rows = [
  {
    img: "/pone.png",
    alt: "Laser hair removal consultation",
    text: "Laser hair removal is a non-invasive cosmetic treatment that uses concentrated light to target and reduce unwanted hair.",
  },
  {
    img: "/ptwo.png",
    alt: "Laser hair removal technology",
    text: "The laser energy is absorbed by the pigment in the hair follicle and converted into heat, which damages the follicle and slows future hair growth. Because hair grows in cycles, a course of sessions is needed to target hair effectively at different growth stages.",
  },
  {
    img: "/pthree.png",
    alt: "Long-term hair removal results",
    text: "Unlike waxing or shaving, which offer only temporary results, laser hair removal aims to provide longer-lasting hair reduction over time.",
  },
];

export default function LaserHairRemovalWhyChooseUsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:    "url('/lasser.png')",
        backgroundSize:     "cover",
        backgroundPosition: "right center",
        backgroundRepeat:   "no-repeat",
        backgroundColor:    "#F7F8FC",
      }}
    >
      {/* Mobile overlay */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{ background: "rgba(247,248,252,0.93)" }}
      />
      {/* Desktop overlay — solid on left, fades right */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right,rgba(247,248,252,1) 0%,rgba(247,248,252,1) 42%,rgba(247,248,252,0.45) 62%,rgba(247,248,252,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center
                      min-h-[auto] lg:min-h-[640px] xl:min-h-[700px]
                      px-4 sm:px-8 md:px-12 lg:px-14 xl:px-16 2xl:px-20
                      py-8 sm:py-12 lg:py-0">

        <div className="w-full lg:max-w-[54%] xl:max-w-[50%]">

          {/* Heading */}
          <h2 className="font-extrabold leading-[1.05] tracking-tight text-[#363435]
                          text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]">
            What is
            <br />
            <span className="text-[#354C9C]">Laser Hair Removal?</span>
          </h2>

          {/* Rows */}
          <div className="mt-5 sm:mt-7 lg:mt-8 space-y-3 sm:space-y-5">
            {rows.map((row, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4">

                {/* Image circle */}
                <div className="flex-shrink-0 rounded-full overflow-hidden
                                border-2 border-[#D8DDE8]
                                shadow-[0_2px_12px_rgba(53,76,156,0.10)]
                                w-[52px] h-[52px]
                                sm:w-[72px] sm:h-[72px]
                                lg:w-[80px] lg:h-[80px]">
                  <Image
                    src={row.img}
                    alt={row.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bullet dot — only on sm+ */}
                <div className="hidden sm:block flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C] opacity-60 mt-5" />

                {/* Text card */}
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
