"use client";

import Image from "next/image";
import { useState } from "react";
import mobileHeroBanner from "@/public/ban-mb.jpeg";
import tabletHeroBanner from "@/public/ban-tab.png";
import heroBanner from "@/public/bans.png";
import HairAnalysisForm from "./HairAnalysisForm";

const navItems = [
  { label: "Home", href: "#home", hasChevron: true, active: true },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#services" },
  { label: "Journey", href: "#journey", hasChevron: true },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function ClockIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7v5l3.5 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function ClinicHeroTemplate() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full bg-white" id="home">
      {/* Top info bar */}

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white shadow-[0_1px_0_rgb(0_0_0_/_4%)]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8 xl:px-12">
          <a href="#home" className="flex items-center gap-3" aria-label="Hair O Graft home">
            <Image
              src="/image.png"
              alt="Hair O Graft logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border-2 border-[#354f9f] bg-white object-contain"
              priority
            />
            <span className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-extrabold leading-none text-[#1c2437]">
              Hair O Graft
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-1 text-[14px] lg:text-[16px] font-semibold transition-colors ${
                  item.active
                    ? "text-[#354f9f]"
                    : "text-[#1c2437]/80 hover:text-[#354f9f]"
                }`}
              >
                {item.label}
                {item.hasChevron }
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#lead-form"
              className="hidden h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#354f9f] to-[#4a63b8] px-6 text-[14px] lg:text-[16px] font-bold text-white transition-transform hover:-translate-y-0.5 lg:inline-flex"
            >
              Book Appointment
            </a>

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-[#1c2437] lg:hidden"
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {isOpen ? (
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="flex flex-col gap-1 border-t border-black/5 px-4 py-3 lg:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-md px-2 py-2 text-[14px] lg:text-[16px] font-semibold ${
                  item.active ? "text-[#354f9f]" : "text-[#1c2437]/80"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#354f9f] to-[#4a63b8] px-6 text-[14px] lg:text-[16px] font-bold text-white"
            >
              Book Appointment
            </a>

            <div className="mt-3 flex flex-col gap-2 border-t border-black/5 pt-3 text-[12px] md:text-[13px] lg:text-[14px] font-medium text-[#1c2437]/80">
              <span className="flex items-center gap-2">
                <ClockIcon />
                08:00am to 09:00pm
              </span>
              <span className="flex items-center gap-2">
                <PhoneIcon />
                +91 7448866675
              </span>
            </div>
          </nav>
        )}

        {/* connecting dot */}
        <span className="absolute left-1/2 top-full hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#354f9f] lg:block" />
      </header>

      {/* Full-width hero banner */}
      <section
        id="lead-form"
        className="relative w-full overflow-hidden md:min-h-[560px] lg:min-h-[600px] xl:min-h-[640px]"
        aria-label="Hair regrowth consultation"
      >
        <Image
          src={mobileHeroBanner}
          alt="Hair O Graft 90 day hair regrowth treatment"
          priority
          sizes="(max-width: 767px) 100vw, 1px"
          className="block h-auto w-full md:hidden"
        />

        <Image
          src={tabletHeroBanner}
          alt="Hair O Graft 90 day hair regrowth treatment for tablet"
          priority
          sizes="(min-width: 768px) and (max-width: 1279px) 100vw, 1px"
          className="hidden h-auto w-full md:block xl:hidden"
        />

        <Image
          src={heroBanner}
          alt="Hair O Graft 90 day hair regrowth treatment and free hair analysis"
          priority
          sizes="(min-width: 1280px) 100vw, 1px"
          className="hidden h-auto w-full xl:block"
        />

        <div className="px-4 py-6 sm:px-6 md:absolute md:right-3 md:top-1 md:block md:w-[290px] md:px-0 md:py-0 xl:right-10 xl:top-[45%] xl:w-[450px] xl:-translate-y-1/2">
          <HairAnalysisForm />
        </div>
      </section>
    </div>
  );
}
