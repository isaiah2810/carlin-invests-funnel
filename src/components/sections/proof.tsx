import Image from "next/image";
import { FadeUp } from "@/components/ui/fade-up";

export function Proof() {
  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Credential visual */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-2xl bg-surface border border-white/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-surface-light/50 to-transparent" />
              <div className="text-center relative z-10">
                <Image
                  src="/logo.svg"
                  alt="CP"
                  width={64}
                  height={64}
                  className="w-16 h-16 mx-auto mb-3 opacity-40"
                />
                <p className="text-secondary/60 text-[10px] tracking-widest uppercase font-sans">
                  Est. 2810
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-secondary text-sm tracking-widest uppercase mb-4 font-sans">
              Why Listen to Me
            </p>
            <h2 className="heading-style text-2xl sm:text-3xl text-text mb-6">
              THIS ISN&apos;T THEORY FROM A TEXTBOOK
            </h2>
            <p className="font-sans text-secondary text-base leading-relaxed mb-4">
              I spent{" "}
              <strong className="text-text">
                4 years in investment banking at Jefferies
              </strong>{" "}
              — one of the world&apos;s leading independent investment banks. I&apos;ve sat in
              the rooms where billion-dollar deals are structured, analysed companies across
              sectors, and seen firsthand what separates the investors who win from those who
              don&apos;t.
            </p>
            <p className="font-sans text-secondary text-base leading-relaxed mb-4">
              This guide distils the frameworks and thinking I&apos;ve used professionally —
              stripped of the jargon, rebuilt for anyone willing to do the work.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["Investment Banking", "Jefferies & Company", "4+ Years", "Multi-Sector Analysis"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-surface text-secondary text-xs font-sans px-3 py-1.5 rounded-full border border-white/5"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
