"use client";
import GitHubCalendar from "react-github-calendar";

const GithubContributions = () => {
  return (
    <section className="bg-black text-light-gray py-12">

    <div className="bg-[#0d1117] text-white p-6 rounded-2xl shadow-lg w-full max-w-5xl mx-auto my-16">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
        My GitHub Contributions
      </h2>
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
    </div>
            </section>
  );
};

export default GithubContributions;
