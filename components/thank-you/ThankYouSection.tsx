import Link from "next/link";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-9 w-9 sm:h-10 sm:w-10" aria-hidden>
      <path d="M5 13l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2.1z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

export default function ThankYouSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden bg-[#FAF9F7] px-4 py-10 sm:px-6">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#354C9C]/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[640px] text-center">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#ED3136] text-white shadow-[0_18px_45px_rgba(237,49,54,0.3)] sm:h-24 sm:w-24">
          <CheckIcon />
        </span>

        <span className="mt-8 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#ED3136]">
          <span aria-hidden className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rotate-45 bg-[#354C9C]" />
            <span className="h-px w-6 bg-[#354C9C]/40" />
          </span>
          Thank You
          <span aria-hidden className="flex items-center gap-1.5">
            <span className="h-px w-6 bg-[#354C9C]/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#354C9C]" />
          </span>
        </span>

        <h1 className="mx-auto mt-3 max-w-[520px] text-[28px] font-extrabold leading-[1.12] tracking-tight text-[#111836] sm:text-[38px] lg:text-[44px]">
          Your request has been{" "}
          <span className="relative inline-block text-[#ED3136]">
            received.
            <svg
              className="absolute -bottom-1.5 left-0 w-full sm:-bottom-2"
              height="8"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path d="M2 6 C 50 2, 150 2, 198 6" stroke="#ED3136" strokeWidth="4" strokeLinecap="round" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-[480px] text-[15px] leading-8 text-[#52566A] sm:text-[16px]">
          Thank you for reaching out to Hair O Graft. Our team will get back to you
          shortly to confirm your appointment and answer any questions you have.
        </p>

        <div className="mt-4 flex flex-nowrap items-center justify-center gap-2.5 sm:gap-4">
          <Link
            href="/"
            className="inline-flex items-center whitespace-nowrap rounded-full bg-[#ED3136] px-4 py-3 text-[12.5px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C92A2E] sm:px-7 sm:py-3.5 sm:text-[14px]"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center whitespace-nowrap rounded-full border border-[#354C9C]/20 bg-white px-4 py-3 text-[12.5px] font-bold text-[#354C9C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#354C9C]/5 sm:px-7 sm:py-3.5 sm:text-[14px]"
          >
            Contact Us
          </Link>
        </div>

        <div className="mx-auto mt-6 flex max-w-[450px] flex-col items-center gap-4 rounded-[24px] border border-[#DEE2EC] bg-white p-6 shadow-[0_10px_35px_rgba(13,27,82,0.05)] sm:flex-row sm:justify-center sm:gap-8">
          <a href="tel:+917448866675" className="flex items-center gap-2.5 text-[14px] font-semibold text-[#111836] transition-colors hover:text-[#ED3136]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#354C9C]/10 text-[#354C9C]">
              <PhoneIcon />
            </span>
            +91 74488 66675
          </a>
          <a href="mailto:hairograft@gmail.com" className="flex items-center gap-2.5 text-[14px] font-semibold text-[#111836] transition-colors hover:text-[#ED3136]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#354C9C]/10 text-[#354C9C]">
              <MailIcon />
            </span>
            hairograft@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
