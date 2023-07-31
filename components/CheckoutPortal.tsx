
"use client"
import React from 'react'
import ReactDom from 'react-dom'
import useStore from '../zustand/store'
import { CheckoutItem } from './CheckoutItem'
import {v4} from "uuid"
import { useRouter } from 'next/navigation'
import IconEcommerce_cart_content from './icons/CartEmpty'
import IconCcStripe from './icons/stripe'
import IconEcommerce_money from './icons/money'
import IconBackward from './icons/back'
const CheckoutPortal = () => {
    const {setModal,cart,total,ResetCart}=useStore()
  const router = useRouter()

  const handleReset = ()=>{
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
          console.log(data)
          window.location.assign(data)
         }
         )
         .catch((err)=>console.log(err))
    }

  return ReactDom.createPortal(
    <main className='checkout__portal'>
      <div className='flex flex-row items-center justify-center'>
      <button
      className='header__button'
      onClick={()=>setModal()}
      ><IconBackward/> back</button>
      <button
      className='header__button'
      onClick={()=>handleReset()}
      > <IconEcommerce_cart_content/> reset cart</button>
      </div>
     
        <div className='flex flex-col items-center gap-1'>
        {cart.map((item)=>{
         return (
          <CheckoutItem props={item} key={v4()}/>
         )

        })}

        </div>
        <div className='flex flex-row items-center gap-1'>
          <span
          className='header__button'
          >
            <IconEcommerce_money/>
            Total: {(0.01*total).toLocaleString('en-GB',{
            style:"currency",currency:"GBP"
          })}</span>
         
          <button
          className='header__button'
          onClick={handleCheckout}
          ><IconCcStripe/>checkout</button>
           </div>
          <div className='flex flex-col items-center gap-1 w-full'>
          <span>Demo Card Number:4242424242424242</span>
          <div>
          <span>Demo CVC:567</span>
          <span>Demo DATE:</span>
          </div>
          
          </div>
          
    </main>,document.getElementById('portal')
  )
}

export default CheckoutPortal