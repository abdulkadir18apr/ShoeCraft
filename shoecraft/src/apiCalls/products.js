export const getProducts=async()=>{
    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/products`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            }
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }   
}


export const addToWishlist=async(productId)=>{

    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/user/wishlist/${productId}`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("auth-token")
            }
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }  

}
export const deleteFromWishlist=async(productId)=>{

    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/user/wishlist/${productId}`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("auth-token")
            }
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }  
}

export const fetchWishlist=async()=>{

    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/user/wishlist`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("auth-token")
            }
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }  

}


export const addToCart=async(productId)=>{

    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/user/cart/${productId}`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("auth-token")
            }
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }  

}

export const deletetFromCart=async(productId)=>{

    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/user/cart/${productId}`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("auth-token")
            }
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }  

}


export const fetchCart=async()=>{

    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/user/cart`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("auth-token")
            }
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }  

}

export const updateCart=async(productId,action)=>{

    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/user/cart/${productId}/${action}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("auth-token")
            }
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }  

}


