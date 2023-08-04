"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import IconShop from './icons/shop2';
import IconHome_door from './icons/home';
import IconInfoSquare from './icons/about';
import { usePathname } from 'next/navigation';
import { useReactTheme } from '../Theme/ThemeContext';
interface theProps {
    open:boolean;
    setOpen:Function;
}
export const Hamburger = ({setOpen,open}:theProps) => {
  const {theme}=useReactTheme()
  const pathname = usePathname()
  const selectedStyles = {
    opacity:"1",
    border: "1px dashed var(--bg-1)"
  }
  
  return (
    <div className={`hamburger ${open? "open":""}`}>
        <nav className='flex flex-col py-10 px-3
        items-center w-full gap-3 
        '>  
              <div className='
              px-3 py-2 
              flex flex-row items-center
              w-full flex-nowrap
              '>
                <div
                
                className='font-medium flex flex-row items-center
                gap-1 flex-nowrap'
                >
                  <div
                  data-theme="light"
                  className='icon'
                  ><IconShop/></div>
                  sideStore</div>
              
              </div>

                <Link 
                style={pathname==="/"?{...selectedStyles}:{}}
                onClick={()=>setOpen(false)}
                className={`hamburger__button ${theme} ${pathname==="/"?"selected":""}`}
                href={"/"}> <IconHome_door/> Home</Link>
                 <Link 
                   style={{opacity:pathname==="/about"?"1":""}}
                onClick={()=>setOpen(false)}
                className={`hamburger__button ${theme}`}
                href={"/about"}> <IconInfoSquare/> About</Link>
                
        </nav>
    </div>
  )
}
