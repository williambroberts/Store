import { useCallback } from "react";

const setHtmlOverFlow = useCallback((value)=>{
    let htmlTag = document.querySelector("html")
      if (value){
        htmlTag.style.overflowY="hidden"
      }else if (!value){
        htmlTag.style.overflowY="scroll"
      }
},[value])