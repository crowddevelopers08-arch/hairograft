"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    step: "01",
    title: "Book Your Appointment",
    lines: [
      "Schedule your consultation in just a few clicks.",
    ],
    icon: "/icons-4.png",
  },
  {
    step: "02",
    title: "Hair & Scalps Analysis",
    lines: [
      "Our specialist evaluates your hair condition and identifies the root cause.",
    ],
    icon: "/icons-3.png",
  },
  {
    step: "03",
    title: "Personalized Treatment Plan",
    lines: [
      "Receive the right treatment based on your hair condition.",
    ],
    icon: "/icons-2.png",
  },
  {
    step: "04",
    title: "Hair Regrowth & Follow-up",
    lines: [
      "Watch your hair become healthier, thicker, and stronger with follow-ups.",
    ],
    icon: "/icons-1.png",
  },
];

function ArrowLeftIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function JourneyCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="animate-pop group relative flex flex-col items-center rounded-[14px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-6 py-9 text-center shadow-[0_18px_42px_rgb(0_0_0_/_25%)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20">
      {/* faint background numeral, editorial marker for a real sequential step */}
      <span className="pointer-events-none absolute right-4 top-3 select-none font-serif text-[52px] font-bold leading-none text-white/[0.06]">
        {service.step}
      </span>

      <div className="animate-slip-up animation-delay-100 relative z-10 mb-[10px] flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#364b9b] shadow-[0_0_0_6px_rgb(255_255_255_/_4%)] transition-colors duration-300 group-hover:bg-[#d92732] max-sm:mb-[8px]">
        <Image
          src={service.icon}
          alt={`${service.title} icon`}
          width={93}
          height={93}
          className="h-[74px] w-[74px] object-contain brightness-0 invert transition duration-300"
        />
        <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#070b16] bg-white text-[12px] md:text-[13px] lg:text-[14px] font-extrabold text-[#364b9b] transition-colors duration-300 group-hover:text-[#d92732]">
          {service.step}
        </span>
      </div>

      <h3 className="animate-slip-up animation-delay-200 relative z-10 text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold leading-tight tracking-tight text-white">
        {service.title}
      </h3>
      <div className="animate-slip-up animation-delay-300 relative z-10 max-sm:mt-[5px] mt-[10px] space-y-[10px] text-[14px] md:text-[15px] lg:text-[16px] leading-[1.4] text-white/65 max-sm:mt-[10px]">
        {service.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <span className="pointer-events-none absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#d92732] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
    </article>
  );
}

export default function WhatToExpect() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentService = services[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((index) =>
      index === 0 ? services.length - 1 : index - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((index) =>
      index === services.length - 1 ? 0 : index + 1
    );
  };

  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-[#070b16] px-5 py-5 text-white sm:py-14 lg:py-[54px]"
      id="journey"
    >
      {/* background image layer — swap the src below for your own asset in /public */}
      <Image
        src="/journey-bg.jpg"
        alt=""
        fill
        priority={false}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 object-cover opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 bg-[#070b16]/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgb(54_75_155_/_34%),transparent_28%),radial-gradient(circle_at_86%_14%,rgb(217_39_50_/_20%),transparent_24%),linear-gradient(135deg,rgb(255_255_255_/_7%)_0_1px,transparent_1px_14px)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070b16] to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1280px] text-center">
        <span className="animate-slip-up inline-flex items-center gap-2 text-[12px] md:text-[13px] lg:text-[14px] font-bold uppercase tracking-[0.28em] text-[#d92732]">
          <span className="h-px w-6 bg-[#d92732]" />
          The Journey
          <span className="h-px w-6 bg-[#d92732]" />
        </span>

        <h2 className="animate-slip-up animation-delay-100 mt-2 text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-extrabold leading-tight text-white">
          Process /{" "}
          <span className="relative inline-block text-[#d92732]">
            Journey
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
          </span>{" "}
          Section
        </h2>
        <p className="animate-slip-up animation-delay-200 mx-auto mt-1 max-w-xl text-[14px] md:text-[15px] lg:text-[16px] leading-7 text-white/72">
          Your Hair Restoration Journey
        </p>

        {/* mobile carousel — single centered card, equal spacing both sides */}
        <div className="mt-[30px] max-sm:mt-[18px] sm:hidden">
          <JourneyCard service={currentService} />

          <div className="mt-8 flex items-center justify-center gap-6 max-sm:mt-5">
            <button
              className="animate-slip-left animation-delay-400 flex h-11 w-11 items-center justify-center rounded-full bg-[#364b9b] text-white shadow-md transition-colors duration-200 hover:bg-[#d92732]"
              type="button"
              onClick={prevSlide}
              aria-label="Previous journey step"
            >
              <ArrowLeftIcon />
            </button>

            <div className="flex items-center gap-2">
              {services.map((service, index) => (
                <span
                  key={service.title}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-[#d92732]"
                      : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>

            <button
              className="animate-slip-right animation-delay-400 flex h-11 w-11 items-center justify-center rounded-full bg-[#364b9b] text-white shadow-md transition-colors duration-200 hover:bg-[#d92732]"
              type="button"
              onClick={nextSlide}
              aria-label="Next journey step"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        {/* desktop grid — four equal columns joined by a centered connecting line */}
        <div className="relative mt-[42px] hidden max-sm:mt-[10px] sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-8">
          <span className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[104px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
          {services.map((service) => (
            <JourneyCard service={service} key={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
}