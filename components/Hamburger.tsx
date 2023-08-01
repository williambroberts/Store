"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { ThemeButton } from '../Theme/ThemeButton';
import IconShop from './icons/shop';
import IconHome_door from './icons/home';
interface theProps {
    open:boolean;
    setOpen:Function;
}
export const Hamburger = ({setOpen,open}:theProps) => {
  const [theme,setTheme]=useState(()=>{
    
    return "light"
  })
  const handleTheme  = (e)=>{
     let theme = document?.body.dataset.theme
    if (theme&&theme==="light"){
      setTheme("dark")
    }else if(theme&&theme==="dark"){
      setTheme("light")
    }
  }
  useEffect(()=>{
    try {
      let themeButton = document.querySelector('[data-button="theme"]')
      themeButton.addEventListener("click",handleTheme)
    }catch(e){
      console.log(e)
    }
  },[])
  return (
    <div className={`hamburger ${open? "open":""}`}>
        <nav className='flex flex-col py-10 px-3
        items-center w-full
        '>  
              <div className='
              px-3 py-2 
              flex flex-row items-center
              w-full flex-nowrap
              '>
                <span
                className='font-medium flex flex-row items-center
                gap-1 flex-nowrap'
                >
                  <IconShop/>
                  sideStore</span>
                {/* <ThemeButton/> */}
              </div>
                <Link 
                onClick={()=>setOpen(false)}
                className={`hamburger__button ${theme}`}
                href={"/"}> <IconHome_door/> Home</Link>
                
        </nav>
    </div>
  )
}
