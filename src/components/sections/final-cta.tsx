import { FadeUp } from "@/components/ui/fade-up";
import { EmailForm } from "@/components/ui/email-form";

export function FinalCTA() {
  return (
    <FadeUp id="get-the-guide" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-2 sm:px-3 text-center">
        <p className="text-text text-sm tracking-widest uppercase mb-4 font-sans">
          Ready?
        </p>
        <h2 className="heading-style text-xl sm:text-2xl text-text mb-6">
          STOP FOLLOWING. START THINKING.
        </h2>
        <p className="font-sans text-text text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Get the free 7-step framework that teaches you how to invest with conviction - not
          blind faith. Your email, your inbox, no spam.
        </p>

        {/* Email capture form */}
        <div className="flex justify-center">
          <EmailForm id="footer-form" />
        </div>
        <p className="text-secondary/50 text-xs font-sans mt-4 mb-12">
          Free. No credit card. Unsubscribe anytime.
        </p>

        {/* Trust signals */}
        <div className="flex flex-wrap gap-6 justify-center text-secondary/40 text-xs font-sans">
          <span>📧 No spam, ever</span>
          <span>📖 Instant delivery</span>
          <span>🔒 Your data stays yours</span>
        </div>

        {/* Disclaimer */}
        <p className="text-secondary/30 text-[10px] font-sans italic mt-12 max-w-2xl mx-auto leading-relaxed">
          Disclaimer: The information provided on this page and in all materials produced by
          Carlin Invests is for educational purposes only and does not constitute financial
          advice. Nothing herein should be taken as a recommendation to buy, sell, or hold any
          securities or financial instruments. All investments carry risk, including the
          potential loss of principal. Past performance is not indicative of future results.
          You should consult a qualified financial advisor before making any investment
          decisions. Invest in financial markets at your own risk.
        </p>
      </div>
    </FadeUp>
  );
}
