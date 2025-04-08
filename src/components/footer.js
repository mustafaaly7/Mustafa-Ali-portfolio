import { GithubOutlined, LinkedinFilled, MailOutlined, PinterestFilled } from "@ant-design/icons";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-xl">© 2024 Muhammad Mustafa Ali. All rights reserved.</p>
                <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
                    <Link href="https://github.com/mustafaaly7" className="text-2xl text-gray-400 hover:text-white "> < GithubOutlined className="text-gray-200" />GitHub</Link>
                    <Link href="https://www.linkedin.com/in/mustafa-ali-74a769222/" className="text-2xl  text-gray-400 hover:text-white "><LinkedinFilled className="text-[#0077B5]" />LinkedIn</Link>

                    <Link href="mailto:ma7332267@gmail.com" className="text-2xl text-gray-400 hover:text-white "> <MailOutlined className="text-red-500" />Gmail</Link>
                    
                </div>
            </div>
        </footer>

    )
}