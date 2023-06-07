import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAddress } from "../apiCalls/address";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const isToken=localStorage.getItem('auth-token')
    const [isLogin,setisLogin]=useState(isToken?true:false);
    const [addresses,setAddresses]=useState([]);
  

    const navigate=useNavigate();

    const loginUser=(name,email,AuthToken,redirectPath="/products")=>{
        localStorage.setItem('userName',name);
        localStorage.setItem('email',email);
        setisLogin(()=>true);
        localStorage.setItem('auth-token',AuthToken);
        navigate(redirectPath);
    
    }
    const logoutUser=()=>{
        setisLogin(()=>false);
        localStorage.clear();
        navigate("/login");
    }
    const fetchAddressFromServer=async()=>{
        const res=await fetchAddress();
        if(res.success){
            setAddresses(()=>[...res.addresses])
        }
    }
    useEffect(()=>{
        if(isLogin){
            fetchAddressFromServer();
        }
    },[isLogin])
    
    return(
        <AuthContext.Provider value={{isLogin,loginUser,logoutUser,addresses,setAddresses}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext=()=>useContext(AuthContext);