import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import { useNotification } from '../../contexts/NotificationContext'
const NotificationPortal = () => {
    const {notification,setNotification,initialState}=useNotification()

    useEffect(()=>{
        if (notification.open){
            setTimeout(()=>{
                setNotification(initialState)
            },notification.time)
        }
    },[])
  return ReactDom.createPortal(
    <div
    
    className='notification__portal'>
      {notification.type==="alert"? <div className="notification__alert">
       {notification.message}
        </div> :null}

    </div>,document.getElementById("notification")
  )
}

export default NotificationPortal