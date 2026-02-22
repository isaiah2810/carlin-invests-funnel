import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "The Anti-Guru Guide: 7 Steps to Invest Without Blind Faith",
  description:
    "Stop following financial gurus blindly. Learn the 7-step framework used by investment bankers to build real conviction in your portfolio.",
  openGraph: {
    title: "The Anti-Guru Guide: 7 Steps to Invest Without Blind Faith",
    description:
      "A free ebook by a former Jefferies investment banker. No hype, no hot tips — just the framework that actually works.",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
        <svg
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
      </body>
    </html>
  );
}
