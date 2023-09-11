import { origin } from "../base"

export const fetchlogout = async ()=>{
    const url = `${origin}/auth/logout`
    const options:any = {
        method:"POST",
        credentials:'include',
        headers:{'Content-Type':'application/json'},
        
    }
    let res = null
    try {
        res = await fetch(url,options)
        const data = await res.json()
        return data
    }catch(e){
        console.log(e)
        return e
    }
}