import Image from 'next/image'
import { GithubOutlined } from '@ant-design/icons'  // Import GitHub icon from Ant Design
import Link from 'next/link'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-light-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src="/images/ecommerce.png"  // Replace with your image path in the public folder
              alt="Project 1"
              width={500}
              height={300}
              layout="responsive"  // Ensure the image resizes with the container
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-white mb-3">Project 1</h3>
            <p className="text-gray-400 mb-4">
              A short description of the project, tools used, and what it accomplishes.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link
                href="https://github.com/mustafaaly7/Ecommerce-demo"
                 target="_blank"
                rel="noopener noreferrer"
              >
              <button
               
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2"
              >
                <GithubOutlined /> {/* GitHub Icon */}
                <span>View on GitHub</span>
              </button>
              </Link>
              <Link href="https://ecommerce-demo-self.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-300">
                Live Demo
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src="/images/project2.jpg"  // Replace with your image path in the public folder
              alt="Project 2"
              width={500}
              height={300}
              layout="responsive"  // Ensure the image resizes with the container
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-white mb-3">Project 2</h3>
            <p className="text-gray-400 mb-4">
              Another project description goes here. You can highlight what makes it unique.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2"
              >
                <GithubOutlined /> {/* GitHub Icon */}
                <span>View on GitHub</span>
              </button>
              <a href="https://your-deployment-link.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-300">
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src="/images/project3.jpg"  // Replace with your image path in the public folder
              alt="Project 3"
              width={500}
              height={300}
              layout="responsive"  // Ensure the image resizes with the container
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-white mb-3">Project 3</h3>
            <p className="text-gray-400 mb-4">
              Here you can describe another project. Mention any notable features or challenges.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2"
              >
                <GithubOutlined /> {/* GitHub Icon */}
                <span>View on GitHub</span>
              </button>
              <a href="https://your-deployment-link.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-300">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
