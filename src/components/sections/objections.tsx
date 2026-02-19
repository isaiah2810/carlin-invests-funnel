import { FadeUp } from "@/components/ui/fade-up";

const objections = [
  {
    question:
      "\u201CBut Carlin, I don\u2019t have time to pick companies so is it even worth me getting this?\u201D",
    answer:
      "Yes. This book has been designed to cater for all different types of people \u2014 those who are keen and have time available to put in more hours and those that don\u2019t. This guide cuts to the essential information. The following research I produce will fast track those that don\u2019t have hours to learn about 100s of companies but still want to benefit from the cream of the crop. You will have the chance to leverage my education and 10,000+ hours, whilst not having to do so blindly.",
  },
  {
    question:
      "\u201CInvesting in the financial market is not for me, I feel safer leaving my money in cash.\u201D",
    answer:
      "Here\u2019s the uncomfortable truth: your cash is losing value every single day. Inflation has averaged 3\u20135% per year over the last decade, meaning the money sitting in your savings account is quietly being eaten alive. That \u00A310,000 you\u2019re \u201Ckeeping safe\u201D will buy you roughly \u00A37,500 worth of goods in ten years \u2014 and that\u2019s before you factor in rising costs of housing, energy, and food. Meanwhile, central banks continue to print money, governments continue to pile on debt, and the purchasing power of every dollar or pound you hold continues to erode. The \u201Csafety\u201D of cash is an illusion. The real risk isn\u2019t investing \u2014 it\u2019s doing nothing. This book won\u2019t push you into reckless bets. It will give you the framework to protect and grow your wealth in a world where standing still means falling behind.",
  },
];

export function Objections() {
  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-2 sm:px-3">
        <div className="space-y-8">
          {objections.map((obj, i) => (
            <div
              key={i}
              className="bg-surface rounded-2xl p-6 sm:p-8 border border-white/5"
            >
              <h3 className="title-style text-text text-sm sm:text-base mb-4 leading-snug">
                {obj.question}
              </h3>
              <p className="font-sans text-text text-sm sm:text-base leading-relaxed">
                {obj.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
