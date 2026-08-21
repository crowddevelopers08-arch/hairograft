import { getImageProps } from "next/image";

/**
 * Full-bleed image banner — the first section under the fixed InfluencerNavbar.
 *
 * Art direction: the desktop creative is a wide landscape strip that becomes
 * unreadable when squeezed onto a phone, so mobile gets its own portrait file.
 * `getImageProps()` + `<picture>` is the Next 16 way to do this — unlike two
 * `<Image>` elements hidden with CSS, the browser downloads only the creative
 * that matches the viewport.
 *
 * Keep `width`/`height` in sync with the real files: they feed the aspect-ratio
 * hint that reserves space before the image loads (no layout shift).
 */

const DESKTOP_BANNER = {
  src: "/infban.png",
  width: 1891,
  height: 832,
} as const;

const MOBILE_BANNER = {
  src: "/infbanmob.png",
  width: 1080,
  height: 1350,
} as const;

/** Below this the mobile creative is used; matches the navbar's own md/lg breaks. */
const DESKTOP_MEDIA = "(min-width: 768px)";

type BannerImage = {
  src: string;
  width: number;
  height: number;
};

type InfluencerImageBannerProps = {
  alt?: string;
  desktop?: BannerImage;
  mobile?: BannerImage;
};

export default function InfluencerImageBanner({
  alt = "Hair O Graft Clinic, Avadi Chennai — advanced hair, skin and dental care",
  desktop = DESKTOP_BANNER,
  mobile = MOBILE_BANNER,
}: InfluencerImageBannerProps) {
  const common = { alt, sizes: "100vw" };

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, ...desktop });

  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({ ...common, ...mobile });

  return (
    <section
      // pt clears the fixed navbar (h-[66px], lg:h-[76px]); the dark ground
      // matches surface.dark so the translucent navbar blends into the strip.
      className="bg-[#08090f] pt-[66px] lg:pt-[76px]"
      aria-label="Hair O Graft clinic banner"
    >
      <picture>
        <source
          media={DESKTOP_MEDIA}
          srcSet={desktopSrcSet}
          width={desktop.width}
          height={desktop.height}
        />
        <img
          {...imgProps}
          alt={alt}
          srcSet={mobileSrcSet}
          // Above the fold and the LCP element on every viewport, so it must not
          // wait for lazy-load discovery. `preload` is the wrong tool here — the
          // LCP candidate differs per breakpoint, which would preload both.
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="block h-auto w-full"
        />
      </picture>
    </section>
  );
}
