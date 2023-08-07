"use client"
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'

export const Emailer = () => {
    const [email,setEmail]=useState("")
    const handleClick = (e)=>{
      e.preventDefault()
    }
  return (
    <div className='emailer'>
        <div className='emailer__image'>
            <div className='
            emailer__gradient
            text-3xl text-[#7d8084]'>
                <AiOutlineMail/>
            </div>

        </div>
        <div className='flex flex-col w-full p-6 gap-0'>
            <span className='font-medium text-white
            text-sm
            '>Never miss a new product</span>
            <span
            className='text-[#7d8084] text-sm'
            >Get notified when new products come out</span>
            <form className='flex flex-col gap-4 sm:flex-row mt-5'>
                <input
                className='emailer__input'
                type='text' value={email} 
                placeholder='Your email'
                onChange={(e)=>setEmail(e.target.value)}/>
                <button
                onClick={handleClick}
                className='emailer__button'
                type='submit'
                
                >Join</button>
            </form>
        </div>
    </div>
  )
}
