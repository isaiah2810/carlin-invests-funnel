import Image from "next/image";
import { BGPattern } from "@/components/ui/bg-pattern";
import { EmailForm } from "@/components/ui/email-form";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Grid background pattern */}
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={48}
        fill="rgba(154, 149, 168, 0.06)"
      />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-surface-light/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-secondary font-sans text-sm tracking-widest uppercase mb-4">
              Free Ebook · 7 Chapters · Zero Fluff
            </p>
            <h1 className="heading-style text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-tight mb-6 text-text">
              THE ANTI-GURU GUIDE
            </h1>
            <p className="title-style text-xl sm:text-2xl text-accent mb-6 leading-relaxed">
              7 Steps to Invest Without Blind Faith
            </p>
            <p className="font-sans text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Stop copying other people&apos;s homework and hoping they got the answers right.
              This is the framework a former investment banker at Jefferies uses to build real
              conviction — and you can too.
            </p>

            {/* Email capture form */}
            <EmailForm id="hero-form" />
            <p className="text-secondary/50 text-xs font-sans mt-4">
              Join 500+ readers. Unsubscribe anytime.
            </p>
          </div>

          {/* Ebook Mockup */}
          <div className="flex-shrink-0">
            <div className="ebook-mockup">
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
        </div>
      </div>
    </section>
  );
}
