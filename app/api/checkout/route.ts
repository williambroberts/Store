import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST (request) {
    const body = await request.json()
    console.log(body,"🥩")

    const stripe = new Stripe(process.env.STRIPE_SECRET,{
        apiVersion:"2022-11-15"
    });
    
    const session = await stripe.checkout.sessions.create({
        line_items:body.line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000',
      cancel_url: 'http://localhost:3000'
    })

    return NextResponse.json(session.url)
}