import React from 'react'
import { useNotification } from '../../contexts/NotificationContext'

export const ContactForm = () => {
  const {setNotification}=useNotification()
  function handleSubmit (){
    setNotification({type:"alert",time:3000,open:true,message:"Message sent ✔"})
  }
  return (
    <section className='contact__form__container'>
        <h3>Message Us</h3>
        <form onSubmit={handleSubmit}
        aria-label='contact'
        action={`https://formsubmit.co/williambrobertsemail@gmail.com`} className='contact__form' method='POST'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-4'>
                <input 
                data-testid="ip-name"
                type="text" name='name' placeholder='name' required id="name"/>
                <input 
                data-testid="ip-email"
                type="email" name='email' placeholder='email' required id="email"/>
            </div>
            <textarea 
            data-testid="ip-ta"
            name="ta" id="ta" cols={30} rows={10} required placeholder='Message'></textarea>
            <button>Send</button>
        </form>
    </section>
  )
}
