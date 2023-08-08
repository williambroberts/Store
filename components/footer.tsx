"use client"
import React from 'react'
import IconShop from './icons/shop2'
import { usePathname } from 'next/navigation'

export const Footer = () => {
    const pathname = usePathname()
    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"instant"
        })
    }
  return (
   <footer
   style={{display:pathname==="/login"||pathname==="/register"? "none":""}}
   className=''>
    <nav className='flex
    justify-between items-center
    w-full h-full '>
        <div
        className='flex flex-row items-center
        gap-1 font-light text-sm opacity-70
        '
        onClick={()=>scrollToTop()}
        ><IconShop/></div>
        <div
        className='font-light text-sm opacity-70'
        >© 2023</div>
    </nav>
   </footer>
  )
}
