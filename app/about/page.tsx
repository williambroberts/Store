"use client"
import React from 'react'
import Animator from '../../components/Animator'
import { Hero } from '../../components/Hero'
import { EmailBanner } from '../../components/EmailBanner'
import { About } from './Components/About'
import { Reviews } from './Components/Reviews'
import { ReachOut } from './Components/ReachOut'

const AboutPage = () => {
  return (
    <main
    className='flex flex-col items-center gap-12'>
       <Animator delay={0.0}>
      <Hero text="About Us"/>
      </Animator>
      <Animator delay={0.1}>
        <About/>
      </Animator>
      <Animator delay={0.2}>
        <Reviews/>
</Animator>
<Animator delay={0.3}>
    <ReachOut/>
</Animator>
      <Animator delay={0.4}>
      <EmailBanner/>
      </Animator>
    </main>
  )
}

export default AboutPage