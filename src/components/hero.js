"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

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
        <section className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6">
            <div className="text-center max-w-3xl my-5">
                <motion.h1
                    initial={{ scale: 1.1 }}
                    animate={{ scale: [1.1, 0.95, 1.1] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut'
                    }}
                    className="text-2xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight"
                >
                    Hi, I&apos;m Muhammad Mustafa Ali
                </motion.h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 text-gray-300 font-medium">
                    Web | MERN Stack Developer
                </h2>
                <p className="text-gray-400 mt-6 text-lg md:text-xl leading-relaxed">
                    I specialize in building high-quality web applications using MongoDB, ExpressJS, ReactJS, NodeJS, CSS, Firebase, MongoDB, Next.js, Tailwind CSS, and Bootstrap.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
                    <a href="#contact" className="px-8 py-3 text-lg font-medium bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition">
                        Contact Me
                    </a>
                    <button
                        onClick={handleDownload}
                        className="px-8 py-3 text-lg font-medium bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
                    >
                        Download CV
                    </button>
                </div>
            </div>

            {/* Profile Image */}
            <div className="mt-10 relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-10">
                <Image
                    src={"/images/profile.jpg"}
                    alt="Muhammad Mustafa Ali"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-blue-500"
                    priority
                />
            </div>
        </section>
    );
}
