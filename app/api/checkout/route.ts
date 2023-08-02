import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import 'dotenv/config'
export async function POST (request) {
    const body = await request.json()
   

    const stripe = new Stripe('pk_test_51NJVyhDt6cUT5aTWzdE7ZGjmMfUnNsndqEIqICcXmhw5BSg8avvtugpbVxOeq5P0R0HGO6GI2Fjo0cXUIMzS9cBk00BaFizCBQ',{
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