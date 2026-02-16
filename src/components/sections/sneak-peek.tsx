import { FadeUp } from "@/components/ui/fade-up";

export function SneakPeek() {
  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-secondary text-sm tracking-widest uppercase mb-4 font-sans">
          What&apos;s Inside
        </p>
        <h2 className="heading-style text-2xl sm:text-3xl text-text mb-6">
          A FRAMEWORK, NOT A FORMULA
        </h2>
        <p className="font-sans text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Most investing content tells you <em>what</em> to buy. This guide teaches you{" "}
          <em>how to think</em> — so you never have to rely on anyone else&apos;s conviction
          again.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-surface rounded-xl p-6 border border-white/5">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="title-style text-text text-lg mb-2">Think Independently</h3>
            <p className="font-sans text-secondary text-sm leading-relaxed">
              Learn edge-thinking — the skill that separates real investors from people who
              just follow the crowd.
            </p>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-white/5">
            <div className="text-3xl mb-3">📐</div>
            <h3 className="title-style text-text text-lg mb-2">Build With Structure</h3>
            <p className="font-sans text-secondary text-sm leading-relaxed">
              A 7-step process for constructing a portfolio that matches your convictions, not
              someone else&apos;s.
            </p>
          </div>
          <div className="bg-surface rounded-xl p-6 border border-white/5">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="title-style text-text text-lg mb-2">Manage Real Risk</h3>
            <p className="font-sans text-secondary text-sm leading-relaxed">
              Understand why volatility isn&apos;t risk — and how to protect against the thing
              that actually destroys portfolios.
            </p>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
