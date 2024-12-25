import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground";
import Script from "next/script";
import FootBar from "@/components/FootBar";
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
  title: "Naol Kainset - Full Stack Developer | Portfolio",
  description:
    "Welcome to the portfolio of Naol Kainset, an experienced Full Stack Developer with expertise in React, Next.js, Laravel, PHP, Nest.js, Express.js, and more. Explore projects, achievements, and professional experience.",
  keywords: [
    "Naol Kainset",
    "Full Stack Developer",
    "Software Engineer",
    "Best Ethiopian Software Engineer",
    "Top Ethiopian Developer",
    "Ethiopian Software Developer",
    "React",
    "Next.js",
    "Laravel",
    "PHP",
    "JavaScript",
    "Web Development",
    "Portfolio",
    "Nest.js",
    "Express.js",
    "Redux",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "TypeScript",
    "REST APIs",
    "GraphQL",
    "SEO",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Software Developer",
    "Developer Portfolio",
    "Innovative Software Solutions",
    "Software Development Expert",
    "Ethiopian Tech Leader",
    "Cutting-Edge Web Development",
    "Professional Software Engineer",
  ],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000", // Customize with your theme color

  // Open Graph meta tags for social media sharing
  openGraph: {
    type: "website",
    url: "https://naol.me", // Replace with your portfolio's URL
    title: "Naol Kainset - Full Stack Developer | Portfolio",
    description:
      "Explore the professional portfolio of Naol Kainset, a Full Stack Developer specializing in modern web technologies like React, Next.js, Laravel, and Nest.js. Discover projects, skills, and achievements.",
    images: [
      {
        url: "https://naol.me/opengraph-image.png", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Naol Kainset Portfolio Open Graph Image",
      },
      {
        url: "https://naol.me/profile-picture.png", // Replace with your profile picture URL
        width: 800,
        height: 800,
        alt: "Naol Kainset Profile Picture",
      },
    ],
    siteName: "Naol Kainset Portfolio",
    locale: "en_US", // Adjust for your preferred locale
  },

  // Twitter meta tags for better sharing on Twitter
  twitter: {
    card: "summary_large_image",
    site: "@naol8600", // Replace with your Twitter handle
    creator: "@naol8600", // Replace with your Twitter handle
    title: "Naol Kainset - Full Stack Developer",
    description:
      "Check out Naol Kainset's portfolio, showcasing expertise in Full Stack Development with technologies like React, Next.js, Laravel, and Nest.js.",
    images: ["https://naol.me/twitter-card-image.png"], // Replace with your Twitter image URL
  },

  // Additional metadata for enhanced SEO
  robots: "index, follow",
  authors: [{ name: "Naol Kainset" }],
  alternates: {
    canonical: "https://naol.me", // Main URL
    languages: {
      "en-US": "https://naol.me/", // English version
    },
  },
  manifest: "/manifest.json", // Replace with your manifest file location
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
        <FootBar />
      </body>
    </html>
  );
}
