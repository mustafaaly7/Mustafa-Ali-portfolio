import Image from 'next/image';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6">
            <div className="text-center max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight">
                    Hi, I'm Muhammad Mustafa Ali
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 text-gray-300 font-medium">
                    A Passionate Web Developer
                </h2>
                <p className="text-gray-400 mt-6 text-lg md:text-xl leading-relaxed">
                    I specialize in building high-quality web applications using HTML&rsquo; CSS&rsquo; JavaScript&rsquo; Tailwind CSS&rsquo; Firebase&rsquo; MongoDB&rsquo; Next.js&rsquo; React.js&rsquo; and Bootstrap.
                </p>
                <div className="mt-8">
                    <a href="#contact" className="px-8 py-3 text-lg font-medium bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition">
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="mt-10 relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <Image
                    src={"/images/profile.jpg"}  // Update this path to your actual image path
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
