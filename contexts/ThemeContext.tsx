import React, { createContext, useContext } from 'react'
interface ThemeContextValues {

}
const ThemeContext = createContext<ThemeContextValues|null>(null)
const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    const ThemeValues = {

    }
    return (
    <ThemeContext.Provider value={ThemeValues}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export function useTheme(){
    const TC = useContext(ThemeContext)
    if (!TC){
        throw new Error("You must use the context inside its provider")
    }
    return TC
}