export default function About() {
    return (
        <section id="about" className="py-20 bg-black text-light-gray">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">About Me</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-white mb-3">Introduction</h3>
                        <p className="text-gray-400">
                          <span className="font-semibold text-xl">  I&apos;m Muhammad Mustafa Ali&#44;</span> a web developer with a passion for building clean&#44; functional&#44; and user-friendly websites.
                            I specialize in front-end development using technologies like React&#44; Next.js&#44; and Tailwind CSS&#44; and I have a strong background in working with Firebase and MongoDB.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-white mb-3">Skills & Expertise</h3>
                        <ul className="list-disc pl-5 text-gray-400">
                            <li>HTML&#44; CSS&#44; JavaScript</li>
                            <li>React&#44; Next.js</li>
                            <li>Tailwind CSS&#44; Bootstrap</li>
                            <li>Firebase&#44; MongoDB</li>
                            <li>Responsive Web Design</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
                    <h3 className="text-xl font-semibold text-white mb-3">Education & Certifications</h3>
                    <p className="text-gray-400">
                        Bachelor&apos;s Degree in Computer Science - Federal Urdu University (2022 - Present)
                    </p>
                    <p className="text-gray-400 mt-4">
                       <span className="text-xl font-semibold text-white mb-3"> Certifications:</span>
                        <ul className="list-disc pl-5">
                            <li>
                        Javascript Essential  - Cisco  (October-2024)
                    </li>
                            <li>
                            web and mobile app development - Saylani Mass IT Training Center (2023 - 2024)
                    </li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>
    );
}
