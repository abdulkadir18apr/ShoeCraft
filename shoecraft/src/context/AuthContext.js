import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const isToken=localStorage.getItem('auth-token')
    const [isLogin,setisLogin]=useState(isToken?true:false);
    const [userName,setuserName]=useState("");

    const navigate=useNavigate();

    const loginUser=(name,AuthToken,redirectPath="/products")=>{
        console.log(name);
        setuserName(()=>name);
        setisLogin(()=>true);
        localStorage.setItem('auth-token',AuthToken);
        navigate(redirectPath);
    
    }
    const logoutUser=()=>{
        setisLogin(()=>false);
        setuserName(()=>"");
        localStorage.clear();
        navigate("/login");
    }

    return(
        <AuthContext.Provider value={{isLogin,loginUser,logoutUser,userName}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext=()=>useContext(AuthContext);