/* ── Question mark icon ── */
function QuestionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.5 9a2.5 2.5 0 015 .5c0 2-3 2.5-3 4" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

const faqs = [
  {
    num: "01",
    q: "Can acne scars be removed completely?",
    a: "Results vary based on scar type and severity. Many treatments can significantly improve the appearance of scars, though complete removal cannot always be guaranteed.",
  },
  {
    num: "02",
    q: "How many sessions will I need?",
    a: "The number of sessions varies depending on the type and severity of acne or scarring, as well as the treatment recommended.",
  },
  {
    num: "03",
    q: "Is acne scar treatment painful?",
    a: "Most treatments are well tolerated, and comfort measures may be used when required.",
  },
  {
    num: "04",
    q: "When will I see results?",
    a: "Improvements usually become more noticeable over several weeks as the skin heals and collagen production increases.",
  },
  {
    num: "05",
    q: "Are the results permanent?",
    a: "Improvement is generally long-lasting, although maintaining a healthy skincare routine remains important.",
  },
];

export default function AcneScarFAQSection() {
  return (
    <section id="faqs" className="overflow-hidden bg-white">

      {/* ── Top accent band ── */}
      <div
        className="w-full py-10 sm:py-12 md:py-14 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#363435 0%,#1a3080 55%,#354C9C 100%)" }}
      >
        {/* Decorative large faint "?" */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 select-none pointer-events-none
                      font-black text-white opacity-[0.04] leading-none hidden md:block"
          style={{ fontSize: "240px" }}
        >
          ?
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4
                          px-4 py-1.5 rounded-full border border-white/20 bg-white/10">
            <QuestionIcon className="w-3.5 h-3.5 text-[#FEEA1B]" />
            <span className="text-[#FEEA1B] text-[11px] font-bold tracking-widest uppercase">FAQs</span>
          </div>

          <h2
            className="
              font-extrabold text-white leading-[1.1] tracking-tight
              text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]
            "
          >
            Frequently Asked{" "}
            <span className="text-[#FEEA1B]">Questions</span>
          </h2>
        </div>
      </div>

      {/* ── FAQ cards grid ── */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8
                      py-10 sm:py-12 md:py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.num}
              className="
                relative group overflow-hidden
                bg-[#FEFEFE] rounded-2xl
                border border-[#D8DDE8]
                hover:border-[#354C9C] hover:shadow-[0_6px_24px_rgba(53,76,156,0.10)]
                transition-all duration-250
                p-4 sm:p-5
                sm:last:col-span-2 sm:last:max-w-[calc(50%-10px)] sm:last:w-full sm:last:mx-auto
              "
            >
              {/* Faint watermark number */}
              <span
                className="absolute -right-2 -bottom-3 font-black text-[#354C9C] opacity-[0.055]
                           select-none pointer-events-none leading-none"
                style={{ fontSize: "72px" }}
              >
                {faq.num}
              </span>

              <div className="flex items-start gap-2.5 mb-2">
                {/* Number badge */}
                <span
                  className="
                    inline-flex items-center justify-center
                    w-6 h-6 rounded-full
                    bg-[#354C9C] text-white font-black
                    text-[10px] flex-shrink-0
                  "
                >
                  {faq.num}
                </span>

                {/* Question */}
                <h3
                  className="
                    font-extrabold text-[#363435] leading-snug
                    text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
                  "
                >
                  {faq.q}
                </h3>
              </div>

              {/* Divider */}
              <div className="w-8 h-[2px] rounded-full bg-[#354C9C] opacity-30 mb-2.5
                              group-hover:w-16 group-hover:opacity-60 transition-all duration-300" />

              {/* Answer */}
              <p
                className="
                  text-gray-500 leading-[1.65] relative z-10
                  text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]
                "
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          className="
            mt-8 sm:mt-10 rounded-2xl overflow-hidden relative
            flex flex-col sm:flex-row items-center justify-between
            gap-4 sm:gap-6
            px-5 sm:px-8 py-5 sm:py-6
            text-center sm:text-left
          "
          style={{ background: "linear-gradient(135deg,#354C9C 0%,#1a3080 60%,#363435 100%)" }}
        >
          {/* Decorative ring */}
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full border-[16px] border-white/10 pointer-events-none" />

          <p className="text-white font-semibold text-center sm:text-left
                        text-[14px] sm:text-[15px] md:text-[16px] relative z-10">
            Still have questions?
          </p>

          <a href="tel:+917448866675" className="flex-shrink-0 relative z-10 w-full sm:w-auto">
            <button
              className="
                flex items-center gap-2
                justify-center w-full sm:w-auto
                bg-white text-[#354C9C] font-bold rounded-full
                px-5 sm:px-6 py-2.5 sm:py-3
                text-[13px] sm:text-[14px]
                shadow-[0_4px_16px_rgba(0,0,0,0.15)]
                hover:scale-105 active:scale-95 transition-all
              "
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .95h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.01z" />
              </svg>
              Call Us: +91 74488 66675
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}
