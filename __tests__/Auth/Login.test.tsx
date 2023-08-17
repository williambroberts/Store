import { render,screen } from "@testing-library/react"
import { LoginForm } from "../../components/Auth/LoginForm"
import user from "@testing-library/user-event"


describe('login tests',()=>{
    describe('rendering',()=>{
        it('renders correctly',()=>{
            render(<LoginForm/>)
            const button = screen.getByRole('button',{name:/login/i})
            expect(button).toBeInTheDocument()
            expect(button).toBeDisabled()
            const form = screen.getByTestId('auth-form')
            expect(form).toBeInTheDocument()
            const email = screen.getByRole('textbox', {
                name: /email/i
              })
            const password = screen.getByTestId('pw')
            expect(password).toBeInTheDocument()
            expect(email).toBeInTheDocument()
        })
    })
    describe('behaviour',()=>{
        it('submits once after correct inputs and button disabled feature works ',async()=>{
            render(<LoginForm/>)
            user.setup()
            const button = screen.getByRole('button',{name:/login/i})
            expect(button).toBeInTheDocument()
            expect(button).toBeDisabled()
            const email = screen.getByRole('textbox', {
                name: /email/i
              })
            const password = screen.getByTestId('pw')
           await user.type(email,"abc@email.com")
           await user.type(password,"abc123")
           expect(button).toBeEnabled()
            
        })
    })
})