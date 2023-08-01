"use client"
import React from 'react'
import IconShop from './icons/shop'

export const Footer = () => {
    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"instant"
        })
    }
  return (
   <footer className=''>
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
