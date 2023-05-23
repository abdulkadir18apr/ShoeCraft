import { Navigate, useLocation } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext";

export const RequiresAuth=({children})=>{
    let location=useLocation();
    const {isLogin}=useAuthContext();
    return isLogin?children:<Navigate to={"/login"} state={{from:location}}/>
}