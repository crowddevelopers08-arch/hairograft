"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type IconProps = { className?: string; style?: React.CSSProperties };
type NavItem = { label: string; href?: string };
type NavSection = {
  label: string;
  color: string;
  Icon: ({ className, style }: IconProps) => React.JSX.Element;
  items: NavItem[];
};

function SkinIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="10" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 4.5V3M12 17v-1.5M4.5 10H3M21 10h-1.5M6.4 6.4l-1-1M18.6 18.6l-1-1M17.6 6.4l1-1M5.4 18.6l1-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="10" r="2.5" fill="currentColor" opacity="0.25" />
      <path d="M9 13.5c0 1.657 1.343 3 3 3s3-1.343 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function HairIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8.5" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 8.5C7.5 6 9 3 12 3c3 0 4.5 3 4.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 21c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 12.5c-.5 1-1 2-1 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M15 12.5c.5 1 1 2 1 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ToothIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.5 3C6.5 3 4.5 4.5 4.5 7c0 1.5.4 2.8.8 3.8.6 1.6.7 2.5.7 3.2 0 1 .3 2.5.8 3.8C7.3 19.1 8 21 9 21c1 0 1.2-1.5 1.5-3 .2-.8.5-1.5 1.5-1.5s1.3.7 1.5 1.5C13.8 19.5 14 21 15 21c1 0 1.7-1.9 2.2-3.2.5-1.3.8-2.8.8-3.8 0-.7.1-1.6.7-3.2.4-1 .8-2.3.8-3.8C19.5 4.5 17.5 3 15.5 3c-1 0-2 .4-3.5.4S9.5 3 8.5 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 8.5c.5-.3 1-.5 1.5-.5s1 .2 1.5.5 1 .5 1.5.5 1-.2 1.5-.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const navItems: NavSection[] = [
  {
    label: "Skin Treatments",
    color: "#e95b8a",
    Icon: SkinIcon,
    items: [
      { label: "Glutathione IV", href: "/services/skin-treatments/glutathione-iv" },
      { label: "Hydrafacial", href: "/services/skin-treatments/hydrafacial" },
      { label: "Acne and scar", href: "/services/skin-treatments/acne-scar-removal" },
      { label: "Laser Hair Removal",href: "/services/skin-treatments/laser-hair-removal" },
      { label: "Carbon Peel", href: "/services/skin-treatments/carbon-peel" },
    ],
  },
  {
    label: "Hair Treatments",
    color: "#7EB3FF",
    Icon: HairIcon,
    items: [
      { label: "GFC", href: "/services/hair-treatments/gfc" },
      { label: "PRP", href: "/services/hair-treatments/prp" },
      { label: "Micro Needling", href: "/services/hair-treatments/microneedling" },
      { label: "UV Light", href: "/services/hair-treatments/uv-light" },
      { label: "Dandruff Treatment", href: "/services/hair-treatments/dandruff-treatment" },
    ],
  },
  {
    label: "Dental Treatments",
    color: "#4ECFAD",
    Icon: ToothIcon,
    items: [
      { label: "Aligners",href: "/services/dental-treatments/aligners" },
      { label: "Root Canal",href: "/services/dental-treatments/root-canal" },
      { label: "Dental Implant", href: "/services/dental-treatments/dental-implant" },
      { label: "Dental Crown", href: "/services/dental-treatments/dental-crown" },
      { label: "Kids Dentistry", href: "/services/dental-treatments/kids-dentistry" },
    ],
  },
];

const primaryNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const contact = {
  email: "hairograft@gmail.com",
  phone: "7448866675",
};

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.4 1.13 2 2 0 012.4.95h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0120.07 16z" />
    </svg>
  );
}

function renderNavEntry(item: NavItem, onClick?: () => void) {
  if (!item.href) {
    return (
      <span className="block py-[7px] text-[12.5px] font-light text-white/45 leading-snug">
        {item.label}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      className="block py-[7px] text-[12.5px] font-light text-white/45 leading-snug transition-all duration-200 hover:pl-1.5 hover:text-white"
      onClick={onClick}
    >
      {item.label}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const enter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const leave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? "py-1 shadow-[0_8px_40px_rgba(0,0,0,0.5)]" : "py-2"}`}
        style={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(6,10,38,0.97) 0%, rgba(13,27,82,0.97) 50%, rgba(6,10,38,0.97) 100%)"
            : "linear-gradient(135deg, rgba(6,10,38,0.82) 0%, rgba(13,27,82,0.82) 50%, rgba(6,10,38,0.82) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#7EB3FF]/40 to-transparent" />

        <div className="mx-auto flex h-[60px] max-w-[1340px] items-center justify-between gap-3 px-3 sm:h-[64px] sm:px-6 xl:px-8">
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

          <div className="hidden items-center lg:flex">
            {primaryNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href!}
                className="rounded-lg px-3.5 py-2 text-[13px] font-semibold text-white/70 transition-all duration-200 hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            {navItems.map((nav) => (
              <div key={nav.label} className="relative" onMouseEnter={() => enter(nav.label)} onMouseLeave={leave}>
                <button
                  className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-semibold transition-all duration-200 ${
                    openMenu === nav.label ? "bg-white/12 text-white" : "text-white/70 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <span>{nav.label}</span>
                  <ChevronDown open={openMenu === nav.label} />
                </button>

                <div
                  className={`absolute left-0 top-[calc(100%+14px)] w-[220px] origin-top-left transition-all duration-[180ms] ease-out ${
                    openMenu === nav.label ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-1 scale-[0.97] opacity-0"
                  }`}
                >
                  <div
                    className="absolute left-5 top-[-5px] z-10 h-2.5 w-2.5 rotate-45"
                    style={{
                      background: "#0d1440",
                      borderLeft: "1px solid rgba(255,255,255,0.12)",
                      borderTop: "1px solid rgba(255,255,255,0.12)",
                    }}
                  />

                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{
                      background: "linear-gradient(160deg,#0d1440 0%,#091030 100%)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      boxShadow: "0 32px 64px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl" style={{ background: `linear-gradient(180deg, ${nav.color}, ${nav.color}30)` }} />

                    <div className="pb-2 pl-6 pr-4 pt-4">
                      <p className="text-[9.5px] font-bold uppercase tracking-[0.2em]" style={{ color: nav.color }}>
                        {nav.label}
                      </p>
                    </div>

                    <ul className="space-y-0.5 pb-4 pl-6 pr-4">
                      {nav.items.map((item) => (
                        <li key={item.label} onClick={() => setOpenMenu(null)}>
                          {renderNavEntry(item, () => setOpenMenu(null))}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <Link href="/contact" className="rounded-lg px-3.5 py-2 text-[13px] font-semibold text-white/70 transition-all duration-200 hover:bg-white/8 hover:text-white">
              Contact Us
            </Link>
          </div>

          <div className="hidden flex-shrink-0 items-center gap-3 lg:flex">
            <a href={`tel:+91${contact.phone}`} className="flex items-center gap-1.5 text-[13px] font-bold text-white/80 transition-colors hover:text-white">
              <PhoneIcon className="h-4 w-4" />
              +91 {contact.phone}
            </a>
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] font-bold text-white transition-all duration-200 hover:scale-[1.04] active:scale-95"
              style={{
                background: "#ed3136",
                boxShadow: "0 4px 20px rgba(237,49,54,0.45), 0 0 0 1px rgba(237,49,54,0.2) inset",
              }}
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-[5px] rounded-xl transition-all duration-200 lg:hidden sm:h-11 sm:w-11"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "scale-x-0 opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-[320px] flex-col shadow-2xl transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{
            background: "linear-gradient(160deg, #060A26 0%, #0D1B52 50%, #060A26 100%)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="flex flex-shrink-0 items-center justify-between px-5 py-4"
            style={{
              background: "linear-gradient(135deg, rgba(126,179,255,0.12), rgba(126,179,255,0.04))",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/20 shadow-[0_0_16px_rgba(126,179,255,0.3)]">
                <Image src="/image.png" alt="Hair O Graft Logo" fill className="object-cover" />
              </div>
              <div>
                <p className="text-[15px] font-extrabold text-white drop-shadow-[0_0_8px_rgba(126,179,255,0.4)]">Hair O Graft</p>
                <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#7EB3FF]/60">Hair | Skin | Dental</p>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-colors hover:text-white"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {primaryNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-4 text-[13.5px] font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {navItems.map((nav, index) => {
              const { Icon } = nav;

              return (
                <div key={nav.label} style={{ borderBottom: index < navItems.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <button
                    onClick={() => setMobileExpanded((value) => (value === nav.label ? null : nav.label))}
                    className="flex w-full items-center justify-between px-5 py-4 text-[13.5px] font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${nav.color}22` }}>
                        <Icon className="h-4 w-4" style={{ color: nav.color } as React.CSSProperties} />
                      </div>
                      {nav.label}
                    </div>
                    <span className="text-white/40">
                      <ChevronDown open={mobileExpanded === nav.label} />
                    </span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === nav.label ? "max-h-[400px]" : "max-h-0"}`}>
                    <div className="space-y-0.5 px-5 pb-3 pt-1" style={{ background: "rgba(0,0,0,0.2)" }}>
                      {nav.items.map((item) =>
                        item.href ? (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="group/m flex items-center gap-3 py-2.5 text-[13px] text-white/50 transition-colors hover:text-white"
                          >
                            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md" style={{ backgroundColor: `${nav.color}20` }}>
                              <Icon className="h-3 w-3" style={{ color: nav.color } as React.CSSProperties} />
                            </div>
                            <span className="transition-transform duration-150 group-hover/m:translate-x-0.5">{item.label}</span>
                          </Link>
                        ) : (
                          <div key={item.label} className="flex items-center gap-3 py-2.5 text-[13px] text-white/50">
                            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md" style={{ backgroundColor: `${nav.color}20` }}>
                              <Icon className="h-3 w-3" style={{ color: nav.color } as React.CSSProperties} />
                            </div>
                            <span>{item.label}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-2.5 px-5 py-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.3)" }}>
            <a
              href={`tel:+91${contact.phone}`}
              className="flex items-center justify-center gap-2 rounded-xl py-2.5 text-[13px] font-bold text-[#7EB3FF] transition-colors hover:bg-white/8"
              style={{ border: "1px solid rgba(126,179,255,0.25)" }}
            >
              <PhoneIcon className="h-4 w-4" />
              +91 {contact.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-xl bg-[linear-gradient(135deg,#ED3136,#C41D22)] py-3 text-center text-[13px] font-bold text-white shadow-[0_4px_20px_rgba(237,49,54,0.4)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
