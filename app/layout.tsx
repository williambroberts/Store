
import Script from 'next/script'
import ContextConsumer from '../Theme/ContextConsumer'
import ReactThemeProvider from '../Theme/ThemeContext'
import { Header } from '../components/Header'
import { Footer } from '../components/footer'


import '../styles/globals.css'
import { Inter } from 'next/font/google'
import NotificationProvider from '../contexts/NotificationContext'
import { SideBar } from '../components/SideBar'
import ErrorBoundary  from '../utils/Errors/ErrorBoundary'

import { QueryProvider } from '../contexts/QueryProvider'
import { AuthProvider } from '../contexts/AuthProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default:"sideStore",
    template:" %s | SS"
  },
  description: 'An online photograph store with premium photos  ',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
     
      className={`${inter.className}`}>
        <ErrorBoundary>
          <QueryProvider>
        <ReactThemeProvider>
          <NotificationProvider>
            <AuthProvider>    
          <ContextConsumer>
        {children}
        <Footer/>
        <Header/>
        <SideBar/>
        <div id="portal"></div>
        <div id="notification"></div>
        </ContextConsumer>   
        </AuthProvider>
        </NotificationProvider>
        </ReactThemeProvider>   
        </QueryProvider>
        </ErrorBoundary>
        </body>
    </html>
  )
}
