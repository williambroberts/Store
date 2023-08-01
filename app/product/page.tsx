"use client"
import React, { useState } from 'react'
import useStore from '../../zustand/store'
import Image from 'next/image'
import IconHandbag from '../../components/icons/bag'
import IconTag from '../../components/icons/tag'
import IconBackward from '../../components/icons/back'
import Link from 'next/link'
import IconCross1 from '../../components/icons/cross'
import IconSearch from '../../components/icons/zoom'
import Stripe from 'stripe'
import { useSearchParams } from 'next/navigation'

async function getStripePrice (){
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '',{
    apiVersion:'2022-11-15'
})
const searchParams = useSearchParams()
const price_id = searchParams.get("id")
  const price = await stripe.prices.retrieve(
    price_id
  );
}

export default  function ProductPage(){
    const {priceObject,AddProductToCart} = useStore()
    const {id,unit_amount,product}=priceObject
   const [loaded,setLoaded]=useState(false)
const [open,setOpen]=useState<boolean>(false)
  const toggleFullScreen = ()=>{
    setOpen((prev)=>!prev)
    console.log(document?.fullscreenElement)
    try {
      let img = document.querySelector('[data-id="image"]')
      if (document.fullscreenElement){
        document.exitFullscreen()
      }else{
        img.requestFullscreen()
      }
    }catch(err){
      console.log(err)
    }
   
   
  }
    const handleAddToCart = ()=>{
      const newItem = {
        quantity:1,
        id:id,
        unit_amount:unit_amount,
        name:product.name,
        image:product.images[0],
        blur:product.metadata.blur
      }
      console.log(newItem,"added to cart")
      AddProductToCart(newItem)
    }
    return (  
    <main className='max-w-[768px] px-2 py-8
    flex flex-col items-start justify-start'>
      <div
      data-id="image" 
      onClick={toggleFullScreen}
       style={{backgroundImage:`url(${product?.metadata.blur})`}}
      className={`w-full flex
      
      aspect-video skeleton ${loaded? "loaded":""}`}>
      <Image 
      
      style={{cursor:"auto"}}
      alt="product image" src={product?.images[0]}
    fill priority
    onLoad={()=>setLoaded(true)}
      />
      <button
     
      className='exit__fullScreen'
      >
      {open? <IconCross1/>:<IconSearch/>} 
      </button>
      </div>
      <div className='
      py-4
      flex flex-col items-start '>
        
        <span
        className='font-medium '
        >{product?.name}</span>
        <span
        className='flex flex-row items-center flex-nowrap
        gap-1 
        '
        ><IconTag/>{(unit_amount/100).toLocaleString('en-GB',{
          currency:"GBP",style:"currency"
        })} <i
        className='text-sm font-light opacity-70'
        >per unit</i></span>
        <p>{product?.description}</p>
        <button
          className='product__card__button
          '
          onClick={handleAddToCart}
          >
            <IconHandbag/>
            Add to cart</button>
      </div> 

      <Link href="/"
      className='flex flex-row items-center
      gap-1 px-2 underline
      '>
        <IconBackward/>
        See all</Link>
    </main>
  )
}

