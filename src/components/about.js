"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Check, FlaskConical, GraduationCap, Layers3 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="border-b border-[#1F2937] bg-[#0B0F0B] py-24 text-[#E2E8F0]">
      <div className="shell grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <div><span className="eyebrow">01 / about</span><h2 className="section-heading mt-5">A developer who cares about the details.</h2></div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-10">
          <p className="max-w-2xl text-xl leading-9 text-[#8F9B8F]">I&apos;m Muhammad Mustafa Ali, a full-stack developer focused on building clean, functional, and user-friendly digital products. I enjoy taking an idea from its first sketch to a dependable, deployed experience.</p>
          <div className="grid gap-8 border-t border-[#1F2937] pt-8 sm:grid-cols-2">
            <div>
              <span className="eyebrow">Approach</span>
              <ul className="mt-5 space-y-3 text-sm text-[#E2E8F0]">{["Thoughtful interfaces", "Clean architecture", "Production-minded delivery"].map((item) => <li key={item} className="flex items-center gap-3"><Check size={15} className="text-[#22C55E]" /> {item}</li>)}</ul>
              <div className="mt-8 border-t border-[#1F2937] pt-6">
                <span className="eyebrow">Current focus</span>
                <ul className="mt-5 space-y-4 text-sm text-[#8F9B8F]">
                  <li className="flex gap-3"><Layers3 size={16} className="mt-0.5 shrink-0 text-[#22C55E]" /><span><strong className="font-normal text-[#E2E8F0]">Personal builds</strong><br />Turning ideas into useful, polished products.</span></li>
                  <li className="flex gap-3"><FlaskConical size={16} className="mt-0.5 shrink-0 text-[#22C55E]" /><span><strong className="font-normal text-[#E2E8F0]">Technical experiments</strong><br />Exploring better systems, tools, and interactions.</span></li>
                </ul>
              </div>
            </div>
            <div>
              <span className="eyebrow">Education</span>
              <div className="mt-5 flex gap-3 text-sm">
                <GraduationCap size={18} className="shrink-0 text-[#22C55E]" />
                <p className="text-[#8F9B8F]">Bachelor&apos;s Degree in Computer Science<br /><span className="text-[#E2E8F0]">Federal Urdu University · 2022–Present</span></p>
              </div>
              <div className="mt-8 border-t border-[#1F2937] pt-6">
                <span className="eyebrow">Certifications</span>
                <ul className="mt-5 space-y-4 text-sm leading-6 text-[#8F9B8F]">
                  <li className="flex gap-3"><Award size={17} className="mt-1 shrink-0 text-[#22C55E]" /><span><span className="text-[#E2E8F0]">JavaScript Essentials I &amp; II</span><br />Cisco · October 2024</span></li>
                  <li className="flex gap-3"><Award size={17} className="mt-1 shrink-0 text-[#22C55E]" /><span><span className="text-[#E2E8F0]">Web and Mobile App Development</span><br />Saylani Mass IT Training Center · 2023–2024</span></li>
                </ul>
              </div>
            </div>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#22C55E]">Let&apos;s build something <ArrowUpRight size={15} /></a>
        </motion.div>
      </div>
    </section>
  );
}
