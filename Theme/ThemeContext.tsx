"use client"
import React, { createContext,useContext } from 'react'
import useLocalStorage from 'use-local-storage';

interface ReactThemeContextValues {
    theme:string;
    setTheme:Function;
    updateTheme:Function;
    isGreyScale:boolean;
    setIsGreyScale:Function;
}
const ReactThemeContext = createContext<ReactThemeContextValues|undefined>(undefined)

function getInitialTheme(){
  
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
    //console.log(err)
  }
  
   

    return "light"
}

const ReactThemeProvider = ({children}:{children:React.ReactNode}) => {
  //const [theme,setTheme]=useLocalStorage("color-theme","dark")
  const [theme,setTheme]=React.useState(getInitialTheme)
  const [isGreyScale,setIsGreyScale]=useLocalStorage("greyscale",false)
  const updateTheme = (value)=>{
    let newValue = value
    if (value==="system"){
      newValue=getSystemTheme()
    }
    
    setTheme(newValue)
    localStorage && localStorage?.setItem("color-theme",newValue)
  }
  function getSystemTheme(){
    let q = '(prefers-color-scheme: dark)'
    let m = window.matchMedia(q)
    if (m.media!==q ||m.matches){
      return "dark"
    }else if (m.matches===false){
      return "light"
    }
  }
  const ThemeValues={
    updateTheme:updateTheme,
    theme:theme,setTheme:setTheme,
    setIsGreyScale:setIsGreyScale,isGreyScale:isGreyScale,
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
        throw new Error("RTC must be used inside its provider")
    }
    return RTC;
}