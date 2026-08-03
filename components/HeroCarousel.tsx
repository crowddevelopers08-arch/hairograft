"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

type Slide = {
  image: string;
  mobileImage: string;
  tabletImage: string;
  badge: string;
  heading: string[];
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
};

const slides: Slide[] = [
  {
    image: "/banners.png",
    mobileImage: "/hair-mb.png",
    tabletImage: "/hair-tab.png",
    badge: "HAIR RESTORATION",
    heading: ["Bring your hair back", "to life ."],
    subtext: "Personalised hair treatments that target the root cause, not just the symptom.",
    ctaLabel: "Book a Consultation",
    ctaHref: "/contact",
  },
  {
    image: "/ban-hero.png",
    mobileImage: "/skin-mb.png",
    tabletImage: "/skin-tab.png",
    badge: "SKIN & AESTHETICS",
    heading: ["Healthy skin,", "visibly clearer ."],
    subtext: "Personalised dermatology-led treatments matched to your skin type.",
    ctaLabel: "Book a Consultation",
    ctaHref: "/contact",
  },
  {
    image: "/dental-lap.png",
    mobileImage: "/banners-mb.png",
    tabletImage: "/banners-tab.png",
    badge: "DENTAL CARE",
    heading: ["A smile you'll be", "proud of ."],
    subtext: "Implants, aligners, root canals and gentle kids dentistry. Complete dental care for the whole family.",
    ctaLabel: "Book a Consultation",
    ctaHref: "/contact",
  },
];

function ChevronLeft() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.25 4.25L17.5 8.5l-4.25 1.25L12 14l-1.25-4.25L6.5 8.5l4.25-1.25L12 3z" />
      <path d="M18.5 14.5l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3z" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slide = slides[current];

  const goTo = useCallback((index: number) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((value) => (value + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  return (
    <section className="relative h-[520px] w-full overflow-hidden bg-[#07102e] sm:h-[520px] lg:h-[600px]">
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current
              ? "will-change-[transform,opacity] animate-[hero-slide-in_1.6s_cubic-bezier(0.22,1,0.36,1)_both] opacity-100"
              : "pointer-events-none -translate-x-[4%] opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
            style={{ backgroundImage: `url('${item.mobileImage}')` }}
          />
          <div
            className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block lg:hidden"
            style={{ backgroundImage: `url('${item.tabletImage}')` }}
          />
          <div
            className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
            style={{ backgroundImage: `url('${item.image}')` }}
          />
        </div>
      ))}

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(5,10,35,0.97) 0%, rgba(8,16,50,0.9) 35%, rgba(8,16,50,0.5) 63%, rgba(5,10,35,0.16) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060a26]/75 via-transparent to-[#060a26]/25" />
      <div className="absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#354C9C]/25 blur-[110px]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1340px] items-center px-5 pb-16 pt-10 sm:px-8 lg:px-12 xl:px-8">
        <div className="w-full max-w-[680px]">
          <div
            key={`location-${current}`}
            className="mb-7 flex animate-[hero-content-in_0.85s_cubic-bezier(0.16,1,0.3,1)_1s_both] items-center gap-3 text-left"
          >
            <span aria-hidden className="flex flex-none items-center gap-1.5">
              <span className="h-1.5 w-1.5 rotate-45 bg-[#ED3136]" />
              <span className="h-px w-6 bg-white/40 sm:w-9" />
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/75 sm:text-[12px]">
              Multi-specialty Skin, Hair &amp; Dental Clinic <span className="hidden sm:inline">—</span>
              <span className="block text-white sm:ml-1.5 sm:inline">Avadi, Chennai</span>
            </p>
            <span aria-hidden className="hidden flex-none items-center gap-1.5 sm:flex">
              <span className="h-px w-9 bg-white/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#ED3136]" />
            </span>
          </div>

          <div key={`content-${current}`}>
            <div className="mb-5 inline-flex animate-[hero-content-in_0.85s_cubic-bezier(0.16,1,0.3,1)_1.18s_both] items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[11px] font-bold tracking-[0.12em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md sm:text-[12px]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ED3136] text-white">
                <SparkleIcon />
              </span>
              {slide.badge}
            </div>

            <h1 className="max-w-[640px] text-[27px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[44px]">
              {slide.heading.map((line, index) => (
                <span
                  key={line}
                  className="block animate-[hero-content-in_0.9s_cubic-bezier(0.16,1,0.3,1)_both]"
                  style={{ animationDelay: `${1.36 + index * 0.18}s` }}
                >
                  {index === slide.heading.length - 1 ? (
                    <span className="relative inline-block text-[#ED3136]">
                      {line}
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
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-[570px] animate-[hero-content-in_0.9s_cubic-bezier(0.16,1,0.3,1)_1.76s_both] text-[15px] font-normal leading-relaxed text-white/80 sm:text-[18px]">
              {slide.subtext}
            </p>

            <Link
              href={slide.ctaHref}
              className="group mt-8 inline-flex animate-[hero-content-in_0.9s_cubic-bezier(0.16,1,0.3,1)_1.98s_both] items-center gap-3 rounded-full bg-[#ff3b40] py-2 pl-6 pr-2 text-[14px] font-bold text-white transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#081032] active:translate-y-0 sm:mt-9 sm:pl-7 sm:text-[15px]"
            >
              {slide.ctaLabel}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ED3136]">
                <ArrowUpRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-7 left-5 flex items-center gap-2 sm:left-8 lg:left-12 xl:left-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current ? "w-10 bg-[#ED3136]" : "w-5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 right-5 z-20 flex gap-2 sm:bottom-6 sm:right-8 lg:right-12 xl:right-8">
        <button onClick={prev} aria-label="Previous slide" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#081032]/70 text-white backdrop-blur-md transition-all duration-200 hover:border-white/30 hover:bg-white hover:text-[#0D1B52] sm:h-12 sm:w-12">
          <ChevronLeft />
        </button>
        <button onClick={next} aria-label="Next slide" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0D1B52] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-200 hover:bg-[#ED3136] hover:text-white sm:h-12 sm:w-12">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
