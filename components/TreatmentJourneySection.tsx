"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type IconProps = { className?: string; style?: React.CSSProperties };

function TreatmentIcon({ src, className }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block bg-current ${className ?? ""}`}
      style={{
        WebkitMaskImage: `url("${src}")`,
        maskImage: `url("${src}")`,
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function ArrowRight({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const ACCENT = "#ED3136";
const AUTOPLAY_MS = 10000;

const tabs = [
  {
    key: "hair",
    label: "Hair Restoration & Growth",
    icon: "/hair-icons.png",
    text: "Target the root cause of thinning and hair loss with personalised, evidence-based care.",
    image: "/solution-hair.png",
    items: [
      { label: "GFC", href: "/services/hair-treatments/gfc" },
      { label: "PRP", href: "/services/hair-treatments/prp" },
      { label: "Micro-Needling", href: "/services/hair-treatments/microneedling" },
      { label: "Dandruff Treatment", href: "/services/hair-treatments/dandruff-treatment" },
      { label: "UV Light Therapy", href: "/services/hair-treatments/uv-light" },
    ],
  },
  {
    key: "skin",
    label: "Skin & Aesthetics",
    icon: "/skin-icon.png",
    text: "Dermatology-led treatments for clearer, healthier skin, matched to your skin type.",
    image: "/solution-skin.png",
    items: [
      { label: "HydraFacial", href: "/services/skin-treatments/hydrafacial" },
      { label: "Acne & Scar Removal", href: "/services/skin-treatments/acne-scar-removal" },
      { label: "Glutathione IV", href: "/services/skin-treatments/glutathione-iv" },
      { label: "Laser Hair Removal", href: "/services/skin-treatments/laser-hair-removal" },
      { label: "Carbon Peel", href: "/services/skin-treatments/carbon-peel" },
    ],
  },
  {
    key: "dental",
    label: "Dental Care",
    icon: "/dental-icon.png",
    text: "Complete care for the whole family, from everyday fixes to a confident smile.",
    image: "/solution-dental.png",
    items: [
      { label: "Aligners", href: "/services/dental-treatments/aligners" },
      { label: "Root Canal", href: "/services/dental-treatments/root-canal" },
      { label: "Dental Implant", href: "/services/dental-treatments/dental-implant" },
      { label: "Dental Crown", href: "/services/dental-treatments/dental-crown" },
      { label: "Kids Dentistry", href: "/services/dental-treatments/kids-dentistry" },
    ],
  },
];

export default function TreatmentJourneySection() {
  const [active, setActive] = useState(2);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tab = tabs[active];

  const goTo = useCallback((index: number) => {
    setActive(((index % tabs.length) + tabs.length) % tabs.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((value) => (value + 1) % tabs.length);
    }, AUTOPLAY_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active]);

  return (
    <section className="bg-[#0D1B52] px-4 py-10 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-10">
      <div className="mx-auto max-w-[1180px]">
        <div>
          <span className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#ED3136]">
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rotate-45 bg-white" />
              <span className="h-px w-6 bg-white/40" />
            </span>
            Solutions at Hair O Graft
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-px w-6 bg-white/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-white" />
            </span>
          </span>
          <h2 className="mt-3 max-w-[640px] text-[27px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[44px]">
            Everything your skin, hair{" "}
            <br className="hidden sm:block" />
            and smile need,{" "}
            <span className="relative inline-block" style={{ color: ACCENT }}>
              in one place .
              <svg
                className="absolute -bottom-1.5 left-0 w-full sm:-bottom-2"
                height="8"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M2 6 C 50 2, 150 2, 198 6" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h2>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory flex-row gap-3 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-10 sm:gap-4 sm:overflow-visible sm:pb-0">
          {tabs.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.key}
                onClick={() => goTo(index)}
                className={`flex min-w-[250px] flex-none snap-start items-center justify-start gap-2.5 rounded-2xl px-4 py-3.5 text-left text-[14px] font-bold transition-all duration-300 sm:min-w-0 sm:flex-1 sm:justify-center sm:px-5 sm:py-4 sm:text-center ${
                  isActive
                    ? "text-white shadow-[0_12px_30px_rgba(237,49,54,0.35)]"
                    : "bg-[#F5F6FA] text-[#1B2159] hover:bg-white"
                }`}
                style={isActive ? { backgroundColor: ACCENT } : undefined}
              >
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                    isActive ? "bg-white/15 text-white" : "bg-[#1B2159]/10 text-[#1B2159]"
                  }`}
                >
                  <TreatmentIcon src={item.icon} className="h-7 w-7" />
                </span>
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-2 flex justify-center gap-2 sm:justify-start">
          {tabs.map((item, index) => (
            <span
              key={item.key}
              className="h-1.5 w-1.5 rounded-full transition-colors duration-200"
              style={{ backgroundColor: index === active ? ACCENT : "rgba(255,255,255,0.2)" }}
            />
          ))}
        </div>

        <div className="mt-8 max-sm:mt-1 grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-x-3 gap-y-6 sm:mt-5 sm:grid-cols-1 sm:gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div key={tab.key} className="contents sm:block sm:animate-[fade-up_0.5s_cubic-bezier(0.16,1,0.3,1)_both]">
            <div className="order-1 col-span-2 sm:order-none">
              <div className="lg:flex lg:items-center lg:gap-4">
                <span className="hidden h-14 w-14 items-center justify-center rounded-full sm:flex" style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}>
                  <TreatmentIcon src={tab.icon} className="h-8 w-8" />
                </span>
                <h3 className="mt-4 text-[20px] font-bold text-white sm:text-[22px] lg:mt-0">
                  {tab.label}
                </h3>
              </div>
              <p className="mt-2 max-w-[440px] text-[14px] leading-relaxed text-white/60 sm:text-[15px]">
                {tab.text}
              </p>
            </div>

            <ul className="order-3 col-start-2 row-start-2 flex flex-col gap-2 sm:order-none sm:mt-2 sm:grid sm:grid-cols-3 sm:gap-3">
              {tab.items.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <Link
                    href={item.href}
                    className="group flex h-full min-h-[54px] items-center justify-between gap-2 px-2 py-1.5 text-[12px] font-semibold leading-tight text-white/85 transition-colors duration-200 hover:text-white sm:min-h-[44px] sm:px-3 sm:text-[13px]"
                  >
                    {item.label}
                    <ArrowRight
                      className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                      style={{ color: ACCENT }}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="order-4 col-span-2 mt-6 flex flex-col items-start gap-3 text-left sm:order-none sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[15px] font-semibold text-white">Not sure where to start?</p>
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-between gap-2 rounded-full py-2 pl-4 pr-2 text-left text-[12px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 min-[375px]:text-[15px] min-[425px]:text-[17px] sm:w-auto sm:justify-start sm:gap-3 sm:pl-6"
                style={{ backgroundColor: ACCENT }}
              >
                <span className="whitespace-nowrap">Book a consultation and we&rsquo;ll guide you</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: ACCENT }}>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          <div key={`${tab.key}-image`} className="relative order-2 col-start-1 row-start-2 h-full min-h-[302px] w-full overflow-hidden rounded-[20px] animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_both] sm:order-none sm:col-auto sm:row-auto sm:aspect-[16/11] sm:h-auto sm:min-h-0 lg:aspect-auto lg:h-full">
            <Image src={tab.image} alt={tab.label} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
