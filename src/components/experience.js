"use client"; // Only this component is client-side for animations

import { motion } from "framer-motion";
import Image from "next/image";

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-light-gray py-12">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-blue-500 text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        {/* ================= Remote Experience ================= */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo / Placeholder */}
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-blue-500 font-bold text-xl">
              REM
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <h3 className="text-white text-2xl font-semibold">
               Full Stack Developer (Remote)
            </h3>
            <p className="text-gray-200 italic">
              Freelance / Remote · Jan 2025 – Present
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
              <li>
                Built and shipped full-stack MERN applications from scratch,
                handling both frontend and backend development.
              </li>
              <li>
                Designed REST APIs, authentication flows, and database schemas
                using MongoDB, Express, and Node.js.
              </li>
              <li>
                Developed responsive, production-ready interfaces using React,
                Next.js, and Tailwind CSS.
              </li>
              <li>
                Worked remotely on real-world projects with a strong focus on
                scalability, performance, and clean architecture.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* ================= Saylani Experience ================= */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-blue-500 font-bold text-xl">
              ST
            </div>
          
          </motion.div>

          {/* Content */}
          <div>
            <h3 className="text-white text-2xl font-semibold">
              MERN Stack Intern
            </h3>
            <p className="text-gray-200 italic">
              Saylani Tech · Jul 2025 – Oct 2025
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
              <li>
                Developed responsive web applications using MongoDB, Express,
                React, and Node.js.
              </li>
              <li>
                Built backend APIs and contributed to internal tools and MVP
                products.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver features from
                planning to deployment.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* ================= Tech Spark Experience ================= */}
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo / Placeholder */}
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-blue-500 font-bold text-xl">
              TS
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <h3 className="text-white text-2xl font-semibold">
              Junior Full Stack Developer (MERN)
            </h3>
            <p className="text-gray-200 italic">
              Tech Spark · Oct 2025 – Feb 2026
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
              <li>
                Maintained and enhanced a live production application, resolving
                critical bugs and improving system stability.
              </li>
              <li>
                Implemented new features in an existing codebase while ensuring
                backward compatibility and clean releases.
              </li>
              <li>
                Worked on production deployments, handling real-world edge
                cases, hotfixes, and iterative updates.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
