import Image from "next/image";

/* ── Inline SVG – large quotation mark ── */
function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="currentColor">
      <path d="M12 34c-4.4 0-8-3.6-8-8V14h10v10H8c0 2.2 1.8 4 4 4v6zm22 0c-4.4 0-8-3.6-8-8V14h10v10h-6c0 2.2 1.8 4 4 4v6z" />
    </svg>
  );
}

/* ── Star rating SVG ── */
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function ExpertsSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16">

        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#354C9C] flex-shrink-0" />
            <span className="text-[#354C9C] text-xs font-bold tracking-widest uppercase">Our Team & Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-[30px] md:text-[32px] font-bold leading-[1.3] text-[#354C9C]">
            Meet Your Skin Care Experts
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 items-stretch">

          {/* Expert card */}
          <div className="flex flex-col items-center text-center group bg-[#F7F8FC] rounded-3xl p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden mb-5 sm:mb-6 md:mb-8 border-4 border-[#FEEA1B] shadow-xl group-hover:scale-105 transition-transform relative flex-shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiW27deDCe_uZQfcWgzViA2znaKCwmReiZUyPHadJFcyNKEzpFCSJ05GZg0c2g7vLtYMXWMncmBtMtHk2noknCjUY5BKZHvIscocRMKN5iVzXRKib1hNDgQjtqaVKIub9Z7wDEcn2XDkrEDw-n4JQAn_0IpCTi-b7g7YP-X0fG6XXqVchSjGIjOw2w6IOYSMqakhmMVeYkmAjI94SS1XybnVuwOeE4tI_j5QaRfRz2kRp4Au_y_ccaPQ"
                alt="Clinical Specialist"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold leading-snug text-[#354C9C]">
              Clinical Specialist
            </h4>
            <p className="text-gray-500 font-semibold mt-1.5 sm:mt-2 text-sm sm:text-base">15+ Years Experience</p>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mt-3 sm:mt-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-[#FEEA1B]" />
              ))}
              <span className="text-xs text-gray-400 ml-1 font-semibold">5.0</span>
            </div>
          </div>

          {/* Testimonial */}
          <div className="col-span-1 md:col-span-2 bg-[#F7F8FC] p-6 sm:p-8 md:p-10 rounded-3xl text-left border border-gray-100 relative hover:shadow-xl transition-all duration-300">
            {/* Decorative quote mark */}
            <QuoteIcon className="w-12 h-12 sm:w-14 sm:h-14 text-[#FEEA1B] opacity-50 mb-4 sm:mb-5 md:mb-6" />

            <p className="text-base sm:text-lg font-normal leading-relaxed italic text-gray-700 mb-7 sm:mb-8 md:mb-10">
              &ldquo;My skin has never felt this clean and hydrated. The HydraFacial at Hair O Graft
              is now my monthly ritual. The results were visible instantly! Professional care and
              wonderful staff.&rdquo;
            </p>

            {/* Reviewer */}
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#354C9C] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-md flex-shrink-0">
                SC
              </div>
              <div>
                <p className="font-bold text-[#354C9C] text-base sm:text-lg">Satisfied Client</p>
                <p className="text-xs sm:text-sm font-semibold tracking-wide text-gray-400 mt-0.5">
                  Chennai, India
                </p>
              </div>

              {/* Stars aligned right on larger screens */}
              <div className="sm:ml-auto flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-[#FEEA1B]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
