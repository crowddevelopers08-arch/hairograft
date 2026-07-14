import Image from "next/image";
import ConsultationCtaBar from "./ConsultationCtaBar";

const features = [
  { title: "Hair Regrowth Treatment" },
  { title: "Hair Loss Treatment" },
  { title: "Baldness Treatment" },
  { title: "Scalp Treatments" },
];

const credentials = ["BDS", "FMC"];

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="m3.25 8.25 3 3 6.5-6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <path
        d="M0 24V14.6C0 6.6 4.6 1.2 12.4 0l1.4 3.6C9 4.8 6.6 7.6 6.4 12H13v12H0Zm18.6 0V14.6c0-8 4.6-13.4 12.4-14.6L32.4 3.6C27.6 4.8 25.2 7.6 25 12h6.6v12H18.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Certificate-style corner brackets — reused wherever a panel should read
 *  as "verified / certified", echoing the same accent used on the About
 *  Healthcare section. */
function CornerBrackets({ color = "#364B9B" }: { color?: string }) {
  return (
    <>
      <svg className="pointer-events-none absolute -left-2.5 -top-2.5 h-9 w-9" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M2 14V6a4 4 0 0 1 4-4h8" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <svg className="pointer-events-none absolute -right-2.5 -bottom-2.5 h-9 w-9" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M34 22v8a4 4 0 0 1-4 4h-8" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    </>
  );
}

/* ---------------------------------------------------------------------- *
 * Shared design tokens (spacing / radius / elevation) so every card in
 * this section reads as one system instead of one-off values.
 * ---------------------------------------------------------------------- */
const RADIUS_LG = "rounded-[28px] max-sm:rounded-[22px]";
const SHADOW_SOFT = "shadow-[0_2px_10px_rgb(11_18_51_/_5%)]";

/** Floating "5+ years" badge — sizes itself per breakpoint via one class set. */


/** Small video-call thumbnail with the doctor's name label underneath. */
function VideoThumb({ className = "", imgHeightClass = "h-[190px] sm:h-[215px]" }) {
  return (
    <div
      className={`overflow-hidden rounded-[26px] bg-[#0b1233] ring-1 ring-white/10 sm:rounded-[28px] ${className}`}
    >
      <div className={`relative ${imgHeightClass}`}>
        <Image
          src="/doctor.png"
          alt="Professional hair consultation video support"
          fill
          className="object-cover"
          sizes="220px"
        />
      </div>
    </div>
  );
}

/**
 * The doctor's photo collage. Layout differs enough between phone and
 * desktop (stacked vs. overlapping) that it's kept as two compositions,
 * but every repeated piece (badge, thumb, gradient) is a shared component.
 */
function DoctorImageCollage() {
  return (
    <>
      {/* Phone / tablet composition */}
      <div className="relative mx-auto min-h-[480px] w-full max-w-[420px] sm:min-h-[560px] lg:hidden">
        <div className="absolute inset-x-4 top-6 bottom-6 -z-10 rounded-[40px] bg-gradient-to-br from-[#364b9b]/[0.08] to-[#d92732]/[0.06]" />

        <div className="absolute left-0 top-0 bottom-0 w-full sm:w-[80%] overflow-hidden rounded-[34px] bg-[#f6f8ff] shadow-[0_20px_45px_rgb(11_18_51_/_12%)] ring-1 ring-[#0b1233]/[0.04] sm:rounded-[42px]">
          <video
            src="/video-1_squished.mp4"
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Dr. E. Hema Shree hair specialist caring for patient"
          />
        </div>

        <VideoThumb
          className="absolute right-[-30px] bottom-[-70px] w-[46%] min-w-[150px] sm:min-w-[170px] sm:bottom-[-80px]"
          imgHeightClass="h-[200px] sm:h-[160px]"
        />
      </div>

      {/* Desktop composition */}
      <div className="relative mx-auto hidden min-h-[560px] w-full max-w-[540px] lg:mx-0 lg:block lg:justify-self-end">
        <div className="absolute -inset-6 -z-10 rounded-[64px]" />

        <div className="absolute left-0 top-0 bottom-0 w-[82%] overflow-hidden rounded-[52px] bg-[#f6f8ff] shadow-[0_28px_60px_rgb(11_18_51_/_14%)] ring-1 ring-[#0b1233]/[0.04]">
          <video
            src="/video-1_squished.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Dr. E. Hema Shree hair specialist caring for patient"
          />
        </div>

        <VideoThumb
          className="absolute right-0 bottom-[-50px] w-[50%] min-w-[260px]"
          imgHeightClass="h-[220px] sm:h-[260px]"
        />
      </div>
    </>
  );
}

function DoctorHeader() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-extrabold uppercase tracking-wide text-[#0b1233]">
        Dr. E. Hema Shree
      </span>
      <span className="flex items-center gap-2">
        {credentials.map((cred) => (
          <span
            key={cred}
            className={`rounded-full px-3 py-1 text-[12px] md:text-[13px] lg:text-[14px] font-bold tracking-wide ${
              cred === "BDS"
                ? "bg-[#364b9b]/[0.08] text-[#364b9b]"
                : "bg-[#d92732]/[0.08] text-[#d92732]"
            }`}
          >
            {cred}
          </span>
        ))}
      </span>
    </div>
  );
}

function ExpertiseGrid() {
  return (
    <div className={``}>
      <span className="text-[12px] md:text-[11px] lg:text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#364b9b]/70">
        Areas of Expertise
      </span>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-x-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_2px_8px_rgb(11_18_51_/_5%)] ring-1 ring-[#0b1233]/[0.03] transition-colors duration-200 hover:bg-[#364b9b]/[0.06]"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#364b9b] text-white">
              <CheckIcon />
            </div>
            <h3 className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] font-extrabold leading-tight text-[#0b1233]">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <blockquote className="relative flex gap-4 rounded-[22px] border border-[#0b1233]/[0.05] bg-[#0b1233]/[0.02] py-4 pl-5 pr-4 sm:py-5 sm:pl-6">
      <span className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-[#d92732]" />
      <span className="mt-1 shrink-0 text-[#364b9b]/20">
        <QuoteIcon />
      </span>
      <p className="text-[12px] md:text-[14px] lg:text-[14px] font-medium italic leading-7 text-[#2b3a55]">
        She believes every patient deserves a personalized treatment plan
        based on their unique hair condition and focuses on achieving
        natural-looking, long-lasting results.
      </p>
    </blockquote>
  );
}

function SectionDivider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-[#0b1233]/12 via-[#0b1233]/12 to-transparent" />
  );
}

export default function ProfessionalsSection() {
  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-white px-5 py-8 max-sm:px-4 max-sm:py-10 sm:px-5 lg:px-10 lg:py-8"
      id="doctors"
    >
      {/* Doctor photo set as an ambient background behind the section */}
      <div className="pointer-events-none absolute inset-0">
        <video
          src="/video-1_squished.mp4"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.08]"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* Ambient brand glow, consistent with the CTA section */}
      <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#364b9b]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-[360px] w-[360px] rounded-full bg-[#d92732]/[0.05] blur-3xl" />

      {/* Faint strand linework echoing the CTA section's texture */}
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

      {/* Centered intro */}
      <div className="relative z-10 mx-auto flex max-w-[1160px] flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 text-[12px] md:text-[13px] lg:text-[14px] font-bold uppercase tracking-[0.28em] text-[#364B9B]">
          <span className="h-px w-6 bg-[#364b9b]" />
          Doctor Section
          <span className="h-px w-6 bg-[#d92732]" />
        </span>

        <h2 className="mt-3 max-w-[580px] text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-extrabold leading-[1.16] text-[#0b1233]">
          Meet Your{" "}
          <span className="relative inline-block text-[#d92732]">
            Hair Specialist
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
        </h2>
      </div>

      {/* Framed detail card */}
      <div
        className={`relative z-10 mx-auto mt-6 max-w-[1220px] p-6 backdrop-blur-sm max-sm:mt-4 max-sm:rounded-[24px] max-sm:p-4 sm:p-10 sm:rounded-[44px] lg:rounded-[44px] lg:p-14`}
      >
        <CornerBrackets color="#364B9B" />

        <div className="relative grid max-w-[1160px] items-center gap-14 lg:mx-auto lg:grid-cols-2 lg:gap-16">
          <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0b1233]/10 to-transparent lg:block" />

          {/* Info column — one consistent vertical rhythm instead of
              scattered per-element margins */}
          <div className="relative z-10 mx-auto flex w-full max-w-[540px] flex-col gap-8 max-sm:gap-5 lg:mx-0 lg:justify-self-start">
            <div className="flex flex-col gap-4 max-sm:gap-3">
              <DoctorHeader />
              <p className="max-w-[500px] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-7 text-[#2b3a55]">
                Aesthetic Practitioner &amp; Cosmetology Specialist with over
                5+ years of clinical experience. She creates personalized
                treatment plans based on each patient&apos;s unique hair
                condition.
              </p>
            </div>

            {/* Image collage renders here on phones/tablets; it re-slots
                into the right column below on lg+ via its own hidden/block classes */}
            <div className="mt-2 mb-[70px] max-sm:mt-0 sm:mb-[80px] lg:hidden lg:mt-0 lg:mb-0">
              <DoctorImageCollage />
            </div>

            <SectionDivider />

            <ExpertiseGrid />

            <Testimonial />

            <SectionDivider />

            <a
              className="group inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#364b9b] px-8 text-[14px] lg:text-[16px] font-bold text-white transition-all duration-200 hover:bg-[#d92732] hover:shadow-[0_10px_24px_rgb(217_39_50_/_28%)] sm:w-auto"
              href="#lead-form"
            >
              Book Appointment
              <ArrowRightIcon />
            </a>
          </div>

          {/* Desktop-only slot for the collage (mobile version already
              rendered inline in the left column above) */}
          <div className="hidden lg:flex lg:h-full lg:flex-col lg:justify-end lg:self-stretch">
            <DoctorImageCollage />
          </div>
        </div>
      </div>
          <ConsultationCtaBar />
      
    </section>
  );
}

