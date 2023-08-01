import React from 'react'

interface theProps {
    delay:number;
    children:React.ReactNode;
}
const Animator = ({children,delay}:theProps) => {
  return (
    <div
    style={{animationDelay:`${delay}s`}}
    className='Animator'
    >{children}</div>
  )
}

export default Animator