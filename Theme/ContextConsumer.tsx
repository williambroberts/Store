"use client"
import React from 'react'
import { useReactTheme } from './ThemeContext'


const ContextConsumer = ({children}:{children:React.ReactNode}) => {
    const {theme}=useReactTheme()
    return (
    <div 
    id="CC"
    
    className='flex 
    items-center bg-[var(--bg-1)]
    text-[var(--t-1)]
    flex-col w-full flex-auto'
    data-theme={theme}
    >
        {children}
    </div>
  )
}

export default ContextConsumer