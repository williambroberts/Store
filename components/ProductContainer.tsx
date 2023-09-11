"use client"

import {v4} from "uuid"
import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"
import Animator from "./Animator"
import { SuggestionCard } from "./SuggestionCard"
type theProps = {
    prices:any;
}
export const ProductContainer = ({prices}) => {
  
    const [start,setStart]=useState<number>(0)
    const PAG = 6
    const pages = Math.floor(prices.length/PAG)+1
    const arr = Array(pages).fill(1)
    useEffect(()=>{
      let lp =document.querySelector('[data-id="latestProducts"]')
      //window.scrollBy({ top: -30,behavior:"instant"})
      lp.scrollIntoView({behavior:"instant"})
      
    },[start])
  return (
    <div 
    data-id="pw"
    className="w-full grid grid-cols-1 gap-4">

  
    <div className="product__container">
  
    
    {prices?.slice(start,start+PAG).map((price,index)=>{
     return (
       <Animator key={v4()} delay={(index+2)*0.1}>
<ProductCard props={price} />
       </Animator>
      
     )
    })}
    <Animator delay={(prices.length+2)*0.1}>
     <SuggestionCard/>
    </Animator>
    
     </div>
     <div className="pagnation parent">
        <button 
        onClick={()=>setStart(s=>s-PAG)}
        style={{visibility:`${start===0? "hidden":"visible"}`}}
        className={`pagnation__left`}>previous</button>
            {arr.map((item,index)=>
            <button key={index}
            className={`${start/6===index?"active":""}`}
            onClick={()=>setStart(index*6)}
            >{index+1}</button>)}
        <button 
        onClick={()=>setStart(s=>s+PAG)}
        style={{visibility:`${(start+PAG)>=prices.length?"hidden":"visible"}`}}
        className={`pagnation__right `}>next</button>
    </div>
     </div>
  )
}


