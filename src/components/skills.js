"use client";
import { motion } from "framer-motion";
import SkillCard from "./skillcard";
import { SiAseprite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
// import { SiCanva } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";


export default function Skills() {
    const skills = [
        { Icon: FaHtml5, label: "HTML" },
        { Icon: FaCss3, label: "CSS" },
        { Icon: IoLogoJavascript, label: "JavaScript" },
        { Icon: SiMongodb, label: "MongoDB" },
        { Icon: SiExpress, label: "ExpressJs" },
        { Icon: FaReact, label: "ReactJs" },
        { Icon: IoLogoNodejs, label: "NodeJs" },
        { Icon: SiNextdotjs, label: "NextJs" },
        { Icon: IoLogoFirebase, label: "Firebase" },
        { Icon: RiTailwindCssFill, label: "Tailwind CSS" },
        { Icon: FaGithub, label: "Github" },
        { Icon: FaBootstrap, label: "Bootstrap" },
        { Icon: SiAseprite, label: "Aseprite" },
        { Icon: SiPostman, label: "Postman" },
        { Icon: SiTypescript, label: "Typescript" },
        { Icon: SiVite, label: "Vite" },
        { Icon: SiPostgresql, label: "Postgresql" },
        { Icon: SiSocketdotio, label: "Socket" },
    ];

    return (
        <section id="skills" className="py-20 bg-black text-light-gray">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-8">
                    <motion.h2
                        className="text-4xl font-bold mb-6 font-sans text-blue-500"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Skills
                    </motion.h2>

                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-y-8 gap-x-4 text-center">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <SkillCard Icon={skill.Icon} label={skill.label} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
