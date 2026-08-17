"use client";

import { useCallback, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Phone, X } from "lucide-react";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const navLinks = [
  { name: "Home", href: "#top" },
  { name: "About Us", href: "#brand" },
  { name: "Doctor", href: "#doctor" },
  { name: "Process", href: "#process" },
  { name: "Treatments", href: "#treatments" },
  { name: "Contact", href: "#location" },
];

const FIELD =
  "w-full rounded-[10px] border border-[#111827]/15 bg-white px-3.5 py-3 text-[14px] text-[#111827] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-slate-400 focus:border-[#EF3340]/70 focus:shadow-[0_0_0_3px_rgba(239,51,64,0.14)]";

const CTA_PILL =
  "inline-flex flex-none cursor-pointer items-center gap-2.5 rounded-full bg-[#EF3340] px-6 py-3 text-[11.5px] font-extrabold tracking-[0.06em] text-white no-underline shadow-[0_10px_26px_rgba(239,51,64,0.28)] transition-[filter,transform,box-shadow] duration-200 hover:brightness-110 hover:shadow-[0_14px_32px_rgba(239,51,64,0.42)] active:scale-[0.98]";

const BookingModal = ({ isOpen, onClose, children }: BookingModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#03070f]/85 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-[620px] overflow-hidden rounded-[20px] border border-[#EF3340]/30 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-[3] grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-full border border-[#EF3340]/35 bg-[#EF3340]/10 text-[#334E9B] transition-colors duration-200 hover:bg-[#EF3340]/20"
          aria-label="Close booking form"
        >
          <X size={19} />
        </button>
        <div className="max-h-[90vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default function InfluencerNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingAppointmentDateTime, setBookingAppointmentDateTime] = useState("");
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openBookingForm = useCallback(() => {
    setOpen(false);
    setSubmissionState({ status: "idle", message: "" });
    setIsBookingModalOpen(true);
  }, []);

  useEffect(() => {
    window.addEventListener("open-booking-modal", openBookingForm);
    return () => window.removeEventListener("open-booking-modal", openBookingForm);
  }, [openBookingForm]);

  const handleBookingSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState({ status: "submitting", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const appointmentDateTime = String(formData.get("appointmentDateTime") ?? "").trim();
    const concern = String(formData.get("treatment") ?? "").trim() || "Not specified";
    const pageUrl = window.location.href;
    const source = "Influencer LP Modal";

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source,
          name,
          phone,
          email,
          appointmentDateTime,
          concern,
          condition: concern,
          pageUrl,
          url: pageUrl,
        }),
      });

      const responseData = await response.json().catch(() => ({}));
      if (!response.ok || !responseData?.success) {
        throw new Error(responseData?.error || responseData?.excelError || "Submission failed");
      }

      setSubmissionState({
        status: "success",
        message: "Your consultation request was submitted successfully.",
      });
      form.reset();
      setBookingAppointmentDateTime("");
      window.location.assign("/thank-you");
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setSubmissionState({ status: "error", message: message || "Submission failed." });
    }
  };

  return (
    <>
      <header
        id="top"
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-[14px] transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-[#EF3340]/30 bg-[#05060b]/95 shadow-[0_14px_40px_rgba(0,0,0,0.5)]"
            : "border-[#EF3340]/15 bg-[#08090f]/90"
        }`}
      >
        <div className="mx-auto flex h-[66px] max-w-[1280px] items-center justify-between gap-5 px-4 sm:px-6 lg:h-[76px]">
          <a className="inline-flex flex-none items-center gap-3 no-underline" href="#top">
            <img
              className="h-[38px] w-[38px] rounded-full border border-[#EF3340]/55 bg-white object-contain p-0.5 shadow-[0_0_0_3px_rgba(239,51,64,0.12)] lg:h-11 lg:w-11"
              src="/logos.png"
              alt="Hair O Graft"
            />
            <span className="flex flex-col leading-none">
              <strong className="text-[16px] font-extrabold tracking-[0.01em] text-[#fffaf0] lg:text-[19px]">
                Hair O Graft
              </strong>
              <span className="mt-1 text-[7px] font-bold uppercase tracking-[0.28em] text-[#EF3340] lg:text-[8px] lg:tracking-[0.34em]">
                Hair · Skin · Dental
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-[30px] lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/[0.78] no-underline transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-[7px] after:h-px after:origin-left after:scale-x-0 after:bg-[#EF3340] after:transition-transform after:duration-300 after:content-[''] hover:text-[#b7c7ff] hover:after:scale-x-100"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a className={`${CTA_PILL} hidden lg:inline-flex`} href="tel:+917448866675">
            <Phone size={15} strokeWidth={2.4} />
            +91 74488 66675
          </a>

          <button
            type="button"
            className="grid h-[42px] w-[42px] cursor-pointer place-items-center rounded-full border border-[#EF3340]/35 bg-[#EF3340]/10 text-[#b7c7ff] transition-colors duration-200 hover:bg-[#EF3340]/20 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-[#EF3340]/15 bg-[#05060b] transition-[max-height,opacity] duration-300 lg:hidden ${
            open ? "max-h-[520px] opacity-100" : "invisible max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-1 px-5 pb-5 pt-3.5">
            {navLinks.map((link) => (
              <a
                className="flex items-center justify-between border-b border-[#EF3340]/10 px-1 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-white/85 no-underline after:text-[#EF3340]/65 after:content-['→']"
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a className={`${CTA_PILL} mt-4 justify-center`} href="tel:+917448866675">
              <Phone size={15} strokeWidth={2.4} />
              +91 74488 66675
            </a>
          </div>
        </div>
      </header>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)}>
        <form className="px-5 pb-8 pt-8 sm:px-8" onSubmit={handleBookingSubmit}>
          <div className="mb-3.5 inline-flex rounded-full border border-[#EF3340]/40 bg-[#EF3340]/10 px-3.5 py-[7px] text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-[#334E9B]">
            Free Consultation
          </div>
          <h2 className="m-0 text-[clamp(26px,4vw,34px)] font-extrabold leading-[1.12] text-[#111827]">
            Book Your Free <em className="italic text-[#EF3340]">Consultation</em>
          </h2>
          <p className="mb-6 mt-3 text-[13.5px] leading-[1.72] text-slate-600">
            Your appearance matters. Choose the care that deserves your trust.
          </p>

          {submissionState.status !== "idle" && (
            <div
              className={`mb-3.5 text-[13px] font-semibold ${
                submissionState.status === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              {submissionState.message}
            </div>
          )}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input className={FIELD} name="name" placeholder="Name" type="text" required />
            <input className={FIELD} name="phone" placeholder="Phone" type="tel" required />
            <input
              className={`${FIELD} sm:col-span-2`}
              name="email"
              placeholder="Email"
              type="email"
            />
            <select className={FIELD} name="treatment" defaultValue="">
              <option value="" disabled>
                Treatment
              </option>
              <option>Hair Care</option>
              <option>Skin Care</option>
              <option>Dental Care</option>
            </select>
            <div className="relative">
              {!bookingAppointmentDateTime && (
                <span className="pointer-events-none absolute left-3.5 top-1/2 z-[1] -translate-y-1/2 text-[14px] text-slate-400">
                  Appointment Date
                </span>
              )}
              <input
                className={`${FIELD} ${
                  bookingAppointmentDateTime ? "" : "text-transparent focus:text-[#111827]"
                }`}
                name="appointmentDateTime"
                type="datetime-local"
                aria-label="Appointment Date and Time"
                value={bookingAppointmentDateTime}
                onChange={(event) => setBookingAppointmentDateTime(event.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 w-full cursor-pointer rounded-full border-0 bg-[#EF3340] px-6 py-4 text-[12px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(239,51,64,0.3)] transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={submissionState.status === "submitting"}
          >
            {submissionState.status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </form>
      </BookingModal>
    </>
  );
}
