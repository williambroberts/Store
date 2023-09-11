"use client"
import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchlogout } from '../../utils/Fetch/fetchLogout'
import { useNotification } from '../../contexts/NotificationContext'
import { useAuth } from '../../contexts/AuthProvider'

export const Logoutbutton = () => {
    const {setNotification}=useNotification()
    const {setUser}=useAuth()
    const logoutMutation = useMutation({
        mutationFn:fetchlogout,
        mutationKey:['logout'],
        onSuccess:(data)=>{
            if (data.success===true){
                setNotification({
                    open:true,time:3000,message:"Logged out",type:"success"
                })
                setUser({email:'',isAuth:false})
            }
        },
        onError:(error)=>{
            console.warn(error)
        }
    })
    //todo error,loading,success,
    function logout(){
        logoutMutation.mutate()
        localStorage.setItem('user','')

        //clear local storage

    }
  return (
   <button onClick={logout} className=''>Logout</button>
  )
}
