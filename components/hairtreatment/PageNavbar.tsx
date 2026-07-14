import Image from "next/image";
import Link from "next/link";

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6.2 2.8 8 6.9 6.5 8.1c1 2.1 2.6 3.7 5 5l1.3-1.6 4.1 1.8-.7 3.1c-.2.8-.9 1.3-1.7 1.2C7.7 16.9 3.1 12.3 2.4 5.5c-.1-.8.4-1.5 1.2-1.7l2.6-1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function PageNavbar() {
  return (
    <header className="sticky top-4 z-20 mx-auto max-w-[1120px]">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white px-4 py-3 shadow-[0_20px_55px_rgb(0_0_0_/_18%)] sm:flex-row sm:px-5">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image
            src="/image.png"
            alt="Hair O Graft"
            width={46}
            height={46}
            className="h-11 w-11 rounded-full border-2 border-[#354f9f] bg-white object-contain"
            priority
          />
          <span className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-extrabold leading-none text-[#0b1233]">
            Hair O Graft
          </span>
        </Link>

        <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:items-center">
          <a
            href="tel:+917448866675"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#f1323d] px-4 text-[14px] lg:text-[16px] font-extrabold text-white transition-colors duration-200 hover:bg-[#354f9f] sm:px-5"
          >
            <PhoneIcon />
            Call Now
          </a>
          <Link
            href="/hair-treatment"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#354f9f]/15 bg-[#354f9f]/10 px-4 text-[14px] lg:text-[16px] font-extrabold text-[#354f9f] transition-colors duration-200 hover:bg-[#354f9f] hover:text-white sm:px-5"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </header>
  );
}
