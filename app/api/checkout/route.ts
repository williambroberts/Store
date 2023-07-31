import { NextResponse } from "next/server";
import Stripe from "stripe";


export async function POST(req, res) {
  if (req.method === 'POST') {
    const body  = await req.json()
    const j= JSON.stringify(body.line_items)
    console.log(body,req.headers.origin,typeof(body.line_items))
    
    //return NextResponse.json({body})
    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
            apiVersion: '2022-11-15'
          })
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items:[],
        mode: 'payment',
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/canceled`,
      });
      console.log(session,"🤠🥩")
      res.status(201).json({ session })
      //res.redirect(303, session.url);
    } catch (err) {
        console.log(err)
        return new Response(err,{
            status:405
        })
        //res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}