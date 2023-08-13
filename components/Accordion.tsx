"use client"
import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs';
interface theProps {
    question:string;
    answer:string;
}
export const Accordion = ({question,answer}:theProps) => {
    
    const id = React.useId()
  return (
    <div className='accordion'>
      <input 
      className=''
      type="checkbox" id={id} />
      <label 
      role='button'
      aria-label='toggle accordion'
      htmlFor={id}>{question}
      <div><BsPlusLg/></div>
      
      </label>
      <div>{answer}</div>
    </div>
  )
}
