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
    image: "/images/hair-care.png",
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
    image: "/images/skin-care.png",
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
    image: "/images/dental-care.png",
    icon: "♢",
  },
];

export default function CareServicesBanner() {
  return (
    <section className="w-full bg-[#f8f5f0] px-4 py-8 sm:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16">
      <div className="mx-auto w-full max-w-[1400px]">

        {/* Heading */}
        <div className="mb-8 text-center leading-none md:mb-10 lg:mb-12">
          <div className="mb-3 text-[12px] font-semibold tracking-[2px] text-[#333] sm:text-[14px] md:text-[16px] lg:text-[18px]">
            COMPLETE CARE FOR YOUR
          </div>

          <h2 className="font-serif text-[32px] leading-[36px] text-[#252525] sm:text-[40px] sm:leading-[44px] md:text-[48px] md:leading-[52px] lg:text-[56px] lg:leading-[60px]">
            Hair, Skin &amp; Dental
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 md:gap-7 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="
                group
                relative
                h-[190px]
                overflow-hidden
                rounded-[12px]
                border
                border-[#dfd4c5]
                bg-[#f9f7f3]
                transition-all
                duration-300
                hover:shadow-2xl
                hover:scale-[1.02]
                sm:h-[220px]
                md:h-[250px]
                lg:h-[280px]
                xl:h-[300px]
              "
            >
              {/* Right Side Shadow */}
              <div className="absolute right-0 top-0 z-10 h-full w-[30%] bg-gradient-to-r from-transparent via-[#f9f7f3]/30 to-[#f9f7f3]/95" />

              {/* Text Content - 50% width */}
              <div
                className={`
                  relative z-20
                  h-full
                  w-1/2
                  px-[16px]
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
                    mb-[4px]
                    text-[18px]
                    font-bold
                    leading-[20px]
                    tracking-[-0.5px]
                    text-[#a66a18]
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
                    mb-[8px]
                    whitespace-nowrap
                    text-[10px]
                    font-medium
                    leading-[12px]
                    text-[#363636]
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

                <ul className="space-y-[4px] sm:space-y-[5px] md:space-y-[6px] lg:space-y-[7px] xl:space-y-[8px]">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-[4px]
                        whitespace-nowrap
                        text-[8px]
                        leading-[10px]
                        text-[#565656]
                        sm:text-[10px]
                        sm:leading-[12px]
                        md:text-[12px]
                        md:leading-[14px]
                        lg:text-[13px]
                        lg:leading-[15px]
                        xl:text-[15px]
                        xl:leading-[17px]
                      "
                    >
                      <span className="mt-[1px] text-[7px] text-[#a66a18] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px]">
                        ●
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Person Image - 50% width */}
              <div className="absolute bottom-0 right-0 z-10 h-full w-1/2">
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#f9f7f3]
                    via-transparent
                    to-transparent
                    opacity-80
                  "
                />

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
                  h-[36px]
                  w-[36px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d8c7ae]
                  bg-[#fffdf9]/95
                  text-[20px]
                  text-[#a66a18]
                  transition-all
                  duration-300
                  hover:bg-[#a66a18]
                  hover:text-white
                  hover:border-[#a66a18]
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