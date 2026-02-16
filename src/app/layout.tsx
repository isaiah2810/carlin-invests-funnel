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
      </body>
    </html>
  );
}
