import Image from 'next/image'
import { GithubOutlined } from '@ant-design/icons'  // Import GitHub icon from Ant Design
import Link from 'next/link'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-light-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-6 ">Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/ecommerce.png"  // Replace with your image path in the public folder
                alt="Ecommerce Website"
                layout="fill"  // Ensures the image fills the container
                objectFit="contain"  // Display the whole image without cropping
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Ecommerce Website</h3>
            <p className="text-gray-400 mb-4">
              Ecommerce website using Reactjs&#44; Firebase&#44; Tailwind Css&#44; DummyJson API
            </p>
            <div className="flex flex-col justify-around items-center sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link
                href="https://github.com/mustafaaly7/Ecommerce-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2">
                  <GithubOutlined />
                  <span>View on GitHub</span>
                </button>
              </Link>
              <Link href="https://ecommerce-demo-self.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="text-center bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-300">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>

          {/* Additional projects... */}

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/ebook.png"
                alt="Ebook-Store"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Ebook Store</h3>
            <p className="text-gray-400 mb-4">
              Ebook App using MongoDb&#44; ExpressJS&#44; ReactJS&#44; NodeJS. Full responsive with public and private routes. Admin Panel&#44; Authorization &#44; Order Tracking etc.
            </p>
            <div className="flex flex-col justify-around items-center sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link href="https://github.com/mustafaaly7/Mern-Ecommerce-Frontend" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2">
                  <GithubOutlined />
                  <span>View on GitHub</span>
                </button>
              </Link>
              <Link href="https://mern-ecommerce-frontend-murex.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="text-center bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-300">
                  Live Demo
                </button>
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/chatApp.png"
                alt="Project 3"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Chat App</h3>
            <p className="text-gray-400 mb-4">
            Chat App using MERN Stack, DaisyUI, Socket.io & Deployed On Render & Vercel.
            </p>
            <div className="flex flex-col justify-around items-center sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link href="https://github.com/mustafaaly7/Chat-App" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2">
                  <GithubOutlined />
                  <span>View on GitHub</span>
                </button>
              </Link>
              <Link href="https://chatty-black-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-center bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-300">
                Live Demo
              </Link>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/va.png"
                alt="Virtual Assistant"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Virtual Assitant</h3>
            <p className="text-gray-400 mb-4">
              Used Html&#44; css&#44; Javascript&#44; and Speech synthesis functions to recognize voice and act accordingly.
            </p>
            <div className="flex flex-col justify-around items-center sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Link href="https://github.com/mustafaaly7/virtual-assistant-on-js" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-4 py-2">
                  <GithubOutlined />
                  <span>View on GitHub</span>
                </button>
              </Link>
              <Link href="https://virtual-assistant-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-center bg-blue-400 text-black px-4 py-2 rounded-lg hover:bg-blue-300">
                Live Demo
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
