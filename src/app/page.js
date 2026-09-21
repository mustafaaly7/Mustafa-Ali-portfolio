import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import GithubContributions from "@/components/githubContribution";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/project";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <GithubContributions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
