"use client"
import React, { useEffect, useState } from 'react'
import IconSearch from './icons/zoom'
import { SearchBar } from './SearchBar'
import Stripe from 'stripe'
interface theProps {
   
}
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
  //console.log(prices.data[0],"") 
  if (prices.data.length===0){
    return null
  } 
  return prices.data
}


export const SearchBarButton = ({}:theProps) => {
  const [isOpen,setIsOpen]=useState<boolean>(false)
  const [prices,setPrices]=useState([])
    const open = async(e)=>{
      console.log("clicked")
       
        let html = document.querySelector("html")
        try{
            setIsOpen(true)
            html.style.overflowY="hidden"
          
        }catch(err){
          console.log(err)
        }
    }

    useEffect(()=>{
      const fetchPrices = async ()=>{
        let prices = await GetStripePrices()
        setPrices(prices)
      }
      fetchPrices()
     
    },[])
  return (
    <div className='w-full 
    mx-2
    justify-start flex flex-row'>
 <button 
 onClick={open}
 className='
 search__button'>
<IconSearch/> <span
className='hidden sm:flex'
>Search</span>
</button>

{isOpen &&<SearchBar 
isOpen={isOpen}
setOpen={setIsOpen}
prices={prices}/>}
    </div>
   
  )
}
