"use client"
import React, { useState } from 'react'
import {v4}from "uuid"
import { useNotification } from '../contexts/NotificationContext'
import { useMutation } from '@tanstack/react-query'
import { fetchSubscribe } from '../utils/Fetch/fetchSubscribe'
import { fetchIsAuth } from '../utils/Fetch/fetchIsAuth'
import { createSuggestion } from '../utils/Fetch/fetchSuggest'
import { origin } from '../utils/base'
export const EmailBanner = () => {
  const {setNotification}=useNotification()
  let nums = Array(60).fill(1)
  nums = nums.map(i=>{
    return Math.floor(Math.random() * 100)/10
  })
    const [email,setEmail]=useState("")
   let subscribeMutation = useMutation({
    
    mutationFn:fetchSubscribe,
    onError:(error)=>{
      console.log(error)
    },
    onSuccess:(data)=>{
      console.log(data)
      setNotification({
        type:"success",time:3000,message:"Subscribed successfully ✓",open:true
      })
      setEmail("")
      
    }
   })
  const handleSubmit = (e:any)=>{
    e.preventDefault()
    //const url = `${origin}/store/email`
    const url = "api/email"
    let options: any = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', 
      body: JSON.stringify(email)
    };
    subscribeMutation.mutate({url,options})
    
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
            gap-4 sm:flex-row mt-5' onSubmit={handleSubmit}>
                <input autoComplete='on'
                className='email__input'
                type='text' value={email} 
                placeholder='Your email' required
                onChange={(e)=>setEmail(e.target.value)}/>
                <button
                
                className='email__button'
                type='submit'
                
                >{subscribeMutation.isLoading?"Loading":"Subscribe"}</button>
            </form>
        </div>
    </div>
  )
}
