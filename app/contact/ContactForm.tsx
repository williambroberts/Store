import React from 'react'

export const ContactForm = () => {
  return (
    <section className='contact__form__container'>
        <h3>Message Us</h3>
        <form action="" className='contact__form'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <input type="text" name='name' placeholder='name' required id="name"/>
                <input type="email" name='email' placeholder='email' required id="email"/>
            </div>
            <textarea name="ta" id="ta" cols="30" rows="10" required placeholder='Message'></textarea>
        </form>
    </section>
  )
}
