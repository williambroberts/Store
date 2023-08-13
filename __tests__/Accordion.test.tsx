import {screen,render} from "@testing-library/react"
import {customRender} from "../app/test-utils"
import user from "@testing-library/user-event"
import { Accordion } from "../components/Accordion"
describe("Accordion tests",()=>{
    describe("rendering",()=>{
        it('should render a checkbox',()=>{
            render(<Accordion
                answer="ans" question="que"
                />)
            const checkbox = screen.getByLabelText(/que/i)
            expect(checkbox).not.toBeChecked()
        })
        
    })

    describe("behaviour",()=>{
        xit("should open on click",async()=>{
            render(<Accordion
            answer="ans" question="que"
            />)
            user.setup()
            const label = screen.getByRole("button")
            await user.click(label)
            expect(screen.getByText(/ans/i)).toBeInTheDocument()
        })
        it('should be checked after clicking once',async()=>{
            render(<Accordion
            answer="ans" question="que"
            />)
            const checkbox = screen.getByLabelText(/que/i)
            expect(checkbox).not.toBeChecked()
            const label = screen.getByRole("button")
            user.setup()
            await user.click(label)
            expect(checkbox).toBeChecked()
        })
    })
})
   

