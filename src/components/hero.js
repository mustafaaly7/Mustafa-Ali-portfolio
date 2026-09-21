"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react';

export default function Hero() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/mustafa.pdf"; 
        link.download = "Muhammad-Mustafa-Ali-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="top" className="relative isolate border-b border-[#1F2937] bg-[#000000] text-[#E2E8F0]">
            <div className="terminal-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />
            <div className="shell grid min-h-[calc(100vh-76px)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
              <div>
                <motion.h1
                    initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                    className="max-w-4xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-[6.7rem]"
                >
                    Building digital products with <span className="text-[#22C55E]">intent.</span>
                </motion.h1>

                <motion.h2
                    className="mt-8 flex items-center gap-2 font-mono text-sm uppercase tracking-[0.12em] text-[#8F9B8F]"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#22C55E]" /> Muhammad Mustafa Ali · Full-Stack Developer
                </motion.h2>

                <motion.p
                    className="mt-6 max-w-xl text-lg leading-8 text-[#8F9B8F]"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
                >
                    I design and ship thoughtful web applications across the stack, from expressive interfaces to reliable APIs and the systems behind them.
                </motion.p>

                <motion.div
                    className="mt-10 flex flex-wrap items-center gap-4"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
                >
                    <a href="#projects" className="inline-flex items-center gap-2 bg-[#22C55E] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.08em] text-black transition-transform hover:-translate-y-1">
                        Explore work <ArrowUpRight size={15} />
                    </a>
                    <a href="/mustafa.pdf" download className="inline-flex items-center gap-2 border border-[#1F2937] px-5 py-3 font-mono text-xs uppercase tracking-[0.08em] text-[#E2E8F0] transition-colors hover:border-[#22C55E] hover:text-[#22C55E]">Download CV <ArrowDown size={15} /></a>
                </motion.div>

                <div className="mt-12 flex items-center gap-5 text-[#8F9B8F]">
                  <a href="https://github.com/mustafaaly7" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-[#22C55E]"><Github size={19} /></a>
                  <a href="https://www.linkedin.com/in/mustafa-ali-74a769222/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-[#22C55E]"><Linkedin size={19} /></a>
                  <span className="h-px w-12 bg-[#1F2937]" />
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em]"><MapPin size={14} className="text-[#22C55E]" /> Karachi, PK</span>
                </div>
              </div>

              <motion.div
                className="relative mx-auto w-full max-w-[440px]"
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
              >
                <div className="absolute -right-4 -top-4 z-10 border border-[#22C55E] bg-[#0B0F0B] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[#22C55E]">Available for work</div>
                <div className="relative aspect-[4/5] overflow-hidden border border-[#1F2937] bg-[#0B0F0B] p-3">
                <Image
                    src={"/images/profile.jpg"}
                    alt="Muhammad Mustafa Ali"
                    fill
                    className="object-cover grayscale transition duration-700 hover:grayscale-0"
                    priority
                />
                <div className="absolute inset-3 border border-[#22C55E]/50" />
                <div className="absolute bottom-7 left-7 font-mono text-xs text-[#E2E8F0]">01 / profile.jpg</div>
                </div>
              </motion.div>
            </div>
        </section>
    );
}
