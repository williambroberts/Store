"use client"
import React, { useEffect } from 'react'
const delay = 2000
const Custom404 = () => {

    useEffect(()=>{
        setTimeout(()=>{
            window.location.assign("/")
        },delay)
       
    },[])
  return (
    <main>404 Response</main>
  )
}
export default Custom404