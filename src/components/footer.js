import { GithubOutlined, LinkedinFilled, PinterestFilled } from "@ant-design/icons";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-xl">© 2024 Muhammad Mustafa Ali. All rights reserved.</p>
                <div className="mt-4">
                    <Link href="https://github.com/mustafaaly7" className="text-2xl text-gray-400 hover:text-white mx-4"> < GithubOutlined/>GitHub</Link>
                    <Link href="https://www.linkedin.com/in/mustafa-ali-74a769222/" className="text-2xl  text-gray-400 hover:text-white mx-4"><LinkedinFilled/>LinkedIn</Link>
                    <Link href="https://www.pinterest.com/mustafaaly7/" className="text-2xl text-gray-400 hover:text-white mx-4"> < PinterestFilled/>Pinterest</Link>
                </div>
            </div>
        </footer>

    )
}