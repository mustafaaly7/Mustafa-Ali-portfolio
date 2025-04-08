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
import { SiAdobeillustrator } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPinterest } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { FaPeopleCarry } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaAngular } from "react-icons/fa";


export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-black text-light-gray">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-8">
                <h2 className="text-4xl font-bold  mb-6 font-sans text-blue-500 ">Skills</h2>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-y-8 gap-x-4 text-center">
                    {/* Main Skills */}
                    <SkillCard Icon={FaHtml5} label="HTML" />
                    <SkillCard Icon={FaCss3} label="CSS" />
                    <SkillCard Icon={IoLogoJavascript} label="JavaScript" />
                    <SkillCard Icon={FaReact} label="ReactJs" />
                    <SkillCard Icon={SiNextdotjs} label="Next.js" />
                    <SkillCard Icon={SiMongodb} label="MongoDB" />
                    <SkillCard Icon={IoLogoFirebase} label="Firebase" />
                    <SkillCard Icon={RiTailwindCssFill} label="Tailwind CSS" />
                    <SkillCard Icon={FaGithub} label="Github" />
                    <SkillCard Icon={FaBootstrap} label="Bootstrap" />
                    <SkillCard Icon={SiAseprite} label="Aseprite" />
                    <SkillCard Icon={SiPostman} label="Postman" />
                    <SkillCard Icon={SiExpress} label="ExpressJs" />
                    <SkillCard Icon={IoLogoNodejs} label="NodeJs" />
                    <SkillCard Icon={SiTypescript} label="Typescript" />
                    <SkillCard Icon={SiNestjs} label="NestJs" />
                    <SkillCard Icon={SiVite} label="Vite" />
                    <SkillCard Icon={FaAngular} label="AngularJs" />

                </div>
                </div>
            </div>
        </section>
    );
}