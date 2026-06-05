import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hair O Graft",
  description: "Hair O Graft is a trusted Hair, Skin & Dental Clinic in Avadi, Chennai, offering personalized care, advanced technology, and long-lasting results to help you look and feel your best.",
  icons: {
    icon: [
      { url: "/image.png", sizes: "any" },
      { url: "/image.png", sizes: "16x16", type: "image/png" },
      { url: "/image.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/image.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/image.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/image.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KT6P6DWN');
          `}
        </Script>

        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18129704043"
          strategy="afterInteractive"
        />

        {/* Google Ads Phone Conversion + Click Call Conversion */}
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            // Base Google Ads Tag
            gtag('config', 'AW-18129704043');

            // Phone Conversion
            gtag('config', 'AW-18129704043/RSLBCK7C07EcEOuo9cRD', {
              phone_conversion_number: '7448866675'
            });

            // Click-to-call conversion
            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };

              gtag('event', 'conversion', {
                send_to: 'AW-18129704043/NiRdCLHC07EcEOuo9cRD',
                value: 1.0,
                currency: 'INR',
                event_callback: callback
              });

              return false;
            };
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KT6P6DWN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}