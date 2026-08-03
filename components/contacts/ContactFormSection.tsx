"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

const inputClass =
  "mt-2 w-full rounded-xl border border-[#DDE1EB] bg-[#F8F9FC] px-4 py-3.5 text-[14px] text-[#111836] outline-none transition-colors placeholder:text-[#8A90A3] focus:border-[#354C9C] focus:bg-white focus:ring-4 focus:ring-[#354C9C]/10";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden>
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2.1z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden>
      <path d="M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1116 0z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function ContactFormSection() {
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const concern = String(data.get("concern") ?? "").trim();
    const enquiryMessage = String(data.get("message") ?? "").trim();
    setSubmissionState({ status: "submitting", message: "" });

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "website-leads",
          name,
          phone,
          email,
          concern,
          condition: concern,
          message: enquiryMessage,
          pageUrl: window.location.href,
          url: window.location.href,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "Submission failed");
      }

      setSubmissionState({ status: "success", message: "Your enquiry was submitted successfully." });
      form.reset();
      window.location.assign("/thank-you");
    } catch (error) {
      setSubmissionState({
        status: "error",
        message: error instanceof Error ? error.message : "Submission failed. Please try again.",
      });
    }
  }

  return (
    <section className="px-4 max-sm:pb-5 sm:px-6 sm:py-10 lg:px-10 lg:py-8">
      <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[30px] bg-white shadow-[0_28px_80px_rgba(13,27,82,0.12)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[440px] lg:min-h-[400px]">
          <Image
            src="/contact-us.png"
            alt="Hair O Graft clinic reception"
            fill
            className="object-cover object-bottom"
            sizes="(max-width: 1023px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07102E]/95 via-[#07102E]/30 to-transparent" aria-hidden />
        </div>

        <div className="p-6 sm:p-4 lg:py-5 lg:px-10">
          <span className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#111836]">
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rotate-45 bg-[#ED3136]" />
              <span className="h-px w-6 bg-[#ED3136]/40" />
            </span>
            Send an Enquiry
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-px w-6 bg-[#ED3136]/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#ED3136]" />
            </span>
          </span>
          <h2 className="mt-1 text-[28px] font-extrabold leading-tight tracking-tight text-[#111836] sm:text-[36px] lg:text-[42px]">
            Book your consultation
          </h2>
          <p className="mt-1 max-w-[560px] text-[15px] leading-7 text-[#666C7E]">
            Tell us what you&rsquo;d like help with, and our team will guide you towards the right specialist.
          </p>

          <form onSubmit={handleSubmit} className="mt-2 grid gap-3 sm:grid-cols-2">
            <label className="text-[13px] font-bold text-[#242A45]">
              Full Name
              <input className={inputClass} type="text" name="name" placeholder="Enter your name" autoComplete="name" required />
            </label>

            <label className="text-[13px] font-bold text-[#242A45]">
              Phone Number
              <input className={inputClass} type="tel" name="phone" placeholder="Enter your phone number" autoComplete="tel" required />
            </label>

            <label className="text-[13px] font-bold text-[#242A45]">
              Email Address
              <input className={inputClass} type="email" name="email" placeholder="Enter your email address" autoComplete="email" required />
            </label>

            <label className="text-[13px] font-bold text-[#242A45]">
              What can we help you with?
              <select className={inputClass} name="concern" defaultValue="" required>
                <option value="" disabled>Select a concern</option>
                <option>Hair Restoration & Growth</option>
                <option>Skin & Aesthetics</option>
                <option>Dental Care</option>
                <option>General Consultation</option>
              </select>
            </label>

            <label className="text-[13px] font-bold text-[#242A45] sm:col-span-2">
              Message <span className="font-normal text-[#8A90A3]">(optional)</span>
              <textarea className={`${inputClass} min-h-[120px] resize-y`} name="message" placeholder="Tell us a little more about your concern" />
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submissionState.status === "submitting"}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#ED3136] px-7 py-4 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C92A2E] sm:w-auto"
              >
                {submissionState.status === "submitting" ? "Submitting..." : "Submit Enquiry"}
              </button>
              {submissionState.message && (
                <p
                  className={`mt-3 text-sm font-semibold ${
                    submissionState.status === "error" ? "text-red-600" : "text-green-700"
                  }`}
                  role="status"
                >
                  {submissionState.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
