import Image from "next/image";
import Link from "next/link";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .95h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0120.07 16z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const services = [
  { label: "Skin Treatments", items: ["Hydrafacial", "Acne & Scar Removal", "Botox & Fillers", "Carbon Peel", "Glutathione IV"] },
  { label: "Hair Treatments", items: ["PRP Pro+", "Scalp Micropigmentation", "Micro Blading", "Dandruff Treatment", "GFC"] },
  { label: "Dental Treatments", items: ["Aligners", "INvisalign", "Root Canal", "Implant", "Dental Crown"] },
];


export default function Footer() {
  return (
    <footer className="bg-[#0f1320] text-white">

      {/* ── Main 5-column grid ── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 md:px-16 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#354C9C]/50">
                <Image src="/image.png" alt="Hair O Graft" fill className="object-cover" />
              </div>
              <div>
                <p className="text-white font-extrabold text-[16px] leading-tight">Hair O Graft</p>
                <p className="text-white/40 text-[10px] tracking-[0.15em] uppercase font-medium">Hair · Skin · Dental</p>
              </div>
            </div>

            <p className="text-white/50 text-[12px] leading-relaxed">
              Advanced aesthetic & dental clinic in Avadi, Chennai — personalised care for hair, skin, and smile.
            </p>

            <div className="flex items-center gap-2.5">
              <a href="https://www.instagram.com/hairograft/" aria-label="Instagram" target="_blank"
                className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center
                           hover:bg-[#FEEA1B] hover:border-[#FEEA1B] hover:text-[#0f1320] text-white/60
                           transition-all duration-200">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61588733498323" aria-label="Facebook" target="_blank"
                className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center
                           hover:bg-[#FEEA1B] hover:border-[#FEEA1B] hover:text-[#0f1320] text-white/60
                           transition-all duration-200">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ── Col 2: Contact (all 3 stacked) ── */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="text-white font-bold text-[13px] tracking-wide mb-1">Call Us</h4>
              <div className="w-8 h-[2px] rounded-full bg-[#354C9C] mb-3" />
              <a href="tel:+917448866675"
                className="flex items-start gap-2.5 text-white/60 hover:text-white transition-colors text-[13px]">
                <PhoneIcon className="w-3.5 h-3.5 text-[#354C9C] flex-shrink-0 mt-0.5" />
                +91 74488 66675
              </a>
            </div>

            <div>
              <h4 className="text-white font-bold text-[13px] tracking-wide mb-1">Email Us</h4>
              <div className="w-8 h-[2px] rounded-full bg-[#354C9C] mb-3" />
              <a href="mailto:hairograft@gmail.com"
                className="flex items-start gap-2.5 text-white/60 hover:text-white transition-colors text-[12px]">
                <MailIcon className="w-3.5 h-3.5 text-[#354C9C] flex-shrink-0 mt-0.5" />
                hairograft@gmail.com
              </a>
            </div>

            <div>
              <h4 className="text-white font-bold text-[13px] tracking-wide mb-1">Find Us</h4>
              <div className="w-8 h-[2px] rounded-full bg-[#354C9C] mb-3" />
              <div className="flex items-start gap-2.5 text-white/60 text-[12px] leading-relaxed">
                <MapPinIcon className="w-3.5 h-3.5 text-[#354C9C] flex-shrink-0 mt-0.5" />
                <span>
                  25, Nehru Bazaar, Thirumalai Rajapuram,<br />
                  Kondithope, Avadi,<br />
                  Chennai — 600054
                </span>
              </div>
            </div>
          </div>

          {/* ── Cols 3–5: Services ── */}
          {services.map((col) => (
            <div key={col.label} className="flex flex-col gap-4">
              <div>
                <h4 className="text-white font-bold text-[13px] tracking-wide mb-1">{col.label}</h4>
                <div className="w-8 h-[2px] rounded-full bg-[#354C9C]" />
              </div>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/50 hover:text-white text-[12px] transition-colors duration-150 flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#354C9C]/60 group-hover:bg-[#FEEA1B] transition-colors flex-shrink-0" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 md:px-16 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-[11px] sm:text-[12px] font-medium text-center sm:text-left">
            © 2025 Hair O Graft. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-condition" },
            ].map(({ label, href }) => (
              <Link key={label} href={href}
                className="text-white/35 hover:text-white/70 text-[11px] transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
