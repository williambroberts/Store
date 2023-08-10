import React from 'react'
import { Hero } from '../../components/Hero'
import { Accordion } from '../../components/Accordion'

const SupportPage = () => {
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
            <div className='faq__list'>
                <Accordion
                answer='You will get a receipt via email after a successful purchase'
                question='Where can I find a receipt for my purchase?'
                />
            </div>
        </section>
    </main>
  )
}

export default SupportPage