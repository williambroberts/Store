"use client"
import {  useSearchParams } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react'
import useStore from '../zustand/store';
interface NotificationInterface {
    notificationHandler:any;
    notification:any;
    initialState:any;
    setNotification:(newNotification:any)=>void;
}
type ChildrenProp = {
    children:React.ReactNode | any;
}

const initialState =  {
    type:"",
    message:"",
    open:false,
    time:3000,

}

const NotificationContext = createContext<NotificationInterface|undefined>(undefined)
const NotificationProvider = ({children}:ChildrenProp) => {
    
    const {ResetCart}=useStore()
    const searchParams = useSearchParams()
    const [notification,setNotification]=useState(initialState)
       

    useEffect(()=>{
        const stripe  = searchParams.get("stripe")
        if (stripe==="success"|| stripe==="cancel"){
           const newUrl = `${window.location.origin}`
           window.history.replaceState(null,'',newUrl)
            ResetCart()
            //🅰️ notifcation cancel success
            if (stripe==="success"){
                notificationHandler("success","Thank you for your purchase",true
                ,3000
                )
            }else {
                notificationHandler("cancel","Purchase cancelled",true
                ,3000
                )
            }
            
        }
    },[])

    const notificationHandler = (type="alert",message="",open=false,time=3000)=>{
        setNotification({
            time:time,message:message,open:open,type:type
        })
    }

    const NotificationValue = {
        notification:notification,
        setNotification:setNotification,
        notificationHandler:notificationHandler,
        initialState:initialState,
    }

  return (
   <NotificationContext.Provider value={NotificationValue}>
    {children}
   </NotificationContext.Provider>
  )
}

export default NotificationProvider

export function useNotification(): NotificationInterface {
    const NC = useContext(NotificationContext)
    if(!NC){
        throw new Error("useNotifications must be used inside NotificationPRovider")
    }
    return NC;
}