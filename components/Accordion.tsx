"use client"
import React, { useState } from 'react'
interface theProps {
    question:string;
    answer:string;
}
export const Accordion = ({question,answer}:theProps) => {
    const [open,setOpen]=useState<boolean>(false)
  return (
    <div 
    aria-label='open accordion'
        onClick={()=>setOpen((prev)=>!prev)}
    className='accordion'>
        <div 
        
        className="accordion__question">
            <p>{question}</p>
            <button
            className=''
            >{open?
            "X":"+"
            }</button>
            </div>
            <div className={`accordion__answer ${open?"open":""} `}>
               {open?<p>{answer}</p>:<p>{open}</p>} 
            </div>
        
    </div>
  )
}
