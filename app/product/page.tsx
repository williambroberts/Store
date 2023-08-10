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
import Animator from '../../components/Animator'
import { FetchMore } from '../../components/FetchMore'
import { useSearchParams } from 'next/navigation'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { EmailBanner } from '../../components/EmailBanner'
//import { Metadata } from 'next'


// export const metadata:Metadata = {
//   title:'Product'
// }

export default  function ProductPage(){
  const searchParams = useSearchParams()
    const {priceObject,AddProductToCart} = useStore()
    const {id,unit_amount,product}=priceObject
   const [loaded,setLoaded]=useState(false)
   const [zoom,setZoom]=useState<boolean>(false)
const [open,setOpen]=useState<boolean>(false)
const [position,setPosition]=useState<any>({x:0,y:0})
  const toggleFullScreen = ()=>{
    setOpen((prev)=>!prev)
    //console.log(document?.fullscreenElement)
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
      //console.log(newItem,"added to cart")
      AddProductToCart(newItem)
    }
    const handleMouseOver =(e)=>{
      //console.log(e.clientX,e.clientY)
    }
    return (  
    <main className='max-w-[768px] px-2 py-24
    flex flex-col items-start justify-start gap-4'>
<Animator delay={0}>
<h1
        className='title'
        >{product?.name}</h1>
</Animator>

     <Animator delay={0.13}>

    
      <div
      data-id="image" 
      onClick={toggleFullScreen}
       style={{backgroundImage:`url(${product?.metadata.blur})`}}
      className={`w-full flex
      
      aspect-video skeleton ${loaded? "loaded":""}`}>
      <Image
      // style={{transform:zoom?`scale(2)`:""}}
      onMouseEnter={()=>setZoom(true)} 
      onMouseLeave={()=>setZoom(false)}
      onMouseMove={handleMouseOver}
      
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
      </Animator>
      <Animator delay={0.13}>
     
      <div className='
      py-4
      flex flex-col items-start '>
        
       
       
        <p className='product__desc'>{product?.description}</p>
        <div className='grid grid-cols-2
        gap-2 w-full
       '>

        
        <button
          className='product__card__add flex-auto
          '
          onClick={handleAddToCart}
          >
            <IconHandbag/>
            Add to cart</button>
            <span className='product__card__view flex-auto
        '
        ><IconTag/>{(unit_amount/100).toLocaleString('en-GB',{
          currency:"GBP",style:"currency"
        })}</span>
        </div>
      </div> 
   
      </Animator>
      <Animator delay={0.26}>

      
      <Link href="/"  
      className='button__
      '>
        <AiOutlineArrowLeft/>
        See all</Link>
        </Animator>
        <FetchMore searchParams={searchParams}/>
        <EmailBanner/>
    </main>
  )
}

