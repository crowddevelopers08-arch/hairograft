"use client";

import { useState, type FormEvent } from "react";

const concernOptions = ["Hair Fall", "Hair Regrowth", "Hair Loss", "Extreme Baldness"];

function ClipboardCheckIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8.5 13.5 11 16l4.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-[#f5a623]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2.5 2.9 6 6.6.8-4.8 4.6 1.2 6.6L12 17.4l-5.9 3.1 1.2-6.6L2.5 9.3l6.6-.8Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.8 19.5c1.3-3.4 4-5.2 7.2-5.2s5.9 1.8 7.2 5.2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6.2 2.8 8 6.9 6.5 8.1c1 2.1 2.6 3.7 5 5l1.3-1.6 4.1 1.8-.7 3.1c-.2.8-.9 1.3-1.7 1.2C7.7 16.9 3.1 12.3 2.4 5.5c-.1-.8.4-1.5 1.2-1.7l2.6-1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function HairStrandIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3c2 4 2 8 0 12M12 2c1.5 5 1.5 11 0 18M16 3c-2 4-2 8 0 12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
    </svg>
  );
}

function TrustCheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#354f9f" />
      <path d="m8 12.5 2.5 2.5L16 9.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
    </svg>
  );
}

export default function HairAnalysisForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Hair Treatment Form",
          name: formData.get("name"),
          phone: formData.get("phone"),
          location: formData.get("location"),
          concern: formData.get("concern"),
          pageUrl: window.location.origin + window.location.pathname,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Submission failed");

      form.reset();
      window.location.href = "/hair-treatment/thank-you";
    } catch {
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full rounded-[24px] border border-black/5 bg-white p-6 sm:p-5 md:py-2 xl:p-5">
      <div className="flex flex-col items-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#354f9f] text-[#354f9f] md:h-10 md:w-10 xl:h-14 xl:w-14">
          <ClipboardCheckIcon />
        </span>

        <h2 className="mt-0 text-[18px] font-extrabold leading-tight text-[#1c2437] xl:text-[24px]">
          Book Your
          <br />
          <span className="text-[#354f9f]">Free Hair Analysis</span>
        </h2>

        <div className="mt-1 flex items-center gap-2">
          <span className="h-px w-10 bg-[#f5a623]/40" />
          <span className="flex items-center gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </span>
          <span className="h-px w-10 bg-[#f5a623]/40" />
        </div>
      </div>

      <form className="mt-3 flex flex-col gap-3 md:mt-2 md:gap-2 xl:mt-3 xl:gap-3" onSubmit={handleSubmit}>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1c2437]/40">
            <UserIcon />
          </span>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f8fb] pl-11 pr-4 text-[14px] text-[#1c2437] placeholder:text-[#1c2437]/40 transition-colors focus:border-[#354f9f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#354f9f]/20 md:h-10 xl:h-12 xl:text-[16px]"
          />
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1c2437]/40">
            <PhoneIcon />
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f8fb] pl-11 pr-4 text-[14px] text-[#1c2437] placeholder:text-[#1c2437]/40 transition-colors focus:border-[#354f9f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#354f9f]/20 md:h-10 xl:h-12 xl:text-[16px]"
          />
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1c2437]/40">
            <MapPinIcon />
          </span>
          <input
            type="text"
            name="location"
            placeholder="Location"
            required
            className="h-12 w-full rounded-xl border border-black/10 bg-[#f7f8fb] pl-11 pr-4 text-[14px] text-[#1c2437] placeholder:text-[#1c2437]/40 transition-colors focus:border-[#354f9f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#354f9f]/20 md:h-10 xl:h-12 xl:text-[16px]"
          />
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1c2437]/40">
            <HairStrandIcon />
          </span>
          <select
            name="concern"
            required
            defaultValue=""
            className="h-12 w-full appearance-none rounded-xl border border-black/10 bg-[#f7f8fb] pl-11 pr-10 text-[14px] text-[#1c2437] transition-colors focus:border-[#354f9f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#354f9f]/20 md:h-10 xl:h-12 xl:text-[16px]"
          >
            <option value="" disabled>
              Hair Concern
            </option>
            {concernOptions.map((concern) => (
              <option key={concern} value={concern}>
                {concern}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1c2437]/40">
            <ChevronIcon />
          </span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#354f9f] to-[#4a63b8] text-[14px] font-extrabold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 md:mt-1 md:h-10 xl:mt-2 xl:h-12 xl:text-[16px]"
        >
          {isSubmitting ? "Sending..." : "Book Free Consultation"}
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f5a623] text-[#0f1b3d]">
            <ArrowRightIcon />
          </span>
        </button>

        {submitStatus === "error" && (
          <p className="text-center text-[12px] md:text-[13px] lg:text-[14px] font-semibold text-[#f1323d]">
            Something went wrong. Please try again.
          </p>
        )}

        <div className="mt-1 flex items-center justify-center gap-x-3 gap-y-1.5 md:hidden xl:flex xl:gap-x-3">
          {["No Spam", "Expert Consultation", "Quick Response"].map((label, index) => (
            <span key={label} className="inline-flex items-center gap-1.5">
              <TrustCheckIcon />
              <span className="text-[12px] font-medium text-[#1c2437]/70 md:text-[11px] xl:text-[13px]">
                {label}
              </span>
              {index < 2 && <span className="ml-1.5 h-1 w-1 rounded-full bg-[#1c2437]/30" />}
            </span>
          ))}
        </div>
      </form>
    </div>
  );
}
