import { FiPhone, FiMapPin } from "react-icons/fi";

export default function ClearAlignersFinalCTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/ctaban.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#354C9C]/60" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-10 md:px-16 py-10 sm:py-12 md:py-14">
        <div className="max-w-[660px]">

          <h2 className="font-extrabold text-white leading-[1.1] tracking-tight mb-3
                         text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]">
            Book Your Clear Aligner
            <span className="block text-[#FEEA1B]">Consultation</span>
          </h2>

          <p className="text-white font-semibold mb-2 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            Ready to improve your smile?
          </p>

          <p className="text-white/70 leading-relaxed mb-7
                        text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] max-w-[520px]">
            Schedule your consultation at Hair O Graft and find out whether clear
            aligners are right for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

            <a
              href="tel:+917448866675"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20
                         border border-white/20 hover:border-white/40
                         transition-all duration-200 px-4 py-3.5 rounded-xl w-full"
            >
              <div className="w-9 h-9 rounded-lg bg-[#FEEA1B] flex items-center justify-center flex-shrink-0">
                <FiPhone className="w-4 h-4 text-[#363435]" />
              </div>
              <div>
                <p className="text-white/50 text-[9px] font-bold tracking-widest uppercase leading-none mb-1">Call Us</p>
                <p className="text-white font-bold text-[15px] sm:text-[16px]">74488 66675</p>
              </div>
            </a>

            <div className="flex items-start gap-3 bg-white/10 border border-white/20
                            px-4 py-3.5 rounded-xl w-full">
              <div className="w-9 h-9 rounded-lg bg-[#FEEA1B] flex items-center justify-center flex-shrink-0 mt-0.5">
                <FiMapPin className="w-4 h-4 text-[#363435]" />
              </div>
              <div>
                <p className="text-white/50 text-[9px] font-bold tracking-widest uppercase leading-none mb-1">Address</p>
                <p className="text-white font-medium text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                  25, Nehru Bazaar, Thirumalai Rajapuram,
                  Kondithope, Avadi, Chennai, Tamil Nadu 600054
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
