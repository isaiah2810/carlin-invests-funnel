import Image from "next/image";
import { FadeUp } from "@/components/ui/fade-up";

export function About() {
  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-surface rounded-2xl p-8 sm:p-12 border border-white/5">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-2xl bg-bg border border-white/5 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Carlin Peton"
                  width={80}
                  height={80}
                  className="w-20 h-20 opacity-30"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-secondary text-sm tracking-widest uppercase mb-3 font-sans">
                About the Author
              </p>
              <h2 className="heading-style text-2xl sm:text-3xl text-text mb-4">
                CARLIN PETON
              </h2>
              <p className="font-sans text-secondary text-base leading-relaxed mb-4">
                Former investment banker at Jefferies. I spent years analysing companies,
                structuring deals, and learning how the financial world actually works — not
                how social media says it works.
              </p>
              <p className="font-sans text-secondary text-base leading-relaxed mb-4">
                I created this guide because I believe we cannot afford{" "}
                <em>not</em> to pay attention to financial markets. But the investing content
                industry is broken — it tells you what to buy without teaching you how to
                think.
              </p>
              <p className="font-sans text-text text-base leading-relaxed">
                I don&apos;t share my work so you can place blind faith in my opinion. I share
                it so you can learn the frameworks, develop your own conviction, and never need
                a guru again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
