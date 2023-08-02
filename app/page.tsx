
//import { GetStripePrices } from "@/Functions/ClientFunctions";
import Stripe from "stripe";
import { ProductCard } from "../components/ProductCard";
import {v4} from "uuid"
import IconShop from "../components/icons/shop";
import Animator from "../components/Animator";
import 'dotenv/config'
const GetStripePrices=async ()=>{
  
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
  console.log(prices.data[0],"") 
  if (prices.data.length===0){
    return null
  } 
  return prices.data
}


export default async function Home() {
 const prices = await GetStripePrices()
  return (
    <main className={`flex flex-col items-center px-2 py-3 gap-12
    `}>

      
      <div className="flex flex-col items-start justify-start
      gap-2 max-w-[768px] w-full py-3
      ">
     

      <h2
      className="
      text-3xl font-bold 
      flex flex-row items-center gap-2 py-8"
      >SideStore</h2>
      <p className="font-light">
      Welcome to our shop, where creativity finds its canvas, and memories come to life through stunning imagery.  
      </p>
     
      </div>
      
      <div className={`grid max-w-[768px] w-full
      grid-cols-1 gap-2
      sm:grid-cols-2`}>

     
     {prices?.map((price,index)=>{
      return (
        <Animator key={v4()} delay={index*0.13}>
 <ProductCard props={price} />
        </Animator>
       
      )
     })}
      </div>

     <div
     className="w-full flex flex-col
     py-3
     ">

    
      <h3 className="flex 
      py-3
      font-medium text-xl">
About our products
</h3>
<span></span>
      <div className="flex flex-row items-center
      gap-2
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
    </main>
  )
}
