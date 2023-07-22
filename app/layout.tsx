import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Jem Piano Studio",
  description: 'Learn Piano With a Structured Curriculum and Interest-based Approach',

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <script src="/scripts/flowbite.min.js" async></script>
      </body>
    </html>

  )
}
