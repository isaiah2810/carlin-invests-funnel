import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="CP"
            width={24}
            height={24}
            className="h-6 w-6 opacity-40"
          />
          <span className="text-secondary/40 text-xs font-sans">
            © 2026 Carlin Invests. All rights reserved.
          </span>
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-secondary/40 text-xs font-sans hover:text-secondary transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-secondary/40 text-xs font-sans hover:text-secondary transition-colors"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
