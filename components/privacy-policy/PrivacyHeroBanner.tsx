import Image from "next/image";
import Link from "next/link";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 10v9h13v-9M9.5 19v-5h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PrivacyHeroBanner() {
  return (
    <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[340px] lg:min-h-[400px]">
      <Image
        src="/cta-consultation.png"
        alt="Hair O Graft clinic"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[#07102E]/75" aria-hidden />
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(53,76,156,0.22) 0%, rgba(7,16,46,0) 58%), linear-gradient(90deg, rgba(7,16,46,0.25), transparent 50%, rgba(7,16,46,0.25))",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-4 py-16 text-center sm:px-6">
        <span className="mx-auto mb-5 block h-1 w-12 rounded-full bg-[#ED3136]" aria-hidden />
        <h1 className="text-[36px] font-extrabold leading-none tracking-tight text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.3)] sm:text-[52px] lg:text-[64px]">
          Privacy Policy
        </h1>

        <nav className="mt-6 flex items-center justify-center gap-2.5 text-[14px] font-semibold sm:text-[15px]" aria-label="Breadcrumb">
          <Link href="/" className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white">
            <HomeIcon />
            Home
          </Link>
          <span className="text-white/35" aria-hidden>/</span>
          <span className="text-[#FF555A]" aria-current="page">Privacy Policy</span>
        </nav>
      </div>
    </section>
  );
}
