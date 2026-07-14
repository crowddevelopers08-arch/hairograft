function PhoneIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6.2 2.8 8 6.9 6.5 8.1c1 2.1 2.6 3.7 5 5l1.3-1.6 4.1 1.8-.7 3.1c-.2.8-.9 1.3-1.7 1.2C7.7 16.9 3.1 12.3 2.4 5.5c-.1-.8.4-1.5 1.2-1.7l2.6-1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function ConsultationCtaBar() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-4 py-2 mt-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[24px] px-6 py-8 sm:flex-row sm:items-center sm:px-10 sm:py-9">
        {/* Ambient brand glow, consistent with the site's other dark sections */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#364b9b]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-[#d92732]/10 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-extrabold text-black">
            Ready to take the first step?
          </h2>
          <p className="mt-2 text-[14px] md:text-[15px] lg:text-[16px] text-black/60">
            Book your consultation with Dr. E. Hema Shree — no pressure, just answers.
          </p>
        </div>

        <a
          href="#lead-form"
          className="group relative z-10 inline-flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#364b9b] px-7 text-[14px] lg:text-[16px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d92732] hover:shadow-[0_16px_32px_-12px_rgb(217_39_50_/45%)]"
        >
          <PhoneIcon />
          Book Your Consultation
        </a>
      </div>
    </section>
  );
}
