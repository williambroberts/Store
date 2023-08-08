"use client"
import React, { useState } from 'react'
import IconSearch from '../icons/zoom';
import  ReactDOM  from 'react-dom';
import { SearchBarResult } from '../SearchBarResult';
import IconCross1 from '../icons/cross';
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
    className={`search__portal__container ${query!==""?"":""}`}
    data-id="search">
        <div className={`search__portal ${query!==""?"noblur":""}`}>

        
        <form className='search__form
        '>
           
           
                <IconSearch/>
            
            <input
            autoFocus
            placeholder='Search products...'
            className='flex-auto'
            type='text' 
            value={query}
            onChange={(e)=>setQuery((e.target.value).toLowerCase())}
            />
            <div
            className='search__portal__reset'
            onClick={()=>setQuery("")}
            ><IconCross1/></div>
        </form>
        <div 
        style={{height:`${query===""?"0px":"auto"}`}}
        className='flex flex-col items-center
        gap-2 w-full overflow-y-auto transition-all 
        ease-in-out flex-auto bg-[#2b2b2b]
        duration-200
        '>
            {query===""? null:
            prices.filter((price)=>price.product.name.toLowerCase().includes(query))
            .map((price)=><SearchBarResult
            setOpen={setOpen}
            price={price}
            key={price.id}/>
            )}
        </div>
        </div>
    </div>,document.getElementById("portal")
  )
}
