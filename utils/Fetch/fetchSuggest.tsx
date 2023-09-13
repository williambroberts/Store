"use client"
type payloadType = {
    options?:any;
    url:string;
}
export const createSuggestion =async (payload:payloadType)=>{
    try {
        const res = await fetch(payload.url,payload.options)
        const data = await res.json()
        return data
    }catch (e){
        return e
    }
}