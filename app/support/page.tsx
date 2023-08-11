import React from 'react'
import { Hero } from '../../components/Hero'
import { Accordion } from '../../components/Accordion'
import {v4} from "uuid"
const SupportPage = () => {
    const questions = ["How do I place an order?",
      "What payment methods do you accept?",
     " How long does shipping take?",
     " Can I track my order?",
      "What is your return policy?",
     " How can I contact customer support?"]
  return (
    <main>
        <Hero text='Help &amp; Support'/>
        <section
        className='faq__'>
            <div className='faq__about'>
                <h2 className='font-semibold text-[var(--t-1)]
                text-xl
                '>Frequently Asked Questions</h2>
                <span
                className='font-normal text-[var(--t-3)]
                text-sm
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
    </main>
  )
}

export default SupportPage