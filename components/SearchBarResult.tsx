"use client"
import React, { useState } from 'react'
import IconHandbag from './icons/bag';
import useStore from '../zustand/store';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useNotification } from '../contexts/NotificationContext';
interface theProps {
    price:any;
    setOpen:Function;
}
export const SearchBarResult = ({price,setOpen}:theProps) => {
  const {setPriceObject,AddProductToCart}=useStore()
  const {setNotification}=useNotification()
  const [loaded,setLoaded]=useState<boolean>(false)
  const {product}=price
  const router = useRouter()
  const handleProduct=()=>{
    setOpen(false)
    setPriceObject(price)
    let html = document.querySelector("html")
    html.style.overflowY="auto"
    router.push(`/product?id=${price.id}`)
}
const handleAddToCart = ()=>{
  setNotification({
    time:3000,
    type:"alert",
    open:true,
    message:`Added ${product.name} ✓`

  })
  const newItem = {
    quantity:1,
    id:price.id,
    unit_amount:price.unit_amount,
    name:price.product.name,
    image:price.product.images[0],
    blur:price.product.metadata.blur
  }
  //console.log(newItem,"added to cart")
  AddProductToCart(newItem)
}

  return (
    <div className='flex flex-row w-full items-center
    px-2 py-2 gap-2 rounded-md bg-transparent
    duration-200 transition-all text-sm
    '>
        <div className='flex-auto'>
            <div className='flex flex-row 
            gap-2 w-full text-[var(--t-1)]
            items-between'>
            <span className='font-medium px-2'>{price.product.name}</span>
            <span
            className='ml-auto px-2'
            >{(price.unit_amount/100).toLocaleString('en-GB',{
        style:"currency",currency:"GBP"
       })}</span>
            </div>
           
            <div className='flex flex-row  flex-nowrap 
        items-center w-full justify-between
        mt-auto
        '>
          <button
          className='product__card__button'
          onClick={handleProduct}
          >view</button>
          <button

          className='product__card__button
          '
          onClick={handleAddToCart}
          >
            <IconHandbag/>
            Add</button>
        </div>
            </div>
            <div
      
      
      style={{backgroundImage:`url(${product.metadata.blur})`}}
       className={` 
       checkout__skeleton ${loaded? "loaded":""}
       `}>
       <Image 
       priority
       onClick={handleProduct}
       onLoad={()=>setLoaded(true)}
       className='rounded-md '
       src={product.images[0]} alt={product.name}
       fill
       />
      
       </div>
       

    </div>
  )
}
