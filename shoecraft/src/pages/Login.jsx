
import { NavLink, useLocation } from "react-router-dom"
import logo from "../components/img/shoeCraft.png"

import "./css/login.css";
import { useState } from "react";
import { userLogin, userSignup } from "../apiCalls/Authentication";
import { useAuthContext } from "../context/AuthContext";

export const Login=({isLogin})=>{

    const [credentials,setCredentials]=useState({});
    const {loginUser}=useAuthContext();
    const location=useLocation();

    const userInputChangeHandler=(e)=>{
        setCredentials((prev)=>({...prev,[e.target.name]:e.target.value}));
    }

    const loginClickHandler=async(e)=>{
        e.preventDefault();
        if(isLogin){
            const res=await userLogin(credentials);
            if(res.success){
                const from=location?.state?.from?.pathname || "/products"
                loginUser(res.user.name,res.authToken,from);
             

            }
            else{
                alert("something went Wrong");
            }

        }
        else{
            const res=await userSignup(credentials);
            if(res.success){
                loginUser(res.user.name,res.authToken);
            }
            else{
                alert("something went Wrong");
            }

        }

    }

    return(
        <div className="login-container">
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
                        !isLogin && <input type="text" name="name" id="name" value={credentials?.name} onChange={userInputChangeHandler}  required={!isLogin?true:false} /> 
                    }
                    <label htmlFor="email">Email:
                      
                    </label>
                    <input type="email" name="email" id="email" required  value={credentials?.email}  onChange={userInputChangeHandler} />
                    <label htmlFor="password">Password:
                       
                    </label>
                    <input type="password" name="password" id="password" required value={credentials?.password}  onChange={userInputChangeHandler}/>
                    <button className="loginBtn" onClick={loginClickHandler}>{isLogin?"Login":"Signup"}</button>
                    <button className="loginBtn" disabled={isLogin?false:true}>Login As a Guest</button>
                    <p>{isLogin?"Don't have an account":"Already have a account ?"} <NavLink to={isLogin?"../signup":"../login"}>
                        {isLogin?"Sign-up":"Login"}</NavLink></p>
                </form>
            </div>
                
            </div>
     
        </div>
    )
}