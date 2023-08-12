// "use client"


import { ProductCard } from "../components/ProductCard";
import {v4} from "uuid"
import { GetStripePrices } from "../Functions/ClientFunctions";
import Animator from "../components/Animator";

import { EmailBanner } from "../components/EmailBanner";
import { Hero } from "../components/Hero";
import { Sale } from "../components/Sale";
import { AiOutlineArrowRight } from "react-icons/ai";
import { OurProducts } from "../components/OurProducts";
import { SuggestionCard } from "../components/SuggestionCard";
//1687321829



export default async function Home() {
 const prices = await GetStripePrices()
  return (
    <main className={`flex flex-col items-center gap-12
    `}>

      
     
        
      <Animator delay={0.05}>
      <Hero text="E-Commerce Powerhouse."/>
      </Animator>
      
    
     
      <div className="container__">
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
     <Animator delay={(prices.length+2)*0.13}>
      <SuggestionCard/>
     </Animator>
      </div>
     <Sale/>
     <OurProducts/>
      <EmailBanner/>
    </main>
  )
}
