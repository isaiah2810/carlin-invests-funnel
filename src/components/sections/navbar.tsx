import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="CP" width={32} height={32} className="h-8 w-8" />
          <span className="title-style text-text text-sm tracking-wider hidden sm:inline">
            CARLIN INVESTS
          </span>
        </a>
        <a
          href="#get-the-guide"
          className="bg-cta text-bg font-sans font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-text transition-colors"
        >
          Get the Free Guide
        </a>
      </div>
    </nav>
  );
}
