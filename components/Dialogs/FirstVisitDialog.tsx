"use client"
import React, { useEffect } from 'react'
import styles from "./FirstVisitDialog.module.css"
import { useNotification } from '../../contexts/NotificationContext'
import { AiOutlineClose } from 'react-icons/ai'
import mobile from "../../public/pexels-leonid-altman-12883025.jpg"
import laptop from "../../public/pexels-leonid-altman-12883031.jpg"
import Image from 'next/image'
import Link from 'next/link'
export const FirstVisitDialog = () => {
    const {setFirstVisit}=useNotification()
  const handleClose = ()=>{
    localStorage.setItem('firstVisit',JSON.stringify(false))
    setFirstVisit(false)
    let d = document.querySelector('dialog')
    d.close()
    console.log(d)
  }
  const handleClick = (e:any)=>{
    let article = document.querySelector('[data-id="fta"]')
    let rect = article.getBoundingClientRect()
    if (e.clientY > rect.bottom || e.clientY < rect.top ||
      e.clientX < rect.left || e.clientX > rect.right
      ){
      localStorage.setItem('firstVisit',JSON.stringify(false))
    setFirstVisit(false)
    let d = document.querySelector('dialog')
    d.close()
    console.log(d)
      }
    return
  }

 
    useEffect(()=>{
      //todo if not first fisit 
      let d:any = document.getElementById('dialog')
      
      try {
        let firstVisit = localStorage.getItem('firstVisit')
        if (firstVisit){
          if (JSON.parse(firstVisit)!==false){
            
            d.showModal()
          }
        }else {
         
          d.showModal()
        }
      }catch(e){

      }
      
    },[])
    
  return (
    <div>

   
    <dialog id='dialog'>
<div
    onClick={handleClick}
    className={styles.main}
    data-theme="light"
    >
    <article className={styles.article} data-id="fta">
      <button className={styles.close} onClick={handleClose}><AiOutlineClose/></button>
      <h1>Welcome</h1>
      <h3 className='text-center'><strong>Login</strong> or <strong>Register</strong> for <strong>10%</strong> off all our products!</h3>
      <div className='grid grid-cols-2 sm:grid-cols-2 gap-4 w-full'>
        <div className={styles.skeleton}>
          <Image src={laptop} alt='' fill priority sizes='200px' 
          placeholder='blur'
          />
        </div>
        <div className={styles.skeleton}>
          <Image src={mobile} alt='' fill priority sizes='200px' 
          placeholder='blur'
          />
        </div>
      </div>
      <div className='flex items-center w-full justify-between'>
      <Link href={"/login"} className='product__card__add' onClick={handleClose}>Login</Link>
      <Link href={"/register"} className='product__card__view' onClick={handleClose}>Register</Link>
      </div>
      

    </article>
    </div>
    </dialog>
    </div>
  )
}
