"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import useStore from '../zustand/store'
import CheckoutPortal from './CheckoutPortal'
import IconEcommerce_cart_content from './icons/CartEmpty'
import IconMenuLeftAlt from './icons/hamburgert'
import { Hamburger } from './Hamburger'
import { ThemeButton } from '../Theme/ThemeButton'

export const Header = () => {
    const {modal,setModal,count,total}=useStore()
    const [isHamburger,setIsHamburger]=useState<boolean>(false)
    console.log(count)
  return (
    <header
    
    >
        <nav>
           <section className='header__section'>

           
         
          
      
            {modal? <CheckoutPortal/>:<div></div>}
            <button
            onClick={()=>setIsHamburger(true)}
            className='flex flex-row sm:hidden'
            >
                <IconMenuLeftAlt/>
            </button>
            <Link 
            className='
            rounded-full px-3 py-1 bg-[var(--bg-3)]
            sm:flex hidden h-11 items-center
            
            '
            href={"/"}>Home</Link>
            <button 
            className='
            ml-auto rounded-full bg-[var(--bg-3)]
            flex flex-row items-center gap-1 px-3 py-1
            h-11'
            onClick={()=>setModal()}>
                
                <IconEcommerce_cart_content/>
                <span
                className='flex flex-row items-center
                 gap-1 px-3
                '
                >{count}</span>
                <span>{(0.01*total).toLocaleString('en-GB',{
            style:"currency",currency:"GBP"
          })}</span>
            </button>
            <ThemeButton/> 
            </section>
            <div
            style={{display:isHamburger?"":"none"}}
            data-theme="light"
            className='hamburger__blur'
            onClick={()=>setIsHamburger(false)}
            ></div>
             
            <Hamburger open={isHamburger}/>
        </nav>
    </header>
  )
}
