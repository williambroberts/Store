"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import IconShop from './icons/shop2';
import IconHome_door from './icons/home';
import IconInfoSquare from './icons/about';
import { usePathname } from 'next/navigation';
import { useReactTheme } from '../Theme/ThemeContext';
import {AiOutlineHome} from "react-icons/ai"
import { GetStripePrices } from '../Functions/ClientFunctions';
import {SiWebauthn} from "react-icons/si"
import {GiArchiveRegister} from "react-icons/gi"
import { Cart } from './Cart';
interface theProps {
    open?:boolean;
    setOpen?:(newValue:boolean)=>void;
}
export const  Hamburger = ({setOpen,open}:theProps) => {
    const [prices,setPrices]=useState([])

    async function FetchPrices(){
      const prices = await GetStripePrices()
      setPrices(prices)
    }
  useEffect(()=>{
   FetchPrices()
  },[])
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
            <span className='font-semibold text-[var(--t-2)]'>E-commerce</span>
            <span className='text text-[var(--t-3)]'>Powerhouse Store</span>
            </div> 
            <Cart/>    
          <div className='parent flex-col w-full
          flex items-start '>
            <Link href={"/"}
           className={`${pathname==="/"? "selected":""}
           hamburger__link
            `}
            ><IconHome_door/>
            
              Explore
            </Link>
            <button className='hamburger__link'>
             <SiWebauthn/> Login
            </button>
            <button className='hamburger__link'>
             <GiArchiveRegister/> Register
            </button>
          </div>

            <div className='flex flex-col w-full items-start
            justify-start gap-3
            '>
              <h4
              className='hamburger__heading'
              >products</h4>
              <div className='flex 
              parent 
              flex-col items-start w-full'>
             {prices?.map((price:any)=>
             <Link 
             className='hamburger__product'
             href={`/product?id=${price.id}`}
              key={price.id}>{price.product.name}</Link>

             )}
              </div>
            </div>
                
        </nav>
    </div>
  )
}
