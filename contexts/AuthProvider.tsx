"use client"
import React, { createContext, useContext, useState } from 'react'
type authContextValues = {
    user:any;
    setUser:Function;

}
const authContext = createContext<authContextValues|undefined>(undefined)


function getInitialAuthState(){
    //todo check local storage
    // if local check server for session
    // update accordingly
    let user = null
    try {
        user = localStorage.getItem("isAuth")
        if (user){
            
        }
    }catch(e){

    }
}
export const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [user,setUser]=useState(getInitialAuthState)
    
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