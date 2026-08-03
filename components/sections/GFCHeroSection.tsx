export default function GFCHeroSection() {
  return (
    <section id="overview" className="relative w-full overflow-hidden">

      {/* Mobile image (hidden on lg+) */}
      <div
        className="block lg:hidden w-full"
        style={{
          backgroundImage:    "url('/gfcmob.png')",
          backgroundSize:     "cover",
          backgroundPosition: "center top",
          backgroundRepeat:   "no-repeat",
          minHeight:          "210vw",
        }}
      />

      {/* Desktop image (hidden below lg) */}
      <div
        className="hidden lg:block w-full"
        style={{
          backgroundImage:    "url('/gfcbann.png')",
          backgroundSize:     "cover",
          backgroundPosition: "center center",
          backgroundRepeat:   "no-repeat",
          minHeight:          "420px",
          maxHeight:          "660px",
          height:             "45vw",
        }}
      />

    </section>
  );
}
