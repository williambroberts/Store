"use client"
import React from 'react'
import {v4} from "uuid"
export const ContactOptions = () => {
    const options = [
        {
            heading:"Email",body:"Send us an email or use the form below",button:"Write message"
        },
        {
            heading:"Support",body:"View our support page for FAQ",button:"View"
        }
    ]
  return (
    <div className='contact__option__container'>
        <section className='contact__option'>
            <h3>Message</h3>
            <p>Send us an email or use the form below</p>
            <button>Write Message</button>
        </section>
        <section className='contact__option'>
            <h3>Support</h3>
            <p>View our support page for FAQ</p>
            <button>View</button>
        </section>
    </div>
  )
}

interface itemProps {
    heading:string;
    body:string;
    button:string;
}
const ContactOption = ({heading,button,body}:itemProps)=>{
    return (
        <section className='contact__option'>
            <h3>{heading}</h3>
            <p>{body}</p>
            <button >{button}</button>
        </section>
    )
}