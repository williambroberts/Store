"use client"
import React from 'react'
import { useReactTheme } from './ThemeContext'


const ContextConsumer = ({children}:{children:React.ReactNode}) => {
    const {theme,isGreyScale}=useReactTheme()
    return (
    <div 
    id="CC"
    
    className='context__consumer'
    data-theme={theme}
    >
        {children}
    </div>
  )
}

export default ContextConsumer