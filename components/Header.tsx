"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import useStore from '../zustand/store'
import CheckoutPortal from './CheckoutPortal'
import IconEcommerce_cart_content from './icons/CartEmpty'
import IconMenuLeftAlt from './icons/hamburgert'
import { Hamburger } from './Hamburger'
import { ThemeButton } from '../Theme/ThemeButton'
import IconEcommerce_cart_check from './icons/CartAdd'
import IconEcommerce_cart_remove from './icons/CartX'

export const Header = () => {
    const {modal,setModal,count,total}=useStore()
    const prevCount= useRef(0)
  const [cartIcon,setCartIcon]=useState(<IconEcommerce_cart_content/>)
    const [isHamburger,setIsHamburger]=useState<boolean>(false)
    
    
    useEffect(()=>{
      if (prevCount.current<count){
        setCartIcon(<IconEcommerce_cart_check/>)
      }else if (prevCount.current>count){
        setCartIcon(<IconEcommerce_cart_remove/>)
      }
      prevCount.current=count
      
    },[count])
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
            flex flex-row 
            hover:opacity-100 opacity-70
            items-center gap-1 px-3 py-1
            h-11'
            onClick={()=>setModal()}>
                
                {cartIcon}
                <span
                className='flex flex-row items-center
                 gap-1 px-3 
                '
                >{count}</span>
                <span
                className=''
                >{(0.01*total).toLocaleString('en-GB',{
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
             
            <Hamburger
            setOpen={setIsHamburger}
            open={isHamburger}/>
        </nav>
    </header>
  )
}
