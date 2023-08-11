import {render,screen} from "@testing-library/react"

import user from "@testing-library/user-event"
import { Accordion } from "../components/Accordion"
describe("Accordion tests",()=>{
    

    describe("behaviour",()=>{
        it("should open on click",async()=>{
            render(<Accordion
            answer="ans" question="que"
            />)
            user.setup()
            const label = screen.getByRole("button")
            await user.click(label)
            expect(screen.getByText(/ans/i)).toBeInTheDocument()
        })
    })
})
   

