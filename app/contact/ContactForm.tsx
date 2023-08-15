import React from 'react'

export const ContactForm = () => {
  return (
    <section className='contact__form__container'>
        <h3>Message Us</h3>
        <form action={`https://formsubmit.co/williambrobertsemail@gmail.com`} className='contact__form' method='POST'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
                <input type="text" name='name' placeholder='name' required id="name"/>
                <input type="email" name='email' placeholder='email' required id="email"/>
            </div>
            <textarea name="ta" id="ta" cols={30} rows={10} required placeholder='Message'></textarea>
            <button>Send</button>
        </form>
    </section>
  )
}
