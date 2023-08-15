"use client"
import React from 'react'
import Animator from '../../components/Animator'
import { Hero } from '../../components/Hero'
import { EmailBanner } from '../../components/EmailBanner'

const AboutPage = () => {
  return (
    <main
    className='flex flex-col items-center gap-12'>
       <Animator delay={0.0}>
      <Hero text="About Us"/>
      </Animator>
      <Animator delay={0.1}>
    
      </Animator>
      <Animator delay={0.2}>

</Animator>
<Animator delay={0.3}>

</Animator>
      <Animator delay={0.4}>
      <EmailBanner/>
      </Animator>
    </main>
  )
}

export default AboutPage