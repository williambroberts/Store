
//import { GetStripePrices } from "@/Functions/ClientFunctions";
import Stripe from "stripe";

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
  console.log(prices.data.length,"here🤠") 
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
