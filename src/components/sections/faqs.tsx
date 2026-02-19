"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/fade-up";

const faqs = [
  {
    question: "Is this really free? What's the catch?",
    answer:
      "Yes, it's genuinely free. I'm building Carlin Invests as an educational platform — this ebook is the first step. If you find it valuable, I'll eventually offer deeper materials and analysis. But the guide itself? No strings attached.",
  },
  {
    question: "I'm a complete beginner. Is this for me?",
    answer:
      "Absolutely. This guide is written for anyone taking agency over their finances for the first time. I break down every concept with real-world examples — no financial jargon without explanation. If you can read, you can follow this.",
  },
  {
    question: "Will this tell me what stocks to buy?",
    answer:
      "No — and that's the point. If you want hot stock tips, there are a thousand influencers who'll happily give you those. This guide teaches you how to think so you can evaluate any investment yourself. That skill lasts forever. A stock tip lasts until someone sells.",
  },
  {
    question: "How long will it take to read?",
    answer:
      "About 30-45 minutes for a first read. But this isn't content you skim once and forget — each chapter builds on the last. Most readers come back to specific sections as they start applying the framework.",
  },
  {
    question: "What makes this different from every other investing guide?",
    answer:
      "Two things: (1) It's written by someone who actually worked in investment banking, not someone who read a few books and started a YouTube channel. (2) It teaches frameworks and thinking — not \"5 stocks to buy now.\" The goal is to make you self-sufficient, not dependent on me.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. This is educational content designed to help you develop your own investment thinking. I'm not a financial advisor, and nothing in this guide constitutes personalised financial advice. Always do your own research and consider consulting a qualified professional for specific investment decisions.",
  },
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FadeUp className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-2 sm:px-3">
        <div className="text-center mb-14">
          <h2 className="heading-style text-xl sm:text-2xl text-text">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item bg-surface rounded-xl border border-white/5 overflow-hidden ${
                openIndex === index ? "open" : ""
              }`}
            >
              <button
                className="faq-toggle w-full text-left px-6 py-5 flex items-center justify-between"
                onClick={() => toggle(index)}
              >
                <span className="font-sans text-text text-sm font-medium pr-4">
                  {faq.question}
                </span>
                <span className="faq-icon text-secondary text-xl flex-shrink-0">+</span>
              </button>
              <div className={`faq-answer px-6 ${openIndex === index ? "pb-5" : ""}`}>
                <p className="font-sans text-text text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
