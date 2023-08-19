"use client"
import Link from 'next/link'
import React, { useState } from 'react'
export const testWwrapper = {
  run:()=>{}
}
export const RegisterForm = () => {
    const [email,setEmail]=useState("")
    const [pw,setPw]=useState("")
    const [pw2,setPw2]=useState("")

    const handleLogin = (e)=>{
      testWwrapper.run()
      e.preventDefault()
    }
  return (
    <form 
    onSubmit={handleLogin}
    className='auth__form'>
      <h1>Register</h1>
        <label 
        className=''
        htmlFor='email'>Email</label>
        <input 
        className=''
        name='email' id='email'
        type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor='pw'>Password</label>
        <input 
        name='pw' id='pw'
        type='password' value={pw} onChange={(e)=>setPw(e.target.value)}/>
         <label htmlFor='pw2'>Confirm Password</label>
        <input 
        name='pw2' id='pw2'
        type='password' value={pw2} onChange={(e)=>setPw2(e.target.value)}/>
      <button
      disabled={pw.length===0||email.length===0 ||pw2.length===0}
      className=''
      >Register</button>
      <Link
      href="/"
      >Forgot Password</Link>

      <Link href="/register">
      Have an account already? Sign In
      </Link>
    </form>
  )
}
