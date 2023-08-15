import React from 'react'
import {v4} from "uuid"
export const Marquee = () => {
  const names = [1,2,3,4,5,6]
  return (
    <aside className='marquee__wrapper'>
      <h2>What our customers say</h2>
    <div className='marquee__container'>
        <section className='marquee'>
          
          {names.map(item=>(<div key={v4()}>{item}</div>))}
        </section>
        <section className='marquee marquee2'>
        {names.map(item=>(<div key={v4()}>{item}</div>))}
        </section>
    </div>
    </aside>

  )
}
