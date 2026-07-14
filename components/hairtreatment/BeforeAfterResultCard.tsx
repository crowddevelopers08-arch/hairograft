import Image from "next/image";

function GrowthIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21V9m0 0c0-4 3-7 7-7 0 4-3 7-7 7Zm0 0C12 5 9 2 5 2c0 4 3 7 7 7Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function RootIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v7m0 0-4 11m4-11 4 11m-4-11-2 4m2-4 2 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

const resultHighlights = [
  { label: "Boosts Hair Growth", Icon: GrowthIcon },
  { label: "Strengthens Roots", Icon: RootIcon },
  { label: "Improves Scalp Health", Icon: ShieldIcon },
];

/** Coded recreation of the "hair regrowth results" poster — badges, panel
 *  borders and icons pull from the site's own blue/red palette instead of
 *  a flat uploaded graphic, and the before/after photo is sliced from the
 *  same source image via object-position so no fabricated photos are used. */
export default function BeforeAfterResultCard({ src }: { src: string }) {
  return (
    <div
      key={src}
      className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl"
    >
      <div className="px-4 pt-4 text-center">
        <h3 className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-extrabold uppercase tracking-tight text-[#1c2437]">
          Hair Regrowth <span className="text-[#354f9f]">Results</span>
        </h3>
        <p className="mt-1 text-[12px] md:text-[13px] lg:text-[14px] uppercase tracking-[0.15em] text-[#1c2437]/50">
          Visible improvement in scalp density
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 px-4">
        <div>
          <span className="mb-2 inline-flex w-full items-center justify-center rounded-full bg-[#d92732] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            Before &middot; Month 1
          </span>
          <div className="instant-print-image relative aspect-square w-full overflow-hidden rounded-xl border-2 border-[#d92732]/40 bg-[#f7f8fb]">
            <Image
              src={src}
              alt="Before hair regrowth treatment"
              fill
              className="object-cover"
              style={{ objectPosition: "left center" }}
              sizes="210px"
            />
          </div>
        </div>
        <div>
          <span className="mb-2 inline-flex w-full items-center justify-center rounded-full bg-[#354f9f] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            After &middot; Month 6
          </span>
          <div className="instant-print-image relative aspect-square w-full overflow-hidden rounded-xl border-2 border-[#354f9f]/40 bg-[#f7f8fb]">
            <Image
              src={src}
              alt="After hair regrowth treatment"
              fill
              className="object-cover"
              style={{ objectPosition: "right center" }}
              sizes="210px"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 divide-x divide-black/5 border-t border-black/5">
        {resultHighlights.map(({ label, Icon }) => (
          <div key={label} className="flex flex-col items-center gap-1.5 px-2 py-3 text-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#354f9f]/10 text-[#354f9f]">
              <Icon />
            </span>
            <span className="text-[11px] font-bold uppercase leading-tight text-[#1c2437]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
