"use client"
import React from 'react'
import { useReactTheme } from './ThemeContext'
import {VscSymbolColor} from "react-icons/vsc"
export const GreyScaleButton = () => {
    const {setIsGreyScale,isGreyScale}=useReactTheme()

    const handleClick = ()=>{
        setIsGreyScale((prev)=>!prev)
        document.documentElement.classList.toggle("greyscale")
    }
  return (
    <button
    onClick={()=>handleClick()}
    className='theme__button'
    aria-label='grey scale'
    ><VscSymbolColor/>
    {/* <div 
    style={{display:isGreyScale?"none":""}}
    className='color__dot'></div> */}
    </button>
  )
}
