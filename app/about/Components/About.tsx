import React from 'react'

export const About = () => {
  return (
    <article className='about__container'>
        <h2 className='subheading'>Meet us</h2>
        <section className='flex flex-col gap-4 text-[var(--t-1)]'>
            <h3 className='text-xl font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, ratione!</h3>
            <p className='text-sm text-[var(--t-3)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe nulla ad ducimus totam deserunt dolor, dolorum quo possimus sequi!</p>
        </section>
    </article>
  )
}
