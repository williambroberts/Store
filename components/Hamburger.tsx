"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {BsCartCheck} from "react-icons/bs"
import IconHome_door from './icons/home';
import IconInfoSquare from './icons/about';
import { usePathname, useRouter } from 'next/navigation';
import { useReactTheme } from '../Theme/ThemeContext';
import {AiOutlineContacts, AiOutlineHome} from "react-icons/ai"
import { GetStripePrices } from '../Functions/ClientFunctions';
import {SiWebauthn} from "react-icons/si"
import {BiSupport} from "react-icons/bi"
import {GiArchiveRegister} from "react-icons/gi"
import { Cart } from './Cart';
import { BsArrowLeft, BsArrowRight, BsInfoSquare } from 'react-icons/bs';
import useStore from '../zustand/store';
import { useNotification } from '../contexts/NotificationContext';
interface theProps {
    open?:boolean;
    setOpen?:(newValue:boolean)=>void;
}
export const  Hamburger = ({setOpen,open}:theProps) => {
    const [prices,setPrices]=useState([])
    const [start,setStart]=useState<number>(0)
    const {setPriceObject,count,setModal}=useStore()
    const pagnationLength=4
    const {setNotification} = useNotification()
   
    async function FetchPrices(){
      const prices = await GetStripePrices()
      setPrices(prices)
    }



  useEffect(()=>{
   FetchPrices()
  },[])
  const pathname = usePathname()
  const handleProduct=(props)=>{
     
    setPriceObject(props)
    setOpen(false)
    window.location.assign(`/product?id=${props.id}`)
   
}
  
const handleModal = ()=>{
  if (count===0){
    setNotification({
      time:3000,type:"alert",
      message:"Basket is Empty ✘",
      open:true,
    })
    return
  }
  let htmlTag = document.querySelector("html")
  htmlTag.style.overflowY="hidden"

  setModal()
 }


  return (
    <div className={`hamburger ${open? "open":""}`}>
        <nav className='flex flex-col pt-10 p-6 pb-10 
        items-center w-full gap-8 h-[100vh] text-sm
        '>  
            
          <div className='flex flex-col items-center
          gap-0 
          '>
            <span className='font-semibold text-[var(--t-2)]'>E-commerce</span>
            <span className='text text-[var(--t-3)]'>Powerhouse Store</span>
            </div> 
            <Cart/>    
          <div className='parent flex-col w-full
          flex items-start '>
            <button
            className='hamburger__link'
            onClick={handleModal}
            >
              <BsCartCheck/>
              checkout
            </button>
            <Link href={"/"}
           className={`${pathname==="/"? "selected":""}
           hamburger__link
            `}
            onClick={()=>setOpen(false)}
            ><IconHome_door/>
            
              Home
            </Link>
            <Link 
             onClick={()=>setOpen(false)}
            href="/login" className='hamburger__link'>
             <SiWebauthn/> Login
            </Link>
            {/* <Link 
             onClick={()=>setOpen(false)}
            href="/register" className='hamburger__link'>
             <GiArchiveRegister/> Register
            </Link> */}
            <Link 
             onClick={()=>setOpen(false)}
            href="/about" className='hamburger__link'>
             <BsInfoSquare/> About
            </Link>
            <Link 
             onClick={()=>setOpen(false)}
            href="/support" className='hamburger__link'>
             <BiSupport/> Support
            </Link>
            <Link 
             onClick={()=>setOpen(false)}
            href="/contact" className='hamburger__link'>
             <AiOutlineContacts/> Contact
            </Link>
          </div>

            <div className='flex flex-col w-full items-start
            justify-start gap-0
            '>
              <h4
              className='hamburger__heading'
              >products</h4>
              <button
              disabled={start===0}
              className={`hamburger__button ${start===0? "unactive":""}`}
              onClick={()=>setStart(s=>s-pagnationLength)}
              ><span><BsArrowLeft/> previous</span></button>
              <div 
              data-testid="products"
              className='flex 
              parent overflow-y-auto
              flex-col items-start w-full'>
             {prices?.slice(start,start+pagnationLength).map((price:any)=>
             <button 
             onClick={()=>handleProduct(price)}
             aria-label='product link'
             className='hamburger__product'
            //  href={`/product?id=${price.id}`}
              key={price.id}>{price.product.name}</button>

             )}
              </div>
              
              <button
              disabled={(start+pagnationLength)>=prices.length}
              className={`hamburger__button ${(start+pagnationLength)>=prices.length? "unactive":""}`}
              onClick={()=>setStart(s=>s+pagnationLength)}
              ><span>more <BsArrowRight/></span></button>
            </div>
                
        </nav>
    </div>
  )
}
