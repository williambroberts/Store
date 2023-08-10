import React from 'react'
import { Hero } from '../../components/Hero'

const SupportPage = () => {
  return (
    <main>
        <Hero text='Help &apos; Support'/>
        <section
        className='faq__'>
            <div className='faq__about'>
                <h2 className='text-[var(--t-1)]'>Frequently Asked Questions</h2>
                <span>Everything you need to know about products, billing and more.</span>
            </div>
            <div className='faq__list'>

            </div>
        </section>
    </main>
  )
}

export default SupportPage