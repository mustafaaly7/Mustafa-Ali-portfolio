"use client";

import { motion } from "framer-motion";

const groups = [
	{
		title: "Core Frameworks & Frontend",
		items: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS"],
	},
	{
		title: "Backend & Architecture",
		items: ["NestJS", "Express", "Node.js", "REST APIs", "Socket.io"],
	},
	{
		title: "Databases & Services",
		items: ["MongoDB", "PostgreSQL", "SQL", "NoSQL", "Firebase"],
	},
	{
		title: "Cloud & Deployment",
		items: ["Render", "Railway", "Heroku", "Google Cloud Service", "Vercel"],
	},
	{
		title: "Design & Creative",
		items: ["Canva", "Aseprite", "Adobe Illustrator"],
	},
	{
		title: "Workflow & Tooling",
		items: ["GitHub", "Postman", "Vite"],
	},
];

export default function Skills() {
	return (
		<section id="skills" className="border-b border-[#1F2937] bg-black py-24 text-[#E2E8F0]">
			<div className="shell">
				<div className="mb-12">
					<span className="eyebrow">04 / capabilities</span>
					<h2 className="section-heading mt-5">The tools behind the work.</h2>
				</div>
				<div className="grid border-l border-t border-[#1F2937] sm:grid-cols-2 lg:grid-cols-3">
					{groups.map(({ title, items }, index) => (
						<motion.div
							key={title}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="border-b border-r border-[#1F2937] p-6 lg:p-8"
						>
							<span className="font-mono text-xs uppercase tracking-[0.1em] text-[#22C55E]">
								0{index + 1} / {title}
							</span>
							<div className="mt-6 flex flex-wrap gap-2">
								{items.map((item) => (
									<span key={item} className="bg-[#141A14] px-3 py-2 text-sm text-[#E2E8F0]">
										{item}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
