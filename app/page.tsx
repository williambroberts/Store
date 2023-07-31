
//import { GetStripePrices } from "@/Functions/ClientFunctions";
import Stripe from "stripe";
import { ProductCard } from "../components/ProductCard";
import {v4} from "uuid"
const GetStripePrices=async ()=>{
  
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '',{
      apiVersion:'2022-11-15'
  })
  const prices = await stripe.prices.list({
      // limit: 3,
      active:true,
      created:{gt:1687321829},
      expand: ['data.product']
    });
  //console.log(prices.data,"") 
  if (prices.data.length===0){
    return null
  } 
  return prices.data
}


export default async function Home() {
 const prices = await GetStripePrices()
  return (
    <main className={`flex flex-col items-center px-2 py-3
    `}>
      <div className={`grid max-w-[768px] w-full
      grid-cols-1 
      sm:grid-cols-2`}>

     
     {prices?.map((price)=>{
      return (
        <ProductCard props={price} key={v4()}/>
      )
     })}
      </div>
    </main>
  )
}
