import React from 'react'
import Animator from '../../components/Animator'
import { Hero } from '../../components/Hero'
import { ContactForm } from './ContactForm'
import { EmailBanner } from '../../components/EmailBanner'
import { ContactOptions } from './ContactOptions'

const ContactPage = () => {
  return (
    <main>
        <Animator delay={0}>
    <Hero text='Contact Us'/>
        </Animator>
        <Animator delay={0.1}>
              <ContactOptions/>
            </Animator>
            <Animator delay={0.2}>
                <ContactForm/>
            </Animator>
            <Animator delay={0.3}>

            </Animator>
            <Animator delay={0.4}>
            <EmailBanner/>
            </Animator>
    </main>
  )
}

export default ContactPage