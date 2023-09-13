

export const fetchSubscribe = async (payload)=>{
    
      
    try{
        let res = await fetch(payload.url,payload.options)
        let data = await res.json()
        return data
    }catch(e){
        return e
    }
}