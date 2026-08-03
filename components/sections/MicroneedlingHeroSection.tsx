export default function MicroneedlingHeroSection() {
  return (
    <section id="overview" className="relative w-full overflow-hidden">
      {/* Mobile image (hidden on lg+) */}
      <div
        className="block lg:hidden "
        style={{
          backgroundImage: "url('/micro-bg-mb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          minHeight: "185vw",
        }}
      />

      {/* Desktop image (hidden below lg) */}
      <div
        className="hidden lg:block w-full"
        style={{
          backgroundImage: "url('/micro-bg-lp.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "420px",
          maxHeight: "660px",
          height: "45vw",
        }}
      />
    </section>
  );
}
