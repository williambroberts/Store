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
    
    onClick={handleClick}>
        {themeRef.current==="light"?
        <IconSun/> :<IconBxsMoon/>
    }
    </button>
  )
}
