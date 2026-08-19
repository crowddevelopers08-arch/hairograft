"use client";

import React from "react";

const services = [
  {
    title: "HAIR CARE",
    subtitle: "Stronger Roots. Fuller Confidence.",
    items: [
      "Hair Fall & Hair Loss Treatments",
      "Hair Regrowth (PRP, GFC, etc.)",
      "Hair Transplant (FUE, DHI)",
      "Scalp & Dandruff Treatment",
      "Hair Patch / Cosmetic Solutions",
    ],
    image: "/haircare.png",
    icon: "♨",
  },
  {
    title: "SKIN CARE",
    subtitle: "Radiant Skin. Timeless Glow.",
    items: [
      "HydraFacial / Glow Facial",
      "Acne & Scar Treatment",
      "Pigmentation & Tan Removal",
      "Chemical Peel & Carbon Peel",
      "Laser Hair Reduction",
      "Glutathione IV Therapy",
    ],
    image: "/skincare.png",
    icon: "♧",
  },
  {
    title: "DENTAL CARE",
    subtitle: "Healthy Smile. Confident You.",
    items: [
      "Dental Implants",
      "Invisible Aligners",
      "Root Canal Treatment",
      "Teeth Whitening",
      "Dental Crowns & Bridges",
      "Kids Dentistry & More",
    ],
    image: "/dental-care.png",
    icon: "♢",
  },
];

export default function CareServicesBanner() {
  return (
    <section
      id="treatments"
      className="w-full bg-[#f8fbff] px-4 py-8 sm:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16"
    >
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Heading */}
        <div className="mb-8 text-center leading-none md:mb-10 lg:mb-12">
          <div className="mb-3 text-[13px] font-bold uppercase tracking-[1.8px] text-[#334E9B] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]">
            COMPLETE CARE FOR YOUR
          </div>

          <h2 className="font-serif text-[34px] font-semibold leading-[1.08] tracking-[-0.7px] text-[#111827] sm:text-[31px] md:text-[34px] lg:text-[38px] xl:text-[42px]">
            Hair, Skin &amp; Dental
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-7 xl:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="
                group
                relative
                min-h-[280px]
                overflow-hidden
                rounded-[12px]
                border
                border-[#EF3340]/25
                bg-[#ffffff]
                transition-all
                duration-300
                hover:shadow-2xl
                hover:scale-[1.02]
                sm:min-h-[260px]
                md:min-h-[270px]
                lg:min-h-[280px]
                xl:min-h-[300px]
              "
            >
              {/* Right Side Shadow */}
              <div className="absolute right-0 top-0 z-10 h-full w-[30%] bg-linear-to-r from-transparent via-[#ffffff]/30 to-[#ffffff]/95" />

              {/* Text Content - 50% width */}
              <div
                className={`
                  relative z-20
                  h-full
                  w-[64%]
                  sm:w-[60%]
                  xl:w-[56%]
                  px-[16px]
                  pb-[16px]
                  pt-[16px]
                  sm:px-[20px]
                  sm:pt-[20px]
                  md:px-[24px]
                  md:pt-[24px]
                  lg:px-[28px]
                  lg:pt-[28px]
                  xl:px-[32px]
                  xl:pt-[32px]
                `}
              >
                <h3
                  className="
                    mb-[6px]
                    text-[26px]
                    font-bold
                    leading-[28px]
                    tracking-[-0.5px]
                    text-[#EF3340]
                    sm:text-[22px]
                    sm:leading-[24px]
                    md:text-[26px]
                    md:leading-[28px]
                    lg:text-[30px]
                    lg:leading-[32px]
                    xl:text-[34px]
                    xl:leading-[36px]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mb-[10px]
                    whitespace-nowrap
                    text-[15px]
                    font-medium
                    leading-[18px]
                    text-[#111827]
                    sm:text-[12px]
                    sm:leading-[14px]
                    md:text-[14px]
                    md:leading-[16px]
                    lg:text-[15px]
                    lg:leading-[17px]
                    xl:text-[17px]
                    xl:leading-[19px]
                  "
                >
                  {service.subtitle}
                </p>

                <ul className="space-y-[6px] sm:space-y-[5px] md:space-y-[6px] lg:space-y-[7px] xl:space-y-[8px]">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-[6px]
                        text-[13px]
                        font-medium
                        leading-[1.3]
                        text-[#475569]
                        sm:text-[9px]
                        sm:leading-[1.2]
                        md:text-[10px]
                        lg:text-[11px]
                        xl:text-[12px]
                      "
                    >
                      <span className="mt-[2px] text-[11px] text-[#EF3340] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px]">
                        ●
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Person Image - 50% width */}
              <div className="absolute bottom-0 right-0 z-10 h-full w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    absolute
                    bottom-0
                    right-[-8px]
                    h-[96%]
                    w-auto
                    max-w-none
                    object-contain
                    object-bottom
                    transition-transform
                    duration-500
                    [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.35)_30%,black_62%)]
                    [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.35)_30%,black_62%)]
                    group-hover:scale-105
                    sm:right-[-12px]
                    md:right-[-14px]
                    lg:right-[-18px]
                    xl:right-[-22px]
                  "
                />
              </div>

              {/* Bottom Right Icon */}
              <div
                className="
                  absolute
                  bottom-[10px]
                  right-[10px]
                  z-30
                  flex
                  h-[40px]
                  w-[40px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#EF3340]/30
                  bg-[#ffffff]/95
                  text-[24px]
                  text-[#EF3340]
                  transition-all
                  duration-300
                  hover:bg-[#EF3340]
                  hover:text-white
                  hover:border-[#EF3340]
                  hover:scale-110
                  sm:bottom-[14px]
                  sm:right-[14px]
                  sm:h-[42px]
                  sm:w-[42px]
                  sm:text-[24px]
                  md:bottom-[16px]
                  md:right-[16px]
                  md:h-[46px]
                  md:w-[46px]
                  md:text-[28px]
                  lg:bottom-[18px]
                  lg:right-[18px]
                  lg:h-[52px]
                  lg:w-[52px]
                  lg:text-[32px]
                  xl:bottom-[20px]
                  xl:right-[20px]
                  xl:h-[58px]
                  xl:w-[58px]
                  xl:text-[38px]
                "
              >
                {service.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}