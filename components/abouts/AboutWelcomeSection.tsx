import Image from "next/image";
import Link from "next/link";

function FaceLineArt() {
  return (
    <svg
      viewBox="0 0 360 470"
      fill="none"
      aria-hidden
      className="h-full w-full text-[#354C9C]/20"
    >
      <path
        d="M242 31c-52 6-97 24-129 50 31-8 63-10 92-3 13 3 25 9 34 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M115 94c30-26 75-27 111-7-19 8-39 13-60 12-18-1-35-5-51-5Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M159 89c12-11 30-10 40 1-8 13-29 14-40-1Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M245 41c-5 57-9 110-24 154-8 23-18 41-29 52 13 7 25 12 37 14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M250 21c38 29 35 106 7 158-11 20-22 35-31 45"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M217 282c-20-8-45-7-66 3 18 8 42 10 66-3Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M151 285c12 22 37 26 66-3"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M122 143c-4 49-17 87-39 116 24-10 42-4 55 17"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M250 21c26-7 48 5 55 31 11 43-8 104-48 148M250 21c-7 70 4 139 35 205 17 36 20 79 7 120-17 55-58 87-111 101"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M181 447c-43-13-69-47-74-99"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AboutWelcomeSection() {
  return (
    <section className="overflow-hidden bg-[#FAF9F7] px-4 py-10 sm:px-6 sm:py-10 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1420px]">
        <header className="mx-auto max-w-[720px] text-center">
          <span className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#ED3136]">
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rotate-45 bg-[#354C9C]" />
              <span className="h-px w-6 bg-[#354C9C]/40" />
            </span>
            Who We Are
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-px w-6 bg-[#354C9C]/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#354C9C]" />
            </span>
          </span>
          <h1 className="mx-auto mt-3 max-w-[640px] text-[27px] font-extrabold leading-[1.1] tracking-tight text-[#111836] sm:text-[36px] lg:text-[44px]">
            One clinic for your skin, {" "}
            <span className="relative inline-block text-[#ED3136]">
              hair and smile .
              <svg
                className="absolute -bottom-1.5 left-0 w-full sm:-bottom-2"
                height="8"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 6 C 50 2, 150 2, 198 6"
                  stroke="#ED3136"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
        </header>

        <div className="relative mt-10 grid gap-10 max-sm:gap-5 sm:mt-14 lg:grid-cols-[0.9fr_1.05fr_0.9fr] lg:items-start lg:gap-16">

          <div className="relative mx-auto w-full max-w-[430px] lg:mx-0">
            <div className="relative h-[430px] w-full overflow-hidden rounded-[24px_24px_24px_24px] sm:h-[540px]">
              <Image
                src="/image-abouts.png"
                alt="Hair O Graft clinic reception in Avadi"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1023px) 90vw, 32vw"
              />
            </div>

            <div className="absolute -bottom-8 -right-6 max-sm:-right-3 h-[150px] w-[120px] overflow-hidden rounded-[20px_20px_20px_20px] border-4 border-[#FAF9F7] shadow-[0_18px_45px_rgba(13,27,82,0.12)] sm:h-[190px] sm:w-[190px]">
              <Image
                src="/image-about.png"
                alt="Hair O Graft treatment care"
                fill
                className="object-cover object-center"
                sizes="150px"
              />
            </div>
          </div>

          <div className="text-center lg:pt-10">
            <p className="text-[15px] max-sm:mt-3 leading-8 text-[#52566A] sm:text-[16px]">
              Hair O Graft began with a simple frustration: most people have to visit three
              different places for three different concerns—a dermatologist for their skin,
              a trichologist for their hair, and a dentist for their teeth. We brought all
              three together under one roof in Avadi, Chennai.
            </p>

            <p className="mt-6 max-sm:mt-1 text-[15px] leading-8 text-[#52566A] sm:text-[16px]">
              Today, our skin, hair and dental specialists work side by side, so your care
              stays joined-up and convenient. You&rsquo;re seen by qualified professionals who
              diagnose carefully, explain things in plain language, and recommend only what
              you actually need.
            </p>

            <Link
              href="/contact"
              className="mt-9 max-sm:mt-3 inline-flex justify-center items-center rounded-full bg-[#ED3136] px-7 py-3.5 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C92A2E]"
            >
              Book a Consultation
            </Link>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[430px] lg:mx-0 lg:ml-auto lg:block">
            <div className="relative h-[430px] w-full overflow-hidden rounded-[24px_24px_24px_24px] sm:h-[540px]">
              <Image
                src="/image-about.png"
                alt="Hair O Graft dental care in Avadi"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 90vw, 32vw"
              />
            </div>

            <div className="absolute -bottom-8 -left-6 max-sm:-left-3 h-[150px] w-[150px] overflow-hidden rounded-[20px_20px_20px_20px] border-4 border-[#FAF9F7] shadow-[0_18px_45px_rgba(13,27,82,0.12)] sm:h-[190px] sm:w-[180px]">
              <Image
                src="/image-abouts.png"
                alt="Hair O Graft treatment care"
                fill
                className="object-cover object-center"
                sizes="150px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
