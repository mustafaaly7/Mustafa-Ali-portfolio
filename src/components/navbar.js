"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1F2937]/80 bg-black/90 text-[#E2E8F0] backdrop-blur-xl">
      <nav className="shell flex min-h-[76px] items-center justify-between">
        <Link href="#top" aria-label="Muhammad Mustafa Ali home" className="block">
          <Image src="/images/logo.png" width={150} height={52} alt="Muhammad Mustafa Ali" className="h-auto w-[120px] sm:w-[150px]" priority />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {[
            ["About", "about"],
            ["Work", "projects"],
            ["Experience", "experience"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <Link key={id} href={`#${id}`} className="font-mono text-xs uppercase tracking-[0.1em] text-[#8F9B8F] transition-colors hover:text-[#22C55E]">
              {label}
            </Link>
          ))}
          <a href="/mustafa.pdf" download className="inline-flex items-center gap-2 border border-[#22C55E] px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] text-[#22C55E] transition-colors hover:bg-[#22C55E] hover:text-black">
            Resume <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="text-[#E2E8F0] lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="shell border-t border-[#1F2937] py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {[["About", "about"], ["Work", "projects"], ["Experience", "experience"], ["Contact", "contact"]].map(([label, id]) => (
              <Link key={id} href={`#${id}`} onClick={() => setIsOpen(false)} className="font-display text-2xl text-[#E2E8F0]">
                {label}
              </Link>
            ))}
            <a href="/mustafa.pdf" download className="font-mono text-xs uppercase tracking-[0.1em] text-[#22C55E]">Download resume <ArrowUpRight className="inline" size={14} /></a>
          </div>
        </div>
      )}
    </header>
  );
}
