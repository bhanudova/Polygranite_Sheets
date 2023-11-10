import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const rly = Raleway({ subsets: ['latin'], weight: '500' })

export const metadata: Metadata = {
  title: 'POLYGRANITE SHEETS',
  description: 'POLYGRANITE SHEETS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rly.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
