import { useEffect, useState } from "react"


const useHtmlOverflow = (value)=>{

    console.log("useHtmloverFLow")
    const [dummy,setDummy]=useState(null)
    useEffect(()=>{
        let htmlTag = document.querySelector("html")
        if (value){
          htmlTag.style.overflowY="hidden"
        }else if (!value){
          htmlTag.style.overflowY="scroll"
        }
       },[value])

    return [dummy,setDummy]
}

export {useHtmlOverflow}