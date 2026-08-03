import Link from "next/link";

const sections = [
  {
    title: "Appointments & Consultations",
    text: "Appointments can be booked by phone, through our website, or in person. We recommend arriving a few minutes early so your consultation can start on time. Treatments are recommended only after a proper assessment by our specialists.",
  },
  {
    title: "Treatment Consent",
    text: "Before any procedure, you will be briefed on the treatment, expected outcomes, and possible risks. Treatment proceeds only after your informed consent, and you're free to ask questions at any stage.",
  },
  {
    title: "Cancellations & Rescheduling",
    text: "We understand plans change. Please inform us as early as possible if you need to cancel or reschedule, so we can offer the slot to another patient and adjust your care plan accordingly.",
  },
  {
    title: "Payments & Refunds",
    text: "Treatment costs are shared with you upfront during consultation, with no hidden charges. Refunds, where applicable, are assessed case by case and depend on the stage of treatment already delivered.",
  },
  {
    title: "Patient Responsibilities",
    text: "Please share your complete medical history and any medications truthfully, and follow the aftercare instructions given by our specialists. This helps us deliver safe and effective treatment.",
  },
  {
    title: "Website Use",
    text: "Content on this website is for general information only and does not replace an in-person medical consultation. You agree to use this site lawfully and not misuse any content, images, or material published here.",
  },
  {
    title: "Limitation of Liability",
    text: "While we follow proven clinical methods and take every reasonable precaution, individual results can vary. Hair O Graft is not liable for outcomes arising from incomplete medical history or not following aftercare guidance.",
  },
  {
    title: "Changes to These Terms",
    text: "We may revise these terms from time to time to reflect changes in our services or policies. Updates will be posted on this page along with a revised date.",
  },
];

export default function TermsConditionContentSection() {
  return (
    <section className="overflow-hidden bg-[#FAF9F7] px-4 py-10 sm:px-6 sm:py-10 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1000px]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-bold text-[#354C9C] transition-colors hover:text-[#ED3136]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-3.5 w-3.5" aria-hidden>
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>

        <header className="mx-auto mt-6 max-w-[720px] text-center">
          <span className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#ED3136]">
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rotate-45 bg-[#354C9C]" />
              <span className="h-px w-6 bg-[#354C9C]/40" />
            </span>
            Please Read Carefully
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-px w-6 bg-[#354C9C]/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#354C9C]" />
            </span>
          </span>
          <h2 className="mx-auto mt-3 max-w-[640px] text-[27px] font-extrabold leading-[1.1] tracking-tight text-[#111836] sm:text-[36px] lg:text-[42px]">
            The terms behind{" "}
            <span className="relative inline-block text-[#ED3136]">
              your care with us.
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
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[15px] leading-8 text-[#52566A] sm:text-[16px]">
            These terms set out what to expect when you book an appointment, visit our
            clinic, or use this website. By using our services, you agree to the points
            below.
          </p>
        </header>

        <div className="mt-5 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="flex gap-4 rounded-[24px] border border-[#DEE2EC] bg-white p-6 shadow-[0_10px_35px_rgba(13,27,82,0.05)] sm:gap-5 sm:p-7"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#354C9C] text-[13px] font-bold text-white sm:h-11 sm:w-11">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[17px] font-bold text-[#111836] sm:text-[19px]">
                  {section.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-7 text-[#606579] sm:text-[15px]">
                  {section.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 max-sm:mt-6 rounded-[28px] border border-[#354C9C]/10 bg-white p-7 text-center shadow-[0_24px_70px_rgba(13,20,64,0.08)] sm:p-10">
          <h3 className="text-[20px] font-extrabold text-[#111836] sm:text-[24px]">
            Questions about these terms?
          </h3>
          <p className="mx-auto mt-3 max-w-[520px] text-[14px] leading-7 text-[#606579] sm:text-[15px]">
            If anything here is unclear, reach out to us and our team will be happy to
            walk you through it.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-[#354C9C]/20 bg-white px-7 py-3.5 text-[14px] font-bold text-[#354C9C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#354C9C]/5"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#ED3136] px-7 py-3.5 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C92A2E]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
