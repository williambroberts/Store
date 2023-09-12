import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import 'dotenv/config'

export async function POST (request) {
    const stripe = new Stripe('sk_test_51NJVyhDt6cUT5aTWuiobYjYMmg9RhpFdJ4b8MhPMuOs2ahr3T41eoR4Q6h8x9506DDpLyK2U89gyHiQ2cxCY5FzT00CFlik7Hj',{
        apiVersion:"2022-11-15"
    });
    const body = await request.json()
    const isAuth = body.isAuth
    let coupon = null
    //console.log(isAuth)

    
        if (isAuth.status===200 && isAuth.isAuth){
            //create coupon
             coupon = await stripe.coupons.create({
                percent_off: 10.0,
                
              });
              //console.log(coupon.id,"👍🏻👍🏻")
              
              
              const session = await stripe.checkout.sessions.create({
                line_items:body.line_items,
              mode: 'payment',
              discounts:[{coupon:coupon.id}],
              success_url: `${body.origin}?stripe=success`,
              cancel_url: `${body.origin}?stripe=cancel`
            })
        
            return NextResponse.json(session.url)
        }else{
            
            const session = await stripe.checkout.sessions.create({
                line_items:body.line_items,
              mode: 'payment',
              
              success_url: `${body.origin}?stripe=success`,
              cancel_url: `${body.origin}?stripe=cancel`
            })
        
            return NextResponse.json(session.url)
        }
    }
    

    
   
    
   
