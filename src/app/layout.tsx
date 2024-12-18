import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground";
import Script from "next/script";
// import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Naol Kainset",
  description: "Full Stack Developer Portfolio | Naol Kainset",
  keywords:
    "Full Stack Developer, React, Next.js, Laravel, PHP, JavaScript, Web Development, Portfolio, Naol Kainset",
  viewport: "width=device-width, initial-scale=1",

  // Open Graph meta tags for social media sharing
  openGraph: {
    type: "website",
    url: "https://naol.me", // Replace with your portfolio's URL
    title: "Naol Kainset - Full Stack Developer",
    description:
      "Explore the portfolio of Naol Kainset, a Full Stack Developer proficient in React, Next.js, Laravel, and PHP.",
    images: [
      {
        url: "https://naol.me/og-image.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Naol Kainset Portfolio",
      },
    ],
  },

  themeColor: "#000000", // Replace with your theme color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-analytics">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5NC79ZB5');`}
        </Script>
      </head>
      {/* <GoogleTagManager gtmId="	GTM-5NC79ZB5" /> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen overflow-x-hidden`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NC79ZB5"
            height="0"
            width="0"
            className="display-none hidden"
          ></iframe>
        </noscript>
        <InteractiveBackground>{children}</InteractiveBackground>
      </body>
    </html>
  );
}
