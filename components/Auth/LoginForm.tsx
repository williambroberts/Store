"use client"
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { fetchLogin } from '../../utils/Fetch/fetchLogin'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from "./LoginForm.module.css"
import {PiSelectionForegroundDuotone} from "react-icons/pi"
import { useNotification } from '../../contexts/NotificationContext'
import { useAuth } from '../../contexts/AuthProvider'
export const testWrapper = {
  run:()=>{}
}
export const LoginForm = () => {
  const {setNotification}=useNotification()
  const {setUser}=useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const postMutation = useMutation({
    mutationFn:fetchLogin,
    mutationKey:['login'],
    onSuccess:(data)=>{
      if (data.status && data.status!==200){
        setNotification({
          time:3000,type:"cancel",message:data.message,open:true
        })
      }
      console.log(data)
      if (data.status===200 && data.success){
        const user = {email:data.user_email,isAuth:true}
       setUser(user)
       setNotification({
        time:3000,type:"success",message:"Logged in succesfully",open:true
      })
        localStorage.setItem('user',JSON.stringify(user))
        //router.push("/")
      }
     
    },
    onError:(error)=>{
      setNotification({
        time:3000,type:"cancel",message:"An error has occured",open:true
      })
      setPw("")
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
   useEffect(()=>{
    let demo = searchParams.get("demo")
    if (demo==="true"){
      setEmail("demo@email.com")
      setPw("Demo1234")
      setNotification({
        type:"success",time:3000,message:"Ready to sign in ",open:true
      })
    }
   },[])
  return (
    <form 
    data-testid="auth-form"
    onSubmit={handleLogin}
    className='auth__form'>
      <h1>Login</h1>
        <label 
        className=''
        htmlFor='email'>Email</label><span className={styles.demo} onClick={()=>setEmail("demo@email.com")}>Click to use demo:demo@email.com <PiSelectionForegroundDuotone/></span>
        <input 
        className='' autoComplete='on'
        name='email' id='email'
        type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        
        <label htmlFor='pw'>Password</label><span className={styles.demo} onClick={()=>setPw("Demo1234")}>Click to use demo:Demo1234 <PiSelectionForegroundDuotone/></span>
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
      >{postMutation.isLoading?<span>Loading</span>:<span>Login</span>}</button>
      <Link
      href="/"
      >Forgot Password</Link>

      <Link href="/register">
      Dont have an account yet? Register
      </Link>
    </form>
  )
}
