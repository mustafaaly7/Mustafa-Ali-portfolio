"use client"; // Only this component will be client-side for animations

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-black text-light-gray">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl font-bold text-white mb-6 "
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div className="">
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-white mb-3">Introduction</h3>
                        <p className="text-gray-400">
                            <span className="font-semibold text-xl">  I&apos;m Muhammad Mustafa Ali&#44;</span> a Web Developer with a passion for building clean&#44; functional&#44; and user-friendly websites.
                            I specialize in Full-Stack development using technologies like React&#44; Next.js&#44; and Tailwind CSS&#44; NodeJs&#44; Express Js&#44; MongoDb&#44; Postgresql&#44; Vercel&#44; Github &#38; Render
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold text-white mb-3">Education & Certifications</h3>
                    <p className="text-gray-400">
                        Bachelor&apos;s Degree in Computer Science - Federal Urdu University (2022 - Present)
                    </p>
                    <p className="text-gray-400 mt-4">
                        <span className="text-xl font-semibold text-white mb-3"> Certifications:</span>
                        <ul className="list-disc pl-5">
                            <li>
                                Javascript Essential I  - Cisco  (October2024)
                            </li>
                            <li>
                                Web and Mobile App Development - Saylani Mass IT Training Center (2023 - 2024)
                            </li>
                        </ul>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
