import React, { useState } from 'react'
import ReactDom from "react-dom"
import {CgCloseO} from "react-icons/cg"
interface theProps {
  open:boolean;
  setOpen:Function;
}
export const SuggestPortal = ({open,setOpen}:theProps) => {
  const [data,setData]=useState({name:"",email:"",idea:""})
  const handleClose = ()=>{
    setOpen(false)
    document.documentElement.style.overflowY="auto"
  }
  const shut = (e)=>{
    console.log(e.target)
    if (e.target.className==="suggest__portal__container"){
      setOpen(false)
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return ReactDom.createPortal(
    <div 
    onClick={shut}
    className='suggest__portal__container'>
        <div className='suggest__portal'>
          <div className='flex flex-row w-full 
          items-center
          justify-between'>
            <h3>Suggest an idea</h3>
            <button className='close'
            onClick={handleClose}
            aria-label='close suggest'
            ><CgCloseO/></button>
            
          </div>
          <p>If you wish to suggest a product you would like to see, please use the form below.</p>
            <form>
    <input type='text' value={data.name} onChange={(e)=>setData((prev)=>({...prev,name:e.target.value}))}
    placeholder='Your name' id="name"/>
  <input type='text' value={data.email} onChange={(e)=>setData((prev)=>({...prev,email:e.target.value}))}
    placeholder='Your email' id="email"/>
      <input type='text' value={data.idea} onChange={(e)=>setData((prev)=>({...prev,idea:e.target.value}))}
    placeholder='Your idea' id="idea"/>
    <button 
    onClick={handleSubmit}
    className='submit'>Submit</button>
            </form>
        </div>
    </div>,document.getElementById("portal")
  )
}
