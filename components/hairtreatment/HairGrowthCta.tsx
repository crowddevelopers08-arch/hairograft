const highlights = [
  "Personalized Hair & Scalp Analysis",
  "Advanced PRP, GFC & Hair Restoration Treatments",
  "Experienced Hair Specialists & Modern Technology",
  "Safe, Effective & Result-Driven Care",
];

function CheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="m3.75 9.25 3.25 3.25 7.25-7.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 8h11.5M8.5 2.5 14 8l-5.5 5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function HairMark() {
  return (
    <svg className="h-28 w-28 text-[#364b9b]/10" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path
        d="M27 82c8-39 38-62 72-51-24 9-40 27-48 61"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="10"
      />
      <path
        d="M40 92c9-27 29-42 54-43"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="8"
      />
    </svg>
  );
}

export default function HairGrowthCta() {
  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-white px-5 py-5 text-[#0b1233] sm:px-8 lg:px-10 lg:py-8"
      id="contact"
    >
      {/* Ambient brand glow, consistent with the FAQ section */}
      <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#364b9b]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-[360px] w-[360px] rounded-full bg-[#d92732]/[0.05] blur-3xl" />

      {/* Faint strand linework echoing the FAQ section's texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={i}
            d={`M ${1300 - i * 70} -50 C ${1050 - i * 70} 250, ${1150 - i * 70} 540, ${900 - i * 90} 850`}
            stroke={i % 2 === 0 ? "#364b9b" : "#d92732"}
            strokeWidth="1.5"
            fill="none"
          />
        ))}
      </svg>

      <div className="relative z-10 mx-auto grid max-w-[1120px] items-center gap-12 max-sm:gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <span className="animate-slip-left inline-flex items-center gap-2 rounded-full px-5 py-1 text-[12px] md:text-[13px] lg:text-[14px] font-bold uppercase tracking-[0.18em] text-[#364b9b]">
          <span className="h-px w-6 bg-[#364b9b]" />
            Hair O Growth
          <span className="h-px w-6 bg-[#d92732]" />
          </span>

          <h1 className="animate-slip-left animation-delay-100 mt-3 max-sm:mt-3 max-w-[760px] text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-extrabold leading-[1.14] tracking-[-0.01em] text-[#0b1233]">            Stop Your Hair Loss.
            <br />
            Start Your{" "}
            <span className="relative inline-block text-[#d92732]">
              Hair Regrowth
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 260 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 C 70 2, 190 2, 258 7"
                  stroke="#d92732"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="animate-slip-left animation-delay-200 mt-6 max-sm:mt-3 max-w-[620px] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-8 text-[#5a6a82]">
            Advanced Hair Growth, Hair Loss & Baldness Treatments Tailored Just
            for You
          </p>

          <a
            className="group hidden animate-slip-up animation-delay-500 mt-9 sm:inline-flex h-[56px] items-center justify-center gap-2.5 rounded-full bg-[#364b9b] px-8 text-[14px] lg:text-[16px] font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d92732] hover:shadow-[0_16px_32px_-12px_rgb(217_39_50_/45%)]"
            href="#lead-form"
          >
            Book Your Appointment Now
            <ArrowIcon />
          </a>
        </div>

        <div className="animate-slip-right relative overflow-hidden rounded-[20px] border border-[#364b9b]/10 bg-[#f6f8ff] p-6 shadow-[0_28px_60px_-16px_rgb(20_41_86_/16%)] sm:p-8">

          {/* <p className="relative text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#364b9b]/70">
            Why Choose Us
          </p> */}

          <div className="relative mt-0 grid gap-3.5">
            {highlights.map((item, index) => {
              const accent = index % 2 === 0 ? "#364b9b" : "#d92732";
              return (
                <div
                  className="animate-slip-right group flex items-center gap-4 rounded-[14px] border border-[#364b9b]/10 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgb(20_41_86_/18%)]"
                  style={{ animationDelay: `${260 + index * 90}ms` }}
                  key={item}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-colors duration-200"
                    style={{ backgroundColor: accent }}
                  >
                    <CheckIcon />
                  </span>
                  <p className="text-[14px] md:text-[15px] lg:text-[16px] font-bold leading-6 text-[#0b1233]">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <a
          className="group animate-slip-up animation-delay-500 mt-6 max-sm:mt-0 flex h-[56px] w-full max-w-[360px] items-center justify-center gap-2.5 rounded-full bg-[#364b9b] px-4 text-[14px] font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d92732] hover:shadow-[0_16px_32px_-12px_rgb(217_39_50_/45%)] sm:hidden whitespace-nowrap mx-auto"
          href="#lead-form"
        >
          Book Your Appointment Now
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}