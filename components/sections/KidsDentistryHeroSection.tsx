export default function KidsDentistryHeroSection() {
  return (
    <section id="overview" className="relative w-full overflow-hidden">

      {/* Mobile image (hidden on lg+) */}
      <div
        className="block lg:hidden w-full"
        style={{
          backgroundImage:    "url('/dc-kids-mb.png')",
          backgroundSize:     "cover",
          backgroundPosition: "center top",
          backgroundRepeat:   "no-repeat",
          minHeight:          "190vw",
        }}
      />

      {/* Desktop image (hidden below lg) */}
      <div
        className="hidden lg:block w-full"
        style={{
          backgroundImage:    "url('/dc-kids-lp.png')",
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
