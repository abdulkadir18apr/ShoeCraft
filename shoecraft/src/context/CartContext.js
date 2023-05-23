import { createContext, useContext, useEffect, useState } from "react";
import { fetchCart } from "../apiCalls/products";
import { useAuthContext } from "./AuthContext";

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);
    const {isLogin}=useAuthContext();

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
        if(isLogin){
            const res=await fetchCart();
            if(res.success){
                console.log(res)
                setCart(()=>res.cart.products);
            }
            else{
                alert("cart not fetch")
            }

        }

    }

    useEffect(()=>{
        fetchItemFromCart();
    },[isLogin])

   return(
    <CartContext.Provider value={{cart,addItemToCart,removeItemFromCart,updateItemQuantity}}>
        {children}
    </CartContext.Provider>
   )

}

export const useCartContext=()=>useContext(CartContext);