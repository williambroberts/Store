"use client"
import React from 'react'
import IconShop from './icons/shop2'
import { usePathname } from 'next/navigation'
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebookCircle } from 'react-icons/bi'

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
        <a
        target='_blank'
        href="https://github.com/williambroberts/Store"
        className='flex flex-row items-center
        gap-1 font-light text-sm opacity-70
        '
        onClick={()=>scrollToTop()}
        >view code on <AiFillGithub/></a>
        <div
        className='font-light text-sm opacity-70'
        >© 2023</div>
        <div className='flex flex-row text-sm flex-nowrap items-center
        gap-2 px-2
        '><AiFillInstagram/> <BiLogoFacebookCircle/> <AiOutlineTwitter/></div>
    </nav>
   </footer>
  )
}
