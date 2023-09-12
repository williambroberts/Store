import { origin } from "../base"

export const fetchAwake =async ()=>{
    const url = `${origin}`
    try {
        const res = await fetch(url)
        
        return res
    }catch(e){
        return e
    }
    
}

const refreshApi = async ()=>{
    try {
        let refresh = localStorage.getItem('refresh-api')
        let now = new Date().getTime()
        
        if (!refresh){
            let res = await fetchAwake()
            localStorage.setItem('refresh-api',JSON.stringify(now))
        }else {
            let prev = Number(JSON.parse(refresh))

            if ((now-prev)>(60*60*1000)){//1 hour
                localStorage.setItem('refresh-api',JSON.stringify(now))
                let res = await fetchAwake()
            }
        }
        
    }catch(e){
        //
    }
}

export {refreshApi}