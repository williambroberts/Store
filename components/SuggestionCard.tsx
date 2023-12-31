"use client"
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { SuggestPortal } from './Portals/SuggestPortal/SuggestPortal'
import { jestClick } from '../utils/Helpers/jestfn'
import { jestObj } from '../utils/Helpers/jestObj'

export const SuggestionCard = () => {
    const [open,setOpen]=useState<boolean>(false)
    const handleClick = ()=>{
      jestClick()
      jestObj.fn()
      if (open){return}
      setOpen(true)
      //console.log(open)
      document.documentElement.style.overflowY="hidden"
    }
  return (
    <div 
    onClick={handleClick}
    role='button'
    data-testid="suggestCard"
    aria-label='suggest product'
    className='suggest__card'>
        <button
        data-testid="suggestButton"
        aria-label='suggest product'
        ><AiOutlinePlus/></button>
        <span>Suggest Product</span>
        {open && <SuggestPortal
        open={open} setOpen={setOpen}
        />}
    </div>
  )
}
