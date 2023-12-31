import { useEffect, useState } from "react";

export function useLocalStorage(key,initialValue){
    const [value,setValue]=useState(()=>{
        let JSONvalue = localStorage?.getItem(key)
        if (JSONvalue===null){return initialValue}
        return JSON.parse(JSONvalue)
    })


    useEffect(()=>{
        localStorage &&localStorage?.setItem(key,value)
    },[key,value])
    return [value,setValue]
}