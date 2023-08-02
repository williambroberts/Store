import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import 'dotenv/config'
export async function POST (request) {
    const body = await request.json()
   

    const stripe = new Stripe('sk_test_51NJVyhDt6cUT5aTWuiobYjYMmg9RhpFdJ4b8MhPMuOs2ahr3T41eoR4Q6h8x9506DDpLyK2U89gyHiQ2cxCY5FzT00CFlik7Hj',{
        apiVersion:"2022-11-15"
    });
    
    const session = await stripe.checkout.sessions.create({
        line_items:body.line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel'
    })

    return NextResponse.json(session.url)
}