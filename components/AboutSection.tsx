import Image from "next/image";
import Link from "next/link";

type IconProps = { className?: string };

function ClinicIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M12 4v5M9.5 6.5h5" />
    </svg>
  );
}

function DoctorIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="3.2" />
      <path d="M5 21c0-3.9 3.13-7 7-7s7 3.1 7 7" />
      <path d="M9.5 14.5v2a2.5 2.5 0 005 0v-2" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function StarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5l2.9 6.06 6.6.72-4.9 4.6 1.3 6.62L12 17.3l-5.9 3.2 1.3-6.62-4.9-4.6 6.6-.72L12 2.5z" />
    </svg>
  );
}

function GoogleGIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20c11.045 0 20-8.955 20-20 0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.682 0-14.344 4.337-17.694 10.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C40.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

const avatarColors = ["#354C9C", "#ED3136", "#FEEA1B", "#7EB3FF", "#4ECFAD"];

const features = [
  {
    Icon: ClinicIcon,
    title: "Modern Clinic",
    text: "A clean, well-equipped space with advanced diagnostic and treatment technology.",
  },
  {
    Icon: DoctorIcon,
    title: "Expert Specialists",
    text: "Consult experienced doctors who guide, treat and support your recovery.",
  },
];

const checklist = [
  "Your Best Look, Guided by Experts",
  "Medical Excellence. Aesthetic Precision.",
  "Advanced Care. Naturally Beautiful Results.",
];

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-10">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 max-sm:gap-3 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 xl:px-12">
        {/* ── Left: image collage + rating ── */}
        <div className="order-2 mx-auto w-full max-w-[380px] sm:order-none sm:max-w-[440px] lg:mx-0 lg:max-w-[500px] max-sm:mt-4">
          <div className="relative aspect-square sm:aspect-auto sm:h-[440px] lg:h-[650px]">
            <div className="absolute left-0 top-0 h-[80%] w-[95%] overflow-hidden rounded-[24px] border-[3px] border-white">
              <Image
                src="/clinic-image-1.png"
                alt="Hair O Graft treatment in progress"
                fill
                className="object-cover object-left-bottom"
              />
              <span className="absolute left-[50%] top-[16%] h-3 w-3 rounded-full bg-[#FEEA1B] ring-4 ring-white/70" />
            </div>

            <div className="absolute bottom-0 right-0 h-[40%] w-[58%] overflow-hidden rounded-[20px] border-[3px] border-white sm:right-[-10%]">
              <Image
                src="/clinic-image-2.png"
                alt="Hair O Graft clinic equipment"
                fill
                className="object-cover object-left-top"
              />
            </div>
          </div>
        </div>

        {/* ── Right: content ── */}
        <div className="contents sm:block">
          <div className="order-1">
            <span className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#354C9C]">
              <span aria-hidden className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rotate-45 bg-[#ED3136]" />
                <span className="h-px w-6 bg-[#ED3136]/40" />
              </span>
              About Hair O Graft
              <span aria-hidden className="flex items-center gap-1.5">
                <span className="h-px w-6 bg-[#ED3136]/40" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#ED3136]" />
              </span>
            </span>

            <h2 className="mt-5 text-[28px] font-extrabold leading-[1.08] tracking-tight text-[#363435] sm:text-[36px] lg:text-[44px]">
              Three specialties.
              <span className="relative inline-block text-[#ED3136]">
                One trusted clinic.
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

            <p className="mt-5 max-w-[540px] text-[15px] leading-relaxed text-gray-600 sm:text-[16px]">
              Hair O Graft is a multi-specialty clinic in Avadi, Chennai that brings skin,
              hair and dental care together under one roof.
            </p>

            <p className="mt-4 max-sm:mt-2 max-w-[540px] text-[15px] leading-relaxed text-gray-600 sm:text-[16px]">
              Our dermatologists, trichologists and dental surgeons work only with proven,
              evidence-based treatments. And we&rsquo;ll always be honest with you about what a
              treatment can and can&rsquo;t do. No exaggerated promises, no pressure. Just a
              careful diagnosis, clear options explained in plain language, and care
              that&rsquo;s genuinely right for you.
            </p>
          </div>

          <div className="order-3">
            <div className="relative mt-8 max-sm:mt-4 flex flex-col gap-6 rounded-2xl border border-[#D8DDE8] bg-white p-6 shadow-[0_4px_24px_rgba(53,76,156,0.06)] sm:flex-row sm:items-center">
              <span className="absolute left-0 top-3 bottom-3 w-1.5 rounded-full bg-[#FEEA1B]" />

              <ul className="flex-1 space-y-3 pl-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#354C9C] text-white">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span className="text-[13.5px] leading-snug text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="hidden flex-shrink-0 border-l border-[#D8DDE8] pl-6 sm:block">
                <div className="relative flex h-[89px] w-[89px] items-center justify-center">
                  <svg className="absolute inset-0 h-full w-full animate-spin-slow" viewBox="0 0 100 100">
                    <path id="about-stamp-circle" fill="none" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                    <text className="fill-[#354C9C] text-[9.5px] font-bold uppercase" style={{ letterSpacing: "1.5px" }}>
                      <textPath href="#about-stamp-circle">Contact Us &bull; Contact Us &bull; Contact &bull;</textPath>
                    </text>
                  </svg>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ED3136] text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#354C9C] py-2 pl-6 pr-2 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2B3E80] active:translate-y-0"
            >
              Get to Know Us
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#354C9C] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
