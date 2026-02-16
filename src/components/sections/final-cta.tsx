import { FadeUp } from "@/components/ui/fade-up";
import { EmailForm } from "@/components/ui/email-form";

export function FinalCTA() {
  return (
    <FadeUp id="get-the-guide" className="py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-secondary text-sm tracking-widest uppercase mb-4 font-sans">
          Ready?
        </p>
        <h2 className="heading-style text-2xl sm:text-4xl text-text mb-6">
          STOP FOLLOWING. START THINKING.
        </h2>
        <p className="font-sans text-secondary text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Get the free 7-step framework that teaches you how to invest with conviction — not
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
      </div>
    </FadeUp>
  );
}
