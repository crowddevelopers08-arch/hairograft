import Image from "next/image";
import Link from "next/link";

type IconProps = { className?: string };

function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

const steps = [
  {
    num: "01",
    icon: "/road-icons-1.png",
    title: "Book Your Visit",
    desc: "Call, WhatsApp or book online. Pick a date and time that works for you.",
  },
  {
    num: "02",
    icon: "/road-icons-2.png",
    title: "Consultation & Diagnosis",
    desc: "Meet the right specialist for your concern. We listen properly, examine carefully, and get to the actual cause.",
  },
  {
    num: "03",
    icon: "/road-icons-3.png",
    title: "Your Personalised Plan",
    desc: "You receive a clear treatment plan, honest options, realistic timelines and upfront costs. No surprises.",
  },
  {
    num: "04",
    icon: "/road-icons-4.png",
    title: "Treatment",
    desc: "Your sessions are carried out by trained professionals in a clean, comfortable and welcoming setting.",
  },
  {
    num: "05",
    icon: "/road-icons-5.png",
    title: "Follow-Up & Care",
    desc: "We track your progress and guide your aftercare, so your results are looked after for the long run.",
  },
];

export default function RoadmapSection() {
  return (
    <section className="bg-white py-10 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto mb-5 max-w-[680px] text-center sm:mb-10 lg:mb-10">
          <span className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#354C9C]">
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rotate-45 bg-[#ED3136]" />
              <span className="h-px w-6 bg-[#ED3136]/40" />
            </span>
            Your Journey With Us
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-px w-6 bg-[#ED3136]/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#ED3136]" />
            </span>
          </span>
          <h2 className="mt-3 text-[26px] font-extrabold leading-[1.15] tracking-tight text-[#363435] sm:text-[32px] lg:text-[40px]">
            From first call to{" "}
            <span className="relative inline-block text-[#ED3136]">
              lasting care .
              <svg
                className="absolute -bottom-1.5 left-0 w-full sm:-bottom-2"
                height="8"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M2 6 C 50 2, 150 2, 198 6" stroke="#ED3136" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h2>
        </div>

        {/* ── Desktop: horizontal stepper ── */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute left-[10%] right-[10%] top-7 h-[2px] bg-[#D8DDE8]" />
            <div className="relative grid grid-cols-5">
              {steps.map((step) => (
                <div key={step.num} className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#354C9C] bg-white shadow-[0_4px_16px_rgba(53,76,156,0.14)]">
                    <Image src={step.icon} alt={step.title} width={36} height={36} className="h-9 w-9" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-5 gap-6 xl:gap-8">
            {steps.map((step) => (
              <div key={step.num} className="px-1 pt-0 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#ED3136]">Step {step.num}</p>
                <h3 className="mt-2 text-[16px] font-extrabold leading-snug text-[#363435] xl:text-[17px]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile / tablet: vertical stepper ── */}
        <div className="relative lg:hidden">
          <div className="absolute bottom-6 left-7 top-6 w-[2px] bg-[#D8DDE8]" />

          <div className="space-y-3 sm:space-y-9">
            {steps.map((step) => (
              <div key={step.num} className="relative flex gap-4 sm:gap-5">
                <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#354C9C] bg-white shadow-[0_4px_16px_rgba(53,76,156,0.14)]">
                  <Image src={step.icon} alt={step.title} width={28} height={28} className="h-6 w-6" />
                </div>

                <div className="min-w-0 flex-1 pt-1.5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#ED3136]">Step {step.num}</p>
                  <h3 className="mt-1.5 text-[17px] font-extrabold leading-snug text-[#363435] sm:text-[18px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-500 sm:text-[15px]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex justify-center sm:mt-10 lg:mt-10">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#354C9C] py-2 pl-6 pr-2 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2B3E80] active:translate-y-0"
          >
            Book Your Visit
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#354C9C] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
