"use client"
import React from 'react'
import useStore from '../../zustand/store'
import Image from 'next/image'
import IconHandbag from '../../components/icons/bag'

export default function ProductPage(){
    const {priceObject,AddProductToCart} = useStore()
    const {id,unit_amount,product}=priceObject
    console.log(priceObject)


    const handleAddToCart = ()=>{
      const newItem = {
        quantity:1,
        id:id,
        unit_amount:unit_amount,
        name:product.name,
        image:product.images[0]
      }
      console.log(newItem,"added to cart")
      AddProductToCart(newItem)
    }
    return (  
    <main className='max-w-[768px]
    flex flex-col items-start justify-start'>
      <div className='w-full flex 
      
      aspect-video'>
      <Image alt={product?.name} src={product?.images[0]}
    fill priority
      />
      </div>
      <div className='flex flex-col items-start '>
        
        <span>{product?.name}</span>
        <span>£{unit_amount/100}</span>
        <p>{product?.description}</p>
        <button
          className='product__card__button
          '
          onClick={handleAddToCart}
          >
            <IconHandbag/>
            Add to cart</button>
      </div> 
    </main>
  )
}

