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
 
  const pathname = usePathname()
 
  
  return (
    <div className={`hamburger ${open? "open":""}`}>
        <nav className='flex flex-col pt-10 p-6
        items-center w-full gap-10 h-[100vh] text-sm
        '>  
             <IconInfoSquare/>
          <div className='flex flex-col items-center
          gap-0 
          '>
            <span className='font-semibold text-[#f2f2f2]'>SideStore</span>
            <span className='text'>Software Products</span>
            </div>     
          <div className='parent flex-col w-full
          flex items-start '>
            <Link href={"/"}
           className='w-full'
            >
              <span
               className={`${pathname==="/"? "selected":""}
               hamburger__link
                `}
              ><IconHome_door/> Explore</span></Link>
          </div>

            <div className='flex flex-col w-full items-start
            justify-start gap-3
            '>
              <h4
              className='hamburger__heading'
              >Boutique</h4>
              <div className='flex 
              parent 
              flex-col items-start w-full'>
              <Link href={"/"} className='hamburger__product'>Product 1 </Link>
              <Link href={"/"} className='hamburger__product'>Product 1 </Link>
              <Link href={"/"} className='hamburger__product'>Product 1 </Link>
              </div>
            </div>
                
        </nav>
    </div>
  )
}
