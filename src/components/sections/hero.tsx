"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { BGPattern } from "@/components/ui/bg-pattern";
import { EmailForm } from "@/components/ui/email-form";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ctx = gsap.context(() => {
      // Find all elements to animate
      const animElements = el.querySelectorAll(".hero-anim");

      gsap.set(animElements, { y: 40, opacity: 0 });

      gsap.to(animElements, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.1
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden">
      {/* Grid background pattern */}
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={48}
        fill="rgba(154, 149, 168, 0.06)"
      />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-surface-light/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-2 sm:px-3 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* 1. Header */}
          <p className="hero-anim text-secondary font-sans text-sm tracking-widest uppercase mb-4">
            Free Ebook · 7 Chapters · Zero Fluff
          </p>
          <h1 className="hero-anim heading-style text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] leading-tight mb-6 text-text">
            LEARN EVERYTHING YOU NEED TO KNOW BEFORE INVESTING IN 30 MINUTES
          </h1>

          {/* 2. Sub-header */}
          <p className="hero-anim title-style text-sm sm:text-base text-accent mb-12 leading-relaxed max-w-3xl">
            Without The Financial Jargon That Keeps You Confused and Delaying Investing
          </p>

          {/* 3. Ebook Mockup */}
          <div className="hero-anim mb-10">
            <div className="ebook-mockup mx-auto">
              <div className="ebook-cover">
                <Image
                  src="/logo.svg"
                  alt="CP"
                  width={48}
                  height={48}
                  className="w-12 h-12 mb-4 opacity-60"
                />
                <p className="text-secondary/60 text-[10px] tracking-[0.3em] uppercase mb-3 font-sans">
                  Carlin Peton
                </p>
                <h2 className="heading-style text-base text-accent leading-snug mb-2">
                  THE ANTI-GURU GUIDE
                </h2>
                <p className="title-style text-xs text-secondary leading-relaxed">
                  7 Steps to Invest
                  <br />
                  Without Blind Faith
                </p>
                <div className="mt-auto pt-6">
                  <p className="text-secondary/40 text-[9px] tracking-widest uppercase font-sans">
                    2810 · CP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Teaser */}
          <p className="hero-anim font-sans text-text text-base sm:text-lg max-w-4xl mb-8 leading-relaxed">
            Last year I made a ~70% return in the financial markets - simply by applying
            the concepts in this book. Inside, you&apos;ll learn the exact system I used to
            go from investing only in the S&amp;P 500 to selecting companies, with confidence,
            that I believed would outperform the S&amp;P 500.
          </p>

          {/* 5. CTA */}
          <div className="hero-anim w-full max-w-md">
            <EmailForm id="hero-form" />
            <p className="text-secondary/50 text-xs font-sans mt-4">
              Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
