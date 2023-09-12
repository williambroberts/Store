
"use client"
import React, {  useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import useStore from '../../zustand/store'
import CheckoutItem  from '../CheckoutItem'
import {v4} from "uuid"

import IconEcommerce_cart_content from '../icons/CartEmpty'
import IconCcStripe from '../icons/stripe'
import IconEcommerce_money from '../icons/money'
import IconBackward from '../icons/back'
import IconEcommerce_cart_remove from '../icons/CartX'
import { useReactTheme } from '../../Theme/ThemeContext'
import IconPadlock from '../icons/padlock'
import { fetchIsAuth } from '../../utils/Fetch/fetchIsAuth'
const CheckoutPortal = () => {
    const {setModal,cart,total,ResetCart,count}=useStore()
    const {theme}=useReactTheme()
    
  useEffect(()=>{
    if (total===0){
      setModal()
      document.documentElement.style.overflowY="auto"
    }
  },[total])

  function handleBack(){
    
    setModal()
    document.documentElement.style.overflowY="auto"
  }
  const handleReset = ()=>{
    setModal()
    let htmlTag = document.querySelector("html")
    htmlTag.style.overflowY="auto"
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
      const isAuthRes = await fetchIsAuth()
      const isAuth = await isAuthRes.json()
      //console.log(isAuth)
      
      const options = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({line_items,origin:origin,isAuth:isAuth})

      }
        fetch(url,options).then((res)=>res.json())
         .then((data)=>{
          //console.log(data)
          //todo if data =origin = store origin ie fail
          window.location.assign(data)
          setModal()
          let htmlTag = document.querySelector("html")
          htmlTag.style.overflowY="auto"
         }
         )
         .catch((err)=>console.log(err))
    }
  return ReactDom.createPortal(
    <main 
    data-theme="light"
    className='checkout__portal'>
      <div className='flex flex-col items-center
      justify-between px-0 py-1 mt-32 mb-20'>
      
     
     
        <div className='w-full'>
          <h1 className='text-2xl mb-2'>
          Checkout Details

          </h1>
          <p
          className='text-sm mb-10'
          >Review your products before proceeding to checkout</p>
        </div>

        <div className='grid-cols-2 px-1
        bg-[var(--bg-3)] rounded-md py-1
        grid w-full'>
<button
      className="checkout__button white"
      onClick={()=>handleBack()}
      >Back</button>
       <button
     className='checkout__button'
      onClick={()=>handleReset()}
      > <IconEcommerce_cart_content/> Empty Cart</button>
        </div>
       {count!==0? <div className='flex flex-col 
        w-full flex-auto mt-8
        items-center gap-1'>
        {cart.map((item,index)=>{
         return (
          <CheckoutItem props={item} 
          index={index}
          key={v4()}/>
         )

        })}

        </div>:
        <div className='flex flex-row items-center gap-1
        py-6'>
          <IconEcommerce_cart_remove/>
          No items in checkout</div>
        }
        <div className='flex flex-col 
        w-full
        items-center 
        gap-1 py-1'>
          <div className='flex flex-row w-full 
          mt-8
          justify-between font-medium text-base'>
            <span
            className=''
            >Pre discount total</span>
          <span
          className={``}
          >

           
            
             {(0.01*total).toLocaleString('en-GB',{
            style:"currency",currency:"GBP"
          })}</span>
         </div>
         <div className='text-sm'>Any discount will be applied at checkout</div>
          <button
         className='text-base flex flex-row items-center
         gap-2  w-full justify-center mt-8
         text-white px-4 py-2 rounded-md
         bg-[var(--accent)]
         '
          onClick={handleCheckout}
          ><IconCcStripe/>Checkout</button>

          <span
          className='w-full mt-8 justify-center
          bg-[var(--bg-3)] flex items-center gap-2
          text-[13px] px-4 py-4 rounded-md '
          >
            <span
            className='opacity-60'
            ><IconPadlock/></span>
            Payments are secure and encrypted</span>
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
          </div>
    </main>,document.getElementById('portal')
  )
}

export default CheckoutPortal