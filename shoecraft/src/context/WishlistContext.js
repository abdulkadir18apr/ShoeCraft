import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { fetchWishlist } from "../apiCalls/products";

export const WishlistContext=createContext();

export const WishlistProvider=({children})=>{
    const [wishlist,setWishlist]=useState([]);
    const {isLogin}=useAuthContext();

    const addProductTowishlist=(product)=>{
        setWishlist((prev)=>[...prev,product])
    }

    const deleteProductFromWishlist=(product)=>{
        const newWishList=wishlist.filter(({_id})=>_id!==product._id)
        setWishlist(()=>[...newWishList]);
    }

    const getWishlistData=async()=>{
        console.log(isLogin)
        if(isLogin){
            const res=await fetchWishlist();
            if(res.success){
                setWishlist(()=>res.wishlist.products);
            }

        }

    }

    useEffect(()=>{
       getWishlistData();
    },[isLogin])

    return(
        <WishlistContext.Provider value={{wishlist,addProductTowishlist,deleteProductFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlistContext=()=>useContext(WishlistContext)