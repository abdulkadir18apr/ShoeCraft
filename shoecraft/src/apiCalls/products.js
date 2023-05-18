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