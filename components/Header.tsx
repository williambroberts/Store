"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import useStore from '../zustand/store'
import CheckoutPortal from './Portals/CheckoutPortal'

import IconMenuLeftAlt from './icons/hamburgert'
import { Hamburger } from './Hamburger'
import ReactColorThemeButton from '../Theme/ThemeButton'


import { Counter } from './Counter'
import { PersistReset } from './PersistReset'
import { SearchBarButton } from './SearchBarButton'
import IconHome_door from './icons/home'
import IconInfoSquare from './icons/about'
import { usePathname } from 'next/navigation'
import { useReactTheme } from '../Theme/ThemeContext'
import { useNotification } from '../contexts/NotificationContext'
import NotificationPortal from './Portals/NotificationPortal'
import { Cart } from './Cart'



export const Header = () => {
  const {theme}=useReactTheme()
  const {notification,setNotification}=useNotification()
    const {modal,setModal,count,total}=useStore()
   
  
    const [isHamburger,setIsHamburger]=useState<boolean>(false)
    const pathname=usePathname()
   
    
   

    useEffect(()=>{
      let htmlTag = document.querySelector("html")
      if (isHamburger){
        htmlTag.style.overflowY="hidden"
      }else if (!isHamburger){
        htmlTag.style.overflowY="scroll"
      }
    },[isHamburger])
    

   

   
  return (
    <header
    style={{display:pathname==="/login"||pathname==="/register"?
    "none":""}}
    >
        <nav
        className={
          `${theme==="light"?"light":""}`
      }
        >
          
           <section className='header__section'>
            <PersistReset/>
           
         
          
            {notification.open? <NotificationPortal/> :<div></div>}
            {modal? <CheckoutPortal/>:<div></div>}
            <button
            onClick={()=>setIsHamburger(true)}
            className='flex flex-row sm:hidden 
            text-[#f2f2f2]
            px-3'
            >
                <IconMenuLeftAlt/>
            </button>
           
            <div
            className='sm:flex 
            parent hidden
            flex-row items-center gap-2'
            >

           
            <Link 
          data-id="header__link"
          
            className={`
           header__link
          
            ${pathname==="/"?"active":""}
            `}
            href={"/"}>Home</Link>
             <Link
             data-id="header__link"
            
            className={`
            header__link
            ${pathname==="/about"?"active":""}
           
            `}
            href={"/about"}>About</Link>
              <Link
             data-id="header__link"
            
            className={`
            header__link
            ${pathname==="/login"?"active":""}
           
            `}
            href={"/login"}>Login</Link>
             </div>
            <SearchBarButton/>
            
           <div className='ml-auto sm:flex hidden'><Cart/></div>
           {/* <ReactColorThemeButton/> */}
            </section>
            <div
            style={{display:isHamburger?"":"none"}}
            data-theme="light"
            className='hamburger__blur'
            onClick={()=>setIsHamburger(false)}
            ></div>
             
            <Hamburger
            setOpen={setIsHamburger}
            open={isHamburger}/>
        </nav>
    </header>
  )
}
