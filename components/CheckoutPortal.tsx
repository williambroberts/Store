
"use client"
import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import useStore from '../zustand/store'
import { CheckoutItem } from './CheckoutItem'
import {v4} from "uuid"
import { useRouter } from 'next/navigation'
import IconEcommerce_cart_content from './icons/CartEmpty'
import IconCcStripe from './icons/stripe'
import IconEcommerce_money from './icons/money'
import IconBackward from './icons/back'
import IconEcommerce_cart_remove from './icons/CartX'
const CheckoutPortal = () => {
    const {setModal,cart,total,ResetCart,count}=useStore()
    const [theme,setTheme]=useState(()=>{
      let theme=document.body.dataset.theme
      return theme
    })
    
 
  const handleReset = ()=>{
    setModal()
    ResetCart()
  }
    const handleCheckout = async ()=>{
      const origin = window.location.origin
      const url = `${origin}/api/checkout`
      if (cart.length===0){return};
      const line_items = cart.map((item)=>{
        return {
          price:item.id,
          quantity:item.quantity
        }
        
      })
      const options = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({line_items})

      }
        fetch(url,options).then((res)=>res.json())
         .then((data)=>{
          
          window.location.assign(data)
         }
         )
         .catch((err)=>console.log(err))
    }
  return ReactDom.createPortal(
    <main className='checkout__portal'>
      <div className='flex flex-row items-center
      justify-between px-0 py-1 '>
      <button
      className={`header__button ${theme}`}
      onClick={()=>setModal()}
      ><IconBackward/> back</button>
      <button
     className={`header__button ${theme}`}
      onClick={()=>handleReset()}
      > <IconEcommerce_cart_content/> reset cart</button>
      </div>
     
       {count!==0? <div className='flex flex-col 
        w-full
        items-center gap-1'>
        {cart.map((item,index)=>{
         return (
          <CheckoutItem props={item} 
          index={index}
          key={v4()}/>
         )

        })}

        </div>:
        <div className='flex flex-row items-center gap-1'>
          <IconEcommerce_cart_remove/>
          No items in checkout</div>
        }
        <div className='flex flex-row items-center 
        gap-1 py-1'>
          <span
          className={`header__button ${theme}`}
          >
            <IconEcommerce_money/>
            Total: {(0.01*total).toLocaleString('en-GB',{
            style:"currency",currency:"GBP"
          })}</span>
         
          <button
         className={`header__button ${theme}`}
          onClick={handleCheckout}
          ><IconCcStripe/>checkout</button>
           </div>
          <div className='flex flex-col items-center gap-1 w-full'>
          <span
          className='flex font-light '
          >Demo Card Number:<pre
          
          >4242 4242 4242 4242</pre></span>
          <div>
          <span
          className='flex font-light'
          >Demo CVC:<pre>567</pre></span>
          <span
          className='flex font-light'
          >Demo DATE:<pre>12 / 34</pre></span>
          </div>
          
          </div>
          
    </main>,document.getElementById('portal')
  )
}

export default CheckoutPortal