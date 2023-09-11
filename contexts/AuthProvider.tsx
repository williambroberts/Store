"use client"
import React, { createContext, useContext, useLayoutEffect, useState } from 'react'
import { fetchIsAuth } from '../utils/Fetch/fetchIsAuth';
type authContextValues = {
    user:any;
    setUser:Function;

}
const authContext = createContext<authContextValues|undefined>(undefined)


const getInitialAuthState = async():Promise<any>=>{
    //todo check local storage
    // if local check server for session
    // update accordingly
    let user = null
    try {
        user = localStorage.getItem("user")
        if (user){
            //todo check database auth/isAuth?
            user = JSON.parse(user)
            if (user.isAuth===true){
                let res = await fetchIsAuth()
                if (!res.ok){
                    localStorage.setItem('user','')
                    return null
                }
                const data = await res.json()
                console.warn(data,"data",res)
                if (data.isAuth!==true){
                    user.isAuth===false

                    localStorage.setItem('user','')
                    return null
                }  
            }
            return user as userType
        }
    }catch(e){

    }
    return user
}
export type userType = {
    email:string;
    isAuth:boolean;
}
export const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [user,setUser]=useState<any>(null)
    useLayoutEffect(()=>{
        getInitialAuthState().then(res=>{
            setUser(res)
        })
    },[])
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