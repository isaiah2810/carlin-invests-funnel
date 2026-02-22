import { FadeUp } from "@/components/ui/fade-up";

const included = [
  "A proven 7 step system for investing that ensures that you are best positioned to outperform the S&P 500",
  "A risk framework that ensures you can understand and manage risk of losing money and of fluctuations in your portfolio value",
  "Explanations with analogies that break concepts down to core principles, with no financial jargon so you can fast track your understanding of the only concepts you need to get started",
  "Examples of stocks that outperformed the S&P 500 last year, with reasons why they outperformed, so you can see what is possible",
];

const bonuses = [
  "Free access to the first company research report that I release",
  <>
    Get flagged as a <strong className="text-text">Founding Cohort Member</strong> eligible
    for lifetime discounts and free community access
  </>,
];

export function OfferStack() {
  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-2 sm:px-3">
        {/* What's Included */}
        <div className="text-center mb-14">
          <p className="text-secondary text-sm tracking-widest uppercase mb-4 font-sans">
            What&apos;s Included
          </p>
          <h2 className="heading-style text-xl sm:text-2xl text-text">
            EVERYTHING YOU GET
          </h2>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto mb-16">
          {included.map((item, i) => (
            <div
              key={i}
              className="bg-surface rounded-[2rem] p-5 border border-accent/10"
            >
              <div className="flex items-start gap-3">
                <span className="text-cta text-lg mt-0.5 shrink-0">&#10003;</span>
                <p className="font-sans text-text text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus */}
        <div className="text-center mb-10">
          <p className="text-text text-sm tracking-widest uppercase mb-4 font-sans">
            Bonus
          </p>
          <h2 className="heading-style text-xl sm:text-2xl text-text">
            AND THERE&apos;S MORE
          </h2>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {bonuses.map((item, i) => (
            <div
              key={i}
              className="bg-surface rounded-[2rem] p-5 border border-accent/10"
            >
              <div className="flex items-start gap-3">
                <span className="text-cta text-lg mt-0.5 shrink-0">&#9733;</span>
                <p className="font-sans text-text text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
