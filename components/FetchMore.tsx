import { useSearchParams } from 'next/navigation';
import React, { useLayoutEffect, useState } from 'react'
import Stripe from 'stripe';
import Animator from './Animator';
import { ProductCard } from './ProductCard';
const GetStripePrices=async ()=>{
  
    const stripe = new Stripe('sk_test_51NJVyhDt6cUT5aTWuiobYjYMmg9RhpFdJ4b8MhPMuOs2ahr3T41eoR4Q6h8x9506DDpLyK2U89gyHiQ2cxCY5FzT00CFlik7Hj' ?? '',{
        apiVersion:'2022-11-15'
    })
    const prices = await stripe.prices.list({
        // limit: 3,
        active:true,
        created:{gt:1691788125},
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
interface theProps {
    searchParams:any;
}
export const FetchMore = ({searchParams}:theProps) => {
   const [prices,setPrices]=useState(null)
    useLayoutEffect(()=>{
        const fetchPrices = async ()=>{
            let prices = await GetStripePrices()
            setPrices(prices)
        }
        fetchPrices()
   },[])
    
  return (
    <div className='w-full max-w-[768px] grid grid-cols-1
    sm:grid-cols-2 gap-2 py-3
    '>
            {prices?.filter((price)=>price.id!==searchParams.get("id")).slice(0,2).map((price,index)=>
            <Animator delay={index*0.13} key={price.id}>
                <ProductCard props={price} />
            </Animator>
            )}
    </div>
  )
}
