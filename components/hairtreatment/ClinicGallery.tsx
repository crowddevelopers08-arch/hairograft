"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    src: "/images-4.jpg",
    alt: "Hair thinning treatment consultation",
    title:
      "Boost natural hair growth with personalized therapies that nourish the scalp, strengthen hair follicles, and improve hair density for healthier, thicker hair.",
    category: "Hair Thinning Treatment",
  },
  {
    src: "/images.avif",
    alt: "Hair fall treatment care",
    title:
      "Effectively control excessive hair fall by identifying the root cause and treating weakened hair follicles with evidence-based medical solutions.",
    category: "Hair Fall Treatment",
  },
  {
    src: "/images-1.avif",
    alt: "Hair loss treatment consultation",
    title:
      "Target progressive hair loss with advanced treatments that help restore hair volume, improve scalp health, and prevent further hair thinning.",
    category: "Hair Loss Treatment",
  },
  {
    src: "/images-2.avif",
    alt: "Baldness treatment technology",
    title:
      "Comprehensive treatment options for male and female pattern baldness, including non-surgical therapies and permanent hair restoration solutions based on your stage of hair loss..",
    category: "Baldness Treatment",
  },
  {
    src: "/images-3.avif",
    alt: "Dandruff and scalp treatment",
    title:
      "Treat dandruff, scalp infections, itching, excessive oiliness, and scalp inflammation to create a healthy foundation for stronger hair growth.",
    category: "Dandruff & Scalp Treatment",
  },
];

function CategoryIcon({ index }: { index: number }) {
  const icons = [
    <path key="0" d="M8 4c2 4 2 8 0 12M12 3c1.5 5 1.5 11 0 18M16 4c-2 4-2 8 0 12" strokeLinecap="round" />,
    <path key="1" d="M9 4v9M15 4v9M12 21c-2 0-3.2-1.4-3.2-3 0-2 3.2-4.5 3.2-4.5s3.2 2.5 3.2 4.5c0 1.6-1.2 3-3.2 3Z" strokeLinecap="round" />,
    <path key="2" d="M7 5v6M12 4v9M17 5v6M9 20l3 3 3-3M12 11v11" strokeLinecap="round" />,
    <path key="3" d="M12 3a7 7 0 0 0-7 7v5a3 3 0 0 0 3 3h1v-4h6v4h1a3 3 0 0 0 3-3v-5a7 7 0 0 0-7-7Z" strokeLinecap="round" strokeLinejoin="round" />,
    <path key="4" d="M12 4c3 4 5 7.2 5 10a5 5 0 0 1-10 0c0-2.8 2-6 5-10ZM8 3.5h.01M16 3.5h.01" strokeLinecap="round" strokeLinejoin="round" />,
  ];
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      {icons[index]}
    </svg>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
    </svg>
  );
}

function TreatmentCard({
  image,
  index,
  featured = false,
}: {
  image: (typeof galleryImages)[number];
  index: number;
  featured?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`group relative flex w-[82%] max-w-[320px] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-[#364B9B]/15 bg-white shadow-[0_10px_30px_rgb(17_24_39_/_8%)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(217_39_50_/_14%)] sm:w-auto sm:max-w-none sm:shrink sm:snap-align-none ${
        featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      <div className={`relative w-full overflow-hidden ${featured ? "aspect-[4/3] lg:aspect-auto lg:h-[62%]" : "aspect-[4/3] lg:h-[58%]"}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? "(max-width: 1024px) 100vw, 46vw" : "(max-width: 1024px) 100vw, 23vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#D92732] px-3 py-1.5 text-[12px] md:text-[13px] lg:text-[14px] font-bold uppercase tracking-wide text-white shadow-md">
          <CategoryIcon index={index} />
          {image.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <p
          className="text-[14px] md:text-[15px] lg:text-[16px] leading-6 text-[#2b2b2b]/75 transition-all duration-300"
          style={
            isExpanded
              ? undefined
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: featured ? 4 : 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }
          }
        >
          {image.title}
        </p>

        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          className="mt-4 inline-flex w-fit items-center gap-2 text-[14px] lg:text-[16px] font-bold text-[#364B9B] transition-colors hover:text-[#D92732] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D92732]"
        >
          {isExpanded ? "Show Less" : "View Treatment"}
          <ChevronIcon isOpen={isExpanded} />
        </button>
      </div>
    </article>
  );
}

export default function ClinicGallery() {
  const [featuredItem, ...restItems] = galleryImages;

  return (
    <section className="relative scroll-mt-28 overflow-hidden bg-white px-3 py-10 sm:px-5 lg:px-6" id="services">
      {/* Ambient brand glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#364b9b]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-[380px] w-[380px] rounded-full bg-[#d92732]/10 blur-3xl" />

      {/* Subtle strand-like linework, echoing hair texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M ${-100 + i * 60} 850 C ${150 + i * 60} 550, ${50 + i * 60} 260, ${300 + i * 90} -50`}
            stroke={i % 2 === 0 ? "#364b9b" : "#d92732"}
            strokeWidth="1.5"
            fill="none"
          />
        ))}
      </svg>

      <div className="relative z-10 mx-auto max-sm:mb-4 mb-8 max-w-4xl text-center sm:mb-10">
        <span className="animate-slip-up mb-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] md:text-[13px] lg:text-[14px] font-bold uppercase tracking-[0.18em] text-[#364B9B]">
          <span className="h-px w-6 bg-[#364b9b]" />
            Treatment Section
          <span className="h-px w-6 bg-[#d92732]" />
        </span>
        <h2 className="animate-slip-up  text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-extrabold leading-tight text-black">
          Advanced Hair Solutions for Hair Fall,
          <br />
          Hair Loss{" "}
          <span className="relative inline-block text-[#d92732]">
            Baldness
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
          .
        </h2>
        {/* <p className="animate-slip-up animation-delay-200 mx-auto max-sm:mt-1 mt-3 max-w-3xl text-sm leading-6 text-[#2b2b2b]/70 sm:text-base lg:text-lg">
          Whether you&apos;re experiencing hair fall, hair thinning, excessive
          hair loss, a receding hairline, or bald patches, our advanced hair
          restoration treatments are designed to strengthen hair follicles,
          stimulate natural hair growth, and restore healthy, fuller hair.
        </p> */}
      </div>

      {/* Bento-style card grid: one larger featured card plus four equal
          cards, filling the grid exactly (2x2 + four 1x1 = 8 cells in a
          4-col x 2-row grid) instead of an expand/collapse accordion. */}
      <div className="animate-slip-up no-scrollbar relative z-10 mx-auto flex max-w-[1200px] snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:h-[620px] lg:grid-cols-4 lg:gap-6">
        <TreatmentCard image={featuredItem} index={0} featured />
        {restItems.map((image, i) => (
          <TreatmentCard image={image} index={i + 1} key={image.src} />
        ))}
      </div>
    </section>
  );
}