import {screen,render, getByTestId} from "@testing-library/react"
import user from "@testing-library/user-event"
import { customRender } from "../app/test-utils"
import ReactColorThemeButton from "../Theme/ThemeButton"
import ReactThemeProvider from "../Theme/ThemeContext"




function renderSetup(){
    render(
        <ReactThemeProvider>
             <ReactColorThemeButton/>
        </ReactThemeProvider>
   
    )
    const themeButton = screen.getByTestId("themeButton")
    const blur = screen.getByTestId("close__")
    const menu = screen.getByTestId("themeMenu")
    return {themeButton,blur,menu}
}
describe('theme button test',()=>{
    describe('rendering',()=>{
        xit('should render the theme button',()=>{
            const {themeButton} = renderSetup()
            expect(themeButton).toBeInTheDocument()
            
        })
        xit('the theme blur should have display none',()=>{
            const {blur} = renderSetup()
            expect(blur).toBeInTheDocument()
            console.log(blur.style.display,"here will 🕊️") 
            expect(blur).toHaveStyle('display:none')
        })
        xit('the menu should have display none',()=>{
            const {menu} = renderSetup()
            expect(menu).toBeInTheDocument()
            console.log(menu.style.display,"here will 🕊️") 
            expect(menu).toHaveStyle('display:none')
        })
    })
    describe('behaviour',()=>{
        it('should open when clicking the theme button once',async()=>{
            user.setup()
            const {themeButton,menu,blur} = renderSetup()
            expect(menu).toHaveStyle('display:none')
            expect(blur).toHaveStyle('display:none')
            await user.click(themeButton)
            expect(blur).toHaveStyle('display:flex')
            expect(menu).toHaveStyle("display:flex")
            const light =  screen.getByRole('button',{name:/light/i})
            expect(light).toBeInTheDocument()
            
        })
        it('should open on theme then close on clicking a theme choice',async()=>{
            user.setup()
            const {themeButton,blur} = renderSetup()
            
            await user.click(themeButton)
            
            const light =  screen.getByRole('button',{name:/light/i})
            expect(light).toBeInTheDocument()
            await user.click(light)
            expect(blur).toHaveStyle('display:none')
        })
    })
})