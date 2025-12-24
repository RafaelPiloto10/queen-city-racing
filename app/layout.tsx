import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Queen City Racing",
  description: "Helping students go vroom one miata at a time",
  openGraph: {
    type: "website",
    countryName: "US",
    description:
      "Queen City Racing | A Motorsport Team in the Collegiate Racing Series‌ ©",
    determiner: "auto",
    emails: "cincinnatiracing@gmail.com",
    siteName: "Queen City Racing",
    url: "queencityracing.vercel.app",
    title: "Queen City Racing",
    images: [
      {
        url: "https://queen-city-racing.vercel.app/_next/image?url=%2Fsponsor%2Fracetrack.png&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Queen City Racing Track",
      },
    ],
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
