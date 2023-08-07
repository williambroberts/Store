import React, { memo, useState } from 'react'
import IconDeleteBin6Line from './icons/delete';
import useStore from '../zustand/store';
import Image from 'next/image';
import IconBxCartAdd from './icons/miniCartPlus';
import IconCartMinus from './icons/miniCartMinus';
import IconTag from './icons/tag';
import IconSearch from './icons/zoom';
import IconCross1 from './icons/cross';
interface theProps {
    props:any;
    index:number;
}
const CheckoutItem = ({props,index}:theProps) => {
    //console.log(props)
    const [loaded,setLoaded]=useState<boolean>(false)
    const [open,setOpen]=useState<boolean>(false)
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

    const toggleFullScreen = ()=>{
      setOpen((prev)=>!prev)
      
      try {
        let img = document.querySelector(`[data-id="image${index}"]`)
        if (document.fullscreenElement){
          document.exitFullscreen()
        }else{
          img.requestFullscreen()
        }
      }catch(err){
        console.log(err)
      }
     
     
    }
  return (
    <div className='checkout__item'>

        <div className='flex flex-col items-start gap-0
        bg-transparent
        '>

       
       <span>{props.name}</span>
       <div className='flex flex-nowrap items-center'>
        <span
        className='flex flex-row items-center
        
        gap-1 flex-nowrap'
        ><IconTag/>{(props.unit_amount/100).toLocaleString('en-GB',{
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
       data-id={`image${index}`}
       onClick={toggleFullScreen}
      style={{backgroundImage:`url(${props.blur})`}}
       className={` 
       checkout__skeleton ${loaded? "loaded":""}
       `}>
       <Image 
       priority
       onLoad={()=>setLoaded(true)}
       className='w-32 h-32 rounded-md '
       src={props.image} alt={props.name}
       fill
       />
       <button
     
     className='exit__fullScreen__mini'
     >
     {open? <IconCross1/>:<IconSearch/>} 
     </button>
       </div>
      
    </div>
  )
}

export default memo(CheckoutItem)