import { FadeUp } from "@/components/ui/fade-up";

const wins = [
  {
    bold: "The Tesla test:",
    text: 'Why "Tesla makes EVs, EVs are the future, buy Tesla" is first-level thinking — and what edge-thinking looks like instead.',
  },
  {
    bold: "Price ≠ Value:",
    text: "How investors in the 1972 \"Nifty Fifty\" — America's best companies — still lost money. Great business ≠ great investment.",
  },
  {
    bold: "The risk paradox:",
    text: "Why a stock that drops 40% might be less risky than one that hasn't moved — and how to spot the difference.",
  },
  {
    bold: "Growth vs Income:",
    text: "A real Nvidia vs. Verizon breakdown showing exactly when dividends matter — and when they don't.",
  },
  {
    bold: "Catalyst mapping:",
    text: "How to define the three things you need before entering any trade: thesis, catalyst, and timeline.",
  },
  {
    bold: "Professional screening:",
    text: "The same filtering process investment bankers use to narrow thousands of stocks to the ones worth your attention.",
  },
];

export function QuickWins() {
  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-secondary text-sm tracking-widest uppercase mb-4 font-sans">
            Immediate Value
          </p>
          <h2 className="heading-style text-2xl sm:text-3xl text-text mb-4">
            WHAT YOU&apos;LL KNOW AFTER READING
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {wins.map((win, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-accent/60 mt-1 text-lg">→</span>
              <p className="font-sans text-secondary text-sm leading-relaxed">
                <strong className="text-text">{win.bold}</strong> {win.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
