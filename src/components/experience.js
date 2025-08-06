"use client"; // Only this component is client-side for animations

import { motion } from "framer-motion";
import Image from "next/image";

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-light-gray py-12">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className=" text-blue-500 text-4xl font-bold mb-8 "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        {/* Experience Entry */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo / Company Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/images/saylani.jpeg" 
              alt="Company Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </motion.div>

          {/* Role and Details */}
          <div>
            <h3 className="text-white text-2xl font-semibold">
              MERN Stack Intern
            </h3>
            <p className="text-gray-200 italic">Saylani Tech | 15 July 2025- Present</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
              <li>Developed responsive web applications using MongoDb&#44;ExpressJs&#44;ReactJs&#44;NodeJs</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
