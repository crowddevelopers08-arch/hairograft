import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    text: "When you book a consultation, call us, or fill out a form on this website, we may collect your name, phone number, email address, and address. During treatment, our specialists also record relevant medical and health information needed to assess and care for your skin, hair, or dental concern.",
  },
  {
    title: "How We Use Your Information",
    text: "Your information is used to schedule appointments, provide the right treatment, follow up on your recovery, respond to enquiries, and share updates about your care. We do not use your personal or medical details for anything beyond delivering and improving our services.",
  },
  {
    title: "Confidentiality of Medical Records",
    text: "Your medical records and treatment history are kept strictly confidential. Access is limited to the specialists treating you and authorised clinic staff involved in your care.",
  },
  {
    title: "Data Sharing",
    text: "We do not sell or rent your personal information. Details may only be shared with diagnostic labs or associate specialists where necessary for your treatment, or when required by law.",
  },
  {
    title: "Cookies & Website Usage",
    text: "Our website may use basic cookies to understand how visitors use our pages and to improve your browsing experience. This information is used only in an aggregated form and is not linked back to your identity.",
  },
  {
    title: "Data Security",
    text: "We take reasonable physical and electronic precautions to protect the personal and medical information held with us from unauthorised access, loss, or misuse.",
  },
  {
    title: "Your Rights",
    text: "You may request to access, update, or request deletion of your personal information held with us at any time by getting in touch with the clinic directly.",
  },
  {
    title: "Changes to This Policy",
    text: "We may update this policy from time to time to reflect changes in our practices. Any revisions will be posted on this page along with an updated date.",
  },
];

export default function PrivacyPolicyContentSection() {
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
            Your Privacy Matters
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-px w-6 bg-[#354C9C]/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#354C9C]" />
            </span>
          </span>
          <h2 className="mx-auto mt-3 max-w-[640px] text-[27px] font-extrabold leading-[1.1] tracking-tight text-[#111836] sm:text-[36px] lg:text-[42px]">
            How we look after{" "}
            <span className="relative inline-block text-[#ED3136]">
              your information.
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
            Hair O Graft respects your privacy. This policy explains what information we
            collect, how we use it, and the choices you have when you visit our clinic or
            this website.
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5">
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
            Questions about your privacy?
          </h3>
          <p className="mx-auto mt-3 max-w-[520px] text-[14px] leading-7 text-[#606579] sm:text-[15px]">
            If you have any questions about this policy or how your information is handled,
            reach out to us and our team will be happy to help.
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
