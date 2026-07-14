export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b1233] px-5 py-7 text-white sm:px-8 lg:px-10 max-sm:mb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#364b9b] to-[#d92732]" />

      {/* Ambient brand glow, consistent with the rest of the site */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#364b9b]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-16 h-[280px] w-[280px] rounded-full bg-[#d92732]/[0.12] blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-[1005px] flex-col items-center gap-3 text-center text-[14px] md:text-[15px] lg:text-[16px] font-medium text-white/65 sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
        <p>
          Copyright 2026{" "}
          <span className="font-extrabold text-white">Hair O Graft.</span>{" "}
          All rights reserved.
        </p>
        <a
          className="font-extrabold text-white/80 transition-colors duration-200 hover:text-[#d92732]"
          href="/hair-treatment/privacy-policy"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
