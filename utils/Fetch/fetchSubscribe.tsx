import { origin } from "../base"

export const fetchSubscribe = async (payload)=>{
    const {email}=payload
    let url = `${origin}/subscribe`
    let options: any = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include', 
        body: JSON.stringify(email)
      };
      
    try{
        let res = await fetch(url,options)
        let data = await res.json()
        return data
    }catch(e){
        return e
    }
}