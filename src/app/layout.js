import { icons } from 'lucide-react'
import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata = {
  title: "Mustafa's Portfolio",
  description: 'Web Developer | Mern Stack ',
  
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <meta name="p:domain_verify" content="dh=157f065e65e1349ec323709ddd833d58117edb7c" />
        <meta name="p:domain_verify" content="307cc5d6404d5724d9d08b8f78395295"/>
        <title>Mustafa Portfolio </title>
      </head>
      <body className={roboto_mono.className}>{children}</body>
    </html>
  )
}
