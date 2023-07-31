import { Header } from '../components/Header'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'A  Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      data-theme="light"
      className={`${inter.className}`}>
        
        {children}
        <Header/>

        <div id="portal"></div>
        </body>
    </html>
  )
}
