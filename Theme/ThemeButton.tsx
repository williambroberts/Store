"use client"
import React, { useLayoutEffect, useRef } from 'react'
import IconSun from '../components/icons/sun'
import IconBxsMoon from '../components/moon'
import useStore from '../zustand/store'
import { useTheme } from './ThemeContext'

export const ThemeButton = () => {
    const {theme,updateTheme}=useTheme()
    
    const themeChange = ()=>{
        updateTheme()
    }
    useLayoutEffect(()=>{
        let body=document.body
        let headerLink=body.querySelectorAll('[data-id="header__link"]')
        headerLink.forEach((link: HTMLElement)=>{
            link.dataset.theme=theme
        })
        //body.dataset.theme=theme
    },[])
  return (
    <button
    data-button="theme"
    className='w-11 h-11 rounded-md flex items-center
    px-3'
    onClick={()=>themeChange()}>
        {theme==="light"?
        <IconSun/> :<IconBxsMoon/>
    }
    </button>
  )
}
