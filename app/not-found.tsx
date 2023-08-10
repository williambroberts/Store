"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
const delay = 2000
const Custom404 = () => {

    useEffect(()=>{
        setTimeout(()=>{
            window.location.assign("/")
        },delay)
       
    },[])
  return (
    <main>
      <section className='not__found'>
      <h2 className='subheading'>Page not found</h2>
      <span
      className=''
      >The page you are looking for might have been removed had its name changed or is temporarily unavailable.</span>
      </section>
     
    
    </main>
  )
}
export default Custom404