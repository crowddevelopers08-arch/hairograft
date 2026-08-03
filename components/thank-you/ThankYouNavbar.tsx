import Image from "next/image";
import Link from "next/link";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.4 1.13 2 2 0 012.4.95h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0120.07 16z" />
    </svg>
  );
}

const contact = {
  phone: "7448866675",
};

export default function ThankYouNavbar() {
  return (
    <nav
      className="fixed top-0 z-50 w-full py-2"
      style={{
        background: "linear-gradient(135deg, rgba(6,10,38,0.97) 0%, rgba(13,27,82,0.97) 50%, rgba(6,10,38,0.97) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#7EB3FF]/40 to-transparent" />

      <div className="mx-auto flex h-[60px] max-w-[1340px] items-center justify-around gap-3 px-3 sm:h-[64px] sm:px-6 xl:px-8">
        <Link href="/" className="group flex min-w-0 flex-shrink items-center gap-2 sm:gap-3">
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white/20 shadow-[0_0_16px_rgba(126,179,255,0.2)] transition-all duration-300 group-hover:scale-105 group-hover:ring-[#7EB3FF]/60 group-hover:shadow-[0_0_24px_rgba(126,179,255,0.4)] sm:h-[52px] sm:w-[52px]">
            <Image src="/image.png" alt="Hair O Graft Logo" fill className="object-cover" priority />
          </div>
          <div className="min-w-0 leading-tight">
            <span className="block truncate text-[14px] font-extrabold tracking-tight text-white drop-shadow-[0_0_8px_rgba(126,179,255,0.3)] sm:text-[17px]">
              Hair O Graft
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7EB3FF]/70">
              Hair | Skin | Dental
            </span>
          </div>
        </Link>

        <a
          href={`tel:+91${contact.phone}`}
          className="flex flex-shrink-0 items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-3.5 py-2 text-[12.5px] font-bold text-white/85 transition-colors hover:border-white/25 hover:text-white sm:px-4 sm:text-[13px]"
        >
          <PhoneIcon className="h-4 w-4 flex-shrink-0" />
          <span className="whitespace-nowrap">+91 {contact.phone}</span>
        </a>
      </div>
    </nav>
  );
}
