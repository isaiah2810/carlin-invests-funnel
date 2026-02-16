import { FadeUp } from "@/components/ui/fade-up";

const chapters = [
  {
    number: "01",
    title: "How Much Money Do You Have?",
    description:
      "Define your starting point and monthly investment amount. Simple guardrails that prevent the #1 beginner mistake: investing money you can't afford to lose.",
  },
  {
    number: "02",
    title: "Figure Out Your Investment Style",
    description:
      "Growth or income? High volatility or steady? Answer 4 critical questions that shape your entire strategy — with real examples comparing Nvidia vs. Verizon.",
  },
  {
    number: "03",
    title: "Learn and Develop Conviction",
    description:
      "The most important chapter. Master 5 concepts — Edge-Thinking, Price vs Value, Real Risk, Cycles, and Psychology — and you'll think like the top 10% of investors.",
  },
  {
    number: "04",
    title: "Construct a Portfolio That Matches Your Convictions",
    description:
      "Learn how professionals screen the market. Define your criteria, apply constraints, and narrow thousands of stocks down to the handful that deserve your capital.",
  },
  {
    number: "05",
    title: "Initiate Positions and Invest Monthly",
    description:
      "Understand why risk is perverse — it behaves opposite to how most people perceive it. Size your positions to maximise gains for every unit of risk taken.",
  },
  {
    number: "06",
    title: "Monitor Outcomes vs. Expectations",
    description:
      "Markets give live feedback. Learn to define catalysts, set timelines, and make clear-headed decisions about when to hold, adapt, or exit.",
  },
  {
    number: "07",
    title: "Loop Back and Keep Compounding",
    description:
      "Your knowledge compounds with your wealth. Stay open to new opportunities — you don't know which one can change your life. The compounding effect cannot be ignored.",
  },
];

export function Chapters() {
  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-secondary text-sm tracking-widest uppercase mb-4 font-sans">
            The 7 Steps
          </p>
          <h2 className="heading-style text-2xl sm:text-3xl text-text mb-4">
            EVERYTHING YOU&apos;LL LEARN
          </h2>
          <p className="font-sans text-secondary text-base max-w-xl mx-auto">
            Each chapter builds on the last — precept upon precept, line upon line.
          </p>
        </div>

        <div className="space-y-4">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="chapter-card bg-surface rounded-xl p-6 border border-white/5"
            >
              <div className="flex items-start gap-4">
                <span className="text-accent/40 font-[var(--font-sora)] text-2xl font-bold leading-none mt-1">
                  {chapter.number}
                </span>
                <div>
                  <h3 className="title-style text-text text-lg mb-1">{chapter.title}</h3>
                  <p className="font-sans text-secondary text-sm leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
