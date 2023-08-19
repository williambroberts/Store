"use client"
import React, { useState } from 'react'
import {v4}from "uuid"
export const EmailBanner = () => {
  let nums = Array(60).fill(1)
  nums = nums.map(i=>{
    return Math.floor(Math.random() * 100)/10
  })
    const [email,setEmail]=useState("")
    const handleClick = (e)=>{
      e.preventDefault()
    }
  return (
    <div 
    aria-label='email'
    className='email__banner'>
       <div className="lines">
          {nums.map((item,index)=> <div 
         
          className="line" key={v4()}>
            <div 
            style={{animationDelay:`${item}s`}}
            className="line__after"></div>
          </div>)}
         
        </div>
         <div className='flex  z-10
         max-w-[650px] items-center
         flex-col w-full p-6 gap-0'>
            <h2>Subscribe &amp; benefit right away!</h2>
            <h6
            className=''
            >Get notified when new products come out.
             No spam. Ever.
            </h6>
            <form className='flex flex-col
            w-full justify-center
            gap-4 sm:flex-row mt-5'>
                <input
                className='email__input'
                type='text' value={email} 
                placeholder='Your email'
                onChange={(e)=>setEmail(e.target.value)}/>
                <button
                onClick={handleClick}
                className='email__button'
                type='submit'
                
                >Subscribe</button>
            </form>
        </div>
    </div>
  )
}
