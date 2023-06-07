import { createContext, useContext, useEffect, useState } from "react";
import { fetchCart } from "../apiCalls/products";
import { useAuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import { useProductContext } from "./ProductContext";

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);
    const {isLogin}=useAuthContext();
    const {loading,setLoading}=useProductContext();

    const addItemToCart=(item)=>{
        if(!cart.find((cartProduct)=>cartProduct.product._id.toString()===item._id)){
            setCart((prev)=>[...prev,{product:item,quantity:1}])
        }
        else{
            const updatedCart=cart.map((cartProduct)=>cartProduct.product._id.toString()===item._id?{product:cartProduct.product,quantity:cartProduct.quantity+1}:cartProduct);
            setCart(()=>[...updatedCart]);
        }
    }
    const removeItemFromCart=(id)=>{
        const updatedCart=cart.filter((cartProduct)=>cartProduct.product._id.toString()!==id);
        setCart(updatedCart);
    }

    const updateItemQuantity=(id,action)=>{
        const updatedCart=cart.map((cartProduct=>cartProduct.product._id===id?{...cartProduct,quantity:(action==='increment')?cartProduct.quantity+1:cartProduct.quantity-1}:{...cartProduct}));
        console.log(updatedCart);
        setCart(()=>[...updatedCart])
    }

    const fetchItemFromCart=async()=>{
        setLoading(true);
        if(isLogin){
            const res=await fetchCart();
            if(res.success){
                
                setCart(()=>res.cart.products);
            }
            else{
                toast("cart not fetch")
            }
        }
        setLoading(false);

    }

    useEffect(()=>{
        if(isLogin){
            fetchItemFromCart();
        }
       
    },[isLogin])

   return(
    <CartContext.Provider value={{cart,addItemToCart,removeItemFromCart,updateItemQuantity}}>
        {children}
    </CartContext.Provider>
   )

}

export const useCartContext=()=>useContext(CartContext);