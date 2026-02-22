"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled past the hero might be around 100px or the height of the window. We'll use 100px for a quicker visual transition or maybe 50px.
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto w-full flex items-center justify-between px-4 py-3 rounded-[3rem] transition-all duration-500 ${isScrolled
            ? "bg-bg/60 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent border-transparent"
          }`}
      >
        <a href="#" className="flex items-center gap-3 group">
          <Image src="/logo.svg" alt="CP" width={32} height={32} className="h-8 w-8" />
          <span
            className={`title-style text-sm tracking-wider hidden sm:inline transition-colors duration-500 ${isScrolled ? "text-cta" : "text-text"
              }`}
          >
            CARLIN INVESTS
          </span>
        </a>
        <a
          href="#get-the-guide"
          className="btn-magnetic bg-cta text-bg font-sans font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
        >
          <span>Get the Free Guide</span>
        </a>
      </nav>
    </div>
  );
}
