export default function FinalCTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/ctaban.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#354C9C]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-10 md:px-16 py-10 sm:py-12 md:py-14">
        <div className="max-w-[660px]">

          {/* Heading */}
          <h2 className="font-extrabold text-white leading-[1.1] tracking-tight mb-3
                         text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]">
            Book Your HydraFacial
            <span className="block text-[#FEEA1B]">Consultation</span>
          </h2>

          {/* Subheading */}
          <p className="text-white font-semibold mb-2 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            Ready to achieve healthier, brighter-looking skin?
          </p>

          {/* Body */}
          <p className="text-white/70 leading-relaxed mb-7
                        text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] max-w-[520px]">
            Schedule your HydraFacial consultation at Hair O Graft and take the
            first step towards refreshed and rejuvenated skin.
          </p>

          {/* Contact cards */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

            {/* Phone */}
            <a
              href="tel:+917448866675"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20
                         border border-white/20 hover:border-white/40
                         transition-all duration-200 px-4 py-3.5 rounded-xl w-full"
            >
              <div className="w-9 h-9 rounded-lg bg-[#FEEA1B] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#363435]" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .95h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0120.07 16z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-[9px] font-bold tracking-widest uppercase leading-none mb-1">Call Us</p>
                <p className="text-white font-bold text-[15px] sm:text-[16px]">74488 66675</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-3 bg-white/10 border border-white/20
                            px-4 py-3.5 rounded-xl w-full">
              <div className="w-9 h-9 rounded-lg bg-[#FEEA1B] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#363435]" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-[9px] font-bold tracking-widest uppercase leading-none mb-1">Address</p>
                <p className="text-white font-medium text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                  25, Nehru Bazaar, Thirumalai Rajapuram,
                  Kondithope, Avadi, Chennai, Tamil Nadu 600054
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
