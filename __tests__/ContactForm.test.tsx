import { render,screen } from "@testing-library/react"
import { ContactForm } from "../app/contact/ContactForm"
import user from "@testing-library/user-event"
import { customRender } from "../app/test-utils"
function CustomRenderForm(){
    // render(<ContactForm/>)
    customRender(<ContactForm/>)
    const form = {
        button:screen.getByRole('button', {
            name: /send/i
          }),
        textarea:screen.getByTestId('ip-ta'),
        name:screen.getByTestId('ip-name'),
        email:screen.getByTestId('ip-email')
    }
    return form
}
function renderForm(){
    // render(<ContactForm/>)
    render(<ContactForm/>)
    const form = {
        button:screen.getByRole('button', {
            name: /send/i
          }),
        textarea:screen.getByTestId('ip-ta'),
        name:screen.getByTestId('ip-name'),
        email:screen.getByTestId('ip-email')
    }
    return form
}

describe('contact form tests',()=>{
    describe('rendering',()=>{
        xit('should render correctly',()=>{
            const form = renderForm()
            expect(form.textarea).toBeInTheDocument()
              expect(form.button).toBeInTheDocument()
              expect(form.email).toBeInTheDocument()
              expect(form.name).toBeInTheDocument()
        })
    })
    describe('behaviour',()=>{
        xit('should submit correctly',async ()=>{
            user.setup()
            const form = renderForm()
            user.click(form.button)
            

        })
    })
})
