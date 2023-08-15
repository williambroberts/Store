import React from 'react'

export const About = () => {
  return (
    <article className='about__container'>
        <h2 className='subheading'>Meet us</h2>
        <section className='flex flex-col gap-4 text-[var(--t-1)]'>
            <h3 className='text-xl font-semibold'>About us, our company and our manifesto!</h3>
            <p className='text-sm text-[var(--t-3)]'>We aim to sell the highest quality mockups to you. Our products are hand selected with close attention and absolute care 
            <strong className='px-0.5'><em>Every time!</em></strong>
            </p>
        </section>
    </article>
  )
}
