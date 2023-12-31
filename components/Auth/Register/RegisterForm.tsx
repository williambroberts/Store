"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../contexts/AuthProvider'
import { useNotification } from '../../../contexts/NotificationContext'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { fetchRegister } from '../../../utils/Fetch/fetchRegister'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { BiSolidErrorCircle } from 'react-icons/bi'
import styles from "./RegisterForm.module.css"
export const testWwrapper = {
  run:()=>{}
}
type dataType = {
  email:string,
  password:string;
  confirm:string
}
type dataReturn = {
  isValid:boolean;
  requirements:any
}
const handleRequirements = (data:dataType)=>{
  let requirements = {length:false,uppercase:false,lowercase:false,number:false,email:false,emailFormat:false,password:false,confirm:false}
  let count = 0
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordLength = /^[a-zA-Z0-9\._%+-]{8,}$/
  let passwordUppercase = /[A-Z]+/
  let passwordLowercase = /[a-z]+/
  let passwordNumeric = /[0-9]+/
  if (data.email){
    requirements.email = true
  }
  if (emailPattern.test(data.email)){
    requirements.emailFormat=true
  }
  if (data.password){
    requirements.password=true
  }
  
  if (passwordLength.test(data.password)){
    count++
    requirements.length=true
  }
  if (passwordLowercase.test(data.password)){
    count++
    requirements.lowercase=true
  }
  if (passwordNumeric.test(data.password)){
    count++
    requirements.number=true
  }
  if (passwordUppercase.test(data.password)){
    count++
    requirements.uppercase=true
  }
  if (data.password === data.confirm && data.password.length){
    requirements.confirm=true
  }
  let isValid = false
  if (requirements.email && requirements.emailFormat && requirements.confirm && requirements.password && count >=3){
    isValid = true
  }
  return {isValid,count,requirements}
}
export const RegisterForm = () => {
  const {setNotification}=useNotification()
  
  const router = useRouter()
  const postMutation = useMutation({
    mutationFn:fetchRegister,
    mutationKey:['register'],
    onSuccess:(data)=>{
      
      if (data.status && data.status===200){
        setNotification({
          time:3000,type:"success",message:"Success, please login",open:true
        })
        router.push("/login")
      }else {
        //console.log(data)
        setNotification({
          time:3000,type:"cancel",message:data.message,open:true
        })
      }
    
     
    },
    onError:(error)=>{
      setNotification({
        time:3000,type:"cancel",message:"An error has occured",open:true
      })
      setPw("")
      setPw2("")
    }
    
  })

    const handleDemo = ()=>{
      router.push(`/login?demo=true`)
    }
    const [email,setEmail]=useState("")
    const [pw,setPw]=useState("")
    const [pw2,setPw2]=useState("")
    const [requirements,setRequirements]=useState(null)
    const [isValid,setIsValid]=useState(false)
    useEffect(()=>{
     const res:any = handleRequirements({email:email,password:pw,confirm:pw2})
      setIsValid(res.isValid)
      //console.log(res.requirements)
      setRequirements(res.requirements)
    },[email,pw,pw2])


    const handleLogin = (e)=>{
      testWwrapper.run()
      e.preventDefault()
      const payload = {email:email,password:pw}
      postMutation.mutate(payload)
    }
  return (
    <section className={styles.section}>
     
    <form 
    onSubmit={handleLogin}
    className='auth__form'>
      <h1>Register</h1>
      <div className='w-full grid grid-cols-2'>

     
<div className={styles.criteria}>
    <h3>Email</h3>
  <div className='flex flex-nowrap w-full items-center gap-2'>
     Is entered {requirements?.email? <abbr><BsFillBagCheckFill/></abbr>:<i><BiSolidErrorCircle/></i> }
  </div>
  <div className='flex flex-nowrap w-full items-center gap-2'>
    Has valid format {requirements?.emailFormat?<abbr><BsFillBagCheckFill/></abbr>:<i><BiSolidErrorCircle/></i>}
  </div>
</div>
<div className={styles.criteria}>
    <h3>Password</h3>
  <div className='flex flex-nowrap w-full items-center gap-2'>
    8+ characters {requirements?.length? <abbr><BsFillBagCheckFill/></abbr>:<i><BiSolidErrorCircle/></i> }
  </div>
  <div className='flex flex-nowrap w-full items-center gap-2'>
    1+ uppercase letter {requirements?.uppercase?<abbr><BsFillBagCheckFill/></abbr>:<i><BiSolidErrorCircle/></i>}
  </div>
  <div className='flex flex-nowrap w-full items-center gap-2'>
    1+ lowercase letter {requirements?.lowercase?<abbr><BsFillBagCheckFill/></abbr>:<i><BiSolidErrorCircle/></i>}
  </div>
  <div className='flex flex-nowrap w-full items-center gap-2'>
    1+ number {requirements?.number?<abbr><BsFillBagCheckFill/></abbr>:<i><BiSolidErrorCircle/></i>}
  </div>
  <div className='flex flex-nowrap w-full items-center gap-2'>
    Confirm matches {requirements?.confirm?<abbr><BsFillBagCheckFill/></abbr>:<i><BiSolidErrorCircle/></i>}
  </div>
</div>
</div>
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
      disabled={isValid===false}
      className=''
      >{postMutation.isLoading? "Loading":"Register"}</button>
      <Link
      href="/"
      >Forgot Password</Link>

      <Link href="/login">
      Have an account already? Sign In
      </Link>
      <span className={styles.demo} onClick={handleDemo}>
        Sign in with Demo account
      </span>
    </form>
    </section>
  )
}
