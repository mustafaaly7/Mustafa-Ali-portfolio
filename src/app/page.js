import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/project";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Navbar />
<Hero />
<Experience />
<Projects />
<Contact />
   </div>
  );
}
