
"use client"
import React from 'react'
import ReactDom from 'react-dom'
import useStore from '../zustand/store'
import { CheckoutItem } from './CheckoutItem'
import {v4} from "uuid"
import { useRouter } from 'next/navigation'
const CheckoutPortal = () => {
    const {setModal,cart,total}=useStore()
  const router = useRouter()
    const handleCheckout = async ()=>{
      const url = '/api/checkout'
      if (cart.length===0){return};
      const line_items = cart.map((item)=>{
        return {
          price:item.id,
          quantity:item.quantity,
        }
        
      })
      const options = {
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify({line_items})

      }
      let res = null
      try {
         res = await fetch(url,options)
         //let data = await res.json()
         //console.log(res,"re",data,"da",data.session)
      //router.push(data.session.url)
      }catch(err){
        console.log(err)
      }
      
      
    }
  return ReactDom.createPortal(
    <main className='checkout__portal'>
      <button
      onClick={()=>setModal()}
      >back</button>
      <button>reset cart</button>
        <div className='flex flex-col items-center gap-1'>
        {cart.map((item)=>{
         return (
          <CheckoutItem props={item} key={v4()}/>
         )

        })}

        </div>

          <span>Total: £{total}</span>
          <button
          onClick={handleCheckout}
          >checkout</button>
    </main>,document.getElementById('portal')
  )
}

export default CheckoutPortal