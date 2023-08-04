"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import useStore from '../zustand/store'
import CheckoutPortal from './CheckoutPortal'
import IconEcommerce_cart_content from './icons/CartEmpty'
import IconMenuLeftAlt from './icons/hamburgert'
import { Hamburger } from './Hamburger'
import ReactColorThemeButton from '../Theme/ThemeButton'


import { Counter } from './Counter'
import { PersistReset } from './PersistReset'
import { SearchBarButton } from './SearchBarButton'
import IconShop from './icons/shop2'
import IconHome_door from './icons/home'
import IconInfoSquare from './icons/about'
import { usePathname } from 'next/navigation'
import { useReactTheme } from '../Theme/ThemeContext'


export const Header = () => {
  const {theme}=useReactTheme()
    const {modal,setModal,count,total}=useStore()
    const prevCount= useRef(0)
  const [cartIcon,setCartIcon]=useState(<IconEcommerce_cart_content/>)
    const [isHamburger,setIsHamburger]=useState<boolean>(false)
    const pathname=usePathname()
    const [viewCheckout,setViewCheckout]=useState<boolean>(false)
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
    
    >
        <nav
        className={
          `${theme==="light"?"light":""}`
      }
        >
           <section className='header__section'>
            <PersistReset/>
           
         
          
      
            {modal? <CheckoutPortal/>:<div></div>}
            <button
            onClick={()=>setIsHamburger(true)}
            className='flex flex-row sm:hidden px-3'
            >
                <IconMenuLeftAlt/>
            </button>
             <div
                  data-theme="light"
                  className='icon'
                  ><IconShop/></div>
            <div
            className='header__link__container'
            >

           
            <Link 
          data-id="header__link"
          
            className={`
           header__link
          
            ${pathname==="/"?"active":""}
            `}
            href={"/"}><IconHome_door/> Home</Link>
             <Link
             data-id="header__link"
            
            className={`
            header__link
            ${pathname==="/about"?"active":""}
           
            `}
            href={"/about"}><IconInfoSquare/> About</Link>
             </div>
            <SearchBarButton/>
            <button 
            onMouseEnter={()=>setViewCheckout(true)}
            onMouseLeave={()=>setViewCheckout(false)}
            className='header__cart
           '
            onClick={()=>setModal()}>
                
                <span
                className='text-xl font-semibold'
                >{cartIcon}</span>
                
                <Counter/>
                <span
                className=''
                >{(0.01*total).toLocaleString('en-GB',{
            style:"currency",currency:"GBP"
          })}</span>
          <div
          style={{display:viewCheckout?"":"none"}}
          data-theme="dark"
          className='flex flex-row w-full absolute py-2 rounded-md
          bg-[var(--bg-1)] opacity-100 left-0
          justify-center font-medium
          '>
            Checkout
          </div>
            </button>
           <ReactColorThemeButton/>
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
