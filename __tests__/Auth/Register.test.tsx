import {render,screen} from "@testing-library/react"
import { RegisterForm } from "../../components/Auth/RegisterForm"

afterEach(()=>{
    jest.clearAllMocks()
})
function rendering (){
    render(<RegisterForm/>)
    
}
describe('register tests',()=>{
    describe('rendering',()=>{
        it('should render correctly',()=>{

        })
    })
})