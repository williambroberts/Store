"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'  
import useStore from '../zustand/store'
import CheckoutPortal from './Portals/CheckoutPortal'

import IconMenuLeftAlt from './icons/hamburgert'
import { Hamburger } from './Hamburger'
import ReactColorThemeButton from '../Theme/ThemeButton'



import { PersistReset } from './PersistReset'
import { SearchBarButton } from './SearchBarButton'

import { usePathname } from 'next/navigation'
import { useReactTheme } from '../Theme/ThemeContext'
import { useNotification } from '../contexts/NotificationContext'
import NotificationPortal from './Portals/NotificationPortal'
import { Cart } from './Cart'
import { GreyScaleButton } from '../Theme/GreyScaleButton'
import { HeaderMenu } from './HeaderMenu'
import { FirstVisitPortal } from './Portals/FirstVisitPortal/FirstVisitPortal'
import { useAuth } from '../contexts/AuthProvider'
import { Logoutbutton } from './Auth/Logoutbutton'
import { refreshApi } from '../utils/Fetch/fetchAwake'



export const Header = () => {
  const {theme}=useReactTheme()
  const {notification,firstVisit}=useNotification()
  const {user}=useAuth()
    const {modal}=useStore()
    
  
    const [isHamburger,setIsHamburger]=useState<boolean>(false)
    const pathname=usePathname()
    useEffect(()=>{
      refreshApi()
    },[])
   
 

    useEffect(()=>{
      let htmlTag = document.querySelector("html")
      if (isHamburger){
        htmlTag.style.overflowY="hidden"
      }else if (!isHamburger){
        htmlTag.style.overflowY="scroll"
      }
    },[isHamburger])
    useEffect(()=>{
      
       let htmlTag = document.querySelector("html")
      if (firstVisit){
        htmlTag.style.overflowY="hidden"
      }else if (!isHamburger){
        htmlTag.style.overflowY="scroll"
      }
    },[firstVisit])

   

   //console.warn(user,firstVisit)
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
            aria-label='menu'
            onClick={()=>setIsHamburger(true)}
            className='flex flex-row sm:hidden 
            text-[var(--t-1)]
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
             {user?.isAuth?<div className='header__link'><Logoutbutton/></div>: <Link
             data-id="header__link"
            className={`
            header__link
            ${pathname==="/login"?"active":""}
            `}
            href={"/login"}>Login</Link> }
            <HeaderMenu/>
             </div>
             

            <SearchBarButton/>
            <ReactColorThemeButton/>
            <GreyScaleButton/>
           <div className='ml-auto sm:flex hidden'><Cart/></div>
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
