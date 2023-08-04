"use client"
import React from 'react'
import { useTheme } from './ThemeContext'

export const ContextConsumer = ({children}:{children:React.ReactNode  }) => {
    const {theme}=useTheme()
    console.log(theme)
  return (
    <div
    className='w-[100vw] h-[100vh]
     flex flex-col 
     bg-[var(--bg-1)]
     text-[var(--t-1)]
     items-center'
    data-theme={theme}
    >
        {children}
    </div>
  )
}
