import { FadeUp } from "@/components/ui/fade-up";

const painPoints = [
  "You won\u2019t invest because you\u2019re afraid of losing money in the stock market",
  "You won\u2019t invest because of lack of confidence in your knowledge in the stock market",
  "You\u2019ll only invest in the S&P 500 and achieve average results of 10% a year",
  "You\u2019ll invest on vibes or guru recommendations and be caught by surprise when you lose money",
];

const benefits = [
  "Build a system based on what the pros use to prevent panic selling when markets dip",
  "Understand all of the need-to-knows from all the noise that delays your profit making",
  "Develop the ability to hold conviction in individual company investments that produce exceptional returns whilst everyone else settles for average index returns",
  "Follow a proven system for managing risk and exposure yourself instead of placing blind faith in gurus",
];

export function PainBenefits() {
  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-2 sm:px-3">
        {/* Pain Points */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="heading-style text-xl sm:text-2xl text-text mb-4">
              WITHOUT THIS BOOK, YOU&apos;LL LIKELY STAY STUCK WITH MEDIOCRE RETURNS WHILST
              OTHERS WIN
            </h2>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="pain-card bg-surface rounded-[2rem] p-5 border border-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-red-400/70 text-lg mt-0.5 shrink-0">&#10005;</span>
                  <p className="font-sans text-text text-sm leading-relaxed">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-sans text-text text-base text-center mt-8 max-w-2xl mx-auto leading-relaxed">
            Round here we put the work in to erase these outcomes and bridge the gap between
            professionals and everyone else.
          </p>
        </div>

        {/* Benefits */}
        <div>
          <div className="text-center mb-10">
            <h2 className="heading-style text-xl sm:text-2xl text-text mb-4">
              FAST TRACK YOUR INVESTMENT EDUCATION TO INVEST WITH PEACE OF MIND
            </h2>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-surface rounded-[2rem] p-5 border border-accent/10"
              >
                <div className="flex items-start gap-3">
                  <span className="text-cta text-lg mt-0.5 shrink-0">&#10003;</span>
                  <p className="font-sans text-text text-sm leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
