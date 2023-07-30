import { create } from "zustand";
interface storeProps {
cart:any[];
product:any;
modal:boolean;
setModal:Function;
setProduct:Function;
AddProductToCart:Function;
ResetCart:Function;
RemoveItemFromCart:Function;
}
const useStore = create<storeProps>((set)=>(
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
    AddProductToCart:(newProduct)=>set((state)=>{
        const newCart =[...state.cart,newProduct]
        return {
            ...state,
            cart:newCart
        }
    }),
    ResetCart:()=>set((state)=>{
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

export default useStore