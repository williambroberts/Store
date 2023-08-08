"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export const LoginForm = () => {
    const [email,setEmail]=useState("")
    const [pw,setPw]=useState("")

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
        <input 
        name='pw' id='pw'
        type='password' value={pw} onChange={(e)=>setPw(e.target.value)}/>
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
