import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NXX Admin',
  description: 'NXX Dashboard Generation APP', 
  icons: {
    icon: '/iconPOM.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-200"}>{children}</body>
    </html>
  )
}
