import React, { useEffect, useState } from 'react'
import useStore from '../zustand/store'
import { useNotification } from '../contexts/NotificationContext'
import { Counter } from './Counter'
import IconEcommerce_cart_content from './icons/CartFull'
import { useHtmlOverflow } from '../hooks/useHtmlOverflow'

export const Cart = () => {
    const [viewCheckout,setViewCheckout]=useState<boolean>(false)
    const {modal,setModal,count,total}=useStore()
    const {setNotification}=useNotification()
    //const [dummy,setDummy]=useHtmlOverflow(modal)
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
    <button 
            onMouseEnter={()=>setViewCheckout(true)}
            onMouseLeave={()=>setViewCheckout(false)}
            className='header__cart
           '
            onClick={()=>handleModal()}>
                
                <span
                className='text-xl font-semibold '
                >{<IconEcommerce_cart_content/>}</span>
                
                <Counter/>
                <span
                className=''
                >{(0.01*total).toLocaleString('en-GB',{
            style:"currency",currency:"GBP"
          })}</span>
          <div
          style={{display:viewCheckout?"":"none"}}
          
          className='flex flex-row w-full absolute py-2 rounded-md
          bg-[var(--bg-1)] opacity-100 left-0
          justify-center font-medium h-full
          '>
            Checkout 
          </div>
          </button>
  )
}
