import Link from 'next/link';
import React from 'react'
interface theProps {
    open:boolean;
}
export const Hamburger = ({open}:theProps) => {
  return (
    <div className={`hamburger ${open? "open":""}`}>
        <nav className='flex flex-col'>
                <Link href={"/"}>Home</Link>
                
        </nav>
    </div>
  )
}
