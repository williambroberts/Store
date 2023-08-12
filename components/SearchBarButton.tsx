"use client"
import React, { useEffect, useState } from 'react'
import IconSearch from './icons/zoom'
import { SearchBar } from './Portals/SearchBarPortal'
import { GetStripePrices } from '../Functions/ClientFunctions'
interface theProps {

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
 aria-label='search products'
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
