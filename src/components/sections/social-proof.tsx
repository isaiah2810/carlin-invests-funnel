"use client";

import { FadeUp } from "@/components/ui/fade-up";

const companies = [
  { name: "Company A", returnPct: 85 },
  { name: "Company B", returnPct: 62 },
  { name: "Company C", returnPct: 48 },
  { name: "Company D", returnPct: 35 },
];

const sp500Return = 17.9;

export function SocialProof() {
  const maxReturn = Math.max(...companies.map((c) => c.returnPct));

  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-2 sm:px-3">
        <div className="text-center mb-14">
          <p className="text-secondary text-sm tracking-widest uppercase mb-4 font-sans">
            Proof It Works
          </p>
          <h2 className="heading-style text-xl sm:text-2xl text-text mb-6">
            THE NUMBERS SPEAK FOR THEMSELVES
          </h2>
        </div>

        {/* Chart */}
        <div className="bg-surface rounded-2xl p-6 sm:p-10 border border-white/5 mb-10 max-w-5xl mx-auto">
          <p className="font-sans text-secondary text-xs tracking-widest uppercase mb-6">
            2025 Returns — S&amp;P 500 vs Selected Companies
          </p>

          <div className="space-y-4">
            {/* S&P 500 bar */}
            <div className="flex items-center gap-4">
              <span className="font-sans text-secondary text-sm w-28 text-right shrink-0">
                S&amp;P 500
              </span>
              <div className="flex-1 bg-bg rounded-full h-8 overflow-hidden">
                <div
                  className="h-full bg-secondary/30 rounded-full flex items-center justify-end pr-3 transition-all duration-700"
                  style={{ width: `${(sp500Return / maxReturn) * 100}%` }}
                >
                  <span className="font-sans text-text text-xs font-semibold">
                    {sp500Return}%
                  </span>
                </div>
              </div>
            </div>

            {/* Company bars */}
            {companies.map((company) => (
              <div key={company.name} className="flex items-center gap-4">
                <span className="font-sans text-text text-sm w-28 text-right shrink-0">
                  {company.name}
                </span>
                <div className="flex-1 bg-bg rounded-full h-8 overflow-hidden">
                  <div
                    className="h-full bg-cta/60 rounded-full flex items-center justify-end pr-3 transition-all duration-700"
                    style={{ width: `${(company.returnPct / maxReturn) * 100}%` }}
                  >
                    <span className="font-sans text-text text-xs font-semibold">
                      {company.returnPct}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="font-sans text-secondary/40 text-xs mt-4 italic">
            Chart will be updated with actual company names and returns.
          </p>
        </div>

        {/* Supporting text */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-text text-base sm:text-lg leading-relaxed mb-4">
            In 2025, the S&amp;P 500 would have made you a 17.9% return. Out of the 500
            companies in the index, only 30% achieved a return greater than 17.9%.
          </p>
          <p className="font-sans text-text text-base sm:text-lg leading-relaxed font-semibold mb-4">
            This is not random. There are identifiable reasons behind this that can be
            preemptively determined.
          </p>
          <p className="font-sans text-text text-base sm:text-lg leading-relaxed">
            Here are some companies I invested in that beat the S&amp;P 500. In this book,{" "}
            <strong>
              you will learn how to identify and build conviction in these companies.
            </strong>
          </p>
        </div>
      </div>
    </FadeUp>
  );
}
