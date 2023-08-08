"use client"
import React, { useState } from 'react'

export const EmailBanner = () => {
    const [email,setEmail]=useState("")
    const handleClick = (e)=>{
      e.preventDefault()
    }
  return (
    <div 
    aria-label='email'
    className='email__banner'>
         <div className='flex 
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
