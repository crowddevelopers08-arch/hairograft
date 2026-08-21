"use client";

import { surface } from "./theme";

const heroStats = [
  { num: "30+", label: "Influencer\nCollaborations" },
  { num: "1000+", label: "Patient\nExperiences" },
  { num: "Hair • Skin • Dental", label: "One Premium\nDestination" },
];

export default function InfluencerHero() {
  return (
    <section
      // The old outsized pt was clearance for the fixed navbar; InfluencerImageBanner
      // now sits above and carries that clearance, so the hero just needs its own rhythm.
      className={`relative overflow-hidden px-4 pb-[clamp(48px,8vh,96px)] pt-[clamp(48px,8vh,96px)] sm:px-6 ${surface.dark}`}
    >
      {/* Google Maps Background - Interactive with pointer events */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3693.4761456374054!2d80.10103422484397!3d13.115695687213048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s256%2C%20New%20Military%20Rd%2C%20opposite%20to%20avadi%20corporation%20office%2C%20Nehru%20Bazaar%2C%20Thirumalai%20Rajapuram%2C%20Avadi%2C%20Chennai%2C%20Tamil%20Nadu%20600054!5e1!3m2!1sen!2sin!4v1787050438225!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* Dark overlay - responsive shadows */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Left side - stronger on desktop, full coverage on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/80 to-[#0a0e1a]/30 via-30% sm:via-30%" />
        
        {/* Additional left shadow layer - responsive width */}
        <div className="absolute left-0 top-0 bottom-0 w-full sm:w-[70%] bg-gradient-to-r from-[#0a0e1a] to-transparent" />
        
        {/* Bottom fade - responsive height */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 sm:h-1/3 bg-gradient-to-t from-[#0a0e1a]/80 to-transparent" />
        
        {/* Top fade - responsive height */}
        <div className="absolute top-0 left-0 right-0 h-1/2 sm:h-1/3 bg-gradient-to-b from-[#0a0e1a]/70 to-transparent" />
        
        {/* Location Marker - responsive positioning and sizing */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 z-[5] pointer-events-none sm:right-[5%]">
          <div className="relative">
            {/* Pulsing circle - responsive size */}
            <div 
              className="absolute inset-0 rounded-full bg-[#EF3340] animate-ping opacity-75" 
              style={{ 
                width: 'clamp(40px, 8vw, 60px)', 
                height: 'clamp(40px, 8vw, 60px)', 
                left: 'clamp(-6px, -1.5vw, -10px)', 
                top: 'clamp(-6px, -1.5vw, -10px)' 
              }} 
            />
            {/* Main pin - responsive size */}
            <div className="relative flex items-center justify-center">
              <svg 
                width="clamp(28px, 5.5vw, 40px)" 
                height="clamp(40px, 7.5vw, 56px)" 
                viewBox="0 0 24 35" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_8px_20px_rgba(239,51,64,0.6)]"
              >
                <path 
                  d="M12 0C5.4 0 0 5.4 0 12C0 21 12 35 12 35C12 35 24 21 24 12C24 5.4 18.6 0 12 0ZM12 17C9.2 17 7 14.8 7 12C7 9.2 9.2 7 12 7C14.8 7 17 9.2 17 12C17 14.8 14.8 17 12 17Z" 
                  fill="#EF3340" 
                />
                <circle cx="12" cy="12" r="5" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-[2] mx-auto max-w-[1280px] pointer-events-none">
        {/* Left Section */}
        <div className="relative max-w-full sm:max-w-[820px] pointer-events-auto">
          {/* Background shadow for text readability */}
          <div className="absolute -inset-x-4 -inset-y-4 sm:-inset-x-8 sm:-inset-y-4 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/80 to-transparent rounded-2xl -z-10" />
          
          <div className="relative">
            {/* Badge - responsive */}
            <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-[#EF3340]/40 bg-[#EF3340]/10 px-3 py-1.5 sm:px-[18px] sm:py-2 text-[7px] sm:text-[8.5px] font-extrabold uppercase leading-[1.4] sm:leading-[1.6] tracking-[0.12em] sm:tracking-[0.14em] text-[#b7c7ff]">
              <svg
                className="flex-none w-2.5 h-2.5 sm:w-3 sm:h-3"
                viewBox="0 0 24 24"
                fill="#EF3340"
                aria-hidden="true"
              >
                <path d="M12 2l2.9 6.2 6.6.9-4.8 4.6 1.2 6.7L12 17.2 6.1 20.4l1.2-6.7L2.5 9.1l6.6-.9z" />
              </svg>
              <span className="hidden xs:inline">Trusted by Influencers, Models, Actresses &amp; Public Figures</span>
              <span className="xs:hidden">Trusted by Influencers &amp; Models</span>
            </div>

            {/* Heading - responsive */}
            <h1 className="m-0 text-[clamp(32px,7vw,70px)] font-extrabold leading-[1.1] sm:leading-[1.05] tracking-[-0.01em] sm:tracking-[-0.015em] text-[#fffaf0]">
              Where Confidence Meets
              <em className="block italic text-[#EF3340]">Expert Care.</em>
            </h1>

            {/* Subtitle - responsive */}
            <p className="mt-3 sm:mt-5 max-w-full sm:max-w-[540px] text-[14px] sm:text-[15.5px] font-semibold italic leading-[1.4] sm:leading-[1.5] text-[#b7c7ff] sm:mt-[26px] sm:text-[clamp(17px,1.85vw,22px)] short:mt-4">
              Advanced Hair, Skin &amp; Dental Treatments Chosen by People Who Value Their
              Appearance.
            </p>

            {/* Divider - responsive */}
            <div className="my-3 sm:my-4 h-0.5 w-16 sm:w-24 bg-[#EF3340] sm:mb-5 sm:mt-7 short:my-3.5" />

            {/* Description - responsive */}
            <p className="m-0 max-w-full sm:max-w-[520px] text-[13px] sm:text-[14.5px] leading-[1.6] sm:leading-[1.78] text-white/[0.66] sm:text-[16px] sm:leading-[1.8] short:text-[14px] short:leading-[1.7]">
              From hair restoration and skin transformation to smile correction and dental
              care, Hair O Graft brings advanced treatments, expert guidance and a premium
              clinic experience under one roof.
            </p>

            {/* Stats - responsive grid */}
            <div className="my-5 sm:my-[30px] grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-x-[26px] sm:gap-y-[20px] sm:my-[38px] sm:gap-[38px] short:my-5 shorter:my-4">
              {heroStats.map((stat) => (
                <div className="relative pl-2.5 sm:pl-[18px]" key={stat.num}>
                  <span className="absolute inset-y-1 left-0 w-0.5 bg-[#EF3340]" />
                  <strong className="block text-[clamp(16px,4vw,24px)] sm:text-[24px] font-extrabold leading-none text-[#b7c7ff] sm:text-[29px]">
                    {stat.num}
                  </strong>
                  <span className="mt-1 block whitespace-pre-line text-[6px] sm:text-[8.5px] font-bold uppercase leading-[1.4] sm:leading-[1.65] tracking-[0.06em] sm:tracking-[0.1em] text-white/55 sm:mt-[7px] sm:text-[10px] sm:tracking-[0.13em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Section - responsive */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-[#EF3340] px-5 py-3.5 sm:px-7 sm:py-5 text-[11px] sm:text-[12.5px] font-extrabold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-white shadow-[0_16px_40px_rgba(239,51,64,0.28)] transition-[filter,transform,box-shadow] duration-200 hover:brightness-110 hover:shadow-[0_20px_52px_rgba(239,51,64,0.42)] active:scale-[0.98] sm:px-9 sm:py-[21px] shorter:px-8 shorter:py-4"
                onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
              >
                <span className="whitespace-nowrap">Book Your Free Consultation</span>
              </button>
              <span className="text-[10px] sm:text-[11.5px] leading-[1.6] sm:leading-[1.7] text-white/45 sm:max-w-[220px]">
                Your appearance matters. Choose the care that deserves your trust.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}