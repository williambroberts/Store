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
import IconShop from './icons/shop'
import { Counter } from './Counter'
import { PersistReset } from './PersistReset'
import { SearchBarButton } from './SearchBarButton'

export const Header = () => {
    const {modal,setModal,count,total}=useStore()
    const prevCount= useRef(0)
  const [cartIcon,setCartIcon]=useState(<IconEcommerce_cart_content/>)
    const [isHamburger,setIsHamburger]=useState<boolean>(false)
    
    const [viewCheckout,setViewCheckout]=useState<boolean>(false)
    useEffect(()=>{
      let htmlTag = document.querySelector("html")
      if (isHamburger){
        htmlTag.style.overflowY="hidden"
      }else if (!isHamburger){
        htmlTag.style.overflowY="scroll"
      }
    },[isHamburger])
    
    useEffect(()=>{
      return ()=>{
        if (prevCount.current<count){
          setCartIcon(<IconEcommerce_cart_check/>)
        }else if (prevCount.current>count){
          setCartIcon(<IconEcommerce_cart_remove/>)
        }else if (count===0){
          setCartIcon(<IconEcommerce_cart_content/>)
        }
        prevCount.current=count
      }
      
      
    },[count])

   
  return (
    <header
    
    >
        <nav>
           <section className='header__section'>
            <PersistReset/>
           
         
          
      
            {modal? <CheckoutPortal/>:<div></div>}
            <button
            onClick={()=>setIsHamburger(true)}
            className='flex flex-row sm:hidden'
            >
                <IconMenuLeftAlt/>
            </button>
            <Link href={"/"}
            className=' flex-row items-center
            gap-1 px-4
            hidden sm:flex
            '
            >
              <IconShop/> <span
              className='sm:flex hidden'
              >SideStore</span>
            </Link>
            <Link 
            className='
            rounded-full px-3 py-1 bg-[var(--bg-2)]
            sm:flex hidden h-11 items-center
            
            '
            href={"/"}>Home</Link>
            <SearchBarButton/>
            <button 
            onMouseEnter={()=>setViewCheckout(true)}
            onMouseLeave={()=>setViewCheckout(false)}
            className='
            ml-auto rounded-full bg-[var(--bg-2)]
            flex flex-row relative
            hover:opacity-100 opacity-70
            items-center gap-1 px-3 py-1
            h-11'
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
          className='flex flex-row w-full absolute py-2 rounded-full
          bg-[var(--bg-1)] opacity-100 left-0
          justify-center
          '>
            checkout
          </div>
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
