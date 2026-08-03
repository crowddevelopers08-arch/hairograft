import Link from "next/link";

type IconProps = { className?: string; style?: React.CSSProperties };

function HairIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M7.5 8.5C7.5 6 9 3 12 3c3 0 4.5 3 4.5 5.5" />
      <path d="M5 21c0-3.866 3.134-7 7-7s7 3.134 7 7" />
    </svg>
  );
}

function SkinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="5.5" />
      <path d="M12 4.5V3M12 17v-1.5M4.5 10H3M21 10h-1.5M6.4 6.4l-1-1M18.6 18.6l-1-1M17.6 6.4l1-1M5.4 18.6l1-1" />
    </svg>
  );
}

function ToothIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 3C6.5 3 4.5 4.5 4.5 7c0 1.5.4 2.8.8 3.8.6 1.6.7 2.5.7 3.2 0 1 .3 2.5.8 3.8C7.3 19.1 8 21 9 21c1 0 1.2-1.5 1.5-3 .2-.8.5-1.5 1.5-1.5s1.3.7 1.5 1.5c.3 1.5.5 3 1.5 3 1 0 1.7-1.9 2.2-3.2.5-1.3.8-2.8.8-3.8 0-.7.1-1.6.7-3.2.4-1 .8-2.3.8-3.8C19.5 4.5 17.5 3 15.5 3c-1 0-2 .4-3.5.4S9.5 3 8.5 3z" />
    </svg>
  );
}

function ArrowRight({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
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

const categories = [
  {
    key: "hair",
    color: "#7EB3FF",
    Icon: HairIcon,
    title: "Hair Restoration & Growth",
    text: "Target the root cause of thinning and hair loss with personalised, evidence-based care.",
    items: [
      { label: "GFC", href: "/services/hair-treatments/gfc" },
      { label: "PRP", href: "/services/hair-treatments/prp" },
      { label: "Micro-Needling", href: "/services/hair-treatments/microneedling" },
      { label: "Dandruff Treatment", href: "/services/hair-treatments/dandruff-treatment" },
      { label: "UV Light Therapy", href: "/services/hair-treatments/uv-light" },
    ],
  },
  {
    key: "skin",
    color: "#e95b8a",
    Icon: SkinIcon,
    title: "Skin & Aesthetics",
    text: "Dermatology-led treatments for clearer, healthier skin, matched to your skin type.",
    items: [
      { label: "HydraFacial", href: "/services/skin-treatments/hydrafacial" },
      { label: "Acne & Scar Removal", href: "/services/skin-treatments/acne-scar-removal" },
      { label: "Glutathione IV", href: "/services/skin-treatments/glutathione-iv" },
      { label: "Laser Hair Removal", href: "/services/skin-treatments/laser-hair-removal" },
      { label: "Carbon Peel", href: "/services/skin-treatments/carbon-peel" },
    ],
  },
  {
    key: "dental",
    color: "#4ECFAD",
    Icon: ToothIcon,
    title: "Dental Care",
    text: "Complete care for the whole family, from everyday fixes to a confident smile.",
    items: [
      { label: "Aligners", href: "/services/dental-treatments/aligners" },
      { label: "Root Canal", href: "/services/dental-treatments/root-canal" },
      { label: "Dental Implant", href: "/services/dental-treatments/dental-implant" },
      { label: "Dental Crown", href: "/services/dental-treatments/dental-crown" },
      { label: "Kids Dentistry", href: "/services/dental-treatments/kids-dentistry" },
    ],
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <h2 className="mx-auto max-w-[720px] text-center text-[26px] font-extrabold leading-[1.15] tracking-tight text-[#363435] sm:text-[32px] lg:text-[40px]">
          Everything your skin, hair and smile need, in one place
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {categories.map(({ key, color, Icon, title, text, items }) => (
            <div
              key={key}
              className="flex flex-col rounded-2xl border border-[#D8DDE8] bg-white p-6 shadow-[0_4px_24px_rgba(53,76,156,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(53,76,156,0.12)] sm:p-7"
            >
              <span
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${color}1A`, color }}
              >
                <Icon className="h-6 w-6" />
              </span>

              <h3 className="mt-5 text-[19px] font-bold text-[#363435] sm:text-[21px]">{title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-500">{text}</p>

              <ul className="mt-5 space-y-0.5 border-t border-[#EEF0F6] pt-4">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between gap-2 rounded-lg py-2 text-[13.5px] font-semibold text-gray-700 transition-colors duration-200 hover:text-[#354C9C]"
                    >
                      {item.label}
                      <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 -translate-x-1 text-gray-300 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" style={{ color }} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row lg:mt-14">
          <p className="text-[15px] font-semibold text-[#363435]">Not sure where to start?</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#354C9C] py-2 pl-6 pr-2 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2B3E80] active:translate-y-0"
          >
            Book a consultation and we&rsquo;ll guide you
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#354C9C] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
