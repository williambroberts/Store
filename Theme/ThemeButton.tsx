"use client"
import React, { useState } from 'react'
import { useReactTheme } from './ThemeContext' 
import IconSun from '../components/icons/sun'
import IconBxsMoon from '../components/moon'
import { BsMoonFill, BsSun } from 'react-icons/bs'


const ReactColorThemeButton = () => {
    const {updateTheme,theme}=useReactTheme()
    const [open,setOpen]=useState<boolean>(false)

    
      const handleOpen = (e)=>{
        console.log(e.target.tagName)
        if (e.target.className==="close__"){return}
        if (e.target.tagName==='BUTTON'){return}
        //console.log("handleOpen")
        setOpen(true)
        document.documentElement.style.overflowY="hidden"
        //document.documentElement.style.pointerEvents="none"
        //document.addEventListener('mousedown',close)
      }
      const handleClose = (e)=>{
        console.log(e.target,"close",e.target.tagName)
        setOpen(false)
        //console.log(e.target)
        document.documentElement.style.overflowY="auto"
      }

      const handleUpdate= (theme)=>{
        updateTheme(theme)
        setOpen(false)
        document.documentElement.style.overflowY="auto"
      }
      return (


        <div 
        role='button'
        data-testid="themeButton"
        aria-label='dark mode menu'
        className={`theme__button ${theme==="light"? "light":"dark"}`} 
        onClick={(e)=>handleOpen(e)}>
          {theme==="dark"? <BsMoonFill/> :<BsSun/> }
          <div
          data-testid="close__"
          style={{display:open?"flex":"none"}}
          onClick={handleClose}
          className='close__'
          // data-state={open}
          ></div>
            <div
           data-testid="themeMenu"
            className={`theme__button__menu`}
            data-state={open}
            style={{display:open?"flex":"none"}}
            >
                <button
                
                onClick={()=>handleUpdate("light")}>Light</button>
                <button onClick={()=>handleUpdate("dark")}>Dark</button>
                <button onClick={()=>handleUpdate("system")}>System</button>
            </div>
          </div>
          
      )
    

}

export default ReactColorThemeButton