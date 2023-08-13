import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import ReactThemeProvider from '../Theme/ThemeContext'
import NotificationProvider from '../contexts/NotificationContext'
import ContextConsumer from '../Theme/ContextConsumer'
import { Footer } from '../components/footer'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'



const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
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
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender}