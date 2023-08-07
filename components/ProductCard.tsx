"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import useStore from '../zustand/store';
import { useRouter } from 'next/navigation';
import IconHandbag from './icons/bag';
import { useNotification } from '../contexts/NotificationContext';
interface theProps {
  props:any;
}
export const ProductCard = ({props}:theProps) => {
  const router = useRouter()
  const {id,product,unit_amount}=props
  const [loaded,setLoaded]=useState(false)
  const {setNotification}=useNotification()
  const {setPriceObject,AddProductToCart}=useStore()
  //console.log(props)
  const handleProduct=()=>{
      //🥩set this to the product and push to its route
      //console.log(props)
      setPriceObject(props)
      //window.location.assign("/product")
      router.push(`/product?id=${props.id}`)
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
      id:id,
      unit_amount:unit_amount,
      name:product.name,
      image:product.images[0],
      blur:product.metadata.blur
    }
    //🅰️ notify user

    AddProductToCart(newItem)
  }
  return (
    <div
    
    className='w-full flex flex-col items-start
    
    '>  <div
    style={{backgroundImage:`url(${product.metadata.blur})`}}
    className={`skeleton ${loaded?"loaded":""}`}
    >

    
        <Image
        onClick={handleProduct}
        className={`w-full`}
        style={{objectFit:"cover",objectPosition:"center",
        
      
      }}
        sizes='(650px)'
        src={product.images[0]}
        alt={product.name}
        priority
       fill
        onLoad={()=>setLoaded(true)}
        />
        </div>
        <div className='flex flex-nowrap items-center 
        justify-between w-full py-2 px-2 gap-2
        '>
          <h2
          className='product__card__name'
          >{product?.name}</h2>
          <span
          className='text-sm'
          >{(unit_amount/100).toLocaleString('en-GB',{
            style:"currency",currency:"GBP"
          })}</span>
        </div>

        <div className='flex flex-row  flex-nowrap 
        items-center w-full justify-between
        mt-auto
        '>
          <button
          className='product__card__button'
          onClick={()=>handleProduct()}
          >view</button>
          <button

          className='product__card__button
          '
          onClick={()=>handleAddToCart()}
          >
            <IconHandbag/>
            Add to cart</button>
        </div>
    </div>
  )
}
