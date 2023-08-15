import React from 'react'
import {v4} from "uuid"
export const Marquee = () => {
  const names = [1,2,3,4,5,6]
  return (
    <aside className='marquee__wrapper'>
      <h2>What our customers say</h2>
    <div className='marquee__container'>
        <section className='marquee'>
          
         {names.map(item=>(<MarqueeItem key={v4()}/>))}
        </section>
        <section className='marquee marquee2'>
        {names.map(item=>(<MarqueeItem key={v4()}/>))}
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