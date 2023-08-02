import Stripe from "stripe";
"use server"
export const GetStripePrices=async ()=>{
  
    const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET ?? '',{
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


