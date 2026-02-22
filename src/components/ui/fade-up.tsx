"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  staggerChildren?: boolean;
  staggerType?: "text" | "card";
}

export function FadeUp({ children, className = "", id, as: Tag = "section", staggerChildren = false, staggerType = "text" }: FadeUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ctx = gsap.context(() => {
      const cards = Array.from(el.querySelectorAll('.bg-surface, [class*="card"], .faq-item'));
      const texts = Array.from(el.querySelectorAll('h1, h2, h3, p, li, button, a'));

      let targets: any = el;
      let staggerVal = 0;

      if (cards.length > 1) {
        targets = cards;
        staggerVal = 0.15;
      } else if (texts.length > 1) {
        targets = texts;
        staggerVal = 0.08;
      }

      // Set initial state
      gsap.set(targets, { y: 30, opacity: 0 });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(targets, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                stagger: staggerVal
              });
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(el);

      return () => {
        observer.disconnect();
      };
    }, ref);

    return () => ctx.revert();
  }, [staggerChildren, staggerType]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      id={id}
      className={`${className}`}
    >
      {children}
    </Tag>
  );
}
