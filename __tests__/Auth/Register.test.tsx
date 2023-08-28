import {render,screen} from "@testing-library/react"
import { RegisterForm } from "../../components/Auth/RegisterForm"
import user from "@testing-library/user-event"
import {testWwrapper} from "../../components/Auth/RegisterForm"



afterEach(()=>{
    jest.clearAllMocks()
})
function rendering (){
    render(<RegisterForm/>)
    const email =screen.getByRole('textbox', {
        name: /email/i
      })
      const button = screen.getByRole('button',{name:/register/i})
      const password = screen.getByLabelText('Password')
      const confirmPassword = screen.getByLabelText(/confirm password/i)
      return {password,email,confirmPassword,button}
    
}
describe('register tests',()=>{
    describe('rendering',()=>{
        xit('should render correctly',()=>{
            
            const {password,email,confirmPassword,button}=rendering()
            expect(password).toBeInTheDocument()
            expect(email).toBeInTheDocument()
            expect(confirmPassword).toBeInTheDocument()
            expect(button).toBeInTheDocument()
            expect(button).toBeDisabled()
        })
    })
    describe('behaviour',()=>{
        xit('submit button is enabled after form filled in',async()=>{
            user.setup()
            const spy = jest.spyOn(testWwrapper,'run').mockImplementation()
            const {password,email,confirmPassword,button}=rendering()
            expect(password).toBeInTheDocument()
            expect(email).toBeInTheDocument()
            expect(confirmPassword).toBeInTheDocument()
            expect(button).toBeInTheDocument()
            expect(button).toBeDisabled()
            await user.type(email,'abc@email.com')
            await user.type(password,'abc')
            await user.type(confirmPassword,'abc')
            expect(button).toBeEnabled()
            await user.click(button)
            expect(spy).toHaveBeenCalled()

        })
    })
})