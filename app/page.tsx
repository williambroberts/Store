// "use client"

import Stripe from "stripe";
import { ProductCard } from "../components/ProductCard";
import {v4} from "uuid"

import Animator from "../components/Animator";

import { EmailBanner } from "../components/EmailBanner";
import { Hero } from "../components/Hero";
import { Sale } from "../components/Sale";
import { AiOutlineArrowRight } from "react-icons/ai";

const dotenv =require("dotenv")
export const GetStripePrices=async ()=>{
  
  const stripe = new Stripe('sk_test_51NJVyhDt6cUT5aTWuiobYjYMmg9RhpFdJ4b8MhPMuOs2ahr3T41eoR4Q6h8x9506DDpLyK2U89gyHiQ2cxCY5FzT00CFlik7Hj' ?? '',{
      apiVersion:'2022-11-15'
  })
  const prices = await stripe.prices.list({
      // limit: 3,
      active:true,
      created:{gt:1687321829},
      expand: ['data.product']
      
        
      
    },{
      apiKey:'sk_test_51NJVyhDt6cUT5aTWuiobYjYMmg9RhpFdJ4b8MhPMuOs2ahr3T41eoR4Q6h8x9506DDpLyK2U89gyHiQ2cxCY5FzT00CFlik7Hj'
    });
  //console.log(prices.data[0],"") 
  if (prices.data.length===0){
    return null
  } 
  return prices.data
}


export default async function Home() {
 const prices = await GetStripePrices()
  return (
    <main className={`flex flex-col items-center gap-12
    `}>

      
     
        
      <Animator delay={0.05}>
      <Hero/>
      </Animator>
      
      <Animator delay={0.1}>
      
      </Animator>
     
      <div className="w-full justify-between flex flex-row 
    flex-nowrap">
 <h2 className="subheading">Latest Products</h2>
 <button
 className="button__"
 >View all <AiOutlineArrowRight/></button>
    </div>  
     <div className="product__container">
  
    
     {prices?.map((price,index)=>{
      return (
        <Animator key={v4()} delay={(index+2)*0.13}>
 <ProductCard props={price} />
        </Animator>
       
      )
     })}
      </div>
     <Sale/>
     <div
     className="w-full flex flex-col
     py-3 max-w-[768px]
     ">

    
      <h3 className="flex 
      py-3
      font-medium text-xl">
About our products
</h3>
<span
className="text-sm py-3 text-[var(--t-3)]"
>Curating top quality photographs for you</span>
      <div className="flex flex-row items-center
      gap-2 flex-wrap
      ">
       
        
        <span
        className="about__icon"
        >Flexible</span>
         <span
        className="about__icon"
        >Professional</span>
         <span
        className="about__icon"
        >Fast Delivery</span>
         <span
        className="about__icon"
        >Transparent</span>
      </div>
      </div>
      <EmailBanner/>
    </main>
  )
}
