import React from 'react'

export const Sale = () => {
  return (
    <section  className='sale__container'>
        <div className='sale'>

       
        <div className='sale__left'>
            <h4>Launch Sale</h4>
            <span>Get 50% of with code "nextJs"</span>
        </div>
        <div className='sale__right'>
           <div className="sale__right__box">
            <h4>299</h4>
            <h6>Days</h6>
           </div>
           <div className="sale__right__box">
            <h4>08</h4>
            <h6>Hours</h6>
           </div>
           <div className="sale__right__box">
            <h4>56</h4>
            <h6>Minutes</h6>
           </div>
           <div className="sale__right__box">
            <h4>12</h4>
            <h6>Seconds</h6>
           </div>
        </div>
        </div>
    </section>
  )
}
