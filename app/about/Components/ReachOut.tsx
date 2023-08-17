import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

export const ReachOut = () => {
  return (
    <article className='about__container'>
        <h2 className='subheading'>More</h2>
        <section className='flex flex-col gap-4 parent'>
          <MoreLink href='/' heading='View our products'/>
          <MoreLink href='/support' heading='See our FAQ'/>
          <MoreLink href='/contact' heading='Get in touch'/>
        </section>
    </article>
  )
}


interface linkProps {
  href?:string;
  heading?:string;
}
const MoreLink = ({href,heading}:linkProps)=>{
  return (
    <Link 
    className='more__link'
    href={href}>
      {heading}
<BsArrowRight/>
    </Link>
  )
}