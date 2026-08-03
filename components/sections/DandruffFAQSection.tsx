import { FiHelpCircle, FiPhone } from "react-icons/fi";

const faqs = [
  {
    num: "01",
    q: "Can dandruff be cured permanently?",
    a: "Treatment can help reduce and control flaking and irritation, but dandruff may return, especially if the underlying triggers come back. Ongoing scalp care helps keep it managed.",
  },
  {
    num: "02",
    q: "Is dandruff treatment painful?",
    a: "You may feel a mild tingling or cooling sensation on your scalp during the procedure.",
  },
  {
    num: "03",
    q: "How many sessions will I need?",
    a: "This depends on the cause and severity of your dandruff.",
  },
  {
    num: "04",
    q: "Will my dandruff come back?",
    a: "It can recur, particularly if contributing factors such as oil buildup, dryness, or product sensitivity return. Following a maintenance routine helps reduce the chances of it coming back.",
  },
  {
    num: "05",
    q: "Can dandruff cause hair fall?",
    a: "Severe flaking and scalp irritation can contribute to temporary hair fall in some people.",
  },
  {
    num: "06",
    q: "How soon will I see results?",
    a: "Response to treatment varies depending on the cause and severity of dandruff. Some individuals may notice improvements earlier than others, while persistent dandruff may require ongoing management.",
  },
];

export default function DandruffFAQSection() {
  return (
    <section id="faqs" className="overflow-hidden bg-white">

      <div
        className="w-full py-10 sm:py-12 md:py-14 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#363435 0%,#1a3080 55%,#354C9C 100%)" }}
      >
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
            <FiHelpCircle className="w-3.5 h-3.5 text-[#FEEA1B]" />
            <span className="text-[#FEEA1B] text-[11px] font-bold tracking-widest uppercase">FAQs</span>
          </div>

          <h2 className="font-extrabold text-white leading-[1.1] tracking-tight
                         text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]">
            Frequently Asked{" "}
            <span className="text-[#FEEA1B]">Questions</span>
          </h2>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {faqs.map((faq) => (
            <div key={faq.num}
              className="relative group overflow-hidden
                bg-[#FEFEFE] rounded-2xl border border-[#D8DDE8]
                hover:border-[#354C9C] hover:shadow-[0_6px_24px_rgba(53,76,156,0.10)]
                transition-all duration-250 p-4 sm:p-5">
              <span
                className="absolute -right-2 -bottom-3 font-black text-[#354C9C] opacity-[0.055]
                           select-none pointer-events-none leading-none"
                style={{ fontSize: "72px" }}
              >
                {faq.num}
              </span>

              <div className="flex items-start gap-2.5 mb-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full
                                  bg-[#354C9C] text-white font-black text-[10px] flex-shrink-0">
                  {faq.num}
                </span>
                <h3 className="font-extrabold text-[#363435] leading-snug
                               text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                  {faq.q}
                </h3>
              </div>

              <div className="w-8 h-[2px] rounded-full bg-[#354C9C] opacity-30 mb-2.5
                              group-hover:w-16 group-hover:opacity-60 transition-all duration-300" />

              <p className="text-gray-500 leading-[1.65] relative z-10
                            text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 sm:mt-10 rounded-2xl overflow-hidden relative
                      flex flex-col sm:flex-row items-center justify-between
                      gap-4 sm:gap-6 px-5 sm:px-8 py-5 sm:py-6
                      text-center sm:text-left"
          style={{ background: "linear-gradient(135deg,#354C9C 0%,#1a3080 60%,#363435 100%)" }}
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full border-[16px] border-white/10 pointer-events-none" />

          <p className="text-white font-semibold text-center sm:text-left
                        text-[14px] sm:text-[15px] md:text-[16px] relative z-10">
            Still have questions?
          </p>

          <a href="tel:+917448866675" className="flex-shrink-0 relative z-10 w-full sm:w-auto">
            <button
              className="flex items-center gap-2 justify-center w-full sm:w-auto
                         bg-white text-[#354C9C] font-bold rounded-full
                         px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[14px]
                         shadow-[0_4px_16px_rgba(0,0,0,0.15)]
                         hover:scale-105 active:scale-95 transition-all"
            >
              <FiPhone className="w-4 h-4 flex-shrink-0" />
              Call Us: +91 74488 66675
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}
