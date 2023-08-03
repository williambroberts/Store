"use client"
import React, { useState } from 'react'
import IconHandbag from './icons/bag';
import useStore from '../zustand/store';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
interface theProps {
    price:any;
}
export const SearchBarResult = ({price}:theProps) => {
  const {setPriceObject,AddProductToCart}=useStore()
  const [loaded,setLoaded]=useState<boolean>(false)
  const {product}=price
  const router = useRouter()
  const handleProduct=()=>{
    
    setPriceObject(price)
    let html = document.querySelector("html")
    html.style.overflowY="auto"
    router.push(`/product?id=${price.id}`)
}
const handleAddToCart = ()=>{
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
    px-2 py-2 gap-2 hover:bg-[var(--bg-2)] rounded-md
    duration-200 transition-all text-sm
    '>
        <div className='flex-auto'>
            <div className='flex flex-row 
            gap-2 w-full
            items-between'>
            <span className='font-medium'>{price.product.name}</span>
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
