"use client"
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { fetchLogin } from '../../utils/Fetch/fetchLogin'
import { useRouter } from 'next/navigation'
export const testWrapper = {
  run:()=>{}
}
export const LoginForm = () => {
  const router = useRouter()
  const postMutation = useMutation({
    mutationFn:fetchLogin,
    mutationKey:['login'],
    onSuccess:(data)=>{
      //save to auth state
      //redirect home
      console.log(data)
      let cookies = document.cookie
      //console.log(cookies)
     // router.push("/")
     //todo handle errors but good request
     
    },
    onError:(error)=>{
      
    }
  })
    const [email,setEmail]=useState("bill@email.com")
    const [pw,setPw]=useState("274759")
    const [type,setType]=useState<"password"|"text">("password")
    const handleLogin = (e:React.FormEvent<HTMLFormElement>)=>{
      testWrapper.run()
      e.preventDefault()
      const payload = {email:email,password:pw}
      postMutation.mutate(payload)

    }
  return (
    <form 
    data-testid="auth-form"
    onSubmit={handleLogin}
    className='auth__form'>
      <h1>Login</h1>
        <label 
        className=''
        htmlFor='email'>Email</label>
        <input 
        className='' autoComplete='on'
        name='email' id='email'
        type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        
        <label htmlFor='pw'>Password</label>
        <div className='flex flex-row flex-nowrap 
        relative w-full items-center'>
        <input 
        data-testid="pw"
        name='pw' id='pw' autoComplete='off'
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
