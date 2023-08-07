"use client"
import React, { useState } from 'react'

export const Emailer = () => {
    const [email,setEmail]=useState("")
  return (
    <div>
        <div>

        </div>
        <div>
            <span>Never miss a new product</span>
            <span>Get notified when new products come out</span>
            <form>
                <input type='text' value={email} 
                placeholder='Your email'
                onChange={(e)=>setEmail(e.target.value)}/>
            </form>
        </div>
    </div>
  )
}
