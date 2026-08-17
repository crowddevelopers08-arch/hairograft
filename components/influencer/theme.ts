/**
 * Shared Tailwind class recipes for the influencer landing page.
 *
 * Brand palette (from app/globals.css):
 *   red  #EF3340   blue #334E9B / #2B3E80   light blue #b7c7ff
 *   ink  #111827   warm white #fffaf0       off-whites #ffffff / #f8fbff / #eef3ff
 *   dark surfaces  #08090f / #0d1020 / #05060b
 *
 * Backgrounds alternate dark/light down the page; see `surface` below.
 */

/* ── Section shells ───────────────────────────────────────────────── */
export const surface = {
  dark: "bg-[#08090f] text-[#f7f9ff]",
  darkAlt: "bg-[#0d1020] text-[#f7f9ff]",
  darkDeep: "bg-[#05060b] text-[#f7f9ff]",
  light: "bg-[#f8fbff] text-[#111827]",
  lightPlain: "bg-white text-[#111827]",
  lightTint: "bg-[#eef3ff] text-[#111827]",
} as const;

/** Vertical rhythm that scales with viewport height. */
export const sectionPad = "px-4 py-[clamp(28px,4.4vh,52px)] sm:px-6";
export const wrap = "relative z-[1] mx-auto max-w-[1280px]";

/* ── Eyebrow labels ───────────────────────────────────────────────── */
const kickerBase =
  "inline-flex items-center gap-2.5 text-[9.5px] font-extrabold uppercase tracking-[0.22em]";
const ruleL = "before:h-px before:w-[30px] before:bg-[#EF3340] before:content-['']";
const ruleR = "after:h-px after:w-[30px] after:bg-[#EF3340] after:content-['']";

export const kicker = {
  /** Centred, rule on both sides. */
  onDark: `${kickerBase} ${ruleL} ${ruleR} text-[#EF3340]`,
  onLight: `${kickerBase} ${ruleL} ${ruleR} text-[#334E9B]`,
  /** Left-aligned, single leading rule. */
  leftOnDark: `${kickerBase} ${ruleL} text-[#EF3340]`,
  leftOnLight: `${kickerBase} ${ruleL} text-[#334E9B]`,
} as const;

/* ── Headings ─────────────────────────────────────────────────────── */
export const h2 = {
  onDark:
    "m-0 text-[clamp(26px,3.3vw,43px)] font-extrabold leading-[1.12] tracking-[-0.013em] text-[#fffaf0]",
  onLight:
    "m-0 text-[clamp(26px,3.3vw,43px)] font-extrabold leading-[1.12] tracking-[-0.013em] text-[#111827]",
} as const;

/** Emphasised run inside a heading. */
export const em = {
  red: "italic text-[#EF3340]",
  blue: "italic text-[#334E9B]",
} as const;

/* ── Body copy ────────────────────────────────────────────────────── */
export const copy = {
  onDark: "text-[14.5px] leading-[1.85] text-white/60",
  onLight: "text-[14.5px] leading-[1.85] text-slate-600",
} as const;

/* ── Buttons ──────────────────────────────────────────────────────── */
const btnBase =
  "inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border-0 text-[11.5px] font-extrabold uppercase tracking-[0.14em] no-underline transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.98]";

export const btn = {
  red: `${btnBase} bg-[#EF3340] px-8 py-[17px] text-white shadow-[0_14px_34px_rgba(239,51,64,0.28)]`,
  redSm: `${btnBase} bg-[#EF3340] px-6 py-[13px] text-[10.5px] text-white shadow-[0_12px_28px_rgba(239,51,64,0.24)]`,
  blue: `${btnBase} bg-[#334E9B] px-8 py-[17px] text-white shadow-[0_14px_34px_rgba(51,78,155,0.28)]`,
  blueSm: `${btnBase} bg-[#334E9B] px-6 py-[13px] text-[10.5px] text-white shadow-[0_12px_28px_rgba(51,78,155,0.24)]`,
  /** Outlined, for use on dark surfaces. */
  ghostDark:
    "inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[#EF3340]/45 bg-[#EF3340]/[0.07] px-7 py-4 text-[12.5px] font-extrabold uppercase tracking-[0.1em] text-[#b7c7ff] no-underline transition-colors duration-200 hover:border-[#EF3340]/75 hover:bg-[#EF3340]/[0.16]",
} as const;

/** Text link with a sliding arrow. */
export const arrowLink =
  "inline-flex cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#EF3340] no-underline transition-[gap,color] duration-200 hover:gap-4 hover:text-[#334E9B]";

/* ── Cards ────────────────────────────────────────────────────────── */
export const card = {
  onDark:
    "rounded-[18px] border border-[#EF3340]/25 bg-white/[0.04] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1.5 hover:border-[#EF3340]/55 hover:bg-white/[0.07]",
  onLight:
    "rounded-[20px] border border-[#EF3340]/25 bg-white shadow-[0_16px_40px_rgba(51,78,155,0.09)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#EF3340]/60 hover:shadow-[0_26px_58px_rgba(51,78,155,0.16)]",
} as const;

/** Small circular index badge used on numbered cards. */
export const badge = {
  onDark:
    "grid h-[46px] w-[46px] place-items-center rounded-full border border-[#EF3340]/45 text-[14px] font-extrabold text-[#b7c7ff] transition-colors duration-300 group-hover:border-transparent group-hover:bg-[#EF3340] group-hover:text-white",
  onLight:
    "grid h-[46px] w-[46px] place-items-center rounded-full border border-[#EF3340]/40 bg-[#EF3340]/[0.08] text-[15px] font-extrabold text-[#334E9B] transition-colors duration-300 group-hover:border-transparent group-hover:bg-[#EF3340] group-hover:text-white",
} as const;

/** Divider under a small section/list heading. */
export const hairline = "mt-2.5 block h-px w-11 bg-[#EF3340] content-['']";
