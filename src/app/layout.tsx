import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground";

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
    url: "https://your-portfolio-url.com", // Replace with your portfolio's URL
    title: "Naol Kainset - Full Stack Developer",
    description:
      "Explore the portfolio of Naol Kainset, a Full Stack Developer proficient in React, Next.js, Laravel, and PHP.",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg", // Replace with your image URL
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InteractiveBackground>{children}</InteractiveBackground>
      </body>
    </html>
  );
}
