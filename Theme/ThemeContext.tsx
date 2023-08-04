"use client"
import React, { createContext, useContext, useState } from 'react'
interface ThemeContextValues {
    theme:string;
    setTheme:Function;
    // getInitialTheme:()=>"light"|"dark"|string;
    updateTheme:Function;
    getInitialTheme:Function;
}

function getInitialTheme(){
    
    try {
        let doc = window.document
       
      const persistedThemePreference =  localStorage.getItem("color-theme")
      const hasPersistedThemePreference = typeof(persistedThemePreference)==="string"
      if (hasPersistedThemePreference){
           
          return persistedThemePreference
      }
      const mql = window.matchMedia('(prefers-color-scheme:dark)')
      const hasMediaQueryPrefence = typeof(mql.matches)==="boolean"
      if (hasMediaQueryPrefence){
            let theme = mql.matches? 'dark':'light'
            
          return theme
      }
    }catch (err){
      console.log(err)
    }
    
     
  
      return "light"
  }
const ThemeContext = createContext<ThemeContextValues|null>(null)
const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    const [theme,setTheme]=useState<"light"|"dark"|string>(getInitialTheme)

    const updateTheme = ()=>{
        if (theme==="light"){
            setTheme("dark")
            window.localStorage.setItem("color-theme","dark")
        }else if (theme==="dark"){
            setTheme("light")
            window.localStorage.setItem("color-theme","light")
        }
        
       
      }
    const ThemeValues = {
        getInitialTheme:getInitialTheme,
        theme:theme,setTheme:setTheme,
        updateTheme:updateTheme,
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