"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function TrustBanner() {
  const promises = [
    "Scientifically proven treatments",
    "Global-standard safety protocols",
    "Real before & after transformations",
    "Honest consultations & guidance",
  ];

  return (
    <section className="w-full overflow-hidden bg-[#ffffff]">
      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[1400px]
          flex-col
          overflow-hidden
          bg-[#ffffff]
          sm:flex-row
        "
      >
        {/* Decorative wash */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-160px]
            top-[-170px]
            z-0
            h-[430px]
            w-[640px]
            rounded-full
            bg-[#EF3340]/[0.09]
            blur-[90px]
          "
        />
        
        {/* =========================================================
            LEFT IMAGE - Hidden on mobile, visible on sm and up
        ========================================================= */}
        <div
          className="
            relative
            hidden
            h-[260px]
            w-full
            shrink-0
            overflow-hidden
            sm:block
            sm:h-[310px]
            sm:w-[38%]
            md:h-[350px]
            lg:h-[390px]
            xl:h-[430px]
          "
        >
          <img
            src="/consultation.png"
            alt="Hair O Graft doctor consulting a patient"
            className="
              absolute
              inset-0
              h-full
              w-full
              scale-[1.03]
              object-cover
              object-center
            "
          />

          <div className="pointer-events-none absolute inset-0 bg-[#334E9B]/[0.10]" />

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-30
              w-[50px]
              bg-linear-to-r
              from-transparent
              via-[#ffffff]/55
              to-[#ffffff]
              md:w-[68px]
              xl:w-[88px]
            "
          />
        </div>

        {/* =========================================================
            CENTER CONTENT
        ========================================================= */}
        <div
          className="
            relative
            z-20
            flex
            min-h-[360px]
            w-full
            flex-col
            justify-center
            overflow-hidden
            px-6
            py-10
            sm:min-h-0
            sm:w-[42%]
            sm:px-5
            sm:py-8
            md:px-6
            lg:px-7
            lg:py-10
            xl:px-8
          "
        >
          {/* Decorative glow */}
          <div
            className="
              pointer-events-none
              absolute
              right-[-100px]
              top-[-100px]
              h-[230px]
              w-[230px]
              rounded-full
              bg-[#EF3340]/[0.10]
              blur-[45px]
            "
          />

          {/* Small Heading */}
          <p
            className="
              relative
              z-10
              mb-[10px]
              text-[13px]
              font-bold
              uppercase
              tracking-[1.8px]
              text-[#334E9B]
              sm:text-[11px]
              md:text-[12px]
              lg:text-[13px]
              xl:text-[14px]
            "
          >
            OUR PROMISE
          </p>

          {/* Main Heading */}
          <h2
            className="
              relative
              z-10
              mb-[14px]
              font-serif
              text-[34px]
              font-semibold
              leading-[1.08]
              tracking-[-0.7px]
              text-[#111827]
              sm:text-[31px]
              md:text-[34px]
              lg:text-[38px]
              xl:text-[42px]
            "
          >
            Your Trust. Our Responsibility.
          </h2>

          {/* =========================================================
              MOBILE IMAGE - Visible only on mobile, between heading and para
          ========================================================= */}
          <div
            className="
              relative
              z-10
              mb-[20px]
              h-[280px]
              w-full
              overflow-hidden
              rounded-[8px]
              sm:hidden
            "
          >
            <img
              src="/consultation.png"
              alt="Hair O Graft doctor consulting a patient"
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />
            <div className="pointer-events-none absolute inset-0 bg-[#334E9B]/[0.10]" />
          </div>

          {/* Description */}
          <p
            className="
              relative
              z-10
              mb-[18px]
              max-w-[530px]
              text-[13px]
              leading-[1.6]
              text-[#475569]
              sm:text-[10px]
              md:text-[11px]
              lg:text-[12px]
              xl:text-[13px]
            "
          >
            We follow transparent procedures, global-standard protocols, and
            evidence-based treatments to deliver results you can trust.
          </p>

          {/* Promise Points */}
          <div
            className="
              relative
              z-10
              mb-[22px]
              flex
              flex-col
              gap-[10px]
              sm:gap-[9px]
              lg:gap-[10px]
            "
          >
            {promises.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-[9px]
                  sm:gap-[8px]
                  lg:gap-[9px]
                "
              >
                <CheckCircle2
                  className="
                    h-[18px]
                    w-[18px]
                    shrink-0
                    stroke-[1.8]
                    text-[#EF3340]
                    sm:h-[15px]
                    sm:w-[15px]
                    md:h-[16px]
                    md:w-[16px]
                    lg:h-[17px]
                    lg:w-[17px]
                    xl:h-[18px]
                    xl:w-[18px]
                  "
                />

                <span
                  className="
                    text-[13px]
                    font-medium
                    leading-[1.2]
                    text-[#475569]
                    sm:text-[9px]
                    md:text-[10px]
                    lg:text-[11px]
                    xl:text-[12px]
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA — jumps to the treatments section. */}
          <a
            href="#treatments"
            className="
              relative
              z-10
              flex
              w-fit
              items-center
              gap-[15px]
              no-underline
              rounded-[4px]
              bg-[#EF3340]
              px-[22px]
              py-[13px]
              text-[11px]
              font-bold
              uppercase
              tracking-[0.7px]
              text-white
              shadow-[0_4px_10px_rgba(239,51,64,0.18)]
              transition-all
              duration-300
              hover:-translate-y-[1px]
              hover:bg-[#334E9B]
              hover:shadow-[0_6px_15px_rgba(239,51,64,0.25)]
              sm:gap-[16px]
              sm:px-[20px]
              sm:py-[11px]
              sm:text-[8.5px]
              md:px-[22px]
              md:py-[12px]
              md:text-[9px]
              lg:px-[24px]
              lg:py-[13px]
              lg:text-[10px]
              xl:px-[27px]
              xl:py-[14px]
              xl:text-[11px]
            "
          >
            <span>DISCOVER OUR TREATMENTS</span>

            <ArrowRight
              className="
                h-[18px]
                w-[18px]
                stroke-[1.8]
                sm:h-[15px]
                sm:w-[15px]
                md:h-[16px]
                md:w-[16px]
                lg:h-[17px]
                lg:w-[17px]
                xl:h-[18px]
                xl:w-[18px]
              "
            />
          </a>
        </div>

        {/* =========================================================
            RIGHT DOCTOR IMAGE
        ========================================================= */}
        <div
          className="
            relative
            hidden
            h-[260px]
            w-[20%]
            shrink-0
            overflow-hidden
            sm:block
            sm:h-[310px]
            md:h-[350px]
            lg:h-[390px]
            xl:h-[430px]
          "
        >
          <img
            src="/hairodoctor.png"
            alt="Hair O Graft doctor"
            className="
              absolute
              inset-0
              z-10
              h-full
              w-full
              object-contain
              object-bottom
            "
          />
        </div>
      </div>
    </section>
  );
}