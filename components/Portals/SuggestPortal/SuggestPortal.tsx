import React, { useState } from 'react'
import ReactDom from "react-dom"
import styles from "./SuggestPortal.module.css"
import {CgCloseO} from "react-icons/cg"
import { useNotification } from '../../../contexts/NotificationContext';
import { useMutation } from '@tanstack/react-query';
import { createSuggestion } from './suggestionFetch';
interface theProps {
  open:boolean;
  setOpen:Function;
}
const initialData = {name:"",email:"",suggestion:""}
export const SuggestPortal = ({open,setOpen}:theProps) => {
  const [data,setData]=useState(initialData)
  const {setNotification}=useNotification()
  const handleClose = ()=>{
    setOpen(false)
    document.documentElement.style.overflowY="auto"
  }
  const shut = (e:any)=>{
    //console.log(e.target)
    if (e.target.className==="suggest__portal__container"){
      setOpen(false)
      document.documentElement.style.overflowY="auto"
    }
  }
  const postSuggestion = useMutation({
    mutationFn:createSuggestion,
    onSuccess:(data)=>{
      setData(initialData)
      setNotification({
        time:3000,type:"success",
        message:"Suggestion has been made ✓",
        open:true,
      })
    },
    onError(error) {
      setNotification({
        time:3000,type:"error",message:"An error has occured",
        open:true
      })
    },
  })
  const handleSubmit = (e:any)=>{
    
    //e.preventDefault()
    
    const url = `http://localhost:5000/suggest`
    const options = {
      method:"POST",
      headers:{'Content-Type':'application/json'},
      credendtials:'include',
      body:JSON.stringify(data)
    }

    postSuggestion.mutate({url,options})

    
    return
    
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
            <form 
            onSubmit={handleSubmit}
            className={styles.form} 
           action={`https://formsubmit.co/489a8eabf364548a8643846759ca5731`} method='POST'
            >
    <input required type='text' value={data.name} onChange={(e)=>setData((prev)=>({...prev,name:e.target.value}))}
    placeholder='Your name' id="name" name='name' />
  <input  required type='text' value={data.email} onChange={(e)=>setData((prev)=>({...prev,email:e.target.value}))}
    placeholder='Your email' id="email" name='email' />
      <input required type='text' value={data.suggestion} onChange={(e)=>setData((prev)=>({...prev,suggestion:e.target.value}))}
    placeholder='Your suggestion' id="suggestion" name='suggestion' />
    <button 
    className='submit'>Submit</button>
            </form>
        </div>
    </div>,document.getElementById("portal")
  )
}
