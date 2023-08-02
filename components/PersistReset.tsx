"use client"

import React, { useEffect } from 'react'
import useStore from '../zustand/store'

export const PersistReset = () => {
    const {count,ResetCart}=useStore()


    function PersistZustandReset() {
        let DAY = 86400000
        let time = new Date().getTime()
        let lastEntryTime = localStorage.getItem("zustand-timeout")
        if (lastEntryTime!==null){
            let Difference = time-JSON.parse(lastEntryTime)
            if (Difference>DAY){
                ResetCart()
            }
        }
        localStorage.setItem("zustand-timeout",JSON.stringify(time))
    }
    useEffect(()=>{
        PersistZustandReset()
    },[count])
  return (
    <div></div>
  )
}
