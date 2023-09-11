"use client"
import React, { createContext, useContext, useState } from 'react'
type authContextValues = {
    user:any;
    setUser:Function;

}
const authContext = createContext<authContextValues|undefined>(undefined)



export const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [user,setUser]=useState(null)
    
    const authValues = {
        user:user,setUser:setUser
    }
  return (
    <authContext.Provider value={authValues}>
        {children}
    </authContext.Provider>
  )
}

export const useAuth = ()=>{
    const AC = useContext(authContext)
    if (!AC){
        throw new Error("use auth context inside auth provider")
    }
    return AC
}