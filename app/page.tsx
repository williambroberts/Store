
//import { GetStripePrices } from "@/Functions/ClientFunctions";
import Stripe from "stripe";
import { ProductCard } from "../components/ProductCard";
import {v4} from "uuid"
import IconShop from "../components/icons/shop";
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
    <main className={`flex flex-col items-center px-2 py-3 gap-12
    `}>
      <div className="flex flex-col items-start justify-start
      gap-2 max-w-[768px] w-full py-3
      ">
      <h2
      className="
      text-3xl font-bold 
      flex flex-row items-center gap-2 py-8"
      >Welcome to SideStore <IconShop/></h2>
      <p className="font-light">
      Welcome to our shop, where creativity finds its canvas, and memories come to life through stunning imagery.  
      </p>
      </div>
     
      <div className={`grid max-w-[768px] w-full
      grid-cols-1 gap-2
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
