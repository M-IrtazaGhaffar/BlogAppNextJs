import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UPost',
  description: 'A Blog App underconstruction by ITTI Develops',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <nav>
          <Nav />
        </nav>
        <main className='min-h-screen bg-black text-white'>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
