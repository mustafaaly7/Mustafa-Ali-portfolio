export default function SkillCard({ Icon, label }) {
    const iconStyles = {
        HTML: "text-orange-500",
        CSS: "text-blue-600",
        JavaScript: "text-yellow-500 bg-black",
        ReactJs: "text-cyan-400",
        NextJs: "text-white",
        MongoDB: "text-green-600",
        Firebase: "text-yellow-500",
        TailwindCSS: "text-cyan-400",
        Github: "text-white",
        Bootstrap: "text-indigo-600",
        Aseprite: "text-white",
        Postman: "text-orange-500",
        ExpressJs: "text-green-600",
        NodeJs: "text-green-600",
        Pinterest: "text-red-500",
        Teamwork: "text-green-400",
        Leadership: "text-blue-500",
        QuickLearner: "text-purple-500",
        Typescript: "text-blue-600 bg-white",
        Vite: "text-indigo-400",
        VsCode:"text-[#007ACC]",
        Canva: "text-[#00C4CC]",
      };
    


    return (
      <div className="flex flex-col items-center">
         <Icon className={`${iconStyles[label] || 'text-blue-400'} text-4xl mb-2`} />
        <p className="text-gray-400 text-xl font-semibold">{label}</p>
      </div>
    );
  }