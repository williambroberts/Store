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
    <div>404 Response</div>
  )
}
export default Custom404