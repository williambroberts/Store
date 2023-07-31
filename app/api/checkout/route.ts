import { NextResponse } from "next/server";
import Stripe from "stripe"

export async function POST(request,response) {

    // if (request.method !== 'POST') { return res.sendStatus(405) }
    const body = await request.json()
    console.log(body,"🥩")
    if (body.line_items.length === 0) {

        return new Response('Error1', {
            status: 405,
        });
    }

    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
            apiVersion: '2022-11-15'
        })

        const session = await stripe.checkout.sessions.create({
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            line_items: body.line_items,
            mode: 'payment'
        })
        return NextResponse.json({ session })
    } catch (err) {
        console.log('BROKED')
        console.log(err)
        return new Response('Error2', {
            status: 405,
        });
    }
}