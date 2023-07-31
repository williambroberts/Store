"use client"
import Image from 'next/image'
import React from 'react'
import useStore from '../zustand/store';
import { useRouter } from 'next/navigation';
import IconHandbag from './icons/bag';
interface theProps {
  props:any;
}
export const ProductCard = ({props}:theProps) => {
  const router = useRouter()
  const {id,product,unit_amount}=props
  const {setPriceObject,AddProductToCart}=useStore()
  //console.log(product.images[0])
  const handleProduct=()=>{
      //🥩set this to the product and push to its route
      console.log(props)
      setPriceObject(props)
      //window.location.assign("/product")
      router.push(`/product?id=${props.id}`)
  }
  const handleAddToCart = ()=>{
    const newItem = {
      quantity:1,
      id:id,
      unit_amount:unit_amount,
      name:product.name,
      image:product.images[0]
    }
    //console.log(newItem,"added to cart")
    AddProductToCart(newItem)
  }
  return (
    <div className='w-full flex flex-col items-start
    h-80
    '>
        <Image
        className='w-full'
        style={{objectFit:"cover",objectPosition:"center"}}
        src={product.images[0]}
        alt={product.name}
        priority
        width={100}
        height={100}

        />
        <div className='flex flex-nowrap items-center 
        justify-between w-full
        '>
          <h2>{product?.name}</h2>
          <span>£{unit_amount/100}</span>
        </div>

        <div className='flex flex-row  flex-nowrap 
        items-center w-full justify-between'>
          <button
          onClick={handleProduct}
          >view</button>
          <button
          className='flex flex-nowrap items-center gap-1
          '
          onClick={handleAddToCart}
          >
            <IconHandbag/>
            Add to cart</button>
        </div>
    </div>
  )
}
