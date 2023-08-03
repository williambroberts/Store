"use client"
import React, { useState } from 'react'
import IconSearch from './icons/zoom'
import { SearchBar } from './SearchBar'
interface theProps {
    prices:any;
}
export const SearchBarButton = ({prices}:theProps) => {
  const [isOpen,setIsOpen]=useState<boolean>(false)
    const open = (e)=>{
      console.log("clicked")
       
        let html = document.querySelector("html")
        try{
            setIsOpen(true)
            html.style.overflowY="hidden"
          
        }catch(err){
          console.log(err)
        }
    }
  return (
    <div className='w-full justify-start flex flex-row max-w-[768px]'>
 <button 
 onClick={open}
 className='
 search__button'>
<IconSearch/> Search
</button>

{isOpen &&<SearchBar 
isOpen={isOpen}
setOpen={setIsOpen}
prices={prices}/>}
    </div>
   
  )
}
