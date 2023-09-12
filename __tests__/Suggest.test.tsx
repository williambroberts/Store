import { render,screen } from "@testing-library/react"
import { SuggestionCard } from "../components/SuggestionCard"
import user from "@testing-library/user-event"
import * as jestFunction from "../utils/Helpers/jestfn"
import * as jestObject from "../utils/Helpers/jestObj"
import NotificationProvider from "../contexts/NotificationContext"
import { QueryProvider } from "../contexts/QueryProvider"
jest.mock("../utils/Helpers/jestfn",()=>({
    jestClick:jest.fn((x)=>x)
}))
function rendering(){
    render(
        <QueryProvider>
    <NotificationProvider>
        <SuggestionCard/>
    </NotificationProvider>
    </QueryProvider>
    )
    const div = screen.getByTestId('suggestCard')
    const span = screen.getByText(/suggest/i)
    const button =screen.getByTestId('suggestButton')
    return {div,span,button}
}

describe('suggest product component',()=>{
    describe('rendering',()=>{
        // it should have a button in it that can be clicked
        xit('should render a div with a button in it and a span',()=>{
            const {div,button,span}=rendering()
            expect(div).toBeInTheDocument()
            expect(button).toBeInTheDocument()
            expect(span).toBeInTheDocument()
            expect(button).toBeEnabled()
            expect(span).toHaveTextContent(/suggest product/i)
        })
        
    })

    describe('behaviour',()=>{
        //it should open a  portal on click
        xit('should call the jest helper on click once',async()=>{
            const {div}=rendering()
            //const spy = jest.spyOn(jestFunction,'jestClick').mockImplementation(jest.fn());

            user.setup()
            expect(div).toBeInTheDocument()
            await user.click(div)
            expect(jestFunction.jestClick).toHaveBeenCalled()
            
        })
    })
})



