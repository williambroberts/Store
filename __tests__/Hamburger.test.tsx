import user from "@testing-library/user-event"
import { customRender } from "../app/test-utils"
import { Hamburger } from "../components/Hamburger"
import { screen} from "@testing-library/react"





describe("Hambuger tests",()=>{
    describe("rendering",()=>{
        xit('should render 5 prices initially',()=>{
            customRender(<Hamburger/>)
            const productList = screen.findByTestId('products')
            expect(productList).toBeInTheDocument()
            expect(productList).toHaveLength(5)
        })
    })

    describe('bahaviour',()=>{
        xit("previous enabled only after clicking more",async()=>{
           
            customRender(<Hamburger/>)
            user.setup()
            const moreButton  = screen.getByRole('button', {
                name: /more/i
              });
            const previousButton = screen.findByRole('button',{name:/previous/i})
            expect(previousButton).toBeDisabled()  
            await user.click(moreButton)
            expect(previousButton).toBeEnabled()
    })
})

})