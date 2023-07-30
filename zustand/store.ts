import { create } from "zustand";

const useStore = create((set,get)=>(
    {
    cart:[],
    product:{},    
    modal:false,
    setModal:()=>set((state)=>({...state,modal:!state.modal})),
    setProduct:(newProduct)=>set((state)=>{
        return {
            ...state,
            product:newProduct
        }
    }),
    AddProductToCard:(newProduct)=>set((state)=>{
        const newCart =[...state.cart,newProduct]
        return {
            ...state,
            cart:newCart
        }
    }),
    ResetCard:()=>set((state)=>{
        return {
            ...state,
            cart:[]
        }
    }),
    RemoveItemFromCart:()=>set((state)=>{
        //remove every occurance of the item from the cart
        return {
            ...state,
            cart:newCart,
        }
    })
}
))