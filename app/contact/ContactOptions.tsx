"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import {v4} from "uuid"
export const ContactOptions = () => {
    const router = useRouter()
    const options = [
        {
            heading:"Email",body:"Send us an email or use the form below",button:"Write message"
        },
        {
            heading:"Support",body:"View our support page for FAQ",button:"View"
        }
    ]
    const handleSupport = ()=>{
        router.push("/support")
    }
    const handleMessage = ()=>{
        let nameInput:HTMLElement = document.querySelector('[data-id="name"]')
        nameInput?.focus()
        let form = document.querySelector('[data-id="form"]')
        form.scrollIntoView({behavior:'smooth'})//scroll to form
        //window.scrollBy(0,-50)//account for header
    }
  return (
    <div className='contact__option__container'>
        <section className='contact__option'>
            <h3>Message</h3>
            <p>Send us an email or use the form below</p>
            <button onClick={handleMessage}>Write Message</button>
        </section>
        <section className='contact__option'>
            <h3>Support</h3>
            <p>View our support page for FAQ</p>
            <button onClick={handleSupport}>View</button>
        </section>
    </div>
  )
}

interface itemProps {
    heading:string;
    body:string;
    button:string;
}
export const ContactOption = ({heading,button,body}:itemProps)=>{
    return (
        <section className='contact__option'>
            <h3>{heading}</h3>
            <p>{body}</p>
            <button>{button}</button>
        </section>
    )
}