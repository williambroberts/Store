
import Script from 'next/script'
import ContextConsumer from '../Theme/ContextConsumer'
import ReactThemeProvider from '../Theme/ThemeContext'
import { Header } from '../components/Header'
import { Footer } from '../components/footer'


import '../styles/globals.css'
import { Inter } from 'next/font/google'
import NotificationProvider from '../contexts/NotificationContext'
import { SideBar } from '../components/SideBar'

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
   
        <ReactThemeProvider>
          <NotificationProvider>
          <ContextConsumer>
        {children}
        <Footer/>
        <Header/>
        <SideBar/>
        <div id="portal"></div>
        <div id="notification"></div>
        </ContextConsumer>   
        </NotificationProvider>
        </ReactThemeProvider>   
        </body>
    </html>
  )
}
