export default function HydraFacialIntroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 md:px-16 py-10 sm:py-12 md:py-14">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                        bg-[#354C9C]/10 border border-[#354C9C]/20 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#354C9C] flex-shrink-0" />
          <span className="text-[#354C9C] text-[11px] font-bold tracking-widest uppercase">
            HydraFacial Treatment in Chennai
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-extrabold text-[#363435] leading-[1.1] tracking-tight mb-4
                       text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]
                       max-w-[760px]">
          Reveal Healthier, Brighter Skin with{" "}
          <span className="text-[#354C9C]">HydraFacial</span>{" "}
          at Hair O Graft
        </h1>

        {/* Body */}
        <p className="text-gray-600 leading-[1.8] mb-5 max-w-[680px]
                      text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]">
          Daily exposure to pollution, sun damage, and stress can leave your skin dull,
          dehydrated, and tired. At Hair O Graft, Chennai, our advanced HydraFacial deeply
          cleanses, exfoliates, and hydrates your skin, revealing a fresh, healthy glow in
          just one session.
        </p>

        {/* CTA text */}
        <p className="text-[#354C9C] font-semibold text-[14px] sm:text-[15px] md:text-[16px]">
          Book a consultation today and discover how HydraFacial can transform your skin.
        </p>

      </div>
    </section>
  );
}
