"use client";

import { copy, h2, kicker, sectionPad, surface, wrap } from "./theme";

const testimonials = [
  {
    quote:
      "The doctors explained the treatment clearly and handled my daughter very patiently.",
    name: "Shanthi",
    place: "Ambattur",
    tag: "Dental Care",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    quote:
      "My hair had been thinning for months. After treatment, I started noticing improvement in my hair growth.",
    name: "Kumar",
    place: "Thirumullaivoyal",
    tag: "Hair Care",
    rating: 5,
    date: "1 month ago",
  },
  {
    quote: "The treatment helped me address my skin concerns and feel more confident.",
    name: "Yamuna",
    place: "Ambattur",
    tag: "Skin Care",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    quote:
      "The aligner treatment was smooth and my daughter's smile has improved significantly.",
    name: "Mani",
    place: "Thirumullaivoyal",
    tag: "Aligners",
    rating: 5,
    date: "1 week ago",
  },
];

// Google SVG Icons
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    className={`h-4 w-4 ${filled ? 'text-[#FBBC04]' : 'text-[#E0E0E0]'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const RightArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <article
    className="relative flex w-[320px] flex-shrink-0 flex-col rounded-2xl border border-[#EF3340]/20 bg-white/[0.04] p-5 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1.5 hover:border-[#EF3340]/55 hover:bg-white/[0.07] lg:rounded-[20px] lg:p-6"
  >
    {/* Google Review Badge */}
    <div className="mb-3 flex items-center justify-between">
      <span className="text-xs font-medium text-white/60">Google Review</span>
      <span className="text-[10px] text-white/40">{testimonial.date}</span>
    </div>

    {/* Stars */}
    <div className="mb-2 flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < testimonial.rating} />
      ))}
    </div>

    {/* Quote */}
    <blockquote className="m-0 mb-3 text-[14px] font-normal leading-[1.6] text-[#fffaf0]/85">
      &ldquo;{testimonial.quote}&rdquo;
    </blockquote>

    {/* Author */}
    <div className="mt-auto flex items-center gap-3 border-t border-[#EF3340]/15 pt-3">
      <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#EF3340] text-sm font-bold text-white">
        {testimonial.name.charAt(0)}
      </div>
      <div className="min-w-0 flex-1">
        <strong className="block truncate text-sm font-semibold leading-tight text-[#fffaf0]">
          {testimonial.name}
        </strong>
        <span className="text-xs text-white/50">{testimonial.place}</span>
      </div>
    </div>

    {/* Tag Badge */}
    <span className="absolute right-3 top-3 rounded-full bg-[#EF3340]/15 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-wide text-[#b7c7ff]">
      {testimonial.tag}
    </span>
  </article>
);

export default function InfluencerTestimonialsSection() {
  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className={`relative overflow-hidden ${sectionPad} ${surface.darkAlt}`}>
      <div className={wrap}>
        <div className="mx-auto mb-10 max-w-[720px] text-center">
          <div className={`${kicker.onDark} mb-3.5`}>Patient Testimonials</div>

          <h2 className={`${h2.onDark} mb-4`}>
            Beyond the Spotlight, Trusted by{" "}
            <em className="italic text-[#EF3340]">Everyday Patients.</em>
          </h2>

          <p className={`${copy.onDark} mx-auto max-w-[540px] text-[13.5px] sm:text-[14.5px]`}>
            Influencers may introduce people to us.
          </p>
          <p
            className={`${copy.onDark} mx-auto mt-2 max-w-[540px] text-[13.5px] sm:text-[14.5px]`}
          >
            Our patients are what build our reputation.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex">
              <GoogleIcon />
            </div>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} filled={true} />
              ))}
            </div>
            <span className="text-sm font-medium text-white/70">4.9 out of 5</span>
            <span className="text-sm text-white/40">•</span>
            <span className="text-sm text-white/60">Based on 200+ reviews</span>
          </div>

          <p className="mt-6 text-[10.5px] font-extrabold uppercase leading-[1.7] tracking-[0.18em] text-[#b7c7ff] sm:text-[12px] sm:tracking-[0.24em]">
            Real People. Real Experiences. Real Confidence.
            <span className="mx-auto mt-[18px] block h-px w-[74px] bg-[#EF3340]" />
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative">
          {/* Left Shadow */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#0a0e1a] to-transparent" />
          
          {/* Right Shadow */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#0a0e1a] to-transparent" />

          <div className="overflow-hidden">
            <div className="flex animate-infinite-scroll gap-4">
              {allTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            <GoogleIcon />
            Read all reviews on Google
            <RightArrowIcon />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          width: fit-content;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}