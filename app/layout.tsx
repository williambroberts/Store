
import Script from 'next/script'
import ContextConsumer from '../Theme/ContextConsumer'
import ReactThemeProvider from '../Theme/ThemeContext'
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
      {/* <Script id="show-banner" strategy="lazyOnload">
        
  {`document.getElementById(CC).dataset.theme=${"dark"}`}
</Script> */}
        <ReactThemeProvider>
          
          <ContextConsumer>
          
        {children}
        <Footer/>
        <Header/>
        <div id="portal"></div>
        </ContextConsumer>   
        </ReactThemeProvider>   
        </body>
    </html>
  )
}
