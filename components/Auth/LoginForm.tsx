"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'

export const LoginForm = () => {
    const [email,setEmail]=useState("")
    const [pw,setPw]=useState("")
    const [type,setType]=useState<"password"|"text">("password")
    const handleLogin = (e)=>{
      e.preventDefault()
    }
  return (
    <form 
    onSubmit={handleLogin}
    className='auth__form'>
      <h1>Login</h1>
        <label 
        className=''
        htmlFor='email'>Email</label>
        <input 
        className=''
        name='email' id='email'
        type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        
        <label htmlFor='pw'>Password</label>
        <div className='flex flex-row flex-nowrap 
        relative w-full items-center'>
        <input 
        name='pw' id='pw'
        type={type} value={pw} onChange={(e)=>setPw(e.target.value)}/>
        <div 
        role='button'
        aria-label='view password as text'
        onMouseDown={()=>setType("text")}
        onMouseUp={()=>setType("password")}
        className='view__password'>
          <AiOutlineEye/>
        </div>
        </div>
      <button
      disabled={pw.length===0||email.length===0}
      className=''
      >Login</button>
      <Link
      href="/"
      >Forgot Password</Link>

      <Link href="/register">
      Dont have an account yet? Register
      </Link>
    </form>
  )
}
