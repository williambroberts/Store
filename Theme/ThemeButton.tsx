"use client"
import React, { useState } from 'react'
import { useReactTheme } from './ThemeContext' 
import IconSun from '../components/icons/sun'
import IconBxsMoon from '../components/moon'
import { BsMoonFill, BsSun } from 'react-icons/bs'


const ReactColorThemeButton = () => {
    const {updateTheme,theme}=useReactTheme()
    const [open,setOpen]=useState<boolean>(false)
   


      return (


        <button 
        aria-label='dark mode menu'
        className={`theme__button ${theme==="light"? "light":"dark"}`} 
        onClick={()=>setOpen((prev)=>!prev)}>
          {theme==="dark"? <BsMoonFill/> :<BsSun/> }
            <div

            className={`theme__button__menu `}
            data-state={open}
            >
                <button
                
                onClick={()=>updateTheme("light")}>Light</button>
                <button onClick={()=>updateTheme("dark")}>Dark</button>
                <button onClick={()=>updateTheme("system")}>System</button>
            </div>
          </button>
          
      )
    

}

export default ReactColorThemeButton