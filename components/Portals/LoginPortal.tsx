import React from 'react'
import ReactDom from 'react-dom'
import {MdClose} from "react-icons/md"
export const LoginPortal = () => {
  return ReactDom.createPortal(
    <div className='auth__portal'>
        <div className='auth__container'>
            <button
            className='auth__container__close'
            ><MdClose/></button>
            
        </div>

    </div>,document.getElementById("portal")
  )
}
