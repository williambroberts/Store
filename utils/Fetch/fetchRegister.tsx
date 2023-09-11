import { origin } from "../base";


export type payloadType = {
    email:string;
    password:string;
}
export const fetchRegister = async (payload:payloadType)=>{
    const url = `${origin}/auth/register`
    const options:any = {
        method:'POST',
        credentials:'include',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload)
    }
    let res = null
    let data = null
    try {
        res = await fetch(url,options)
        data = await res.json()
        return data
    }catch(e){
        //console.trace()
        //console.warn(e)
        return e
    }
}