"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { btn, kicker, h2, copy, sectionPad, surface, wrap } from "./theme";

/**
 * Real Instagram posts, embedded from the clinic's account — these replaced the
 * stock mp4s that used to sit in /public. Add a story by pasting the post URL;
 * `/p/` and `/reel/` links both work.
 */
const stories = [
  { id: "01", url: "https://www.instagram.com/p/DZ96ZH2MpGI/" },
  { id: "02", url: "https://www.instagram.com/reel/DaNjO9sPDuG/" },
  { id: "03", url: "https://www.instagram.com/reel/DaE-JzHjAWx/" },
  { id: "04", url: "https://www.instagram.com/reel/DbaDG9MExSa/" },
];

/** Instagram serves an embeddable player at `<post-url>/embed`. */
const embedSrc = (url: string) => `${url.replace(/\/+$/, "")}/embed`;

/**
 * One carousel tile. Extracted because the strip renders the set twice for the
 * desktop loop — keeping a single component stops the two copies drifting.
 *
 * Width: one full card per view on mobile, so only a single video is on screen
 * at a time; back to the original 326/340px on desktop. 326 is the floor — it's
 * the min-width Instagram's own embed stylesheet enforces, which is why the
 * `short:`/`shorter:` shrink to 260/225px this card used to carry is gone.
 *
 * Height has to follow width, because Instagram lays the player out as a ~60px
 * account header above 9:16 media — not a single aspect ratio, so `aspect-*`
 * can't express it. The spacer below uses percentage padding, which resolves
 * against the card's own width, giving `width × 16/9 + header` at any size.
 * At the desktop 326px that lands on ~640px, the height this card used to be.
 */
const StoryCard = ({ story }: { story: (typeof stories)[number] }) => (
  <article className="group relative w-full flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-[#EF3340]/25 bg-[#f8fbff] shadow-[0_16px_40px_rgba(51,78,155,0.09)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#EF3340]/60 hover:shadow-[0_28px_62px_rgba(51,78,155,0.18)] md:w-[326px] lg:w-[340px] lg:rounded-[20px]">
    <div className="pt-[calc(177.7778%_+_60px)]" aria-hidden />
    <iframe
      className="absolute inset-0 h-full w-full border-0"
      src={embedSrc(story.url)}
      title="Hair O Graft influencer video on Instagram"
      loading="lazy"
      scrolling="no"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
    />
  </article>
);

/** Mobile dwell time per card. The desktop marquee covers a card roughly every
    7.5s (30s for a -50% translate across eight cards); a touch carousel that
    the visitor can't hover-pause wants to sit a little longer than that. */
const AUTOPLAY_MS = 8000;

const ARROW =
  "grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-[#EF3340]/40 bg-[#EF3340]/[0.08] text-[#334E9B] transition-[background-color,border-color,opacity] duration-200 hover:border-[#EF3340]/70 hover:bg-[#EF3340]/[0.18] disabled:cursor-default disabled:opacity-35 disabled:hover:border-[#EF3340]/40 disabled:hover:bg-[#EF3340]/[0.08]";

export default function InfluencerVideoSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const autoplayStopped = useRef(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  /**
   * Drives the mobile arrows' disabled state. Desktop never scrolls this
   * container (it's overflow-hidden and animated), so the values only ever
   * matter below `md`, where the buttons are visible.
   */
  const syncEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    syncEdges();
    window.addEventListener("resize", syncEdges);
    return () => window.removeEventListener("resize", syncEdges);
  }, [syncEdges]);

  /** Advances exactly one card. Measured, not hardcoded, so the card and gap
      sizes above stay the single source of truth. `wrap` sends the last card
      back to the first instead of stopping, which is what autoplay wants. */
  const scrollByCard = useCallback((direction: 1 | -1, wrap = false) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = card ? card.getBoundingClientRect().width + gap : track.clientWidth;
    const max = track.scrollWidth - track.clientWidth;

    if (wrap && direction === 1 && track.scrollLeft >= max - 1) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  }, []);

  /** Ends autoplay for the rest of the session. Deliberately one-way: the
      desktop marquee pauses on hover, and the mobile equivalent of "the
      visitor is engaging with this" is a tap — after which sliding the strip
      out from under them is worse than just stopping. */
  const stopAutoplay = useCallback(() => {
    autoplayStopped.current = true;
    if (timerRef.current !== undefined) {
      window.clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  }, []);

  /**
   * Mobile autoplay. Desktop is driven by the CSS marquee in the style block
   * below, so exactly one of the two mechanisms runs at any width.
   */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const desktop = window.matchMedia("(min-width: 768px)");

    const sync = () => {
      const shouldRun =
        !desktop.matches && !autoplayStopped.current && !document.hidden;

      if (shouldRun && timerRef.current === undefined) {
        timerRef.current = window.setInterval(() => scrollByCard(1, true), AUTOPLAY_MS);
      } else if (!shouldRun && timerRef.current !== undefined) {
        window.clearInterval(timerRef.current);
        timerRef.current = undefined;
      }
    };

    const onInteract = () => stopAutoplay();

    /* A tap inside a cross-origin iframe never reaches us as an event, so a
       visitor hitting Instagram's play button would otherwise be ignored.
       Focus entering the iframe blurs the window, which is the one signal we
       do get — the contains() check keeps ordinary tab-switching out of it. */
    const onWindowBlur = () => {
      if (track.contains(document.activeElement)) stopAutoplay();
    };

    track.addEventListener("pointerdown", onInteract, { passive: true });
    track.addEventListener("touchstart", onInteract, { passive: true });
    window.addEventListener("blur", onWindowBlur);
    desktop.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);

    sync();

    return () => {
      track.removeEventListener("pointerdown", onInteract);
      track.removeEventListener("touchstart", onInteract);
      window.removeEventListener("blur", onWindowBlur);
      desktop.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      if (timerRef.current !== undefined) {
        window.clearInterval(timerRef.current);
        timerRef.current = undefined;
      }
    };
  }, [scrollByCard, stopAutoplay]);

  return (
    <section
      id="experiences"
      className={`relative overflow-hidden ${sectionPad} ${surface.lightPlain}`}
    >
      <div className={wrap}>
        <div className="mx-auto mb-8 max-w-[700px] text-center short:mb-4">
          <div className={`${kicker.onLight} mb-3.5`}>Influencer Video Section</div>
          <h2 className={`${h2.onLight} mb-4 short:text-[clamp(22px,2.6vw,32px)]`}>
            They&apos;ve Experienced It. Now Watch Their{" "}
            <em className="italic text-[#EF3340]">Stories.</em>
          </h2>
          <p
            className={`${copy.onLight} mx-auto max-w-[600px] short:text-[13px] short:leading-[1.7]`}
          >
            From creators and influencers to models and public personalities, discover what
            their Hair O Graft experience was like.
          </p>
        </div>

        {/* Carousel — auto-scrolling marquee on desktop, swipe/arrow driven on mobile.
            overflow-hidden clips the desktop marquee to the 1280px container: the
            track is `width: fit-content` there (~8 cards wide), so without this it
            spills past the container edge. Harmless on mobile, where the track is
            container-width and scrolls internally. */}
        <div className="relative overflow-hidden">
          {/* Edge fades, desktop only: they mask the marquee's wrap point. On
              mobile the strip stops at both ends instead of looping, so the
              fades had nothing to hide and just dimmed the first and last card. */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-16 bg-linear-to-r from-white to-transparent md:block" />

          <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-16 bg-linear-to-l from-white to-transparent md:block" />

          <div
            id="experiences-track"
            ref={trackRef}
            onScroll={syncEdges}
            className="animate-infinite-scroll flex snap-x snap-mandatory gap-3.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:snap-none md:overflow-hidden lg:gap-[18px] [&::-webkit-scrollbar]:hidden"
          >
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}

            {/* Second copy exists only for the desktop loop — the keyframes
                translate the strip by -50%, so this set is what it wraps onto.
                `contents` keeps these cards as direct flex children at md+;
                below that they're display:none, which both stops the mobile
                carousel repeating itself and keeps their iframes from loading. */}
            <div className="hidden md:contents">
              {stories.map((story) => (
                <StoryCard key={`${story.id}-dup`} story={story} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            className={ARROW}
            onClick={() => {
              stopAutoplay();
              scrollByCard(-1);
            }}
            disabled={atStart}
            aria-label="Previous video"
            aria-controls="experiences-track"
          >
            <ChevronLeft size={20} strokeWidth={2.6} />
          </button>
          <button
            type="button"
            className={ARROW}
            onClick={() => {
              stopAutoplay();
              scrollByCard(1);
            }}
            disabled={atEnd}
            aria-label="Next video"
            aria-controls="experiences-track"
          >
            <ChevronRight size={20} strokeWidth={2.6} />
          </button>
        </div>

        <div className="mt-5 flex justify-center short:mt-3.5">
          <button
            type="button"
            className={`${btn.red} w-full justify-center sm:w-auto`}
            onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
          >
            Watch More Experiences →
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Desktop only. Below md the same element is a plain scroll container
           driven by swipe and the arrow buttons, so it must not be animated
           or forced to fit-content. */
        @media (min-width: 768px) {
          .animate-infinite-scroll {
            animation: infinite-scroll 30s linear infinite;
            width: fit-content;
          }

          /* Also pauses while a video is playing, since you have to hover the
             strip to reach the embed's controls in the first place. */
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
