import Image from "next/image";
import Link from "next/link";

type IconProps = { className?: string };

function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .95h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0120.07 16z" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function MapPinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}


function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L71 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

export default function ConsultationCTASection() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 lg:py-16">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px]">
        <div className="absolute inset-0">
          <Image
            src="/cta-consultation-mb.png"
            alt="Hair O Graft consultation"
            fill
            className="object-cover sm:hidden"
          />
          <Image
            src="/cta-consultation.png"
            alt="Hair O Graft consultation"
            fill
            className="hidden object-cover sm:block object-left-top"
          />
        </div>
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,27,82,0.72) 0%, rgba(13,27,82,0.48) 32%, rgba(13,27,82,0.62) 60%, rgba(13,27,82,0.9) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(13,27,82,0.97) 0%, rgba(20,28,96,0.94) 40%, rgba(20,28,96,0.65) 62%, rgba(20,28,96,0.2) 85%, rgba(20,28,96,0) 100%)",
          }}
        />

        <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
          <div className="max-w-[600px] [text-shadow:0_2px_10px_rgba(6,12,42,0.75)] sm:[text-shadow:none]">
            <span className="inline-flex items-center gap-3 text-[8px] font-bold uppercase tracking-[0.18em] text-[#ED3136] min-[375px]:text-[11px] min-[425px]:text-[13px]">
              <span aria-hidden className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rotate-45 bg-white" />
                <span className="h-px w-6 bg-white/40" />
              </span>
              Book Your Consultation
              <span aria-hidden className="flex items-center gap-1.5">
                <span className="h-px w-6 bg-white/40" />
                <span className="h-1.5 w-1.5 rotate-45 bg-white" />
              </span>
            </span>

            <h2 className="mt-3 max-w-[640px] text-[27px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[44px]">
              Ready to take the{" "}
              <span className="relative inline-block text-[#ED3136]">
                first step?
                <svg
                  className="absolute -bottom-1.5 left-0 w-full sm:-bottom-2"
                  height="8"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 6 C 50 2, 150 2, 198 6"
                    stroke="#ED3136"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-4 max-w-[500px] text-[15px] leading-relaxed text-white sm:text-[16px]">
              Whether it&rsquo;s your hair, your skin or your smile, book a consultation
              and let&rsquo;s find the right plan for you.
            </p>

            <div className="mt-8 flex flex-wrap items-start gap-x-8 gap-y-5">
              <div>
                <p className="flex items-center gap-2 text-[14px] font-bold text-white sm:text-[15px]">
                  <PhoneIcon className="h-4 w-4 flex-shrink-0" />
                  Call Us:
                </p>
                <a href="tel:+917448866675" className="mt-1 block text-[14px] text-white transition-colors hover:text-white sm:text-[15px]">
                  +91 74488 66675
                </a>
              </div>

              <div className="hidden h-12 w-px bg-white/15 sm:block" />

              <div>
                <p className="flex items-center gap-2 text-[14px] font-bold text-white sm:text-[15px]">
                  <MailIcon className="h-4 w-4 flex-shrink-0" />
                  E-mail Us:
                </p>
                <a href="mailto:hairograft@gmail.com" className="mt-1 block text-[14px] text-white transition-colors hover:text-white sm:text-[15px]">
                  hairograft@gmail.com
                </a>
              </div>

              <div className="hidden h-12 w-px bg-white/15 sm:block" />

              <div>
                <p className="flex items-center gap-2 text-[14px] font-bold text-white sm:text-[15px]">
                  <MapPinIcon className="h-4 w-4 flex-shrink-0" />
                  Visit Us:
                </p>
                <p className="mt-1 max-w-[220px] text-[14px] leading-snug text-[#ED3136] sm:text-[15px]">
                  25, Nehru Bazaar, Avadi, Chennai — 600054
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#ED3136] py-2 pl-6 pr-2 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c92a2e] active:translate-y-0"
              >
                Book Now
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#ED3136] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>

              <Image
                src="/icons.png"
                alt=""
                width={56}
                height={46}
                className="hidden h-14 w-18 animate-cta-icon-drift brightness-0 invert sm:block"
              />

              <a
                href="https://wa.me/917448866675"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[9px] font-semibold text-white/70 transition-colors hover:text-white min-[375px]:text-[12px] min-[425px]:text-[14px]"
              >Or 
                <WhatsAppIcon className="h-4 w-4 flex-shrink-0 text-[#25D366]" />
                Message us on WhatsApp — +91 74488 66675
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
