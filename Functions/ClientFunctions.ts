import Stripe from "stripe";

const dotenv =require("dotenv")
const GetStripePrices=async ()=>{
  
  const stripe = new Stripe('sk_test_51NJVyhDt6cUT5aTWuiobYjYMmg9RhpFdJ4b8MhPMuOs2ahr3T41eoR4Q6h8x9506DDpLyK2U89gyHiQ2cxCY5FzT00CFlik7Hj' ?? '',{
      apiVersion:'2022-11-15'
  })
  const prices = await stripe.prices.list({
      // limit: 3,
      active:true,
      created:{gt:1691788125},
      expand: ['data.product']
      
        
      
    },{
      apiKey:'sk_test_51NJVyhDt6cUT5aTWuiobYjYMmg9RhpFdJ4b8MhPMuOs2ahr3T41eoR4Q6h8x9506DDpLyK2U89gyHiQ2cxCY5FzT00CFlik7Hj'
    });
  //console.log(prices.data[0],"") 
  if (prices.data.length===0){
    return null
  } 
  return prices.data
}

export {GetStripePrices}