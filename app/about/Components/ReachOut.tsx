import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

export const ReachOut = () => {
  return (
    <article className='about__container'>
        <h2 className='subheading'>More</h2>
        <section className='flex flex-col gap-4'>
          <MoreLink href='/' heading='View our products'/>
          <MoreLink href='/' heading='See our FAQ'/>
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