import Link from "next/link";

const faqs = [
  {
    question: "Can I consult for hair, skin, and dental concerns in one visit?",
    answer:
      "Yes. We offer all three specialties under one roof. Simply mention your concerns while booking, and we'll arrange consultations with the right specialists.",
  },
  {
    question: "How do I know which treatment is right for me?",
    answer: "Your treatment is recommended only after a detailed consultation.",
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions depends on your condition and the treatment chosen.",
  },
  {
    question: "Are the treatments painful?",
    answer:
      "Most treatments involve minimal discomfort. For procedures that may cause discomfort, we use appropriate numbing techniques to ensure a comfortable experience.",
  },
  {
    question: "Will the results be permanent?",
    answer:
      "Results vary depending on the treatment and individual factors. While some procedures offer long-lasting outcomes, others may require maintenance sessions for the best results.",
  },
  {
    question: "How much do the treatments cost?",
    answer:
      "Treatment costs vary based on your concerns and the recommended procedure. You'll receive a clear, transparent estimate during your consultation, with no hidden charges.",
  },
  {
    question: "Can I undergo treatment if I have a medical condition or take regular medication?",
    answer:
      "Yes, in many cases. However, your specialist will review your medical history and medications to ensure the treatment is safe and suitable for you.",
  },
  {
    question: "Do you provide treatment for children?",
    answer:
      "Yes. We offer gentle, child-friendly dental care. For skin and hair concerns in children, our specialists will recommend age-appropriate treatment after an evaluation.",
  },
];

function PlusIcon() {
  return (
    <span className="relative h-5 w-5 flex-shrink-0" aria-hidden>
      <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
      <span className="absolute left-1/2 top-1/2 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-transform duration-300 group-open:rotate-90" />
    </span>
  );
}

export default function AboutFaqSection() {
  return (
    <section className="bg-[#F7F8FC] px-4 py-10 sm:px-6 sm:py-10 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1280px]">
        <header className="mx-auto max-w-[850px] text-center">
          <span className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#ED3136]">
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rotate-45 bg-[#354C9C]" />
              <span className="h-px w-6 bg-[#354C9C]/40" />
            </span>
            FAQs
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-px w-6 bg-[#354C9C]/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#354C9C]" />
            </span>
          </span>

          <h2 className="mx-auto mt-4 max-w-[800px] text-[27px] font-extrabold leading-[1.08] tracking-tight text-[#111836] sm:text-[36px] lg:text-[44px]">
            Have questions? We&rsquo;ve answered the ones we hear{" "}
            <span className="relative inline-block text-[#ED3136]">
              most often .
              <svg className="absolute -bottom-1.5 left-0 w-full sm:-bottom-2" height="8" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden>
                <path d="M2 6 C 50 2, 150 2, 198 6" stroke="#ED3136" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h2>
        </header>

        <div className="mt-10 grid items-start gap-4 md:grid-cols-2 lg:mt-14 lg:gap-5">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-[#DEE2EC] bg-white shadow-[0_10px_35px_rgba(13,27,82,0.05)] transition-shadow duration-300 open:shadow-[0_16px_45px_rgba(13,27,82,0.1)]"
            >
              <summary className="flex min-h-[88px] cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 marker:content-none sm:px-6 [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-3">
                  <span className="mt-0.5 text-[12px] font-extrabold tracking-[0.08em] text-[#ED3136]">
                    Q{index + 1}.
                  </span>
                  <span className="text-[15px] font-bold leading-6 text-[#111836] sm:text-[16px]">
                    {faq.question}
                  </span>
                </span>
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#354C9C]/10 text-[#354C9C] transition-colors duration-300 group-open:bg-[#ED3136] group-open:text-white">
                  <PlusIcon />
                </span>
              </summary>

              <div className="border-t border-[#E8EAF1] px-5 py-5 sm:px-6">
                <p className="pl-0 text-[14px] leading-7 text-[#606579] sm:pl-9 sm:text-[15px]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 max-sm:mt-5 flex flex-col items-center justify-center gap-5 text-center sm:mt-14 sm:flex-row">
          <p className="text-[17px] font-semibold text-[#111836] sm:text-[18px]">
            Still have a question? We&rsquo;re happy to answer it.
          </p>
          <Link
            href="/contact"
            className="inline-flex min-w-[138px] items-center justify-center rounded-full bg-[#ED3136] px-7 py-3.5 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C92A2E]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
