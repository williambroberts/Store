"use client"
import React, { useState } from 'react'
import { useReactTheme } from './ThemeContext' 
import IconSun from '../components/icons/sun'
import IconBxsMoon from '../components/moon'
import { BsMoonFill, BsSun } from 'react-icons/bs'


const ReactColorThemeButton = () => {
    const {updateTheme,theme}=useReactTheme()
    const [open,setOpen]=useState<boolean>(false)

    const close = (e:any)=>{
      console.log("closed",open)
      
      let menu = document.querySelector('.theme__button__menu')
      let rect= menu.getBoundingClientRect()
      console.log(e.clientX,rect.left,rect.right)
      if (e.clientX <rect.left || e.clientX > rect.right
        || e.clientY < rect.top || e.clientY > rect.bottom){
          setOpen(false)
          console.log("ran closed")
          document.removeEventListener("mousedown",close)
          return
        }
    }
      const handleOpen = (e)=>{
        if (e.target.className==="close__"){return}
        console.log("handleOpen")
        setOpen(true)
        document.documentElement.style.overflowY="hidden"
        //document.documentElement.style.pointerEvents="none"
        //document.addEventListener('mousedown',close)
      }
      const handleClose = (e)=>{
        console.log(e.target,"close")
        setOpen(false)
        console.log(e.target)
        document.documentElement.style.overflowY="auto"
      }

      const handleUpdate= (theme)=>{
        updateTheme(theme)
        setOpen(false)
        document.documentElement.style.overflowY="auto"
      }
      return (


        <button 
        
        aria-label='dark mode menu'
        className={`theme__button ${theme==="light"? "light":"dark"}`} 
        onClick={(e)=>handleOpen(e)}>
          {theme==="dark"? <BsMoonFill/> :<BsSun/> }
          <div
          style={{display:open?"block":"none"}}
          onClick={handleClose}
          className='close__'
          // data-state={open}
          ></div>
            <div
           
            className={`theme__button__menu `}
            data-state={open}
            >
                <button
                
                onClick={()=>handleUpdate("light")}>Light</button>
                <button onClick={()=>handleUpdate("dark")}>Dark</button>
                <button onClick={()=>handleUpdate("system")}>System</button>
            </div>
          </button>
          
      )
    

}

export default ReactColorThemeButton