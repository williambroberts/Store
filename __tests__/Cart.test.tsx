import { render,screen, } from "@testing-library/react"
import { Cart } from "../components/Cart"
import { Counter } from "../components/Counter"
import user from "@testing-library/user-event"
import NotificationProvider from "../contexts/NotificationContext"


describe('cart',()=>{
    describe('rendering',()=>{
        xit('should have count zero initially',()=>{
            render(<Counter/>)
            const zero = screen.getByText(/0/i)
            expect(zero).toBeInTheDocument()
        })
        
    })

    describe("bahaviour",()=>{
        it('should say checkout on hover',async()=>{
            user.setup()
            render(
            <NotificationProvider>
            <Cart/>
            </NotificationProvider>       
            )
            const button = screen.getByRole('button')
            const checkout = screen.queryByText(/checkout/i)
            expect(checkout).toHaveStyle('display:none')
            await user.hover(button)
            expect(checkout).toHaveStyle('display:block')
           
        })
    })
})