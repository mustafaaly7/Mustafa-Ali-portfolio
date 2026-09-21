import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1F2937] bg-black py-8 text-[#8F9B8F]">
      <div className="shell flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <Link href="#top" aria-label="Muhammad Mustafa Ali home" className="block">
          <Image src="/images/logo.png" width={150} height={52} alt="Muhammad Mustafa Ali" className="h-auto w-[120px] sm:w-[150px]" />
        </Link>
        <p className="font-mono text-[10px] uppercase tracking-[0.08em]">(c) 2026 Muhammad Mustafa Ali</p>
        <div className="flex gap-4">
          <a href="https://github.com/mustafaaly7" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-[#22C55E]"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/mustafa-ali-74a769222/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-[#22C55E]"><Linkedin size={17} /></a>
          <a href="mailto:mustafaaaly27@gmail.com?subject=Portfolio%20Inquiry" target="_self" aria-label="Email" className="transition-colors hover:text-[#22C55E]"><Mail size={17} /></a>
        </div>
      </div>
    </footer>
  );
}
