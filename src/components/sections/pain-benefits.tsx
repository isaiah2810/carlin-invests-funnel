import { FadeUp } from "@/components/ui/fade-up";

const painPoints = [
  {
    title: "You buy what influencers recommend — then they sell",
    description:
      "Without the why, you have no foundation. You're just copying someone else's homework and hoping they got the answers right.",
  },
  {
    title: "You panic-sell when markets dip",
    description:
      "Greed makes you buy at the top. Fear makes you sell at the bottom. The cycle repeats because human nature doesn't change.",
  },
  {
    title: "You feel overwhelmed by financial content",
    description:
      "There's an overwhelming amount of content out there, and most of it is garbage. Most influencers tell you what to buy but never explain why.",
  },
];

const benefits = [
  {
    title: "Build your own conviction",
    description:
      "Master 5 fundamental concepts and you'll understand more than 90% of retail investors. No guru required.",
  },
  {
    title: "Hold through volatility with confidence",
    description:
      "When you understand real risk vs. perceived risk, market dips become opportunities — not threats.",
  },
  {
    title: "Follow a proven, step-by-step framework",
    description:
      '7 clear steps from an IB professional. No fluff, no "one weird trick" — just the process that actually works.',
  },
];

export function PainBenefits() {
  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-secondary text-sm tracking-widest uppercase mb-4 font-sans">
            Sound Familiar?
          </p>
          <h2 className="heading-style text-2xl sm:text-3xl text-text">
            THE PROBLEM WITH FOLLOWING GURUS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Pain Points */}
          <div className="space-y-4">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="pain-card bg-surface rounded-xl p-5 border border-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-red-400/70 text-lg mt-0.5">✕</span>
                  <div>
                    <h3 className="font-sans text-text font-medium text-sm mb-1">
                      {point.title}
                    </h3>
                    <p className="font-sans text-secondary text-xs leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-surface rounded-xl p-5 border border-accent/10"
              >
                <div className="flex items-start gap-3">
                  <span className="text-accent text-lg mt-0.5">✓</span>
                  <div>
                    <h3 className="font-sans text-text font-medium text-sm mb-1">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-secondary text-xs leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
