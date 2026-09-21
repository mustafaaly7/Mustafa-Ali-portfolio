"use client";

import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { Github, ArrowUpRight } from "lucide-react";

export default function GithubContributions() {
  return <section className="border-b border-[#1F2937] bg-[#0B0F0B] py-20 text-[#E2E8F0]"><div className="shell"><motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-[#1F2937] p-5 sm:p-8"><div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><span className="eyebrow">05 / activity</span><h2 className="mt-3 font-display text-2xl tracking-[-0.04em]">Open source, in progress.</h2></div><a href="https://github.com/mustafaaly7" target="_blank" rel="noreferrer" className="font-mono text-xs uppercase tracking-[0.08em] text-[#22C55E]">Visit GitHub <ArrowUpRight className="inline" size={13} /></a></div><div className="overflow-x-auto"><GitHubCalendar username="mustafaaly7" blockSize={13} blockMargin={4} color="#22C55E" fontSize={12} theme={{ light: ["#141A14", "#166534", "#15803D", "#22C55E", "#86EFAC"], dark: ["#141A14", "#166534", "#15803D", "#22C55E", "#86EFAC"] }} /></div><p className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[#8F9B8F]"><Github size={14} /> Building in public, one commit at a time.</p></motion.div></div></section>;
}
