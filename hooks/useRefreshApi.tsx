import { useEffect, useState } from "react"
import { refreshApi } from "../utils/Fetch/fetchAwake"

export const useRefreshApi =async ()=>{
    //todo implement this   
    const [dummy,setDummy]=useState(null)
    useEffect(()=>{
    refreshApi()
    },[])

    return [dummy,setDummy]
}