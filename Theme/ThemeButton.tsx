"use client"
import React, { useRef } from 'react'
import IconSun from '../components/icons/sun'
import IconBxsMoon from '../components/moon'

export const ThemeButton = () => {
    const themeRef = useRef("light")
     
    const handleClick = ()=>{
        let body=document.body
        if (body.dataset.theme==="light"){
            body.dataset.theme="dark"
            themeRef.current="dark"
        }else {
            body.dataset.theme="light"
            themeRef.current="light"
        }
        
    }
  return (
    <button
    data-button="theme"
    className='w-11 h-11 rounded-md flex items-center
    px-3'
    onClick={handleClick}>
        {themeRef.current==="light"?
        <IconSun/> :<IconBxsMoon/>
    }
    </button>
  )
}
