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
    <section className="w-full overflow-hidden bg-[#f7f0e6] px-3 py-5 sm:px-5 sm:py-7 lg:px-8 lg:py-10">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1500px]
          flex-col
          overflow-hidden
          rounded-[10px]
          bg-[#f8f1e8]
          shadow-[0_8px_30px_rgba(70,50,30,0.10)]
          sm:flex-row
          sm:rounded-[12px]
        "
      >
        {/* =========================================================
            LEFT IMAGE
        ========================================================= */}
        <div
          className="
            relative
            h-[260px]
            w-full
            shrink-0
            overflow-hidden
            sm:h-[310px]
            sm:w-[38%]
            md:h-[350px]
            lg:h-[390px]
            xl:h-[430px]
          "
        >
          {/* The stock reception shot is cool/blue-branded; the warm filter pulls
              it into the beige-and-gold palette of this banner so it doesn't
              read as a foreign blue rectangle. */}
          <img
            src="/clinic-image-1.png"
            alt="Hair O Graft clinic reception"
            className="
              absolute
              inset-0
              h-full
              w-full
              scale-[1.03]
              object-cover
              object-center
              [filter:sepia(0.42)_saturate(1.45)_hue-rotate(-8deg)_brightness(1.04)]
            "
          />

          {/* Warm tint to seat the photo in the palette */}
          <div className="pointer-events-none absolute inset-0 bg-[#b58a3c]/[0.10]" />

          {/* Soft blend on right edge */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              w-[16%]
              bg-gradient-to-l
              from-[#f8f1e8]/50
              to-transparent
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
            bg-[#f8f1e8]
            px-8
            py-10
            sm:min-h-0
            sm:w-[42%]
            sm:px-8
            sm:py-8
            md:px-10
            lg:px-12
            lg:py-10
            xl:px-14
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
              bg-[#ead9bf]/25
              blur-[45px]
            "
          />

          {/* Small Heading */}
          <p
            className="
              relative
              z-10
              mb-[8px]
              text-[11px]
              font-bold
              uppercase
              tracking-[1.8px]
              text-[#242424]
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
              mb-[13px]
              whitespace-nowrap
              font-serif
              text-[30px]
              font-semibold
              leading-[1.08]
              tracking-[-0.7px]
              text-[#1d1d1d]
              sm:text-[31px]
              md:text-[34px]
              lg:text-[38px]
              xl:text-[42px]
            "
          >
            Your Trust. Our Responsibility.
          </h2>

          {/* Description */}
          <p
            className="
              relative
              z-10
              mb-[17px]
              max-w-[530px]
              text-[10px]
              leading-[1.6]
              text-[#44403c]
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
              mb-[20px]
              flex
              flex-col
              gap-[8px]
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
                  gap-[7px]
                  sm:gap-[8px]
                  lg:gap-[9px]
                "
              >
                <CheckCircle2
                  className="
                    h-[14px]
                    w-[14px]
                    shrink-0
                    stroke-[1.8]
                    text-[#b4873d]
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
                    text-[9px]
                    font-medium
                    leading-[1.2]
                    text-[#3d3d3d]
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

          {/* CTA */}
          <button
            type="button"
            className="
              relative
              z-10
              flex
              w-fit
              items-center
              gap-[15px]
              rounded-[4px]
              bg-[#b58a3c]
              px-[18px]
              py-[10px]
              text-[8px]
              font-bold
              uppercase
              tracking-[0.7px]
              text-white
              shadow-[0_4px_10px_rgba(130,90,30,0.18)]
              transition-all
              duration-300
              hover:-translate-y-[1px]
              hover:bg-[#9d742e]
              hover:shadow-[0_6px_15px_rgba(130,90,30,0.25)]
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
                h-[14px]
                w-[14px]
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
          </button>
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
            bg-[#f8f1e8]
            sm:block
            sm:h-[310px]
            md:h-[350px]
            lg:h-[390px]
            xl:h-[430px]
          "
        >
          {/* Doctor — doctors.jpeg is shot against a cream wall, so it melts
              into the #f8f1e8 panel instead of cutting a hard rectangle the way
              doctor.png's blue studio backdrop would. Its 0.74 aspect almost
              matches this column, so object-cover barely crops; object-top
              guarantees the head stays in frame. */}
          <img
            src="/doctors.jpeg"
            alt="Dr. E. Hema Shree"
            className="
              absolute
              inset-0
              z-10
              h-full
              w-full
              object-cover
              object-top
              [filter:saturate(0.9)_brightness(1.07)]
            "
          />

          {/* Left blend — feathers the photo's cream wall into the panel so the
              two off-whites meet without a visible vertical seam. Kept clear of
              her face, which starts around 55% across. */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-20
              w-[34%]
              bg-gradient-to-r
              from-[#f8f1e8]
              via-[#f8f1e8]/70
              to-transparent
            "
          />

          {/* Right soft blend */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-20
              w-[8%]
              bg-gradient-to-l
              from-[#f8f1e8]/30
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
}