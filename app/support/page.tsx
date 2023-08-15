import React from 'react'
import { Hero } from '../../components/Hero'
import { Accordion } from '../../components/Accordion'
import {v4} from "uuid"
import Animator from '../../components/Animator'
import { EmailBanner } from '../../components/EmailBanner'
const SupportPage = () => {
    const questions = ["How do I place an order?",
      "What payment methods do you accept?",
     " How long does shipping take?",
     " Can I track my order?",
      "What is your return policy?",
     " How can I contact customer support?"]
  return (
    <main>
        <Animator delay={0.0}>
        <Hero text='Help &amp; Support'/>
        </Animator>
      <Animator delay={0.1}>     
        <section
        className='faq__'>
            <div className='faq__about'>
                <h2 className='font-semibold text-[var(--t-1)]
                text-xl
                '>Frequently Asked Questions</h2>
                <span
                className='font-normal text-[var(--t-3)]
                text-sm py-4
                '
                >Everything you need to know about products, billing and more.</span>
            </div>
            <div className='faq__list parent'>
                {questions?.map((question)=>
                 
                    <Accordion 
                    key={v4()}
                    question={question}
                    answer='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem accusantium dicta placeat!'
                    />
                 
                )}
            </div>
        </section>
        </Animator>
        <Animator delay={0.2}>
            <EmailBanner/>
        </Animator>
    </main>
  )
}

export default SupportPage