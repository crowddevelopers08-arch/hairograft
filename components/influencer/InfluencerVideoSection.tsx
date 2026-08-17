"use client";

import { Play } from "lucide-react";
import { btn, kicker, h2, copy, sectionPad, surface, wrap } from "./theme";

const stories = [
  {
    id: "01",
    label: "Hair Journey",
    quote: "An experience that made me feel confident about my hair care.",
    video: "/video-1_squished.mp4",
    poster: "/solution-hair.png",
  },
  {
    id: "02",
    label: "Skin Journey",
    quote: "I loved the way they understood my skin concern before suggesting treatment.",
    video: "/video-2.mp4",
    poster: "/solution-skin.png",
  },
  {
    id: "03",
    label: "Smile Journey",
    quote: "The entire experience was comfortable and professionally handled.",
    video: "/video-1_squished.mp4",
    poster: "/solution-dental.png",
  },
  {
    id: "04",
    label: "Clinic Experience",
    quote: "From the ambience to the consultation, everything felt premium.",
    video: "/video-2.mp4",
    poster: "/clinic-image.png",
  },
];

export default function InfluencerVideoSection() {
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

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          {/* Left Shadow */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f8fbff] to-transparent" />
          
          {/* Right Shadow */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f8fbff] to-transparent" />

          <div className="flex animate-infinite-scroll gap-3.5 lg:gap-[18px]">
            {/* First set */}
            {stories.map((story) => (
              <article
                className="group relative min-w-[240px] max-w-[240px] flex-shrink-0 overflow-hidden rounded-2xl border border-[#EF3340]/25 bg-[#f8fbff] shadow-[0_16px_40px_rgba(51,78,155,0.09)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#EF3340]/60 hover:shadow-[0_28px_62px_rgba(51,78,155,0.18)] lg:min-w-[260px] lg:max-w-[260px] lg:rounded-[20px]"
                key={story.id}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#111827] lg:aspect-[5/6] short:aspect-square shorter:aspect-[5/4]">
                  <span className="absolute left-3.5 top-3.5 z-[2] rounded-full border border-[#EF3340]/45 bg-[#03070f]/55 px-3 py-1.5 text-[8.5px] font-extrabold uppercase tracking-[0.16em] text-[#b7c7ff] backdrop-blur-[6px]">
                    Influencer Video
                  </span>

                  <video
                    className="h-full w-full object-cover"
                    src={story.video}
                    poster={story.poster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    onMouseEnter={(event) => {
                      void event.currentTarget.play().catch(() => {});
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.pause();
                      event.currentTarget.currentTime = 0;
                    }}
                  />

                  <span className="pointer-events-none absolute inset-0 bg-[#03070f]/40" />

                  <span className="pointer-events-none absolute left-1/2 top-1/2 z-[2] grid h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#EF3340] text-white shadow-[0_0_0_8px_rgba(239,51,64,0.2)] transition-[transform,box-shadow] duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_11px_rgba(239,51,64,0.26)]">
                    <Play size={20} strokeWidth={2.6} fill="currentColor" />
                  </span>
                </div>
              </article>
            ))}

            {/* Duplicate set for seamless loop */}
            {stories.map((story) => (
              <article
                className="group relative min-w-[240px] max-w-[240px] flex-shrink-0 overflow-hidden rounded-2xl border border-[#EF3340]/25 bg-[#f8fbff] shadow-[0_16px_40px_rgba(51,78,155,0.09)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#EF3340]/60 hover:shadow-[0_28px_62px_rgba(51,78,155,0.18)] lg:min-w-[260px] lg:max-w-[260px] lg:rounded-[20px]"
                key={`${story.id}-dup`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#111827] lg:aspect-[5/6] short:aspect-square shorter:aspect-[5/4]">
                  <span className="absolute left-3.5 top-3.5 z-[2] rounded-full border border-[#EF3340]/45 bg-[#03070f]/55 px-3 py-1.5 text-[8.5px] font-extrabold uppercase tracking-[0.16em] text-[#b7c7ff] backdrop-blur-[6px]">
                    Influencer Video
                  </span>

                  <video
                    className="h-full w-full object-cover"
                    src={story.video}
                    poster={story.poster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    onMouseEnter={(event) => {
                      void event.currentTarget.play().catch(() => {});
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.pause();
                      event.currentTarget.currentTime = 0;
                    }}
                  />

                  <span className="pointer-events-none absolute inset-0 bg-[#03070f]/40" />

                  <span className="pointer-events-none absolute left-1/2 top-1/2 z-[2] grid h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#EF3340] text-white shadow-[0_0_0_8px_rgba(239,51,64,0.2)] transition-[transform,box-shadow] duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_11px_rgba(239,51,64,0.26)]">
                    <Play size={20} strokeWidth={2.6} fill="currentColor" />
                  </span>
                </div>
              </article>
            ))}
          </div>
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

        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
          width: fit-content;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}