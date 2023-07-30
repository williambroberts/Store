
//import { GetStripePrices } from "@/Functions/ClientFunctions";
import Stripe from "stripe";

export const GetStripePrices=async ()=>{
  
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '',{
      apiVersion:'2022-11-15'
  })
  const prices = await stripe.prices.list({
      // limit: 3,
      created:1690701377921
    });
  console.log(prices.data,"here") 
  if (prices.data.length===0){
    return null
  } 
  return prices.data
}


export default async function Home() {
 const prices = await GetStripePrices()
  return (
    <main className={``}>
     hi
    </main>
  )
}
