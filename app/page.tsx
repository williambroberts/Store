// "use client"

import { GetStripePrices } from "../Functions/ClientFunctions";
import Animator from "../components/Animator";

import { EmailBanner } from "../components/EmailBanner";
import { Hero } from "../components/Hero";
import { Sale } from "../components/Sale";
import { OurProducts } from "../components/OurProducts";
import { ProductContainer } from "../components/ProductContainer";
import { FirstVisitDialog } from "../components/Dialogs/FirstVisitDialog";

//1687321829



export default async function Home() {
 const prices = await GetStripePrices()
  return (
    <main className={`flex flex-col items-center gap-12
    `}>

      
     
        
      <Animator delay={0.0}>
      <Hero text="E-Commerce Powerhouse."/>
      </Animator>
      
    
     <Animator delay={0.1}>
     <div
      data-id="latestProducts"
      ></div>
     <div className="container__">
     
 <h2 
 
 className="subheading">Latest Products</h2>
 {/* <button
 className="button__"
 >View all <AiOutlineArrowRight/></button> */}
    </div> 
     </Animator>
        <ProductContainer prices={prices}/>
    
      <Animator delay={(prices.length+3)*0.1}>
      <Sale/>
      </Animator>
    <Animator delay={(prices.length+4)*0.1}>
    <OurProducts/>
    </Animator>
    <Animator delay={(prices.length+4)*0.1}>
      <EmailBanner/>
      </Animator>
      <FirstVisitDialog/>
    </main>
  )
}
