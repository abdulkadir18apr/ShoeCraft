
import { NavLink, useLocation } from "react-router-dom"
import logo from "../components/img/shoeCraft.png"

import "./css/login.css";
import { useState } from "react";
import { userLogin, userSignup } from "../apiCalls/Authentication";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useProductContext } from "../context/ProductContext";
import { Loader } from "../components/Loader";

export const Login=({isLogin})=>{

    const [credentials,setCredentials]=useState({email:"Ali@gmail.com",password:"123456789"});
    const {loginUser}=useAuthContext();
    const {loading,setLoading}=useProductContext();
    const location=useLocation();

    const userInputChangeHandler=(e)=>{
        setCredentials((prev)=>({...prev,[e.target.name]:e.target.value}));
    }

    const loginClickHandler=async(e)=>{
        e.preventDefault();
        setLoading(true);
        if(isLogin){
            const res=await userLogin(credentials);
            if(res.success){
                const from=location?.state?.from?.pathname || "/products"
                loginUser(res.user.name,res.user.email,res.authToken,from);
            }
            else{
                toast("something went Wrong");
            }

        }
        else{
            const res=await userSignup(credentials);
            if(res.success){
                loginUser(res.user.name,res.authToken);
            }
            else{
                toast("something went Wrong");
            }
        }
        setLoading(false);

    }

    return(
        <div className="login-container">
            {loading && <Loader/>}
            <div className="login">
            <div className="loginImage">
                <img src={logo} alt="ShoeCragt Logo" />
            </div>
            <div className="loginForm">
                <h1>{isLogin?"Login":"Sign up"}</h1>
                <form method="POST">
                    {
                        !isLogin && <label htmlFor="name">Name:</label>
                    }
                    {
                        !isLogin && <input type="text" name="name" id="name" value={credentials?.name} onChange={userInputChangeHandler}  required={!isLogin?true:false} disabled={loading} /> 
                    }
                    <label htmlFor="email">Email:
                      
                    </label>
                    <input type="email" name="email" id="email" required  value={credentials?.email}  onChange={userInputChangeHandler} disabled={loading}/>
                    <label htmlFor="password">Password:
                       
                    </label>
                    <input type="password" name="password" id="password" required value={credentials?.password}  onChange={userInputChangeHandler} disabled={loading}/>
                    <button className="loginBtn" onClick={loginClickHandler} disabled={loading}>{isLogin?"Login":"Signup"}</button>
                    <button className="loginBtn" disabled={isLogin?false:true} onClick={loginClickHandler}>Login As a Guest</button>
                    <p>{isLogin?"Don't have an account":"Already have a account ?"} <NavLink to={isLogin?"../signup":"../login"}>
                        {isLogin?"Sign-up":"Login"}</NavLink></p>
                </form>
            </div>
                
            </div>
     
        </div>
    )
}