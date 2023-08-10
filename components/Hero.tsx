import React from 'react'
interface theProps {
  text:string;
}
export const Hero = ({text}:theProps) => {
  return (
    <div className='hero'>
        <h1
        className='title'
        aria-label=''
        role=''
        >{text}</h1>
    </div>
  )
}
