import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

interface storeProps {
cart:any[];
priceObject:any;
modal:boolean;
setModal:Function;
setPriceObject:Function;
AddProductToCart:Function;
ResetCart:Function;
RemoveItemFromCart:Function;
count:number;
ReduceItemQuantityByOne:Function;
total:number;

}
const useStore = create<storeProps>()(
    persist(
    (set,get)=>(
    {
    
    cart:[],
    count:0,
    total:0,
    priceObject:{},     
    modal:false,
   
    setModal:()=>set((state)=>({...state,modal:!state.modal})),
    setPriceObject:(newProduct)=>set((state)=>{
        return {
            ...state,
            priceObject:newProduct
        }
    }),
    AddProductToCart:(newProduct)=>set((state)=>{
        const newCart =[...state.cart]
        let includes = false
        for (let i = 0; i<newCart.length; i++){
            if (newCart[i].id===newProduct.id){
                newCart[i].quantity++
                includes=true
                break
            }
        }
        if (includes===false){
            newCart.push(newProduct)
        }
        let newCount = newCart.reduce((acc,cur)=>{
            return acc+cur.quantity
        },0)
        let newTotal = newCart.reduce((acc,cur)=>{
            return acc + cur.quantity*cur.unit_amount
        },0)
        return {
            ...state,
            cart:newCart,
            count:newCount,
            total:newTotal
        }
    }),
    ResetCart:()=>set((state)=>{
        return {
            ...state,
            cart:[],
            count:0,
            total:0,
        }
    }),
    RemoveItemFromCart:(id)=>set((state)=>{
        let newCart = [...state.cart]
        let index = newCart.findIndex((item)=>item.id===id)
        if (index!==-1){
            newCart.splice(index,1)
        }
        let newCount = newCart.reduce((acc,cur)=>{
            return acc+cur.quantity
        },0)
        let newTotal = newCart.reduceRight((acc,cur)=>{
            return acc+ cur.quantity*cur.unit_amount
        },0)

        return {
            ...state,
            cart:newCart,
            count:newCount,
            total:newTotal,
        }
    }),
    ReduceItemQuantityByOne: (id)=>set((state)=>{
        let newCart = [...state.cart]
        let index = newCart.findIndex((item)=>item.id===id)
        if (index!==-1){
            if(newCart[index].quantity>1){
                newCart[index].quantity--
            }else {
                newCart.splice(index,1)
            }
           
        }
        let newCount=state.count-1
        let newTotal = newCart.reduce((acc,cur)=>{
            return acc+cur.quantity*cur.unit_amount
        },0)
        return {
            ...state,
            cart:newCart,
            count:newCount,
            total:newTotal,
        }
    })

}
    ),
    {
        name: 'cart-storage', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage? localStorage:null), // (optional) by default, 'localStorage' is used
      }
    )
    )

export default useStore