import React from 'react'
import { UserNavbar } from '../components/UserNavbar'

import "./css/user.css";
import { UserProfile } from '../components/UserProfile';
import { UserAddress } from '../components/UserAddress';
import { Outlet } from 'react-router-dom';

export  function User() {
  return (
    <div className='user'>
        <div className="userContainer">
        <UserNavbar/>
        <Outlet/>
        </div>
     
    </div>
  )
}
