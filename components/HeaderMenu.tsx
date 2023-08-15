import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineMoreHoriz } from 'react-icons/md'

export const HeaderMenu = () => {
    const [open,setOpen]=useState<boolean>(false)
    function handleClick (){
      document.addEventListener("click",close)
      setOpen(prev=>!prev)
      
    }
    function close(e){
      let button = document.querySelector('.dropdown__button')
      let rect = button.getBoundingClientRect()
      if (e.clientX<rect.left || e.clientX>rect.right|| e.clientY<rect.top || e.clientY>rect.bottom){
        setOpen(false)
      }
    }
  return (
    <button
    
    
    onClick={handleClick}
    className='dropdown__button'
    aria-label='dropdown menu'>
        <MdOutlineMoreHoriz/>
        <div 
        data-state={open}
        className='dropdown__menu'>
            <Link href="/support" className=''>Support</Link>
            {/* <Link href="/support" className=''>About</Link> */}
        </div>
    </button>
  )
}
