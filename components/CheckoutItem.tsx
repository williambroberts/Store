import React from 'react'
import IconDeleteBin6Line from './icons/delete';
import useStore from '../zustand/store';
import Image from 'next/image';
interface theProps {
    props:any;
}
export const CheckoutItem = ({props}:theProps) => {
    //console.log(props)
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
        '>

       
       <span>{props.name}</span>
       <div>
        <span>£Per unit:{props.unit_amount/100}</span>
        <span>Quantity: {props.quantity}</span>
        
       </div>
       <span>£Total:{props.unit_amount/100*props.quantity}</span>
       <div>
        <button
        onClick={handleAddToCart}
        >Add</button>
        <button
        onClick={handleMinus}
        >Minus</button>
        <button
        onClick={handleDelete}
        ><IconDeleteBin6Line/></button>
       </div>
       </div>
       <Image 
       className='w-24 h-24 rounded-md'
       src={props.image} alt={props.name}
       width={100} height={100}
       />
    </div>
  )
}
