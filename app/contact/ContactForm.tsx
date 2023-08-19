"use client"



export const ContactForm = () => {
  
  return (
    <section 
    data-id="form"
    className='contact__form__container'>
        <h3
       
        >Message Us</h3>
        <form
        
        aria-label='contact'
        action={`https://formsubmit.co/489a8eabf364548a8643846759ca5731`} className='contact__form' method='POST'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-4'>
                <input 
                data-id="name"
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
