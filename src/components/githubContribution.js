"use client";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

const GithubContributions = () => {
  return (
    <section className="bg-black text-light-gray py-12">
      <motion.div
        className="bg-[#0d1117] text-white p-6 rounded-2xl shadow-lg w-full max-w-5xl mx-auto my-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My GitHub Contributions
        </motion.h2>

        <div className="overflow-x-auto">
          <GitHubCalendar
            username="mustafaaly7"
            blockSize={15}
            blockMargin={5}
            color="#39d353"
            fontSize={14}
            theme={{
              light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default GithubContributions;
