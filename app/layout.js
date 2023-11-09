import { Footer, Nav } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gulbenk & Co',
  description: 'The highest standard of Camera tech.',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
      
      {children}

      </body>
    </html>
  )
}