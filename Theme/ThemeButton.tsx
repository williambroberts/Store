"use client"
import React, { useLayoutEffect, useRef } from 'react'
import IconSun from '../components/icons/sun'
import IconBxsMoon from '../components/moon'
import useStore from '../zustand/store'
import { useTheme } from './ThemeContext'

export const ThemeButton = () => {
    const {theme,updateTheme}=useTheme()
    
    const handleClick = ()=>{
        
        let body=document.body
        if (body.dataset.theme==="light"){
            body.dataset.theme="dark"
           updateTheme("dark")
           
        }else {
            body.dataset.theme="light"
           updateTheme("light")
        }
        
    }
    useLayoutEffect(()=>{
        let body=document.body
        body.dataset.theme=theme
    },[])
  return (
    <button
    data-button="theme"
    className='w-11 h-11 rounded-md flex items-center
    px-3'
    onClick={handleClick}>
        {theme==="light"?
        <IconSun/> :<IconBxsMoon/>
    }
    </button>
  )
}
