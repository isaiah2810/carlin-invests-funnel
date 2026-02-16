"use client";

import { useState, FormEvent } from "react";

interface EmailFormProps {
  id: string;
}

export function EmailForm({ id }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // TODO: Replace with ConvertKit form submission
    // fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ api_key: 'YOUR_API_KEY', email })
    // });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
    >
      <input
        type="email"
        placeholder="Your best email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-surface border border-white/10 rounded-full px-5 py-3 text-text font-sans text-sm placeholder:text-secondary/60 focus:outline-none focus:border-accent/40 transition-colors"
      />
      <button
        type="submit"
        disabled={submitted}
        className={`cta-glow bg-cta text-bg font-sans font-semibold text-sm px-6 py-3 rounded-full hover:bg-text transition-colors relative z-10 whitespace-nowrap ${
          submitted ? "opacity-75" : ""
        }`}
      >
        {submitted ? "✓ Check your inbox!" : "Send Me the Guide →"}
      </button>
    </form>
  );
}
