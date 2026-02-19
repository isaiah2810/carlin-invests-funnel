import { FadeUp } from "@/components/ui/fade-up";

export function About() {
  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-2 sm:px-3">
        <div className="bg-surface rounded-2xl p-8 sm:p-12 border border-white/5">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-2xl bg-bg border border-white/5 flex items-center justify-center">
                <span className="font-sans text-secondary/30 text-xs text-center px-4">
                  Photo placeholder
                </span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-text text-sm tracking-widest uppercase mb-3 font-sans">
                In Case We Haven&apos;t Met
              </p>
              <h2 className="heading-style text-xl sm:text-2xl text-text mb-6">
                HI, I&apos;M CARLIN
              </h2>
              <p className="font-sans text-text text-base leading-relaxed mb-4">
                I get it - I know what it&apos;s like to work a 9-to-5 and feel like
                you&apos;re always falling short of your financial goals in life.
              </p>
              <p className="font-sans text-text text-base leading-relaxed mb-4">
                I spent over four years in the financial sector, mostly as an Investment
                Banker. That put me in the top [x]% of earners but still I didn&apos;t feel
                wealthy - I felt the invisible squeeze that we all feel.
              </p>
              <p className="font-sans text-text text-base leading-relaxed mb-4">
                I strapped up my boots and did my research. Having a high income gave me more
                savings than most - and it also gave me room to make investments and determine
                that it is possible to beat the market. I blinked and within a few years my
                investments compounded to a level where they returned more than my own salary
                paid me. I got to experience the first fruits of what my mentors at [x] had
                taught me in the early years of my career. Start as early as possible and be
                intentional with your investments, and compounding will take care of the rest.
              </p>
              <p className="font-sans text-text text-base leading-relaxed mb-4">
                I&apos;ll be real, my conviction didn&apos;t come overnight. I&apos;ve lost
                count of the number of books that I&apos;ve read. All the classics, plus more.
                But it wasn&apos;t to no effect. It gave me the confidence to navigate up to
                now and it gave me the confidence to build this platform to help others.
              </p>
              <p className="font-sans text-text text-base leading-relaxed">
                My hope is that others can leverage the work I have done, achieve financial
                freedom and escape the permanent underclass.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
