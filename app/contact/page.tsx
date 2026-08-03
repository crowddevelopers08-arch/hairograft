import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHeroBanner from "@/components/contacts/ContactHeroBanner";
import ContactFormSection from "@/components/contacts/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | Hair O Graft",
  description:
    "Get in touch with Hair O Graft in Avadi, Chennai for skin, hair, and dental consultations.",
};

const contact = {
  email: "hairograft@gmail.com",
  phone: "7448866675",
  address: "25, Nehru Bazaar, Thirumalai Rajapuram, Kondithope, Avadi, Tamil Nadu 600054",
};

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <main className="mt-[76px]">
        <ContactHeroBanner />
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10">
          <div className="max-sm:mb-2 mb-12 max-w-3xl">
            <span className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#354C9C]">
              <span aria-hidden className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rotate-45 bg-[#ED3136]" />
                <span className="h-px w-6 bg-[#ED3136]/40" />
              </span>
              Contact Us
              <span aria-hidden className="flex items-center gap-1.5">
                <span className="h-px w-6 bg-[#ED3136]/40" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#ED3136]" />
              </span>
            </span>
            <h1 className="mt-5 text-[28px] font-extrabold leading-[1.08] tracking-tight text-[#363435] sm:text-[36px] lg:text-[44px]">
              Book your consultation with{" "}
              <span className="relative inline-block text-[#ED3136]">
                Hair O Graft .
                <svg
                  className="absolute -bottom-1.5 left-0 w-full sm:-bottom-2"
                  height="8"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M2 6 C 50 2, 150 2, 198 6" stroke="#ED3136" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Reach out for skin, hair, or dental treatment enquiries. We&apos;ll help you choose the right next step.
            </p>
          </div>

          <div className="grid gap-6 max-sm:gap-3 md:grid-cols-3">
            <a
              href={`tel:+91${contact.phone}`}
              className="rounded-[28px] border border-[#354C9C]/10 bg-white p-7 max-sm:p-6 shadow-[0_24px_70px_rgba(13,20,64,0.08)] transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#354C9C]">Call Us</p>
              <p className="mt-4 max-sm:mt-2 text-2xl font-extrabold text-[#0d1440]">+91 {contact.phone}</p>
              <p className="mt-3 max-sm:mt-1 text-sm leading-6 text-slate-500">Speak with the clinic directly for appointments and treatment guidance.</p>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="rounded-[28px] border border-[#354C9C]/10 bg-white p-7 max-sm:p-6 shadow-[0_24px_70px_rgba(13,20,64,0.08)] transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#354C9C]">Email Us</p>
              <p className="mt-4 max-sm:mt-2 text-2xl font-extrabold text-[#0d1440] break-words">{contact.email}</p>
              <p className="mt-3 max-sm:mt-1 text-sm leading-6 text-slate-500">Send us your questions and our team can get back to you with details.</p>
            </a>

            <div className="rounded-[28px] border border-[#354C9C]/10 bg-white p-7 max-sm:p-6 shadow-[0_24px_70px_rgba(13,20,64,0.08)]">
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#354C9C]">Visit Us</p>
              <p className="mt-4 max-sm:mt-2 text-2xl font-extrabold text-[#0d1440]">Avadi, Chennai</p>
              <p className="mt-3 max-sm:mt-1 text-sm leading-7 text-slate-500">{contact.address}</p>
            </div>
          </div>
        </section>
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
