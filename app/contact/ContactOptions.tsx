import React from 'react'
import {v4} from "uuid"
export const ContactOptions = () => {
    const options = [
        {
            heading:"heading",body:"Send us an email or use the form below",button:"Write message"
        }
    ]
  return (
    <div className='contact__option__container'>
        {options.map(item=><ContactOption key={v4()} heading={item.heading} body={item.body} button={item.button}/>)}
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
            <button>{button}</button>
        </section>
    )
}