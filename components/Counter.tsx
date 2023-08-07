"use client"
import React, { useEffect, useRef, useState } from 'react'
import useStore from '../zustand/store'

export const Counter = () => {
    const {count}=useStore()
    
   
  
  return (
    <div
    className='flex flex-row items-center
     gap-1 w-10 h-10 justify-center
    opacity-100
    '
    > <span
    className='px-3'
    >{count}</span></div>
  )
}
