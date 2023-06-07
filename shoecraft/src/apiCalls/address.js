export const addAddress=async(obj)=>{
    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/user/address`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("auth-token")
            },
            body:JSON.stringify(obj)
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }   
}

export const fetchAddress=async()=>{
    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/user/address`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("auth-token")
            },
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }   
}

export const updateAddress=async(id,Obj)=>{
    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/user/address/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("auth-token")
            },
            body:JSON.stringify(Obj)
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }   
}

export const deleteAddress=async(id)=>{
    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/user/address/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem("auth-token")
            },
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }   
}