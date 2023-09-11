import { origin } from "../base"

export const fetchIsAuth = async ()=>{
    let url = `${origin}/auth/status`
    const options:any = {
        method:'GET',
        credentials:'include',
    }
    let res = null
    let data = null
   
        res = await fetch(url,options)
        return res
        
}