import React from 'react'
import {reviews} from "./Reviews"
import {v4} from "uuid"
export const Marquee = () => {
  
  return (
    <aside className='marquee__wrapper'>
      <h2>What our customers say</h2>
    <div className='marquee__container'>
        <section className='marquee'>
          
         {reviews.map((item,index)=>(<MarqueeItem key={v4()} heading={reviews[index]?.heading} body={reviews[index]?.body}/>))}
        </section>
        <section className='marquee marquee2'>
        {reviews.map((item,index)=>(<MarqueeItem key={v4()} heading={reviews[index]?.heading} body={reviews[index]?.body}/>))}
        </section>
    </div>
    </aside>

  )
}

interface itemProps {
  heading?:String;
  body?:String;
}
const MarqueeItem = ({heading,body}:itemProps)=>{
  return(
    <div className='marquee__item'>
      <h3>{heading || "Heading"}</h3>
      <p>{body ||"A really good product. Very nice. Love it 💛"}</p>
    </div>
  )
}