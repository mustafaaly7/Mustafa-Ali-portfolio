import './globals.css'
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

export const metadata = {
  title: "Muhammad Mustafa Ali | Full-Stack Developer",
  description: 'Full-stack developer building thoughtful, production-ready web experiences with MERN and Next.js.',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${manrope.variable} ${mono.variable}`}>
      <head>
         <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WCB6PFJFB1"></Script>
<Script id="google-analytics">
{`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-WCB6PFJFB1');`}
</Script>
        <meta name="p:domain_verify" content="dh=157f065e65e1349ec323709ddd833d58117edb7c" />
        <meta name="p:domain_verify" content="307cc5d6404d5724d9d08b8f78395295"/>
      </head>
     
      <body>{children}</body>
    </html>
  )
}
