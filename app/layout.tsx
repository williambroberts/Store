import { ContextConsumer } from '../Theme/ContextConsumer'
import ThemeProvider from '../Theme/ThemeContext'
import { Header } from '../components/Header'
import { Footer } from '../components/footer'


import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'sideStore',
  description: 'An online photograph store with premium photos  ',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
     
      className={`${inter.className}`}>
        <ThemeProvider>   
          <ContextConsumer>
          
        {children}
        <Footer/>
        <Header/>
        <div id="portal"></div>
        </ContextConsumer>   
        </ThemeProvider>
        </body>
    </html>
  )
}
