import React, { useState } from 'react'
import IconDeleteBin6Line from './icons/delete';
import useStore from '../zustand/store';
import Image from 'next/image';
import IconBxCartAdd from './icons/miniCartPlus';
import IconCartMinus from './icons/miniCartMinus';
interface theProps {
    props:any;
}
export const CheckoutItem = ({props}:theProps) => {
    //console.log(props)
    const [loaded,setLoaded]=useState<boolean>(false)
    const {AddProductToCart,RemoveItemFromCart,ReduceItemQuantityByOne}=useStore()
    const handleAddToCart = ()=>{
        
        //console.log(props,"added to cart")
        AddProductToCart(props)
      }
    const handleMinus = ()=>{
        ReduceItemQuantityByOne(props.id)
    }
    const handleDelete =()=>{
        RemoveItemFromCart(props.id)
    }
  return (
    <div className='checkout__item'>

        <div className='flex flex-col items-start gap-0
        bg-transparent
        '>

       
       <span>{props.name}</span>
       <div className='flex flex-nowrap items-center'>
        <span>Per unit:{(props.unit_amount/100).toLocaleString('en-GB',{
        style:"currency",currency:"GBP"
       })}</span>
        <span
        className='flex flex-row items-center px-1 flex-nowrap'
        >Qty:{props.quantity}</span>
        
       </div>
       <span
       className='flex flex-row text-sm font-medium'
       >Total:{(props.unit_amount/100*props.quantity).toLocaleString('en-GB',{
        style:"currency",currency:"GBP"
       })}</span>
       <div>
        <button
        className='checkout__button'
        onClick={handleAddToCart}
        ><IconBxCartAdd/></button>
        <button
        className='checkout__button'
        onClick={handleMinus}
        ><IconCartMinus/></button>
        <button
        className='checkout__button'
        onClick={handleDelete}
        ><IconDeleteBin6Line/></button>
       </div>
       </div>
       <div
      style={{backgroundImage:`url(${props.blur})`}}
       className={` 
       checkout__skeleton ${loaded? "loaded":""}
       `}>
       <Image 
       priority
       onLoad={()=>setLoaded(true)}
       className='w-24 h-24 rounded-md '
       src={props.image} alt={props.name}
       width={100} height={100}
       />
       </div>
      
    </div>
  )
}
