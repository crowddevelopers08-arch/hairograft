import Image from "next/image";
import Link from "next/link";

export default function ThankYouFooter() {
  return (
    <footer className="bg-[#0f1320] text-white">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-6 gap-y-4 px-4 py-7 text-center sm:px-10 md:px-16">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[#354C9C]/50">
            <Image src="/image.png" alt="Hair O Graft" fill className="object-cover" />
          </div>
          <p className="text-[14px] font-extrabold text-white">Hair O Graft</p>
        </Link>

        <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden />

        <p className="text-[11px] font-medium text-white/35 sm:text-[12px]">
          © 2025 Hair O Graft. All rights reserved.
        </p>

        <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden />

        <div className="flex items-center gap-5">
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-condition" },
          ].map(({ label, href }) => (
            <Link key={label} href={href} className="text-[12px] font-medium text-white/50 transition-colors hover:text-white">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
