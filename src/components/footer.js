"use client"; // Only this component is client-side for animations

import { motion } from "framer-motion";
import { GithubOutlined, LinkedinFilled, MailOutlined, PinterestFilled } from "@ant-design/icons";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center">
                <motion.p
                    className="text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    © 2024 Muhammad Mustafa Ali. All rights reserved.
                </motion.p>

                <motion.div
                    className="mt-4 flex justify-center items-center gap-4 flex-wrap"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Link href="https://github.com/mustafaaly7" className="text-2xl text-gray-400 hover:text-white ">
                        <GithubOutlined className="text-gray-200" /> GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/mustafa-ali-74a769222/" className="text-2xl  text-gray-400 hover:text-white ">
                        <LinkedinFilled className="text-[#0077B5] bg-white" /> LinkedIn
                    </Link>
                    <Link href="mailto:mustafaaaly27@gmail.com" className="text-2xl text-gray-400 hover:text-white ">
                        <MailOutlined className="text-red-500" /> Gmail
                    </Link>
                </motion.div>
            </div>
        </footer>
    )
}
