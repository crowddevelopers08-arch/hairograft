import Image from "next/image";

const clinicPoints = [
  "Root Cause Diagnosis",
  "Certified Hair Specialists",
  "Advanced PRP & GFC Technology",
  "Customized Treatment Plans",
  "Safe & Minimally Invasive Procedures",
  "Affordable Treatment Option",
];

function ClockIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 7v6l4 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#D92732]/50 bg-[#D92732]/10 text-[#D92732] transition-colors duration-300 group-hover:bg-[#D92732] group-hover:text-[#0D1330]">
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12.5 10 17 19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      </svg>
    </span>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
    </svg>
  );
}

/** Certificate-style corner brackets — reused on both panels, tinted to
 *  each panel's assigned brand color. Reads as "verified / certified",
 *  which fits a clinic that leads with credentials. */
function CornerBrackets({ color }: { color: "red" | "blue" }) {
  const c = color === "red" ? "#D92732" : "#364B9B";
  return (
    <>
      <svg className="pointer-events-none absolute -left-2.5 -top-2.5 h-9 w-9" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M2 14V6a4 4 0 0 1 4-4h8" stroke={c} strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <svg className="pointer-events-none absolute -right-2.5 -bottom-2.5 h-9 w-9" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M34 22v8a4 4 0 0 1-4 4h-8" stroke={c} strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    </>
  );
}

export default function AboutHealthcare() {
  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-[#0B0F1E] px-5 py-5 text-white sm:px-8 lg:px-12 lg:py-8"
      id="about"
    >
      {/* Ambient background image — reuses the clinic photo already in the
          project, kept quiet behind a dark scrim + grid so it reads as
          atmosphere, not a competing visual. Swap the src for a dedicated
          background/texture image if you have one. */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/surgery_fue.png"
          alt=""
          fill
          aria-hidden="true"
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[#0B0F1E]/70" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(244 246 252) 1px, transparent 1px), linear-gradient(90deg, rgb(244 246 252) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0B0F1E] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0F1E] to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-0 h-[440px] w-[440px] rounded-full bg-[#D92732]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-[380px] w-[380px] rounded-full bg-[#364B9B]/[0.14] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* Centered plaque-style header */}
        <div className="mb-14 max-sm:mb-6 flex flex-col items-center text-center">
          <div className="animate-slip-up flex items-center gap-3 text-[12px] md:text-[13px] lg:text-[14px] font-semibold uppercase tracking-[0.32em] text-[#D92732]">
            <span className="h-px w-8 bg-[#364B9B]" />
            Clinic Section
            <span className="h-px w-8 bg-[#D92732]" />
          </div>
          <h2 className="animate-slip-up animation-delay-100 mt-3 max-w-[720px] text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-extrabold leading-[1.2] text-white">
            Why Choose{" "}
            <span className="relative inline-block text-[#d92732]">
              Hair O Graft
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
            ?
          </h2>
        </div>

        {/* Equal columns, each framed the same way, tinted with the
            opposite brand color so the two sides visually answer
            each other instead of one dominating. */}
        <div className="grid items-stretch max-sm:gap-8 gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — image, blue certification frame */}
          <div className="animate-slip-left relative flex flex-col">
            <div className="relative flex-1 rounded-2xl border border-[#364B9B]/40 bg-[#0D1330] p-3">
              <CornerBrackets color="blue" />
              <div className="relative h-full min-h-[380px] overflow-hidden rounded-xl">
                <video
                  src="https://res.cloudinary.com/jfmvvhot/video/upload/v1783772880/VID-2026_xbayli.mp4"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Hair O Graft clinic and specialist showcase"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F1E]/65 via-transparent to-transparent" />
              </div>

              <div className="animate-pop animation-delay-400 absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-xl border border-white/10 bg-[#F4F6FC]/95 px-5 py-4 shadow-[0_16px_36px_rgb(0_0_0_/_30%)] backdrop-blur-md sm:left-auto sm:w-[270px]">
                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border-2 border-[#364B9B] text-[#364B9B]">
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-extrabold leading-tight text-[#0D1330]">24/7 availability</p>
                  <p className="mt-0.5 text-[12px] md:text-[13px] lg:text-[14px] font-medium text-[#0D1330]/55">For your peace of mind</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center font-mono text-[12px] md:text-[13px] lg:text-[14px] uppercase tracking-[0.2em] text-[#A9B2D9]/70 lg:text-left">
              Hair O Graft · Chennai
            </p>
          </div>

          {/* Right — content, red certification frame */}
          <div className="animate-slip-right animation-delay-100 relative flex flex-col">
            <div className="relative flex flex-1 flex-col justify-between rounded-2xl border border-[#D92732]/35 bg-[#0D1330] p-7 sm:p-9">
              <CornerBrackets color="red" />

              <div>
                <p className="max-w-[540px] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-8 text-[#A9B2D9]">
                  Chennai&apos;s Trusted Hair Restoration Clinic. At Hair O Graft, we
                  focus on treating the root cause of hair loss, not just masking the
                  symptoms. Using advanced medical technology and evidence-based
                  treatments, we create personalized solutions that help restore
                  natural hair growth safely and effectively.
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-[#364B9B]/50 via-white/10 to-[#D92732]/50" />

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {clinicPoints.map((point) => (
                    <li
                      key={point}
                      className="group flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.02] px-3.5 py-3 transition-colors duration-300 hover:border-[#D92732]/40 hover:bg-white/[0.05]"
                    >
                      <CheckIcon />
                      <span className="block flex-1 text-left text-[14px] md:text-[15px] lg:text-[16px] font-semibold leading-5 text-white/90">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full border-2 border-[#D92732] bg-[#f6d6cd]">
                    <Image
                      src="/doctors.jpeg"
                      alt="Dr. E. Hema Shree"
                      fill
                      sizes="52px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-extrabold leading-tight text-white">Dr. E. Hema Shree</p>
                    <p className="mt-0.5 text-[12px] md:text-[13px] lg:text-[14px] font-medium text-[#A9B2D9]">BDS | FMC</p>
                  </div>
                </div>

                <a
                  href="#lead-form"
                  className="group inline-flex h-[50px] min-w-[164px] items-center justify-between rounded-full bg-[#D92732] pl-6 pr-2 text-[14px] lg:text-[16px] font-semibold text-white transition-transform duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Learn More
                  <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#0D1330] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRightIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
