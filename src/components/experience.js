"use client";

import { motion } from "framer-motion";

const roles = [
  { period: "Oct 2025 — Feb 2026", role: "Junior Full-Stack Developer", company: "Tech Spark", text: "Maintained and enhanced a live production application, shipping features, hotfixes, and iterative improvements while keeping releases stable.", tags: ["Production", "MERN", "Deployments"] },
  { period: "Jul 2025 — Oct 2025", role: "MERN Stack Intern", company: "Saylani Tech", text: "Developed responsive web applications, backend APIs, and internal tools while collaborating with cross-functional teams from planning to deployment.", tags: ["React", "APIs", "Teamwork"] },
  { period: "Jan 2025 — Present", role: "Full-Stack Developer", company: "Freelance / Remote", text: "Building full-stack MERN applications from scratch, including authentication flows, REST APIs, database schemas, and responsive interfaces.", tags: ["Next.js", "Node.js", "MongoDB"] },
];

export default function Experience() {
  return <section id="experience" className="border-b border-[#1F2937] bg-[#0B0F0B] py-24 text-[#E2E8F0]"><div className="shell"><div className="mb-14"><span className="eyebrow">03 / experience</span><h2 className="section-heading mt-5 max-w-xl">Where the work happens.</h2></div><div className="border-t border-[#1F2937]">{roles.map((role, index) => <motion.article key={role.company} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="grid gap-5 border-b border-[#1F2937] py-8 md:grid-cols-[0.3fr_0.7fr] md:gap-12"><p className="font-mono text-xs uppercase tracking-[0.08em] text-[#8F9B8F]">{role.period}</p><div><div className="flex flex-col justify-between gap-2 sm:flex-row"><h3 className="font-display text-2xl tracking-[-0.04em]">{role.role}</h3><span className="font-mono text-xs text-[#22C55E]">@ {role.company}</span></div><p className="mt-4 max-w-2xl text-sm leading-7 text-[#8F9B8F]">{role.text}</p><div className="mt-5 flex flex-wrap gap-2">{role.tags.map((tag) => <span key={tag} className="border border-[#1F2937] px-2 py-1 font-mono text-[10px] uppercase text-[#8F9B8F]">{tag}</span>)}</div></div></motion.article>)}</div></div></section>;
}
