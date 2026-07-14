const faqs = [
  {
    question: "What hair problems do you treat?",
    answer: [
      "Hair Fall",
      "Hair Thinning",
      "Baldness",
      "Receding Hairline",
      "Dandruff",
      "Scalp Infections",
      "Weak Hair Growth",
    ],
  },
  {
    question: "Is PRP treatment painful?",
    answer:
      "PRP is a minimally invasive procedure. Most patients experience only mild discomfort, and the treatment is completed comfortably under expert care.",
  },
  {
    question: "How many sessions are required?",
    answer:
      "The number of sessions depends on your hair condition. Our specialist will recommend a customized treatment plan after your consultation.",
  },
  {
    question: "Is GFC better than PRP?",
    answer:
      "Both treatments are effective. The best option depends on your stage of hair loss, scalp condition, and treatment goals.",
  },
  {
    question: "When will I see results?",
    answer:
      "Many patients notice reduced hair fall within a few weeks, while visible hair growth typically becomes more noticeable over the following months. Individual results vary.",
  },
];

function ToggleIcon() {
  return (
    <span className="relative mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#364b9b]/25 bg-[#364b9b]/[0.04] text-[#364b9b] transition-all duration-300 group-open:rotate-45 group-open:border-[#d92732] group-open:bg-[#d92732] group-open:text-white">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 1V14M1 7.5H14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function FaqSection() {
  return (
    <section
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f8fc] px-5 py-5 sm:px-8 lg:px-10 lg:py-8"
      id="faq"
    >
      {/* Ambient brand glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#364b9b]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-[380px] w-[380px] rounded-full bg-[#d92732]/10 blur-3xl" />

      {/* Subtle strand-like linework, echoing hair texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M ${-100 + i * 60} 850 C ${150 + i * 60} 550, ${50 + i * 60} 260, ${300 + i * 90} -50`}
            stroke={i % 2 === 0 ? "#364b9b" : "#d92732"}
            strokeWidth="1.5"
            fill="none"
          />
        ))}
      </svg>

      <div className="relative mx-auto max-w-[1160px]">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="animate-slip-up inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] md:text-[13px] lg:text-[14px] font-bold uppercase tracking-[0.18em] text-[#364b9b]">
            <span className="h-px w-6 bg-[#364b9b]" />
              FAQ
            <span className="h-px w-6 bg-[#d92732]" />
          </span>
          <h2 className="animate-slip-up animation-delay-100 mt-0 max-sm:mt-2 text-[24px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-extrabold leading-tight text-[#1a1f36]">
            Frequently Asked{" "}
            <span className="relative inline-block text-[#d92732]">
              Questions
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 260 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 C 70 2, 190 2, 258 7"
                  stroke="#d92732"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="animate-slip-up animation-delay-100 mt-2 text-[14px] md:text-[15px] lg:text-[16px] leading-7 text-[#5a6178]">
            Everything you need to know before starting your hair
            restoration journey with our specialists.
          </p>
        </div>

        <div className="mt-14 max-sm:mt-8 grid gap-5 max-sm:gap-3 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <details
              className={`animate-slip-up group relative overflow-hidden rounded-2xl border border-[#364b9b]/10 bg-white p-6 shadow-[0_1px_2px_rgb(54_75_155_/6%)] transition-all duration-300 open:border-[#d92732]/20 open:shadow-[0_24px_48px_-16px_rgb(54_75_155_/20%)] max-sm:p-5 ${
                index === faqs.length - 1
                  ? "lg:col-span-2 lg:w-[calc(50%-0.625rem)] lg:justify-self-center"
                  : ""
              }`}
              style={{ animationDelay: `${180 + index * 90}ms` }}
              key={faq.question}
            >
              <span className="absolute left-0 top-0 h-0 w-[3px] bg-gradient-to-b from-[#364b9b] to-[#d92732] transition-all duration-300 group-open:h-full" />

              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:hidden">
                <h3 className="text-[14px] md:text-[15px] lg:text-[18px] font-bold leading-snug tracking-[-0.01em] text-[#1a1f36]">
                  {faq.question}
                </h3>
                <ToggleIcon />
              </summary>

              {Array.isArray(faq.answer) ? (
                <ul className="mt-6 grid gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-semibold leading-6 text-[#40465c] sm:grid-cols-2">
                  {faq.answer.map((item) => (
                    <li className="flex items-center gap-2.5" key={item}>
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#364b9b]/[0.07]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d92732]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 text-[14px] md:text-[15px] lg:text-[16px] leading-7 text-[#5a6178]">
                  {faq.answer}
                </p>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
