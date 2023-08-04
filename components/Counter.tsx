"use client"
import React, { useEffect, useRef, useState } from 'react'
import useStore from '../zustand/store'

export const Counter = () => {
    const {count}=useStore()
    const [active,setActive]=useState<boolean>(false)
    const numberOfRenders = useRef(0)
    useEffect(()=>{
        let timeout=null
        if(numberOfRenders.current>0){setActive(true)}
        timeout = setTimeout(()=>{
          setActive(false)
        },1000)

        return ()=>{
            clearTimeout(timeout)
        }
      },[count])
      useEffect(()=>{
        numberOfRenders.current++
      })
  return (
    <div
    className='flex flex-row items-center
     gap-1 w-10 h-10 justify-center
    opacity-100
    '
    >{ active? <span
    className=' flex flex-row items-center
    bg-[var(--t-1)] 
    px-3 
    text-[var(--bg-1)] rounded-md
    '
    >✓</span> : <span
    className='px-3'
    >{count}</span>}</div>
  )
}
