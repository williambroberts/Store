import React from 'react'

export const OurProducts = () => {
  return (
  
    <section  className='sale__container light'>
    <div className='sale'>

   
    <div className='sale__left'>
    <h3 className="flex 
      py-0
      font-medium text-xl">
    About our products
    </h3>
    <span
    className="text-sm py-0 text-[var(--t-3)]"
    >Curating top quality products for you</span>
    </div>
    <div className='sale__right light'>
    <span
        className="about__icon"
        >Flexible</span>
         <span
        className="about__icon"
        >Professional</span>
         <span
        className="about__icon"
        >Fast Delivery</span>
         <span
        className="about__icon"
        >Transparent</span>
    </div>
    </div>
</section>
  )
}
