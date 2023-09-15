import { NextResponse } from "next/server"
import { origin } from "../../../utils/base"
export async function GET(req:Request){

}

export async function POST(req:Request){
    const email_address = await req.json()
    console.log(email_address)
    let res =null
    try {
        const url = `${origin}/store/email`
    let options: any = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include', 
      body:JSON.stringify({email:email_address})
    };
        res = await fetch(url,options)
        let data = await res.json()
        return NextResponse.json(data,{status:201})
    }catch(e){
        let message = e.message || "Internal server error"
        let status = e.status || 500
        return NextResponse.json({error:message},{status:status})
    }

    return NextResponse.json({email:email_address})
}