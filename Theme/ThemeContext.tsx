"use client"
import React, { createContext,useContext,useState } from 'react'

interface ReactThemeContextValues {
    theme:"light"|"dark";
    setTheme:Function;
    updateTheme:Function;
}
const ReactThemeContext = createContext<ReactThemeContextValues|undefined>(undefined)

function getInitialTheme(){
  console.log("🧧🧧🧧🧧")
  try {
    const persistedThemePreference =  localStorage?.getItem("color-theme")
    const hasPersistedThemePreference = typeof(persistedThemePreference)==="string"
    if (hasPersistedThemePreference){
        // let CC:HTMLElement = document.querySelector('[data-id="CC"]')
        // CC.dataset.theme=persistedThemePreference
        return persistedThemePreference
    }
    const mql = window.matchMedia('(prefers-color-scheme:dark)')
    const hasMediaQueryPrefence = typeof(mql.matches)==="boolean"
    if (hasMediaQueryPrefence){
        return mql.matches? 'dark':'light'
    }
  }catch (err){
    console.log(err)
  }
  
   

    return "light"
}

const ReactThemeProvider = ({children}:{children:React.ReactNode}) => {
  const [theme,setTheme]=useState<any>(()=>{
    
   
    return "light"
  })
  
  const updateTheme = (value)=>{
    setTheme(value)
    localStorage && localStorage?.setItem("color-theme",value)
  }
  
  const ThemeValues={
    updateTheme:updateTheme,
    theme:theme,setTheme:setTheme,
  }
    return (
   <ReactThemeContext.Provider value={ThemeValues}>
    {children}
    </ReactThemeContext.Provider>
  )
}

export default ReactThemeProvider

export function useReactTheme(): ReactThemeContextValues {
    const RTC = useContext(ReactThemeContext)
    if(!RTC){
        throw new Error("useBlogs must be used inside BlogsProvider")
    }
    return RTC;
}