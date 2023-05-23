export const userLogin=async(credentials)=>{
    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }   
}

export const userSignup=async(credentials)=>{
    try{

        const res=await fetch(`https://shoe-craft-backend.vercel.app/api/auth/signup`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
        })
        const json=await res.json();
        return json;
    }
    catch(err){
        return err
    }   
}