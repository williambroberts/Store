"use client"
import React, { useState } from 'react'
import IconSearch from './icons/zoom';
import  ReactDOM  from 'react-dom';
import { SearchBarResult } from './SearchBarResult';
interface theProps {
    prices:any;
    isOpen:boolean;
    setOpen:Function;
}
export const SearchBar = ({prices,isOpen,setOpen}:theProps) => {
    const [query,setQuery]= useState<string>("")
    const handleClick = (e)=>{
        let portal = document.querySelector(".search__portal")
        let R = portal.getBoundingClientRect()
        if (e.clientX<R.left || e.clientX>R.right||
            e.clientY<R.top || e.clientY>R.bottom){
                setQuery("")
                
                setOpen(false)
                let html = document.querySelector("html")
                html.style.overflowY="auto"
            }
        
    }
  return ReactDOM.createPortal(
    <div 
   
    onClick={handleClick}
    className='search__portal__container'
    data-id="search">
        <div className='search__portal'>

        
        <form className='search__form
        '>
            {/* <button 
            formMethod='dialog' 
            type="submit">close</button> */}
           
                <IconSearch/>
            
            <input
            autoFocus
            placeholder='Search products...'
            className='flex-auto'
            type='text' 
            onChange={(e)=>setQuery((e.target.value).toLowerCase())}
            />
        </form>
        <div className='flex flex-col items-center
        gap-2 w-full overflow-y-auto transition-all duration-200
        '>
            {query===""? null:
            prices.filter((price)=>price.product.name.toLowerCase().includes(query))
            .map((price)=><SearchBarResult
            price={price}
            key={price.id}/>
            )}
        </div>
        </div>
    </div>,document.getElementById("portal")
  )
}
