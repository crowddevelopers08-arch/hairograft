"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const galleryImages = [
  { src: "/kid-bfaf-1.png", alt: "Kids dentistry smile result showcase" },
  { src: "/kid-bfaf-3.png", alt: "Paediatric dental care result" },
  { src: "/kid-bfaf-2.png", alt: "Child dental care smile visual" },
];

export default function KidsDentistryBeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % galleryImages.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10
                      py-10 sm:py-12 md:py-14 lg:py-16">

        <div className="text-center max-w-[680px] mx-auto mb-8 sm:mb-10">
          <h2 className="font-extrabold leading-[1.1] tracking-tight text-[#363435]
                         text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]">
            Before &amp; <span className="text-[#354C9C]">After Gallery</span>
          </h2>
          <p className="mt-4 text-gray-500 leading-[1.8]
                        text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">
            Explore real patient transformations and see how paediatric dental care has
            supported healthier smiles for children.
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <div className="overflow-hidden rounded-[28px] border border-[#D8DDE8] bg-[#F7F8FC] shadow-[0_8px_28px_rgba(53,76,156,0.06)]">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {galleryImages.map((image) => (
                <div key={image.src} className="relative min-w-full aspect-square">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="100vw" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show gallery image ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-[#354C9C]" : "w-2.5 bg-[#CAD4EC]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5 xl:gap-6">
          {galleryImages.map((image) => (
            <div key={image.src}
              className="relative overflow-hidden rounded-[28px] border border-[#D8DDE8]
                         bg-[#F7F8FC] shadow-[0_8px_28px_rgba(53,76,156,0.06)] aspect-square">
              <Image src={image.src} alt={image.alt} fill className="object-cover"
                sizes="(max-width: 1280px) 33vw, 360px" />
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="mt-8 sm:mt-10 text-center text-gray-400 text-[13px] sm:text-[14px]">
          Families have trusted{" "}
          <span className="text-[#354C9C] font-semibold">Hair O Graft</span>{" "}
          for their children&apos;s dental care journey.
        </p>

      </div>
    </section>
  );
}
