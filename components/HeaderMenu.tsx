import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineMoreHoriz } from 'react-icons/md'

export const HeaderMenu = () => {
    const [open,setOpen]=useState<boolean>(false)
  return (
    <button
    onClick={()=>setOpen((prev)=>!prev)}
    className='dropdown__button'
    aria-label='dropdown menu'>
        <MdOutlineMoreHoriz/>
        <div 
        data-state={open}
        className='dropdown__menu'>
            <Link href="/support" className=''>Support</Link>
            <Link href="/support" className=''>About</Link>
        </div>
    </button>
  )
}
